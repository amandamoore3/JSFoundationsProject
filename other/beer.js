function getBeer(){

			let ajaxRequest = new XMLHttpRequest();
      // let text= document.getElementById('input').value;
			
      let url ='https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/styles?key=4e89a539c0463a0696b1cd481a01d3bd';

			ajaxRequest.onreadystatechange = function(){
				console.log(ajaxRequest.readyState);
				if(ajaxRequest.readyState == 4){
					if(ajaxRequest.status == 200){
						// let jsonObj = JSON.parse(ajaxRequest.responseText);
              console.log(ajaxRequest.responseText);
          }
					else {
					console.log("Status error: " +ajaxRequest.status);
					}
				}
				else {
					console.log("Ignored readyState: " + ajaxRequest.readyState);
				}
	}


ajaxRequest.open("GET", url , true);
ajaxRequest.send();
}


// document.getElementById('submit').addEventListener('click', getBeer)


// http://api.brewerydb.com/v2/?key=4e89a539c0463a0696b1cd481a01d3bd/styles
