

	var myFirebaseRef = new Firebase("https://lambskin.firebaseio.com/");


	function submitForm(nr) {

		myFirebaseRef.on("value", function(snapshot) {
		 	console.log(snapshot.val());

			var storVal = "storageValue" + nr;
			document.getElementById(storVal).innerHTML = "";

			resName = "reserveratNamn" + nr;
			resTel = "reserveratTel" + nr;
			resMail = "reserveratMail" + nr;
			var name = document.getElementById(resName).value;
			var tel = document.getElementById(resTel).value;
			var mail = document.getElementById(resMail).value;

			var reservedSkin = skinReservedTest(nr)

			var valid = validateInput(name, tel, mail); //check all the required fields

		    if (valid) {
		    	if (reservedSkin) {
		    		document.getElementById(storVal).innerHTML = "Sorry, det här skinnet är redan reserverat";
		    	} else {
				var firebaseRefChild = "lamb" + nr;
				var objectToInsert = {};
				objectToInsert[firebaseRefChild] = {
					nr: nr,
					name: name,
					tel: tel,
					email: mail
				};
				myFirebaseRef.update(objectToInsert);
				document.getElementById(storVal).innerHTML = "Bra val! Vi har reserverat det här till dig!";
				}
			}
			else {
				document.getElementById(storVal).innerHTML= "Var snäll och fyll i alla fälten"; //when some required fields are missing
			}

		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		  alert("Kunde tyvärr inte komma åt bokningarna, försök igen :-)")
		});



	}

	function skinReservedTest(nr) {
		var skinNr = "lamb" + nr+ "/name";
		var reservedSkin = false;
		myFirebaseRef.child(skinNr).on("value", function(snapshot) {
	  		reservedSkin = snapshot.val();
		});
		return reservedSkin;
	}

	// Since a required field that has never been "touched" will not show any error message, each input that is required has a class "accountRequired" that can be checked to see that the value is not empty.
	function validateInput(name, tel, mail) {
		var isValid = true;

		if (name === "") {
			return isValid = false;
		} else if (tel === "") {
			return isValid = false;
		} else if (mail === "") {
			return isValid = false;
		}
		return isValid;
	};

