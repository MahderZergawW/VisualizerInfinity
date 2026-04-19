define({ 

 //Type your controller code here
  params:{},
  
   read :function()
{
	
	kony.application.settings.read ("key1", this.onsuccesscallback, this.onfailureback);
	kony.application.settings.read ("key2", this.onsuccesscallbackR, this.onfailurebackR);
},
    
 onfailureback:function(errorcode,errormessage)
{
	alert("err is :"+errormessage);	
},
   onsuccesscallback:function(key,value)
{
	if ( value=== null || value === "")
	{
		
			this.params.text = "Empty";
		
	}
	else
	{
		
			this.params.text = value;
		
	}
},
 onsuccesscallbackR:function(key,value)
{
	//var params={};	
  	this.params.value = value;
	
		switch(value)
		{
			case "Table view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_TABLEVIEW;
							break;
			case "Page view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_PAGEVIEW;
							this.params.pageOffDotImage = "orngsld";
							this.params.pageOnDotImage = "whitesld";
							break;
			case "Coverflow view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_COVERFLOW;
							break;
			case "Cylinder view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_CYLINDER;
							break;
			case "Linear view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_LINEAR;
							break;
			case "Stack view":
							this.params.viewType = constants.SEGUI_VIEW_TYPE_STACK;
							break;								
			
		}
  	var ntf=new kony.mvc.Navigation("frmAppSetRead");
	ntf.navigate(this.params);
},

 onfailurebackR:function(errorcode,errormessage)
{
	alert("Err is :"+errormessage);
}

 });