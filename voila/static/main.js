/***************************************************************************
* Copyright (c) 2018, Voila contributors                                   *
*                                                                          *
* Distributed under the terms of the BSD 3-Clause License.                 *
*                                                                          *
* The full license is in the file LICENSE, distributed with this software. *
****************************************************************************/

require(['libwidgets'], function(lib) {
    var widgetApp = new lib.WidgetApplication(lib.requireLoader);

    window.addEventListener('beforeunload', function (e) {
        widgetApp.cleanWidgets();
    });

    if (document.readyState === 'complete') {
        widgetApp.renderWidgets();
    } else {
        window.addEventListener(
            'load',
            function() {
                widgetApp.renderWidgets();
            }
        );
    }
});
