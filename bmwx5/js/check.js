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
    window.location.href = "http://www.baidu.com";
} else {
    //������ֻ���
}