define({ 

 onCaptureFrmOverLay:function(cameraObj)
{
	kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
	this.view.imageFrmCamFrmOverRef.rawBytes=cameraObj.rawBytes;
	this.view.lblFrmCamOverlay.text = "Below is the captured image";
	var ntf=new kony.mvc.Navigation("frmCameraFrmOverlay");
	ntf.navigate();	
	kony.application.dismissLoadingScreen();
}

 });