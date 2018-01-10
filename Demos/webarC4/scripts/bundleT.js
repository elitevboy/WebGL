var m = document['getElementById']('container');
//var z = document['getElementById']('target');


var c = ![];

var r = 0x140;  //320
var p = 0xf0;  //240
if (SPAR['browser']['ios']) {
    r = 0x280;  //640
    p = 0x1e0;  //480
}
var j = window['innerWidth'];
var g = window['innerHeight'];
//console['log']('VideoDevice\x20' + j + ',' + g);
var e = new SPAR[('VideoDevice')]({
    'width': j,
    'height': g
});

var C = {
    'audio': ![],
    'video': {
        'width': r,
        'height': p,
        'facingMode': c ? {
            'exact': 'environment'
        } : 'enviroment'
    }
};
e['setVideoSource'](new SPAR[('CameraVideoSource')](C))['then'](function () {
    console['log']('video\x20size' + e['videoWidth'] + '--' + e['videoHeight']);
    console['log']('video\x20element\x20size' + e['width'] + '--' + e['height']);
    var a = e['videoWidth'] / e['videoHeight'];
    if (e['width'] < e['height']) {
        e['width'] = e['height'] * a;
    } else {
        e['height'] = e['width'] / a;
    }

    e['play']()['then'](function () {
        var E = new THREE[('Clock')]();
        var l = new SPAR[('THREERenderer')](e);
        m['appendChild'](l['domElement']);
        var C = (j - e['width']) / 0x2;
        var x = (g - e['height']) / 0x2;
        console['log']('offset=' + C + ',' + x);
        l['domElement']['style']['marginLeft'] = C;
        l['domElement']['style']['marginTop'] = x;

        //z['style']['display'] = 'none';

    });

})['catch'](function (a) {
    console['log']('\x20error', a);
    alert(a['name'] + ' : ' + a['message'] + '__载入失败');
});