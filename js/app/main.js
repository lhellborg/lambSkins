
document.addEventListener('DOMContentLoaded', function () {

function appendLambImg(nr) {
	var lambImg = ('<div class="col-xs-6 col-sm-4 threePic">' +
						'<img class="img-responsive" src="images/lamm'+nr+'-small.jpg"  alt="lamm'+nr+'" data-toggle="modal" data-target="#lamm'+nr+'">' +
						'<paper-button class="submitBtn" raised data-toggle="modal" data-target="#lamm'+nr+'">Boka skinn nr '+nr+'</paper-button>' +
						'<hr>' +
					'</div>')
	$(".section").append(lambImg);
}

for (i = 1; i < 16; i++) {
    appendLambImg(i);
}


function appendModals(nr) {
	var lambModals = ('<div class="modal fade" id="lamm'+nr+'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel'+nr+'" aria-hidden="true">' +
		  	'<div class="modal-dialog">'+
		   		 '<div class="modal-content">'+
		      		'<div class="modal-header">'+
		        		'<h4 class="modal-title" id="myModalLabel'+nr+'">Lammskinn '+nr+'</h4>'+
		      		'</div>'+
		      		'<div class="modal-body">'+
		        		'<img class="img-responsive" src="images/lamm'+nr+'-large_x1.jpg" alt="lamm '+nr+'">'+
		        		'<p>Jag reserverar skinn nr '+nr+'</p>'+
		      		'</div>'+
		      		'<form is="iron-form" id="form">' +
						  '<paper-input type="text" label="Mitt namn" required auto-validate autofocus autocomplete="on" error-message="Fyll i ditt namn om du vill reservera" id="reserveratNamn'+nr+'" class="accountRequired"></paper-input>' +
						  '<gold-phone-input label="_Mitt telefon nr" country-code="46" phone-number-pattern="" id="reserveratTel'+nr+'" class="accountRequired"></gold-phone-input>' +
						  '<gold-email-input label="Min email adress" auto-validate id="reserveratMail'+nr+'" class="accountRequired"></gold-email-input>' +
						  '<paper-button type="submit" class="submitBtn" raised onclick="submitForm('+nr+')">Reservera</paper-button>' +
						'</form><br>'+
						'<p id="storageValue'+nr+'"></p>'+
		      		'<div class="modal-footer">'+
		      		'<paper-button data-dismiss="modal" raised >Close</paper-button>'+
		      		'</div>'+
		    	'</div>'+
		  	'</div>'+
		'</div>')
	$(".modals").append(lambModals);
}

for (i = 1; i < 16; i++) {
    appendModals(i);
}

});


