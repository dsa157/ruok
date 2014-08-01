sap.ui.controller("com.dsa157.ruok.view.Schedule", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf com.dsa157.ruok.Schedule
	 */
	onInit: function() {

	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf com.dsa157.ruok.Schedule
	 */
	onBeforeRendering: function() {
		var list = new sap.m.List({ id: "list1" });
		var vbox = this.byId("vbox");
		vbox.addItem(list);
		this.populateList();
	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf com.dsa157.ruok.Schedule
	 */
	//	onAfterRendering: function() {

	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf com.dsa157.ruok.Schedule
	 */
	//	onExit: function() {

	//	}

	populateList: function() {
		window.plugin.notification.local.getScheduledIds(
				function (scheduledIds) {
					var list = sap.ui.getCore().byId("list1");
					list.destroyItems();
					for (var i=0; i<scheduledIds.length; i++) {
						var str = scheduledIds[i];
						var li = new sap.m.ObjectListItem();
						//alert("str=" + str);
						var obj = JSON.parse(localStorage.getItem(str));
						li.setTitle(obj.id);
						var attr = new sap.m.ObjectAttribute();
						attr.setText(obj.message);
						var status = new sap.m.ObjectStatus();
						status.setText(obj.repeatDays);
						li.setFirstStatus(status);
						li.addAttribute(attr);
						//alert("n1=" + notifObject.id);
						list.addItem(li);
					}
				}
		);
	},

	onPressBack: function(evt) {
		app.navBack();
	},

	onPressTest: function(evt) {
		this.populateList();
	},

	onPressClear: function(evt) {
		window.plugin.notification.local.getScheduledIds(
				function (scheduledIds) {
					for (var i=0; i<scheduledIds.length; i++) {
						var str = scheduledIds[i];
						localStorage.removeItem(str);
					}
				}
		);

		window.plugin.notification.local.cancelAll("handleCancelAll", "");
		this.populateList();
	},

	onPressAutoAdd: function(evt) {
		var dt = new Date();
		var hrs = dt.getHours();
		var min = dt.getMinutes();
		var ampm = (hrs > 12) ? "PM" : "AM";
		hrs = (hrs > 12) ? hrs-12 : hrs;
		min = (min < 10) ? "0" + min : min;
		var id = hrs + ":" + min + " " + ampm;	
		var msg = "test 123";
		var obj = {
				"id": id,
				"repeat": "daily",
				"repeatDays": "Fr ",
				"date": dt,
				"sound": "./snd/clong.caf",
				"message": msg
		};
		//alert("n=" + obj.message);
		//alert("n2=" + JSON.stringify(obj));
		localStorage.setItem(id, JSON.stringify(obj));
		var x = JSON.parse(localStorage.getItem(id));
		//alert("x=" + x);
		//alert("x2=" + JSON.stringify(x));

		window.plugin.notification.local.add({
			"id": obj.id,
			"message": obj.message
		});
		this.populateList();
	},

	onPressAdd: function(evt) {
		app.navTo("AddSchedule", evt);
	},
});
