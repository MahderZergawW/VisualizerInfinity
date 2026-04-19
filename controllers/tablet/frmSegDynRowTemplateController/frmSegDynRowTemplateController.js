define({ 
  onNavigate :function(){
    var length=2;	
	this.arrForDynRow = [];
	for (i=0;i<=length;i++)	
	this.arrForDynRow[i] = 0
  },

 isSelected : function()
{
	var selIndex = this.view.segDynamicRowTemp.selectedIndex[1];
	kony.print("selIndex" +selIndex);
		if(this.arrForDynRow[selIndex] == 0)
		{
			this.arrForDynRow[selIndex] = 1;
			this.expandRowTemp();
		}
		else 
		{
			this.arrForDynRow[selIndex] = 0;
			this.collapseRowTemp();
		}
},

  
 expandRowTemp : function()
{
	var index = this.view.segDynamicRowTemp.selectedIndex[1]; 
	kony.print(" On expand row , segment selected row number :: " +index);
	
	var dataForRowTemp = {};
	if (index == 0)
	{
		dataForRowTemp = {lbl1:"Name", lbl2:": Joseph",lbl3:"Designation",lbl4:": Senior Tester",lbl5:"Phone number",lbl6:": 9999999999",template:"hbx2"}
	}
	else if (index == 1)
	{	
		dataForRowTemp = {lbl1:"Name", lbl2:": Martin",lbl3:"Designation",lbl4:": Assistant Manager",lbl5:"Phone number",lbl6:": 8888888888",template:"hbx2"}
	}
	else
	{
		dataForRowTemp = {lbl1:"Name", lbl2:": Ricky",lbl3:"Designation",lbl4:": Senior Manager",lbl5:"Phone number",lbl6:": 7777777777",template:"hbx2"}
	}
	this.view.segDynamicRowTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3",lbl4:"lbl4",lbl5:"lbl5",lbl6:"lbl6",lbl7:"lbl7",lbl8:"lbl8"}
	this.view.segDynamicRowTemp.setDataAt(dataForRowTemp, index )
},
  
   collapseRowTemp : function()
{
	var index = this.view.segDynamicRowTemp.selectedIndex[1];
	if (kony.os.deviceInfo().name == "blackberry") 
		alert("Trying to collapse the row at index "+index);
	var dataForRowTemp = {};
	if (index == 0)
	{
		dataForRowTemp = {lbl7:"Name", lbl8:": Joseph",template:"hbx1"}
	}
	else if (index == 1)	
	{
		dataForRowTemp =  {lbl7:"Name", lbl8:": Martin",template:"hbx1"}
	}
	else
	{
		dataForRowTemp =  {lbl7:"Name", lbl8:": Ricky",template:"hbx1"}
	}
	this.view.segDynamicRowTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3",lbl4:"lbl4",lbl5:"lbl5",lbl6:"lbl6",lbl7:"lbl7",lbl8:"lbl8"}
	this.view.segDynamicRowTemp.setDataAt(dataForRowTemp, index )
}

 });