# Storybook Patternfly NG Web Component Demo

This is currently an experimental project based on the following example:
https://github.com/storybooks/storybook/tree/269-angular-support/examples/angular-cli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.0.

**Note**: All Angular CLI commands currently run with `npm run` prefixed in this repo, i.e. instead of `ng build` you can run:
```
npm run build
```

and to generate components:
```
npm run ng generate component hello
```

## Web Components with Skate Js


## Storybook UI Development

How to use Storybook locally:
```
npm i
npm run storybook
```

How to deploy storybook to github pages in your fork:
```
npm run build-storybook
npm run storybook:deploy
```

To deploy Storybook to a remote other than `origin`, pass a `--remote` flag to `npm run storybook:deploy`.
For example, to deploy to your `upstream` remote:
```
npm run storybook:deploy -- --remote=upstream
```
To deploy Storybook to a target branch and serve with rawgit instead of gh-pages, pass `--branch` flag
to `npm run storybook:deploy`.
For example, to deploy to `feature-branch` target:
```
npm run storybook:deploy -- --branch=feature-branch
```