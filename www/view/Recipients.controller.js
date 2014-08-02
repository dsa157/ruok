sap.ui.controller("com.dsa157.ruok.view.Recipients", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.dsa157.ruok.Recipients
	 */
//	onInit: function() {

//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.dsa157.ruok.Recipients
	 */
	onBeforeRendering: function() {
		var list = new sap.m.List({ id: "recipientList" });
		var vbox = this.byId("vbox");
		vbox.addItem(list);
		this.populateList();
	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.dsa157.ruok.Recipients
	 */
//	onAfterRendering: function() {

//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.dsa157.ruok.Recipients
	 */
//	onExit: function() {

//	}

	populateList: function() {
		debugger
		var list = sap.ui.getCore().byId("recipientList");
		list.destroyItems();
		var recipients = JSON.parse(localStorage.getItem("recipients"));
		//alert(isEmpty(recipients));
		if (isEmpty(recipients) == false) {
			for (k in recipients) {
				if (recipients.hasOwnProperty(k)) {
					var li = new sap.m.ObjectListItem();
					//alert(recipients[k]);
					var contact = recipients[k];
					li.setTitle(contact.name.formatted);
					list.addItem(li);
				}
			}
		}
	},

	onPressClear: function(evt) {
		localStorage.setItem("recipients", JSON.stringify({}));
		this.populateList();
	},

	onPressTest: function(evt) {
		this.populateList();
	},

	onPressBack: function(evt) {
		app.navBack();
	},

	onPressAdd: function(evt) {
		app.navTo("AddRecipient", evt);
	},


});