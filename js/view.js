var sample = [{name: "Alan Burke", role: "Psychologist", specialties: "Anxiety,Depression", location: "Toronto", insurance: "Manulife"},
{name: "Barbara Summers", role: "Psychotherapist", specialties: "Sleep,Mood", location: "Toronto", insurance: "Sun Life"}]


var view = (function(){
	window.onload = function(){
		var toList = [];
		var toLoad = sample;
		var query = window.location.search.split('=')[1];
		var qs = query.split('+');
		for (var i = 0; i < qs.length; i++) {
			for (var q = 0; q < toLoad.length; q++){
				//Right now just testing for matching location
				// how to do proper query matching??
				if (qs[i].toLowerCase() === sample[q].location.toLowerCase()){
					toList.push(sample[q]);
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
			f.innerHTML =('<div class="banner-info-grid-left"/>\
					<img src="media/male_placeholder.png" width="150"/>\
				</div/>\
				<div class="banner-info-grid-right"/>\
					<div class="col-md-3"/>\
						<h4>' + list[i].name + '</h4/>\
						<p class="et">Psychotherapist</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Specialities</h4/>\
						<p class="et">Anxiety, Transgender, ...</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Location</h4/>\
						<p class="et">691 Bloor Street West Toronto, ON</p/>\
					</div/>\
					<div class="col-md-3"/>\
						<h4>Accepted Insurance</h4/>\
						<p class="et">Manulife, Blus Cross, ...</p/>\
					</div/>\
				</div/>\
				<div class="banner-info-grid-left"/>\
				</div/>');
			document.getElementById("result-list").append(f);
		}
	}
	
	return view;
	
}());
