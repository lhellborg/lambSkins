
document.addEventListener('DOMContentLoaded', function () {

	var myFirebaseRef = new Firebase("https://lambskin.firebaseio.com/");


	myFirebaseRef.orderByChild("nr").on("value", function(snapshot) {
		var obj = (snapshot.val());

		for (i = 1; i < 16; i++) {
			if (obj["lamb" + i]) {
				console.log("lamb " + i + " redan sålt");
			} else {
				appendLambImg(i);
			}
		}

	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
	});


	function appendLambImg(nr) {
		var lambImg = ('<div class="col-xs-6 col-sm-4 col-md-3 threePic">' +
							'<img class="img-responsive lambImgs" src="images/lamm'+nr+'-small.jpg"  alt="lamm skinn" data-toggle="modal" data-target="#lamm'+nr+'">' +
							'<paper-button class="bokBtn" raised data-toggle="modal" data-target="#lamm'+nr+'">Till bokning</paper-button>' +
							'<hr>' +
						'</div>')
		$(".section").append(lambImg);
	}




	function appendModals(nr) {
		var lambModals = ('<div class="modal fade" id="lamm'+nr+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel'+nr+'" aria-hidden="true">' +
			  	'<div class="modal-dialog">'+
			   		 '<div class="modal-content">'+
			      		// '<div class="modal-header">'+
			        // 		'<h4 class="modal-title" id="myModalLabel'+nr+'">Lammskinn '+nr+'</h4>'+
			      		// '</div>'+
			      		'<div class="modal-body">'+
			        		'<img class="img-responsive" src="images/lamm'+nr+'-medium.jpg" alt="lamm '+nr+'">'+
			        		'<p>Jag vill reservera detta skinn</p>'+
			      		'</div>'+
			      		'<form is="iron-form" id="form">' +
							  '<paper-input type="text" label="Mitt namn" required auto-validate autocomplete="on" error-message="Fyll i ditt namn om du vill reservera" id="reserveratNamn'+nr+'" class="accountRequired"></paper-input>' +
							  '<gold-phone-input label="_Mitt telefon nr" country-code="46" phone-number-pattern="" id="reserveratTel'+nr+'" class="accountRequired"></gold-phone-input>' +
							  '<gold-email-input label="Min email adress" auto-validate id="reserveratMail'+nr+'" class="accountRequired"></gold-email-input>' +
							  '<paper-button type="submit" class="submitBtn" raised onclick="submitForm('+nr+')">Reservera</paper-button>' +
							  '<paper-button class="closeBtn" data-dismiss="modal" raised >Stäng</paper-button>'+
							'</form><br>'+
							'<p id="storageValue'+nr+'"></p>'+
			      		// '<div class="modal-footer">'+
			      		// '<paper-button data-dismiss="modal" raised >Stäng</paper-button>'+
			      		// '</div>'+
			    	'</div>'+
			  	'</div>'+
			'</div>')
		$(".modals").append(lambModals);
	}

	for (i = 1; i < 16; i++) {
	    appendModals(i);
	}

});


