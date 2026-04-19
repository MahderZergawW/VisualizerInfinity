define({ 

 //Type your controller code here 
  onNavigate : function(params){
  	
	var selectedItems  =  params
	var arr = new Array();
	if (selectedItems == null || selectedItems == "")
	{
		alert("No item is selected. Please select atleast one item from the above segment");
		return;
	}
	for (var  i = 0; i< selectedItems.length ;i++)
	{
		arr.push({lblMulSel1:selectedItems[i]["BAccName"],lblMulSel2:selectedItems[i]["WithdrawLimit"],lblMulSel3:selectedItems[i]["CreditLimit"]})
	}
	this.view.segData.setData(arr);

  }

 });