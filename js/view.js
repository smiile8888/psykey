var data = [{name: "Alan Burke", phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Counsellor", specialties: "Anxiety<br>Depression<br>Eating Disorders", location: "369 Military Tr<br>Scarborough, ON", insurance: "Manulife"},
{name: "Barbara Summers", phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychologist", specialties: "Sleep Disorders<br>Mood Disorders<br>Depression", location: "571 Military Tr<br>Scarborough, ON", insurance: "Sun Life"},
{name: "Anna Sousa", phone:"555-555-5555", email:"test@gmail.com", role: "Psychotherapist", gender: "female", specialties: "Stress<br>Anxiety<br>Depression", location: "25 Sheppard W<br>Toronto, ON", insurance: "Blue Cross<br>ChoiceCare<br>Green Shield"},
{name: "Catherine Kamel", phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychotherapist", specialties: "Depression<br>Anxiety<br>Relationships", location: "507 Davenport<br>Toronto, ON", insurance: "Blue Cross<br>ChoiceCare<br>Manulife"},
{name: "Change Clinic", phone:"555-555-5555", email:"test@gmail.com", gender: "male",role: "Psychologist", specialties: "Trauma<br>Grief<br>Relationships", location: "1800 Bloor<br>Toronto, ON", insurance: "Sun Life<br>Manulife"},
{name: "Amy Scott", phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Social Worker", specialties: "Anxiety<br>Depression<br>Emotional Disturbance", location: "1355 Morningside Ave<br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Green Shield"},
{name: "Saiful Alam", phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Therapist", specialties: "Self-Esteem<br>Mood Disorders<br>Behavioural Disorders", location: "CMHA <br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife"},
{name: "Alana Hunt", phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychotherapist", specialties: "Anxiety<br>Depression<br>Stress", location: "Kingston Rd<br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife"}]


var view = (function(){
	window.onload = function(){
		var toList = [];
		var query = window.location.search.split('=')[1];
		var qs = query.split('+');
		for (var pos = 0; pos < data.length; pos++){
			var entry = data[pos];
			
			// Keep track of # of hits
			var count = 0;
			for (var i = 0; i < qs.length; i++) {
				var word = qs[i].toLowerCase();
				var entry = data[pos];

				if (!toList.includes(entry) && (entry.name.toLowerCase().includes(word) || entry.role.toLowerCase().includes(word) 
						|| entry.specialties.toLowerCase().includes(word) || entry.location.toLowerCase().includes(word) 
						|| entry.insurance.toLowerCase().includes(word) || entry.gender.toLowerCase() === word)){
					count++;
				} else if (word.toLowerCase().includes("toronto")){
					count++;
				}

				// Only push the result if it makes a hit on every query word
				if (count == qs.length) {
					toList.push(entry);
				}
			}
        }
		displayResults(toList);
	}
	
	var displayResults = function(list){
		for (var i = 0; i < list.length; i++){
			var f = document.getElementById("result-list");
			f = document.createElement('div');
			f.className = "result-box";
			var genderIcon = 'media/female_placeholder.png';
			if (list[i].gender === "male"){
				genderIcon = 'media/male_placeholder.png';
			}
			f.innerHTML =('<div class="banner-info-grid-left"/>\
					<img src="' + genderIcon + '"width="150"/>\
				</div/>\
				<div class="banner-info-grid-right"/>\
					<div class="col-md-3"/>\
						<h4>' + list[i].name + '</h4/>\
						<p class="et">Psychotherapist</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Specialities</h4/>\
						<p class="et">' + list[i].specialties + '</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Location</h4/>\
						<p class="et">' + list[i].location + '</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Accepted Insurance</h4/>\
						<p class="et">' + list[i].insurance + '</p/>\
					</div/>\
				</div/>\
				<div display="none" class="result-box-bottom banner-info-grid-left"/>\
				<div class="banner-info-grid-right"/>\
					<div class="col-md-3"/>\
						<h4><br>Contact Info:</h4/>\
						<p class="et">Telephone: ' + list[i].phone + '</p/>\
						<p class="et">Email: ' + list[i].email + '</p/>\
					</div/>\
				</div/>\
				</div/>');
			f.onclick = showResultBoxBottom;
			document.getElementById("result-list").append(f);
		}
	}
	
	
    var showResultBoxBottom = function() {
		var e = this;
        var bottom = e.getElementsByClassName('result-box-bottom')[0];
        if (bottom.style.display == "block") {
            e.style.height = "150px";
            bottom.style.display = "none";
        }
        else {
            e.style.height = "210px";
            bottom.style.display = "block";
        }
    }
	
	return view;
	
}());
