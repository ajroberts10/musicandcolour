module.exports = {
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["import", "prettier", "mocha"],
    "rules": {
        "prettier/prettier": ["error", { "singleQuote": true, "printWidth": 120, "tabWidth": 4 }],
        "indent": ["error", 4],
        "import/no-dynamic-require": ["off"],
        "no-param-reassign": ["error", { "props": false }],
        "mocha/no-exclusive-tests": "error"
    },
    "env": {
        "mocha": true
    }
};
