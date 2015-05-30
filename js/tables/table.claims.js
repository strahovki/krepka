
/*
 * Editor client script for DB table countries
 * Created by http://editor.datatables.net/generator
 */

(function($){

$.getJSON(
	"http://cdn.rawgit.com/selvestro/Website/master/assets/countries.json", 
		function( data ) {

$(document).ready(function() {

	var editor = new $.fn.dataTable.Editor( {
		// "ajax": "php/table.countries.php",
		"table": "#claims",
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
		]
	} );

	$('#countries').DataTable( {
		"dom": "Tfrtip",
		"ajax": "php/table.countries.php",
		"data": data,
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
		"tableTools": {
			"sRowSelect": "os",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor },
				{ "sExtends": "editor_edit",   "editor": editor },
				{ "sExtends": "editor_remove", "editor": editor }
			]
		}
	} );
} );
});

}(jQuery));

