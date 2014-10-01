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
}

function getLatestData() {
	$(".eRow").remove();
    var oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get", "http://io.milowski.com/usgs/earthquakes/feed/v1.0/summary/all_hour.geojson", true);
    oReq.send();
}

$( document ).ready( function() {
	getLatestData();
});