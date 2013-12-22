/// <reference path="../lib/jquery.d.ts"/>
/// <reference path="../lib/require.d.ts"/>

import JQuery = require("../lib/jquery");
var $:JQueryStatic = JQuery.$;

export class Main {
    run() {
        $('body').append('jQuery ' + $.fn.jquery + ' and RequireJS' + requirejs.version + ' loaded!');
    }
}