var window = Titanium.UI.createWindow({
	backgroundColor : '#fff'
});

// Create a WebView
var aWebView = Ti.UI.createWebView({
	url : 'chart.html'
});
aWebView.addEventListener('load', function(e) {

	Ti.API.info('webview loaded: ' + e.url);
});

window.add(aWebView);

window.open({
	fullscreen : true
});
