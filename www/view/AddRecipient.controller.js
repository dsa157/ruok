sap.ui.controller("com.dsa157.ruok.view.AddRecipient", {

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
		//app.navBack();
	},

	onPressSearch: function(evt) {
		var view = this.getView();
		var val = view.byId('searchContactsField').getValue();
		var options = new ContactFindOptions();
		options.filter = val;
		options.multiple = true;
		var fields = ["name"];
		navigator.contacts.find(fields, this.onSearchSuccess, this.onSearchError, options);
	},

	onSearchSuccess: function(contacts) {
		for (var i = 0; i < contacts.length; i++) {
			alert("Name = " + contacts[i].name.formatted);
		}
	},

	onSearchError: function(contactError) {
		alert('onError!');
	}


});
