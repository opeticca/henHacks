module.exports = {
    env: {
        es2022: true,
        node: true,
    },
    extends: ["eslint:recommended"],
    root: true,
    overrides: [
        {
            files: ["test/**/*"],
            env: {
                jest: true,
            },
        },
    ],
    ignorePatterns: [".eslintrc.js"],
    rules: {
    },
};
