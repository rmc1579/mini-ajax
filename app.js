

var insertData = function(data){
	for (var i=0; i<data.length; i++){
		$('#userInfo' + (i + 1)).html('<div>' +
	        'User Info:' +
	        '<li>' +
	        '<b>First name:</b> <span class=namedisplay>' + data[i].first_name +'</span>'+
	        '</li>' +
	        '<li>' +
	        '<b>Last name:</b> <span class=namedisplay>' + data[i].last_name +'</span>'+
	        '</li>' +
	        '<hr>' +
	        '</div>'
      	)
	}
};

var cssdisplay = function(){
	$(".namedisplay").css("text-transform","capitalize");
};

$('#addUser').on('click', function(e) {
	e.preventDefault();
	var userName = $('#name').val();
	var userJob = $('#job').val();
	return $.ajax({
		method: 'POST',
		url: 'http://reqr.es/api/users',
		data: {name: userName, job: userJob},
		success: function(res) {
			$('#recentUser').html(
			  '<li>' +
			    'name: ' + res.name +
			  '</li>' +
			  '<li>' +
			    'job: ' + res.job +
			  '</li>' +
			  '<li>' +
			    'id: ' + res.id +
			  '</li>' +
			  '<li>' +
			    'created at: ' + res.createdAt +
			  '</li>'
			)
		}
	})
});

$('#getUsers').on('click', function() {
	return $.ajax({
		method: 'GET',
		url: 'http://reqr.es/api/users?page=1',
		success: function(res) {
			//console.log(res);
			insertData(res.data);
			cssdisplay();
		}
	})
})