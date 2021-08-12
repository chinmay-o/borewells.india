


$("#contact_form").submit((e) => {
  e.preventDefault()
  $.ajax({
    headers: {'Access-Control-Allow-Origin': 'https://chinmay-o.github.io/borewells.india/'},
    url: "https://script.google.com/macros/s/AKfycby2QsXGw-N_oXFgZ7_ARvhsaDpbu6S4YMaUrQ-ckfXj797pxBssm8k3M21U4ru6w3ZpZg/exec",
    data: $("#contact_form").serialize(),
    method: "post",
    success: function(response) {
      alert("Form submitted successfully")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function(err) {
      alert("Something Error")
    },
  })
});
