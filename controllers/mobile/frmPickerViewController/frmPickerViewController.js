define({ 

 //Type your controller code here 
   setNewData : function(){
		
		try
		{
			this.view.pickOne.setComponentData(1,[["1","2009"] , ["2","2010"] , ["3","2011"], ["4", "2012"],["5", "2013"]]);
			this.view.btnAdd.text = "Range Is Set";
			this.view.lblOne.text =""
			this.view.pickOne.selectedKeys=["1","1","1"]; // to reset the picker view selection.
		}
		catch (e) {
		
			kony.print("Error"+e);
			alert("Error"+e)
			
		}
		this.view.lblTwo.text = "Year Component fixed to 2009 - 2013";
},
   pickerviewselkeyvalues:function(){
	var selChoicesArr = this.view.pickOne.selectedKeyValues ;
	kony.print("Response:"+JSON.stringify(selChoicesArr));
	if(selChoicesArr.length>0){
		var selChoices = "Nice Choice!  "+selChoicesArr[2][1]+" "+selChoicesArr[1][1]+" "+selChoicesArr[0][1];
		this.view.lblOne.text = selChoices;	
	}else
		alert("no data selected");
}

 });