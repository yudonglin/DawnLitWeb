# 👋 Hello there!

This repo contains the source code for **Dawn Lit**, a social platform for people who have an interest in technology to
connect and share thoughts.

<img src="/View/src/favicon.ico" alt="Dawn Lit" style="width:20%; height:20%; display: block; margin-left: auto; margin-right: auto;" />

Dawn Lit aims to provide a platform that enables users to discuss and share their thoughts anonymously, in contrast to
other uncommon career websites. We sincerely value the privacy of our users. The only sensitive data that this website
will gather is the login IP, which will exclusively be used for security purposes. We will never acquire or distribute
your personal information, contrary to the practices of numerous technology companies and social platforms in the
present era.

Dawn Lit is not only a platform built for individuals, but also a platform built by individuals. We are always looking
forward to seeing newcomers contribute to this project. You can obtain additional details regarding the contribution by
navigating to the end.

## 🔗Live Demo:

https://dawnlit.com

**Warning**: The website is still in the early development phase, and we will perform data deletion occasionally due to
technical limitations. We do not recommend that individuals divulge any confidential information at this stage due to
the potential security apprehension.

# 🖥️ Technology specifications

##### The website is currently designed to be hosted on:

<img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg" alt="Ubuntu" style="width:10%; height:10%" />

`Ubuntu 22.04`

##### Frontend:

<img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular" style="width:10%; height:10%" /><img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" style="width:10%; height:10%" /><img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" style="width:8%; height:8%" />

`Angular 16`, `Bootstrap 5`, `Typescript`

##### Backend:

<img src="https://avatars.githubusercontent.com/u/9141961?s=200&v=4" alt=".NET Core" style="width:10%; height:10%" /><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/120px-Postgresql_elephant.svg.png" alt="PostgreSQL" style="width:10%; height:10%" />

`.NET Core 8`, `PostgreSQL 16`

# ⌨️ Useful commands:

#### Update Dotnet ef tool

`dotnet tool update --global dotnet-ef`

#### Migrate the models:

`dotnet ef migrations add TheMigration`

#### Update the models in PostgreSQL:

`dotnet ef database update`

#### Run the dotnet backend:

`dotnet watch run`

#### Run the angular frontend:

`ng serve --watch`

### Ubuntu specific commands:

##### Grant everyone the privilege to modify the repo directory:

`sudo chmod -R 777 DawnLitWeb/`

##### Connect to database (main):

`sudo -i -u postgres psql main`

##### Create Super User:

`sudo -i -u postgres psql`

`CREATE USER root WITH SUPERUSER PASSWORD 'test_password';`

##### Create database (main):

`sudo -i -u postgres psql`

`CREATE DATABASE main;`

##### Drop database (main):

`sudo -i -u postgres psql`

`DROP DATABASE main;`

##### Setup dotnet-ef

`export PATH="$PATH:/home/$USER/.dotnet/tools"`

# ✈️ How to setup a development environment using docker

### Build and run front-end application:

```
cd ./View/

# build front-end application
docker build . -t angular-app

# run front-end application image with port forwarding from 4200 to 80
docker run --name angular-app -d -p 4200:80 angular-app
```

### Build and run back-end application:

```
# build back-end application
docker build . -t dotnet-app

# run back-end application image with port forwarding from 8080 to 7061
docker run --name dotnet-app -d -p 7061:8080 dotnet-app
```

# 💪 Want to contribute?

I understand this is a challenging time for everyone, so I welcome anyone with an interest in web development to
contribute to this project. This is meant to be a place where everyone can try out new ideas and strengthen their
skills. You should find some tasks that need to be completed on the issues page, and I would be happy to do some code
reviews when needed.

If you don't know where to start, I highly recommend you watch this video from Patrick
God: https://www.youtube.com/watch?v=dtthbiP3SE0. I have a great appreciation for his tutorials and have gained a
significant amount of knowledge, even after completing coding bootcamp with a top grade.

If you have any further questions, or you just want to chat, you can find my contact information on my profile page. The
most ideal way to reach me is through Discord.

That's it, please enjoy!
