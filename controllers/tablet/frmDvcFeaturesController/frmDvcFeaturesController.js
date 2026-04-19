define({ 

 //Type your controller code here 
  
 sendSMS:function()
{
	if(kony.os.deviceInfo().model == "iPhone Simulator")
	{
		alert("Works only on device");
	}
	else
	{
		var phoneNo ="+91 40 12345678"; // This is a dummy number
		var text = "Hi kony developer";
		kony.phone.sendSMS(phoneNo, text);
	}
}
 

 });