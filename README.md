# How to setup a NodeJS mono repo with npm workspaces and typescript

## Set up the project

1. Make a project folder and initialize node project.

   > npm init -y

2. Add typescript

   > npm install --save-dev typescript

3. Initialize typescript

   > npx nx tsc --init

4. Add update and add typescript configurations

   - tsconfig.base.json
   - tsconfig.dom.json
   - tsconfig.lib.json

   Refer to the link below for tsconfig.json from [totaltypescript](https://www.totaltypescript.com/tsconfig-cheat-sheet)

## Optional packages

1. commitizen

   > npm install --save-dev commitizen

   > ...  
   > "scripts": {  
   >  ...  
   >  "git:commit": "cz"  
   > }
