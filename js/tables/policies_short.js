(function($){

	$.getJSON(
		"http://cdn.rawgit.com/selvestro/Website/master/assets/policiess.json",

			function( data ) {

		$(document).ready(function() {

    		$('#policies').dataTable( {
        		// "ajax": data
        		"data": data,
        		// "table": "#policies",
				"fields": [
					{
						"label": "Полис",
						"name": "policy"
					},
					{
						"label": "Объект",
						"name": "object"
					},
					{
						"label": "Страховая сумма",
						"name": "coverageLimit"
					},
					{
						"label": "Страховая премия",
						"name": "premium"
					}
				],
		    	"columns": [
					{
						"data": "policy",
						"sClass": "alignCenter"
					},
					{
						"data": "object",
						"sClass": "alignCenter"
					},
					{
						"data": "coverageLimit",
						"render": $.fn.dataTable.render.number( ' ', ',', 2, '' ),
						"sClass": "alignCenter"
					},
					{
						"data": "premium",
						"render": $.fn.dataTable.render.number( ' ', ',', 2, '' ),
						"sClass": "alignCenter"
					}
				],
				"language": {
            		"url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
        		},
        		"paging":   false,
        		"ordering": false,
        		"info":     false,
        		"sDom": '<"top"i>rt<"bottom"flp><"clear">',
        		"bPaginate": false,
        		"bFilter": false,
        		"bInfo": false
    		} );
		} );
	} );

}(jQuery));