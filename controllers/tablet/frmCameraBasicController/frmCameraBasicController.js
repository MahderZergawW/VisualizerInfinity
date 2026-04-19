define({ 

 onCapture:function(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom:true,separatorHeight:30});
	this.view.imageCamBasic.rawBytes=cameraObj.rawBytes;
	this.view.lblCamBasic.text ="The image which is captured is shown below";	
	kony.application.dismissLoadingScreen();	
}

 });