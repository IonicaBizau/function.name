"use strict";

(function () {
    const NAME_FIELD = "name";

    Object.defineProperty(Function.prototype, NAME_FIELD, {
        get: function () {
            this.toString().match(/^function\s*([^\s(]+)/)[1];
            Object.defineProperty(this, NAME_FIELD, { value: name });
        }
    });
})();
