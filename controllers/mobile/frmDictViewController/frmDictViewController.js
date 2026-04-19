define({ 

 //Type your controller code here 
 onNavigate:function(  )
{
	var segdata = [ [ "  A", [ { cname : "Afghanistan" } , { cname : "Akrotiri" } , { cname : "Albania" }  ] ],
	[ "  B", [ { cname : "Bahamas, The" } , { cname : "Bahrain " } , { cname : "Bangladesh " }  ] ],
	[ "  C", [ { cname : "Cambodia" } , { cname : "Cameroon " } , { cname : "Canada " }  ] ],
	[ "  D", [ { cname : "Denmark" } , { cname : "Dhekelia" } , { cname : "Djibouti" }  ] ],
	[ "  E", [ { cname : "Ecuador " } , { cname : "Egypt" } , { cname : "El Salvador " }  ] ],
	[ "  F", [ { cname : "Faroe Islands " } , { cname : "Fiji" } , { cname : "Finland " }  ] ],
	[ "  G", [ { cname : "Gabon" } , { cname : "Gambia, The" } , { cname : "Gaza Strip" }  ] ],
	[ "  H", [ { cname : "Haiti" } , { cname : "Honduras" } , { cname : "Hong Kong" }  ] ],
	[ "  I", [ { cname : "Iceland " } , { cname : "India" } , { cname : "Indonesia " }  ] ],
	[ "  J", [ { cname : "Jamaica" } , { cname : "Jan Mayen" } , { cname : "Japan" }  ] ],
	[ "  K", [ { cname : "Kazakhstan" } , { cname : "Kenya" } , { cname : "Kiribati" }  ] ],
	[ "  L", [ { cname : "Laos" } , { cname : "Latvia " } , { cname : "Lebanon" }  ] ],
	[ "  M", [ { cname : "Macau" } , { cname : "Macedonia " } , { cname : "Madagascar" }  ] ],
	[ "  N", [ { cname : "Namibia " } , { cname : "Nauru" } , { cname : "Navassa Island " }  ] ],
	[ "  O", [ { cname : "Oman " }  ] ],
	[ "  P", [ { cname : "Pakistan" } , { cname : "Palau" } , { cname : "Panama" }  ] ],
	[ "  Q", [ { cname : "Qatar" }  ] ],
	[ "  R", [ { cname : "Reunion " } , { cname : "Romania " }  ] ],
	[ "  S", [ { cname : "Saint Helena " } , { cname : "Saint Lucia" } , { cname : "Samoa" }  ] ],
	[ "  T", [ { cname : "Taiwan" } , { cname : "Tajikistan " }  ] ],
	[ "  U", [ { cname : "Uganda " } , { cname : "Ukraine" }  ] ],
	[ "  V", [ { cname : "Vanuatu " } , { cname : "Venezuela" }  ] ],
	[ "  W", [ { cname : "Wake Island " } , { cname : "Wallis and Futuna" }  ] ],
	[ "  Y", [ { cname : "Yemen " }  ] ],
	[ "  Z", [ { cname : "Zambia " } , { cname : "Zimbabwe" }  ] ] ];
	
	this.view.segDictView.setDataWithSections (segdata);
}
 });