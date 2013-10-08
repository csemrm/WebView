var win1 = Titanium.UI.createWindow({
	backgroundColor : '#fff',

});

// Create a WebView
var aWebView = Ti.UI.createWebView({
	url : 'chart.html'
});
aWebView.addEventListener('load', function(e) {

	Ti.API.info('webview loaded: ' + e.url);
});

win1.add(aWebView);

win1.open({
	fullscreen : true
});
