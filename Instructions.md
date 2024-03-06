Typescript basic commands

To generate the package.json file type the next command.

```npm init -y```

To install typescript run the next command

``` npm install typescript --save-dev```

to check in your project the version of typescript

```npx tsc --version```

to check a .js file add as the first line

``` @ts-check```

to compile the .ts file 
``` tsc file.ts```

to compile to a speific folder
``` tsc file.ts --outDir dist```

to compile to a specific version of ES
```tsc file.ts --target es6```

to generate the config file

```npx tsc --init```

to watch changes in the project

```npx tsc --watch```

to run ts code inside node and not only js como dependencia de desarrollo

`npm install -D ts-node`

to run a ts file

`npx ts-node dir/file.ts`




