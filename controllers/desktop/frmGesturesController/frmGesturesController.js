define({ 

 //Type your controller code here 
/*****************************************************************
*	Name    : onGestureFunction
*	Author  : Kony 
*	Purpose : To give an alert as which gesture is performed on the form 'frmGestures'
******************************************************************/

 onGestureFunction:function(commonWidget,gestureInfo)// The callback function when the gesture event is triggered.
{
	this.view.imgGes.isVisible = true;
	try
	{
		var direction = "";
		var GesType = ""+gestureInfo.gestureType;
		var tapParams = gestureInfo.gesturesetUpParams.taps;
		if (GesType == "1") //Double tap gesture
		{  
// 		    if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet" && channel !="desktopweb")
// 	        	this.view.lblGesture.text ="A Double tap gesture was performed."; 
// 	        else if (channel=="tablet" ||channel=="desktopweb" )
// 	        	this.view.lblGestureInfo.text = "A Double tap gesture was performed."; 
			this.view.imgGes.src = "doubletap.png";
		}
		else if (GesType == "2") //Swipe gesture
		{ 
			var swipeDirection = ""+gestureInfo.swipeDirection; //Read swipe direction
			if (swipeDirection == "1") 
			{
				direction = "LEFT";
				this.view.imgGes.src = "arrowsleft.png";
			}
			else if (swipeDirection == "2") 
			{
				direction = "RIGHT";
				this.view.imgGes.src = "arrowsright.png";
			}
			else if (swipeDirection == "3") 
			{
				direction = "TOP";
				this.view.imgGes.src = "arrowstop.png";
			}
			else
			{
				direction = "BOTTOM";
				this.view.imgGes.src = "arrowsbottom.png";
			}
			
// 			if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet" && channel !="desktopweb")
// 	        	this.view.lblGesture.text = "A swipe gesture was performed in the "+direction+" direction."; 
// 	        else if (channel=="tablet" || channel =="desktopweb")
// 	        	this.view.lblGestureInfo.text = "A swipe gesture was performed in the "+direction+" direction.";  
		}
		else if (GesType == "3") 
		{   
// 		    if(kony.os.deviceInfo().name == "thinclient" && channel !="tablet"&& channel !="desktopweb")
// 	        	this.view.lblGesture.text = "A longpress gesture was performed"; 
// 	         else if (channel=="tablet"|| channel =="desktopweb")
// 	        	this.view.lblGestureInfo.text =  "A longpress gesture was performed"; 
			this.view.imgGes.src = "longpress.png";
		}
	}
	catch(err)
	{
		alert("error in gesture call back"+err);
	}
},

/*****************************************************************
*	Name    : GenericGestureHandler
*	Author  : Kony 
*	Purpose : To set gestures(Double tap,Swipe,Long press) to the form 'frmGestures'
******************************************************************/

 GenericGestureHandler:function()//This function registers the Gesture events for the widgets.
{
	try
	{
		this.view.setGestureRecognizer(1, {fingers :1, taps :2}, this.onGestureFunction) ;//double tap gesture
		this.view.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, this.onGestureFunction); // swipe with default parameters
		this.view.setGestureRecognizer(3, {pressDuration:2}, this.onGestureFunction); //2 sec press duration
	}
	catch(err)
	{
		alert("error while regestering the gestures"+err)
	}
}
 });