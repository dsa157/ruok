sap.ui.controller("com.dsa157.ruok.view.AddRecipient", {

	contactList: null,
	
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
		debugger
		var list = sap.ui.getCore().byId("contactSearchList");
		var selectedItems = list.getSelectedItems();
		var recipients = JSON.parse(localStorage.getItem("recipients"));
		//alert("recipients=" + recipients);
		if (isEmpty(recipients)) {
			//alert("oops - no recipients yet...");
			recipients = {};
		}
		for (var i = 0; i < selectedItems.length; i++) {
			var li = selectedItems[i];
			var contact = li.data("data");
			var id = "c-" + contact.id;
			recipients[id]=contact;	
		}
		localStorage.setItem("recipients", JSON.stringify(recipients));
		//alert(recipients.length);

		app.navBack();
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
		contactList = contacts;
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
			li.setTitle(contacts[i].name.formatted);
			li.data("data", contacts[i]);
			list.addItem(li);
		}
		list.setMode(sap.m.ListMode.MultiSelect);
	},

	onSearchError: function(contactError) {
		alert('onError!');
	}
});
