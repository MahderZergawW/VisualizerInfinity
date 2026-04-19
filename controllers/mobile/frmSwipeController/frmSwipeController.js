define({ 

 //Type your controller code here 
 dataForSeg: function(eventObj)
{
	var segdata = [ [ "  A", [ { lblData : "Afghanistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Akrotiri" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Albania" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  B", [ { lblData : "Bahamas, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Bahrain ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Bangladesh ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  C", [ { lblData : "Cambodia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Cameroon ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Canada ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  D", [ { lblData : "Denmark",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Dhekelia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Djibouti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  E", [ { lblData : "Ecuador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Egypt",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "El Salvador ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  F", [ { lblData : "Faroe Islands ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Fiji",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Finland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  G", [ { lblData : "Gabon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Gambia, The",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Gaza Strip",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  H", [ { lblData : "Haiti",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Honduras",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Hong Kong",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  I", [ { lblData : "Iceland ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "India",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Indonesia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  J", [ { lblData : "Jamaica",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Jan Mayen",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Japan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  K", [ { lblData : "Kazakhstan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Kenya" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Kiribati",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  L", [ { lblData : "Laos" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Latvia " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Lebanon",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  M", [ { lblData : "Macau",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Macedonia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Madagascar",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  N", [ { lblData : "Namibia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Nauru" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Navassa Island ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  O", [ { lblData : "Oman ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  P", [ { lblData : "Pakistan",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Palau" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Panama" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Q", [ { lblData : "Qatar" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  R", [ { lblData : "Reunion ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Romania " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  S", [ { lblData : "Saint Helena ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Saint Lucia",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Samoa",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  T", [ { lblData : "Taiwan" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Tajikistan ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  U", [ { lblData : "Uganda ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Ukraine",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  V", [ { lblData : "Vanuatu " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Venezuela",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ],
	[ "  W", [ { lblData : "Wake Island " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}} , { lblData : "Wallis and Futuna" ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Y", [ { lblData : "Yemen " ,metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE}}  ] ],
	[ "  Z", [ { lblData : "Zambia ",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} } , { lblData : "Zimbabwe",metaInfo :{editMode:constants.SEGUI_EDIT_MODE_DELETE} }  ] ] ];
// 	if((kony.os.deviceInfo().name != "iPad" && kony.os.deviceInfo().name != "iPad Simulator" && channel=="tablet") || (channel == "desktopweb"))
// 	{
// 		kony.print("do nothing");
// 	}
// 	else if(kony.os.deviceInfo().name == "iPad" || kony.os.deviceInfo().name == "iPad Simulator")
// 	{
// 		frmSegmentTablet.segIconEditStyle.setDataWithSections(segdata);
// 		frmSegSwipe.segSwipeToDelete.setDataWithSections(segdata);
// 	}
// 	else
		eventObj.segStates.setDataWithSections(segdata);
},
   onEditing:function (seguiWidget, editmode, sectionIndex, rowIndex)
{
	seguiWidget.removeAt(rowIndex,sectionIndex);
}
 });