function confirm_del() {
	return confirm("Do you realy want to delete this news record?");
}// function confirm_del

function checkEdit() {
	var form=	document.forms[0];
	var title=	form.title.value;
	var content=	form.content.value;
	var announce=	form.announce.value;
	var mon=	form.mon1.value-1;
	var day=	form.day1.value;
	var year=	form.year1.value;
	if(!title) {
		alert('Please enter Heading.');
		form.title.select();
		form.title.focus();
		return false;
	}// fi
	if(!content) {
		alert('Please enter Story.');
		form.content.select();
		form.content.focus();
		return false;
	}// fi
	if(!announce) {
		alert('Please enter Homepage Headline.');
		form.announce.select();
		form.announce.focus();
		return false;
	}// fi
	if(title.length+announce.length>108) {
		alert('Homepage Headline is too big.');
		form.announce.select();
		form.announce.focus();
		return false;
	}
	var date=new Date(year, month, day);
	var yr= date.getYear();
	yr= (yr < 1000) ? yr + 1900 : yr;
	if(!(yr==year && date.getMonth()==month && date.getDate()==day)) {
		alert('Wrong date.');
		return false;
	}// if
	return true;
}// function checkEdit

function checkAdd() {
	var form=	document.forms[0];
	var title=	form.headline.value;
	var content=	form.story.value;
	var announce=	form.announce.value;
	var mon=	form.mon1.value-1;
	var day=	form.day1.value;
	var year=	form.year1.value;
	if(!title) {
		alert('Please enter Heading.');
		form.headline.select();
		form.headline.focus();
		return false;
	}// fi
	if(!content) {
		alert('Please enter Story.');
		form.story.select();
		form.story.focus();
		return false;
	}// fi
	if(!announce) {
		alert('Please enter Homepage Headline.');
		form.announce.select();
		form.announce.focus();
		return false;
	}// fi
	if(title.length+announce.length>108) {
		alert('Homepage Headline is too big.');
		form.announce.select();
		form.announce.focus();
		return false;
	}
	var date=new Date(year, month, day);
	var yr= date.getYear();
	yr= (yr < 1000) ? yr + 1900 : yr;
	if(!(yr==year && date.getMonth()==month && date.getDate()==day)) {
		alert('Wrong date.');
		return false;
	}// if
	return true;
}// function checkEdit
