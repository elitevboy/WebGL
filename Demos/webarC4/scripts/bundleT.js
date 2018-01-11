var m = document['getElementById']('container');
//var z = document['getElementById']('target');


var c = ![];

var r = 0x140;  //320
var p = 0xf0;  //240
if (SPAR['browser']['ios']) {
    r = 0x280;  //640  0x280
    p = 0x1e0;  //480  0x1e0
}
var j = window['innerWidth'];
var g = window['innerHeight'];
//console['log']('VideoDevice\x20' + j + ',' + g);
var e = new SPAR[('VideoDevice')]({
    'width': j,
    'height': g
});




var w = function a(b, c) {
    return {
        'cameraFOV': 0x28,
        'cameraAspect': b / c,
        'cameraNear': 0.1,
        'cameraFar': 0x3e8,
        'cameraPosition': new THREE[('Vector3')](0x0, 0x0, 0x5)
    };
};


var x = function () {
    function a(c, b) {
        g(this, a);
        this['_videoDevice'] = c;
        var d = c['width'];
        var e = c['height'];
        b = Object['assign']({}, w(d, e), b);
        var k = this['_scene'] = new THREE['Scene']();
        var j = this['_camera'] = new THREE['PerspectiveCamera'](b['cameraFOV'], b['cameraAspect'], b['cameraNear'], b['cameraFar']);
        j['position']['copy'](b['cameraPosition']);
        var f = this['_renderer'] = new THREE[('WebGLRenderer')]({
            'alpha': !![]
        });
        f['setSize'](d, e);
        f['autoClear'] = ![];
        this['_containerElm'] = document['createElement']('div');
        this['_containerElm']['style']['position'] = 'relative';
        var h = this['_videoDevice']['videoElement'];
        this['_containerElm']['appendChild'](h);
        h['style']['position'] = 'absolute';
        var i = this['_renderer']['domElement'];
        this['_containerElm']['appendChild'](i);
        i['style']['position'] = 'absolute';
    }
    h(a, [{
        'key': 'start',
        'value': function a(d) {
            var b = this;
            var c = function a() {
                requestAnimationFrame(function () {
                    return a();
                });
                d();
                b['_renderer']['clear']();
                b['_renderer']['render'](b['_scene'], b['_camera']);
            };
            c();
        }
    },
    {
        'key': 'domElement',
        'get': function a() {
            return this['_containerElm'];
        }
    },
    {
        'key': 'scene',
        'get': function a() {
            return this['_scene'];
        }
    }]);
    return a;
}();







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
        //var E = new THREE[('Clock')]();


















        //var l = new SPAR[('THREERenderer')](e);

        var l = x(e);
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