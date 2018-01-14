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
            let getResults= document.getElementById("results");
            for (let i = 0; i < jsonObj.matches.length; i++) {

              let container = document.createElement("div");
              let heading= document.createElement("h1");
              let pic= document.createElement("img");
              let ingredientUL= document.createElement("ul");

              // let link = document.createElement("a")

              let headingNode = document.createTextNode(jsonObj.matches[i].recipeName);
              let picNode= document.createTextNode(jsonObj.matches[i].imageUrlsBySize["90"]);



              let name = heading.appendChild(headingNode);
              let picture= pic.appendChild(picNode);

              container.appendChild(name);
              container.appendChild(picture);
							//getName.appendChild(recipeName);

						}

            getResults.appendChild("container");
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

// for each item in the array, while i is less than the length of the array, add one to i
//
//   create a parent container for each recipe
//   create an h1 element
//   create an image element
//   create an unordered list for ingredients
//   for each ingredient create a new list item
//     append ingredient list items to unordered list for ingredients
//
//   append each element to parent container
//   append parent container to dom
