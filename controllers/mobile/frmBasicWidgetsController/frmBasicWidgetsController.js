define({ 

  //Type your controller code here 
  basic:function()
  {
    var segSelectedIndex = this.view.segBasic.selectedIndex[1];
    var formToBeNavigated=null;
    switch(segSelectedIndex)
    {

      case 0:	
        formToBeNavigated="frmBtn";
        break;		
      case 1:
        formToBeNavigated="frmCal";
        break;			
      case 2:
        formToBeNavigated="frmChk";
        break;	
     case 3:
        formToBeNavigated="frmDatagrd";
        break;	
      case 4:
        formToBeNavigated="frmImage";
        break;
      case 5:
        formToBeNavigated="frmLbl";
        break;			
      case 6:
        formToBeNavigated="frmLstBox";
        break;	
      case 7:
        formToBeNavigated="frmRdo";
        break;
      case 8:
        formToBeNavigated="frmRichText";
        break;	
      case 9:
//         if(kony.os.deviceInfo().name == "thinclient")
//         {
//           alert("Not Available in SPA");
//         }
//         else
//         {
          formToBeNavigated="frmSlider";
//         }	
        break;
      case 10:
        formToBeNavigated="frmTxtArea";
        break;
      case 11:
        formToBeNavigated="frmTbx";
        break;
      case 12:
        formToBeNavigated="frmIcons";
        break;
    }  	
    var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();

  }
});