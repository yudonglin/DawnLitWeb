import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
  Blog,
  BlogComment,
  Chat,
  DiscussionDummy,
  Message,
  Post,
  PostComment,
  User,
  UserDummy
} from "./utility.models";
import { TokenService } from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _token: TokenService,
  ) {
  }

  // get file
  getFile(userId: number, type: string): Observable<any> {
    return this._http.get<any>(`/api/files/get/single/${userId}/${type}`);
  }

  // get the ip of the client
  getIpInfo(): Observable<any> {
    return this._http.get<any>('https://jsonip.com');
  }

  // ensure no user is login already
  ensureNotLoginAlready(): void {
    if (this._token.isStillValid()) {
      this.logoffUser();
    }
  }

  // get current user data
  getCurrentUser(): Observable<User> {
    if (this._token.isStillValid()) {
      return this._http.get<User>("/api/users/current");
    }
    return new Observable<User>();
  }

  // navigate back to home page
  gotoHomePage(): void {
    this._router.navigate(['/']).then(() => {
    });
  }

  // register a new user
  registerUser(data: Record<string, string>) {
    return this._http.post("/api/users/new", data);
  }

  // get the information of a user
  getUser(id: number) {
    return this._http.get<User>(`/api/users/get/${id}`);
  }

  // get the information of a user
  getUsers(num: number) {
    return this._http.get<Array<User>>(`/api/users/get/list/${num}`);
  }

  // update the current user's information
  updateCurrentUserInfo(data: User) {
    return this._http.put(`/api/users/update/info`, data);
  }

  // update the current user's password
  updateCurrentUserPassword(data: Record<string, string>) {
    return this._http.put(`/api/users/update/password`, data);
  }

  // login the user
  loginUser(data: any) {
    return this._http.post("/api/users/login", data);
  }

  // log off current user
  logoffUser(): Observable<Object> {
    localStorage.clear();
    return new Observable<Object>();
  }

  // delete current user's account
  deleteUser() {
    return this._http.delete("/api/users/delete");
  }

  // send friend request
  sendFriendRequest(targetUser: User) {
    return this._http.post("/api/users/connect/request", UserDummy(targetUser));
  }

  // accept friend request
  acceptFriendRequest(targetUser: User) {
    return this._http.post("/api/users/connect/accept", UserDummy(targetUser));
  }

  // reject friend request
  rejectFriendRequest(targetUser: User) {
    return this._http.post("/api/users/connect/reject", UserDummy(targetUser));
  }

  // remove friend
  removeFriend(targetUser: User) {
    return this._http.post("/api/users/connect/remove", UserDummy(targetUser));
  }


  // create a new post
  createPost(data: Post) {
    return this._http.post(`/api/posts/new`, data);
  }

  // get post with specific id
  getPost(id: number): Observable<Post> {
    return this._http.get<Post>(`/api/posts/get/${id}`);
  }

  // get a list of posts
  getPosts(num: number, userId: number = 0): Observable<Array<Post>> {
    return userId <= 0
      ? this._http.get<Array<Post>>(`/api/posts/get/list/${num}`)
      : this._http.get<Array<Post>>(`/api/posts/get/list/${userId}/${num}`);
  }

  // create a new comment for post
  createPostComment(data: PostComment) {
    return this._http.post(`/api/comments/post/new`, data);
  }

  // get post comment with specific id
  getPostComment(id: number): Observable<PostComment> {
    return this._http.get<PostComment>(`/api/comments/post/get/${id}`);
  }

  // like a post
  likePost(theContent: Post) {
    return this._http.post(`/api/posts/like`, DiscussionDummy(theContent));
  }

  // update a post
  updatePost(theContent: Post) {
    return this._http.put(`/api/posts/update`, theContent);
  }

  // remove a post
  deletePost(theContent: Post) {
    return this._http.delete(`/api/posts/delete/${theContent.id}`);
  }

  // like a post comment
  likePostComment(theComment: PostComment) {
    return this._http.post(`/api/comments/post/like`, DiscussionDummy(theComment));
  }

  // create a new Blog
  createBlog(data: Blog) {
    return this._http.post("/api/blogs/new", data);
  }

  // get a blog
  getBlog(id: number): Observable<Blog> {
    return this._http.get<Blog>(`/api/blogs/get/${id}`);
  }

  // update a blog
  updateBlog(theBlog: Blog) {
    return this._http.put(`/api/blogs/update`, theBlog);
  }

  // remove a blog
  deleteBlog(theBlog: Blog) {
    return this._http.delete(`/api/blogs/delete/${theBlog.id}`);
  }

  // create announcements from admin
  getAnnouncements(num: number): Observable<Array<Blog>> {
    return this._http.get<Array<Blog>>(`/api/blogs/get/announcements/${num}`);
  }

  // create a new comment for blog
  createBlogComment(data: BlogComment) {
    return this._http.post(`/api/comments/blog/new`, data);
  }

  // like a blog comment
  likeBlogComment(theComment: BlogComment) {
    return this._http.post(`/api/comments/blog/like`, DiscussionDummy(theComment));
  }

  // start a new chat
  newChat(fromUser: User, toUser: User) {
    return this._http.post("/api/chats/new", {owner: UserDummy(fromUser), target: UserDummy(toUser)} as Chat);
  }

  // get all the chats of current user
  getCurrentUserChats(): Observable<Array<Chat>> {
    return this._http.get<Array<Chat>>("/api/chats/get/list");
  }

  // remove chat
  removeChat(id: number) {
    return this._http.delete(`/api/chats/delete/${id}`);
  }

  // new message
  newMessage(message: Message) {
    return this._http.post("/api/messages/new", message);
  }
}
