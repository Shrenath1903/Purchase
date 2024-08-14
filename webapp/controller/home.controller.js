sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    'sap/ui/Device',
],
function (Controller,JSONModel,Device) {
    "use strict";

    return Controller.extend("projectpricef1.controller.home", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
				widthS: (Device.system.phone) ? "2em" : "5em",
				widthM: (Device.system.phone) ? "4em" : "10em",
				widthL: (Device.system.phone) ? "6em" : "15em"
			}));

			// set explored app's demo model on this sample
			// var oImgModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/img.json"));
			// this.getView().setModel(oImgModel, "img");
        }
    });
});
