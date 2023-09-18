import { Component } from '@angular/core';
import { User } from "../utility.models";
import { HttpService } from "../http.service";
import { UserUpdateValidation } from "../utility.validations";
import { map } from "rxjs";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  userData: User | null = null;
  passwordsTypes: Record<string, string> = {
    "cp": "password",
    "np": "password",
    "np2": "password",
  };
  passwordData: Record<string, string> = {
    "password": "", "newPassword": "", "passwordConfirm": ""
  };
  errorMessage: Record<string, string> = {
    "name": "", "signature": "", "about": "", "password": "", "newPassword": "", "passwordConfirm": ""
  };
  deleteAccountConfirmed: boolean = false;
  config = {
    url: '/api/files/new/single/avatar',
    maxFiles: 1
  };

  constructor(
    private _httpService: HttpService
  ) {
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this._httpService.getCurrentUser().pipe(map(data => this.userData = data)).subscribe();
  }

  togglePasswordVisibility(k: string) {
    this.passwordsTypes[k] = this.passwordsTypes[k] == "password" ? "text" : "password";
  }

  saveChanges(): void {
    if (this.userData == null) {
      return;
    }
    const errors: Map<string, string> = UserUpdateValidation.checkInfo(this.userData);
    if (errors.size > 0) {
      errors.forEach((value: string, key: string) => {
        this.errorMessage[key] = value;
      });
    } else {
      this._httpService.updateCurrentUserInfo(this.userData).subscribe();
    }
  }

  processUpdatePasswordEvent(k: string, v: string) {
    this.passwordData[k] = v;
  }

  updatePassword(): void {
    // clear error messages
    for (const key in this.errorMessage) {
      this.errorMessage[key] = "";
    }
    // handle error
    const errors: Map<string, string> = UserUpdateValidation.checkPassword(this.passwordData);
    if (errors.size > 0) {
      errors.forEach((value: string, key: string) => {
        this.errorMessage[key] = value;
      });
    } else {
      this._httpService.updateCurrentUserPassword(this.passwordData).subscribe(() => {
        for (const key in this.passwordData) {
          this.passwordData[key] = "";
        }
      });
    }
  }

  deleteUser() {
    this._httpService.deleteUser().subscribe(() => {
        this._httpService.logoffUser();
        this._httpService.gotoHomePage();
      }
    );
  }
}