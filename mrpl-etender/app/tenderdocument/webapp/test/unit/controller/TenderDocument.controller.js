/*global QUnit*/

sap.ui.define([
	"mrpletender/tenderdocument/controller/TenderDocument.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TenderDocument Controller");

	QUnit.test("I should test the TenderDocument controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
