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
		var list = new sap.m.List({ id: "scheduleList" });
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
					var list = sap.ui.getCore().byId("scheduleList");
					list.destroyItems();
					for (var i=0; i<scheduledIds.length; i++) {
						var str = scheduledIds[i];
						var li = new sap.m.ObjectListItem();
						//alert("str=" + str);
						//debugger
						var item = localStorage.getItem(str);
						if (item != null) {
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
				}
		);
	},

	onPressBack: function(evt) {
		app.navBack();
	},

	onPressRefresh: function(evt) {
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
		//alert(dt);
		var soon = dt.getTime() + (15*1000);	// 15 seconds from now...
		dt.setTime(soon);		

		var hrs = dt.getHours();
		var min = dt.getMinutes();
		var ampm = (hrs > 12) ? "PM" : "AM";
		hrs = (hrs > 12) ? hrs-12 : hrs;
		min = (min < 10) ? "0" + min : min;
		var id = hrs + ":" + min + " " + ampm;	
		var msg = "test alert " + id;
		//debugger
		var obj = {
				"id": id,
				"repeat": "daily",
				"repeatDays": "Fr ",
				"date": dt,
				"badge": "1",
				"sound": "./snd/clong.caf",
				"message": msg
		};
		localStorage.setItem(id, JSON.stringify(obj));
		window.plugin.notification.local.add({
			"id": id,
			"repeat": "daily",
			"repeatDays": "Fr ",
			"date": dt,
			"badge": "1",
			"sound": "./snd/clong.caf",
			"message": msg
		}, this.populateList);
		//this.populateList();
	},

	onPressAdd: function(evt) {
		app.prevController = this;
		app.navTo("AddSchedule", evt);
	},
});
