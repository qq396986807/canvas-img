/**
 * Created by createc on 2017/12/4.
 */
var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    // noSwipingClass : 'stop-swiping',
    paginationClickable: true,
});

//指定canvas同页面长宽一样
var H = $(window).height();
var W = $(window).width();
$("#canvas").css({'height':H,'width':W});

//canvas绘图
function draw(){
    var canvas = document.getElementById('canvas');
    var h = canvas.height;
    var w = canvas.width;
    var ctx = canvas.getContext("2d");
    var img1 = new Image();
    img1.src = 'images/btn.png';
    img1.onload = function(){
        ctx.drawImage(img1,0,0,163,38,0,0,163,38)
    }
    ctx.drawImage(img1,0,0);
    // ctx.fillStyle = "rgba(125, 46, 138, 0.5)";
    // ctx.fillRect(25,25,100,100);
    // ctx.fillStyle = "rgba( 0, 146, 38, 0.5)";
    // ctx.fillRect(58, 74, 125, 100);
    // ctx.fillStyle = "rgba( 0, 0, 0, 1)"; // black color
    // ctx.fillText("Gloomyfish - Demo", 50, 50);
}

draw();