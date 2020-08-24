
document.addEventListener('scroll', function (e) {
    if ((window.pageYOffset + window.innerHeight) > (document.querySelector('#Summary > div').offsetTop)) {
        document.getElementById('Summary').classList.add('slideUp');
    }
});

// document.addEventListener('scroll', function (e) {
//     if ((window.pageYOffset + window.innerHeight) > (document.querySelector('#Education > div').offsetTop)) {
//         document.getElementById('Education').classList.add('slideLeft');
//     }
// });

// document.addEventListener('scroll', function (e) {
//     if ((window.pageYOffset + window.innerHeight) > (document.querySelector('#Experience > div').offsetTop)) {
//         document.getElementById('Experience').classList.add('slideRight');
//     }
// });

// document.addEventListener('scroll', function (e) {
//     if ((window.pageYOffset + window.innerHeight) > (document.querySelector('#Projects > div').offsetTop)) {
//         document.getElementById('Projects').classList.add('slideUp');
//     }
// });
