// var greetingDiv = document.querySelector('#greeting');
// var liTags = document.querySelectorAll('li');
// var image = document.createElement('img');
// var grayBox = document.getElementById('ghosting');
// var orangeBox = document.getElementById('resize');
// var reset = document.getElementById('reset');
//
// // 1
// greetingDiv.innerHTML = "Hello, World!";
//
//
// // 2
// for (var i = 0; i < liTags.length; i++) {
//   liTags[i].style.backgroundColor = "yellow";
// }
//
// // 3
// image.src = "http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"
// greetingDiv.appendChild(image);
//
// // 4 and 5
// for (var i = 0; i < liTags.length; i++) {
//   liTags[i].addEventListener('click', function(e) {
//     document.querySelectorAll('.liImage')["0"].src = "./images/" + e.target.innerHTML + ".jpeg"
//     if (e.target.className !== "selected") {
//       e.target.className = "selected";
//     } else {
//       e.target.className = "";
//     }
//
//   })
// }
//
// // 6
// grayBox.addEventListener('mouseover', function(e) {
//   e.target.style.display = "none";
// })
//
// // 7
// orangeBox.addEventListener('mouseover', function(e) {
//   e.target.style.width = "400px";
// })
// orangeBox.addEventListener('mouseout', function(e) {
//   e.target.style.width = "200px";
// })
//
// // 8
// reset.addEventListener('click', function(e) {
//   for (var i = 0; i < liTags.length; i++) {
//     liTags[i].className = "";
//   }
//   document.querySelectorAll('.liImage')["0"].src = "./images/panic.jpeg";
// })
//
// // 9
// document.addEventListener('keydown', function(e) {
//   for (var i = 48; i < 58; i++) {
//     if (e.keyCode === i) {
//       alert("I HATE NUMBERZZZ!");
//     }
//   }
// })
//
// BONUS
// var seq = [];
// var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
// document.addEventListener('keydown', function(e) {
//   seq.push(e.keyCode);
//   while (seq.length < 11) {
//     for (var i = 0; i < 10; i++) {
//       if (seq[i] !== konamiCode[i]) {
//         return false;
//       }
//     }
//     alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
//     return true;
//   }
// })



// JQUERY

// 1
$('#greeting').html('Hello, World!')

// 2
$('li').css('background-color', 'yellow')

// 3
$('#greeting').append('<img src="http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif"/>')

// 4 and 5
$('li').click(function() {
  $(this).toggleClass('selected').siblings().removeClass('selected');
  var text = this.innerHTML;
  $('.liImage').attr('src', './images/' + text + '.jpeg');
})

// 6
$('#ghosting').hover(function() {
  $(this).css('display', 'none');
})

// 7
$('#resize').hover(function() {
  $(this).css('width', '400px');
})
$('#resize').mouseout(function() {
  $(this).css('width', '200px');
})

// 8
$('#reset').click(function() {
  $('li').siblings().removeClass('selected');
  $('.liImage').attr('src', './images/panic.jpeg')
})

// 9
$(document).keydown(function(e) {
  for (var i = 48; i < 58; i++) {
    if (e.keyCode === i) {
      alert("I HATE NUMBERZZZ!");
    }
  }
})

// BONUS
var seq = [];
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
$(document).keydown(function(e) {
  seq.push(e.keyCode);
  while (seq.length < 11) {
    for (var i = 0; i < 10; i++) {
      if (seq[i] !== konamiCode[i]) {
        return false;
      }
    }
    alert("YOU ARE AN EVENT HANDLER GURUUUUUUUUU!");
    return true;
  }
})
