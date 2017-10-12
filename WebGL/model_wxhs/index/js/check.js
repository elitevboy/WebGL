//平台、设备和操作系统
var system = {
    win: false,
    mac: false,
    xll: false,
    ipad: false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//跳转语句，如果是手机访问就自动跳转到页面
if (system.win || system.mac || system.xll || system.ipad) {
    //如果是电脑打开


    window.alert("Please use mobile phone open");

    window.location.href = "http://www.baidu.com";

    //window.alert("成功");

    //document.write("<p>请用手机打开</p>");

    //$.get('/myError', function (json, textStatus) {

    //    //window.alert("成功");

    //    if (textStatus == 'success') {

    //        //console.log(json.success);
    //        console.log("success2");

    //        //window.alert("成功");


    //    } else {
    //        //console.log("wrong");
    //        //window.alert("返回失败");

    //    }

    //});

} else {
    //如果是手机打开
}