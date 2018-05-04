$(function() {
    var d = document;
    var progress = d.getElementById('progressbar');
    if(progress){ progressbar();}
});

$(window).resize(function() {
    var d = document;
    var img = d.querySelectorAll('[data-src]');
    var progress = d.getElementById('progressbar');
    if(progress){ progressbar();}
});

function progressbar(){
    var d = document;
    var w = window;
    var progress = d.getElementById('progressbar');

    window.addEventListener('scroll', function(){
        var wHei = w.innerHeight;
        var dHei = d.body.clientHeight;
        var wTop = w.pageYOffset
        var res = (wTop/(dHei-wHei))*100;

        // console.log(res);
        progress.style.width = `${res}%`;
    }, false);
}
