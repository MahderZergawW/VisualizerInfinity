define({ 

  //Type your controller code here 
  httpClientRequest:{},
  httpRequestCall:function()
  {
    if(kony.os.deviceInfo().name == "iPhone" || kony.os.deviceInfo().name == "iPhone Simulator" )
      kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,{shouldShowLabelInBottom :true,separatorHeight:30});
    else
      kony.application.showLoadingScreen("loadingscreen","Please wait...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true,null);
    try
    {		
      this.httpClientRequest = new kony.net.HttpRequest();
      var requestMethod = constants.HTTP_METHOD_POST;
      var url = "https://sampleapps.konycloud.com/services/NewsApiService/topStories";
      var async = true;
      this.httpClientRequest.open(requestMethod, url,async);
      this.httpClientRequest.send();		
      this.httpClientRequest.onReadyStateChange =this.onReadyStateChange;

    }
    catch(exc)
    {      
      kony.application.dismissLoadingScreen();
      return;
    }
  },
  onReadyStateChange:function()
  {
    kony.print("Entered ready state callback"+this.httpClientRequest.readyState);

    if(this.httpClientRequest.readyState == constants.HTTP_READY_STATE_DONE )
    {
      kony.print("Response type is "+this.httpClientRequest.responseType);
      if (this.httpClientRequest.response != null && this.httpClientRequest.response != "")
      {
        kony.print("response non null");
        var jsonObj = this.httpClientRequest.response;
        this.httpResponseCodeValidate(jsonObj);

      }
      else
      {
        kony.print("response null");	
        kony.application.dismissLoadingScreen();
        return;
      }
    }
  },
  httpResponseCodeValidate:function(respone)
  {
    var ResultObj=JSON.parse(respone);    
    kony.print("Entered httpResponseCodeValidate" +ResultObj.httpStatusCode );
    if (ResultObj.httpStatusCode===200)
    {

      this.processNewsResponse(ResultObj.articles);

    }

  },
  processNewsResponse: function(response) {
    var processedData = [];
    var responseLength = response.length;
    for (var i = 0; i < responseLength; i++) {
      var rowData = {};

      rowData.shortDesc = this.getShortDescription(response[i]);
      rowData.imgSrc = this.getIcon(response[i]);
      rowData.title = this.getTitle(response[i]);
      rowData.link = this.getLink(response[i]);
      if (rowData.title !== undefined && rowData.link !== undefined) { 
        processedData.push(rowData);
      } else {
        kony.print("There is no title and link, so ignoring this set");
      }
    }
    this.showProcessedDataInSegment(processedData);
  },


  getShortDescription : function(response){
    var description  = response.description;
    if(description!==undefined){
      if(description.length>100){
        description = description.substring(0, 100) + "..";
      }else{
        description = "";
      }
    }else{
      description = "";
    }
    return description;
  },

  getIcon : function(response){
    var imageSrc = response.urlToImage;
    if(imageSrc === undefined){   
      imageSrc = NWContants.DEFAULTIMAGE;
    }else{
      //Do Nothing
    }
    return imageSrc;
  },

  getTitle : function(response){
    var title = response.title;
    if(title!==undefined){
      if(title.length>50){
        title = title.substring(0,50) + "..";
      }
      return title;
    }else{
      return;
    }
  },

  getLink : function(response){
    var link = response.url;
    if(link!==undefined){
      return link;
    }else{
      return;
    }
  },

  showProcessedDataInSegment: function(processedData) {
    kony.print("The Final ProcessedData is" + JSON.stringify(processedData));
    this.view.segNews.widgetDataMap = {
      "imgNewsIcon": "imgSrc",
      "NewsTitle": "title",
      "newsShortDesc": "shortDesc"
    };
    this.view.segNews.removeAll();
    this.view.segNews.setData(processedData);
    kony.application.dismissLoadingScreen();
  },
});