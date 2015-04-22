$('#commentForm').on('click', function(e){
	e.preventDefault();
	$('#commentForm').validate();
	console.log($('#movieTitle').val());
	$.ajax({
		url: 'http://www.omdbapi.com/', //encodeURIComponent($('#movieTitle').val()),
		data: {
			t:$('#movieTitle').val(),
		},
		type: "GET",
		dataType: "json",
		success: function(response){
		console.log(response);

		},
		error: function(xhr, status, error){
			console.log({xhr:xhr,status:status, error:error});
			console.log("not an objsect " ,xhr,status, error);
		},
		complete: function(xhr,status){
			console.log(xhr,status);
		}
	});
});