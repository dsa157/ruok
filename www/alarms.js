dsa157.alarm("com.dsa157.ruok.alarm", {

  add: function() {
/*
   window.plugin.notification.local.add({
    id:         String,  // A unique id of the notifiction
    date:       Date,    // This expects a date object
    message:    String,  // The message that is displayed
    title:      String,  // The title of the message
    repeat:     String,  // minutely, hourly, daily, weekly, monthly or yearly
    badge:      Number,  // Displays number badge to notification
    sound:      String,  // A sound to be played
    json:       String,  // Data to be passed through the notification
    autoCancel: Boolean, // notification is automatically canceled on clicking
    ongoing:    Boolean, // Prevent clearing of notification (Android only)
   });
*/
   window.plugin.notification.local.add({
	id: '123',
	date: dt,
	message: 'dsa test notif',
	title: 'ruok?',
	repeat: '',
	badge: 2,
	json: {'test': 'testABC' },
	autoCancel: false,
	ongoing: false
   });

  }
};
