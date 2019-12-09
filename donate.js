// Your Web App's Firebase Configuration
var firebaseConfig = {
    apiKey: "AIzaSyATptvIU48BHL_knsoPCVI6qcyv7FQCpEQ",
    authDomain: "student-homeless-alliance.firebaseapp.com",
    databaseURL: "https://student-homeless-alliance.firebaseio.com",
    projectId: "student-homeless-alliance",
    storageBucket: "student-homeless-alliance.appspot.com",
    messagingSenderId: "499980743810",
    appId: "1:499980743810:web:2ad74b3847de5a9cd3309b"
    };
    //Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  // Reference Messages Collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for Form Submit
  document.getElementById('donateForm').addEventListener('submit', submitForm);
  
  // Submit Form
  function submitForm(e){
    e.preventDefault();
  
    // Get Values
    var firstName = getInputVal('first');
    var lastName = getInputVal('last');
    var emailAddress = getInputVal('email');
    var donationAmount = getInputVal('amount');
    var ccNumber = getInputVal('ccnumber');
  
    // Save Message
    saveMessage(firstName, lastName, emailAddress, donationAmount, ccNumber);
  
    // Clear Form on Submission
    document.getElementById('donateForm').reset();
  }
  
  // Function to Get Form Values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save Message to Firebase
  function saveMessage(firstName, lastName, email, donationAmount, ccNumber){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      donationAmount: donationAmount,
      ccNumber: ccNumber
    });
  }