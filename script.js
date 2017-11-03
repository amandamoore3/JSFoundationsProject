"use strict";

function search(){

			let ajaxRequest = new XMLHttpRequest();
	    // let text= document.getElementById('input').value;
	    let url ='http://api.yummly.com/v1/api/recipes';
			let appID="?_app_id=2d03f5be";
			let appKey="&_app_key=5be64fae7076a6211ec10c9cd6f6a61b"
			let allowedCourse="&allowedCourse[]=course^course-" + document.getElementById("courseDD").value;
			let keywords="&q=" + document.getElementById("search").value;
			//the below variables need to have allowedIngredient[]=value&allowedIngredient[]=value for more than one ingredient from input.
			let included="&allowedIngredient[]=" + document.getElementById("includedIngredients").value;
			let excluded="&excludedIngredient[]=" + document.getElementById("excludedIngredients").value;



			ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){

						let jsonObj = JSON.parse(ajaxRequest.responseText);
						for (let i = 0; i < jsonObj.matches.length; i++) {
							let name = "<h1>" +jsonObj.matches[i].recipeName + "</h1>";


							let ingredients= "<li>" + jsonObj.matches[i].ingredients + "</li>";
							// for (let i=0; i < jsonObj.matches.ingredients.length; i++) {
							// 	let element = document.body.getElementById("ingredientList").createElement("li");
							// 	let textNode= document.body.getElementById("ingredientList").createTextNode("jsonObj.matches.ingredients[i]");
							// 	element.appendChild(textNode);
							// 	}
							}

							// let pic = "<img src=\"" + jsonObj.matches[i].imageURLsBySize.90 + "\"" + "alt=\"There is no picture to display for this recipe.\">"



							document.getElementById("name").innerHTML = name;
							document.getElementById("ingredientList").innerHTML = ingredients;

							// document.getElementById("recipe").innerHTML = pic;
							}
						// console.log(url + appID + appKey + allowedCourse);
						//console.log(jsonObj.matches);
							// document.getElementById("results").innerHTML = jsonObj.matches;

								//create element
								//create textnodes
								//append textnodes to element
								//append element to DOM
								//let content = "<h1>" + jsonObj.matches.recipeName


          }
					else {
					console.log("Status error: " +ajaxRequest.status);
					}
				}
				else {
					console.log("Ignored readyState: " + ajaxRequest.readyState);
				}


// console.log(url + appID + appKey + keywords + allowedCourse + included + excluded);
ajaxRequest.open("GET", url + appID + appKey + allowedCourse, true);
console.log(url + appID + appKey + allowedCourse);
ajaxRequest.send();
}

document.getElementById('submit').addEventListener('click', search)
