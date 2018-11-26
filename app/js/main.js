"use strict";

let flickity1 = document.querySelector('#main-carousel1');
let flickity2 = document.querySelector('#main-carousel2');
let flickity3 = document.querySelector('.article_block');
let flickity4 = document.querySelector('.services_group');

window.onload = function () {
  startFlickity(flickity1);
  startFlickity(flickity2);
  document.querySelector('.menu_button').addEventListener('click', function (e) {
    this.parentElement.classList.contains('active_menu') ? this.parentElement.classList.remove("active_menu") : (document.querySelector('body').style.overflow = 'hidden', this.parentElement.classList.add("active_menu"));
  });
  document.querySelectorAll('.menu_li').forEach(function (item) {
    item.addEventListener('click', function () {
      if (document.querySelector('.menu_button').parentElement.classList.contains('active_menu')) {
        document.querySelector('.menu_button').parentElement.classList.remove("active_menu");
        document.querySelector('body').style.overflow = 'auto';
      }
    });
  });
  document.querySelectorAll('input').forEach(function (value, key, parent) {
    if (value.name === 'name') {
      value.addEventListener('blur', function () {
        if (this.value.length < 3) {
          this.classList.add('error-input');
        }
      });
      value.addEventListener('focus', function () {
        this.classList.remove('error-input');
      });
    }

    if (value.name === 'email') {
      value.addEventListener('blur', function () {
        if (!validateEmail(this.value)) {
          this.classList.add('error-input');
        }
      });
      value.addEventListener('focus', function () {
        this.classList.remove('error-input');
      });
    }
  });
  !function (e, t, n) {
    function r() {
      for (; u[0] && "loaded" == u[0][l];) {
        o = u.shift(), o[f] = !a.parentNode.insertBefore(o, a);
      }
    }

    for (let i, s, o, u = [], a = e.scripts[0], f = "onreadystatechange", l = "readyState"; i = n.shift();) {
      s = e.createElement(t), "async" in a ? (s.async = !1, e.head.appendChild(s)) : a[l] ? (u.push(s), s[f] = r) : e.write("<" + t + ' src="' + i + '" defer></' + t + ">"), s.src = i;
    }
  }(document, "script", ["https://maps.googleapis.com/maps/api/js?key=AIzaSyAdzwz73OHrdVGjKVKow8ID8T31yNxiBSI", "js/map.js"]);
  initDeviceFlickity();
  document.getElementsByTagName('body')[0].className += ' pre-loaded';
};

!function (e, t, n) {
  function r() {
    for (; u[0] && "loaded" == u[0][l];) {
      o = u.shift(), o[f] = !a.parentNode.insertBefore(o, a);
    }
  }

  for (let i, s, o, u = [], a = e.scripts[0], f = "onreadystatechange", l = "readyState"; i = n.shift();) {
    s = e.createElement(t), "async" in a ? (s.async = !1, e.head.appendChild(s)) : a[l] ? (u.push(s), s[f] = r) : e.write("<" + t + ' src="' + i + '" defer></' + t + ">"), s.src = i;
  }
}(document, "script", ["https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"]);

function validateEmail(email) {
  let re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function startFlickity(element) {
  return new Flickity(element, {
    prevNextButtons: false,
    autoPlay: true,
    pauseAutoPlayOnHover: false,
    wrapAround: true
  });
}

function initDeviceFlickity() {
  if (window.innerWidth < 1156) {
    if (window.innerWidth < 550) {
      new Flickity(flickity4, {
        prevNextButtons: false,
        autoPlay: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        groupCells: 1
      });
    } else {
      new Flickity(flickity4, {
        prevNextButtons: false,
        autoPlay: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
        groupCells: 2
      });
    }

    new Flickity(flickity3, {
      prevNextButtons: false,
      autoPlay: true,
      pauseAutoPlayOnHover: false,
      wrapAround: true
    });
  }
}

// $(document).ready(function () {
//   $('form').submit(function (e) {
//     alert(0)
//     e.preventDefault();
//     $(this).find('input[type="text"]').trigger('blur');
//
//     if (!$(this).find('input[type="text"]').hasClass('error-input')) {
//       var type = $(this).attr('method');
//       var url = $(this).attr('action');
//       var data = $(this).serialize();
//       $.ajax({
//         type: type,
//         url: url,
//         data: data,
//         success: function success() {//$.arcticmodal('close');$('#okgo').arcticmodal();
//           alert(1)
//         }
//       });
//     }
//   });
// });