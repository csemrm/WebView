var win1 = Titanium.UI.createWindow({
	backgroundColor : '#fff',

});

// Create a WebView
var aWebView = Ti.UI.createWebView({
	url : 'http://docs.appcelerator.com/'
});
 
win1.add(aWebView);

win1.open({
	fullscreen : true
});
