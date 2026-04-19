define({ 

 //Type your controller code here 
   onNavigate : function()
{
		this.view.segMultiTemp.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"};
		this.view.segMultiTemp.data = [
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400",template:"flexRow1"}, 
					{lbl1: "Gold Card",lbl2: "$200",lbl3: "$400",template:"flexRow2"}, 
					{lbl1: "Silver Card",lbl2: "$200",lbl3: "$400",template:"flexRow3"}
				 ];	
     	this.view.segWidoutRowtmplate.widgetDataMap = {lbl1:"lbl1",lbl2:"lbl2",lbl3:"lbl3"};
	this.view.segWidoutRowtmplate.setData([
					{lbl1: "Titanium Card",lbl2: "$200",lbl3: "$400"}, 
					{lbl1: "Gold Card",lbl2: "$300",lbl3: "$100"}, 
					{lbl1: "Silver Card",lbl2: "$500",lbl3: "$600"}
				 ]);
	var selectedInx = this.view.segWidoutRowtmplate.selectedIndex;	
},
 

 });