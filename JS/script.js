document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const card = document.querySelector(".card");
  const button = document.querySelector(".mess"); // your button class

  let open = false;

  container.addEventListener("click", function () {
    if (!open) {
      card.style.top = "-90px";
      button.style.display = "block";   // SHOW BUTTON
      open = true;
    } 
  });
});

$(document).ready(function () {

  $('.valentines').on('click', function () {
    $('.mess').fadeIn(600);
  });

});

$('.mess').click(function () {

  $('body').addClass('fade-out');

  setTimeout(function () {
    window.location.href = "Message.html";
  }, 1000);

});
