"use strict";

function search(){

			let ajaxRequest = new XMLHttpRequest();
			let url ='http://api.yummly.com/v1/api/recipes';
		 	let appID="?_app_id=2d03f5be";
		 	let appKey="&_app_key=5be64fae7076a6211ec10c9cd6f6a61b"
		 	let allowedCourse="&allowedCourse[]=course^course-" + document.getElementById("courseDD").value;
			let getKeywords= document.getElementById("search").value;
			let keywords="&q=" + getKeywords;

			// console.log(keywords);
			//the below variables need to have allowedIngredient[]=value&allowedIngredient[]=value for more than one ingredient from input.
			let getIncluded = document.getElementById("includedIngredients").value;
			let included="&allowedIngredient[]=" + getIncluded;
			let getExcluded = document.getElementById("excludedIngredients").value;
			let excluded="&excludedIngredient[]=" + getExcluded;

			console.log(getExcluded);
			console.log(typeof getExcluded);
			console.log(getIncluded);
			console.log(typeof getIncluded);

			ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){
						let jsonObj = JSON.parse(ajaxRequest.responseText);
            let getResults= document.getElementById("results");
            for (let i = 0; i < jsonObj.matches.length; i++) {
// create a parent container for each recipe
              let container = document.createElement("div");
// create an h1 element
							let heading= document.createElement("h1");
// create recipename text node
							let headingNode = document.createTextNode(jsonObj.matches[i].recipeName);
// append element and recipe name together
							heading.appendChild(headingNode);
// append element to recipe container
							container.appendChild(heading);

							// getResults.appendChild(container);

//  create an unordered list for ingredients
							let ingredientUL= document.createElement("ul");
							let ingredientLineItem = "";
							let ingredientLineItemNode= "";
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


// // create a paragraph element for time to cook
							let timeP= document.createElement("p");
							// get totalTimeInSeconds
							// convert to number
							// manipulate number
							// convert to string
							// createTextNode with string from previous line
							// append to timeP
							let timeNode= document.createTextNode(jsonObj.matches[i].totalTimeInSeconds);
							let timeNodeNum= parseInt(timeNode);
							console.log(typeof Number(timeNode));
// number/3600 to get the hours in decimal format
// take time to cook and change it into a number
// create text node of result
// append text node to paragraph
// append paragraph to container

//
// <img src= "imageURL"/>
// create an image element
								let pic= document.createElement("img");
// create image text node
								let picNode = (jsonObj.matches[i].imageUrlsBySize["90"]);
// set src attribute of imagenode as an absolute url
								pic.setAttribute("src", picNode);
// append image text node to recipe container
								//pic.appendChild(picNode);
								// let stringPicURL= JSON.stringify(picNode);
								// let stringPicURL= picNode.toString();
								// pic.setAttribute("src", picNode.toString());
								// pic.setAttribute("src", JSON.stringify(picNode));

								container.appendChild(pic);


// append container to results div/DOM
							getResults.appendChild(container);




              // let pic= document.createElement("img");
              //
							//
              // // let link = document.createElement("a")
							//
							//
              // let picNode= document.createTextNode(jsonObj.matches[i].imageUrlsBySize["90"]);
							//
              // // for (let h = 0; h < jsonObj.matches.ingredients.length; h ++) {
              // //   let ingredientLineItem= document.createElement("li");
              // //   let ingredientLineItemNode= document.createTextNode(jsonObj.matches[i].ingredients[h]);
              // //
              // //   ingredientLineItem.appendChild(ingredientLineItemNode);
							//
							//
							//
              //   //append each ingredient line item to the unordered listItem
							//
							//
              // // let name = heading.appendChild(headingNode);
              // let picture= pic.appendChild(picNode);
							//
              // container.appendChild(name);
              // container.appendChild(picture);
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

	// let getIncluded = document.getElementById("includedIngredients").value;
	// let included="&allowedIngredient[]=" + document.getElementById("includedIngredients").value;
	// let getExcluded = document.getElementById("excludedIngredients").value;
	// let excluded="&excludedIngredient[]=" + document.getElementById("excludedIngredients").value;

	function ajaxFunc() {

		// set all variables first
		// let includedUrlString = "";
		// if (getIncluded !== "") {
		// 	includedUrlString = included;
		// }
		//
		// /* yada yada yada */
		//
		// let urlString = url + appID + appKey + allowedCourse + includedString + yada yada yada;



		if (getExcluded && getIncluded === "") {
			return ajaxRequest.open("GET", url + appID + appKey + keywords, true);
			console.log("1 " + url + appID + appKey + keywords);
			console.log("excluded value: " + getExcluded);
			console.log("included value: " + getIncluded);
		}
		else if (getExcluded =="") {
			return ajaxRequest.open("GET", url + appID + appKey + keywords + included, true);
			console.log("2 " + url + appID + appKey + keywords + included);
			console.log(getExcluded);
			console.log(getIncluded);
		}
		else if (getIncluded == "") {
			ajaxRequest.open("GET", url + appID + appKey + keywords + excluded, true);
			console.log("3 " + url + appID + appKey + keywords + excluded);
			console.log(getExcluded);
			console.log(getIncluded);
		}
		else {
			ajaxRequest.open("GET", url + appID + appKey + keywords + allowedCourse + included + excluded, true);
			console.log("4 " + url + appID + appKey + keywords + allowedCourse + included + excluded);
			console.log(getExcluded);
			console.log(getIncluded);
		}

	}


	// ajaxRequest.open("GET", url + appID + appKey + keywords + allowedCourse + included + excluded, true);
	// console.log(url + appID + appKey + keywords + allowedCourse + included + excluded);
	ajaxFunc();
	ajaxRequest.send();
}

document.getElementById('submit').addEventListener('click', search)

// for each item in the array, while i is less than the length of the array, add one to i
//
	// create a parent container for each recipe

	// create an h1 element
	// create recipename text node
	// append element and recipe name together
	// append element to recipe container

	// create an image element
	// create image text node
	// set src attribute of imagenode as an absolute url
	// append image text node to recipe container

//   create an unordered list for ingredients
//   for each ingredient create a new list item
//     create textnode for each ingredient
//     append textnode to ingredient list item element
// 	 	append element to unordered list

// create a paragraph element for time to cook
// take time to cook and change it into a number
// number/3600 to get the hours in decimal format
// create text node of result
// append text node to paragraph
// append paragraph to container


//
//
//   append parent container to dom


// PROBLEMS
//
// IF ELSE STATEMENTS NOT WORKING CORRECTLY FOR AJAXREQUEST.  ALL FIELDS SELECTED IS THE ONLY ONE THAT WORKS.
// trying to set an image source pulled from the object as a URL.  It currently thinks that's the name of a file saved on my machine and returns err file not found.  I think I need to convert that value to a string, but the methods I've tried aren't working.  (toString, and JSON.stringify).  It actually pulls in the file path ending with [Object%20Text].  Are there any other ways I'm missing?
//
// -Similar issue with trying to pull the time in seconds value.  I tried to convert it to a number and console log the variable and it returns NaN.  Then I logged the typeof the variable and it returned number.
