"use strict";

function fullRecipe(){
      // console.log(recipeID);


			let ajaxRequest = new XMLHttpRequest();
			let url ='http://api.yummly.com/v1/api/recipe';
		 	let appID="?_app_id=2d03f5be";
		 	let appKey="&_app_key=5be64fae7076a6211ec10c9cd6f6a61b";
      let test ="/Cheesy-Spinach-Pinwheels-931846"

      let recipeURL = url + test + appID + appKey;
      console.log(recipeURL);

      ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){
              let jsonObj = JSON.parse(ajaxRequest.responseText);
              let getResults= document.getElementById("results");

              // create a parent container for each recipe
              let detailsContainer = document.createElement("div");

              //create an h1 element for the recipe name
              let detailsHeading= document.createElement("h1");
              // create recipename text node
              let detailsHeadingNode = document.createTextNode(jsonObj.name);
              // append element and recipe name together
              detailsHeading.appendChild(detailsHeadingNode);
              // append element to recipe container
              detailsContainer.appendChild(detailsHeading);


              // create an image element
							let detailsPic= document.createElement("img");
							// create image text node
							let detailsPicNode = (jsonObj.images.hostedLargeUrl);
              console.log(detailsPicNode);
							// set src attribute of imagenode as an absolute url
							detailsPic.setAttribute("src", detailsPicNode);
							// append image text node to recipe container
							detailsContainer.appendChild(detailsPic);

              // // create a paragraph element for time to cook
              let timePara= document.createElement("p");
              // get totalTimeInSeconds
              let time = jsonObj.totalTime;

              let timeNode= document.createTextNode(time);
							// append text node to paragraph
							timePara.appendChild(timeNode);
							// append paragraph to container
							detailsContainer.appendChild(timePara);

              // // create a paragraph element for time to cook
              let servingsPara= document.createElement("p");
              // get totalTimeInSeconds
              let servings = jsonObj.yield;

              let servingsNode= document.createTextNode(servings);
							// append text node to paragraph
							servingsPara.appendChild(servingsNode);
							// append paragraph to container
							detailsContainer.appendChild(servingsPara);


              let detailsIngredientUL= document.createElement("ul");
							let detailsIngredientLineItem = "";
							let detailsIngredientLineItemNode= "";
							//  for each ingredient
							for (let h = 0; h < jsonObj.ingredientLines.length; h ++) {
								//  		create a new list item
									let detailsIngredientLineItem= document.createElement("li");
									//      create textnode for each ingredient
									let detailsIngredientLineItemNode= document.createTextNode(jsonObj.ingredientLines[h]);
									//     append textnode to ingredient list item element
									detailsIngredientLineItem.appendChild(detailsIngredientLineItemNode);
									// 	 	append element to unordered list
									detailsIngredientUL.appendChild(detailsIngredientLineItem);
								}
								// append element to recipe container
								detailsContainer.appendChild(detailsIngredientUL);

                // append container to results div/DOM
                getResults.appendChild(detailsContainer);




              //image- NOT WORKING
              //attribution

					}
					else {
					console.log("Status error: " +ajaxRequest.status);
					}
				}
				else {
					console.log("Ignored readyState: " + ajaxRequest.readyState);
				}
	}

	ajaxRequest.open("GET", recipeURL, true);
	ajaxRequest.send();

}

document.getElementById("getFullRecipe").addEventListener("click", fullRecipe);


        //let recipeURL = url + appID + appKey + recipeID;
        // console.log(recipeURL);
        //
    		// return ajaxRequest.open("GET", urlString, true);

        //
        // document.getElementById("getFullRecipe").addEventListener("click", function() {
        //
        //
        //
        //   //url constructed of url, key, id, and recipeID
        // });


//need to figure out how to grab the recipe ID from the data of the first ajaxrequest.
//insert detailed recipe right below button to get recipe.  (slide down)
