sap.ui.controller("com.dsa157.ruok.Menu", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf com.dsa157.ruok.Product
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf com.dsa157.ruok.Product
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf com.dsa157.ruok.Product
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf com.dsa157.ruok.Product
*/
//	onExit: function() {
//
//	},
	
  onPressMySchedule: function(evt) {
    app.navTo("Schedule", evt);
  },

  onPressRecipients: function(evt) {
    app.navTo("Recipients", evt);
  },

  onPressContacts: function(evt) {
    app.navTo("Contacts", evt);
  },

  onPressChallenges: function(evt) {
    app.navTo("Challenges", evt);
  },	

  onPressReports: function(evt) {
    app.navTo("Reports", evt);
  },
	
  onPressBack: function(evt) {
    app.navBack();
  }


});
