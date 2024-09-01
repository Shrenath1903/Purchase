sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageBox"
],
function (Controller,JSONModel, MessageBox) {
    "use strict";

    return Controller.extend("mrpl.etender.cegform.controller.main", {
        onInit: function () {
            // this.headerModel = new sap.ui.model.json.JSONModel(); // Ensure this is using sap.ui.model.json.JSONModel
            this.headerModel = new JSONModel(); // Ensure this is using sap.ui.model.json.JSONModel
            this.getView().setModel(this.headerModel, "headerModel");
            
            var ODataModel = this.getOwnerComponent().getModel("masterService");
            var path = "/EtenderMstr";
            
            // Create a filter for "PurchaseNo" equal to "3000000001"
            var aFilters = [];
            aFilters.push(new sap.ui.model.Filter({
                path: "PurchaseNo", 
                operator: sap.ui.model.FilterOperator.EQ, 
                value1: 3000000001
            }));
            
            // Perform the OData read with the filters applied
            ODataModel.read(path, {
                filters: aFilters,  // Pass filters here
                success: (oData) => {
                    this.headerModel.setData(oData); // Set the data into the model
                    console.log(this.headerModel);
            
                    // Call the itemdata function if it exists
                    if (this.itemdata && typeof this.itemdata === 'function') {
                        this.itemdata(this.headerModel);
                    } else {
                        console.error("itemdata function not found or is not a function.");
                    }
                },
                error: (oError) => {
                    sap.m.MessageBox.error("Problem in loading EtenderMstr data");
                }
            });
            
        },

        itemdata: function(headerModel)
        {
            this.itemModel = new JSONModel(); 
            this.getView().setModel(this.itemModel, "itemModel");

            this.item = headerModel.oData.results[0].ID
            var ODataModel = this.getOwnerComponent().getModel("cegService");
            var path = "/Ceg_Item";
            
            // Create a filter for "PurchaseNo" equal to "3000000001"
            var aFilters = [];
            aFilters.push(new sap.ui.model.Filter({
                path: "ID", 
                operator: sap.ui.model.FilterOperator.EQ, 
                value1: this.item
            }));
            
            // Perform the OData read with the filters applied
            ODataModel.read(path, {
                filters: aFilters,  // Pass filters here
                success: (oData) => {
                    this.itemModel.setData(oData); // Set the data into the model
                    console.log(this.itemModel);
            
                    // Call the itemdata function if it exists
                    // if (itemModel) {
                    //     this.save(this.itemModel);
                    // } else {
                    //     console.error("itemdata function not found or is not a function.");
                    // }
                },
                error: (oError) => {
                    sap.m.MessageBox.error("Problem in loading EtenderMstr data");
                }
            });

        },



        // onEditTable: function() {
        //     var oTable = this.byId("idProductsTable");
        //     var aItems = oTable.getItems();
        
        //     aItems.forEach(function(oItem) {
        //         var aCells = oItem.getCells();
        //         aCells.forEach(function(oCell) {
        //             if (oCell instanceof sap.m.Text) {
        //                 var sValue = oCell.getText();
        //                 oItem.removeCell(oCell);
        //                 var oInput = new sap.m.Input({
        //                     value: sValue
        //                 });
        //                 oItem.addCell(oInput);
        //             }
        //         });
        //     });
        // },



        onEditTable: function() {
            var oTable = this.byId("idProductsTable");
            var aItems = oTable.getItems();
            
            // Iterate through the table rows (items)
            aItems.forEach(function(oItem) {
                var aCells = oItem.getCells();
                
                // Convert sap.m.Text cells into sap.m.Input for editing
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
        
            // Add a new row for creating a new record
            var oNewItem = new sap.m.ColumnListItem({
                cells: [
                    new sap.m.Input(),  // interaction_ID
                    new sap.m.Input(),  // interaction_PurchaseNo
                    new sap.m.Input(),  // Item_Code
                    new sap.m.Input(),  // Description
                    new sap.m.Input(),  // UOM
                    new sap.m.Input(),  // Qty
                    new sap.m.Input(),  // Basis_Est
                    new sap.m.Input(),  // Prev_PO
                    new sap.m.Input(),  // PO_Date
                    new sap.m.Input(),  // PO_Rate
                    new sap.m.Input(),  // Escalation
                    new sap.m.Input(),  // Escalate_Price
                    new sap.m.Input(),  // Budget_Rate
                    new sap.m.Input(),  // Final_Est
                    new sap.m.Input()   // Total_Amt
                ]
            });
            
            oTable.addItem(oNewItem);
        },
        
        onSavePress: function() {
            var oTable = this.byId("idProductsTable");
            var aItems = oTable.getItems();
            var oModel = this.getOwnerComponent().getModel("cegService");
        
            // Make sure 'headerModel' is correctly defined and available
            var headerModel = this.getView().getModel("headerModel");
        
            if (headerModel && headerModel.oData && headerModel.oData.results && headerModel.oData.results.length > 0) {
                var key = headerModel.oData.results[0].ID;
        
                // Collect data for new entries
                var aNewData = [];
        
                aItems.forEach(function(oItem) {
                    var aCells = oItem.getCells();
                    var oNewEntry = {
                        ID: key,
                        interaction_ID: aCells[0].getValue() || "",  // Ensure it's a string
                        interaction_PurchaseNo: aCells[1].getValue() || "",  // Ensure it's a string
                        Item_Code: aCells[2].getValue() || "",  // Ensure it's a string
                        Description: aCells[3].getValue() || "",  // Ensure it's a string
                        UOM: aCells[4].getValue() || "",  // Ensure it's a string
                        Qty: parseFloat(aCells[5].getValue()) || 0,  // Ensure it's a decimal
                        Basis_Est: aCells[6].getValue() || "",  // Ensure it's a string
                        Prev_PO: aCells[7].getValue() || "",  // Ensure it's a string
                        PO_Date: aCells[8].getValue() || "",  // Ensure it's a string
                        PO_Rate: aCells[9].getValue() || "",  // Ensure it's a string
                        Escalation: aCells[10].getValue() || "",  // Ensure it's a string
                        Escalate_Price: parseFloat(aCells[11].getValue()) || "",  // Ensure it's a string
                        Budget_Rate: aCells[12].getValue() || "",  // Ensure it's a string
                        Final_Est: aCells[13].getValue() || "",  // Ensure it's a string
                        Total_Amt: parseFloat(aCells[14].getValue()) || 0  // Ensure it's a decimal
                    };
        
                    // Add to new data array
                    aNewData.push(oNewEntry);
                });
        
                // Call backend service to create new entries (OData Create operation)
                aNewData.forEach(function(oNewEntry) {
                    oModel.create("/Ceg_Item", oNewEntry, {
                        success: function() {
                            sap.m.MessageToast.show("Product created successfully!");
                        },
                        error: function() {
                            sap.m.MessageToast.show("Error creating product.");
                        }
                    });
                });
            } else {
                sap.m.MessageToast.show("Header data not available.");
            }
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
        },
        Edit: function() {
            var oTable = this.byId("idProductsTables1");
            var aItems = oTable.getItems();
            
            aItems.forEach(function(oItem) {
                var aCells = oItem.getCells();
                aCells.forEach(function(oCell, index) {
                    // Replace the Text control with Input control for editing
                    if (oCell instanceof sap.m.Text) {
                        var sText = oCell.getText();
                        var oInput = new sap.m.Input({
                            value: sText,
                            width: "100%"
                        });
                        oItem.removeCell(oCell);
                        oItem.insertCell(oInput, index);
                    }
                });
            });
        },
        toEdit: function() {
            var oTable = this.byId("idProductsTables");
            var aItems = oTable.getItems();
            
            aItems.forEach(function(oItem) {
                var aCells = oItem.getCells();
                aCells.forEach(function(oCell, index) {
                    // Check if the cell is currently a Text or ObjectIdentifier
                    if (oCell instanceof sap.m.Text) {
                        var sText = oCell.getText();
                        var oInput = new sap.m.Input({
                            value: sText,
                            width: "100%"
                        });
                        oItem.removeCell(oCell);
                        oItem.insertCell(oInput, index);
                    } else if (oCell instanceof sap.m.ObjectIdentifier) {
                        var sText = oCell.getText();
                        var oInput = new sap.m.Input({
                            value: sText,
                            width: "100%"
                        });
                        oItem.removeCell(oCell);
                        oItem.insertCell(oInput, index);
                    }
                });
            });
        }
        

        
    });
});
