define({ 

 //Type your controller code here 
   container:function()
{
	var segSelectedIndex = this.view.segConatiner.selectedIndex[1];
  	var formToBeNavigated=null;
	switch(segSelectedIndex)
	{
		case 0:
			formToBeNavigated="frmFormOptions";
			break;
		case 1:
			formToBeNavigated="frmTabs";
			break;
		case 2:
// 		  if(kony.os.deviceInfo().name == "thinclient")
// 			{
// 				formToBeNavigated="frmScrollSPA";
// 				break;
// 			}				
// 			else
// 			{
				formToBeNavigated="frmScrollBoxMenu";
				break;
// 			}
	}
   var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();
}

 });