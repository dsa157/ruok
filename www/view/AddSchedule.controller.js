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

	onPressSave: function(evt) {
      var msg = this.byId('msg').getValue();
      if (msg == "") {
        msg = "ROUK Reminder!";
      }
      var dt = this.byId('dt').getValue();
      if (dt == "") {
        dt = new Date().getTime();
      }
                  
      window.plugin.notification.local.add({
        id: dt,
        sound: './snd/clong.caf',
        message: msg
      });

      //alert("msg=" + msg);
      //alert("dt=" + JSON.stringify(dt));
	}


});
