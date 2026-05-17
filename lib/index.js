const noop = function noop () {};

(function () {
    const NAME_FIELD = "name";

    if (typeof noop.name === "string") {
        return;
    }

    try {
        Object.defineProperty(Function.prototype, NAME_FIELD, {
            get: function () {
                var nameMatch = this.toString().trim().match(/^function\s*([^\s(]+)/);
                var name = nameMatch ? nameMatch[1] : "";
                Object.defineProperty(this, NAME_FIELD, { value: name });
                return name;
            }
        });
    } catch (error) {
        void error;
    }
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
export default function functionName (input) {
    return input.name;
}
