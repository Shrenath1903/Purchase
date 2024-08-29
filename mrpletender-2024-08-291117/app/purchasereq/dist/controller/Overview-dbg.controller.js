sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "mrpl/mm/releasedprs/purchasereq/model/formatter",
        "sap/ui/core/format/DateFormat",
        "sap/ui/comp/valuehelpdialog/ValueHelpDialog",
        "sap/ui/core/Fragment",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/FilterType",
        'sap/ui/model/odata/v2/ODataModel',
    ],
    function(
        Controller,
        Filter,
        FilterOperator,
        formatter,
        DateFormat,
        ValueHelpDialog,
        Fragment,
        JSONModel,
        FilterType,
        ODataModel
    ) {
        "use strict";

        return Controller.extend(
            "mrpl.mm.releasedprs.purchasereq.controller.Overview", {
                formatter: formatter,

                onInit: function() {
                    this.oFilterBar = this.getView().byId("filterbar");
                    

              
                },

                onSearch: function() {
                    var aTableFilters = this.oFilterBar
                        .getFilterGroupItems()
                        .reduce(function(aResult, oFilterGroupItem) {
                            var oControl = oFilterGroupItem.getControl(),
                                sValue = oControl.getValue(),
                                aFilters = [];

                            if (sValue) {
                                var sFilterValue;

                                if (
                                    oFilterGroupItem.getName().includes("Date") ||
                                    oFilterGroupItem.getName().includes("Time")
                                ) {
                                    var aDateParts = sValue.split("/");
                                    if (aDateParts.length === 3) {
                                        // Convert the date from dd/MM/yy to yyyy-MM-dd
                                        var day = parseInt(aDateParts[0], 10);
                                        var month = parseInt(aDateParts[1], 10) - 1; // Months are zero-based in JavaScript
                                        var year = parseInt(aDateParts[2], 10);

                                        // Adjust the year to be in the 2000s
                                        year += 2000;

                                        // Create a new Date object with the time set to 05:30 and the correct timezone
                                        sFilterValue = new Date(year, month, day, 5, 30);
                                    } else {
                                        console.error("Invalid date format:", sValue);
                                        return aResult;
                                    }
                                } else {
                                    sFilterValue = sValue;
                                }

                                if (sFilterValue) {
                                    aFilters.push(
                                        new Filter({
                                            path: oFilterGroupItem.getName(),
                                            operator: FilterOperator.EQ, // Use 'EQ' for exact matches
                                            value1: sFilterValue,
                                        })
                                    );

                                    aResult.push(
                                        new Filter({
                                            filters: aFilters,
                                            and: false,
                                        })
                                    );
                                }
                            } else {
                                console.warn(
                                    `No value provided for filter: ${oFilterGroupItem.getName()}`
                                );
                            }

                            return aResult;
                        }, []);

                    // Apply the filters to the table binding
                    this.getView()
                        .byId("table")
                        .getBinding("items")
                        .filter(aTableFilters, FilterType.Application);
                },

                formatTime: function(sValue) {
                    if (sValue) {
                        var oTimeFormat = DateFormat.getTimeInstance({
                            pattern: "HH:mm:ss",
                        });
                        var oDate = new Date(sValue);
                        return oTimeFormat.format(oDate);
                    }
                    return sValue;
                },

                onRowSelectionChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    var oContext = oSelectedItem.getBindingContext();
                    var sPurchaseRequisition = oContext.getProperty(
                        "PurchaseRequisition"
                    );

                    this.getOwnerComponent().getRouter().navTo("OverViewDetailsPage", {
                        PurchaseRequisition: sPurchaseRequisition,
                    });
                },

                onFilterChange: function(oEvent) {
                    console.log("Filter Changed");
                },

                onAfterVariantLoad: function(oEvent) {
                    console.log("Variant loaded");
                },

                onValueHelpRequestPurchaseRequisition: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.PurchaseRequisition) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.PurchaseRequisition",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.PurchaseRequisition = oDialog;
                                this.getView().addDependent(this.PurchaseRequisition);
                                this.PurchaseRequisition.open();
                            }.bind(this)
                        );
                    } else {
                        this.PurchaseRequisition.open();
                    }
                },
                onPurchaseRequisitionChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    // var value = oSelectedItem.getTitle()
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.PurchaseRequisition.close(); // Close the dialog
                        // this._filter(sSelectedValue)
                    }
                },

                onRequisitionclose: function() {
                    if (this.PurchaseRequisition) {
                        this.PurchaseRequisition.close(); // Ensure dialog exists before trying to close
                    }
                },

                onValueHelpRequestPurReqnReleaseStatus: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.PurReqnReleaseStatus) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.PurReqnReleaseStatus",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.PurReqnReleaseStatus = oDialog;
                                this.getView().addDependent(this.PurReqnReleaseStatus);
                                this.PurReqnReleaseStatus.open();
                            }.bind(this)
                        );
                    } else {
                        this.PurReqnReleaseStatus.open();
                    }
                },

                onPurReqnReleaseStatusChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.PurReqnReleaseStatus.close(); // Close the dialog
                        // this._filterStatus(sSelectedValue)
                    }
                },

                onReleaseStatusClose: function() {
                    if (this.PurReqnReleaseStatus) {
                        this.PurReqnReleaseStatus.close(); // Ensure dialog exists before trying to close
                    }
                },

                onValueHelpRequestPurchaseRequisitionPrice: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.PurchaseRequisitionPrice) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.PurchaseRequisitionPrice",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.PurchaseRequisitionPrice = oDialog;
                                this.getView().addDependent(this.PurchaseRequisitionPrice);
                                this.PurchaseRequisitionPrice.open();
                            }.bind(this)
                        );
                    } else {
                        this.PurchaseRequisitionPrice.open();
                    }
                },

                onPurchaseRequisitionPriceChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.PurchaseRequisitionPrice.close(); // Close the dialog
                        // this._filterPrice(sSelectedValue)
                    }
                },

                onRequisitionPriceClose: function() {
                    if (this.PurchaseRequisitionPrice) {
                        this.PurchaseRequisitionPrice.close(); // Ensure dialog exists before trying to close
                    }
                },

                onValueHelpRequestCreationDate: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.CreationDate) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.CreationDate",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.CreationDate = oDialog;
                                this.getView().addDependent(this.CreationDate);
                                this.CreationDate.open();
                            }.bind(this)
                        );
                    } else {
                        this.CreationDate.open();
                    }
                },

                onCreationDateChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.CreationDate.close(); // Close the dialog
                    }
                },

                onCreationDateClose: function() {
                    if (this.CreationDate) {
                        this.CreationDate.close(); // Ensure dialog exists before trying to close
                    }
                },

                onValueHelpRequestDeliveryDate: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.DeliveryDate) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.DeliveryDateTime",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.DeliveryDate = oDialog;
                                this.getView().addDependent(this.DeliveryDate);
                                this.DeliveryDate.open();
                            }.bind(this)
                        );
                    } else {
                        this.DeliveryDate.open();
                    }
                },

                onDeliveryDateChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.DeliveryDate.close(); // Close the dialog
                    }
                },

                onDeliveryDateClose: function() {
                    if (this.DeliveryDate) {
                        this.DeliveryDate.close(); // Ensure dialog exists before trying to close
                    }
                },

                onValueHelpRequestPurchasingDocumentItem: function(oEvent) {
                    this._oInput = oEvent.getSource();

                    if (!this.PurchasingDocumentItem) {
                        Fragment.load({
                            id: this.getView().getId(),
                            name: "mrpl.mm.releasedprs.purchasereq.view.PurchasingDocumentItem",
                            controller: this,
                        }).then(
                            function(oDialog) {
                                this.PurchasingDocumentItem = oDialog;
                                this.getView().addDependent(this.PurchasingDocumentItem);
                                this.PurchasingDocumentItem.open();
                            }.bind(this)
                        );
                    } else {
                        this.PurchasingDocumentItem.open();
                    }
                },

                onPurchasingDocumentItemChange: function(oEvent) {
                    var oSelectedItem = oEvent.getParameter("listItem");
                    if (oSelectedItem && this._oInput) {
                        var sSelectedValue = oSelectedItem.getTitle(); // Get the selected value
                        this._oInput.setValue(sSelectedValue); // Set the value to the input field
                        this.PurchasingDocumentItem.close(); // Close the dialog
                    }
                },

                onPurchasingDocumentItemclose: function() {
                    if (this.PurchasingDocumentItem) {
                        this.PurchasingDocumentItem.close(); // Ensure dialog exists before trying to close
                    }
                },
            }
        );
    }
);