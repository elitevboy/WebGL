//ƽ̨���豸�Ͳ���ϵͳ
var system = {
    win: false,
    mac: false,
    xll: false,
    ipad: false
};
//���ƽ̨
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
system.ipad = (navigator.userAgent.match(/iPad/i) != null) ? true : false;
//��ת��䣬������ֻ����ʾ��Զ���ת��ҳ��
if (system.win || system.mac || system.xll || system.ipad) {
    //����ǵ��Դ�


    window.alert("Please use mobile phone open");

    window.location.href = "http://www.baidu.com";

    //window.alert("�ɹ�");

    //document.write("<p>�����ֻ���</p>");

    //$.get('/myError', function (json, textStatus) {

    //    //window.alert("�ɹ�");

    //    if (textStatus == 'success') {

    //        //console.log(json.success);
    //        console.log("success2");

    //        //window.alert("�ɹ�");


    //    } else {
    //        //console.log("wrong");
    //        //window.alert("����ʧ��");

    //    }

    //});

} else {
    //������ֻ���
}