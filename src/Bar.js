
/**
 * @typedef {object} DataBar
 * @prop {string} foo
 * @prop {number[]} [optionalArrayOfNumbers]
 */

/**
 * @callback exampleCallbackFunction
 * @param {string} firstParam
 * @param {string} [optionalParam]
 * @returns {Promise<DataBar>}
 */

class Bar {

    /**
     *
     * @param {import('./Foo')} input
     */
    method (input) {
        input
    }

    /**
     *
     * @param {exampleCallbackFunction} fn
     */
    callbackMethod (fn) {
        fn('sd').then((e) => e.foo);
    }


}

module.exports = Bar;
