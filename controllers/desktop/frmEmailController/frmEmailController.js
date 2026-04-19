define({ 

  emailSend:function()
  {
    try{
      kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"Feedback on KitchenSink Application 1.1","",false,[]);
    }catch(e){
      alert(e.errormessage);
    }
  },
  emailSendWithAttachment:function()
  {
    try{
      kony.phone.openMediaGallery(this.openMediaGallaeryCallBck,{mimetype:"image/*"});
    }catch(e){
      alert(e.errormessage);
    }
  },

  openMediaGallaeryCallBck:function(rawbytes)
  {
    try{
      kony.phone.openEmail(["kitchensinkapp@kony.com"],[""],[""],"","",false,[{mimetype:"image/*",attachment:rawbytes,filename :"IMG_0362.JPG"}]);
    }catch(e){
      alert(e.errormessage);
    }
  }

});