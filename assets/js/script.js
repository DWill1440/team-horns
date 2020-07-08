var apiKey = '2f95f51b181ddd27883e91878e922466'; // assign our key to a variable, easier to read
 
// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
		var url = 'http://api.petfinder.com/pet.getRandom';
		
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'dog',
				'location': zip,
				output: 'basic',
				format: 'json'
			},
			// Here is where we handle the response we got back from Petfinder
			success: function( response ) {
				console.log(dogName); // debugging
				var dogName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;

                var newName = document.createElement('h3');
                newName.setAttribute('class','card-title');
                newName.textContent = dogName;
                
                
                var divCol = document.createElement('div');
                divCol.setAttribute('class','col s2');
                var divCard = document.createElement('div');
                divCard.setAttribute('class','card blue-grey darken-1');
                var divImg = document.createElement('div');
                divImg.setAttribute('class','card-image');
                var divInfo = document.createElement('div');
                divInfo.setAttribute('class','card-content');
                var divLink = document.createElement('div');
                divLink.setAttribute('class','card-action');
                var linkEl = document.createElement('a');
                linkEl.textContent = 'Adopt me!';
                linkEl.href = 'https://www.petfinder.com/petdetail/' + id;
                linkEl.target = '_blank';


				var newImg = document.createElement('img');
				newImg.setAttribute('class','dog-img');
				newImg.src = img;
				
				var rowEl = document.getElementById('card-row');
                
                
                divImg.appendChild(newImg);
                divInfo.appendChild(newName);
                rowEl.appendChild(divCol);
                divCol.appendChild(divCard);
                divCard.appendChild(divImg);
                divCard.appendChild(divInfo);
                divCard.appendChild(divLink);
                divLink.appendChild(linkEl);

				
			}
		});
		})

}