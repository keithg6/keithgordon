
document.addEventListener('scroll', function (e) {
    if ((window.pageYOffset + window.innerHeight) > (document.querySelector('#target > div').offsetTop)) {
        document.getElementById('target').classList.add('slideUp');
        console.log("here");
    }
});
