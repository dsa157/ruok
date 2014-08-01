dsa157.alarm("com.dsa157.ruok.alarm", {

  add: function(id1, dt, msg, ttl, rpt, bdg, jsn, autoc, ong) {
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
   alert(dt);
   window.plugin.notification.local.add({
	id: id1,
	date: dt,
	message: msg,
	title: ttl,
	repeat: rpt,
	badge: bdg,
	json: jsn,
	autoCancel: autoc,
	ongoing: ong
   });
   alert("done");
  }
};
