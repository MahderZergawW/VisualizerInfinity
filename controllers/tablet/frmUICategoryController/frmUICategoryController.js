define({ 

  //Type your controller code here 
  uICategory: function()
  {	
    var segSelectedIndex = this.view.segUICategory.selectedIndex[1];
    var formToBeNavigated=null;
    switch(segSelectedIndex)
    {
      case 0:			
        formToBeNavigated="frmContainerWidgets";
        break;		
      case 1:
        formToBeNavigated="frmBasicWidgets";	
        break;
      case 2:
        formToBeNavigated="frmAdvancedWidgets";
        break;
      case 3:
        formToBeNavigated="frmFlex";
        break;
      default:
        alert("Not available in this channel");            
    }
    var ntf=new kony.mvc.Navigation(formToBeNavigated);
    ntf.navigate();

  }

});