function calender() {
	var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month = ['January','February','March','April','May','June','July','August','September','October','November','december'];
	var d = new Date();
	setText('calender-day',day[d.getDay()]);
	setText('calender-date',d.getDate());
	setText('calender-month-year',month[d.getMonth()] + ' ' + (1900+d.getYear()));

};

function setText(id, val){
	if (val < 10) {
		val = '0' + val;	
	}
	document.getElementById(id).innerHTML = val;

};

function second(){
	var day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	setTexts('calender-day',day[d.getDay()]);
}




window.onload = calender;	
//

