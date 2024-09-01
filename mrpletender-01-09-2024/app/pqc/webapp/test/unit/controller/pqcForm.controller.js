/*global QUnit*/

sap.ui.define([
	"mrpletender/pqc/controller/pqcForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("pqcForm Controller");

	QUnit.test("I should test the pqcForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
