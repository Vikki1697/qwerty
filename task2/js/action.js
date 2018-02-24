//Show or Hide sidebar
document.getElementById("button").onclick = function() {
    var elem = document.getElementsByClassName('sidebar');
    setVisibility(elem, 'sidebar item-on btn-side-size');
    var subMenu = document.getElementsByClassName('sub-menu');
    if (subMenu[0].hidden){
    	subMenu[0].hidden = false;
    } else {
    	subMenu[0].hidden = true;
    }
};
//Show or Hide font-list
document.getElementById("font-p").onclick = function() {
	var elem = document.getElementsByClassName('sub-list');
	setVisibility(elem, 'sub-list item-on');
};
//Show or Hide color-list
document.getElementById("background-p").onclick = function() {
	var elem = document.getElementsByClassName('sub-list-c');
	setVisibility(elem, 'sub-list-c item-on');
};
//Show or Hide size-list
document.getElementById("size-p").onclick = function() {
	var elem = document.getElementsByClassName('sub-list-s');
	setVisibility(elem, 'sub-list-s item-on');
};
//Show or Hide function
function setVisibility(elem, options){
	var classElem = elem[0].getAttribute('class');

	if (classElem == options){
    	for (var i = 0; i < elem.length; i++) {
    		elem[i].className = elem[i].className.replace('item-on', 'item-off');
    	}
    }else{
    	for (var i = 0; i < elem.length; i++) {
    		elem[i].className = elem[i].className.replace('item-off', 'item-on');
    	}
    }
}
//Delete last <p>
document.getElementById("delete-p").onclick = function() {
	var p = document.getElementsByClassName('content-p');
	var cnt = p.length; 
	p[cnt-1].remove();
};
//Change font-size
document.getElementById("btn-size").onclick = function() {
	var inpt = document.getElementById('inpt-size').value;
	var p = document.getElementsByClassName('content-p');
	
	if (parseInt(inpt)<24 && parseInt(inpt)>7){
		for (var i = 0; i < p.length; i++) {
			p[i].style.fontSize = inpt+'px';
		}
	}else{
		alert('Ошибка!');
	}	
};

function setFont(){
	var elem = document.getElementsByClassName('rdbtn');

	if (elem[0].checked){
		changeFont('Arial');
	} else if (elem[1].checked){
		changeFont('Times New Roman');
	} else if (elem[2].checked){
		changeFont('Courier New');
	}
}

function changeFont(font){
	var p = document.getElementsByClassName('content-p');
	for (var i = 0; i < p.length; i++) {
		p[i].style.fontFamily = font;
	}
}

function setBackground(){
	var elem = document.getElementsByClassName('rdbtn-color');

	if (elem[0].checked){
		changeBackground('White');
	} else if (elem[1].checked){
		changeBackground('Red');
	} else if (elem[2].checked){
		changeBackground('Blue');
	} else if (elem[3].checked){
		changeBackground('Green');
	}
}

function changeBackground(color) {
	var p = document.getElementsByClassName('content-p');
	for (var i = 0; i < p.length; i++) {
		p[i].style.background = color;
	}
}

function isCorrect(inpt){
	var val = inpt.value;
	val = val.replace(/[^\d]/g, '');
	document.getElementById('inpt-size').value = val;
}