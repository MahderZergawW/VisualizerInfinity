define({ 

 //Type your controller code here 
  
   browserOptions:function(eventObj)
  {
    var params={};
    params.text=eventObj.text;
		switch(eventObj.text)
	{
		case "Browser with static content":
			params.title = "Static HTML";
			if(kony.os.deviceInfo().name == "android")
				params.htmlString ="<p><font size=\"3\" color=\"black\">This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</font></p>";
			else
				params.htmlString ="<h3>This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.<br/> This area will contain everything that will be visible through a web browser, such as text and graphics. All of the information will be HTML coded.</h3> ";
			break;
		case "Browser with dynamic content":
			params.title = "Dynamic URL";
			params.requestURLConfig = {
		        "URL": "http://www.kony.com",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
			break;
		case "Browser with inline Navigation":
			params.title = "Inline browser";			
			params.requestURLConfig = {
		        "URL": "http://www.google.co.in",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Detect Telephone numbers":
			params.title = "Detect phone num";
			params.requestURLConfig = {
		        "URL": "http://www.google.com/contact",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    break;
		case "Enable Zoom property of Browser":
			 params.title = "Enable zoom";
			 params.requestURLConfig = {
		        "URL": "http://www.apple.com/in/",
		        "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
		    };
		    params.enableZoom = true;
		    break;
		
	}
  	var ntf=new kony.mvc.Navigation("frmBrowser");
	ntf.navigate(params);

}


 });