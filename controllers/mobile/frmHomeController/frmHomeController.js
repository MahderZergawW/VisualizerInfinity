define({ 

  //Type your controller code here 
  home:function()
  {

    var segSelectedIndex = this.view.segHome.selectedIndex[1];  
    var formToBeNavigated=null;
    switch(segSelectedIndex)
    {

      case 0:
        formToBeNavigated="frmUICategory";
        break;		
      case 1:
        if ( kony.os.deviceInfo().name == "android")
          formToBeNavigated="frmAniAnd";
        //         else if(kony.os.deviceInfo().name == "WindowsPhone")
        //           formToBeNavigated="frmAniWin");

        //         else if (kony.os.deviceInfo().name == "thinclient")
        //           frmAniSPA.show();

        else 
          formToBeNavigated="frmAni";
        break;
      case 2:
        formToBeNavigated="frmDvcFeatures";        
        break;
      case 3:
        this.feedBack();
        break;
    }
    if(formToBeNavigated!==null){
       var ntf=new kony.mvc.Navigation(formToBeNavigated);
    	ntf.navigate();
    }
   

  },
  feedBack:function(){
    try{
    kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"Feedback on KitchenSink Application 1.1","",false,[]);
    }catch(e){
      alert(e.errormessage);
    }
  }

});