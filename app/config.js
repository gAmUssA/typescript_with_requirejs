/// <reference path="../lib/require.d.ts"/>
require.config({
    paths: {
        "components": "../bower_components"
    },
    shim: {}
});

// TODO fix with typescript definition
//if (!window.requireTestMode) {
require(['main'], function (main) {
    var Main = main.Main;
    var app = new Main();
    app.run();
});
//# sourceMappingURL=config.js.map
