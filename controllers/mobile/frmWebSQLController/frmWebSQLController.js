define({ 


/*****************************************************************
*	Name    : commonErrorCallback
*	Purpose : To display error message on the console 
******************************************************************/
  count:1,
  webSQLFlag:0,

 commonErrorCallback:function( transactionId, error )
{
	kony.print(" Error code:: " + error);
	kony.print(" Error message:: " + error.message);
},

/*****************************************************************
*	Name    : commonVoidcallback
*	Purpose : To display success message on the console.
******************************************************************/

commonVoidcallback:function(  )
{
	kony.print("The transaction was executed successfully.");
},

/*****************************************************************
*	Name    : success_createTable
*	Purpose : To display a message when table creation is successful.
******************************************************************/

success_createTable : function( transactionId, resultset )
{
	this.view.lblWebSqlUpdate.text ="Database is created successfully with emp_details table"
},
/*****************************************************************
*	Name    : success_dropTable
*	Purpose : To display a message on the console when table creation is unsuccessful.
******************************************************************/

 success_dropTable : function( transactionId, resultset )
{
	kony.print("Table was dropped");
},


/*****************************************************************
*	Name    : createTable
*	Purpose : To create emp_details table with 4 rows
******************************************************************/

 createTable : function( transactionID )
{
	var sqlStatement = "DROP TABLE IF EXISTS emp_details";
	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    this.success_dropTable,
	                    this.commonErrorCallback);
	
	var sqlStatement = "CREATE TABLE IF NOT EXISTS emp_details (empid REAL PRIMARY KEY,empname TEXT,depid REAL)";
	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    this.success_createTable,
	                    this.commonErrorCallback);
	
	var insertTable = [ [ "George", 10 ],
	[ "John", 10 ],
	[ "Thomas", 20 ],
	[ "James", 20 ],
	[ "James", 30 ] ];
	for ( i=1; ((insertTable) != null) && i <= insertTable.length; i++ )
	{
	    var v = insertTable[ kony.decrement( i ) ];
	    var sqlStatement = "INSERT INTO emp_details VALUES (" + (this.count + 1000) + ",\"" + v[ kony.decrement(1) ] + "\"," + v[ kony.decrement(2) ] + ")";
	    this.count = this.count + 1;
	    kony.db.executeSql(transactionID,
	                        sqlStatement,
	                        null,
	                        this.success_createTable,
	                        this.commonErrorCallback);
	}
},


/*****************************************************************
*	Name    : createDB
*	Purpose : To create the database with employee_details table
******************************************************************/

 createDB : function(  )
{
	
	this.webSQLFlag = 1;
	this.baseObjectId = kony.db.openDatabase("webSqlDB",
	                                     "1.0",
	                                     "Sample SQL Database",
	                                     5 * 1024 * 1024);// 5MB database
	                                     
	kony.db.transaction(this.baseObjectId,
	                     this.createTable,
	                     this.commonErrorCallback,
	                     this.commonVoidcallback);
	                     
},

/*****************************************************************
*	Name    : success_insertData
*	Purpose : To display a message when inserting the rows into 'employee_details' table is successful.
******************************************************************/

 success_insertData( transactionId, resultset )
{
	this.view.lblWebSqlUpdate.text ="3 rows are added to emp_details table";
},

/*****************************************************************
*	Name    : insertFirstData
*	Purpose : To insert 3 rows into the 'employee_details' table
******************************************************************/

 insertFirstData : function( transactionID )
{
	var insertTable = [ [ "Siberius", 10 ], [ "Clark", 10 ], [ "Richard", 20 ] ];
	for ( i=1; ((insertTable) != null) && i <= insertTable.length; i++ )
	{
	    var v = insertTable[ kony.decrement( i ) ];
	    var sqlStatement = "INSERT INTO emp_details VALUES (" + (this.count + 1000) + ",\"" + v[ kony.decrement(1) ] + "\"," + v[ kony.decrement(2) ] + ")";
	    this.count = this.count + 1;
	    kony.db.executeSql(transactionID,
	                        sqlStatement,
	                        null,
	                        this.success_insertData,
	                        this.commonErrorCallback);
	}
},

/*****************************************************************
*	Name    : doTransactioninsertData
*	Purpose : To implement WebSQL 'INSERT' statement to insert data into 'emp_details' table
******************************************************************/

 doTransactioninsertData : function(  )
{
// 	if(channel=="tablet" || channel=="desktopweb")
// 	{
// 		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
// 	}
	if (this.webSQLFlag === 0)
	{
		this.view.lblWebSqlUpdate.text = "Please create the database and then try inserting data"
		return;
	}
	kony.db.transaction(this.baseObjectId,
	                     this.insertFirstData,
	                     this.commonErrorCallback,
	                     this.commonVoidcallback);
	
},

