/*
修改说明：
1，注释为change处要修改。
2，修改change的内容
      290：替换42e11e4275243d583ac7c721e91e535570407791成当前编号。
      2487：替换42e11e4275243d583ac7c721e91e535570407791成当前编号。
      2502：替换42e11e4275243d583ac7c721e91e535570407791成当前编号。
      2567：替换42e11e4275243d583ac7c721e91e535570407791成当前编号。
      2576：替换42e11e4275243d583ac7c721e91e535570407791成当前编号。
3，2865：修改标题。 
4，2619：修改apihost的地址。
4，将config.json文件中的图片资源下载下来，保存到alyun文件夹中去。并将其路径指向aliyun文件夹。
5，将js,canvas两个文件夹保存在服务器上，确保域名下可以通过域名访问js文件。如：http://127.0.0.1/js/canvas/model_annotation-5efd5582b2.js；http://127.0.0.1/canvas/libs/hammer/hammer-c1e47fdd77.js
*/
!function e(t, n, i) {
    function a(o, s) {
        if (!n[o]) {
            if (!t[o]) {
                var _ = "function" == typeof require && require;
                if (!s && _) return _(o, !0);
                if (r) return r(o, !0);
                var u = new Error("Cannot find module '" + o + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                var n = t[o][1][e];
                return a(n ? n : e)
            }, l, l.exports, e, t, n, i)
        }
        return n[o].exports
    }
    for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) a(i[o]);
    return a
}({
    1: [function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("./main.js"),
			r = i(a);
        n.default = r.default
    }, {
        "./main.js": 2
    }],
    2: [function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default:
                        e
                }
            }
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function r(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== ("undefined" == typeof t ? "undefined" : s(t)) && "function" != typeof t ? e : t
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : s(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
			    return typeof e
			} : function(e) {
			    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var _ = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
				u = e("../../core/Component"),
				l = i(u),
				p = e("bluebird"),
				c = i(p),
				f = null,
				E = function(e) {
				    function n(e) {
				        a(this, n);
				        var i = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
				        return f = t.$$$.R$R, i.canvas = e.root, i.name = e.name, i.extractKey = "app", i.configFile = e.configFile, i.sceneFile = e.sceneFile, i.initialize(), i
				    }
				    return o(n, e), _(n, [{
				        key: "initialize",
				        value: function() {
				            this.preSetting().setDevice().initApp().loadScene()
				        }
				    }, {
				        key: "preSetting",//===========================================================================================================================================
				        value: function () {
				            //return this.CONFIG_FILENAME = "config.json", this.ASSET_PREFIX = "", this.SCENE_PATH = "scene.json", this.CONTEXT_OPTIONS = {
				            return this.CONFIG_FILENAME = this.configFile, this.ASSET_PREFIX = "", this.SCENE_PATH = this.sceneFile, this.CONTEXT_OPTIONS = {
				                alpha: !0,
				                preserveDrawingBuffer: !1
				            }, f.script.legacy = !0, this
				        }
				    }, {
				        key: "setDevice",
				        value: function() {
				            return this.devices = {
				                keyboard: new f.Keyboard(window),
				                mouse: new f.Mouse(this.canvas),
				                gamepads: new f.GamePads
				            }, "ontouchstart" in window && (this.devices.touch = new f.TouchDevice(this.canvas)), this
				        }
				    }, {
				        key: "initApp",
				        value: function() {
				            return this.app = new f.Application(this.canvas, {
				                keyboard: this.devices.keyboard,
				                mouse: this.devices.mouse,
				                gamepads: this.devices.gamepads,
				                touch: this.devices.touch,
				                graphicsDeviceOptions: this.CONTEXT_OPTIONS,
				                assetPrefix: this.ASSET_PREFIX || ""
				            }), this
				        }
				    }, {
				        key: "loadScene",
				        value: function() {
				            var e = this;
				            return this.loadConfig().then(function(t) {
				                return e.loadAssetsThroughConfig(t)
				            }).then(function() {
				                return e.app.loadScene(e.SCENE_PATH, function(t, n) {
				                    t && console.error(t), e.app.start(), $$$.cm.fire("GET_PLAYCANVAS_SCENE_LOAD_STATE")({
				                        loadState: "done"
				                    })
				                })
				            }).catch (function(e) {
							    alert(e)
							}), this
				        }
				    }, {
				        key: "loadConfig",
				        value: function() {
				            var e = this;
				            return new c.default (function(t, n) {
						    e.app.configure(e.CONFIG_FILENAME, function(e) {
						        t(e)
						    })
						})
				        }
				    }, {
				        key: "loadAssetsThroughConfig",
				        value: function(e) {
				            var t = this;
				            return new c.default (function(n, i) {
						    e && console.error(e), t.reflow(), window.addEventListener("resize", t.reflow.bind(t), !1), window.addEventListener("orientationchange", t.reflow.bind(t), !1), t.app.preload(function(e) {
						        e && console.error(e), n()
						    })
						})
				        }
				    }, {
				        key: "reflow",
				        value: function() {
				            var e = this.canvas;
				            this.app.resizeCanvas(e.width, e.height);
				            e.style.width = "", e.style.height = "";
				            var t = this.app._fillMode;
				            t != f.FILLMODE_NONE && t != f.FILLMODE_KEEP_ASPECT || (t == f.FILLMODE_NONE && e.clientHeight < window.innerHeight || e.clientWidth / e.clientHeight >= window.innerWidth / window.innerHeight ? e.style.marginTop = Math.floor((window.innerHeight - e.clientHeight) / 2) + "px" : e.style.marginTop = "")
				        }
				    }, {
				        key: "displayError",
				        value: function(e) {
				            var t = document.createElement("div");
				            t.innerHTML = ['<table style="background-color: #8CE; width: 100%; height: 100%;">', "  <tr>", '      <td align="center">', '          <div style="display: table-cell; vertical-align: middle;">', '              <div style="">' + e + "</div>", "          </div>", "      </td>", "  </tr>", "</table>"].join("\n"), document.body.appendChild(t)
				        }
				    }]), n
				}(l.default);
            n.default = E
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../core/Component": 6,
        bluebird: "bluebird"
    }],
    3: [function(e, t, n) {
        arguments[4][1][0].apply(n, arguments)
    }, {
        "./main.js": 4,
        dup: 1
    }],
    4: [function(e, t, n) {
        (function(t) {
            "use strict";

            function i(e) {
                return e && e.__esModule ? e : {
                    default:
                        e
                }
            }
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            function r(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" !== ("undefined" == typeof t ? "undefined" : s(t)) && "function" != typeof t ? e : t
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : s(t)));
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(e) {
			    return typeof e
			} : function(e) {
			    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
			};
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
            var _ = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
				u = e("../../core/Component"),
				l = i(u),
				p = e("bluebird"),
				c = i(p),
				f = null,
				E = function(e) {
				    function n(e) {
				        a(this, n);
				        var i = r(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
				        return f = t.$$$.R$R, i.canvas = e.root, i.name = e.name, i.extractKey = "app", i.configFile = e.configFile, i.sceneFile = e.sceneFile, i.c_w = 800, i.initialize(), i
				    }
				    return o(n, e), _(n, [{
				        key: "initialize",
				        value: function() {
				            this.preSetting().setDevice().initApp().loadScene().takeScreenshot()
				        }
				    }, {
				        key: "takeScreenshot",
				        value: function() {
				            var e = this;
				            return this.app.graphicsDevice.clear(), window.requestAnimationFrame(function() {
				                e.takeScreenshot()
				            }), this
				        }
				    }, {
				        key: "preSetting",//================================================================================
				        value: function () {
//change
				            //http://www.esun3dcloud.com/api/v1/productions/42e11e4275243d583ac7c721e91e535570407791/config
				            //http://www.esun3dcloud.com/api/v1/productions/42e11e4275243d583ac7c721e91e535570407791/scene
				            return this.CONFIG_FILENAME = "config.json", this.ASSET_PREFIX = "", this.SCENE_PATH = "http://www.esun3dcloud.com/api/v1/productions/42e11e4275243d583ac7c721e91e535570407791/scene", this.CONTEXT_OPTIONS = {
				                alpha: !0,
				                preserveDrawingBuffer: !0
				            }, f.script.legacy = !0, this
				        }
				    }, {
				        key: "setDevice",
				        value: function() {
				            return this.devices = {
				                keyboard: new f.Keyboard(window),
				                mouse: new f.Mouse(this.canvas),
				                gamepads: new f.GamePads
				            }, "ontouchstart" in window && (this.devices.touch = new f.TouchDevice(this.canvas)), this
				        }
				    }, {
				        key: "initApp",
				        value: function() {
				            return this.app = new f.Application(this.canvas, {
				                keyboard: this.devices.keyboard,
				                mouse: this.devices.mouse,
				                gamepads: this.devices.gamepads,
				                touch: this.devices.touch,
				                graphicsDeviceOptions: this.CONTEXT_OPTIONS,
				                assetPrefix: this.ASSET_PREFIX || ""
				            }), this
				        }
				    }, {
				        key: "loadScene",
				        value: function() {
				            var e = this;
				            return this.loadConfig().then(function(t) {
				                return e.loadAssetsThroughConfig(t)
				            }).then(function() {
				                return e.app.loadScene(e.SCENE_PATH, function(t, n) {
				                    t && console.error(t);
				                    var i = !1;
				                    e.app.assets.once("load", function(t) {
				                        i || (c.default.all(t.data.textures.map(function(t) {
									    return new c.default (function(n, i) {
                                        e.app.assets.once("load:" + t, function(e) {
                                            n(e)
                                        })
                                    })
									})).then(function(e) {
									    $$$.cm.fire("GET_PLAYCANVAS_SCENE_LOAD_STATE")({
									        loadState: "skyboxDone"
									    })
									}), i = !0)
				                    }), e.app.start(), setTimeout(function() {
				                        $$$.cm.fire("GET_PLAYCANVAS_SCENE_LOAD_STATE")({
				                            loadState: "done"
				                        })
				                    }, 1e3)
				                })
				            }).catch (function(e) {
							    alert(e)
							}), this
				        }
				    }, {
				        key: "loadConfig",
				        value: function() {
				            var e = this;
				            return new c.default (function(t, n) {
						    e.app.configure(e.CONFIG_FILENAME, function(e) {
						        t(e)
						    })
						})
				        }
				    }, {
				        key: "loadAssetsThroughConfig",
				        value: function(e) {
				            var t = this;
				            return new c.default (function(n, i) {
						    e && console.error(e), t.reflow(), window.addEventListener("resize", t.reflow.bind(t), !1), window.addEventListener("orientationchange", t.reflow.bind(t), !1), t.app.preload(function(e) {
						        e && console.error(e), n()
						    })
						})
				        }
				    }, {
				        key: "reflow",
				        value: function() {
				            var e = this.canvas;
				            this.app.resizeCanvas(e.width, e.height);
				            e.style.width = "", e.style.height = "";
				            var t = this.app._fillMode;
				            t != f.FILLMODE_NONE && t != f.FILLMODE_KEEP_ASPECT || (t == f.FILLMODE_NONE && e.clientHeight < window.innerHeight || e.clientWidth / e.clientHeight >= window.innerWidth / window.innerHeight ? e.style.marginTop = Math.floor((window.innerHeight - e.clientHeight) / 2) + "px" : e.style.marginTop = "")
				        }
				    }, {
				        key: "displayError",
				        value: function(e) {
				            var t = document.createElement("div");
				            t.innerHTML = ['<table style="background-color: #8CE; width: 100%; height: 100%;">', "  <tr>", '      <td align="center">', '          <div style="display: table-cell; vertical-align: middle;">', '              <div style="">' + e + "</div>", "          </div>", "      </td>", "  </tr>", "</table>"].join("\n"), document.body.appendChild(t)
				        }
				    }]), n
				}(l.default);
            n.default = E
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        "../../core/Component": 6,
        bluebird: "bluebird"
    }],
    5: [function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
			o = e("./playcanvasOuterCommunicationEvents"),
			s = i(o),
			_ = function() {
			    function e() {
			        a(this, e), this.events = s.default, this.observeMap = {}, this.methods = {}
			    }
			    return r(e, [{
			        key: "init",
			        value: function() {}
			    }, {
			        key: "statementCheck",
			        value: function(e) {
			            if (this.events[e]) return this;
			            throw new Error("this method " + e + " have not register in communication events")
			        }
			    }, {
			        key: "observeCheck",
			        value: function(e) {}
			    }, {
			        key: "fire",
			        value: function(e) {
			            var t = this;
			            return this.statementCheck(e), function() {
			                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
			                var r = t.observeMap[e] = t.observeMap[e] || [];
			                r.forEach(function(e) {
			                    e.apply(void 0, i)
			                })
			            }
			        }
			    }, {
			        key: "on",
			        value: function(e) {
			            var t = this;
			            return this.statementCheck(e), function() {
			                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
			                var r = t.observeMap[e] = t.observeMap[e] || [];
			                t.observeMap[e] = r.concat(i)
			            }
			        }
			    }, {
			        key: "off",
			        value: function(e) {
			            var t = this;
			            return this.statementCheck(e), function() {
			                for (var n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
			                t.observeMap[e] && i.forEach(function(n) {
			                    var i = t.observeMap[e].indexOf(n);~i ? t.observeMap[e].splice(i, 1) : delete t.observeMap[e]
			                })
			            }
			        }
			    }, {
			        key: "method",
			        value: function(e) {
			            var t = this;
			            return function(n) {
			                t.methods[e] = n
			            }
			        }
			    }, {
			        key: "call",
			        value: function(e) {
			            return this.methods[e]
			        }
			    }]), e
			}();
        n.default = _
    }, {
        "./playcanvasOuterCommunicationEvents": 10
    }],
    6: [function(e, t, n) {
        "use strict";

        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = Object.assign ||
		function(e) {
		    for (var t = 1; t < arguments.length; t++) {
		        var n = arguments[t];
		        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
		    }
		    return e
		}, r = function() {
		    function e(e, t) {
		        for (var n = 0; n < t.length; n++) {
		            var i = t[n];
		            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		        }
		    }
		    return function(t, n, i) {
		        return n && e(t.prototype, n), i && e(t, i), t
		    }
		}(), o = function() {
		    function e(t) {
		        i(this, e), this._updateComponents = []
		    }
		    return r(e, [{
		        key: "superInit",
		        value: function() {
		            this._listenUpdate()
		        }
		    }, {
		        key: "extract",
		        value: function() {
		            return this[this.extractKey || "entity"]
		        }
		    }, {
		        key: "addUpdateComponent",
		        value: function() {
		            for (var e = this, t = arguments.length, n = Array(t), i = 0; i < t; i++) n[i] = arguments[i];
		            return this._updateComponents = this._updateComponents.concat(n.map(function(t) {
		                var n = t(e.app);
		                return new n(e.entity)
		            })), this
		        }
		    }, {
		        key: "_listenUpdate",
		        value: function() {
		            var e = this;
		            this.entity.on("update", function(t) {
		                e._updateComponents.forEach(function(e) {
		                    return e.update(t)
		                })
		            })
		        }
		    }, {
		        key: "setState",
		        value: function(e) {
		            return this.state = a({}, this.state, e), this
		        }
		    }]), e
		}();
        n.default = o
    }, {}],
    7: [function(e, t, n) {
        "use strict";

        function i(e) {
            return e && e.__esModule ? e : {
                default:
                    e
            }
        }
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var o = Object.assign ||
		function(e) {
		    for (var t = 1; t < arguments.length; t++) {
		        var n = arguments[t];
		        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
		    }
		    return e
		}, s = function() {
		    function e(e, t) {
		        for (var n = 0; n < t.length; n++) {
		            var i = t[n];
		            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		        }
		    }
		    return function(t, n, i) {
		        return n && e(t.prototype, n), i && e(t, i), t
		    }
		}(), _ = e("underscore"), u = i(_), l = function() {
		    function e() {
		        var t, n, i;
		        r(this, e), this.textureTransform = {
		            address: (t = {}, a(t, $$.SEM.PC_ADDRESS_REPEAT, "repeat"), a(t, $$.SEM.PC_ADDRESS_CLAMP_TO_EDGE, "clamp"), a(t, $$.SEM.PC_ADDRESS_MIRRORED_REPEAT, "mirror"), t),
		            magfilter: (n = {}, a(n, $$.SEM.PC_FILTER_NEAREST, "nearest"), a(n, $$.SEM.PC_FILTER_LINEAR, "liner"), n),
		            minfilter: (i = {}, a(i, $$.SEM.PC_FILTER_NEAREST, "nearest_mip_nearest"), a(i, $$.SEM.PC_FILTER_LINEAR, "linear_mip_linear"), i)
		        }, this.standardMaterial = {
		            shader: "blinn",
		            ambient: [0, 0, 0],
		            ambientTint: !1,
		            aoMapVertexColor: !1,
		            aoMapChannel: "g",
		            aoMapUv: 0,
		            aoMapTiling: [1, 1],
		            aoMapOffset: [0, 0],
		            occludeSpecular: 1,
		            diffuse: [1, 1, 1],
		            diffuseMapVertexColor: !1,
		            diffuseMapChannel: "rgb",
		            diffuseMapUv: 0,
		            diffuseMapTiling: [1, 1],
		            diffuseMapOffset: [0, 0],
		            diffuseMapTint: !1,
		            specular: [.23, .23, .23],
		            specularMapVertexColor: !1,
		            specularMapChannel: "rgb",
		            specularMapUv: 0,
		            specularMapTiling: [1, 1],
		            specularMapOffset: [0, 0],
		            specularMapTint: !1,
		            specularAntialias: !0,
		            useMetalness: !1,
		            metalnessMapVertexColor: !1,
		            metalnessMapChannel: "g",
		            metalnessMapUv: 0,
		            metalnessMapTiling: [1, 1],
		            metalnessMapOffset: [0, 0],
		            metalnessMapTint: !1,
		            metalness: 1,
		            conserveEnergy: !0,
		            shininess: 32,
		            glossMapVertexColor: !1,
		            glossMapChannel: "g",
		            glossMapUv: 0,
		            glossMapTiling: [1, 1],
		            glossMapOffset: [0, 0],
		            fresnelModel: 0,
		            fresnelFactor: 0,
		            emissive: [0, 0, 0],
		            emissiveMapVertexColor: !1,
		            emissiveMapChannel: "rgb",
		            emissiveMapUv: 0,
		            emissiveMapTiling: [1, 1],
		            emissiveMapOffset: [0, 0],
		            emissiveMapTint: !1,
		            emissiveIntensity: 1,
		            normalMapTiling: [1, 1],
		            normalMapOffset: [0, 0],
		            normalMapUv: 0,
		            bumpMapFactor: 1,
		            heightMapChannel: "g",
		            heightMapUv: 0,
		            heightMapTiling: [1, 1],
		            heightMapOffset: [0, 0],
		            heightMapFactor: 1,
		            alphaTest: 0,
		            opacity: 1,
		            opacityMapVertexColor: !1,
		            opacityMapChannel: "g",
		            opacityMapUv: 0,
		            opacityMapTiling: [1, 1],
		            opacityMapOffset: [0, 0],
		            reflectivity: 1,
		            refraction: 0,
		            refractionIndex: .6666666666666666,
		            cubeMapProjection: 0,
		            cubeMapProjectionBox: {
		                center: [0, 0, 0],
		                halfExtents: [.5, .5, .5]
		            },
		            lightMapVertexColor: !1,
		            lightMapChannel: "rgb",
		            lightMapUv: 1,
		            lightMapTiling: [1, 1],
		            lightMapOffset: [0, 0],
		            depthTest: !0,
		            depthWrite: !0,
		            cull: 1,
		            blendType: 3,
		            shadowSampleType: 1,
		            useFog: !0,
		            useLighting: !0,
		            useSkybox: !0,
		            useGammaTonemap: !0
		        }
		    }
		    return s(e, [{
		        key: "strategy",
		        value: function(e) {
		            return {
		                editor: function(e) {
		                    return this.forEditorApp(e)
		                }
		            }[e].bind(this)
		        }
		    }, {
		        key: "getMap",
		        value: function(e) {
		            return {
		                name: e.name,
		                url: e._levels[0].src,
		                texture_uid: e.texture_uid || "",
		                data: {
		                    addressu: this.textureTransform.address[0],
		                    addressv: this.textureTransform.address[0]
		                }
		            }
		        }
		    }, {
		        key: "forEditorApp",
		        value: function(e) {
		            var t = this,
						n = e.app,
						i = (e.params, n.root.findByName("lightContainer").children),
						a = n.root.findByName("Camera"),
						r = n.root.findByName("modelMesh"),
						s = u.default.uniq(u.default.pluck(r.model.meshInstances, "material")),
						_ = r.findByName("annotationContainer").children,
						l = (n.root.findByName("vrCamera"), n.root.findByName("backgroundImage")),
						p = l.model.model.meshInstances[0].material;
		            return {
		                scene: {
		                    outerProps: {
		                        bgimage: {
		                            enabled: l.enabled,
		                            url: p.diffuseMap && p.diffuseMap._levels[0].src,
		                            material: o({}, this.standardMaterial, {
		                                diffuseMap: p.diffuseMap && {
		                                    url: p.diffuseMap._levels[0].src,
		                                    texture_uid: p.diffuseMap.texture_uid || ""
		                                },
		                                emissiveMap: p.emissiveMap && {
		                                    url: p.emissiveMap._levels[0].src,
		                                    texture_uid: p.emissiveMap.texture_uid || ""
		                                },
		                                emissiveIntensity: 1,
		                                useSkybox: !1,
		                                useLighting: !1
		                            })
		                        }
		                    },
		                    camera: {
		                        orthoHeight: 100,
		                        fov: a.camera.realFov,
		                        clearDepthBuffer: a.camera.clearDepthBuffer,
		                        projection: 0,
		                        clearColor: Array.from(a.camera.clearColor.data),
		                        enabled: !0,
		                        priority: 0,
		                        farClip: 1e3,
		                        nearClip: .1,
		                        clearColorBuffer: a.camera.clearColorBuffer,
		                        rect: [0, 0, 1, 1],
		                        frustumCulling: !1
		                    },
		                    model: u.default.assign({
		                rotation: Array.from(r.getLocalEulerAngles().data)
		            }, r.animation ? {
		                animation: {
		                    activate: r.animation.activate,
		                    enabled: r.animation.enabled,
		                    loop: r.animation.loop,
		                    speed: r.animation.speed
		                }
		            } : {}),
		            render:
		            {
		                fog: n.scene.fog,
		                fog_color: Array.from(n.scene.fogColor.data),
		                fog_density: n.scene.fogDensity,
		                fog_end: n.scene.fogEnd,
		                fog_start: n.scene.fogStart,
		                gamma_correction: n.scene.gammaCorrection,
		                global_ambient: Array.from(n.scene.ambientLight.data),
		                exposure: n.scene.exposure,
		                lightmapMaxResolution: n.scene.lightmapMaxResolution,
		                tonemapping: n.scene.toneMapping,
		                skyboxMip: n.scene.skyboxMip,
		                skybox: null === n.scene.skybox ? null : n.scene.skybox && n.scene.skybox.name,
		                skyboxIntensity: n.scene.skyboxIntensity,
		                lightmapSizeMultiplier: 16,
		                lightmapMode: 1
		            }
		        },
		        light: i.map(function(e) {
		            return {
		                name: e.name,
		                position: Array.from(e.getPosition().data).map(function(e) {
		                    return Math.round(100 * e) / 100
		                }),
		                rotation: Array.from(e.getEulerAngles().data).map(function(e) {
		                    return Math.round(100 * e) / 100
		                }),
		                range: e.light.range,
		                type: e.light.type,
		                color: Array.from(e.light.color.data),
		                intensity: e.light.intensity,
		                outerConeAngle: e.light.outerConeAngle,
		                innerConeAngle: e.light.innerConeAngle,
		                falloffMode: e.light.falloffMode
		            }
		        }),
		        material: s.map(function(e, n) {
		            return o({}, t.standardMaterial, {
		                shader: "blinn",
		                name: e.name,
		                ambient: Array.from(e.ambient.data),
		                ambientTint: e.ambientTint,
		                aoMap: e.aoMap && t.getMap(e.aoMap),
		                aoMapChannel: e.aoMapChannel,
		                aoMapOffset: Array.from(e.aoMapOffset.data),
		                aoMapTiling: Array.from(e.aoMapTiling.data),
		                aoMapUv: e.aoMapUv,
		                aoMapVertexColor: e.aoMapVertexColor,
		                diffuse: Array.from(e.diffuse.data),
		                diffuseMap: e.diffuseMap && t.getMap(e.diffuseMap),
		                diffuseMapChannel: e.diffuseMapChannel,
		                diffuseMapOffset: Array.from(e.diffuseMapOffset.data),
		                diffuseMapTiling: Array.from(e.diffuseMapTiling.data),
		                diffuseMapTint: e.diffuseMapTint,
		                diffuseMapUv: e.diffuseMapUv,
		                diffuseMapVertexColor: e.diffuseMapVertexColor,
		                useMetalness: e.useMetalness,
		                shininess: e.shininess,
		                glossMap: e.glossMap && t.getMap(e.glossMap),
		                glossMapChannel: e.glossMapChannel,
		                glossMapOffset: Array.from(e.glossMapOffset.data),
		                glossMapTiling: Array.from(e.glossMapTiling.data),
		                glossMapUv: e.glossMapUv,
		                glossMapVertexColor: e.glossMapVertexColor,
		                metalness: e.metalness,
		                metalnessMap: e.metalnessMap && t.getMap(e.metalnessMap),
		                metalnessMapChannel: e.metalnessMapChannel,
		                metalnessMapOffset: Array.from(e.metalnessMapOffset.data),
		                metalnessMapTiling: Array.from(e.metalnessMapTiling.data),
		                metalnessMapUv: e.metalnessMapUv,
		                metalnessMapVertexColor: e.metalnessMapVertexColor,
		                specular: Array.from(e.specular.data),
		                specularAntialias: e.specularAntialias,
		                specularMap: e.specularMap && t.getMap(e.specularMap),
		                specularMapChannel: e.specularMapChannel,
		                specularMapOffset: Array.from(e.specularMapOffset.data),
		                specularMapTiling: Array.from(e.specularMapTiling.data),
		                specularMapTint: e.specularMapTint,
		                specularMapUv: e.specularMapUv,
		                specularMapVertexColor: e.specularMapVertexColor,
		                emissive: Array.from(e.emissive.data),
		                emissiveIntensity: e.emissiveIntensity,
		                emissiveMap: e.emissiveMap && t.getMap(e.emissiveMap),
		                emissiveMapChannel: e.emissiveMapChannel,
		                emissiveMapOffset: Array.from(e.emissiveMapOffset.data),
		                emissiveMapTiling: Array.from(e.emissiveMapTiling.data),
		                emissiveMapTint: e.emissiveMapTint,
		                emissiveMapUv: e.emissiveMapUv,
		                emissiveMapVertexColor: e.emissiveMapVertexColor,
		                blendType: e.blendType,
		                opacity: e.opacity,
		                alphaTest: e.alphaTest,
		                opacityMap: e.opacityMap && t.getMap(e.opacityMap),
		                opacityMapChannel: e.opacityMapChannel,
		                opacityMapOffset: Array.from(e.opacityMapOffset.data),
		                opacityMapTiling: Array.from(e.opacityMapTiling.data),
		                opacityMapUv: e.opacityMapUv,
		                opacityMapVertexColor: e.opacityMapVertexColor,
		                lightMap: e.lightMap && t.getMap(e.lightMap),
		                lightMapChannel: e.lightMapChannel,
		                lightMapOffset: Array.from(e.lightMapOffset.data),
		                lightMapTiling: Array.from(e.lightMapTiling.data),
		                lightMapUv: e.lightMapUv,
		                lightMapVertexColor: e.lightMapVertexColor,
		                normalMap: e.normalMap && t.getMap(e.normalMap),
		                normalMapOffset: Array.from(e.normalMapOffset.data),
		                normalMapTiling: Array.from(e.normalMapTiling.data),
		                normalMapUv: e.normalMapUv,
		                bumpMapFactor: e.bumpiness,
		                heightMap: e.heightMap && t.getMap(e.heightMap),
		                heightMapChannel: e.heightMapChannel,
		                heightMapFactor: e.heightMapFactor,
		                heightMapOffset: Array.from(e.heightMapOffset.data),
		                heightMapTiling: Array.from(e.heightMapTiling.data),
		                heightMapUv: e.heightMapUv,
		                sphereMap: e.sphereMap && t.getMap(e.sphereMap),
		                cubeMap: e.cubeMap && t.getMap(e.cubeMap),
		                reflectivity: e.reflectivity,
		                refraction: e.refraction,
		                refractionIndex: e.refractionIndex,
		                depthTest: e.depthTest,
		                depthWrite: e.depthWrite,
		                cull: e.cull,
		                shadowSampleType: e.shadowSampleType,
		                useFog: e.useFog,
		                useGammaTonemap: e.useGammaTonemap,
		                useLighting: e.useLighting,
		                useSkybox: e.useSkybox
		            })
		        }),
		        annotation: _.map(function(e) {
		            return {
		                index: e.index,
		                name: e.name,
		                title: e.title,
		                rotation: Array.from(e.eulerAngles),
		                description: e.description,
		                positionWorld: Array.from(e.getPosition().data)
		            }
		        })
		    }
		    }
    }, {
        key: "forViewerApp",
        value: function() {}
    }]), e
}();
n.default = l
}, {
    underscore: "underscore"
}],
	8: [function(e, t, n) {
	    (function(t) {
	        "use strict";

	        function i(e) {
	            return e && e.__esModule ? e : {
	                default:
                        e
	            }
	        }
	        function a(e, t) {
	            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	        }
	        Object.defineProperty(n, "__esModule", {
	            value: !0
	        });
	        var r = function() {
	            function e(e, t) {
	                for (var n = 0; n < t.length; n++) {
	                    var i = t[n];
	                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
	                }
	            }
	            return function(t, n, i) {
	                return n && e(t.prototype, n), i && e(t, i), t
	            }
	        }(),
				o = e("./Communicator"),
				s = i(o),
				_ = e("./appStrategies"),
				u = i(_),
				l = e("./ExtractAppState"),
				p = i(l),
				c = function() {
				    function e() {
				        a(this, e), t.$$$ = this, this.communicator = null, this.pcInstanceMap = {}, this.ExtractAppState = p.default, this.R$R = t.R$R, this.apps = [], this.init()
				    }
				    return r(e, [{
				        key: "init",
				        value: function() {
				            return this.communicator = this.cm = new s.default, this
				        }
				    }, {
				        key: "getPcApp",
				        value: function(e) {
				            var t = e.name;
				            return this.pcInstanceMap[t]
				        }
				    }, {
				        key: "createPcApp",
				        value: function(e) {
				            var t = e.name;
				            for (var n in this.pcInstanceMap) this.pcInstanceMap[n].destroy();
				            var i = (0, u.default)(t)(e);
				            return this.pcInstanceMap[t] = i, i
				        }
				    }]), e
				}();
	        n.default = c
	    }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
	    "./Communicator": 5,
	    "./ExtractAppState": 7,
	    "./appStrategies": 9
	}],
	9: [function(e, t, n) {
	    "use strict";

	    function i(e) {
	        return e && e.__esModule ? e : {
	            default:
                    e
	        }
	    }
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    }), n.default = function(e) {
	    return function() {
	        return _[e].apply(_, arguments)
	    }
	};
	    var a = e("../apps/EditorApp"),
			r = i(a),
			o = e("../apps/ViewerApp"),
			s = i(o),
			_ = {
			    editor: function(e) {
			        var t = new r.default (e);
			        return t
			    },
			    viewer: function(e) {
			        var t = new s.default (e);
			        return t
			    }
			}
	}, {
	    "../apps/EditorApp": 1,
	    "../apps/ViewerApp": 3
	}],
	10: [function(e, t, n) {
	    "use strict";
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    }), n.default = {
	        SET_VR_FOV: {},
	        RESET_CAMERA: {},
	        ROTATE_EDITOR_MODEL: {},
	        ROTATE_EDITOR_MODEL_COLLISION: {},
	        ADAPT_CAMERA_OF_VIEW: {
	        fov: {
	                    _type: "number"
	        }
	        },
	    ADAPT_SCENE_AMBIENT_LIGHT: {
	        ambientLight: {
	                _type: "rgba",
	                _default: [10, 23, 45, 0]
	        }
	    },
	    ADAPT_CAMERA_CLEAR_COLOR: {
	        clearColor: {
	                _type: "rgba",
	                _default: [0, 0, 0, 1]
	        }
	    },
	    ADAPT_CAMERA_CLEAR_COLOR_BUFFER: {
	        clearColorBuffer: {
	                _type: "boolen"
	        }
	    },
	    ADAPT_CAMERA_CLEAR_DEPTH_BUFFER: {
	        clearColorBuffer: {
	                _type: "boolen"
	        }
	    },
	    ADJUST_SCENE_SKYBOX: {
	        skybox: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_TONEMAPPING: {
	        tonemapping: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_MIP: {
	        mip: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_INTENSITY: {
	        intensity: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_EXPOSURE: {
	        exposure: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_GAMMA: {
	        gamma: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_FOG: {
	        fog: {
	                _type: "string",
	                _options: ["none", "linear", "exp", "exp2"]
	        }
	    },
	    ADJUST_SCENE_FOGSTART: {},
	    ADJUST_SCENE_FOGEND: {},
	    ADJUST_SCENE_DENSITY: {
	        density: {
	                _type: "number"
	        }
	    },
	    ADJUST_SCENE_COLOR: {
	        color: {
	                _type: "rgba",
	                _default: [1, 1, 1, 0]
	        }
	    },
	    ADJUST_SCENE_RESOLUTION: {
	        resolution: {
	                _type: "number"
	        }
	    },
	    SELECT_EDITOR_LIGHT: {},
	    SELECT_CANVAS_LIGHT: {},
	    ADD_LIGHT: {
	        name: {
	                _type: "string"
	        },
	        options: {
	            type: {
	                    _type: "string",
	                    _options: ["directional", "point", "spot"]
	            },
	            color: {
	                _type: "rgba"
	            },
	            range: {
	                _type: "number",
	                _default: [1, 32]
	            }
	        }
	    },
	    REMOVE_LIGHT: {
	        name: {
	                _type: "string"
	        }
	    },
	    GET_LIGHT_POSITION: {},
	    SET_LIGHT_POSITION: {
	        name: {
	                _type: "string"
	        },
	        position: {
	            _type: "array",
	            _default: [0, 0, 0]
	        }
	    },
	    GET_LIGHT_EULERANGLES: {},
	    SET_LIGHT_EULERANGLES: {
	        name: {
	                _type: "string"
	        },
	        eulerangles: {
	            _type: "array",
	            _default: [0, 0, 0]
	        }
	    },
	    SET_LIGHT_RANGE: {
	        name: {
	                _type: "string"
	        },
	        range: {
	            _type: "number"
	        }
	    },
	    SET_LIGHT_TYPE: {
	        name: {
	                _type: "string"
	        },
	        type: {
	            _type: "string",
	            _options: ["point", "directional", "spot"]
	        }
	    },
	    SET_LIGHT_COLOR: {
	        name: {
	                _type: "string"
	        },
	        color: {
	            _type: "rgba",
	            _default: [1, 1, 1, 0]
	        }
	    },
	    SET_LIGHT_INTENSITY: {
	        name: {
	                _type: "string"
	        },
	        intensity: {
	            _type: "number"
	        }
	    },
	    SET_LIGHT_OUTER_CONE_ANGLE: {
	        name: {
	                _type: "string"
	        },
	        angle: {
	            _type: "number"
	        }
	    },
	    SET_LIGHT_INNER_CONE_ANGLE: {
	        name: {
	                _type: "string"
	        },
	        angle: {
	            _type: "number"
	        }
	    },
	    REQUIRE_MODEL_MATERIAL_MAP: {},
	    SEND_MODEL_MATERIALS_MAP: {
	        _type: "object",
	        _format: {
	            name: "",
	            materials: [{
	                material: {
	                    name: {
	                        _type: ""
	                    },
	                    ambient: {
	                        ambient: {
	                            _type: ""
	                        },
	                        ambientTint: {
	                            _type: ""
	                        },
	                        aoMap: {
	                            _type: ""
	                        },
	                        aoMapChannel: {
	                            _type: ""
	                        },
	                        aoMapOffset: {
	                            _type: ""
	                        },
	                        aoMapTiling: {
	                            _type: ""
	                        },
	                        aoMapUv: {
	                            _type: ""
	                        },
	                        aoMapVertexColor: {
	                            _type: ""
	                        }
	                    },
	                    diffuse: {
	                        diffuse: {
	                            _type: ""
	                        },
	                        diffuseMap: {
	                            _type: ""
	                        },
	                        diffuseMapChannel: {
	                            _type: ""
	                        },
	                        diffuseMapOffset: {
	                            _type: ""
	                        },
	                        diffuseMapTiling: {
	                            _type: ""
	                        },
	                        diffuseMapTint: {
	                            _type: ""
	                        },
	                        diffuseMapUv: {
	                            _type: ""
	                        },
	                        diffuseMapVertexColor: {
	                            _type: ""
	                        }
	                    },
	                    specular: {
	                        useMetalness: {
	                            _type: ""
	                        },
	                        glossiness: {
	                            glossMap: {
	                                _type: ""
	                            },
	                            glossMapChannel: {
	                                _type: ""
	                            },
	                            glossMapOffset: {
	                                _type: ""
	                            },
	                            glossMapTiling: {
	                                _type: ""
	                            },
	                            glossMapUv: {
	                                _type: ""
	                            },
	                            glossMapVertexColor: {
	                                _type: ""
	                            }
	                        },
	                        metalness: {
	                            metalness: {
	                                _type: ""
	                            },
	                            metalnessMap: {
	                                _type: ""
	                            },
	                            metalnessMapChannel: {
	                                _type: ""
	                            },
	                            metalnessMapOffset: {
	                                _type: ""
	                            },
	                            metalnessMapTiling: {
	                                _type: ""
	                            },
	                            metalnessMapUv: {
	                                _type: ""
	                            },
	                            metalnessMapVertexColor: {
	                                _type: ""
	                            }
	                        },
	                        specular: {
	                            specular: {
	                                _type: ""
	                            },
	                            specularAntialias: {
	                                _type: ""
	                            },
	                            specularMap: {
	                                _type: ""
	                            },
	                            specularMapChannel: {
	                                _type: ""
	                            },
	                            specularMapOffset: {
	                                _type: ""
	                            },
	                            specularMapTiling: {
	                                _type: ""
	                            },
	                            specularMapTint: {
	                                _type: ""
	                            },
	                            specularMapUv: {
	                                _type: ""
	                            },
	                            specularMapVertexColor: {
	                                _type: ""
	                            }
	                        }
	                    },
	                    emissive: {
	                        emissive: {
	                            _type: ""
	                        },
	                        emissiveIntensity: {
	                            _type: ""
	                        },
	                        emissiveMap: {
	                            _type: ""
	                        },
	                        emissiveMapChannel: {
	                            _type: ""
	                        },
	                        emissiveMapOffset: {
	                            _type: ""
	                        },
	                        emissiveMapTiling: {
	                            _type: ""
	                        },
	                        emissiveMapTint: {
	                            _type: ""
	                        },
	                        emissiveMapUv: {
	                            _type: ""
	                        },
	                        emissiveMapVertexColor: {
	                            _type: ""
	                        }
	                    },
	                    opacity: {
	                        opacity: {
	                            _type: ""
	                        },
	                        opacityMap: {
	                            _type: ""
	                        },
	                        opacityMapChannel: {
	                            _type: ""
	                        },
	                        opacityMapOffset: {
	                            _type: ""
	                        },
	                        opacityMapTiling: {
	                            _type: ""
	                        },
	                        opacityMapUv: {
	                            _type: ""
	                        },
	                        opacityMapVertexColor: {
	                            _type: ""
	                        }
	                    },
	                    lightMap: {
	                        lightMap: {
	                            _type: ""
	                        },
	                        lightMapChannel: {
	                            _type: ""
	                        },
	                        lightMapOffset: {
	                            _type: ""
	                        },
	                        lightMapTiling: {
	                            _type: ""
	                        },
	                        lightMapUv: {
	                            _type: ""
	                        },
	                        lightMapVertexColor: {
	                            _type: ""
	                        }
	                    },
	                    normals: {
	                        normalMap: {
	                            _type: ""
	                        },
	                        normalMapOffset: {
	                            _type: ""
	                        },
	                        normalMapTiling: {
	                            _type: ""
	                        },
	                        normalMapUv: {
	                            _type: ""
	                        },
	                        bumpiness: {
	                            _type: ""
	                        }
	                    },
	                    parallax: {
	                        heightMap: {
	                            _type: ""
	                        },
	                        heightMapChannel: {
	                            _type: ""
	                        },
	                        heightMapFactor: {
	                            _type: ""
	                        },
	                        heightMapOffset: {
	                            _type: ""
	                        },
	                        heightMapTiling: {
	                            _type: ""
	                        },
	                        heightMapUv: {
	                            _type: ""
	                        }
	                    },
	                    enviroment: {
	                        sphereMap: {
	                            _type: ""
	                        },
	                        cubeMap: {
	                            _type: ""
	                        },
	                        reflectivity: {
	                            _type: ""
	                        },
	                        refraction: {
	                            _type: ""
	                        },
	                        refractionIndex: {
	                            _type: ""
	                        }
	                    },
	                    other: {
	                        depthTest: {
	                            _type: ""
	                        },
	                        depthWrite: {
	                            _type: ""
	                        },
	                        cull: {
	                            _type: ""
	                        },
	                        shadowSampleType: {
	                            _type: ""
	                        },
	                        useFog: {
	                            _type: ""
	                        },
	                        useGammaTonemap: {
	                            _type: ""
	                        },
	                        useLighting: {
	                            _type: ""
	                        },
	                        useSkybox: {
	                            _type: ""
	                        }
	                    }
	                }
	            }]
	        }
	    },
	    SET_LIGHT_FALLOFF: {
	        _type: "object",
	        _format: {
	            falloff: {
	                    _type: "string"
	            }
	        }
	    },
	    SET_ANNOTATION_PICKER_STATUS: {
	        _type: "object",
	        _format: {
	            pickerStatus: !1
	        }
	    },
	    SET_MATERIAL_AMBIENT: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AMBIENT_TINT: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP: {
	        _type: "object",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_AO_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_TINT: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_DIFFUSE_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_USE_METALNESS: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_GLOSS_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_METALNESS_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_ANTIALIAS: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_TINT: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPECULAR_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_INTENSITY: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_TINT: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_EMISSIVE_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_BLENDTYPE: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_ALPHA_TEST: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_OPACITY_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_VERTEXCOLOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_LIGHT_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_NORMAL_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_BUMPINESS: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_CHANNEL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_FACTOR: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_OFFSET: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_TILING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_UV: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_HEIGHT_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_SPHERE_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP_FILTERING: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP_ADDRESSU: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP_ADDRESSV: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP_ANISOTROPY: {
	        _type: "number",
	        _format: ""
	    },
	    SET_MATERIAL_CUBE_MAP_RGBM: {
	        _type: "boolen",
	        _format: ""
	    },
	    SET_MATERIAL_REFLECTIVITY: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_REFRACTION: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_REFRACTION_INDEX: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DEPTH_TEST: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_DEPTH_WRITE: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_CULL: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_SHADOW_SAMPLE_TYPE: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_USE_FOG: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_USE_GAMMA_TONEMAP: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_USE_LIGHTING: {
	        _type: "string",
	        _format: ""
	    },
	    SET_MATERIAL_USE_SKYBOX: {
	        _type: "string",
	        _format: ""
	    },
	    REQUIRE_MODEL_SCENE_PROPS: {},
	    GET_MODEL_SCENE_PROPS: {},
	    REQUIRE_MODEL_LIGHTS: {},
	    GET_MODEL_LIGHTS: {},
	    GET_MODEL_ANNOTATIONS: {
	        _type: "object",
	        _format: {
	            xxx: {
	                    position: {
	                        _type: "array",
	                        _format: [0, 0, 0]
	                    },
	                name: {
	                    _type: "string",
	                    _format: "xx"
	                },
	                description: {
	                    _type: "string",
	                    _format: "xx"
	                }
	            }
	        }
	    },
	    GET_MODEL_ANNOTATION_PROPS: {
	        _type: "object",
	        _format: {
	            position: {
	                    _type: "array",
	                    _format: [0, 0, 0]
	            },
	            name: {
	                _type: "string",
	                _format: "xx"
	            },
	            description: {
	                _type: "string",
	                _format: "xx"
	            }
	        }
	    },
	    GET_MODEL_VIEWER_CURRENT_ANNOTATION: {
	        _type: "object",
	        _format: {}
	    },
	    UPDATE_CAMERA_VISUAL_ANGLE_FOR_ANNOTATIONS_STATE: {
	        _type: "object",
	        _format: {
	            xxx_uniquekey: {
	                    state: {
	                        _type: "string"
	                    }
	            }
	        }
	    },
	    UPDATE_MODEL_ANNOTATION_TITLE: {
	        _type: "object",
	        _format: {
	            name: {
	                    _type: "string",
	                    _format: "xxxx"
	            },
	            title: {
	                _type: "string",
	                _format: "xxxx"
	            }
	        }
	    },
	    UPDATE_MODEL_ANNOTATION_DESCRIPTION: {
	        _type: "object",
	        _format: {
	            name: {
	                    _type: "string",
	                    _format: "xxxx"
	            },
	            description: {
	                _type: "string",
	                _format: "xxxx"
	            }
	        }
	    },
	    REQUIRE_MODEL_ANNOTATIONS: {},
	    REQUIRE_MODEL_ANNOTATIONS_PROPS: {},
	    SET_MODEL_ANNOTATIONS: {
	        _type: "object",
	        _format: {
	            _key: {
	                    name: {
	                        _type: "string"
	                    },
	                description: {
	                    _type: "string"
	                },
	                positionWorld: {
	                    _type: "array",
	                    _format: [0, 0, 0]
	                }
	            }
	        }
	    },
	    DELETE_MODEL_ANNOTATION: {
	        _type: "object",
	        _format: {
	            name: {
	                    _type: "string",
	                    _format: "xxxx"
	            }
	        }
	    },
	    FIRE_ANNOTATION_POSITION: {
	        _type: "array",
	        _format: [0, 0, 0]
	    },
	    GET_PLAYCANVAS_SCENE_LOAD_STATE: {
	        _type: "object",
	        _format: {
	            loadState: {
	                    _type: "string",
	                    _options: ["done"]
	            }
	        }
	    },
	    INITIAL_STATE: {
	        _type: "object",
	        _format: {
	            rendering: {
	                    _type: "object"
	            },
	            light: {
	                _type: "array",
	                _format: [{
	                    _type: "object",
	                    _format: {
	                        name: {
	                            _type: "string"
	                        },
	                        type: {
	                            _type: "string",
	                            _options: ["directional", "point", "spot"]
	                        }
	                    }
	                }]
	            },
	            material: {
	                _type: "object"
	            },
	            annotation: {
	                _type: "object"
	            },
	            vr: {
	                _type: "object"
	            }
	        }
	    },
	    REQUIRE_MODEL_SCENE_CAMERA: {},
	    GET_MODEL_SCENE_CAMERA_DATA: {
	        _type: "object",
	        _format: {
	            fov: "number"
	        }
	    },
	    GET_LOADING_SKYBOX_STATUS: {
	        _type: "object",
	        _format: {
	            isReday: "boolen"
	        }
	    },
	    GET_VR_ENTITY_ENABLE: {
	        _type: "object",
	        _format: {
	            isEnable: "boolen"
	        }
	    },
	    ENTER_VR_PRESSED_EVENT: {},
	    GET_VR_INIT_DISPLAY: {
	        _type: "object",
	        _format: {
	            display: "object"
	        }
	    },
	    GET_VR_IS_SUPPORTED: {
	        _type: "object",
	        _format: {
	            isSupported: "boolen"
	        }
	    },
	    GET_VR_CAMERA_OFFSET_DATA: {
	        _type: "object",
	        _format: {
	            position: "array",
	            rotation: "array"
	        }
	    },
	    GET_ANIMATION_PROPS: {},
	    SET_ANIMATION_SPEED: {},
	    SET_ANIMATION_ENABLED: {},
	    SET_ANIMATION_LOOP: {},
	    SET_ANIMATION_ACTIVATE: {},
	    SET_ANIMATION_CURR_ANIM: {},
	    SET_ANIMATION_CURRENT_TIME: {},
	    SET_ANIMATION_PLAYING: {},
	    GET_ANIMATION_PLAYING_STATUS: {},
	    INIT_AUTO_ROTATE: {},
	    SET_MATERIAL_OPTION_LIT: {},
	    SET_MATERIAL_OPTION_SHADELESS: {},
	    SET_MATERIAL_OPTION_MATCAP: {},
	    ADAPT_BACKGROUND_IMAGE: {},
	    SET_BACKGROUND_IMAGE_URL: {},
	    GET_MATERIAL_TYPE: {},
	    GET_MODEL_AUTO_ROTATE_DATA: {},
	    SET_ENTITY_IS_AUTO_ROTATE: {},
	    REQUIRE_ANIMATION_PROPS: {},
	    GET_DEFAUTL_MATEERIAL: {},
	    HOTKEY_SHIFT: {},
	    CAMERA_TOGGLE: {},
	    VIEWPORT_LOAD: {},
	    VIEWPORT_UPDATE: {},
	    VIEWPORT_POST_UPDATE: {},
	    VIEWPORT_GIZMO_UPDATE: {},
	    VIEWPORT_RENDER: {},
	    VIEWPORT_RESIZE: {},
	    VIEWPORT_HOVER: {},
	    VIEWPORT_PICK_STATE: {},
	    VIEWPORT_PICK_HOVER: {},
	    VIEWPORT_PICK_CLEAR: {},
	    VIEWPORT_PICK_FILTER: {},
	    VIEWPORT_PICK_NODE: {},
	    VIEWPORT_TAP_CLICK: {},
	    VIEWPORT_TAP_START: {},
	    VIEWPORT_TAP_MOVE: {},
	    VIEWPORT_TAP_END: {},
	    VIEWPORT_MOUSE_MOVE: {},
	    SELECTOR_ADD: {},
	    SELECTOR_REMOVE: {},
	    SELECTOR_CHANGE: {},
	    ENTITIES_ADD: {},
	    ENTITIES_REMOVE: {},
	    GIZMO_VISIBLE: {},
	    GIZMO_TYPE: {},
	    GIZMO_SNAP: {},
	    GIZMO_COORD_SYSTEM: {},
	    GIZMO_TRANSLATE_OFFSET: {},
	    GIZMO_TRANSLATE_VISIBLE: {},
	    GIZMO_TRANSLATE_RENDER: {},
	    GIZMO_TRANSLATE_START: {},
	    GIZMO_TRANSLATE_END: {},
	    GIZMO_TRANSLATE_POSITION: {},
	    GIZMO_TRANSLATE_ROTATION: {},
	    GIZMO_ROTATE_START: {},
	    GIZMO_ROTATE_END: {},
	    GIZMO_ROTATE_OFFSET: {},
	    GIZMO_ROTATE_RENDER: {},
	    GIZMO_SCALE_START: {},
	    GIZMO_SCALE_END: {},
	    GIZMO_SCALE_OFFSET: {},
	    GIZMO_SCALE_RENDER: {}
	}
	}, {}],
	11: [function(e, t, n) {
	    "use strict";

	    function i(e) {
	        return e && e.__esModule ? e : {
	            default:
                    e
	        }
	    }
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    });
	    var a = e("./core/PcAppFactory.js"),
			r = i(a);
	    n.default = r.default
	}, {
	    "./core/PcAppFactory.js": 8
	}],
	12: [function(e, t, n) {
	    "use strict";
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    }), n.default = {
	        loadLanguage: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                lang: ":lang"
	            };
	            return "/lang/" + e.lang + ".lang"
	        },
	        signUp: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/users"
	        },
	        signIn: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/session"
	        },
	        signOut: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/session"
	        },
	        validate: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                authenticate_token: ":authenticate_token"
	            };
	            return "/users/authentications/" + e.authenticate_token
	        },
	        setPassword: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                authenticate_token: ":authenticate_token"
	            };
	            return "/users/authentications/" + e.authenticate_token
	        },
	        seekBack: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/users/authentications"
	        },
	        saveContent: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid
	        },
	        getTrasferState: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                content_uid: ":content_uid"
	            };
	            return "/contents/" + e.content_uid + "/info"
	        },
	        contentList: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/contents"
	        },
	        configJson: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/config"
	        },
	        sceneJson: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/scene"
	        },
	        profileInfo: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/users/info"
	        },
	        getAnnotations: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/annotations"
	        },
	        getTextures: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/textures"
	        },
	        deleteTexture: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/textures/" + e.uuid
	        },
	        productionConfig: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/productions/" + e.uuid + "/config.json"
	            //return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/config"

	        },
	        productionThumbnail: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
