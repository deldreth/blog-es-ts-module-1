'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ModuleOne = /** @class */ (function () {
    function ModuleOne() {
    }
    ModuleOne.prototype.request = function () {
        return {
            loading: true,
            error: false
        };
    };
    return ModuleOne;
}());

function test() {
    var foo = new ModuleOne();
    return foo.request();
}

exports.test = test;
