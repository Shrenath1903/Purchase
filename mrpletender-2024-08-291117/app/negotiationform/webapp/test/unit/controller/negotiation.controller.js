/*global QUnit*/

sap.ui.define([
	"mrpletender/negotiationform/controller/negotiation.controller"
], function (Controller) {
	"use strict";

	QUnit.module("negotiation Controller");

	QUnit.test("I should test the negotiation controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
