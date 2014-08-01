sap.ui.controller("com.dsa157.ruok.view.AddRecipient", {

	onInit: function() {
		var tbl = new sap.m.List({ id: "contactSearchList" });
		var vbox = this.byId("vbox");
		vbox.addItem(tbl);
	},

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
		//app.navBack();
	},

	onPressSearch: function(evt) {
		var ctrl = this.getView().byId('contactSearch');
		var val = ctrl.getValue();
		var options = new ContactFindOptions();
		options.filter = val;
		options.multiple = true;
		var fields = ["name"];
		navigator.contacts.find(fields, bind(this, this.onSearchSuccess), bind(this, this.onSearchError), options);
	},

	onSearchSuccess: function(contacts) {
		var list = sap.ui.getCore().byId("contactSearchList");
		list.destroyItems();
		var ctrl = this.getView().byId("contactSearch");
		var val = ctrl.getValue();
		if (val == "") {
			return;
		}
		//var colName = new sap.m.Column({header: new sap.m.Text({text:"Name"}) });
		//tbl.addColumn(colName);
		for (var i = 0; i < contacts.length; i++) {
			var li = new sap.m.ObjectListItem();
			//li.addCell(new sap.m.Text({ text: contacts[i].name.formatted}))

//			var name = new sap.m.Text();
//			name.setText(contacts[i].name.formatted);
			li.setTitle(contacts[i].name.formatted);
			//li.addCell(name);
			//alert(JSON.stringify(contacts[i]));
			list.addItem(li);
		}
		list.setMode(sap.m.ListMode.MultiSelect);
	},

	onSearchError: function(contactError) {
		alert('onError!');
	}


});
