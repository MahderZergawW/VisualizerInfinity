define({ 

 onCapturePortrait:function(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	this.view.imgCamPortrait.rawBytes = cameraObj.rawBytes;
	this.view.lblFrmCamOrient.text = "First image from left is the captured image in portrait orientation mode"
	kony.application.dismissLoadingScreen();
	
},
        onCaptureLandScape:function(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	this.view.imgCamLand.rawBytes = cameraObj.rawBytes;
	this.view.lblFrmCamOrient.text = "Second image from left is the captured image in Landscape orientation mode"
	kony.application.dismissLoadingScreen();
}

 });