# Memory Game React 🚀

Classic Memory game implemented with [React](https://es.reactjs.org/docs/getting-started.html).

To solve the problem posed by the game and being such a small application, some over-engineering may have been done. A slightly more complex solution has been given to be able to make use of different hooks and in this way show their operation. Also added a dependency (__flip-card-react__ for card animations). Application is **100% responsive** and can be displayed correctly on mobile devices, tablets and computer screens.

Several development dependencies have been added to facilitate good practices when scaling the application:

- __react-app-rewired__: used to overwrite the Webpack configuration and make use of the _alias_
- __path__: used by the _config-overrides.js_ file to resolve routes
- __@testing-library/react-hooks__: quite useful when testing __hooks__
- __lint-staged__: it is used by _husky_ to be able to execute commands
- __husky__: used to execute commands before a _git commit_ or a _git push_, in this case it is used so that developers cannot commit if they do not pass all the tests or if ESLint gives an error

![Memory Game](https://github.com/megabass00/memory-game/blob/main/screenshot.gif?raw=true)  

Enjoy 🎮🕹!!!