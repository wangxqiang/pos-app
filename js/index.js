var app=null;
var phone=null;
var val;
//判断是否微信登陆
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}
//判断设备
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    val="ios";
    console.log("苹果");
    alert("ios");
} else if (/(Android)/i.test(navigator.userAgent)) {
    //android
    alert("android");
    if(isWeiXin()){
        alert("微信内置浏览器");
        $(".mb").css("display","block")
    }else{
        console.log("非微信内置浏览器");
        $(".mb").css("display","none");
        val="andriod";
    }
} else {
    console.log("pc")
};
//选择/下载
$(".posxz").click(function(){
    $(".down").css('background-color',"rgba(255,0,0,.5)");
    $(".posxz").css('background-color',"red");
    $(".posxz").html("已选择");
    $(".androidxz").css('background-color',"#C8C8A9");
    $(".androidxz").html("选择");
    app="pos";
    keyup();
});
$(".androidxz").click(function(){
    $(".down").css('background-color',"rgba(255,0,0,.5)");
    $(".androidxz").css('background-color',"red");
    $(".androidxz").html("已选择");
    $(".posxz").css('background-color',"#C8C8A9");
    $(".posxz").html("选择");
    app="andr"
    keyup();
});
 function keyup(){
     var phone = $(".phone input").val();
     var re = /^1(3|4|5|7|8)\d{9}$/;
     if (re.test(phone) && phone!=""&&(app=="pos"||app=="andr")) {
         $(".down").css('background-color',"rgba(255,0,0,1)");
     }else{
         $(".down").css('background-color',"rgba(255,0,0,.5)");
         if(phone.length==11&& !re.test(phone)){
             $(".tishi").html("手机号错误");
         }else{
                 $(".tishi").html("");
         }
     }
}
//选择下载完结
$(".down").click(function(){
    var phone = $(".phone input").val();
    var re = /^1(3|4|5|7|8)\d{9}$/;
    if (re.test(phone) && phone!="") {
    }else{
        $(".tishi").html("*手机号错误");
        return
    }
if(app=="pos"||app=="andr"){
    $(".down").css('background-color',"red");
    if(app=="pos"){
        if(val=="ios"){
            console.log("下载ios收银系统")
            //location.href="";
        }else if(val="android"){
            console.log("下载Android收银系统")
            //location.href="";
        }
    }
    if(app=="andr"){
        if(val=="ios"){
            console.log("下载ios APP后台管理")
            //location.href="";
        }else if(val="android"){
            //location.href="";
            console.log("下载android APP后台管理")
        }
    }
}else{
alert("请选择应用类型");
}
})


