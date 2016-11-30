//form validation using jquery validation plugin
//code source: view-source:https://jqueryvalidation.org/files/demo/
$().ready(function() {
		$("#cateringForm").validate();
});

//Function to prevent the submission of the form
//code source: http://stackoverflow.com/questions/9347282/using-jquery-preventing-form-from-submitting
 $(document).ready(function() {
            //option A
            $("form").submit(function(e){
                e.preventDefault(e);
            });
        });

//Shows voting results image if person has voted and clicked submit
$(document).ready(function() 
{
	var $votingForm = $("#votingForm");
	var $resultsImage = $("#resultsImage");
	var $voteError = $("#voteError");
	
	
	$votingForm.show();
	$resultsImage.hide();
	$voteError.hide();
	
	
    $("#showResults").on('click', function(e) {
    	var $vote = $("input:radio[name ='voteButton']:checked").val();
    	if ($vote === "1" || $vote === "2" || $vote === "3"){
    		$votingForm.hide();
			$resultsImage.show();
			$voteError.hide();
        } else {
        	$voteError.show();
        }
	});  
});

//Get only future dates for date picker
//source code: http://stackoverflow.com/questions/1760533/javascript-calender-to-accept-future-date-only
$( function() {
    $( "#date" ).datepicker({minDate: 0});
  } );

//Methods for Validating the catering form and getting the user's input
document.getElementById("submit").addEventListener("click", validateCatering);

function validateCatering(){
	if ($("#cateringForm").valid()){
		makeMessageObj();
	}
}

function roundNum(num) {
    return Math.ceil(num * 100) / 100;
}


function makeMessageObj() 
{
	var fName = document.getElementById("firstName").value;
	var lName = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var notes = document.getElementById("notes").value;
	var date = document.getElementById("date").value;
	var cateringChoice = document.getElementById("cateringChoice").value;
	var headCount = document.getElementById("count").value;
	var price;
	var cateringChoiceCost;
	var cateringChoiceName;
	if(cateringChoice == 1){
		cateringChoiceName = "Big Meat Catering";
		cateringChoiceCost = 44.99;
	} else if (cateringChoice == 2){
		cateringChoiceName = "Little Meat Catering";
		cateringChoiceCost = 39.99;
	} else if(cateringChoice == 3){
		cateringChoiceName = "Small Time Catering";
		cateringChoiceCost = 34.99;
	}
	price = cateringChoiceCost * (headCount/10);
	price = roundNum(price);

	var messageObj = {fullName: fName + " " + lName, emailAddress: email, count: headCount, choice: cateringChoiceName, price: price, notes: notes, date: date}; 
	showAlertMessage(messageObj);
}

//Shows alert using jquery plugin Sweet Alert 2
//code source: https://limonte.github.io/sweetalert2/
function showAlertMessage(messageObj){
	swal({
	  title: 'Order Summary',
	  text: "Name: " + messageObj.fullName +
	  		"\n Email Address: " + messageObj.emailAddress +
	  		"\n Date of Occasion: " + messageObj.date + 
	  		"\n Number of People: " + messageObj.count + 
	  		"\n Catering Option: " + messageObj.choice + 
	  		"\n Total Price: " + messageObj.price + 
	  		"\n Notes: " + messageObj.notes,
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'This Information Is Correct',
	  cancelButtonText: 'This Information Is Wrong',
	  confirmButtonClass: 'btn btn-success',
	  cancelButtonClass: 'btn btn-danger',
	  buttonsStyling: false
	}).then(function() {
	  swal(
		'Thank you!',
		"Your order has been processed",
		'success'
	  )
	  document.getElementById("formHeader").textContent = "Thank You For Your Order!";
	  var removeEl = document.getElementById('formToDisappear'); 
	  var containerEl = removeEl.parentNode; 
      containerEl.removeChild(removeEl);
      document.getElementById("message").className = "messageShow";
    
	}, function(dismiss) {
	  // dismiss can be 'cancel', 'overlay',
	  // 'close', and 'timer'
	  if (dismiss === 'cancel') {
		swal(
		  'Order Cancelled',
		  'Please fill in the correct information and resubmit',
		  'error'
		)
	  }
	})
}


