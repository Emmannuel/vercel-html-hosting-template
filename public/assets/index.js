function sf(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, i);
                    l && Object.defineProperty(e, i, l.get ? l : { enumerable: !0, get: () => r[i] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver((i) => {
        for (const l of i) if (l.type === "childList") for (const s of l.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
        const l = {};
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === "use-credentials" ? (l.credentials = "include") : i.crossOrigin === "anonymous" ? (l.credentials = "omit") : (l.credentials = "same-origin"),
            l
        );
    }
    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const l = n(i);
        fetch(i.href, l);
    }
})();
var of = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Fs(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var du = { exports: {} },
    Fi = {},
    fu = { exports: {} },
    B = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xr = Symbol.for("react.element"),
    af = Symbol.for("react.portal"),
    uf = Symbol.for("react.fragment"),
    cf = Symbol.for("react.strict_mode"),
    df = Symbol.for("react.profiler"),
    ff = Symbol.for("react.provider"),
    pf = Symbol.for("react.context"),
    mf = Symbol.for("react.forward_ref"),
    hf = Symbol.for("react.suspense"),
    vf = Symbol.for("react.memo"),
    gf = Symbol.for("react.lazy"),
    Bo = Symbol.iterator;
function yf(e) {
    return e === null || typeof e != "object" ? null : ((e = (Bo && e[Bo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var pu = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    mu = Object.assign,
    hu = {};
function jn(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = hu), (this.updater = n || pu);
}
jn.prototype.isReactComponent = {};
jn.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState");
};
jn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function vu() {}
vu.prototype = jn.prototype;
function $s(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = hu), (this.updater = n || pu);
}
var Vs = ($s.prototype = new vu());
Vs.constructor = $s;
mu(Vs, jn.prototype);
Vs.isPureReactComponent = !0;
var Fo = Array.isArray,
    gu = Object.prototype.hasOwnProperty,
    Hs = { current: null },
    yu = { key: !0, ref: !0, __self: !0, __source: !0 };
function xu(e, t, n) {
    var r,
        i = {},
        l = null,
        s = null;
    if (t != null) for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (l = "" + t.key), t)) gu.call(t, r) && !yu.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
        for (var o = Array(a), c = 0; c < a; c++) o[c] = arguments[c + 2];
        i.children = o;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return { $$typeof: xr, type: e, key: l, ref: s, props: i, _owner: Hs.current };
}
function xf(e, t) {
    return { $$typeof: xr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Us(e) {
    return typeof e == "object" && e !== null && e.$$typeof === xr;
}
function wf(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var $o = /\/+/g;
function sl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? wf("" + e.key) : t.toString(36);
}
function Gr(e, t, n, r, i) {
    var l = typeof e;
    (l === "undefined" || l === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (l) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case xr:
                    case af:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (i = i(s)),
            (e = r === "" ? "." + sl(s, 0) : r),
            Fo(i)
                ? ((n = ""),
                  e != null && (n = e.replace($o, "$&/") + "/"),
                  Gr(i, t, n, "", function (c) {
                      return c;
                  }))
                : i != null && (Us(i) && (i = xf(i, n + (!i.key || (s && s.key === i.key) ? "" : ("" + i.key).replace($o, "$&/") + "/") + e)), t.push(i)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Fo(e)))
        for (var a = 0; a < e.length; a++) {
            l = e[a];
            var o = r + sl(l, a);
            s += Gr(l, t, n, o, i);
        }
    else if (((o = yf(e)), typeof o == "function")) for (e = o.call(e), a = 0; !(l = e.next()).done; ) (l = l.value), (o = r + sl(l, a++)), (s += Gr(l, t, n, o, i));
    else if (l === "object")
        throw (
            ((t = String(e)),
            Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead."))
        );
    return s;
}
function _r(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return (
        Gr(e, r, "", "", function (l) {
            return t.call(n, l, i++);
        }),
        r
    );
}
function Sf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var ve = { current: null },
    Yr = { transition: null },
    Ef = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: Yr, ReactCurrentOwner: Hs };
B.Children = {
    map: _r,
    forEach: function (e, t, n) {
        _r(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            _r(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            _r(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Us(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
B.Component = jn;
B.Fragment = uf;
B.Profiler = df;
B.PureComponent = $s;
B.StrictMode = cf;
B.Suspense = hf;
B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ef;
B.cloneElement = function (e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = mu({}, e.props),
        i = e.key,
        l = e.ref,
        s = e._owner;
    if (t != null) {
        if ((t.ref !== void 0 && ((l = t.ref), (s = Hs.current)), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps)) var a = e.type.defaultProps;
        for (o in t) gu.call(t, o) && !yu.hasOwnProperty(o) && (r[o] = t[o] === void 0 && a !== void 0 ? a[o] : t[o]);
    }
    var o = arguments.length - 2;
    if (o === 1) r.children = n;
    else if (1 < o) {
        a = Array(o);
        for (var c = 0; c < o; c++) a[c] = arguments[c + 2];
        r.children = a;
    }
    return { $$typeof: xr, type: e.type, key: i, ref: l, props: r, _owner: s };
};
B.createContext = function (e) {
    return (e = { $$typeof: pf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }), (e.Provider = { $$typeof: ff, _context: e }), (e.Consumer = e);
};
B.createElement = xu;
B.createFactory = function (e) {
    var t = xu.bind(null, e);
    return (t.type = e), t;
};
B.createRef = function () {
    return { current: null };
};
B.forwardRef = function (e) {
    return { $$typeof: mf, render: e };
};
B.isValidElement = Us;
B.lazy = function (e) {
    return { $$typeof: gf, _payload: { _status: -1, _result: e }, _init: Sf };
};
B.memo = function (e, t) {
    return { $$typeof: vf, type: e, compare: t === void 0 ? null : t };
};
B.startTransition = function (e) {
    var t = Yr.transition;
    Yr.transition = {};
    try {
        e();
    } finally {
        Yr.transition = t;
    }
};
B.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
};
B.useCallback = function (e, t) {
    return ve.current.useCallback(e, t);
};
B.useContext = function (e) {
    return ve.current.useContext(e);
};
B.useDebugValue = function () {};
B.useDeferredValue = function (e) {
    return ve.current.useDeferredValue(e);
};
B.useEffect = function (e, t) {
    return ve.current.useEffect(e, t);
};
B.useId = function () {
    return ve.current.useId();
};
B.useImperativeHandle = function (e, t, n) {
    return ve.current.useImperativeHandle(e, t, n);
};
B.useInsertionEffect = function (e, t) {
    return ve.current.useInsertionEffect(e, t);
};
B.useLayoutEffect = function (e, t) {
    return ve.current.useLayoutEffect(e, t);
};
B.useMemo = function (e, t) {
    return ve.current.useMemo(e, t);
};
B.useReducer = function (e, t, n) {
    return ve.current.useReducer(e, t, n);
};
B.useRef = function (e) {
    return ve.current.useRef(e);
};
B.useState = function (e) {
    return ve.current.useState(e);
};
B.useSyncExternalStore = function (e, t, n) {
    return ve.current.useSyncExternalStore(e, t, n);
};
B.useTransition = function () {
    return ve.current.useTransition();
};
B.version = "18.2.0";
fu.exports = B;
var z = fu.exports;
const ee = Fs(z),
    Tf = sf({ __proto__: null, default: ee }, [z]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cf = z,
    kf = Symbol.for("react.element"),
    Pf = Symbol.for("react.fragment"),
    _f = Object.prototype.hasOwnProperty,
    jf = Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function wu(e, t, n) {
    var r,
        i = {},
        l = null,
        s = null;
    n !== void 0 && (l = "" + n), t.key !== void 0 && (l = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) _f.call(t, r) && !Nf.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return { $$typeof: kf, type: e, key: l, ref: s, props: i, _owner: jf.current };
}
Fi.Fragment = Pf;
Fi.jsx = wu;
Fi.jsxs = wu;
du.exports = Fi;
var h = du.exports,
    Bl = {},
    Su = { exports: {} },
    Ne = {},
    Eu = { exports: {} },
    Tu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(j, O) {
        var b = j.length;
        j.push(O);
        e: for (; 0 < b; ) {
            var $ = (b - 1) >>> 1,
                X = j[$];
            if (0 < i(X, O)) (j[$] = O), (j[b] = X), (b = $);
            else break e;
        }
    }
    function n(j) {
        return j.length === 0 ? null : j[0];
    }
    function r(j) {
        if (j.length === 0) return null;
        var O = j[0],
            b = j.pop();
        if (b !== O) {
            j[0] = b;
            e: for (var $ = 0, X = j.length, kr = X >>> 1; $ < kr; ) {
                var Ot = 2 * ($ + 1) - 1,
                    ll = j[Ot],
                    Rt = Ot + 1,
                    Pr = j[Rt];
                if (0 > i(ll, b)) Rt < X && 0 > i(Pr, ll) ? ((j[$] = Pr), (j[Rt] = b), ($ = Rt)) : ((j[$] = ll), (j[Ot] = b), ($ = Ot));
                else if (Rt < X && 0 > i(Pr, b)) (j[$] = Pr), (j[Rt] = b), ($ = Rt);
                else break e;
            }
        }
        return O;
    }
    function i(j, O) {
        var b = j.sortIndex - O.sortIndex;
        return b !== 0 ? b : j.id - O.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var l = performance;
        e.unstable_now = function () {
            return l.now();
        };
    } else {
        var s = Date,
            a = s.now();
        e.unstable_now = function () {
            return s.now() - a;
        };
    }
    var o = [],
        c = [],
        p = 1,
        m = null,
        v = 3,
        g = !1,
        w = !1,
        x = !1,
        S = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        u = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(j) {
        for (var O = n(c); O !== null; ) {
            if (O.callback === null) r(c);
            else if (O.startTime <= j) r(c), (O.sortIndex = O.expirationTime), t(o, O);
            else break;
            O = n(c);
        }
    }
    function y(j) {
        if (((x = !1), d(j), !w))
            if (n(o) !== null) (w = !0), Y(E);
            else {
                var O = n(c);
                O !== null && Je(y, O.startTime - j);
            }
    }
    function E(j, O) {
        (w = !1), x && ((x = !1), f(T), (T = -1)), (g = !0);
        var b = v;
        try {
            for (d(O), m = n(o); m !== null && (!(m.expirationTime > O) || (j && !N())); ) {
                var $ = m.callback;
                if (typeof $ == "function") {
                    (m.callback = null), (v = m.priorityLevel);
                    var X = $(m.expirationTime <= O);
                    (O = e.unstable_now()), typeof X == "function" ? (m.callback = X) : m === n(o) && r(o), d(O);
                } else r(o);
                m = n(o);
            }
            if (m !== null) var kr = !0;
            else {
                var Ot = n(c);
                Ot !== null && Je(y, Ot.startTime - O), (kr = !1);
            }
            return kr;
        } finally {
            (m = null), (v = b), (g = !1);
        }
    }
    var P = !1,
        _ = null,
        T = -1,
        k = 5,
        C = -1;
    function N() {
        return !(e.unstable_now() - C < k);
    }
    function I() {
        if (_ !== null) {
            var j = e.unstable_now();
            C = j;
            var O = !0;
            try {
                O = _(!0, j);
            } finally {
                O ? L() : ((P = !1), (_ = null));
            }
        } else P = !1;
    }
    var L;
    if (typeof u == "function")
        L = function () {
            u(I);
        };
    else if (typeof MessageChannel < "u") {
        var D = new MessageChannel(),
            A = D.port2;
        (D.port1.onmessage = I),
            (L = function () {
                A.postMessage(null);
            });
    } else
        L = function () {
            S(I, 0);
        };
    function Y(j) {
        (_ = j), P || ((P = !0), L());
    }
    function Je(j, O) {
        T = S(function () {
            j(e.unstable_now());
        }, O);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (j) {
            j.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            w || g || ((w = !0), Y(E));
        }),
        (e.unstable_forceFrameRate = function (j) {
            0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : (k = 0 < j ? Math.floor(1e3 / j) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return v;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(o);
        }),
        (e.unstable_next = function (j) {
            switch (v) {
                case 1:
                case 2:
                case 3:
                    var O = 3;
                    break;
                default:
                    O = v;
            }
            var b = v;
            v = O;
            try {
                return j();
            } finally {
                v = b;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (j, O) {
            switch (j) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    j = 3;
            }
            var b = v;
            v = j;
            try {
                return O();
            } finally {
                v = b;
            }
        }),
        (e.unstable_scheduleCallback = function (j, O, b) {
            var $ = e.unstable_now();
            switch ((typeof b == "object" && b !== null ? ((b = b.delay), (b = typeof b == "number" && 0 < b ? $ + b : $)) : (b = $), j)) {
                case 1:
                    var X = -1;
                    break;
                case 2:
                    X = 250;
                    break;
                case 5:
                    X = 1073741823;
                    break;
                case 4:
                    X = 1e4;
                    break;
                default:
                    X = 5e3;
            }
            return (
                (X = b + X),
                (j = { id: p++, callback: O, priorityLevel: j, startTime: b, expirationTime: X, sortIndex: -1 }),
                b > $ ? ((j.sortIndex = b), t(c, j), n(o) === null && j === n(c) && (x ? (f(T), (T = -1)) : (x = !0), Je(y, b - $))) : ((j.sortIndex = X), t(o, j), w || g || ((w = !0), Y(E))),
                j
            );
        }),
        (e.unstable_shouldYield = N),
        (e.unstable_wrapCallback = function (j) {
            var O = v;
            return function () {
                var b = v;
                v = O;
                try {
                    return j.apply(this, arguments);
                } finally {
                    v = b;
                }
            };
        });
})(Tu);
Eu.exports = Tu;
var Mf = Eu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Cu = z,
    je = Mf;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ku = new Set(),
    nr = {};
function Kt(e, t) {
    Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
    for (nr[e] = t, e = 0; e < t.length; e++) ku.add(t[e]);
}
var ot = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Fl = Object.prototype.hasOwnProperty,
    Lf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vo = {},
    Ho = {};
function zf(e) {
    return Fl.call(Ho, e) ? !0 : Fl.call(Vo, e) ? !1 : Lf.test(e) ? (Ho[e] = !0) : ((Vo[e] = !0), !1);
}
function If(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function Of(e, t, n, r) {
    if (t === null || typeof t > "u" || If(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function ge(e, t, n, r, i, l, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4), (this.attributeName = r), (this.attributeNamespace = i), (this.mustUseProperty = n), (this.propertyName = e), (this.type = t), (this.sanitizeURL = l), (this.removeEmptyString = s);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) {
    ue[e] = new ge(e, 0, !1, e, null, !1, !1);
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    ue[t] = new ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    ue[e] = new ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        ue[e] = new ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    ue[e] = new ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    ue[e] = new ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    ue[e] = new ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    ue[e] = new ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ws = /[\-:]([a-z])/g;
function Gs(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Ws, Gs);
        ue[t] = new ge(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Ws, Gs);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ws, Gs);
    ue[t] = new ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    ue[e] = new ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ys(e, t, n, r) {
    var i = ue.hasOwnProperty(t) ? ue[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (Of(t, n, i, r) && (n = null),
        r || i === null
            ? zf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
            : ((t = i.attributeName), (r = i.attributeNamespace), n === null ? e.removeAttribute(t) : ((i = i.type), (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n), r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dt = Cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    jr = Symbol.for("react.element"),
    en = Symbol.for("react.portal"),
    tn = Symbol.for("react.fragment"),
    Xs = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Pu = Symbol.for("react.provider"),
    _u = Symbol.for("react.context"),
    Qs = Symbol.for("react.forward_ref"),
    Vl = Symbol.for("react.suspense"),
    Hl = Symbol.for("react.suspense_list"),
    Ks = Symbol.for("react.memo"),
    pt = Symbol.for("react.lazy"),
    ju = Symbol.for("react.offscreen"),
    Uo = Symbol.iterator;
function Ln(e) {
    return e === null || typeof e != "object" ? null : ((e = (Uo && e[Uo]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var q = Object.assign,
    ol;
function Fn(e) {
    if (ol === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            ol = (t && t[1]) || "";
        }
    return (
        `
` +
        ol +
        e
    );
}
var al = !1;
function ul(e, t) {
    if (!e || al) return "";
    al = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var i = c.stack.split(`
`),
                    l = r.stack.split(`
`),
                    s = i.length - 1,
                    a = l.length - 1;
                1 <= s && 0 <= a && i[s] !== l[a];

            )
                a--;
            for (; 1 <= s && 0 <= a; s--, a--)
                if (i[s] !== l[a]) {
                    if (s !== 1 || a !== 1)
                        do
                            if ((s--, a--, 0 > a || i[s] !== l[a])) {
                                var o =
                                    `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", e.displayName)), o;
                            }
                        while (1 <= s && 0 <= a);
                    break;
                }
        }
    } finally {
        (al = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Rf(e) {
    switch (e.tag) {
        case 5:
            return Fn(e.type);
        case 16:
            return Fn("Lazy");
        case 13:
            return Fn("Suspense");
        case 19:
            return Fn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = ul(e.type, !1)), e;
        case 11:
            return (e = ul(e.type.render, !1)), e;
        case 1:
            return (e = ul(e.type, !0)), e;
        default:
            return "";
    }
}
function Ul(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case tn:
            return "Fragment";
        case en:
            return "Portal";
        case $l:
            return "Profiler";
        case Xs:
            return "StrictMode";
        case Vl:
            return "Suspense";
        case Hl:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case _u:
                return (e.displayName || "Context") + ".Consumer";
            case Pu:
                return (e._context.displayName || "Context") + ".Provider";
            case Qs:
                var t = e.render;
                return (e = e.displayName), e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")), e;
            case Ks:
                return (t = e.displayName || null), t !== null ? t : Ul(e.type) || "Memo";
            case pt:
                (t = e._payload), (e = e._init);
                try {
                    return Ul(e(t));
                } catch {}
        }
    return null;
}
function bf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (e = t.render), (e = e.displayName || e.name || ""), t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ul(t);
        case 8:
            return t === Xs ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Nt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Nu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Df(e) {
    var t = Nu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            l = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this);
                },
                set: function (s) {
                    (r = "" + s), l.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Nr(e) {
    e._valueTracker || (e._valueTracker = Df(e));
}
function Mu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Nu(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function ai(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Wl(e, t) {
    var n = t.checked;
    return q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Wo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Nt(t.value != null ? t.value : n)), (e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null });
}
function Lu(e, t) {
    (t = t.checked), t != null && Ys(e, "checked", t, !1);
}
function Gl(e, t) {
    Lu(e, t);
    var n = Nt(t.value),
        r = t.type;
    if (n != null) r === "number" ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value") ? Yl(e, t.type, n) : t.hasOwnProperty("defaultValue") && Yl(e, t.type, Nt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Go(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name), n !== "" && (e.name = ""), (e.defaultChecked = !!e._wrapperState.initialChecked), n !== "" && (e.name = n);
}
function Yl(e, t, n) {
    (t !== "number" || ai(e.ownerDocument) !== e) && (n == null ? (e.defaultValue = "" + e._wrapperState.initialValue) : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $n = Array.isArray;
function pn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) (i = t.hasOwnProperty("$" + e[n].value)), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Nt(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                (e[i].selected = !0), r && (e[i].defaultSelected = !0);
                return;
            }
            t !== null || e[i].disabled || (t = e[i]);
        }
        t !== null && (t.selected = !0);
    }
}
function Xl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
    return q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Yo(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(M(92));
            if ($n(n)) {
                if (1 < n.length) throw Error(M(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Nt(n) };
}
function zu(e, t) {
    var n = Nt(t.value),
        r = Nt(t.defaultValue);
    n != null && ((n = "" + n), n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Xo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Iu(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function Ql(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Iu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Mr,
    Ou = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (Mr = Mr || document.createElement("div"), Mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Mr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function rr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Wn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    Af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wn).forEach(function (e) {
    Af.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wn[t] = Wn[e]);
    });
});
function Ru(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || (Wn.hasOwnProperty(e) && Wn[e]) ? ("" + t).trim() : t + "px";
}
function bu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = Ru(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
        }
}
var Bf = q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Kl(e, t) {
    if (t) {
        if (Bf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(M(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(M(62));
    }
}
function ql(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Zl = null;
function qs(e) {
    return (e = e.target || e.srcElement || window), e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Jl = null,
    mn = null,
    hn = null;
function Qo(e) {
    if ((e = Er(e))) {
        if (typeof Jl != "function") throw Error(M(280));
        var t = e.stateNode;
        t && ((t = Wi(t)), Jl(e.stateNode, e.type, t));
    }
}
function Du(e) {
    mn ? (hn ? hn.push(e) : (hn = [e])) : (mn = e);
}
function Au() {
    if (mn) {
        var e = mn,
            t = hn;
        if (((hn = mn = null), Qo(e), t)) for (e = 0; e < t.length; e++) Qo(t[e]);
    }
}
function Bu(e, t) {
    return e(t);
}
function Fu() {}
var cl = !1;
function $u(e, t, n) {
    if (cl) return e(t, n);
    cl = !0;
    try {
        return Bu(e, t, n);
    } finally {
        (cl = !1), (mn !== null || hn !== null) && (Fu(), Au());
    }
}
function ir(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Wi(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))), (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(M(231, t, typeof n));
    return n;
}
var es = !1;
if (ot)
    try {
        var zn = {};
        Object.defineProperty(zn, "passive", {
            get: function () {
                es = !0;
            },
        }),
            window.addEventListener("test", zn, zn),
            window.removeEventListener("test", zn, zn);
    } catch {
        es = !1;
    }
function Ff(e, t, n, r, i, l, s, a, o) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (p) {
        this.onError(p);
    }
}
var Gn = !1,
    ui = null,
    ci = !1,
    ts = null,
    $f = {
        onError: function (e) {
            (Gn = !0), (ui = e);
        },
    };
function Vf(e, t, n, r, i, l, s, a, o) {
    (Gn = !1), (ui = null), Ff.apply($f, arguments);
}
function Hf(e, t, n, r, i, l, s, a, o) {
    if ((Vf.apply(this, arguments), Gn)) {
        if (Gn) {
            var c = ui;
            (Gn = !1), (ui = null);
        } else throw Error(M(198));
        ci || ((ci = !0), (ts = c));
    }
}
function qt(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Vu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Ko(e) {
    if (qt(e) !== e) throw Error(M(188));
}
function Uf(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = qt(e)), t === null)) throw Error(M(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null) break;
        var l = i.alternate;
        if (l === null) {
            if (((r = i.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n) return Ko(i), e;
                if (l === r) return Ko(i), t;
                l = l.sibling;
            }
            throw Error(M(188));
        }
        if (n.return !== r.return) (n = i), (r = l);
        else {
            for (var s = !1, a = i.child; a; ) {
                if (a === n) {
                    (s = !0), (n = i), (r = l);
                    break;
                }
                if (a === r) {
                    (s = !0), (r = i), (n = l);
                    break;
                }
                a = a.sibling;
            }
            if (!s) {
                for (a = l.child; a; ) {
                    if (a === n) {
                        (s = !0), (n = l), (r = i);
                        break;
                    }
                    if (a === r) {
                        (s = !0), (r = l), (n = i);
                        break;
                    }
                    a = a.sibling;
                }
                if (!s) throw Error(M(189));
            }
        }
        if (n.alternate !== r) throw Error(M(190));
    }
    if (n.tag !== 3) throw Error(M(188));
    return n.stateNode.current === n ? e : t;
}
function Hu(e) {
    return (e = Uf(e)), e !== null ? Uu(e) : null;
}
function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Uu(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Wu = je.unstable_scheduleCallback,
    qo = je.unstable_cancelCallback,
    Wf = je.unstable_shouldYield,
    Gf = je.unstable_requestPaint,
    te = je.unstable_now,
    Yf = je.unstable_getCurrentPriorityLevel,
    Zs = je.unstable_ImmediatePriority,
    Gu = je.unstable_UserBlockingPriority,
    di = je.unstable_NormalPriority,
    Xf = je.unstable_LowPriority,
    Yu = je.unstable_IdlePriority,
    $i = null,
    qe = null;
function Qf(e) {
    if (qe && typeof qe.onCommitFiberRoot == "function")
        try {
            qe.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var He = Math.clz32 ? Math.clz32 : Zf,
    Kf = Math.log,
    qf = Math.LN2;
function Zf(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Kf(e) / qf) | 0)) | 0;
}
var Lr = 64,
    zr = 4194304;
function Vn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function fi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var a = s & ~i;
        a !== 0 ? (r = Vn(a)) : ((l &= s), l !== 0 && (r = Vn(l)));
    } else (s = n & ~i), s !== 0 ? (r = Vn(s)) : l !== 0 && (r = Vn(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))) return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0)) for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - He(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
}
function Jf(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function ep(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
        var s = 31 - He(l),
            a = 1 << s,
            o = i[s];
        o === -1 ? (!(a & n) || a & r) && (i[s] = Jf(a, t)) : o <= t && (e.expiredLanes |= a), (l &= ~a);
    }
}
function ns(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xu() {
    var e = Lr;
    return (Lr <<= 1), !(Lr & 4194240) && (Lr = 64), e;
}
function dl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function wr(e, t, n) {
    (e.pendingLanes |= t), t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)), (e = e.eventTimes), (t = 31 - He(t)), (e[t] = n);
}
function tp(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t), (e.suspendedLanes = 0), (e.pingedLanes = 0), (e.expiredLanes &= t), (e.mutableReadLanes &= t), (e.entangledLanes &= t), (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - He(n),
            l = 1 << i;
        (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
}
function Js(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - He(n),
            i = 1 << r;
        (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
}
var V = 0;
function Qu(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ku,
    eo,
    qu,
    Zu,
    Ju,
    rs = !1,
    Ir = [],
    St = null,
    Et = null,
    Tt = null,
    lr = new Map(),
    sr = new Map(),
    ht = [],
    np = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
    );
function Zo(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            St = null;
            break;
        case "dragenter":
        case "dragleave":
            Et = null;
            break;
        case "mouseover":
        case "mouseout":
            Tt = null;
            break;
        case "pointerover":
        case "pointerout":
            lr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            sr.delete(t.pointerId);
    }
}
function In(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [i] }), t !== null && ((t = Er(t)), t !== null && eo(t)), e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), i !== null && t.indexOf(i) === -1 && t.push(i), e);
}
function rp(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return (St = In(St, e, t, n, r, i)), !0;
        case "dragenter":
            return (Et = In(Et, e, t, n, r, i)), !0;
        case "mouseover":
            return (Tt = In(Tt, e, t, n, r, i)), !0;
        case "pointerover":
            var l = i.pointerId;
            return lr.set(l, In(lr.get(l) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return (l = i.pointerId), sr.set(l, In(sr.get(l) || null, e, t, n, r, i)), !0;
    }
    return !1;
}
function ec(e) {
    var t = Bt(e.target);
    if (t !== null) {
        var n = qt(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Vu(n)), t !== null)) {
                    (e.blockedOn = t),
                        Ju(e.priority, function () {
                            qu(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Xr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = is(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Zl = r), n.target.dispatchEvent(r), (Zl = null);
        } else return (t = Er(n)), t !== null && eo(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Jo(e, t, n) {
    Xr(e) && n.delete(t);
}
function ip() {
    (rs = !1), St !== null && Xr(St) && (St = null), Et !== null && Xr(Et) && (Et = null), Tt !== null && Xr(Tt) && (Tt = null), lr.forEach(Jo), sr.forEach(Jo);
}
function On(e, t) {
    e.blockedOn === t && ((e.blockedOn = null), rs || ((rs = !0), je.unstable_scheduleCallback(je.unstable_NormalPriority, ip)));
}
function or(e) {
    function t(i) {
        return On(i, e);
    }
    if (0 < Ir.length) {
        On(Ir[0], e);
        for (var n = 1; n < Ir.length; n++) {
            var r = Ir[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (St !== null && On(St, e), Et !== null && On(Et, e), Tt !== null && On(Tt, e), lr.forEach(t), sr.forEach(t), n = 0; n < ht.length; n++) (r = ht[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ht.length && ((n = ht[0]), n.blockedOn === null); ) ec(n), n.blockedOn === null && ht.shift();
}
var vn = dt.ReactCurrentBatchConfig,
    pi = !0;
function lp(e, t, n, r) {
    var i = V,
        l = vn.transition;
    vn.transition = null;
    try {
        (V = 1), to(e, t, n, r);
    } finally {
        (V = i), (vn.transition = l);
    }
}
function sp(e, t, n, r) {
    var i = V,
        l = vn.transition;
    vn.transition = null;
    try {
        (V = 4), to(e, t, n, r);
    } finally {
        (V = i), (vn.transition = l);
    }
}
function to(e, t, n, r) {
    if (pi) {
        var i = is(e, t, n, r);
        if (i === null) Sl(e, t, r, mi, n), Zo(e, r);
        else if (rp(i, e, t, n, r)) r.stopPropagation();
        else if ((Zo(e, r), t & 4 && -1 < np.indexOf(e))) {
            for (; i !== null; ) {
                var l = Er(i);
                if ((l !== null && Ku(l), (l = is(e, t, n, r)), l === null && Sl(e, t, r, mi, n), l === i)) break;
                i = l;
            }
            i !== null && r.stopPropagation();
        } else Sl(e, t, r, null, n);
    }
}
var mi = null;
function is(e, t, n, r) {
    if (((mi = null), (e = qs(r)), (e = Bt(e)), e !== null))
        if (((t = qt(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Vu(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (mi = e), null;
}
function tc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Yf()) {
                case Zs:
                    return 1;
                case Gu:
                    return 4;
                case di:
                case Xf:
                    return 16;
                case Yu:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var gt = null,
    no = null,
    Qr = null;
function nc() {
    if (Qr) return Qr;
    var e,
        t = no,
        n = t.length,
        r,
        i = "value" in gt ? gt.value : gt.textContent,
        l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[l - r]; r++);
    return (Qr = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Kr(e) {
    var t = e.keyCode;
    return "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t), e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Or() {
    return !0;
}
function ea() {
    return !1;
}
function Me(e) {
    function t(n, r, i, l, s) {
        (this._reactName = n), (this._targetInst = i), (this.type = r), (this.nativeEvent = l), (this.target = s), (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(l) : l[a]));
        return (this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Or : ea), (this.isPropagationStopped = ea), this;
    }
    return (
        q(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), (this.isDefaultPrevented = Or));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), (this.isPropagationStopped = Or));
            },
            persist: function () {},
            isPersistent: Or,
        }),
        t
    );
}
var Nn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ro = Me(Nn),
    Sr = q({}, Nn, { view: 0, detail: 0 }),
    op = Me(Sr),
    fl,
    pl,
    Rn,
    Vi = q({}, Sr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: io,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0 ? (e.fromElement === e.srcElement ? e.toElement : e.fromElement) : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? ((fl = e.screenX - Rn.screenX), (pl = e.screenY - Rn.screenY)) : (pl = fl = 0), (Rn = e)), fl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : pl;
        },
    }),
    ta = Me(Vi),
    ap = q({}, Vi, { dataTransfer: 0 }),
    up = Me(ap),
    cp = q({}, Sr, { relatedTarget: 0 }),
    ml = Me(cp),
    dp = q({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    fp = Me(dp),
    pp = q({}, Nn, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    mp = Me(pp),
    hp = q({}, Nn, { data: 0 }),
    na = Me(hp),
    vp = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" },
    gp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    yp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function xp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = yp[e]) ? !!t[e] : !1;
}
function io() {
    return xp;
}
var wp = q({}, Sr, {
        key: function (e) {
            if (e.key) {
                var t = vp[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress" ? ((e = Kr(e)), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? gp[e.keyCode] || "Unidentified" : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: io,
        charCode: function (e) {
            return e.type === "keypress" ? Kr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    Sp = Me(wp),
    Ep = q({}, Vi, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    ra = Me(Ep),
    Tp = q({}, Sr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: io }),
    Cp = Me(Tp),
    kp = q({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Pp = Me(kp),
    _p = q({}, Vi, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    jp = Me(_p),
    Np = [9, 13, 27, 32],
    lo = ot && "CompositionEvent" in window,
    Yn = null;
ot && "documentMode" in document && (Yn = document.documentMode);
var Mp = ot && "TextEvent" in window && !Yn,
    rc = ot && (!lo || (Yn && 8 < Yn && 11 >= Yn)),
    ia = " ",
    la = !1;
function ic(e, t) {
    switch (e) {
        case "keyup":
            return Np.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function lc(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var nn = !1;
function Lp(e, t) {
    switch (e) {
        case "compositionend":
            return lc(t);
        case "keypress":
            return t.which !== 32 ? null : ((la = !0), ia);
        case "textInput":
            return (e = t.data), e === ia && la ? null : e;
        default:
            return null;
    }
}
function zp(e, t) {
    if (nn) return e === "compositionend" || (!lo && ic(e, t)) ? ((e = nc()), (Qr = no = gt = null), (nn = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return rc && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var Ip = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function sa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ip[e.type] : t === "textarea";
}
function sc(e, t, n, r) {
    Du(r), (t = hi(t, "onChange")), 0 < t.length && ((n = new ro("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Xn = null,
    ar = null;
function Op(e) {
    gc(e, 0);
}
function Hi(e) {
    var t = sn(e);
    if (Mu(t)) return e;
}
function Rp(e, t) {
    if (e === "change") return t;
}
var oc = !1;
if (ot) {
    var hl;
    if (ot) {
        var vl = "oninput" in document;
        if (!vl) {
            var oa = document.createElement("div");
            oa.setAttribute("oninput", "return;"), (vl = typeof oa.oninput == "function");
        }
        hl = vl;
    } else hl = !1;
    oc = hl && (!document.documentMode || 9 < document.documentMode);
}
function aa() {
    Xn && (Xn.detachEvent("onpropertychange", ac), (ar = Xn = null));
}
function ac(e) {
    if (e.propertyName === "value" && Hi(ar)) {
        var t = [];
        sc(t, ar, e, qs(e)), $u(Op, t);
    }
}
function bp(e, t, n) {
    e === "focusin" ? (aa(), (Xn = t), (ar = n), Xn.attachEvent("onpropertychange", ac)) : e === "focusout" && aa();
}
function Dp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hi(ar);
}
function Ap(e, t) {
    if (e === "click") return Hi(t);
}
function Bp(e, t) {
    if (e === "input" || e === "change") return Hi(t);
}
function Fp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var We = typeof Object.is == "function" ? Object.is : Fp;
function ur(e, t) {
    if (We(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Fl.call(t, i) || !We(e[i], t[i])) return !1;
    }
    return !0;
}
function ua(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function ca(e, t) {
    var n = ua(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = ua(n);
    }
}
function uc(e, t) {
    return e && t ? (e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1) : !1;
}
function cc() {
    for (var e = window, t = ai(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = ai(e.document);
    }
    return t;
}
function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && ((t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) || t === "textarea" || e.contentEditable === "true");
}
function $p(e) {
    var t = cc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && uc(n.ownerDocument.documentElement, n)) {
        if (r !== null && so(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n)) (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var i = n.textContent.length,
                    l = Math.min(r.start, i);
                (r = r.end === void 0 ? l : Math.min(r.end, i)), !e.extend && l > r && ((i = r), (r = l), (l = i)), (i = ca(n, l));
                var s = ca(n, r);
                i &&
                    s &&
                    (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) &&
                    ((t = t.createRange()), t.setStart(i.node, i.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var Vp = ot && "documentMode" in document && 11 >= document.documentMode,
    rn = null,
    ls = null,
    Qn = null,
    ss = !1;
function da(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ss ||
        rn == null ||
        rn !== ai(r) ||
        ((r = rn),
        "selectionStart" in r && so(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()), (r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset })),
        (Qn && ur(Qn, r)) || ((Qn = r), (r = hi(ls, "onSelect")), 0 < r.length && ((t = new ro("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = rn))));
}
function Rr(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var ln = { animationend: Rr("Animation", "AnimationEnd"), animationiteration: Rr("Animation", "AnimationIteration"), animationstart: Rr("Animation", "AnimationStart"), transitionend: Rr("Transition", "TransitionEnd") },
    gl = {},
    dc = {};
ot &&
    ((dc = document.createElement("div").style),
    "AnimationEvent" in window || (delete ln.animationend.animation, delete ln.animationiteration.animation, delete ln.animationstart.animation),
    "TransitionEvent" in window || delete ln.transitionend.transition);
function Ui(e) {
    if (gl[e]) return gl[e];
    if (!ln[e]) return e;
    var t = ln[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in dc) return (gl[e] = t[n]);
    return e;
}
var fc = Ui("animationend"),
    pc = Ui("animationiteration"),
    mc = Ui("animationstart"),
    hc = Ui("transitionend"),
    vc = new Map(),
    fa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
    );
function Lt(e, t) {
    vc.set(e, t), Kt(t, [e]);
}
for (var yl = 0; yl < fa.length; yl++) {
    var xl = fa[yl],
        Hp = xl.toLowerCase(),
        Up = xl[0].toUpperCase() + xl.slice(1);
    Lt(Hp, "on" + Up);
}
Lt(fc, "onAnimationEnd");
Lt(pc, "onAnimationIteration");
Lt(mc, "onAnimationStart");
Lt("dblclick", "onDoubleClick");
Lt("focusin", "onFocus");
Lt("focusout", "onBlur");
Lt(hc, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
    ),
    Wp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function pa(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Hf(r, t, void 0, e), (e.currentTarget = null);
}
function gc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var l = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var a = r[s],
                        o = a.instance,
                        c = a.currentTarget;
                    if (((a = a.listener), o !== l && i.isPropagationStopped())) break e;
                    pa(i, a, c), (l = o);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (((a = r[s]), (o = a.instance), (c = a.currentTarget), (a = a.listener), o !== l && i.isPropagationStopped())) break e;
                    pa(i, a, c), (l = o);
                }
        }
    }
    if (ci) throw ((e = ts), (ci = !1), (ts = null), e);
}
function U(e, t) {
    var n = t[ds];
    n === void 0 && (n = t[ds] = new Set());
    var r = e + "__bubble";
    n.has(r) || (yc(t, e, 2, !1), n.add(r));
}
function wl(e, t, n) {
    var r = 0;
    t && (r |= 4), yc(n, e, r, t);
}
var br = "_reactListening" + Math.random().toString(36).slice(2);
function cr(e) {
    if (!e[br]) {
        (e[br] = !0),
            ku.forEach(function (n) {
                n !== "selectionchange" && (Wp.has(n) || wl(n, !1, e), wl(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[br] || ((t[br] = !0), wl("selectionchange", !1, t));
    }
}
function yc(e, t, n, r) {
    switch (tc(t)) {
        case 1:
            var i = lp;
            break;
        case 4:
            i = sp;
            break;
        default:
            i = to;
    }
    (n = i.bind(null, t, n, e)),
        (i = void 0),
        !es || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (i = !0),
        r ? (i !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: i }) : e.addEventListener(t, n, !0)) : i !== void 0 ? e.addEventListener(t, n, { passive: i }) : e.addEventListener(t, n, !1);
}
function Sl(e, t, n, r, i) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var a = r.stateNode.containerInfo;
                if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var o = s.tag;
                        if ((o === 3 || o === 4) && ((o = s.stateNode.containerInfo), o === i || (o.nodeType === 8 && o.parentNode === i))) return;
                        s = s.return;
                    }
                for (; a !== null; ) {
                    if (((s = Bt(a)), s === null)) return;
                    if (((o = s.tag), o === 5 || o === 6)) {
                        r = l = s;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    $u(function () {
        var c = l,
            p = qs(n),
            m = [];
        e: {
            var v = vc.get(e);
            if (v !== void 0) {
                var g = ro,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (Kr(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        g = Sp;
                        break;
                    case "focusin":
                        (w = "focus"), (g = ml);
                        break;
                    case "focusout":
                        (w = "blur"), (g = ml);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = ml;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = ta;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = up;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = Cp;
                        break;
                    case fc:
                    case pc:
                    case mc:
                        g = fp;
                        break;
                    case hc:
                        g = Pp;
                        break;
                    case "scroll":
                        g = op;
                        break;
                    case "wheel":
                        g = jp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = mp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = ra;
                }
                var x = (t & 4) !== 0,
                    S = !x && e === "scroll",
                    f = x ? (v !== null ? v + "Capture" : null) : v;
                x = [];
                for (var u = c, d; u !== null; ) {
                    d = u;
                    var y = d.stateNode;
                    if ((d.tag === 5 && y !== null && ((d = y), f !== null && ((y = ir(u, f)), y != null && x.push(dr(u, y, d)))), S)) break;
                    u = u.return;
                }
                0 < x.length && ((v = new g(v, w, null, n, p)), m.push({ event: v, listeners: x }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (((v = e === "mouseover" || e === "pointerover"), (g = e === "mouseout" || e === "pointerout"), v && n !== Zl && (w = n.relatedTarget || n.fromElement) && (Bt(w) || w[at]))) break e;
                if (
                    (g || v) &&
                    ((v = p.window === p ? p : (v = p.ownerDocument) ? v.defaultView || v.parentWindow : window),
                    g ? ((w = n.relatedTarget || n.toElement), (g = c), (w = w ? Bt(w) : null), w !== null && ((S = qt(w)), w !== S || (w.tag !== 5 && w.tag !== 6)) && (w = null)) : ((g = null), (w = c)),
                    g !== w)
                ) {
                    if (
                        ((x = ta),
                        (y = "onMouseLeave"),
                        (f = "onMouseEnter"),
                        (u = "mouse"),
                        (e === "pointerout" || e === "pointerover") && ((x = ra), (y = "onPointerLeave"), (f = "onPointerEnter"), (u = "pointer")),
                        (S = g == null ? v : sn(g)),
                        (d = w == null ? v : sn(w)),
                        (v = new x(y, u + "leave", g, n, p)),
                        (v.target = S),
                        (v.relatedTarget = d),
                        (y = null),
                        Bt(p) === c && ((x = new x(f, u + "enter", w, n, p)), (x.target = d), (x.relatedTarget = S), (y = x)),
                        (S = y),
                        g && w)
                    )
                        t: {
                            for (x = g, f = w, u = 0, d = x; d; d = Zt(d)) u++;
                            for (d = 0, y = f; y; y = Zt(y)) d++;
                            for (; 0 < u - d; ) (x = Zt(x)), u--;
                            for (; 0 < d - u; ) (f = Zt(f)), d--;
                            for (; u--; ) {
                                if (x === f || (f !== null && x === f.alternate)) break t;
                                (x = Zt(x)), (f = Zt(f));
                            }
                            x = null;
                        }
                    else x = null;
                    g !== null && ma(m, v, g, x, !1), w !== null && S !== null && ma(m, S, w, x, !0);
                }
            }
            e: {
                if (((v = c ? sn(c) : window), (g = v.nodeName && v.nodeName.toLowerCase()), g === "select" || (g === "input" && v.type === "file"))) var E = Rp;
                else if (sa(v))
                    if (oc) E = Bp;
                    else {
                        E = Dp;
                        var P = bp;
                    }
                else (g = v.nodeName) && g.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (E = Ap);
                if (E && (E = E(e, c))) {
                    sc(m, E, n, p);
                    break e;
                }
                P && P(e, v, c), e === "focusout" && (P = v._wrapperState) && P.controlled && v.type === "number" && Yl(v, "number", v.value);
            }
            switch (((P = c ? sn(c) : window), e)) {
                case "focusin":
                    (sa(P) || P.contentEditable === "true") && ((rn = P), (ls = c), (Qn = null));
                    break;
                case "focusout":
                    Qn = ls = rn = null;
                    break;
                case "mousedown":
                    ss = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (ss = !1), da(m, n, p);
                    break;
                case "selectionchange":
                    if (Vp) break;
                case "keydown":
                case "keyup":
                    da(m, n, p);
            }
            var _;
            if (lo)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var T = "onCompositionStart";
                            break e;
                        case "compositionend":
                            T = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            T = "onCompositionUpdate";
                            break e;
                    }
                    T = void 0;
                }
            else nn ? ic(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
            T &&
                (rc && n.locale !== "ko" && (nn || T !== "onCompositionStart" ? T === "onCompositionEnd" && nn && (_ = nc()) : ((gt = p), (no = "value" in gt ? gt.value : gt.textContent), (nn = !0))),
                (P = hi(c, T)),
                0 < P.length && ((T = new na(T, e, null, n, p)), m.push({ event: T, listeners: P }), _ ? (T.data = _) : ((_ = lc(n)), _ !== null && (T.data = _)))),
                (_ = Mp ? Lp(e, n) : zp(e, n)) && ((c = hi(c, "onBeforeInput")), 0 < c.length && ((p = new na("onBeforeInput", "beforeinput", null, n, p)), m.push({ event: p, listeners: c }), (p.data = _)));
        }
        gc(m, t);
    });
}
function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e,
            l = i.stateNode;
        i.tag === 5 && l !== null && ((i = l), (l = ir(e, n)), l != null && r.unshift(dr(e, l, i)), (l = ir(e, t)), l != null && r.push(dr(e, l, i))), (e = e.return);
    }
    return r;
}
function Zt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function ma(e, t, n, r, i) {
    for (var l = t._reactName, s = []; n !== null && n !== r; ) {
        var a = n,
            o = a.alternate,
            c = a.stateNode;
        if (o !== null && o === r) break;
        a.tag === 5 && c !== null && ((a = c), i ? ((o = ir(n, l)), o != null && s.unshift(dr(n, o, a))) : i || ((o = ir(n, l)), o != null && s.push(dr(n, o, a)))), (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var Gp = /\r\n?/g,
    Yp = /\u0000|\uFFFD/g;
function ha(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            Gp,
            `
`
        )
        .replace(Yp, "");
}
function Dr(e, t, n) {
    if (((t = ha(t)), ha(e) !== t && n)) throw Error(M(425));
}
function vi() {}
var os = null,
    as = null;
function us(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null)
    );
}
var cs = typeof setTimeout == "function" ? setTimeout : void 0,
    Xp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    va = typeof Promise == "function" ? Promise : void 0,
    Qp =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof va < "u"
            ? function (e) {
                  return va.resolve(null).then(e).catch(Kp);
              }
            : cs;
function Kp(e) {
    setTimeout(function () {
        throw e;
    });
}
function El(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(i), or(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = i;
    } while (n);
    or(t);
}
function Ct(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function ga(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var Mn = Math.random().toString(36).slice(2),
    Qe = "__reactFiber$" + Mn,
    fr = "__reactProps$" + Mn,
    at = "__reactContainer$" + Mn,
    ds = "__reactEvents$" + Mn,
    qp = "__reactListeners$" + Mn,
    Zp = "__reactHandles$" + Mn;
function Bt(e) {
    var t = e[Qe];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[at] || n[Qe])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = ga(e); e !== null; ) {
                    if ((n = e[Qe])) return n;
                    e = ga(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function Er(e) {
    return (e = e[Qe] || e[at]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(M(33));
}
function Wi(e) {
    return e[fr] || null;
}
var fs = [],
    on = -1;
function zt(e) {
    return { current: e };
}
function W(e) {
    0 > on || ((e.current = fs[on]), (fs[on] = null), on--);
}
function H(e, t) {
    on++, (fs[on] = e.current), (e.current = t);
}
var Mt = {},
    pe = zt(Mt),
    we = zt(!1),
    Ut = Mt;
function En(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Mt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        l;
    for (l in n) i[l] = t[l];
    return r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = t), (e.__reactInternalMemoizedMaskedChildContext = i)), i;
}
function Se(e) {
    return (e = e.childContextTypes), e != null;
}
function gi() {
    W(we), W(pe);
}
function ya(e, t, n) {
    if (pe.current !== Mt) throw Error(M(168));
    H(pe, t), H(we, n);
}
function xc(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(M(108, bf(e) || "Unknown", i));
    return q({}, n, r);
}
function yi(e) {
    return (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Mt), (Ut = pe.current), H(pe, e), H(we, we.current), !0;
}
function xa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(M(169));
    n ? ((e = xc(e, t, Ut)), (r.__reactInternalMemoizedMergedChildContext = e), W(we), W(pe), H(pe, e)) : W(we), H(we, n);
}
var nt = null,
    Gi = !1,
    Tl = !1;
function wc(e) {
    nt === null ? (nt = [e]) : nt.push(e);
}
function Jp(e) {
    (Gi = !0), wc(e);
}
function It() {
    if (!Tl && nt !== null) {
        Tl = !0;
        var e = 0,
            t = V;
        try {
            var n = nt;
            for (V = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (nt = null), (Gi = !1);
        } catch (i) {
            throw (nt !== null && (nt = nt.slice(e + 1)), Wu(Zs, It), i);
        } finally {
            (V = t), (Tl = !1);
        }
    }
    return null;
}
var an = [],
    un = 0,
    xi = null,
    wi = 0,
    ze = [],
    Ie = 0,
    Wt = null,
    rt = 1,
    it = "";
function Dt(e, t) {
    (an[un++] = wi), (an[un++] = xi), (xi = e), (wi = t);
}
function Sc(e, t, n) {
    (ze[Ie++] = rt), (ze[Ie++] = it), (ze[Ie++] = Wt), (Wt = e);
    var r = rt;
    e = it;
    var i = 32 - He(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - He(t) + i;
    if (30 < l) {
        var s = i - (i % 5);
        (l = (r & ((1 << s) - 1)).toString(32)), (r >>= s), (i -= s), (rt = (1 << (32 - He(t) + i)) | (n << i) | r), (it = l + e);
    } else (rt = (1 << l) | (n << i) | r), (it = e);
}
function oo(e) {
    e.return !== null && (Dt(e, 1), Sc(e, 1, 0));
}
function ao(e) {
    for (; e === xi; ) (xi = an[--un]), (an[un] = null), (wi = an[--un]), (an[un] = null);
    for (; e === Wt; ) (Wt = ze[--Ie]), (ze[Ie] = null), (it = ze[--Ie]), (ze[Ie] = null), (rt = ze[--Ie]), (ze[Ie] = null);
}
var _e = null,
    Pe = null,
    G = !1,
    Ve = null;
function Ec(e, t) {
    var n = Oe(5, null, null, 0);
    (n.elementType = "DELETED"), (n.stateNode = t), (n.return = e), (t = e.deletions), t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wa(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t), t !== null ? ((e.stateNode = t), (_e = e), (Pe = Ct(t.firstChild)), !0) : !1;
        case 6:
            return (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t), t !== null ? ((e.stateNode = t), (_e = e), (Pe = null), !0) : !1;
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Wt !== null ? { id: rt, overflow: it } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Oe(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (_e = e),
                      (Pe = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function ps(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ms(e) {
    if (G) {
        var t = Pe;
        if (t) {
            var n = t;
            if (!wa(e, t)) {
                if (ps(e)) throw Error(M(418));
                t = Ct(n.nextSibling);
                var r = _e;
                t && wa(e, t) ? Ec(r, n) : ((e.flags = (e.flags & -4097) | 2), (G = !1), (_e = e));
            }
        } else {
            if (ps(e)) throw Error(M(418));
            (e.flags = (e.flags & -4097) | 2), (G = !1), (_e = e);
        }
    }
}
function Sa(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    _e = e;
}
function Ar(e) {
    if (e !== _e) return !1;
    if (!G) return Sa(e), (G = !0), !1;
    var t;
    if (((t = e.tag !== 3) && !(t = e.tag !== 5) && ((t = e.type), (t = t !== "head" && t !== "body" && !us(e.type, e.memoizedProps))), t && (t = Pe))) {
        if (ps(e)) throw (Tc(), Error(M(418)));
        for (; t; ) Ec(e, t), (t = Ct(t.nextSibling));
    }
    if ((Sa(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(M(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Pe = Ct(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            Pe = null;
        }
    } else Pe = _e ? Ct(e.stateNode.nextSibling) : null;
    return !0;
}
function Tc() {
    for (var e = Pe; e; ) e = Ct(e.nextSibling);
}
function Tn() {
    (Pe = _e = null), (G = !1);
}
function uo(e) {
    Ve === null ? (Ve = [e]) : Ve.push(e);
}
var em = dt.ReactCurrentBatchConfig;
function Be(e, t) {
    if (e && e.defaultProps) {
        (t = q({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var Si = zt(null),
    Ei = null,
    cn = null,
    co = null;
function fo() {
    co = cn = Ei = null;
}
function po(e) {
    var t = Si.current;
    W(Si), (e._currentValue = t);
}
function hs(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (((e.childLanes & t) !== t ? ((e.childLanes |= t), r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)) break;
        e = e.return;
    }
}
function gn(e, t) {
    (Ei = e), (co = cn = null), (e = e.dependencies), e !== null && e.firstContext !== null && (e.lanes & t && (xe = !0), (e.firstContext = null));
}
function be(e) {
    var t = e._currentValue;
    if (co !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), cn === null)) {
            if (Ei === null) throw Error(M(308));
            (cn = e), (Ei.dependencies = { lanes: 0, firstContext: e });
        } else cn = cn.next = e;
    return t;
}
var Ft = null;
function mo(e) {
    Ft === null ? (Ft = [e]) : Ft.push(e);
}
function Cc(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? ((n.next = n), mo(t)) : ((n.next = i.next), (i.next = n)), (t.interleaved = n), ut(e, r);
}
function ut(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function ho(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function kc(e, t) {
    (e = e.updateQueue), t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function lt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), F & 2)) {
        var i = r.pending;
        return i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)), (r.pending = t), ut(e, n);
    }
    return (i = r.interleaved), i === null ? ((t.next = t), mo(r)) : ((t.next = i.next), (i.next = t)), (r.interleaved = t), ut(e, n);
}
function qr(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
    }
}
function Ea(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            l = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
                l === null ? (i = l = s) : (l = l.next = s), (n = n.next);
            } while (n !== null);
            l === null ? (i = l = t) : (l = l.next = t);
        } else i = l = t;
        (n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: l, shared: r.shared, effects: r.effects }), (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Ti(e, t, n, r) {
    var i = e.updateQueue;
    mt = !1;
    var l = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        a = i.shared.pending;
    if (a !== null) {
        i.shared.pending = null;
        var o = a,
            c = o.next;
        (o.next = null), s === null ? (l = c) : (s.next = c), (s = o);
        var p = e.alternate;
        p !== null && ((p = p.updateQueue), (a = p.lastBaseUpdate), a !== s && (a === null ? (p.firstBaseUpdate = c) : (a.next = c), (p.lastBaseUpdate = o)));
    }
    if (l !== null) {
        var m = i.baseState;
        (s = 0), (p = c = o = null), (a = l);
        do {
            var v = a.lane,
                g = a.eventTime;
            if ((r & v) === v) {
                p !== null && (p = p.next = { eventTime: g, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var w = e,
                        x = a;
                    switch (((v = t), (g = n), x.tag)) {
                        case 1:
                            if (((w = x.payload), typeof w == "function")) {
                                m = w.call(g, m, v);
                                break e;
                            }
                            m = w;
                            break e;
                        case 3:
                            w.flags = (w.flags & -65537) | 128;
                        case 0:
                            if (((w = x.payload), (v = typeof w == "function" ? w.call(g, m, v) : w), v == null)) break e;
                            m = q({}, m, v);
                            break e;
                        case 2:
                            mt = !0;
                    }
                }
                a.callback !== null && a.lane !== 0 && ((e.flags |= 64), (v = i.effects), v === null ? (i.effects = [a]) : v.push(a));
            } else (g = { eventTime: g, lane: v, tag: a.tag, payload: a.payload, callback: a.callback, next: null }), p === null ? ((c = p = g), (o = m)) : (p = p.next = g), (s |= v);
            if (((a = a.next), a === null)) {
                if (((a = i.shared.pending), a === null)) break;
                (v = a), (a = v.next), (v.next = null), (i.lastBaseUpdate = v), (i.shared.pending = null);
            }
        } while (!0);
        if ((p === null && (o = m), (i.baseState = o), (i.firstBaseUpdate = c), (i.lastBaseUpdate = p), (t = i.shared.interleaved), t !== null)) {
            i = t;
            do (s |= i.lane), (i = i.next);
            while (i !== t);
        } else l === null && (i.shared.lanes = 0);
        (Yt |= s), (e.lanes = s), (e.memoizedState = m);
    }
}
function Ta(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != "function")) throw Error(M(191, i));
                i.call(r);
            }
        }
}
var Pc = new Cu.Component().refs;
function vs(e, t, n, r) {
    (t = e.memoizedState), (n = n(r, t)), (n = n == null ? t : q({}, t, n)), (e.memoizedState = n), e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Yi = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? qt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = he(),
            i = _t(e),
            l = lt(r, i);
        (l.payload = t), n != null && (l.callback = n), (t = kt(e, l, i)), t !== null && (Ue(t, e, i, r), qr(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = he(),
            i = _t(e),
            l = lt(r, i);
        (l.tag = 1), (l.payload = t), n != null && (l.callback = n), (t = kt(e, l, i)), t !== null && (Ue(t, e, i, r), qr(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = he(),
            r = _t(e),
            i = lt(n, r);
        (i.tag = 2), t != null && (i.callback = t), (t = kt(e, i, r)), t !== null && (Ue(t, e, r, n), qr(t, e, r));
    },
};
function Ca(e, t, n, r, i, l, s) {
    return (e = e.stateNode), typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, s) : t.prototype && t.prototype.isPureReactComponent ? !ur(n, r) || !ur(i, l) : !0;
}
function _c(e, t, n) {
    var r = !1,
        i = Mt,
        l = t.contextType;
    return (
        typeof l == "object" && l !== null ? (l = be(l)) : ((i = Se(t) ? Ut : pe.current), (r = t.contextTypes), (l = (r = r != null) ? En(e, i) : Mt)),
        (t = new t(n, l)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Yi),
        (e.stateNode = t),
        (t._reactInternals = e),
        r && ((e = e.stateNode), (e.__reactInternalMemoizedUnmaskedChildContext = i), (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    );
}
function ka(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Yi.enqueueReplaceState(t, t.state, null);
}
function gs(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Pc), ho(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? (i.context = be(l)) : ((l = Se(t) ? Ut : pe.current), (i.context = En(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == "function" && (vs(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function" ||
            (typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function") ||
            ((t = i.state),
            typeof i.componentWillMount == "function" && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
            t !== i.state && Yi.enqueueReplaceState(i, i.state, null),
            Ti(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function bn(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(M(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(M(147, e));
            var i = r,
                l = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l
                ? t.ref
                : ((t = function (s) {
                      var a = i.refs;
                      a === Pc && (a = i.refs = {}), s === null ? delete a[l] : (a[l] = s);
                  }),
                  (t._stringRef = l),
                  t);
        }
        if (typeof e != "string") throw Error(M(284));
        if (!n._owner) throw Error(M(290, e));
    }
    return e;
}
function Br(e, t) {
    throw ((e = Object.prototype.toString.call(t)), Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
}
function Pa(e) {
    var t = e._init;
    return t(e._payload);
}
function jc(e) {
    function t(f, u) {
        if (e) {
            var d = f.deletions;
            d === null ? ((f.deletions = [u]), (f.flags |= 16)) : d.push(u);
        }
    }
    function n(f, u) {
        if (!e) return null;
        for (; u !== null; ) t(f, u), (u = u.sibling);
        return null;
    }
    function r(f, u) {
        for (f = new Map(); u !== null; ) u.key !== null ? f.set(u.key, u) : f.set(u.index, u), (u = u.sibling);
        return f;
    }
    function i(f, u) {
        return (f = jt(f, u)), (f.index = 0), (f.sibling = null), f;
    }
    function l(f, u, d) {
        return (f.index = d), e ? ((d = f.alternate), d !== null ? ((d = d.index), d < u ? ((f.flags |= 2), u) : d) : ((f.flags |= 2), u)) : ((f.flags |= 1048576), u);
    }
    function s(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function a(f, u, d, y) {
        return u === null || u.tag !== 6 ? ((u = Ml(d, f.mode, y)), (u.return = f), u) : ((u = i(u, d)), (u.return = f), u);
    }
    function o(f, u, d, y) {
        var E = d.type;
        return E === tn
            ? p(f, u, d.props.children, y, d.key)
            : u !== null && (u.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === pt && Pa(E) === u.type))
            ? ((y = i(u, d.props)), (y.ref = bn(f, u, d)), (y.return = f), y)
            : ((y = ri(d.type, d.key, d.props, null, f.mode, y)), (y.ref = bn(f, u, d)), (y.return = f), y);
    }
    function c(f, u, d, y) {
        return u === null || u.tag !== 4 || u.stateNode.containerInfo !== d.containerInfo || u.stateNode.implementation !== d.implementation ? ((u = Ll(d, f.mode, y)), (u.return = f), u) : ((u = i(u, d.children || [])), (u.return = f), u);
    }
    function p(f, u, d, y, E) {
        return u === null || u.tag !== 7 ? ((u = Ht(d, f.mode, y, E)), (u.return = f), u) : ((u = i(u, d)), (u.return = f), u);
    }
    function m(f, u, d) {
        if ((typeof u == "string" && u !== "") || typeof u == "number") return (u = Ml("" + u, f.mode, d)), (u.return = f), u;
        if (typeof u == "object" && u !== null) {
            switch (u.$$typeof) {
                case jr:
                    return (d = ri(u.type, u.key, u.props, null, f.mode, d)), (d.ref = bn(f, null, u)), (d.return = f), d;
                case en:
                    return (u = Ll(u, f.mode, d)), (u.return = f), u;
                case pt:
                    var y = u._init;
                    return m(f, y(u._payload), d);
            }
            if ($n(u) || Ln(u)) return (u = Ht(u, f.mode, d, null)), (u.return = f), u;
            Br(f, u);
        }
        return null;
    }
    function v(f, u, d, y) {
        var E = u !== null ? u.key : null;
        if ((typeof d == "string" && d !== "") || typeof d == "number") return E !== null ? null : a(f, u, "" + d, y);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
                case jr:
                    return d.key === E ? o(f, u, d, y) : null;
                case en:
                    return d.key === E ? c(f, u, d, y) : null;
                case pt:
                    return (E = d._init), v(f, u, E(d._payload), y);
            }
            if ($n(d) || Ln(d)) return E !== null ? null : p(f, u, d, y, null);
            Br(f, d);
        }
        return null;
    }
    function g(f, u, d, y, E) {
        if ((typeof y == "string" && y !== "") || typeof y == "number") return (f = f.get(d) || null), a(u, f, "" + y, E);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case jr:
                    return (f = f.get(y.key === null ? d : y.key) || null), o(u, f, y, E);
                case en:
                    return (f = f.get(y.key === null ? d : y.key) || null), c(u, f, y, E);
                case pt:
                    var P = y._init;
                    return g(f, u, d, P(y._payload), E);
            }
            if ($n(y) || Ln(y)) return (f = f.get(d) || null), p(u, f, y, E, null);
            Br(u, y);
        }
        return null;
    }
    function w(f, u, d, y) {
        for (var E = null, P = null, _ = u, T = (u = 0), k = null; _ !== null && T < d.length; T++) {
            _.index > T ? ((k = _), (_ = null)) : (k = _.sibling);
            var C = v(f, _, d[T], y);
            if (C === null) {
                _ === null && (_ = k);
                break;
            }
            e && _ && C.alternate === null && t(f, _), (u = l(C, u, T)), P === null ? (E = C) : (P.sibling = C), (P = C), (_ = k);
        }
        if (T === d.length) return n(f, _), G && Dt(f, T), E;
        if (_ === null) {
            for (; T < d.length; T++) (_ = m(f, d[T], y)), _ !== null && ((u = l(_, u, T)), P === null ? (E = _) : (P.sibling = _), (P = _));
            return G && Dt(f, T), E;
        }
        for (_ = r(f, _); T < d.length; T++) (k = g(_, f, T, d[T], y)), k !== null && (e && k.alternate !== null && _.delete(k.key === null ? T : k.key), (u = l(k, u, T)), P === null ? (E = k) : (P.sibling = k), (P = k));
        return (
            e &&
                _.forEach(function (N) {
                    return t(f, N);
                }),
            G && Dt(f, T),
            E
        );
    }
    function x(f, u, d, y) {
        var E = Ln(d);
        if (typeof E != "function") throw Error(M(150));
        if (((d = E.call(d)), d == null)) throw Error(M(151));
        for (var P = (E = null), _ = u, T = (u = 0), k = null, C = d.next(); _ !== null && !C.done; T++, C = d.next()) {
            _.index > T ? ((k = _), (_ = null)) : (k = _.sibling);
            var N = v(f, _, C.value, y);
            if (N === null) {
                _ === null && (_ = k);
                break;
            }
            e && _ && N.alternate === null && t(f, _), (u = l(N, u, T)), P === null ? (E = N) : (P.sibling = N), (P = N), (_ = k);
        }
        if (C.done) return n(f, _), G && Dt(f, T), E;
        if (_ === null) {
            for (; !C.done; T++, C = d.next()) (C = m(f, C.value, y)), C !== null && ((u = l(C, u, T)), P === null ? (E = C) : (P.sibling = C), (P = C));
            return G && Dt(f, T), E;
        }
        for (_ = r(f, _); !C.done; T++, C = d.next()) (C = g(_, f, T, C.value, y)), C !== null && (e && C.alternate !== null && _.delete(C.key === null ? T : C.key), (u = l(C, u, T)), P === null ? (E = C) : (P.sibling = C), (P = C));
        return (
            e &&
                _.forEach(function (I) {
                    return t(f, I);
                }),
            G && Dt(f, T),
            E
        );
    }
    function S(f, u, d, y) {
        if ((typeof d == "object" && d !== null && d.type === tn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null)) {
            switch (d.$$typeof) {
                case jr:
                    e: {
                        for (var E = d.key, P = u; P !== null; ) {
                            if (P.key === E) {
                                if (((E = d.type), E === tn)) {
                                    if (P.tag === 7) {
                                        n(f, P.sibling), (u = i(P, d.props.children)), (u.return = f), (f = u);
                                        break e;
                                    }
                                } else if (P.elementType === E || (typeof E == "object" && E !== null && E.$$typeof === pt && Pa(E) === P.type)) {
                                    n(f, P.sibling), (u = i(P, d.props)), (u.ref = bn(f, P, d)), (u.return = f), (f = u);
                                    break e;
                                }
                                n(f, P);
                                break;
                            } else t(f, P);
                            P = P.sibling;
                        }
                        d.type === tn ? ((u = Ht(d.props.children, f.mode, y, d.key)), (u.return = f), (f = u)) : ((y = ri(d.type, d.key, d.props, null, f.mode, y)), (y.ref = bn(f, u, d)), (y.return = f), (f = y));
                    }
                    return s(f);
                case en:
                    e: {
                        for (P = d.key; u !== null; ) {
                            if (u.key === P)
                                if (u.tag === 4 && u.stateNode.containerInfo === d.containerInfo && u.stateNode.implementation === d.implementation) {
                                    n(f, u.sibling), (u = i(u, d.children || [])), (u.return = f), (f = u);
                                    break e;
                                } else {
                                    n(f, u);
                                    break;
                                }
                            else t(f, u);
                            u = u.sibling;
                        }
                        (u = Ll(d, f.mode, y)), (u.return = f), (f = u);
                    }
                    return s(f);
                case pt:
                    return (P = d._init), S(f, u, P(d._payload), y);
            }
            if ($n(d)) return w(f, u, d, y);
            if (Ln(d)) return x(f, u, d, y);
            Br(f, d);
        }
        return (typeof d == "string" && d !== "") || typeof d == "number"
            ? ((d = "" + d), u !== null && u.tag === 6 ? (n(f, u.sibling), (u = i(u, d)), (u.return = f), (f = u)) : (n(f, u), (u = Ml(d, f.mode, y)), (u.return = f), (f = u)), s(f))
            : n(f, u);
    }
    return S;
}
var Cn = jc(!0),
    Nc = jc(!1),
    Tr = {},
    Ze = zt(Tr),
    pr = zt(Tr),
    mr = zt(Tr);
function $t(e) {
    if (e === Tr) throw Error(M(174));
    return e;
}
function vo(e, t) {
    switch ((H(mr, t), H(pr, e), H(Ze, Tr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ql(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ql(t, e));
    }
    W(Ze), H(Ze, t);
}
function kn() {
    W(Ze), W(pr), W(mr);
}
function Mc(e) {
    $t(mr.current);
    var t = $t(Ze.current),
        n = Ql(t, e.type);
    t !== n && (H(pr, e), H(Ze, n));
}
function go(e) {
    pr.current === e && (W(Ze), W(pr));
}
var Q = zt(0);
function Ci(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Cl = [];
function yo() {
    for (var e = 0; e < Cl.length; e++) Cl[e]._workInProgressVersionPrimary = null;
    Cl.length = 0;
}
var Zr = dt.ReactCurrentDispatcher,
    kl = dt.ReactCurrentBatchConfig,
    Gt = 0,
    K = null,
    re = null,
    le = null,
    ki = !1,
    Kn = !1,
    hr = 0,
    tm = 0;
function ce() {
    throw Error(M(321));
}
function xo(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!We(e[n], t[n])) return !1;
    return !0;
}
function wo(e, t, n, r, i, l) {
    if (((Gt = l), (K = t), (t.memoizedState = null), (t.updateQueue = null), (t.lanes = 0), (Zr.current = e === null || e.memoizedState === null ? lm : sm), (e = n(r, i)), Kn)) {
        l = 0;
        do {
            if (((Kn = !1), (hr = 0), 25 <= l)) throw Error(M(301));
            (l += 1), (le = re = null), (t.updateQueue = null), (Zr.current = om), (e = n(r, i));
        } while (Kn);
    }
    if (((Zr.current = Pi), (t = re !== null && re.next !== null), (Gt = 0), (le = re = K = null), (ki = !1), t)) throw Error(M(300));
    return e;
}
function So() {
    var e = hr !== 0;
    return (hr = 0), e;
}
function Xe() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function De() {
    if (re === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = re.next;
    var t = le === null ? K.memoizedState : le.next;
    if (t !== null) (le = t), (re = e);
    else {
        if (e === null) throw Error(M(310));
        (re = e), (e = { memoizedState: re.memoizedState, baseState: re.baseState, baseQueue: re.baseQueue, queue: re.queue, next: null }), le === null ? (K.memoizedState = le = e) : (le = le.next = e);
    }
    return le;
}
function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Pl(e) {
    var t = De(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = re,
        i = r.baseQueue,
        l = n.pending;
    if (l !== null) {
        if (i !== null) {
            var s = i.next;
            (i.next = l.next), (l.next = s);
        }
        (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
        (l = i.next), (r = r.baseState);
        var a = (s = null),
            o = null,
            c = l;
        do {
            var p = c.lane;
            if ((Gt & p) === p) o !== null && (o = o.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var m = { lane: p, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
                o === null ? ((a = o = m), (s = r)) : (o = o.next = m), (K.lanes |= p), (Yt |= p);
            }
            c = c.next;
        } while (c !== null && c !== l);
        o === null ? (s = r) : (o.next = a), We(r, t.memoizedState) || (xe = !0), (t.memoizedState = r), (t.baseState = s), (t.baseQueue = o), (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        i = e;
        do (l = i.lane), (K.lanes |= l), (Yt |= l), (i = i.next);
        while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function _l(e) {
    var t = De(),
        n = t.queue;
    if (n === null) throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = (i = i.next);
        do (l = e(l, s.action)), (s = s.next);
        while (s !== i);
        We(l, t.memoizedState) || (xe = !0), (t.memoizedState = l), t.baseQueue === null && (t.baseState = l), (n.lastRenderedState = l);
    }
    return [l, r];
}
function Lc() {}
function zc(e, t) {
    var n = K,
        r = De(),
        i = t(),
        l = !We(r.memoizedState, i);
    if ((l && ((r.memoizedState = i), (xe = !0)), (r = r.queue), Eo(Rc.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || (le !== null && le.memoizedState.tag & 1))) {
        if (((n.flags |= 2048), gr(9, Oc.bind(null, n, r, i, t), void 0, null), se === null)) throw Error(M(349));
        Gt & 30 || Ic(n, t, i);
    }
    return i;
}
function Ic(e, t, n) {
    (e.flags |= 16384), (e = { getSnapshot: t, value: n }), (t = K.updateQueue), t === null ? ((t = { lastEffect: null, stores: null }), (K.updateQueue = t), (t.stores = [e])) : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Oc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), bc(t) && Dc(e);
}
function Rc(e, t, n) {
    return n(function () {
        bc(t) && Dc(e);
    });
}
function bc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !We(e, n);
    } catch {
        return !0;
    }
}
function Dc(e) {
    var t = ut(e, 1);
    t !== null && Ue(t, e, 1, -1);
}
function _a(e) {
    var t = Xe();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }),
        (t.queue = e),
        (e = e.dispatch = im.bind(null, K, e)),
        [t.memoizedState, e]
    );
}
function gr(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = K.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (K.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect), n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Ac() {
    return De().memoizedState;
}
function Jr(e, t, n, r) {
    var i = Xe();
    (K.flags |= e), (i.memoizedState = gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xi(e, t, n, r) {
    var i = De();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (re !== null) {
        var s = re.memoizedState;
        if (((l = s.destroy), r !== null && xo(r, s.deps))) {
            i.memoizedState = gr(t, n, l, r);
            return;
        }
    }
    (K.flags |= e), (i.memoizedState = gr(1 | t, n, l, r));
}
function ja(e, t) {
    return Jr(8390656, 8, e, t);
}
function Eo(e, t) {
    return Xi(2048, 8, e, t);
}
function Bc(e, t) {
    return Xi(4, 2, e, t);
}
function Fc(e, t) {
    return Xi(4, 4, e, t);
}
function $c(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Vc(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Xi(4, 4, $c.bind(null, t, e), n);
}
function To() {}
function Hc(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xo(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Uc(e, t) {
    var n = De();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && xo(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wc(e, t, n) {
    return Gt & 21 ? (We(n, t) || ((n = Xu()), (K.lanes |= n), (Yt |= n), (e.baseState = !0)), t) : (e.baseState && ((e.baseState = !1), (xe = !0)), (e.memoizedState = n));
}
function nm(e, t) {
    var n = V;
    (V = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = kl.transition;
    kl.transition = {};
    try {
        e(!1), t();
    } finally {
        (V = n), (kl.transition = r);
    }
}
function Gc() {
    return De().memoizedState;
}
function rm(e, t, n) {
    var r = _t(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Yc(e))) Xc(t, n);
    else if (((n = Cc(e, t, n, r)), n !== null)) {
        var i = he();
        Ue(n, e, r, i), Qc(n, t, r);
    }
}
function im(e, t, n) {
    var r = _t(e),
        i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Yc(e)) Xc(t, i);
    else {
        var l = e.alternate;
        if (e.lanes === 0 && (l === null || l.lanes === 0) && ((l = t.lastRenderedReducer), l !== null))
            try {
                var s = t.lastRenderedState,
                    a = l(s, n);
                if (((i.hasEagerState = !0), (i.eagerState = a), We(a, s))) {
                    var o = t.interleaved;
                    o === null ? ((i.next = i), mo(t)) : ((i.next = o.next), (o.next = i)), (t.interleaved = i);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Cc(e, t, i, r)), n !== null && ((i = he()), Ue(n, e, r, i), Qc(n, t, r));
    }
}
function Yc(e) {
    var t = e.alternate;
    return e === K || (t !== null && t === K);
}
function Xc(e, t) {
    Kn = ki = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Qc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Js(e, n);
    }
}
var Pi = {
        readContext: be,
        useCallback: ce,
        useContext: ce,
        useEffect: ce,
        useImperativeHandle: ce,
        useInsertionEffect: ce,
        useLayoutEffect: ce,
        useMemo: ce,
        useReducer: ce,
        useRef: ce,
        useState: ce,
        useDebugValue: ce,
        useDeferredValue: ce,
        useTransition: ce,
        useMutableSource: ce,
        useSyncExternalStore: ce,
        useId: ce,
        unstable_isNewReconciler: !1,
    },
    lm = {
        readContext: be,
        useCallback: function (e, t) {
            return (Xe().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: be,
        useEffect: ja,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), Jr(4194308, 4, $c.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Jr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Jr(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Xe();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Xe();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }),
                (r.queue = e),
                (e = e.dispatch = rm.bind(null, K, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Xe();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: _a,
        useDebugValue: To,
        useDeferredValue: function (e) {
            return (Xe().memoizedState = e);
        },
        useTransition: function () {
            var e = _a(!1),
                t = e[0];
            return (e = nm.bind(null, e[1])), (Xe().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = K,
                i = Xe();
            if (G) {
                if (n === void 0) throw Error(M(407));
                n = n();
            } else {
                if (((n = t()), se === null)) throw Error(M(349));
                Gt & 30 || Ic(r, t, n);
            }
            i.memoizedState = n;
            var l = { value: n, getSnapshot: t };
            return (i.queue = l), ja(Rc.bind(null, r, l, e), [e]), (r.flags |= 2048), gr(9, Oc.bind(null, r, l, n, t), void 0, null), n;
        },
        useId: function () {
            var e = Xe(),
                t = se.identifierPrefix;
            if (G) {
                var n = it,
                    r = rt;
                (n = (r & ~(1 << (32 - He(r) - 1))).toString(32) + n), (t = ":" + t + "R" + n), (n = hr++), 0 < n && (t += "H" + n.toString(32)), (t += ":");
            } else (n = tm++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    sm = {
        readContext: be,
        useCallback: Hc,
        useContext: be,
        useEffect: Eo,
        useImperativeHandle: Vc,
        useInsertionEffect: Bc,
        useLayoutEffect: Fc,
        useMemo: Uc,
        useReducer: Pl,
        useRef: Ac,
        useState: function () {
            return Pl(vr);
        },
        useDebugValue: To,
        useDeferredValue: function (e) {
            var t = De();
            return Wc(t, re.memoizedState, e);
        },
        useTransition: function () {
            var e = Pl(vr)[0],
                t = De().memoizedState;
            return [e, t];
        },
        useMutableSource: Lc,
        useSyncExternalStore: zc,
        useId: Gc,
        unstable_isNewReconciler: !1,
    },
    om = {
        readContext: be,
        useCallback: Hc,
        useContext: be,
        useEffect: Eo,
        useImperativeHandle: Vc,
        useInsertionEffect: Bc,
        useLayoutEffect: Fc,
        useMemo: Uc,
        useReducer: _l,
        useRef: Ac,
        useState: function () {
            return _l(vr);
        },
        useDebugValue: To,
        useDeferredValue: function (e) {
            var t = De();
            return re === null ? (t.memoizedState = e) : Wc(t, re.memoizedState, e);
        },
        useTransition: function () {
            var e = _l(vr)[0],
                t = De().memoizedState;
            return [e, t];
        },
        useMutableSource: Lc,
        useSyncExternalStore: zc,
        useId: Gc,
        unstable_isNewReconciler: !1,
    };
function Pn(e, t) {
    try {
        var n = "",
            r = t;
        do (n += Rf(r)), (r = r.return);
        while (r);
        var i = n;
    } catch (l) {
        i =
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
}
function jl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ys(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var am = typeof WeakMap == "function" ? WeakMap : Map;
function Kc(e, t, n) {
    (n = lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            ji || ((ji = !0), (js = r)), ys(e, t);
        }),
        n
    );
}
function qc(e, t, n) {
    (n = lt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        (n.payload = function () {
            return r(i);
        }),
            (n.callback = function () {
                ys(e, t);
            });
    }
    var l = e.stateNode;
    return (
        l !== null &&
            typeof l.componentDidCatch == "function" &&
            (n.callback = function () {
                ys(e, t), typeof r != "function" && (Pt === null ? (Pt = new Set([this])) : Pt.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function Na(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new am();
        var i = new Set();
        r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = Em.bind(null, e, t, n)), t.then(e, e));
}
function Ma(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function La(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t ? (e.flags |= 65536) : ((e.flags |= 128), (n.flags |= 131072), (n.flags &= -52805), n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = lt(-1, 1)), (t.tag = 2), kt(n, t, 1))), (n.lanes |= 1)), e);
}
var um = dt.ReactCurrentOwner,
    xe = !1;
function me(e, t, n, r) {
    t.child = e === null ? Nc(t, null, n, r) : Cn(t, e.child, n, r);
}
function za(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return gn(t, i), (r = wo(e, t, n, r, l, i)), (n = So()), e !== null && !xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ct(e, t, i)) : (G && n && oo(t), (t.flags |= 1), me(e, t, r, i), t.child);
}
function Ia(e, t, n, r, i) {
    if (e === null) {
        var l = n.type;
        return typeof l == "function" && !Lo(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = l), Zc(e, t, l, r, i))
            : ((e = ri(n.type, null, r, t, t.mode, i)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((l = e.child), !(e.lanes & i))) {
        var s = l.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ur), n(s, r) && e.ref === t.ref)) return ct(e, t, i);
    }
    return (t.flags |= 1), (e = jt(l, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Zc(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps;
        if (ur(l, r) && e.ref === t.ref)
            if (((xe = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0)) e.flags & 131072 && (xe = !0);
            else return (t.lanes = e.lanes), ct(e, t, i);
    }
    return xs(e, t, n, r, i);
}
function Jc(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), H(fn, Ce), (Ce |= n);
        else {
            if (!(n & 1073741824))
                return (e = l !== null ? l.baseLanes | n : n), (t.lanes = t.childLanes = 1073741824), (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }), (t.updateQueue = null), H(fn, Ce), (Ce |= e), null;
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), (r = l !== null ? l.baseLanes : n), H(fn, Ce), (Ce |= r);
        }
    else l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n), H(fn, Ce), (Ce |= r);
    return me(e, t, i, n), t.child;
}
function ed(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function xs(e, t, n, r, i) {
    var l = Se(n) ? Ut : pe.current;
    return (
        (l = En(t, l)), gn(t, i), (n = wo(e, t, n, r, l, i)), (r = So()), e !== null && !xe ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~i), ct(e, t, i)) : (G && r && oo(t), (t.flags |= 1), me(e, t, n, i), t.child)
    );
}
function Oa(e, t, n, r, i) {
    if (Se(n)) {
        var l = !0;
        yi(t);
    } else l = !1;
    if ((gn(t, i), t.stateNode === null)) ei(e, t), _c(t, n, r), gs(t, n, r, i), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            a = t.memoizedProps;
        s.props = a;
        var o = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? (c = be(c)) : ((c = Se(n) ? Ut : pe.current), (c = En(t, c)));
        var p = n.getDerivedStateFromProps,
            m = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        m || (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") || ((a !== r || o !== c) && ka(t, s, r, c)), (mt = !1);
        var v = t.memoizedState;
        (s.state = v),
            Ti(t, r, s, i),
            (o = t.memoizedState),
            a !== r || v !== o || we.current || mt
                ? (typeof p == "function" && (vs(t, n, p, r), (o = t.memoizedState)),
                  (a = mt || Ca(t, n, a, r, v, o, c))
                      ? (m ||
                            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (t.memoizedProps = r), (t.memoizedState = o)),
                  (s.props = r),
                  (s.state = o),
                  (s.context = c),
                  (r = a))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            kc(e, t),
            (a = t.memoizedProps),
            (c = t.type === t.elementType ? a : Be(t.type, a)),
            (s.props = c),
            (m = t.pendingProps),
            (v = s.context),
            (o = n.contextType),
            typeof o == "object" && o !== null ? (o = be(o)) : ((o = Se(n) ? Ut : pe.current), (o = En(t, o)));
        var g = n.getDerivedStateFromProps;
        (p = typeof g == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function") ||
            ((a !== m || v !== o) && ka(t, s, r, o)),
            (mt = !1),
            (v = t.memoizedState),
            (s.state = v),
            Ti(t, r, s, i);
        var w = t.memoizedState;
        a !== m || v !== w || we.current || mt
            ? (typeof g == "function" && (vs(t, n, g, r), (w = t.memoizedState)),
              (c = mt || Ca(t, n, c, r, v, w, o) || !1)
                  ? (p ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, w, o), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, w, o)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && v === e.memoizedState) || (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && v === e.memoizedState) || (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = w)),
              (s.props = r),
              (s.state = w),
              (s.context = o),
              (r = c))
            : (typeof s.componentDidUpdate != "function" || (a === e.memoizedProps && v === e.memoizedState) || (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" || (a === e.memoizedProps && v === e.memoizedState) || (t.flags |= 1024),
              (r = !1));
    }
    return ws(e, t, n, r, l, i);
}
function ws(e, t, n, r, i, l) {
    ed(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && xa(t, n, !1), ct(e, t, l);
    (r = t.stateNode), (um.current = t);
    var a = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (t.flags |= 1), e !== null && s ? ((t.child = Cn(t, e.child, null, l)), (t.child = Cn(t, null, a, l))) : me(e, t, a, l), (t.memoizedState = r.state), i && xa(t, n, !0), t.child;
}
function td(e) {
    var t = e.stateNode;
    t.pendingContext ? ya(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ya(e, t.context, !1), vo(e, t.containerInfo);
}
function Ra(e, t, n, r, i) {
    return Tn(), uo(i), (t.flags |= 256), me(e, t, n, r), t.child;
}
var Ss = { dehydrated: null, treeContext: null, retryLane: 0 };
function Es(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function nd(e, t, n) {
    var r = t.pendingProps,
        i = Q.current,
        l = !1,
        s = (t.flags & 128) !== 0,
        a;
    if (((a = s) || (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), a ? ((l = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (i |= 1), H(Q, i & 1), e === null))
        return (
            ms(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = t.mode),
                        (l = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && l !== null ? ((l.childLanes = 0), (l.pendingProps = s)) : (l = qi(s, r, 0, null)),
                        (e = Ht(e, r, n, null)),
                        (l.return = t),
                        (e.return = t),
                        (l.sibling = e),
                        (t.child = l),
                        (t.child.memoizedState = Es(n)),
                        (t.memoizedState = Ss),
                        e)
                      : Co(t, s))
        );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null))) return cm(e, t, s, r, a, i, n);
    if (l) {
        (l = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
        var o = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== i ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = o), (t.deletions = null)) : ((r = jt(i, o)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
            a !== null ? (l = jt(a, l)) : ((l = Ht(l, s, n, null)), (l.flags |= 2)),
            (l.return = t),
            (r.return = t),
            (r.sibling = l),
            (t.child = r),
            (r = l),
            (l = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? Es(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (l.memoizedState = s),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = Ss),
            r
        );
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = jt(l, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function Co(e, t) {
    return (t = qi({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Fr(e, t, n, r) {
    return r !== null && uo(r), Cn(t, e.child, null, n), (e = Co(t, t.pendingProps.children)), (e.flags |= 2), (t.memoizedState = null), e;
}
function cm(e, t, n, r, i, l, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = jl(Error(M(422)))), Fr(e, t, s, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((l = r.fallback),
              (i = t.mode),
              (r = qi({ mode: "visible", children: r.children }, i, 0, null)),
              (l = Ht(l, i, s, null)),
              (l.flags |= 2),
              (r.return = t),
              (l.return = t),
              (r.sibling = l),
              (t.child = r),
              t.mode & 1 && Cn(t, e.child, null, s),
              (t.child.memoizedState = Es(s)),
              (t.memoizedState = Ss),
              l);
    if (!(t.mode & 1)) return Fr(e, t, s, null);
    if (i.data === "$!") {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (l = Error(M(419))), (r = jl(l, r, void 0)), Fr(e, t, s, r);
    }
    if (((a = (s & e.childLanes) !== 0), xe || a)) {
        if (((r = se), r !== null)) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0;
            }
            (i = i & (r.suspendedLanes | s) ? 0 : i), i !== 0 && i !== l.retryLane && ((l.retryLane = i), ut(e, i), Ue(r, e, i, -1));
        }
        return Mo(), (r = jl(Error(M(421)))), Fr(e, t, s, r);
    }
    return i.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = Tm.bind(null, e)), (i._reactRetry = t), null)
        : ((e = l.treeContext),
          (Pe = Ct(i.nextSibling)),
          (_e = t),
          (G = !0),
          (Ve = null),
          e !== null && ((ze[Ie++] = rt), (ze[Ie++] = it), (ze[Ie++] = Wt), (rt = e.id), (it = e.overflow), (Wt = t)),
          (t = Co(t, r.children)),
          (t.flags |= 4096),
          t);
}
function ba(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hs(e.return, t, n);
}
function Nl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i })
        : ((l.isBackwards = t), (l.rendering = null), (l.renderingStartTime = 0), (l.last = r), (l.tail = n), (l.tailMode = i));
}
function rd(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail;
    if ((me(e, t, r.children, n), (r = Q.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && ba(e, n, t);
                else if (e.tag === 19) ba(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((H(Q, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (i) {
            case "forwards":
                for (n = t.child, i = null; n !== null; ) (e = n.alternate), e !== null && Ci(e) === null && (i = n), (n = n.sibling);
                (n = i), n === null ? ((i = t.child), (t.child = null)) : ((i = n.sibling), (n.sibling = null)), Nl(t, !1, i, n, l);
                break;
            case "backwards":
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && Ci(e) === null)) {
                        t.child = i;
                        break;
                    }
                    (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                Nl(t, !0, n, null, l);
                break;
            case "together":
                Nl(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function ei(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ct(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (Yt |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child, n = jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) (e = e.sibling), (n = n.sibling = jt(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function dm(e, t, n) {
    switch (t.tag) {
        case 3:
            td(t), Tn();
            break;
        case 5:
            Mc(t);
            break;
        case 1:
            Se(t.type) && yi(t);
            break;
        case 4:
            vo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            H(Si, r._currentValue), (r._currentValue = i);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null ? (H(Q, Q.current & 1), (t.flags |= 128), null) : n & t.child.childLanes ? nd(e, t, n) : (H(Q, Q.current & 1), (e = ct(e, t, n)), e !== null ? e.sibling : null);
            H(Q, Q.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return rd(e, t, n);
                t.flags |= 128;
            }
            if (((i = t.memoizedState), i !== null && ((i.rendering = null), (i.tail = null), (i.lastEffect = null)), H(Q, Q.current), r)) break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Jc(e, t, n);
    }
    return ct(e, t, n);
}
var id, Ts, ld, sd;
id = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Ts = function () {};
ld = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        (e = t.stateNode), $t(Ze.current);
        var l = null;
        switch (n) {
            case "input":
                (i = Wl(e, i)), (r = Wl(e, r)), (l = []);
                break;
            case "select":
                (i = q({}, i, { value: void 0 })), (r = q({}, r, { value: void 0 })), (l = []);
                break;
            case "textarea":
                (i = Xl(e, i)), (r = Xl(e, r)), (l = []);
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = vi);
        }
        Kl(n, r);
        var s;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var a = i[c];
                    for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (nr.hasOwnProperty(c) ? l || (l = []) : (l = l || []).push(c, null));
        for (c in r) {
            var o = r[c];
            if (((a = i != null ? i[c] : void 0), r.hasOwnProperty(c) && o !== a && (o != null || a != null)))
                if (c === "style")
                    if (a) {
                        for (s in a) !a.hasOwnProperty(s) || (o && o.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in o) o.hasOwnProperty(s) && a[s] !== o[s] && (n || (n = {}), (n[s] = o[s]));
                    } else n || (l || (l = []), l.push(c, n)), (n = o);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((o = o ? o.__html : void 0), (a = a ? a.__html : void 0), o != null && a !== o && (l = l || []).push(c, o))
                        : c === "children"
                        ? (typeof o != "string" && typeof o != "number") || (l = l || []).push(c, "" + o)
                        : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (nr.hasOwnProperty(c) ? (o != null && c === "onScroll" && U("scroll", e), l || a === o || (l = [])) : (l = l || []).push(c, o));
        }
        n && (l = l || []).push("style", n);
        var c = l;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
sd = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Dn(e, t) {
    if (!G)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function de(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t) for (var i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags & 14680064), (r |= i.flags & 14680064), (i.return = e), (i = i.sibling);
    else for (i = e.child; i !== null; ) (n |= i.lanes | i.childLanes), (r |= i.subtreeFlags), (r |= i.flags), (i.return = e), (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fm(e, t, n) {
    var r = t.pendingProps;
    switch ((ao(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return de(t), null;
        case 1:
            return Se(t.type) && gi(), de(t), null;
        case 3:
            return (
                (r = t.stateNode),
                kn(),
                W(we),
                W(pe),
                yo(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) && (Ar(t) ? (t.flags |= 4) : e === null || (e.memoizedState.isDehydrated && !(t.flags & 256)) || ((t.flags |= 1024), Ve !== null && (Ls(Ve), (Ve = null)))),
                Ts(e, t),
                de(t),
                null
            );
        case 5:
            go(t);
            var i = $t(mr.current);
            if (((n = t.type), e !== null && t.stateNode != null)) ld(e, t, n, r, i), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(M(166));
                    return de(t), null;
                }
                if (((e = $t(Ze.current)), Ar(t))) {
                    (r = t.stateNode), (n = t.type);
                    var l = t.memoizedProps;
                    switch (((r[Qe] = t), (r[fr] = l), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            U("cancel", r), U("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            U("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Hn.length; i++) U(Hn[i], r);
                            break;
                        case "source":
                            U("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            U("error", r), U("load", r);
                            break;
                        case "details":
                            U("toggle", r);
                            break;
                        case "input":
                            Wo(r, l), U("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!l.multiple }), U("invalid", r);
                            break;
                        case "textarea":
                            Yo(r, l), U("invalid", r);
                    }
                    Kl(n, l), (i = null);
                    for (var s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a && (l.suppressHydrationWarning !== !0 && Dr(r.textContent, a, e), (i = ["children", a]))
                                    : typeof a == "number" && r.textContent !== "" + a && (l.suppressHydrationWarning !== !0 && Dr(r.textContent, a, e), (i = ["children", "" + a]))
                                : nr.hasOwnProperty(s) && a != null && s === "onScroll" && U("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Nr(r), Go(r, l, !0);
                            break;
                        case "textarea":
                            Nr(r), Xo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof l.onClick == "function" && (r.onclick = vi);
                    }
                    (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = i.nodeType === 9 ? i : i.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Iu(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                ? (e = s.createElement(n, { is: r.is }))
                                : ((e = s.createElement(n)), n === "select" && ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Qe] = t),
                        (e[fr] = r),
                        id(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = ql(n, r)), n)) {
                            case "dialog":
                                U("cancel", e), U("close", e), (i = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                U("load", e), (i = r);
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < Hn.length; i++) U(Hn[i], e);
                                i = r;
                                break;
                            case "source":
                                U("error", e), (i = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                U("error", e), U("load", e), (i = r);
                                break;
                            case "details":
                                U("toggle", e), (i = r);
                                break;
                            case "input":
                                Wo(e, r), (i = Wl(e, r)), U("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }), (i = q({}, r, { value: void 0 })), U("invalid", e);
                                break;
                            case "textarea":
                                Yo(e, r), (i = Xl(e, r)), U("invalid", e);
                                break;
                            default:
                                i = r;
                        }
                        Kl(n, i), (a = i);
                        for (l in a)
                            if (a.hasOwnProperty(l)) {
                                var o = a[l];
                                l === "style"
                                    ? bu(e, o)
                                    : l === "dangerouslySetInnerHTML"
                                    ? ((o = o ? o.__html : void 0), o != null && Ou(e, o))
                                    : l === "children"
                                    ? typeof o == "string"
                                        ? (n !== "textarea" || o !== "") && rr(e, o)
                                        : typeof o == "number" && rr(e, "" + o)
                                    : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (nr.hasOwnProperty(l) ? o != null && l === "onScroll" && U("scroll", e) : o != null && Ys(e, l, o, s));
                            }
                        switch (n) {
                            case "input":
                                Nr(e), Go(e, r, !1);
                                break;
                            case "textarea":
                                Nr(e), Xo(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Nt(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple), (l = r.value), l != null ? pn(e, !!r.multiple, l, !1) : r.defaultValue != null && pn(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = vi);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return de(t), null;
        case 6:
            if (e && t.stateNode != null) sd(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
                if (((n = $t(mr.current)), $t(Ze.current), Ar(t))) {
                    if (((r = t.stateNode), (n = t.memoizedProps), (r[Qe] = t), (l = r.nodeValue !== n) && ((e = _e), e !== null)))
                        switch (e.tag) {
                            case 3:
                                Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 && Dr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    l && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Qe] = t), (t.stateNode = r);
            }
            return de(t), null;
        case 13:
            if ((W(Q), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))) {
                if (G && Pe !== null && t.mode & 1 && !(t.flags & 128)) Tc(), Tn(), (t.flags |= 98560), (l = !1);
                else if (((l = Ar(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(M(318));
                        if (((l = t.memoizedState), (l = l !== null ? l.dehydrated : null), !l)) throw Error(M(317));
                        l[Qe] = t;
                    } else Tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    de(t), (l = !1);
                } else Ve !== null && (Ls(Ve), (Ve = null)), (l = !0);
                if (!l) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) && r && ((t.child.flags |= 8192), t.mode & 1 && (e === null || Q.current & 1 ? ie === 0 && (ie = 3) : Mo())),
                  t.updateQueue !== null && (t.flags |= 4),
                  de(t),
                  null);
        case 4:
            return kn(), Ts(e, t), e === null && cr(t.stateNode.containerInfo), de(t), null;
        case 10:
            return po(t.type._context), de(t), null;
        case 17:
            return Se(t.type) && gi(), de(t), null;
        case 19:
            if ((W(Q), (l = t.memoizedState), l === null)) return de(t), null;
            if (((r = (t.flags & 128) !== 0), (s = l.rendering), s === null))
                if (r) Dn(l, !1);
                else {
                    if (ie !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = Ci(e)), s !== null)) {
                                for (t.flags |= 128, Dn(l, !1), r = s.updateQueue, r !== null && ((t.updateQueue = r), (t.flags |= 4)), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                                    (l = n),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (s = l.alternate),
                                        s === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = s.childLanes),
                                              (l.lanes = s.lanes),
                                              (l.child = s.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps = s.memoizedProps),
                                              (l.memoizedState = s.memoizedState),
                                              (l.updateQueue = s.updateQueue),
                                              (l.type = s.type),
                                              (e = s.dependencies),
                                              (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return H(Q, (Q.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    l.tail !== null && te() > _n && ((t.flags |= 128), (r = !0), Dn(l, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = Ci(s)), e !== null)) {
                        if (((t.flags |= 128), (r = !0), (n = e.updateQueue), n !== null && ((t.updateQueue = n), (t.flags |= 4)), Dn(l, !0), l.tail === null && l.tailMode === "hidden" && !s.alternate && !G)) return de(t), null;
                    } else 2 * te() - l.renderingStartTime > _n && n !== 1073741824 && ((t.flags |= 128), (r = !0), Dn(l, !1), (t.lanes = 4194304));
                l.isBackwards ? ((s.sibling = t.child), (t.child = s)) : ((n = l.last), n !== null ? (n.sibling = s) : (t.child = s), (l.last = s));
            }
            return l.tail !== null ? ((t = l.tail), (l.rendering = t), (l.tail = t.sibling), (l.renderingStartTime = te()), (t.sibling = null), (n = Q.current), H(Q, r ? (n & 1) | 2 : n & 1), t) : (de(t), null);
        case 22:
        case 23:
            return No(), (r = t.memoizedState !== null), e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192), r && t.mode & 1 ? Ce & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : de(t), null;
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(M(156, t.tag));
}
function pm(e, t) {
    switch ((ao(t), t.tag)) {
        case 1:
            return Se(t.type) && gi(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return kn(), W(we), W(pe), yo(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null;
        case 5:
            return go(t), null;
        case 13:
            if ((W(Q), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(M(340));
                Tn();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return W(Q), null;
        case 4:
            return kn(), null;
        case 10:
            return po(t.type._context), null;
        case 22:
        case 23:
            return No(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var $r = !1,
    fe = !1,
    mm = typeof WeakSet == "function" ? WeakSet : Set,
    R = null;
function dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                Z(e, t, r);
            }
        else n.current = null;
}
function Cs(e, t, n) {
    try {
        n();
    } catch (r) {
        Z(e, t, r);
    }
}
var Da = !1;
function hm(e, t) {
    if (((os = pi), (e = cc()), so(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset,
                        l = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, l.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        a = -1,
                        o = -1,
                        c = 0,
                        p = 0,
                        m = e,
                        v = null;
                    t: for (;;) {
                        for (var g; m !== n || (i !== 0 && m.nodeType !== 3) || (a = s + i), m !== l || (r !== 0 && m.nodeType !== 3) || (o = s + r), m.nodeType === 3 && (s += m.nodeValue.length), (g = m.firstChild) !== null; )
                            (v = m), (m = g);
                        for (;;) {
                            if (m === e) break t;
                            if ((v === n && ++c === i && (a = s), v === l && ++p === r && (o = s), (g = m.nextSibling) !== null)) break;
                            (m = v), (v = m.parentNode);
                        }
                        m = g;
                    }
                    n = a === -1 || o === -1 ? null : { start: a, end: o };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (as = { focusedElem: e, selectionRange: n }, pi = !1, R = t; R !== null; )
        if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (R = e);
        else
            for (; R !== null; ) {
                t = R;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (w !== null) {
                                    var x = w.memoizedProps,
                                        S = w.memoizedState,
                                        f = t.stateNode,
                                        u = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Be(t.type, x), S);
                                    f.__reactInternalSnapshotBeforeUpdate = u;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1 ? (d.textContent = "") : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(M(163));
                        }
                } catch (y) {
                    Z(t, t.return, y);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (R = e);
                    break;
                }
                R = t.return;
            }
    return (w = Da), (Da = !1), w;
}
function qn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next);
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy;
                (i.destroy = void 0), l !== void 0 && Cs(t, n, l);
            }
            i = i.next;
        } while (i !== r);
    }
}
function Qi(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ks(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function od(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), od(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 && ((t = e.stateNode), t !== null && (delete t[Qe], delete t[fr], delete t[ds], delete t[qp], delete t[Zp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function ad(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Aa(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || ad(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Ps(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)), (n = n._reactRootContainer), n != null || t.onclick !== null || (t.onclick = vi));
    else if (r !== 4 && ((e = e.child), e !== null)) for (Ps(e, t, n), e = e.sibling; e !== null; ) Ps(e, t, n), (e = e.sibling);
}
function _s(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null)) for (_s(e, t, n), e = e.sibling; e !== null; ) _s(e, t, n), (e = e.sibling);
}
var oe = null,
    $e = !1;
function ft(e, t, n) {
    for (n = n.child; n !== null; ) ud(e, t, n), (n = n.sibling);
}
function ud(e, t, n) {
    if (qe && typeof qe.onCommitFiberUnmount == "function")
        try {
            qe.onCommitFiberUnmount($i, n);
        } catch {}
    switch (n.tag) {
        case 5:
            fe || dn(n, t);
        case 6:
            var r = oe,
                i = $e;
            (oe = null), ft(e, t, n), (oe = r), ($e = i), oe !== null && ($e ? ((e = oe), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : oe.removeChild(n.stateNode));
            break;
        case 18:
            oe !== null && ($e ? ((e = oe), (n = n.stateNode), e.nodeType === 8 ? El(e.parentNode, n) : e.nodeType === 1 && El(e, n), or(e)) : El(oe, n.stateNode));
            break;
        case 4:
            (r = oe), (i = $e), (oe = n.stateNode.containerInfo), ($e = !0), ft(e, t, n), (oe = r), ($e = i);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!fe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                i = r = r.next;
                do {
                    var l = i,
                        s = l.destroy;
                    (l = l.tag), s !== void 0 && (l & 2 || l & 4) && Cs(n, t, s), (i = i.next);
                } while (i !== r);
            }
            ft(e, t, n);
            break;
        case 1:
            if (!fe && (dn(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    Z(n, t, a);
                }
            ft(e, t, n);
            break;
        case 21:
            ft(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((fe = (r = fe) || n.memoizedState !== null), ft(e, t, n), (fe = r)) : ft(e, t, n);
            break;
        default:
            ft(e, t, n);
    }
}
function Ba(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new mm()),
            t.forEach(function (r) {
                var i = Cm.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(i, i));
            });
    }
}
function Ae(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var l = e,
                    s = t,
                    a = s;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (oe = a.stateNode), ($e = !1);
                            break e;
                        case 3:
                            (oe = a.stateNode.containerInfo), ($e = !0);
                            break e;
                        case 4:
                            (oe = a.stateNode.containerInfo), ($e = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (oe === null) throw Error(M(160));
                ud(l, s, i), (oe = null), ($e = !1);
                var o = i.alternate;
                o !== null && (o.return = null), (i.return = null);
            } catch (c) {
                Z(i, t, c);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) cd(t, e), (t = t.sibling);
}
function cd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ae(t, e), Ge(e), r & 4)) {
                try {
                    qn(3, e, e.return), Qi(3, e);
                } catch (x) {
                    Z(e, e.return, x);
                }
                try {
                    qn(5, e, e.return);
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            break;
        case 1:
            Ae(t, e), Ge(e), r & 512 && n !== null && dn(n, n.return);
            break;
        case 5:
            if ((Ae(t, e), Ge(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32)) {
                var i = e.stateNode;
                try {
                    rr(i, "");
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : l,
                    a = e.type,
                    o = e.updateQueue;
                if (((e.updateQueue = null), o !== null))
                    try {
                        a === "input" && l.type === "radio" && l.name != null && Lu(i, l), ql(a, s);
                        var c = ql(a, l);
                        for (s = 0; s < o.length; s += 2) {
                            var p = o[s],
                                m = o[s + 1];
                            p === "style" ? bu(i, m) : p === "dangerouslySetInnerHTML" ? Ou(i, m) : p === "children" ? rr(i, m) : Ys(i, p, m, c);
                        }
                        switch (a) {
                            case "input":
                                Gl(i, l);
                                break;
                            case "textarea":
                                zu(i, l);
                                break;
                            case "select":
                                var v = i._wrapperState.wasMultiple;
                                i._wrapperState.wasMultiple = !!l.multiple;
                                var g = l.value;
                                g != null ? pn(i, !!l.multiple, g, !1) : v !== !!l.multiple && (l.defaultValue != null ? pn(i, !!l.multiple, l.defaultValue, !0) : pn(i, !!l.multiple, l.multiple ? [] : "", !1));
                        }
                        i[fr] = l;
                    } catch (x) {
                        Z(e, e.return, x);
                    }
            }
            break;
        case 6:
            if ((Ae(t, e), Ge(e), r & 4)) {
                if (e.stateNode === null) throw Error(M(162));
                (i = e.stateNode), (l = e.memoizedProps);
                try {
                    i.nodeValue = l;
                } catch (x) {
                    Z(e, e.return, x);
                }
            }
            break;
        case 3:
            if ((Ae(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    or(t.containerInfo);
                } catch (x) {
                    Z(e, e.return, x);
                }
            break;
        case 4:
            Ae(t, e), Ge(e);
            break;
        case 13:
            Ae(t, e), Ge(e), (i = e.child), i.flags & 8192 && ((l = i.memoizedState !== null), (i.stateNode.isHidden = l), !l || (i.alternate !== null && i.alternate.memoizedState !== null) || (_o = te())), r & 4 && Ba(e);
            break;
        case 22:
            if (((p = n !== null && n.memoizedState !== null), e.mode & 1 ? ((fe = (c = fe) || p), Ae(t, e), (fe = c)) : Ae(t, e), Ge(e), r & 8192)) {
                if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !p && e.mode & 1))
                    for (R = e, p = e.child; p !== null; ) {
                        for (m = R = p; R !== null; ) {
                            switch (((v = R), (g = v.child), v.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qn(4, v, v.return);
                                    break;
                                case 1:
                                    dn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        (r = v), (n = v.return);
                                        try {
                                            (t = r), (w.props = t.memoizedProps), (w.state = t.memoizedState), w.componentWillUnmount();
                                        } catch (x) {
                                            Z(r, n, x);
                                        }
                                    }
                                    break;
                                case 5:
                                    dn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        $a(m);
                                        continue;
                                    }
                            }
                            g !== null ? ((g.return = v), (R = g)) : $a(m);
                        }
                        p = p.sibling;
                    }
                e: for (p = null, m = e; ; ) {
                    if (m.tag === 5) {
                        if (p === null) {
                            p = m;
                            try {
                                (i = m.stateNode),
                                    c
                                        ? ((l = i.style), typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : (l.display = "none"))
                                        : ((a = m.stateNode), (o = m.memoizedProps.style), (s = o != null && o.hasOwnProperty("display") ? o.display : null), (a.style.display = Ru("display", s)));
                            } catch (x) {
                                Z(e, e.return, x);
                            }
                        }
                    } else if (m.tag === 6) {
                        if (p === null)
                            try {
                                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
                            } catch (x) {
                                Z(e, e.return, x);
                            }
                    } else if (((m.tag !== 22 && m.tag !== 23) || m.memoizedState === null || m === e) && m.child !== null) {
                        (m.child.return = m), (m = m.child);
                        continue;
                    }
                    if (m === e) break e;
                    for (; m.sibling === null; ) {
                        if (m.return === null || m.return === e) break e;
                        p === m && (p = null), (m = m.return);
                    }
                    p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
                }
            }
            break;
        case 19:
            Ae(t, e), Ge(e), r & 4 && Ba(e);
            break;
        case 21:
            break;
        default:
            Ae(t, e), Ge(e);
    }
}
function Ge(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (ad(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(M(160));
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (rr(i, ""), (r.flags &= -33));
                    var l = Aa(e);
                    _s(e, l, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        a = Aa(e);
                    Ps(e, a, s);
                    break;
                default:
                    throw Error(M(161));
            }
        } catch (o) {
            Z(e, e.return, o);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function vm(e, t, n) {
    (R = e), dd(e);
}
function dd(e, t, n) {
    for (var r = (e.mode & 1) !== 0; R !== null; ) {
        var i = R,
            l = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || $r;
            if (!s) {
                var a = i.alternate,
                    o = (a !== null && a.memoizedState !== null) || fe;
                a = $r;
                var c = fe;
                if ((($r = s), (fe = o) && !c)) for (R = i; R !== null; ) (s = R), (o = s.child), s.tag === 22 && s.memoizedState !== null ? Va(i) : o !== null ? ((o.return = s), (R = o)) : Va(i);
                for (; l !== null; ) (R = l), dd(l), (l = l.sibling);
                (R = i), ($r = a), (fe = c);
            }
            Fa(e);
        } else i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (R = l)) : Fa(e);
    }
}
function Fa(e) {
    for (; R !== null; ) {
        var t = R;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            fe || Qi(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !fe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var i = t.elementType === t.type ? n.memoizedProps : Be(t.type, n.memoizedProps);
                                    r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var l = t.updateQueue;
                            l !== null && Ta(t, l, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Ta(t, s, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var o = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        o.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        o.src && (n.src = o.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var p = c.memoizedState;
                                    if (p !== null) {
                                        var m = p.dehydrated;
                                        m !== null && or(m);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(M(163));
                    }
                fe || (t.flags & 512 && ks(t));
            } catch (v) {
                Z(t, t.return, v);
            }
        }
        if (t === e) {
            R = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (R = n);
            break;
        }
        R = t.return;
    }
}
function $a(e) {
    for (; R !== null; ) {
        var t = R;
        if (t === e) {
            R = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (R = n);
            break;
        }
        R = t.return;
    }
}
function Va(e) {
    for (; R !== null; ) {
        var t = R;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Qi(4, t);
                    } catch (o) {
                        Z(t, n, o);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount();
                        } catch (o) {
                            Z(t, i, o);
                        }
                    }
                    var l = t.return;
                    try {
                        ks(t);
                    } catch (o) {
                        Z(t, l, o);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        ks(t);
                    } catch (o) {
                        Z(t, s, o);
                    }
            }
        } catch (o) {
            Z(t, t.return, o);
        }
        if (t === e) {
            R = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (R = a);
            break;
        }
        R = t.return;
    }
}
var gm = Math.ceil,
    _i = dt.ReactCurrentDispatcher,
    ko = dt.ReactCurrentOwner,
    Re = dt.ReactCurrentBatchConfig,
    F = 0,
    se = null,
    ne = null,
    ae = 0,
    Ce = 0,
    fn = zt(0),
    ie = 0,
    yr = null,
    Yt = 0,
    Ki = 0,
    Po = 0,
    Zn = null,
    ye = null,
    _o = 0,
    _n = 1 / 0,
    tt = null,
    ji = !1,
    js = null,
    Pt = null,
    Vr = !1,
    yt = null,
    Ni = 0,
    Jn = 0,
    Ns = null,
    ti = -1,
    ni = 0;
function he() {
    return F & 6 ? te() : ti !== -1 ? ti : (ti = te());
}
function _t(e) {
    return e.mode & 1 ? (F & 2 && ae !== 0 ? ae & -ae : em.transition !== null ? (ni === 0 && (ni = Xu()), ni) : ((e = V), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : tc(e.type))), e)) : 1;
}
function Ue(e, t, n, r) {
    if (50 < Jn) throw ((Jn = 0), (Ns = null), Error(M(185)));
    wr(e, n, r), (!(F & 2) || e !== se) && (e === se && (!(F & 2) && (Ki |= n), ie === 4 && vt(e, ae)), Ee(e, r), n === 1 && F === 0 && !(t.mode & 1) && ((_n = te() + 500), Gi && It()));
}
function Ee(e, t) {
    var n = e.callbackNode;
    ep(e, t);
    var r = fi(e, e === se ? ae : 0);
    if (r === 0) n !== null && qo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && qo(n), t === 1))
            e.tag === 0 ? Jp(Ha.bind(null, e)) : wc(Ha.bind(null, e)),
                Qp(function () {
                    !(F & 6) && It();
                }),
                (n = null);
        else {
            switch (Qu(r)) {
                case 1:
                    n = Zs;
                    break;
                case 4:
                    n = Gu;
                    break;
                case 16:
                    n = di;
                    break;
                case 536870912:
                    n = Yu;
                    break;
                default:
                    n = di;
            }
            n = xd(n, fd.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function fd(e, t) {
    if (((ti = -1), (ni = 0), F & 6)) throw Error(M(327));
    var n = e.callbackNode;
    if (yn() && e.callbackNode !== n) return null;
    var r = fi(e, e === se ? ae : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Mi(e, r);
    else {
        t = r;
        var i = F;
        F |= 2;
        var l = md();
        (se !== e || ae !== t) && ((tt = null), (_n = te() + 500), Vt(e, t));
        do
            try {
                wm();
                break;
            } catch (a) {
                pd(e, a);
            }
        while (!0);
        fo(), (_i.current = l), (F = i), ne !== null ? (t = 0) : ((se = null), (ae = 0), (t = ie));
    }
    if (t !== 0) {
        if ((t === 2 && ((i = ns(e)), i !== 0 && ((r = i), (t = Ms(e, i)))), t === 1)) throw ((n = yr), Vt(e, 0), vt(e, r), Ee(e, te()), n);
        if (t === 6) vt(e, r);
        else {
            if (((i = e.current.alternate), !(r & 30) && !ym(i) && ((t = Mi(e, r)), t === 2 && ((l = ns(e)), l !== 0 && ((r = l), (t = Ms(e, l)))), t === 1))) throw ((n = yr), Vt(e, 0), vt(e, r), Ee(e, te()), n);
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(M(345));
                case 2:
                    At(e, ye, tt);
                    break;
                case 3:
                    if ((vt(e, r), (r & 130023424) === r && ((t = _o + 500 - te()), 10 < t))) {
                        if (fi(e, 0) !== 0) break;
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            he(), (e.pingedLanes |= e.suspendedLanes & i);
                            break;
                        }
                        e.timeoutHandle = cs(At.bind(null, e, ye, tt), t);
                        break;
                    }
                    At(e, ye, tt);
                    break;
                case 4:
                    if ((vt(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var s = 31 - He(r);
                        (l = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~l);
                    }
                    if (((r = i), (r = te() - r), (r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * gm(r / 1960)) - r), 10 < r)) {
                        e.timeoutHandle = cs(At.bind(null, e, ye, tt), r);
                        break;
                    }
                    At(e, ye, tt);
                    break;
                case 5:
                    At(e, ye, tt);
                    break;
                default:
                    throw Error(M(329));
            }
        }
    }
    return Ee(e, te()), e.callbackNode === n ? fd.bind(null, e) : null;
}
function Ms(e, t) {
    var n = Zn;
    return e.current.memoizedState.isDehydrated && (Vt(e, t).flags |= 256), (e = Mi(e, t)), e !== 2 && ((t = ye), (ye = n), t !== null && Ls(t)), e;
}
function Ls(e) {
    ye === null ? (ye = e) : ye.push.apply(ye, e);
}
function ym(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!We(l(), i)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function vt(e, t) {
    for (t &= ~Po, t &= ~Ki, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - He(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Ha(e) {
    if (F & 6) throw Error(M(327));
    yn();
    var t = fi(e, 0);
    if (!(t & 1)) return Ee(e, te()), null;
    var n = Mi(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ns(e);
        r !== 0 && ((t = r), (n = Ms(e, r)));
    }
    if (n === 1) throw ((n = yr), Vt(e, 0), vt(e, t), Ee(e, te()), n);
    if (n === 6) throw Error(M(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), At(e, ye, tt), Ee(e, te()), null;
}
function jo(e, t) {
    var n = F;
    F |= 1;
    try {
        return e(t);
    } finally {
        (F = n), F === 0 && ((_n = te() + 500), Gi && It());
    }
}
function Xt(e) {
    yt !== null && yt.tag === 0 && !(F & 6) && yn();
    var t = F;
    F |= 1;
    var n = Re.transition,
        r = V;
    try {
        if (((Re.transition = null), (V = 1), e)) return e();
    } finally {
        (V = r), (Re.transition = n), (F = t), !(F & 6) && It();
    }
}
function No() {
    (Ce = fn.current), W(fn);
}
function Vt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Xp(n)), ne !== null))
        for (n = ne.return; n !== null; ) {
            var r = n;
            switch ((ao(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && gi();
                    break;
                case 3:
                    kn(), W(we), W(pe), yo();
                    break;
                case 5:
                    go(r);
                    break;
                case 4:
                    kn();
                    break;
                case 13:
                    W(Q);
                    break;
                case 19:
                    W(Q);
                    break;
                case 10:
                    po(r.type._context);
                    break;
                case 22:
                case 23:
                    No();
            }
            n = n.return;
        }
    if (((se = e), (ne = e = jt(e.current, null)), (ae = Ce = t), (ie = 0), (yr = null), (Po = Ki = Yt = 0), (ye = Zn = null), Ft !== null)) {
        for (t = 0; t < Ft.length; t++)
            if (((n = Ft[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var i = r.next,
                    l = n.pending;
                if (l !== null) {
                    var s = l.next;
                    (l.next = i), (r.next = s);
                }
                n.pending = r;
            }
        Ft = null;
    }
    return e;
}
function pd(e, t) {
    do {
        var n = ne;
        try {
            if ((fo(), (Zr.current = Pi), ki)) {
                for (var r = K.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null), (r = r.next);
                }
                ki = !1;
            }
            if (((Gt = 0), (le = re = K = null), (Kn = !1), (hr = 0), (ko.current = null), n === null || n.return === null)) {
                (ie = 1), (yr = t), (ne = null);
                break;
            }
            e: {
                var l = e,
                    s = n.return,
                    a = n,
                    o = t;
                if (((t = ae), (a.flags |= 32768), o !== null && typeof o == "object" && typeof o.then == "function")) {
                    var c = o,
                        p = a,
                        m = p.tag;
                    if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var v = p.alternate;
                        v ? ((p.updateQueue = v.updateQueue), (p.memoizedState = v.memoizedState), (p.lanes = v.lanes)) : ((p.updateQueue = null), (p.memoizedState = null));
                    }
                    var g = Ma(s);
                    if (g !== null) {
                        (g.flags &= -257), La(g, s, a, l, t), g.mode & 1 && Na(l, c, t), (t = g), (o = c);
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set();
                            x.add(o), (t.updateQueue = x);
                        } else w.add(o);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            Na(l, c, t), Mo();
                            break e;
                        }
                        o = Error(M(426));
                    }
                } else if (G && a.mode & 1) {
                    var S = Ma(s);
                    if (S !== null) {
                        !(S.flags & 65536) && (S.flags |= 256), La(S, s, a, l, t), uo(Pn(o, a));
                        break e;
                    }
                }
                (l = o = Pn(o, a)), ie !== 4 && (ie = 2), Zn === null ? (Zn = [l]) : Zn.push(l), (l = s);
                do {
                    switch (l.tag) {
                        case 3:
                            (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                            var f = Kc(l, o, t);
                            Ea(l, f);
                            break e;
                        case 1:
                            a = o;
                            var u = l.type,
                                d = l.stateNode;
                            if (!(l.flags & 128) && (typeof u.getDerivedStateFromError == "function" || (d !== null && typeof d.componentDidCatch == "function" && (Pt === null || !Pt.has(d))))) {
                                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                                var y = qc(l, a, t);
                                Ea(l, y);
                                break e;
                            }
                    }
                    l = l.return;
                } while (l !== null);
            }
            vd(n);
        } catch (E) {
            (t = E), ne === n && n !== null && (ne = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function md() {
    var e = _i.current;
    return (_i.current = Pi), e === null ? Pi : e;
}
function Mo() {
    (ie === 0 || ie === 3 || ie === 2) && (ie = 4), se === null || (!(Yt & 268435455) && !(Ki & 268435455)) || vt(se, ae);
}
function Mi(e, t) {
    var n = F;
    F |= 2;
    var r = md();
    (se !== e || ae !== t) && ((tt = null), Vt(e, t));
    do
        try {
            xm();
            break;
        } catch (i) {
            pd(e, i);
        }
    while (!0);
    if ((fo(), (F = n), (_i.current = r), ne !== null)) throw Error(M(261));
    return (se = null), (ae = 0), ie;
}
function xm() {
    for (; ne !== null; ) hd(ne);
}
function wm() {
    for (; ne !== null && !Wf(); ) hd(ne);
}
function hd(e) {
    var t = yd(e.alternate, e, Ce);
    (e.memoizedProps = e.pendingProps), t === null ? vd(e) : (ne = t), (ko.current = null);
}
function vd(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = pm(n, t)), n !== null)) {
                (n.flags &= 32767), (ne = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (ie = 6), (ne = null);
                return;
            }
        } else if (((n = fm(n, t, Ce)), n !== null)) {
            ne = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            ne = t;
            return;
        }
        ne = t = e;
    } while (t !== null);
    ie === 0 && (ie = 5);
}
function At(e, t, n) {
    var r = V,
        i = Re.transition;
    try {
        (Re.transition = null), (V = 1), Sm(e, t, n, r);
    } finally {
        (Re.transition = i), (V = r);
    }
    return null;
}
function Sm(e, t, n, r) {
    do yn();
    while (yt !== null);
    if (F & 6) throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(M(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
        (tp(e, l),
        e === se && ((ne = se = null), (ae = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Vr ||
            ((Vr = !0),
            xd(di, function () {
                return yn(), null;
            })),
        (l = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || l)
    ) {
        (l = Re.transition), (Re.transition = null);
        var s = V;
        V = 1;
        var a = F;
        (F |= 4), (ko.current = null), hm(e, n), cd(n, e), $p(as), (pi = !!os), (as = os = null), (e.current = n), vm(n), Gf(), (F = a), (V = s), (Re.transition = l);
    } else e.current = n;
    if ((Vr && ((Vr = !1), (yt = e), (Ni = i)), (l = e.pendingLanes), l === 0 && (Pt = null), Qf(n.stateNode), Ee(e, te()), t !== null))
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (ji) throw ((ji = !1), (e = js), (js = null), e);
    return Ni & 1 && e.tag !== 0 && yn(), (l = e.pendingLanes), l & 1 ? (e === Ns ? Jn++ : ((Jn = 0), (Ns = e))) : (Jn = 0), It(), null;
}
function yn() {
    if (yt !== null) {
        var e = Qu(Ni),
            t = Re.transition,
            n = V;
        try {
            if (((Re.transition = null), (V = 16 > e ? 16 : e), yt === null)) var r = !1;
            else {
                if (((e = yt), (yt = null), (Ni = 0), F & 6)) throw Error(M(331));
                var i = F;
                for (F |= 4, R = e.current; R !== null; ) {
                    var l = R,
                        s = l.child;
                    if (R.flags & 16) {
                        var a = l.deletions;
                        if (a !== null) {
                            for (var o = 0; o < a.length; o++) {
                                var c = a[o];
                                for (R = c; R !== null; ) {
                                    var p = R;
                                    switch (p.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qn(8, p, l);
                                    }
                                    var m = p.child;
                                    if (m !== null) (m.return = p), (R = m);
                                    else
                                        for (; R !== null; ) {
                                            p = R;
                                            var v = p.sibling,
                                                g = p.return;
                                            if ((od(p), p === c)) {
                                                R = null;
                                                break;
                                            }
                                            if (v !== null) {
                                                (v.return = g), (R = v);
                                                break;
                                            }
                                            R = g;
                                        }
                                }
                            }
                            var w = l.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var S = x.sibling;
                                        (x.sibling = null), (x = S);
                                    } while (x !== null);
                                }
                            }
                            R = l;
                        }
                    }
                    if (l.subtreeFlags & 2064 && s !== null) (s.return = l), (R = s);
                    else
                        e: for (; R !== null; ) {
                            if (((l = R), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        qn(9, l, l.return);
                                }
                            var f = l.sibling;
                            if (f !== null) {
                                (f.return = l.return), (R = f);
                                break e;
                            }
                            R = l.return;
                        }
                }
                var u = e.current;
                for (R = u; R !== null; ) {
                    s = R;
                    var d = s.child;
                    if (s.subtreeFlags & 2064 && d !== null) (d.return = s), (R = d);
                    else
                        e: for (s = u; R !== null; ) {
                            if (((a = R), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qi(9, a);
                                    }
                                } catch (E) {
                                    Z(a, a.return, E);
                                }
                            if (a === s) {
                                R = null;
                                break e;
                            }
                            var y = a.sibling;
                            if (y !== null) {
                                (y.return = a.return), (R = y);
                                break e;
                            }
                            R = a.return;
                        }
                }
                if (((F = i), It(), qe && typeof qe.onPostCommitFiberRoot == "function"))
                    try {
                        qe.onPostCommitFiberRoot($i, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (V = n), (Re.transition = t);
        }
    }
    return !1;
}
function Ua(e, t, n) {
    (t = Pn(n, t)), (t = Kc(e, t, 1)), (e = kt(e, t, 1)), (t = he()), e !== null && (wr(e, 1, t), Ee(e, t));
}
function Z(e, t, n) {
    if (e.tag === 3) Ua(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ua(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || (typeof r.componentDidCatch == "function" && (Pt === null || !Pt.has(r)))) {
                    (e = Pn(n, e)), (e = qc(t, e, 1)), (t = kt(t, e, 1)), (e = he()), t !== null && (wr(t, 1, e), Ee(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Em(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), (t = he()), (e.pingedLanes |= e.suspendedLanes & n), se === e && (ae & n) === n && (ie === 4 || (ie === 3 && (ae & 130023424) === ae && 500 > te() - _o) ? Vt(e, 0) : (Po |= n)), Ee(e, t);
}
function gd(e, t) {
    t === 0 && (e.mode & 1 ? ((t = zr), (zr <<= 1), !(zr & 130023424) && (zr = 4194304)) : (t = 1));
    var n = he();
    (e = ut(e, t)), e !== null && (wr(e, t, n), Ee(e, n));
}
function Tm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), gd(e, n);
}
function Cm(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(M(314));
    }
    r !== null && r.delete(t), gd(e, n);
}
var yd;
yd = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || we.current) xe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (xe = !1), dm(e, t, n);
            xe = !!(e.flags & 131072);
        }
    else (xe = !1), G && t.flags & 1048576 && Sc(t, wi, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            ei(e, t), (e = t.pendingProps);
            var i = En(t, pe.current);
            gn(t, n), (i = wo(null, t, r, e, i, n));
            var l = So();
            return (
                (t.flags |= 1),
                typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Se(r) ? ((l = !0), yi(t)) : (l = !1),
                      (t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null),
                      ho(t),
                      (i.updater = Yi),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      gs(t, r, e, n),
                      (t = ws(null, t, r, !0, l, n)))
                    : ((t.tag = 0), G && l && oo(t), me(null, t, i, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch ((ei(e, t), (e = t.pendingProps), (i = r._init), (r = i(r._payload)), (t.type = r), (i = t.tag = Pm(r)), (e = Be(r, e)), i)) {
                    case 0:
                        t = xs(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Oa(null, t, r, e, n);
                        break e;
                    case 11:
                        t = za(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ia(null, t, r, Be(r.type, e), n);
                        break e;
                }
                throw Error(M(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), xs(e, t, r, i, n);
        case 1:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), Oa(e, t, r, i, n);
        case 3:
            e: {
                if ((td(t), e === null)) throw Error(M(387));
                (r = t.pendingProps), (l = t.memoizedState), (i = l.element), kc(e, t), Ti(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), l.isDehydrated))
                    if (((l = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }), (t.updateQueue.baseState = l), (t.memoizedState = l), t.flags & 256)) {
                        (i = Pn(Error(M(423)), t)), (t = Ra(e, t, r, n, i));
                        break e;
                    } else if (r !== i) {
                        (i = Pn(Error(M(424)), t)), (t = Ra(e, t, r, n, i));
                        break e;
                    } else for (Pe = Ct(t.stateNode.containerInfo.firstChild), _e = t, G = !0, Ve = null, n = Nc(t, null, r, n), t.child = n; n; ) (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((Tn(), r === i)) {
                        t = ct(e, t, n);
                        break e;
                    }
                    me(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Mc(t),
                e === null && ms(t),
                (r = t.type),
                (i = t.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (s = i.children),
                us(r, i) ? (s = null) : l !== null && us(r, l) && (t.flags |= 32),
                ed(e, t),
                me(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && ms(t), null;
        case 13:
            return nd(e, t, n);
        case 4:
            return vo(t, t.stateNode.containerInfo), (r = t.pendingProps), e === null ? (t.child = Cn(t, null, r, n)) : me(e, t, r, n), t.child;
        case 11:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), za(e, t, r, i, n);
        case 7:
            return me(e, t, t.pendingProps, n), t.child;
        case 8:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return me(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (((r = t.type._context), (i = t.pendingProps), (l = t.memoizedProps), (s = i.value), H(Si, r._currentValue), (r._currentValue = s), l !== null))
                    if (We(l.value, s)) {
                        if (l.children === i.children && !we.current) {
                            t = ct(e, t, n);
                            break e;
                        }
                    } else
                        for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                            var a = l.dependencies;
                            if (a !== null) {
                                s = l.child;
                                for (var o = a.firstContext; o !== null; ) {
                                    if (o.context === r) {
                                        if (l.tag === 1) {
                                            (o = lt(-1, n & -n)), (o.tag = 2);
                                            var c = l.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var p = c.pending;
                                                p === null ? (o.next = o) : ((o.next = p.next), (p.next = o)), (c.pending = o);
                                            }
                                        }
                                        (l.lanes |= n), (o = l.alternate), o !== null && (o.lanes |= n), hs(l.return, n, t), (a.lanes |= n);
                                        break;
                                    }
                                    o = o.next;
                                }
                            } else if (l.tag === 10) s = l.type === t.type ? null : l.child;
                            else if (l.tag === 18) {
                                if (((s = l.return), s === null)) throw Error(M(341));
                                (s.lanes |= n), (a = s.alternate), a !== null && (a.lanes |= n), hs(s, n, t), (s = l.sibling);
                            } else s = l.child;
                            if (s !== null) s.return = l;
                            else
                                for (s = l; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((l = s.sibling), l !== null)) {
                                        (l.return = s.return), (s = l);
                                        break;
                                    }
                                    s = s.return;
                                }
                            l = s;
                        }
                me(e, t, i.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (i = t.type), (r = t.pendingProps.children), gn(t, n), (i = be(i)), (r = r(i)), (t.flags |= 1), me(e, t, r, n), t.child;
        case 14:
            return (r = t.type), (i = Be(r, t.pendingProps)), (i = Be(r.type, i)), Ia(e, t, r, i, n);
        case 15:
            return Zc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (r = t.type), (i = t.pendingProps), (i = t.elementType === r ? i : Be(r, i)), ei(e, t), (t.tag = 1), Se(r) ? ((e = !0), yi(t)) : (e = !1), gn(t, n), _c(t, r, i), gs(t, r, i, n), ws(null, t, r, !0, e, n);
        case 19:
            return rd(e, t, n);
        case 22:
            return Jc(e, t, n);
    }
    throw Error(M(156, t.tag));
};
function xd(e, t) {
    return Wu(e, t);
}
function km(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Oe(e, t, n, r) {
    return new km(e, t, n, r);
}
function Lo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Pm(e) {
    if (typeof e == "function") return Lo(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Qs)) return 11;
        if (e === Ks) return 14;
    }
    return 2;
}
function jt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Oe(e.tag, t, e.key, e.mode)), (n.elementType = e.elementType), (n.type = e.type), (n.stateNode = e.stateNode), (n.alternate = e), (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ri(e, t, n, r, i, l) {
    var s = 2;
    if (((r = e), typeof e == "function")) Lo(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case tn:
                return Ht(n.children, i, l, t);
            case Xs:
                (s = 8), (i |= 8);
                break;
            case $l:
                return (e = Oe(12, n, t, i | 2)), (e.elementType = $l), (e.lanes = l), e;
            case Vl:
                return (e = Oe(13, n, t, i)), (e.elementType = Vl), (e.lanes = l), e;
            case Hl:
                return (e = Oe(19, n, t, i)), (e.elementType = Hl), (e.lanes = l), e;
            case ju:
                return qi(n, i, l, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Pu:
                            s = 10;
                            break e;
                        case _u:
                            s = 9;
                            break e;
                        case Qs:
                            s = 11;
                            break e;
                        case Ks:
                            s = 14;
                            break e;
                        case pt:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(M(130, e == null ? e : typeof e, ""));
        }
    return (t = Oe(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t;
}
function Ht(e, t, n, r) {
    return (e = Oe(7, e, r, t)), (e.lanes = n), e;
}
function qi(e, t, n, r) {
    return (e = Oe(22, e, r, t)), (e.elementType = ju), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ml(e, t, n) {
    return (e = Oe(6, e, null, t)), (e.lanes = n), e;
}
function Ll(e, t, n) {
    return (t = Oe(4, e.children !== null ? e.children : [], e.key, t)), (t.lanes = n), (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }), t;
}
function _m(e, t, n, r, i) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = dl(0)),
        (this.expirationTimes = dl(-1)),
        (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
        (this.entanglements = dl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null);
}
function zo(e, t, n, r, i, l, s, a, o) {
    return (
        (e = new _m(e, t, n, a, o)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = Oe(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }),
        ho(l),
        e
    );
}
function jm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: en, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wd(e) {
    if (!e) return Mt;
    e = e._reactInternals;
    e: {
        if (qt(e) !== e || e.tag !== 1) throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Se(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(M(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Se(n)) return xc(e, n, t);
    }
    return t;
}
function Sd(e, t, n, r, i, l, s, a, o) {
    return (e = zo(n, r, !0, e, i, l, s, a, o)), (e.context = wd(null)), (n = e.current), (r = he()), (i = _t(n)), (l = lt(r, i)), (l.callback = t ?? null), kt(n, l, i), (e.current.lanes = i), wr(e, i, r), Ee(e, r), e;
}
function Zi(e, t, n, r) {
    var i = t.current,
        l = he(),
        s = _t(i);
    return (
        (n = wd(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = lt(l, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = kt(i, t, s)),
        e !== null && (Ue(e, i, s, l), qr(e, i, s)),
        s
    );
}
function Li(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Wa(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function Io(e, t) {
    Wa(e, t), (e = e.alternate) && Wa(e, t);
}
function Nm() {
    return null;
}
var Ed =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function Oo(e) {
    this._internalRoot = e;
}
Ji.prototype.render = Oo.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(M(409));
    Zi(e, t, null, null);
};
Ji.prototype.unmount = Oo.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Xt(function () {
            Zi(null, e, null, null);
        }),
            (t[at] = null);
    }
};
function Ji(e) {
    this._internalRoot = e;
}
Ji.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Zu();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < ht.length && t !== 0 && t < ht[n].priority; n++);
        ht.splice(n, 0, e), n === 0 && ec(e);
    }
};
function Ro(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function el(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")));
}
function Ga() {}
function Mm(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var l = r;
            r = function () {
                var c = Li(s);
                l.call(c);
            };
        }
        var s = Sd(t, r, e, 0, null, !1, !1, "", Ga);
        return (e._reactRootContainer = s), (e[at] = s.current), cr(e.nodeType === 8 ? e.parentNode : e), Xt(), s;
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var c = Li(o);
            a.call(c);
        };
    }
    var o = zo(e, 0, !1, null, null, !1, !1, "", Ga);
    return (
        (e._reactRootContainer = o),
        (e[at] = o.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        Xt(function () {
            Zi(t, o, n, r);
        }),
        o
    );
}
function tl(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
        var s = l;
        if (typeof i == "function") {
            var a = i;
            i = function () {
                var o = Li(s);
                a.call(o);
            };
        }
        Zi(t, s, e, i);
    } else s = Mm(n, t, e, i, r);
    return Li(s);
}
Ku = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Vn(t.pendingLanes);
                n !== 0 && (Js(t, n | 1), Ee(t, te()), !(F & 6) && ((_n = te() + 500), It()));
            }
            break;
        case 13:
            Xt(function () {
                var r = ut(e, 1);
                if (r !== null) {
                    var i = he();
                    Ue(r, e, 1, i);
                }
            }),
                Io(e, 1);
    }
};
eo = function (e) {
    if (e.tag === 13) {
        var t = ut(e, 134217728);
        if (t !== null) {
            var n = he();
            Ue(t, e, 134217728, n);
        }
        Io(e, 134217728);
    }
};
qu = function (e) {
    if (e.tag === 13) {
        var t = _t(e),
            n = ut(e, t);
        if (n !== null) {
            var r = he();
            Ue(n, e, t, r);
        }
        Io(e, t);
    }
};
Zu = function () {
    return V;
};
Ju = function (e, t) {
    var n = V;
    try {
        return (V = e), t();
    } finally {
        V = n;
    }
};
Jl = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Gl(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Wi(r);
                        if (!i) throw Error(M(90));
                        Mu(r), Gl(r, i);
                    }
                }
            }
            break;
        case "textarea":
            zu(e, n);
            break;
        case "select":
            (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
    }
};
Bu = jo;
Fu = Xt;
var Lm = { usingClientEntryPoint: !1, Events: [Er, sn, Wi, Du, Au, jo] },
    An = { findFiberByHostInstance: Bt, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" },
    zm = {
        bundleType: An.bundleType,
        version: An.version,
        rendererPackageName: An.rendererPackageName,
        rendererConfig: An.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: dt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Hu(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: An.findFiberByHostInstance || Nm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Hr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Hr.isDisabled && Hr.supportsFiber)
        try {
            ($i = Hr.inject(zm)), (qe = Hr);
        } catch {}
}
Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lm;
Ne.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ro(t)) throw Error(M(200));
    return jm(e, t, null, n);
};
Ne.createRoot = function (e, t) {
    if (!Ro(e)) throw Error(M(299));
    var n = !1,
        r = "",
        i = Ed;
    return (
        t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = zo(e, 1, !1, null, null, n, !1, r, i)),
        (e[at] = t.current),
        cr(e.nodeType === 8 ? e.parentNode : e),
        new Oo(t)
    );
};
Ne.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(M(188)) : ((e = Object.keys(e).join(",")), Error(M(268, e)));
    return (e = Hu(t)), (e = e === null ? null : e.stateNode), e;
};
Ne.flushSync = function (e) {
    return Xt(e);
};
Ne.hydrate = function (e, t, n) {
    if (!el(t)) throw Error(M(200));
    return tl(null, e, t, !0, n);
};
Ne.hydrateRoot = function (e, t, n) {
    if (!Ro(e)) throw Error(M(405));
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        s = Ed;
    if (
        (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Sd(t, null, e, 1, n ?? null, i, !1, l, s)),
        (e[at] = t.current),
        cr(e),
        r)
    )
        for (e = 0; e < r.length; e++) (n = r[e]), (i = n._getVersion), (i = i(n._source)), t.mutableSourceEagerHydrationData == null ? (t.mutableSourceEagerHydrationData = [n, i]) : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ji(t);
};
Ne.render = function (e, t, n) {
    if (!el(t)) throw Error(M(200));
    return tl(null, e, t, !1, n);
};
Ne.unmountComponentAtNode = function (e) {
    if (!el(e)) throw Error(M(40));
    return e._reactRootContainer
        ? (Xt(function () {
              tl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[at] = null);
              });
          }),
          !0)
        : !1;
};
Ne.unstable_batchedUpdates = jo;
Ne.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!el(n)) throw Error(M(200));
    if (e == null || e._reactInternals === void 0) throw Error(M(38));
    return tl(e, t, n, !1, r);
};
Ne.version = "18.2.0-next-9e3b772b8-20220608";
function Td() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Td);
        } catch (e) {
            console.error(e);
        }
}
Td(), (Su.exports = Ne);
var Im = Su.exports,
    Ya = Im;
(Bl.createRoot = Ya.createRoot), (Bl.hydrateRoot = Ya.hydrateRoot);
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function zi() {
    return (
        (zi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        zi.apply(this, arguments)
    );
}
var xt;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(xt || (xt = {}));
const Xa = "popstate";
function Om(e) {
    e === void 0 && (e = {});
    function t(i, l) {
        let { pathname: s = "/", search: a = "", hash: o = "" } = Cr(i.location.hash.substr(1));
        return !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s), zs("", { pathname: s, search: a, hash: o }, (l.state && l.state.usr) || null, (l.state && l.state.key) || "default");
    }
    function n(i, l) {
        let s = i.document.querySelector("base"),
            a = "";
        if (s && s.getAttribute("href")) {
            let o = i.location.href,
                c = o.indexOf("#");
            a = c === -1 ? o : o.slice(0, c);
        }
        return a + "#" + (typeof l == "string" ? l : Cd(l));
    }
    function r(i, l) {
        nl(i.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(l) + ")");
    }
    return bm(t, n, r, e);
}
function Te(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function nl(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function Rm() {
    return Math.random().toString(36).substr(2, 8);
}
function Qa(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function zs(e, t, n, r) {
    return n === void 0 && (n = null), zi({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Cr(t) : t, { state: n, key: (t && t.key) || r || Rm() });
}
function Cd(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t;
}
function Cr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function bm(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: i = document.defaultView, v5Compat: l = !1 } = r,
        s = i.history,
        a = xt.Pop,
        o = null,
        c = p();
    c == null && ((c = 0), s.replaceState(zi({}, s.state, { idx: c }), ""));
    function p() {
        return (s.state || { idx: null }).idx;
    }
    function m() {
        a = xt.Pop;
        let S = p(),
            f = S == null ? null : S - c;
        (c = S), o && o({ action: a, location: x.location, delta: f });
    }
    function v(S, f) {
        a = xt.Push;
        let u = zs(x.location, S, f);
        n && n(u, S), (c = p() + 1);
        let d = Qa(u, c),
            y = x.createHref(u);
        try {
            s.pushState(d, "", y);
        } catch (E) {
            if (E instanceof DOMException && E.name === "DataCloneError") throw E;
            i.location.assign(y);
        }
        l && o && o({ action: a, location: x.location, delta: 1 });
    }
    function g(S, f) {
        a = xt.Replace;
        let u = zs(x.location, S, f);
        n && n(u, S), (c = p());
        let d = Qa(u, c),
            y = x.createHref(u);
        s.replaceState(d, "", y), l && o && o({ action: a, location: x.location, delta: 0 });
    }
    function w(S) {
        let f = i.location.origin !== "null" ? i.location.origin : i.location.href,
            u = typeof S == "string" ? S : Cd(S);
        return Te(f, "No window.location.(origin|href) available to create URL for href: " + u), new URL(u, f);
    }
    let x = {
        get action() {
            return a;
        },
        get location() {
            return e(i, s);
        },
        listen(S) {
            if (o) throw new Error("A history only accepts one active listener");
            return (
                i.addEventListener(Xa, m),
                (o = S),
                () => {
                    i.removeEventListener(Xa, m), (o = null);
                }
            );
        },
        createHref(S) {
            return t(i, S);
        },
        createURL: w,
        encodeLocation(S) {
            let f = w(S);
            return { pathname: f.pathname, search: f.search, hash: f.hash };
        },
        push: v,
        replace: g,
        go(S) {
            return s.go(S);
        },
    };
    return x;
}
var Ka;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(Ka || (Ka = {}));
function Dm(e, t, n) {
    n === void 0 && (n = "/");
    let r = typeof t == "string" ? Cr(t) : t,
        i = _d(r.pathname || "/", n);
    if (i == null) return null;
    let l = kd(e);
    Am(l);
    let s = null;
    for (let a = 0; s == null && a < l.length; ++a) s = Ym(l[a], Km(i));
    return s;
}
function kd(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (l, s, a) => {
        let o = { relativePath: a === void 0 ? l.path || "" : a, caseSensitive: l.caseSensitive === !0, childrenIndex: s, route: l };
        o.relativePath.startsWith("/") &&
            (Te(o.relativePath.startsWith(r), 'Absolute route path "' + o.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
            (o.relativePath = o.relativePath.slice(r.length)));
        let c = xn([r, o.relativePath]),
            p = n.concat(o);
        l.children && l.children.length > 0 && (Te(l.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), kd(l.children, t, p, c)),
            !(l.path == null && !l.index) && t.push({ path: c, score: Wm(c, l.index), routesMeta: p });
    };
    return (
        e.forEach((l, s) => {
            var a;
            if (l.path === "" || !((a = l.path) != null && a.includes("?"))) i(l, s);
            else for (let o of Pd(l.path)) i(l, s, o);
        }),
        t
    );
}
function Pd(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        i = n.endsWith("?"),
        l = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [l, ""] : [l];
    let s = Pd(r.join("/")),
        a = [];
    return a.push(...s.map((o) => (o === "" ? l : [l, o].join("/")))), i && a.push(...s), a.map((o) => (e.startsWith("/") && o === "" ? "/" : o));
}
function Am(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : Gm(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const Bm = /^:\w+$/,
    Fm = 3,
    $m = 2,
    Vm = 1,
    Hm = 10,
    Um = -2,
    qa = (e) => e === "*";
function Wm(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(qa) && (r += Um), t && (r += $m), n.filter((i) => !qa(i)).reduce((i, l) => i + (Bm.test(l) ? Fm : l === "" ? Vm : Hm), r);
}
function Gm(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Ym(e, t) {
    let { routesMeta: n } = e,
        r = {},
        i = "/",
        l = [];
    for (let s = 0; s < n.length; ++s) {
        let a = n[s],
            o = s === n.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            p = Xm({ path: a.relativePath, caseSensitive: a.caseSensitive, end: o }, c);
        if (!p) return null;
        Object.assign(r, p.params);
        let m = a.route;
        l.push({ params: r, pathname: xn([i, p.pathname]), pathnameBase: Zm(xn([i, p.pathnameBase])), route: m }), p.pathnameBase !== "/" && (i = xn([i, p.pathnameBase]));
    }
    return l;
}
function Xm(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = Qm(e.path, e.caseSensitive, e.end),
        i = t.match(n);
    if (!i) return null;
    let l = i[0],
        s = l.replace(/(.)\/+$/, "$1"),
        a = i.slice(1);
    return {
        params: r.reduce((c, p, m) => {
            let { paramName: v, isOptional: g } = p;
            if (v === "*") {
                let x = a[m] || "";
                s = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
            }
            const w = a[m];
            return g && !w ? (c[v] = void 0) : (c[v] = qm(w || "", v)), c;
        }, {}),
        pathname: l,
        pathnameBase: s,
        pattern: e,
    };
}
function Qm(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        nl(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        i =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(/\/:(\w+)(\?)?/g, (s, a, o) => (r.push({ paramName: a, isOptional: o != null }), o ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({ paramName: "*" }), (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$")) : n ? (i += "\\/*$") : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r];
}
function Km(e) {
    try {
        return decodeURI(e);
    } catch (t) {
        return nl(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
    }
}
function qm(e, t) {
    try {
        return decodeURIComponent(e);
    } catch (n) {
        return nl(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
    }
}
function _d(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
const xn = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Zm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Jm(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const jd = ["post", "put", "patch", "delete"];
new Set(jd);
const eh = ["get", ...jd];
new Set(eh);
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ii() {
    return (
        (Ii = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ii.apply(this, arguments)
    );
}
const th = z.createContext(null),
    nh = z.createContext(null),
    Nd = z.createContext(null),
    rl = z.createContext(null),
    il = z.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Md = z.createContext(null);
function bo() {
    return z.useContext(rl) != null;
}
function rh() {
    return bo() || Te(!1), z.useContext(rl).location;
}
function ih(e, t) {
    return lh(e, t);
}
function lh(e, t, n, r) {
    bo() || Te(!1);
    let { navigator: i } = z.useContext(Nd),
        { matches: l } = z.useContext(il),
        s = l[l.length - 1],
        a = s ? s.params : {};
    s && s.pathname;
    let o = s ? s.pathnameBase : "/";
    s && s.route;
    let c = rh(),
        p;
    if (t) {
        var m;
        let S = typeof t == "string" ? Cr(t) : t;
        o === "/" || ((m = S.pathname) != null && m.startsWith(o)) || Te(!1), (p = S);
    } else p = c;
    let v = p.pathname || "/",
        g = o === "/" ? v : v.slice(o.length) || "/",
        w = Dm(e, { pathname: g }),
        x = ch(
            w &&
                w.map((S) =>
                    Object.assign({}, S, {
                        params: Object.assign({}, a, S.params),
                        pathname: xn([o, i.encodeLocation ? i.encodeLocation(S.pathname).pathname : S.pathname]),
                        pathnameBase: S.pathnameBase === "/" ? o : xn([o, i.encodeLocation ? i.encodeLocation(S.pathnameBase).pathname : S.pathnameBase]),
                    })
                ),
            l,
            n,
            r
        );
    return t && x ? z.createElement(rl.Provider, { value: { location: Ii({ pathname: "/", search: "", hash: "", state: null, key: "default" }, p), navigationType: xt.Pop } }, x) : x;
}
function sh() {
    let e = mh(),
        t = Jm(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
        l = null;
    return z.createElement(z.Fragment, null, z.createElement("h2", null, "Unexpected Application Error!"), z.createElement("h3", { style: { fontStyle: "italic" } }, t), n ? z.createElement("pre", { style: i }, n) : null, l);
}
const oh = z.createElement(sh, null);
class ah extends z.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0 ? z.createElement(il.Provider, { value: this.props.routeContext }, z.createElement(Md.Provider, { value: this.state.error, children: this.props.component })) : this.props.children;
    }
}
function uh(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = z.useContext(th);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), z.createElement(il.Provider, { value: t }, r);
}
function ch(e, t, n, r) {
    var i;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var l;
        if ((l = n) != null && l.errors) e = n.matches;
        else return null;
    }
    let s = e,
        a = (i = n) == null ? void 0 : i.errors;
    if (a != null) {
        let p = s.findIndex((m) => m.route.id && (a == null ? void 0 : a[m.route.id]));
        p >= 0 || Te(!1), (s = s.slice(0, Math.min(s.length, p + 1)));
    }
    let o = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let p = 0; p < s.length; p++) {
            let m = s[p];
            if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (c = p), m.route.id)) {
                let { loaderData: v, errors: g } = n,
                    w = m.route.loader && v[m.route.id] === void 0 && (!g || g[m.route.id] === void 0);
                if (m.route.lazy || w) {
                    (o = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
                    break;
                }
            }
        }
    return s.reduceRight((p, m, v) => {
        let g,
            w = !1,
            x = null,
            S = null;
        n &&
            ((g = a && m.route.id ? a[m.route.id] : void 0),
            (x = m.route.errorElement || oh),
            o && (c < 0 && v === 0 ? (hh("route-fallback", !1), (w = !0), (S = null)) : c === v && ((w = !0), (S = m.route.hydrateFallbackElement || null))));
        let f = t.concat(s.slice(0, v + 1)),
            u = () => {
                let d;
                return (
                    g ? (d = x) : w ? (d = S) : m.route.Component ? (d = z.createElement(m.route.Component, null)) : m.route.element ? (d = m.route.element) : (d = p),
                    z.createElement(uh, { match: m, routeContext: { outlet: p, matches: f, isDataRoute: n != null }, children: d })
                );
            };
        return n && (m.route.ErrorBoundary || m.route.errorElement || v === 0)
            ? z.createElement(ah, { location: n.location, revalidation: n.revalidation, component: x, error: g, children: u(), routeContext: { outlet: null, matches: f, isDataRoute: !0 } })
            : u();
    }, null);
}
var Is = (function (e) {
    return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
    );
})(Is || {});
function dh(e) {
    let t = z.useContext(nh);
    return t || Te(!1), t;
}
function fh(e) {
    let t = z.useContext(il);
    return t || Te(!1), t;
}
function ph(e) {
    let t = fh(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Te(!1), n.route.id;
}
function mh() {
    var e;
    let t = z.useContext(Md),
        n = dh(Is.UseRouteError),
        r = ph(Is.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const Za = {};
function hh(e, t, n) {
    !t && !Za[e] && (Za[e] = !0);
}
function Ld(e) {
    Te(!1);
}
function vh(e) {
    let { basename: t = "/", children: n = null, location: r, navigationType: i = xt.Pop, navigator: l, static: s = !1, future: a } = e;
    bo() && Te(!1);
    let o = t.replace(/^\/*/, "/"),
        c = z.useMemo(() => ({ basename: o, navigator: l, static: s, future: Ii({ v7_relativeSplatPath: !1 }, a) }), [o, a, l, s]);
    typeof r == "string" && (r = Cr(r));
    let { pathname: p = "/", search: m = "", hash: v = "", state: g = null, key: w = "default" } = r,
        x = z.useMemo(() => {
            let S = _d(p, o);
            return S == null ? null : { location: { pathname: S, search: m, hash: v, state: g, key: w }, navigationType: i };
        }, [o, p, m, v, g, w, i]);
    return x == null ? null : z.createElement(Nd.Provider, { value: c }, z.createElement(rl.Provider, { children: n, value: x }));
}
function gh(e) {
    let { children: t, location: n } = e;
    return ih(Os(t), n);
}
new Promise(() => {});
function Os(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        z.Children.forEach(e, (r, i) => {
            if (!z.isValidElement(r)) return;
            let l = [...t, i];
            if (r.type === z.Fragment) {
                n.push.apply(n, Os(r.props.children, l));
                return;
            }
            r.type !== Ld && Te(!1), !r.props.index || !r.props.children || Te(!1);
            let s = {
                id: r.props.id || l.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = Os(r.props.children, l)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const yh = "startTransition",
    Ja = Tf[yh];
function xh(e) {
    let { basename: t, children: n, future: r, window: i } = e,
        l = z.useRef();
    l.current == null && (l.current = Om({ window: i, v5Compat: !0 }));
    let s = l.current,
        [a, o] = z.useState({ action: s.action, location: s.location }),
        { v7_startTransition: c } = r || {},
        p = z.useCallback(
            (m) => {
                c && Ja ? Ja(() => o(m)) : o(m);
            },
            [o, c]
        );
    return z.useLayoutEffect(() => s.listen(p), [s, p]), z.createElement(vh, { basename: t, children: n, location: a.location, navigationType: a.action, navigator: s, future: r });
}
var eu;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"), (e.UseSubmit = "useSubmit"), (e.UseSubmitFetcher = "useSubmitFetcher"), (e.UseFetcher = "useFetcher"), (e.useViewTransitionState = "useViewTransitionState");
})(eu || (eu = {}));
var tu;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(tu || (tu = {}));
var zd = { exports: {} };
(function (e, t) {
    (function (r, i) {
        e.exports = i(z);
    })(typeof self < "u" ? self : of, function (n) {
        return (function (r) {
            var i = {};
            function l(s) {
                if (i[s]) return i[s].exports;
                var a = (i[s] = { i: s, l: !1, exports: {} });
                return r[s].call(a.exports, a, a.exports, l), (a.l = !0), a.exports;
            }
            return (
                (l.m = r),
                (l.c = i),
                (l.d = function (s, a, o) {
                    l.o(s, a) || Object.defineProperty(s, a, { configurable: !1, enumerable: !0, get: o });
                }),
                (l.n = function (s) {
                    var a =
                        s && s.__esModule
                            ? function () {
                                  return s.default;
                              }
                            : function () {
                                  return s;
                              };
                    return l.d(a, "a", a), a;
                }),
                (l.o = function (s, a) {
                    return Object.prototype.hasOwnProperty.call(s, a);
                }),
                (l.p = ""),
                l((l.s = 0))
            );
        })([
            function (r, i, l) {
                Object.defineProperty(i, "__esModule", { value: !0 });
                var s = l(1),
                    a = o(s);
                function o(c) {
                    return c && c.__esModule ? c : { default: c };
                }
                i.default = a.default;
            },
            function (r, i, l) {
                Object.defineProperty(i, "__esModule", { value: !0 });
                var s =
                        Object.assign ||
                        function (S) {
                            for (var f = 1; f < arguments.length; f++) {
                                var u = arguments[f];
                                for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (S[d] = u[d]);
                            }
                            return S;
                        },
                    a = (function () {
                        function S(f, u) {
                            for (var d = 0; d < u.length; d++) {
                                var y = u[d];
                                (y.enumerable = y.enumerable || !1), (y.configurable = !0), "value" in y && (y.writable = !0), Object.defineProperty(f, y.key, y);
                            }
                        }
                        return function (f, u, d) {
                            return u && S(f.prototype, u), d && S(f, d), f;
                        };
                    })(),
                    o = l(2),
                    c = p(o);
                function p(S) {
                    return S && S.__esModule ? S : { default: S };
                }
                function m(S, f) {
                    var u = {};
                    for (var d in S) f.indexOf(d) >= 0 || (Object.prototype.hasOwnProperty.call(S, d) && (u[d] = S[d]));
                    return u;
                }
                function v(S, f) {
                    if (!(S instanceof f)) throw new TypeError("Cannot call a class as a function");
                }
                function g(S, f) {
                    if (!S) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return f && (typeof f == "object" || typeof f == "function") ? f : S;
                }
                function w(S, f) {
                    if (typeof f != "function" && f !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof f);
                    (S.prototype = Object.create(f && f.prototype, { constructor: { value: S, enumerable: !1, writable: !0, configurable: !0 } })), f && (Object.setPrototypeOf ? Object.setPrototypeOf(S, f) : (S.__proto__ = f));
                }
                var x = (function (S) {
                    w(f, S);
                    function f(u) {
                        v(this, f);
                        var d = g(this, (f.__proto__ || Object.getPrototypeOf(f)).call(this, u));
                        return (d.smoothScroll = d.smoothScroll.bind(d)), d;
                    }
                    return (
                        a(f, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    l(3).polyfill();
                                },
                            },
                            {
                                key: "smoothScroll",
                                value: function (d) {
                                    var y = this;
                                    d.preventDefault();
                                    var E = function () {
                                        return 0;
                                    };
                                    typeof this.props.offset < "u" &&
                                        (this.props.offset && this.props.offset.constructor && this.props.offset.apply
                                            ? (E = this.props.offset)
                                            : (E = function () {
                                                  return parseInt(y.props.offset);
                                              }));
                                    var P = d.currentTarget.getAttribute("href").slice(1),
                                        _ = document.getElementById(P),
                                        T = _.getBoundingClientRect().top + window.pageYOffset;
                                    window.scroll({ top: T - E(), behavior: "smooth" }), this.props.onClick && this.props.onClick(d);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var d = this.props;
                                    d.offset;
                                    var y = m(d, ["offset"]);
                                    return c.default.createElement("a", s({}, y, { onClick: this.smoothScroll }));
                                },
                            },
                        ]),
                        f
                    );
                })(o.Component);
                i.default = x;
            },
            function (r, i) {
                r.exports = n;
            },
            function (r, i, l) {
                (function () {
                    function s() {
                        var a = window,
                            o = document;
                        if ("scrollBehavior" in o.documentElement.style && a.__forceSmoothScrollPolyfill__ !== !0) return;
                        var c = a.HTMLElement || a.Element,
                            p = 468,
                            m = { scroll: a.scroll || a.scrollTo, scrollBy: a.scrollBy, elementScroll: c.prototype.scroll || x, scrollIntoView: c.prototype.scrollIntoView },
                            v = a.performance && a.performance.now ? a.performance.now.bind(a.performance) : Date.now;
                        function g(T) {
                            var k = ["MSIE ", "Trident/", "Edge/"];
                            return new RegExp(k.join("|")).test(T);
                        }
                        var w = g(a.navigator.userAgent) ? 1 : 0;
                        function x(T, k) {
                            (this.scrollLeft = T), (this.scrollTop = k);
                        }
                        function S(T) {
                            return 0.5 * (1 - Math.cos(Math.PI * T));
                        }
                        function f(T) {
                            if (T === null || typeof T != "object" || T.behavior === void 0 || T.behavior === "auto" || T.behavior === "instant") return !0;
                            if (typeof T == "object" && T.behavior === "smooth") return !1;
                            throw new TypeError("behavior member of ScrollOptions " + T.behavior + " is not a valid value for enumeration ScrollBehavior.");
                        }
                        function u(T, k) {
                            if (k === "Y") return T.clientHeight + w < T.scrollHeight;
                            if (k === "X") return T.clientWidth + w < T.scrollWidth;
                        }
                        function d(T, k) {
                            var C = a.getComputedStyle(T, null)["overflow" + k];
                            return C === "auto" || C === "scroll";
                        }
                        function y(T) {
                            var k = u(T, "Y") && d(T, "Y"),
                                C = u(T, "X") && d(T, "X");
                            return k || C;
                        }
                        function E(T) {
                            var k;
                            do (T = T.parentNode), (k = T === o.body);
                            while (k === !1 && y(T) === !1);
                            return (k = null), T;
                        }
                        function P(T) {
                            var k = v(),
                                C,
                                N,
                                I,
                                L = (k - T.startTime) / p;
                            (L = L > 1 ? 1 : L), (C = S(L)), (N = T.startX + (T.x - T.startX) * C), (I = T.startY + (T.y - T.startY) * C), T.method.call(T.scrollable, N, I), (N !== T.x || I !== T.y) && a.requestAnimationFrame(P.bind(a, T));
                        }
                        function _(T, k, C) {
                            var N,
                                I,
                                L,
                                D,
                                A = v();
                            T === o.body ? ((N = a), (I = a.scrollX || a.pageXOffset), (L = a.scrollY || a.pageYOffset), (D = m.scroll)) : ((N = T), (I = T.scrollLeft), (L = T.scrollTop), (D = x)),
                                P({ scrollable: N, method: D, startTime: A, startX: I, startY: L, x: k, y: C });
                        }
                        (a.scroll = a.scrollTo = function () {
                            if (arguments[0] !== void 0) {
                                if (f(arguments[0]) === !0) {
                                    m.scroll.call(
                                        a,
                                        arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : a.scrollX || a.pageXOffset,
                                        arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : a.scrollY || a.pageYOffset
                                    );
                                    return;
                                }
                                _.call(a, o.body, arguments[0].left !== void 0 ? ~~arguments[0].left : a.scrollX || a.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : a.scrollY || a.pageYOffset);
                            }
                        }),
                            (a.scrollBy = function () {
                                if (arguments[0] !== void 0) {
                                    if (f(arguments[0])) {
                                        m.scrollBy.call(
                                            a,
                                            arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] != "object" ? arguments[0] : 0,
                                            arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0
                                        );
                                        return;
                                    }
                                    _.call(a, o.body, ~~arguments[0].left + (a.scrollX || a.pageXOffset), ~~arguments[0].top + (a.scrollY || a.pageYOffset));
                                }
                            }),
                            (c.prototype.scroll = c.prototype.scrollTo = function () {
                                if (arguments[0] !== void 0) {
                                    if (f(arguments[0]) === !0) {
                                        if (typeof arguments[0] == "number" && arguments[1] === void 0) throw new SyntaxError("Value could not be converted");
                                        m.elementScroll.call(
                                            this,
                                            arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] != "object" ? ~~arguments[0] : this.scrollLeft,
                                            arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop
                                        );
                                        return;
                                    }
                                    var T = arguments[0].left,
                                        k = arguments[0].top;
                                    _.call(this, this, typeof T > "u" ? this.scrollLeft : ~~T, typeof k > "u" ? this.scrollTop : ~~k);
                                }
                            }),
                            (c.prototype.scrollBy = function () {
                                if (arguments[0] !== void 0) {
                                    if (f(arguments[0]) === !0) {
                                        m.elementScroll.call(
                                            this,
                                            arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft,
                                            arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop
                                        );
                                        return;
                                    }
                                    this.scroll({ left: ~~arguments[0].left + this.scrollLeft, top: ~~arguments[0].top + this.scrollTop, behavior: arguments[0].behavior });
                                }
                            }),
                            (c.prototype.scrollIntoView = function () {
                                if (f(arguments[0]) === !0) {
                                    m.scrollIntoView.call(this, arguments[0] === void 0 ? !0 : arguments[0]);
                                    return;
                                }
                                var T = E(this),
                                    k = T.getBoundingClientRect(),
                                    C = this.getBoundingClientRect();
                                T !== o.body
                                    ? (_.call(this, T, T.scrollLeft + C.left - k.left, T.scrollTop + C.top - k.top), a.getComputedStyle(T).position !== "fixed" && a.scrollBy({ left: k.left, top: k.top, behavior: "smooth" }))
                                    : a.scrollBy({ left: C.left, top: C.top, behavior: "smooth" });
                            });
                    }
                    r.exports = { polyfill: s };
                })();
            },
        ]);
    });
})(zd);
var wh = zd.exports;
const Jt = Fs(wh);
var Id = { exports: {} },
    Sh = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Eh = Sh,
    Th = Eh;
function Od() {}
function Rd() {}
Rd.resetWarningCache = Od;
var Ch = function () {
    function e(r, i, l, s, a, o) {
        if (o !== Th) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw ((c.name = "Invariant Violation"), c);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: Rd,
        resetWarningCache: Od,
    };
    return (n.PropTypes = n), n;
};
Id.exports = Ch();
var kh = Id.exports;
const bt = Fs(kh);
var Ph = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
    _h = Object.defineProperty,
    jh = Object.defineProperties,
    Nh = Object.getOwnPropertyDescriptors,
    Oi = Object.getOwnPropertySymbols,
    bd = Object.prototype.hasOwnProperty,
    Dd = Object.prototype.propertyIsEnumerable,
    nu = (e, t, n) => (t in e ? _h(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n)),
    ru = (e, t) => {
        for (var n in t || (t = {})) bd.call(t, n) && nu(e, n, t[n]);
        if (Oi) for (var n of Oi(t)) Dd.call(t, n) && nu(e, n, t[n]);
        return e;
    },
    Mh = (e, t) => jh(e, Nh(t)),
    Lh = (e, t) => {
        var n = {};
        for (var r in e) bd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && Oi) for (var r of Oi(e)) t.indexOf(r) < 0 && Dd.call(e, r) && (n[r] = e[r]);
        return n;
    },
    J = (e, t, n) => {
        const r = z.forwardRef((i, l) => {
            var s = i,
                { color: a = "currentColor", size: o = 24, stroke: c = 2, children: p } = s,
                m = Lh(s, ["color", "size", "stroke", "children"]);
            return z.createElement("svg", ru(Mh(ru({ ref: l }, Ph), { width: o, height: o, stroke: a, strokeWidth: c, className: `tabler-icon tabler-icon-${e}` }), m), [...n.map(([v, g]) => z.createElement(v, g)), ...(p || [])]);
        });
        return (r.propTypes = { color: bt.string, size: bt.oneOfType([bt.string, bt.number]), stroke: bt.oneOfType([bt.string, bt.number]) }), (r.displayName = `${t}`), r;
    },
    ii = J("brand-css3", "IconBrandCss3", [
        ["path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z", key: "svg-0" }],
        ["path", { d: "M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5", key: "svg-1" }],
    ]),
    Ih = J("brand-git", "IconBrandGit", [
        ["path", { d: "M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-0" }],
        ["path", { d: "M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-1" }],
        ["path", { d: "M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", key: "svg-2" }],
        ["path", { d: "M12 15v-6", key: "svg-3" }],
        ["path", { d: "M15 11l-2 -2", key: "svg-4" }],
        ["path", { d: "M11 7l-1.9 -1.9", key: "svg-5" }],
        ["path", { d: "M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z", key: "svg-6" }],
    ]),
    Oh = J("brand-github-filled", "IconBrandGithubFilled", [
        [
            "path",
            {
                d:
                    "M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z",
                fill: "currentColor",
                key: "svg-0",
                strokeWidth: "0",
            },
        ],
    ]),
    Rh = J("brand-github", "IconBrandGithub", [
        [
            "path",
            {
                d:
                    "M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5",
                key: "svg-0",
            },
        ],
    ]),
    li = J("brand-html5", "IconBrandHtml5", [
        ["path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z", key: "svg-0" }],
        ["path", { d: "M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5", key: "svg-1" }],
    ]),
    er = J("brand-javascript", "IconBrandJavascript", [
        ["path", { d: "M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z", key: "svg-0" }],
        ["path", { d: "M7.5 8h3v8l-2 -1", key: "svg-1" }],
        ["path", { d: "M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5", key: "svg-2" }],
    ]),
    Ad = J("brand-laravel", "IconBrandLaravel", [
        ["path", { d: "M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z", key: "svg-0" }],
        ["path", { d: "M11 18v4", key: "svg-1" }],
        ["path", { d: "M7 15.5l7 -4", key: "svg-2" }],
        ["path", { d: "M14 7.5v4", key: "svg-3" }],
        ["path", { d: "M14 11.5l4 2.5", key: "svg-4" }],
        ["path", { d: "M11 13v-7.5l-4 -2.5l-4 2.5", key: "svg-5" }],
        ["path", { d: "M7 8l4 -2.5", key: "svg-6" }],
        ["path", { d: "M18 10l4 -2.5", key: "svg-7" }],
    ]),
    xdd = J("custom-svg-icon", "IconCustomSVG", [
          ["path", 
            { 
              d: "M724 1241 c1 -56 -37 -106 -151 -199 -99 -81 -143 -138 -143 -183 1 -33 31 -97 66 -138 31 -37 124 -114 130 -108 3 2 -16 44 -41 92 -25 49 -45 98 -45 110 0 28 21 56 109 150 88 92 115 141 114 206 -1 38 -25 109 -37 109 -2 0 -3 -17 -2 -39z" 
            }
          ],
          ["path", 
            { 
              d: "M848 1044 c-113 -27 -189 -85 -209 -157 -13 -50 -6 -77 37 -147 41 -66 41 -76 9 -124 -28 -41 -21 -44 36 -16 43 22 79 71 79 108 0 12 -13 49 -30 82 -16 33 -30 69 -30 80 0 25 60 86 139 139 33 23 61 44 61 46 0 8 -31 4 -92 -11z" 
            }
          ],
          ["path", 
            { 
              d: "M318 626 c-66 -14 -88 -30 -88 -63 0 -29 39 -48 119 -59 l53 -7 -30 -13 c-39 -16 -56 -45 -39 -68 7 -9 39 -25 72 -35 40 -13 51 -19 34 -20 -31 -1 -69 -35 -69 -61 0 -12 13 -26 33 -37 42 -22 224 -30 310 -13 64 12 117 35 117 48 0 5 -18 19 -40 31 -38 21 -44 22 -93 10 -57 -14 -192 -18 -219 -7 -10 4 -15 13 -13 20 4 10 38 13 128 15 122 1 246 25 254 48 1 6 -14 20 -35 31 -35 21 -40 21 -102 8 -125 -26 -299 -12 -286 23 3 8 6 17 6 19 0 2 44 4 98 4 53 0 138 5 187 11 74 9 98 16 137 42 48 32 63 53 31 43 -68 -21 -429 -33 -483 -16 -24 7 -24 8 15 24 83 35 83 35 20 34 -33 0 -85 -5 -117 -12z" 
            }
          ],
          ["path", 
            { 
              d: "M938 628 c-36 -13 -36 -28 0 -28 41 0 72 -26 72 -61 0 -44 -22 -80 -81 -133 -56 -51 -49 -58 32 -31 96 33 150 108 135 189 -12 65 -81 93 -158 64z" 
            }
          ],
          ["path", 
            { 
              d: "M228 291 c-115 -23 -129 -99 -25 -146 194 -89 714 -66 823 36 31 29 31 73 2 93 -25 18 -42 21 -33 6 20 -33 -26 -70 -120 -97 -80 -23 -381 -29 -484 -9 -99 18 -141 40 -119 62 8 8 34 18 59 23 l44 8 -37 17 c-40 17 -52 18 -110 7z" 
            }
          ],
          ["path", 
            { 
              d: "M1120 162 c-46 -36 -130 -72 -218 -94 -74 -19 -114 -22 -262 -22 -122 1 -199 6 -254 17 -133 28 -106 6 44 -36 64 -17 105 -21 270 -21 177 -1 202 1 269 22 91 29 146 62 166 103 22 41 15 55 -15 31z" 
            }
          ]
        ]),

    lmao = J("brand-bootstrap", "IconBrandBootstrap", [
        ["path", { d: "M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2", key: "svg-0" }],
        ["path", { d: "M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2", key: "svg-1" }],
        ["path", { d: "M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z", key: "svg-2" }]
    ]),

    lol = J("brand-cpp", "IconBrandCpp", [
        ["path", { d: "M18 12h4", key: "svg-0" }],
        ["path", { d: "M20 10v4", key: "svg-1" }],
        ["path", { d: "M11 12h4", key: "svg-2" }],
        ["path", { d: "M13 10v4", key: "svg-3" }],
        ["path", { d: "M9 9a3 3 0 0 0 -3 -3h-.5a3.5 3.5 0 0 0 -3.5 3.5v5a3.5 3.5 0 0 0 3.5 3.5h.5a3 3 0 0 0 3 -3", key: "svg-4" }]
    ]),

    insta = J("brand-instagram", "IconBrandInstagram", [
        ["path", { d: "M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z", key: "svg-0" }],
        ["path", { d: "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0", key: "svg-1" }],
        ["path", { d: "M16.5 7.5l0 .01", key: "svg-2" }]
    ]),
     
    bh = J("brand-linkedin", "IconBrandLinkedin", [
        ["path", { d: "M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z", key: "svg-0" }],
        ["path", { d: "M8 11l0 5", key: "svg-1" }],
        ["path", { d: "M8 8l0 .01", key: "svg-2" }],
        ["path", { d: "M12 16l0 -5", key: "svg-3" }],
        ["path", { d: "M16 16v-3a2 2 0 0 0 -4 0", key: "svg-4" }],
    ]),
    Dh = J("brand-mongodb", "IconBrandMongodb", [
        ["path", { d: "M12 3v19", key: "svg-0" }],
        ["path", { d: "M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z", key: "svg-1" }],
    ]),
    Bd = J("brand-mysql", "IconBrandMysql", [
        [
            "path",
            {
                d:
                    "M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3",
                key: "svg-0",
            },
        ],
        ["path", { d: "M9 7h.01", key: "svg-1" }],
    ]),
    Fd = J("brand-nodejs", "IconBrandNodejs", [
        [
            "path",
            {
                d: "M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0",
                key: "svg-0",
            },
        ],
        ["path", { d: "M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5", key: "svg-1" }],
    ]),
    Ah = J("brand-php", "IconBrandPhp", [
        ["path", { d: "M12 12m-10 0a10 9 0 1 0 20 0a10 9 0 1 0 -20 0", key: "svg-0" }],
        ["path", { d: "M5.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653", key: "svg-1" }],
        ["path", { d: "M15.5 15l.395 -1.974l.605 -3.026h1.32a1 1 0 0 1 .986 1.164l-.167 1a1 1 0 0 1 -.986 .836h-1.653", key: "svg-2" }],
        ["path", { d: "M12 7.5l-1 5.5", key: "svg-3" }],
        ["path", { d: "M11.6 10h2.4l-.5 3", key: "svg-4" }],
    ]),
    $d = J("brand-react", "IconBrandReact", [
        ["path", { d: "M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102", key: "svg-0" }],
        ["path", { d: "M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102", key: "svg-1" }],
        ["path", { d: "M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2", key: "svg-2" }],
        ["path", { d: "M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2", key: "svg-3" }],
        ["path", { d: "M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896", key: "svg-4" }],
        ["path", { d: "M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897", key: "svg-5" }],
        ["path", { d: "M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z", key: "svg-6" }],
    ]),
    Vd = J("brand-tailwind", "IconBrandTailwind", [
        [
            "path",
            {
                d:
                    "M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z",
                key: "svg-0",
            },
        ],
    ]),
    Bh = J("brand-ubuntu", "IconBrandUbuntu", [
        ["path", { d: "M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-0" }],
        [
            "path",
            {
                d:
                    "M17.723 7.41a7.992 7.992 0 0 0 -3.74 -2.162m-3.971 0a7.993 7.993 0 0 0 -3.789 2.216m-1.881 3.215a8 8 0 0 0 -.342 2.32c0 .738 .1 1.453 .287 2.132m1.96 3.428a7.993 7.993 0 0 0 3.759 2.19m4 0a7.993 7.993 0 0 0 3.747 -2.186m1.962 -3.43a8.008 8.008 0 0 0 .287 -2.131c0 -.764 -.107 -1.503 -.307 -2.203",
                key: "svg-1",
            },
        ],
        ["path", { d: "M5 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-2" }],
        ["path", { d: "M19 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0", key: "svg-3" }],
    ]),
    Fh = J("brand-whatsapp", "IconBrandWhatsapp", [
        ["path", { d: "M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9", key: "svg-0" }],
        ["path", { d: "M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1", key: "svg-1" }],
    ]),
    $h = J("brand-windows", "IconBrandWindows", [
        ["path", { d: "M17.8 20l-12 -1.5c-1 -.1 -1.8 -.9 -1.8 -1.9v-9.2c0 -1 .8 -1.8 1.8 -1.9l12 -1.5c1.2 -.1 2.2 .8 2.2 1.9v12.1c0 1.2 -1.1 2.1 -2.2 1.9z", key: "svg-0" }],
        ["path", { d: "M12 5l0 14", key: "svg-1" }],
        ["path", { d: "M4 12l16 0", key: "svg-2" }],
    ]),
    Vh = J("mail", "IconMail", [
        ["path", { d: "M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z", key: "svg-0" }],
        ["path", { d: "M3 7l9 6l9 -6", key: "svg-1" }],
    ]),
    Hh = J("menu-deep", "IconMenuDeep", [
        ["path", { d: "M4 6h16", key: "svg-0" }],
        ["path", { d: "M7 12h13", key: "svg-1" }],
        ["path", { d: "M10 18h10", key: "svg-2" }],
    ]),
    Uh = J("phone", "IconPhone", [["path", { d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2", key: "svg-0" }]]),
    Wh = J("terminal-2", "IconTerminal2", [
        ["path", { d: "M8 9l3 3l-3 3", key: "svg-0" }],
        ["path", { d: "M13 15l3 0", key: "svg-1" }],
        ["path", { d: "M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z", key: "svg-2" }],
    ]);
function Gh() {
    const [e, t] = z.useState(!0),
        n = () => {
            t((r) => !r);
        };
    return h.jsx("nav", {
        className: "absolute  z-50 flex w-full text-lg font-medium  text-white shadow-gray-800  md:py-2",
        children: h.jsxs("div", {
            className: "mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-end p-4 md:justify-center",
            children: [
                h.jsxs("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    className: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2  text-sm md:hidden ",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    onClick: () => {
                        n();
                    },
                    children: [h.jsx("span", { className: "sr-only", children: "Open main menu" }), h.jsx(Hh, {})],
                }),
                h.jsx("div", {
                    className: `backdrop-blur w-full md:block md:w-auto ${e ? "hidden" : ""}`,
                    id: "navbar-default",
                    children: h.jsxs("ul", {
                        className: "mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse ",
                        children: [
                            h.jsx("li", { children: h.jsx(Jt, { href: "#hero", children: "Inicio" }) }),
                            h.jsx("li", { children: h.jsx(Jt, { href: "#about", children: "¿Quien soy?" }) }),
                            h.jsx("li", { children: h.jsx(Jt, { href: "#skills", children: "Habilidades" }) }),
                            h.jsx("li", { children: h.jsx(Jt, { href: "#works", children: "Trabajos" }) }),
                            h.jsx("li", { children: h.jsx(Jt, { href: "#contact", children: "Contacto" }) }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
var si = {},
    Hd;
Object.defineProperty(si, "__esModule", { value: !0 });
var Un = h,
    Ye = z,
    Fe = function () {
        return (
            (Fe =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e;
                }),
            Fe.apply(this, arguments)
        );
    };
function Yh(e, t) {
    var n, r;
    switch (t.type) {
        case "TYPE":
            return Fe(Fe({}, e), { speed: t.speed, text: (n = t.payload) === null || n === void 0 ? void 0 : n.substring(0, e.text.length + 1) });
        case "DELAY":
            return Fe(Fe({}, e), { speed: t.payload });
        case "DELETE":
            return Fe(Fe({}, e), { speed: t.speed, text: (r = t.payload) === null || r === void 0 ? void 0 : r.substring(0, e.text.length - 1) });
        case "COUNT":
            return Fe(Fe({}, e), { count: e.count + 1 });
        default:
            return e;
    }
}
var iu = function (e) {
        var t = e.words,
            n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
            r = e.loop,
            i = r === void 0 ? 1 : r,
            l = e.typeSpeed,
            s = l === void 0 ? 80 : l,
            a = e.deleteSpeed,
            o = a === void 0 ? 50 : a,
            c = e.delaySpeed,
            p = c === void 0 ? 1500 : c,
            m = e.onLoopDone,
            v = e.onType,
            g = e.onDelete,
            w = e.onDelay,
            x = Ye.useReducer(Yh, { speed: s, text: "", count: 0 }),
            S = x[0],
            f = S.speed,
            u = S.text,
            d = S.count,
            y = x[1],
            E = Ye.useRef(0),
            P = Ye.useRef(!1),
            _ = Ye.useRef(!1),
            T = Ye.useRef(!1),
            k = Ye.useRef(!1),
            C = Ye.useCallback(
                function () {
                    var N = d % n.length,
                        I = n[N];
                    _.current
                        ? (y({ type: "DELETE", payload: I, speed: o }), u === "" && ((_.current = !1), y({ type: "COUNT" })))
                        : (y({ type: "TYPE", payload: I, speed: s }),
                          (T.current = !0),
                          u === I &&
                              (y({ type: "DELAY", payload: p }),
                              (T.current = !1),
                              (k.current = !0),
                              setTimeout(function () {
                                  (k.current = !1), (_.current = !0);
                              }, p),
                              i > 0 && ((E.current += 1), E.current / n.length === i && ((k.current = !1), (P.current = !0))))),
                        T.current && v && v(E.current),
                        _.current && g && g(),
                        k.current && w && w();
                },
                [d, p, o, i, s, n, u, v, g, w]
            );
        return (
            Ye.useEffect(
                function () {
                    var N = setTimeout(C, f);
                    return (
                        P.current && clearTimeout(N),
                        function () {
                            return clearTimeout(N);
                        }
                    );
                },
                [C, f]
            ),
            Ye.useEffect(
                function () {
                    m && P.current && m();
                },
                [m]
            ),
            [u, { isType: T.current, isDelay: k.current, isDelete: _.current, isDone: P.current }]
        );
    },
    Xh = "styles-module_blinkingCursor__yugAC",
    Qh = "styles-module_blinking__9VXRT";
(function (e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (e && typeof document < "u") {
        var r = document.head || document.getElementsByTagName("head")[0],
            i = document.createElement("style");
        (i.type = "text/css"), n === "top" && r.firstChild ? r.insertBefore(i, r.firstChild) : r.appendChild(i), i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(document.createTextNode(e));
    }
})(
    ".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}"
);
var lu = Ye.memo(function (e) {
    var t = e.cursorBlinking,
        n = t === void 0 || t,
        r = e.cursorStyle,
        i = r === void 0 ? "|" : r,
        l = e.cursorColor,
        s = l === void 0 ? "inherit" : l;
    return Un.jsx("span", Fe({ style: { color: s }, className: "".concat(Xh, " ").concat(n ? Qh : "") }, { children: i }));
});
(si.Cursor = lu),
    (Hd = si.Typewriter = function (e) {
        var t = e.words,
            n = t === void 0 ? ["Hello World!", "This is", "a simple Typewriter"] : t,
            r = e.loop,
            i = r === void 0 ? 1 : r,
            l = e.typeSpeed,
            s = l === void 0 ? 80 : l,
            a = e.deleteSpeed,
            o = a === void 0 ? 50 : a,
            c = e.delaySpeed,
            p = c === void 0 ? 1500 : c,
            m = e.cursor,
            v = m !== void 0 && m,
            g = e.cursorStyle,
            w = g === void 0 ? "|" : g,
            x = e.cursorColor,
            S = x === void 0 ? "inherit" : x,
            f = e.cursorBlinking,
            u = f === void 0 || f,
            d = e.onLoopDone,
            y = e.onType,
            E = e.onDelay,
            P = e.onDelete,
            _ = iu({ words: n, loop: i, typeSpeed: s, deleteSpeed: o, delaySpeed: p, onLoopDone: d, onType: y, onDelay: E, onDelete: P })[0];
        return Un.jsxs(Un.Fragment, { children: [Un.jsx("span", { children: _ }), v && Un.jsx(lu, { cursorStyle: w, cursorColor: S, cursorBlinking: u })] });
    }),
    (si.useTypewriter = iu);
function Kh() {
    const [e, t] = z.useState(!1),
        n = "itsa.emmaa@gmail.com",
        r = async () => {
            try {
                await navigator.clipboard.writeText(n), t(!0), setTimeout(() => t(!1), 1e3);
            } catch (i) {
                console.error("Error al copiar: ", i);
            }
        };
    return h.jsx(h.Fragment, {
        children: h.jsxs("div", {
            id: "hero",
            className: " relative h-full top-0 z-10 flex  w-full justify-center sm:pl-10 lg:pl-[4.5rem]",
            children: [
                h.jsx("div", {
                    className: "lg:grid w-full lg:grid-cols-1 mt-[8rem] lg:mt-20",
                    children: h.jsxs("div", {
                        className: "flex flex-col justify-center text-texto lg:mb-32 md:pl-6",
                        children: [
                            h.jsx("div", {
                                children: h.jsxs("h1", {
                                    className: "text-4xl font-bold md:text-6xl  xl:text-7xl 2xl:text-8xl",
                                    children: [
                                        "Hola,",
                                        h.jsxs("span", {
                                            className: "block lg:flex ",
                                            children: ["Yo soy,", h.jsx("span", { className: "ml-2 text-titulo", children: h.jsx(Hd, { words: ["Emmanuel"], loop: 5, cursor: !0, cursorStyle: "_", typeSpeed: 100 }) })],
                                        }),
                                        h.jsx("span", { children: "desarrollador web" }),
                                        h.jsx("br", {}),
                                        h.jsx("span", { className: "text-titulo", children: "Full Stack" }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mb-5 mt-2 lg:mb-10 lg:mt-5",
                                children: h.jsxs("p", {
                                    className: "lg:text-md text-sm   font-medium",
                                    children: ["Full Stack ", h.jsx("span", { className: "mx-2" }), " /", h.jsx("span", { className: "mx-2", children: "JavaScript" }), h.jsx("span", { className: "mx-2", children: "/" }), " PHP"],
                                }),
                            }),
                            h.jsx("div", {
                                children: h.jsx(Jt, {
                                    href: "#contact",
                                    className:
                                        "group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#6793c9] to-[#325c97]  p-0.5 text-sm font-medium text-gray-100 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 group-hover:from-purple-600 group-hover:to-blue-500 ",
                                    children: h.jsx("span", { className: "relative rounded-lg bg-[#243856] px-5 py-2.5 transition-all duration-75 ease-in  group-hover:bg-opacity-0", children: "Contactame" }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function qh() {
    const e = "<¿Quien soy?/>";
    return h.jsx("section", {
        id: "about",
        className: "relative z-10 flex justify-center bg-[#2E3532]  text-texto lg:h-screen",
        children: h.jsxs("div", {
            className: "my-20 grid w-[80%] lg:mt-[4rem] lg:grid-cols-2",
            children: [
                h.jsx("div", {
                    className: "",
                    children: h.jsxs("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                            h.jsx("h1", { className: "text-4xl font-bold md:text-5xl", children: h.jsx("span", { className: "text-titulo", children: e }) }),
                            h.jsxs("div", {
                                className: "font-medium md:text-xl",
                                children: [
                                    h.jsxs("p", {
                                        className: "mt-14  ",
                                        children: [
                                            "Soy Andrés Emmanuel, desarrollador Full Stack y estudiante de la Ingenieria de Desarrollo de Software con mas de",
                                            h.jsx("span", { className: "text-[#63e] mx-1", children: "dos años de experiencia" }),
                                            "en el desarrollo web, con JavaScript, PHP u otros lenguajes y frameworks.",
                                        ],
                                    }),
                                    h.jsxs("p", { className: "my-4", children: ["Siempre enfocado en proporcionar", h.jsx("span", { className: "ml-1 text-[#63e]", children: "nuevas soluciones." })] }),
                                    h.jsxs("p", {
                                        children: [
                                            "Me considero una persona comprometida al aprendizaje continuo y la mejora constante, siempre en busca de oportunidades para aplicar mis conocimientos y hablidades de",
                                            h.jsx("span", { className: "text-[#63e] ml-1", children: "manera efectiva e innovadora." }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
                h.jsx("div", {
                    className: "hidden justify-center pl-20  lg:ml-10 lg:flex lg:items-center",
                    children: h.jsx("div", {
                        className: "max-[450px]:flex max-[450px]:justify-end lg:w-[560px]",
                        children: h.jsx("div", {
                            className: "max-[450px]:mt-10 max-[450px]:justify-self-end max-[450px]:pr-10 lg:col-span-6 lg:mt-0 lg:flex",
                            children: h.jsxs("div", {
                                className: "home__img relative",
                                children: [
                                    h.jsx("div", {
                                        className: "absolute -right-2 top-14 flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] xl:right-4 xl:top-14",
                                        children: h.jsx("i", { className: "fa-brands fa-react text-4xl font-semibold text-[#2E3532]" }),
                                    }),
                                    h.jsx("div", {
                                        className: "absolute bottom-0 right-24 flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] xl:bottom-0 xl:right-36",
                                        children: h.jsx("i", { className: "fa-brands fa-html5 text-4xl font-semibold text-[#2E3532] " }),
                                    }),
                                    h.jsx("div", {
                                        className: "absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] lg:bottom-10 lg:left-9 xl:bottom-14 xl:left-20",
                                        children: h.jsx("i", { className: "fa-brands fa-css3-alt text-4xl font-semibold text-[#2E3532]" }),
                                    }),
                                    h.jsx("div", {
                                        className: "absolute flex h-16 w-16 items-center justify-center rounded-full bg-[#6793c9] lg:top-12 xl:left-20 xl:top-10",
                                        children: h.jsx("i", { className: "fa-brands fa-js  text-4xl text-[#2E3532]" }),
                                    }),
                                    h.jsxs("svg", {
                                        className: "home__blob",
                                        viewBox: "0 0 479 467",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                                        children: [
                                            h.jsx("mask", {
                                                id: "mask0",
                                                "mask-type": "alpha",
                                                children: h.jsx("path", {
                                                    d:
                                                        "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
                                                }),
                                            }),
                                            h.jsxs("g", {
                                                mask: "url(#mask0)",
                                                children: [
                                                    h.jsx("path", {
                                                        d:
                                                            "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
                                                    }),
                                                    h.jsx("image", { className: "home__blob-img ", x: "50", y: "60", href: "../png.png" }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                }),
            ],
        }),
    });
}
function Zh() {
    return h.jsx("section", {
        className: "home relative  z-10 bg-secundary pb-[10rem]  dark:bg-gray-900",
        id: "skills",
        children: h.jsxs("div", {
            className: "mx-auto max-w-screen-xl px-4 py-8 lg:py-16",
            children: [
                h.jsxs("h2", {
                    className: " text-center text-4xl font-extrabold leading-tight tracking-tight md:text-5xl dark:text-white",
                    children: [
                        h.jsx("span", { className: "text-titulo ", children: "Habilidades" }),
                        h.jsx("div", {
                            className: "flex w-full justify-center",
                            children: h.jsx("p", {
                                className: "mt-5 text-lg font-normal text-texto lg:w-[76%] lg:text-xl dark:text-gray-400",
                                children: "Mi experiencia se extiende al diseño y desarrollo de interfaces modernas y altamente interactivas.",
                            }),
                        }),
                    ],
                }),
                h.jsx("div", {
                    className: "flex items-center justify-center",
                    children: h.jsxs("div", {
                        className: "grid gap-x-16 sm:grid-cols-2 lg:grid-cols-4 ",
                        children: [
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: " ", children: "Frontend" }),
                                        }),
                                        h.jsxs("div", {
                                            className: "grid grid-cols-3 text-texto",
                                            children: [
                                                h.jsx("div", { children: h.jsx(li, { size: 58 }) }),
                                                h.jsx("div", { children: h.jsx(ii, { size: 58 }) }),
                                                h.jsx("div", { children: h.jsx(er, { size: 58 }) }),
                                                h.jsx("div", { children: h.jsx(lmao, { size: 58 }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: " ", children: "Backend" }),
                                        }),
                                        h.jsxs("div", { className: "grid grid-cols-3  text-texto", children: [h.jsx("div", { children: h.jsx(Fd, { size: 58 }) }), h.jsx("div", { children: h.jsx(Ad, { size: 58 }) }), h.jsx("div", {
                                            children: h.jsx("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1440 1440",
                                              width: "58", // Tamaño del icono
                                              height: "58", // Tamaño del icono
                                              fill: "#000000",
                                              stroke: "none",
                                              children: [
                                                h.jsx("g", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  transform: "translate(0.000000,1408.000000) scale(0.990000,-0.990000)",
                                                  fill: "white",
                                                  stroke: "none",
                                                  children: [
                                                    h.jsx("path", {
                                                      d: "M724 1241 c1 -56 -37 -106 -151 -199 -99 -81 -143 -138 -143 -183 1 -33 31 -97 66 -138 31 -37 124 -114 130 -108 3 2 -16 44 -41 92 -25 49 -45 98 -45 110 0 28 21 56 109 150 88 92 115 141 114 206 -1 38 -25 109 -37 109 -2 0 -3 -17 -2 -39z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M848 1044 c-113 -27 -189 -85 -209 -157 -13 -50 -6 -77 37 -147 41 -66 41 -76 9 -124 -28 -41 -21 -44 36 -16 43 22 79 71 79 108 0 12 -13 49 -30 82 -16 33 -30 69 -30 80 0 25 60 86 139 139 33 23 61 44 61 46 0 8 -31 4 -92 -11z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M318 626 c-66 -14 -88 -30 -88 -63 0 -29 39 -48 119 -59 l53 -7 -30 -13 c-39 -16 -56 -45 -39 -68 7 -9 39 -25 72 -35 40 -13 51 -19 34 -20 -31 -1 -69 -35 -69 -61 0 -12 13 -26 33 -37 42 -22 224 -30 310 -13 64 12 117 35 117 48 0 5 -18 19 -40 31 -38 21 -44 22 -93 10 -57 -14 -192 -18 -219 -7 -10 4 -15 13 -13 20 4 10 38 13 128 15 122 1 246 25 254 48 1 6 -14 20 -35 31 -35 21 -40 21 -102 8 -125 -26 -299 -12 -286 23 3 8 6 17 6 19 0 2 44 4 98 4 53 0 138 5 187 11 74 9 98 16 137 42 48 32 63 53 31 43 -68 -21 -429 -33 -483 -16 -24 7 -24 8 15 24 83 35 83 35 20 34 -33 0 -85 -5 -117 -12z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M938 628 c-36 -13 -36 -28 0 -28 41 0 72 -26 72 -61 0 -44 -22 -80 -81 -133 -56 -51 -49 -58 32 -31 96 33 150 108 135 189 -12 65 -81 93 -158 64z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M228 291 c-115 -23 -129 -99 -25 -146 194 -89 714 -66 823 36 31 29 31 73 2 93 -25 18 -42 21 -33 6 20 -33 -26 -70 -120 -97 -80 -23 -381 -29 -484 -9 -99 18 -141 40 -119 62 8 8 34 18 59 23 l44 8 -37 17 c-40 17 -52 18 -110 7z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M1120 162 c-46 -36 -130 -72 -218 -94 -74 -19 -114 -22 -262 -22 -122 1 -199 6 -254 17 -133 28 -106 6 44 -36 64 -17 105 -21 270 -21 177 -1 202 1 269 22 91 29 146 62 166 103 22 41 15 55 -15 31z"
                                                    })
                                                  ]
                                                })
                                              ]
                                            })
                                          }),
                                           h.jsx("div", { children: h.jsx(lol, { size: 58 }) }) ] }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: "", children: "Herramientas" }),
                                        }),
                                        h.jsxs("div", {
                                            className: "grid grid-cols-3 text-texto",
                                            children: [h.jsx("div", { children: h.jsx(Wh, { size: 58 }) }), h.jsx("div", { children: h.jsx(Ih, { size: 58 }) }), h.jsx("div", { children: h.jsx(Rh, { size: 58 }) })],
                                        }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: "", children: "Lenguajes" }),
                                        }),
                                        h.jsxs("div", { className: "grid grid-cols-3 text-texto", children: [h.jsx("div", { children: h.jsx(Ah, { size: 58 }) }), h.jsx("div", { children: h.jsx(er, { size: 58 }) }), h.jsx("div", {
                                            children: h.jsx("svg", {
                                              xmlns: "http://www.w3.org/2000/svg",
                                              viewBox: "0 0 1440 1440",
                                              width: "58", // Tamaño del icono
                                              height: "58", // Tamaño del icono
                                              fill: "#000000",
                                              stroke: "none",
                                              children: [
                                                h.jsx("g", {
                                                  xmlns: "http://www.w3.org/2000/svg",
                                                  transform: "translate(0.000000,1408.000000) scale(0.990000,-0.990000)",
                                                  fill: "white",
                                                  stroke: "none",
                                                  children: [
                                                    h.jsx("path", {
                                                      d: "M724 1241 c1 -56 -37 -106 -151 -199 -99 -81 -143 -138 -143 -183 1 -33 31 -97 66 -138 31 -37 124 -114 130 -108 3 2 -16 44 -41 92 -25 49 -45 98 -45 110 0 28 21 56 109 150 88 92 115 141 114 206 -1 38 -25 109 -37 109 -2 0 -3 -17 -2 -39z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M848 1044 c-113 -27 -189 -85 -209 -157 -13 -50 -6 -77 37 -147 41 -66 41 -76 9 -124 -28 -41 -21 -44 36 -16 43 22 79 71 79 108 0 12 -13 49 -30 82 -16 33 -30 69 -30 80 0 25 60 86 139 139 33 23 61 44 61 46 0 8 -31 4 -92 -11z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M318 626 c-66 -14 -88 -30 -88 -63 0 -29 39 -48 119 -59 l53 -7 -30 -13 c-39 -16 -56 -45 -39 -68 7 -9 39 -25 72 -35 40 -13 51 -19 34 -20 -31 -1 -69 -35 -69 -61 0 -12 13 -26 33 -37 42 -22 224 -30 310 -13 64 12 117 35 117 48 0 5 -18 19 -40 31 -38 21 -44 22 -93 10 -57 -14 -192 -18 -219 -7 -10 4 -15 13 -13 20 4 10 38 13 128 15 122 1 246 25 254 48 1 6 -14 20 -35 31 -35 21 -40 21 -102 8 -125 -26 -299 -12 -286 23 3 8 6 17 6 19 0 2 44 4 98 4 53 0 138 5 187 11 74 9 98 16 137 42 48 32 63 53 31 43 -68 -21 -429 -33 -483 -16 -24 7 -24 8 15 24 83 35 83 35 20 34 -33 0 -85 -5 -117 -12z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M938 628 c-36 -13 -36 -28 0 -28 41 0 72 -26 72 -61 0 -44 -22 -80 -81 -133 -56 -51 -49 -58 32 -31 96 33 150 108 135 189 -12 65 -81 93 -158 64z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M228 291 c-115 -23 -129 -99 -25 -146 194 -89 714 -66 823 36 31 29 31 73 2 93 -25 18 -42 21 -33 6 20 -33 -26 -70 -120 -97 -80 -23 -381 -29 -484 -9 -99 18 -141 40 -119 62 8 8 34 18 59 23 l44 8 -37 17 c-40 17 -52 18 -110 7z"
                                                    }),
                                                    h.jsx("path", {
                                                      d: "M1120 162 c-46 -36 -130 -72 -218 -94 -74 -19 -114 -22 -262 -22 -122 1 -199 6 -254 17 -133 28 -106 6 44 -36 64 -17 105 -21 270 -21 177 -1 202 1 269 22 91 29 146 62 166 103 22 41 15 55 -15 31z"
                                                    })
                                                  ]
                                                })
                                              ]
                                            })
                                          }), h.jsx("div", { children: h.jsx(lol, { size: 58 }) })] }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-3xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: " ", children: "Sistemas Operativos" }),
                                        }),
                                        h.jsxs("div", {
                                            className: `grid grid-cols-3 text-texto
                `,
                                            children: [h.jsx("div", { children: h.jsx($h, { size: 58 }) }), h.jsx("div", { children: h.jsx(Bh, { size: 58 }) })],
                                        }),
                                    ],
                                }),
                            }),
                            h.jsx("div", {
                                className: "mt-20",
                                children: h.jsxs("div", {
                                    children: [
                                        h.jsx("h2", {
                                            className: "mb-8 text-start text-4xl font-bold leading-tight tracking-tight text-titulo md:text-2xl lg:mb-6 dark:text-white",
                                            children: h.jsx("span", { className: " ", children: "Bases de datos" }),
                                        }),
                                        h.jsxs("div", {
                                            className: "grid grid-cols-3 text-texto",
                                            children: [h.jsx("div", { children: h.jsx(Bd, { size: 58 }) }), h.jsx(Dh, { stroke: 2, size: 58 })],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function zl({ url: e, link: t, titulo: n, descripcion: r, tecnologias: i }) {
    return h.jsxs("div", {
        className: "max-w-xs overflow-hidden rounded bg-[#243856] shadow-lg",
        children: [
            h.jsx("img", { className: "w-full", src: e, alt: "Sunset in the mountains" }),
            h.jsxs("div", {
                className: "px-6 py-4",
                children: [h.jsx("div", { className: "mb-2 text-xl font-bold", children: h.jsx("h1", { className: "text-2xl text-gray-400", children: n }) }), h.jsx("p", { className: "text-[14px] text-gray-200", children: r })],
            }),
            h.jsx("div", { className: "grid grid-cols-5 px-6  mb-2 w-full", children: i }),
            h.jsx("div", {
                className: "px-6 pb-4",
                children: h.jsxs("a", {
                    href: t,
                    className:
                        "inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                    children: [
                        "Ver demo",
                        h.jsx("svg", {
                            className: "ms-2 h-3.5 w-3.5 rtl:rotate-180",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 14 10",
                            children: h.jsx("path", { stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M1 5h12m0 0L9 1m4 4L9 9" }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Jh() {
    return h.jsx("div", {
        id: "works",
        className: "relative z-10  flex items-center justify-center  pb-20",
        children: h.jsxs("div", {
            className: "w-11/12 rounded-3xl pb-10",
            id: "work",
            children: [
                h.jsx("h2", { className: "mb-8 mt-10 text-center text-4xl font-extrabold leading-tight tracking-tight md:text-5xl", children: h.jsx("span", { className: "text-titulo ", children: "Trabajos" }) }),
                h.jsx("div", {
                    className: " mt-20 flex w-full items-center justify-center",
                    children: h.jsxs("div", {
                        className: "grid gap-14 px-3 lg:gap-[2rem] lg:px-0 2xl:grid-cols-2 2xl:gap-[2rem]",
                        children: [
                            h.jsx("div", {
                                className: "flex w-full  justify-end  lg:-ml-[10rem] 2xl:m-0",
                                children: h.jsx(zl, {
                                    url: "../img/diam.png",
                                    link: "https://diamweb.preunisanis.com/",
                                    titulo: "Diagnostico de Impacto Ambiental",
                                    descripcion: "Pagina oficial de DIAM , creado con HTML, CSS y JS.",
                                    tecnologias: h.jsxs(h.Fragment, {
                                        children: [
                                            h.jsx("span", { className: "mb-2  mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(li, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(ii, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(er, {}) }),
                                        ],
                                    }),
                                }),
                            }),
                            h.jsx("div", {
                                className: "flex w-full  justify-end lg:-ml-16 2xl:m-0",
                                children: h.jsx(zl, {
                                    url: "../img/csa.png",
                                    link: "https://clinica.emmaa.eu.org/",
                                    titulo: "Clinica San Antonio",
                                    descripcion:
                                        "Pagina oficial de la Clinica San Antonio Axochiapan, se desarrollo en HTML, CSS y JS",
                                    tecnologias: h.jsxs(h.Fragment, {
                                        children: [
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(li, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(ii, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(er, {}) }),
                                        ],
                                    }),
                                }),
                            }),
                            h.jsx("div", {
                                className: "flex w-full  justify-end  lg:ml-[5rem] 2xl:m-0",
                                children: h.jsx(zl, {
                                    url: "../img/app_social.png",
                                    link: "https://dev.emmaa.eu.org/",
                                    titulo: "Social App",
                                    descripcion: "Una red social para adolecentes, desarrollada en HTML, CSS, JS, PHP, MySQL y Bootstrap",
                                    tecnologias: h.jsxs(h.Fragment, {
                                        children: [
                                            h.jsx("span", { className: "mb-2  mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(li, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(ii, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(er, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(Ah, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(Bd, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(lmao, {}) }),
                                        ],
                                    }),
                                }),
                            }),
                            h.jsx("div", {
                                className: "flex w-full  justify-end  lg:ml-[5rem] 2xl:m-0",
                                children: h.jsx(zl, {
                                    url: "../img/cecyte_connect.png",
                                    link: "https://cecyte-connect.emmaa.eu.org/",
                                    titulo: "CECyTE Connect",
                                    descripcion: "Aplicacion tipo campus multiplataforma para los alumnos del CECyTE Morelos, desarrollada en HTML, CSS, JS, PHP, MySQL y Bootstrap",
                                    tecnologias: h.jsxs(h.Fragment, {
                                        children: [
                                            h.jsx("span", { className: "mb-2  mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(li, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(ii, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(er, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(Ah, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(Bd, {}) }),
                                            h.jsx("span", { className: "mb-2 mr-2 inline-block w-fit rounded-full bg-gray-200 px-2 py-1 text-sm font-semibold text-gray-700", children: h.jsx(lmao, {}) }),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                }),
            ],
        }),
    });
}
function ev() {
    return h.jsx("div", {
        id: "contact",
        className: "relative  z-10 py-10",
        children: h.jsx("div", {
            className: "",
            children: h.jsxs("section", {
                className: "mb-32",
                children: [
                    h.jsx("div", { className: "relative h-[300px] overflow-hidden bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')] bg-cover bg-[50%] bg-no-repeat" }),
                    h.jsx("div", {
                        className: " flex justify-center px-6 md:px-12",
                        children: h.jsx("div", {
                            className: "-mt-[100px] block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 md:py-16",
                            id: "testimonios1",
                            children: h.jsxs("div", {
                                className: " grid gap-x-6 md:grid-cols-2 lg:grid-cols-5",
                                children: [
                                    h.jsxs("div", {
                                        className: "mx-auto mb-12 text-center lg:mb-0",
                                        children: [
                                            h.jsx("div", { className: "flex justify-center", children: h.jsx(Vh, { className: "mb-4 text-titulo", size: 35 }) }),
                                            h.jsx("a", { href: "mailto:itsa.emmaa@gmail.com", className: "font-medium text-texto", children: "itsa.emmaa@gmail.com" }),
                                        ],
                                    }),
                                    h.jsxs("div", {
                                        className: "mx-auto mb-12 text-center lg:mb-0",
                                        children: [
                                            h.jsx("div", { className: "flex justify-center", children: h.jsx(Fh, { className: "mb-4 text-titulo ", size: 35 }) }),
                                            h.jsx("a", { href: "https://wa.me/527775729792", className: "font-medium text-texto", children: "52 777 572 9792" }),
                                        ],
                                    }),
                                    h.jsxs("div", {
                                        className: "mx-auto mb-12 text-center lg:mb-0",
                                        children: [
                                            h.jsx("div", { className: "flex justify-center", children: h.jsx(insta, { className: "mb-4 text-titulo ", size: 35 }) }),
                                            h.jsx("a", { href: "https://instagram.com/its_aemmaa", className: "font-medium text-texto", children: "Its_aemmaa" }),
                                        ],
                                    }),
                                    h.jsxs("div", {
                                        className: "mx-auto mb-6 text-center md:mb-0",
                                        children: [
                                            h.jsx("div", { className: "flex justify-center", children: h.jsx(bh, { className: "mb-4 text-titulo", size: 35 }) }),
                                            h.jsx("a", { href: "https://www.linkedin.com/in/itsaemma/", className: "font-medium text-texto  hover:text-gray-400", children: "Andrés Emmanuel" }),
                                        ],
                                    }),
                                    h.jsxs("div", {
                                        className: "mx-auto text-center",
                                        children: [
                                            h.jsx("div", { className: "flex justify-center", children: h.jsx(Oh, { className: "mb-4 text-texto", size: 35 }) }),
                                            h.jsx("a", { href: "https://github.com/Emmannuel", className: "font-medium text-texto hover:text-gray-400", children: "Emmannuel" }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tv() {
    return h.jsx("footer", {
        id: "footer",
        className: "relative  z-10 w-full   ",
        children: h.jsxs("div", {
            className: "mx-auto w-full p-4 py-6 lg:py-8",
            children: [
                h.jsx("hr", { className: "my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" }),
                h.jsx("div", { className: "sm:flex sm:items-center sm:justify-between", children: h.jsx("span", { className: "text-sm font-medium text-texto sm:text-center dark:text-gray-400", children: "© Andrés Emmanuel 2024" }) }),
            ],
        }),
    });
}
function su(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object;
}
function Do(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        Object.keys(t).forEach((n) => {
            typeof e[n] > "u" ? (e[n] = t[n]) : su(t[n]) && su(e[n]) && Object.keys(t[n]).length > 0 && Do(e[n], t[n]);
        });
}
const Ud = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector() {
        return null;
    },
    querySelectorAll() {
        return [];
    },
    getElementById() {
        return null;
    },
    createEvent() {
        return { initEvent() {} };
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return [];
            },
        };
    },
    createElementNS() {
        return {};
    },
    importNode() {
        return null;
    },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
};
function st() {
    const e = typeof document < "u" ? document : {};
    return Do(e, Ud), e;
}
const nv = {
    document: Ud,
    navigator: { userAgent: "" },
    location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
        return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return "";
            },
        };
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {};
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e);
    },
};
function Le() {
    const e = typeof window < "u" ? window : {};
    return Do(e, nv), e;
}
function rv(e) {
    return (
        e === void 0 && (e = ""),
        e
            .trim()
            .split(" ")
            .filter((t) => !!t.trim())
    );
}
function iv(e) {
    const t = e;
    Object.keys(t).forEach((n) => {
        try {
            t[n] = null;
        } catch {}
        try {
            delete t[n];
        } catch {}
    });
}
function Rs(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t);
}
function Ri() {
    return Date.now();
}
function lv(e) {
    const t = Le();
    let n;
    return t.getComputedStyle && (n = t.getComputedStyle(e, null)), !n && e.currentStyle && (n = e.currentStyle), n || (n = e.style), n;
}
function sv(e, t) {
    t === void 0 && (t = "x");
    const n = Le();
    let r, i, l;
    const s = lv(e);
    return (
        n.WebKitCSSMatrix
            ? ((i = s.transform || s.webkitTransform),
              i.split(",").length > 6 &&
                  (i = i
                      .split(", ")
                      .map((a) => a.replace(",", "."))
                      .join(", ")),
              (l = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
            : ((l = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")), (r = l.toString().split(","))),
        t === "x" && (n.WebKitCSSMatrix ? (i = l.m41) : r.length === 16 ? (i = parseFloat(r[12])) : (i = parseFloat(r[4]))),
        t === "y" && (n.WebKitCSSMatrix ? (i = l.m42) : r.length === 16 ? (i = parseFloat(r[13])) : (i = parseFloat(r[5]))),
        i || 0
    );
}
function Ur(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object";
}
function ov(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11);
}
function ke() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
        if (r != null && !ov(r)) {
            const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0);
            for (let l = 0, s = i.length; l < s; l += 1) {
                const a = i[l],
                    o = Object.getOwnPropertyDescriptor(r, a);
                o !== void 0 && o.enumerable && (Ur(e[a]) && Ur(r[a]) ? (r[a].__swiper__ ? (e[a] = r[a]) : ke(e[a], r[a])) : !Ur(e[a]) && Ur(r[a]) ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : ke(e[a], r[a])) : (e[a] = r[a]));
            }
        }
    }
    return e;
}
function Wr(e, t, n) {
    e.style.setProperty(t, n);
}
function Wd(e) {
    let { swiper: t, targetPosition: n, side: r } = e;
    const i = Le(),
        l = -t.translate;
    let s = null,
        a;
    const o = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = "none"), i.cancelAnimationFrame(t.cssModeFrameID);
    const c = n > l ? "next" : "prev",
        p = (v, g) => (c === "next" && v >= g) || (c === "prev" && v <= g),
        m = () => {
            (a = new Date().getTime()), s === null && (s = a);
            const v = Math.max(Math.min((a - s) / o, 1), 0),
                g = 0.5 - Math.cos(v * Math.PI) / 2;
            let w = l + g * (n - l);
            if ((p(w, n) && (w = n), t.wrapperEl.scrollTo({ [r]: w }), p(w, n))) {
                (t.wrapperEl.style.overflow = "hidden"),
                    (t.wrapperEl.style.scrollSnapType = ""),
                    setTimeout(() => {
                        (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: w });
                    }),
                    i.cancelAnimationFrame(t.cssModeFrameID);
                return;
            }
            t.cssModeFrameID = i.requestAnimationFrame(m);
        };
    m();
}
function Ke(e, t) {
    return t === void 0 && (t = ""), [...e.children].filter((n) => n.matches(t));
}
function bi(e) {
    try {
        console.warn(e);
        return;
    } catch {}
}
function Di(e, t) {
    t === void 0 && (t = []);
    const n = document.createElement(e);
    return n.classList.add(...(Array.isArray(t) ? t : rv(t))), n;
}
function av(e, t) {
    const n = [];
    for (; e.previousElementSibling; ) {
        const r = e.previousElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
}
function uv(e, t) {
    const n = [];
    for (; e.nextElementSibling; ) {
        const r = e.nextElementSibling;
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
    }
    return n;
}
function wt(e, t) {
    return Le().getComputedStyle(e, null).getPropertyValue(t);
}
function Ai(e) {
    let t = e,
        n;
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1);
        return n;
    }
}
function Gd(e, t) {
    const n = [];
    let r = e.parentElement;
    for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
    return n;
}
function bs(e, t, n) {
    const r = Le();
    return n
        ? e[t === "width" ? "offsetWidth" : "offsetHeight"] +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) +
              parseFloat(r.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"))
        : e.offsetWidth;
}
let Il;
function cv() {
    const e = Le(),
        t = st();
    return { smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style, touch: !!("ontouchstart" in e || (e.DocumentTouch && t instanceof e.DocumentTouch)) };
}
function Yd() {
    return Il || (Il = cv()), Il;
}
let Ol;
function dv(e) {
    let { userAgent: t } = e === void 0 ? {} : e;
    const n = Yd(),
        r = Le(),
        i = r.navigator.platform,
        l = t || r.navigator.userAgent,
        s = { ios: !1, android: !1 },
        a = r.screen.width,
        o = r.screen.height,
        c = l.match(/(Android);?[\s\/]+([\d.]+)?/);
    let p = l.match(/(iPad).*OS\s([\d_]+)/);
    const m = l.match(/(iPod)(.*OS\s([\d_]+))?/),
        v = !p && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        g = i === "Win32";
    let w = i === "MacIntel";
    const x = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return (
        !p && w && n.touch && x.indexOf(`${a}x${o}`) >= 0 && ((p = l.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, "13_0_0"]), (w = !1)),
        c && !g && ((s.os = "android"), (s.android = !0)),
        (p || v || m) && ((s.os = "ios"), (s.ios = !0)),
        s
    );
}
function fv(e) {
    return e === void 0 && (e = {}), Ol || (Ol = dv(e)), Ol;
}
let Rl;
function pv() {
    const e = Le();
    let t = !1;
    function n() {
        const r = e.navigator.userAgent.toLowerCase();
        return r.indexOf("safari") >= 0 && r.indexOf("chrome") < 0 && r.indexOf("android") < 0;
    }
    if (n()) {
        const r = String(e.navigator.userAgent);
        if (r.includes("Version/")) {
            const [i, l] = r
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((s) => Number(s));
            t = i < 16 || (i === 16 && l < 2);
        }
    }
    return { isSafari: t || n(), needPerspectiveFix: t, isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent) };
}
function mv() {
    return Rl || (Rl = pv()), Rl;
}
function hv(e) {
    let { swiper: t, on: n, emit: r } = e;
    const i = Le();
    let l = null,
        s = null;
    const a = () => {
            !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
        },
        o = () => {
            !t ||
                t.destroyed ||
                !t.initialized ||
                ((l = new ResizeObserver((m) => {
                    s = i.requestAnimationFrame(() => {
                        const { width: v, height: g } = t;
                        let w = v,
                            x = g;
                        m.forEach((S) => {
                            let { contentBoxSize: f, contentRect: u, target: d } = S;
                            (d && d !== t.el) || ((w = u ? u.width : (f[0] || f).inlineSize), (x = u ? u.height : (f[0] || f).blockSize));
                        }),
                            (w !== v || x !== g) && a();
                    });
                })),
                l.observe(t.el));
        },
        c = () => {
            s && i.cancelAnimationFrame(s), l && l.unobserve && t.el && (l.unobserve(t.el), (l = null));
        },
        p = () => {
            !t || t.destroyed || !t.initialized || r("orientationchange");
        };
    n("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            o();
            return;
        }
        i.addEventListener("resize", a), i.addEventListener("orientationchange", p);
    }),
        n("destroy", () => {
            c(), i.removeEventListener("resize", a), i.removeEventListener("orientationchange", p);
        });
}
function vv(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = [],
        s = Le(),
        a = function (p, m) {
            m === void 0 && (m = {});
            const v = s.MutationObserver || s.WebkitMutationObserver,
                g = new v((w) => {
                    if (t.__preventObserver__) return;
                    if (w.length === 1) {
                        i("observerUpdate", w[0]);
                        return;
                    }
                    const x = function () {
                        i("observerUpdate", w[0]);
                    };
                    s.requestAnimationFrame ? s.requestAnimationFrame(x) : s.setTimeout(x, 0);
                });
            g.observe(p, { attributes: typeof m.attributes > "u" ? !0 : m.attributes, childList: typeof m.childList > "u" ? !0 : m.childList, characterData: typeof m.characterData > "u" ? !0 : m.characterData }), l.push(g);
        },
        o = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const p = Gd(t.hostEl);
                    for (let m = 0; m < p.length; m += 1) a(p[m]);
                }
                a(t.hostEl, { childList: t.params.observeSlideChildren }), a(t.wrapperEl, { attributes: !1 });
            }
        },
        c = () => {
            l.forEach((p) => {
                p.disconnect();
            }),
                l.splice(0, l.length);
        };
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), r("init", o), r("destroy", c);
}
var gv = {
    on(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
        const i = n ? "unshift" : "push";
        return (
            e.split(" ").forEach((l) => {
                r.eventsListeners[l] || (r.eventsListeners[l] = []), r.eventsListeners[l][i](t);
            }),
            r
        );
    },
    once(e, t, n) {
        const r = this;
        if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
        function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
            for (var l = arguments.length, s = new Array(l), a = 0; a < l; a++) s[a] = arguments[a];
            t.apply(r, s);
        }
        return (i.__emitterProxy = t), r.on(e, i, n);
    },
    onAny(e, t) {
        const n = this;
        if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
        const r = t ? "unshift" : "push";
        return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
        const n = t.eventsAnyListeners.indexOf(e);
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
    },
    off(e, t) {
        const n = this;
        return (
            !n.eventsListeners ||
                n.destroyed ||
                !n.eventsListeners ||
                e.split(" ").forEach((r) => {
                    typeof t > "u"
                        ? (n.eventsListeners[r] = [])
                        : n.eventsListeners[r] &&
                          n.eventsListeners[r].forEach((i, l) => {
                              (i === t || (i.__emitterProxy && i.__emitterProxy === t)) && n.eventsListeners[r].splice(l, 1);
                          });
                }),
            n
        );
    },
    emit() {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
        let t, n, r;
        for (var i = arguments.length, l = new Array(i), s = 0; s < i; s++) l[s] = arguments[s];
        return (
            typeof l[0] == "string" || Array.isArray(l[0]) ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e)) : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
            n.unshift(r),
            (Array.isArray(t) ? t : t.split(" ")).forEach((o) => {
                e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach((c) => {
                        c.apply(r, [o, ...n]);
                    }),
                    e.eventsListeners &&
                        e.eventsListeners[o] &&
                        e.eventsListeners[o].forEach((c) => {
                            c.apply(r, n);
                        });
            }),
            e
        );
    },
};
function yv() {
    const e = this;
    let t, n;
    const r = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? (t = e.params.width) : (t = r.clientWidth),
        typeof e.params.height < "u" && e.params.height !== null ? (n = e.params.height) : (n = r.clientHeight),
        !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
            ((t = t - parseInt(wt(r, "padding-left") || 0, 10) - parseInt(wt(r, "padding-right") || 0, 10)),
            (n = n - parseInt(wt(r, "padding-top") || 0, 10) - parseInt(wt(r, "padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }));
}
function xv() {
    const e = this;
    function t(C, N) {
        return parseFloat(C.getPropertyValue(e.getDirectionLabel(N)) || 0);
    }
    const n = e.params,
        { wrapperEl: r, slidesEl: i, size: l, rtlTranslate: s, wrongRTL: a } = e,
        o = e.virtual && n.virtual.enabled,
        c = o ? e.virtual.slides.length : e.slides.length,
        p = Ke(i, `.${e.params.slideClass}, swiper-slide`),
        m = o ? e.virtual.slides.length : p.length;
    let v = [];
    const g = [],
        w = [];
    let x = n.slidesOffsetBefore;
    typeof x == "function" && (x = n.slidesOffsetBefore.call(e));
    let S = n.slidesOffsetAfter;
    typeof S == "function" && (S = n.slidesOffsetAfter.call(e));
    const f = e.snapGrid.length,
        u = e.slidesGrid.length;
    let d = n.spaceBetween,
        y = -x,
        E = 0,
        P = 0;
    if (typeof l > "u") return;
    typeof d == "string" && d.indexOf("%") >= 0 ? (d = (parseFloat(d.replace("%", "")) / 100) * l) : typeof d == "string" && (d = parseFloat(d)),
        (e.virtualSize = -d),
        p.forEach((C) => {
            s ? (C.style.marginLeft = "") : (C.style.marginRight = ""), (C.style.marginBottom = ""), (C.style.marginTop = "");
        }),
        n.centeredSlides && n.cssMode && (Wr(r, "--swiper-centered-offset-before", ""), Wr(r, "--swiper-centered-offset-after", ""));
    const _ = n.grid && n.grid.rows > 1 && e.grid;
    _ ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
    let T;
    const k = n.slidesPerView === "auto" && n.breakpoints && Object.keys(n.breakpoints).filter((C) => typeof n.breakpoints[C].slidesPerView < "u").length > 0;
    for (let C = 0; C < m; C += 1) {
        T = 0;
        let N;
        if ((p[C] && (N = p[C]), _ && e.grid.updateSlide(C, N, p), !(p[C] && wt(N, "display") === "none"))) {
            if (n.slidesPerView === "auto") {
                k && (p[C].style[e.getDirectionLabel("width")] = "");
                const I = getComputedStyle(N),
                    L = N.style.transform,
                    D = N.style.webkitTransform;
                if ((L && (N.style.transform = "none"), D && (N.style.webkitTransform = "none"), n.roundLengths)) T = e.isHorizontal() ? bs(N, "width", !0) : bs(N, "height", !0);
                else {
                    const A = t(I, "width"),
                        Y = t(I, "padding-left"),
                        Je = t(I, "padding-right"),
                        j = t(I, "margin-left"),
                        O = t(I, "margin-right"),
                        b = I.getPropertyValue("box-sizing");
                    if (b && b === "border-box") T = A + j + O;
                    else {
                        const { clientWidth: $, offsetWidth: X } = N;
                        T = A + Y + Je + j + O + (X - $);
                    }
                }
                L && (N.style.transform = L), D && (N.style.webkitTransform = D), n.roundLengths && (T = Math.floor(T));
            } else (T = (l - (n.slidesPerView - 1) * d) / n.slidesPerView), n.roundLengths && (T = Math.floor(T)), p[C] && (p[C].style[e.getDirectionLabel("width")] = `${T}px`);
            p[C] && (p[C].swiperSlideSize = T),
                w.push(T),
                n.centeredSlides
                    ? ((y = y + T / 2 + E / 2 + d),
                      E === 0 && C !== 0 && (y = y - l / 2 - d),
                      C === 0 && (y = y - l / 2 - d),
                      Math.abs(y) < 1 / 1e3 && (y = 0),
                      n.roundLengths && (y = Math.floor(y)),
                      P % n.slidesPerGroup === 0 && v.push(y),
                      g.push(y))
                    : (n.roundLengths && (y = Math.floor(y)), (P - Math.min(e.params.slidesPerGroupSkip, P)) % e.params.slidesPerGroup === 0 && v.push(y), g.push(y), (y = y + T + d)),
                (e.virtualSize += T + d),
                (E = T),
                (P += 1);
        }
    }
    if (
        ((e.virtualSize = Math.max(e.virtualSize, l) + S),
        s && a && (n.effect === "slide" || n.effect === "coverflow") && (r.style.width = `${e.virtualSize + d}px`),
        n.setWrapperSize && (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + d}px`),
        _ && e.grid.updateWrapperSize(T, v),
        !n.centeredSlides)
    ) {
        const C = [];
        for (let N = 0; N < v.length; N += 1) {
            let I = v[N];
            n.roundLengths && (I = Math.floor(I)), v[N] <= e.virtualSize - l && C.push(I);
        }
        (v = C), Math.floor(e.virtualSize - l) - Math.floor(v[v.length - 1]) > 1 && v.push(e.virtualSize - l);
    }
    if (o && n.loop) {
        const C = w[0] + d;
        if (n.slidesPerGroup > 1) {
            const N = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                I = C * n.slidesPerGroup;
            for (let L = 0; L < N; L += 1) v.push(v[v.length - 1] + I);
        }
        for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1) n.slidesPerGroup === 1 && v.push(v[v.length - 1] + C), g.push(g[g.length - 1] + C), (e.virtualSize += C);
    }
    if ((v.length === 0 && (v = [0]), d !== 0)) {
        const C = e.isHorizontal() && s ? "marginLeft" : e.getDirectionLabel("marginRight");
        p.filter((N, I) => (!n.cssMode || n.loop ? !0 : I !== p.length - 1)).forEach((N) => {
            N.style[C] = `${d}px`;
        });
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
        let C = 0;
        w.forEach((I) => {
            C += I + (d || 0);
        }),
            (C -= d);
        const N = C - l;
        v = v.map((I) => (I <= 0 ? -x : I > N ? N + S : I));
    }
    if (n.centerInsufficientSlides) {
        let C = 0;
        if (
            (w.forEach((N) => {
                C += N + (d || 0);
            }),
            (C -= d),
            C < l)
        ) {
            const N = (l - C) / 2;
            v.forEach((I, L) => {
                v[L] = I - N;
            }),
                g.forEach((I, L) => {
                    g[L] = I + N;
                });
        }
    }
    if ((Object.assign(e, { slides: p, snapGrid: v, slidesGrid: g, slidesSizesGrid: w }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)) {
        Wr(r, "--swiper-centered-offset-before", `${-v[0]}px`), Wr(r, "--swiper-centered-offset-after", `${e.size / 2 - w[w.length - 1] / 2}px`);
        const C = -e.snapGrid[0],
            N = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((I) => I + C)), (e.slidesGrid = e.slidesGrid.map((I) => I + N));
    }
    if (
        (m !== c && e.emit("slidesLengthChange"),
        v.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
        g.length !== u && e.emit("slidesGridLengthChange"),
        n.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit("slidesUpdated"),
        !o && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
    ) {
        const C = `${n.containerModifierClass}backface-hidden`,
            N = e.el.classList.contains(C);
        m <= n.maxBackfaceHiddenSlides ? N || e.el.classList.add(C) : N && e.el.classList.remove(C);
    }
}
function wv(e) {
    const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled;
    let i = 0,
        l;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const s = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((a) => {
                n.push(a);
            });
        else
            for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
                const a = t.activeIndex + l;
                if (a > t.slides.length && !r) break;
                n.push(s(a));
            }
    else n.push(s(t.activeIndex));
    for (l = 0; l < n.length; l += 1)
        if (typeof n[l] < "u") {
            const a = n[l].offsetHeight;
            i = a > i ? a : i;
        }
    (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function Sv() {
    const e = this,
        t = e.slides,
        n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0;
    for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - n - e.cssOverflowAdjustment();
}
function Ev(e) {
    e === void 0 && (e = (this && this.translate) || 0);
    const t = this,
        n = t.params,
        { slides: r, rtlTranslate: i, snapGrid: l } = t;
    if (r.length === 0) return;
    typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let s = -e;
    i && (s = e),
        r.forEach((o) => {
            o.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
    let a = n.spaceBetween;
    typeof a == "string" && a.indexOf("%") >= 0 ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size) : typeof a == "string" && (a = parseFloat(a));
    for (let o = 0; o < r.length; o += 1) {
        const c = r[o];
        let p = c.swiperSlideOffset;
        n.cssMode && n.centeredSlides && (p -= r[0].swiperSlideOffset);
        const m = (s + (n.centeredSlides ? t.minTranslate() : 0) - p) / (c.swiperSlideSize + a),
            v = (s - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - p) / (c.swiperSlideSize + a),
            g = -(s - p),
            w = g + t.slidesSizesGrid[o],
            x = g >= 0 && g <= t.size - t.slidesSizesGrid[o];
        ((g >= 0 && g < t.size - 1) || (w > 1 && w <= t.size) || (g <= 0 && w >= t.size)) && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(o), r[o].classList.add(n.slideVisibleClass)),
            x && r[o].classList.add(n.slideFullyVisibleClass),
            (c.progress = i ? -m : m),
            (c.originalProgress = i ? -v : v);
    }
}
function Tv(e) {
    const t = this;
    if (typeof e > "u") {
        const p = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * p) || 0;
    }
    const n = t.params,
        r = t.maxTranslate() - t.minTranslate();
    let { progress: i, isBeginning: l, isEnd: s, progressLoop: a } = t;
    const o = l,
        c = s;
    if (r === 0) (i = 0), (l = !0), (s = !0);
    else {
        i = (e - t.minTranslate()) / r;
        const p = Math.abs(e - t.minTranslate()) < 1,
            m = Math.abs(e - t.maxTranslate()) < 1;
        (l = p || i <= 0), (s = m || i >= 1), p && (i = 0), m && (i = 1);
    }
    if (n.loop) {
        const p = t.getSlideIndexByData(0),
            m = t.getSlideIndexByData(t.slides.length - 1),
            v = t.slidesGrid[p],
            g = t.slidesGrid[m],
            w = t.slidesGrid[t.slidesGrid.length - 1],
            x = Math.abs(e);
        x >= v ? (a = (x - v) / w) : (a = (x + w - g) / w), a > 1 && (a -= 1);
    }
    Object.assign(t, { progress: i, progressLoop: a, isBeginning: l, isEnd: s }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
        l && !o && t.emit("reachBeginning toEdge"),
        s && !c && t.emit("reachEnd toEdge"),
        ((o && !l) || (c && !s)) && t.emit("fromEdge"),
        t.emit("progress", i);
}
function Cv() {
    const e = this,
        { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
        l = e.virtual && n.virtual.enabled,
        s = e.grid && n.grid && n.grid.rows > 1,
        a = (m) => Ke(r, `.${n.slideClass}${m}, swiper-slide${m}`)[0];
    t.forEach((m) => {
        m.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass);
    });
    let o, c, p;
    if (l)
        if (n.loop) {
            let m = i - e.virtual.slidesBefore;
            m < 0 && (m = e.virtual.slides.length + m), m >= e.virtual.slides.length && (m -= e.virtual.slides.length), (o = a(`[data-swiper-slide-index="${m}"]`));
        } else o = a(`[data-swiper-slide-index="${i}"]`);
    else s ? ((o = t.filter((m) => m.column === i)[0]), (p = t.filter((m) => m.column === i + 1)[0]), (c = t.filter((m) => m.column === i - 1)[0])) : (o = t[i]);
    o &&
        (o.classList.add(n.slideActiveClass),
        s
            ? (p && p.classList.add(n.slideNextClass), c && c.classList.add(n.slidePrevClass))
            : ((p = uv(o, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && !p && (p = t[0]),
              p && p.classList.add(n.slideNextClass),
              (c = av(o, `.${n.slideClass}, swiper-slide`)[0]),
              n.loop && !c === 0 && (c = t[t.length - 1]),
              c && c.classList.add(n.slidePrevClass))),
        e.emitSlidesClasses();
}
const oi = (e, t) => {
        if (!e || e.destroyed || !e.params) return;
        const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
            r = t.closest(n());
        if (r) {
            let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !i &&
                e.isElement &&
                (r.shadowRoot
                    ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
                    : requestAnimationFrame(() => {
                          r.shadowRoot && ((i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)), i && i.remove());
                      })),
                i && i.remove();
        }
    },
    bl = (e, t) => {
        if (!e.slides[t]) return;
        const n = e.slides[t].querySelector('[loading="lazy"]');
        n && n.removeAttribute("loading");
    },
    Ds = (e) => {
        if (!e || e.destroyed || !e.params) return;
        let t = e.params.lazyPreloadPrevNext;
        const n = e.slides.length;
        if (!n || !t || t < 0) return;
        t = Math.min(t, n);
        const r = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex;
        if (e.params.grid && e.params.grid.rows > 1) {
            const s = i,
                a = [s - t];
            a.push(...Array.from({ length: t }).map((o, c) => s + r + c)),
                e.slides.forEach((o, c) => {
                    a.includes(o.column) && bl(e, c);
                });
            return;
        }
        const l = i + r - 1;
        if (e.params.rewind || e.params.loop)
            for (let s = i - t; s <= l + t; s += 1) {
                const a = ((s % n) + n) % n;
                (a < i || a > l) && bl(e, a);
            }
        else for (let s = Math.max(i - t, 0); s <= Math.min(l + t, n - 1); s += 1) s !== i && (s > l || s < i) && bl(e, s);
    };
function kv(e) {
    const { slidesGrid: t, params: n } = e,
        r = e.rtlTranslate ? e.translate : -e.translate;
    let i;
    for (let l = 0; l < t.length; l += 1) typeof t[l + 1] < "u" ? (r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2 ? (i = l) : r >= t[l] && r < t[l + 1] && (i = l + 1)) : r >= t[l] && (i = l);
    return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function Pv(e) {
    const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        { snapGrid: r, params: i, activeIndex: l, realIndex: s, snapIndex: a } = t;
    let o = e,
        c;
    const p = (g) => {
        let w = g - t.virtual.slidesBefore;
        return w < 0 && (w = t.virtual.slides.length + w), w >= t.virtual.slides.length && (w -= t.virtual.slides.length), w;
    };
    if ((typeof o > "u" && (o = kv(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
    else {
        const g = Math.min(i.slidesPerGroupSkip, o);
        c = g + Math.floor((o - g) / i.slidesPerGroup);
    }
    if ((c >= r.length && (c = r.length - 1), o === l && !t.params.loop)) {
        c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
        return;
    }
    if (o === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = p(o);
        return;
    }
    const m = t.grid && i.grid && i.grid.rows > 1;
    let v;
    if (t.virtual && i.virtual.enabled && i.loop) v = p(o);
    else if (m) {
        const g = t.slides.filter((x) => x.column === o)[0];
        let w = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
        Number.isNaN(w) && (w = Math.max(t.slides.indexOf(g), 0)), (v = Math.floor(w / i.grid.rows));
    } else if (t.slides[o]) {
        const g = t.slides[o].getAttribute("data-swiper-slide-index");
        g ? (v = parseInt(g, 10)) : (v = o);
    } else v = o;
    Object.assign(t, { previousSnapIndex: a, snapIndex: c, previousRealIndex: s, realIndex: v, previousIndex: l, activeIndex: o }),
        t.initialized && Ds(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && (s !== v && t.emit("realIndexChange"), t.emit("slideChange"));
}
function _v(e, t) {
    const n = this,
        r = n.params;
    let i = e.closest(`.${r.slideClass}, swiper-slide`);
    !i &&
        n.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
            !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
        });
    let l = !1,
        s;
    if (i) {
        for (let a = 0; a < n.slides.length; a += 1)
            if (n.slides[a] === i) {
                (l = !0), (s = a);
                break;
            }
    }
    if (i && l) (n.clickedSlide = i), n.virtual && n.params.virtual.enabled ? (n.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10)) : (n.clickedIndex = s);
    else {
        (n.clickedSlide = void 0), (n.clickedIndex = void 0);
        return;
    }
    r.slideToClickedSlide && n.clickedIndex !== void 0 && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide();
}
var jv = { updateSize: yv, updateSlides: xv, updateAutoHeight: wv, updateSlidesOffset: Sv, updateSlidesProgress: Ev, updateProgress: Tv, updateSlidesClasses: Cv, updateActiveIndex: Pv, updateClickedSlide: _v };
function Nv(e) {
    e === void 0 && (e = this.isHorizontal() ? "x" : "y");
    const t = this,
        { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t;
    if (n.virtualTranslate) return r ? -i : i;
    if (n.cssMode) return i;
    let s = sv(l, e);
    return (s += t.cssOverflowAdjustment()), r && (s = -s), s || 0;
}
function Mv(e, t) {
    const n = this,
        { rtlTranslate: r, params: i, wrapperEl: l, progress: s } = n;
    let a = 0,
        o = 0;
    const c = 0;
    n.isHorizontal() ? (a = r ? -e : e) : (o = e),
        i.roundLengths && ((a = Math.floor(a)), (o = Math.floor(o))),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? a : o),
        i.cssMode
            ? (l[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -a : -o)
            : i.virtualTranslate || (n.isHorizontal() ? (a -= n.cssOverflowAdjustment()) : (o -= n.cssOverflowAdjustment()), (l.style.transform = `translate3d(${a}px, ${o}px, ${c}px)`));
    let p;
    const m = n.maxTranslate() - n.minTranslate();
    m === 0 ? (p = 0) : (p = (e - n.minTranslate()) / m), p !== s && n.updateProgress(e), n.emit("setTranslate", n.translate, t);
}
function Lv() {
    return -this.snapGrid[0];
}
function zv() {
    return -this.snapGrid[this.snapGrid.length - 1];
}
function Iv(e, t, n, r, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), r === void 0 && (r = !0);
    const l = this,
        { params: s, wrapperEl: a } = l;
    if (l.animating && s.preventInteractionOnTransition) return !1;
    const o = l.minTranslate(),
        c = l.maxTranslate();
    let p;
    if ((r && e > o ? (p = o) : r && e < c ? (p = c) : (p = e), l.updateProgress(p), s.cssMode)) {
        const m = l.isHorizontal();
        if (t === 0) a[m ? "scrollLeft" : "scrollTop"] = -p;
        else {
            if (!l.support.smoothScroll) return Wd({ swiper: l, targetPosition: -p, side: m ? "left" : "top" }), !0;
            a.scrollTo({ [m ? "left" : "top"]: -p, behavior: "smooth" });
        }
        return !0;
    }
    return (
        t === 0
            ? (l.setTransition(0), l.setTranslate(p), n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionEnd")))
            : (l.setTransition(t),
              l.setTranslate(p),
              n && (l.emit("beforeTransitionStart", t, i), l.emit("transitionStart")),
              l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                      (l.onTranslateToWrapperTransitionEnd = function (v) {
                          !l ||
                              l.destroyed ||
                              (v.target === this &&
                                  (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd),
                                  (l.onTranslateToWrapperTransitionEnd = null),
                                  delete l.onTranslateToWrapperTransitionEnd,
                                  n && l.emit("transitionEnd")));
                      }),
                  l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))),
        !0
    );
}
var Ov = { getTranslate: Nv, setTranslate: Mv, minTranslate: Lv, maxTranslate: zv, translateTo: Iv };
function Rv(e, t) {
    const n = this;
    n.params.cssMode || ((n.wrapperEl.style.transitionDuration = `${e}ms`), (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")), n.emit("setTransition", e, t);
}
function Xd(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
    const { activeIndex: l, previousIndex: s } = t;
    let a = r;
    if ((a || (l > s ? (a = "next") : l < s ? (a = "prev") : (a = "reset")), t.emit(`transition${i}`), n && l !== s)) {
        if (a === "reset") {
            t.emit(`slideResetTransition${i}`);
            return;
        }
        t.emit(`slideChangeTransition${i}`), a === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
}
function bv(e, t) {
    e === void 0 && (e = !0);
    const n = this,
        { params: r } = n;
    r.cssMode || (r.autoHeight && n.updateAutoHeight(), Xd({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function Dv(e, t) {
    e === void 0 && (e = !0);
    const n = this,
        { params: r } = n;
    (n.animating = !1), !r.cssMode && (n.setTransition(0), Xd({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var Av = { setTransition: Rv, transitionStart: bv, transitionEnd: Dv };
function Bv(e, t, n, r, i) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
    const l = this;
    let s = e;
    s < 0 && (s = 0);
    const { params: a, snapGrid: o, slidesGrid: c, previousIndex: p, activeIndex: m, rtlTranslate: v, wrapperEl: g, enabled: w } = l;
    if ((l.animating && a.preventInteractionOnTransition) || (!w && !r && !i)) return !1;
    const x = Math.min(l.params.slidesPerGroupSkip, s);
    let S = x + Math.floor((s - x) / l.params.slidesPerGroup);
    S >= o.length && (S = o.length - 1);
    const f = -o[S];
    if (a.normalizeSlideIndex)
        for (let d = 0; d < c.length; d += 1) {
            const y = -Math.floor(f * 100),
                E = Math.floor(c[d] * 100),
                P = Math.floor(c[d + 1] * 100);
            typeof c[d + 1] < "u" ? (y >= E && y < P - (P - E) / 2 ? (s = d) : y >= E && y < P && (s = d + 1)) : y >= E && (s = d);
        }
    if (l.initialized && s !== m && ((!l.allowSlideNext && (v ? f > l.translate && f > l.minTranslate() : f < l.translate && f < l.minTranslate())) || (!l.allowSlidePrev && f > l.translate && f > l.maxTranslate() && (m || 0) !== s)))
        return !1;
    s !== (p || 0) && n && l.emit("beforeSlideChangeStart"), l.updateProgress(f);
    let u;
    if ((s > m ? (u = "next") : s < m ? (u = "prev") : (u = "reset"), (v && -f === l.translate) || (!v && f === l.translate)))
        return l.updateActiveIndex(s), a.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), a.effect !== "slide" && l.setTranslate(f), u !== "reset" && (l.transitionStart(n, u), l.transitionEnd(n, u)), !1;
    if (a.cssMode) {
        const d = l.isHorizontal(),
            y = v ? f : -f;
        if (t === 0) {
            const E = l.virtual && l.params.virtual.enabled;
            E && ((l.wrapperEl.style.scrollSnapType = "none"), (l._immediateVirtual = !0)),
                E && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                    ? ((l._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                          g[d ? "scrollLeft" : "scrollTop"] = y;
                      }))
                    : (g[d ? "scrollLeft" : "scrollTop"] = y),
                E &&
                    requestAnimationFrame(() => {
                        (l.wrapperEl.style.scrollSnapType = ""), (l._immediateVirtual = !1);
                    });
        } else {
            if (!l.support.smoothScroll) return Wd({ swiper: l, targetPosition: y, side: d ? "left" : "top" }), !0;
            g.scrollTo({ [d ? "left" : "top"]: y, behavior: "smooth" });
        }
        return !0;
    }
    return (
        l.setTransition(t),
        l.setTranslate(f),
        l.updateActiveIndex(s),
        l.updateSlidesClasses(),
        l.emit("beforeTransitionStart", t, r),
        l.transitionStart(n, u),
        t === 0
            ? l.transitionEnd(n, u)
            : l.animating ||
              ((l.animating = !0),
              l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (y) {
                      !l ||
                          l.destroyed ||
                          (y.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), (l.onSlideToWrapperTransitionEnd = null), delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(n, u)));
                  }),
              l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)),
        !0
    );
}
function Fv(e, t, n, r) {
    e === void 0 && (e = 0), t === void 0 && (t = this.params.speed), n === void 0 && (n = !0), typeof e == "string" && (e = parseInt(e, 10));
    const i = this,
        l = i.grid && i.params.grid && i.params.grid.rows > 1;
    let s = e;
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled) s = s + i.virtual.slidesBefore;
        else {
            let a;
            if (l) {
                const v = s * i.params.grid.rows;
                a = i.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === v)[0].column;
            } else a = i.getSlideIndexByData(s);
            const o = l ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                { centeredSlides: c } = i.params;
            let p = i.params.slidesPerView;
            p === "auto" ? (p = i.slidesPerViewDynamic()) : ((p = Math.ceil(parseFloat(i.params.slidesPerView, 10))), c && p % 2 === 0 && (p = p + 1));
            let m = o - a < p;
            if ((c && (m = m || a < Math.ceil(p / 2)), m)) {
                const v = c ? (a < i.activeIndex ? "prev" : "next") : a - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                i.loopFix({ direction: v, slideTo: !0, activeSlideIndex: v === "next" ? a + 1 : a - o + 1, slideRealIndex: v === "next" ? i.realIndex : void 0 });
            }
            if (l) {
                const v = s * i.params.grid.rows;
                s = i.slides.filter((g) => g.getAttribute("data-swiper-slide-index") * 1 === v)[0].column;
            } else s = i.getSlideIndexByData(s);
        }
    return (
        requestAnimationFrame(() => {
            i.slideTo(s, t, n, r);
        }),
        i
    );
}
function $v(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
        { enabled: i, params: l, animating: s } = r;
    if (!i) return r;
    let a = l.slidesPerGroup;
    l.slidesPerView === "auto" && l.slidesPerGroup === 1 && l.slidesPerGroupAuto && (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
    const o = r.activeIndex < l.slidesPerGroupSkip ? 1 : a,
        c = r.virtual && l.virtual.enabled;
    if (l.loop) {
        if (s && !c && l.loopPreventsSliding) return !1;
        if ((r.loopFix({ direction: "next" }), (r._clientLeft = r.wrapperEl.clientLeft), r.activeIndex === r.slides.length - 1 && l.cssMode))
            return (
                requestAnimationFrame(() => {
                    r.slideTo(r.activeIndex + o, e, t, n);
                }),
                !0
            );
    }
    return l.rewind && r.isEnd ? r.slideTo(0, e, t, n) : r.slideTo(r.activeIndex + o, e, t, n);
}
function Vv(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this,
        { params: i, snapGrid: l, slidesGrid: s, rtlTranslate: a, enabled: o, animating: c } = r;
    if (!o) return r;
    const p = r.virtual && i.virtual.enabled;
    if (i.loop) {
        if (c && !p && i.loopPreventsSliding) return !1;
        r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
    }
    const m = a ? r.translate : -r.translate;
    function v(f) {
        return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f);
    }
    const g = v(m),
        w = l.map((f) => v(f));
    let x = l[w.indexOf(g) - 1];
    if (typeof x > "u" && i.cssMode) {
        let f;
        l.forEach((u, d) => {
            g >= u && (f = d);
        }),
            typeof f < "u" && (x = l[f > 0 ? f - 1 : f]);
    }
    let S = 0;
    if (
        (typeof x < "u" && ((S = s.indexOf(x)), S < 0 && (S = r.activeIndex - 1), i.slidesPerView === "auto" && i.slidesPerGroup === 1 && i.slidesPerGroupAuto && ((S = S - r.slidesPerViewDynamic("previous", !0) + 1), (S = Math.max(S, 0)))),
        i.rewind && r.isBeginning)
    ) {
        const f = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
        return r.slideTo(f, e, t, n);
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return (
            requestAnimationFrame(() => {
                r.slideTo(S, e, t, n);
            }),
            !0
        );
    return r.slideTo(S, e, t, n);
}
function Hv(e, t, n) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0);
    const r = this;
    return r.slideTo(r.activeIndex, e, t, n);
}
function Uv(e, t, n, r) {
    e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), r === void 0 && (r = 0.5);
    const i = this;
    let l = i.activeIndex;
    const s = Math.min(i.params.slidesPerGroupSkip, l),
        a = s + Math.floor((l - s) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
    if (o >= i.snapGrid[a]) {
        const c = i.snapGrid[a],
            p = i.snapGrid[a + 1];
        o - c > (p - c) * r && (l += i.params.slidesPerGroup);
    } else {
        const c = i.snapGrid[a - 1],
            p = i.snapGrid[a];
        o - c <= (p - c) * r && (l -= i.params.slidesPerGroup);
    }
    return (l = Math.max(l, 0)), (l = Math.min(l, i.slidesGrid.length - 1)), i.slideTo(l, e, t, n);
}
function Wv() {
    const e = this,
        { params: t, slidesEl: n } = e,
        r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let i = e.clickedIndex,
        l;
    const s = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating) return;
        (l = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
            t.centeredSlides
                ? i < e.loopedSlides - r / 2 || i > e.slides.length - e.loopedSlides + r / 2
                    ? (e.loopFix(),
                      (i = e.getSlideIndex(Ke(n, `${s}[data-swiper-slide-index="${l}"]`)[0])),
                      Rs(() => {
                          e.slideTo(i);
                      }))
                    : e.slideTo(i)
                : i > e.slides.length - r
                ? (e.loopFix(),
                  (i = e.getSlideIndex(Ke(n, `${s}[data-swiper-slide-index="${l}"]`)[0])),
                  Rs(() => {
                      e.slideTo(i);
                  }))
                : e.slideTo(i);
    } else e.slideTo(i);
}
var Gv = { slideTo: Bv, slideToLoop: Fv, slideNext: $v, slidePrev: Vv, slideReset: Hv, slideToClosest: Uv, slideToClickedSlide: Wv };
function Yv(e) {
    const t = this,
        { params: n, slidesEl: r } = t;
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
    const i = () => {
            Ke(r, `.${n.slideClass}, swiper-slide`).forEach((m, v) => {
                m.setAttribute("data-swiper-slide-index", v);
            });
        },
        l = t.grid && n.grid && n.grid.rows > 1,
        s = n.slidesPerGroup * (l ? n.grid.rows : 1),
        a = t.slides.length % s !== 0,
        o = l && t.slides.length % n.grid.rows !== 0,
        c = (p) => {
            for (let m = 0; m < p; m += 1) {
                const v = t.isElement ? Di("swiper-slide", [n.slideBlankClass]) : Di("div", [n.slideClass, n.slideBlankClass]);
                t.slidesEl.append(v);
            }
        };
    if (a) {
        if (n.loopAddBlankSlides) {
            const p = s - (t.slides.length % s);
            c(p), t.recalcSlides(), t.updateSlides();
        } else bi("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i();
    } else if (o) {
        if (n.loopAddBlankSlides) {
            const p = n.grid.rows - (t.slides.length % n.grid.rows);
            c(p), t.recalcSlides(), t.updateSlides();
        } else bi("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
        i();
    } else i();
    t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : "next" });
}
function Xv(e) {
    let { slideRealIndex: t, slideTo: n = !0, direction: r, setTranslate: i, activeSlideIndex: l, byController: s, byMousewheel: a } = e === void 0 ? {} : e;
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const { slides: c, allowSlidePrev: p, allowSlideNext: m, slidesEl: v, params: g } = o,
        { centeredSlides: w } = g;
    if (((o.allowSlidePrev = !0), (o.allowSlideNext = !0), o.virtual && g.virtual.enabled)) {
        n &&
            (!g.centeredSlides && o.snapIndex === 0
                ? o.slideTo(o.virtual.slides.length, 0, !1, !0)
                : g.centeredSlides && o.snapIndex < g.slidesPerView
                ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0)
                : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
            (o.allowSlidePrev = p),
            (o.allowSlideNext = m),
            o.emit("loopFix");
        return;
    }
    let x = g.slidesPerView;
    x === "auto" ? (x = o.slidesPerViewDynamic()) : ((x = Math.ceil(parseFloat(g.slidesPerView, 10))), w && x % 2 === 0 && (x = x + 1));
    const S = g.slidesPerGroupAuto ? x : g.slidesPerGroup;
    let f = S;
    f % S !== 0 && (f += S - (f % S)), (f += g.loopAdditionalSlides), (o.loopedSlides = f);
    const u = o.grid && g.grid && g.grid.rows > 1;
    c.length < x + f
        ? bi(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
          )
        : u && g.grid.fill === "row" && bi("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    const d = [],
        y = [];
    let E = o.activeIndex;
    typeof l > "u" ? (l = o.getSlideIndex(c.filter((L) => L.classList.contains(g.slideActiveClass))[0])) : (E = l);
    const P = r === "next" || !r,
        _ = r === "prev" || !r;
    let T = 0,
        k = 0;
    const C = u ? Math.ceil(c.length / g.grid.rows) : c.length,
        I = (u ? c[l].column : l) + (w && typeof i > "u" ? -x / 2 + 0.5 : 0);
    if (I < f) {
        T = Math.max(f - I, S);
        for (let L = 0; L < f - I; L += 1) {
            const D = L - Math.floor(L / C) * C;
            if (u) {
                const A = C - D - 1;
                for (let Y = c.length - 1; Y >= 0; Y -= 1) c[Y].column === A && d.push(Y);
            } else d.push(C - D - 1);
        }
    } else if (I + x > C - f) {
        k = Math.max(I - (C - f * 2), S);
        for (let L = 0; L < k; L += 1) {
            const D = L - Math.floor(L / C) * C;
            u
                ? c.forEach((A, Y) => {
                      A.column === D && y.push(Y);
                  })
                : y.push(D);
        }
    }
    if (
        ((o.__preventObserver__ = !0),
        requestAnimationFrame(() => {
            o.__preventObserver__ = !1;
        }),
        _ &&
            d.forEach((L) => {
                (c[L].swiperLoopMoveDOM = !0), v.prepend(c[L]), (c[L].swiperLoopMoveDOM = !1);
            }),
        P &&
            y.forEach((L) => {
                (c[L].swiperLoopMoveDOM = !0), v.append(c[L]), (c[L].swiperLoopMoveDOM = !1);
            }),
        o.recalcSlides(),
        g.slidesPerView === "auto"
            ? o.updateSlides()
            : u &&
              ((d.length > 0 && _) || (y.length > 0 && P)) &&
              o.slides.forEach((L, D) => {
                  o.grid.updateSlide(D, L, o.slides);
              }),
        g.watchSlidesProgress && o.updateSlidesOffset(),
        n)
    ) {
        if (d.length > 0 && _) {
            if (typeof t > "u") {
                const L = o.slidesGrid[E],
                    A = o.slidesGrid[E + T] - L;
                a
                    ? o.setTranslate(o.translate - A)
                    : (o.slideTo(E + T, 0, !1, !0), i && ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - A), (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - A)));
            } else if (i) {
                const L = u ? d.length / g.grid.rows : d.length;
                o.slideTo(o.activeIndex + L, 0, !1, !0), (o.touchEventsData.currentTranslate = o.translate);
            }
        } else if (y.length > 0 && P)
            if (typeof t > "u") {
                const L = o.slidesGrid[E],
                    A = o.slidesGrid[E - k] - L;
                a
                    ? o.setTranslate(o.translate - A)
                    : (o.slideTo(E - k, 0, !1, !0), i && ((o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - A), (o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - A)));
            } else {
                const L = u ? y.length / g.grid.rows : y.length;
                o.slideTo(o.activeIndex - L, 0, !1, !0);
            }
    }
    if (((o.allowSlidePrev = p), (o.allowSlideNext = m), o.controller && o.controller.control && !s)) {
        const L = { slideRealIndex: t, direction: r, setTranslate: i, activeSlideIndex: l, byController: !0 };
        Array.isArray(o.controller.control)
            ? o.controller.control.forEach((D) => {
                  !D.destroyed && D.params.loop && D.loopFix({ ...L, slideTo: D.params.slidesPerView === g.slidesPerView ? n : !1 });
              })
            : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...L, slideTo: o.controller.control.params.slidesPerView === g.slidesPerView ? n : !1 });
    }
    o.emit("loopFix");
}
function Qv() {
    const e = this,
        { params: t, slidesEl: n } = e;
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
    e.recalcSlides();
    const r = [];
    e.slides.forEach((i) => {
        const l = typeof i.swiperSlideIndex > "u" ? i.getAttribute("data-swiper-slide-index") * 1 : i.swiperSlideIndex;
        r[l] = i;
    }),
        e.slides.forEach((i) => {
            i.removeAttribute("data-swiper-slide-index");
        }),
        r.forEach((i) => {
            n.append(i);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
}
var Kv = { loopCreate: Yv, loopFix: Xv, loopDestroy: Qv };
function qv(e) {
    const t = this;
    if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
    const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
        (n.style.cursor = "move"),
        (n.style.cursor = e ? "grabbing" : "grab"),
        t.isElement &&
            requestAnimationFrame(() => {
                t.__preventObserver__ = !1;
            });
}
function Zv() {
    const e = this;
    (e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = ""),
        e.isElement &&
            requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
            }));
}
var Jv = { setGrabCursor: qv, unsetGrabCursor: Zv };
function eg(e, t) {
    t === void 0 && (t = this);
    function n(r) {
        if (!r || r === st() || r === Le()) return null;
        r.assignedSlot && (r = r.assignedSlot);
        const i = r.closest(e);
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
    }
    return n(t);
}
function ou(e, t, n) {
    const r = Le(),
        { params: i } = e,
        l = i.edgeSwipeDetection,
        s = i.edgeSwipeThreshold;
    return l && (n <= s || n >= r.innerWidth - s) ? (l === "prevent" ? (t.preventDefault(), !0) : !1) : !0;
}
function tg(e) {
    const t = this,
        n = st();
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    const i = t.touchEventsData;
    if (r.type === "pointerdown") {
        if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
        i.pointerId = r.pointerId;
    } else r.type === "touchstart" && r.targetTouches.length === 1 && (i.touchId = r.targetTouches[0].identifier);
    if (r.type === "touchstart") {
        ou(t, r, r.targetTouches[0].pageX);
        return;
    }
    const { params: l, touches: s, enabled: a } = t;
    if (!a || (!l.simulateTouch && r.pointerType === "mouse") || (t.animating && l.preventInteractionOnTransition)) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let o = r.target;
    if ((l.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(o)) || ("which" in r && r.which === 3) || ("button" in r && r.button > 0) || (i.isTouched && i.isMoved)) return;
    const c = !!l.noSwipingClass && l.noSwipingClass !== "",
        p = r.composedPath ? r.composedPath() : r.path;
    c && r.target && r.target.shadowRoot && p && (o = p[0]);
    const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
        v = !!(r.target && r.target.shadowRoot);
    if (l.noSwiping && (v ? eg(m, o) : o.closest(m))) {
        t.allowClick = !0;
        return;
    }
    if (l.swipeHandler && !o.closest(l.swipeHandler)) return;
    (s.currentX = r.pageX), (s.currentY = r.pageY);
    const g = s.currentX,
        w = s.currentY;
    if (!ou(t, r, g)) return;
    Object.assign(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
        (s.startX = g),
        (s.startY = w),
        (i.touchStartTime = Ri()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (i.allowThresholdMove = !1);
    let x = !0;
    o.matches(i.focusableElements) && ((x = !1), o.nodeName === "SELECT" && (i.isTouched = !1)), n.activeElement && n.activeElement.matches(i.focusableElements) && n.activeElement !== o && n.activeElement.blur();
    const S = x && t.allowTouchMove && l.touchStartPreventDefault;
    (l.touchStartForcePreventDefault || S) && !o.isContentEditable && r.preventDefault(), l.freeMode && l.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r);
}
function ng(e) {
    const t = st(),
        n = this,
        r = n.touchEventsData,
        { params: i, touches: l, rtlTranslate: s, enabled: a } = n;
    if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (r.touchId !== null || o.pointerId !== r.pointerId))) return;
    let c;
    if (o.type === "touchmove") {
        if (((c = [...o.changedTouches].filter((P) => P.identifier === r.touchId)[0]), !c || c.identifier !== r.touchId)) return;
    } else c = o;
    if (!r.isTouched) {
        r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", o);
        return;
    }
    const p = c.pageX,
        m = c.pageY;
    if (o.preventedByNestedSwiper) {
        (l.startX = p), (l.startY = m);
        return;
    }
    if (!n.allowTouchMove) {
        o.target.matches(r.focusableElements) || (n.allowClick = !1), r.isTouched && (Object.assign(l, { startX: p, startY: m, currentX: p, currentY: m }), (r.touchStartTime = Ri()));
        return;
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if ((m < l.startY && n.translate <= n.maxTranslate()) || (m > l.startY && n.translate >= n.minTranslate())) {
                (r.isTouched = !1), (r.isMoved = !1);
                return;
            }
        } else if ((p < l.startX && n.translate <= n.maxTranslate()) || (p > l.startX && n.translate >= n.minTranslate())) return;
    }
    if (t.activeElement && o.target === t.activeElement && o.target.matches(r.focusableElements)) {
        (r.isMoved = !0), (n.allowClick = !1);
        return;
    }
    r.allowTouchCallbacks && n.emit("touchMove", o), (l.previousX = l.currentX), (l.previousY = l.currentY), (l.currentX = p), (l.currentY = m);
    const v = l.currentX - l.startX,
        g = l.currentY - l.startY;
    if (n.params.threshold && Math.sqrt(v ** 2 + g ** 2) < n.params.threshold) return;
    if (typeof r.isScrolling > "u") {
        let P;
        (n.isHorizontal() && l.currentY === l.startY) || (n.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : v * v + g * g >= 25 && ((P = (Math.atan2(Math.abs(g), Math.abs(v)) * 180) / Math.PI), (r.isScrolling = n.isHorizontal() ? P > i.touchAngle : 90 - P > i.touchAngle));
    }
    if ((r.isScrolling && n.emit("touchMoveOpposite", o), typeof r.startMoving > "u" && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling)) {
        r.isTouched = !1;
        return;
    }
    if (!r.startMoving) return;
    (n.allowClick = !1), !i.cssMode && o.cancelable && o.preventDefault(), i.touchMoveStopPropagation && !i.nested && o.stopPropagation();
    let w = n.isHorizontal() ? v : g,
        x = n.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
    i.oneWayMovement && ((w = Math.abs(w) * (s ? 1 : -1)), (x = Math.abs(x) * (s ? 1 : -1))), (l.diff = w), (w *= i.touchRatio), s && ((w = -w), (x = -x));
    const S = n.touchesDirection;
    (n.swipeDirection = w > 0 ? "prev" : "next"), (n.touchesDirection = x > 0 ? "prev" : "next");
    const f = n.params.loop && !i.cssMode,
        u = (n.touchesDirection === "next" && n.allowSlideNext) || (n.touchesDirection === "prev" && n.allowSlidePrev);
    if (!r.isMoved) {
        if ((f && u && n.loopFix({ direction: n.swipeDirection }), (r.startTranslate = n.getTranslate()), n.setTransition(0), n.animating)) {
            const P = new window.CustomEvent("transitionend", { bubbles: !0, cancelable: !0 });
            n.wrapperEl.dispatchEvent(P);
        }
        (r.allowMomentumBounce = !1), i.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0), n.emit("sliderFirstMove", o);
    }
    let d;
    if ((new Date().getTime(), r.isMoved && r.allowThresholdMove && S !== n.touchesDirection && f && u && Math.abs(w) >= 1)) {
        Object.assign(l, { startX: p, startY: m, currentX: p, currentY: m, startTranslate: r.currentTranslate }), (r.loopSwapReset = !0), (r.startTranslate = r.currentTranslate);
        return;
    }
    n.emit("sliderMove", o), (r.isMoved = !0), (r.currentTranslate = w + r.startTranslate);
    let y = !0,
        E = i.resistanceRatio;
    if (
        (i.touchReleaseOnEdges && (E = 0),
        w > 0
            ? (f &&
                  u &&
                  !d &&
                  r.allowThresholdMove &&
                  r.currentTranslate > (i.centeredSlides ? n.minTranslate() - n.slidesSizesGrid[n.activeIndex + 1] : n.minTranslate()) &&
                  n.loopFix({ direction: "prev", setTranslate: !0, activeSlideIndex: 0 }),
              r.currentTranslate > n.minTranslate() && ((y = !1), i.resistance && (r.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + r.startTranslate + w) ** E)))
            : w < 0 &&
              (f &&
                  u &&
                  !d &&
                  r.allowThresholdMove &&
                  r.currentTranslate < (i.centeredSlides ? n.maxTranslate() + n.slidesSizesGrid[n.slidesSizesGrid.length - 1] : n.maxTranslate()) &&
                  n.loopFix({ direction: "next", setTranslate: !0, activeSlideIndex: n.slides.length - (i.slidesPerView === "auto" ? n.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10))) }),
              r.currentTranslate < n.maxTranslate() && ((y = !1), i.resistance && (r.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - r.startTranslate - w) ** E))),
        y && (o.preventedByNestedSwiper = !0),
        !n.allowSlideNext && n.swipeDirection === "next" && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && n.swipeDirection === "prev" && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev && !n.allowSlideNext && (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
    )
        if (Math.abs(w) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                (r.allowThresholdMove = !0), (l.startX = l.currentX), (l.startY = l.currentY), (r.currentTranslate = r.startTranslate), (l.diff = n.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY);
                return;
            }
        } else {
            r.currentTranslate = r.startTranslate;
            return;
        }
    !i.followFinger ||
        i.cssMode ||
        (((i.freeMode && i.freeMode.enabled && n.freeMode) || i.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()),
        i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate));
}
function rg(e) {
    const t = this,
        n = t.touchEventsData;
    let r = e;
    r.originalEvent && (r = r.originalEvent);
    let i;
    if (r.type === "touchend" || r.type === "touchcancel") {
        if (((i = [...r.changedTouches].filter((E) => E.identifier === n.touchId)[0]), !i || i.identifier !== n.touchId)) return;
    } else {
        if (n.touchId !== null || r.pointerId !== n.pointerId) return;
        i = r;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(r.type) && !(["pointercancel", "contextmenu"].includes(r.type) && (t.browser.isSafari || t.browser.isWebView))) return;
    (n.pointerId = null), (n.touchId = null);
    const { params: s, touches: a, rtlTranslate: o, slidesGrid: c, enabled: p } = t;
    if (!p || (!s.simulateTouch && r.pointerType === "mouse")) return;
    if ((n.allowTouchCallbacks && t.emit("touchEnd", r), (n.allowTouchCallbacks = !1), !n.isTouched)) {
        n.isMoved && s.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1);
        return;
    }
    s.grabCursor && n.isMoved && n.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const m = Ri(),
        v = m - n.touchStartTime;
    if (t.allowClick) {
        const E = r.path || (r.composedPath && r.composedPath());
        t.updateClickedSlide((E && E[0]) || r.target, E), t.emit("tap click", r), v < 300 && m - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", r);
    }
    if (
        ((n.lastClickTime = Ri()),
        Rs(() => {
            t.destroyed || (t.allowClick = !0);
        }),
        !n.isTouched || !n.isMoved || !t.swipeDirection || (a.diff === 0 && !n.loopSwapReset) || (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
    ) {
        (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
        return;
    }
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    let g;
    if ((s.followFinger ? (g = o ? t.translate : -t.translate) : (g = -n.currentTranslate), s.cssMode)) return;
    if (s.freeMode && s.freeMode.enabled) {
        t.freeMode.onTouchEnd({ currentPos: g });
        return;
    }
    const w = g >= -t.maxTranslate() && !t.params.loop;
    let x = 0,
        S = t.slidesSizesGrid[0];
    for (let E = 0; E < c.length; E += E < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
        const P = E < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        typeof c[E + P] < "u" ? (w || (g >= c[E] && g < c[E + P])) && ((x = E), (S = c[E + P] - c[E])) : (w || g >= c[E]) && ((x = E), (S = c[c.length - 1] - c[c.length - 2]));
    }
    let f = null,
        u = null;
    s.rewind && (t.isBeginning ? (u = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (f = 0));
    const d = (g - c[x]) / S,
        y = x < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
    if (v > s.longSwipesMs) {
        if (!s.longSwipes) {
            t.slideTo(t.activeIndex);
            return;
        }
        t.swipeDirection === "next" && (d >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? f : x + y) : t.slideTo(x)),
            t.swipeDirection === "prev" && (d > 1 - s.longSwipesRatio ? t.slideTo(x + y) : u !== null && d < 0 && Math.abs(d) > s.longSwipesRatio ? t.slideTo(u) : t.slideTo(x));
    } else {
        if (!s.shortSwipes) {
            t.slideTo(t.activeIndex);
            return;
        }
        t.navigation && (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
            ? r.target === t.navigation.nextEl
                ? t.slideTo(x + y)
                : t.slideTo(x)
            : (t.swipeDirection === "next" && t.slideTo(f !== null ? f : x + y), t.swipeDirection === "prev" && t.slideTo(u !== null ? u : x));
    }
}
function au() {
    const e = this,
        { params: t, el: n } = e;
    if (n && n.offsetWidth === 0) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
        s = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
    const a = s && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !a
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.params.loop && !s
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume();
            }, 500))),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = r),
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow();
}
function ig(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
}
function lg() {
    const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
    if (!r) return;
    (e.previousTranslate = e.translate), e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop), e.translate === 0 && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
    let i;
    const l = e.maxTranslate() - e.minTranslate();
    l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l), i !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
}
function sg(e) {
    const t = this;
    oi(t, e.target), !(t.params.cssMode || (t.params.slidesPerView !== "auto" && !t.params.autoHeight)) && t.update();
}
function og() {
    const e = this;
    e.documentTouchHandlerProceeded || ((e.documentTouchHandlerProceeded = !0), e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Qd = (e, t) => {
    const n = st(),
        { params: r, el: i, wrapperEl: l, device: s } = e,
        a = !!r.nested,
        o = t === "on" ? "addEventListener" : "removeEventListener",
        c = t;
    n[o]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
        i[o]("touchstart", e.onTouchStart, { passive: !1 }),
        i[o]("pointerdown", e.onTouchStart, { passive: !1 }),
        n[o]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
        n[o]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
        n[o]("touchend", e.onTouchEnd, { passive: !0 }),
        n[o]("pointerup", e.onTouchEnd, { passive: !0 }),
        n[o]("pointercancel", e.onTouchEnd, { passive: !0 }),
        n[o]("touchcancel", e.onTouchEnd, { passive: !0 }),
        n[o]("pointerout", e.onTouchEnd, { passive: !0 }),
        n[o]("pointerleave", e.onTouchEnd, { passive: !0 }),
        n[o]("contextmenu", e.onTouchEnd, { passive: !0 }),
        (r.preventClicks || r.preventClicksPropagation) && i[o]("click", e.onClick, !0),
        r.cssMode && l[o]("scroll", e.onScroll),
        r.updateOnWindowResize ? e[c](s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", au, !0) : e[c]("observerUpdate", au, !0),
        i[o]("load", e.onLoad, { capture: !0 });
};
function ag() {
    const e = this,
        { params: t } = e;
    (e.onTouchStart = tg.bind(e)), (e.onTouchMove = ng.bind(e)), (e.onTouchEnd = rg.bind(e)), (e.onDocumentTouchStart = og.bind(e)), t.cssMode && (e.onScroll = lg.bind(e)), (e.onClick = ig.bind(e)), (e.onLoad = sg.bind(e)), Qd(e, "on");
}
function ug() {
    Qd(this, "off");
}
var cg = { attachEvents: ag, detachEvents: ug };
const uu = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function dg() {
    const e = this,
        { realIndex: t, initialized: n, params: r, el: i } = e,
        l = r.breakpoints;
    if (!l || (l && Object.keys(l).length === 0)) return;
    const s = e.getBreakpoint(l, e.params.breakpointsBase, e.el);
    if (!s || e.currentBreakpoint === s) return;
    const o = (s in l ? l[s] : void 0) || e.originalParams,
        c = uu(e, r),
        p = uu(e, o),
        m = r.enabled;
    c && !p
        ? (i.classList.remove(`${r.containerModifierClass}grid`, `${r.containerModifierClass}grid-column`), e.emitContainerClasses())
        : !c &&
          p &&
          (i.classList.add(`${r.containerModifierClass}grid`),
          ((o.grid.fill && o.grid.fill === "column") || (!o.grid.fill && r.grid.fill === "column")) && i.classList.add(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach((f) => {
            if (typeof o[f] > "u") return;
            const u = r[f] && r[f].enabled,
                d = o[f] && o[f].enabled;
            u && !d && e[f].disable(), !u && d && e[f].enable();
        });
    const v = o.direction && o.direction !== r.direction,
        g = r.loop && (o.slidesPerView !== r.slidesPerView || v),
        w = r.loop;
    v && n && e.changeDirection(), ke(e.params, o);
    const x = e.params.enabled,
        S = e.params.loop;
    Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
        m && !x ? e.disable() : !m && x && e.enable(),
        (e.currentBreakpoint = s),
        e.emit("_beforeBreakpoint", o),
        n && (g ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !w && S ? (e.loopCreate(t), e.updateSlides()) : w && !S && e.loopDestroy()),
        e.emit("breakpoint", o);
}
function fg(e, t, n) {
    if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
    let r = !1;
    const i = Le(),
        l = t === "window" ? i.innerHeight : n.clientHeight,
        s = Object.keys(e).map((a) => {
            if (typeof a == "string" && a.indexOf("@") === 0) {
                const o = parseFloat(a.substr(1));
                return { value: l * o, point: a };
            }
            return { value: a, point: a };
        });
    s.sort((a, o) => parseInt(a.value, 10) - parseInt(o.value, 10));
    for (let a = 0; a < s.length; a += 1) {
        const { point: o, value: c } = s[a];
        t === "window" ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = o) : c <= n.clientWidth && (r = o);
    }
    return r || "max";
}
var pg = { setBreakpoint: dg, getBreakpoint: fg };
function mg(e, t) {
    const n = [];
    return (
        e.forEach((r) => {
            typeof r == "object"
                ? Object.keys(r).forEach((i) => {
                      r[i] && n.push(t + i);
                  })
                : typeof r == "string" && n.push(t + r);
        }),
        n
    );
}
function hg() {
    const e = this,
        { classNames: t, params: n, rtl: r, el: i, device: l } = e,
        s = mg(
            [
                "initialized",
                n.direction,
                { "free-mode": e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                { "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column" },
                { android: l.android },
                { ios: l.ios },
                { "css-mode": n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { "watch-progress": n.watchSlidesProgress },
            ],
            n.containerModifierClass
        );
    t.push(...s), i.classList.add(...t), e.emitContainerClasses();
}
function vg() {
    const e = this,
        { el: t, classNames: n } = e;
    t.classList.remove(...n), e.emitContainerClasses();
}
var gg = { addClasses: hg, removeClasses: vg };
function yg() {
    const e = this,
        { isLocked: t, params: n } = e,
        { slidesOffsetBefore: r } = n;
    if (r) {
        const i = e.slides.length - 1,
            l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
        e.isLocked = e.size > l;
    } else e.isLocked = e.snapGrid.length === 1;
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked), n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var xg = { checkOverflow: yg },
    As = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    };
function wg(e, t) {
    return function (r) {
        r === void 0 && (r = {});
        const i = Object.keys(r)[0],
            l = r[i];
        if (typeof l != "object" || l === null) {
            ke(t, r);
            return;
        }
        if (
            (e[i] === !0 && (e[i] = { enabled: !0 }),
            i === "navigation" && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0),
            ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0),
            !(i in e && "enabled" in l))
        ) {
            ke(t, r);
            return;
        }
        typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0), e[i] || (e[i] = { enabled: !1 }), ke(t, r);
    };
}
const Dl = { eventsEmitter: gv, update: jv, translate: Ov, transition: Av, slide: Gv, loop: Kv, grabCursor: Jv, events: cg, breakpoints: pg, checkOverflow: xg, classes: gg },
    Al = {};
let Ao = class et {
    constructor() {
        let t, n;
        for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++) i[l] = arguments[l];
        i.length === 1 && i[0].constructor && Object.prototype.toString.call(i[0]).slice(8, -1) === "Object" ? (n = i[0]) : ([t, n] = i), n || (n = {}), (n = ke({}, n)), t && !n.el && (n.el = t);
        const s = st();
        if (n.el && typeof n.el == "string" && s.querySelectorAll(n.el).length > 1) {
            const p = [];
            return (
                s.querySelectorAll(n.el).forEach((m) => {
                    const v = ke({}, n, { el: m });
                    p.push(new et(v));
                }),
                p
            );
        }
        const a = this;
        (a.__swiper__ = !0),
            (a.support = Yd()),
            (a.device = fv({ userAgent: n.userAgent })),
            (a.browser = mv()),
            (a.eventsListeners = {}),
            (a.eventsAnyListeners = []),
            (a.modules = [...a.__modules__]),
            n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
        const o = {};
        a.modules.forEach((p) => {
            p({ params: n, swiper: a, extendParams: wg(n, o), on: a.on.bind(a), once: a.once.bind(a), off: a.off.bind(a), emit: a.emit.bind(a) });
        });
        const c = ke({}, As, o);
        return (
            (a.params = ke({}, c, Al, n)),
            (a.originalParams = ke({}, a.params)),
            (a.passedParams = ke({}, n)),
            a.params &&
                a.params.on &&
                Object.keys(a.params.on).forEach((p) => {
                    a.on(p, a.params.on[p]);
                }),
            a.params && a.params.onAny && a.onAny(a.params.onAny),
            Object.assign(a, {
                enabled: a.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return a.params.direction === "horizontal";
                },
                isVertical() {
                    return a.params.direction === "vertical";
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                allowSlideNext: a.params.allowSlideNext,
                allowSlidePrev: a.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: a.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null,
                },
                allowClick: !0,
                allowTouchMove: a.params.allowTouchMove,
                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            a.emit("_swiper"),
            a.params.init && a.init(),
            a
        );
    }
    getDirectionLabel(t) {
        return this.isHorizontal()
            ? t
            : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
              }[t];
    }
    getSlideIndex(t) {
        const { slidesEl: n, params: r } = this,
            i = Ke(n, `.${r.slideClass}, swiper-slide`),
            l = Ai(i[0]);
        return Ai(t) - l;
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter((n) => n.getAttribute("data-swiper-slide-index") * 1 === t)[0]);
    }
    recalcSlides() {
        const t = this,
            { slidesEl: n, params: r } = t;
        t.slides = Ke(n, `.${r.slideClass}, swiper-slide`);
    }
    enable() {
        const t = this;
        t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit("enable"));
    }
    disable() {
        const t = this;
        t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"));
    }
    setProgress(t, n) {
        const r = this;
        t = Math.min(Math.max(t, 0), 1);
        const i = r.minTranslate(),
            s = (r.maxTranslate() - i) * t + i;
        r.translateTo(s, typeof n > "u" ? 0 : n), r.updateActiveIndex(), r.updateSlidesClasses();
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const n = t.el.className.split(" ").filter((r) => r.indexOf("swiper") === 0 || r.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", n.join(" "));
    }
    getSlideClasses(t) {
        const n = this;
        return n.destroyed
            ? ""
            : t.className
                  .split(" ")
                  .filter((r) => r.indexOf("swiper-slide") === 0 || r.indexOf(n.params.slideClass) === 0)
                  .join(" ");
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el) return;
        const n = [];
        t.slides.forEach((r) => {
            const i = t.getSlideClasses(r);
            n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
        }),
            t.emit("_slideClasses", n);
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = "current"), n === void 0 && (n = !1);
        const r = this,
            { params: i, slides: l, slidesGrid: s, slidesSizesGrid: a, size: o, activeIndex: c } = r;
        let p = 1;
        if (typeof i.slidesPerView == "number") return i.slidesPerView;
        if (i.centeredSlides) {
            let m = l[c] ? l[c].swiperSlideSize : 0,
                v;
            for (let g = c + 1; g < l.length; g += 1) l[g] && !v && ((m += l[g].swiperSlideSize), (p += 1), m > o && (v = !0));
            for (let g = c - 1; g >= 0; g -= 1) l[g] && !v && ((m += l[g].swiperSlideSize), (p += 1), m > o && (v = !0));
        } else if (t === "current") for (let m = c + 1; m < l.length; m += 1) (n ? s[m] + a[m] - s[c] < o : s[m] - s[c] < o) && (p += 1);
        else for (let m = c - 1; m >= 0; m -= 1) s[c] - s[m] < o && (p += 1);
        return p;
    }
    update() {
        const t = this;
        if (!t || t.destroyed) return;
        const { snapGrid: n, params: r } = t;
        r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
                s.complete && oi(t, s);
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function i() {
            const s = t.rtlTranslate ? t.translate * -1 : t.translate,
                a = Math.min(Math.max(s, t.maxTranslate()), t.minTranslate());
            t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
        }
        let l;
        if (r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && t.updateAutoHeight();
        else {
            if ((r.slidesPerView === "auto" || r.slidesPerView > 1) && t.isEnd && !r.centeredSlides) {
                const s = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
                l = t.slideTo(s.length - 1, 0, !1, !0);
            } else l = t.slideTo(t.activeIndex, 0, !1, !0);
            l || i();
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0);
        const r = this,
            i = r.params.direction;
        return (
            t || (t = i === "horizontal" ? "vertical" : "horizontal"),
            t === i ||
                (t !== "horizontal" && t !== "vertical") ||
                (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
                r.el.classList.add(`${r.params.containerModifierClass}${t}`),
                r.emitContainerClasses(),
                (r.params.direction = t),
                r.slides.forEach((l) => {
                    t === "vertical" ? (l.style.width = "") : (l.style.height = "");
                }),
                r.emit("changeDirection"),
                n && r.update()),
            r
        );
    }
    changeLanguageDirection(t) {
        const n = this;
        (n.rtl && t === "rtl") ||
            (!n.rtl && t === "ltr") ||
            ((n.rtl = t === "rtl"),
            (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
            n.rtl ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = "rtl")) : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = "ltr")),
            n.update());
    }
    mount(t) {
        const n = this;
        if (n.mounted) return !0;
        let r = t || n.params.el;
        if ((typeof r == "string" && (r = document.querySelector(r)), !r)) return !1;
        (r.swiper = n), r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === "SWIPER-CONTAINER" && (n.isElement = !0);
        const i = () => `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let s = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : Ke(r, i())[0];
        return (
            !s &&
                n.params.createElements &&
                ((s = Di("div", n.params.wrapperClass)),
                r.append(s),
                Ke(r, `.${n.params.slideClass}`).forEach((a) => {
                    s.append(a);
                })),
            Object.assign(n, {
                el: r,
                wrapperEl: s,
                slidesEl: n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : s,
                hostEl: n.isElement ? r.parentNode.host : r,
                mounted: !0,
                rtl: r.dir.toLowerCase() === "rtl" || wt(r, "direction") === "rtl",
                rtlTranslate: n.params.direction === "horizontal" && (r.dir.toLowerCase() === "rtl" || wt(r, "direction") === "rtl"),
                wrongRTL: wt(s, "display") === "-webkit-box",
            }),
            !0
        );
    }
    init(t) {
        const n = this;
        if (n.initialized || n.mount(t) === !1) return n;
        n.emit("beforeInit"),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.loop && n.virtual && n.params.virtual.enabled
                ? n.slideTo(n.params.initialSlide + n.virtual.slidesBefore, 0, n.params.runCallbacksOnInit, !1, !0)
                : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
            n.params.loop && n.loopCreate(),
            n.attachEvents();
        const i = [...n.el.querySelectorAll('[loading="lazy"]')];
        return (
            n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((l) => {
                l.complete
                    ? oi(n, l)
                    : l.addEventListener("load", (s) => {
                          oi(n, s.target);
                      });
            }),
            Ds(n),
            (n.initialized = !0),
            Ds(n),
            n.emit("init"),
            n.emit("afterInit"),
            n
        );
    }
    destroy(t, n) {
        t === void 0 && (t = !0), n === void 0 && (n = !0);
        const r = this,
            { params: i, el: l, wrapperEl: s, slides: a } = r;
        return (
            typeof r.params > "u" ||
                r.destroyed ||
                (r.emit("beforeDestroy"),
                (r.initialized = !1),
                r.detachEvents(),
                i.loop && r.loopDestroy(),
                n &&
                    (r.removeClasses(),
                    l.removeAttribute("style"),
                    s.removeAttribute("style"),
                    a &&
                        a.length &&
                        a.forEach((o) => {
                            o.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index");
                        })),
                r.emit("destroy"),
                Object.keys(r.eventsListeners).forEach((o) => {
                    r.off(o);
                }),
                t !== !1 && ((r.el.swiper = null), iv(r)),
                (r.destroyed = !0)),
            null
        );
    }
    static extendDefaults(t) {
        ke(Al, t);
    }
    static get extendedDefaults() {
        return Al;
    }
    static get defaults() {
        return As;
    }
    static installModule(t) {
        et.prototype.__modules__ || (et.prototype.__modules__ = []);
        const n = et.prototype.__modules__;
        typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach((n) => et.installModule(n)), et) : (et.installModule(t), et);
    }
};
Object.keys(Dl).forEach((e) => {
    Object.keys(Dl[e]).forEach((t) => {
        Ao.prototype[t] = Dl[e][t];
    });
});
Ao.use([hv, vv]);
const Kd = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
];
function Qt(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object" && !e.__swiper__;
}
function wn(e, t) {
    const n = ["__proto__", "constructor", "prototype"];
    Object.keys(t)
        .filter((r) => n.indexOf(r) < 0)
        .forEach((r) => {
            typeof e[r] > "u" ? (e[r] = t[r]) : Qt(t[r]) && Qt(e[r]) && Object.keys(t[r]).length > 0 ? (t[r].__swiper__ ? (e[r] = t[r]) : wn(e[r], t[r])) : (e[r] = t[r]);
        });
}
function qd(e) {
    return e === void 0 && (e = {}), e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u";
}
function Zd(e) {
    return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Jd(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function ef(e) {
    e === void 0 && (e = "");
    const t = e
            .split(" ")
            .map((r) => r.trim())
            .filter((r) => !!r),
        n = [];
    return (
        t.forEach((r) => {
            n.indexOf(r) < 0 && n.push(r);
        }),
        n.join(" ")
    );
}
function Sg(e) {
    return e === void 0 && (e = ""), e ? (e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}`) : "swiper-wrapper";
}
function Eg(e) {
    let { swiper: t, slides: n, passedParams: r, changedParams: i, nextEl: l, prevEl: s, scrollbarEl: a, paginationEl: o } = e;
    const c = i.filter((k) => k !== "children" && k !== "direction" && k !== "wrapperClass"),
        { params: p, pagination: m, navigation: v, scrollbar: g, virtual: w, thumbs: x } = t;
    let S, f, u, d, y, E, P, _;
    i.includes("thumbs") && r.thumbs && r.thumbs.swiper && p.thumbs && !p.thumbs.swiper && (S = !0),
        i.includes("controller") && r.controller && r.controller.control && p.controller && !p.controller.control && (f = !0),
        i.includes("pagination") && r.pagination && (r.pagination.el || o) && (p.pagination || p.pagination === !1) && m && !m.el && (u = !0),
        i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || a) && (p.scrollbar || p.scrollbar === !1) && g && !g.el && (d = !0),
        i.includes("navigation") && r.navigation && (r.navigation.prevEl || s) && (r.navigation.nextEl || l) && (p.navigation || p.navigation === !1) && v && !v.prevEl && !v.nextEl && (y = !0);
    const T = (k) => {
        t[k] &&
            (t[k].destroy(),
            k === "navigation"
                ? (t.isElement && (t[k].prevEl.remove(), t[k].nextEl.remove()), (p[k].prevEl = void 0), (p[k].nextEl = void 0), (t[k].prevEl = void 0), (t[k].nextEl = void 0))
                : (t.isElement && t[k].el.remove(), (p[k].el = void 0), (t[k].el = void 0)));
    };
    i.includes("loop") && t.isElement && (p.loop && !r.loop ? (E = !0) : !p.loop && r.loop ? (P = !0) : (_ = !0)),
        c.forEach((k) => {
            if (Qt(p[k]) && Qt(r[k])) Object.assign(p[k], r[k]), (k === "navigation" || k === "pagination" || k === "scrollbar") && "enabled" in r[k] && !r[k].enabled && T(k);
            else {
                const C = r[k];
                (C === !0 || C === !1) && (k === "navigation" || k === "pagination" || k === "scrollbar") ? C === !1 && T(k) : (p[k] = r[k]);
            }
        }),
        c.includes("controller") && !f && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control),
        i.includes("children") && n && w && p.virtual.enabled ? ((w.slides = n), w.update(!0)) : i.includes("virtual") && w && p.virtual.enabled && (n && (w.slides = n), w.update(!0)),
        i.includes("children") && n && p.loop && (_ = !0),
        S && x.init() && x.update(!0),
        f && (t.controller.control = p.controller.control),
        u &&
            (t.isElement && (!o || typeof o == "string") && ((o = document.createElement("div")), o.classList.add("swiper-pagination"), o.part.add("pagination"), t.el.appendChild(o)),
            o && (p.pagination.el = o),
            m.init(),
            m.render(),
            m.update()),
        d &&
            (t.isElement && (!a || typeof a == "string") && ((a = document.createElement("div")), a.classList.add("swiper-scrollbar"), a.part.add("scrollbar"), t.el.appendChild(a)),
            a && (p.scrollbar.el = a),
            g.init(),
            g.updateSize(),
            g.setTranslate()),
        y &&
            (t.isElement &&
                ((!l || typeof l == "string") && ((l = document.createElement("div")), l.classList.add("swiper-button-next"), (l.innerHTML = t.hostEl.constructor.nextButtonSvg), l.part.add("button-next"), t.el.appendChild(l)),
                (!s || typeof s == "string") && ((s = document.createElement("div")), s.classList.add("swiper-button-prev"), (s.innerHTML = t.hostEl.constructor.prevButtonSvg), s.part.add("button-prev"), t.el.appendChild(s))),
            l && (p.navigation.nextEl = l),
            s && (p.navigation.prevEl = s),
            v.init(),
            v.update()),
        i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
        i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
        i.includes("direction") && t.changeDirection(r.direction, !1),
        (E || _) && t.loopDestroy(),
        (P || _) && t.loopCreate(),
        t.update();
}
function Tg(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0);
    const n = { on: {} },
        r = {},
        i = {};
    wn(n, As), (n._emitClasses = !0), (n.init = !1);
    const l = {},
        s = Kd.map((o) => o.replace(/_/, "")),
        a = Object.assign({}, e);
    return (
        Object.keys(a).forEach((o) => {
            typeof e[o] > "u" ||
                (s.indexOf(o) >= 0
                    ? Qt(e[o])
                        ? ((n[o] = {}), (i[o] = {}), wn(n[o], e[o]), wn(i[o], e[o]))
                        : ((n[o] = e[o]), (i[o] = e[o]))
                    : o.search(/on[A-Z]/) === 0 && typeof e[o] == "function"
                    ? t
                        ? (r[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
                        : (n.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o])
                    : (l[o] = e[o]));
        }),
        ["navigation", "pagination", "scrollbar"].forEach((o) => {
            n[o] === !0 && (n[o] = {}), n[o] === !1 && delete n[o];
        }),
        { params: n, passedParams: i, rest: l, events: r }
    );
}
function Cg(e, t) {
    let { el: n, nextEl: r, prevEl: i, paginationEl: l, scrollbarEl: s, swiper: a } = e;
    qd(t) && r && i && ((a.params.navigation.nextEl = r), (a.originalParams.navigation.nextEl = r), (a.params.navigation.prevEl = i), (a.originalParams.navigation.prevEl = i)),
        Zd(t) && l && ((a.params.pagination.el = l), (a.originalParams.pagination.el = l)),
        Jd(t) && s && ((a.params.scrollbar.el = s), (a.originalParams.scrollbar.el = s)),
        a.init(n);
}
function kg(e, t, n, r, i) {
    const l = [];
    if (!t) return l;
    const s = (o) => {
        l.indexOf(o) < 0 && l.push(o);
    };
    if (n && r) {
        const o = r.map(i),
            c = n.map(i);
        o.join("") !== c.join("") && s("children"), r.length !== n.length && s("children");
    }
    return (
        Kd.filter((o) => o[0] === "_")
            .map((o) => o.replace(/_/, ""))
            .forEach((o) => {
                if (o in e && o in t)
                    if (Qt(e[o]) && Qt(t[o])) {
                        const c = Object.keys(e[o]),
                            p = Object.keys(t[o]);
                        c.length !== p.length
                            ? s(o)
                            : (c.forEach((m) => {
                                  e[o][m] !== t[o][m] && s(o);
                              }),
                              p.forEach((m) => {
                                  e[o][m] !== t[o][m] && s(o);
                              }));
                    } else e[o] !== t[o] && s(o);
            }),
        l
    );
}
const Pg = (e) => {
    !e ||
        e.destroyed ||
        !e.params.virtual ||
        (e.params.virtual && !e.params.virtual.enabled) ||
        (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate());
};
function Bi() {
    return (
        (Bi = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Bi.apply(this, arguments)
    );
}
function tf(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide");
}
function nf(e) {
    const t = [];
    return (
        ee.Children.toArray(e).forEach((n) => {
            tf(n) ? t.push(n) : n.props && n.props.children && nf(n.props.children).forEach((r) => t.push(r));
        }),
        t
    );
}
function _g(e) {
    const t = [],
        n = { "container-start": [], "container-end": [], "wrapper-start": [], "wrapper-end": [] };
    return (
        ee.Children.toArray(e).forEach((r) => {
            if (tf(r)) t.push(r);
            else if (r.props && r.props.slot && n[r.props.slot]) n[r.props.slot].push(r);
            else if (r.props && r.props.children) {
                const i = nf(r.props.children);
                i.length > 0 ? i.forEach((l) => t.push(l)) : n["container-end"].push(r);
            } else n["container-end"].push(r);
        }),
        { slides: t, slots: n }
    );
}
function jg(e, t, n) {
    if (!n) return null;
    const r = (p) => {
            let m = p;
            return p < 0 ? (m = t.length + p) : m >= t.length && (m = m - t.length), m;
        },
        i = e.isHorizontal() ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` } : { top: `${n.offset}px` },
        { from: l, to: s } = n,
        a = e.params.loop ? -t.length : 0,
        o = e.params.loop ? t.length * 2 : t.length,
        c = [];
    for (let p = a; p < o; p += 1) p >= l && p <= s && c.push(t[r(p)]);
    return c.map((p, m) => ee.cloneElement(p, { swiper: e, style: i, key: `slide-${m}` }));
}
function tr(e, t) {
    return typeof window > "u" ? z.useEffect(e, t) : z.useLayoutEffect(e, t);
}
const cu = z.createContext(null),
    Ng = z.createContext(null),
    rf = z.forwardRef(function (e, t) {
        let { className: n, tag: r = "div", wrapperTag: i = "div", children: l, onSwiper: s, ...a } = e === void 0 ? {} : e,
            o = !1;
        const [c, p] = z.useState("swiper"),
            [m, v] = z.useState(null),
            [g, w] = z.useState(!1),
            x = z.useRef(!1),
            S = z.useRef(null),
            f = z.useRef(null),
            u = z.useRef(null),
            d = z.useRef(null),
            y = z.useRef(null),
            E = z.useRef(null),
            P = z.useRef(null),
            _ = z.useRef(null),
            { params: T, passedParams: k, rest: C, events: N } = Tg(a),
            { slides: I, slots: L } = _g(l),
            D = () => {
                w(!g);
            };
        Object.assign(T.on, {
            _containerClasses(O, b) {
                p(b);
            },
        });
        const A = () => {
            Object.assign(T.on, N), (o = !0);
            const O = { ...T };
            if ((delete O.wrapperClass, (f.current = new Ao(O)), f.current.virtual && f.current.params.virtual.enabled)) {
                f.current.virtual.slides = I;
                const b = { cache: !1, slides: I, renderExternal: v, renderExternalUpdate: !1 };
                wn(f.current.params.virtual, b), wn(f.current.originalParams.virtual, b);
            }
        };
        S.current || A(), f.current && f.current.on("_beforeBreakpoint", D);
        const Y = () => {
                o ||
                    !N ||
                    !f.current ||
                    Object.keys(N).forEach((O) => {
                        f.current.on(O, N[O]);
                    });
            },
            Je = () => {
                !N ||
                    !f.current ||
                    Object.keys(N).forEach((O) => {
                        f.current.off(O, N[O]);
                    });
            };
        z.useEffect(() => () => {
            f.current && f.current.off("_beforeBreakpoint", D);
        }),
            z.useEffect(() => {
                !x.current && f.current && (f.current.emitSlidesClasses(), (x.current = !0));
            }),
            tr(() => {
                if ((t && (t.current = S.current), !!S.current))
                    return (
                        f.current.destroyed && A(),
                        Cg({ el: S.current, nextEl: y.current, prevEl: E.current, paginationEl: P.current, scrollbarEl: _.current, swiper: f.current }, T),
                        s && s(f.current),
                        () => {
                            f.current && !f.current.destroyed && f.current.destroy(!0, !1);
                        }
                    );
            }, []),
            tr(() => {
                Y();
                const O = kg(k, u.current, I, d.current, (b) => b.key);
                return (
                    (u.current = k),
                    (d.current = I),
                    O.length && f.current && !f.current.destroyed && Eg({ swiper: f.current, slides: I, passedParams: k, changedParams: O, nextEl: y.current, prevEl: E.current, scrollbarEl: _.current, paginationEl: P.current }),
                    () => {
                        Je();
                    }
                );
            }),
            tr(() => {
                Pg(f.current);
            }, [m]);
        function j() {
            return T.virtual ? jg(f.current, I, m) : I.map((O, b) => ee.cloneElement(O, { swiper: f.current, swiperSlideIndex: b }));
        }
        return ee.createElement(
            r,
            Bi({ ref: S, className: ef(`${c}${n ? ` ${n}` : ""}`) }, C),
            ee.createElement(
                Ng.Provider,
                { value: f.current },
                L["container-start"],
                ee.createElement(i, { className: Sg(T.wrapperClass) }, L["wrapper-start"], j(), L["wrapper-end"]),
                qd(T) && ee.createElement(ee.Fragment, null, ee.createElement("div", { ref: E, className: "swiper-button-prev" }), ee.createElement("div", { ref: y, className: "swiper-button-next" })),
                Jd(T) && ee.createElement("div", { ref: _, className: "swiper-scrollbar" }),
                Zd(T) && ee.createElement("div", { ref: P, className: "swiper-pagination" }),
                L["container-end"]
            )
        );
    });
rf.displayName = "Swiper";
const Bs = z.forwardRef(function (e, t) {
    let { tag: n = "div", children: r, className: i = "", swiper: l, zoom: s, lazy: a, virtualIndex: o, swiperSlideIndex: c, ...p } = e === void 0 ? {} : e;
    const m = z.useRef(null),
        [v, g] = z.useState("swiper-slide"),
        [w, x] = z.useState(!1);
    function S(y, E, P) {
        E === m.current && g(P);
    }
    tr(() => {
        if ((typeof c < "u" && (m.current.swiperSlideIndex = c), t && (t.current = m.current), !(!m.current || !l))) {
            if (l.destroyed) {
                v !== "swiper-slide" && g("swiper-slide");
                return;
            }
            return (
                l.on("_slideClass", S),
                () => {
                    l && l.off("_slideClass", S);
                }
            );
        }
    }),
        tr(() => {
            l && m.current && !l.destroyed && g(l.getSlideClasses(m.current));
        }, [l]);
    const f = { isActive: v.indexOf("swiper-slide-active") >= 0, isVisible: v.indexOf("swiper-slide-visible") >= 0, isPrev: v.indexOf("swiper-slide-prev") >= 0, isNext: v.indexOf("swiper-slide-next") >= 0 },
        u = () => (typeof r == "function" ? r(f) : r),
        d = () => {
            x(!0);
        };
    return ee.createElement(
        n,
        Bi({ ref: m, className: ef(`${v}${i ? ` ${i}` : ""}`), "data-swiper-slide-index": o, onLoad: d }, p),
        s &&
            ee.createElement(
                cu.Provider,
                { value: f },
                ee.createElement("div", { className: "swiper-zoom-container", "data-swiper-zoom": typeof s == "number" ? s : void 0 }, u(), a && !w && ee.createElement("div", { className: "swiper-lazy-preloader" }))
            ),
        !s && ee.createElement(cu.Provider, { value: f }, u(), a && !w && ee.createElement("div", { className: "swiper-lazy-preloader" }))
    );
});
Bs.displayName = "SwiperSlide";
function lf(e, t, n, r) {
    return (
        e.params.createElements &&
            Object.keys(r).forEach((i) => {
                if (!n[i] && n.auto === !0) {
                    let l = Ke(e.el, `.${r[i]}`)[0];
                    l || ((l = Di("div", r[i])), (l.className = r[i]), e.el.append(l)), (n[i] = l), (t[i] = l);
                }
            }),
        n
    );
}
function Mg(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    n({ navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }),
        (t.navigation = { nextEl: null, prevEl: null });
    const l = (x) => (Array.isArray(x) ? x : [x]).filter((S) => !!S);
    function s(x) {
        let S;
        return x && typeof x == "string" && t.isElement && ((S = t.el.querySelector(x)), S)
            ? S
            : (x && (typeof x == "string" && (S = [...document.querySelectorAll(x)]), t.params.uniqueNavElements && typeof x == "string" && S.length > 1 && t.el.querySelectorAll(x).length === 1 && (S = t.el.querySelector(x))),
              x && !S ? x : S);
    }
    function a(x, S) {
        const f = t.params.navigation;
        (x = l(x)),
            x.forEach((u) => {
                u && (u.classList[S ? "add" : "remove"](...f.disabledClass.split(" ")), u.tagName === "BUTTON" && (u.disabled = S), t.params.watchOverflow && t.enabled && u.classList[t.isLocked ? "add" : "remove"](f.lockClass));
            });
    }
    function o() {
        const { nextEl: x, prevEl: S } = t.navigation;
        if (t.params.loop) {
            a(S, !1), a(x, !1);
            return;
        }
        a(S, t.isBeginning && !t.params.rewind), a(x, t.isEnd && !t.params.rewind);
    }
    function c(x) {
        x.preventDefault(), !(t.isBeginning && !t.params.loop && !t.params.rewind) && (t.slidePrev(), i("navigationPrev"));
    }
    function p(x) {
        x.preventDefault(), !(t.isEnd && !t.params.loop && !t.params.rewind) && (t.slideNext(), i("navigationNext"));
    }
    function m() {
        const x = t.params.navigation;
        if (((t.params.navigation = lf(t, t.originalParams.navigation, t.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" })), !(x.nextEl || x.prevEl))) return;
        let S = s(x.nextEl),
            f = s(x.prevEl);
        Object.assign(t.navigation, { nextEl: S, prevEl: f }), (S = l(S)), (f = l(f));
        const u = (d, y) => {
            d && d.addEventListener("click", y === "next" ? p : c), !t.enabled && d && d.classList.add(...x.lockClass.split(" "));
        };
        S.forEach((d) => u(d, "next")), f.forEach((d) => u(d, "prev"));
    }
    function v() {
        let { nextEl: x, prevEl: S } = t.navigation;
        (x = l(x)), (S = l(S));
        const f = (u, d) => {
            u.removeEventListener("click", d === "next" ? p : c), u.classList.remove(...t.params.navigation.disabledClass.split(" "));
        };
        x.forEach((u) => f(u, "next")), S.forEach((u) => f(u, "prev"));
    }
    r("init", () => {
        t.params.navigation.enabled === !1 ? w() : (m(), o());
    }),
        r("toEdge fromEdge lock unlock", () => {
            o();
        }),
        r("destroy", () => {
            v();
        }),
        r("enable disable", () => {
            let { nextEl: x, prevEl: S } = t.navigation;
            if (((x = l(x)), (S = l(S)), t.enabled)) {
                o();
                return;
            }
            [...x, ...S].filter((f) => !!f).forEach((f) => f.classList.add(t.params.navigation.lockClass));
        }),
        r("click", (x, S) => {
            let { nextEl: f, prevEl: u } = t.navigation;
            (f = l(f)), (u = l(u));
            const d = S.target;
            if (t.params.navigation.hideOnClick && !u.includes(d) && !f.includes(d)) {
                if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === d || t.pagination.el.contains(d))) return;
                let y;
                f.length ? (y = f[0].classList.contains(t.params.navigation.hiddenClass)) : u.length && (y = u[0].classList.contains(t.params.navigation.hiddenClass)),
                    i(y === !0 ? "navigationShow" : "navigationHide"),
                    [...f, ...u].filter((E) => !!E).forEach((E) => E.classList.toggle(t.params.navigation.hiddenClass));
            }
        });
    const g = () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), m(), o();
        },
        w = () => {
            t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), v();
        };
    Object.assign(t.navigation, { enable: g, disable: w, update: o, init: m, destroy: v });
}
function Bn(e) {
    return (
        e === void 0 && (e = ""),
        `.${e
            .trim()
            .replace(/([\.:!+\/])/g, "\\$1")
            .replace(/ /g, ".")}`
    );
}
function Lg(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e;
    const l = "swiper-pagination";
    n({
        pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (u) => u,
            formatFractionTotal: (u) => u,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`,
        },
    }),
        (t.pagination = { el: null, bullets: [] });
    let s,
        a = 0;
    const o = (u) => (Array.isArray(u) ? u : [u]).filter((d) => !!d);
    function c() {
        return !t.params.pagination.el || !t.pagination.el || (Array.isArray(t.pagination.el) && t.pagination.el.length === 0);
    }
    function p(u, d) {
        const { bulletActiveClass: y } = t.params.pagination;
        u && ((u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]), u && (u.classList.add(`${y}-${d}`), (u = u[`${d === "prev" ? "previous" : "next"}ElementSibling`]), u && u.classList.add(`${y}-${d}-${d}`)));
    }
    function m(u) {
        const d = u.target.closest(Bn(t.params.pagination.bulletClass));
        if (!d) return;
        u.preventDefault();
        const y = Ai(d) * t.params.slidesPerGroup;
        if (t.params.loop) {
            if (t.realIndex === y) return;
            t.slideToLoop(y);
        } else t.slideTo(y);
    }
    function v() {
        const u = t.rtl,
            d = t.params.pagination;
        if (c()) return;
        let y = t.pagination.el;
        y = o(y);
        let E, P;
        const _ = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
            T = t.params.loop ? Math.ceil(_ / t.params.slidesPerGroup) : t.snapGrid.length;
        if (
            (t.params.loop
                ? ((P = t.previousRealIndex || 0), (E = t.params.slidesPerGroup > 1 ? Math.floor(t.realIndex / t.params.slidesPerGroup) : t.realIndex))
                : typeof t.snapIndex < "u"
                ? ((E = t.snapIndex), (P = t.previousSnapIndex))
                : ((P = t.previousIndex || 0), (E = t.activeIndex || 0)),
            d.type === "bullets" && t.pagination.bullets && t.pagination.bullets.length > 0)
        ) {
            const k = t.pagination.bullets;
            let C, N, I;
            if (
                (d.dynamicBullets &&
                    ((s = bs(k[0], t.isHorizontal() ? "width" : "height", !0)),
                    y.forEach((L) => {
                        L.style[t.isHorizontal() ? "width" : "height"] = `${s * (d.dynamicMainBullets + 4)}px`;
                    }),
                    d.dynamicMainBullets > 1 && P !== void 0 && ((a += E - (P || 0)), a > d.dynamicMainBullets - 1 ? (a = d.dynamicMainBullets - 1) : a < 0 && (a = 0)),
                    (C = Math.max(E - a, 0)),
                    (N = C + (Math.min(k.length, d.dynamicMainBullets) - 1)),
                    (I = (N + C) / 2)),
                k.forEach((L) => {
                    const D = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((A) => `${d.bulletActiveClass}${A}`)].map((A) => (typeof A == "string" && A.includes(" ") ? A.split(" ") : A)).flat();
                    L.classList.remove(...D);
                }),
                y.length > 1)
            )
                k.forEach((L) => {
                    const D = Ai(L);
                    D === E ? L.classList.add(...d.bulletActiveClass.split(" ")) : t.isElement && L.setAttribute("part", "bullet"),
                        d.dynamicBullets && (D >= C && D <= N && L.classList.add(...`${d.bulletActiveClass}-main`.split(" ")), D === C && p(L, "prev"), D === N && p(L, "next"));
                });
            else {
                const L = k[E];
                if (
                    (L && L.classList.add(...d.bulletActiveClass.split(" ")),
                    t.isElement &&
                        k.forEach((D, A) => {
                            D.setAttribute("part", A === E ? "bullet-active" : "bullet");
                        }),
                    d.dynamicBullets)
                ) {
                    const D = k[C],
                        A = k[N];
                    for (let Y = C; Y <= N; Y += 1) k[Y] && k[Y].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
                    p(D, "prev"), p(A, "next");
                }
            }
            if (d.dynamicBullets) {
                const L = Math.min(k.length, d.dynamicMainBullets + 4),
                    D = (s * L - s) / 2 - I * s,
                    A = u ? "right" : "left";
                k.forEach((Y) => {
                    Y.style[t.isHorizontal() ? A : "top"] = `${D}px`;
                });
            }
        }
        y.forEach((k, C) => {
            if (
                (d.type === "fraction" &&
                    (k.querySelectorAll(Bn(d.currentClass)).forEach((N) => {
                        N.textContent = d.formatFractionCurrent(E + 1);
                    }),
                    k.querySelectorAll(Bn(d.totalClass)).forEach((N) => {
                        N.textContent = d.formatFractionTotal(T);
                    })),
                d.type === "progressbar")
            ) {
                let N;
                d.progressbarOpposite ? (N = t.isHorizontal() ? "vertical" : "horizontal") : (N = t.isHorizontal() ? "horizontal" : "vertical");
                const I = (E + 1) / T;
                let L = 1,
                    D = 1;
                N === "horizontal" ? (L = I) : (D = I),
                    k.querySelectorAll(Bn(d.progressbarFillClass)).forEach((A) => {
                        (A.style.transform = `translate3d(0,0,0) scaleX(${L}) scaleY(${D})`), (A.style.transitionDuration = `${t.params.speed}ms`);
                    });
            }
            d.type === "custom" && d.renderCustom ? ((k.innerHTML = d.renderCustom(t, E + 1, T)), C === 0 && i("paginationRender", k)) : (C === 0 && i("paginationRender", k), i("paginationUpdate", k)),
                t.params.watchOverflow && t.enabled && k.classList[t.isLocked ? "add" : "remove"](d.lockClass);
        });
    }
    function g() {
        const u = t.params.pagination;
        if (c()) return;
        const d = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.grid && t.params.grid.rows > 1 ? t.slides.length / Math.ceil(t.params.grid.rows) : t.slides.length;
        let y = t.pagination.el;
        y = o(y);
        let E = "";
        if (u.type === "bullets") {
            let P = t.params.loop ? Math.ceil(d / t.params.slidesPerGroup) : t.snapGrid.length;
            t.params.freeMode && t.params.freeMode.enabled && P > d && (P = d);
            for (let _ = 0; _ < P; _ += 1) u.renderBullet ? (E += u.renderBullet.call(t, _, u.bulletClass)) : (E += `<${u.bulletElement} ${t.isElement ? 'part="bullet"' : ""} class="${u.bulletClass}"></${u.bulletElement}>`);
        }
        u.type === "fraction" && (u.renderFraction ? (E = u.renderFraction.call(t, u.currentClass, u.totalClass)) : (E = `<span class="${u.currentClass}"></span> / <span class="${u.totalClass}"></span>`)),
            u.type === "progressbar" && (u.renderProgressbar ? (E = u.renderProgressbar.call(t, u.progressbarFillClass)) : (E = `<span class="${u.progressbarFillClass}"></span>`)),
            (t.pagination.bullets = []),
            y.forEach((P) => {
                u.type !== "custom" && (P.innerHTML = E || ""), u.type === "bullets" && t.pagination.bullets.push(...P.querySelectorAll(Bn(u.bulletClass)));
            }),
            u.type !== "custom" && i("paginationRender", y[0]);
    }
    function w() {
        t.params.pagination = lf(t, t.originalParams.pagination, t.params.pagination, { el: "swiper-pagination" });
        const u = t.params.pagination;
        if (!u.el) return;
        let d;
        typeof u.el == "string" && t.isElement && (d = t.el.querySelector(u.el)),
            !d && typeof u.el == "string" && (d = [...document.querySelectorAll(u.el)]),
            d || (d = u.el),
            !(!d || d.length === 0) &&
                (t.params.uniqueNavElements && typeof u.el == "string" && Array.isArray(d) && d.length > 1 && ((d = [...t.el.querySelectorAll(u.el)]), d.length > 1 && (d = d.filter((y) => Gd(y, ".swiper")[0] === t.el)[0])),
                Array.isArray(d) && d.length === 1 && (d = d[0]),
                Object.assign(t.pagination, { el: d }),
                (d = o(d)),
                d.forEach((y) => {
                    u.type === "bullets" && u.clickable && y.classList.add(...(u.clickableClass || "").split(" ")),
                        y.classList.add(u.modifierClass + u.type),
                        y.classList.add(t.isHorizontal() ? u.horizontalClass : u.verticalClass),
                        u.type === "bullets" && u.dynamicBullets && (y.classList.add(`${u.modifierClass}${u.type}-dynamic`), (a = 0), u.dynamicMainBullets < 1 && (u.dynamicMainBullets = 1)),
                        u.type === "progressbar" && u.progressbarOpposite && y.classList.add(u.progressbarOppositeClass),
                        u.clickable && y.addEventListener("click", m),
                        t.enabled || y.classList.add(u.lockClass);
                }));
    }
    function x() {
        const u = t.params.pagination;
        if (c()) return;
        let d = t.pagination.el;
        d &&
            ((d = o(d)),
            d.forEach((y) => {
                y.classList.remove(u.hiddenClass),
                    y.classList.remove(u.modifierClass + u.type),
                    y.classList.remove(t.isHorizontal() ? u.horizontalClass : u.verticalClass),
                    u.clickable && (y.classList.remove(...(u.clickableClass || "").split(" ")), y.removeEventListener("click", m));
            })),
            t.pagination.bullets && t.pagination.bullets.forEach((y) => y.classList.remove(...u.bulletActiveClass.split(" ")));
    }
    r("changeDirection", () => {
        if (!t.pagination || !t.pagination.el) return;
        const u = t.params.pagination;
        let { el: d } = t.pagination;
        (d = o(d)),
            d.forEach((y) => {
                y.classList.remove(u.horizontalClass, u.verticalClass), y.classList.add(t.isHorizontal() ? u.horizontalClass : u.verticalClass);
            });
    }),
        r("init", () => {
            t.params.pagination.enabled === !1 ? f() : (w(), g(), v());
        }),
        r("activeIndexChange", () => {
            typeof t.snapIndex > "u" && v();
        }),
        r("snapIndexChange", () => {
            v();
        }),
        r("snapGridLengthChange", () => {
            g(), v();
        }),
        r("destroy", () => {
            x();
        }),
        r("enable disable", () => {
            let { el: u } = t.pagination;
            u && ((u = o(u)), u.forEach((d) => d.classList[t.enabled ? "remove" : "add"](t.params.pagination.lockClass)));
        }),
        r("lock unlock", () => {
            v();
        }),
        r("click", (u, d) => {
            const y = d.target,
                E = o(t.pagination.el);
            if (t.params.pagination.el && t.params.pagination.hideOnClick && E && E.length > 0 && !y.classList.contains(t.params.pagination.bulletClass)) {
                if (t.navigation && ((t.navigation.nextEl && y === t.navigation.nextEl) || (t.navigation.prevEl && y === t.navigation.prevEl))) return;
                const P = E[0].classList.contains(t.params.pagination.hiddenClass);
                i(P === !0 ? "paginationShow" : "paginationHide"), E.forEach((_) => _.classList.toggle(t.params.pagination.hiddenClass));
            }
        });
    const S = () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass);
            let { el: u } = t.pagination;
            u && ((u = o(u)), u.forEach((d) => d.classList.remove(t.params.pagination.paginationDisabledClass))), w(), g(), v();
        },
        f = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass);
            let { el: u } = t.pagination;
            u && ((u = o(u)), u.forEach((d) => d.classList.add(t.params.pagination.paginationDisabledClass))), x();
        };
    Object.assign(t.pagination, { enable: S, disable: f, render: g, update: v, init: w, destroy: x });
}
function zg(e) {
    let { swiper: t, extendParams: n, on: r, emit: i, params: l } = e;
    (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }), n({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !1, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } });
    let s,
        a,
        o = l && l.autoplay ? l.autoplay.delay : 3e3,
        c = l && l.autoplay ? l.autoplay.delay : 3e3,
        p,
        m = new Date().getTime(),
        v,
        g,
        w,
        x,
        S,
        f,
        u;
    function d(j) {
        !t || t.destroyed || !t.wrapperEl || (j.target === t.wrapperEl && (t.wrapperEl.removeEventListener("transitionend", d), !u && C()));
    }
    const y = () => {
            if (t.destroyed || !t.autoplay.running) return;
            t.autoplay.paused ? (v = !0) : v && ((c = p), (v = !1));
            const j = t.autoplay.paused ? p : m + c - new Date().getTime();
            (t.autoplay.timeLeft = j),
                i("autoplayTimeLeft", j, j / o),
                (a = requestAnimationFrame(() => {
                    y();
                }));
        },
        E = () => {
            let j;
            return t.virtual && t.params.virtual.enabled ? (j = t.slides.filter((b) => b.classList.contains("swiper-slide-active"))[0]) : (j = t.slides[t.activeIndex]), j ? parseInt(j.getAttribute("data-swiper-autoplay"), 10) : void 0;
        },
        P = (j) => {
            if (t.destroyed || !t.autoplay.running) return;
            cancelAnimationFrame(a), y();
            let O = typeof j > "u" ? t.params.autoplay.delay : j;
            (o = t.params.autoplay.delay), (c = t.params.autoplay.delay);
            const b = E();
            !Number.isNaN(b) && b > 0 && typeof j > "u" && ((O = b), (o = b), (c = b)), (p = O);
            const $ = t.params.speed,
                X = () => {
                    !t ||
                        t.destroyed ||
                        (t.params.autoplay.reverseDirection
                            ? !t.isBeginning || t.params.loop || t.params.rewind
                                ? (t.slidePrev($, !0, !0), i("autoplay"))
                                : t.params.autoplay.stopOnLastSlide || (t.slideTo(t.slides.length - 1, $, !0, !0), i("autoplay"))
                            : !t.isEnd || t.params.loop || t.params.rewind
                            ? (t.slideNext($, !0, !0), i("autoplay"))
                            : t.params.autoplay.stopOnLastSlide || (t.slideTo(0, $, !0, !0), i("autoplay")),
                        t.params.cssMode &&
                            ((m = new Date().getTime()),
                            requestAnimationFrame(() => {
                                P();
                            })));
                };
            return (
                O > 0
                    ? (clearTimeout(s),
                      (s = setTimeout(() => {
                          X();
                      }, O)))
                    : requestAnimationFrame(() => {
                          X();
                      }),
                O
            );
        },
        _ = () => {
            (m = new Date().getTime()), (t.autoplay.running = !0), P(), i("autoplayStart");
        },
        T = () => {
            (t.autoplay.running = !1), clearTimeout(s), cancelAnimationFrame(a), i("autoplayStop");
        },
        k = (j, O) => {
            if (t.destroyed || !t.autoplay.running) return;
            clearTimeout(s), j || (f = !0);
            const b = () => {
                i("autoplayPause"), t.params.autoplay.waitForTransition ? t.wrapperEl.addEventListener("transitionend", d) : C();
            };
            if (((t.autoplay.paused = !0), O)) {
                S && (p = t.params.autoplay.delay), (S = !1), b();
                return;
            }
            (p = (p || t.params.autoplay.delay) - (new Date().getTime() - m)), !(t.isEnd && p < 0 && !t.params.loop) && (p < 0 && (p = 0), b());
        },
        C = () => {
            (t.isEnd && p < 0 && !t.params.loop) || t.destroyed || !t.autoplay.running || ((m = new Date().getTime()), f ? ((f = !1), P(p)) : P(), (t.autoplay.paused = !1), i("autoplayResume"));
        },
        N = () => {
            if (t.destroyed || !t.autoplay.running) return;
            const j = st();
            j.visibilityState === "hidden" && ((f = !0), k(!0)), j.visibilityState === "visible" && C();
        },
        I = (j) => {
            j.pointerType === "mouse" && ((f = !0), (u = !0), !(t.animating || t.autoplay.paused) && k(!0));
        },
        L = (j) => {
            j.pointerType === "mouse" && ((u = !1), t.autoplay.paused && C());
        },
        D = () => {
            t.params.autoplay.pauseOnMouseEnter && (t.el.addEventListener("pointerenter", I), t.el.addEventListener("pointerleave", L));
        },
        A = () => {
            t.el.removeEventListener("pointerenter", I), t.el.removeEventListener("pointerleave", L);
        },
        Y = () => {
            st().addEventListener("visibilitychange", N);
        },
        Je = () => {
            st().removeEventListener("visibilitychange", N);
        };
    r("init", () => {
        t.params.autoplay.enabled && (D(), Y(), _());
    }),
        r("destroy", () => {
            A(), Je(), t.autoplay.running && T();
        }),
        r("_freeModeStaticRelease", () => {
            (w || f) && C();
        }),
        r("_freeModeNoMomentumRelease", () => {
            t.params.autoplay.disableOnInteraction ? T() : k(!0, !0);
        }),
        r("beforeTransitionStart", (j, O, b) => {
            t.destroyed || !t.autoplay.running || (b || !t.params.autoplay.disableOnInteraction ? k(!0, !0) : T());
        }),
        r("sliderFirstMove", () => {
            if (!(t.destroyed || !t.autoplay.running)) {
                if (t.params.autoplay.disableOnInteraction) {
                    T();
                    return;
                }
                (g = !0),
                    (w = !1),
                    (f = !1),
                    (x = setTimeout(() => {
                        (f = !0), (w = !0), k(!0);
                    }, 200));
            }
        }),
        r("touchEnd", () => {
            if (!(t.destroyed || !t.autoplay.running || !g)) {
                if ((clearTimeout(x), clearTimeout(s), t.params.autoplay.disableOnInteraction)) {
                    (w = !1), (g = !1);
                    return;
                }
                w && t.params.cssMode && C(), (w = !1), (g = !1);
            }
        }),
        r("slideChange", () => {
            t.destroyed || !t.autoplay.running || (S = !0);
        }),
        Object.assign(t.autoplay, { start: _, stop: T, pause: k, resume: C });
}
function Ig() {
    return h.jsx("section", {
        id: "testimonios",
        className: "relative z-10 py-[10rem]",
        children: h.jsx("div", {
            className: " bg-[#243856] dark:bg-gray-900",
            children: h.jsxs(rf, {
                spaceBetween: 30,
                centeredSlides: !0,
                autoplay: { delay: 2500, disableOnInteraction: !1 },
                pagination: { clickable: !0 },
                navigation: !0,
                modules: [zg, Lg, Mg],
                className: "mySwiper",
                children: [
                    h.jsx(Bs, {
                        children: h.jsx("div", {
                            className: "mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16",
                            children: h.jsxs("figure", {
                                className: "mx-auto max-w-screen-md",
                                children: [
                                    h.jsx("svg", {
                                        className: "mx-auto mb-3 h-12 text-titulo dark:text-gray-600",
                                        viewBox: "0 0 24 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: h.jsx("path", {
                                            d:
                                                "M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",
                                            fill: "currentColor",
                                        }),
                                    }),
                                    h.jsx("blockquote", { children: h.jsx("p", { className: "text-2xl font-medium text-texto", children: '"¡Tienes talento!"' }) }),
                                    h.jsx("figcaption", {
                                        className: "mt-6 flex items-center justify-center space-x-3",
                                        children: h.jsxs("div", {
                                            className: "flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700",
                                            children: [
                                                h.jsx("div", { className: "pr-3 font-medium text-[#6793c9] dark:text-white", children: "Daniel Delgado Pinzon" }),
                                                h.jsx("div", { className: "pl-3 text-sm font-light text-texto dark:text-gray-400", children: "Maestro. CECyTE Morelos" }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                    h.jsx(Bs, {
                        children: h.jsx("div", {
                            className: "mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16",
                            children: h.jsxs("figure", {
                                className: "mx-auto max-w-screen-md",
                                children: [
                                    h.jsx("svg", {
                                        className: "mx-auto mb-3 h-12 text-titulo dark:text-gray-600",
                                        viewBox: "0 0 24 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: h.jsx("path", {
                                            d:
                                                "M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z",
                                            fill: "currentColor",
                                        }),
                                    }),
                                    h.jsx("blockquote", { children: h.jsx("p", { className: "text-2xl font-medium text-texto", children: '"Un chico muy inteligente!"' }) }),
                                    h.jsx("figcaption", {
                                        className: "mt-6 flex items-center justify-center space-x-3",
                                        children: h.jsxs("div", {
                                            className: "flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700",
                                            children: [
                                                h.jsx("div", { className: "pr-3 font-medium text-[#6793c9] dark:text-white", children: "Rosa V. Monje Collado" }),
                                                h.jsx("div", { className: "pl-3 text-sm font-light text-texto dark:text-gray-400", children: "Coordinadora de Atención Comunitaria. DIF Cuernavaca" }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        }),
                    }),
                ],
            }),
        }),
    });
}
function Og() {
    return h.jsxs("div", {
        className: "",
        children: [
            h.jsx(Gh, {}),
            h.jsx("div", { className: " inset-0 -z-10 h-screen w-full  px-5 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]", children: h.jsx(Kh, {}) }),
            h.jsx(qh, {}),
            h.jsx(Zh, {}),
            h.jsx(Jh, {}),
            h.jsx(Ig, {}),
            h.jsx(ev, {}),
            h.jsx(tv, {}),
        ],
    });
}
function Rg() {
    return h.jsx(xh, { children: h.jsx(gh, { children: h.jsx(Ld, { path: "/", element: h.jsx(Og, {}) }) }) });
}
Bl.createRoot(document.getElementById("root")).render(h.jsx(ee.StrictMode, { children: h.jsx(Rg, {}) }));
