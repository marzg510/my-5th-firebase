# my-5th-firebase

## Node Version

```
$ node -v
v16.13.1
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
? Testing framework: Jest
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
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

## Install firebase

```
cd MyApp
npm install firebase
npm install @nuxtjs/firebase --save

```

## Push to GitHub
```
git remote add origin https://github.com/marzg510/my-5th-firebase.git
git branch -M main
git push -u origin main
```
