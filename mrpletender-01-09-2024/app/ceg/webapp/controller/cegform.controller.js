sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("mrpl.etender.ceg.controller.cegform", {
        onInit: function () {

        },
        
        
        onEditTable: function() {
            var oTable = this.byId("idProductsTable");
            var aItems = oTable.getItems();
        
            aItems.forEach(function(oItem) {
                var aCells = oItem.getCells();
                aCells.forEach(function(oCell) {
                    if (oCell instanceof sap.m.Text) {
                        var sValue = oCell.getText();
                        oItem.removeCell(oCell);
                        var oInput = new sap.m.Input({
                            value: sValue
                        });
                        oItem.addCell(oInput);
                    }
                });
            });
        },
        onEditTables: function() {
            var oTable = this.byId("idtable");
            var aItems = oTable.getItems();
        
            aItems.forEach(function(oItem) {
                var aCells = oItem.getCells();
                
                aCells.forEach(function(oCell) {
                    // Check if the cell contains a HBox with a Text control
                    if (oCell instanceof sap.m.HBox) {
                        var oText = oCell.getItems()[0]; // Get the Text control inside the HBox
                        
                        if (oText instanceof sap.m.Text) {
                            var sValue = oText.getText(); // Get the text value
                            oCell.removeItem(oText); // Remove the Text control
                            
                            var oInput = new sap.m.Input({
                                value: sValue
                            });
                            
                            oCell.addItem(oInput); // Add the Input control to the HBox
                        }
                    }
                });
            });
        }
        
        
    });
});
