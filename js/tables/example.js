(function($){

	$.getJSON(
		"http://cdn.rawgit.com/selvestro/Website/master/assets/countries.json", 
			function( data ) {

		$(document).ready(function() {

    		$('#policies').dataTable( {
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
				]
    		} );

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
				]
    		} );
    		// $('#claims').dataTable( {
      //   		"ajax": data
    		// } );
		} );
	} );

}(jQuery));