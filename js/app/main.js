
$(document).ready(function () {

	// var myFirebaseRef = new Firebase("https://lambskin.firebaseio.com/");


  // Initialize Firebase
 // var config = {
 //   apiKey: "AIzaSyBoYLZec85wm9rxqXJUm2CGXHof5P0nMLE",
 //   authDomain: "lambskin-6b71c.firebaseapp.com",
 //   databaseURL: "https://lambskin-6b71c.firebaseio.com",
 //   projectId: "lambskin-6b71c",
 //)   storageBucket: "",
  //  messagingSenderId: "344391921798"
  //};
  //firebase.initializeApp(config);


 // window.myFirebaseRef = firebase.database().ref();


  // var data = {
  // 		lamb17: { nr: 17, name: "Linda", tel: "", email: "" }
  // 	};



   // var data = {
   //      	lamb1 : {'productName':'lamb1','nr':'1','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb2 : {'productName':'lamb2','nr':'2','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb3 : {'productName':'lamb3','nr':'3','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb4 : {'productName':'lamb4','nr':'4','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb5 : {'productName':'lamb3','nr':'5','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb6 : {'productName':'lamb6','nr':'6','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb7 : {'productName':'lamb7','nr':'7','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb8 : {'productName':'lamb8','nr':'8','color':'dark','name':"","tel":"","email":"","sold":false},
   //      	lamb9 : {'productName':'lamb9','nr':'9','color':'medium','name':"","tel":"","email":"","sold":false},
   //      	lamb10 : {'productName':'lamb10','nr':'10','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb11 : {'productName':'lamb11','nr':'11','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb12 : {'productName':'lamb12','nr':'12','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb13 : {'productName':'lamb13','nr':'13','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb14 : {'productName':'lamb14','nr':'14','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb15 : {'productName':'lamb15','nr':'15','color':'white','name':"","tel":"","email":"","sold":false},
   //      	lamb16 : {'productName':'lamb15','nr':'16','color':'white','name':"","tel":"","email":"","sold":false}
   //      };

// to initialize data
	// myFirebaseRef.set(data);

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


