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
							let getName = document.getElementById("name");
							let element= document.createElement("h1");
							//element.setAttribute("id", "recipeTitle");
							//let recipeTitle= document.getElementById("recipeTitle");
							let recipeName = document.createTextNode(jsonObj.matches[i].recipeName);

							element.appendChild(recipeName);
							getName.appendChild(element);

							let getIngredients = document.getElementById("ingredientList");
							for (let h = 0; h < jsonObj.matches[i].ingredients.length; h ++) {
                let ingredientLineItem= document.createElement("li");
                let ingredientLineItemNode= document.createTextNode(jsonObj.matches[i].ingredients[h]);

                ingredientLineItem.appendChild(ingredientLineItemNode);
								getIngredients.appendChild(ingredientLineItem);
							}
							// let getIngredients = document.getElementById("ingredientList");
							// let listItem = document.createElement("li");
							// let recipeIngredient= document.createTextNode(jsonObj.matches[i].ingredients);
							//
							// listItem.appendChild(recipeIngredient);
							// getIngredients.appendChild(listItem);

							let getPic = document.getElementById("picture");
							let pic= document.createElement("img");
							let picNode = document.createTextNode(jsonObj.matches[i].imageUrlsBySize["90"]);
							// let stringPicURL= JSON.stringify(picNode);
							// let stringPicURL= picNode.toString();
							// pic.setAttribute("src", picNode.toString());
							// pic.setAttribute("src", JSON.stringify(picNode));
							pic.setAttribute("src", picNode);
							// pic.src = picNode;
							//
							pic.appendChild(picNode);
							getPic.appendChild(pic);
							// console.log(jsonObj.matches[i].imageUrlsBySize["90"].value);
							console.log(picNode);
							console.log(typeof picNode);
							console.log(typeof pic.src);
							console.log(pic.src);
							//getName.appendChild(recipeName);

						}


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
