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

<<<<<<< HEAD
### Request a Notification
notifyMeObject.requestPermission();
=======
<p>set icon url</p>
notifyMeObject.setIconUrl("your url link");
>>>>>>> cfe54c16b84afd6dcfdeac06dcb5c5a71466b945

### Send a Notification
notifyMeObject.sendNotification("display a string");
