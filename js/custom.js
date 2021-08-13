

$("#contact_form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwU2dHQ-b0LFjy2VZYwTxiMjID_X990Ma3_OYGMCv2N_bBWVLYRHNDNumuH3j85Lv1g/exec",
    data: $("#contact_form").serialize(),
    method: "POST",

    success: function(response) {
      alert("Form submitted successfully")
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function(err) {
      alert("Something Error")
    },
  })
});
