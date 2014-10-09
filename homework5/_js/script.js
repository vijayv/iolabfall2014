function reqListener () {
    var data = JSON.parse(this.responseText);
    var tbl_body = "";

    for (var i = 0; i < data.features.length; i++) {

        var new_data = data.features[i].properties;
        var tbl_row = "";
        HeadKeys = '<tr></tr>';

        $.each(new_data, function(k, v) {
        	if (k === 'time' | k === 'updated') {
    	   v = new Date(v);
        	   }
            tbl_row += "<td>"+v+"</td>";
            HeadKeys += '<td><b>'+k+'</b></td>';
        });

        tbl_body += "<tr class=eRow>"+tbl_row+"</tr>";
    }

    $("#myTable tbody").html(HeadKeys + tbl_body);
    markupMap(data);
}

function getLatestData() {
    $(".eRow").remove();
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson", true);
    oReq.send();
}

function markupMap(data) {
    var maxLong;
    var maxLat;
    var minMag = 0;
    var maxMarker;

    for (var i = 0; i < data.features.length; i++) {
        var longitude = data.features[i].geometry.coordinates[0];
        var lat = data.features[i].geometry.coordinates[1];
        var marker = L.marker([lat, longitude]).addTo(map);

        var mag = data.features[i].properties.mag;
        var label = "Time: " + new Date(data.features[i].properties.time).toLocaleString() + " Magnitude: " + mag;
        marker.bindPopup(label);

        if(mag > minMag) {
            maxLong = longitude;
            maxLat = lat;
            minMag = mag;
            maxMarker = marker;
        }
    }
    maxMarker.openPopup();
    map.setView([maxLat, maxLong], 4);
}

$( document ).ready( function() {
    getLatestData();
    map = L.map('map').setView([40.7973462, -99.8774176], 4);
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/yusuzuki.jkb535am/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery c <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 13
    }).addTo(map);
});
