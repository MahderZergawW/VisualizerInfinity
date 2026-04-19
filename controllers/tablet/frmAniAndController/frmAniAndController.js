define({ 

  //Type your controller code here 
  onClickOfFrmAniAndSeg:function()
  {
    var segSelectedIndex = this.view.segTransitions.selectedIndex[1];
    var formToBeNavigated=null;
    switch(segSelectedIndex)
    {
      case 0:
        formToBeNavigated="frmAnibottomtop";
        break;
      case 1:
        formToBeNavigated="frmAnifromleft";
        break;
      case 2:
        formToBeNavigated="frmAnifromright";
        break;
      case 3:
        formToBeNavigated="frmAnitoright";
        break;
      case 4: 
        formToBeNavigated="frmAnitoleft";
        break;
      case 5:
        formToBeNavigated="frmAnifromcenter";
        break;
      case 6:
        formToBeNavigated="frmAnitoprightbottom";
        break;
      case 7:
        formToBeNavigated="frmAnibottomlefttop";
        break;
      case 8:
        formToBeNavigated="frmAnibottomtopstyle1";
        break;
        case 9:
        formToBeNavigated="frmAniTopDown";
        break;
      default:
        kony.print("no form shown");

    }
    var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();
  }
  
});