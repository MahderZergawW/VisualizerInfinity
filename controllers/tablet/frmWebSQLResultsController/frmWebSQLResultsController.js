define({ 

 //Type your controller code here 
  onNavigate:function(params){
    this.view.segWebSQLResults.setData(params.segData);
  }

 });