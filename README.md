# my-5th-firebase

## Node Version

```
$ nvm use lts/erbium
Now using node v12.22.10 (npm v6.14.16)
$ node -v
v12.22.10
$ node -v > .nvmrc
```

## Web App

```bash
npx create-nuxt-app MyApp

create-nuxt-app v4.0.0
✨  Generating Nuxt.js project in MyApp
? Project name: MyApp
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Bootstrap Vue
? Nuxt.js modules: Progressive Web App (PWA)
? Linting tools: ESLint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```

```
cd MyApp
node -v
npm run dev
```

## Create New Firebase Project

Firebase Console
 -> New Project
   -> my-5th-firebase
 -> Add WebApp
   -> MyWebApp 
      hostingはOFF
      -> アプリを登録
      -> コンソールに進む

## Push to GitHub
```
cd ..
git init
git remote add origin https://github.com/marzg510/my-5th-firebase.git
git branch -M main
git push -u origin main
```

## Install firebase

### edit package.json

```
  "dependencies": {
...
    "@nuxtjs/firebase": "^8.2.2",
    "firebase": "^8.9.1",
    "firebase-functions": "^3.11.0",
...
  }
```

```bash
$ npm install --save-dev firebase-tools
$ npm install

```

## init firebase

```bash
$ npx firebase login
$ npx firebase init
...
  * You are currently outside your home directory

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. 
Functions: Configure a Cloud Functions directory and its files, Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: my-5th-firebase (my-5th-firebase)
i  Using project my-5th-firebase (my-5th-firebase)

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes

added 233 packages, and audited 234 packages in 17s

11 packages are looking for funding
  run `npm fund` for details

2 low severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? dist
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
✔  Wrote public/index.html


```


## 確認&デプロイ

```
npm run dev
```

```bash
$ npm run generate
$ npx firebase deploy
...
Project Console: https://console.firebase.google.com/project/my-5th-firebase/overview
Hosting URL: https://my-5th-firebase.web.app
```

## デプロイ

```
npm run generate
firebase deploy
```