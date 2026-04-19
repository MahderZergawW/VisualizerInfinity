define({ 

  //Type your controller code here
  flag:0,
  flag1:0,

  frmOptions: function()
  {

    var segSelectedIndex = this.view.segFormOptions.selectedIndex[1];
    var formToBeNavigated=null;

    switch(segSelectedIndex)
    {

      case 0:			
        formToBeNavigated="frmForm";
        break;		
      case 1:
        formToBeNavigated="frmFormImgBck";			
        break;
      case 2:

        if(kony.os.deviceInfo().name == "thinclient")
        {
          alert("Not available in SPA");
          break;
        }
        else if(kony.os.deviceInfo().name == "WindowsPhone")
        {
          alert("Not available in Windows");
          break;
        }	
        else
        {
          formToBeNavigated="frmTtlbarOptions";
          break;
        }
      case 3:	

        if(this.flag === 0)
        {	
          this.flag = 1;
          if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
            kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
          else
            kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true,null);

          kony.timer.schedule("timer10", this.dismissLoadingScreen, 4,false);				
          break;
        }
        else
        {
          break;
        }

      case 4:
        if(this.flag1 === 0)
        {
          this.flag1 =1;
          if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
            kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
          else
            kony.application.showLoadingScreen("loadingscreen","Loading...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
          kony.timer.schedule("timer11", this.dismissLoadingScreen1, 4,false);				
          break;
        }
        else
        {
          break;
        }

      case 5:
        formToBeNavigated="frmGestures";
        break;		
      case 6:			
        formToBeNavigated="frmComplex";		
        break;		

    }
    if(formToBeNavigated!==null){
      	var ntf=new kony.mvc.Navigation(formToBeNavigated);
    	ntf.navigate();
    }
    
  },
  dismissLoadingScreen:function()
  {
    kony.application.dismissLoadingScreen();
    kony.timer.cancel("timer10");
    this.flag =0;
    this.flag1 =0;
  },

  dismissLoadingScreen1:function()
  {
    kony.application.dismissLoadingScreen();
    kony.timer.cancel("timer11");
    this.flag =0;
    this.flag1 =0;
  },

});