define({ 


/*****************************************************************
*	Name    : CalendarAddEvent
*	Purpose : To add the calendar event to the device using 'kony.phone.addCalendarEvent' API
******************************************************************/

 CalendarAddEvent:function(eventObj)
{
	try 
	{
		
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; 		
		var yyyy = today.getFullYear();		
		var h=today.getHours();
		var m=today.getMinutes();
		var s=today.getSeconds();
		if(dd<10)
			{dd='0'+dd}
		if(mm<10)
			{mm='0'+mm} 		 
		var date = dd+'/'+mm+'/'+yyyy;
		var stime  = h+":"+(parseInt(m)+2).toString()+":"+s;
		this.startTime  =date+" "+stime;
		var ftime = (parseInt(h)+1).toString()+":"+m+":"+s;
		this.finishTime =date+" "+ftime;
		if (eventObj["text"] == "Add calendar event")
		{
			var evtobj={summary:"Event started", start:this.startTime, finish:this.finishTime,alarm:40, access:"public"};
			kony.phone.addCalendarEvent(evtobj);
			this.view.lblCalendarEvents.text = "Calendar event is added with start time = "+this.startTime+". Please open device calendar to observe this.";
		}
		
		else 
		{
			var evtobj={summary:"Event started", start:this.startTime, finish:this.finishTime,alarm:40, access:"confidential"};
			kony.phone.addCalendarEvent(evtobj);
			this.view.lblCalendarEvents.text = "Calendar event is added in confidential mode with start time = "+this.startTime+".";
			
		}
	}
	catch(PhoneError)
	{
		alert("error in addCalendarEvent:: "+PhoneError);
	}
},
/*****************************************************************
*	Name    : CalendarRemoveEvent
*	Purpose : To remove the calendar event from the device using 'kony.phone.removeCalendarEvent' API
******************************************************************/

 CalendarRemoveEvent:function()
{
		if (this.startTime ==="undefined" || this.startTime ===undefined )
		{
			this.view.lblCalendarEvents.text ="Please create the calendar event.";
			return;
		}
		var evtobj={type:"starting",start:this.startTime, finish:this.finishTime};
		var events = kony.phone.findCalendarEvents(evtobj);
		
		kony.phone.removeCalendarEvent(events[0]);
		this.view.lblCalendarEvents.text = "Calendar event is removed. Please open device calendar to observe this";
}

 });