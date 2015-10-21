## notifyMe
### Introduction

notifyMe is a library used to create web Notification Object With default setting.
Before send a notification, you can change appear time and click event handler through setter function.

### Create Object
var notifyMeObject = new notifyMe();

### Setter function
// set onclick callback function
notifyMeObject.setOnClick(function callback(parameters...){});

// set appear time to 1000 millisecond
notifyMeObject.setAppearTime(1000);

### Send a Notification
notifyMeObject.sendNotification("display a string");
