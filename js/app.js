! function t(e, i, n) {
    function s(o, a) {
        if (!i[o]) {
            if (!e[o]) {
                var c = "function" == typeof require && require;
                if (!a && c) return c(o, !0);
                if (r) return r(o, !0);
                var u = new Error("Cannot find module '" + o + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = i[o] = {
                exports: {}
            };
            e[o][0].call(l.exports, function(t) {
                var i = e[o][1][t];
                return s(i ? i : t)
            }, l, l.exports, t, e, i, n)
        }
        return i[o].exports
    }
    for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) s(n[o]);
    return s
}({
    1: [function(t, e, i) {
        var n = t("hammerjs");
        t("./screenshots"), t("./nonbounce"), $(function() {
            $.nonbounce(), $("#toggler").on("click", function() {
                $("body").toggleClass("open-nav")
            }), $("#modal-screenshots").on("show.bs.modal", function(t) {
                setTimeout(function() {
                    $("body").removeClass("open-nav")
                }, 400)
            });
            var t = $("#carousel");
            n(t[0]).on("swipeleft tap", function() {
                t.carousel("next")
            }), n(t[0]).on("swiperight", function() {
                t.carousel("prev")
            });
            var e = $("#form");
            e.submit(function(t) {
                if (t.preventDefault(), !e.find('[name="email"]').val().length) return e.find(".form__help-text").css("color", "red"), !1;
                var i = e.serialize();
                e.html("<h3 class='form__msg'>Thanks for signing up!</h3>"), $.ajax({
                    url: "./ajax.php",
                    method: "POST",
                    data: i
                }).done(function(t) {
                    ga("set", "page", "/signup_success"), ga("send", "pageview"), console.log(t)
                })
            })
        })
    }, {
        "./nonbounce": 2,
        "./screenshots": 3,
        hammerjs: 4
    }],
    2: [function(t, e, i) {
        ! function(t) {
            "use strict";
            var e = {
                $these: [],
                touchstartInit: !1,
                touchmoveInit: !1
            };
            t(".nonbounce").each(function() {
                e.$these.push(t(this))
            });
            t.fn.nonbounce = function() {
                return this.each(function() {
                    e.$these.push(t(this))
                })
            }, t.nonbounce = function() {}
        }(jQuery)
    }, {}],
    3: [function(t, e, i) {
        function n(t) {
            t.preventDefault();
            var e = h.find(".item-1"),
                i = h.find(".item-2"),
                n = h.find(".item-3"),
                s = h.find(".item-4"),
                r = h.find(".item-5"),
                o = h.find(".item-6"),
                a = h.find(".active"),
                c = h.find(".item-8"),
                u = h.find(".item-9"),
                l = h.find(".item-10");
            l.css({
                opacity: "0",
                "z-index": "-1"
            }).removeClass("item-10").addClass("item-1"), u.removeClass("item-9").addClass("item-10"), c.removeClass("item-8").addClass("item-9"), a.removeClass("active").addClass("item-8"), o.removeClass("item-6").addClass("active"), r.removeClass("item-5").addClass("item-6"), s.removeClass("item-4").addClass("item-5"), n.removeClass("item-3").addClass("item-4"), i.removeClass("item-2").addClass("item-3"), e.removeClass("item-1").addClass("item-2"), setTimeout(function() {
                l.css({
                    "z-index": "1",
                    opacity: "0.5"
                })
            }, 400)
        }

        function s(t) {
            t.preventDefault();
            var e = c.find(".item-1"),
                i = c.find(".item-2"),
                n = c.find(".item-3"),
                s = c.find(".item-4"),
                r = c.find(".item-5"),
                o = c.find(".item-6"),
                a = c.find(".active"),
                u = c.find(".item-8"),
                l = c.find(".item-9"),
                h = c.find(".item-10"),
                p = c.find(".item-11"),
                d = c.find(".item-12"),
                f = c.find(".item-13");
            f.removeClass("item-13").addClass("item-12"), d.removeClass("item-12").addClass("item-11"), p.removeClass("item-11").addClass("item-10"), h.removeClass("item-10").addClass("item-9"), l.removeClass("item-9").addClass("item-8"), u.removeClass("item-8").addClass("active"), a.removeClass("active").addClass("item-6"), o.removeClass("item-6").addClass("item-5"), r.removeClass("item-5").addClass("item-4"), s.removeClass("item-4").addClass("item-3"), n.removeClass("item-3").addClass("item-2"), i.removeClass("item-2").addClass("item-1"), e.css({
                opacity: "0",
                "z-index": "-1"
            }).removeClass("item-1").addClass("item-13"), setTimeout(function() {
                e.css({
                    "z-index": "1",
                    opacity: "0.5"
                })
            }, 400)
        }

        function r(t) {
            t.preventDefault();
            var e = h.find(".item-1"),
                i = h.find(".item-2"),
                n = h.find(".item-3"),
                s = h.find(".item-4"),
                r = h.find(".item-5"),
                o = h.find(".item-6"),
                a = h.find(".active"),
                c = h.find(".item-8"),
                u = h.find(".item-9"),
                l = h.find(".item-10");
            l.removeClass("item-10").addClass("item-9"), u.removeClass("item-9").addClass("item-8"), c.removeClass("item-8").addClass("active"), a.removeClass("active").addClass("item-6"), o.removeClass("item-6").addClass("item-5"), r.removeClass("item-5").addClass("item-4"), s.removeClass("item-4").addClass("item-3"), n.removeClass("item-3").addClass("item-2"), i.removeClass("item-2").addClass("item-1"), e.css({
                opacity: "0",
                "z-index": "-1"
            }).removeClass("item-1").addClass("item-10"), setTimeout(function() {
                e.css({
                    "z-index": "1",
                    opacity: "0.5"
                })
            }, 400)
        }

        function o(t) {
            t.preventDefault();
            var e = c.find(".item-1"),
                i = c.find(".item-2"),
                n = c.find(".item-3"),
                s = c.find(".item-4"),
                r = c.find(".item-5"),
                o = c.find(".item-6"),
                a = c.find(".active"),
                u = c.find(".item-8"),
                l = c.find(".item-9"),
                h = c.find(".item-10"),
                p = c.find(".item-11"),
                d = c.find(".item-12"),
                f = c.find(".item-13");
            f.css({
                opacity: "0",
                "z-index": "-1"
            }).removeClass("item-13").addClass("item-1"), d.removeClass("item-12").addClass("item-13"), p.removeClass("item-11").addClass("item-12"), h.removeClass("item-10").addClass("item-11"), l.removeClass("item-9").addClass("item-10"), u.removeClass("item-8").addClass("item-9"), a.removeClass("active").addClass("item-8"), o.removeClass("item-6").addClass("active"), r.removeClass("item-5").addClass("item-6"), s.removeClass("item-4").addClass("item-5"), n.removeClass("item-3").addClass("item-4"), i.removeClass("item-2").addClass("item-3"), e.removeClass("item-1").addClass("item-2"), setTimeout(function() {
                f.css({
                    "z-index": "1",
                    opacity: "0.5"
                })
            }, 400)
        }
        var a = t("hammerjs"),
            c = $(".screenshots__carousel").filter(".screenshots__carousel--android"),
            u = c.find(".arrow--prev"),
            l = c.find(".arrow--next");
        a(c.filter(".screenshots__carousel--android")[0]).on("swipeleft", s), a(c.filter(".screenshots__carousel--android")[0]).on("swiperight", o), u.on("click", o), l.on("click", s);
        var h = $(".screenshots__carousel").filter(".screenshots__carousel--apple"),
            p = h.find(".arrow--prev"),
            d = h.find(".arrow--next");
        a(h.filter(".screenshots__carousel--apple")[0]).on("swipeleft", r), a(h.filter(".screenshots__carousel--apple")[0]).on("swiperight", n), p.on("click", n), d.on("click", r), $(".screenshots__toggler").on("click", function() {
            ga("set", "page", "/screenshots"), ga("send", "pageview");
            var t = $(this).find(".active"),
                e = $(".screenshots__carousel--android"),
                i = $(".screenshots__carousel--apple");
            t.hasClass("active--apple") && !t.is(":animated") ? i.fadeOut(0, function() {
                ga("set", "page", "/screenshots/android"), ga("send", "pageview"), e.fadeIn()
            }) : e.fadeOut(0, function() {
                ga("set", "page", "/screenshots/apple"), ga("send", "pageview"), i.fadeIn()
            }), t.toggleClass("active--apple")
        })
    }, {
        hammerjs: 4
    }],
    4: [function(t, e, i) {
        ! function(t, i, n, s) {
            "use strict";

            function r(t, e, i) {
                return setTimeout(l(t, i), e)
            }

            function o(t, e, i) {
                return !!Array.isArray(t) && (a(t, i[e], i), !0)
            }

            function a(t, e, i) {
                var n;
                if (t)
                    if (t.forEach) t.forEach(e, i);
                    else if (t.length !== s)
                    for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                else
                    for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
            }

            function c(e, i, n) {
                var s = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
                return function() {
                    var i = new Error("get-stack-trace"),
                        n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                        r = t.console && (t.console.warn || t.console.log);
                    return r && r.call(t.console, s, n), e.apply(this, arguments)
                }
            }

            function u(t, e, i) {
                var n, s = e.prototype;
                n = t.prototype = Object.create(s), n.constructor = t, n._super = s, i && pt(n, i)
            }

            function l(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }

            function h(t, e) {
                return typeof t == mt ? t.apply(e ? e[0] || s : s, e) : t
            }

            function p(t, e) {
                return t === s ? e : t
            }

            function d(t, e, i) {
                a(g(e), function(e) {
                    t.addEventListener(e, i, !1)
                })
            }

            function f(t, e, i) {
                a(g(e), function(e) {
                    t.removeEventListener(e, i, !1)
                })
            }

            function m(t, e) {
                for (; t;) {
                    if (t == e) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function v(t, e) {
                return t.indexOf(e) > -1
            }

            function g(t) {
                return t.trim().split(/\s+/g)
            }

            function C(t, e, i) {
                if (t.indexOf && !i) return t.indexOf(e);
                for (var n = 0; n < t.length;) {
                    if (i && t[n][i] == e || !i && t[n] === e) return n;
                    n++
                }
                return -1
            }

            function y(t) {
                return Array.prototype.slice.call(t, 0)
            }

            function T(t, e, i) {
                for (var n = [], s = [], r = 0; r < t.length;) {
                    var o = e ? t[r][e] : t[r];
                    C(s, o) < 0 && n.push(t[r]), s[r] = o, r++
                }
                return i && (n = e ? n.sort(function(t, i) {
                    return t[e] > i[e]
                }) : n.sort()), n
            }

            function E(t, e) {
                for (var i, n, r = e[0].toUpperCase() + e.slice(1), o = 0; o < dt.length;) {
                    if (i = dt[o], n = i ? i + r : e, n in t) return n;
                    o++
                }
                return s
            }

            function _() {
                return Et++
            }

            function x(e) {
                var i = e.ownerDocument || e;
                return i.defaultView || i.parentWindow || t
            }

            function I(t, e) {
                var i = this;
                this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                    h(t.options.enable, [t]) && i.handler(e)
                }, this.init()
            }

            function w(t) {
                var e, i = t.options.inputClass;
                return new(e = i ? i : It ? F : wt ? W : xt ? L : k)(t, b)
            }

            function b(t, e, i) {
                var n = i.pointers.length,
                    s = i.changedPointers.length,
                    r = e & zt && n - s === 0,
                    o = e & (Mt | Rt) && n - s === 0;
                i.isFirst = !!r, i.isFinal = !!o, r && (t.session = {}), i.eventType = e, A(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
            }

            function A(t, e) {
                var i = t.session,
                    n = e.pointers,
                    s = n.length;
                i.firstInput || (i.firstInput = P(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = P(e) : 1 === s && (i.firstMultiple = !1);
                var r = i.firstInput,
                    o = i.firstMultiple,
                    a = o ? o.center : r.center,
                    c = e.center = z(n);
                e.timeStamp = Ct(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = N(a, c), e.distance = R(a, c), D(i, e), e.offsetDirection = M(e.deltaX, e.deltaY);
                var u = O(e.deltaTime, e.deltaX, e.deltaY);
                e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = gt(u.x) > gt(u.y) ? u.x : u.y, e.scale = o ? Y(o.pointers, n) : 1, e.rotation = o ? X(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length, S(i, e);
                var l = t.element;
                m(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
            }

            function D(t, e) {
                var i = e.center,
                    n = t.offsetDelta || {},
                    s = t.prevDelta || {},
                    r = t.prevInput || {};
                e.eventType !== zt && r.eventType !== Mt || (s = t.prevDelta = {
                    x: r.deltaX || 0,
                    y: r.deltaY || 0
                }, n = t.offsetDelta = {
                    x: i.x,
                    y: i.y
                }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
            }

            function S(t, e) {
                var i, n, r, o, a = t.lastInterval || e,
                    c = e.timeStamp - a.timeStamp;
                if (e.eventType != Rt && (c > Pt || a.velocity === s)) {
                    var u = e.deltaX - a.deltaX,
                        l = e.deltaY - a.deltaY,
                        h = O(c, u, l);
                    n = h.x, r = h.y, i = gt(h.x) > gt(h.y) ? h.x : h.y, o = M(u, l), t.lastInterval = e
                } else i = a.velocity, n = a.velocityX, r = a.velocityY, o = a.direction;
                e.velocity = i, e.velocityX = n, e.velocityY = r, e.direction = o
            }

            function P(t) {
                for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                    clientX: vt(t.pointers[i].clientX),
                    clientY: vt(t.pointers[i].clientY)
                }, i++;
                return {
                    timeStamp: Ct(),
                    pointers: e,
                    center: z(e),
                    deltaX: t.deltaX,
                    deltaY: t.deltaY
                }
            }

            function z(t) {
                var e = t.length;
                if (1 === e) return {
                    x: vt(t[0].clientX),
                    y: vt(t[0].clientY)
                };
                for (var i = 0, n = 0, s = 0; s < e;) i += t[s].clientX, n += t[s].clientY, s++;
                return {
                    x: vt(i / e),
                    y: vt(n / e)
                }
            }

            function O(t, e, i) {
                return {
                    x: e / t || 0,
                    y: i / t || 0
                }
            }

            function M(t, e) {
                return t === e ? Nt : gt(t) >= gt(e) ? t < 0 ? Xt : Yt : e < 0 ? kt : Ft
            }

            function R(t, e, i) {
                i || (i = jt);
                var n = e[i[0]] - t[i[0]],
                    s = e[i[1]] - t[i[1]];
                return Math.sqrt(n * n + s * s)
            }

            function N(t, e, i) {
                i || (i = jt);
                var n = e[i[0]] - t[i[0]],
                    s = e[i[1]] - t[i[1]];
                return 180 * Math.atan2(s, n) / Math.PI
            }

            function X(t, e) {
                return N(e[1], e[0], Lt) + N(t[1], t[0], Lt)
            }

            function Y(t, e) {
                return R(e[0], e[1], Lt) / R(t[0], t[1], Lt)
            }

            function k() {
                this.evEl = Ut, this.evWin = Vt, this.pressed = !1, I.apply(this, arguments)
            }

            function F() {
                this.evEl = Bt, this.evWin = Qt, I.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
            }

            function q() {
                this.evTarget = Kt, this.evWin = te, this.started = !1, I.apply(this, arguments)
            }

            function $(t, e) {
                var i = y(t.touches),
                    n = y(t.changedTouches);
                return e & (Mt | Rt) && (i = T(i.concat(n), "identifier", !0)), [i, n]
            }

            function W() {
                this.evTarget = ie, this.targetIds = {}, I.apply(this, arguments)
            }

            function j(t, e) {
                var i = y(t.touches),
                    n = this.targetIds;
                if (e & (zt | Ot) && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                var s, r, o = y(t.changedTouches),
                    a = [],
                    c = this.target;
                if (r = i.filter(function(t) {
                        return m(t.target, c)
                    }), e === zt)
                    for (s = 0; s < r.length;) n[r[s].identifier] = !0, s++;
                for (s = 0; s < o.length;) n[o[s].identifier] && a.push(o[s]), e & (Mt | Rt) && delete n[o[s].identifier], s++;
                return a.length ? [T(r.concat(a), "identifier", !0), a] : void 0
            }

            function L() {
                I.apply(this, arguments);
                var t = l(this.handler, this);
                this.touch = new W(this.manager, t), this.mouse = new k(this.manager, t), this.primaryTouch = null, this.lastTouches = []
            }

            function H(t, e) {
                t & zt ? (this.primaryTouch = e.changedPointers[0].identifier, U.call(this, e)) : t & (Mt | Rt) && U.call(this, e)
            }

            function U(t) {
                var e = t.changedPointers[0];
                if (e.identifier === this.primaryTouch) {
                    var i = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    this.lastTouches.push(i);
                    var n = this.lastTouches,
                        s = function() {
                            var t = n.indexOf(i);
                            t > -1 && n.splice(t, 1)
                        };
                    setTimeout(s, ne)
                }
            }

            function V(t) {
                for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                    var s = this.lastTouches[n],
                        r = Math.abs(e - s.x),
                        o = Math.abs(i - s.y);
                    if (r <= se && o <= se) return !0
                }
                return !1
            }

            function G(t, e) {
                this.manager = t, this.set(e)
            }

            function Z(t) {
                if (v(t, le)) return le;
                var e = v(t, he),
                    i = v(t, pe);
                return e && i ? le : e || i ? e ? he : pe : v(t, ue) ? ue : ce
            }

            function B() {
                if (!oe) return !1;
                var e = {},
                    i = t.CSS && t.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
                    e[n] = !i || t.CSS.supports("touch-action", n)
                }), e
            }

            function Q(t) {
                this.options = pt({}, this.defaults, t || {}), this.id = _(), this.manager = null, this.options.enable = p(this.options.enable, !0), this.state = fe, this.simultaneous = {}, this.requireFail = []
            }

            function J(t) {
                return t & ye ? "cancel" : t & ge ? "end" : t & ve ? "move" : t & me ? "start" : ""
            }

            function K(t) {
                return t == Ft ? "down" : t == kt ? "up" : t == Xt ? "left" : t == Yt ? "right" : ""
            }

            function tt(t, e) {
                var i = e.manager;
                return i ? i.get(t) : t
            }

            function et() {
                Q.apply(this, arguments)
            }

            function it() {
                et.apply(this, arguments), this.pX = null, this.pY = null
            }

            function nt() {
                et.apply(this, arguments)
            }

            function st() {
                Q.apply(this, arguments), this._timer = null, this._input = null
            }

            function rt() {
                et.apply(this, arguments)
            }

            function ot() {
                et.apply(this, arguments)
            }

            function at() {
                Q.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
            }

            function ct(t, e) {
                return e = e || {}, e.recognizers = p(e.recognizers, ct.defaults.preset), new ut(t, e)
            }

            function ut(t, e) {
                this.options = pt({}, ct.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = w(this), this.touchAction = new G(this, this.options.touchAction), lt(this, !0), a(this.options.recognizers, function(t) {
                    var e = this.add(new t[0](t[1]));
                    t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                }, this)
            }

            function lt(t, e) {
                var i = t.element;
                if (i.style) {
                    var n;
                    a(t.options.cssProps, function(s, r) {
                        n = E(i.style, r), e ? (t.oldCssProps[n] = i.style[n], i.style[n] = s) : i.style[n] = t.oldCssProps[n] || ""
                    }), e || (t.oldCssProps = {})
                }
            }

            function ht(t, e) {
                var n = i.createEvent("Event");
                n.initEvent(t, !0, !0), n.gesture = e, e.target.dispatchEvent(n)
            }
            var pt, dt = ["", "webkit", "Moz", "MS", "ms", "o"],
                ft = i.createElement("div"),
                mt = "function",
                vt = Math.round,
                gt = Math.abs,
                Ct = Date.now;
            pt = "function" != typeof Object.assign ? function(t) {
                if (t === s || null === t) throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                    var n = arguments[i];
                    if (n !== s && null !== n)
                        for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
                }
                return e
            } : Object.assign;
            var yt = c(function(t, e, i) {
                    for (var n = Object.keys(e), r = 0; r < n.length;)(!i || i && t[n[r]] === s) && (t[n[r]] = e[n[r]]), r++;
                    return t
                }, "extend", "Use `assign`."),
                Tt = c(function(t, e) {
                    return yt(t, e, !0)
                }, "merge", "Use `assign`."),
                Et = 1,
                _t = /mobile|tablet|ip(ad|hone|od)|android/i,
                xt = "ontouchstart" in t,
                It = E(t, "PointerEvent") !== s,
                wt = xt && _t.test(navigator.userAgent),
                bt = "touch",
                At = "pen",
                Dt = "mouse",
                St = "kinect",
                Pt = 25,
                zt = 1,
                Ot = 2,
                Mt = 4,
                Rt = 8,
                Nt = 1,
                Xt = 2,
                Yt = 4,
                kt = 8,
                Ft = 16,
                qt = Xt | Yt,
                $t = kt | Ft,
                Wt = qt | $t,
                jt = ["x", "y"],
                Lt = ["clientX", "clientY"];
            I.prototype = {
                handler: function() {},
                init: function() {
                    this.evEl && d(this.element, this.evEl, this.domHandler), this.evTarget && d(this.target, this.evTarget, this.domHandler), this.evWin && d(x(this.element), this.evWin, this.domHandler)
                },
                destroy: function() {
                    this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(x(this.element), this.evWin, this.domHandler)
                }
            };
            var Ht = {
                    mousedown: zt,
                    mousemove: Ot,
                    mouseup: Mt
                },
                Ut = "mousedown",
                Vt = "mousemove mouseup";
            u(k, I, {
                handler: function(t) {
                    var e = Ht[t.type];
                    e & zt && 0 === t.button && (this.pressed = !0), e & Ot && 1 !== t.which && (e = Mt), this.pressed && (e & Mt && (this.pressed = !1), this.callback(this.manager, e, {
                        pointers: [t],
                        changedPointers: [t],
                        pointerType: Dt,
                        srcEvent: t
                    }))
                }
            });
            var Gt = {
                    pointerdown: zt,
                    pointermove: Ot,
                    pointerup: Mt,
                    pointercancel: Rt,
                    pointerout: Rt
                },
                Zt = {
                    2: bt,
                    3: At,
                    4: Dt,
                    5: St
                },
                Bt = "pointerdown",
                Qt = "pointermove pointerup pointercancel";
            t.MSPointerEvent && !t.PointerEvent && (Bt = "MSPointerDown", Qt = "MSPointerMove MSPointerUp MSPointerCancel"), u(F, I, {
                handler: function(t) {
                    var e = this.store,
                        i = !1,
                        n = t.type.toLowerCase().replace("ms", ""),
                        s = Gt[n],
                        r = Zt[t.pointerType] || t.pointerType,
                        o = r == bt,
                        a = C(e, t.pointerId, "pointerId");
                    s & zt && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : s & (Mt | Rt) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, s, {
                        pointers: e,
                        changedPointers: [t],
                        pointerType: r,
                        srcEvent: t
                    }), i && e.splice(a, 1))
                }
            });
            var Jt = {
                    touchstart: zt,
                    touchmove: Ot,
                    touchend: Mt,
                    touchcancel: Rt
                },
                Kt = "touchstart",
                te = "touchstart touchmove touchend touchcancel";
            u(q, I, {
                handler: function(t) {
                    var e = Jt[t.type];
                    if (e === zt && (this.started = !0), this.started) {
                        var i = $.call(this, t, e);
                        e & (Mt | Rt) && i[0].length - i[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: bt,
                            srcEvent: t
                        })
                    }
                }
            });
            var ee = {
                    touchstart: zt,
                    touchmove: Ot,
                    touchend: Mt,
                    touchcancel: Rt
                },
                ie = "touchstart touchmove touchend touchcancel";
            u(W, I, {
                handler: function(t) {
                    var e = ee[t.type],
                        i = j.call(this, t, e);
                    i && this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: bt,
                        srcEvent: t
                    })
                }
            });
            var ne = 2500,
                se = 25;
            u(L, I, {
                handler: function(t, e, i) {
                    var n = i.pointerType == bt,
                        s = i.pointerType == Dt;
                    if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                        if (n) H.call(this, e, i);
                        else if (s && V.call(this, i)) return;
                        this.callback(t, e, i)
                    }
                },
                destroy: function() {
                    this.touch.destroy(), this.mouse.destroy()
                }
            });
            var re = E(ft.style, "touchAction"),
                oe = re !== s,
                ae = "compute",
                ce = "auto",
                ue = "manipulation",
                le = "none",
                he = "pan-x",
                pe = "pan-y",
                de = B();
            G.prototype = {
                set: function(t) {
                    t == ae && (t = this.compute()), oe && this.manager.element.style && de[t] && (this.manager.element.style[re] = t), this.actions = t.toLowerCase().trim()
                },
                update: function() {
                    this.set(this.manager.options.touchAction)
                },
                compute: function() {
                    var t = [];
                    return a(this.manager.recognizers, function(e) {
                        h(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                    }), Z(t.join(" "))
                },
                preventDefaults: function(t) {
                    var e = t.srcEvent,
                        i = t.offsetDirection;
                    if (this.manager.session.prevented) return void e.preventDefault();
                    var n = this.actions,
                        s = v(n, le) && !de[le],
                        r = v(n, pe) && !de[pe],
                        o = v(n, he) && !de[he];
                    if (s) {
                        var a = 1 === t.pointers.length,
                            c = t.distance < 2,
                            u = t.deltaTime < 250;
                        if (a && c && u) return
                    }
                    return o && r ? void 0 : s || r && i & qt || o && i & $t ? this.preventSrc(e) : void 0
                },
                preventSrc: function(t) {
                    this.manager.session.prevented = !0, t.preventDefault()
                }
            };
            var fe = 1,
                me = 2,
                ve = 4,
                ge = 8,
                Ce = ge,
                ye = 16,
                Te = 32;
            Q.prototype = {
                defaults: {},
                set: function(t) {
                    return pt(this.options, t), this.manager && this.manager.touchAction.update(), this
                },
                recognizeWith: function(t) {
                    if (o(t, "recognizeWith", this)) return this;
                    var e = this.simultaneous;
                    return t = tt(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
                },
                dropRecognizeWith: function(t) {
                    return o(t, "dropRecognizeWith", this) ? this : (t = tt(t, this), delete this.simultaneous[t.id], this)
                },
                requireFailure: function(t) {
                    if (o(t, "requireFailure", this)) return this;
                    var e = this.requireFail;
                    return t = tt(t, this), C(e, t) === -1 && (e.push(t), t.requireFailure(this)), this
                },
                dropRequireFailure: function(t) {
                    if (o(t, "dropRequireFailure", this)) return this;
                    t = tt(t, this);
                    var e = C(this.requireFail, t);
                    return e > -1 && this.requireFail.splice(e, 1), this
                },
                hasRequireFailures: function() {
                    return this.requireFail.length > 0
                },
                canRecognizeWith: function(t) {
                    return !!this.simultaneous[t.id]
                },
                emit: function(t) {
                    function e(e) {
                        i.manager.emit(e, t)
                    }
                    var i = this,
                        n = this.state;
                    n < ge && e(i.options.event + J(n)), e(i.options.event), t.additionalEvent && e(t.additionalEvent), n >= ge && e(i.options.event + J(n))
                },
                tryEmit: function(t) {
                    return this.canEmit() ? this.emit(t) : void(this.state = Te)
                },
                canEmit: function() {
                    for (var t = 0; t < this.requireFail.length;) {
                        if (!(this.requireFail[t].state & (Te | fe))) return !1;
                        t++
                    }
                    return !0
                },
                recognize: function(t) {
                    var e = pt({}, t);
                    return h(this.options.enable, [this, e]) ? (this.state & (Ce | ye | Te) && (this.state = fe), this.state = this.process(e), void(this.state & (me | ve | ge | ye) && this.tryEmit(e))) : (this.reset(), void(this.state = Te))
                },
                process: function(t) {},
                getTouchAction: function() {},
                reset: function() {}
            }, u(et, Q, {
                defaults: {
                    pointers: 1
                },
                attrTest: function(t) {
                    var e = this.options.pointers;
                    return 0 === e || t.pointers.length === e
                },
                process: function(t) {
                    var e = this.state,
                        i = t.eventType,
                        n = e & (me | ve),
                        s = this.attrTest(t);
                    return n && (i & Rt || !s) ? e | ye : n || s ? i & Mt ? e | ge : e & me ? e | ve : me : Te
                }
            }), u(it, et, {
                defaults: {
                    event: "pan",
                    threshold: 10,
                    pointers: 1,
                    direction: Wt
                },
                getTouchAction: function() {
                    var t = this.options.direction,
                        e = [];
                    return t & qt && e.push(pe), t & $t && e.push(he), e
                },
                directionTest: function(t) {
                    var e = this.options,
                        i = !0,
                        n = t.distance,
                        s = t.direction,
                        r = t.deltaX,
                        o = t.deltaY;
                    return s & e.direction || (e.direction & qt ? (s = 0 === r ? Nt : r < 0 ? Xt : Yt, i = r != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === o ? Nt : o < 0 ? kt : Ft, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
                },
                attrTest: function(t) {
                    return et.prototype.attrTest.call(this, t) && (this.state & me || !(this.state & me) && this.directionTest(t))
                },
                emit: function(t) {
                    this.pX = t.deltaX, this.pY = t.deltaY;
                    var e = K(t.direction);
                    e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                }
            }), u(nt, et, {
                defaults: {
                    event: "pinch",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [le]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & me)
                },
                emit: function(t) {
                    if (1 !== t.scale) {
                        var e = t.scale < 1 ? "in" : "out";
                        t.additionalEvent = this.options.event + e
                    }
                    this._super.emit.call(this, t)
                }
            }), u(st, Q, {
                defaults: {
                    event: "press",
                    pointers: 1,
                    time: 251,
                    threshold: 9
                },
                getTouchAction: function() {
                    return [ce]
                },
                process: function(t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        s = t.deltaTime > e.time;
                    if (this._input = t, !n || !i || t.eventType & (Mt | Rt) && !s) this.reset();
                    else if (t.eventType & zt) this.reset(), this._timer = r(function() {
                        this.state = Ce, this.tryEmit()
                    }, e.time, this);
                    else if (t.eventType & Mt) return Ce;
                    return Te
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function(t) {
                    this.state === Ce && (t && t.eventType & Mt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = Ct(), this.manager.emit(this.options.event, this._input)))
                }
            }), u(rt, et, {
                defaults: {
                    event: "rotate",
                    threshold: 0,
                    pointers: 2
                },
                getTouchAction: function() {
                    return [le]
                },
                attrTest: function(t) {
                    return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & me)
                }
            }), u(ot, et, {
                defaults: {
                    event: "swipe",
                    threshold: 10,
                    velocity: .3,
                    direction: qt | $t,
                    pointers: 1
                },
                getTouchAction: function() {
                    return it.prototype.getTouchAction.call(this)
                },
                attrTest: function(t) {
                    var e, i = this.options.direction;
                    return i & (qt | $t) ? e = t.overallVelocity : i & qt ? e = t.overallVelocityX : i & $t && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && gt(e) > this.options.velocity && t.eventType & Mt
                },
                emit: function(t) {
                    var e = K(t.offsetDirection);
                    e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                }
            }), u(at, Q, {
                defaults: {
                    event: "tap",
                    pointers: 1,
                    taps: 1,
                    interval: 300,
                    time: 250,
                    threshold: 9,
                    posThreshold: 10
                },
                getTouchAction: function() {
                    return [ue]
                },
                process: function(t) {
                    var e = this.options,
                        i = t.pointers.length === e.pointers,
                        n = t.distance < e.threshold,
                        s = t.deltaTime < e.time;
                    if (this.reset(), t.eventType & zt && 0 === this.count) return this.failTimeout();
                    if (n && s && i) {
                        if (t.eventType != Mt) return this.failTimeout();
                        var o = !this.pTime || t.timeStamp - this.pTime < e.interval,
                            a = !this.pCenter || R(this.pCenter, t.center) < e.posThreshold;
                        this.pTime = t.timeStamp, this.pCenter = t.center, a && o ? this.count += 1 : this.count = 1, this._input = t;
                        var c = this.count % e.taps;
                        if (0 === c) return this.hasRequireFailures() ? (this._timer = r(function() {
                            this.state = Ce, this.tryEmit()
                        }, e.interval, this), me) : Ce
                    }
                    return Te
                },
                failTimeout: function() {
                    return this._timer = r(function() {
                        this.state = Te
                    }, this.options.interval, this), Te
                },
                reset: function() {
                    clearTimeout(this._timer)
                },
                emit: function() {
                    this.state == Ce && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                }
            }), ct.VERSION = "2.0.7", ct.defaults = {
                domEvents: !1,
                touchAction: ae,
                enable: !0,
                inputTarget: null,
                inputClass: null,
                preset: [
                    [rt, {
                        enable: !1
                    }],
                    [nt, {
                            enable: !1
                        },
                        ["rotate"]
                    ],
                    [ot, {
                        direction: qt
                    }],
                    [it, {
                            direction: qt
                        },
                        ["swipe"]
                    ],
                    [at],
                    [at, {
                            event: "doubletap",
                            taps: 2
                        },
                        ["tap"]
                    ],
                    [st]
                ],
                cssProps: {
                    userSelect: "none",
                    touchSelect: "none",
                    touchCallout: "none",
                    contentZooming: "none",
                    userDrag: "none",
                    tapHighlightColor: "rgba(0,0,0,0)"
                }
            };
            var Ee = 1,
                _e = 2;
            ut.prototype = {
                set: function(t) {
                    return pt(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                },
                stop: function(t) {
                    this.session.stopped = t ? _e : Ee
                },
                recognize: function(t) {
                    var e = this.session;
                    if (!e.stopped) {
                        this.touchAction.preventDefaults(t);
                        var i, n = this.recognizers,
                            s = e.curRecognizer;
                        (!s || s && s.state & Ce) && (s = e.curRecognizer = null);
                        for (var r = 0; r < n.length;) i = n[r], e.stopped === _e || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && i.state & (me | ve | ge) && (s = e.curRecognizer = i), r++
                    }
                },
                get: function(t) {
                    if (t instanceof Q) return t;
                    for (var e = this.recognizers, i = 0; i < e.length; i++)
                        if (e[i].options.event == t) return e[i];
                    return null
                },
                add: function(t) {
                    if (o(t, "add", this)) return this;
                    var e = this.get(t.options.event);
                    return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                },
                remove: function(t) {
                    if (o(t, "remove", this)) return this;
                    if (t = this.get(t)) {
                        var e = this.recognizers,
                            i = C(e, t);
                        i !== -1 && (e.splice(i, 1), this.touchAction.update())
                    }
                    return this
                },
                on: function(t, e) {
                    if (t !== s && e !== s) {
                        var i = this.handlers;
                        return a(g(t), function(t) {
                            i[t] = i[t] || [], i[t].push(e)
                        }), this
                    }
                },
                off: function(t, e) {
                    if (t !== s) {
                        var i = this.handlers;
                        return a(g(t), function(t) {
                            e ? i[t] && i[t].splice(C(i[t], e), 1) : delete i[t]
                        }), this
                    }
                },
                emit: function(t, e) {
                    this.options.domEvents && ht(t, e);
                    var i = this.handlers[t] && this.handlers[t].slice();
                    if (i && i.length) {
                        e.type = t, e.preventDefault = function() {
                            e.srcEvent.preventDefault()
                        };
                        for (var n = 0; n < i.length;) i[n](e), n++
                    }
                },
                destroy: function() {
                    this.element && lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                }
            }, pt(ct, {
                INPUT_START: zt,
                INPUT_MOVE: Ot,
                INPUT_END: Mt,
                INPUT_CANCEL: Rt,
                STATE_POSSIBLE: fe,
                STATE_BEGAN: me,
                STATE_CHANGED: ve,
                STATE_ENDED: ge,
                STATE_RECOGNIZED: Ce,
                STATE_CANCELLED: ye,
                STATE_FAILED: Te,
                DIRECTION_NONE: Nt,
                DIRECTION_LEFT: Xt,
                DIRECTION_RIGHT: Yt,
                DIRECTION_UP: kt,
                DIRECTION_DOWN: Ft,
                DIRECTION_HORIZONTAL: qt,
                DIRECTION_VERTICAL: $t,
                DIRECTION_ALL: Wt,
                Manager: ut,
                Input: I,
                TouchAction: G,
                TouchInput: W,
                MouseInput: k,
                PointerEventInput: F,
                TouchMouseInput: L,
                SingleTouchInput: q,
                Recognizer: Q,
                AttrRecognizer: et,
                Tap: at,
                Pan: it,
                Swipe: ot,
                Pinch: nt,
                Rotate: rt,
                Press: st,
                on: d,
                off: f,
                each: a,
                merge: Tt,
                extend: yt,
                assign: pt,
                inherit: u,
                bindFn: l,
                prefixed: E
            });
            var xe = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
            xe.Hammer = ct, "function" == typeof define && define.amd ? define(function() {
                return ct
            }) : "undefined" != typeof e && e.exports ? e.exports = ct : t[n] = ct
        }(window, document, "Hammer")
    }, {}]
}, {}, [1]);
//# sourceMappingURL=app.js.map