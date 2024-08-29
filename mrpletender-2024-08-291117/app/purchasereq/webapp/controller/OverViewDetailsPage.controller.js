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
                var sEntitySet = "/R_PurchaseReqnItem";
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
                       
            
                        // Create a JSON model with the fetched data
                        var oTileDataModel = new sap.ui.model.json.JSONModel(oResult);
                        
                        // Set the JSON model to the view with the name "tileData"
                        this.getView().setModel(oTileDataModel, "tileJSONModel");
                        this.tileModel.setData(oData.results);
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
                // var data = this.tileModel.getData().results ?
                // this.tileModel.getData().results[0] :
                // null;

                var data = this.tileModel.getData()[0]
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
                        var id = (i + 1).toString()
                        // Create the node
                        aNodes.push({
                            id: id,
                            lane: i.toString(),  // Associate the node with the current lane
                            title: title,
                            state: nodeState,
                            stateText: "300000000" + (i + 1),
                            focused: nodeEnabled,
                            highlighted: false,
                            children: [],  // No downward steps, ensure no children nodes are branching downward
                        });
                        if (i > 0) {
                            aNodes[i - 1].children.push(id);  // Link the previous node to the current node
                    }
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
                                    target : { semanticObject : "mrpl", action : "ceg" }
                                })
                                break;
                            
                            case "2":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "pqc" }
                                })
                                break;

                          
                            case "3":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "singlecertificatetender" }
                                })
                                break;

                            case "4":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "austerityapproval" }
                                })
                                break;

                            case "5":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "tenderdocument" }
                                })
                                break;

                            case "6":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "emd" }
                                })
                                break;

                            case "7":
                                oCrossAppNav.toExternal({
                                    target : { semanticObject : "mrpl", action : "bidevaluation" }
                                })
                                break;

                            default:
                                MessageToast.show("Form was not valid");

                        }
                    }
              
           
                    
                   
              },

              formatTime: function (sValue) {
                if (sValue) {
                    var oTimeFormat = DateFormat.getTimeInstance({ pattern: "HH:mm:ss" });
                    var oDate = new Date(sValue);
                    return oTimeFormat.format(oDate);
                }
                return sValue;
            },

            onDownloadPDF: function () {
                var doc = new jsPDF();
                var oRootPath = jQuery.sap.getModulePath("mrpl.mm.releasedprs.purchasereq");
                console.log(oRootPath);
                var imgUrl = oRootPath+"/Image/header.jpeg";
                var that = this;
            
               
                var data = this.tileModel.getData()[0];
            
                if (data) {
                   
                   
                    var PurchaseRequisitionPrice = data.PurchaseRequisitionPrice || "Purchase Requisition Price Not Available";
                    var PurchaseRequisitionType = data.PurchaseRequisitionType || "No Purchase Requisition Type available";
                    var PurchaseRequisition = data.PurchaseRequisition || "No Purchase Requisition available";
                    var PurReqnReleaseStatus = data.PurReqnReleaseStatus || "PurReqn Release Status Not Available";
                    var PurReqnItemCurrency = data.PurReqnItemCurrency || "Pur Reqn Item Currency Not Available";
            
                    
                    this.getBase64Image(imgUrl, function (base64Img) {
                        doc.addImage(base64Img, 'JPEG', 15, 2, 180, 30);
                        
                        doc.setFontSize(15);
                        doc.text("Purchase Requisition Details :", 15, 40);
                        
                  
                        // doc.setLineWidth(0.5);
                        // doc.line(50, 80, 200, 80);
            
                      
                        doc.setFontSize(12);
            
                      
                     
                        
                        doc.text("Purchase Requisition Price:", 15, 50);
                        doc.text(PurchaseRequisitionPrice, 70, 50);
            
                        doc.text("Pur Req Type:", 15, 60);
                        doc.text(PurchaseRequisitionType, 45, 60);
            
                        doc.text("Purchase Requisition:", 15, 70);
                        doc.text(PurchaseRequisition, 57, 70);
            
                        doc.text("Release Status:", 15, 80);
                        doc.text(PurReqnReleaseStatus, 45, 80);

                        doc.text("Item Currency:", 15, 90);
                        doc.text(PurReqnItemCurrency, 45, 90);
            
                      
                        // doc.text("Net Amount", 60, 140);
                        // doc.text("Purchase Requisition", 120, 140);
                        // doc.text("Number Of Items", 160, 140);
                        
                        // doc.line(15, 142, 200, 142); 
                
                       
                        var items = data.Items || [];
                        var yPosition = 150;
                        items.forEach(function (item) {
                           
                            doc.text(item.PurchaseRequisitionPrice || "N/A", 60, yPosition);
                            doc.text(item.PurchaseRequisition || "N/A", 120, yPosition);
                            doc.text(item.PurReqnReleaseStatus || "N/A", 160, yPosition);
                            doc.text(item.PurReqnItemCurrency || "N/A", 220, yPosition);
                            yPosition += 10;
                        });
                        let options = { filename: "custom_filename.pdf" };
                        if (typeof options === 'string') {
                            options = { filename: options };
                        }
                //    doc.output("dataurlnewwindow")
                   doc.output("dataurlnewwindow", options.filename);
                //    doc.output("dataurlnewwindow", "test.pdf");
                        // doc.save("PurchaseRequisitionDetails.pdf");
                    });
                } else {
                    sap.m.MessageToast.show("No data available to generate PDF.");
                }
            },
            
            getBase64Image: function (imgUrl, callback) {
                var img = new Image();
                img.crossOrigin = 'Anonymous';
                img.onload = function () {
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    canvas.height = this.naturalHeight;
                    canvas.width = this.naturalWidth;
                    ctx.drawImage(this, 0, 0);
                    var dataURL = canvas.toDataURL('image/png');
                    callback(dataURL);
                };
                img.src = imgUrl;
            },
    
            onPrintPDF: function() {
             
                var oVBox = this.byId("ObjectPageLayout");
                var printContent = oVBox.getDomRef().innerHTML;
            
                
                var originalContent = document.body.innerHTML; 
                document.body.innerHTML = printContent; 
            
               
                window.print();
            
               
                document.body.innerHTML = originalContent;
                location.reload(); 
            },
           
            onPrint: function() {
                // Hide unwanted elements before printing (optional)
                var oVBox = this.byId("ObjectPageLayout");
                var printContent = oVBox.getDomRef().innerHTML; // Get HTML content of the VBox
                
                // Use jsPDF to create a PDF
                var doc = new jsPDF('p', 'pt', 'a4'); // 'p' for portrait, 'pt' for points, 'a4' for page size
            
                // Add the content to the PDF
                doc.fromHTML(printContent, 10, 5, {
                    'width': 1000, // max width of content
                });
            
                // Save the PDF
                doc.save('document.pdf');
            }
            
            // onPrintPDF: function() {
            //     var oVBox = this.byId("ObjectPageLayout");
            
            //     // Use html2canvas to capture the content of the ObjectPageLayout
            //     html2canvas(oVBox.getDomRef(), {
            //         scale: 2 // Increase the scale for better quality
            //     }).then(function(canvas) {
            //         var imgData = canvas.toDataURL('image/png');
            //         var pdf = new jsPDF('p', 'pt', 'a4'); // 'p' for portrait, 'pt' for points, 'a4' for page size
                    
            //         // Calculate the required height and width to maintain aspect ratio
            //         var pageWidth = pdf.internal.pageSize.getWidth();
            //         var pageHeight = pdf.internal.pageSize.getHeight();
            //         var canvasWidth = canvas.width;
            //         var canvasHeight = canvas.height;
            //         var ratio = Math.min(pageWidth / canvasWidth, pageHeight / canvasHeight);
            
            //         var imgWidth = canvasWidth * ratio;
            //         var imgHeight = canvasHeight * ratio;
            
            //         // Add the image to the PDF
            //         pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
            
            //         // Save the PDF
            //         pdf.save('document.pdf');
            //     });
            // }
            
            
        },

      );
  }
);