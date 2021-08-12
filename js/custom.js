

$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyTot7erA95oAWu7CCB2nuDxLpo8LQdzmLLJ8GSLeL1J-kFI-FqVXEb9Iz2AIPQwAxmCQ/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function(response) {
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function(err) {
      alert("Something Error")

    }
  })
});
