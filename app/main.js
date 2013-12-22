/// <reference path="../lib/jquery.d.ts"/>
/// <reference path="../lib/require.d.ts"/>
define(["require", "exports", "../lib/jquery"], function(require, exports, __JQuery__) {
    var JQuery = __JQuery__;
    var $ = JQuery.$;

    var Main = (function () {
        function Main() {
        }
        Main.prototype.run = function () {
            $('body').append('jQuery ' + $.fn.jquery + ' and RequireJS' + requirejs.version + ' loaded!');
        };
        return Main;
    })();
    exports.Main = Main;
});
//# sourceMappingURL=main.js.map
