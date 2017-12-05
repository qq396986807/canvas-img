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
$("#canvas").attr({'height':H,'width':W});
//设置canvas跟屏幕一样大小


//canvas绘图
function draw(){
    var canvas = document.getElementById('canvas');
    var h = H/100;//百分1的高
    var w = W/100;//百分1的宽
    var ctx = canvas.getContext("2d");

    var imgBg = new Image();
    imgBg.src = 'images/page1.jpg'
    var img1 = new Image();
    img1.src = 'images/btn.png';
    window.onload = function(){
        ctx.drawImage(imgBg,0,0,750,1208,0,0,W,H)
        ctx.drawImage(img1,0,0,163,38,35*w,90*h,30*w,30*w/3.9)//设置图片比例和位置,匹配手机屏幕

        //绘制简单的文字
        ctx.fillStyle = "rgba( 0, 0, 0, 1)"; // black color
        ctx.font="40px Arial";
        ctx.fillText("皇马聊天室",100,300);

        //生成的data的路径,可以通过php生成图片存到数据库,单存data路径不合适,高清图片情况下会出现图片的残缺
        var srccc = canvas.toDataURL("image/png");
        $("#img").attr("src",srccc);
    }
}

draw();
