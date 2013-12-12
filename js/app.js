$(document).ready(function() {});

var App = {
	Contenidos : {
		'buscar' : function (id) {
			var imdbId = id;
			$.ajax({
	            type: "GET",
	            dataType: 'json',
	            url: "http://www.omdbapi.com/?i=" + imdbId,
	            success: function(data){
	            	console.log(data);            	
	            }, complete : function (data) {
	            	$("#dato").html(data.responseText);
	            }
	        });
		}
	},
	Personas : {}
}
App.Contenidos.buscar('tt1570583');