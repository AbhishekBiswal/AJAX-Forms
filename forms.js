$(document).ready(function(){

// AJAX forms
$("form.ajax").submit(function(e){
	e.preventDefault();
	var data = $(this).serialize();
	var method = $(this).attr("method");
	var action = $(this).attr("action");
	$.ajax({
		url: action,
		type: method,
		data: data,
		cache: false,
		success: function(recd){
			$(".subinfo").html(recd);
			$(".subinfo").slideDown();
		}
	})
})

})
