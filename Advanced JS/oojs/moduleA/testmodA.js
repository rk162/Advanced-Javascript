module.exports = (function() {
    'use strict';

    let methodA = function() {
        return {
            getDay: function() {
                return new Date().getDay();
            }
        }
    }
    let methodB = function() {
            return {
                getMonth: function() {
                    return new Date().getMonth();
                }
            }
        }
        // Closures to expose private members as public interfaces
    return {
        methodA,
        methodB
    }
}());