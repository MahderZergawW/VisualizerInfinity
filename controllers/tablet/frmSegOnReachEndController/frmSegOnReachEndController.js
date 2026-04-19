define({ 
serviceData:[],
  countORE:0,
  searchData:[],
  onNavigate:function(){
    this.callService();
    this.scrollEnd();
  },

 callService:function()
{
	this.view.tbxSearchORE.text="";

	//serviceData = new Array();
	this.view.segRecords.removeAll();
	//this.countORE = 0;
	for(var i=0;i<100;i++)
	{
		this.serviceData.push({"lblTitle":"Ambs, Yvonne"+i,"lblSub1":"NiederLassung","lblSub2":"000PI00299","lblSub3":"HeinrichVon","lblSub4":"79100 Frieberg"});
		this.serviceData.push({"lblTitle":"Bmbs, Yvonne"+i,"lblSub1":"NiederLassung","lblSub2":"000PI00299","lblSub3":"HeinrichVon","lblSub4":"79100 Frieberg"});
	}
},

/*****************************************************************
*	Name    : scrollEnd
*	Author  : Kony 
*	Purpose : On reaching end ,show another page with 20 records by showing a loading screen prior to that.
******************************************************************/

 scrollEnd:function()
{
	var displayData=null;  
	if(this.view.tbxSearchORE.text===""||this.view.tbxSearchORE.text===null||this.view.tbxSearchORE.text===undefined)
	{
		 displayData =this.serviceData;
	}
	else
	{
		 displayData = this.searchData;
	}
	
	if(this.countORE < displayData.length)
	{
		var max = 0;
		if(this.countORE+20 < displayData.length)
		{
			max = this.countORE+20;
		}
		else
		{
			max = displayData.length;
		}
		var currentData = new Array();
		for(var i=this.countORE; i<max; i++)
		{
			 currentData.push(displayData[i]);
		}
		if(this.countORE>0)
			this.view.segRecords.removeAt(this.countORE, 0);
		this.view.segRecords.addAll(currentData);
		if(max!=displayData.length)
			this.view.segRecords.addDataAt({"lblLoadingORE" :"Loading...",template:"hbxLoadORE"}, max, 0)
		this.countORE = max;
	}
},
   displaySearch:function()
{
	//searchData = new Array();
	var searchText = this.view.tbxSearchORE.text
	this.countORE=0;
	for(var i=0; i<this.serviceData.length; i++)
	{
		kony.print(i+"this.countORE : "+this.countORE);
		if(this.serviceData[i]["lblTitle"].substring(0, searchText.length)==searchText)
		{
			this.searchData.push(this.serviceData[i]);
		}
	}
	this.view.segRecords.removeAll();
	this.scrollEnd();
},
   beginEdit:function()
{
	this.countORE=0;
}
  
 });