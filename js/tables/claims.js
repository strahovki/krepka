(function($){

	$.getJSON(
		"http://cdn.rawgit.com/selvestro/Website/master/assets/claims.json", 
			function( data ) {

		$(document).ready(function() {

    		$('#claims').dataTable( {
        		// "ajax": data
        		"data": data,
        		// "table": "#policies",
				"fields": [
					{
						"label": "Name",
						"name": "name"
					},
					{
						"label": "Capital",
						"name": "capital"
					},
					{
						"label": "Area",
						"name": "area"
					},
					{
						"label": "Currency",
						"name": "currency"
					}
				],
		    	"columns": [
					{
						"data": "name"
					},
					{
						"data": "capital"
					},
					{
						"data": "area"
					},
					{
						"data": "currency"
					}
				],
				"language": {
            		"url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
        		},
        		"paging":   false,
        		"ordering": false,
        		"info":     false,
        		"sDom": '<"top"i>rt<"bottom"flp><"clear">'
    		} );
		} );
	} );

}(jQuery));