/*global QUnit*/

sap.ui.define([
	"mrpletender/bidevaluation/controller/bidEvaluationform.controller"
], function (Controller) {
	"use strict";

	QUnit.module("bidEvaluationform Controller");

	QUnit.test("I should test the bidEvaluationform controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
