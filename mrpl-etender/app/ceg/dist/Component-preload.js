//@ui5-bundle mrpl/etender/ceg/Component-preload.js
sap.ui.require.preload({
	"mrpl/etender/ceg/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","mrpl/etender/ceg/model/models"],function(e,t,i){"use strict";return e.extend("mrpl.etender.ceg.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"mrpl/etender/ceg/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("mrpl.etender.ceg.controller.App",{onInit:function(){}})});
},
	"mrpl/etender/ceg/controller/cegform.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("mrpl.etender.ceg.controller.cegform",{onInit:function(){}})});
},
	"mrpl/etender/ceg/i18n/i18n.properties":'# This is the resource bundle for mrpl.etender.ceg\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CEG FORM\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=CEG FORM\n\n\n\n#projectsStartshere\n\n# This is the resource bundle for wrapperform\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=CEG\n\n#YDES: Application description\nappDescription=MRPL\n#XTIT: Main view title\ntitle=CEG\n\nflpTitle=CEG\nflpSubtitle=MRPL\n\n\n#project : begins\nMainTitle = Please select suitable options against each item as applicable & provide supporting details, along with PR. \n#headerTitle\nsectionsTitle = General Requirements\nsectionsTitle2 = Single Tender\nsectionsTitle3 = Limited Tender/Public Tender Cases (Not applicable for single Tener)\nsectionsTitle4 = Certification\nsectionsTitle5 = Drawing/Inspection/Warranty/PBG/Installation\nsectionsTitle6 = Imports\nsectionsTitle7 = GOVT GUIDELINES (Please refer at MRPL Intranet > Department > Materials > Government Circulars)\nsectionsTitle8 = Approvals \nsectionsTitle09 = CEG Vetted BY\nsectionsTitle010 = Table2\n\n#TABLE2\nSection2Tab1 = TOTAL AMOUNT\nSection2Tab2 = DISCOUNT\nSection2Tab3 = TOTAL AMOUNT AFTER DISCOUNT\nSection2Tab4 = TPI CHARGES\nSection2Tab5 = P&F CHARGES\nSection2Tab6 = CENTRAL GOODS AND SERVICE TAX - CGST\nSection2Tab7 = STATE GOODS AND SERVICE TAX - SGST\nSection2Tab8 = INTEGRATED GOODS AND SERVICE TAX - IGST\nSection2Tab9 = FRIEGHT CHARGES\nSection2Tab10 = FRIEGHT CHARGES - CGST\nSection2Tab11 = FRIEGHT CHARGES - SGST\nSection2Tab12 = FRIEGHT CHARGES - IGST\nSection2Tab13 = INSURANCE CHARGES\nSection2Tab14 = TOTAL COST BEFORE GST\nSection2Tab15 = GST SET OFF\nSection2Tab16 = LANDED COST NET AFTER SET OFF\n\n\n#labelText for General Requirements\nlabelGR1 = 1.Purchase requisition release in SAP by Final authority level of Indenting Deptt\nlabelGR2 = 2.Basics for Estimate submitted along with PR (clause 3.1.8.a)\nlabelGR3 = 3.Vetting of Cost Estimation Group submitted with PR (clause 3.1.8.b)\nlabelGR4 = 4.Vendor details are correctly updated and vendor codes are mentioned for Limited Tender/Single tender\nlabelGR5 = 5.Incase of Special Payment terms/Payment Schedule submitted along with PR\nlabelGR6 = 6.Is the item Revenue/Capital\nlabelGR7 = 7.Each page of Technical document signed by Indenter\nlabelGR8 = 8.Whether Proprietary/Nomination certificate are clearly identified and attached\nlabelGR9 = 9.PQC submitted as per MM Manual (clause 3.5.1.4) & duly signed by Indent approving authority\nlabelGR10 = 10.BEC submitted as per MM Manual (clause 3.5.1) & duly signed by Indent approving authority\nlabelGR11 = 11.For Supply \\u2013 Financial Turnover as per MM Manual (clause 3.5.1.4(a)3)  \nlabelGR12 = 12.All Vendors recommended for Limited tender are meeting PQC\nlabelGR13 = 13.Whether Pre-Bid meeting is required\nlabelGR14 = 14.Whether evaluation to be done on Overall L1 or Splittable\nlabelGR15 = 15.Bill Certifying Authority nominated as per MM Manual (clause 3.22.10)\nlabelGR16 = 16.Engineer-in-Charge(EIC) nominated as per MM Manual (clause 3.22.10)\nlabelGR17 = 17.Whether Drawing approval requirement before manufacturing specified in scope\nlabelGR18 = 18.TPI/IBR/MRPL Inspection requirement specified in PR\nlabelGR19 = 19.If TPI is required, whether recommended TPI Agencies specified\nlabelGR20 = 20.Penalty clause (Other than Price Reduction Schedule) for services mentioned in scope\nlabelGR21 = 21.Warrantee Clause applicable\nlabelGRNone = PBG Clause applicable\nlabelGR22 = 22.Order Start & Completion date/Delivery period/Contact Validity mentioned \n(Tender processing time and estimated delivery period shall be factored while mentioning Delivery date in the PR Smart-form)\nlabelGR23 = 23.Whether Installation/Commissioning charges are part of Scope\n(If yes, separate line item for the same indicated in the PR)\nlabelGR24 = 24.Whether items being procured via this PR can be disposed through buyback\nlabelGR25 = 25.Signed Item-wise detailed technical Write up on MRPL Letter head included \n(Description to include Utilization, MOC and functional details for Customs purpose)\nlabelGR26 = 26.In Case of Startups, the PQC criteria with respect to prior turnover & prior experience are to be relaxed except in cases related to Public safety, Health, critical security operations & Equipments\nlabelGR27 = 27.Is the Procurement of item, coming under reserved List of items to be procured from MSE\\u2019s\n(List of such items displayed in Intranet)\n\n#tablePropertiesname\ntabName1 = Emp Code\ntabName2 = Emp Name\ntabName3 = Emp Designation\ntabName4 = Authority Level\ntabName5 = Status\ntabName6 = Remarks\n\n#footerButton\nBtn1 = SAVE AS DRAFT\nBtn2 = SAVE\n\n\n\n\n\n#projects : begins\n\nMainTitle = SINGLE TENDER CERTIFICATE\n\n#sectionHeader\nsectionTitle1 = PR No\nsectionTitle2 = The items/service under the above referred indent are to be procured/finalized on single tender basis for the items/services are\nsectionTitle3 = Detailed Justification\nsectionTitle4 = Approvals\n#labelText\nlabelText1 = PR No\nlabelText2 = 1.Propritery in nature\nlabelText3 = 2.Manufactured and supplied by the original equipment manufactured by\nlabelText4 = 3.Supplier/Contracts has exclusive rights in respect of goods/services and no reasonable alternate or substitute exist\nlabelText5 = 4.Urgently required due to justification\nlabelText6 = 5.Reliable only if procured from \nlabelText7 = due to (Justifiction)\nlabelText8 = 6.Provided/Supplied by Internationaly reputed technology experts/Consultancy \nlabelText9 = with known credentials\nlabelText10 = The indent/JWS may be procured on SINGLE TENDER BASIS due to option No\\u2019s _______ cited above\nlabelText11 = Detailed Justification\n\n\n\n\n\n\n\n\n\n#tablePropertiesname\ntabName1 = Emp Code\ntabName2 = Emp Name\ntabName3 = Emp Designation\ntabName4 = Authority Level\ntabName5 = Status\ntabName6 = Remarks\n\n\n#footerBtn\nfBtn1 = SAVE AS DRAFT\nfBtn2 = SAVE\n\n# Form -4- AUSTERITY APPROVAL\n\nform_name = AUSTERITY APPROVAL\n\naustry_app_dept = DEPARTMENT\n\naustry_app_sub = SUBJECT\n\naustry_app_pr_no = PR NO\n\naustry_app_estimated_cost = ESTIMATED COST FOR PROCUREMENT/SUPPLY\n\naustry_app_type_indent = TYPE OF INDENT\n\naustry_app_lead_time_delivery = LEAD TIME FOR DELIVERY\n\naustry_app_present_stock_level = PRESNT STOCK LEVEL\n\naustry_app_past_consumption_patterns = PAST CONSUMPTION PATTERNS/LIFE OF COMPONENET\n\naustry_app_expected_consumption = EXPECTED CONSUMPTION\n\naustry_app_reason_indenting = REASON FOR INDENTING PRESENTLY\n\naustry_app_risk_out_service = RISK ON NON-PROCUREMENT/NOT CARRYING OUT THIS SERVICE\n\naustry_app_risk_diferment = RISK ON DEFERMENT BY 6 MONTHS OF THIS PROCURMRNT/CARRYING OUT THIS JOB\n\naustry_app_proposal = PROPOSAL\n\naustry_app_deligation_authority = DELIGATION OF AUTHORITY\n\naustry_app_amended_office_order = In line with the amended office order MRPL/MD/2022 on Austerity measures, dated 6th October 2022, all PR value between 20 Lakhs and Rs.1 Crore shall be approved by CGM/HOD, PR Value between Rs 1Crore and Rs.3 crore shall be approved by CGM/HOD and PR value greter than Rs 3 Crore shall be approved by executive Director/HOD accordingly.\n\naustry_app_dept_budget_provision = BUDGET PROVISION\n\n# Table\n\naustry_app_dept_emp_code = Emp Code\n\naustry_app_emp_name = EMP Name\n\naustry_app_emp_desi = Emp Desi\n\naustry_app_authority_level = Authority Level\n\naustry_app_status = Status\n\naustry_app_remarks = Remarks\n\naustry_app_prop1 = Proposer 1\naustry_app_prop2 = Proposer 2\naustry_app_recom1 = Recommender 1\naustry_app_recom2 = Recommender 2\naustry_app_appr1 = Approver 1\n\n\n\n\n# Project Starts here\nform_name = COST ESTIMATION\npr_no = PR NO\n \ndescription = DESCRIPTION\n \ncost_center = COST CENTER\n \nbudget_privision = BUDGET PROVISION WITH REFERENCE TO THE NUMBER OF THE CORRESPONDING ITEM APPEARING IN THE BUDGET\n \namount_provided = AMOUNT PROVIDED IN THE BUDGET ESTIMATE\n \nbackup_quantities = BACKUP DETAILS FOR THE QUANTITIES\n \nbackup_measurement = BACKUP DETAILS FOR THE UNIT OF MEASUREMENT\n \nbackup_rates = BACKUP DETAILS FOR THE RATES\n \ntotal_amount_estimate = TOTAL AMOUNT OF THE ESTIMATE (INCLUDING ALL APPLICABLE INDIRECT COSTS, TAXES AND DUTIES)\n \nbrief_history = BRIEF HISTORY AND JUSTIFICATION OF THE WORK TO BE TAKEN UP\n \nfinancial_viability = FINANCIAL VIABILITY OF THE PROPOSAL, IF APPLICABLE\n \nscope_defining = SCOPE DEFINING CLEARLY THE DETAILS OF THE WORK TO BE UNDERTAKEN AS PER THE ESTIMATE\n \nbasis_rates_quantities = BASIS FOR THE RATES AND QUANTITIES CONSIDERED FOR ESTIMATE\n \ntime_estimated_commencement = TIME ESTIMATED FOR COMMENCEMENT\n \nchart_attached = BAR/PERT CHART ATTACHED\n \ntime_estimates_perpared = TIME ESTIMATES PREPARED BY\n \ntype_tender = TYPE OF TENDER (PLEASE SPECIFY AS PER CLAUSE 3.1.1.6)\n \nplease_specify = PLEASE SPECIFY GUIDELINE CLAUSE (AS PER 3.1.9) UNDER WHICH THIS ESTIMATE IS PREPARED\n \n# Table\ntable_title= PRICE ESTIMATION FORMAT\n\nitem_code = ITEM CODE \n\nt_des = DESCRIPTION\n\nuom = UOM \n\nqty = QTY\n\nbasic_for_estimate = BASIS FOR ESTIMATION\n\nprevious_po = PREVIOUS PO\n\npo_date = PO DATE\n\npo_unit_rate = PO UNIT RATE\n\nescalated_price = ESCALATED PRICE\n\nbudget_offer = BUDEGETORY OFFER RAT\n\nfinal_estimate = FINAL ESTIMATE \n\ntotal_amount = TOTAL AMOUNT \n\n\n\n#project form 5: begins\n\n#form5\nsectionsTitle9 = PR Header Details\nsectionsTitle10 = PQC Input\nsectionsTitle11 = PQC Header \n#labelText for General Requirements\n\n#form5\nlabelGR28 = PR No\nlabelGR29 = Header Text\nlabelGR30 = Date\nlabelGR31 = Department\nlabelGR32 = Bid Type\nlabelGR33 = PR Approving Authority\nlabelGR34 = Delivery period in weeks \nlabelGR35 = Delivery option \nlabelGR36 = Item Description for appearing in PQC \nlabelGR1 = 1.CEG Value \nlabelGR2 = 1.1 Basic Order Value  \nlabelGR3 = 1.2 Net after Input Tax Credit (ITC)    \nlabelGRdul = In Lakhs        \nlabelGR4 = 2.Default relaxation on Past Orders in applicable at 15% on MSEs and 100% on Start-ups\nlabelGR5 = In case relaxation not to be given for startups, indenter shall tick the same\nlabelGR6 = Justification\nlabelGR7 = Signed justification needed to be submited at the level of level IV \nlabelGR8 = 3.PQC BASED ON Single Order based on\nlabelGR9 = Quantity of Principal item\nlabelGR10 = (Required only for PQC based on Quantity.Shall exclude auxiliary items)\nlabelGR11 = PQC Criteria\nlabelGR12 = 1. Type of Supplier\nlabelGR13 = 2. Industry Type\nlabelGR14 = 3. Copy of Purchase Order to be submitted along with any one of the following\n\n#radioBtn\nradBtn1 = Preffered Delivery \nradBtn2 = Firm Delivery\nradBtn3 = Yes relaxation on Past Orders is applicable at 15% on MSMEs and 100% in Start-ups\nradBtn4 = No relaxation to be given on startups as the items are related to public safety, health, critical safety operation & equipments etc \nradBtn5 = Basic Order value in Lacs\nradBtn6 = Principal Quantity\nradBtn7 = As per MM Manual (60%)\nradBtn8 = User Spec Value/Quantity\nradBtn9 = PQC Value/Quantity\nradBtn10 = Not applicable\nradBtn11 = Manufacture of the indented items(s)\nradBtn12 = Manufacture or Authorised Agent (authorised dealer/channel partner of the manufacturer - a documentatary proof should be submitted) of the indented items(s). If the bidder is not a manufacturer, he shall submit valid authorisation letter authorisation certificate duly issued by the Manufacturer.\n\nradBtn15 = Manufacture or Authorised Agent (authorised dealer/ channel partner of the manufacturer)\nof the indented item(s).  If contain undertaking of the manufacturer to provide necessary warranty cover as per bid requirements.\n\n# tic box\nradBtn16 = Hydrocarbon sectors like refineries, Petrochemicals, Fertilizer Plants, Oil \nand Gas Processing Plants\n\nradBtn17 = Power Plants/Utility Plants\nradBtn18 = Any Industry/Establishment\nradBtn19 = User Specific PQC\n\nradBtn20 = 1.Copy of invoice\nradBtn21 = 2.Completion certificate\nradBtn22 = 3.Satisfactory performance certificate\nradBtn23 = 4.LR copy(Lorry Receipt Copy)\nradBtn24 = 5.Third party Inspection certifaction release notes\nradBtn25 = 6.User Specific\n\n\n#header\nheader1 = 5.Any Other PQC\nheader2 = Bid Evaluation Criteria\n\n#text\ntext1 = 1.The Bidder shall comply with all the technical specifications and scope given in the tender.\ntext2 = 2.Brid Evaluation Criteria\ntext3 = 3.The bidder shall agree to support and maintain the system for \ntext3.1 = years by supplying spares and rendering services. An understanding shall be given in this regard.\ntext4 = 4.The bidder should quoate for all items - A confirmation to this effect should be attached with Technical Bid\ntext5 = Any other Criteria\n\n#comboBox\ncmb1 = Overall L-1 i.e Overall lowest klanded cost net of tax set offs\ncmb2 = Groupwise L-1 i.e Groupwise lowest landed cost net of taxes set offs\ncmb3 = Item wise L-1 i.e item-wise lowest landed cost net of tax set offs\ncmb4 = Quantity wise can be split\ncmb5 = Quantity wise can not be split\n\n# Button\nfBtn1 = SAVE AS DRAFT\nfBtn2 = SAVE\n\n\n#tablePropertiesname\ntabName1 = Emp Code\ntabName2 = Emp Name\ntabName3 = Emp Designation\ntabName4 = Authority Level\ntabName5 = Status\ntabName6 = Remarks',
	"mrpl/etender/ceg/manifest.json":'{"_version":"1.48.0","sap.app":{"id":"mrpl.etender.ceg","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.4","toolsId":"f7cd3804-c67c-4f01-ad9c-1817aeeb95a0"},"dataSources":{"s4Service":{"uri":"odata/v2/etender-s4/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}},"capService":{"uri":"odata/v2/etender-catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"2.0"}}},"crossNavigation":{"inbounds":{"mrpl-ceg":{"semanticObject":"mrpl","action":"ceg","title":"{{flpTitle}}","subTitle":"{{flpSubtitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.108.26","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"mrpl.etender.ceg.i18n.i18n"}},"":{"dataSource":"s4Service","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"capService":{"dataSource":"capService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"mrpl.etender.ceg.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"Routecegform","pattern":":?query:","target":["Targetcegform"]}],"targets":{"Targetcegform":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"cegform","viewName":"cegform"}}},"rootView":{"viewName":"mrpl.etender.ceg.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"mrpl.etender"}}',
	"mrpl/etender/ceg/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"mrpl/etender/ceg/view/App.view.xml":'<mvc:View controllerName="mrpl.etender.ceg.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"mrpl/etender/ceg/view/cegform.view.xml":'<mvc:View controllerName="mrpl.etender.ceg.controller.cegform"\n    xmlns:mvc="sap.ui.core.mvc"\n    xmlns:l="sap.ui.layout"\n    xmlns:f="sap.ui.layout.form"\n    xmlns:core="sap.ui.core"\n    xmlns:m="sap.m"\n    xmlns:layout="sap.ui.layout"\n    xmlns="sap.uxap"><ObjectPageLayout id="ObjectPageLayout" upperCaseAnchorBar="false" showFooter="true"><headerTitle></headerTitle><headerContent><m:FlexBox wrap="Wrap" fitContainer="true"><m:Image class="sapUiSmallMarginEnd" src="Image/header.png" width="100%" height="auto" /></m:FlexBox></headerContent><sections><ObjectPageSection titleUppercase="false" id="Employment" title="section-1"><subSections><ObjectPageSubSection titleUppercase="false"><f:SimpleForm editable="true" layout="ColumnLayout" columnsM="2" columnsL="3" columnsXL="4"><f:content><m:Label text="{i18n>pr_no}"/><m:Input/><m:Label text="{i18n>budget_privision}"/><m:Input/><m:Label text="{i18n>backup_measurement}"/><m:Input /><m:Label text="{i18n>brief_history}"/><m:Input /><m:Label text="{i18n>description}"/><m:Input/><m:Label text="{i18n>amount_provided}"/><m:Input /><m:Label text="{i18n>backup_rates}"/><m:Input /><m:Label text="{i18n>financial_viability}"/><m:Input /><m:Label text="{i18n>cost_center}"/><m:Input /><m:Label text="{i18n>backup_quantities}"/><m:Input /><m:Label text="{i18n>total_amount_estimate}"/><m:Input /><m:Label text="{i18n>scope_defining}"/><m:Input /></f:content></f:SimpleForm></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" id="Employmsent" title="section-2"><subSections><ObjectPageSubSection titleUppercase="false"><f:SimpleForm editable="true" layout="ColumnLayout" columnsM="2" columnsL="3" columnsXL="4"><f:content><m:Label text="{i18n>basis_rates_quantities}"/><m:Input/><m:Label text="{i18n>time_estimates_perpared}"/><m:Input/><m:Label text="{i18n>time_estimated_commencement}"/><m:Input/><m:Label text="{i18n>type_tender}"/><m:Input /><m:Label text="{i18n>chart_attached}"/><m:Input /><m:Label text="{i18n>please_specify}"/><m:Input /></f:content></f:SimpleForm></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" id="Emplo" title="Table"><ObjectPageSubSection titleUppercase="false"><m:ScrollContainer\n\tid="idScrollContainer"\n\twidth="100%"\n\theight="auto"\n\thorizontal="true"\n\tvertical="false"><m:Table id="idProductsTable"\n\t\tinset="false"\n\t\tgrowing="true"\n\t\tgrowingScrollToLoad="true"\n\t\titems=""><m:columns><m:Column width="12em"><m:Text text="{i18n>table_title}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>item_code}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>t_des}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>uom}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>qty}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>basic_for_estimate}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>previous_po}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>po_date}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>po_unit_rate}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>escalated_price}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>budget_offer}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>final_estimate}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>total_amount}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\ttext="201"/><m:Text\n\t\t\t\t\t\ttext="test description" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="50" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="50" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /><m:Text\n\t\t\t\t\t\ttext="test" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></ObjectPageSection><ObjectPageSection titleUppercase="false" id="Tabtitlee3" title="{i18n>sectionsTitle010}"><subSections><ObjectPageSubSection titleUppercase="false"><m:ScrollContainer\n                id="idScrollContainers3"\n                width="100%"\n                height="auto"\n                horizontal="true"\n                vertical="false"><m:Table id="idProductsTables3"\n                    inset="false"\n                    growing="true"\n                    growingScrollToLoad="true"\n                    items=""><m:columns><m:Column width="12em"><m:Text text="{i18n>Section2Tab1}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab5}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab6}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab7}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab8}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab9}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab10}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab11}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab12}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab13}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab14}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab15}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>Section2Tab16}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-3" /></m:HBox><m:HBox><m:Text text="Test1-5" /></m:HBox><m:HBox><m:Text text="Test1-7" /></m:HBox><m:HBox><m:Text text="Test1-9" /></m:HBox><m:HBox><m:Text text="Test1-11" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox><m:HBox><m:Text text="Test1-1" /></m:HBox></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-3" /></m:HBox><m:HBox><m:Text text="Test2-5" /></m:HBox><m:HBox><m:Text text="Test2-7" /></m:HBox><m:HBox><m:Text text="Test2-9" /></m:HBox><m:HBox><m:Text text="Test2-11" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox><m:HBox><m:Text text="Test2-1" /></m:HBox></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" id="Tabtitlee" title="{i18n>sectionsTitle8}"><subSections><ObjectPageSubSection titleUppercase="false"><m:ScrollContainer\n\tid="idScrollContainers"\n\twidth="100%"\n\theight="auto"\n\thorizontal="true"\n\tvertical="false"><m:Table id="idProductsTables"\n\t\tinset="false"\n\t\tgrowing="true"\n\t\tgrowingScrollToLoad="true"\n\t\titems=""><m:columns><m:Column width="12em"><m:Text text="{i18n>tabName1}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName5}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName6}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="Test-EmpCode"/><m:Text\n\t\t\t\t\t\ttext="Test-EmpName" /><m:Text\n\t\t\t\t\t\ttext="Test-EmpDesg" /><m:Text\n\t\t\t\t\t\ttext="Test-AuthLevel" /><m:Text\n\t\t\t\t\t\ttext="Test-Status" /><m:Text\n\t\t\t\t\t\ttext="Test-Reason" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="Test-EmpCode"/><m:Text\n\t\t\t\t\t\ttext="Test-EmpName" /><m:Text\n\t\t\t\t\t\ttext="Test-EmpDesg" /><m:Text\n\t\t\t\t\t\ttext="Test-AuthLevel" /><m:Text\n\t\t\t\t\t\ttext="Test-Status" /><m:Text\n\t\t\t\t\t\ttext="Test-Reason" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></subSections></ObjectPageSection><ObjectPageSection titleUppercase="false" id="Tabtitlee1" title="{i18n>sectionsTitle09}"><subSections><ObjectPageSubSection titleUppercase="false"><m:ScrollContainer\n\tid="idScrollContainers1"\n\twidth="100%"\n\theight="auto"\n\thorizontal="true"\n\tvertical="false"><m:Table id="idProductsTables1"\n\t\tinset="false"\n\t\tgrowing="true"\n\t\tgrowingScrollToLoad="true"\n\t\titems=""><m:columns><m:Column width="12em"><m:Text text="{i18n>tabName1}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName2}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName3}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName4}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName5}" /></m:Column><m:Column width="12em"><m:Text text="{i18n>tabName6}" /></m:Column></m:columns><m:items><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="Test-EmpCode"/><m:Text\n\t\t\t\t\t\ttext="Test-EmpName" /><m:Text\n\t\t\t\t\t\ttext="Test-EmpDesg" /><m:Text\n\t\t\t\t\t\ttext="Vetted by CEG - Indenting Dept" /><m:Text\n\t\t\t\t\t\ttext="Test-Status" /><m:Text\n\t\t\t\t\t\ttext="Test-Reason" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="Test-EmpCode"/><m:Text\n\t\t\t\t\t\ttext="Test-EmpName" /><m:Text\n\t\t\t\t\t\ttext="Test-EmpDesg" /><m:Text\n\t\t\t\t\t\ttext="Vetted by CEG - Materials" /><m:Text\n\t\t\t\t\t\ttext="Test-Status" /><m:Text\n\t\t\t\t\t\ttext="Test-Reason" /></m:cells></m:ColumnListItem><m:ColumnListItem vAlign="Middle"><m:cells><m:ObjectIdentifier\n\t\t\t\t\t\t\n\t\t\t\t\t\ttext="Test-EmpCode"/><m:Text\n\t\t\t\t\t\ttext="Test-EmpName" /><m:Text\n\t\t\t\t\t\ttext="Test-EmpDesg" /><m:Text\n\t\t\t\t\t\ttext="Vetted by CEG - Finance" /><m:Text\n\t\t\t\t\t\ttext="Test-Status" /><m:Text\n\t\t\t\t\t\ttext="Test-Reason" /></m:cells></m:ColumnListItem></m:items></m:Table></m:ScrollContainer></ObjectPageSubSection></subSections></ObjectPageSection></sections><footer><m:Bar><m:contentRight><m:Button text="{i18n>Btn1}" press="onSavePress" /><m:Button text="{i18n>Btn2}" press="onSaveAsDraftPress" /></m:contentRight></m:Bar></footer></ObjectPageLayout></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
