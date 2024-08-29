/*global QUnit*/

sap.ui.define([
	"mrpletender/ceg/controller/cegform.controller"
], function (Controller) {
	"use strict";

	QUnit.module("cegform Controller");

	QUnit.test("I should test the cegform controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
