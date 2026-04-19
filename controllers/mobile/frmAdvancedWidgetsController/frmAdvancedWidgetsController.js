define({ 

  //Type your controller code here 
  advanced:function()
  {
    var segSelectedIndex = this.view.segAdvanced.selectedIndex[1];
    var formToBeNavigated=null;
    switch(segSelectedIndex)
    {
      case 0:	
        formToBeNavigated="frmSegmentOptions";
        break;		
      	
      case 1:
        formToBeNavigated="frmMap";
        break;
      case 2:
        if(kony.os.deviceInfo().model == "iPhone Simulator")
        {
          alert("Works only on device");				
        }
        else
        {
          formToBeNavigated="frmPhn";					
        }
        break;
      case 3:
        if(kony.os.deviceInfo().name =="iPad" || kony.os.deviceInfo().name=="iPad Simulator")
        {
          formToBeNavigated="frmSwitch";				
        }
        else
        {
          formToBeNavigated="frmBrowserOptions";			
        }
        break;						
      case 4:
        //if(kony.os.deviceInfo().name == "blackberry" || kony.os.deviceInfo().name == "android" || kony.os.deviceInfo().name == "thinclient")
        if(kony.os.deviceInfo().name == "android")
        {
          formToBeNavigated="frmPickerView";
          //alert("Available only in iPhone and WindowsPhone");

        }
        else
        {
          formToBeNavigated="frmSwitch";				
        }	
        break;
      case 5:
//         if(kony.os.deviceInfo().name == "WindowsPhone" && kony.os.deviceInfo().version.substring(0,1)=="7")
//         {
//           set3DOSData();
//           formToBeNavigated="frm3DObj";				
//         }
//         else 
//         {
          formToBeNavigated="frmPickerView";				
//         }
        break;
      case 6:
        if(kony.os.deviceInfo().name == "WindowsPhone")
        {
          formToBeNavigated="frmPickerView";
          break;
        }
    } 
    var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();
  },
   switchandOS3D:function()
{

	if(kony.os.deviceInfo().name == "android"  )
	{
		//alert("Device name "+kony.os.deviceInfo().name+" type "+typeof(kony.os.deviceInfo().name));
	    this.view.segAdvanced.data= [{
	            "lblData": "Segment"
	        }, {
	            "lblData": "Map"
	        }, {
	            "lblData": "Phone"
	        }, {
	            "lblData": "Browser"
	        },{
	            "lblData": "Picker view"
	        }];
	
	}
// 	else if (kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name=="iPad Simulator" )
// 	{
		
// 	    frmAdvancedWidgets.segFirst.data= [{
// 	            "lblData": "Segment"
// 	        }, {
// 	            "lblData": "Hz Image Strip"
// 	        }, {
// 	            "lblData": "Image Gallery"
// 	        }, {
// 	            "lblData": "Map"
// 	        }, {
// 	            "lblData": "Browser"
// 	        }, {
// 	            "lblData": "Switch"
// 	        }];
// 	}
	else if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
	{
		
	    this.view.segAdvanced.data= [{
	            "lblData": "Segment"
	        }, {
	            "lblData": "Map"
	        }, {
	            "lblData": "Phone"
	        }, {
	            "lblData": "Browser"
	        }, {
	            "lblData": "Switch"
	        },{
	            "lblData": "Picker view"
	        }];
	}
// 	else if(kony.os.deviceInfo().name == "WindowsPhone" && kony.os.deviceInfo().version.substring(0,1)=="8")
// 	{
			
// 		    frmAdvancedWidgets.segFirst.data= [{
// 		            "lblData": "Segment"
// 		        }, {
// 		            "lblData": "Hz Image Strip"
// 		        }, {
// 		            "lblData": "Image Gallery"
// 		        }, {
// 		            "lblData": "Map"
// 		        }, {
// 		            "lblData": "Phone"
// 		        }, {
// 		            "lblData": "Browser"
// 		        }, {
// 		            "lblData": "Switch"
// 		        },{
// 	          		"lblData": "Picker view"
// 	        	}];
// 	}
	else
	{
		
	    this.view.segAdvanced.data= [{
	            "lblData": "Segment"
	        }, {
	            "lblData": "Map"
	        }, {
	            "lblData": "Phone"
	        }, {
	            "lblData": "Browser"
	        }, {
	            "lblData": "Switch"
	        }, {
	            "lblData": "ObjectSelector3D"
	        },{
	            "lblData": "Picker view"
	        }];
	}

}
});