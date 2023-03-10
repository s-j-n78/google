const firebaseConfig = {
    
	 apiKey: "AIzaSyCxvXV-ETjFpuQBWnXT19oz1B0AdaCt-Vk",
    authDomain: "expanded-future-380213.firebaseapp.com",
    projectId: "expanded-future-380213",
    storageBucket: "expanded-future-380213.appspot.com",
    messagingSenderId: "20696568619",
    appId: "1:20696568619:web:8b11f38307669f8a1beb6e"
	
  };
  
	firebase.initializeApp(firebaseConfig);


let queryURL = "https://www.googleapis.com/fitness/v1/users/me/dataSources"

fetch(queryURL)
.then((response) => {
	return response.json()
})
.then((data) => {
	console.log(data)
	
})
.catch((err) => {
	console.log(err)
	
})





let y = 3;
let x = (100 + 50) * y;

document.getElementById("total").innerHTML = x;
