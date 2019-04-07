chrome.browserAction.onClicked.addListener((tab) => {
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	
	const colorPicker = () => {
		const randomIndex = Math.floor(Math.random() * colors.length);
		return colors[randomIndex];
	}

	chrome.tabs.executeScript({
		code: 'document.body.style.backgroundColor = "' + colorPicker() + '"'
	});
});
