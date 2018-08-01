module.exports = {
    "env": {
        "browser": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 2018,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-uses-react": "error",   
        "react/jsx-uses-vars": "error",
        "indent": [
            "error",
            2,
            { "SwitchCase": 1 }
        ],
        "no-console": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};