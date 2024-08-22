/*global QUnit*/

sap.ui.define([
	"emd_details_form/controller/Emd_form.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Emd_form Controller");

	QUnit.test("I should test the Emd_form controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
