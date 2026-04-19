define({ 

 //Type your controller code here 
  
  onNavigate: function(params){
    this.view.lblMsgSetR1.text=params.value;
    this.view.lblMsgSetR.text=params.text;
    this.view.SegMsgSetR.viewType=params.viewType;
    if(params.pageOffDotImage !==null ||params.pageOffDotImage  !== undefined){
      this.view.SegMsgSetR.pageOffDotImage="orngsld";
      this.view.SegMsgSetR.pageOnDotImage="whitesld";
      
    }
  }

 });