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
			f.innerHTML =('<div class="result-box-upper">\
				<div class="result-box-left"/>\
					<img src="' + genderIcon + '"width="150"/>\
				</div/>\
				<div class="result-box-right"/>\
					<div class="col-xs-3"/>\
						<h4>' + list[i].name + '</h4/>\
						<p class="et">Psychotherapist</p/>\
					</div/>\
					<div class="col-xs-3"/>\
						<h4>Specialities</h4/>\
						<p class="et">' + list[i].specialties + '</p/>\
					</div/>\
					<div class="col-xs-3"/>\
						<h4>Location</h4/>\
						<p class="et">' + list[i].location + '</p/>\
					</div/>\
					<div class="col-xs-3"/>\
						<h4>Accepted Insurance</h4/>\
						<p class="et">' + list[i].insurance + '</p/>\
					</div/>\
				</div/>\
				</div>\
				<div class="result-box-bottom">\
                <div class="result-box-bottom-left">\
                    <h4>Phone</h4>\
                    <p>(111) 111 1111</p>\
                    <h4>Email</h4>\
                    <p>testemail@gmail.com</p>\
                    <h4>Description</h4>\
                    <p></p>\
                </div>\
                <div class="result-box-bottom-right">\
                    <div class="map">\
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47913.08775277497!2d2.11280225!3d41.361743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e7672e0317%3A0x36127a984f4c05d5!2sL&#39;Hospitalet+de+Llobregat%2C+Barcelona%2C+Spain!5e0!3m2!1sen!2sin!4v1439363529826" frameborder="0" style="border:0" allowfullscreen></iframe>\
                    </div>\
                </div>\
            </div>');
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
            e.style.height = "575px";
            bottom.style.display = "block";
        }
    }
	
	return view;
	
}());
