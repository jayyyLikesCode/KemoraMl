document.addEventListener("DOMContentLoaded", function () {

  const text = `My Love, Kemora ❤️, 

Happy Valentine’s Day. I hope you are enjoying your day whenever you read this. I keep thinking about how unexpected this year 2026 has been, the way life sometimes surprises us with the most beautiful things when we least expect it. Meeting you at bcc when you joined the guild, getting to know you, and sharing even the smallest moments together has been one of those rare, unplanned wonders that I never want to take for granted.

I still remember our first date at Hasting Boardwalk like it happened yesterday. The beautiful night sky and the rhythm of the waves as it hit the rocks next to us, felt like nature itself was celebrating that moment with us. I couldn’t have imagined that sitting there with you, laughing and talking and seeing eachothers reactions at the gifts we got each other, would turn into the start of something so incredible. That night, ordinary in so many ways, became unforgettable simply because you were there.

There’s a whole universe of things I love about you, though words somehow feel too small to capture them all. I love the way you make simple moments feel extraordinary, like a breeze that carries the scent of the sea or the way sunlight filters through trees in the early morning. I love your laughter, the warmth of your smile, and the way your presence makes everthing feel full and alive. I love you not just for the big moments, but for every little thing that makes you, you.

Every day with you is a discovery, a feeling that grows stronger the more I notice the world around us and the more I notice you. Even now, I can feel the excitement of that first date in the way my heart feels when I think of you, and it’s a reminder that love doesn’t always follow a plan. Sometimes it just arrives and changes everything. I hope I wasn't being too much tryna to be poetic lol but.

I hope today and every day, you feel the depth of what you mean to me. You’ve turned the unexpected into something amazing, and I wouldn’t trade a single moment we’ve shared. I can’t wait to make more memories with you, to explore more sunsets and night skies, to laugh, dream, and grow together. My heart feels at home with you, and I hope this app that I made carries even a fraction of the love and gratitude I feel for you.

Thank you for being you for your warmth, your light, and the way you make life feel like something worth living to the fullest.`;

  const speed = 55; 
  let index = 0;


  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typeText").innerHTML += text.charAt(index);


      index++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});



$(document).ready(function () {
  
  $('.message-container').on('click', function () {
    $('.mess1').fadeIn(600);
  });

  $(document).on('click', '.mess1', function () {
    $('body').addClass('fade-out');

    setTimeout(function () {
      window.location.href = "img.html";
    }, 1000);
  });

});

// Back button functionality
const backBtn = document.getElementById("backButton");

backBtn.addEventListener("click", () => {
  // Option 1: Go back to previous page
  window.history.back();

  // Option 2: Go to a specific page instead
  // window.location.href = "index.html"; 
});

const music = document.getElementById("Music");
const nextBtn = document.querySelector(".mess1");

music.volume = 0.4; // optional, set volume

nextBtn.addEventListener("click", () => {
    if (music.duration) {
        // Random start between 0 and duration - 5s
        const randomTime = Math.random() * (music.duration - 5);
        music.currentTime = randomTime;
        music.play();
    } else {
        // Wait for metadata if not loaded
        music.addEventListener("loadedmetadata", () => {
            const randomTime = Math.random() * (music.duration - 5);
            music.currentTime = randomTime;
            music.play();
        }, { once: true });
    }

    // Hide the button after click
    nextBtn.style.display = "none";

    // Optional: trigger your next text or gallery animation here
});

