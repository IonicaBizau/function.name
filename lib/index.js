"use strict";

const noop6 = require("noop6");

(function () {
    const NAME_FIELD = "name";

    if (typeof noop6.name === "string") {
        return;
    }

    try {
        Object.defineProperty(Function.prototype, NAME_FIELD, {
            get: function () {
                var name = this.toString().trim().match(/^function\s*([^\s(]+)/)[1];
                Object.defineProperty(this, NAME_FIELD, { value: name });
                return name;
            }
        });
    } catch (e) {}
})();

/**
 * functionName
 * Get the function name.
 *
 * @name functionName
 * @function
 * @param {Function} input The input function.
 * @returns {String} The function name.
 */
module.exports = function functionName (input) {
    return input.name;
};
