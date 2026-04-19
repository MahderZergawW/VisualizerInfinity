define({ 

 //Type your controller code here 
	   geoSuccessCallBack:function(position)
{	
// 	if((channel == "tablet"||channel == "desktopweb")&& kony.os.deviceInfo().name == "thinclient")
// 		frmGeoCurrentNWatch.addWidgets();

	try
	{
		this.view.lblFrmGeoLat.text ="= "+position.coords.latitude;
		this.view.lblFrmGeoLon.text ="= " + position.coords.longitude;
		this.view.lblFrmGeoAlt.text ="= " + position.coords.altitude;
		this.view.lblFrmGeoAccur.text= "= " + position.coords.accuracy;
		this.view.lblFrmGeoHead.text ="= "+ position.coords.heading;
		if (kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
		{
			this.view.lblFrmGeoSpeed.text = "= " + position.coords.speed;
		}
		else
		{
			this.view.lblFrmGeoSpeed.text = "= " + position.coords.speeding;
		}
		this.view.lblFrmGeoTimeStamp.text="= " + position.timestamp;
		latitude = position.coords.latitude ;
		longitude = position.coords.longitude ;
	
	}
	catch(err)
	{
		alert("error is : "+err);
		kony.application.dismissLoadingScreen();
	}
// 	if(channel != "tablet" && channel != "desktopweb")
// 		frmGeoCurrentNWatch.show();
// 	else if((channel == "tablet"||channel == "desktopweb")&& kony.os.deviceInfo().name == "thinclient")
// 		frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
// 	else
		//frmDeviceFeatures.sbxDevFeatureDeatils.add(frmGeoCurrentNWatch.hbxGeoLocation);
	kony.application.dismissLoadingScreen();
},
 geoErrorCallBack:function(positionerror)
{
	alert("Error occured while retrieving the data")
	kony.application.dismissLoadingScreen();
},
 geoPosition:function()
{      
		kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, false,null);
		var positionoptions = {timeout: 15000};
		kony.location.getCurrentPosition(this.geoSuccessCallBack, this.geoErrorCallBack,positionoptions);
}
 });