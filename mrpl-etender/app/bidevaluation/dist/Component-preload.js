//@ui5-bundle mrpl/etender/bidevaluation/Component-preload.js
sap.ui.require.preload({
	"mrpl/etender/bidevaluation/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","mrpl/etender/bidevaluation/model/models"],function(e,t,i){"use strict";return e.extend("mrpl.etender.bidevaluation.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"mrpl/etender/bidevaluation/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("mrpl.etender.bidevaluation.controller.App",{onInit:function(){}})});
},
	"mrpl/etender/bidevaluation/controller/bidEvaluationform.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("mrpl.etender.bidevaluation.controller.bidEvaluationform",{onInit:function(){}})});
},
	"mrpl/etender/bidevaluation/i18n/i18n.properties":'# This is the resource bundle for mrpl.etender.bidevaluation\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=BID Evaluation\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=BID Evaluation\n\n#XFLD,39\nflpTitle=BID Evaluation\n\n#XFLD,39\nflpSubtitle=MRPL\n\n\n#startsHere\nbidmainHeader1 = TECHNICAL EVALUATION OF BIDDERS\nbidmainHeader2 = COMMERCIAL EVALUATION OF BIDDERS\n#Tableheader: \nbidtabHeader12 = S.N.\nbidtabHeader1 = TERMS\nbidtabHeader2 = VENDOR 1\nbidtabHeader3 = VENDOR 2\nbidtabHeader4 = VENDOR 3\nbidtabHeader5 = VENDOR 4 \nbidtabHeader6 = VENDOR 5\nbidtabHeader7 = Emp Code\nbidtabHeader8 = Emp Name\nbidtabHeader9 = Emp Designation\nbidtabHeader10 = Authority Level\nbidtabHeader11 = Status\n\n#LABELS\nbidLab1 = 1\nbidLab2 = 2\nbidLab3 = 3\nbidLab4 = 4\nbidLab5 = 5\nbidLab6 = 6\nbidLab7 = 7\nbidLab8 = 8\nbidLab9 = 9\nbidLab10 = 10\nbidLab11 = 11\nbidLab12 = EMD \nbidLab13 = PRS: As per MM manula\nbidLab14 = e PBG 3%\nbidLab15 = Warranty\nbidLab16 = Integrity Pact\nbidLab17 = Terms of Payment\nbidLab18 = Delivery Period\nbidLab19 = Offer Validity\nbidLab20 = MSE Status\nbidLab21 = Make in India / Local content \nbidLab22 = Commercial Acceptance\nbidLab23 = Final Recommendation\nbidLab24 = Remarks if any \nbidLab25 = TECHNICAL EVALUATION\nbidLab26 = COMMERCIAL EVALUATION\nbidLab27 = PR NO \nbidLab28 = PR DESCRIPTION\nbidLab29 = Bidder Pre \\u2013 Qualification / Eligibility criteria\nbidLab30 = Bid Evaluation criteria\nbidLab31 = SL NO\nbidLab32 = PQC POINTS\nbidLab33 = BEC POINTS\n\n#tabletext\nbidCol1 = 12835\nbidCol2 = 12724\nbidCol3 = ARVIND\nbidCol4 = SHIVARAJ\nbidCol5 = ENGINEER\nbidCol6 = OFFICER\nbidCol7 = Proposer 1\nbidCol8 = Proposer 2\nbidCol9 = Recommender 1\nbidCol10 = Recommender 2\nbidCol11 = Approver 1\nbidCol12 = Sent for Next Approval\nbidCol13 = Approved\nbidCol14 = Approval\nbidCol15 = Remarks \n\n\n\n#button\nbidBtn1 = EXECUTE\nbidBtn2 = EXIT\nbidBtn3 = SAVE AS DRAFT\nbidBtn4 = SAVE\n\n',
	"mrpl/etender/bidevaluation/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"mrpl.etender.bidevaluation","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.4","toolsId":"5879d3af-0bf9-4647-bddf-985e2b4b1c48"},"dataSources":{"s4Service":{"uri":"odata/v2/etender-s4/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}},"capService":{"uri":"odata/v2/etender-catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"mrpl-bidevaluation":{"semanticObject":"mrpl","action":"bidevaluation","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"dependencies":{"minUI5Version":"1.108.26","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"mrpl.etender.bidevaluation.i18n.i18n"}},"":{"dataSource":"s4Service","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"capService":{"dataSource":"capService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"mrpl.etender.bidevaluation.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RoutebidEvaluationform","pattern":":?query:","target":["TargetbidEvaluationform"]}],"targets":{"TargetbidEvaluationform":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"bidEvaluationform","viewName":"bidEvaluationform"}}},"rootView":{"viewName":"mrpl.etender.bidevaluation.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"mrpl.etender"}}',
	"mrpl/etender/bidevaluation/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"mrpl/etender/bidevaluation/view/App.view.xml":'<mvc:View controllerName="mrpl.etender.bidevaluation.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"mrpl/etender/bidevaluation/view/bidEvaluationform.view.xml":'<mvc:View controllerName="mrpl.etender.bidevaluation.controller.bidEvaluationform"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns:l="sap.ui.layout"\n    xmlns:f="sap.ui.layout.form"\n    xmlns:core="sap.ui.core"\n    xmlns:m="sap.m"\n    xmlns:layout="sap.ui.layout"\n    xmlns="sap.uxap"><ObjectPageLayout id="ObjectPageLayout" upperCaseAnchorBar="false" showFooter="true"><headerTitle></headerTitle><headerContent><m:FlexBox wrap="Wrap" fitContainer="true"><m:Image class="sapUiSmallMarginEnd" src="Image/header.png" width="100%" height="auto" /></m:FlexBox></headerContent><sections><ObjectPageSection titleUppercase="false" id="Emplo" title="{i18n>bidmainHeader1}"><subSections><ObjectPageSubSection titleUppercase="false"><f:SimpleForm editable="true" layout="ColumnLayout" columnsM="2" columnsL="3" columnsXL="4"><f:content><m:Label text="{i18n>bidLab27}"/><m:Input/><m:Label text="{i18n>bidLab28}"/><m:Input/></f:content></f:SimpleForm></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>bidLab29}"><m:ScrollContainer\n                    id="idScrollContainers01"\n                    width="100%"\n                    height="auto"\n                    horizontal="true"\n                    vertical="false"><m:Table id="idProductsTables01"\n                        inset="false"\n                        growing="true"\n                        growingScrollToLoad="true"\n                        items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidLab31}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidLab32}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader5}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>bidLab30}"><m:ScrollContainer\n                    id="idScrollContainers001"\n                    width="100%"\n                    height="auto"\n                    horizontal="true"\n                    vertical="false"><m:Table id="idProductsTables001"\n                        inset="false"\n                        growing="true"\n                        growingScrollToLoad="true"\n                        items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidLab31}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidLab33}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader5}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>}"><m:ScrollContainer\n                    id="ScrollContainers0011"\n                    width="100%"\n                    height="auto"\n                    horizontal="true"\n                    vertical="false"><m:Table id="ProductsTables0011"\n                        inset="false"\n                        growing="true"\n                        growingScrollToLoad="true"\n                        items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidLab23}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader5}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>bidLab24}"><f:SimpleForm editable="true" layout="ColumnLayout" columnsM="1" columnsL="1" columnsXL="1"><f:content><m:TextArea maxLength="40" width="100%" /></f:content></f:SimpleForm></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title = "{i18n>bidCol14}"><m:ScrollContainer\n\tid="idScrollContainerid"\n\twidth="100%"\n\theight="auto"\n\thorizontal="true"\n\tvertical="false"><m:Table id="idProductsTableid"\n\t\tinset="false"\n\t\tgrowing="true"\n\t\tgrowingScrollToLoad="true"\n\t\titems=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidtabHeader7}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader8}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader9}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader10}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader11}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidCol15}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{}"/><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol7}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol12}" /><m:Text\n\t\t\t\t\t\ttext="{}" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{}"/><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol8}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol13}" /><m:Text\n\t\t\t\t\t\ttext="{}" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{}"/><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol9}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol12}" /><m:Text\n\t\t\t\t\t\ttext="{}" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{}"/><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol10}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol13}" /><m:Text\n\t\t\t\t\t\ttext="{}" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{}"/><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol11}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol13}" /><m:Text\n\t\t\t\t\t\ttext="{}" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" id="combinedSection" title="{i18n>bidmainHeader2}"><subSections><ObjectPageSubSection titleUppercase="false"><m:ScrollContainer\n                    id="idScrollContainers1"\n                    width="100%"\n                    height="auto"\n                    horizontal="true"\n                    vertical="false"><m:Table id="idProductsTables1"\n                        inset="false"\n                        growing="true"\n                        growingScrollToLoad="true"\n                        items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidtabHeader12}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader1}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader5}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader6}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab1}"/><m:Text\n\t\t\t\t\t\ttext="T{i18n>bidLab12}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab2}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab13}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab3}"/><m:Text\n\t\t\t\t\t\ttext="T{i18n>bidLab14}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab4}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab15}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab5}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab16}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab6}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab17}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab7}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab18}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab8}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab19}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab9}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab20}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab10}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab21}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidLab11}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidLab22}" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>}"><m:ScrollContainer\n                    id="idScrollContainers0011"\n                    width="100%"\n                    height="auto"\n                    horizontal="true"\n                    vertical="false"><m:Table id="idProductsTables0011"\n                        inset="false"\n                        growing="true"\n                        growingScrollToLoad="true"\n                        items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidLab23}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader5}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext=""/><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /><m:Text\n\t\t\t\t\t\ttext="" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title="{i18n>bidLab24}"><f:SimpleForm editable="true" layout="ColumnLayout" columnsM="1" columnsL="1" columnsXL="1"><f:content><m:TextArea maxLength="40" width="100%" /></f:content></f:SimpleForm></ObjectPageSubSection><ObjectPageSubSection titleUppercase="false" title = "{i18n>bidCol14}"><m:ScrollContainer\n\tid="idScrollContainer"\n\twidth="100%"\n\theight="auto"\n\thorizontal="true"\n\tvertical="false"><m:Table id="idProductsTable"\n\t\tinset="false"\n\t\tgrowing="true"\n\t\tgrowingScrollToLoad="true"\n\t\titems=""><m:columns><m:Column width="12em"><m:Text text="{i18n>bidtabHeader7}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader8}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader9}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader10}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>bidtabHeader11}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidCol1}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol3}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol5}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol7}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol12}" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="{i18n>bidCol2}"/><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol4}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol6}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol8}" /><m:Text\n\t\t\t\t\t\ttext="{i18n>bidCol13}" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></subSections></ObjectPageSection></sections><footer><m:Bar><m:contentRight><m:Button text="{i18n>bidBtn1}" press="onExecute" /><m:Button text="{i18n>bidBtn2}" press="onExit" /><m:Button text="{i18n>bidBtn3}" press="onSavePress" /><m:Button text="{i18n>bidBtn4}" press="onSaveAsDraftPress" /></m:contentRight></m:Bar></footer></ObjectPageLayout></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
