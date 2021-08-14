

$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbx80Pv_KT6vwzsQB2klyDHSRZQaEupOkBRfB3XTBGzkBt6TBffh2guDVjh-YvGuPIwp/exec",
    data: $("#submit-form").serialize(),
    type: "POST",
    success: function(response) {
      alert("Form submitted successfully")
      // window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function(err) {
      alert("Something Error")

    }
  })
})

$("#submit-form-popup").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbx80Pv_KT6vwzsQB2klyDHSRZQaEupOkBRfB3XTBGzkBt6TBffh2guDVjh-YvGuPIwp/exec",
    data: $("#submit-form-popup").serialize(),
    type: "POST",
    success: function(response) {
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function(err) {
      alert("Something Error")

    }
  })
})
