define({ 

/*****************************************************************
*     Name    : Encrypt
*     Purpose : To encrypt the user text and display the encrypted text.
******************************************************************/

 Encrypt : function()
{
	try
	{
		var algo="aes";
      var inputstr="";
		var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		if (this.view.textEncrypt.text === "" || this.view.textEncrypt.text ===null)
		{
			this.view.lblEncrypt.text =  "Please enter the text to encrypt";
			return;
		}
		
		else
		{
			 inputstr=this.view.textEncrypt.text;
		}
		
		var prptobj={padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		myEncryptedTextRaw = kony.crypto.encrypt(algo,encryptDecryptKey,inputstr,prptobj);
		var myEncryptedText  = kony.convertToBase64(myEncryptedTextRaw);
		
// 		if(kony.os.deviceInfo().name == "Windows 8" || kony.os.deviceInfo().name == "WindowsPhone")
// 		{
// 			this.view.lblEncrypt.text = "Encrypted text = "+myEncryptedTextRaw.toString();
// 		}
// 		else
// 		{
			this.view.lblEncrypt.text = "Encrypted text = "+myEncryptedText.toString();
// 		}
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackEncryptAes : "+err );
	}
},


 
 
/*****************************************************************
*     Name    : decrypt
*     Purpose : To decrypt the encrypted text and display the decrypted text.
******************************************************************/
 
 decrypt : function()
{
	try
	{
		var algo="aes";
       var myEncryptedTextRa="";
      
      	var encryptDecryptKey = kony.crypto.newKey("passphrase", 128, {passphrasetext: ["inputstring1"], subalgo: "aes", passphrasehashalgo: "md5"});

		var prptobj= {padding:"pkcs5",mode:"cbc",initializationvector:"1234567890123456"};
		
		if(this.view.lblEncrypt.text === "" ||this.view.lblEncrypt.text === null || this.view.lblEncrypt.text === "Please enter the text to encrypt")
		{
			this.view.lblDecrypt.text = "There is no encrypted text";
			return;
		}
		var str = this.view.lblEncrypt.text;
		//convertToRawBytes is not supported in SPA
// 		if(kony.os.deviceInfo().name == "thinclient")
// 		{
// 			 myEncryptedTextRa = myEncryptedTextRaw;
// 		}
// 		else
			 myEncryptedTextRa = kony.convertToRawBytes(str.substring(17));
		var myClearText = kony.crypto.decrypt(algo,encryptDecryptKey,myEncryptedTextRa,prptobj);
		
			this.view.lblDecrypt.text ="Decrypted text = "+myClearText.toString();
					
	}
	catch(err)
	{
		alert(typeof err);
		alert("Error in callbackDecryptAes : "+err );
	}
},


/*****************************************************************
*	Name    : createHashMD2
*	Purpose : To create hash value for the user text using "MD2" Algorithm.
******************************************************************/

 createHashMD2 : function()
{
	try
    {
    	var algo="md2";
		var inputstr=this.view.txtMd2Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		this.view.lblMD2Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD2 : "+err );
	}
},

/*****************************************************************
*	Name    : createHashMD4
*	Purpose : To create hash value for the user text using "MD4" Algorithm.
******************************************************************/

 createHashMD4 : function()
{
	try
    {
    	var algo="md4";
		var inputstr=this.view.txtMD4Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		this.view.lblMD4Hash.text = myHashValue;	
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD4 : "+err );
	}
},

/*****************************************************************
*	Name    : createHashMD5
*	Purpose : To create hash value for the user text using "MD5" Algorithm.
******************************************************************/

 createHashMD5 : function()
{
	try
    {
    	var algo="md5";
		var inputstr=this.view.txtMD5Hash.text;
		var myHashValue = kony.crypto.createHash(algo,inputstr);
		this.view.lblMD5Hash.text = myHashValue;		
	}
    catch(err)
    {
		alert(typeof err);
		alert("Error in callbackCreateHashMD5 : "+err );
	}
} 

 });