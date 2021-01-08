var firebaseConfig = {
  apiKey: "AIzaSyAxZLqM_EKK--afzJWk40x-Jo7my2NTWjo",
  authDomain: "jaivikagritech.firebaseapp.com",
  databaseURL: "https://jaivikagritech.firebaseio.com",
  projectId: "jaivikagritech",
  storageBucket: "jaivikagritech.appspot.com",
  messagingSenderId: "626221874950",
  appId: "1:626221874950:web:29997158bf5dded3eea887",
  measurementId: "G-F7M4LSC0Y9"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
let formMessage = firebase.database().ref('contactForm');

document.getElementById('query-from');
  document.addEventListener('submit', formSubmit);


  function formSubmit(e) {
    e.preventDefault();


    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let mobile= document.getElementById('mobile').value;
    let message = document.getElementById('message').value;



    sendMessage(name, email, mobile, message);


 document.querySelector('.alert').style.display = 'block';

 setTimeout(function() {
    document.querySelector('.alert').style.display = 'none';
  }, 7000);


  document.querySelector('#query-form').reset();
}

function sendMessage(name, email, mobile, message) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      name: name,
      email: email,
     mobile: mobile,
     message: message
    });
  }







