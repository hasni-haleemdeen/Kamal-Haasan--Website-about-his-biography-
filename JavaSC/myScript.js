var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function validateForm() {
	var fn = document.forms["myForm"]["first_name"].value;
	if (fn == "") {
		alert("Your feedback is incomplete. Please make sure that you have filled your first name, surname and have given us a rating.");
		return false;
	}
	var sn = document.forms["myForm"]["surname"].value;
	if (sn == "") {
		alert("Your feedback is incomplete. Please make sure that you have filled your first name, surname and have given us a rating.");
		return false;
	}
	var a =document.getElementById("rating1");
	var b =document.getElementById("rating2");
	var c =document.getElementById("rating3");
	var d =document.getElementById("rating4");
	if ((a.checked == false) && (b.checked == false) &&(c.checked == false) && (d.checked == false)){
		alert("Your feedback is incomplete. Please make sure that you have filled your first name, surname and have given us a rating.")
	    return false;
    }
	var com = document.forms["myForm"]["comments"].value;
	if (a.checked == true){
		var rating = "Excellent";
    }
	if (b.checked == true){
		var rating = "Good";
    }
	if (c.checked == true){
		var rating = "Poor";
	}
	if (d.checked == true) {
		var rating = "Bad";
	}
	if ((fn!="") && (sn!="") && (com=="") && ((a.checked == true) || (b.checked == true) || (c.checked == true) || (d.checked == true))){
		alert("Dear "+fn+" "+sn+", Thank you very much for your feedback. You have rated our site as "+rating+".");
		return false;
	}
	alert("Dear "+fn+" "+sn+", Thank you very much for your feedback. You have rated our site as "+rating+" and your comment was "+com);
	return false;

}
var size;
			
	function incfont()
			
	{
	var t = document.getElementById('fontSize').value;
	var x = document.getElementById('intro_content');
	x.style.fontSize = t+"px";
	size = t;
	document.getElementById("size") .innerHTML=size;
			
	}
