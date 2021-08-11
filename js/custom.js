

$("#contact_form").submit((e)=>{
		e.preventDefault()
		$.ajax({
				url:"https://script.google.com/macros/s/AKfycbygBzeC-fA2akL22No-F5luKrd0jpKbZTmb26LGtVQneNSP-XpiZqJ0uNvVOil8slmnFg/exec",
				data:$("#contact_form").serialize(),
				method:"POST",
				success:function (response){
						alert("Successfull");
				},
				error:function (err){
						alert("Something Error");
				}
		})
})
