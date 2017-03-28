var data = [{name: "Alan Burke", image: 'media/burke.jpg', map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.313695634205!2d-79.21110218492011!3d43.78710337911684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d09a513421fb%3A0x55531b541d38ac79!2s369+Military+Trail%2C+Scarborough%2C+ON+M1E+4E2!5e0!3m2!1sen!2sca!4v1489536346024" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Counsellor", specialties: "Anxiety<br>Depression<br>Eating Disorders", location: "369 Military Tr<br>Scarborough, ON", insurance: "Manulife"},
{name: "Barbara Summers", image: 'media/summers.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychologist", specialties: "Sleep Disorders<br>Mood Disorders<br>Depression", location: "571 Military Tr<br>Scarborough, ON", insurance: "Sun Life", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.1503001505835!2d-79.20564338491997!3d43.79049417911682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d09e4c26b273%3A0x21a6c1f6687ee913!2s571+Military+Trail%2C+Scarborough%2C+ON+M1E+5L2!5e0!3m2!1sen!2sca!4v1489536565215" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Anna Sousa", image: 'media/sousa.jpg', phone:"555-555-5555", email:"test@gmail.com", role: "Psychotherapist", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5649497905715!2d-79.41460108492106!3d43.76113027911774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2d649c258457%3A0xc70e6f6c3bf307e7!2s25+Sheppard+Ave+W%2C+North+York%2C+ON+M2N!5e0!3m2!1sen!2sca!4v1489536642937" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', gender: "female", specialties: "Stress<br>Anxiety<br>Depression", location: "25 Sheppard W<br>North York, ON", insurance: "Blue Cross<br>ChoiceCare<br>Green Shield"},
{name: "Catherine Kamel", image: 'media/kamel.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychotherapist", specialties: "Depression<br>Anxiety<br>Relationships", location: "507 Davenport<br>Toronto, ON", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5887478907584!2d-79.40948888492437!3d43.677522179120416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b349e8a5d21f1%3A0x9e3af3b1002a914b!2s507+Davenport+Rd%2C+Toronto%2C+ON+M4V+1B8!5e0!3m2!1sen!2sca!4v1489536601902" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', insurance: "Blue Cross<br>ChoiceCare<br>Manulife"},
{name: "Change Clinic", image: 'media/clinic.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "male",role: "Psychologist", specialties: "Trauma<br>Grief<br>Relationships", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9515921470897!2d-79.48694448492553!3d43.64917547912138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b36627c2c9c4b%3A0x21f142e1e86531e2!2sBloor+St+W%2C+Toronto%2C+ON!5e0!3m2!1sen!2sca!4v1489536694646" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', location: "1800 Bloor<br>Toronto, ON", insurance: "Sun Life<br>Manulife"},
{name: "Amy Scott", image: 'media/scott.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Social Worker", specialties: "Anxiety<br>Depression<br>Emotional Disturbance", location: "1355 Morningside Ave<br>Scarborough, ON", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.328471516551!2d-79.20369108491923!3d43.80754567911628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0aa21b7a59f%3A0x8d0e9c6851c1730a!2s1355+Morningside+Ave%2C+Scarborough%2C+ON+M1B!5e0!3m2!1sen!2sca!4v1489536738062" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>', insurance: "Sun Life<br>ChoiceCare<br>Green Shield"},
{name: "Saiful Alam", phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Therapist", specialties: "Self-Esteem<br>Mood Disorders<br>Behavioural Disorders", location: "CMHA <br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.7902788334504!2d-79.23540738492044!3d43.77721207911721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d05870148045%3A0xe9e25397e03abbcf!2sCMHA+Toronto!5e0!3m2!1sen!2sca!4v1489536764091" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Alana Hunt", image: 'media/hunt.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychotherapist", specialties: "Anxiety<br>Depression<br>Stress", location: "Kingston Rd<br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6352124222917!2d-79.21926958492196!3d43.738904379118395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da9a0940a7dd%3A0x3a50d5e38d59337b!2sKingston+Rd%2C+Scarborough%2C+ON!5e0!3m2!1sen!2sca!4v1489536795824" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Candice Bovell", image: 'media/bovell.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Psychologist", specialties: "Anxiety<br>Depression<br>Coping Skills", location: "Eglinton Ave<br>Toronto, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.6352124222917!2d-79.21926958492196!3d43.738904379118395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4da9a0940a7dd%3A0x3a50d5e38d59337b!2sKingston+Rd%2C+Scarborough%2C+ON!5e0!3m2!1sen!2sca!4v1489536795824" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Chris Hartley", image: 'media/hartley.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Psychotherapist", specialties: "Self Esteem<br>Anxiety<br>Anger Management", location: "100 Consilium Pl<br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.799024360572!2d-79.25447858527332!3d43.77703055243376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a9a117c92b%3A0xcd98eae48613def2!2s100+Consilium+Pl%2C+Scarborough%2C+ON+M1H+3E3!5e0!3m2!1sen!2sca!4v1489537761853" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Pamella Seaton", image: 'media/seaton.jpg', phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Therapist", specialties: "Relationships<br>Behavioural<br>Depression", location: "10 Milner Crt<br>Scarborough, ON", insurance: "Sun Life<br>ChoiceCare<br>Manulife", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.232991823601!2d-79.23790093449784!3d43.78877817911691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0e5a052cec5%3A0x6e6b89b9a85b1b77!2sRegus+-+Ontario%2C+Scarborough+-+10+Milner+Business+Court!5e0!3m2!1sen!2sca!4v1489539426735" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Ruth Potter", phone:"555-555-5555", email:"test@gmail.com", gender: "female", role: "Counsellor", specialties: "Children<br>Anxiety<br>Depression", location: "385 Silver Star Blvd<br>Scarborough, ON", insurance: "None", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.960569801308!2d-79.297416684497!3d43.81517727911601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3fc0dbdcbc9%3A0x493e14a287eff0e8!2s385+Silver+Star+Blvd%2C+Scarborough%2C+ON+M1V+0E3!5e0!3m2!1sen!2sca!4v1489539692447" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'},
{name: "Brian Brumwell", phone:"555-555-5555", email:"test@gmail.com", gender: "male", role: "Therapist", specialties: "Marital<br>Children<br>Brain Trauma", location: "10 Milner Crt<br>Scarborough, ON", insurance: "None", map: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.232991823601!2d-79.23790093449784!3d43.78877817911691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d0e5a052cec5%3A0x6e6b89b9a85b1b77!2sRegus+-+Ontario%2C+Scarborough+-+10+Milner+Business+Court!5e0!3m2!1sen!2sca!4v1489539426735" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>'}];

var roles_related = {
	'Psychotherapist':['stress', 'obsessive', 'ocd', 'bipolar', 'bpd', 'personality', 'depression', 'anxiety', 'schizoid', 'eating', 'posttraumatic', 'traumatic', 'sleep', 'psychotic', 'identity', 'psychosis', 'insomnia', 'attention', 'adhd', 'hyperactive', 'bulimia', 'phobia', 'gender', 'sex', 'sexual', 'gay', 'bi', 'bisexual', 'queer', 'trans', 'paranoid', 'paranoia'],
	'Psychologist':['schizo', 'bipolar', 'bpd', 'personality', 'suicide', 'suicidal', 'social', 'antisocial', 'multiple', 'anxiety', 'schizoid', 'eating', 'traumatic', 'sleep', 'psychotic', 'psychosis', 'panic', 'breakdown', 'insomnia', 'attention', 'deficit', 'adhd', 'hyperactive', 'bulimia', 'alzheimer', 'phobia', 'gender', 'sex', 'hallucinations', 'hallucinate', 'paranoid', 'paranoia'],
	'Counsellor':['addiction', 'obsessive', 'ocd', 'depression', 'suicide', 'suicidal', 'multiple', 'anxiety', 'schizoid', 'eating', 'posttraumatic', 'traumatic', 'sleep', 'psychotic', 'identity', 'psychosis', 'panic', 'breakdown', 'insomnia', 'attention', 'deficit', 'adhd', 'hyperactive', 'bulimia', 'phobia', 'gender', 'sex', 'sexual', 'gay', 'bi', 'bisexual', 'queer', 'trans', 'hallucinations', 'hallucinate', 'paranoid', 'paranoia', 'confidence', 'body', 'image'],
	'Social Worker': ['work', 'job', 'stress', 'social', 'addiction', 'autism', 'anxiety', 'trauma', 'sleep', 'psychotic', 'panic', 'breakdown', 'insomnia', 'drink', 'alchohol', 'drug']
}

var specialty_related = {
	'Eating Disorder':['bulemia', 'anorexia', 'pica'],
	'Sleep Disorder':['insomnia', 'hypersomnia', 'narcolepsy', 'sleepwalking']
}


var view = (function(){
	window.onload = function(){
		var toList = [];
		var query = window.location.search.split('=')[1];
		var qs = query.split('+');
		for (var pos = 0; pos < data.length; pos++){
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
		// Create a second part to this list, using the related sets above
		for (var pos = 0; pos < data.length; pos++){
			var count = 0;
			for (var i = 0; i < qs.length; i++) {
				var word = qs[i].toLowerCase();
				var entry = data[pos];
				// Todo: if entry.role in roles_related -> check word in related
				if (!toList.includes(entry)){
					if (entry.role in roles_related){
						if ($.inArray(word, roles_related[entry.role]) > -1){
							console.log(roles_related[entry.role]);
							toList.push(entry);
						}
					}
				} 
			}
		}
		
		displayResults(toList);
	};
	
	var displayResults = function(list){
		for (var i = 0; i < list.length; i++){
			var f = document.createElement('div');
			f.className = "result-box";

			var icon;
			if (list[i].image) {
				icon = list[i].image;
			}
			else if (list[i].gender === "male") {
				icon = 'media/male_placeholder.png';
			}
			else {
				icon = 'media/female_placeholder.png';
			}

			f.innerHTML =('<div class="result-box-upper">\
					<div class="result-box-left">\
						<img src="' + icon + '" width="150px" height="120px"/>\
					</div>\
					<div class="result-box-right">\
						<div class="col-xs-3">\
							<h4>' + list[i].name + '</h4>\
							<p>' + list[i].role + '</p>\
						</div>\
						<div class="col-xs-3">\
							<h4>Specialities</h4>\
							<p>' + list[i].specialties + '</p>\
						</div>\
						<div class="col-xs-3">\
							<h4>Location</h4>\
							<p>' + list[i].location + '</p>\
						</div>\
						<div class="col-xs-3">\
							<h4>Accepted Insurance</h4>\
							<p>' + list[i].insurance + '</p>\
						</div>\
					</div>\
				</div>\
				<div class="result-box-bottom">\
					<div class="result-box-bottom-left">\
						<h4>Phone</h4>\
						<p>' + list[i].phone +'</p>\
						<h4>Email</h4>\
						<p>' + list[i].email + '</p>\
						<h4>Description</h4>\
						<p>If you choose to work with me I will strive to create a safe, respectful and meaningful relationship with you. I will listen carefully, with empathy and without judgement. Feelings such as anxiety, anger, depression and isolation often subside as well.</p>\
					</div>\
					<div class="result-box-bottom-right">\
						<div class="map">' + list[i].map + '</div>\
					</div>\
				</div>');
			f.onclick = showResultBoxBottom;
			document.getElementById("result-list").append(f);
		}
	};

    /**
     * Show more detail of each result box
     */
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
    };
	
	return view;
	
}());