/*****************************************************************
*	Name    : success_sqlSelect
*	Purpose : To show all the rows of 'emp_details' table in the form
******************************************************************/

 success_sqlSelect : function( transactionId, resultset )
{
  var params={};
	if(resultset !== null)
	{
		var numResults = resultset.rows.length;
		var insertTable = [ { lblEmpID : "empid", lblEmpName : "empname", lblDepId : "depid" }  ];
		for ( var i = 0; i <= numResults - 1; i++ )
		{
			var rowItem = kony.db.sqlResultsetRowItem(transactionId, resultset, i);
			var addItem = { lblEmpID : rowItem.empid.toString(), lblEmpName : rowItem.empname, lblDepId : rowItem.depid.toString() } ;
			insertTable.push(addItem);
		}
      	
// 		if(channel == "tablet" || channel == "desktopweb")
// 		{
// 			frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
// 			this.view.segWebSQLResults.setData(insertTable);
// 			frmDeviceFeatures.sbxDevFeatureDeatils.addAt(this.view.segWebSQLResults, 2);
// 		}
// 		else
			//this.viewResults.segWebSQLResults.setData (insertTable);
      params.segData=insertTable;
	}
// 	if(channel != "tablet" && channel !="desktopweb")
// 		this.viewResults.show();
  
  var ntf=new kony.mvc.Navigation("frmWebSQLResults");
  ntf.navigate(params);
},

/*****************************************************************
*	Name    : sqlSelect
*	Purpose : To implement SQL statement 'SELECT' to select all the rows and to display the same.
******************************************************************/

 sqlSelect : function( transactionID )
{
	try
	{
		var sqlStatement = "SELECT * FROM emp_details";
		kony.db.executeSql(transactionID,
		                    sqlStatement,
		                    null,
		                    this.success_sqlSelect,
		                    this.commonErrorCallback);
	
	}
	catch(err)
	{
		kony.print("error while selecting "+err);
	}
},

/*****************************************************************
*	Name    : doTransactionsqlSelect
*	Purpose : To initiate transaction to implement SQL statement 'SELECT' to select all the rows and to display the same.
******************************************************************/

 doTransactionsqlSelect : function()
{
	if (this.webSQLFlag === 0)
	{
		this.view.lblWebSqlUpdate.text = "Please create the database and then try show data"
		return;
	}
	try
	{
		kony.db.transaction(this.baseObjectId,
	                     this.sqlSelect,
	                     this.commonErrorCallback,
	                     this.commonVoidcallback);
	}
	catch(err)
	{
		kony.print("error in  select transaction"+err);
	}
},

/*****************************************************************
*	Name    : success_sqlUpdate
*	Purpose : To display a message when updating the data to 'employee_details' table is successful
******************************************************************/

 success_sqlUpdate : function( transactionId, resultset )
{
	this.view.lblWebSqlUpdate.text = "Executed UPDATE emp_details SET depid=30 WHERE empname='John'; Rows updated: " + resultset[ kony.decrement("rowsAffected") ];
},

/*****************************************************************
*	Name    : sqlUpdate
*	Purpose : To implement webSQL 'UPDATE' to update 'employee_details' table  in such a way that employee John's depart number will be 30
******************************************************************/

 sqlUpdate : function( transactionID )
{
	var sqlStatement = "UPDATE emp_details SET depid=30 WHERE empname='John'";
	//Execute sql statement

	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    this.success_sqlUpdate,
	                    this.commonErrorCallback);
},

/*****************************************************************
*	Name    : doTransactionUpdate
*	Purpose : To initiate transaction to implement webSQL 'UPDATE' to update 'employee_details' table  
******************************************************************/

 doTransactionUpdate : function(  )
{
// 	if(channel=="tablet" || channel=="desktopweb")
// 	{
// 		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
// 	}
	//Create a new read n write transaction
	if (this.webSQLFlag === 0)
	{
		this.view.lblWebSqlUpdate.text = "Please create the database and then try update data";
		return;
	}
	
	kony.db.transaction(this.baseObjectId,
	                     this.sqlUpdate,
	                     this.commonErrorCallback,
	                     this.commonVoidcallback);
},

/*****************************************************************
*	Name    : success_sqlDelete
*	Purpose : To display a message when deleting the rows from 'employee_details' is successful
******************************************************************/

 success_sqlDelete : function( transactionId, resultset )
{
	this.view.lblWebSqlUpdate.text = "Executed DELETE FROM emp_details WHERE empid=(select max(empid) from emp_details); Rows updated: " + resultset[ kony.decrement("rowsAffected") ];
},

/*****************************************************************
*	Name    : sqlDelete
*	Purpose : To delete the row which is having maximum id from the 'employee_details' table.
******************************************************************/

 sqlDelete : function( transactionID )
{
	var sqlStatement = "DELETE FROM emp_details WHERE empid=(select max(empid) from emp_details)";
	//Execute sql statement

	kony.db.executeSql(transactionID,
	                    sqlStatement,
	                    null,
	                    this.success_sqlDelete,
	                    this.commonErrorCallback);
},

/*****************************************************************
*	Name    : doTransactionDelete
*	Purpose : To initiate transaction to delete a row from 'employee_details' table.
******************************************************************/

doTransactionDelete : function( )
{
// 	if(channel=="tablet" || channel=="desktopweb")
// 	{
// 		frmDeviceFeatures.sbxDevFeatureDeatils.removeAt(2);
// 	}
	//Create a new read n write transaction
	if (this.webSQLFlag === 0)
	{
		this.view.lblWebSqlUpdate.text = "Please create the database and then try deleting data";
		return;
	}
	kony.db.transaction(this.baseObjectId,
	                     this.sqlDelete,
	                     this.commonErrorCallback,
	                     this.commonVoidcallback);
}


 });