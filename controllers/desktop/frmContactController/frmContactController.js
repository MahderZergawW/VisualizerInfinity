define({ 

 addContact:function()
{
	try
	{
		var mycontact = {
						firstname :"John",lastname :"Steve",
						phone:[{name:"mobile",number:"9999999999"},{name:"home",number:"9999999999"}],
						email:[{name:"home",id:"abc@yahoo.com"},{name:"work",id:"def@kony.com"}],
						postal:[{name:"home",street:"Raheja",city:"hyderabad",state:"AP",zipcode:"500310"}],
						company:[{name:"work",company:"kony",title:"architect"}]
				        }
		kony.contact.add(mycontact);
		this.view.lblDevContact.text = "Contact is added with firstname = 'John' and lastname = 'Steve' . Please Check the device contacts."
	}
	catch(err)
	{
		kony.print("error is ::: "+err);
	}
},


 findContact:function()
{
	var findContacts = kony.contact.find("John"); 
	if (findContacts === null ||findContacts ==="" ||findContacts === undefined )
	{
		this.view.lblDevContact.text = "No contacts with the first name is 'John' ";
	}
	else
	{
		var len = findContacts.length;
		this.view.lblDevContact.text = "No of contacts of which the first name is 'John' = "+len+".";
	}
},
 removeContact:function()
{
	var findContacts = kony.contact.find("John"); 
	if (findContacts === null ||findContacts ==="" ||findContacts === undefined )
	{
		this.view.lblDevContact.text = "No contacts with the first name is 'John' ";
	}
	else
	{
		for (var i in findContacts )
			kony.contact.remove(findContacts[i]);
		this.view.lblDevContact.text = "Removed contact which has first name as 'John' . Please Check the device contacts.";
	}
}

 });