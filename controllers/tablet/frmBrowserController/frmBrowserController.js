define({ 

  //Type your controller code here 
  

  onNavigate:function(params){
    //alert(JSON.stringify(params));
    if(params.text == "Browser with inline Navigation")
    {			
      this.view.footerBackForwardShare.setVisibility(true);		
    }
    else
    {
      this.view.footerBackForwardShare.setVisibility(false);
    }
    this.view.headerTitleLabel.text=params.title;
    if(params.htmlString===null || params.htmlString===undefined ){
      this.view.brwDemo.requestURLConfig=params.requestURLConfig;
    }else{
      this.view.brwDemo.htmlString=params.htmlString;
    }
    if(params.enableZoom===null || params.enableZoom===undefined ){
      this.view.brwDemo.enableZoom=false;
    }else{
      this.view.brwDemo.enableZoom=true;
    }

  },
  goBack:function(){
    if(this.view.brwDemo.canGoBack()===true){
      this.view.brwDemo.goBack();
    }
   
  },
  goForward:function(){
    if(this.view.brwDemo.canGoForward()===true){
      this.view.brwDemo.goForward();
    }
   
  },
  reload:function(){
    this.view.brwDemo.reload();
  }
});