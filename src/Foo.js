
/** @typedef {import('./Bar').DataBar} DataBar */

/**
 * @typedef {object} DataFoo
 * @prop {string} foo
 */

class Foo {

    /**
     *
     * @param {DataBar} one
     * @param {someTsdTypes.TypescriptInterface} two
     */
    method (one, two) {
        two.fn('dads')
    }

}

module.exports = Foo;
