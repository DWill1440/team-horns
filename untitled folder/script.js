var apiKey = '2f95f51b181ddd27883e91878e922466'; // assign our key to a variable, easier to read

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
	document.getElementById('submitZip').addEventListener('click', function(event){
		event.preventDefault();
		var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
		var url = 'http://api.petfinder.com/pet.getRandom?key=2f95f51b181ddd27883e91878e922466&shelterid=KY305&output=full&format=json';
		
		// Within $.ajax{...} is where we fill out our query 
		$.ajax({
			url: url,
			jsonp: "callback",
			dataType: "jsonp",
			data: {
				key: apiKey,
				animal: 'dog',
				zip: 'location',
				output: 'basic',
				format: 'json'
			},
			// Here is where we handle the response we got back from Petfinder
			success: function( response ) {
				console.log(response); // debugging
				var dogName = response.petfinder.pet.name.$t;
				var img = response.petfinder.pet.media.photos.photo[0].$t;
				var id = response.petfinder.pet.id.$t;
				var zipcode = response.petfinder.pet.contact.zip.$t;
				var age = response.petfinder.pet.age.$t;

				var newName = document.createElement('a');
				var newDiv = document.createElement('div');
				var newDiv2 = document.createElement('div');
				var newDiv3 = document.createElement('div');
				newName.textContent = dogName;
				newName.href = 'https://www.petfinder.com/petdetail/' + id;
				newDiv2.textContent = zipcode;
				newDiv3.textContent = age;

				var newImg = document.createElement('img');
				newImg.src = img;
				
				var list = document.createElement("ul");
				list.setAttribute("id", "List");
				document.body.appendChild(list);

				newDiv.appendChild(newName);
				list.appendChild(newDiv);
				list.appendChild(newImg);
				list.appendChild(newDiv2);
				list.appendChild(newDiv3);
			}
		});
		})

}