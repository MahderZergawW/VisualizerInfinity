define({ 

 onClickOfFrmAniSeg:function(eventobj)
{
	var segSelectedIndex = eventobj.selectedIndex[1];
  	var formToBeNavigated=null;
  	switch(segSelectedIndex)
    {
      case 0:
		formToBeNavigated="frmAniFlip";
        break;
	 case 1:
		formToBeNavigated="frmAniFade";
        break;
	 case 2:
		formToBeNavigated="frmAniMoveIn";
        break;
	 case 3:
		formToBeNavigated="frmAniPush";
        break;
	 case 4:
		formToBeNavigated="frmAniReveal";
        break;
	 case 5:
		formToBeNavigated="frmAniCurl";
        break;
	 case 6:
		formToBeNavigated="frmAni2SplitHorizontalIn";
        break;
	 case 7:
		formToBeNavigated="frmAni2SplitVerticalIn";
        break;
	 case 8:
		formToBeNavigated="frmAni4SplitIn";
        break;
	 case 9:
		formToBeNavigated="frmAni4SplitRotateIn";
        break;
	 case 10:
		formToBeNavigated="frmAni2SplitHorizontalOut";
        break;
	 case 11:
		formToBeNavigated="frmAni2SplitVerticalOut";
        break;
	 case 12:
		formToBeNavigated="frmAni4SplitOut";
        break;
	 case 13:
		formToBeNavigated="frmAni4SplitRotateOut";
        break;
	 case 14:
		formToBeNavigated="frmAniSwitchLeft";
        break;
	 case 15:
		formToBeNavigated="frmAniSwitchRight";
        break;
	 case 16:
		formToBeNavigated="frmAniCloth";
        break;
	 case 17:
		formToBeNavigated="frmAniFlipRight";
        break;
	 case 18:
		formToBeNavigated="frmAniFlipLeft";
        break;
	case 19:
		formToBeNavigated="frmAniDoor";
        break;
	case 20:
		formToBeNavigated="frmAniRotateExchange";
        break;
	case 21:
		formToBeNavigated="frmAniMoveInFromBottom";
        break;
	case 22:
		formToBeNavigated="frmAniMoveInFromTop";
        break;
      default:		
	   kony.print("no form shown");
    }
  	var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();
 
}
  

 });