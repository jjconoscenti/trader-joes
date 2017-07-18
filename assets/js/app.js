$(document).ready(function() {
    $('select').material_select();
});

// after hitting submit button on form
$('#submitBtn').on('click', function(e) {
    e.preventDefault();
    Materialize.toast('Thanks for your help!', 4000);
    });

// Initialize collapse button
$(".button-collapse").sideNav({
    menuWidth: 200, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { },
    onClose: function(el) { },
});

// load firebase
var config = {
    apiKey: "AIzaSyDEWTNwkcAHPBLAEirK-qDQeulnRJmO9IY",
    authDomain: "trader-joes-experiment.firebaseapp.com",
    databaseURL: "https://trader-joes-experiment.firebaseio.com",
    projectId: "trader-joes-experiment",
    storageBucket: "trader-joes-experiment.appspot.com",
    messagingSenderId: "705104097609"
  };
// initialize app
firebase.initializeApp(config);  

    var userName = $('#userName').val();
    $('userName').val('');

    var storeLocation = $('#storeLocation').val();
    $('storeLocation').val('');

    var items = $('#items').val();
    $('items').val('');

    var time = $('#time').val();
    $('time').val('');

    var attractiveness;

    addItem(userName,storeLocation,items,time);
;

// database.ref().once('child_added', function(childSnapshot) {
//     var sv = childSnapshot.val();
//         console.log(sv);
// })

function addItem (userName,storeLocation,items,time) {
    if (userName && storeLocation && items && time) {
        database.ref().push({
            userName: userName,
            storeLocation: storeLocation,
            items: items,
            time: time
        });
    } else {
        console.log('ENTER INFORMATION PLEASE!');
    }};
