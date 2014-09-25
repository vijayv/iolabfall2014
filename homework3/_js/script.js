
function getLocation() {
    var x = document.getElementById("demo");
    console.log("this is being called");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false";

    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

// Add item to the list
$(function() {
    $("#todo-form").on('submit', function(e) {
	    e.preventDefault();
	    var new_entry = $("#todo-form-add").val();
	    if(new_entry.length !== 0) {
            $("#todo-list").append("<li>" + new_entry + '</li>');
            $("#todo-form-add").val("");
        }
	});
});

// Remove items from the list
$(document).on('click', 'li', function (e) {
    e.preventDefault();
    $(this).remove();
});