$('#commentForm').on('click', function(e){
	e.preventDefault();
	$('#commentForm').validate();
	console.log($('#movieTitle').val());
	$.ajax({
		// encodeURIComponent will escape spaces if the title has more than one word
		url: 'http://www.omdbapi.com/', //encodeURIComponent($('#movieTitle').val()),
		data: {
// the data object takes all the keys provied in the API, and removes the ? query
			t:$('#movieTitle').val(),
		},
		type: "GET",
		dataType: "json",
		success: function(response){
		console.log(response);
		},
		error: function(xhr, status, error){
			console.log({xhr:xhr,status:status, error:error});
			console.log("not an object " ,xhr,status, error);
		},
		complete: function(xhr,status){
			console.log(xhr,status);
		}
	});
});