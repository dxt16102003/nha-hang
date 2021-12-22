/* function validate()will validate form data */
function validate() {
	var sid = $("#sid").val();
    var sid1 = $("#sid1").val();
    var pn = $("#pn").val();
    var el = $("#el").val();
	var pwd1 = $("#pwd1").val();
	var pwd2 = $("#pwd2").val();
	var uname = $("#uname").val();
	var genm = $("#genm").prop("checked");
	var genf = $("#genf").prop("checked");
    var A = $("#A").prop("checked");
	var B  = $("#B").prop("checked");
    var C  = $("#C").prop("checked");
    var D  = $("#D").prop("checked");
    var pc = $("#pc").val()
	var errMsg = (""); /* create variable to store the error message */
	var result = true; /* assumes no errors */
	var pattern = /^[a-zA-Z ]+$/; /* regular expression for letters and spaces only */
	/* Rule 1, check if all required date are entered */

	if (sid == "") { //check whether Full Name is empty
		errMsg += "<li>Full Name cannot be empty.</li>";	
	}
    if (sid1 == "") { //check whether User Id is empty
		errMsg += "<li>User Id cannot be empty.</li>";	
	}
    if (pn == "") { //check whether Phone Number is empty
		errMsg += "<li>Phone Number cannot be empty.</li>";	
	}
    if (el == "") { //check whether Email is empty
		errMsg += "<li>Email cannot be empty.</li>";	
	}
	if (pwd1 == "") { //check whether Password is empty
		errMsg += "<li>Password cannot be empty.</li>";
	} else if (pwd1.length < 8){ //check that the pw have at least 8 characters
        errMsg += "<li>Password must to be at least 8 characters.</li>";
    }
	if (pwd2 == "") { //check whether re-typed Password is empty
		errMsg += "<li>Retype password cannot be empty.</li>";
	}
    if (pc == "") { //check whether Postcode is empty
		errMsg += "<li>Postcode cannot be empty.</li>";
	} else if ((pc.length < 4 ) || (pc.length >4)){ // check that the postcode have at least 4 digit
        errMsg += "<li>Postcode have to be 4 digit.</li>";
    }
	if (uname == "") { //check whether User Name is empty
		errMsg += "<li>User name cannot be empty.</li>";
	}
	if ((!genm) && (!genf)) { //check whether gender is selected
		errMsg += "<li>A gender must be selected.</li>";
	}
    if ((!A) && (!B) && (!C) && (!D)) { //check what is your favourite taco
		errMsg += "<li>Please fill in the checkbox.</li>";
	}
	/* Rule 2, check if the user ID and Email contains an @ symbol */
	if (sid1.indexOf('@') == 0) {
		errMsg += "<li>User ID cannot start with an @ symbol.</li>";
	}
	if (sid1.indexOf('@') < 0) {
		errMsg += "<li>User ID must contain an @ symbol.</li>";
	}
    if (el.indexOf('@') == 0) {
		errMsg += "<li>Email cannot start with an @ symbol.</li>";
	}
	if (el.indexOf('@') < 0) {
		errMsg += "<li>Email must contain an @ symbol.</li>";
	}
	/* Rule 3, check if password and retype password are the same */
	if (pwd1 != pwd2) {
		errMsg += "<li>Passwords do not match.</li>";
	}
	/* Rule 4, check if user name contains only letters and spaces */
	if (!uname.match(pattern)) {
		errMsg += "<li>User name contains symbols.</li>";
	}
   






	/* Display error message if any error(s) is/are detected */
	if (errMsg != "") {
		errMsg = "<div id='scrnOverlay'></div>"                   //8.3
			+ "<section id='errWin' class='window'><ul>"
			+ errMsg                                                  //8.4
			+ "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";
		var numOfItems = ((errMsg.match(/<li>/g)).length) + 14;    //8.5
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
	$("#regform").submit(validate);/*link function validate() to the submit event
				of the form */
}
$(document).ready(init);