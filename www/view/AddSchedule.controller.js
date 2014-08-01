sap.ui.controller("com.dsa157.ruok.view.AddSchedule", {

//	onInit: function() {

//	},

//	onBeforeRendering: function() {

//	},

//	onAfterRendering: function() {

//	},

//	onExit: function() {

//	}

	onPressBack: function(evt) {
		app.navBack();
	},

	getMessage: function() {
		var msg = this.byId('msg').getValue();
		if (msg == "") {
			msg = "ROUK Reminder!";
		}
		return msg;
	},

	getDate: function() {
		var timeStr = this.byId('dt').getValue();
		//alert(timeStr);
		var dt = new Date();

		if (timeStr != "") {
			var dateStr = (dt.getMonth()+1) + "/" + dt.getDate() + "/" + dt.getFullYear() + " ";	
			//alert(dateStr);
			dt = new Date(dateStr + timeStr);
		}
		return dt;
	},
	
	getRepeatStr: function() {
		var str = "";
		str += this.byId("Mo").getSelected() ? "Mo " : "";
		str += this.byId("Tu").getSelected() ? "Tu " : "";
		str += this.byId("We").getSelected() ? "We " : "";
		str += this.byId("Th").getSelected() ? "Th " : "";
		str += this.byId("Fr").getSelected() ? "Fr " : "";
		str += this.byId("Sa").getSelected() ? "Sa " : "";
		str += this.byId("Su").getSelected() ? "Su " : "";
		return str;
	},
	
	getTimeStr: function() {
		var timeStr = this.byId('dt').getValue();
		if (timeStr == "") {
			var dt = new Date();
			var hrs = dt.getHours();
			var min = dt.getMinutes();
			min = (min < 10) ? "0" + min : min;
			var ampm = (hrs > 12) ? "PM" : "AM";
			hrs = (hrs > 12) ? hrs-12 : hrs;
			timeStr = hrs + ":" + min + " " + ampm;	
		}
		return timeStr;
	},

	onPressSave: function(evt) {
		var repeatDays = this.getRepeatStr();
		var id = this.getTimeStr();
		var msg = this.getMessage();
		var dt = this.getDate();
		
		//alert(dt);
		var obj = {
				"id": id,
				"repeat": "daily",
				"repeatDays": repeatDays,
				"date": dt,
				"sound": "./snd/clong.caf",
				"message": msg
		};
		
		localStorage.setItem(id, JSON.stringify(obj));

		window.plugin.notification.local.add({
			"id": obj.id,
			"repeat": obj.repeat,
			"date": obj.date,
			"sound": obj.sound,
			"message": obj.message
		});
		app.navBack();
	}

});
