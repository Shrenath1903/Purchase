sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/suite/ui/commons/library",
      "sap/ui/model/json/JSONModel",
      "sap/m/MessageToast",
      "sap/ui/model/FilterOperator",
      "sap/ui/model/Filter",
      "sap/ui/core/format/DateFormat",
      "mrpl/mm/releasedprs/purchasereq/model/formatter",
  ],
  function(
      BaseController,
      library,
      JSONModel,
      MessageToast,
      FilterOperator,
      Filter,
      DateFormat,
      formatter
  ) {
      "use strict";

      return BaseController.extend(
          "mrpl.mm.releasedprs.purchasereq.controller.OverViewDetailsPage", {
            formatter: formatter,
              onInit: function() {
                
                  var oView = this.getView();

                  // Initialize the process flows
                  this.oOverViewDetailsPage1 = oView.byId("processflow1");
                  this.oOverViewDetailsPage2 = oView.byId("processflow2");

                  // Initialize the JSON models
                  var oData = {
                      lanes: [],
                      nodes: [],
                  };
                  var oModel = new JSONModel(oData);
                  oView.setModel(oModel);


                  //raanj

                this.tileModel = new JSONModel();
                this.getView().setModel(this.tileModel, "tileJSONModel");

                this.getRouter().getRoute("OverViewDetailsPage").attachPatternMatched(this._onObjectMatched, this);


              },

              getRouter: function() {
                  return sap.ui.core.UIComponent.getRouterFor(this);
              },

              // Route matched handler
              _onObjectMatched: function(oEvent) {
                  var sPurchaseRequisition =
                      oEvent.getParameter("arguments").PurchaseRequisition;

                  this._loadPurchaseRequisitionDetails(sPurchaseRequisition);
              },

              _loadPurchaseRequisitionDetails: function(sPurchaseRequisition) {

                // Retrieve the OData model from the component
                var oModel = this.getOwnerComponent().getModel();
            
                // Define the entity set and filters
                var sEntitySet = "/ZC_MM_PURREQ";
                var aFilters = [
                    new sap.ui.model.Filter(
                        "PurchaseRequisition",
                        sap.ui.model.FilterOperator.EQ,
                        sPurchaseRequisition
                    ),
                ];
            
                // Call the read function to fetch data
                oModel.read(sEntitySet, {
                    filters: aFilters,
                    success: function(oData) {
                        // Log the received data
                        console.log(oData);
            
                        // Fetch the first result
                        var oResult = oData.results && oData.results.length > 0 ? oData.results[0] : null;
            
                        // Set the fetched data to the tileModel
                        this.tileModel.setData(oData);
            
                        // Create a JSON model with the fetched data
                        var oTileDataModel = new sap.ui.model.json.JSONModel(oResult);
                        
                        // Set the JSON model to the view with the name "tileData"
                        this.getView().setModel(oTileDataModel, "tileJSONModel");
            
                        // Call the function to set lanes or any other required process
                        this.onSetLanesPress();
                    }.bind(this), // Bind 'this' to ensure the correct context inside the success callback
                    error: function(oError) {
                        // Log the error for debugging purposes
                        console.error("Error fetching data from OData service:", oError);
                    }
                });
            },
            
            //   that.tileModel.setData(oData);

              onSetLanesPress: function() {
                var data = this.tileModel.getData().results ?
                this.tileModel.getData().results[0] :
                null;
                // var data = this.tileModel.getData()
                  if (data) {
                      var title = data.PurchaseRequisitionItemText;
                      var count = data.PurReqnReleaseStatus;
                      var s = data.AccountAssignmentCategory;

                      console.log(s);

                      var oView = this.getView();
                      var oModel = oView.getModel();
                      var iLaneCount = parseInt(count, 10);
                      var aLanes = [];
                      var aNodes = [];

                      // Dynamically create lanes and nodes
                      for (var i = 0; i < iLaneCount; i++) {
                        var txt = ""
                            switch(i)
                            {
                                case 0:
                                    txt = "CEG Form"
                                    break;
                                
                                case 1:
                                    txt = "PQC Form"
                                    break;

                                case 2:
                                    txt = "Single certificate tender Form"
                                    break;

                                case 3:
                                    txt = "Austerity approval Form"
                                    break;
                                    
                                case 4:
                                    txt = "Tender document"
                                    break;

                                case 5:
                                    txt = "EMD Form"
                                    break;

                                case 6:
                                    txt = "BID Evaluation Form"
                                    break;

                                default:
                                    break;
                            }
                          aLanes.push({
                              id: i.toString(),
                              icon: "sap-icon://order-status", // You can change icons based on requirements
                              label:txt,
                              position: i,
                          });

                          // Determine if the current node is the last one
                          var isLastNode = i === iLaneCount - 1;

                          // Set state to Negative for the last node, otherwise Positive
                          var nodeState = isLastNode ? "Negative" : "Neutral";
                          var nodeEnabled = isLastNode;
                          // Create the node
                          aNodes.push({
                              id: (i + 1).toString(),
                              lane: i.toString(),
                              title: title,
                              state: nodeState,
                              stateText: "300000000" + (i + 1),
                              focused: nodeEnabled,
                              highlighted: false,
                              children: null,
                          });
                      }

                      // Update the model with the new lanes and nodes
                      oModel.setProperty("/lanes", aLanes);
                      oModel.setProperty("/nodes", aNodes);
                  } else {
                      console.error("No data found in tileModel.");
                  }
              },

              onNodePress: function(event) {
                // if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                //     var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                //     oCrossAppNav.toExternal({
                //         target : { semanticObject : "test_semantic", action : "test" }
                //     })
                // }

                var count = event.getParameters().getNodeId()
                console.log(count);
                if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService)
                    var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                    {
                        switch (count) 
                        {
                            case "1":
                                
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "ceg", action : "ceg" }
                                })
                                break;
                            
                            case "2":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "pqcform", action : "pqcform" }
                                })
                                break;

                          
                            case "3":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "singletendercert", action : "singletendercert" }
                                })
                                break;

                            case "4":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "austerityapproval", action : "austerityapproval" }
                                })
                                break;

                            case "5":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "tenderdocument", action : "tenderdocument" }
                                })
                                break;

                            case "6":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "emp_details_form", action : "emp_details_form" }
                                })
                                break;

                            case "7":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "bidevaluation", action : "bidevaluation" }
                                })
                                break;

                            default:
                                MessageToast.show("Form was not valid");

                        }
                    }
              
           
                    
                        // if (sap.ushell && sap.ushell.Container && sap.ushell.Container.getService) {
                        //     var oCrossAppNav = sap.ushell.Container.getService("CrossApplicationNavigation"); 
                        //     oCrossAppNav.toExternal({
                        //         target : { semanticObject : "ceg", action : "ceg" }
                        //     })
                        // }
                    

                //   MessageToast.show(
                //       "Node " + count + " has been clicked."
                //   );
              },

              formatTime: function (sValue) {
                if (sValue) {
                    var oTimeFormat = DateFormat.getTimeInstance({ pattern: "HH:mm:ss" });
                    var oDate = new Date(sValue);
                    return oTimeFormat.format(oDate);
                }
                return sValue;
            },

            // formatTime: function(sValue) {
            //     if (sValue) {
            //         var oTimeFormat = DateFormat.getTimeInstance({
            //             pattern: "HH:mm:ss",
            //         });
            //         var oDate = new Date(sValue);
            //         return oTimeFormat.format(oDate);
            //     }
            //     return sValue;
            // },

            
        },

      );
  }
);