define({ 

  write:function()
  {
   
      var str1 = this.view.txtMsg.text+" ";
      var str2 = this.view.lstBxType.selectedKey;
    
    kony.application.settings.write ("key1",str1,this.onsuccesscallbackw, this.onfailurebackw);
    kony.application.settings.write ("key2",str2,this.onsuccesscallbackWrite, this.onfailurebackWrite);

  },
  onsuccesscallbackw:function(key,value)
  {
    kony.print("Value is :"+value);
  },

  onfailurebackw:function(errorcode,errormessage)
  {
    alert("Error is :"+errormessage);
  },


  onsuccesscallbackWrite:function(key,value)
  {	
    
      this.view.lblAppAfterSet.text = "App settings are successful";
    

  },
  onfailurebackWrite:function(errorcode,errormessage)
  {
    alert("Error is :"+errormessage);
  }

});