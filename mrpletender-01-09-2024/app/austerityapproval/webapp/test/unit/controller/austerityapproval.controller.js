/*global QUnit*/

sap.ui.define([
	"mrpletender/austerityapproval/controller/austerityapproval.controller"
], function (Controller) {
	"use strict";

	QUnit.module("austerityapproval Controller");

	QUnit.test("I should test the austerityapproval controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
