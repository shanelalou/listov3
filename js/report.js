$(document).ready(function(){
	$('#btnSubmitInitialDisasterIncident').click(function(){
			var preMonitorCity = localStorage.getItem('datausername');
					$('#txt_initd_city').val(preMonitorCity);
			var frmInitialDisasterIncident= $("#frmInitialDisasterIncident");
			$.mobile.loading("show");
				$.ajax({
					url: 'add_initialdisaster.php',						
					type: 'POST',
					data: frmInitialDisasterIncident.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextDataSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterDataSubmit" ).popup();
						$( "#popupAfterDataSubmit" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});
				
	});
});