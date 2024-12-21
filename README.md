## start the project
```
    npx create-expo-app food --template blank
```

### React Navigation v4 Installation
#### Install React Navigation
```
    npm install react-navigation@4.4.4 --legacy-peer-deps
```

#### Install Dependencies
```
    npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view -- --legacy-peer-deps
```

#### Install React Navigation Stack
```
    npm install react-navigation-stack @react-native-community/masked-view --legacy-peer-deps
```

#### Find the babel.config.js file and add the following line to the return:
```
    plugins: ["react-native-reanimated/plugin"],
```

##### Updated babel.config.js:
```
    module.exports = function (api) {
        api.cache(true);
        return {
            presets: ["babel-preset-expo"],
            plugins: ["react-native-reanimated/plugin"],
        }
    }
```
##### Since I can't find the babel.config.js file, so I decide to create it