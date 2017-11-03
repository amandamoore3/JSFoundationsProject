"use strict";

function search(){

			let ajaxRequest = new XMLHttpRequest();
			let url ='http://api.yummly.com/v1/api/recipes';
		 	let appID="?_app_id=2d03f5be";
		 	let appKey="&_app_key=5be64fae7076a6211ec10c9cd6f6a61b"
		 	let allowedCourse="&allowedCourse[]=course^course-" + document.getElementById("courseDD").value;

			ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){
						let jsonObj = JSON.parse(ajaxRequest.responseText);
						for (let i = 0; i < jsonObj.matches.length; i++) {
							let name = "<h1>" + jsonObj.matches[i].recipeName + "</h1>";
							document.getElementById("name").innerHTML = name;
						}

						// document.getElementById("name").innerHTML = name;
          }
					else {
					console.log("Status error: " +ajaxRequest.status);
					}
				}
				else {
					console.log("Ignored readyState: " + ajaxRequest.readyState);
				}
	}


	ajaxRequest.open("GET", url + appID + appKey + allowedCourse, true);
	console.log(url + appID + appKey + allowedCourse);
	ajaxRequest.send();
}

document.getElementById('submit').addEventListener('click', search)
