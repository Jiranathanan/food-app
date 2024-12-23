// module.exports = function (api) {
//     api.cache(true);
//     return {
//         presets: ["babel-preset-expo"],
//         plugins: ["react-native-reanimated/plugin"],
//     }
// }

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            "react-native-reanimated/plugin", // Keep this existing plugin
            ["module:react-native-dotenv", { // Add the react-native-dotenv plugin
                moduleName: "@env",
                path: ".env",
                blocklist: null,
                allowlist: null,
                safe: false,
                allowUndefined: true,
            }],
        ],
    };
};
