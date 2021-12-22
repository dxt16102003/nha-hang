/* function open form data */
function checkfunction(){
	var checking = document.getElementById("same");
	var Shipp = document.getElementById("ip1");
	var Bill = document.getElementById("ba");
	if(checking.checked == true){
		Bill.value=Shipp.value;
	} else{
		Bill.value="";
		alert("Please enter your delivery address first");
	}
}
function activate(){
	document.getElementById("input1").style.display = "block";
}
function deactivate(){
	document.getElementById("input1").style.display = "none";
	
}
function enable(){
	document.getElementById("radio1").style.display = "block";
}
function unenable(){
	document.getElementById("radio1").style.display = "none";
	document.getElementById("input3").style.display ="none";
	document.getElementById("input2").style.display ="none"
}
function openinput(){
	document.getElementById("input2").style.display ="block";
	document.getElementById("input3").style.display ="none";
}
function openinput1(){
	document.getElementById("input3").style.display ="block";

	document.getElementById("input2").style.display ="none"
}
/* function validate()will validate form data */
function validate() {
	var ba = $("#ba").val();
	var er = $("#er").val();
    var cn = $("#cn").val();
	var deli = $("#Deli").prop("checked");
	var pickup0 = $("#pickup").prop("checked");
	var online = $("#online").prop("checked");
	var pickup1 = $("#pickup1").prop("checked");
	var ip2 = $("#ip2").val();
	var ip3 = $("#ip3").val();
	var visa = $("#visa").prop("checked");
	var MasterCard = $("#MasterCard").prop("checked");
	var AmericanExpress = $("#AmericanExpress").prop("checked");
	var errMsg = (""); /* create variable to store the error message */
	var result = true; /* assumes no errors */
	/* Rule 1, check if all required date are entered */
	if (ba == "") { //check whether Billing Address is empty
		errMsg += "<li>Billing Address cannot be empty.</li>";	
	}
	if (er == "") { //check whether Email Receipt is empty
		errMsg += "<li>Email Receipt cannot be empty.</li>";
	}
    if (cn == "") { //check whether Contact Number is empty
		errMsg += "<li>Contact Number cannot be empty.</li>";
	}
	/* Rule 2, check if the user ID contains an @ symbol */
	if (er.indexOf('@') == 0) {
		errMsg += "<li>Email receipt cannot start with an @ symbol.</li>";
	}
	if (er.indexOf('@') < 0) {
		errMsg += "<li>Email receipt must contain an @ symbol.</li>";
	}
	if ((!deli) && (!pickup0)) { //check whether deliver is selected
		errMsg += "<li>Delivery methods must be selected.</li>";
	}
	if ((!online) && (!pickup1)) { //check whether payment is selected
		errMsg += "<li>payment methods must be selected.</li>";
	}
	if ( (visa == true) && (  ip2.length < 16 ) || (ip2.length >16)){ // check that the Visa/MasterCard have at least 16 digit
        errMsg += "<li>Visa/Mastercard have to be 16digit.</li>";
    } else if((visa == true) && (visa == "")){
		errMsg += "<li>Visa/Mastercard cannot be empty.</li>";
	} 
	if ( (MasterCard == true) && (  ip2.length < 16 ) || (ip2.length >16)){ // check that the Visa/MasterCard have at least 16 digit
        errMsg += "<li>Visa/Mastercard have to be 16digit.</li>";
    } else if((MasterCard == true) && (visa == "")){
		errMsg += "<li>Visa/Mastercard cannot be empty.</li>";
	} 
	if ((AmericanExpress == true) && (ip3.length < 15 ) || (ip3.length >15)){ // check that the American Express have at least 15 digit
        errMsg += "<li>American Express  have to be 15 digit.</li>";
    }else if((AmericanExpress == true) && (AmericanExpress == "")){
		errMsg += "<li>American Express cannot be empty.</li>";
	}
	/* Display error message if any error(s) is/are detected */
	if (errMsg != "") {
		errMsg = "<div id='scrnOverlay'></div>"                   //8.3
			+ "<section id='errWin' class='window'><ul>"
			+ errMsg                                                  //8.4
			+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
		var numOfItems = ((errMsg.match(/<li>/g)).length) + 10;    //8.5
		$("body").after(errMsg); //8.6
		$("#scrnOverlay").css('visibility', 'visible');           //8.7
		$("#errWin").css('height', numOfItems.toString() + 'em'); //8.8
		$("#errWin").css('margin-top', (numOfItems / -2).toString() + 'em'); //8.8
		$("#errWin").show(); //8.9
		$("#errBtn").click(function () { //8.10
			$("#scrnOverlay").remove();
			$("#errWin").remove();
		});
		result = false;
	}
	return result;
}

/* write the function toggle() that collapse/expand a section*/
function toggle() {
	$(this).parent().next().slideToggle();
	if ($(this).html() == "[-]") { /* Update the symbol on the "button" */
		$(this).html("[+]");
	} else { /* [-] <-> [+] */
		$(this).html("[-]");
	}
}

/* link HTML elements to corresponding event function */
function init() {
	$(".collapse").click(toggle); //link function toggle() to appropriate events
	$("#regform1").submit(validate);/*link function validate() to the submit event
				of the form */
}
$(document).ready(init);