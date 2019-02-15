var k, m = this;
function ba(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array)
                return "array";
            if (a instanceof Object)
                return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c)
                return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                return "function";
        }
        else
            return "null";
    else if ("function" ==
        b && "undefined" == typeof a.call)
        return "object";
    return b;
}
function n(a) {
    return "string" == typeof a;
}
function t(a) {
    return "number" == typeof a;
}
function v(a) {
    return "function" == ba(a);
}
var ca = "closure_uid_" + (1E9 * Math.random() >>> 0), da = 0;
function ea(a, b, c) {
    return a.call.apply(a.bind, arguments);
}
function fa(a, b, c) {
    if (!a)
        throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c);
        };
    }
    return function () {
        return a.apply(b, arguments);
    };
}
function w(a, b, c) {
    w = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ea : fa;
    return w.apply(null, arguments);
}
function x(a, b) {
    var c = a.split("."), d = m;
    c[0] in d || !d.execScript || d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)
        c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b;
}
function ga(a, b) {
    function c() { }
    c.prototype = b.prototype;
    a.A = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.S = function (a, c, f) {
        for (var h = Array(arguments.length - 2), g = 2; g < arguments.length; g++)
            h[g - 2] = arguments[g];
        return b.prototype[c].apply(a, h);
    };
}
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return w.apply(null, c);
    }
    return w(this, a);
};
var ha = String.prototype.trim ? function (a) {
    return a.trim();
} : function (a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
function ia(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
;
var z = Array.prototype, C = z.indexOf ? function (a, b, c) {
    return z.indexOf.call(a, b, c);
} : function (a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (n(a))
        return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b)
            return c;
    return -1;
}, ja = z.filter ? function (a, b, c) {
    return z.filter.call(a, b, c);
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, h = n(a) ? a.split("") : a, g = 0; g < d; g++)
        if (g in h) {
            var p = h[g];
            b.call(c, p, g, a) && (e[f++] = p);
        }
    return e;
};
function ka(a, b, c) {
    return 2 >= arguments.length ? z.slice.call(a, b) : z.slice.call(a, b, c);
}
;
var D;
a: {
    var la = m.navigator;
    if (la) {
        var ma = la.userAgent;
        if (ma) {
            D = ma;
            break a;
        }
    }
    D = "";
}
function E(a) {
    return -1 != D.indexOf(a);
}
;
function na(a, b) {
    for (var c in a)
        if (b.call(void 0, a[c], c, a))
            return !0;
    return !1;
}
;
function oa() {
    return E("Opera") || E("OPR");
}
function pa() {
    return (E("Chrome") || E("CriOS")) && !oa() && !E("Edge");
}
;
var qa = oa(), H = E("Trident"), ra = E("Edge"), I = E("Gecko") && !(-1 != D.toLowerCase().indexOf("webkit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"), J = -1 != D.toLowerCase().indexOf("webkit") && !E("Edge");
function sa() {
    var a = D;
    if (I)
        return /rv\:([^\);]+)(\)|;)/.exec(a);
    if (ra)
        return /Edge\/([\d\.]+)/.exec(a);
    if (H)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
    if (J)
        return /WebKit\/(\S+)/.exec(a);
}
function ta() {
    var a = m.document;
    return a ? a.documentMode : void 0;
}
var ua = function () {
    if (qa && m.opera) {
        var a = m.opera.version;
        return v(a) ? a() : a;
    }
    var a = "", b = sa();
    b && (a = b ? b[1] : "");
    return H && (b = ta(), b > parseFloat(a)) ? String(b) : a;
}(), va = {};
function K(a) {
    var b;
    if (!(b = va[a])) {
        b = 0;
        for (var c = ha(String(ua)).split("."), d = ha(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var h = c[f] || "", g = d[f] || "", p = RegExp("(\\d*)(\\D*)", "g"), B = RegExp("(\\d*)(\\D*)", "g");
            do {
                var u = p.exec(h) || ["", "", ""], q = B.exec(g) || ["", "", ""];
                if (0 == u[0].length && 0 == q[0].length)
                    break;
                b = ia(0 == u[1].length ? 0 : parseInt(u[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || ia(0 == u[2].length, 0 == q[2].length) || ia(u[2], q[2]);
            } while (0 == b);
        }
        b = va[a] = 0 <= b;
    }
    return b;
}
var wa = m.document, xa = wa && H ? ta() || ("CSS1Compat" == wa.compatMode ? parseInt(ua, 10) : 5) : void 0;
!I && !H || H && 9 <= xa || I && K("1.9.1");
H && K("9");
function L(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0;
}
k = L.prototype;
k.clone = function () {
    return new L(this.x, this.y);
};
k.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
};
k.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
};
k.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
};
k.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
};
k.translate = function (a, b) {
    a instanceof L ? (this.x += a.x, this.y += a.y) : (this.x += a, t(b) && (this.y += b));
    return this;
};
k.scale = function (a, b) {
    var c = t(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this;
};
function ya(a, b) {
    this.width = a;
    this.height = b;
}
k = ya.prototype;
k.clone = function () {
    return new ya(this.width, this.height);
};
k.toString = function () {
    return "(" + this.width + " x " + this.height + ")";
};
k.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
};
k.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
};
k.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
};
k.scale = function (a, b) {
    var c = t(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this;
};
function M(a) {
    var b = document;
    return n(a) ? b.getElementById(a) : a;
}
function N(a, b) {
    var c = b || document, d = null;
    return (d = c.getElementsByClassName ? c.getElementsByClassName(a)[0] : c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : za(a, b)[0]) || null;
}
function za(a, b) {
    var c, d, e, f;
    c = document;
    c = b || c;
    if (c.querySelectorAll && c.querySelector && a)
        return c.querySelectorAll("" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        var h = c.getElementsByClassName(a);
        return h;
    }
    h = c.getElementsByTagName("*");
    if (a) {
        f = {};
        for (d = e = 0; c = h[d]; d++) {
            var g = c.className, p;
            if (p = "function" == typeof g.split)
                p = 0 <= C(g.split(/\s+/), a);
            p && (f[e++] = c);
        }
        f.length = e;
        return f;
    }
    return h;
}
function Aa() {
    var a = window.document, a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new ya(a.clientWidth, a.clientHeight);
}
function Ba() {
    var a = document, b = Ca(a), a = a.parentWindow || a.defaultView;
    return H && K("10") && a.pageYOffset != b.scrollTop ? new L(b.scrollLeft, b.scrollTop) : new L(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop);
}
function Ca(a) {
    return a.P ? a.P : J || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
}
function Da(a) {
    a && a.parentNode && a.parentNode.removeChild(a);
}
;
function Ea(a) {
    a = a.className;
    return n(a) && a.match(/\S+/g) || [];
}
function O(a, b) {
    for (var c = Ea(a), d = c, e = ka(arguments, 1), f = 0; f < e.length; f++)
        0 <= C(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ");
}
function Fa(a, b) {
    var c = Ea(a), c = Ga(c, ka(arguments, 1));
    a.className = c.join(" ");
}
function Ga(a, b) {
    return ja(a, function (a) {
        return !(0 <= C(b, a));
    });
}
;
!E("Android") || pa() || E("Firefox") || oa();
pa();
var Ha = !H;
function P(a, b) {
    return Ha && a.dataset ? b in a.dataset ? a.dataset[b] : null : a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase());
}
;
function Ia(a) {
    if (1 == a.nodeType) {
        a: {
            var b;
            try {
                b = a.getBoundingClientRect();
            }
            catch (c) {
                a = {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                };
                break a;
            }
            H && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
            a = b;
        }
        return new L(a.left, a.top);
    }
    b = v(a.G);
    var d = a;
    a.targetTouches && a.targetTouches.length ? d = a.targetTouches[0] : b && a.b.targetTouches && a.b.targetTouches.length && (d = a.b.targetTouches[0]);
    return new L(d.clientX, d.clientY);
}
H && K(12);
var Ja = !H || 9 <= xa, Ka = H && !K("9");
!J || K("528");
I && K("1.9b") || H && K("8") || qa && K("9.5") || J && K("528");
I && !K("8") || H && K("9");
function La() {
    0 != Ma && (this[ca] || (this[ca] = ++da));
    this.v = this.v;
    this.L = this.L;
}
var Ma = 0;
La.prototype.v = !1;
function Q(a, b) {
    this.type = a;
    this.currentTarget = this.target = b;
    this.defaultPrevented = this.u = !1;
}
Q.prototype.stopPropagation = function () {
    this.u = !0;
};
Q.prototype.preventDefault = function () {
    this.defaultPrevented = !0;
};
function Na(a) {
    Na[" "](a);
    return a;
}
Na[" "] = function () { };
function S(a, b) {
    Q.call(this, a ? a.type : "");
    this.relatedTarget = this.currentTarget = this.target = null;
    this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.b = this.state = null;
    if (a) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        var d = a.relatedTarget;
        if (d) {
            if (I) {
                var e;
                a: {
                    try {
                        Na(d.nodeName);
                        e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (d = null);
            }
        }
        else
            "mouseover" == c ? d =
                a.fromElement : "mouseout" == c && (d = a.toElement);
        this.relatedTarget = d;
        this.offsetX = J || void 0 !== a.offsetX ? a.offsetX : a.layerX;
        this.offsetY = J || void 0 !== a.offsetY ? a.offsetY : a.layerY;
        this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
        this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY = a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.state = a.state;
        this.b = a;
        a.defaultPrevented && this.preventDefault();
    }
}
ga(S, Q);
S.prototype.stopPropagation = function () {
    S.A.stopPropagation.call(this);
    this.b.stopPropagation ? this.b.stopPropagation() : this.b.cancelBubble = !0;
};
S.prototype.preventDefault = function () {
    S.A.preventDefault.call(this);
    var a = this.b;
    if (a.preventDefault)
        a.preventDefault();
    else if (a.returnValue = !1, Ka)
        try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                a.keyCode = -1;
        }
        catch (b) { }
};
S.prototype.G = function () {
    return this.b;
};
var Oa = "closure_listenable_" + (1E6 * Math.random() | 0), Pa = 0;
function Qa(a, b, c, d, e) {
    this.listener = a;
    this.i = null;
    this.src = b;
    this.type = c;
    this.h = !!d;
    this.o = e;
    this.key = ++Pa;
    this.f = this.l = !1;
}
function T(a) {
    a.f = !0;
    a.listener = null;
    a.i = null;
    a.src = null;
    a.o = null;
}
;
function U(a) {
    this.src = a;
    this.a = {};
    this.g = 0;
}
U.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.g++);
    var h = Ra(a, b, d, e);
    -1 < h ? (b = a[h], c || (b.l = !1)) : (b = new Qa(b, this.src, f, !!d, e), b.l = c, a.push(b));
    return b;
};
U.prototype.remove = function (a, b, c, d) {
    a = a.toString();
    if (!(a in this.a))
        return !1;
    var e = this.a[a];
    b = Ra(e, b, c, d);
    return -1 < b ? (T(e[b]), z.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.g--), !0) : !1;
};
function Sa(a, b) {
    var c = b.type;
    if (c in a.a) {
        var d = a.a[c], e = C(d, b), f;
        (f = 0 <= e) && z.splice.call(d, e, 1);
        f && (T(b), 0 == a.a[c].length && (delete a.a[c], a.g--));
    }
}
U.prototype.O = function (a) {
    a = a && a.toString();
    var b = 0, c;
    for (c in this.a)
        if (!a || c == a) {
            for (var d = this.a[c], e = 0; e < d.length; e++)
                ++b, T(d[e]);
            delete this.a[c];
            this.g--;
        }
    return b;
};
U.prototype.hasListener = function (a, b) {
    var c = void 0 !== a, d = c ? a.toString() : "", e = void 0 !== b;
    return na(this.a, function (a) {
        for (var h = 0; h < a.length; ++h)
            if (!(c && a[h].type != d || e && a[h].h != b))
                return !0;
        return !1;
    });
};
function Ra(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.f && f.listener == b && f.h == !!c && f.o == d)
            return e;
    }
    return -1;
}
;
var Ta = "closure_lm_" + (1E6 * Math.random() | 0), Ua = {}, Wa = 0;
function V(a, b, c, d, e) {
    if ("array" == ba(b))
        for (var f = 0; f < b.length; f++)
            V(a, b[f], c, d, e);
    else if (c = Xa(c), a && a[Oa])
        a.F.add(String(b), c, !1, d, e);
    else {
        if (!b)
            throw Error("Invalid event type");
        var f = !!d, h = Ya(a);
        h || (a[Ta] = h = new U(a));
        c = h.add(b, c, !1, d, e);
        if (!c.i) {
            d = Za();
            c.i = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener)
                a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent)
                a.attachEvent($a(b.toString()), d);
            else
                throw Error("addEventListener and attachEvent are unavailable.");
            Wa++;
        }
    }
}
function Za() {
    var a = ab, b = Ja ? function (c) {
        return a.call(b.src, b.listener, c);
    } : function (c) {
        c = a.call(b.src, b.listener, c);
        if (!c)
            return c;
    };
    return b;
}
function $a(a) {
    return a in Ua ? Ua[a] : Ua[a] = "on" + a;
}
function bb(a, b, c, d) {
    var e = !0;
    if (a = Ya(a))
        if (b = a.a[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.h == c && !f.f && (f = cb(f, d), e = e && !1 !== f);
            }
    return e;
}
function cb(a, b) {
    var c = a.listener, d = a.o || a.src;
    if (a.l && !t(a) && a && !a.f) {
        var e = a.src;
        if (e && e[Oa])
            Sa(e.F, a);
        else {
            var f = a.type, h = a.i;
            e.removeEventListener ? e.removeEventListener(f, h, a.h) : e.detachEvent && e.detachEvent($a(f), h);
            Wa--;
            (f = Ya(e)) ? (Sa(f, a), 0 == f.g && (f.src = null, e[Ta] = null)) : T(a);
        }
    }
    return c.call(d, b);
}
function ab(a, b) {
    if (a.f)
        return !0;
    if (!Ja) {
        var c;
        if (!(c = b))
            a: {
                c = ["window", "event"];
                for (var d = m, e; e = c.shift();)
                    if (null != d[e])
                        d = d[e];
                    else {
                        c = null;
                        break a;
                    }
                c = d;
            }
        e = c;
        c = new S(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode)
                    try {
                        e.keyCode = -1;
                        break a;
                    }
                    catch (h) {
                        f = !0;
                    }
                if (f || void 0 == e.returnValue)
                    e.returnValue = !0;
            }
            e = [];
            for (f = c.currentTarget; f; f = f.parentNode)
                e.push(f);
            for (var f = a.type, g = e.length - 1; !c.u && 0 <= g; g--) {
                c.currentTarget = e[g];
                var p = bb(e[g], f, !0, c), d = d && p;
            }
            for (g = 0; !c.u && g < e.length; g++)
                c.currentTarget =
                    e[g],
                    p = bb(e[g], f, !1, c),
                    d = d && p;
        }
        return d;
    }
    return cb(a, new S(b, this));
}
function Ya(a) {
    a = a[Ta];
    return a instanceof U ? a : null;
}
var db = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function Xa(a) {
    if (v(a))
        return a;
    a[db] || (a[db] = function (b) {
        return a.handleEvent(b);
    });
    return a[db];
}
;
function W(a, b, c) {
    La.call(this);
    this.J = a;
    this.I = b;
    this.H = c;
    this.C = w(this.M, this);
}
ga(W, La);
k = W.prototype;
k.j = !1;
k.s = 0;
k.c = null;
k.m = function () {
    this.c || this.s ? this.j = !0 : this.w();
};
k.stop = function () {
    this.c && (m.clearTimeout(this.c), this.c = null, this.j = !1);
};
k.pause = function () {
    this.s++;
};
k.M = function () {
    this.c = null;
    this.j && !this.s && (this.j = !1, this.w());
};
k.w = function () {
    var a = this.C, b = this.I;
    if (!v(a))
        if (a && "function" == typeof a.handleEvent)
            a = w(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
    this.c = 2147483647 < b ? -1 : m.setTimeout(a, b || 0);
    this.J.call(this.H);
};
var eb = {}, X = {
    userAgentParsers: [{
            regex: "(HbbTV)/(\\d+)\\.(\\d+)\\.(\\d+) \\("
        }, {
            regex: "(SeaMonkey|Camino)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)"
        }, {
            regex: "(Pale[Mm]oon)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
            familyReplacement: "Pale Moon (Firefox Variant)"
        }, {
            regex: "(Fennec)/(\\d+)\\.(\\d+)\\.?([ab]?\\d+[a-z]*)",
            familyReplacement: "Firefox Mobile"
        }, {
            regex: "(Fennec)/(\\d+)\\.(\\d+)(pre)",
            familyReplacement: "Firefox Mobile"
        }, {
            regex: "(Fennec)/(\\d+)\\.(\\d+)",
            familyReplacement: "Firefox Mobile"
        }, {
            regex: "Mobile.*(Firefox)/(\\d+)\\.(\\d+)",
            familyReplacement: "Firefox Mobile"
        }, {
            regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?)",
            familyReplacement: "Firefox ($1)"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
            familyReplacement: "Firefox Alpha"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
            familyReplacement: "Firefox Beta"
        }, {
            regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(a\\d+[a-z]*)",
            familyReplacement: "Firefox Alpha"
        }, {
            regex: "(Firefox)-(?:\\d+\\.\\d+)?/(\\d+)\\.(\\d+)(b\\d+[a-z]*)",
            familyReplacement: "Firefox Beta"
        },
        {
            regex: "(Namoroka|Shiretoko|Minefield)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?",
            familyReplacement: "Firefox ($1)"
        }, {
            regex: "(Firefox).*Tablet browser (\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "MicroB"
        }, {
            regex: "(MozillaDeveloperPreview)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)?"
        }, {
            regex: "(Flock)/(\\d+)\\.(\\d+)(b\\d+?)"
        }, {
            regex: "(RockMelt)/(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(Navigator)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Netscape"
        }, {
            regex: "(Navigator)/(\\d+)\\.(\\d+)([ab]\\d+)",
            familyReplacement: "Netscape"
        },
        {
            regex: "(Netscape6)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Netscape"
        }, {
            regex: "(MyIBrow)/(\\d+)\\.(\\d+)",
            familyReplacement: "My Internet Browser"
        }, {
            regex: "(Opera Tablet).*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"
        }, {
            regex: "(Opera)/.+Opera Mobi.+Version/(\\d+)\\.(\\d+)",
            familyReplacement: "Opera Mobile"
        }, {
            regex: "Opera Mobi",
            familyReplacement: "Opera Mobile"
        }, {
            regex: "(Opera Mini)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Opera Mini)/att/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Opera)/9.80.*Version/(\\d+)\\.(\\d+)(?:\\.(\\d+))?"
        },
        {
            regex: "(?:Mobile Safari).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Opera Mobile"
        }, {
            regex: "(?:Chrome).*(OPR)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Opera"
        }, {
            regex: "(hpw|web)OS/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
            familyReplacement: "webOS Browser"
        }, {
            regex: "(luakit)",
            familyReplacement: "LuaKit"
        }, {
            regex: "(Snowshoe)/(\\d+)\\.(\\d+).(\\d+)"
        }, {
            regex: "(Lightning)/(\\d+)\\.(\\d+)([ab]?\\d+[a-z]*)"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+(?:pre)?) \\(Swiftfox\\)",
            familyReplacement: "Swiftfox"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)([ab]\\d+[a-z]*)? \\(Swiftfox\\)",
            familyReplacement: "Swiftfox"
        }, {
            regex: "(rekonq)/(\\d+)\\.(\\d+)\\.?(\\d+)? Safari",
            familyReplacement: "Rekonq"
        }, {
            regex: "rekonq",
            familyReplacement: "Rekonq"
        }, {
            regex: "(conkeror|Conkeror)/(\\d+)\\.(\\d+)\\.?(\\d+)?",
            familyReplacement: "Conkeror"
        }, {
            regex: "(konqueror)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Konqueror"
        }, {
            regex: "(WeTab)-Browser"
        }, {
            regex: "(Comodo_Dragon)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Comodo Dragon"
        }, {
            regex: "(YottaaMonitor|BrowserMob|HttpMonitor|YandexBot|Slurp|BingPreview|PagePeeker|ThumbShotsBot|WebThumb|URL2PNG|ZooShot|GomezA|Catchpoint bot|Willow Internet Crawler|Google SketchUp|Read%20Later)"
        },
        {
            regex: "(Symphony) (\\d+).(\\d+)"
        }, {
            regex: "(Minimo)"
        }, {
            regex: "(CrMo)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Chrome Mobile"
        }, {
            regex: "(CriOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Chrome Mobile iOS"
        }, {
            regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+) Mobile",
            familyReplacement: "Chrome Mobile"
        }, {
            regex: "(chromeframe)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Chrome Frame"
        }, {
            regex: "(UCBrowser)[ /](\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "UC Browser"
        }, {
            regex: "(UC Browser)[ /](\\d+)\\.(\\d+)\\.(\\d+)"
        },
        {
            regex: "(UC Browser|UCBrowser|UCWEB)(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "UC Browser"
        }, {
            regex: "(SLP Browser)/(\\d+)\\.(\\d+)",
            familyReplacement: "Tizen Browser"
        }, {
            regex: "(SE 2\\.X) MetaSr (\\d+)\\.(\\d+)",
            familyReplacement: "Sogou Explorer"
        }, {
            regex: "(baidubrowser)[/\\s](\\d+)",
            familyReplacement: "Baidu Browser"
        }, {
            regex: "(FlyFlow)/(\\d+)\\.(\\d+)",
            familyReplacement: "Baidu Explorer"
        }, {
            regex: "(Pingdom.com_bot_version_)(\\d+)\\.(\\d+)",
            familyReplacement: "PingdomBot"
        }, {
            regex: "(facebookexternalhit)/(\\d+)\\.(\\d+)",
            familyReplacement: "FacebookBot"
        }, {
            regex: "(Twitterbot)/(\\d+)\\.(\\d+)",
            familyReplacement: "TwitterBot"
        }, {
            regex: "(Rackspace Monitoring)/(\\d+)\\.(\\d+)",
            familyReplacement: "RackspaceBot"
        }, {
            regex: "(PyAMF)/(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(YaBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Yandex Browser"
        }, {
            regex: "(Chrome)/(\\d+)\\.(\\d+)\\.(\\d+).* MRCHROME",
            familyReplacement: "Mail.ru Chromium Browser"
        }, {
            regex: "(AOL) (\\d+)\\.(\\d+); AOLBuild (\\d+)"
        }, {
            regex: "(AdobeAIR|FireWeb|Jasmine|ANTGalio|Midori|Fresco|Lobo|PaleMoon|Maxthon|Lynx|OmniWeb|Dillo|Camino|Demeter|Fluid|Fennec|Epiphany|Shiira|Sunrise|Flock|Netscape|Lunascape|WebPilot|Vodafone|NetFront|Netfront|Konqueror|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|Opera Mini|iCab|NetNewsWire|ThunderBrowse|Iris|UP\\.Browser|Bunjalloo|Google Earth|Raven for Mac|Openwave)/(\\d+)\\.(\\d+)\\.(\\d+)"
        },
        {
            regex: "(Edge)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Chromium|Chrome)/(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(Bolt|Jasmine|IceCat|Skyfire|Midori|Maxthon|Lynx|Arora|IBrowse|Dillo|Camino|Shiira|Fennec|Phoenix|Chrome|Flock|Netscape|Lunascape|Epiphany|WebPilot|Opera Mini|Opera|Vodafone|NetFront|Netfront|Konqueror|Googlebot|SeaMonkey|Kazehakase|Vienna|Iceape|Iceweasel|IceWeasel|Iron|K-Meleon|Sleipnir|Galeon|GranParadiso|iCab|NetNewsWire|Space Bison|Stainless|Orca|Dolfin|BOLT|Minimo|Tizen Browser|Polaris|Abrowser|Planetweb|ICE Browser)/(\\d+)\\.(\\d+)"
        },
        {
            regex: "(Chromium|Chrome)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(iRider|Crazy Browser|SkipStone|iCab|Lunascape|Sleipnir|Maemo Browser) (\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(iCab|Lunascape|Opera|Android|Jasmine|Polaris) (\\d+)\\.(\\d+)\\.?(\\d+)?"
        }, {
            regex: "(Kindle)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Android) Donut",
            v2Replacement: "2",
            v1Replacement: "1"
        }, {
            regex: "(Android) Eclair",
            v2Replacement: "1",
            v1Replacement: "2"
        }, {
            regex: "(Android) Froyo",
            v2Replacement: "2",
            v1Replacement: "2"
        }, {
            regex: "(Android) Gingerbread",
            v2Replacement: "3",
            v1Replacement: "2"
        }, {
            regex: "(Android) Honeycomb",
            v1Replacement: "3"
        }, {
            regex: "(IEMobile)[ /](\\d+)\\.(\\d+)",
            familyReplacement: "IE Mobile"
        }, {
            regex: "(MSIE) (\\d+)\\.(\\d+).*XBLWP7",
            familyReplacement: "IE Large Screen"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(Firefox)/(\\d+)\\.(\\d+)(pre|[ab]\\d+[a-z]*)?"
        }, {
            regex: "(Obigo)InternetBrowser"
        }, {
            regex: "(Obigo)\\-Browser"
        }, {
            regex: "(Obigo|OBIGO)[^\\d]*(\\d+)(?:.(\\d+))?",
            familyReplacement: "Obigo"
        }, {
            regex: "(MAXTHON|Maxthon) (\\d+)\\.(\\d+)",
            familyReplacement: "Maxthon"
        },
        {
            regex: "(Maxthon|MyIE2|Uzbl|Shiira)",
            v1Replacement: "0"
        }, {
            regex: "PLAYSTATION 3.+WebKit",
            familyReplacement: "NetFront NX"
        }, {
            regex: "PLAYSTATION 3",
            familyReplacement: "NetFront"
        }, {
            regex: "(PlayStation Portable)",
            familyReplacement: "NetFront"
        }, {
            regex: "(PlayStation Vita)",
            familyReplacement: "NetFront NX"
        }, {
            regex: "AppleWebKit.+ (NX)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "NetFront NX"
        }, {
            regex: "(Nintendo 3DS)",
            familyReplacement: "NetFront NX"
        }, {
            regex: "(BrowseX) \\((\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(NCSA_Mosaic)/(\\d+)\\.(\\d+)",
            familyReplacement: "NCSA Mosaic"
        }, {
            regex: "(POLARIS)/(\\d+)\\.(\\d+)",
            familyReplacement: "Polaris"
        }, {
            regex: "(Embider)/(\\d+)\\.(\\d+)",
            familyReplacement: "Polaris"
        }, {
            regex: "(BonEcho)/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Bon Echo"
        }, {
            regex: "M?QQBrowser",
            familyReplacement: "QQ Browser"
        }, {
            regex: "(iPod).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPod).*Version/(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPhone).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPhone).*Version/(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPad).*Version/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPad).*Version/(\\d+)\\.(\\d+)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPod|iPhone|iPad);.*CPU.*OS (\\d+)(?:_\\d+)?_(\\d+).*Mobile",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(iPod|iPhone|iPad)",
            familyReplacement: "Mobile Safari"
        }, {
            regex: "(AvantGo) (\\d+).(\\d+)"
        }, {
            regex: "(OneBrowser)/(\\d+).(\\d+)",
            familyReplacement: "ONE Browser"
        }, {
            regex: "(Avant)",
            v1Replacement: "1"
        }, {
            regex: "(QtCarBrowser)",
            v1Replacement: "1"
        }, {
            regex: "(iBrowser/Mini)(\\d+).(\\d+)",
            familyReplacement: "iBrowser Mini"
        }, {
            regex: "^(Nokia)",
            familyReplacement: "Nokia Services (WAP) Browser"
        }, {
            regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)\\.(\\d+)",
            familyReplacement: "Nokia Browser"
        }, {
            regex: "(NokiaBrowser)/(\\d+)\\.(\\d+).(\\d+)",
            familyReplacement: "Nokia Browser"
        }, {
            regex: "(NokiaBrowser)/(\\d+)\\.(\\d+)",
            familyReplacement: "Nokia Browser"
        },
        {
            regex: "(BrowserNG)/(\\d+)\\.(\\d+).(\\d+)",
            familyReplacement: "Nokia Browser"
        }, {
            regex: "(Series60)/5\\.0",
            v2Replacement: "0",
            v1Replacement: "7",
            familyReplacement: "Nokia Browser"
        }, {
            regex: "(Series60)/(\\d+)\\.(\\d+)",
            familyReplacement: "Nokia OSS Browser"
        }, {
            regex: "(S40OviBrowser)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "Ovi Browser"
        }, {
            regex: "(Nokia)[EN]?(\\d+)"
        }, {
            regex: "(BB10);",
            familyReplacement: "BlackBerry WebKit"
        }, {
            regex: "(PlayBook).+RIM Tablet OS (\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "BlackBerry WebKit"
        },
        {
            regex: "(Black[bB]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
            familyReplacement: "BlackBerry WebKit"
        }, {
            regex: "(Black[bB]erry)\\s?(\\d+)",
            familyReplacement: "BlackBerry"
        }, {
            regex: "(OmniWeb)/v(\\d+)\\.(\\d+)"
        }, {
            regex: "(Blazer)/(\\d+)\\.(\\d+)",
            familyReplacement: "Palm Blazer"
        }, {
            regex: "(Pre)/(\\d+)\\.(\\d+)",
            familyReplacement: "Palm Pre"
        }, {
            regex: "(ELinks)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(ELinks) \\((\\d+)\\.(\\d+)"
        }, {
            regex: "(Links) \\((\\d+)\\.(\\d+)"
        }, {
            regex: "(QtWeb) Internet Browser/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
            familyReplacement: "Amazon Silk"
        }, {
            regex: "(PhantomJS)/(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(AppleWebKit)/(\\d+)\\.?(\\d+)?\\+ .* Safari",
            familyReplacement: "WebKit Nightly"
        }, {
            regex: "(Version)/(\\d+)\\.(\\d+)(?:\\.(\\d+))?.*Safari/",
            familyReplacement: "Safari"
        }, {
            regex: "(Safari)/\\d+"
        }, {
            regex: "(OLPC)/Update(\\d+)\\.(\\d+)"
        }, {
            regex: "(OLPC)/Update()\\.(\\d+)",
            v1Replacement: "0"
        }, {
            regex: "(SEMC\\-Browser)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Teleca)",
            familyReplacement: "Teleca Browser"
        }, {
            regex: "(Phantom)/V(\\d+)\\.(\\d+)",
            familyReplacement: "Phantom Browser"
        }, {
            regex: "([MS]?IE) (\\d+)\\.(\\d+)",
            familyReplacement: "IE"
        }, {
            regex: "Trident(.*)rv.(\\d+)\\.(\\d+)",
            familyReplacement: "IE"
        }, {
            regex: "(python-requests)/(\\d+)\\.(\\d+)",
            familyReplacement: "Python Requests"
        }
    ],
    osParsers: [{
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+ \\( ;(LG)E ;NetCast 4.0",
            osV1Replacement: "2013"
        }, {
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+ \\( ;(LG)E ;NetCast 3.0",
            osV1Replacement: "2012"
        }, {
            regex: "HbbTV/1.1.1 \\(;;;;;\\) Maple_2011",
            osReplacement: "Samsung",
            osV1Replacement: "2011"
        },
        {
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+ \\(;(Samsung);SmartTV([0-9]{4});.*FXPDEUC",
            osV2Replacement: "UE40F7000"
        }, {
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+ \\(;(Samsung);SmartTV([0-9]{4});.*MST12DEUC",
            osV2Replacement: "UE32F4500"
        }, {
            regex: "HbbTV/1.1.1 \\(; (Philips);.*NETTV/4",
            osV1Replacement: "2013"
        }, {
            regex: "HbbTV/1.1.1 \\(; (Philips);.*NETTV/3",
            osV1Replacement: "2012"
        }, {
            regex: "HbbTV/1.1.1 \\(; (Philips);.*NETTV/2",
            osV1Replacement: "2011"
        }, {
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+.*(firetv)-firefox-plugin (\\d+).(\\d+).(\\d+)",
            osReplacement: "FireHbbTV"
        }, {
            regex: "HbbTV/\\d+\\.\\d+\\.\\d+ \\(.*; ?([a-zA-Z]+) ?;.*(201[1-9]).*\\)"
        }, {
            regex: "(Android) (\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
        }, {
            regex: "(Android)\\-(\\d+)\\.(\\d+)(?:[.\\-]([a-z0-9]+))?"
        }, {
            regex: "(Android) Donut",
            osV2Replacement: "2",
            osV1Replacement: "1"
        }, {
            regex: "(Android) Eclair",
            osV2Replacement: "1",
            osV1Replacement: "2"
        }, {
            regex: "(Android) Froyo",
            osV2Replacement: "2",
            osV1Replacement: "2"
        }, {
            regex: "(Android) Gingerbread",
            osV2Replacement: "3",
            osV1Replacement: "2"
        }, {
            regex: "(Android) Honeycomb",
            osV1Replacement: "3"
        }, {
            regex: "(Silk-Accelerated=[a-z]{4,5})",
            osReplacement: "Android"
        }, {
            regex: "(Windows (?:NT 5\\.2|NT 5\\.1))",
            osReplacement: "Windows XP"
        }, {
            regex: "(XBLWP7)",
            osReplacement: "Windows Phone"
        }, {
            regex: "(Windows NT 6\\.1)",
            osReplacement: "Windows 7"
        }, {
            regex: "(Windows NT 6\\.0)",
            osReplacement: "Windows Vista"
        }, {
            regex: "(Win 9x 4\\.90)",
            osReplacement: "Windows Me"
        }, {
            regex: "(Windows 98|Windows XP|Windows ME|Windows 95|Windows CE|Windows 7|Windows NT 4\\.0|Windows Vista|Windows 2000|Windows 3.1)"
        },
        {
            regex: "(Windows NT 6\\.2; ARM;)",
            osReplacement: "Windows RT"
        }, {
            regex: "(Windows NT 6\\.2)",
            osReplacement: "Windows 8"
        }, {
            regex: "(Windows NT 5\\.0)",
            osReplacement: "Windows 2000"
        }, {
            regex: "(Windows Phone) (\\d+)\\.(\\d+)"
        }, {
            regex: "(Windows Phone) OS (\\d+)\\.(\\d+)"
        }, {
            regex: "(Windows ?Mobile)",
            osReplacement: "Windows Mobile"
        }, {
            regex: "(WinNT4.0)",
            osReplacement: "Windows NT 4.0"
        }, {
            regex: "(Win98)",
            osReplacement: "Windows 98"
        }, {
            regex: "(Tizen)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Mac OS X) (\\d+)[_.](\\d+)(?:[_.](\\d+))?"
        },
        {
            regex: "Mac_PowerPC",
            osReplacement: "Mac OS"
        }, {
            regex: "(?:PPC|Intel) (Mac OS X)"
        }, {
            regex: "(CPU OS|iPhone OS) (\\d+)_(\\d+)(?:_(\\d+))?",
            osReplacement: "iOS"
        }, {
            regex: "(iPhone|iPad|iPod); Opera",
            osReplacement: "iOS"
        }, {
            regex: "(iPhone|iPad|iPod).*Mac OS X.*Version/(\\d+)\\.(\\d+)",
            osReplacement: "iOS"
        }, {
            regex: "(AppleTV)/(\\d+)\\.(\\d+)",
            osReplacement: "ATV OS X"
        }, {
            regex: "(CrOS) [a-z0-9_]+ (\\d+)\\.(\\d+)(?:\\.(\\d+))?",
            osReplacement: "Chrome OS"
        }, {
            regex: "([Dd]ebian)",
            osReplacement: "Debian"
        }, {
            regex: "(Linux Mint)(?:/(\\d+))?"
        },
        {
            regex: "(Mandriva)(?: Linux)?/(?:[\\d.-]+m[a-z]{2}(\\d+).(\\d))?"
        }, {
            regex: "(Symbian[Oo][Ss])/(\\d+)\\.(\\d+)",
            osReplacement: "Symbian OS"
        }, {
            regex: "(Symbian/3).+NokiaBrowser/7\\.3",
            osReplacement: "Symbian^3 Anna"
        }, {
            regex: "(Symbian/3).+NokiaBrowser/7\\.4",
            osReplacement: "Symbian^3 Belle"
        }, {
            regex: "(Symbian/3)",
            osReplacement: "Symbian^3"
        }, {
            regex: "(Series 60|SymbOS|S60)",
            osReplacement: "Symbian OS"
        }, {
            regex: "(MeeGo)"
        }, {
            regex: "Symbian [Oo][Ss]",
            osReplacement: "Symbian OS"
        }, {
            regex: "Series40;",
            osReplacement: "Nokia Series 40"
        },
        {
            regex: "(BB10);.+Version/(\\d+)\\.(\\d+)\\.(\\d+)",
            osReplacement: "BlackBerry OS"
        }, {
            regex: "(Black[Bb]erry)[0-9a-z]+/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
            osReplacement: "BlackBerry OS"
        }, {
            regex: "(Black[Bb]erry).+Version/(\\d+)\\.(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
            osReplacement: "BlackBerry OS"
        }, {
            regex: "(RIM Tablet OS) (\\d+)\\.(\\d+)\\.(\\d+)",
            osReplacement: "BlackBerry Tablet OS"
        }, {
            regex: "(Play[Bb]ook)",
            osReplacement: "BlackBerry Tablet OS"
        }, {
            regex: "(Black[Bb]erry)",
            osReplacement: "BlackBerry OS"
        }, {
            regex: "\\(Mobile;.+Firefox/\\d+\\.\\d+",
            osReplacement: "Firefox OS"
        }, {
            regex: "(BREW)[ /](\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(BREW);"
        }, {
            regex: "(Brew MP|BMP)[ /](\\d+)\\.(\\d+)\\.(\\d+)",
            osReplacement: "Brew MP"
        }, {
            regex: "BMP;",
            osReplacement: "Brew MP"
        }, {
            regex: "(GoogleTV) (\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(GoogleTV)/[\\da-z]+"
        }, {
            regex: "(WebTV)/(\\d+).(\\d+)"
        }, {
            regex: "(hpw|web)OS/(\\d+)\\.(\\d+)(?:\\.(\\d+))?",
            osReplacement: "webOS"
        }, {
            regex: "(VRE);"
        }, {
            regex: "(Fedora|Red Hat|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)\\.(\\d+)"
        }, {
            regex: "(Red Hat|Puppy|PCLinuxOS)/(\\d+)\\.(\\d+)\\.(\\d+)"
        },
        {
            regex: "(Ubuntu|Kindle|Bada|Lubuntu|BackTrack|Red Hat|Slackware)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Windows|OpenBSD|FreeBSD|NetBSD|Android|WeTab)"
        }, {
            regex: "(Ubuntu|Kubuntu|Arch Linux|CentOS|Slackware|Gentoo|openSUSE|SUSE|Red Hat|Fedora|PCLinuxOS|Gentoo|Mageia)"
        }, {
            regex: "(Linux)/(\\d+)\\.(\\d+)"
        }, {
            regex: "(Linux|BSD)"
        }, {
            regex: "SunOS",
            osReplacement: "Solaris"
        }
    ],
    deviceParsers: [{
            regex: "HTC ([A-Z][a-z0-9]+) Build",
            deviceReplacement: "HTC $1"
        }, {
            regex: "HTC ([A-Z][a-z0-9 ]+) \\d+\\.\\d+\\.\\d+\\.\\d+",
            deviceReplacement: "HTC $1"
        },
        {
            regex: "HTC_Touch_([A-Za-z0-9]+)",
            deviceReplacement: "HTC Touch ($1)"
        }, {
            regex: "USCCHTC(\\d+)",
            deviceReplacement: "HTC $1 (US Cellular)"
        }, {
            regex: "Sprint APA(9292)",
            deviceReplacement: "HTC $1 (Sprint)"
        }, {
            regex: "HTC ([A-Za-z0-9]+ [A-Z])",
            deviceReplacement: "HTC $1"
        }, {
            regex: "HTC[-_/\\s]([A-Za-z0-9]+)",
            deviceReplacement: "HTC $1"
        }, {
            regex: "(ADR[A-Za-z0-9]+)",
            deviceReplacement: "HTC $1"
        }, {
            regex: "(HTC)"
        }, {
            regex: "(QtCarBrowser)",
            deviceReplacement: "Tesla Model S"
        }, {
            regex: "(SamsungSGHi560)",
            deviceReplacement: "Samsung SGHi560"
        },
        {
            regex: "SonyEricsson([A-Za-z0-9]+)/",
            deviceReplacement: "Ericsson $1"
        }, {
            regex: "PLAYSTATION 3",
            deviceReplacement: "PlayStation 3"
        }, {
            regex: "(PlayStation Portable)"
        }, {
            regex: "(PlayStation Vita)"
        }, {
            regex: "(KFOT Build)",
            deviceReplacement: "Kindle Fire"
        }, {
            regex: "(KFTT Build)",
            deviceReplacement: "Kindle Fire HD"
        }, {
            regex: "(KFJWI Build)",
            deviceReplacement: "Kindle Fire HD 8.9' WiFi"
        }, {
            regex: "(KFJWA Build)",
            deviceReplacement: "Kindle Fire HD 8.9' 4G"
        }, {
            regex: "(Kindle Fire)"
        }, {
            regex: "(Kindle)"
        }, {
            regex: "(Silk)/(\\d+)\\.(\\d+)(?:\\.([0-9\\-]+))?",
            deviceReplacement: "Kindle Fire"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{0,2}; WOWMobile (.+) Build"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+\\-update1; [A-Za-z]{2}\\-[A-Za-z]{0,2}; (.+) Build"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{0,2}; (.+) Build"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+;[A-Za-z]{2}\\-[A-Za-z]{0,2};(.+) Build"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+; [A-Za-z]{2}\\-[A-Za-z]{0,2}; (.+) Build"
        }, {
            regex: "Android[\\- ][\\d]+\\.[\\d]+\\.[\\d]+; (.+) Build"
        },
        {
            regex: "Android[\\- ][\\d]+\\.[\\d]+; (.+) Build"
        }, {
            regex: "NokiaN([0-9]+)",
            deviceReplacement: "Nokia N$1"
        }, {
            regex: "NOKIA([A-Za-z0-9\\v-]+)",
            deviceReplacement: "Nokia $1"
        }, {
            regex: "Nokia([A-Za-z0-9\\v-]+)",
            deviceReplacement: "Nokia $1"
        }, {
            regex: "NOKIA ([A-Za-z0-9\\-]+)",
            deviceReplacement: "Nokia $1"
        }, {
            regex: "Nokia ([A-Za-z0-9\\-]+)",
            deviceReplacement: "Nokia $1"
        }, {
            regex: "Lumia ([A-Za-z0-9\\-]+)",
            deviceReplacement: "Lumia $1"
        }, {
            regex: "Symbian",
            deviceReplacement: "Nokia"
        }, {
            regex: "BB10; ([A-Za-z0-9\\- ]+)\\)",
            deviceReplacement: "BlackBerry $1"
        }, {
            regex: "(PlayBook).+RIM Tablet OS",
            deviceReplacement: "BlackBerry Playbook"
        }, {
            regex: "Black[Bb]erry ([0-9]+);",
            deviceReplacement: "BlackBerry $1"
        }, {
            regex: "Black[Bb]erry([0-9]+)",
            deviceReplacement: "BlackBerry $1"
        }, {
            regex: "Black[Bb]erry;",
            deviceReplacement: "BlackBerry"
        }, {
            regex: "(Pre)/(\\d+)\\.(\\d+)",
            deviceReplacement: "Palm Pre"
        }, {
            regex: "(Pixi)/(\\d+)\\.(\\d+)",
            deviceReplacement: "Palm Pixi"
        }, {
            regex: "(Touch[Pp]ad)/(\\d+)\\.(\\d+)",
            deviceReplacement: "HP TouchPad"
        }, {
            regex: "HPiPAQ([A-Za-z0-9]+)/(\\d+).(\\d+)",
            deviceReplacement: "HP iPAQ $1"
        }, {
            regex: "Palm([A-Za-z0-9]+)",
            deviceReplacement: "Palm $1"
        }, {
            regex: "Treo([A-Za-z0-9]+)",
            deviceReplacement: "Palm Treo $1"
        }, {
            regex: "webOS.*(P160UNA)/(\\d+).(\\d+)",
            deviceReplacement: "HP Veer"
        }, {
            regex: "(AppleTV)",
            deviceReplacement: "AppleTV"
        }, {
            regex: "AdsBot-Google-Mobile",
            deviceReplacement: "Spider"
        }, {
            regex: "Googlebot-Mobile/(\\d+).(\\d+)",
            deviceReplacement: "Spider"
        }, {
            regex: "(iPad) Simulator;"
        }, {
            regex: "(iPad);"
        }, {
            regex: "(iPod) touch;"
        }, {
            regex: "(iPod);"
        }, {
            regex: "(iPhone) Simulator;"
        },
        {
            regex: "(iPhone);"
        }, {
            regex: "acer_([A-Za-z0-9]+)_",
            deviceReplacement: "Acer $1"
        }, {
            regex: "acer_([A-Za-z0-9]+)_",
            deviceReplacement: "Acer $1"
        }, {
            regex: "ALCATEL-([A-Za-z0-9]+)",
            deviceReplacement: "Alcatel $1"
        }, {
            regex: "Alcatel-([A-Za-z0-9]+)",
            deviceReplacement: "Alcatel $1"
        }, {
            regex: "Amoi\\-([A-Za-z0-9]+)",
            deviceReplacement: "Amoi $1"
        }, {
            regex: "AMOI\\-([A-Za-z0-9]+)",
            deviceReplacement: "Amoi $1"
        }, {
            regex: "Asus\\-([A-Za-z0-9]+)",
            deviceReplacement: "Asus $1"
        }, {
            regex: "ASUS\\-([A-Za-z0-9]+)",
            deviceReplacement: "Asus $1"
        },
        {
            regex: "BIRD\\-([A-Za-z0-9]+)",
            deviceReplacement: "Bird $1"
        }, {
            regex: "BIRD\\.([A-Za-z0-9]+)",
            deviceReplacement: "Bird $1"
        }, {
            regex: "BIRD ([A-Za-z0-9]+)",
            deviceReplacement: "Bird $1"
        }, {
            regex: "Dell ([A-Za-z0-9]+)",
            deviceReplacement: "Dell $1"
        }, {
            regex: "DoCoMo/2\\.0 ([A-Za-z0-9]+)",
            deviceReplacement: "DoCoMo $1"
        }, {
            regex: "([A-Za-z0-9]+)_W\\;FOMA",
            deviceReplacement: "DoCoMo $1"
        }, {
            regex: "([A-Za-z0-9]+)\\;FOMA",
            deviceReplacement: "DoCoMo $1"
        }, {
            regex: "Huawei([A-Za-z0-9]+)",
            deviceReplacement: "Huawei $1"
        }, {
            regex: "HUAWEI-([A-Za-z0-9]+)",
            deviceReplacement: "Huawei $1"
        }, {
            regex: "vodafone([A-Za-z0-9]+)",
            deviceReplacement: "Huawei Vodafone $1"
        }, {
            regex: "i\\-mate ([A-Za-z0-9]+)",
            deviceReplacement: "i-mate $1"
        }, {
            regex: "Kyocera\\-([A-Za-z0-9]+)",
            deviceReplacement: "Kyocera $1"
        }, {
            regex: "KWC\\-([A-Za-z0-9]+)",
            deviceReplacement: "Kyocera $1"
        }, {
            regex: "Lenovo\\-([A-Za-z0-9]+)",
            deviceReplacement: "Lenovo $1"
        }, {
            regex: "Lenovo_([A-Za-z0-9]+)",
            deviceReplacement: "Lenovo $1"
        }, {
            regex: "(HbbTV)/[0-9]+\\.[0-9]+\\.[0-9]+"
        }, {
            regex: "LG/([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        },
        {
            regex: "LG-LG([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LGE-LG([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LGE VX([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LG ([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LGE LG\\-AX([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LG\\-([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LGE\\-([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "LG([A-Za-z0-9]+)",
            deviceReplacement: "LG $1"
        }, {
            regex: "(KIN)\\.One (\\d+)\\.(\\d+)",
            deviceReplacement: "Microsoft $1"
        },
        {
            regex: "(KIN)\\.Two (\\d+)\\.(\\d+)",
            deviceReplacement: "Microsoft $1"
        }, {
            regex: "(Motorola)\\-([A-Za-z0-9]+)"
        }, {
            regex: "MOTO\\-([A-Za-z0-9]+)",
            deviceReplacement: "Motorola $1"
        }, {
            regex: "MOT\\-([A-Za-z0-9]+)",
            deviceReplacement: "Motorola $1"
        }, {
            regex: "(Nintendo WiiU)",
            deviceReplacement: "Nintendo Wii U"
        }, {
            regex: "Nintendo (DS|3DS|DSi|Wii);",
            deviceReplacement: "Nintendo $1"
        }, {
            regex: "Pantech([A-Za-z0-9]+)",
            deviceReplacement: "Pantech $1"
        }, {
            regex: "Philips([A-Za-z0-9]+)",
            deviceReplacement: "Philips $1"
        }, {
            regex: "Philips ([A-Za-z0-9]+)",
            deviceReplacement: "Philips $1"
        }, {
            regex: "SAMSUNG-([A-Za-z0-9\\-]+)",
            deviceReplacement: "Samsung $1"
        }, {
            regex: "SAMSUNG\\; ([A-Za-z0-9\\-]+)",
            deviceReplacement: "Samsung $1"
        }, {
            regex: "Dreamcast",
            deviceReplacement: "Sega Dreamcast"
        }, {
            regex: "Softbank/1\\.0/([A-Za-z0-9]+)",
            deviceReplacement: "Softbank $1"
        }, {
            regex: "Softbank/2\\.0/([A-Za-z0-9]+)",
            deviceReplacement: "Softbank $1"
        }, {
            regex: "(WebTV)/(\\d+).(\\d+)"
        }, {
            regex: "(hiptop|avantgo|plucker|xiino|blazer|elaine|up.browser|up.link|mmp|smartphone|midp|wap|vodafone|o2|pocket|mobile|pda)",
            deviceReplacement: "Generic Smartphone"
        }, {
            regex: "^(1207|3gso|4thp|501i|502i|503i|504i|505i|506i|6310|6590|770s|802s|a wa|acer|acs\\-|airn|alav|asus|attw|au\\-m|aur |aus |abac|acoo|aiko|alco|alca|amoi|anex|anny|anyw|aptu|arch|argo|bell|bird|bw\\-n|bw\\-u|beck|benq|bilb|blac|c55/|cdm\\-|chtm|capi|comp|cond|craw|dall|dbte|dc\\-s|dica|ds\\-d|ds12|dait|devi|dmob|doco|dopo|el49|erk0|esl8|ez40|ez60|ez70|ezos|ezze|elai|emul|eric|ezwa|fake|fly\\-|fly_|g\\-mo|g1 u|g560|gf\\-5|grun|gene|go.w|good|grad|hcit|hd\\-m|hd\\-p|hd\\-t|hei\\-|hp i|hpip|hs\\-c|htc |htc\\-|htca|htcg)",
            deviceReplacement: "Generic Feature Phone"
        }, {
            regex: "^(htcp|htcs|htct|htc_|haie|hita|huaw|hutc|i\\-20|i\\-go|i\\-ma|i230|iac|iac\\-|iac/|ig01|im1k|inno|iris|jata|java|kddi|kgt|kgt/|kpt |kwc\\-|klon|lexi|lg g|lg\\-a|lg\\-b|lg\\-c|lg\\-d|lg\\-f|lg\\-g|lg\\-k|lg\\-l|lg\\-m|lg\\-o|lg\\-p|lg\\-s|lg\\-t|lg\\-u|lg\\-w|lg/k|lg/l|lg/u|lg50|lg54|lge\\-|lge/|lynx|leno|m1\\-w|m3ga|m50/|maui|mc01|mc21|mcca|medi|meri|mio8|mioa|mo01|mo02|mode|modo|mot |mot\\-|mt50|mtp1|mtv |mate|maxo|merc|mits|mobi|motv|mozz|n100|n101|n102|n202|n203|n300|n302|n500|n502|n505|n700|n701|n710|nec\\-|nem\\-|newg|neon)",
            deviceReplacement: "Generic Feature Phone"
        }, {
            regex: "^(netf|noki|nzph|o2 x|o2\\-x|opwv|owg1|opti|oran|ot\\-s|p800|pand|pg\\-1|pg\\-2|pg\\-3|pg\\-6|pg\\-8|pg\\-c|pg13|phil|pn\\-2|pt\\-g|palm|pana|pire|pock|pose|psio|qa\\-a|qc\\-2|qc\\-3|qc\\-5|qc\\-7|qc07|qc12|qc21|qc32|qc60|qci\\-|qwap|qtek|r380|r600|raks|rim9|rove|s55/|sage|sams|sc01|sch\\-|scp\\-|sdk/|se47|sec\\-|sec0|sec1|semc|sgh\\-|shar|sie\\-|sk\\-0|sl45|slid|smb3|smt5|sp01|sph\\-|spv |spv\\-|sy01|samm|sany|sava|scoo|send|siem|smar|smit|soft|sony|t\\-mo|t218|t250|t600|t610|t618|tcl\\-|tdg\\-|telm|tim\\-|ts70|tsm\\-|tsm3|tsm5|tx\\-9|tagt)",
            deviceReplacement: "Generic Feature Phone"
        }, {
            regex: "^(talk|teli|topl|tosh|up.b|upg1|utst|v400|v750|veri|vk\\-v|vk40|vk50|vk52|vk53|vm40|vx98|virg|vite|voda|vulc|w3c |w3c\\-|wapj|wapp|wapu|wapm|wig |wapi|wapr|wapv|wapy|wapa|waps|wapt|winc|winw|wonu|x700|xda2|xdag|yas\\-|your|zte\\-|zeto|aste|audi|avan|blaz|brew|brvw|bumb|ccwa|cell|cldc|cmd\\-|dang|eml2|fetc|hipt|http|ibro|idea|ikom|ipaq|jbro|jemu|jigs|keji|kyoc|kyok|libw|m\\-cr|midp|mmef|moto|mwbp|mywa|newt|nok6|o2im|pant|pdxg|play|pluc|port|prox|rozo|sama|seri|smal|symb|treo|upsi|vx52|vx53|vx60|vx61|vx70|vx80|vx81|vx83|vx85|wap\\-|webc|whit|wmlb|xda\\-|xda_)",
            deviceReplacement: "Generic Feature Phone"
        }, {
            regex: "(bot|borg|google(^tv)|yahoo|slurp|msnbot|msrbot|openbot|archiver|netresearch|lycos|scooter|altavista|teoma|gigabot|baiduspider|blitzbot|oegp|charlotte|furlbot|http%20client|polybot|htdig|ichiro|mogimogi|larbin|pompos|scrubby|searchsight|seekbot|semanticdiscovery|silk|snappy|speedy|spider|voila|vortex|voyager|zao|zeal|fast\\-webcrawler|converacrawler|dataparksearch|findlinks|crawler)",
            deviceReplacement: "Spider"
        }
    ]
};
function fb(a) {
    a && (X = a);
    for (a = 0; a < X.userAgentParsers.length; a++) {
        var b = new RegExp(X.userAgentParsers[a].regex), c = b.exec(navigator.userAgent);
        if (c)
            return console.log(navigator.userAgent, b, this), X.userAgentParsers[a].familyReplacement ? X.userAgentParsers[a].familyReplacement : c[1];
    }
}
x("ww.userAgent.getBrowserName", fb);
function gb(a) {
    a && (X = a);
    for (a = 0; a < X.userAgentParsers.length; a++) {
        var b = (new RegExp(X.userAgentParsers[a].regex)).exec(navigator.userAgent);
        if (b)
            return X.userAgentParsers[a].v1Replacement ? (b = X.userAgentParsers[a].v1Replacement, X.userAgentParsers[a].v2Replacement && (b += "." + X.userAgentParsers[a].v2Replacement)) : b = b[2], b;
    }
}
x("ww.userAgent.getBrowserV", gb);
function hb(a) {
    a && (X = a);
    for (a = 0; a < X.osParsers.length; a++) {
        var b = (new RegExp(X.osParsers[a].regex)).exec(navigator.userAgent);
        if (b)
            return X.osParsers[a].osReplacement ? X.osParsers[a].osReplacement : b[1];
    }
}
x("ww.userAgent.getOS", hb);
function ib(a) {
    a && (X = a);
    for (a = 0; a < X.osParsers.length; a++) {
        var b = (new RegExp(X.osParsers[a].regex)).exec(navigator.userAgent);
        if (b) {
            if (X.osParsers[a].osV1Replacement) {
                var c = X.osParsers[a].osV1Replacement;
                X.osParsers[a].osV2Replacement && (c += "." + X.osParsers[a].osV2Replacement);
            }
            else
                c = "", b[2] && (c += b[2]), b[3] && (c += "." + b[3]), b[4] && (c += "." + b[4]);
            return c;
        }
    }
}
x("ww.userAgent.getOSV", ib);
function Y(a) {
    a && (X = a);
    for (a = 0; a < X.deviceParsers.length; a++)
        if ((new RegExp(X.deviceParsers[a].regex)).exec(navigator.userAgent))
            return !0;
}
x("ww.userAgent.isMobile", Y);
var jb = function () {
    var a = [];
    return {
        getAll: function () {
            return a;
        },
        O: function () {
            a = [];
        },
        add: function (b) {
            a.push(b);
        },
        remove: function (b) {
            b = a.indexOf(b);
            -1 !== b && a.splice(b, 1);
        },
        update: function (b, c) {
            if (c)
                for (var d = 0, e = a.length; d < e; d++)
                    a[d].update(b, c);
            else
                for (d = 0, e = a.length; d < e;)
                    a[d].update(b, c) ? d++ : (a.splice(d, 1), e--);
        }
    };
}();
function kb(a) {
    return a;
}
function Z(a) {
    return 0 === a ? 0 : 1 === a ? 1 : 1 > (a *= 2) ? .5 * Math.pow(1024, a - 1) : .5 * (-Math.pow(2, -10 * (a - 1)) + 2);
}
function lb(a) {
    return 1 - mb(1 - a);
}
function mb(a) {
    return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375;
}
x("EASING.LIN", kb);
x("EASING.QUADRATIC.IN", function (a) {
    return a * a;
});
x("EASING.QUADRATIC.OUT", function (a) {
    return a * (2 - a);
});
x("EASING.QUADRATIC.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a : -.5 * (--a * (a - 2) - 1);
});
x("EASING.CUBIC.IN", function (a) {
    return a * a * a;
});
x("EASING.CUBIC.OUT", function (a) {
    return --a * a * a + 1;
});
x("EASING.CUBIC.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a * a : .5 * ((a -= 2) * a * a + 2);
});
x("EASING.QUARTIC.IN", function (a) {
    return a * a * a * a;
});
x("EASING.QUARTIC.OUT", function (a) {
    --a;
    return 1 - a * a * a * a;
});
x("EASING.QUARTIC.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a * a * a : -.5 * ((a -= 2) * a * a * a - 2);
});
x("EASING.QUINTIC.IN", function (a) {
    return a * a * a * a * a;
});
x("EASING.QUINTIC.OUT", function (a) {
    return --a * a * a * a * a + 1;
});
x("EASING.QUINTIC.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a * a * a * a : .5 * ((a -= 2) * a * a * a * a + 2);
});
x("EASING.SINUSOIDAL.IN", function (a) {
    return 1 - Math.cos(a * Math.PI / 2);
});
x("EASING.SINUSOIDAL.OUT", function (a) {
    return Math.sin(a * Math.PI / 2);
});
x("EASING.SINUSOIDAL.INOUT", function (a) {
    return .5 * (1 - Math.cos(Math.PI * a));
});
x("EASING.EXPONENTIAL.IN", function (a) {
    return 0 === a ? 0 : Math.pow(1024, a - 1);
});
x("EASING.EXPONENTIAL.OUT", function (a) {
    return 1 === a ? 1 : 1 - Math.pow(2, -10 * a);
});
x("EASING.EXPONENTIAL.INOUT", Z);
x("EASING.CIRCULAR.IN", function (a) {
    return 1 - Math.sqrt(1 - a * a);
});
x("EASING.CIRCULAR.OUT", function (a) {
    --a;
    return Math.sqrt(1 - a * a);
});
x("EASING.CIRCULAR.INOUT", function (a) {
    return 1 > (a *= 2) ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
});
x("EASING.BACK.IN", function (a) {
    return a * a * (2.70158 * a - 1.70158);
});
x("EASING.BACK.OUT", function (a) {
    return --a * a * (2.70158 * a + 1.70158) + 1;
});
x("EASING.BACK.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a * (3.5949095 * a - 2.5949095) : .5 * ((a -= 2) * a * (3.5949095 * a + 2.5949095) + 2);
});
x("EASING.DOUBLEBACK.IN", function (a) {
    return a * a * (4.40316 * a - 3.40316);
});
x("EASING.DOUBLEBACK.OUT", function (a) {
    return --a * a * (4.40316 * a + 3.40316) + 1;
});
x("EASING.DOUBLEBACK.INOUT", function (a) {
    return 1 > (a *= 2) ? .5 * a * a * (6.189819 * a - 5.189819) : .5 * ((a -= 2) * a * (6.189819 * a + 5.189819) + 2);
});
x("EASING.ELASTIC.IN", function (a) {
    var b, c = .1;
    if (0 === a)
        return 0;
    if (1 === a)
        return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    b = Math.sin(2 * (a - b) * Math.PI / .4);
    return -(c * Math.pow(2, 10 * --a) * b);
});
x("EASING.ELASTIC.OUT", function (a) {
    var b, c = .1;
    if (0 === a)
        return 0;
    if (1 === a)
        return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    return c * Math.pow(2, -10 * a) * Math.sin(2 * (a - b) * Math.PI / .4) + 1;
});
x("EASING.ELASTIC.INOUT", function (a) {
    var b, c = .1;
    if (0 === a)
        return 0;
    if (1 === a)
        return 1;
    !c || 1 > c ? (c = 1, b = .1) : b = .4 * Math.asin(1 / c) / (2 * Math.PI);
    b = Math.sin(2 * (a - b) * Math.PI / .4);
    return 1 > (a *= 2) ? -.5 * c * Math.pow(2, 10 * --a) * b : c * Math.pow(2, -10 * --a) * b * .5 + 1;
});
x("EASING.BOUNCE.IN", lb);
x("EASING.BOUNCE.OUT", mb);
x("EASING.BOUNCE.INOUT", function (a) {
    return .5 > a ? .5 * lb(2 * a) : .5 * mb(2 * a - 1) + .5;
});
function nb() {
    var a = {
        scrollY: Ba().y
    }, b = {}, c = {}, d = 1E3, e = null, f = kb, h = "EASING.LIN", g = null, p = null;
    this.R = function (a) {
        null !== a && (d = a);
        c = {
            scrollY: 0
        };
        return this;
    };
    this.reset = function (d) {
        if (d) {
            a = d;
            b = {};
            for (var e in a)
                a.hasOwnProperty(e) && (b[e] = a[e]);
        }
        else
            for (var f in c)
                c.hasOwnProperty(f) && (a[f] = b[f] || a[f]);
        this.update(0, !0);
    };
    this.start = function (d) {
        jb.add(this);
        e = void 0 !== d ? d : Date.now();
        e += 0;
        for (var f in c)
            if (c.hasOwnProperty(f) && null !== a[f] && null !== a[f]) {
                if (c[f] instanceof Array) {
                    if (0 === c[f].length)
                        continue;
                    c[f] = [a[f]].concat(c[f]);
                }
                b[f] = a[f];
            }
        return this;
    };
    this.stop = function () {
        jb.remove(this);
        return this;
    };
    this.D = function () {
        n(Z) ? (h = Z, f = eb.V.U(h)) : (h = "unknown", f = Z);
        return this;
    };
    this.N = function (a) {
        g = a;
        return this;
    };
    this.K = function (a) {
        p = a;
        return this;
    };
    this.update = function (h, u) {
        if (!u && h < e)
            return !0;
        var q = (h - e) / d, q = 1 < q ? 1 : q, l = f(q);
        u && h < e && (l = 0);
        for (var R in b)
            if (b.hasOwnProperty(R)) {
                var F = b[R], r = c[R];
                if (r instanceof Array) {
                    var A = r.length - 1, F = A * l, G = Math.floor(F);
                    if (0 > l)
                        A = r[0], r = (r[1] - A) * F + A;
                    else if (1 < l)
                        G = r[A], r =
                            (r[A - 1] - G) * (A - F) + G;
                    else
                        var aa = r[G], r = (r[G + 1 > A ? A : G + 1] - aa) * (F - G) + aa;
                }
                else
                    r = F + (r - F) * l;
                a[R] = r;
            }
        null !== g && g.call(a, q);
        return 1 == q ? (null !== p && p.call(a), !1) : !0;
    };
}
(function () {
    var a = "", b = "", c = "", d = "";
    X ? (a = fb(X), b = gb(X), c = hb(X), d = ib(X), console.log("browserData present.")) : (a = fb(), b = gb(), c = hb(), d = ib());
    "IE" == a && 10 > parseInt(b) && O(document.body, "fix-ie");
    viewportWatchers_ = [];
    if (Y()) {
        var e;
        e = '<div class="share"><div class="g-plusone"></div></div>';
        N("page-footer-wrapper").innerHTML += e;
        var f = "only screen and (min-device-width: 768px)", h = Modernizr.mq(f);
        h ? O(document.body, "tablet") : O(document.body, "mobile");
        viewportRecalc_ = function () {
            f = "only screen and (min-device-width: 1024px)";
            h = Modernizr.mq(f);
            Modernizr.mq("only screen and (orientation: landscape)");
            var a = Modernizr.mq("only screen and (min-device-width: 800px)");
            Fa(document.body, "mobile", "tablet", "phablet");
            h ? O(document.body, "tablet") : a ? O(document.body, "mobile", "phablet") : O(document.body, "mobile");
        };
        for (var g = 0; g < viewportWatchers_.length; g++)
            viewportWatchers_[g]();
        viewportWatchResize = function (a, b) {
            v(a) && viewportAddWatcher(a);
            var c = new W(viewportRecalc_, "undefined" !== typeof b ? b : 50);
            V(window, "orientationchange", viewportRecalc_, !1);
            c.m();
        };
        viewportAddWatcher = function (a) {
            viewportWatchers_.push(a);
        };
        "iOS" != c && viewportWatchResize();
    }
    else
        e = '<div class="share"><div class="g-plusone" data-size="medium"></div></div>', N("page-header-wrapper").innerHTML += e;
    var p = M("browser-active"), B = N("browser-icon", p);
    e = N("browser-other");
    var u = M("current-browser-story"), q = M("story-update"), l = P(B, "none"), R = P(u, "none"), F = P(q, "none"), r = P(p, "current"), A = P(p, "newer"), G = P(p, "update"), aa = P(p, "updatechrome"), p = P(e, "chromeheader"), sb = P(u, "mobile"), Va = P(q, "prefix"), tb = P(q, "mobile"), ub = P(q, "update"), vb = P(q, "updatechrome");
    a ? (B.innerHTML += '<span class="' + a + '">&nbsp</span>', B.innerHTML += a + " " + b, u.innerHTML = a + " " + u.innerHTML) : B.innerHTML += l;
    B = N("browser-list");
    l = browserURLData ? {
        Android: browserURLData[0].Android,
        Chrome: browserURLData[0].Chrome,
        Dolphin: browserURLData[0].Dolphin,
        Firefox: browserURLData[0].Firefox,
        Edge: browserURLData[0].Edge,
        Opera: browserURLData[0].Opera,
        Safari: browserURLData[0].Safari
    } : {
        Android: "http://www.android.com/about",
        Chrome: "http://www.google.com/chrome",
        Dolphin: "http://dolphin-browser.com",
        Firefox: "http://www.getfirefox.com",
        Edge: "https://www.microsoft.com/en-us/windows/microsoft-edge",
        Opera: "http://www.opera.com",
        Safari: "http://www.apple.com/safari"
    };
    g = /(Windows)/.exec(c);
    if (Y())
        if ("Android" == c)
            var y = 4 > parseInt(d) ? {
                browsers: [{
                        browser: "Chrome",
                        url: l.Chrome
                    }, {
                        browser: "Firefox",
                        url: l.Firefox
                    }, {
                        browser: "Safari",
                        url: l.Safari
                    }, {
                        browser: "Edge",
                        url: l.Edge
                    }]
            } : {
                browsers: [{
                        browser: "Chrome",
                        url: l.Chrome
                    }, {
                        browser: "Firefox",
                        url: l.Firefox
                    }, {
                        browser: "Safari",
                        url: l.Safari
                    }, {
                        browser: "Edge",
                        url: l.Edge
                    }]
            };
        else
            "iOS" == c && (y = {
                browsers: [{
                        browser: "Chrome",
                        url: l.Chrome
                    }, {
                        browser: "Firefox",
                        url: l.Firefox
                    }, {
                        browser: "Safari",
                        url: l.Safari
                    }, {
                        browser: "Edge",
                        url: l.Edge
                    }]
            });
    else
        y = "Mac OS X" == c ? {
            browsers: [{
                    browser: "Chrome",
                    url: l.Chrome
                }, {
                    browser: "Firefox",
                    url: l.Firefox
                }, {
                    browser: "Safari",
                    url: l.Safari
                }, {
                    browser: "Edge",
                    url: l.Edge
                }]
        } : g ? {
            browsers: [{
                    browser: "Chrome",
                    url: l.Chrome
                }, {
                    browser: "Firefox",
                    url: l.Firefox
                }, {
                    browser: "Safari",
                    url: l.Safari
                }, {
                    browser: "Edge",
                    url: l.Edge
                }]
        } : {
            browsers: [{
                    browser: "Chrome",
                    url: l.Chrome
                }, {
                    browser: "Firefox",
                    url: l.Firefox
                }, {
                    browser: "Safari",
                    url: l.Safari
                }, {
                    browser: "Edge",
                    url: l.Edge
                }]
        };
    if (y) {
        d = "";
        for (g = 0; g < y.browsers.length; g++)
            (d += '<li class="browser-icon">', d += '<a href="', d += y.browsers[g].url + '"', d += ' class="', d += y.browsers[g].browser + '"><span>', d = y.browsers[g].alt ? d + y.browsers[g].alt : d + y.browsers[g].browser, d += "</span></a></li>");
        B.innerHTML = d;
        "Chrome OS" == c ? (browserVersions && (c = l[a], browserVersions[0]["Chrome OS"] && parseInt(b) < browserVersions[0]["Chrome OS"] ? (b = '<div class="update">' + A + ' <a href="http://support.google.com', b += '/chromeos/bin/answer.py?hl=en&answer=177889">', b += aa + "</a></div>", M("browser-active").innerHTML +=
            b, b = Va + ' <a href="http://support.google.com', b += '/chromeos/bin/answer.py?hl=en&answer=177889">', b += vb, q.innerHTML = b) : browserVersions[0]["Chrome OS"] && parseInt(b) >= browserVersions[0]["Chrome OS"] && (M("browser-active").innerHTML += '<div class="update">' + r + "</div>")), N("h2", e).innerHTML = p, Da(N("browser-details"))) : browserVersions && !Y() && (c = l[a], browserVersions[0][a] && parseInt(b) < browserVersions[0][a] ? (b = '<div class="update">' + A + (" <a href=" + c + ">"), b += G + "</a></div>", M("browser-active").innerHTML += b, b =
            Va + (' <a href="' + c + '">'), b += ub, q.innerHTML = b) : browserVersions[0][a] && parseInt(b) >= browserVersions[0][a] && (M("browser-active").innerHTML += '<div class="update">' + r + "</div>"));
    }
    else
        Da(N("browser-other"));
    Y() ? (u.innerHTML = sb, q.innerHTML = tb) : a || (u.innerHTML = R, q.innerHTML = F);
})();
(function () {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.CancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var c = (new Date).getTime(), f = Math.max(0, 16 - (c - a)), h = window.setTimeout(function () {
            b(c + f);
        }, f);
        a = c + f;
        return h;
    });
    window.CancelAnimationFrame || (window.CancelAnimationFrame =
        function (a) {
            clearTimeout(a);
        });
})();
function ob() {
    function a(b) {
        b || (b = +new Date);
        d.update(b);
        d.done ? e.B = !1 : requestAnimationFrame(a);
    }
    var b;
    b = 500;
    var c = Ca(document), d = (new nb).R(b).D().N(function () {
        c.scrollTop = this.scrollY;
        e.T = this.scrollY;
    }).K(function () {
        d.done = !0;
    }).start(), e = this;
    e.B = !0;
    requestAnimationFrame(a);
}
var pb = N("scroll-top");
V(pb, "click", function () {
    ob();
});
var qb = M("animation-speedometer"), rb = Ia(qb).y, wb = M("animation-lock"), xb = Ia(wb).y, yb = M("animation-capabilities"), zb = Ia(yb).y, Ab = new W(function () {
    var a = Ba().y, b = Aa().height, c = 1E3;
    Y() && (c = 0);
    a > rb - b && setTimeout(function () {
        Fa(qb, "paused");
        O(qb, "animate");
    }, 0 + c);
    a > xb - b && setTimeout(function () {
        O(wb, "animate");
    }, 1E3 + c);
    a > zb - b && setTimeout(function () {
        O(yb, "animate");
    }, 1E3 + c);
}, 200);
V(window, "scroll", function () {
    Ab.m();
});
Ab.m();
