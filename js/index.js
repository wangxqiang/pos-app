//选择/下载
var app=null;
var phone=null;
$(".posxz").click(function(){
    $(".down").css('background-color',"rgba(255,0,0,.7)");
    $(".posxz").css('background-color',"red");
    $(".posxz").html("已选择");
    $(".androidxz").css('background-color',"#C8C8A9");
    $(".androidxz").html("选择");
    app="pos";
    keyup();
});
$(".androidxz").click(function(){
    $(".down").css('background-color',"rgba(255,0,0,.7)");
    $(".androidxz").css('background-color',"red");
    $(".androidxz").html("已选择");
    $(".posxz").css('background-color',"#C8C8A9");
    $(".posxz").html("选择");
    app="andr"
    keyup();
});
 function keyup(){
     var phone = $(".phone input").val();
     var re = /^1\d{10}$/;
     if (re.test(phone) && phone!=""&&(app=="pos"||app=="andr")) {
         $(".down").css('background-color',"rgba(255,0,0,1)");
     }else{
         $(".down").css('background-color',"rgba(255,0,0,.7)");
     }
}
//选择下载完结
$(".down").click(function(){
    var phone = $(".phone input").val();
    var re = /^1\d{10}$/;
    if (re.test(phone) && phone!="") {
    }else{
        return
    }

if(app=="pos"||app=="andr"){
    $(".down").css('background-color',"red");
    if(app=="pos"){
        console.log("去下载pos");
    }
    if(app=="andr"){
        console.log("去下载手机端app");
    }
}else{
console.log("请选择应用类型");
}
})