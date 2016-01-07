/**
 * SASS configuration for sass gulp task.
 *
 * @see https://github.com/sass/node-sass
 */

'use strict';

// public
module.exports = {
    // turn on/off translation
    active: true,

    // directory to store css files
    // default: <project root>/app/css/
    path: 'css',

    // config for sass:develop task
    develop: {
        // intended location of the output file
        outFile: 'develop.css',

        // whether to use space or tab character for indentation
        indentType: 'space',

        // the number of spaces or tabs to be used for indentation
        indentWidth: 4,

        // whether to use cr, crlf, lf or lfcr sequence for line break
        linefeed: 'lf',

        // output format of the final CSS style
        // options: nested, expanded, compact, compressed
        outputStyle: 'nested',

        // how many digits after the decimal will be allowed
        precision: 2,

        // additional debugging information in the output file as CSS comments
        sourceComments: false,

        // the writing location for the source map file
        // options: file name, true - inline source map, false - disable
        sourceMap: 'develop.map',

        // whether to include the source files content in the source map
        // bigger map file but no need to serve source scss files
        sourceMapContents: false
    },

    // config for sass:release task
    release: {
        // intended location of the output file
        outFile: 'release.css',

        // whether to use space or tab character for indentation
        indentType: 'space',

        // the number of spaces or tabs to be used for indentation
        indentWidth: 4,

        // whether to use cr, crlf, lf or lfcr sequence for line break
        linefeed: 'lf',

        // output format of the final CSS style
        // options: nested, expanded, compact, compressed
        outputStyle: 'compressed',

        // how many digits after the decimal will be allowed
        precision: 2,

        // additional debugging information in the output file as CSS comments
        sourceComments: false,

        // the writing location for the source map file
        // options: file name, true - inline source map, false - disable
        sourceMap: false,

        // whether to include the source files content in the source map
        // bigger map file but no need to serve source scss files
        sourceMapContents: false
    }
};
