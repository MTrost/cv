A boilerplate to quickly start a new project using Next.js and TypeScript. It basically includes the following stack:

- [Next.JS](https://nextjs.org/)
- TypeScript
- Prettier (with stylelint & tslint prettier extension and an opionated rule configuration)

To simplify CSS usage it uses [@zeit/next-css](https://github.com/zeit/next-plugins/tree/master/packages/next-css) with CSS Modules enabled. To compile TypeScript files with babel it uses [@zeit/next-typescript](https://github.com/zeit/next-plugins/tree/master/packages/next-typescript)

It also contains a configuration to debug the application in VSCode server side (_Debug server side_) and client side (_Debug with chrome_). To make server side debugging work you have to run the application with _yarn dev:debug_. To make client side debugging work you have to install the [Debugger for Chrome](https://github.com/Microsoft/vscode-chrome-debug) extension.
