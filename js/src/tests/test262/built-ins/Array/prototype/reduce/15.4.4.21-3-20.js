// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-3-20
description: >
    Array.prototype.reduce - value of 'length' is an object which has
    an own valueOf method
---*/

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal === 11 && idx === 1);
        }

        var obj = {
            1: 11,
            2: 9,
            length: {
                valueOf: function () {
                    return 2;
                }
            }
        };

assert.sameValue(Array.prototype.reduce.call(obj, callbackfn, 1), true, 'Array.prototype.reduce.call(obj, callbackfn, 1)');

reportCompare(0, 0);
