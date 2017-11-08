"use strict";

function search(){

			let ajaxRequest = new XMLHttpRequest();
			let url ='http://api.yummly.com/v1/api/recipes';
			//appID and appKey are necessary for each data request
		 	let appID="?_app_id=2d03f5be";
		 	let appKey="&_app_key=5be64fae7076a6211ec10c9cd6f6a61b";

			//the following variables select the value of the serach parameters, and construct search parameters for the GET URL.
		 	let allowedCourse="&allowedCourse[]=course^course-" + document.getElementById("courseDD").value;
			let getKeywords= document.getElementById("search").value;
			let keywords="&q=" + getKeywords;
			let getIncluded = document.getElementById("includedIngredients").value;
			let included="&allowedIngredient[]=" + getIncluded;
			let getExcluded = document.getElementById("excludedIngredients").value;
			let excluded="&excludedIngredient[]=" + getExcluded;


			ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){

						let jsonObj = JSON.parse(ajaxRequest.responseText);
						//this is the element the container will eventually be appended to
            let getResults= document.getElementById("results");
						///for each recipe match, while the index is less than number of matches, increment by one
						for (let i = 0; i < jsonObj.matches.length; i++) {

							// create a parent container for each recipe
              let container = document.createElement("div");

							// create an h1 element
							let heading= document.createElement("h1");
							// create recipename text node
							let headingNode = document.createTextNode(jsonObj.matches[i].recipeName);

							// create an image element
							let pic= document.createElement("img");
							// create image text node
							let picNode = (jsonObj.matches[i].imageUrlsBySize["90"]);
							// set src attribute of imagenode as an absolute url

							//  create an unordered list for ingredients
							let ingredientUL= document.createElement("ul");
							let ingredientLineItem = "";
							let ingredientLineItemNode= "";
							// // create a paragraph element for time to cook
							let timePara= document.createElement("p");
							// get totalTimeInSeconds
							let timeInSeconds = jsonObj.matches[i].totalTimeInSeconds;
							// convert to number
							let timeInSecondsNum =parseInt(timeInSeconds);
							// console.log(timeInSecondsNum);
							// console.log(typeof timeInSecondsNum);

							// manipulate number
							let hours = (timeInSecondsNum / 3600);
							let hours2 = hours.toFixed(2);
							// convert to string
							let hoursString = hours2.toString();
							// createTextNode with string from previous line
							let timeNode= document.createTextNode(hoursString);

							//create an input element
							let button = document.createElement("input");

							let recipeID= jsonObj.matches[i].id;
							//declare onclickURL to construct URL for each recipe with the recipeID
							let onClickUrl = "window.open(" + "\'http://www.yummly.co/recipe/"+ recipeID + "\')";

							// append element and recipe name together
							heading.appendChild(headingNode);
							// append element to recipe container
							container.appendChild(heading);

							//append src set as picNode to the image element
							pic.setAttribute("src", picNode);
							// append image text node to recipe container
							container.appendChild(pic);

							//  for each ingredient
							for (let h = 0; h < jsonObj.matches[i].ingredients.length; h ++) {
								//  		create a new list item
									let ingredientLineItem= document.createElement("li");
									//      create textnode for each ingredient
									let ingredientLineItemNode= document.createTextNode(jsonObj.matches[i].ingredients[h]);
									//     append textnode to ingredient list item element
									ingredientLineItem.appendChild(ingredientLineItemNode);
									// 	 	append element to unordered list
									ingredientUL.appendChild(ingredientLineItem);
								}
								// append element to recipe container
								container.appendChild(ingredientUL);
								// console.log(ingredientUL);

							// append text node to paragraph
							timePara.appendChild(timeNode);
							// append paragraph to container
							container.appendChild(timePara);

							//set attribute of input element with type of button, value of 'Get this recipe', and class.
							button.setAttribute("type", "button");
							button.setAttribute("value", "Get this recipe");
							button.setAttribute("class", "getFullRecipe" + [i]);

							//set onclick to the onClickUrl result
							button.setAttribute("onclick", onClickUrl);
							//append button to recipe container
							container.appendChild(button);

							// append container to results div/DOM
							getResults.appendChild(container);

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


	function ajaxFunc() {


		let includedUrlString = "";
		let excludedUrlString= "";
		let keywordsUrlString= "";

		if (getIncluded !== "") {
			includedUrlString = included;
		}

		if (getExcluded !== "") {
			excludedUrlString = excluded;
		}
		console.log(getKeywords);
		if (getKeywords !== ""){
			keywordsUrlString = keywords;
		}



		let urlString = url + appID + appKey + keywordsUrlString + allowedCourse + includedUrlString + excludedUrlString;
		console.log(urlString);
		return ajaxRequest.open("GET", urlString, true);

	}

	ajaxFunc();
	ajaxRequest.send();
}

document.getElementById('submit').addEventListener('click', search);
