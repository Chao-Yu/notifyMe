## notifyMe
### Introduction

notifyMe is a library used to create web Notification Object With default setting.
Before send a notification, you can change appear time and click event handler through setter function.

### Create Object

var notifyMeObject = new notifyMe();

### Setter function

<p>set onclick callback function</p>
notifyMeObject.setOnClick(function callback(parameters...){});

<p>set appear time to 1000 millisecond</p>
notifyMeObject.setAppearTime(1000);

### Request a Notification
notifyMeObject.requestPermission();

### Send a Notification
notifyMeObject.sendNotification("display a string");
