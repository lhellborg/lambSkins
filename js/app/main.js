
document.addEventListener('DOMContentLoaded', function () {

	var myFirebaseRef = new Firebase("https://lambskin.firebaseio.com/");

				 //	myFirebaseRef.set({
				//	lamb17: {
				//		nr: 17,
				//		name: "Linda",
				 //		tel: "",
					//	email: ""
				//}
				//});


	myFirebaseRef.orderByChild("nr").on("value", function(snapshot) {
		$('#mainPic').empty();
		var obj = (snapshot.val());

		for (i = 1; i < 16; i++) {
			if (obj["lamb" + i]) {
				console.log("lamb " + i + " redan sålt");
				appendLambImgSold(i)
			} else {
				appendLambImg(i);
			}
		}

	}, function (errorObject) {
		console.log("The read failed: " + errorObject.code);
		alert("Kunde tyvärr inte komma åt bokningarna, försök igen :-)")
	});


	function appendLambImg(nr) {
		var lambImg = ('<div class="col-xs-6 col-sm-4 col-md-3 threePic clickable">' +
							'<img class="img-responsive lambImgs clickable" src="images/lamm'+nr+'-small.jpg"  alt="lamm skinn" onclick="alertBox('+nr+')">' +
							'<paper-button class="bokBtn clickable" raised onclick="alertBox('+nr+')">Till bokning</paper-button>' +
							'<hr>' +
						'</div>')
		$(".section").append(lambImg);
	}

	function appendLambImgSold(nr) {
		var lambImgSold = ('<div class="col-xs-6 col-sm-4 col-md-3 threePicSold">' +
							'<img class="img-responsive" src="images/lamm'+nr+'-small.jpg"  alt="lamm skinn">' +
							'<paper-button class="bokBtn" raised id="soldBtn">Bokad</paper-button>' +
							'<hr>' +
						'</div>')
		$(".section").append(lambImgSold);
	}

	function appendModals(nr) {
		var lambModals = ('<div class="modal fade" id="lamm'+nr+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel'+nr+'" aria-hidden="true">' +
			  	'<div class="modal-dialog">'+
			   		 '<div class="modal-content">'+
			      		'<div class="modal-body">'+
			        		'<img class="img-responsive" src="images/lamm'+nr+'-medium.jpg" alt="lamm '+nr+'">'+
			        		'<p class="textRes">Jag vill reservera detta skinn</p>'+
			      		'</div>'+
			      		'<form is="iron-form" id="form">' +
							  '<paper-input type="text" label="Mitt namn" required auto-validate autocomplete="on" autofocus error-message="Fyll i ditt namn om du vill reservera" id="reserveratNamn'+nr+'" class="accountRequired"></paper-input>' +
							  '<gold-email-input label="Min emailadress" auto-validate id="reserveratMail'+nr+'" class="accountRequired"></gold-email-input>' +
							  '<paper-button type="submit" class="submitBtn" id="reserveBtn'+nr+'" raised onclick="submitForm('+nr+')">Reservera</paper-button>' +
							  '<paper-button class="closeBtn" data-dismiss="modal" raised >Stäng</paper-button>'+
						'</form><br>'+
						'<p id="storageValue'+nr+'"></p>'+
			    	'</div>'+
			  	'</div>'+
			'</div>')
		$(".modals").append(lambModals);
	}

	for (i = 1; i < 16; i++) {
	    appendModals(i);
	}

});


