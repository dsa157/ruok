jQuery.sap.declare("com.dsa157.ruok.view.App");

sap.ui.controller("com.dsa157.ruok.view.App", {

	view: null,
	app: null,
	prevController: null,

	test: function () {
		alert("test");
	},

	onInit : function() {

		this.view = this.getView();

		// Data is fetched here
		jQuery.ajax("Data.json", {   // load the data from a relative URL (the Data.json file in the same directory)
			dataType: "json",
			success: function(data){
				var oModel = new sap.ui.model.json.JSONModel(data);
				this.view.setModel(oModel);
			}
		});


		// remember the App Control
		this.app = this.view.byId("theApp");

		// subscribe to event bus
		bus.subscribe("nav", "to", this.navToHandler, this);
		bus.subscribe("nav", "back", this.navBack, this);
	},

	navToHandler: function(channelId, eventId, data) {
		if (data && data.id) {
			// lazy load view
			if (this.app.getPage(data.id) === null) {
				jQuery.sap.log.info("now loading page '" + data.id + "'");
				this.app.addPage(sap.ui.xmlview(data.id, "com.dsa157.ruok.view." + data.id));
			}
			// Navigate to given page (include bindingContext)
			this.app.to(data.id, data.data.context);
		} else {
			jQuery.sap.log.error("nav-to event cannot be processed. Invalid data: " + data);
		}
	},

	navTo: function(pageID, evt) {
		var bindingContext = evt.oSource.getBindingContext();
		bus.publish("nav", "to", { id : pageID, data : { context : bindingContext } });

	},

	navBack: function() {
		this.app.back();
	}
});
