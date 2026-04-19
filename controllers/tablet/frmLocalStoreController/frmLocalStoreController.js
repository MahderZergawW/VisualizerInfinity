define({ 

 setItemvalues:function(  )
{
// 	if((kony.os.deviceInfo().name == "thinclient" && channel == "tablet")||  channel == "desktopweb")
// 	{
// 		var key = frmDeviceFeatures.frmLocalTxtSet1.text;
// 		var value = frmDeviceFeatures.frmLocalTxtSet2.text;
// 		if( frmDeviceFeatures.frmLocalTxtSet2.text == ""  || frmDeviceFeatures.frmLocalTxtSet1.text == "" ||frmDeviceFeatures.frmLocalTxtSet2.text == null ||  frmDeviceFeatures.frmLocalTxtSet1.text == null)
// 		{
// 			alert( "Please enter both key and values for thinclient");
// 			return;
// 		}
// 	}
// 	else
// 	{
		var key = this.view.txtFldKey.text;
		var value = this.view.txtfldValue.text;
		if( this.view.txtFldKey.text === ""  || this.view.txtfldValue.text === "" ||this.view.txtFldKey.text === null ||  this.view.txtfldValue.text === null)
		{
			alert( "Please enter both key and values ");
			return;
		}
	//}
	
	kony.store.setItem(key, value);
	alert( "Item is saved in local storage.You will be able to read the key even if the application or the device is restarted. ");
// 	if(kony.os.deviceInfo().name != "thinclient" && channel =="tablet")
// 	{
		this.view.txtFldKey.text ="";
		this.view.txtfldValue.text="";
		this.view.lblLocalClear.text = "";
// 	}
},
 getItemvalues:function(  )
{
// 	if((kony.os.deviceInfo().name == "thinclient" && channel == "tablet")|| channel == "desktopweb")
// 	{
// 		if (frmDeviceFeatures.frmLocalTxtGet1.text == "" || frmDeviceFeatures.frmLocalTxtGet1.text == null)
// 		{
// 			frmDeviceFeatures.frmLocalLblGet1.text = "Key is not entered";
// 			return;
// 		}
// 		else
// 			var key = frmDeviceFeatures.frmLocalTxtGet1.text;
			
// 		var value = kony.store.getItem(key);
		
// 		if((value != null))
// 			frmDeviceFeatures.frmLocalLblGet1.text = "" + value;
// 		else
// 			frmDeviceFeatures.frmLocalLblGet1.text = "Key is not found";
// 	}
		
// 	else
  // 	{
  		var key=null;
		if (this.view.frmLocalTxtGet1.text === "" || this.view.frmLocalTxtGet1.text === null || this.view.frmLocalTxtGet1.text === undefined)
		{
			this.view.frmLocalLblGet1.text = "Key is not entered";
			return;
		}
		else
			key = this.view.frmLocalTxtGet1.text;
			
		var value = kony.store.getItem(key);
		
		if((value !== null))
			this.view.frmLocalLblGet1.text = "" + value;
		else
			this.view.frmLocalLblGet1.text = "Key is not found";
	//}
	
},

 GetKey:function( )
{
	var str = this.view.frmLocalTxtGetKey1.text;
	var index = str.replace(/\D/g, '');
  	var key=null;
	kony.print("Index is SEENU :" +index );
	if (index === "" || index === null || index === undefined)
	{
		this.view.frmLocalLblGetKey1.text = "Index is not entered";
		return;
	}
	else if (parseInt(index) < 1 )
	{
		this.view.frmLocalLblGetKey1.text = "Index starts from 1.";
		return;
	}
	else
		key = kony.store.key(kony.decrement(kony.os.toNumber(index)));
		
	
	
	if((key !== null))
		this.view.frmLocalLblGetKey1.text = key;
	else
		this.view.frmLocalLblGetKey1.text = "Key is not found for given Index.";
},
 RemoveItem:function(  )
{
  	var textkey=null;
	if (this.view.frmLocalTxtIndex.text === "" || this.view.frmLocalTxtIndex.text === null || this.view.frmLocalTxtIndex.text === undefined )
	{
		this.view.frmLocalLblIndex.text = "Key is not entered";
		return;
	}
	else
		 textkey = this.view.frmLocalTxtIndex.text;
		
	var item = kony.store.getItem(textkey);
	if((item !== null))
	{
		kony.store.removeItem(textkey);
		this.view.frmLocalLblIndex.text = textkey + " key/value is removed";
	}
	else
	{
		this.view.frmLocalLblIndex.text = textkey + " not found";
	}
},
 ClearItem:function(  )
{
	kony.store.clear();
	this.view.lblLocalClear.text = "Local Storage is cleared";
	this.view.txtFldKey.text ="";
	this.view.txtfldValue.text ="";
	this.view.frmLocalTxtGet1.text ="";
	this.view.frmLocalLblGet1.text ="";
	this.view.frmLocalTxtIndex.text="";
	this.view.frmLocalLblIndex.text="";
	this.view.frmLocalLblGetKey1.text="";
	this.view.frmLocalTxtGetKey1.text ="";
	
}



 });