//change
	            //return "/productions/" + e.uuid + "/thumbnail_url"
	            return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/thumbnail_url"
	        },
	        productionScene: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/productions/" + e.uuid + "/scene.json"
	            //return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/scene"
	        },
	        productionAnnotations: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
//change
	            //return "/productions/" + e.uuid + "/annotations"
	            return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/annotations"
	            
	        },
	        contentInfo: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid
	        },
	        modifyContentInfo: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/info"
	        },
	        publishModel: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/productions"
	        },
	        modifyContentStatus: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/status"
	        },
	        deleteContent: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid
	        },
	        deleteProduction: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/productions/" + e.uuid
	        },
	        meshesPolicy: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/upload_policy/sources"
	        },
	        texturesPolicy: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/upload_policy/textures"
	        },
	        thumbnailPolicy: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/upload_policy/thumbnails"
	        },
	        avatarPolicy: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/upload_policy/avatars"
	        },
	        vrSetting: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/contents/" + e.uuid + "/vr_setting"
	        },
	        productionVrSetting: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
//change
	            //return "/productions/" + e.uuid + "/vr_setting"
	            return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/vr_setting"
	            
	        },
	        getProductionBackgroundImage: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
//change
	            //return "/productions/" + e.uuid + "/background_url"
	            return "/productions/" + "42e11e4275243d583ac7c721e91e535570407791" + "/background_url"
	            
	        },
	        mails: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/mails"
	        },
	        getcaptcha: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/getcaptcha"
	        },
	        updatePassword: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/users/pwd"
	        },
	        getTags: function() {
	            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
	            return "/users/tags"
	        },
	        autoRotate: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                content_uid: ":content_uid"
	            };
	            return "/contents/" + e.content_uid + "/auto_rotate"
	        },
	        productionAutoRotate: function() {
	            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
	                uuid: ":uuid"
	            };
	            return "/productions/" + e.uuid + "/auto_rotate"
	        }
	}
	}, {}],
	13: [function(require, module, exports) {
	    "use strict";
	    Object.defineProperty(exports, "__esModule", {
	        value: !0
	    });
	    var config = ({
	        "model_embed_url": "",
	        "skybox_host": "http://esun3dplus.oss-cn-shenzhen.aliyuncs.com",
//change
            //修改这个,决定API文件夹中文件是用本地还是网络
	        "apiHost": "http://www.esun3dcloud.com",
	        //"apiHost": "http://127.0.0.1/FX",

	        //"urlHost": "http://esun3dplus.oss-cn-shenzhen.aliyuncs.com"
	        "urlHost": "http://127.0.0.1/FX"
	        

	    }
);
        //==========================================================================================================================================================================================================
	    exports.default = {
	        mainLanguage: "en",
	        language: "cn",
	        surportLanguages: ["en", "cn", "hk"],
            //修改地址
	        apiHost: config.apiHost,
	        //apiHost: window.location.protocol + "//" + window.location.hostname,
	        apiPrefixes: ["/api/v1"],
	        //urlHost: window.location.protocol + "//" + window.location.hostname,
	        urlHost: config.urlHost,
	        skyboxHost: config.skybox_host,
	        model_embed_url: config.model_embed_url,
	        urlPrefix: function(e) {
	            return "/" + e + "/frame"
	        },
	        embedUrlPrefix: function(e) {
	            return "/" + e
	        },
	        //defaultImage: "images/single/pages/IndividualAccount/images/thumbnail.png"
	        defaultImage: "images/thumbnail.png"
	}
	}, {}],
	14: [function(e, t, n) {
	    "use strict";
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    }), n.default = {
	        home: function(e) {
	            return "/"
	        },
	        individualCms: function(e) {
	            return "/profile"
	        },
	        individualSet: function(e) {
	            return "/setting"
	        },
	        editor: function(e) {
	            return "/contents/" + e.uuid + "/editor"
	        },
	        detail: function(e) {
	            return "/contents/" + e.uuid
	        },
	        embedUrl: function(e) {
	            return "/productions/" + e.uuid + "/embed_url"
	        },
	        publishUrl: function(e) {
	            return "/productions/" + e.uuid
	        },
	        error: function(e) {
	            return "/error/" + e.type
	        }
	}
	}, {}],
	15: [function(e, t, n) {
	    "use strict";

	    function i(e) {
	        return e && e.__esModule ? e : {
	            default:
                    e
	        }
	    }
	    function a(e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	    }
	    Object.defineProperty(n, "__esModule", {
	        value: !0
	    });
	    var r = function() {
	        function e(e, t) {
	            for (var n = 0; n < t.length; n++) {
	                var i = t[n];
	                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
	            }
	        }
	        return function(t, n, i) {
	            return n && e(t.prototype, n), i && e(t, i), t
	        }
	    }(),
			o = e("../../../core/api"),
			s = i(o),
			_ = e("../../../core/config"),
			u = i(_),
			l = e("axios"),
			p = i(l),
			c = function() {
			    function e() {
			        a(this, e)
			    }
			    return r(e, [{
			        key: "getUuid",
			        value: function() {
			            var e = window.location.href,
							t = e.split("/"),
							n = t[t.length - 2];
			            return n
			        }
			    }, {
			        key: "getApi",
			        value: function(e) {
			            var t = this.getUuid();
			            return u.default.apiHost + u.default.apiPrefixes[0] + s.default [e]({
					    uuid: t
					})
			        }
			    }, {
			        key: "getProductionAnnotations",
			        value: function() {
			            var e = this.getApi("productionAnnotations");
			            return p.default.get(e, {
					    uuid: this.getUuid()
					})
			        }
			    }, {
			        key: "getVrOffsetData",
			        value: function() {
			            return p.default.get(this.getApi("productionVrSetting"), {
					    uuid: this.getUuid()
					})
			        }
			    }, {
			        key: "getProductionThumbnail",
			        value: function() {
			            return p.default.get(this.getApi("productionThumbnail"), {
					    uuid: this.getUuid()
					})
			        }
			    }, {
			        key: "getProductionBackgroundImage",
			        value: function() {
			            return p.default.get(this.getApi("getProductionBackgroundImage"), {
					    uuid: this.getUuid()
					})
			        }
			    }]), e
			}();
	    n.default = c
	}, {
	    "../../../core/api": 12,
	    "../../../core/config": 13,
	    axios: "axios"
	}],
	16: [function(e, t, n) {
	    "use strict";

	    function i(e) {
	        return e && e.__esModule ? e : {
	            default:
                    e
	        }
	    }
	    function a(e, t) {
	        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	    }
	    function r(e, t) {
	        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        return !t || "object" !== ("undefined" == typeof t ? "undefined" : s(t)) && "function" != typeof t ? e : t
	    }
	    function o(e, t) {
	        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : s(t)));
	        e.prototype = Object.create(t && t.prototype, {
	            constructor: {
	                value: e,
	                enumerable: !1,
	                writable: !0,
	                configurable: !0
	            }
	        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	    }
	    var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
		    return typeof e
		} : function(e) {
		    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, _ = "function" == typeof Symbol && "symbol" === s(Symbol.iterator) ?
		function(e) {
		    return "undefined" == typeof e ? "undefined" : s(e)
		} : function(e) {
		    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : s(e)
		}, u = Object.assign ||
		function(e) {
		    for (var t = 1; t < arguments.length; t++) {
		        var n = arguments[t];
		        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
		    }
		    return e
		}, l = function() {
		    function e(e, t) {
		        for (var n = 0; n < t.length; n++) {
		            var i = t[n];
		            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		        }
		    }
		    return function(t, n, i) {
		        return n && e(t.prototype, n), i && e(t, i), t
		    }
		}(), p = e("./api"), c = i(p), f = e("underscore"), E = i(f), d = e("../../../canvas/index"), A = i(d), T = e("delegate"), m = i(T), y = e("../../../core/config"), M = i(y), g = e("../../../core/url"), h = i(g), S = function(e) {
		    function t() {
		        a(this, t);
		        var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
		        return e.state = {
		            length: 0,
		            done: !1,
		            isShowCarousel: !0,
		            completed: 0,
		            animations: {},
		            playing: !0,
		            enabled: !0,
		            currAnim: "",
		            currentTime: 0,
		            slider: null,
		            icons: {
		                play: "M8 5v14l11-7z",
		                pause: "M6 19h4V5H6v14zm8-14v14h4V5h-4z"
		            }
		        }, e._config = M.default, e.rawURL = h.default, e.url = {
			    individualCms: e._config.urlHost + e._config.urlPrefix(e._config.language) + e.rawURL.individualCms()
			}, e.init(), e
		    }
		    return o(t, e), l(t, [{
		        key: "init",
		        value: function() {
		            this.initQuery(), this.progressCompleted(), this.initCanvas(), this.initListenEventsFromPlaycanvas(), this.initDom(), this.initBackgroundImg()
		        }
		    }, {
		        key: "initQuery",
		        value: function() {
		            var e = this,
						t = window.location.href.split("?")[1],
						n = t ? t.split("&") : [];
		            this.params = {}, n.forEach(function(t, n) {
		                var i = t && t.split("=");
		                e.params[i[0]] = 0 === n ? i[1] : parseInt(i[1])
		            }),
//change
		            //document.title = decodeURIComponent(this.params.title)
                    //修改标题
		            document.title = "青瓷甬钟"
		        }
		    }, {
		        key: "initBackgroundImg",
		        value: function() {
		            this.getProductionThumbnail().then(function(e) {
		                e.data.thumbnail_url && (document.querySelector(".progress").style.backgroundImage = "url(http://" + e.data.thumbnail_url + ")")
		            }), this.getProductionBackgroundImage().then(function(e) {
		                e.data && e.data.url && (document.getElementById("application-canvas").style.backgroundImage = "url(" + e.data.url + ")")
		            })
		        }
		    }, {
		        key: "on",
		        value: function(e) {
		            return this.communicator.on(e)
		        }
		    }, {
		        key: "fire",
		        value: function(e) {
		            return this.communicator.fire(e)
		        }
		    }, {
		        key: "getTagState",
		        value: function(e) {
		            var t = E.default.sortBy(E.default.values(e), function(e, t, n) {
				    return e.index
				}),
                    n = {};
		            return t.forEach(function(e, t) {
		                n[t] = {
		                    index: e.index,
		                    name: e.name,
		                    title: e.title,
		                    description: e.description,
		                    pos: {
		                        left: e.position[0],
		                        top: e.position[1]
		                    }
		                }
		            }.bind(this)), n
		        }
		    }, {
		        key: "initListenEventsFromPlaycanvas",
		        value: function() {
		            var e = this;
		            this.on("GET_MODEL_ANNOTATION_PROPS")(function(t) {
		                e.state.done && (e.updatePosition({
		                    index: t.index,
		                    pos: t.position
		                }), e.state.isShowCarousel && e.state.length > 0 && (e.state.isShowCarousel = !1, 0 === e.params.carousal ? document.querySelector(".carousel").style.display = "none" : document.querySelector(".carousel").style.display = "block"))
		            }), this.on("GET_MODEL_VIEWER_CURRENT_ANNOTATION")(function(t) {
		                e.renderCarousel(t), e.showDesc(t.index)
		            }), this.on("GET_PLAYCANVAS_SCENE_LOAD_STATE")(function(t) {
		                "done" === t.loadState && (e.getProductionAnnotations().then(function(t) {
		                    var n = {};
		                    for (var i in t.data) n[t.data[i].name] = u({}, t.data[i]);
		                    e.state.length = t.data.length, e.communicator.fire("SET_MODEL_ANNOTATIONS")(n), e.state.done = !0
		                }).catch (function(t) {
						    var n = t.response;
						    t.config;
						    403 === n.status && (window.location.href = e.url.individualCms)
						}), e.getVrOffsetData().then(function(t) {
						    e.communicator.fire("GET_VR_CAMERA_OFFSET_DATA")(t.data)
						}), e.communicator.fire("INIT_AUTO_ROTATE")({
						    isViewer: !0
						}))
		            }), this.on("GET_MODEL_ANNOTATIONS")(function(t) {
		                var n = Object.keys(t).length;
		                if (e.state.length == n) {
		                    var i = e.getTagState(t);
		                    e.renderTags(i)
		                }
		            }), this.on("GET_VR_IS_SUPPORTED")(function(e) {
		                e.isSupported ? document.querySelector(".vr_tips_box").style.display = "none" : (setTimeout(function() {
		                    document.querySelector(".vr_tips_box").style.display = "none"
		                }, 2e3), document.querySelector(".vr_tips_box").style.display = "block", console.log("不支持"))
		            }), this.on("GET_VR_INIT_DISPLAY")(function(t) {
		                t.vrEntered ? (document.querySelector(".carousel").style.display = "none", document.querySelector(".thumbtack").style.display = "none", document.querySelector(".btn-full").style.display = "none") : (e.state.length > 0 && (document.querySelector(".carousel").style.display = "block"), document.querySelector(".thumbtack").style.display = "block", document.querySelector(".btn-full").style.display = "block")
		            }), this.on("GET_ANIMATION_PROPS")(this.initAnimationController.bind(this)), this.on("GET_ANIMATION_PLAYING_STATUS")(this.onGetPlayingStatus.bind(this))
		        }
		    }, {
		        key: "initDom",
		        value: function() {
		            var e = this,
						t = document.querySelector(".container"),
						n = t.querySelector(".carousel");
		            n.querySelector(".btn-left").addEventListener("click", function() {
		                e.fire("UPDATE_CAMERA_VISUAL_ANGLE_FOR_ANNOTATIONS_STATE")({
		                    state: "previous"
		                })
		            }), n.querySelector(".btn-right").addEventListener("click", function() {
		                e.fire("UPDATE_CAMERA_VISUAL_ANGLE_FOR_ANNOTATIONS_STATE")({
		                    state: "next"
		                })
		            }), t.querySelector(".btn-full").addEventListener("click", function() {
		                e.handlerFullscreen()
		            }), t.querySelector(".btn-vr").addEventListener("click", function() {
		                e.fire("ENTER_VR_PRESSED_EVENT")()
		            }), (0, m.default)(document.querySelector(".thumbtack"), ".description", "click", function(e) {}), 0 === this.params.vr && (t.querySelector(".btn-vr").parentElement.style.display = "none"), 0 === this.params.fullscreen && (t.querySelector(".btn-full").parentElement.style.display = "none"), 0 === this.params.mode && (t.querySelector(".btn-mode").parentElement.style.display = "none"), (0, m.default)(document.querySelector(".thumbtack"), ".tag", "click", function(t) {
				    var n = parseInt(t.target.getAttribute("data-name")),
                        i = parseInt(t.target.innerHTML) - 1;
				    e.toggleTag(i, n)
				}, !1);
		            var i = document.querySelectorAll("#renderingList li");
		            i[0].className = "active";
		            for (var a = function(t) {
							i[t].onclick = function() {
								for (var n = 0; n < i.length; n++) i[n].className = "";
								i[t].className = "active", 0 === t ? e.fire("SET_MATERIAL_OPTION_LIT")() : 1 === t ? e.fire("SET_MATERIAL_OPTION_SHADELESS")() : 2 === t && e.fire("SET_MATERIAL_OPTION_MATCAP")()
		            }
		            }, r = 0; r < i.length; r++) a(r)
		        }
		    }, {
		        key: "toggleTag",
		        value: function(e, t) {
		            var n = this.getTipsDom(e, "des");
		            n && ("description show" == n.getAttribute("class") ? this.clearShow() : this.fire("UPDATE_CAMERA_VISUAL_ANGLE_FOR_ANNOTATIONS_STATE")({
		                state: "select",
		                name: t
		            }))
		        }
		    }, {
		        key: "showDesc",
		        value: function(e) {
		            this.clearShow();
		            var t = this.getTipsDom(e, "des"),
						n = this.getTipsDom(e, "tag");
		            t && t.setAttribute("class", "description show"), n && n.setAttribute("class", "tag show")
		        }
		    }, {
		        key: "clearShow",
		        value: function() {
		            for (var e = document.getElementsByClassName("tips"), t = 0; t < e.length; t++) e[t].getElementsByTagName("span")[0].setAttribute("class", "tag"), e[t].getElementsByTagName("div")[0].setAttribute("class", "description")
		        }
		    }, {
		        key: "initCanvas",
		        value: function() {
		            var e = document.getElementById("application-canvas");
		            setTimeout(function() {
		                e.height = window.innerHeight, e.width = window.innerWidth
		            }, 10), window.addEventListener("resize", function() {
		                document.querySelector(".canvas").style.height = window.innerHeight + "px", e.height = window.innerHeight, e.width = window.innerWidth
		            }, !1);
		            var t = new A.default;
		            t.createPcApp({
		                root: e,
		                name: "viewer",
		                configFile: this.getApi("productionConfig"),
		                sceneFile: this.getApi("productionScene")
		            }), this.communicator = t.communicator, this.fullscreenchange(e)
		        }
		    }, {
		        key: "updatePosition",
		        value: function(e) {
		            var t = e.index,
						n = e.pos,
						i = this.getTipsDom(t, "tag"),
						a = this.getTipsDom(t, "des");
		            i && (i.style.left = n[0] + "px", i.style.top = n[1] + "px"), a && (a.style.left = n[0] + "px", a.style.top = n[1] + "px")
		        }
		    }, {
		        key: "getTipsDom",
		        value: function(e, t) {
		            var n = document.getElementById("tips_" + e);
		            if (n) return "tag" === t ? n.getElementsByClassName("tag")[0] : "des" === t ? n.getElementsByClassName("description")[0] : n
		        }
		    }, {
		        key: "renderTags",
		        value: function(e) {
		            if (0 !== this.params.annotations) {
		                var t = "",
							n = document.querySelector(".thumbtack ul");
		                for (var i in e) t += this.tagItemTpl(e[i]);
		                document.querySelector(".thumbtack li") || (n.innerHTML = t)
		            }
		        }
		    }, {
		        key: "tagItemTpl",
		        value: function(e) {
		            var t = e.name,
						n = e.index,
						i = e.description,
						a = e.pos,
						r = e.title;
		            return '<li class="tips" id="tips_' + n + '">   <span class="tag" data-name="' + t + '" style="top: ' + a.top + "px; left: " + a.left + 'px;">' + (n + 1) + '</span>   <div class="description" style="top: ' + a.top + "px; left: " + a.left + 'px;">       <i></i>       <h3 class="title">' + r + '</h3>       <p class="content">' + i + "</p>   </div></li>"
		        }
		    }, {
		        key: "renderCarousel",
		        value: function(e) {
		            var t = e.title;
		            document.querySelector(".carousel-title p").innerHTML = t
		        }
		    }, {
		        key: "fullscreenchange",
		        value: function(e) {
		            ["webkit", "moz", "ms", "o", ""].forEach(function(t) {
		                var n = t + "fullscreenchange",
							i = "webkit" == t ? t + "IsFullScreen" : t + "FullScreen";
		                document.addEventListener(n, function(t) {
		                    document[i] ? (e.width = window.screen.width, e.height = window.screen.height, e.className = "") : (e.height = window.innerHeight, e.width = window.innerWidth, e.className = "viewer-canvas")
		                })
		            })
		        }
		    }, {
		        key: "handlerFullscreen",
		        value: function() {
		            var e = document.getElementById("app"),
						t = document.getElementById("fullBox");
		            if (this.isFullScreen) document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), this.isFullScreen = !1, t.innerHTML = '\n                <svg class="icon icon-full" aria-hidden="true">\n                    <use xlink:href="#icon-quanping"></use>\n                </svg>\n            ';
		            else {
		                var n, i = "RequestFullScreen";
		                ["webkit", "moz", "ms", "o", ""].forEach(function(t) {
		                    if (!n) {
		                        "" === t && (i = i.slice(0, 1).toLowerCase() + i.slice(1));
		                        var a = _(e[t + i]);
		                        a + "" != "undefined" && (n = "function" === a ? e[t + i]() : e[t + i])
		                    }
		                }), this.isFullScreen = !0, t.innerHTML = '\n                <svg class="icon icon-full" aria-hidden="true">\n                    <use xlink:href="#icon-suoxiao"></use>\n                </svg>\n            '
		            }
		        }
		    }, {
		        key: "progressCompleted",
		        value: function() {
		            var e = this;
		            0 === this.params.loading ? document.querySelector(".progress").style.display = "none" : document.querySelector(".progress").style.display = "block";
		            var t = 100,
						n = (this.params.loadingTime || 30) / 6;
		            this.timer = setInterval(function() {
		                e.state.done ? (clearInterval(e.timer), e.doneLoding()) : e.state.completed < 70 ? e.state.completed = e.state.completed + E.default.random(.5 / n, 2 / n):
		                e.state.completed < 99 && (e.state.completed = e.state.completed + E.default.random(.05 / n, .5 / n)), e.updateProgress(e.state.completed)
		            }, t)
		        }
		    }, {
		        key: "doneLoding",
		        value: function() {
		            this.state.completed = 100, this.updateProgress(this.state.completed), setTimeout(function() {
		                document.querySelector(".progress").style.display = "none"
		            }, 300)
		        }
		    }, {
		        key: "updateProgress",
		        value: function(e) {
		            document.querySelector(".progress-bar span").style.width = e + "%"
		        }
		    }, {
		        key: "formatCurrentTime",
		        value: function(e) {
		            var t = "00",
						n = "" + e,
						i = n.substring(0, n.indexOf(".")),
						a = n.substr(n.indexOf(".") + 1, 2);
		            return (t + i).substring(i.length) + ":" + (t + a).substring(a.length)
		        }
		    }, {
		        key: "initAnimationController",
		        value: function(e) {
		            this.state.animations = e.animations, this.state.currAnim = e.currAnim, this.state.currentTime = e.currentTime, this.state.playing = e.playing, this.state.enabled = e.enabled, this.state.activated = e.activated, this.state.loop = e.loop, this.state.speed = e.speed;
		            var t = document.getElementById("animation-controller");
		            this.state.enabled && (t.style.display = "block"), 0 === this.params.animation_controller && (t.style.display = "none"), t.addEventListener("mousemove", this.stopPropagation);
		            var n = document.getElementById("slider"),
						i = document.getElementById("slider-formatter");
		            this.state.slider = n, this.state.sliderFormatter = i, n.max = this.state.animations[this.state.currAnim] && this.state.animations[this.state.currAnim].duration, n.addEventListener("input", this.onDragCurrentTimeStart.bind(this)), n.addEventListener("change", this.onDragCurrentTimeEnd.bind(this));
		            var a = document.getElementById("animations-list");
		            a.innerHTML = this.initAnimationsList(E.default.pairs(e.animations)), a.addEventListener("click", this.onSwitchAnimation.bind(this)), this.state.animationsListContainer = a;
		            var r = document.getElementById("current-animation");
		            r.innerHTML = this.state.currAnim, r.addEventListener("click", this.onOpenAnimationsList.bind(this)), this.state.currentAnimation = r;
		            var o = document.getElementById("btn-playing"),
						s = o.getElementById("path");
		            s.setAttribute("d", this.state.playing ? this.state.icons.pause : this.state.icons.play), o.addEventListener("click", this.onTogglePlaying.bind(this)), this.state.btnPlaying = o, this.state.btnPlayingPath = s
		        }
		    }, {
		        key: "initAnimationsList",
		        value: function(e) {
		            return e.map(function(e) {
		                return '<li class="item">' + e[0] + "</li>"
		            }).join("")
		        }
		    }, {
		        key: "stopPropagation",
		        value: function(e) {
		            e.stopPropagation()
		        }
		    }, {
		        key: "onDragCurrentTimeStart",
		        value: function(e) {
		            var t = Number(e.target.value);
		            this.fire("SET_ANIMATION_PLAYING")({
		                playing: !1
		            }), this.fire("SET_ANIMATION_CURRENT_TIME")({
		                currentTime: t
		            })
		        }
		    }, {
		        key: "onDragCurrentTimeEnd",
		        value: function(e) {
		            var t = Number(e.target.value);
		            this.fire("SET_ANIMATION_PLAYING")({
		                playing: this.state.playing
		            }), this.fire("SET_ANIMATION_CURRENT_TIME")({
		                currentTime: t
		            })
		        }
		    }, {
		        key: "onGetPlayingStatus",
		        value: function(e) {
		            this.state.slider.value = e.currentTime, this.state.sliderFormatter.innerHTML = this.formatCurrentTime(e.currentTime)
		        }
		    }, {
		        key: "onSwitchAnimation",
		        value: function(e) {
		            if (e.target && "LI" === e.target.nodeName.toUpperCase()) {
		                var t = e.target,
							n = t.innerHTML,
							i = this.state.animations[n].duration;
		                this.fire("SET_ANIMATION_CURR_ANIM")({
		                    currAnim: n
		                }), this.state.slider.max = i, this.state.currentAnimation.innerHTML = n, this.onCloseAnimationsList()
		            }
		        }
		    }, {
		        key: "onTogglePlaying",
		        value: function() {
		            this.state.playing = !this.state.playing, this.state.btnPlayingPath.setAttribute("d", this.state.playing ? this.state.icons.pause : this.state.icons.play), this.fire("SET_ANIMATION_PLAYING")({
		                playing: this.state.playing,
		                currAnim: this.state.currAnim || Object.keys(this.state.animations)[0]
		            })
		        }
		    }, {
		        key: "onOpenAnimationsList",
		        value: function() {
		            this.state.animationsListContainer.style.display = "block"
		        }
		    }, {
		        key: "onCloseAnimationsList",
		        value: function() {
		            this.state.animationsListContainer.style.display = "none"
		        }
		    }]), t
		}(c.default);
	    new S
	}, {
	    "../../../canvas/index": 11,
	    "../../../core/config": 13,
	    "../../../core/url": 14,
	    "./api": 15,
	    delegate: 18,
	    underscore: "underscore"
	}],
	17: [function(e, t, n) {
	    function i(e, t) {
	        for (; e && e.nodeType !== a;) {
	            if (e.matches(t)) return e;
	            e = e.parentNode
	        }
	    }
	    var a = 9;
	    if (Element && !Element.prototype.matches) {
	        var r = Element.prototype;
	        r.matches = r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector
	    }
	    t.exports = i
	}, {}],
	18: [function(e, t, n) {
	    function i(e, t, n, i, r) {
	        var o = a.apply(this, arguments);
	        return e.addEventListener(n, o, r), {
	            destroy: function() {
	                e.removeEventListener(n, o, r)
	            }
	        }
	    }
	    function a(e, t, n, i) {
	        return function(n) {
	            n.delegateTarget = r(n.target, t), n.delegateTarget && i.call(e, n)
	        }
	    }
	    var r = e("./closest");
	    t.exports = i
	}, {
	    "./closest": 17
	}]
}, {}, [16]);