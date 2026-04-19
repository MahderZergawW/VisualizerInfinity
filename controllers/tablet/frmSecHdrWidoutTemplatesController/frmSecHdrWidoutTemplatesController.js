define({ 

 //Type your controller code here 
  onNavigate : function(){
  this.view.segSecHdrWidoutTmplate.widgetDataMap = {lblSecHdr1:"lblSecHdr1",lblSecHdr2:"lblSecHdr2",BAccName:"BAccName",WithdrawLimit:"WithdrawLimit",CreditLimit:"CreditLimit",imgChk:"imgChk"};
	
	this.view.segSecHdrWidoutTmplate.data = [
							[ {lblSecHdr1:"Credit account details",lblSecHdr2:" Account No: xxxxxx0660",template:"boxRefSegHdr"},					
							    [
								   	{BAccName: "Titanium card",WithdrawLimit: "$200",CreditLimit: "$400",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Gold card",WithdrawLimit: "$500",CreditLimit: "$800",imgChk:"checkboxwhite.png"}, 
									{BAccName: "Silver card",WithdrawLimit: "$700",CreditLimit: "$200",imgChk:"checkboxwhite.png"}
								]
							],
							
							[ {lblSecHdr1:"Savings account details",lblSecHdr2:" Account No: xxxxxx5221",template:"boxRefSegHdr1"},								
								[
									{BAccName:"Savings 1", WithdrawLimit: "$300",CreditLimit:"N/A",imgChk:"checkboxwhite.png"},
			 					 	{BAccName: "Savings 2", WithdrawLimit: "$400",CreditLimit: "N/A",imgChk:"checkboxwhite.png"}
								 ]
							],
							[ {lblSecHdr1:"Checking account details",lblSecHdr2:" Account No: xxxxxx7657",template:"boxRefSegHdr2"},
								[
									{BAccName: "Checking 1",WithdrawLimit: "N/A",CreditLimit: "$400",imgChk:"checkboxwhite.png"},
								 	{BAccName: "Checking 2",WithdrawLimit: "N/A",CreditLimit: "$800",imgChk:"checkboxwhite.png"}
			 					]
							]	
						];
  }

 });