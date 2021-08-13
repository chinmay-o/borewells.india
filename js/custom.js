

$("#contact_form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://formsubmit.co/borewellsind@gmail.com",
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
