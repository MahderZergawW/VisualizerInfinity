define({ 

  onCapturePublic:function(cameraObj)
  {
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.img1CamAcc.rawBytes = cameraObj.rawBytes;
    this.view.lblFrmCamAccessModes.text = "First image from left is the captured image in public mode. You can see the image in image Gallery of the camera as well.To observe this ,Hide the application and open camera and go to image gallery."
    kony.application.dismissLoadingScreen();
  },

  onCapturePrivate:function(cameraObj)
  {
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.img2CamAcc.rawBytes = cameraObj.rawBytes;
    this.view.lblFrmCamAccessModes.text = "Second image from left is the captured image in private mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
	var ntf=new kony.mvc.Navigation("frmCamAcsModes");
    ntf.navigate();
    kony.application.dismissLoadingScreen();
    

  },
  onCaptureinMemory:function(cameraObj)
  {
    kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    this.view.img3CamAcc.rawBytes = cameraObj.rawBytes;	
    this.view.lblFrmCamAccessModes.text = "Third image from left is the captured image in inMemory mode. You can not see the image in image Gallery of the camera .To observe this ,Hide the application and open camera and go to image gallery."
	var ntf=new kony.mvc.Navigation("frmCamAcsModes");
    ntf.navigate();
    kony.application.dismissLoadingScreen();

  }


});