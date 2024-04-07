# How to setup a NodeJS mono repo with npm workspaces and typescript

## Set up the project

1. Make a project folder and initialize node project.

   > npm init -y

2. Add typescript

   > npm install --save-dev typescript

3. Initialize typescript

   > npx tsc --init

4. Update and add typescript configurations

   - tsconfig.base.json
   - tsconfig.dom.json
   - tsconfig.lib.json

   Refer to the link below for tsconfig.json from [totaltypescript](https://www.totaltypescript.com/tsconfig-cheat-sheet)

## Optional packages

1. [commitizen](https://github.com/commitizen/cz-cli)

   - install
     > npm install --save-dev commitizen  
     > npx commitizen init cz-conventional-changelog --save-dev --save-exact
   - update package.json scripts

     > ```json
     > ...
     > "scripts": {
     >    ...
     >    "git:commit": "cz"
     > }
     > ```

   - run script

     > npm run git:commit

## Adding a web application workspace

1. Add NextJS workspace for the application

   > npm init -w apps/nextjs

2. Add NextJS dependencies

   > npm install next@latest react@latest react-dom@latest
   > npm install --save-dev @types/react

3. Add an empty tsconfig.json inside the generated app/nextjs directory
4. Update package.json script inside the generated app/nextjs directory

   > ```json
   >  ...
   > "scripts": {
   >    ...
   >    "dev": "next dev",
   >    "build": "next build",
   >    "start": "next start",
   >    "lint": "next lint"
   > }
   >
   > ```

5. Update the root package.json scripts

   > ```json
   >  ...
   > "scripts": {
   >    ...
   >    "dev:apps:nextjs": "npm run dev --workspace nextjs --if-present",
   >    "build:apps:nextjs": "npm run build --workspace nextjs --if-present",
   >    "start:apps:nextjs": "next start --workspace nextjs --if-present",
   >    "lint:apps:nextjs": "next lint --workspace nextjs --if-present"
   > }
   > ```

6. Run dev to update the empty tsconfig.json
   > npm run dev:apps:nextjs
