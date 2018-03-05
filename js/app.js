// triangle background animation

const topTriangles = document.querySelectorAll('.top span');
const bottomTriangles = document.querySelectorAll('.bottom span');
const topColors = [
  'aquamarine', 'darkcyan', 'burlywood', 'transparent', 'bisque', '#F94E6D', 'transparent', 'transparent', 'transparent'
];
const bottomColors = [
  'aquamarine', 'transparent', 'transparent', 'transparent', 'transparent'
];

(function changeBackground() {
  let index = 0;
  for (index=0; index<topTriangles.length; index++) {
    let randomColorIndex = Math.floor(Math.random() * 9);
    let randomColor = topColors[randomColorIndex];
    topTriangles[index].style.borderTopColor = randomColor;
  }
  
  for (index=0; index<bottomTriangles.length; index++) {
    let randomColorIndex = Math.floor(Math.random() * 5);
    let randomColor = bottomColors[randomColorIndex];
    bottomTriangles[index].style.borderBottomColor = randomColor;
  }
})()

// hamburger menu functionality

function hamburgerToggle() {
  $('.icon').toggleClass('active');
  $('nav ul').delay(300).slideToggle();
}

$('.icon-wrap').on('click', () => {
  hamburgerToggle();
});

// splash page routing

// $('#welcome a').on('click', () => {
//   $('.content-wrapper').fadeOut();
//   $('nav li:nth-child(2) a').toggleClass('active-link');
//   $('#work').delay(1000).fadeIn(500);
//   // $('.pens').show();
// });

// link routing

$('body').on('click', (e) => {
  if (e.target.tagName === 'A') {
    let route = e.target.href.replace(/^[^#]+/, '');
    $('nav a').each(function() {
      if ($(this).attr('href') === route) {
        $(this).addClass('active-link');
      } else {
        $(this).removeClass('active-link');
      }
    });
    if ($('.icon').hasClass('active')) {
      hamburgerToggle();
    }
    $('.content-wrapper').fadeOut();
    $(route).delay(500).fadeIn(500);
  }
});

// just realized my weird pseudo-routing doesn't work when you hit the back button, or if you navigate directly to a page >_<

// not necessary if href is '/' rather than '#home' in the first place
// $('.logo-wrap').on('click', (e) => {
//   e.preventDefault();
//   window.location.href = '/';
// });

// $('.pens-wrapper button').on('click', () => {
//   if ($('.pens-wrapper button').text() === 'Stop Animation') {
//     $('*').css('animation-play-state', 'paused');
//     $('.pens-wrapper button').text('Start Animation');
//   } else {
//     $('*').css('animation-play-state', 'running');
//     $('.pens-wrapper button').text('Stop Animation');
//   }
// });

// callback that will run after iframe has been added to page
// https://blog.codepen.io/documentation/features/embedded-pens/
// function __CodePenIFrameAddedToPage() {

//   console.log("do extra things here");

// }