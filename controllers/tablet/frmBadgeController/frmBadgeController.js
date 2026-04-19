define({ 

  setBadge:function(  )
{
	this.view.btnBadge.setBadge("0","");//Set badge value on  button widget
  	kony.application.setApplicationBadgeValue(""+0);
},
   BadgeIncrease:function( )
{
	var counter = kony.os.toNumber(this.view.btnBadge.getBadge ()) + 1;// read badge value from button and increment it with 1 
	kony.print("this gets executed " + counter+ "type is "+typeof(counter));
	this.view.btnBadge.setBadge ("" + counter, "");// Set badge value on the button widget
	kony.application.setApplicationBadgeValue("" + counter);//Set badge value on app icon
}

 });