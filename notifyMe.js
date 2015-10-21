notifyMe = function() {
	this.delayTime = 0;
	this.appearTime = 10000;
	this.onClick;

	this.sendNotification = function (displayString) {
		if (!("Notification" in window)) {
			alert("This browser does not support desktop notification");
		}
		
		// Let's check whether notification permissions have already been granted
		else if (Notification.permission === "granted") {
		// If it's okay let's create a notification
			var notification = new Notification(displayString);
			notification.onclick = this.onClick;
			setTimeout(notification.close.bind(notification), this.appearTime);
		}

		// Otherwise, we need to ask the user for permission
		else if (Notification.permission !== 'denied') {
			Notification.requestPermission(function (permission) {
				// If the user accepts, let's create a notification
				if (permission === "granted") {
					var notification = new Notification(displayString);
					notification.onclick = this.onClick;
					setTimeout(notification.close.bind(notification), this.appearTime);
				}
			});
		}
	}

	this.setAppearTime = function (appearTime) {
		this.appearTime = appearTime;
	}

	this.setOnClick = function (onClickCallBack) {
			this.onClick = onClickCallBack;
	}
};