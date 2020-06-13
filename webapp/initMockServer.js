sap.ui.define([
    "sap/ui/demo/cart/localService/mockserver"
], function(mockserver) {
    'use strict';
    
    mockserver.init();

    sap.ui.require(["sap/ui/core/ComponentSupport"]);
});