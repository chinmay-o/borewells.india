

$("#submit-form").submit((e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbx80Pv_KT6vwzsQB2klyDHSRZQaEupOkBRfB3XTBGzkBt6TBffh2guDVjh-YvGuPIwp/exec",
    data: $("#submit-form").serialize(),
    type: "POST",
    success: function(response) {
      $(".success-message").css("display", "block");
      $('#submit-form')[0].reset();
      fadeOut(".success-message");
    },
    error: function(err) {
      $(".error-message").css("display", "block");
      fadeOut(".error-message");
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
      $(".success-message-modal").css("display", "block");
      $('#submit-form-popup')[0].reset();
      fadeOut(".success-message-modal");
    },
    error: function(err) {
      $(".error-message-modal").css("display", "block");
      fadeOut(".error-message-modal");
    }
  })
})

function fadeOut(className) {
  setTimeout(function(){
    $(className).remove();
  }, 6000);
}

$("#footer-about").click(function() {

    $('html, body').animate({
        scrollTop: $(".section-about").offset().top - 60
      }, 1000);
});

$("#footer-services").click(function() {

    $('html, body').animate({
        scrollTop: $(".row-project-box").offset().top - 200
      }, 1000);
});

$("#footer-testimonials").click(function() {

    $('html, body').animate({
        scrollTop: $(".section-clients").offset().top - 60
      }, 1000);
});

$("#footer-contact").click(function() {

    $('html, body').animate({
        scrollTop: $(".row-contact").offset().top - 160
      }, 1000);
});

$('.brand').click(function() {
    location.reload();
});
