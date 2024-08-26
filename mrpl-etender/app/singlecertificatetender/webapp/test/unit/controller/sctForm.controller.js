/*global QUnit*/

sap.ui.define([
	"mrpletender/singlecertificatetender/controller/sctForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("sctForm Controller");

	QUnit.test("I should test the sctForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
