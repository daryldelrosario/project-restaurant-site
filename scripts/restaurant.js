// To Toggle News make var newsToggle != true
// Update Announcements by updating var announce
var newsToggle = true; 
var announce = "New Location Coming Soon!";


function toggleNews() {
	if (newsToggle = true) {
		document.getElementById("news").innerText = announce;
	} else {
		document.getElementById("news").style.display = "none";
	}
}

function clearErrors() {
	for (var loopCounter = 0;
		loopCounter < document.forms["contactUs"].elements.length;
		loopCounter ++) {
			if (document.forms["contactUs"].elements[loopCounter]
			.parentElement.className.indexOf("has-") != -1) {
				
			document.forms["contactUs"].elements[loopCounter]
				.parentElement.className = "form-group";
			}
		}
}


function validateCheckbox() {
	var check = $("input[type=checkbox]:checked").length;
	clearErrors();
	if (!check) {
		alert("Don't Forget to Choose Best Day to Contact You: \r\n M T W Th F");
		event.preventDefault();
		return false;
	}
		alert("Thank you for your submission! \r\n This has NOT been submitted anywhere");
		return true;
}


/*
script type="text/javascript">
$(document).ready(function () {
    $('#checkBtn').click(function() {
      checked = $("input[type=checkbox]:checked").length;

      if(!checked) {
        alert("You must check at least one checkbox.");
        return false;
      }

    });
});

</script>
*/

/*
function validateForm() {
	var name = document.forms["contactUs"]["name"].value;
	var email = document.forms["contactUs"]["email"].value;
	var phone = document.forms["contactUs"]["phone"].value;
}
*/