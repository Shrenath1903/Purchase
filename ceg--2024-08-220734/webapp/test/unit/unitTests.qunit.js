/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mrpletender/ceg/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
