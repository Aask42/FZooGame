(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-490d1477"], {
        "052e": function (t, e, r) {
            var n, a;
            /*! @preserve
             * numeral.js
             * version : 2.0.6
             * author : Adam Draper
             * license : MIT
             * http://adamwdraper.github.com/Numeral-js/
             */
            (function (o, i) {
                n = i, a = "function" === typeof n ? n.call(e, r, e, t) : n, void 0 === a || (t.exports = a)
            })(0, (function () {
                var t, e, r = "2.0.6",
                    n = {},
                    a = {},
                    o = {
                        currentLocale: "en",
                        zeroFormat: null,
                        nullFormat: null,
                        defaultFormat: "0,0",
                        scalePercentBy100: !0
                    },
                    i = {
                        currentLocale: o.currentLocale,
                        zeroFormat: o.zeroFormat,
                        nullFormat: o.nullFormat,
                        defaultFormat: o.defaultFormat,
                        scalePercentBy100: o.scalePercentBy100
                    };

                function s(t, e) {
                    this._input = t, this._value = e
                }
                return t = function (r) {
                        var a, o, c, u;
                        if (t.isNumeral(r)) a = r.value();
                        else if (0 === r || "undefined" === typeof r) a = 0;
                        else if (null === r || e.isNaN(r)) a = null;
                        else if ("string" === typeof r)
                            if (i.zeroFormat && r === i.zeroFormat) a = 0;
                            else if (i.nullFormat && r === i.nullFormat || !r.replace(/[^0-9]+/g, "").length) a = null;
                        else {
                            for (o in n)
                                if (u = "function" === typeof n[o].regexps.unformat ? n[o].regexps.unformat() : n[o].regexps.unformat, u && r.match(u)) {
                                    c = n[o].unformat;
                                    break
                                } c = c || t._.stringToNumber, a = c(r)
                        } else a = Number(r) || null;
                        return new s(r, a)
                    }, t.version = r, t.isNumeral = function (t) {
                        return t instanceof s
                    }, t._ = e = {
                        numberToFormat: function (e, r, n) {
                            var o, i, s, c, u, l, f, d = a[t.options.currentLocale],
                                p = !1,
                                m = !1,
                                h = 0,
                                b = "",
                                v = 1e12,
                                y = 1e9,
                                g = 1e6,
                                w = 1e3,
                                k = "",
                                x = !1;
                            if (e = e || 0, i = Math.abs(e), t._.includes(r, "(") ? (p = !0, r = r.replace(/[\(|\)]/g, "")) : (t._.includes(r, "+") || t._.includes(r, "-")) && (u = t._.includes(r, "+") ? r.indexOf("+") : e < 0 ? r.indexOf("-") : -1, r = r.replace(/[\+|\-]/g, "")), t._.includes(r, "a") && (o = r.match(/a(k|m|b|t)?/), o = !!o && o[1], t._.includes(r, " a") && (b = " "), r = r.replace(new RegExp(b + "a[kmbt]?"), ""), i >= v && !o || "t" === o ? (b += d.abbreviations.trillion, e /= v) : i < v && i >= y && !o || "b" === o ? (b += d.abbreviations.billion, e /= y) : i < y && i >= g && !o || "m" === o ? (b += d.abbreviations.million, e /= g) : (i < g && i >= w && !o || "k" === o) && (b += d.abbreviations.thousand, e /= w)), t._.includes(r, "[.]") && (m = !0, r = r.replace("[.]", ".")), s = e.toString().split(".")[0], c = r.split(".")[1], l = r.indexOf(","), h = (r.split(".")[0].split(",")[0].match(/0/g) || []).length, c ? (t._.includes(c, "[") ? (c = c.replace("]", ""), c = c.split("["), k = t._.toFixed(e, c[0].length + c[1].length, n, c[1].length)) : k = t._.toFixed(e, c.length, n), s = k.split(".")[0], k = t._.includes(k, ".") ? d.delimiters.decimal + k.split(".")[1] : "", m && 0 === Number(k.slice(1)) && (k = "")) : s = t._.toFixed(e, 0, n), b && !o && Number(s) >= 1e3 && b !== d.abbreviations.trillion) switch (s = String(Number(s) / 1e3), b) {
                                case d.abbreviations.thousand:
                                    b = d.abbreviations.million;
                                    break;
                                case d.abbreviations.million:
                                    b = d.abbreviations.billion;
                                    break;
                                case d.abbreviations.billion:
                                    b = d.abbreviations.trillion;
                                    break
                            }
                            if (t._.includes(s, "-") && (s = s.slice(1), x = !0), s.length < h)
                                for (var O = h - s.length; O > 0; O--) s = "0" + s;
                            return l > -1 && (s = s.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + d.delimiters.thousands)), 0 === r.indexOf(".") && (s = ""), f = s + k + (b || ""), p ? f = (p && x ? "(" : "") + f + (p && x ? ")" : "") : u >= 0 ? f = 0 === u ? (x ? "-" : "+") + f : f + (x ? "-" : "+") : x && (f = "-" + f), f
                        },
                        stringToNumber: function (t) {
                            var e, r, n, o = a[i.currentLocale],
                                s = t,
                                c = {
                                    thousand: 3,
                                    million: 6,
                                    billion: 9,
                                    trillion: 12
                                };
                            if (i.zeroFormat && t === i.zeroFormat) r = 0;
                            else if (i.nullFormat && t === i.nullFormat || !t.replace(/[^0-9]+/g, "").length) r = null;
                            else {
                                for (e in r = 1, "." !== o.delimiters.decimal && (t = t.replace(/\./g, "").replace(o.delimiters.decimal, ".")), c)
                                    if (n = new RegExp("[^a-zA-Z]" + o.abbreviations[e] + "(?:\\)|(\\" + o.currency.symbol + ")?(?:\\))?)?$"), s.match(n)) {
                                        r *= Math.pow(10, c[e]);
                                        break
                                    } r *= (t.split("-").length + Math.min(t.split("(").length - 1, t.split(")").length - 1)) % 2 ? 1 : -1, t = t.replace(/[^0-9\.]+/g, ""), r *= Number(t)
                            }
                            return r
                        },
                        isNaN: function (t) {
                            return "number" === typeof t && isNaN(t)
                        },
                        includes: function (t, e) {
                            return -1 !== t.indexOf(e)
                        },
                        insert: function (t, e, r) {
                            return t.slice(0, r) + e + t.slice(r)
                        },
                        reduce: function (t, e) {
                            if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
                            if ("function" !== typeof e) throw new TypeError(e + " is not a function");
                            var r, n = Object(t),
                                a = n.length >>> 0,
                                o = 0;
                            if (3 === arguments.length) r = arguments[2];
                            else {
                                while (o < a && !(o in n)) o++;
                                if (o >= a) throw new TypeError("Reduce of empty array with no initial value");
                                r = n[o++]
                            }
                            for (; o < a; o++) o in n && (r = e(r, n[o], o, n));
                            return r
                        },
                        multiplier: function (t) {
                            var e = t.toString().split(".");
                            return e.length < 2 ? 1 : Math.pow(10, e[1].length)
                        },
                        correctionFactor: function () {
                            var t = Array.prototype.slice.call(arguments);
                            return t.reduce((function (t, r) {
                                var n = e.multiplier(r);
                                return t > n ? t : n
                            }), 1)
                        },
                        toFixed: function (t, e, r, n) {
                            var a, o, i, s, c = t.toString().split("."),
                                u = e - (n || 0);
                            return a = 2 === c.length ? Math.min(Math.max(c[1].length, u), e) : u, i = Math.pow(10, a), s = (r(t + "e+" + a) / i).toFixed(a), n > e - a && (o = new RegExp("\\.?0{1," + (n - (e - a)) + "}$"), s = s.replace(o, "")), s
                        }
                    }, t.options = i, t.formats = n, t.locales = a, t.locale = function (t) {
                        return t && (i.currentLocale = t.toLowerCase()), i.currentLocale
                    }, t.localeData = function (t) {
                        if (!t) return a[i.currentLocale];
                        if (t = t.toLowerCase(), !a[t]) throw new Error("Unknown locale : " + t);
                        return a[t]
                    }, t.reset = function () {
                        for (var t in o) i[t] = o[t]
                    }, t.zeroFormat = function (t) {
                        i.zeroFormat = "string" === typeof t ? t : null
                    }, t.nullFormat = function (t) {
                        i.nullFormat = "string" === typeof t ? t : null
                    }, t.defaultFormat = function (t) {
                        i.defaultFormat = "string" === typeof t ? t : "0.0"
                    }, t.register = function (t, e, r) {
                        if (e = e.toLowerCase(), this[t + "s"][e]) throw new TypeError(e + " " + t + " already registered.");
                        return this[t + "s"][e] = r, r
                    }, t.validate = function (e, r) {
                        var n, a, o, i, s, c, u, l;
                        if ("string" !== typeof e && (e += "", console.warn && console.warn("Numeral.js: Value is not string. It has been co-erced to: ", e)), e = e.trim(), e.match(/^\d+$/)) return !0;
                        if ("" === e) return !1;
                        try {
                            u = t.localeData(r)
                        } catch (f) {
                            u = t.localeData(t.locale())
                        }
                        return o = u.currency.symbol, s = u.abbreviations, n = u.delimiters.decimal, a = "." === u.delimiters.thousands ? "\\." : u.delimiters.thousands, l = e.match(/^[^\d]+/), (null === l || (e = e.substr(1), l[0] === o)) && (l = e.match(/[^\d]+$/), (null === l || (e = e.slice(0, -1), l[0] === s.thousand || l[0] === s.million || l[0] === s.billion || l[0] === s.trillion)) && (c = new RegExp(a + "{2}"), !e.match(/[^\d.,]/g) && (i = e.split(n), !(i.length > 2) && (i.length < 2 ? !!i[0].match(/^\d+.*\d$/) && !i[0].match(c) : 1 === i[0].length ? !!i[0].match(/^\d+$/) && !i[0].match(c) && !!i[1].match(/^\d+$/) : !!i[0].match(/^\d+.*\d$/) && !i[0].match(c) && !!i[1].match(/^\d+$/)))))
                    }, t.fn = s.prototype = {
                        clone: function () {
                            return t(this)
                        },
                        format: function (e, r) {
                            var a, o, s, c = this._value,
                                u = e || i.defaultFormat;
                            if (r = r || Math.round, 0 === c && null !== i.zeroFormat) o = i.zeroFormat;
                            else if (null === c && null !== i.nullFormat) o = i.nullFormat;
                            else {
                                for (a in n)
                                    if (u.match(n[a].regexps.format)) {
                                        s = n[a].format;
                                        break
                                    } s = s || t._.numberToFormat, o = s(c, u, r)
                            }
                            return o
                        },
                        value: function () {
                            return this._value
                        },
                        input: function () {
                            return this._input
                        },
                        set: function (t) {
                            return this._value = Number(t), this
                        },
                        add: function (t) {
                            var r = e.correctionFactor.call(null, this._value, t);

                            function n(t, e, n, a) {
                                return t + Math.round(r * e)
                            }
                            return this._value = e.reduce([this._value, t], n, 0) / r, this
                        },
                        subtract: function (t) {
                            var r = e.correctionFactor.call(null, this._value, t);

                            function n(t, e, n, a) {
                                return t - Math.round(r * e)
                            }
                            return this._value = e.reduce([t], n, Math.round(this._value * r)) / r, this
                        },
                        multiply: function (t) {
                            function r(t, r, n, a) {
                                var o = e.correctionFactor(t, r);
                                return Math.round(t * o) * Math.round(r * o) / Math.round(o * o)
                            }
                            return this._value = e.reduce([this._value, t], r, 1), this
                        },
                        divide: function (t) {
                            function r(t, r, n, a) {
                                var o = e.correctionFactor(t, r);
                                return Math.round(t * o) / Math.round(r * o)
                            }
                            return this._value = e.reduce([this._value, t], r), this
                        },
                        difference: function (e) {
                            return Math.abs(t(this._value).subtract(e).value())
                        }
                    }, t.register("locale", "en", {
                        delimiters: {
                            thousands: ",",
                            decimal: "."
                        },
                        abbreviations: {
                            thousand: "k",
                            million: "m",
                            billion: "b",
                            trillion: "t"
                        },
                        ordinal: function (t) {
                            var e = t % 10;
                            return 1 === ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th"
                        },
                        currency: {
                            symbol: "$"
                        }
                    }),
                    function () {
                        t.register("format", "bps", {
                            regexps: {
                                format: /(BPS)/,
                                unformat: /(BPS)/
                            },
                            format: function (e, r, n) {
                                var a, o = t._.includes(r, " BPS") ? " " : "";
                                return e *= 1e4, r = r.replace(/\s?BPS/, ""), a = t._.numberToFormat(e, r, n), t._.includes(a, ")") ? (a = a.split(""), a.splice(-1, 0, o + "BPS"), a = a.join("")) : a = a + o + "BPS", a
                            },
                            unformat: function (e) {
                                return +(1e-4 * t._.stringToNumber(e)).toFixed(15)
                            }
                        })
                    }(),
                    function () {
                        var e = {
                                base: 1e3,
                                suffixes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
                            },
                            r = {
                                base: 1024,
                                suffixes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"]
                            },
                            n = e.suffixes.concat(r.suffixes.filter((function (t) {
                                return e.suffixes.indexOf(t) < 0
                            }))),
                            a = n.join("|");
                        a = "(" + a.replace("B", "B(?!PS)") + ")", t.register("format", "bytes", {
                            regexps: {
                                format: /([0\s]i?b)/,
                                unformat: new RegExp(a)
                            },
                            format: function (n, a, o) {
                                var i, s, c, u, l = t._.includes(a, "ib") ? r : e,
                                    f = t._.includes(a, " b") || t._.includes(a, " ib") ? " " : "";
                                for (a = a.replace(/\s?i?b/, ""), s = 0; s <= l.suffixes.length; s++)
                                    if (c = Math.pow(l.base, s), u = Math.pow(l.base, s + 1), null === n || 0 === n || n >= c && n < u) {
                                        f += l.suffixes[s], c > 0 && (n /= c);
                                        break
                                    } return i = t._.numberToFormat(n, a, o), i + f
                            },
                            unformat: function (n) {
                                var a, o, i = t._.stringToNumber(n);
                                if (i) {
                                    for (a = e.suffixes.length - 1; a >= 0; a--) {
                                        if (t._.includes(n, e.suffixes[a])) {
                                            o = Math.pow(e.base, a);
                                            break
                                        }
                                        if (t._.includes(n, r.suffixes[a])) {
                                            o = Math.pow(r.base, a);
                                            break
                                        }
                                    }
                                    i *= o || 1
                                }
                                return i
                            }
                        })
                    }(),
                    function () {
                        t.register("format", "currency", {
                            regexps: {
                                format: /(\$)/
                            },
                            format: function (e, r, n) {
                                var a, o, i, s = t.locales[t.options.currentLocale],
                                    c = {
                                        before: r.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                                        after: r.match(/([\+|\-|\)|\s|\$]*)$/)[0]
                                    };
                                for (r = r.replace(/\s?\$\s?/, ""), a = t._.numberToFormat(e, r, n), e >= 0 ? (c.before = c.before.replace(/[\-\(]/, ""), c.after = c.after.replace(/[\-\)]/, "")) : e < 0 && !t._.includes(c.before, "-") && !t._.includes(c.before, "(") && (c.before = "-" + c.before), i = 0; i < c.before.length; i++) switch (o = c.before[i], o) {
                                    case "$":
                                        a = t._.insert(a, s.currency.symbol, i);
                                        break;
                                    case " ":
                                        a = t._.insert(a, " ", i + s.currency.symbol.length - 1);
                                        break
                                }
                                for (i = c.after.length - 1; i >= 0; i--) switch (o = c.after[i], o) {
                                    case "$":
                                        a = i === c.after.length - 1 ? a + s.currency.symbol : t._.insert(a, s.currency.symbol, -(c.after.length - (1 + i)));
                                        break;
                                    case " ":
                                        a = i === c.after.length - 1 ? a + " " : t._.insert(a, " ", -(c.after.length - (1 + i) + s.currency.symbol.length - 1));
                                        break
                                }
                                return a
                            }
                        })
                    }(),
                    function () {
                        t.register("format", "exponential", {
                            regexps: {
                                format: /(e\+|e-)/,
                                unformat: /(e\+|e-)/
                            },
                            format: function (e, r, n) {
                                var a, o = "number" !== typeof e || t._.isNaN(e) ? "0e+0" : e.toExponential(),
                                    i = o.split("e");
                                return r = r.replace(/e[\+|\-]{1}0/, ""), a = t._.numberToFormat(Number(i[0]), r, n), a + "e" + i[1]
                            },
                            unformat: function (e) {
                                var r = t._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                                    n = Number(r[0]),
                                    a = Number(r[1]);

                                function o(e, r, n, a) {
                                    var o = t._.correctionFactor(e, r),
                                        i = e * o * (r * o) / (o * o);
                                    return i
                                }
                                return a = t._.includes(e, "e-") ? a *= -1 : a, t._.reduce([n, Math.pow(10, a)], o, 1)
                            }
                        })
                    }(),
                    function () {
                        t.register("format", "ordinal", {
                            regexps: {
                                format: /(o)/
                            },
                            format: function (e, r, n) {
                                var a, o = t.locales[t.options.currentLocale],
                                    i = t._.includes(r, " o") ? " " : "";
                                return r = r.replace(/\s?o/, ""), i += o.ordinal(e), a = t._.numberToFormat(e, r, n), a + i
                            }
                        })
                    }(),
                    function () {
                        t.register("format", "percentage", {
                            regexps: {
                                format: /(%)/,
                                unformat: /(%)/
                            },
                            format: function (e, r, n) {
                                var a, o = t._.includes(r, " %") ? " " : "";
                                return t.options.scalePercentBy100 && (e *= 100), r = r.replace(/\s?\%/, ""), a = t._.numberToFormat(e, r, n), t._.includes(a, ")") ? (a = a.split(""), a.splice(-1, 0, o + "%"), a = a.join("")) : a = a + o + "%", a
                            },
                            unformat: function (e) {
                                var r = t._.stringToNumber(e);
                                return t.options.scalePercentBy100 ? .01 * r : r
                            }
                        })
                    }(),
                    function () {
                        t.register("format", "time", {
                            regexps: {
                                format: /(:)/,
                                unformat: /(:)/
                            },
                            format: function (t, e, r) {
                                var n = Math.floor(t / 60 / 60),
                                    a = Math.floor((t - 60 * n * 60) / 60),
                                    o = Math.round(t - 60 * n * 60 - 60 * a);
                                return n + ":" + (a < 10 ? "0" + a : a) + ":" + (o < 10 ? "0" + o : o)
                            },
                            unformat: function (t) {
                                var e = t.split(":"),
                                    r = 0;
                                return 3 === e.length ? (r += 60 * Number(e[0]) * 60, r += 60 * Number(e[1]), r += Number(e[2])) : 2 === e.length && (r += 60 * Number(e[0]), r += Number(e[1])), Number(r)
                            }
                        })
                    }(), t
            }))
        },
        "0786": function (t, e, r) {},
        "13cf": function (t, e, r) {
            "use strict";
            var n = r("a09b"),
                a = r("bfc3").find,
                o = r("c119"),
                i = r("c1e5"),
                s = "find",
                c = !0,
                u = i(s);
            s in [] && Array(1)[s]((function () {
                c = !1
            })), n({
                target: "Array",
                proto: !0,
                forced: c || !u
            }, {
                find: function (t) {
                    return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), o(s)
        },
        3283: function (t, e, r) {},
        "4b15": function (t, e, r) {
            "use strict";
            r("9d18")
        },
        "78e0": function (t, e, r) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            r.d(e, "a", (function () {
                return n
            }))
        },
        "7b50": function (t, e, r) {
            "use strict";
            r.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("b-tabs", {
                        attrs: {
                            pills: "",
                            align: "center"
                        },
                        on: {
                            "activate-tab": t.activateTab
                        },
                        model: {
                            value: t.tabIndex,
                            callback: function (e) {
                                t.tabIndex = e
                            },
                            expression: "tabIndex"
                        }
                    }, [r("b-tab", {
                        attrs: {
                            title: "V1"
                        }
                    }, [r("farm1")], 1), r("b-tab", {
                        attrs: {
                            title: "V2"
                        }
                    }, [r("farm2")], 1)], 1)], 1)
                },
                a = [],
                o = function () {
                    var t = this,
                        e = this,
                        r = e.$createElement,
                        n = e._self._c || r;
                    return n("div", [e._l(e.alertList, (function (t) {
                        return n("b-alert", {
                            key: t.id,
                            staticClass: "mt-0",
                            attrs: {
                                show: "",
                                dismissible: "",
                                fade: "",
                                variant: t.theme
                            }
                        }, [n("div", {
                            staticClass: "alert-body"
                        }, [n("span", [e._v(e._s(t.content))])])])
                    })), n("b-alert", {
                        staticClass: "mt-0",
                        attrs: {
                            show: "",
                            dismissible: "",
                            fade: "",
                            variant: "success"
                        }
                    }, [n("div", {
                        staticClass: "alert-body"
                    }, [n("span", [e._v(" Invite Your Friends. Earn ZOO Rewards. "), n("b-link", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function () {
                                t.$router.push("/referral")
                            }
                        }
                    }, [e._v(" https://zoogame.app/#/referral ")])], 1)])]), n("top-statistics", {
                        attrs: {
                            "total-staked": e.statistics.totalStaked,
                            "daily-rewards": 0,
                            "pending-rewards": e.statistics.pendingRewards,
                            "all-my-keys": e.statistics.allMyKeys,
                            "my-total-staked": e.statistics.myTotalStaked
                        },
                        on: {
                            finish: e.finish
                        }
                    }), n("b-row", e._l(e.farms, (function (t, r) {
                        return n("b-col", {
                            key: r,
                            attrs: {
                                sm: "12",
                                md: "6",
                                lg: "4"
                            }
                        }, [n("b-card", {
                            staticClass: "position-relative",
                            attrs: {
                                "no-body": ""
                            }
                        }, [n("b-overlay", {
                            attrs: {
                                show: t.disable,
                                "no-wrap": ""
                            }
                        }), t.biswap ? n("div", {
                            staticClass: "biswap-bg"
                        }) : e._e(), n("b-card-body", {
                            staticStyle: {
                                position: "relative"
                            }
                        }, [n("div", {
                            staticClass: "d-flex justify-content-between"
                        }, [t.isLpToken ? n("b-avatar-group", {
                            attrs: {
                                size: "50px"
                            }
                        }, [n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.token.symbol,
                                src: "/tokens/" + t.token.symbol.toLowerCase() + ".png"
                            }
                        }), n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.quoteToken.symbol,
                                variant: "primary",
                                src: "/tokens/" + t.quoteToken.symbol.toLowerCase() + ".png"
                            }
                        })], 1) : n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.token.symbol,
                                variant: "primary",
                                size: "50px",
                                src: "/tokens/" + t.token.symbol.toLowerCase() + ".png"
                            }
                        }), n("div", {
                            staticClass: "text-right"
                        }, [n("h4", {
                            staticClass: "d-flex align-items-center justify-content-end"
                        }, [n("span", {
                            staticClass: "mr-50"
                        }, [e._v(e._s(t.lpSymbol))]), t.biswap ? n("img", {
                            staticClass: "platform",
                            attrs: {
                                src: "/tokens/biswap.png"
                            }
                        }) : t.isLpToken ? n("img", {
                            staticClass: "platform",
                            attrs: {
                                src: "/tokens/pancake.png"
                            }
                        }) : "event" === t.type ? n("span") : n("img", {
                            staticClass: "platform venus",
                            attrs: {
                                src: "/tokens/venus.png"
                            }
                        })]), n("p", {
                            staticClass: "mb-0"
                        }, ["event" !== t.type ? n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "info"
                            }
                        }, [e._v(" " + e._s(t.allocPoint) + "X ")]) : e._e(), n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" APY: " + e._s(t.apy || 0) + " % ")]), r < 3 ? n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" APR: " + e._s(t.apr || 0) + " % ")]) : e._e()], 1), n("p", {
                            staticClass: "mt-0"
                        })])], 1), n("p", {
                            staticClass: "d-flex justify-content-between mt-2"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-success"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold d-block text-nowrap"
                        }, [e._v(e._s(e.$t("FarmPage.TotalStaked")))])]), n("span", [e._v(e._s(t.totalStaked && t.totalStaked.toLocaleString() || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-primary"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.TotalPrice")))])]), n("span", [e._v("$ " + e._s(t.totalPrice && t.totalPrice.toLocaleString() || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-danger"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.MyStaked")))])]), n("span", [e._v(e._s(t.userInfo && t.userInfo.amount || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-warning"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.Balance")))])]), n("span", [e._v(e._s(t.balance || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-info"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.Rewards")))])]), n("span", [n("b-badge", {
                            directives: [{
                                name: "auth-click",
                                rawName: "v-auth-click",
                                value: function () {
                                    e.getKey(t, r)
                                },
                                expression: "()=>{getKey(farm,index)}"
                            }],
                            staticClass: "cursor-pointer",
                            attrs: {
                                pill: "",
                                variant: "info"
                            }
                        }, [e._v(" " + e._s(t.pendingKeys) + " " + e._s("event" === t.type ? t.earnToken : "KEY") + " ")])], 1)]), e.defaultAccount ? n("b-row", {
                            staticClass: "mt-1"
                        }, [n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, ["0" === t.allowance && "BNB" !== t.lpSymbol ? n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "warning",
                                pill: "",
                                block: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.approve(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "UnlockIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Approve")) + " ")], 1) : n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: "",
                                disabled: e.blockNumber > t.endBlock
                            },
                            on: {
                                click: function (r) {
                                    return e.deposit(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "ArrowDownIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Deposit")) + " ")], 1)], 1), n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.withdraw(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "ArrowUpIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Withdraw")) + " ")], 1)], 1)], 1) : n("div", {
                            staticClass: "d-flex justify-content-around mt-2"
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (t) {
                                    return e.$store.commit("farm/setConnectWalletDialogVisible", !0)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("Unlock")) + " ")])], 1)], 1), n("div"), e.defaultAccount && t.isLpToken ? n("b-card-footer", [t.biswap ? n("b-row", [n("b-col", [n("a", {
                            attrs: {
                                href: t.biswapLink,
                                target: "_blank"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            }
                        }, [e._v(" Add Liquidity On Biswap ")])], 1)])], 1) : n("b-row", {
                            staticClass: "mt-0 mb-0"
                        }, [n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.swap(t)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("FarmPage.SwapBtn")) + " ")])], 1), n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.addLiquidity(t)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("FarmPage.AddLiquidityBtn")) + " ")])], 1)], 1)], 1) : e.defaultAccount && "event" === t.type ? n("b-card-footer", [n("h5", {
                            staticClass: "pt-1 text-center"
                        }, [e._v("Start block " + e._s(e._f("formatNumber")(t.startBlock)) + " ~ End block " + e._s(e._f("formatNumber")(t.endBlock)))])]) : e._e()], 1)], 1)
                    })), 1), e.showGetKeyDialog ? n("get-key-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showGetKeyDialog = !1
                            }
                        }
                    }) : e._e(), e.showDepositDialog ? n("deposit-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showDepositDialog = !1
                            }
                        }
                    }) : e._e(), e.showWithdrawDialog ? n("withdraw-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showWithdrawDialog = !1
                            }
                        }
                    }) : e._e(), e.showSwapDialog ? n("swap-dialog", {
                        attrs: {
                            farm: e.currentFarm,
                            "show-index": e.showSwapDialogIndex
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showSwapDialog = !1
                            }
                        }
                    }) : e._e(), e.stakeDialogShow ? n("stake-dialog", {
                        attrs: {
                            farm: e.stakeFarmItem
                        },
                        on: {
                            close: function (t) {
                                e.stakeDialogShow = !1
                            }
                        }
                    }) : e._e()], 2)
                },
                i = [],
                s = r("190b"),
                c = r("99a5"),
                u = r("1c03"),
                l = (r("6a61"), r("6540"), r("402f"), r("2db5"), r("6ab7"), r("7478"), r("13cf"), r("894e")),
                f = r("19f5"),
                d = r("cf6b"),
                p = r("7032"),
                m = r("bf32"),
                h = r("83b8"),
                b = r("e57c"),
                v = [{
                    pid: 7,
                    lpSymbol: "ZOO-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x76743679a2352364e48bdd977034a8964b3daaf3",
                        56: "0x85e5889Fc3Ed01B4e8B56bbc717D7643294d2c31"
                    },
                    token: b["a"].zoo,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 8,
                    lpSymbol: "ZOO-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x147aaf3a97b9ec640ee0ed3dad5aa2b46fa9eecb",
                        56: "0xd5d00b0ad40ff6d8c1a6f7e72f185b6fb3c3fd1f"
                    },
                    token: b["a"].zoo,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 7,
                    lpSymbol: "Stake ZOO Earn Cake",
                    decimal: 18,
                    isLpToken: !1,
                    type: "event",
                    earnToken: "CAKE",
                    earnTotal: 1500,
                    lpAddresses: {
                        97: "0x1D229B958D5DDFca92146585a8711aECbE56F095",
                        56: "0x1D229B958D5DDFca92146585a8711aECbE56F095"
                    },
                    token: b["a"].zoo,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 15,
                    lpSymbol: "ZOO-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    biswap: !0,
                    lpAddresses: {
                        97: "0x63a3f3a8956ace0107d72acd1b6e5dc6c0d007f3",
                        56: "0x63a3f3a8956ace0107d72acd1b6e5dc6c0d007f3"
                    },
                    token: b["a"].zoo,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0,
                    biswapLink: "https://exchange.biswap.org/#/add/ETH/0x1D229B958D5DDFca92146585a8711aECbE56F095"
                }, {
                    pid: 16,
                    lpSymbol: "BSW-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    biswap: !0,
                    lpAddresses: {
                        97: "0x46492b26639df0cda9b2769429845cb991591e0a",
                        56: "0x46492b26639df0cda9b2769429845cb991591e0a"
                    },
                    token: b["a"].bsw,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0,
                    biswapLink: "https://exchange.biswap.org/#/add/ETH/0x965f527d9159dce6288a2219db51fc6eef120dd1"
                }, {
                    pid: 5,
                    lpSymbol: "Stake ZOO Earn BABY",
                    decimal: 18,
                    isLpToken: !1,
                    type: "event",
                    earnToken: "BABY",
                    earnTotal: 19600,
                    lpAddresses: {
                        97: "0x1D229B958D5DDFca92146585a8711aECbE56F095",
                        56: "0x1D229B958D5DDFca92146585a8711aECbE56F095"
                    },
                    token: b["a"].zoo,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 4,
                    lpSymbol: "DOGE",
                    decimal: 8,
                    isLpToken: !1,
                    lpAddresses: {
                        97: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
                        56: "0xba2ae424d960c26247dd6c32edc70b295c744c43"
                    },
                    token: b["a"].doge,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 0,
                    lpSymbol: "BUSD-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x26e364cbf4b51927baa0318ba5fc26f26a1b1658",
                        56: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16"
                    },
                    token: b["a"].busd,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 1,
                    lpSymbol: "ETH-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0xef13cd5057ecddde3fbfd904b166b301c53dc562",
                        56: "0x74e4716e431f45807dcf19f284c7aa99f18a4fbc"
                    },
                    token: b["a"].eth,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 2,
                    lpSymbol: "USDT-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x8052e4189b66a3ebd86cee3ca71acdccbf91867a",
                        56: "0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
                    },
                    token: b["a"].usdt,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 6,
                    lpSymbol: "BTCB-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x7652d5ce3e1d5d4c99c4e3768cbcd377561e50e5",
                        56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082"
                    },
                    token: b["a"].btcb,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 4,
                    lpSymbol: "DAI-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x2c6df3f0714b9cfa07356bc22811cc3914a00b33",
                        56: "0x66fdb2eccfb58cf098eaa419e5efde841368e489"
                    },
                    token: b["a"].dai,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 5,
                    lpSymbol: "USDC-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x9bf7b56ca499e690af894627635450fa05ff3ecc",
                        56: "0x2354ef4df11afacb85a5c7f98b624072eccddbb1"
                    },
                    token: b["a"].usdc,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 3,
                    lpSymbol: "BUSD-USDT LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x2bb43c21d061d7393aeff9458d0b8940fc2c3f6c",
                        56: "0x7efaef62fddcca950418312c6c91aef321375a00"
                    },
                    token: b["a"].busd,
                    quoteToken: b["a"].usdt,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 0,
                    lpSymbol: "BNB",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
                        56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                    },
                    token: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 1,
                    lpSymbol: "USDC",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x16227D60f7a0e586C66B005219dfc887D13C9531",
                        56: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                    },
                    token: b["a"].usdc,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 2,
                    lpSymbol: "BUSD",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                    },
                    token: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 3,
                    lpSymbol: "USDT",
                    decimal: 18,
                    isLpToken: !1,
                    lpAddresses: {
                        97: "0xa11c8d9dc9b66e209ef60f0c8d969d3cd988782c",
                        56: "0x55d398326f99059ff775485246999027b3197955"
                    },
                    token: b["a"].usdt,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }],
                y = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("b-card", {
                        staticClass: "card-statistics p-relative",
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("div", {
                        staticClass: "halloween"
                    }), n("a", {
                        staticClass: "certik",
                        attrs: {
                            href: "https://www.certik.org/projects/zoocrypto",
                            target: "_blank"
                        }
                    }, [n("b-img", {
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            src: r("fdb9")
                        }
                    })], 1), n("b-card-header", [n("b-card-title", [t._v(t._s(t.$t("Components.TopStatistics.Statistics")))])], 1), n("b-card-body", {
                        staticClass: "statistics-body"
                    }, [n("b-row", [n("b-col", {
                        staticClass: "mb-2 mb-xl-0",
                        attrs: {
                            md: "3",
                            sm: "6"
                        }
                    }, [n("b-media", {
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("b-media-aside", {
                        staticClass: "mr-2"
                    }, [n("b-avatar", {
                        attrs: {
                            size: "48",
                            variant: "light-primary"
                        }
                    }, [n("feather-icon", {
                        attrs: {
                            size: "24",
                            icon: "TrendingUpIcon"
                        }
                    })], 1)], 1), n("b-media-body", {
                        staticClass: "my-auto"
                    }, [0 === t.totalStaked ? n("b-spinner") : n("h4", {
                        staticClass: "font-weight-bolder mb-0"
                    }, [t._v("$ " + t._s(t.totalStaked.toLocaleString()))]), n("b-card-text", {
                        staticClass: "font-small-3 mb-0"
                    }, [t._v(t._s(t.$t("Components.TopStatistics.TotalStaked")))])], 1)], 1)], 1), n("b-col", {
                        staticClass: "mb-2 mb-xl-0",
                        attrs: {
                            md: "3",
                            sm: "6"
                        }
                    }, [n("b-media", {
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("b-media-aside", {
                        staticClass: "mr-2"
                    }, [n("b-avatar", {
                        attrs: {
                            size: "48",
                            variant: "light-info"
                        }
                    }, [n("feather-icon", {
                        attrs: {
                            size: "24",
                            icon: "ActivityIcon"
                        }
                    })], 1)], 1), n("b-media-body", {
                        staticClass: "my-auto"
                    }, [0 === t.dailyRewards && "v2" === t.version ? n("b-spinner") : n("h4", {
                        staticClass: "font-weight-bolder mb-0"
                    }, [t._v(t._s(t.dailyRewards) + " KEYS")]), n("b-card-text", {
                        staticClass: "font-small-3 mb-0"
                    }, [t._v(t._s(t.$t("Components.TopStatistics.DailyRewards")))])], 1)], 1)], 1), n("b-col", {
                        staticClass: "mb-2 mb-xl-0",
                        attrs: {
                            md: "3",
                            sm: "6"
                        }
                    }, [n("b-media", {
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("b-media-aside", {
                        staticClass: "mr-2"
                    }, [n("b-avatar", {
                        attrs: {
                            size: "48",
                            variant: "light-danger"
                        }
                    }, [n("feather-icon", {
                        attrs: {
                            size: "24",
                            icon: "AwardIcon"
                        }
                    })], 1)], 1), n("b-media-body", {
                        staticClass: "my-auto"
                    }, [n("h4", {
                        staticClass: "font-weight-bolder mb-0 cursor-pointer",
                        on: {
                            click: t.getAllKey
                        }
                    }, [t.getting ? n("b-spinner") : n("b-badge", {
                        attrs: {
                            variant: "light-primary"
                        }
                    }, [t._v(t._s(t.pendingRewards) + " KEYS")])], 1), n("b-card-text", {
                        staticClass: "font-small-3 mb-0"
                    }, [t._v(t._s(t.$t("Components.TopStatistics.PendingRewards")))])], 1)], 1)], 1), n("b-col", {
                        staticClass: "mb-2 mb-xl-0",
                        attrs: {
                            md: "3",
                            sm: "6"
                        }
                    }, [n("b-media", {
                        attrs: {
                            "no-body": ""
                        }
                    }, [n("b-media-aside", {
                        staticClass: "mr-2"
                    }, [n("b-avatar", {
                        attrs: {
                            size: "48",
                            variant: "light-success"
                        }
                    }, [n("feather-icon", {
                        attrs: {
                            size: "24",
                            icon: "KeyIcon"
                        }
                    })], 1)], 1), n("b-media-body", {
                        staticClass: "my-auto"
                    }, [n("h4", {
                        staticClass: "font-weight-bolder mb-0"
                    }, [t._v(t._s(t.allMyKeys))]), n("b-card-text", {
                        staticClass: "font-small-3 mb-0"
                    }, [t._v(t._s(t.$t("Components.TopStatistics.AllMyKeys")))])], 1)], 1)], 1)], 1)], 1)], 1)
                },
                g = [],
                w = (r("d0bf"), {
                    props: {
                        totalStaked: {
                            type: Number,
                            default: 0
                        },
                        myTotalStaked: {
                            type: Number,
                            default: 0
                        },
                        dailyRewards: {
                            type: Number,
                            default: 0
                        },
                        pendingRewards: {
                            type: Number,
                            default: 0
                        },
                        allMyKeys: {
                            type: Number,
                            default: 0
                        },
                        version: {
                            type: String,
                            default: "v1"
                        }
                    },
                    data: function () {
                        return {
                            getting: !1
                        }
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount"])),
                    methods: {
                        getAllKey: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$swal({
                                                title: "Get all rewards",
                                                text: "You will get all the rewards",
                                                confirmButtonText: "Get All Rewards",
                                                customClass: {
                                                    confirmButton: "btn btn-primary"
                                                },
                                                buttonsStyling: !1
                                            });
                                        case 2:
                                            if (r = e.sent, r.value) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return n = "v2" === t.version ? Object(m["r"])() : Object(m["q"])(), e.next = 8, n.estimateGas.getAllKey();
                                        case 8:
                                            a = e.sent, o = a.toNumber(), i = {
                                                gasLimit: 2 * o
                                            }, t.getting = !0, n.getAllKey(i).then(function () {
                                                var e = Object(c["a"])(regeneratorRuntime.mark((function e(r) {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, r.wait();
                                                            case 2:
                                                                t.$NotifySuccess("Get all key success!"), t.$emit("finish");
                                                            case 4:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (e) {
                                                var r = e.data && e.data.message ? e.data.message : e.message;
                                                t.$NotifyError("Error", r)
                                            })).finally((function () {
                                                t.getting = !1
                                            }));
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                }),
                k = w,
                x = (r("d945"), r("4ac2")),
                O = Object(x["a"])(k, y, g, !1, null, "1aa56c11", null),
                S = O.exports,
                P = r("238c"),
                j = r("53a2"),
                D = r("78e0"),
                R = r("b96e"),
                _ = (r("836b"), r("ebe3")),
                A = function () {
                    function t(e, r) {
                        Object(D["a"])(this, t), this.farm = e, this.owner = r
                    }
                    return Object(R["a"])(t, [{
                        key: "allowance",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e = Object(p["a"])(this.farm.lpAddresses), "" !== e) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return r = Object(p["a"])(h["o"]), t.next = 7, Object(m["e"])(e).allowance(this.owner, r);
                                        case 7:
                                            return n = t.sent, this.farm.allowance = n.toString(), t.abrupt("return", this.farm);
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.error("StakePool#allowance", t.t0);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "balanceOf",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, r = Object(p["a"])(this.farm.lpAddresses), "" !== r) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            if ("BNB" === this.farm.lpSymbol) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 7, Object(m["e"])(r).balanceOf(this.owner);
                                        case 7:
                                            return n = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(n, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 12:
                                            return t.next = 14, e.getBalance(this.owner);
                                        case 14:
                                            a = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(a, 18));
                                        case 16:
                                            t.next = 21;
                                            break;
                                        case 18:
                                            t.prev = 18, t.t0 = t["catch"](0), console.error("balanceOf", t.t0);
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 18]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "price",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = Object(p["a"])(this.farm.lpAddresses), !this.farm.isLpToken) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 4, _["a"].getLpPrice(e);
                                        case 4:
                                            this.farm.price = t.sent, t.next = 10;
                                            break;
                                        case 7:
                                            return t.next = 9, _["a"].getTokenPrice(e);
                                        case 9:
                                            this.farm.price = t.sent;
                                        case 10:
                                            return t.abrupt("return", this.farm.price);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "userInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pancakeUserInfo());
                                        case 4:
                                            return t.abrupt("return", this.venusUserInfo());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pendingPancakeKey());
                                        case 4:
                                            return t.abrupt("return", this.pendingVenusKey());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "poolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pancakePoolInfo());
                                        case 4:
                                            return t.abrupt("return", this.venusPoolInfo());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pancakeUserInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().pancakeUserInfo(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("pancakeUserInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingPancakeKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().pendingPancakeKey(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 8:
                                            t.prev = 8, t.t0 = t["catch"](0), console.error("pendingPancakeKey", t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pancakePoolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().pancakePoolInfo(this.farm.pid);
                                        case 3:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.lpSupply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("pancakePoolInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "venusUserInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().venusUserInfo(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("venusUserInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingVenusKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().pendingVenusKey(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 8:
                                            t.prev = 8, t.t0 = t["catch"](0), console.error("pendingVenusKey", t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "venusPoolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["q"])().venusPoolInfo(this.farm.pid);
                                        case 3:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.tokenSupply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("venusPoolInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "apy",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e, r, n) {
                                var a, o, i;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            a = e * (this.farm.allocPoint / r), this.farm.farmKeyRevenue = a * n, o = this.farm.farmKeyRevenue / (0 === this.farm.totalPrice ? 1 : this.farm.totalPrice), i = Math.pow(1 + o, 365) - 1, this.farm.ratio = j["a"].toFixed(o), this.farm.apy = i === 1 / 0 || i >= 1e8 ? "99999999+" : Math.floor(100 * i), this.farm.apr = Math.floor(this.farm.farmKeyRevenue / this.farm.totalPrice * 365 * 100);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e, r, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                C = function () {
                    function t(e, r) {
                        Object(D["a"])(this, t), this.farm = e, this.owner = r
                    }
                    return Object(R["a"])(t, [{
                        key: "allowance",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e = Object(p["a"])(this.farm.lpAddresses), "" !== e) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return r = Object(p["a"])(h["h"]), t.next = 7, Object(m["e"])(e).allowance(this.owner, r);
                                        case 7:
                                            return n = t.sent, this.farm.allowance = n.toString(), t.abrupt("return", this.farm);
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.error("EventPool#allowance", t.t0);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "balanceOf",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                                var r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, r = Object(p["a"])(this.farm.lpAddresses), "" !== r) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return t.next = 6, Object(m["e"])(r).balanceOf(this.owner);
                                        case 6:
                                            return n = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(n, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.error("balanceOf", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "price",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = Object(p["a"])(this.farm.lpAddresses), t.next = 3, _["a"].getTokenPrice(e);
                                        case 3:
                                            return this.farm.price = t.sent, t.abrupt("return", this.farm.price);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "userInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().userInfo(this.farm.pid, this.owner);
                                        case 2:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().pendingReward(this.farm.pid, this.owner);
                                        case 2:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "poolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().poolInfo(this.farm.pid);
                                        case 2:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.supply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), this.farm.startBlock = e.startBlock.toNumber(), this.farm.endBlock = e.endBlock.toNumber(), t.abrupt("return", this.farm);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "apy",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n, a, o, i, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.price();
                                        case 2:
                                            return e = t.sent, r = this.farm.earnToken.toLowerCase(), n = Object(p["a"])(b["a"][r].address), t.next = 7, _["a"].getTokenPrice(n);
                                        case 7:
                                            a = t.sent, o = this.farm.earnTotal, i = 3 * (this.farm.endBlock - this.farm.startBlock) / 86400, s = Math.pow(1 + a * o / i / (this.farm.totalStaked * e), 365) - 1, this.farm.apy = s === 1 / 0 || s >= 1e8 ? "99999999+" : Math.floor(100 * s), this.farm.apr = Math.floor(a * o / i / (this.farm.totalStaked * e) * 365 * 100);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                I = r("a13e"),
                T = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticClass: "box"
                    }, [r("b-modal", {
                        ref: "stakeModal",
                        attrs: {
                            title: "xZOO Booster",
                            "hide-footer": "",
                            "no-close-on-backdrop": ""
                        },
                        on: {
                            hidden: t.hiddenModal
                        }
                    }, [r("b-tabs", {
                        attrs: {
                            align: "center"
                        },
                        model: {
                            value: t.tabIndex,
                            callback: function (e) {
                                t.tabIndex = e
                            },
                            expression: "tabIndex"
                        }
                    }, [r("b-tab", {
                        attrs: {
                            title: "Staked"
                        }
                    }, [0 === t.tabIndex ? r("stake", {
                        attrs: {
                            farm: t.farm
                        },
                        on: {
                            finish: t.finish
                        }
                    }) : t._e()], 1), r("b-tab", {
                        attrs: {
                            title: "Transfer"
                        }
                    }, [1 === t.tabIndex ? r("transfer", {
                        attrs: {
                            farm: t.farm
                        },
                        on: {
                            finish: t.finish
                        }
                    }) : t._e()], 1), r("b-tab", {
                        attrs: {
                            title: "Withdraw"
                        }
                    }, [2 === t.tabIndex ? r("withdraw", {
                        attrs: {
                            farm: t.farm
                        },
                        on: {
                            finish: t.finish
                        }
                    }) : t._e()], 1)], 1)], 1)], 1)
                },
                F = [],
                E = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("b-card", [r("h4", {
                        staticClass: "mb-2"
                    }, [t._v("Booster")]), r("div", {
                        staticClass: "pt-2 pl-2 pr-2"
                    }, [r("vue-slider", {
                        staticClass: "mb-3",
                        attrs: {
                            adsorb: !0,
                            data: t.data,
                            marks: !0,
                            tooltip: "always",
                            direction: "ltr"
                        },
                        model: {
                            value: t.speed,
                            callback: function (e) {
                                t.speed = e
                            },
                            expression: "speed"
                        }
                    })], 1), r("h4", {
                        staticClass: "mt-2 mb-2"
                    }, [t._v("Duration")]), t._l(t.list, (function (e, n) {
                        return r("div", {
                            key: n,
                            staticClass: "mt-1 d-flex align-items-center"
                        }, [r("div", {
                            staticStyle: {
                                width: "80px"
                            }
                        }, [t._v(t._s(e.type))]), r("b-button-group", {
                            attrs: {
                                size: "sm"
                            }
                        }, t._l(e.list, (function (e) {
                            return r("b-button", {
                                directives: [{
                                    name: "ripple",
                                    rawName: "v-ripple.400",
                                    value: "rgba(113, 102, 240, 0.15)",
                                    expression: "'rgba(113, 102, 240, 0.15)'",
                                    modifiers: {
                                        400: !0
                                    }
                                }],
                                key: e.lockedTimeIndex,
                                staticStyle: {
                                    width: "60px"
                                },
                                attrs: {
                                    variant: e.lockedTimeIndex === t.lockedTimeIndex ? "primary" : "outline-primary"
                                },
                                on: {
                                    click: function (r) {
                                        return t.selectLockedTimeIndex(e)
                                    }
                                }
                            }, [t._v(" " + t._s(e.name) + " ")])
                        })), 1)], 1)
                    })), r("div", {
                        staticClass: "mt-2 w-100"
                    }, [r("h3", {
                        staticClass: "text-center"
                    }, [t._v(" " + t._s(t.needXZoo) + " xZOO = " + t._s(t.needZoo) + " ZOO ")]), r("b-input-group", [r("b-input-group-prepend", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [t._v(" Custom ZOO ")]), r("b-form-input", {
                        attrs: {
                            type: "number",
                            placeholder: "0"
                        },
                        on: {
                            input: t.inputLockZoo
                        },
                        model: {
                            value: t.lockZoo,
                            callback: function (e) {
                                t.lockZoo = e
                            },
                            expression: "lockZoo"
                        }
                    }), r("b-input-group-append", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [r("b-badge", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            variant: "light-primary"
                        },
                        on: {
                            click: function (e) {
                                t.lockZoo = t.zooBalance
                            }
                        }
                    }, [t._v(" Max ")])], 1)], 1), t.allowanceBalance > 0 ? r("b-button", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple.400",
                            value: "rgba(113, 102, 240, 0.15)",
                            expression: "'rgba(113, 102, 240, 0.15)'",
                            modifiers: {
                                400: !0
                            }
                        }],
                        staticClass: "mt-2",
                        attrs: {
                            variant: "primary",
                            block: "",
                            pill: "",
                            disabled: t.loading || t.lockZoo > t.zooBalance || 0 === t.lockZoo
                        },
                        on: {
                            click: t.stake
                        }
                    }, [r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "mr-25",
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Stake " + t._s(t.lockZoo) + " ZOO ")], 1) : r("b-button", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple.400",
                            value: "rgba(113, 102, 240, 0.15)",
                            expression: "'rgba(113, 102, 240, 0.15)'",
                            modifiers: {
                                400: !0
                            }
                        }],
                        staticClass: "mt-2",
                        attrs: {
                            variant: "warning",
                            block: "",
                            disabled: t.loading
                        },
                        on: {
                            click: t.approve
                        }
                    }, [r("feather-icon", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.loading,
                            expression: "!loading"
                        }],
                        attrs: {
                            icon: "UnlockIcon"
                        }
                    }), r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "mr-25",
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Approve ")], 1)], 1)], 2)], 1)
                },
                L = [],
                N = r("7bff"),
                U = r.n(N),
                B = {
                    name: "Stake",
                    components: {
                        VueSlider: U.a
                    },
                    directives: {
                        "b-tooltip": l["a"],
                        Ripple: f["a"]
                    },
                    props: ["farm"],
                    data: function () {
                        return {
                            data: ["1X", "1.5X", "2X", "2.5X", "3X"],
                            currentSpeed: 1,
                            speed: "2X",
                            needZoo: 0,
                            needXZoo: 0,
                            myStakedXZoo: 0,
                            totalStakedXZoo: 0,
                            loading: !1,
                            list: [{
                                type: "Short",
                                list: [{
                                    name: "7 D",
                                    lockedTimeIndex: 0,
                                    xzooPerZoo: .1
                                }, {
                                    name: "14 D",
                                    lockedTimeIndex: 1,
                                    xzooPerZoo: .205
                                }]
                            }, {
                                type: "Medium",
                                list: [{
                                    name: "1 M",
                                    lockedTimeIndex: 2,
                                    xzooPerZoo: .42
                                }, {
                                    name: "3 M",
                                    lockedTimeIndex: 3,
                                    xzooPerZoo: 1.28
                                }, {
                                    name: "6 M",
                                    lockedTimeIndex: 4,
                                    xzooPerZoo: 2.54
                                }]
                            }, {
                                type: "Long",
                                list: [{
                                    name: "1 Y",
                                    lockedTimeIndex: 5,
                                    xzooPerZoo: 5
                                }, {
                                    name: "2 Y",
                                    lockedTimeIndex: 6,
                                    xzooPerZoo: 10
                                }, {
                                    name: "3 Y",
                                    lockedTimeIndex: 7,
                                    xzooPerZoo: 15
                                }]
                            }],
                            lockedTimeIndex: 0,
                            xzooPerZoo: .1,
                            zooBalance: 0,
                            allowanceBalance: 0,
                            lockZoo: ""
                        }
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice"])),
                    watch: {
                        speed: function (t) {
                            this.calcNeedXZoo(t)
                        }
                    },
                    mounted: function () {
                        this.init()
                    },
                    methods: {
                        init: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Promise.all([t.getZooBalance(), t.allowance()]);
                                        case 2:
                                            return e.next = 4, t.calcNeedXZoo(t.speed);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        selectLockedTimeIndex: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e.lockedTimeIndex = t.lockedTimeIndex, e.xzooPerZoo = t.xzooPerZoo, r.next = 4, e.calcNeedXZoo(e.speed);
                                        case 4:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        getZooBalance: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            Object(m["t"])().balanceOf(t.defaultAccount).then((function (e) {
                                                t.zooBalance = j["a"].toFixed(P["a"].utils.formatUnits(e, b["a"].zoo.decimals))
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        approve: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.loading = !0, e.prev = 1, r = Object(p["a"])(h["q"]), e.next = 5, Object(m["t"])().approve(r, P["a"].constants.MaxUint256);
                                        case 5:
                                            return n = e.sent, e.next = 8, n.wait();
                                        case 8:
                                            e.next = 14;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](1), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 14:
                                            return e.next = 16, t.allowance();
                                        case 16:
                                            t.loading = !1;
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 10]
                                ])
                            })))()
                        },
                        allowance: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = Object(p["a"])(h["q"]), e.next = 3, Object(m["t"])().allowance(t.defaultAccount, r);
                                        case 3:
                                            n = e.sent, t.allowanceBalance = n.toString();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        stake: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.loading = !0, r = t.farm.xzooPid, n = t.lockedTimeIndex, a = P["a"].utils.parseUnits(t.lockZoo.toString(), b["a"].zoo.decimals), e.next = 7, Object(m["s"])().stake(r, n, a);
                                        case 7:
                                            return o = e.sent, e.next = 10, o.wait();
                                        case 10:
                                            t.$emit("finish", !0), e.next = 17;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), i = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === i.indexOf("User denied transaction signature.") && t.$NotifyError("Error", i);
                                        case 17:
                                            t.loading = !1;
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13]
                                ])
                            })))()
                        },
                        calcNeedXZoo: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                var n, a, o, i, s;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            if (!(e.farm.totalStakedXZoo <= 0)) {
                                                r.next = 4;
                                                break
                                            }
                                            return e.needXZoo = .001, e.needZoo = e.needXZoo / e.xzooPerZoo, r.abrupt("return");
                                        case 4:
                                            t = t.replaceAll("X", ""), n = e.farm.userInfo.amount, a = e.farm.myStakedXZoo, o = e.farm.totalStaked, i = e.farm.totalStakedXZoo, s = ((t - 1) * n * i - 1 * o * a) / (1 * o - (t - 1) * n), e.needXZoo = Math.floor(1e7 * s) / 1e7, e.needZoo = Math.floor(s / e.xzooPerZoo * 1e7) / 1e7, e.needXZoo = e.needXZoo < 0 ? 0 : e.needXZoo, e.needZoo = e.needZoo < 0 ? 0 : e.needZoo, e.lockZoo = e.needZoo;
                                        case 15:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        inputLockZoo: function (t) {
                            var e = this;
                            t > this.zooBalance && this.$nextTick((function () {
                                e.lockZoo = e.zooBalance
                            }))
                        }
                    }
                },
                M = B,
                z = (r("4b15"), Object(x["a"])(M, E, L, !1, null, null, null)),
                $ = z.exports,
                K = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("b-card", [r("div", {
                        staticClass: "text-center"
                    }, [r("b-button-group", {
                        attrs: {
                            size: "sm"
                        }
                    }, t._l(t.type, (function (e) {
                        return r("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(113, 102, 240, 0.15)",
                                expression: "'rgba(113, 102, 240, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            key: e.index,
                            attrs: {
                                variant: e.index === t.typeIndex ? "primary" : "outline-primary"
                            },
                            on: {
                                click: function (r) {
                                    return t.selectType(e)
                                }
                            }
                        }, [t._v(" " + t._s(e.name) + " ")])
                    })), 1)], 1), r("b-card", {
                        staticClass: "border mt-2"
                    }, [r("div", {
                        staticClass: "d-flex justify-content-center p-1 border"
                    }, [t.fromFarm ? r("select-farm", {
                        attrs: {
                            farm: t.fromFarm
                        }
                    }) : t._e()], 1), r("div", {
                        staticClass: "text-center m-2"
                    }, [r("b-button", {
                        staticClass: "btn-icon rounded-circle",
                        attrs: {
                            variant: "outline-secondary",
                            disabled: !0
                        }
                    }, [r("feather-icon", {
                        attrs: {
                            icon: "ArrowDownIcon"
                        }
                    })], 1)], 1), r("div", {
                        staticClass: "d-flex justify-content-center p-2 border cursor-pointer",
                        on: {
                            click: t.openModal
                        }
                    }, [t.toFarm ? r("select-farm", {
                        attrs: {
                            farm: t.toFarm
                        }
                    }) : t._e()], 1), r("div", {
                        staticClass: "mt-2"
                    }, [r("div", {
                        staticClass: "text-center pb-2"
                    }, [t._v("Amount: " + t._s(t.type[t.typeIndex].xzoo) + " xZOO")]), r("b-form-group", [r("b-input-group", [r("b-input-group-prepend", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [t._v(" xZOO ")]), r("b-form-input", {
                        attrs: {
                            type: "number",
                            placeholder: ""
                        },
                        on: {
                            input: t.changeAmount
                        },
                        model: {
                            value: t.transferAmount,
                            callback: function (e) {
                                t.transferAmount = e
                            },
                            expression: "transferAmount"
                        }
                    }), r("b-input-group-append", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [r("b-badge", {
                        staticClass: "cursor-pointer",
                        attrs: {
                            variant: "light-primary"
                        },
                        on: {
                            click: function (e) {
                                t.transferAmount = t.type[t.typeIndex].xzoo
                            }
                        }
                    }, [t._v(" Max ")])], 1)], 1)], 1)], 1)]), r("b-button", {
                        directives: [{
                            name: "ripple",
                            rawName: "v-ripple.400",
                            value: "rgba(113, 102, 240, 0.15)",
                            expression: "'rgba(113, 102, 240, 0.15)'",
                            modifiers: {
                                400: !0
                            }
                        }],
                        attrs: {
                            block: "",
                            variant: "primary",
                            disabled: t.loading || t.transferAmount <= 0
                        },
                        on: {
                            click: t.confirm
                        }
                    }, [r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        staticClass: "mr-25",
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Confirm ")], 1), r("b-modal", {
                        ref: "modal-XZOOFarm",
                        attrs: {
                            "hide-footer": "",
                            size: "xs"
                        }
                    }, [r("b-list-group", t._l(t.xzooFarmList, (function (e, n) {
                        return r("b-list-group-item", {
                            key: n,
                            staticClass: "d-flex justify-content-between align-items-center cursor-pointer",
                            on: {
                                click: function (r) {
                                    return t.handleSelect(e)
                                }
                            }
                        }, [r("select-farm", {
                            attrs: {
                                farm: e
                            }
                        })], 1)
                    })), 1)], 1)], 1)
                },
                V = [],
                Z = r("07a3"),
                q = (r("cb3c"), function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("div", {
                        staticClass: "d-flex"
                    }, [t.farm.isLpToken ? r("b-avatar-group", {
                        attrs: {
                            size: "25px"
                        }
                    }, [r("b-avatar", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "pull-up",
                        attrs: {
                            title: t.farm.token.symbol,
                            src: "/tokens/" + t.farm.token.symbol.toLowerCase() + ".png"
                        }
                    }), r("b-avatar", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "pull-up",
                        attrs: {
                            title: t.farm.quoteToken.symbol,
                            variant: "primary",
                            src: "/tokens/" + t.farm.quoteToken.symbol.toLowerCase() + ".png"
                        }
                    })], 1) : r("b-avatar", {
                        directives: [{
                            name: "b-tooltip",
                            rawName: "v-b-tooltip.hover",
                            modifiers: {
                                hover: !0
                            }
                        }],
                        staticClass: "pull-up",
                        attrs: {
                            title: t.farm.token.symbol,
                            variant: "primary",
                            size: "25px",
                            src: "/tokens/" + t.farm.token.symbol.toLowerCase() + ".png"
                        }
                    }), r("div", {
                        staticClass: "ml-75 d-flex align-items-center"
                    }, [t._v(t._s(t.farm.lpSymbol))])], 1)])
                }),
                X = [],
                H = {
                    name: "SelectFarm",
                    directives: {
                        "b-tooltip": l["a"],
                        Ripple: f["a"]
                    },
                    props: ["farm"],
                    data: function () {
                        return {}
                    },
                    mounted: function () {},
                    methods: {}
                },
                W = H,
                Y = Object(x["a"])(W, q, X, !1, null, "1fe7337c", null),
                G = Y.exports,
                J = [{
                    pid: 7,
                    xzooPid: 9,
                    lpSymbol: "ZOO-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x76743679a2352364e48bdd977034a8964b3daaf3",
                        56: "0x85e5889Fc3Ed01B4e8B56bbc717D7643294d2c31"
                    },
                    token: b["a"].zoo,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 8,
                    xzooPid: 10,
                    lpSymbol: "ZOO-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x147aaf3a97b9ec640ee0ed3dad5aa2b46fa9eecb",
                        56: "0xd5d00b0ad40ff6d8c1a6f7e72f185b6fb3c3fd1f"
                    },
                    token: b["a"].zoo,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 0,
                    xzooPid: 0,
                    lpSymbol: "BUSD-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x26e364cbf4b51927baa0318ba5fc26f26a1b1658",
                        56: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16"
                    },
                    token: b["a"].busd,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 1,
                    xzooPid: 3,
                    lpSymbol: "ETH-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0xef13cd5057ecddde3fbfd904b166b301c53dc562",
                        56: "0x74e4716e431f45807dcf19f284c7aa99f18a4fbc"
                    },
                    token: b["a"].eth,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 2,
                    xzooPid: 4,
                    lpSymbol: "USDT-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x8052e4189b66a3ebd86cee3ca71acdccbf91867a",
                        56: "0x16b9a82891338f9ba80e2d6970fdda79d1eb0dae"
                    },
                    token: b["a"].usdt,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 6,
                    xzooPid: 8,
                    lpSymbol: "BTCB-BNB LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x7652d5ce3e1d5d4c99c4e3768cbcd377561e50e5",
                        56: "0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082"
                    },
                    token: b["a"].btcb,
                    quoteToken: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 4,
                    xzooPid: 6,
                    lpSymbol: "DAI-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x2c6df3f0714b9cfa07356bc22811cc3914a00b33",
                        56: "0x66fdb2eccfb58cf098eaa419e5efde841368e489"
                    },
                    token: b["a"].dai,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 5,
                    xzooPid: 7,
                    lpSymbol: "USDC-BUSD LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x9bf7b56ca499e690af894627635450fa05ff3ecc",
                        56: "0x2354ef4df11afacb85a5c7f98b624072eccddbb1"
                    },
                    token: b["a"].usdc,
                    quoteToken: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 3,
                    xzooPid: 5,
                    lpSymbol: "BUSD-USDT LP",
                    isLpToken: !0,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x2bb43c21d061d7393aeff9458d0b8940fc2c3f6c",
                        56: "0x7efaef62fddcca950418312c6c91aef321375a00"
                    },
                    token: b["a"].busd,
                    quoteToken: b["a"].usdt,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 0,
                    xzooPid: 1,
                    lpSymbol: "BNB",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
                        56: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
                    },
                    token: b["a"].bnb,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 1,
                    xzooPid: 2,
                    lpSymbol: "USDC",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x16227D60f7a0e586C66B005219dfc887D13C9531",
                        56: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d"
                    },
                    token: b["a"].usdc,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 2,
                    xzooPid: 11,
                    lpSymbol: "BUSD",
                    isLpToken: !1,
                    decimal: 18,
                    lpAddresses: {
                        97: "0x8301f2213c0eed49a7e28ae4c3e91722919b8b47",
                        56: "0xe9e7cea3dedca5984780bafc599bd69add087d56"
                    },
                    token: b["a"].busd,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 3,
                    xzooPid: 12,
                    lpSymbol: "USDT",
                    decimal: 18,
                    isLpToken: !1,
                    lpAddresses: {
                        97: "0xa11c8d9dc9b66e209ef60f0c8d969d3cd988782c",
                        56: "0x55d398326f99059ff775485246999027b3197955"
                    },
                    token: b["a"].usdt,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }, {
                    pid: 4,
                    xzooPid: 13,
                    lpSymbol: "DOGE",
                    decimal: 8,
                    isLpToken: !1,
                    lpAddresses: {
                        97: "0xba2ae424d960c26247dd6c32edc70b295c744c43",
                        56: "0xba2ae424d960c26247dd6c32edc70b295c744c43"
                    },
                    token: b["a"].doge,
                    userInfo: {
                        amount: 0,
                        rewardDebt: 0,
                        amountUSD: 0
                    },
                    balance: "0",
                    allowance: "0",
                    pendingKeys: "0",
                    allocPoint: 0,
                    price: 0,
                    totalPrice: 0,
                    apy: 0
                }],
                Q = {
                    name: "Transfer",
                    components: {
                        SelectFarm: G
                    },
                    directives: {
                        "b-tooltip": l["a"],
                        Ripple: f["a"]
                    },
                    props: ["farm"],
                    data: function () {
                        return {
                            type: [{
                                name: "Short",
                                index: 0,
                                xzoo: 0
                            }, {
                                name: "Mid",
                                index: 1,
                                xzoo: 0
                            }, {
                                name: "Long",
                                index: 2,
                                xzoo: 0
                            }],
                            typeIndex: 0,
                            fromFarm: null,
                            toFarm: null,
                            xzooFarmList: [],
                            farms: J,
                            transferAmount: "",
                            loading: !1
                        }
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice"])),
                    mounted: function () {
                        this.init()
                    },
                    methods: {
                        init: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.fromFarm = t.farms.find((function (e) {
                                                return e.xzooPid === t.farm.xzooPid
                                            })), t.toFarm = t.fromFarm, t.xzooFarmList = t.farms.filter((function (t) {
                                                return void 0 !== t.xzooPid
                                            })), e.next = 5, Promise.all([t.shortLockedUserInfo(), t.mediumLockedUserInfo(), t.longLockedUserInfo()]);
                                        case 5:
                                            r = e.sent, n = Object(Z["a"])(r, 3), a = n[0], o = n[1], i = n[2], t.type[0].xzoo = P["a"].utils.formatUnits(a._XZooAmount, 18), t.type[1].xzoo = P["a"].utils.formatUnits(o._XZooAmount, 18), t.type[2].xzoo = P["a"].utils.formatUnits(i._XZooAmount, 18);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        selectType: function (t) {
                            this.typeIndex = t.index
                        },
                        openModal: function () {
                            this.$refs["modal-XZOOFarm"].show()
                        },
                        shortLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().shortLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        mediumLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().mediumLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        longLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().longLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        handleSelect: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            e.toFarm = t, e.$refs["modal-XZOOFarm"].hide();
                                        case 2:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        changeAmount: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.transferAmount >= t.type[t.typeIndex].xzoo && t.$nextTick(Object(c["a"])(regeneratorRuntime.mark((function e() {
                                                return regeneratorRuntime.wrap((function (e) {
                                                    while (1) switch (e.prev = e.next) {
                                                        case 0:
                                                            t.transferAmount = t.type[t.typeIndex].xzoo;
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            }))));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        confirm: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i, s;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.loading = !0, r = t.fromFarm.xzooPid, n = t.toFarm.xzooPid, a = t.type[t.typeIndex].index, o = P["a"].utils.parseUnits(t.transferAmount.toString(), 18), e.next = 8, Object(m["s"])().moveStake(r, n, a, o);
                                        case 8:
                                            return i = e.sent, e.next = 11, i.wait();
                                        case 11:
                                            return e.next = 13, t.init();
                                        case 13:
                                            t.$emit("finish", !1), e.next = 21;
                                            break;
                                        case 16:
                                            e.prev = 16, e.t0 = e["catch"](0), console.log("transfer fail", e.t0), s = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === s.indexOf("User denied transaction signature.") && t.$NotifyError("Error", s);
                                        case 21:
                                            t.loading = !1;
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 16]
                                ])
                            })))()
                        }
                    }
                },
                tt = Q,
                et = Object(x["a"])(tt, K, V, !1, null, "e96553a0", null),
                rt = et.exports,
                nt = function () {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", [r("b-card", [r("b-table", {
                        staticClass: "mb-0 ",
                        staticStyle: {
                            overflow: "auto"
                        },
                        attrs: {
                            responsive: "xl",
                            items: t.records,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell(duration)",
                            fn: function (e) {
                                return [r("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(amount)",
                            fn: function (e) {
                                return [r("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ZOO ")])]
                            }
                        }, {
                            key: "cell(countdown)",
                            fn: function (e) {
                                return [r("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(withdraw)",
                            fn: function (e) {
                                return [r("span", {
                                    staticClass: "text-nowrap"
                                }, [r("b-button", {
                                    attrs: {
                                        variant: "primary",
                                        disabled: e.value,
                                        size: "sm"
                                    },
                                    on: {
                                        click: function (r) {
                                            return t.unstake(e.item._termIndex)
                                        }
                                    }
                                }, [t._v("withdraw")])], 1)]
                            }
                        }])
                    })], 1)], 1)
                },
                at = [],
                ot = "en",
                it = {},
                st = {};

            function ct() {
                return ot
            }

            function ut(t) {
                ot = t
            }

            function lt(t) {
                return it[t]
            }

            function ft(t) {
                if (!t) throw new Error("No locale data passed");
                it[t.locale] = t, st[t.locale.toLowerCase()] = t.locale
            }

            function dt(t) {
                return it[t] ? t : st[t.toLowerCase()] ? st[t.toLowerCase()] : void 0
            }

            function pt(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = e.localeMatcher || "lookup";
                switch (r) {
                    case "lookup":
                        return mt(t);
                    case "best fit":
                        return mt(t);
                    default:
                        throw new RangeError('Invalid "localeMatcher" option: '.concat(r))
                }
            }

            function mt(t) {
                var e = dt(t);
                if (e) return e;
                var r = t.split("-");
                while (t.length > 1) {
                    r.pop(), t = r.join("-");
                    var n = dt(t);
                    if (n) return n
                }
            }
            var ht = {
                af: function (t) {
                    return 1 == t ? "one" : "other"
                },
                am: function (t) {
                    return t >= 0 && t <= 1 ? "one" : "other"
                },
                ar: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t,
                        n = r && e[0].slice(-2);
                    return 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : n >= 3 && n <= 10 ? "few" : n >= 11 && n <= 99 ? "many" : "other"
                },
                ast: function (t) {
                    var e = String(t).split("."),
                        r = !e[1];
                    return 1 == t && r ? "one" : "other"
                },
                be: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t,
                        n = r && e[0].slice(-1),
                        a = r && e[0].slice(-2);
                    return 1 == n && 11 != a ? "one" : n >= 2 && n <= 4 && (a < 12 || a > 14) ? "few" : r && 0 == n || n >= 5 && n <= 9 || a >= 11 && a <= 14 ? "many" : "other"
                },
                br: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t,
                        n = r && e[0].slice(-1),
                        a = r && e[0].slice(-2),
                        o = r && e[0].slice(-6);
                    return 1 == n && 11 != a && 71 != a && 91 != a ? "one" : 2 == n && 12 != a && 72 != a && 92 != a ? "two" : (3 == n || 4 == n || 9 == n) && (a < 10 || a > 19) && (a < 70 || a > 79) && (a < 90 || a > 99) ? "few" : 0 != t && r && 0 == o ? "many" : "other"
                },
                bs: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = e[1] || "",
                        a = !e[1],
                        o = r.slice(-1),
                        i = r.slice(-2),
                        s = n.slice(-1),
                        c = n.slice(-2);
                    return a && 1 == o && 11 != i || 1 == s && 11 != c ? "one" : a && o >= 2 && o <= 4 && (i < 12 || i > 14) || s >= 2 && s <= 4 && (c < 12 || c > 14) ? "few" : "other"
                },
                ceb: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = e[1] || "",
                        a = !e[1],
                        o = r.slice(-1),
                        i = n.slice(-1);
                    return a && (1 == r || 2 == r || 3 == r) || a && 4 != o && 6 != o && 9 != o || !a && 4 != i && 6 != i && 9 != i ? "one" : "other"
                },
                cs: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1];
                    return 1 == t && n ? "one" : r >= 2 && r <= 4 && n ? "few" : n ? "other" : "many"
                },
                cy: function (t) {
                    return 0 == t ? "zero" : 1 == t ? "one" : 2 == t ? "two" : 3 == t ? "few" : 6 == t ? "many" : "other"
                },
                da: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = Number(e[0]) == t;
                    return 1 != t && (n || 0 != r && 1 != r) ? "other" : "one"
                },
                dsb: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = e[1] || "",
                        a = !e[1],
                        o = r.slice(-2),
                        i = n.slice(-2);
                    return a && 1 == o || 1 == i ? "one" : a && 2 == o || 2 == i ? "two" : a && (3 == o || 4 == o) || 3 == i || 4 == i ? "few" : "other"
                },
                dz: function (t) {
                    return "other"
                },
                ff: function (t) {
                    return t >= 0 && t < 2 ? "one" : "other"
                },
                fr: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1],
                        a = r.slice(-6);
                    return t >= 0 && t < 2 ? "one" : 0 != r && 0 == a && n ? "many" : "other"
                },
                ga: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t;
                    return 1 == t ? "one" : 2 == t ? "two" : r && t >= 3 && t <= 6 ? "few" : r && t >= 7 && t <= 10 ? "many" : "other"
                },
                gd: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t;
                    return 1 == t || 11 == t ? "one" : 2 == t || 12 == t ? "two" : r && t >= 3 && t <= 10 || r && t >= 13 && t <= 19 ? "few" : "other"
                },
                he: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1],
                        a = Number(e[0]) == t,
                        o = a && e[0].slice(-1);
                    return 1 == t && n ? "one" : 2 == r && n ? "two" : n && (t < 0 || t > 10) && a && 0 == o ? "many" : "other"
                },
                is: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = Number(e[0]) == t,
                        a = r.slice(-1),
                        o = r.slice(-2);
                    return n && 1 == a && 11 != o || !n ? "one" : "other"
                },
                ksh: function (t) {
                    return 0 == t ? "zero" : 1 == t ? "one" : "other"
                },
                lt: function (t) {
                    var e = String(t).split("."),
                        r = e[1] || "",
                        n = Number(e[0]) == t,
                        a = n && e[0].slice(-1),
                        o = n && e[0].slice(-2);
                    return 1 == a && (o < 11 || o > 19) ? "one" : a >= 2 && a <= 9 && (o < 11 || o > 19) ? "few" : 0 != r ? "many" : "other"
                },
                lv: function (t) {
                    var e = String(t).split("."),
                        r = e[1] || "",
                        n = r.length,
                        a = Number(e[0]) == t,
                        o = a && e[0].slice(-1),
                        i = a && e[0].slice(-2),
                        s = r.slice(-2),
                        c = r.slice(-1);
                    return a && 0 == o || i >= 11 && i <= 19 || 2 == n && s >= 11 && s <= 19 ? "zero" : 1 == o && 11 != i || 2 == n && 1 == c && 11 != s || 2 != n && 1 == c ? "one" : "other"
                },
                mk: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = e[1] || "",
                        a = !e[1],
                        o = r.slice(-1),
                        i = r.slice(-2),
                        s = n.slice(-1),
                        c = n.slice(-2);
                    return a && 1 == o && 11 != i || 1 == s && 11 != c ? "one" : "other"
                },
                mt: function (t) {
                    var e = String(t).split("."),
                        r = Number(e[0]) == t,
                        n = r && e[0].slice(-2);
                    return 1 == t ? "one" : 0 == t || n >= 2 && n <= 10 ? "few" : n >= 11 && n <= 19 ? "many" : "other"
                },
                pa: function (t) {
                    return 0 == t || 1 == t ? "one" : "other"
                },
                pl: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1],
                        a = r.slice(-1),
                        o = r.slice(-2);
                    return 1 == t && n ? "one" : n && a >= 2 && a <= 4 && (o < 12 || o > 14) ? "few" : n && 1 != r && (0 == a || 1 == a) || n && a >= 5 && a <= 9 || n && o >= 12 && o <= 14 ? "many" : "other"
                },
                pt: function (t) {
                    var e = String(t).split("."),
                        r = e[0];
                    return 0 == r || 1 == r ? "one" : "other"
                },
                ro: function (t) {
                    var e = String(t).split("."),
                        r = !e[1],
                        n = Number(e[0]) == t,
                        a = n && e[0].slice(-2);
                    return 1 == t && r ? "one" : !r || 0 == t || a >= 2 && a <= 19 ? "few" : "other"
                },
                ru: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1],
                        a = r.slice(-1),
                        o = r.slice(-2);
                    return n && 1 == a && 11 != o ? "one" : n && a >= 2 && a <= 4 && (o < 12 || o > 14) ? "few" : n && 0 == a || n && a >= 5 && a <= 9 || n && o >= 11 && o <= 14 ? "many" : "other"
                },
                se: function (t) {
                    return 1 == t ? "one" : 2 == t ? "two" : "other"
                },
                si: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = e[1] || "";
                    return 0 == t || 1 == t || 0 == r && 1 == n ? "one" : "other"
                },
                sl: function (t) {
                    var e = String(t).split("."),
                        r = e[0],
                        n = !e[1],
                        a = r.slice(-2);
                    return n && 1 == a ? "one" : n && 2 == a ? "two" : n && (3 == a || 4 == a) || !n ? "few" : "other"
                }
            };
            ht.as = ht.am, ht.az = ht.af, ht.bg = ht.af, ht.bn = ht.am, ht.ca = ht.ast, ht.ce = ht.af, ht.chr = ht.af, ht.de = ht.ast, ht.ee = ht.af, ht.el = ht.af, ht.en = ht.ast, ht.es = ht.af, ht.et = ht.ast, ht.eu = ht.af, ht.fa = ht.am, ht.fi = ht.ast, ht.fil = ht.ceb, ht.fo = ht.af, ht.fur = ht.af, ht.fy = ht.ast, ht.gl = ht.ast, ht.gu = ht.am, ht.ha = ht.af, ht.hi = ht.am, ht.hr = ht.bs, ht.hsb = ht.dsb, ht.hu = ht.af, ht.hy = ht.ff, ht.ia = ht.ast, ht.id = ht.dz, ht.ig = ht.dz, ht.it = ht.ast, ht.ja = ht.dz, ht.jgo = ht.af, ht.jv = ht.dz, ht.ka = ht.af, ht.kea = ht.dz, ht.kk = ht.af, ht.kl = ht.af, ht.km = ht.dz, ht.kn = ht.am, ht.ko = ht.dz, ht.ku = ht.af, ht.ky = ht.af, ht.lb = ht.af, ht.lkt = ht.dz, ht.lo = ht.dz, ht.ml = ht.af, ht.mn = ht.af, ht.mr = ht.af, ht.ms = ht.dz, ht.my = ht.dz, ht.nb = ht.af, ht.ne = ht.af, ht.nl = ht.ast, ht.nn = ht.af, ht.no = ht.af, ht.or = ht.af, ht.pcm = ht.am, ht.ps = ht.af, ht.rm = ht.af, ht.sah = ht.dz, ht.sd = ht.af, ht.sk = ht.cs, ht.so = ht.af, ht.sq = ht.af, ht.sr = ht.bs, ht.su = ht.dz, ht.sv = ht.ast, ht.sw = ht.ast, ht.ta = ht.af, ht.te = ht.af, ht.th = ht.dz, ht.ti = ht.pa, ht.tk = ht.af, ht.to = ht.dz, ht.tr = ht.af, ht.ug = ht.af, ht.uk = ht.ru, ht.ur = ht.ast, ht.uz = ht.af, ht.vi = ht.dz, ht.wae = ht.af, ht.wo = ht.dz, ht.yi = ht.ast, ht.yo = ht.dz, ht.yue = ht.dz, ht.zh = ht.dz, ht.zu = ht.am;
            var bt = ht;

            function vt(t) {
                return "pt-PT" === t ? t : gt(t)
            }
            var yt = /^([a-z0-9]+)/i;

            function gt(t) {
                var e = t.match(yt);
                if (!e) throw new TypeError("Invalid locale: ".concat(t));
                return e[1]
            }

            function wt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function kt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function xt(t, e, r) {
                return e && kt(t.prototype, e), r && kt(t, r), t
            }
            var Ot = function () {
                function t(e, r) {
                    wt(this, t);
                    var n = t.supportedLocalesOf(e);
                    if (0 === n.length) throw new RangeError("Unsupported locale: " + e);
                    if (r && "cardinal" !== r.type) throw new RangeError('Only "cardinal" "type" is supported');
                    this.$ = bt[vt(n[0])]
                }
                return xt(t, [{
                    key: "select",
                    value: function (t) {
                        return this.$(t)
                    }
                }], [{
                    key: "supportedLocalesOf",
                    value: function (t) {
                        return "string" === typeof t && (t = [t]), t.filter((function (t) {
                            return bt[vt(t)]
                        }))
                    }
                }]), t
            }();

            function St(t) {
                return St = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, St(t)
            }

            function Pt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        Tt(t, e, r[e])
                    }))
                }
                return t
            }

            function jt(t, e) {
                return _t(t) || Rt(t, e) || Dt()
            }

            function Dt() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function Rt(t, e) {
                var r = [],
                    n = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
                        if (r.push(i.value), e && r.length === e) break
                } catch (c) {
                    a = !0, o = c
                } finally {
                    try {
                        n || null == s["return"] || s["return"]()
                    } finally {
                        if (a) throw o
                    }
                }
                return r
            }

            function _t(t) {
                if (Array.isArray(t)) return t
            }

            function At(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Ct(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function It(t, e, r) {
                return e && Ct(t.prototype, e), r && Ct(t, r), t
            }

            function Tt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Ft = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"],
                Et = ["auto", "always"],
                Lt = ["long", "short", "narrow"],
                Nt = ["lookup", "best fit"],
                Ut = function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        At(this, t), Tt(this, "numeric", "always"), Tt(this, "style", "long"), Tt(this, "localeMatcher", "lookup");
                        var n = r.numeric,
                            a = r.style,
                            o = r.styleFallback,
                            i = r.localeMatcher;
                        if (void 0 !== n) {
                            if (Et.indexOf(n) < 0) throw new RangeError('Invalid "numeric" option: '.concat(n));
                            this.numeric = n
                        }
                        if (void 0 !== a) {
                            if (Lt.indexOf(a) < 0 && !o) throw new RangeError('Invalid "style" option: '.concat(a));
                            this.style = a
                        }
                        if (void 0 !== i) {
                            if (Nt.indexOf(i) < 0) throw new RangeError('Invalid "localeMatcher" option: '.concat(i));
                            this.localeMatcher = i
                        }
                        if ("string" === typeof e && (e = [e]), e.push(ct()), this.locale = t.supportedLocalesOf(e, {
                                localeMatcher: this.localeMatcher
                            })[0], !this.locale) throw new Error("No supported locale was found");
                        if (Ot.supportedLocalesOf(this.locale).length > 0 ? this.pluralRules = new Ot(this.locale) : console.warn('"'.concat(this.locale, '" locale is not supported')), "undefined" !== typeof Intl && Intl.NumberFormat ? (this.numberFormat = new Intl.NumberFormat(this.locale), this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem) : this.numberingSystem = "latn", this.locale = pt(this.locale, {
                                localeMatcher: this.localeMatcher
                            }), o)
                            for (var s = Object.keys(lt(this.locale)), c = [this.style].concat(Lt, [s[0]]), u = 0; u < c.length; u++) {
                                var l = c[u];
                                if (s.indexOf(l) >= 0) {
                                    this.style = l;
                                    break
                                }
                            }
                    }
                    return It(t, [{
                        key: "format",
                        value: function () {
                            var t = Zt(arguments),
                                e = jt(t, 2),
                                r = e[0],
                                n = e[1];
                            return this.getRule(r, n).replace("{0}", this.formatNumber(Math.abs(r)))
                        }
                    }, {
                        key: "formatToParts",
                        value: function () {
                            var t = Zt(arguments),
                                e = jt(t, 2),
                                r = e[0],
                                n = e[1],
                                a = this.getRule(r, n),
                                o = a.indexOf("{0}");
                            if (o < 0) return [{
                                type: "literal",
                                value: a
                            }];
                            var i = [];
                            return o > 0 && i.push({
                                type: "literal",
                                value: a.slice(0, o)
                            }), i = i.concat(this.formatNumberToParts(Math.abs(r)).map((function (t) {
                                return Pt({}, t, {
                                    unit: n
                                })
                            }))), o + "{0}".length < a.length - 1 && i.push({
                                type: "literal",
                                value: a.slice(o + "{0}".length)
                            }), i
                        }
                    }, {
                        key: "getRule",
                        value: function (t, e) {
                            var r = lt(this.locale)[this.style][e];
                            if ("string" === typeof r) return r;
                            if ("auto" === this.numeric)
                                if (-2 === t || -1 === t) {
                                    var n = r["previous".concat(-1 === t ? "" : "-" + Math.abs(t))];
                                    if (n) return n
                                } else if (1 === t || 2 === t) {
                                var a = r["next".concat(1 === t ? "" : "-" + Math.abs(t))];
                                if (a) return a
                            } else if (0 === t && r.current) return r.current;
                            var o = r[Vt(t) ? "past" : "future"];
                            if ("string" === typeof o) return o;
                            var i = this.pluralRules && this.pluralRules.select(Math.abs(t)) || "other";
                            return o[i] || o.other
                        }
                    }, {
                        key: "formatNumber",
                        value: function (t) {
                            return this.numberFormat ? this.numberFormat.format(t) : String(t)
                        }
                    }, {
                        key: "formatNumberToParts",
                        value: function (t) {
                            return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(t) : [{
                                type: "integer",
                                value: this.formatNumber(t)
                            }]
                        }
                    }, {
                        key: "resolvedOptions",
                        value: function () {
                            return {
                                locale: this.locale,
                                style: this.style,
                                numeric: this.numeric,
                                numberingSystem: this.numberingSystem
                            }
                        }
                    }]), t
                }();
            Ut.supportedLocalesOf = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" === typeof t) t = [t];
                else if (!Array.isArray(t)) throw new TypeError('Invalid "locales" argument');
                return t.filter((function (t) {
                    return pt(t, e)
                }))
            }, Ut.addLocale = ft, Ut.setDefaultLocale = ut, Ut.getDefaultLocale = ct, Ut.PluralRules = Ot;
            var Bt = 'Invalid "unit" argument';

            function Mt(t) {
                if ("symbol" === St(t)) throw new TypeError(Bt);
                if ("string" !== typeof t) throw new RangeError("".concat(Bt, ": ").concat(t));
                if ("s" === t[t.length - 1] && (t = t.slice(0, t.length - 1)), Ft.indexOf(t) < 0) throw new RangeError("".concat(Bt, ": ").concat(t));
                return t
            }
            var zt = 'Invalid "number" argument';

            function $t(t) {
                if (t = Number(t), Number.isFinite && !Number.isFinite(t)) throw new RangeError("".concat(zt, ": ").concat(t));
                return t
            }

            function Kt(t) {
                return 1 / t === -1 / 0
            }

            function Vt(t) {
                return t < 0 || 0 === t && Kt(t)
            }

            function Zt(t) {
                if (t.length < 2) throw new TypeError('"unit" argument is required');
                return [$t(t[0]), Mt(t[1])]
            }

            function qt(t) {
                return qt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, qt(t)
            }

            function Xt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function Ht(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function Wt(t, e, r) {
                return e && Ht(t.prototype, e), r && Ht(t, r), t
            }

            function Yt(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Gt = function () {
                function t() {
                    Xt(this, t), Yt(this, "cache", {})
                }
                return Wt(t, [{
                    key: "get",
                    value: function () {
                        for (var t = this.cache, e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        for (var a = 0; a < r.length; a++) {
                            var o = r[a];
                            if ("object" !== qt(t)) return;
                            t = t[o]
                        }
                        return t
                    }
                }, {
                    key: "put",
                    value: function () {
                        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                        for (var n = e.pop(), a = e.pop(), o = this.cache, i = 0; i < e.length; i++) {
                            var s = e[i];
                            "object" !== qt(o[s]) && (o[s] = {}), o = o[s]
                        }
                        return o[a] = n
                    }
                }]), t
            }();

            function Jt(t) {
                return Jt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Jt(t)
            }

            function Qt(t, e) {
                var r = t,
                    n = Array.isArray(r),
                    a = 0;
                for (r = n ? r : r[Symbol.iterator]();;) {
                    var o;
                    if (n) {
                        if (a >= r.length) break;
                        o = r[a++]
                    } else {
                        if (a = r.next(), a.done) break;
                        o = a.value
                    }
                    var i = o;
                    if (e(i)) return i;
                    var s = i.split("-");
                    while (s.length > 1)
                        if (s.pop(), i = s.join("-"), e(i)) return i
                }
                throw new Error("No locale data has been registered for any of the locales: ".concat(t.join(", ")))
            }

            function te() {
                var t = "object" === ("undefined" === typeof Intl ? "undefined" : Jt(Intl));
                return t && "function" === typeof Intl.DateTimeFormat
            }
            var ee = 60,
                re = 60 * ee,
                ne = 24 * re,
                ae = 7 * ne,
                oe = 30.44 * ne,
                ie = 365.2425 * ne;

            function se(t) {
                switch (t) {
                    case "second":
                        return 1;
                    case "minute":
                        return ee;
                    case "hour":
                        return re;
                    case "day":
                        return ne;
                    case "week":
                        return ae;
                    case "month":
                        return oe;
                    case "year":
                        return ie
                }
            }

            function ce(t) {
                return void 0 !== t.factor ? t.factor : se(t.unit || t.formatAs) || 1
            }

            function ue(t) {
                switch (t) {
                    case "floor":
                        return Math.floor;
                    default:
                        return Math.round
                }
            }

            function le(t) {
                switch (t) {
                    case "floor":
                        return 1;
                    default:
                        return .5
                }
            }

            function fe(t) {
                return fe = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, fe(t)
            }

            function de(t, e) {
                var r, n = e.prevStep,
                    a = e.timestamp,
                    o = e.now,
                    i = e.future,
                    s = e.round;
                return n && (n.id || n.unit) && (r = t["threshold_for_".concat(n.id || n.unit)]), void 0 === r && void 0 !== t.threshold && (r = t.threshold, "function" === typeof r && (r = r(o, i))), void 0 === r && (r = t.minTime), "object" === fe(r) && (r = n && n.id && void 0 !== r[n.id] ? r[n.id] : r.default), "function" === typeof r && (r = r(a, {
                    future: i,
                    getMinTimeForUnit: function (t, e) {
                        return pe(t, e || n && n.formatAs, {
                            round: s
                        })
                    }
                })), void 0 === r && t.test && (r = t.test(a, {
                    now: o,
                    future: i
                }) ? 0 : 9007199254740991), void 0 === r && (n ? t.formatAs && n.formatAs && (r = pe(t.formatAs, n.formatAs, {
                    round: s
                })) : r = 0), void 0 === r && console.warn("[javascript-time-ago] A step should specify `minTime`:\n" + JSON.stringify(t, null, 2)), r
            }

            function pe(t, e, r) {
                var n, a = r.round,
                    o = se(t);
                if (n = se("now" === e ? t : e), void 0 !== o && void 0 !== n) return o - n * (1 - le(a))
            }

            function me(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        he(t, e, r[e])
                    }))
                }
                return t
            }

            function he(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function be(t, e, r) {
                var n = r.now,
                    a = r.future,
                    o = r.round,
                    i = r.units,
                    s = r.getNextStep;
                t = ge(t, i);
                var c = ve(t, e, {
                    now: n,
                    future: a,
                    round: o
                });
                if (s) {
                    if (c) {
                        var u = t[t.indexOf(c) - 1],
                            l = t[t.indexOf(c) + 1];
                        return [u, c, l]
                    }
                    return [void 0, void 0, t[0]]
                }
                return c
            }

            function ve(t, e, r) {
                var n = r.now,
                    a = r.future,
                    o = r.round;
                if (0 !== t.length) {
                    var i = ye(t, e, {
                        now: n,
                        future: a || e < 0,
                        round: o
                    });
                    if (-1 !== i) {
                        var s = t[i];
                        if (s.granularity) {
                            var c = ue(o)(Math.abs(e) / ce(s) / s.granularity) * s.granularity;
                            if (0 === c && i > 0) return t[i - 1]
                        }
                        return s
                    }
                }
            }

            function ye(t, e, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = de(t[n], me({
                        prevStep: t[n - 1],
                        timestamp: r.now - 1e3 * e
                    }, r));
                return void 0 === a || Math.abs(e) < a ? n - 1 : n === t.length - 1 ? n : ye(t, e, r, n + 1)
            }

            function ge(t, e) {
                return t.filter((function (t) {
                    var r = t.unit,
                        n = t.formatAs;
                    return r = r || n, !r || e.indexOf(r) >= 0
                }))
            }

            function we(t, e, r) {
                var n = r.now,
                    a = r.round;
                if (se(t)) {
                    var o = 1e3 * se(t),
                        i = e > n,
                        s = Math.abs(e - n),
                        c = ue(a)(s / o) * o;
                    return i ? c > 0 ? s - c + xe(a, o) : s - c + 1 : -(s - c) + ke(a, o)
                }
            }

            function ke(t, e) {
                return le(t) * e
            }

            function xe(t, e) {
                return (1 - le(t)) * e + 1
            }
            var Oe = 31536e6,
                Se = 1e3 * Oe;

            function Pe(t, e, r) {
                var n = r.prevStep,
                    a = r.nextStep,
                    o = r.now,
                    i = r.future,
                    s = r.round,
                    c = t.getTime ? t.getTime() : t,
                    u = function (t) {
                        return we(t, c, {
                            now: o,
                            round: s
                        })
                    },
                    l = De(i ? e : a, c, {
                        future: i,
                        now: o,
                        round: s,
                        prevStep: i ? n : e
                    });
                if (void 0 !== l) {
                    var f;
                    if (e && (e.getTimeToNextUpdate && (f = e.getTimeToNextUpdate(c, {
                            getTimeToNextUpdateForUnit: u,
                            getRoundFunction: ue,
                            now: o,
                            future: i,
                            round: s
                        })), void 0 === f)) {
                        var d = e.unit || e.formatAs;
                        d && (f = u(d))
                    }
                    return void 0 === f ? l : Math.min(f, l)
                }
            }

            function je(t, e, r) {
                var n = r.now,
                    a = r.future,
                    o = r.round,
                    i = r.prevStep,
                    s = de(t, {
                        timestamp: e,
                        now: n,
                        future: a,
                        round: o,
                        prevStep: i
                    });
                if (void 0 !== s) return a ? e - 1e3 * s + 1 : 0 === s && e === n ? Se : e + 1e3 * s
            }

            function De(t, e, r) {
                var n = r.now,
                    a = r.future,
                    o = r.round,
                    i = r.prevStep;
                if (t) {
                    var s = je(t, e, {
                        now: n,
                        future: a,
                        round: o,
                        prevStep: i
                    });
                    if (void 0 === s) return;
                    return s - n
                }
                return a ? e - n + 1 : Se
            }
            var Re = {};

            function _e(t) {
                return Re[t]
            }

            function Ae(t) {
                if (!t) throw new Error("[javascript-time-ago] No locale data passed.");
                Re[t.locale] = t
            }
            var Ce = [{
                    formatAs: "now"
                }, {
                    formatAs: "second"
                }, {
                    formatAs: "minute"
                }, {
                    formatAs: "hour"
                }, {
                    formatAs: "day"
                }, {
                    formatAs: "week"
                }, {
                    formatAs: "month"
                }, {
                    formatAs: "year"
                }],
                Ie = {
                    steps: Ce,
                    labels: "long"
                };

            function Te(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        Fe(t, e, r[e])
                    }))
                }
                return t
            }

            function Fe(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Ee = Te({}, Ie, {
                    steps: Ie.steps.filter((function (t) {
                        return "second" !== t.formatAs
                    }))
                }),
                Le = [{
                    factor: 1,
                    unit: "now"
                }, {
                    threshold: 1,
                    threshold_for_now: 45.5,
                    factor: 1,
                    unit: "second"
                }, {
                    threshold: 45.5,
                    factor: ee,
                    unit: "minute"
                }, {
                    threshold: 2.5 * ee,
                    granularity: 5,
                    factor: ee,
                    unit: "minute"
                }, {
                    threshold: 22.5 * ee,
                    factor: .5 * re,
                    unit: "half-hour"
                }, {
                    threshold: 42.5 * ee,
                    threshold_for_minute: 52.5 * ee,
                    factor: re,
                    unit: "hour"
                }, {
                    threshold: 20.5 / 24 * ne,
                    factor: ne,
                    unit: "day"
                }, {
                    threshold: 5.5 * ne,
                    factor: ae,
                    unit: "week"
                }, {
                    threshold: 3.5 * ae,
                    factor: oe,
                    unit: "month"
                }, {
                    threshold: 10.5 * oe,
                    factor: ie,
                    unit: "year"
                }],
                Ne = {
                    gradation: Le,
                    flavour: "long",
                    units: ["now", "minute", "hour", "day", "week", "month", "year"]
                },
                Ue = {
                    gradation: Le,
                    flavour: "long-time",
                    units: ["now", "minute", "hour", "day", "week", "month", "year"]
                };

            function Be(t) {
                return t instanceof Date ? t : new Date(t)
            }
            var Me = [{
                    formatAs: "second"
                }, {
                    formatAs: "minute"
                }, {
                    formatAs: "hour"
                }],
                ze = {},
                $e = {
                    minTime: function (t, e) {
                        e.future;
                        var r = e.getMinTimeForUnit;
                        return r("day")
                    },
                    format: function (t, e) {
                        return ze[e] || (ze[e] = {}), ze[e].dayMonth || (ze[e].dayMonth = new Intl.DateTimeFormat(e, {
                            month: "short",
                            day: "numeric"
                        })), ze[e].dayMonth.format(Be(t))
                    }
                },
                Ke = {
                    minTime: function (t, e) {
                        var r = e.future;
                        if (r) {
                            var n = new Date(new Date(t).getFullYear(), 0).getTime() - 1;
                            return (t - n) / 1e3
                        }
                        var a = new Date(new Date(t).getFullYear() + 1, 0).getTime();
                        return (a - t) / 1e3
                    },
                    format: function (t, e) {
                        return ze[e] || (ze[e] = {}), ze[e].dayMonthYear || (ze[e].dayMonthYear = new Intl.DateTimeFormat(e, {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        })), ze[e].dayMonthYear.format(Be(t))
                    }
                };
            te() ? Me.push($e, Ke) : Me.push({
                formatAs: "day"
            }, {
                formatAs: "week"
            }, {
                formatAs: "month"
            }, {
                formatAs: "year"
            });
            var Ve = {
                steps: Me,
                labels: ["mini", "short-time", "narrow", "short"]
            };

            function Ze(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        qe(t, e, r[e])
                    }))
                }
                return t
            }

            function qe(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Xe = Ze({}, Ve, {
                steps: [{
                    formatAs: "now"
                }].concat(Ve.steps)
            });

            function He(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        We(t, e, r[e])
                    }))
                }
                return t
            }

            function We(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Ye = He({}, Ve, {
                steps: Ve.steps.filter((function (t) {
                    return "second" !== t.formatAs
                }))
            });

            function Ge(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        Je(t, e, r[e])
                    }))
                }
                return t
            }

            function Je(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var Qe = Ge({}, Ye, {
                steps: [{
                    formatAs: "now"
                }].concat(Ye.steps)
            });

            function tr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        er(t, e, r[e])
                    }))
                }
                return t
            }

            function er(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var rr = tr({}, Ve, {
                    steps: Ve.steps.filter((function (t) {
                        return "second" !== t.formatAs
                    })).map((function (t) {
                        return "minute" === t.formatAs ? tr({}, t, {
                            minTime: ee
                        }) : t
                    }))
                }),
                nr = {
                    steps: [{
                        formatAs: "second"
                    }, {
                        formatAs: "minute"
                    }, {
                        formatAs: "hour"
                    }, {
                        formatAs: "day"
                    }, {
                        formatAs: "month"
                    }, {
                        formatAs: "year"
                    }],
                    labels: ["mini", "short-time", "narrow", "short"]
                };

            function ar(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        or(t, e, r[e])
                    }))
                }
                return t
            }

            function or(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var ir = ar({}, nr, {
                steps: [{
                    formatAs: "now"
                }].concat(nr.steps)
            });

            function sr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        cr(t, e, r[e])
                    }))
                }
                return t
            }

            function cr(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var ur = sr({}, nr, {
                steps: nr.steps.filter((function (t) {
                    return "second" !== t.formatAs
                }))
            });

            function lr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function (t) {
                        return Object.getOwnPropertyDescriptor(r, t).enumerable
                    })))), n.forEach((function (e) {
                        fr(t, e, r[e])
                    }))
                }
                return t
            }

            function fr(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var dr = lr({}, ur, {
                steps: [{
                    formatAs: "now"
                }].concat(ur.steps)
            });

            function pr(t) {
                switch (t) {
                    case "default":
                    case "round":
                        return Ie;
                    case "round-minute":
                        return Ee;
                    case "approximate":
                        return Ne;
                    case "time":
                    case "approximate-time":
                        return Ue;
                    case "mini":
                        return nr;
                    case "mini-now":
                        return ir;
                    case "mini-minute":
                        return ur;
                    case "mini-minute-now":
                        return dr;
                    case "twitter":
                        return Ve;
                    case "twitter-now":
                        return Xe;
                    case "twitter-minute":
                        return Ye;
                    case "twitter-minute-now":
                        return Qe;
                    case "twitter-first-minute":
                        return rr;
                    default:
                        return Ne
                }
            }

            function mr(t) {
                return mr = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, mr(t)
            }

            function hr(t, e) {
                return yr(t) || vr(t, e) || br()
            }

            function br() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }

            function vr(t, e) {
                var r = [],
                    n = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
                        if (r.push(i.value), e && r.length === e) break
                } catch (c) {
                    a = !0, o = c
                } finally {
                    try {
                        n || null == s["return"] || s["return"]()
                    } finally {
                        if (a) throw o
                    }
                }
                return r
            }

            function yr(t) {
                if (Array.isArray(t)) return t
            }

            function gr(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function wr(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function kr(t, e, r) {
                return e && wr(t.prototype, e), r && wr(t, r), t
            }
            var xr, Or = function () {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = r.polyfill;
                        gr(this, t), "string" === typeof e && (e = [e]), this.locale = Qt(e.concat(t.getDefaultLocale()), _e), "undefined" !== typeof Intl && Intl.NumberFormat && (this.numberFormat = new Intl.NumberFormat(this.locale)), !1 === n ? (this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat, this.IntlPluralRules = Intl.PluralRules) : (this.IntlRelativeTimeFormat = Ut, this.IntlPluralRules = Ut.PluralRules), this.relativeTimeFormatCache = new Gt, this.pluralRulesCache = new Gt
                    }
                    return kr(t, [{
                        key: "format",
                        value: function (t, e, r) {
                            r || (e && !Cr(e) ? (r = e, e = void 0) : r = {}), e || (e = Ee), "string" === typeof e && (e = pr(e));
                            var n, a = Pr(t),
                                o = this.getLabels(e.flavour || e.labels),
                                i = o.labels,
                                s = o.labelsType;
                            void 0 !== e.now && (n = e.now), void 0 === n && void 0 !== r.now && (n = r.now), void 0 === n && (n = Date.now());
                            var c = (n - a) / 1e3,
                                u = r.future || c < 0,
                                l = Rr(i, _e(this.locale).now, _e(this.locale).long, u);
                            if (e.custom) {
                                var f = e.custom({
                                    now: n,
                                    date: new Date(a),
                                    time: a,
                                    elapsed: c,
                                    locale: this.locale
                                });
                                if (void 0 !== f) return f
                            }
                            var d = Dr(e.units, i, l),
                                p = r.round || e.round,
                                m = be(e.gradation || e.steps || Ee.steps, c, {
                                    now: n,
                                    units: d,
                                    round: p,
                                    future: u,
                                    getNextStep: !0
                                }),
                                h = hr(m, 3),
                                b = h[0],
                                v = h[1],
                                y = h[2],
                                g = this.formatDateForStep(a, v, c, {
                                    labels: i,
                                    labelsType: s,
                                    nowLabel: l,
                                    now: n,
                                    future: u,
                                    round: p
                                }) || "";
                            if (r.getTimeToNextUpdate) {
                                var w = Pe(a, v, {
                                    nextStep: y,
                                    prevStep: b,
                                    now: n,
                                    future: u,
                                    round: p
                                });
                                return [g, w]
                            }
                            return g
                        }
                    }, {
                        key: "formatDateForStep",
                        value: function (t, e, r, n) {
                            var a = this,
                                o = n.labels,
                                i = n.labelsType,
                                s = n.nowLabel,
                                c = n.now,
                                u = n.future,
                                l = n.round;
                            if (e) {
                                if (e.format) return e.format(t, this.locale, {
                                    formatAs: function (t, e) {
                                        return a.formatValue(e, t, {
                                            labels: o,
                                            future: u
                                        })
                                    },
                                    now: c,
                                    future: u
                                });
                                var f = e.unit || e.formatAs;
                                if (!f) throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(e)));
                                if ("now" === f) return s;
                                var d = Math.abs(r) / ce(e);
                                e.granularity && (d = ue(l)(d / e.granularity) * e.granularity);
                                var p = -1 * Math.sign(r) * ue(l)(d);
                                switch (0 === p && (p = u ? 0 : -0), i) {
                                    case "long":
                                    case "short":
                                    case "narrow":
                                        return this.getFormatter(i).format(p, f);
                                    default:
                                        return this.formatValue(p, f, {
                                            labels: o,
                                            future: u
                                        })
                                }
                            }
                        }
                    }, {
                        key: "formatValue",
                        value: function (t, e, r) {
                            var n = r.labels,
                                a = r.future;
                            return this.getFormattingRule(n, e, t, {
                                future: a
                            }).replace("{0}", this.formatNumber(Math.abs(t)))
                        }
                    }, {
                        key: "getFormattingRule",
                        value: function (t, e, r, n) {
                            var a = n.future;
                            this.locale;
                            if (t = t[e], "string" === typeof t) return t;
                            var o = 0 === r ? a ? "future" : "past" : r < 0 ? "past" : "future",
                                i = t[o] || t;
                            if ("string" === typeof i) return i;
                            var s = this.getPluralRules().select(Math.abs(r));
                            return i[s] || i.other
                        }
                    }, {
                        key: "formatNumber",
                        value: function (t) {
                            return this.numberFormat ? this.numberFormat.format(t) : String(t)
                        }
                    }, {
                        key: "getFormatter",
                        value: function (t) {
                            return this.relativeTimeFormatCache.get(this.locale, t) || this.relativeTimeFormatCache.put(this.locale, t, new this.IntlRelativeTimeFormat(this.locale, {
                                style: t
                            }))
                        }
                    }, {
                        key: "getPluralRules",
                        value: function () {
                            return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale))
                        }
                    }, {
                        key: "getLabels",
                        value: function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                            "string" === typeof t && (t = [t]), t = t.map((function (t) {
                                switch (t) {
                                    case "tiny":
                                    case "mini-time":
                                        return "mini";
                                    default:
                                        return t
                                }
                            })), t = t.concat("long");
                            var e = _e(this.locale),
                                r = t,
                                n = Array.isArray(r),
                                a = 0;
                            for (r = n ? r : r[Symbol.iterator]();;) {
                                var o;
                                if (n) {
                                    if (a >= r.length) break;
                                    o = r[a++]
                                } else {
                                    if (a = r.next(), a.done) break;
                                    o = a.value
                                }
                                var i = o;
                                if (e[i]) return {
                                    labelsType: i,
                                    labels: e[i]
                                }
                            }
                        }
                    }]), t
                }(),
                Sr = "en";

            function Pr(t) {
                if (t.constructor === Date || jr(t)) return t.getTime();
                if ("number" === typeof t) return t;
                throw new Error("Unsupported relative time formatter input: ".concat(mr(t), ", ").concat(t))
            }

            function jr(t) {
                return "object" === mr(t) && "function" === typeof t.getTime
            }

            function Dr(t, e, r) {
                var n = Object.keys(e);
                return r && n.push("now"), t && (n = t.filter((function (t) {
                    return "now" === t || n.indexOf(t) >= 0
                }))), n
            }

            function Rr(t, e, r, n) {
                var a = t.now || e && e.now;
                return a ? "string" === typeof a ? a : n ? a.future : a.past : r && r.second && r.second.current ? r.second.current : void 0
            }
            Or.getDefaultLocale = function () {
                return Sr
            }, Or.setDefaultLocale = function (t) {
                return Sr = t
            }, Or.addDefaultLocale = function (t) {
                if (xr) return console.error("[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.");
                xr = !0, Or.setDefaultLocale(t.locale), Or.addLocale(t)
            }, Or.addLocale = function (t) {
                Ae(t), Ut.addLocale(t)
            }, Or.locale = Or.addLocale, Or.addLabels = function (t, e, r) {
                var n = _e(t);
                n || (Ae({
                    locale: t
                }), n = _e(t)), n[e] = r
            };
            var _r = {}.constructor;

            function Ar(t) {
                return void 0 !== mr(t) && null !== t && t.constructor === _r
            }

            function Cr(t) {
                return "string" === typeof t || Ir(t)
            }

            function Ir(t) {
                return Ar(t) && (Array.isArray(t.steps) || Array.isArray(t.gradation) || Array.isArray(t.flavour) || "string" === typeof t.flavour || Array.isArray(t.labels) || "string" === typeof t.labels || Array.isArray(t.units) || "function" === typeof t.custom)
            }
            var Tr = r("d70d");
            Or.addDefaultLocale(Tr);
            var Fr = {
                    name: "Withdraw",
                    props: ["farm"],
                    data: function () {
                        return {
                            fields: [{
                                key: "withdraw",
                                label: "option"
                            }, {
                                key: "duration",
                                label: "duration"
                            }, {
                                key: "amount",
                                label: "ZOO to be claimed",
                                thStyle: {
                                    minWidth: "200px"
                                }
                            }, {
                                key: "countdown",
                                label: "countdown"
                            }],
                            records: []
                        }
                    },
                    mounted: function () {
                        this.getList()
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice"])),
                    methods: {
                        getList: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i, s, c, u, l;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.records = [], e.next = 3, Promise.all([t.shortLockedUserInfo(), t.mediumLockedUserInfo(), t.longLockedUserInfo()]);
                                        case 3:
                                            r = e.sent, n = Object(Z["a"])(r, 3), a = n[0], o = n[1], i = n[2], s = Math.floor((new Date).getTime() / 1e3), c = a._endTime.toNumber(), u = o._endTime.toNumber(), l = i._endTime.toNumber(), t.records.push({
                                                _termIndex: 0,
                                                duration: "Short",
                                                amount: j["a"].toFixed(P["a"].utils.formatUnits(a._amount, b["a"].zoo.decimals)),
                                                countdown: c > s ? t.formatTime(c) : 0,
                                                withdraw: c > s || 0 === c
                                            }), t.records.push({
                                                _termIndex: 1,
                                                duration: "Medium",
                                                amount: j["a"].toFixed(P["a"].utils.formatUnits(o._amount, b["a"].zoo.decimals)),
                                                countdown: u > s ? t.formatTime(u) : 0,
                                                withdraw: u > s || 0 === u
                                            }), t.records.push({
                                                _termIndex: 2,
                                                duration: "Long",
                                                amount: j["a"].toFixed(P["a"].utils.formatUnits(i._amount, b["a"].zoo.decimals)),
                                                countdown: l > s ? t.formatTime(l) : 0,
                                                withdraw: l > s || 0 === l
                                            });
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        shortLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().shortLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        mediumLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().mediumLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        longLockedUserInfo: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.farm.xzooPid, e.next = 4, Object(m["s"])().longLockedUserInfo(r, t.defaultAccount);
                                        case 4:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), a = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, -1 === a.indexOf("User denied transaction signature.") && t.$NotifyError("Error", a);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        unstake: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                var n, a, o;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, n = e.farm.xzooPid, r.next = 4, Object(m["s"])().unStake(n, t);
                                        case 4:
                                            return a = r.sent, r.next = 7, a.wait();
                                        case 7:
                                            return r.next = 9, e.getList();
                                        case 9:
                                            e.$emit("finish", !1), r.next = 16;
                                            break;
                                        case 12:
                                            r.prev = 12, r.t0 = r["catch"](0), o = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, -1 === o.indexOf("User denied transaction signature.") && e.$NotifyError("Error", o);
                                        case 16:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 12]
                                ])
                            })))()
                        },
                        formatTime: function (t) {
                            var e = new Or("en-US");
                            return e.format(1e3 * t)
                        }
                    }
                },
                Er = Fr,
                Lr = Object(x["a"])(Er, nt, at, !1, null, "45ddc6f7", null),
                Nr = Lr.exports,
                Ur = {
                    name: "StakeDialog",
                    components: {
                        Withdraw: Nr,
                        Transfer: rt,
                        Stake: $
                    },
                    props: ["farm"],
                    data: function () {
                        return {
                            tabIndex: 0
                        }
                    },
                    mounted: function () {
                        this.$refs["stakeModal"].show()
                    },
                    methods: {
                        hiddenModal: function () {
                            this.$refs["stakeModal"] && this.$refs["stakeModal"].hide(), this.$emit("close")
                        },
                        finish: function (t) {
                            this.$emit("finish"), t && this.hiddenModal()
                        }
                    }
                },
                Br = Ur,
                Mr = Object(x["a"])(Br, T, F, !1, null, "40572ffa", null),
                zr = Mr.exports,
                $r = r("052e"),
                Kr = r.n($r),
                Vr = {
                    components: {
                        StakeDialog: zr,
                        TopStatistics: S
                    },
                    directives: {
                        "b-tooltip": l["a"],
                        Ripple: f["a"]
                    },
                    filters: {
                        formatNumber: function (t) {
                            var e = Kr()(t);
                            return e.format("0,0")
                        }
                    },
                    data: function () {
                        return {
                            blockNumber: 0,
                            stakeFarmItem: {},
                            stakeDialogShow: !1,
                            alertList: [],
                            farms: v,
                            currentFarm: {},
                            showDepositDialog: !1,
                            showGetKeyDialog: !1,
                            showWithdrawDialog: !1,
                            showSwapDialog: !1,
                            showSwapDialogIndex: 0,
                            interval: null,
                            statistics: {
                                totalStaked: 0,
                                dailyRewards: 0,
                                pendingRewards: 0,
                                myTotalStaked: 0
                            }
                        }
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice"])),
                    watch: {
                        defaultAccount: function (t) {
                            t && t.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        var t = this;
                        this.defaultAccount && (this.init(), this.interval = setInterval((function () {
                            t.init()
                        }), 6e4)), this.calcTopStatistics(), this.getAlertList()
                    },
                    destroyed: function () {
                        this.interval && clearInterval(this.interval)
                    },
                    methods: {
                        init: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i, c, u, l, f;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.$provider.getBlockNumber().then((function (e) {
                                                t.blockNumber = e + 100
                                            })), r = t.farms.map((function (e, r) {
                                                return e.index = r, "event" === e.type ? new C(e, t.defaultAccount) : new A(e, t.defaultAccount)
                                            })), n = r.map((function (t) {
                                                return t.allowance()
                                            })), e.next = 5, Promise.all(n);
                                        case 5:
                                            return t.farms = Object(s["a"])(t.farms), a = r.map((function (t) {
                                                return t.price()
                                            })), e.next = 9, Promise.all(a);
                                        case 9:
                                            return t.farms = Object(s["a"])(t.farms), o = r.map((function (t) {
                                                return t.poolInfo()
                                            })), e.next = 13, Promise.all(o);
                                        case 13:
                                            return t.farms = Object(s["a"])(t.farms), i = r.map((function (t) {
                                                return t.pendingKey()
                                            })), e.next = 17, Promise.all(i);
                                        case 17:
                                            return t.farms = Object(s["a"])(t.farms), c = r.map((function (t) {
                                                return t.userInfo()
                                            })), e.next = 21, Promise.all(c);
                                        case 21:
                                            return t.farms = Object(s["a"])(t.farms), u = r.map((function (e) {
                                                return e.balanceOf(t.$provider)
                                            })), e.next = 25, Promise.all(u);
                                        case 25:
                                            return t.farms = Object(s["a"])(t.farms), e.next = 28, t.calcTopStatistics();
                                        case 28:
                                            return e.next = 30, Object(m["q"])().totalAllocPoint();
                                        case 30:
                                            return l = e.sent, f = r.map((function (e) {
                                                return "event" === e.farm.type ? t.blockNumber > e.farm.endBlock ? 0 : e.apy() : e.apy(t.statistics.dailyRewards, l, t.keyPrice)
                                            })), e.next = 34, Promise.all(f);
                                        case 34:
                                            t.farms = Object(s["a"])(t.farms);
                                        case 35:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        calcTopStatistics: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.statistics.pendingRewards = t.farms.reduce((function (t, e) {
                                                return "event" === e.type ? t + 0 : t + parseFloat(e.pendingKeys)
                                            }), 0), t.statistics.pendingRewards = j["a"].toFixed(t.statistics.pendingRewards), t.statistics.totalStaked = t.farms.reduce((function (t, e) {
                                                return t + e.totalPrice
                                            }), 0), t.statistics.totalStaked = Math.floor(j["a"].toFixed(t.statistics.totalStaked)), t.statistics.myTotalStaked = t.farms.reduce((function (t, e) {
                                                return t + e.userInfo.amountUSD
                                            }), 0), e.next = 7, t.getDailyRewards();
                                        case 7:
                                            return t.statistics.dailyRewards = e.sent, e.next = 10, t.getMyKeys();
                                        case 10:
                                            t.statistics.allMyKeys = e.sent, t.statistics = Object(u["a"])({}, t.statistics);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        postStake: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            r = {
                                                owner: t.defaultAccount,
                                                stake: t.statistics.myTotalStaked
                                            }, I["a"].post("/api/zoo/stake", r).then((function (t) {})).catch((function (t) {
                                                console.log(t)
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getMyKeys: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = Object(p["a"])(b["a"].key.address), e.next = 3, Object(m["e"])(r).balanceOf(t.defaultAccount);
                                        case 3:
                                            return n = e.sent, e.abrupt("return", j["a"].toFixed(P["a"].utils.formatUnits(n, b["a"].key.decimals)));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getDailyRewards: function () {
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["q"])().keyPerBlock();
                                        case 2:
                                            return e = t.sent, r = j["a"].toFixed(P["a"].utils.formatUnits(e, b["a"].key.decimals)), n = 28800, t.abrupt("return", j["a"].toFixed(n * r));
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        finish: function () {
                            this.init(), this.postStake()
                        },
                        approve: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                var n, a, o, i;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e.currentFarm = t, e.loading(t, !0), r.prev = 2, n = Object(p["a"])(t.lpAddresses), a = "event" === t.type ? Object(p["a"])(h["h"]) : Object(p["a"])(h["o"]), r.next = 7, Object(m["e"])(n).approve(a, P["a"].constants.MaxUint256);
                                        case 7:
                                            return o = r.sent, r.next = 10, o.wait();
                                        case 10:
                                            e.$NotifySuccess("Approve", "Approve Success"), e.finish(), r.next = 18;
                                            break;
                                        case 14:
                                            r.prev = 14, r.t0 = r["catch"](2), i = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, e.$NotifyError("Error", i);
                                        case 18:
                                            e.loading(t, !1);
                                        case 19:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [2, 14]
                                ])
                            })))()
                        },
                        loading: function (t, e) {
                            t.disable = e, this.$set(this.farms, t.index, this.farms[t.index])
                        },
                        getKey: function (t) {
                            this.currentFarm = t, this.showGetKeyDialog = !0
                        },
                        deposit: function (t) {
                            this.currentFarm = t, this.showDepositDialog = !0
                        },
                        withdraw: function (t) {
                            this.currentFarm = t, this.showWithdrawDialog = !0
                        },
                        swap: function (t) {
                            this.currentFarm = t, this.showSwapDialog = !0, this.showSwapDialogIndex = 0
                        },
                        addLiquidity: function (t) {
                            this.currentFarm = t, this.showSwapDialog = !0, this.showSwapDialogIndex = 1
                        },
                        getAlertList: function () {
                            var t = this;
                            I["a"].get("https://api2.zoogame.finance/api/zoo/alerts").then((function (e) {
                                var r = [{
                                    value: 1,
                                    label: "Primary"
                                }, {
                                    value: 2,
                                    label: "Success"
                                }, {
                                    value: 3,
                                    label: "Warning"
                                }, {
                                    value: 4,
                                    label: "Danger"
                                }, {
                                    value: 5,
                                    label: "Normal"
                                }];
                                t.alertList = e.data.map((function (t) {
                                    var e = r.find((function (e) {
                                        return e.value === t.type
                                    }));
                                    return t.theme = e.label.toLowerCase(), t
                                }))
                            }))
                        },
                        stake: function (t) {
                            this.stakeFarmItem = t, this.stakeDialogShow = !0
                        }
                    }
                },
                Zr = Vr,
                qr = (r("a5db"), Object(x["a"])(Zr, o, i, !1, null, "6a34c2d0", null)),
                Xr = qr.exports,
                Hr = function () {
                    var t = this,
                        e = this,
                        r = e.$createElement,
                        n = e._self._c || r;
                    return n("div", [e._l(e.alertList, (function (t) {
                        return n("b-alert", {
                            key: t.id,
                            staticClass: "mt-0",
                            attrs: {
                                show: "",
                                dismissible: "",
                                fade: "",
                                variant: t.theme
                            }
                        }, [n("div", {
                            staticClass: "alert-body"
                        }, [n("span", [e._v(e._s(t.content))])])])
                    })), n("b-alert", {
                        staticClass: "mt-0",
                        attrs: {
                            show: "",
                            dismissible: "",
                            fade: "",
                            variant: "success"
                        }
                    }, [n("div", {
                        staticClass: "alert-body"
                    }, [n("span", [e._v(" Invite Your Friends. Earn ZOO Rewards. "), n("b-link", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function () {
                                t.$router.push("/referral")
                            }
                        }
                    }, [e._v(" https://zoogame.app/#/referral ")])], 1)])]), n("top-statistics", {
                        attrs: {
                            version: "v2",
                            "total-staked": e.statistics.totalStaked,
                            "daily-rewards": e.statistics.dailyRewards,
                            "pending-rewards": e.statistics.pendingRewards,
                            "all-my-keys": e.statistics.allMyKeys,
                            "my-total-staked": e.statistics.myTotalStaked
                        },
                        on: {
                            finish: e.finish
                        }
                    }), n("b-row", e._l(e.farms, (function (t, r) {
                        return n("b-col", {
                            key: r,
                            attrs: {
                                sm: "12",
                                md: "6",
                                lg: "4"
                            }
                        }, [n("b-card", {
                            staticClass: "position-relative",
                            attrs: {
                                "no-body": ""
                            }
                        }, [n("b-overlay", {
                            attrs: {
                                show: t.disable,
                                "no-wrap": ""
                            }
                        }), t.biswap ? n("div", {
                            staticClass: "biswap-bg"
                        }) : e._e(), n("b-card-body", {
                            staticStyle: {
                                position: "relative"
                            }
                        }, [n("div", {
                            staticClass: "d-flex justify-content-between"
                        }, [t.isLpToken ? n("b-avatar-group", {
                            attrs: {
                                size: "50px"
                            }
                        }, [n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.token.symbol,
                                src: "/tokens/" + t.token.symbol.toLowerCase() + ".png"
                            }
                        }), n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.quoteToken.symbol,
                                variant: "primary",
                                src: "/tokens/" + t.quoteToken.symbol.toLowerCase() + ".png"
                            }
                        })], 1) : n("b-avatar", {
                            directives: [{
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover",
                                modifiers: {
                                    hover: !0
                                }
                            }],
                            staticClass: "pull-up",
                            attrs: {
                                title: t.token.symbol,
                                variant: "primary",
                                size: "50px",
                                src: "/tokens/" + t.token.symbol.toLowerCase() + ".png"
                            }
                        }), n("div", {
                            staticClass: "text-right"
                        }, [n("h4", {
                            staticClass: "d-flex align-items-center justify-content-end"
                        }, [n("span", {
                            staticClass: "mr-50"
                        }, [e._v(e._s(t.lpSymbol))]), t.biswap ? n("img", {
                            staticClass: "platform",
                            attrs: {
                                src: "/tokens/biswap.png"
                            }
                        }) : t.isLpToken ? n("img", {
                            staticClass: "platform",
                            attrs: {
                                src: "/tokens/pancake.png"
                            }
                        }) : "event" === t.type ? n("span") : n("img", {
                            staticClass: "platform venus",
                            attrs: {
                                src: "/tokens/venus.png"
                            }
                        })]), n("p", {
                            directives: [{
                                name: "b-toggle",
                                rawName: "v-b-toggle",
                                value: "farm-" + t.index,
                                expression: "`farm-${farm.index}`"
                            }],
                            staticClass: "mb-0",
                            on: {
                                click: function (n) {
                                    return e.clickUpDown(r, t)
                                }
                            }
                        }, [n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" Average APY: " + e._s(t.apy || 0) + " % ")]), "event" !== t.type ? n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "info"
                            }
                        }, [e._v(" " + e._s(t.allocPoint) + "X ")]) : e._e(), n("FeatherIcon", {
                            staticClass: "pl-25",
                            attrs: {
                                icon: t.upDownIcon ? "ChevronUpIcon" : "ChevronDownIcon",
                                size: "20"
                            }
                        })], 1), n("div", {
                            staticClass: "text-left"
                        }, [n("b-collapse", {
                            attrs: {
                                id: "farm-" + t.index
                            }
                        }, [n("div", {
                            staticClass: "pt-25"
                        }, [r < 3 ? n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" Average APR: " + e._s(t.apr || 0) + " % ")]) : e._e()], 1), n("div", {
                            staticClass: "pt-25"
                        }, [t.userInfo && t.userInfo.amount > 0 ? n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" My APY: " + e._s(t.myApy || 0) + " % ")]) : n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" My APY: -- % ")])], 1), n("div", {
                            staticClass: "pt-25"
                        }, [n("b-badge", {
                            staticClass: "ml-25",
                            attrs: {
                                pill: "",
                                variant: "success"
                            }
                        }, [e._v(" 3X APY: " + e._s(t.myApy3X || 0) + " % ")])], 1)])], 1)])], 1), n("div", {
                            staticClass: "p-relative",
                            class: "halloween-bg-" + r % 3
                        }, [n("p", {
                            staticClass: "d-flex justify-content-between mt-2"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-success"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold d-block text-nowrap"
                        }, [e._v(e._s(e.$t("FarmPage.TotalStaked")))])]), n("span", [e._v(e._s(t.totalStaked && t.totalStaked.toLocaleString() || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-primary"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.TotalPrice")))])]), n("span", [e._v("$ " + e._s(t.totalPrice && t.totalPrice.toLocaleString() || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-danger"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.MyStaked")))])]), n("span", [e._v(e._s(t.userInfo && t.userInfo.amount || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-warning"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.Balance")))])]), n("span", [e._v(e._s(t.balance || 0))])]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-info"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v(e._s(e.$t("FarmPage.Rewards")))])]), n("span", [n("b-badge", {
                            directives: [{
                                name: "auth-click",
                                rawName: "v-auth-click",
                                value: function () {
                                    e.getKey(t, r)
                                },
                                expression: "()=>{getKey(farm,index)}"
                            }],
                            staticClass: "cursor-pointer",
                            attrs: {
                                pill: "",
                                variant: "info"
                            }
                        }, [e._v(" " + e._s(t.pendingKeys) + " " + e._s("event" === t.type ? t.earnToken : "KEY") + " ")])], 1)]), n("p", {
                            staticClass: "d-flex justify-content-between"
                        }, [n("span", {
                            staticClass: "d-flex align-items-center"
                        }, [n("span", {
                            staticClass: "d-inline-block border-warning"
                        }), n("span", {
                            staticClass: "pl-25 font-weight-bold"
                        }, [e._v("xZOO Booster")])]), n("span", [n("b-badge", {
                            staticClass: "cursor-pointer",
                            attrs: {
                                pill: "",
                                variant: "warning"
                            },
                            on: {
                                click: function (r) {
                                    return e.booster(t)
                                },
                                finish: e.finish
                            }
                        }, [n("FeatherIcon", {
                            attrs: {
                                icon: "TrendingUpIcon"
                            }
                        }), e._v(" " + e._s(t.nx || "1X") + " ")], 1)], 1)])]), e.defaultAccount ? n("b-row", {
                            staticClass: "mt-1"
                        }, [n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, ["0" === t.allowance && "BNB" !== t.lpSymbol ? n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "warning",
                                pill: "",
                                block: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.approve(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "UnlockIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Approve")) + " ")], 1) : n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: "",
                                disabled: t.endBlock && e.blockNumber > t.endBlock
                            },
                            on: {
                                click: function (r) {
                                    return e.deposit(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "ArrowDownIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Deposit")) + " ")], 1)], 1), n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.withdraw(t)
                                }
                            }
                        }, [n("feather-icon", {
                            attrs: {
                                icon: "ArrowUpIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Withdraw")) + " ")], 1)], 1)], 1) : n("div", {
                            staticClass: "d-flex justify-content-around mt-2"
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "p-relative",
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (t) {
                                    return e.$store.commit("farm/setConnectWalletDialogVisible", !0)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("Unlock")) + " ")])], 1)], 1), n("div"), e.defaultAccount && t.isLpToken ? n("b-card-footer", [t.biswap ? n("b-row", [n("b-col", [n("a", {
                            attrs: {
                                href: t.biswapLink,
                                target: "_blank"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            }
                        }, [e._v(" Add Liquidity On Biswap ")])], 1)])], 1) : n("b-row", {
                            staticClass: "mt-0 mb-0"
                        }, [n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.swap(t)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("FarmPage.SwapBtn")) + " ")])], 1), n("b-col", {
                            attrs: {
                                cols: "6"
                            }
                        }, [n("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-no-padding",
                            attrs: {
                                variant: "outline-dark",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.addLiquidity(t)
                                }
                            }
                        }, [e._v(" " + e._s(e.$t("FarmPage.AddLiquidityBtn")) + " ")])], 1)], 1)], 1) : e.defaultAccount && "event" === t.type ? n("b-card-footer", [n("h5", {
                            staticClass: "pt-1 text-center"
                        }, [e._v("Start block " + e._s(e._f("formatNumber")(t.startBlock)) + " ~ End block " + e._s(e._f("formatNumber")(t.endBlock)))])]) : e._e()], 1)], 1)
                    })), 1), e.showGetKeyDialog ? n("get-key-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showGetKeyDialog = !1
                            }
                        }
                    }) : e._e(), e.showDepositDialog ? n("deposit-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showDepositDialog = !1
                            }
                        }
                    }) : e._e(), e.showWithdrawDialog ? n("withdraw-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showWithdrawDialog = !1
                            }
                        }
                    }) : e._e(), e.showSwapDialog ? n("swap-dialog", {
                        attrs: {
                            farm: e.currentFarm,
                            "show-index": e.showSwapDialogIndex
                        },
                        on: {
                            finish: e.finish,
                            close: function (t) {
                                e.showSwapDialog = !1
                            }
                        }
                    }) : e._e(), e.stakeDialogShow ? n("stake-dialog", {
                        attrs: {
                            farm: e.currentFarm
                        },
                        on: {
                            close: function (t) {
                                e.stakeDialogShow = !1
                            },
                            finish: e.finish
                        }
                    }) : e._e()], 2)
                },
                Wr = [],
                Yr = r("506a"),
                Gr = r("0431"),
                Jr = r("d3d0"),
                Qr = r("89a8"),
                tn = r("62ef"),
                en = r("eeb5"),
                rn = r("70cc"),
                nn = r("e7f5"),
                an = r("b048"),
                on = r("b643"),
                sn = r("d17c"),
                cn = r("a313"),
                un = "collapsed",
                ln = "not-collapsed",
                fn = "__BV_toggle",
                dn = "".concat(fn, "_HANDLER__"),
                pn = "".concat(fn, "_CLICK__"),
                mn = "".concat(fn, "_STATE__"),
                hn = "".concat(fn, "_TARGETS__"),
                bn = "false",
                vn = "true",
                yn = "aria-controls",
                gn = "aria-expanded",
                wn = "role",
                kn = "tabindex",
                xn = "overflow-anchor",
                On = Object(an["d"])(Gr["u"], "toggle"),
                Sn = Object(an["e"])(Gr["u"], "state"),
                Pn = Object(an["e"])(Gr["u"], "sync-state"),
                jn = Object(an["d"])(Gr["u"], "request-state"),
                Dn = [tn["c"], tn["j"]],
                Rn = function (t) {
                    return !Object(rn["a"])(["button", "a"], t.tagName.toLowerCase())
                },
                _n = function (t, e) {
                    var r = t.modifiers,
                        n = t.arg,
                        a = t.value,
                        o = Object(cn["h"])(r || {});
                    if (a = Object(on["m"])(a) ? a.split(en["r"]) : a, Object(nn["t"])(e.tagName, "a")) {
                        var i = Object(nn["h"])(e, "href") || "";
                        en["h"].test(i) && o.push(i.replace(en["g"], ""))
                    }
                    return Object(rn["b"])(n, a).forEach((function (t) {
                        return Object(on["m"])(t) && o.push(t)
                    })), o.filter((function (t, e, r) {
                        return t && r.indexOf(t) === e
                    }))
                },
                An = function (t) {
                    var e = t[pn];
                    e && (Object(an["a"])(t, "click", e, Qr["U"]), Object(an["a"])(t, "keydown", e, Qr["U"])), t[pn] = null
                },
                Cn = function (t, e) {
                    if (An(t), e.context) {
                        var r = function (r) {
                            if (("keydown" !== r.type || Object(rn["a"])(Dn, r.keyCode)) && !Object(nn["r"])(t)) {
                                var n = t[hn] || [];
                                n.forEach((function (t) {
                                    e.context.$root.$emit(On, t)
                                }))
                            }
                        };
                        t[pn] = r, Object(an["b"])(t, "click", r, Qr["U"]), Rn(t) && Object(an["b"])(t, "keydown", r, Qr["U"])
                    }
                },
                In = function (t, e) {
                    t[dn] && e.context && e.context.$root.$off([Sn, Pn], t[dn]), t[dn] = null
                },
                Tn = function (t, e) {
                    if (In(t, e), e.context) {
                        var r = function (e, r) {
                            Object(rn["a"])(t[hn] || [], e) && (t[mn] = r, Fn(t, r))
                        };
                        t[dn] = r, e.context.$root.$on([Sn, Pn], r)
                    }
                },
                Fn = function (t, e) {
                    e ? (Object(nn["y"])(t, un), Object(nn["b"])(t, ln), Object(nn["E"])(t, gn, vn)) : (Object(nn["y"])(t, ln), Object(nn["b"])(t, un), Object(nn["E"])(t, gn, bn))
                },
                En = function (t, e) {
                    t[e] = null, delete t[e]
                },
                Ln = function (t, e, r) {
                    if (Jr["f"] && r.context) {
                        Rn(t) && (Object(nn["o"])(t, wn) || Object(nn["E"])(t, wn, "button"), Object(nn["o"])(t, kn) || Object(nn["E"])(t, kn, "0")), Fn(t, t[mn]);
                        var n = _n(e, t);
                        n.length > 0 ? (Object(nn["E"])(t, yn, n.join(" ")), Object(nn["F"])(t, xn, "none")) : (Object(nn["x"])(t, yn), Object(nn["A"])(t, xn)), Object(nn["B"])((function () {
                            Cn(t, r)
                        })), Object(sn["a"])(n, t[hn]) || (t[hn] = n, n.forEach((function (t) {
                            r.context.$root.$emit(jn, t)
                        })))
                    }
                },
                Nn = {
                    bind: function (t, e, r) {
                        t[mn] = !1, t[hn] = [], Tn(t, r), Ln(t, e, r)
                    },
                    componentUpdated: Ln,
                    updated: Ln,
                    unbind: function (t, e, r) {
                        An(t), In(t, r), En(t, dn), En(t, pn), En(t, mn), En(t, hn), Object(nn["y"])(t, un), Object(nn["y"])(t, ln), Object(nn["x"])(t, gn), Object(nn["x"])(t, yn), Object(nn["x"])(t, wn), Object(nn["A"])(t, xn)
                    }
                },
                Un = function () {
                    function t(e, r) {
                        Object(D["a"])(this, t), this.farm = e, this.owner = r
                    }
                    return Object(R["a"])(t, [{
                        key: "allowance",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e = Object(p["a"])(this.farm.lpAddresses), "" !== e) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return r = Object(p["a"])(h["p"]), t.next = 7, Object(m["e"])(e).allowance(this.owner, r);
                                        case 7:
                                            return n = t.sent, this.farm.allowance = n.toString(), t.abrupt("return", this.farm);
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.error("StakePoolV2#allowance", t.t0);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "balanceOf",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                                var r, n, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, r = Object(p["a"])(this.farm.lpAddresses), "" !== r) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            if ("BNB" === this.farm.lpSymbol) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 7, Object(m["e"])(r).balanceOf(this.owner);
                                        case 7:
                                            return n = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(n, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 12:
                                            return t.next = 14, e.getBalance(this.owner);
                                        case 14:
                                            a = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(a, 18));
                                        case 16:
                                            t.next = 21;
                                            break;
                                        case 18:
                                            t.prev = 18, t.t0 = t["catch"](0), console.error("balanceOf", t.t0);
                                        case 21:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 18]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "price",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e = Object(p["a"])(this.farm.lpAddresses), !this.farm.isLpToken) {
                                                t.next = 7;
                                                break
                                            }
                                            return t.next = 4, _["a"].getLpPrice(e);
                                        case 4:
                                            this.farm.price = t.sent, t.next = 10;
                                            break;
                                        case 7:
                                            return t.next = 9, _["a"].getTokenPrice(e);
                                        case 9:
                                            this.farm.price = t.sent;
                                        case 10:
                                            return t.abrupt("return", this.farm.price);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "userInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pancakeUserInfo());
                                        case 4:
                                            return t.abrupt("return", this.venusUserInfo());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pendingPancakeKey());
                                        case 4:
                                            return t.abrupt("return", this.pendingVenusKey());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "poolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (!this.farm.isLpToken) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return", this.pancakePoolInfo());
                                        case 4:
                                            return t.abrupt("return", this.venusPoolInfo());
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pancakeUserInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().pancakeUserInfo(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("pancakeUserInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingPancakeKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().pendingPancakeKey(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 8:
                                            t.prev = 8, t.t0 = t["catch"](0), console.error("pendingPancakeKey", t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pancakePoolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().pancakePoolInfo(this.farm.pid);
                                        case 3:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.lpSupply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), this.farm.workingSupply = j["a"].toFixed(P["a"].utils.formatUnits(e.workingSupply, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.error("pancakePoolInfo", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "venusUserInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().venusUserInfo(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 10:
                                            t.prev = 10, t.t0 = t["catch"](0), console.error("venusUserInfo", t.t0);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 10]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingVenusKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().pendingVenusKey(this.farm.pid, this.owner);
                                        case 3:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 8:
                                            t.prev = 8, t.t0 = t["catch"](0), console.error("pendingVenusKey", t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "venusPoolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, Object(m["r"])().venusPoolInfo(this.farm.pid);
                                        case 3:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.tokenSupply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), this.farm.workingSupply = j["a"].toFixed(P["a"].utils.formatUnits(e.workingSupply, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.error("venusPoolInfo", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "apy",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e, r, n) {
                                var a, o, i, s, c, u, l;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            a = e * (this.farm.allocPoint / r), this.farm.farmKeyRevenue = a * n, o = this.farm.farmKeyRevenue / (0 === this.farm.totalPrice ? 1 : this.farm.totalPrice), i = Math.pow(1 + o, 365) - 1, this.farm.ratio = j["a"].toFixed(o), this.farm.apy = i === 1 / 0 || i >= 1e8 ? "99999999+" : Math.floor(100 * i), this.farm.apr = Math.floor(this.farm.farmKeyRevenue / this.farm.totalPrice * 365 * 100), s = this.farm.apr * this.farm.speed * this.farm.totalStaked, c = this.farm.workingSupply, this.farm.myApr = s / c, u = Math.pow(this.farm.myApr / 100 / 365 + 1, 365) - 1, this.farm.myApy = u === 1 / 0 || u >= 1e8 ? "99999999+" : Math.floor(100 * u), l = Math.pow(3 * this.farm.apr * this.farm.totalStaked / this.farm.workingSupply / 100 / 365 + 1, 365) - 1, this.farm.myApy3X = l === 1 / 0 || l >= 1e8 ? "99999999+" : Math.floor(100 * l);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e(e, r, n) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "xZooPoolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n, a, o, i, s, c, u, l;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = this.farm.xzooPid, t.next = 3, Object(m["s"])().XZooSupply(e);
                                        case 3:
                                            return r = t.sent, this.farm.totalStakedXZoo = P["a"].utils.formatUnits(r, 18), t.next = 7, Object(m["s"])().XZooAmount(e, this.owner);
                                        case 7:
                                            n = t.sent, this.farm.myStakedXZoo = P["a"].utils.formatUnits(n, 18), a = this.farm.userInfo.amount, o = this.farm.totalStaked, i = this.farm.totalStakedXZoo, s = this.farm.myStakedXZoo, c = s / i, u = a + 1 * o * c, u = Math.min(u, 3 * a), l = 0 === a ? 1 : u / a, this.farm.speed = l, this.farm.nx = Math.floor(10 * l) / 10 + "X";
                                        case 19:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                Bn = function () {
                    function t(e, r) {
                        Object(D["a"])(this, t), this.farm = e, this.owner = r
                    }
                    return Object(R["a"])(t, [{
                        key: "allowance",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, e = Object(p["a"])(this.farm.lpAddresses), "" !== e) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return r = Object(p["a"])(h["h"]), t.next = 7, Object(m["e"])(e).allowance(this.owner, r);
                                        case 7:
                                            return n = t.sent, this.farm.allowance = n.toString(), t.abrupt("return", this.farm);
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), console.error("EventPool#allowance", t.t0);
                                        case 15:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 12]
                                ])
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "balanceOf",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t(e) {
                                var r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, r = Object(p["a"])(this.farm.lpAddresses), "" !== r) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 4:
                                            return t.next = 6, Object(m["e"])(r).balanceOf(this.owner);
                                        case 6:
                                            return n = t.sent, this.farm.balance = j["a"].toFixed(P["a"].utils.formatUnits(n, this.farm.decimal)), t.abrupt("return", this.farm);
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), console.error("balanceOf", t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 11]
                                ])
                            })));

                            function e(e) {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "price",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e = Object(p["a"])(this.farm.lpAddresses), t.next = 3, _["a"].getTokenPrice(e);
                                        case 3:
                                            return this.farm.price = t.sent, t.abrupt("return", this.farm.price);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "userInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().userInfo(this.farm.pid, this.owner);
                                        case 2:
                                            return e = t.sent, this.farm.userInfo.amount = j["a"].toFixed(P["a"].utils.formatUnits(e.amount, this.farm.decimal)), this.farm.userInfo.rewardDebt = j["a"].toFixed(P["a"].utils.formatUnits(e.rewardDebt, this.farm.decimal)), this.farm.userInfo.amountUSD = j["a"].toFixed(this.farm.userInfo.amount * this.farm.price), t.abrupt("return", this.farm);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "pendingKey",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().pendingReward(this.farm.pid, this.owner);
                                        case 2:
                                            return e = t.sent, this.farm.pendingKeys = j["a"].toFixed(P["a"].utils.formatUnits(e, 18)), t.abrupt("return", this.farm);
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "poolInfo",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["i"])().poolInfo(this.farm.pid);
                                        case 2:
                                            return e = t.sent, this.farm.allocPoint = e.allocPoint, this.farm.totalStaked = j["a"].toFixed(P["a"].utils.formatUnits(e.supply, this.farm.decimal)), this.farm.totalPrice = j["a"].toFixed(this.farm.totalStaked * this.farm.price), this.farm.startBlock = e.startBlock.toNumber(), this.farm.endBlock = e.endBlock.toNumber(), t.abrupt("return", this.farm);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }, {
                        key: "apy",
                        value: function () {
                            var t = Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n, a, o, i, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, this.price();
                                        case 2:
                                            return e = t.sent, r = this.farm.earnToken.toLowerCase(), n = Object(p["a"])(b["a"][r].address), t.next = 7, _["a"].getTokenPrice(n);
                                        case 7:
                                            a = t.sent, o = this.farm.earnTotal, i = 3 * (this.farm.endBlock - this.farm.startBlock) / 86400, s = Math.pow(1 + a * o / i / (this.farm.totalStaked * e), 365) - 1, this.farm.apy = s === 1 / 0 || s >= 1e8 ? "99999999+" : Math.floor(100 * s), this.farm.apr = Math.floor(a * o / i / (this.farm.totalStaked * e) * 365 * 100);
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this)
                            })));

                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e
                        }()
                    }]), t
                }(),
                Mn = {
                    components: {
                        StakeDialog: zr,
                        TopStatistics: S,
                        BCollapse: Yr["a"]
                    },
                    directives: {
                        "b-tooltip": l["a"],
                        "b-toggle": Nn,
                        Ripple: f["a"]
                    },
                    filters: {
                        formatNumber: function (t) {
                            var e = Kr()(t);
                            return e.format("0,0")
                        }
                    },
                    data: function () {
                        return {
                            blockNumber: 0,
                            lockItem: {},
                            stakeDialogShow: !1,
                            alertList: [],
                            farms: J,
                            currentFarm: {},
                            showDepositDialog: !1,
                            showGetKeyDialog: !1,
                            showWithdrawDialog: !1,
                            showSwapDialog: !1,
                            showSwapDialogIndex: 0,
                            interval: null,
                            statistics: {
                                totalStaked: 0,
                                dailyRewards: 0,
                                pendingRewards: 0,
                                myTotalStaked: 0
                            }
                        }
                    },
                    computed: Object(u["a"])({}, Object(d["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice"])),
                    watch: {
                        defaultAccount: function (t) {
                            t && t.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        var t = this;
                        this.defaultAccount && (this.init(), this.interval = setInterval((function () {
                            t.init()
                        }), 6e4)), this.getAlertList()
                    },
                    destroyed: function () {
                        this.interval && clearInterval(this.interval)
                    },
                    methods: {
                        init: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n, a, o, i, c, u, l, f, d;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.$provider.getBlockNumber().then((function (e) {
                                                t.blockNumber = e + 100
                                            })), r = t.farms.map((function (e, r) {
                                                return e.index = r, e.upDownIcon = !1, e.version = "v2", "event" === e.type ? new Bn(e, t.defaultAccount) : new Un(e, t.defaultAccount)
                                            })), n = r.map((function (t) {
                                                return t.allowance()
                                            })), e.next = 5, Promise.all(n);
                                        case 5:
                                            return t.farms = Object(s["a"])(t.farms), a = r.map((function (t) {
                                                return t.price()
                                            })), e.next = 9, Promise.all(a);
                                        case 9:
                                            return t.farms = Object(s["a"])(t.farms), o = r.map((function (t) {
                                                return t.poolInfo()
                                            })), e.next = 13, Promise.all(o);
                                        case 13:
                                            return t.farms = Object(s["a"])(t.farms), i = r.map((function (t) {
                                                return t.pendingKey()
                                            })), e.next = 17, Promise.all(i);
                                        case 17:
                                            return t.farms = Object(s["a"])(t.farms), c = r.map((function (t) {
                                                return t.userInfo()
                                            })), e.next = 21, Promise.all(c);
                                        case 21:
                                            return t.farms = Object(s["a"])(t.farms), u = r.map((function (e) {
                                                return e.balanceOf(t.$provider)
                                            })), e.next = 25, Promise.all(u);
                                        case 25:
                                            return l = r.map((function (t) {
                                                return t.xZooPoolInfo()
                                            })), e.next = 28, Promise.all(l);
                                        case 28:
                                            return t.farms = Object(s["a"])(t.farms), e.next = 31, t.calcTopStatistics();
                                        case 31:
                                            return e.next = 33, Object(m["r"])().totalAllocPoint();
                                        case 33:
                                            return f = e.sent, d = r.map((function (e) {
                                                return "event" === e.farm.type ? t.blockNumber > e.farm.endBlock ? 0 : e.apy() : e.apy(t.statistics.dailyRewards, f, t.keyPrice)
                                            })), e.next = 37, Promise.all(d);
                                        case 37:
                                            t.farms = Object(s["a"])(t.farms);
                                        case 38:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        calcTopStatistics: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return t.statistics.pendingRewards = t.farms.reduce((function (t, e) {
                                                return "event" === e.type ? t + 0 : t + parseFloat(e.pendingKeys)
                                            }), 0), t.statistics.pendingRewards = j["a"].toFixed(t.statistics.pendingRewards), t.statistics.totalStaked = t.farms.reduce((function (t, e) {
                                                return t + e.totalPrice
                                            }), 0), t.statistics.totalStaked = Math.floor(j["a"].toFixed(t.statistics.totalStaked)), t.statistics.myTotalStaked = t.farms.reduce((function (t, e) {
                                                return t + e.userInfo.amountUSD
                                            }), 0), e.next = 7, t.getDailyRewards();
                                        case 7:
                                            return t.statistics.dailyRewards = e.sent, e.next = 10, t.getMyKeys();
                                        case 10:
                                            t.statistics.allMyKeys = e.sent, t.statistics = Object(u["a"])({}, t.statistics);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        postStake: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            r = {
                                                owner: t.defaultAccount,
                                                stake: t.statistics.myTotalStaked
                                            }, I["a"].post("/api/zoo/stake", r).then((function (t) {})).catch((function (t) {
                                                console.log(t)
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getMyKeys: function () {
                            var t = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function e() {
                                var r, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return r = Object(p["a"])(b["a"].key.address), e.next = 3, Object(m["e"])(r).balanceOf(t.defaultAccount);
                                        case 3:
                                            return n = e.sent, e.abrupt("return", j["a"].toFixed(P["a"].utils.formatUnits(n, b["a"].key.decimals)));
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getDailyRewards: function () {
                            return Object(c["a"])(regeneratorRuntime.mark((function t() {
                                var e, r, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(m["r"])().keyPerBlock();
                                        case 2:
                                            return e = t.sent, r = j["a"].toFixed(P["a"].utils.formatUnits(e, b["a"].key.decimals)), n = 28800, t.abrupt("return", j["a"].toFixed(n * r));
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        finish: function () {
                            this.init(), this.postStake()
                        },
                        approve: function (t) {
                            var e = this;
                            return Object(c["a"])(regeneratorRuntime.mark((function r() {
                                var n, a, o, i;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e.currentFarm = t, e.loading(t, !0), r.prev = 2, n = Object(p["a"])(t.lpAddresses), a = "event" === t.type ? Object(p["a"])(h["h"]) : Object(p["a"])(h["p"]), r.next = 7, Object(m["e"])(n).approve(a, P["a"].constants.MaxUint256);
                                        case 7:
                                            return o = r.sent, r.next = 10, o.wait();
                                        case 10:
                                            e.$NotifySuccess("Approve", "Approve Success"), e.finish(), r.next = 18;
                                            break;
                                        case 14:
                                            r.prev = 14, r.t0 = r["catch"](2), i = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, e.$NotifyError("Error", i);
                                        case 18:
                                            e.loading(t, !1);
                                        case 19:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [2, 14]
                                ])
                            })))()
                        },
                        loading: function (t, e) {
                            t.disable = e, this.$set(this.farms, t.index, this.farms[t.index])
                        },
                        getKey: function (t) {
                            this.currentFarm = t, this.showGetKeyDialog = !0
                        },
                        deposit: function (t) {
                            this.currentFarm = t, this.showDepositDialog = !0
                        },
                        withdraw: function (t) {
                            this.currentFarm = t, this.showWithdrawDialog = !0
                        },
                        swap: function (t) {
                            this.currentFarm = t, this.showSwapDialog = !0, this.showSwapDialogIndex = 0
                        },
                        addLiquidity: function (t) {
                            this.currentFarm = t, this.showSwapDialog = !0, this.showSwapDialogIndex = 1
                        },
                        getAlertList: function () {
                            var t = this;
                            I["a"].get("https://api2.zoogame.finance/api/zoo/alerts").then((function (e) {
                                var r = [{
                                    value: 1,
                                    label: "Primary"
                                }, {
                                    value: 2,
                                    label: "Success"
                                }, {
                                    value: 3,
                                    label: "Warning"
                                }, {
                                    value: 4,
                                    label: "Danger"
                                }, {
                                    value: 5,
                                    label: "Normal"
                                }];
                                t.alertList = e.data.map((function (t) {
                                    var e = r.find((function (e) {
                                        return e.value === t.type
                                    }));
                                    return t.theme = e.label.toLowerCase(), t
                                }))
                            }))
                        },
                        booster: function (t) {
                            this.currentFarm = t, this.stakeDialogShow = !0
                        },
                        clickUpDown: function (t, e) {
                            e.upDownIcon = !e.upDownIcon, this.$set(this.farms, t, e)
                        }
                    }
                },
                zn = Mn,
                $n = (r("add4"), Object(x["a"])(zn, Hr, Wr, !1, null, "1a4b65da", null)),
                Kn = $n.exports,
                Vn = {
                    name: "Index",
                    components: {
                        Farm1: Xr,
                        Farm2: Kn
                    },
                    data: function () {
                        return {
                            tabIndex: 1
                        }
                    },
                    methods: {
                        activateTab: function (t) {}
                    }
                },
                Zn = Vn,
                qn = Object(x["a"])(Zn, n, a, !1, null, "0ce553c2", null);
            e["default"] = qn.exports
        },
        "7bff": function (t, e, r) {
            (function (e, n) {
                t.exports = n(r("430a"))
            })("undefined" !== typeof self && self, (function (t) {
                return function (t) {
                    var e = {};

                    function r(n) {
                        if (e[n]) return e[n].exports;
                        var a = e[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return t[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
                    }
                    return r.m = t, r.c = e, r.d = function (t, e, n) {
                        r.o(t, e) || Object.defineProperty(t, e, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function (t) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(t, "__esModule", {
                            value: !0
                        })
                    }, r.t = function (t, e) {
                        if (1 & e && (t = r(t)), 8 & e) return t;
                        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: t
                            }), 2 & e && "string" != typeof t)
                            for (var a in t) r.d(n, a, function (e) {
                                return t[e]
                            }.bind(null, a));
                        return n
                    }, r.n = function (t) {
                        var e = t && t.__esModule ? function () {
                            return t["default"]
                        } : function () {
                            return t
                        };
                        return r.d(e, "a", e), e
                    }, r.o = function (t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, r.p = "", r(r.s = "fb15")
                }({
                    "091b": function (t, e, r) {
                        var n = r("24fb");
                        e = n(!1), e.push([t.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), t.exports = e
                    },
                    "24fb": function (t, e, r) {
                        "use strict";

                        function n(t, e) {
                            var r = t[1] || "",
                                n = t[3];
                            if (!n) return r;
                            if (e && "function" === typeof btoa) {
                                var o = a(n),
                                    i = n.sources.map((function (t) {
                                        return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */")
                                    }));
                                return [r].concat(i).concat([o]).join("\n")
                            }
                            return [r].join("\n")
                        }

                        function a(t) {
                            var e = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                                r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);
                            return "/*# ".concat(r, " */")
                        }
                        t.exports = function (t) {
                            var e = [];
                            return e.toString = function () {
                                return this.map((function (e) {
                                    var r = n(e, t);
                                    return e[2] ? "@media ".concat(e[2], " {").concat(r, "}") : r
                                })).join("")
                            }, e.i = function (t, r, n) {
                                "string" === typeof t && (t = [
                                    [null, t, ""]
                                ]);
                                var a = {};
                                if (n)
                                    for (var o = 0; o < this.length; o++) {
                                        var i = this[o][0];
                                        null != i && (a[i] = !0)
                                    }
                                for (var s = 0; s < t.length; s++) {
                                    var c = [].concat(t[s]);
                                    n && a[c[0]] || (r && (c[2] ? c[2] = "".concat(r, " and ").concat(c[2]) : c[2] = r), e.push(c))
                                }
                            }, e
                        }
                    },
                    2638: function (t, e, r) {
                        "use strict";

                        function n() {
                            return n = Object.assign || function (t) {
                                for (var e, r = 1; r < arguments.length; r++)
                                    for (var n in e = arguments[r], e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                                return t
                            }, n.apply(this, arguments)
                        }
                        var a = ["attrs", "props", "domProps"],
                            o = ["class", "style", "directives"],
                            i = ["on", "nativeOn"],
                            s = function (t) {
                                return t.reduce((function (t, e) {
                                    for (var r in e)
                                        if (t[r])
                                            if (-1 !== a.indexOf(r)) t[r] = n({}, t[r], e[r]);
                                            else if (-1 !== o.indexOf(r)) {
                                        var s = t[r] instanceof Array ? t[r] : [t[r]],
                                            u = e[r] instanceof Array ? e[r] : [e[r]];
                                        t[r] = s.concat(u)
                                    } else if (-1 !== i.indexOf(r))
                                        for (var l in e[r])
                                            if (t[r][l]) {
                                                var f = t[r][l] instanceof Array ? t[r][l] : [t[r][l]],
                                                    d = e[r][l] instanceof Array ? e[r][l] : [e[r][l]];
                                                t[r][l] = f.concat(d)
                                            } else t[r][l] = e[r][l];
                                    else if ("hook" == r)
                                        for (var p in e[r]) t[r][p] = t[r][p] ? c(t[r][p], e[r][p]) : e[r][p];
                                    else t[r] = e[r];
                                    else t[r] = e[r];
                                    return t
                                }), {})
                            },
                            c = function (t, e) {
                                return function () {
                                    t && t.apply(this, arguments), e && e.apply(this, arguments)
                                }
                            };
                        t.exports = s
                    },
                    "499e": function (t, e, r) {
                        "use strict";

                        function n(t, e) {
                            for (var r = [], n = {}, a = 0; a < e.length; a++) {
                                var o = e[a],
                                    i = o[0],
                                    s = o[1],
                                    c = o[2],
                                    u = o[3],
                                    l = {
                                        id: t + ":" + a,
                                        css: s,
                                        media: c,
                                        sourceMap: u
                                    };
                                n[i] ? n[i].parts.push(l) : r.push(n[i] = {
                                    id: i,
                                    parts: [l]
                                })
                            }
                            return r
                        }
                        r.r(e), r.d(e, "default", (function () {
                            return m
                        }));
                        var a = "undefined" !== typeof document;
                        if ("undefined" !== typeof DEBUG && DEBUG && !a) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
                        var o = {},
                            i = a && (document.head || document.getElementsByTagName("head")[0]),
                            s = null,
                            c = 0,
                            u = !1,
                            l = function () {},
                            f = null,
                            d = "data-vue-ssr-id",
                            p = "undefined" !== typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

                        function m(t, e, r, a) {
                            u = r, f = a || {};
                            var i = n(t, e);
                            return h(i),
                                function (e) {
                                    for (var r = [], a = 0; a < i.length; a++) {
                                        var s = i[a],
                                            c = o[s.id];
                                        c.refs--, r.push(c)
                                    }
                                    for (e ? (i = n(t, e), h(i)) : i = [], a = 0; a < r.length; a++)
                                        if (c = r[a], 0 === c.refs) {
                                            for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                                            delete o[c.id]
                                        }
                                }
                        }

                        function h(t) {
                            for (var e = 0; e < t.length; e++) {
                                var r = t[e],
                                    n = o[r.id];
                                if (n) {
                                    n.refs++;
                                    for (var a = 0; a < n.parts.length; a++) n.parts[a](r.parts[a]);
                                    for (; a < r.parts.length; a++) n.parts.push(v(r.parts[a]));
                                    n.parts.length > r.parts.length && (n.parts.length = r.parts.length)
                                } else {
                                    var i = [];
                                    for (a = 0; a < r.parts.length; a++) i.push(v(r.parts[a]));
                                    o[r.id] = {
                                        id: r.id,
                                        refs: 1,
                                        parts: i
                                    }
                                }
                            }
                        }

                        function b() {
                            var t = document.createElement("style");
                            return t.type = "text/css", i.appendChild(t), t
                        }

                        function v(t) {
                            var e, r, n = document.querySelector("style[" + d + '~="' + t.id + '"]');
                            if (n) {
                                if (u) return l;
                                n.parentNode.removeChild(n)
                            }
                            if (p) {
                                var a = c++;
                                n = s || (s = b()), e = g.bind(null, n, a, !1), r = g.bind(null, n, a, !0)
                            } else n = b(), e = w.bind(null, n), r = function () {
                                n.parentNode.removeChild(n)
                            };
                            return e(t),
                                function (n) {
                                    if (n) {
                                        if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                                        e(t = n)
                                    } else r()
                                }
                        }
                        var y = function () {
                            var t = [];
                            return function (e, r) {
                                return t[e] = r, t.filter(Boolean).join("\n")
                            }
                        }();

                        function g(t, e, r, n) {
                            var a = r ? "" : n.css;
                            if (t.styleSheet) t.styleSheet.cssText = y(e, a);
                            else {
                                var o = document.createTextNode(a),
                                    i = t.childNodes;
                                i[e] && t.removeChild(i[e]), i.length ? t.insertBefore(o, i[e]) : t.appendChild(o)
                            }
                        }

                        function w(t, e) {
                            var r = e.css,
                                n = e.media,
                                a = e.sourceMap;
                            if (n && t.setAttribute("media", n), f.ssrId && t.setAttribute(d, e.id), a && (r += "\n/*# sourceURL=" + a.sources[0] + " */", r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"), t.styleSheet) t.styleSheet.cssText = r;
                            else {
                                while (t.firstChild) t.removeChild(t.firstChild);
                                t.appendChild(document.createTextNode(r))
                            }
                        }
                    },
                    "4abb": function (t, e, r) {
                        var n = r("7a57");
                        "string" === typeof n && (n = [
                            [t.i, n, ""]
                        ]), n.locals && (t.exports = n.locals);
                        var a = r("499e").default;
                        a("b2af7572", n, !0, {
                            sourceMap: !1,
                            shadowMode: !1
                        })
                    },
                    "4ed8": function (t, e, r) {
                        var n = r("091b");
                        "string" === typeof n && (n = [
                            [t.i, n, ""]
                        ]), n.locals && (t.exports = n.locals);
                        var a = r("499e").default;
                        a("2f6bee1a", n, !0, {
                            sourceMap: !1,
                            shadowMode: !1
                        })
                    },
                    "556c": function (t, e, r) {
                        var n = r("eef2");
                        "string" === typeof n && (n = [
                            [t.i, n, ""]
                        ]), n.locals && (t.exports = n.locals);
                        var a = r("499e").default;
                        a("1209fd47", n, !0, {
                            sourceMap: !1,
                            shadowMode: !1
                        })
                    },
                    "65d9": function (t, e, r) {
                        "use strict";

                        function n(t) {
                            return t && "object" === typeof t && "default" in t ? t["default"] : t
                        }
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                        var a = n(r("8bbf")),
                            o = "undefined" !== typeof Reflect && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;

                        function i(t, e) {
                            s(t, e), Object.getOwnPropertyNames(e.prototype).forEach((function (r) {
                                s(t.prototype, e.prototype, r)
                            })), Object.getOwnPropertyNames(e).forEach((function (r) {
                                s(t, e, r)
                            }))
                        }

                        function s(t, e, r) {
                            var n = r ? Reflect.getOwnMetadataKeys(e, r) : Reflect.getOwnMetadataKeys(e);
                            n.forEach((function (n) {
                                var a = r ? Reflect.getOwnMetadata(n, e, r) : Reflect.getOwnMetadata(n, e);
                                r ? Reflect.defineMetadata(n, a, t, r) : Reflect.defineMetadata(n, a, t)
                            }))
                        }
                        var c = {
                                __proto__: []
                            },
                            u = c instanceof Array;

                        function l(t) {
                            return function (e, r, n) {
                                var a = "function" === typeof e ? e : e.constructor;
                                a.__decorators__ || (a.__decorators__ = []), "number" !== typeof n && (n = void 0), a.__decorators__.push((function (e) {
                                    return t(e, r, n)
                                }))
                            }
                        }

                        function f() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return a.extend({
                                mixins: t
                            })
                        }

                        function d(t) {
                            var e = typeof t;
                            return null == t || "object" !== e && "function" !== e
                        }

                        function p(t, e) {
                            var r = e.prototype._init;
                            e.prototype._init = function () {
                                var e = this,
                                    r = Object.getOwnPropertyNames(t);
                                if (t.$options.props)
                                    for (var n in t.$options.props) t.hasOwnProperty(n) || r.push(n);
                                r.forEach((function (r) {
                                    "_" !== r.charAt(0) && Object.defineProperty(e, r, {
                                        get: function () {
                                            return t[r]
                                        },
                                        set: function (e) {
                                            t[r] = e
                                        },
                                        configurable: !0
                                    })
                                }))
                            };
                            var n = new e;
                            e.prototype._init = r;
                            var a = {};
                            return Object.keys(n).forEach((function (t) {
                                void 0 !== n[t] && (a[t] = n[t])
                            })), a
                        }
                        var m = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];

                        function h(t, e) {
                            void 0 === e && (e = {}), e.name = e.name || t._componentTag || t.name;
                            var r = t.prototype;
                            Object.getOwnPropertyNames(r).forEach((function (t) {
                                if ("constructor" !== t)
                                    if (m.indexOf(t) > -1) e[t] = r[t];
                                    else {
                                        var n = Object.getOwnPropertyDescriptor(r, t);
                                        void 0 !== n.value ? "function" === typeof n.value ? (e.methods || (e.methods = {}))[t] = n.value : (e.mixins || (e.mixins = [])).push({
                                            data: function () {
                                                var e;
                                                return e = {}, e[t] = n.value, e
                                            }
                                        }) : (n.get || n.set) && ((e.computed || (e.computed = {}))[t] = {
                                            get: n.get,
                                            set: n.set
                                        })
                                    }
                            })), (e.mixins || (e.mixins = [])).push({
                                data: function () {
                                    return p(this, t)
                                }
                            });
                            var n = t.__decorators__;
                            n && (n.forEach((function (t) {
                                return t(e)
                            })), delete t.__decorators__);
                            var s = Object.getPrototypeOf(t.prototype),
                                c = s instanceof a ? s.constructor : a,
                                u = c.extend(e);
                            return b(u, t, c), o && i(u, t), u
                        }

                        function b(t, e, r) {
                            Object.getOwnPropertyNames(e).forEach((function (n) {
                                if ("prototype" !== n) {
                                    var a = Object.getOwnPropertyDescriptor(t, n);
                                    if (!a || a.configurable) {
                                        var o = Object.getOwnPropertyDescriptor(e, n);
                                        if (!u) {
                                            if ("cid" === n) return;
                                            var i = Object.getOwnPropertyDescriptor(r, n);
                                            if (!d(o.value) && i && i.value === o.value) return
                                        }
                                        Object.defineProperty(t, n, o)
                                    }
                                }
                            }))
                        }

                        function v(t) {
                            return "function" === typeof t ? h(t) : function (e) {
                                return h(e, t)
                            }
                        }
                        v.registerHooks = function (t) {
                            m.push.apply(m, t)
                        }, e.default = v, e.createDecorator = l, e.mixins = f
                    },
                    "7a57": function (t, e, r) {
                        var n = r("24fb");
                        e = n(!1), e.push([t.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), t.exports = e
                    },
                    8875: function (t, e, r) {
                        var n, a, o;
                        (function (r, i) {
                            a = [], n = i, o = "function" === typeof n ? n.apply(e, a) : n, void 0 === o || (t.exports = o)
                        })("undefined" !== typeof self && self, (function () {
                            function t() {
                                var e = Object.getOwnPropertyDescriptor(document, "currentScript");
                                if (!e && "currentScript" in document && document.currentScript) return document.currentScript;
                                if (e && e.get !== t && document.currentScript) return document.currentScript;
                                try {
                                    throw new Error
                                } catch (p) {
                                    var r, n, a, o = /.*at [^(]*\((.*):(.+):(.+)\)$/gi,
                                        i = /@([^@]*):(\d+):(\d+)\s*$/gi,
                                        s = o.exec(p.stack) || i.exec(p.stack),
                                        c = s && s[1] || !1,
                                        u = s && s[2] || !1,
                                        l = document.location.href.replace(document.location.hash, ""),
                                        f = document.getElementsByTagName("script");
                                    c === l && (r = document.documentElement.outerHTML, n = new RegExp("(?:[^\\n]+?\\n){0," + (u - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), a = r.replace(n, "$1").trim());
                                    for (var d = 0; d < f.length; d++) {
                                        if ("interactive" === f[d].readyState) return f[d];
                                        if (f[d].src === c) return f[d];
                                        if (c === l && f[d].innerHTML && f[d].innerHTML.trim() === a) return f[d]
                                    }
                                    return null
                                }
                            }
                            return t
                        }))
                    },
                    "8bbf": function (e, r) {
                        e.exports = t
                    },
                    eef2: function (t, e, r) {
                        var n = r("24fb");
                        e = n(!1), e.push([t.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), t.exports = e
                    },
                    fb15: function (t, e, r) {
                        "use strict";
                        if (r.r(e), r.d(e, "ERROR_TYPE", (function () {
                                return G
                            })), r.d(e, "VueSliderMark", (function () {
                                return $
                            })), r.d(e, "VueSliderDot", (function () {
                                return R
                            })), "undefined" !== typeof window) {
                            var n = window.document.currentScript,
                                a = r("8875");
                            n = a(), "currentScript" in document || Object.defineProperty(document, "currentScript", {
                                get: a
                            });
                            var o = n && n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                            o && (r.p = o[1])
                        }
                        var i = r("2638"),
                            s = r.n(i);

                        function c(t, e, r, n) {
                            var a, o = arguments.length,
                                i = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
                            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n);
                            else
                                for (var s = t.length - 1; s >= 0; s--)(a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
                            return o > 3 && i && Object.defineProperty(e, r, i), i
                        }
                        var u = r("8bbf"),
                            l = r.n(u),
                            f = r("65d9"),
                            d = r.n(f);

                        function p(t, e) {
                            return void 0 === e && (e = {}), Object(f["createDecorator"])((function (r, n) {
                                (r.props || (r.props = {}))[n] = e, r.model = {
                                    prop: n,
                                    event: t || n
                                }
                            }))
                        }

                        function m(t) {
                            return void 0 === t && (t = {}), Object(f["createDecorator"])((function (e, r) {
                                (e.props || (e.props = {}))[r] = t
                            }))
                        }

                        function h(t, e) {
                            void 0 === e && (e = {});
                            var r = e.deep,
                                n = void 0 !== r && r,
                                a = e.immediate,
                                o = void 0 !== a && a;
                            return Object(f["createDecorator"])((function (e, r) {
                                "object" !== typeof e.watch && (e.watch = Object.create(null));
                                var a = e.watch;
                                "object" !== typeof a[t] || Array.isArray(a[t]) ? "undefined" === typeof a[t] && (a[t] = []) : a[t] = [a[t]], a[t].push({
                                    handler: r,
                                    deep: n,
                                    immediate: o
                                })
                            }))
                        }

                        function b(t) {
                            return b = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, b(t)
                        }

                        function v(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function y(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function g(t, e, r) {
                            return e && y(t.prototype, e), r && y(t, r), t
                        }

                        function w(t, e) {
                            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && k(t, e)
                        }

                        function k(t, e) {
                            return k = Object.setPrototypeOf || function (t, e) {
                                return t.__proto__ = e, t
                            }, k(t, e)
                        }

                        function x(t) {
                            var e = P();
                            return function () {
                                var r, n = j(t);
                                if (e) {
                                    var a = j(this).constructor;
                                    r = Reflect.construct(n, arguments, a)
                                } else r = n.apply(this, arguments);
                                return O(this, r)
                            }
                        }

                        function O(t, e) {
                            return !e || "object" !== b(e) && "function" !== typeof e ? S(t) : e
                        }

                        function S(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }

                        function P() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }

                        function j(t) {
                            return j = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            }, j(t)
                        }
                        r("4ed8");
                        var D = function () {
                                var t = function (t) {
                                    w(r, t);
                                    var e = x(r);

                                    function r() {
                                        return v(this, r), e.apply(this, arguments)
                                    }
                                    return g(r, [{
                                        key: "dragStart",
                                        value: function (t) {
                                            if (this.disabled) return !1;
                                            this.$emit("drag-start")
                                        }
                                    }, {
                                        key: "render",
                                        value: function () {
                                            var t = arguments[0];
                                            return t("div", {
                                                ref: "dot",
                                                class: this.dotClasses,
                                                attrs: {
                                                    "aria-valuetext": this.tooltipValue
                                                },
                                                on: {
                                                    mousedown: this.dragStart,
                                                    touchstart: this.dragStart
                                                }
                                            }, [this.$slots.dot || t("div", {
                                                class: this.handleClasses,
                                                style: this.dotStyle
                                            }), "none" !== this.tooltip ? t("div", {
                                                class: this.tooltipClasses
                                            }, [this.$slots.tooltip || t("div", {
                                                class: this.tooltipInnerClasses,
                                                style: this.tooltipStyle
                                            }, [t("span", {
                                                class: "vue-slider-dot-tooltip-text"
                                            }, [this.tooltipValue])])]) : null])
                                        }
                                    }, {
                                        key: "dotClasses",
                                        get: function () {
                                            return ["vue-slider-dot", {
                                                "vue-slider-dot-hover": "hover" === this.tooltip || "active" === this.tooltip,
                                                "vue-slider-dot-disabled": this.disabled,
                                                "vue-slider-dot-focus": this.focus
                                            }]
                                        }
                                    }, {
                                        key: "handleClasses",
                                        get: function () {
                                            return ["vue-slider-dot-handle", {
                                                "vue-slider-dot-handle-disabled": this.disabled,
                                                "vue-slider-dot-handle-focus": this.focus
                                            }]
                                        }
                                    }, {
                                        key: "tooltipClasses",
                                        get: function () {
                                            return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], {
                                                "vue-slider-dot-tooltip-show": this.showTooltip
                                            }]
                                        }
                                    }, {
                                        key: "tooltipInnerClasses",
                                        get: function () {
                                            return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], {
                                                "vue-slider-dot-tooltip-inner-disabled": this.disabled,
                                                "vue-slider-dot-tooltip-inner-focus": this.focus
                                            }]
                                        }
                                    }, {
                                        key: "showTooltip",
                                        get: function () {
                                            switch (this.tooltip) {
                                                case "always":
                                                    return !0;
                                                case "none":
                                                    return !1;
                                                case "focus":
                                                case "active":
                                                    return !!this.focus;
                                                default:
                                                    return !1
                                            }
                                        }
                                    }, {
                                        key: "tooltipValue",
                                        get: function () {
                                            return this.tooltipFormatter ? "string" === typeof this.tooltipFormatter ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value
                                        }
                                    }]), r
                                }(l.a);
                                return c([m({
                                    default: 0
                                })], t.prototype, "value", void 0), c([m()], t.prototype, "tooltip", void 0), c([m()], t.prototype, "dotStyle", void 0), c([m()], t.prototype, "tooltipStyle", void 0), c([m({
                                    type: String,
                                    validator: function (t) {
                                        return ["top", "right", "bottom", "left"].indexOf(t) > -1
                                    },
                                    required: !0
                                })], t.prototype, "tooltipPlacement", void 0), c([m({
                                    type: [String, Function]
                                })], t.prototype, "tooltipFormatter", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "focus", void 0), c([m({
                                    default: !1
                                })], t.prototype, "disabled", void 0), t = c([d.a], t), t
                            }(),
                            R = D;

                        function _(t) {
                            return _ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, _(t)
                        }

                        function A(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function C(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function I(t, e, r) {
                            return e && C(t.prototype, e), r && C(t, r), t
                        }

                        function T(t, e) {
                            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && F(t, e)
                        }

                        function F(t, e) {
                            return F = Object.setPrototypeOf || function (t, e) {
                                return t.__proto__ = e, t
                            }, F(t, e)
                        }

                        function E(t) {
                            var e = U();
                            return function () {
                                var r, n = B(t);
                                if (e) {
                                    var a = B(this).constructor;
                                    r = Reflect.construct(n, arguments, a)
                                } else r = n.apply(this, arguments);
                                return L(this, r)
                            }
                        }

                        function L(t, e) {
                            return !e || "object" !== _(e) && "function" !== typeof e ? N(t) : e
                        }

                        function N(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }

                        function U() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }

                        function B(t) {
                            return B = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            }, B(t)
                        }
                        r("556c");
                        var M, z = function () {
                                var t = function (t) {
                                    T(r, t);
                                    var e = E(r);

                                    function r() {
                                        return A(this, r), e.apply(this, arguments)
                                    }
                                    return I(r, [{
                                        key: "labelClickHandle",
                                        value: function (t) {
                                            t.stopPropagation(), this.$emit("pressLabel", this.mark.pos)
                                        }
                                    }, {
                                        key: "render",
                                        value: function () {
                                            var t = arguments[0],
                                                e = this.mark;
                                            return t("div", {
                                                class: this.marksClasses
                                            }, [this.$slots.step || t("div", {
                                                class: this.stepClasses,
                                                style: [this.stepStyle, e.style, e.active ? this.stepActiveStyle : null, e.active ? e.activeStyle : null]
                                            }), this.hideLabel ? null : this.$slots.label || t("div", {
                                                class: this.labelClasses,
                                                style: [this.labelStyle, e.labelStyle, e.active ? this.labelActiveStyle : null, e.active ? e.labelActiveStyle : null],
                                                on: {
                                                    click: this.labelClickHandle
                                                }
                                            }, [e.label])])
                                        }
                                    }, {
                                        key: "marksClasses",
                                        get: function () {
                                            return ["vue-slider-mark", {
                                                "vue-slider-mark-active": this.mark.active
                                            }]
                                        }
                                    }, {
                                        key: "stepClasses",
                                        get: function () {
                                            return ["vue-slider-mark-step", {
                                                "vue-slider-mark-step-active": this.mark.active
                                            }]
                                        }
                                    }, {
                                        key: "labelClasses",
                                        get: function () {
                                            return ["vue-slider-mark-label", {
                                                "vue-slider-mark-label-active": this.mark.active
                                            }]
                                        }
                                    }]), r
                                }(l.a);
                                return c([m({
                                    required: !0
                                })], t.prototype, "mark", void 0), c([m(Boolean)], t.prototype, "hideLabel", void 0), c([m()], t.prototype, "stepStyle", void 0), c([m()], t.prototype, "stepActiveStyle", void 0), c([m()], t.prototype, "labelStyle", void 0), c([m()], t.prototype, "labelActiveStyle", void 0), t = c([d.a], t), t
                            }(),
                            $ = z,
                            K = function (t) {
                                return "number" === typeof t ? "".concat(t, "px") : t
                            },
                            V = function (t) {
                                var e = document.documentElement,
                                    r = document.body,
                                    n = t.getBoundingClientRect(),
                                    a = {
                                        y: n.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || r.clientTop || 0),
                                        x: n.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || r.clientLeft || 0)
                                    };
                                return a
                            },
                            Z = function (t, e, r) {
                                var n = "targetTouches" in t ? t.targetTouches[0] : t,
                                    a = V(e),
                                    o = {
                                        x: n.pageX - a.x,
                                        y: n.pageY - a.y
                                    };
                                return {
                                    x: r ? e.offsetWidth - o.x : o.x,
                                    y: r ? e.offsetHeight - o.y : o.y
                                }
                            };
                        (function (t) {
                            t[t["PAGE_UP"] = 33] = "PAGE_UP", t[t["PAGE_DOWN"] = 34] = "PAGE_DOWN", t[t["END"] = 35] = "END", t[t["HOME"] = 36] = "HOME", t[t["LEFT"] = 37] = "LEFT", t[t["UP"] = 38] = "UP", t[t["RIGHT"] = 39] = "RIGHT", t[t["DOWN"] = 40] = "DOWN"
                        })(M || (M = {}));
                        var q = function (t, e) {
                            if (e.hook) {
                                var r = e.hook(t);
                                if ("function" === typeof r) return r;
                                if (!r) return null
                            }
                            switch (t.keyCode) {
                                case M.UP:
                                    return function (t) {
                                        return "ttb" === e.direction ? t - 1 : t + 1
                                    };
                                case M.RIGHT:
                                    return function (t) {
                                        return "rtl" === e.direction ? t - 1 : t + 1
                                    };
                                case M.DOWN:
                                    return function (t) {
                                        return "ttb" === e.direction ? t + 1 : t - 1
                                    };
                                case M.LEFT:
                                    return function (t) {
                                        return "rtl" === e.direction ? t + 1 : t - 1
                                    };
                                case M.END:
                                    return function () {
                                        return e.max
                                    };
                                case M.HOME:
                                    return function () {
                                        return e.min
                                    };
                                case M.PAGE_UP:
                                    return function (t) {
                                        return t + 10
                                    };
                                case M.PAGE_DOWN:
                                    return function (t) {
                                        return t - 10
                                    };
                                default:
                                    return null
                            }
                        };

                        function X(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function H(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function W(t, e, r) {
                            return e && H(t.prototype, e), r && H(t, r), t
                        }
                        var Y, G, J = function () {
                            function t(e) {
                                X(this, t), this.num = e
                            }
                            return W(t, [{
                                key: "decimal",
                                value: function (t, e) {
                                    var r = this.num,
                                        n = this.getDecimalLen(r),
                                        a = this.getDecimalLen(t),
                                        o = 0;
                                    switch (e) {
                                        case "+":
                                            o = this.getExponent(n, a), this.num = (this.safeRoundUp(r, o) + this.safeRoundUp(t, o)) / o;
                                            break;
                                        case "-":
                                            o = this.getExponent(n, a), this.num = (this.safeRoundUp(r, o) - this.safeRoundUp(t, o)) / o;
                                            break;
                                        case "*":
                                            this.num = this.safeRoundUp(this.safeRoundUp(r, this.getExponent(n)), this.safeRoundUp(t, this.getExponent(a))) / this.getExponent(n + a);
                                            break;
                                        case "/":
                                            o = this.getExponent(n, a), this.num = this.safeRoundUp(r, o) / this.safeRoundUp(t, o);
                                            break;
                                        case "%":
                                            o = this.getExponent(n, a), this.num = this.safeRoundUp(r, o) % this.safeRoundUp(t, o) / o;
                                            break
                                    }
                                    return this
                                }
                            }, {
                                key: "plus",
                                value: function (t) {
                                    return this.decimal(t, "+")
                                }
                            }, {
                                key: "minus",
                                value: function (t) {
                                    return this.decimal(t, "-")
                                }
                            }, {
                                key: "multiply",
                                value: function (t) {
                                    return this.decimal(t, "*")
                                }
                            }, {
                                key: "divide",
                                value: function (t) {
                                    return this.decimal(t, "/")
                                }
                            }, {
                                key: "remainder",
                                value: function (t) {
                                    return this.decimal(t, "%")
                                }
                            }, {
                                key: "toNumber",
                                value: function () {
                                    return this.num
                                }
                            }, {
                                key: "getDecimalLen",
                                value: function (t) {
                                    var e = "".concat(t).split("e");
                                    return ("".concat(e[0]).split(".")[1] || "").length - (e[1] ? +e[1] : 0)
                                }
                            }, {
                                key: "getExponent",
                                value: function (t, e) {
                                    return Math.pow(10, void 0 !== e ? Math.max(t, e) : t)
                                }
                            }, {
                                key: "safeRoundUp",
                                value: function (t, e) {
                                    return Math.round(t * e)
                                }
                            }]), t
                        }();

                        function Q(t, e) {
                            var r = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(t);
                                e && (n = n.filter((function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))), r.push.apply(r, n)
                            }
                            return r
                        }

                        function tt(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Q(Object(r), !0).forEach((function (e) {
                                    mt(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Q(Object(r)).forEach((function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }

                        function et(t, e) {
                            return at(t) || nt(t, e) || st(t, e) || rt()
                        }

                        function rt() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function nt(t, e) {
                            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                                var r = [],
                                    n = !0,
                                    a = !1,
                                    o = void 0;
                                try {
                                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
                                        if (r.push(i.value), e && r.length === e) break
                                } catch (c) {
                                    a = !0, o = c
                                } finally {
                                    try {
                                        n || null == s["return"] || s["return"]()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return r
                            }
                        }

                        function at(t) {
                            if (Array.isArray(t)) return t
                        }

                        function ot(t) {
                            return ut(t) || ct(t) || st(t) || it()
                        }

                        function it() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function st(t, e) {
                            if (t) {
                                if ("string" === typeof t) return lt(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? lt(t, e) : void 0
                            }
                        }

                        function ct(t) {
                            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                        }

                        function ut(t) {
                            if (Array.isArray(t)) return lt(t)
                        }

                        function lt(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n
                        }

                        function ft(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function dt(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function pt(t, e, r) {
                            return e && dt(t.prototype, e), r && dt(t, r), t
                        }

                        function mt(t, e, r) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r, t
                        }(function (t) {
                            t[t["VALUE"] = 1] = "VALUE", t[t["INTERVAL"] = 2] = "INTERVAL", t[t["MIN"] = 3] = "MIN", t[t["MAX"] = 4] = "MAX", t[t["ORDER"] = 5] = "ORDER"
                        })(G || (G = {}));
                        var ht = (Y = {}, mt(Y, G.VALUE, 'The type of the "value" is illegal'), mt(Y, G.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), mt(Y, G.MIN, 'The "value" must be greater than or equal to the "min".'), mt(Y, G.MAX, 'The "value" must be less than or equal to the "max".'), mt(Y, G.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), Y),
                            bt = function () {
                                function t(e) {
                                    ft(this, t), this.dotsPos = [], this.dotsValue = [], this.cacheRangeDir = {}, this.data = e.data, this.max = e.max, this.min = e.min, this.interval = e.interval, this.order = e.order, this.marks = e.marks, this.included = e.included, this.process = e.process, this.adsorb = e.adsorb, this.dotOptions = e.dotOptions, this.onError = e.onError, this.order ? (this.minRange = e.minRange || 0, this.maxRange = e.maxRange || 0, this.enableCross = e.enableCross, this.fixed = e.fixed) : ((e.minRange || e.maxRange || !e.enableCross || e.fixed) && this.emitError(G.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(e.value)
                                }
                                return pt(t, [{
                                    key: "setValue",
                                    value: function (t) {
                                        var e = this;
                                        this.setDotsValue(Array.isArray(t) ? this.order ? ot(t).sort((function (t, r) {
                                            return e.getIndexByValue(t) - e.getIndexByValue(r)
                                        })) : ot(t) : [t], !0)
                                    }
                                }, {
                                    key: "setDotsValue",
                                    value: function (t, e) {
                                        this.dotsValue = t, e && this.syncDotsPos()
                                    }
                                }, {
                                    key: "setDotsPos",
                                    value: function (t) {
                                        var e = this,
                                            r = this.order ? ot(t).sort((function (t, e) {
                                                return t - e
                                            })) : t;
                                        this.dotsPos = r, this.setDotsValue(r.map((function (t) {
                                            return e.getValueByPos(t)
                                        })), this.adsorb)
                                    }
                                }, {
                                    key: "getValueByPos",
                                    value: function (t) {
                                        var e = this.parsePos(t);
                                        if (this.included) {
                                            var r = 100;
                                            this.markList.forEach((function (n) {
                                                var a = Math.abs(n.pos - t);
                                                a < r && (r = a, e = n.value)
                                            }))
                                        }
                                        return e
                                    }
                                }, {
                                    key: "syncDotsPos",
                                    value: function () {
                                        var t = this;
                                        this.dotsPos = this.dotsValue.map((function (e) {
                                            return t.parseValue(e)
                                        }))
                                    }
                                }, {
                                    key: "getRecentDot",
                                    value: function (t) {
                                        var e = this.dotsPos.map((function (e) {
                                            return Math.abs(e - t)
                                        }));
                                        return e.indexOf(Math.min.apply(Math, ot(e)))
                                    }
                                }, {
                                    key: "getIndexByValue",
                                    value: function (t) {
                                        return this.data ? this.data.indexOf(t) : new J(+t).minus(this.min).divide(this.interval).toNumber()
                                    }
                                }, {
                                    key: "getValueByIndex",
                                    value: function (t) {
                                        return t < 0 ? t = 0 : t > this.total && (t = this.total), this.data ? this.data[t] : new J(t).multiply(this.interval).plus(this.min).toNumber()
                                    }
                                }, {
                                    key: "setDotPos",
                                    value: function (t, e) {
                                        t = this.getValidPos(t, e).pos;
                                        var r = t - this.dotsPos[e];
                                        if (r) {
                                            var n = new Array(this.dotsPos.length);
                                            this.fixed ? n = this.getFixedChangePosArr(r, e) : this.minRange || this.maxRange ? n = this.getLimitRangeChangePosArr(t, r, e) : n[e] = r, this.setDotsPos(this.dotsPos.map((function (t, e) {
                                                return t + (n[e] || 0)
                                            })))
                                        }
                                    }
                                }, {
                                    key: "getFixedChangePosArr",
                                    value: function (t, e) {
                                        var r = this;
                                        return this.dotsPos.forEach((function (n, a) {
                                            if (a !== e) {
                                                var o = r.getValidPos(n + t, a),
                                                    i = o.pos,
                                                    s = o.inRange;
                                                s || (t = Math.min(Math.abs(i - n), Math.abs(t)) * (t < 0 ? -1 : 1))
                                            }
                                        })), this.dotsPos.map((function (e) {
                                            return t
                                        }))
                                    }
                                }, {
                                    key: "getLimitRangeChangePosArr",
                                    value: function (t, e, r) {
                                        var n = this,
                                            a = [{
                                                index: r,
                                                changePos: e
                                            }],
                                            o = e;
                                        return [this.minRange, this.maxRange].forEach((function (i, s) {
                                            if (!i) return !1;
                                            var c = 0 === s,
                                                u = e > 0,
                                                l = 0;
                                            l = c ? u ? 1 : -1 : u ? -1 : 1;
                                            var f = function (t, e) {
                                                    var r = Math.abs(t - e);
                                                    return c ? r < n.minRangeDir : r > n.maxRangeDir
                                                },
                                                d = r + l,
                                                p = n.dotsPos[d],
                                                m = t;
                                            while (n.isPos(p) && f(p, m)) {
                                                var h = n.getValidPos(p + o, d),
                                                    b = h.pos;
                                                a.push({
                                                    index: d,
                                                    changePos: b - p
                                                }), d += l, m = b, p = n.dotsPos[d]
                                            }
                                        })), this.dotsPos.map((function (t, e) {
                                            var r = a.filter((function (t) {
                                                return t.index === e
                                            }));
                                            return r.length ? r[0].changePos : 0
                                        }))
                                    }
                                }, {
                                    key: "isPos",
                                    value: function (t) {
                                        return "number" === typeof t
                                    }
                                }, {
                                    key: "getValidPos",
                                    value: function (t, e) {
                                        var r = this.valuePosRange[e],
                                            n = !0;
                                        return t < r[0] ? (t = r[0], n = !1) : t > r[1] && (t = r[1], n = !1), {
                                            pos: t,
                                            inRange: n
                                        }
                                    }
                                }, {
                                    key: "parseValue",
                                    value: function (t) {
                                        if (this.data) t = this.data.indexOf(t);
                                        else if ("number" === typeof t || "string" === typeof t) {
                                            if (t = +t, t < this.min) return this.emitError(G.MIN), 0;
                                            if (t > this.max) return this.emitError(G.MAX), 0;
                                            if ("number" !== typeof t || t !== t) return this.emitError(G.VALUE), 0;
                                            t = new J(t).minus(this.min).divide(this.interval).toNumber()
                                        }
                                        var e = new J(t).multiply(this.gap).toNumber();
                                        return e < 0 ? 0 : e > 100 ? 100 : e
                                    }
                                }, {
                                    key: "parsePos",
                                    value: function (t) {
                                        var e = Math.round(t / this.gap);
                                        return this.getValueByIndex(e)
                                    }
                                }, {
                                    key: "isActiveByPos",
                                    value: function (t) {
                                        return this.processArray.some((function (e) {
                                            var r = et(e, 2),
                                                n = r[0],
                                                a = r[1];
                                            return t >= n && t <= a
                                        }))
                                    }
                                }, {
                                    key: "getValues",
                                    value: function () {
                                        if (this.data) return this.data;
                                        for (var t = [], e = 0; e <= this.total; e++) t.push(new J(e).multiply(this.interval).plus(this.min).toNumber());
                                        return t
                                    }
                                }, {
                                    key: "getRangeDir",
                                    value: function (t) {
                                        return t ? new J(t).divide(new J(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100
                                    }
                                }, {
                                    key: "emitError",
                                    value: function (t) {
                                        this.onError && this.onError(t, ht[t])
                                    }
                                }, {
                                    key: "getDotRange",
                                    value: function (t, e, r) {
                                        if (!this.dotOptions) return r;
                                        var n = Array.isArray(this.dotOptions) ? this.dotOptions[t] : this.dotOptions;
                                        return n && void 0 !== n[e] ? this.parseValue(n[e]) : r
                                    }
                                }, {
                                    key: "markList",
                                    get: function () {
                                        var t = this;
                                        if (!this.marks) return [];
                                        var e = function (e, r) {
                                            var n = t.parseValue(e);
                                            return tt({
                                                pos: n,
                                                value: e,
                                                label: e,
                                                active: t.isActiveByPos(n)
                                            }, r)
                                        };
                                        return !0 === this.marks ? this.getValues().map((function (t) {
                                            return e(t)
                                        })) : "[object Object]" === Object.prototype.toString.call(this.marks) ? Object.keys(this.marks).sort((function (t, e) {
                                            return +t - +e
                                        })).map((function (r) {
                                            var n = t.marks[r];
                                            return e(r, "string" !== typeof n ? n : {
                                                label: n
                                            })
                                        })) : Array.isArray(this.marks) ? this.marks.map((function (t) {
                                            return e(t)
                                        })) : "function" === typeof this.marks ? this.getValues().map((function (e) {
                                            return {
                                                value: e,
                                                result: t.marks(e)
                                            }
                                        })).filter((function (t) {
                                            var e = t.result;
                                            return !!e
                                        })).map((function (t) {
                                            var r = t.value,
                                                n = t.result;
                                            return e(r, n)
                                        })) : []
                                    }
                                }, {
                                    key: "processArray",
                                    get: function () {
                                        if (this.process) {
                                            if ("function" === typeof this.process) return this.process(this.dotsPos);
                                            if (1 === this.dotsPos.length) return [
                                                [0, this.dotsPos[0]]
                                            ];
                                            if (this.dotsPos.length > 1) return [
                                                [Math.min.apply(Math, ot(this.dotsPos)), Math.max.apply(Math, ot(this.dotsPos))]
                                            ]
                                        }
                                        return []
                                    }
                                }, {
                                    key: "total",
                                    get: function () {
                                        var t = 0;
                                        return t = this.data ? this.data.length - 1 : new J(this.max).minus(this.min).divide(this.interval).toNumber(), t - Math.floor(t) !== 0 ? (this.emitError(G.INTERVAL), 0) : t
                                    }
                                }, {
                                    key: "gap",
                                    get: function () {
                                        return 100 / this.total
                                    }
                                }, {
                                    key: "minRangeDir",
                                    get: function () {
                                        return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange)
                                    }
                                }, {
                                    key: "maxRangeDir",
                                    get: function () {
                                        return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange)
                                    }
                                }, {
                                    key: "valuePosRange",
                                    get: function () {
                                        var t = this,
                                            e = this.dotsPos,
                                            r = [];
                                        return e.forEach((function (n, a) {
                                            r.push([Math.max(t.minRange ? t.minRangeDir * a : 0, t.enableCross ? 0 : e[a - 1] || 0, t.getDotRange(a, "min", 0)), Math.min(t.minRange ? 100 - t.minRangeDir * (e.length - 1 - a) : 100, t.enableCross ? 100 : e[a + 1] || 100, t.getDotRange(a, "max", 100))])
                                        })), r
                                    }
                                }, {
                                    key: "dotsIndex",
                                    get: function () {
                                        var t = this;
                                        return this.dotsValue.map((function (e) {
                                            return t.getIndexByValue(e)
                                        }))
                                    }
                                }]), t
                            }();

                        function vt(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function yt(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function gt(t, e, r) {
                            return e && yt(t.prototype, e), r && yt(t, r), t
                        }
                        var wt = function () {
                            function t(e) {
                                vt(this, t), this.states = 0, this.map = e
                            }
                            return gt(t, [{
                                key: "add",
                                value: function (t) {
                                    this.states |= t
                                }
                            }, {
                                key: "delete",
                                value: function (t) {
                                    this.states &= ~t
                                }
                            }, {
                                key: "toggle",
                                value: function (t) {
                                    this.has(t) ? this.delete(t) : this.add(t)
                                }
                            }, {
                                key: "has",
                                value: function (t) {
                                    return !!(this.states & t)
                                }
                            }]), t
                        }();

                        function kt(t, e) {
                            return St(t) || Ot(t, e) || At(t, e) || xt()
                        }

                        function xt() {
                            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function Ot(t, e) {
                            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) {
                                var r = [],
                                    n = !0,
                                    a = !1,
                                    o = void 0;
                                try {
                                    for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done); n = !0)
                                        if (r.push(i.value), e && r.length === e) break
                                } catch (c) {
                                    a = !0, o = c
                                } finally {
                                    try {
                                        n || null == s["return"] || s["return"]()
                                    } finally {
                                        if (a) throw o
                                    }
                                }
                                return r
                            }
                        }

                        function St(t) {
                            if (Array.isArray(t)) return t
                        }

                        function Pt(t, e) {
                            var r = Object.keys(t);
                            if (Object.getOwnPropertySymbols) {
                                var n = Object.getOwnPropertySymbols(t);
                                e && (n = n.filter((function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                                }))), r.push.apply(r, n)
                            }
                            return r
                        }

                        function jt(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? Pt(Object(r), !0).forEach((function (e) {
                                    Dt(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Pt(Object(r)).forEach((function (e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }

                        function Dt(t, e, r) {
                            return e in t ? Object.defineProperty(t, e, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[e] = r, t
                        }

                        function Rt(t) {
                            return It(t) || Ct(t) || At(t) || _t()
                        }

                        function _t() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }

                        function At(t, e) {
                            if (t) {
                                if ("string" === typeof t) return Tt(t, e);
                                var r = Object.prototype.toString.call(t).slice(8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Tt(t, e) : void 0
                            }
                        }

                        function Ct(t) {
                            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                        }

                        function It(t) {
                            if (Array.isArray(t)) return Tt(t)
                        }

                        function Tt(t, e) {
                            (null == e || e > t.length) && (e = t.length);
                            for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                            return n
                        }

                        function Ft(t) {
                            return Ft = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function (t) {
                                return typeof t
                            } : function (t) {
                                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                            }, Ft(t)
                        }

                        function Et(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }

                        function Lt(t, e) {
                            for (var r = 0; r < e.length; r++) {
                                var n = e[r];
                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                            }
                        }

                        function Nt(t, e, r) {
                            return e && Lt(t.prototype, e), r && Lt(t, r), t
                        }

                        function Ut(t, e) {
                            if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && Bt(t, e)
                        }

                        function Bt(t, e) {
                            return Bt = Object.setPrototypeOf || function (t, e) {
                                return t.__proto__ = e, t
                            }, Bt(t, e)
                        }

                        function Mt(t) {
                            var e = Kt();
                            return function () {
                                var r, n = Vt(t);
                                if (e) {
                                    var a = Vt(this).constructor;
                                    r = Reflect.construct(n, arguments, a)
                                } else r = n.apply(this, arguments);
                                return zt(this, r)
                            }
                        }

                        function zt(t, e) {
                            return !e || "object" !== Ft(e) && "function" !== typeof e ? $t(t) : e
                        }

                        function $t(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }

                        function Kt() {
                            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" === typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () {}))), !0
                            } catch (t) {
                                return !1
                            }
                        }

                        function Vt(t) {
                            return Vt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                                return t.__proto__ || Object.getPrototypeOf(t)
                            }, Vt(t)
                        }
                        r("4abb");
                        var Zt = {
                                None: 0,
                                Drag: 2,
                                Focus: 4
                            },
                            qt = 4,
                            Xt = function () {
                                var t = function (t) {
                                    Ut(r, t);
                                    var e = Mt(r);

                                    function r() {
                                        var t;
                                        return Et(this, r), t = e.apply(this, arguments), t.states = new wt(Zt), t.scale = 1, t.focusDotIndex = 0, t
                                    }
                                    return Nt(r, [{
                                        key: "isObjectData",
                                        value: function (t) {
                                            return !!t && "[object Object]" === Object.prototype.toString.call(t)
                                        }
                                    }, {
                                        key: "isObjectArrayData",
                                        value: function (t) {
                                            return !!t && Array.isArray(t) && t.length > 0 && "object" === Ft(t[0])
                                        }
                                    }, {
                                        key: "onValueChanged",
                                        value: function () {
                                            this.control && !this.states.has(Zt.Drag) && this.isNotSync && (this.control.setValue(this.value), this.syncValueByPos())
                                        }
                                    }, {
                                        key: "created",
                                        value: function () {
                                            this.initControl()
                                        }
                                    }, {
                                        key: "mounted",
                                        value: function () {
                                            this.bindEvent()
                                        }
                                    }, {
                                        key: "beforeDestroy",
                                        value: function () {
                                            this.unbindEvent()
                                        }
                                    }, {
                                        key: "bindEvent",
                                        value: function () {
                                            document.addEventListener("touchmove", this.dragMove, {
                                                passive: !1
                                            }), document.addEventListener("touchend", this.dragEnd, {
                                                passive: !1
                                            }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle)
                                        }
                                    }, {
                                        key: "unbindEvent",
                                        value: function () {
                                            document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle)
                                        }
                                    }, {
                                        key: "setScale",
                                        value: function () {
                                            var t = new J(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
                                            void 0 !== this.zoom && t.multiply(this.zoom), t.divide(100), this.scale = t.toNumber()
                                        }
                                    }, {
                                        key: "initControl",
                                        value: function () {
                                            var t = this;
                                            this.control = new bt({
                                                value: this.value,
                                                data: this.sliderData,
                                                enableCross: this.enableCross,
                                                fixed: this.fixed,
                                                max: this.max,
                                                min: this.min,
                                                interval: this.interval,
                                                minRange: this.minRange,
                                                maxRange: this.maxRange,
                                                order: this.order,
                                                marks: this.sliderMarks,
                                                included: this.included,
                                                process: this.process,
                                                adsorb: this.adsorb,
                                                dotOptions: this.dotOptions,
                                                onError: this.emitError
                                            }), this.syncValueByPos(), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach((function (e) {
                                                t.$watch(e, (function (r) {
                                                    if ("data" === e && Array.isArray(t.control.data) && Array.isArray(r) && t.control.data.length === r.length && r.every((function (e, r) {
                                                            return e === t.control.data[r]
                                                        }))) return !1;
                                                    switch (e) {
                                                        case "data":
                                                        case "dataLabel":
                                                        case "dataValue":
                                                            t.control.data = t.sliderData;
                                                            break;
                                                        case "mark":
                                                            t.control.marks = t.sliderMarks;
                                                            break;
                                                        default:
                                                            t.control[e] = r
                                                    } ["data", "max", "min", "interval"].indexOf(e) > -1 && t.control.syncDotsPos()
                                                }))
                                            }))
                                        }
                                    }, {
                                        key: "syncValueByPos",
                                        value: function () {
                                            var t = this.control.dotsValue;
                                            this.isDiff(t, Array.isArray(this.value) ? this.value : [this.value]) && this.$emit("change", 1 === t.length ? t[0] : Rt(t), this.focusDotIndex)
                                        }
                                    }, {
                                        key: "isDiff",
                                        value: function (t, e) {
                                            return t.length !== e.length || t.some((function (t, r) {
                                                return t !== e[r]
                                            }))
                                        }
                                    }, {
                                        key: "emitError",
                                        value: function (t, e) {
                                            this.silent || console.error("[VueSlider error]: ".concat(e)), this.$emit("error", t, e)
                                        }
                                    }, {
                                        key: "dragStartOnProcess",
                                        value: function (t) {
                                            if (this.dragOnClick) {
                                                this.setScale();
                                                var e = this.getPosByEvent(t),
                                                    r = this.control.getRecentDot(e);
                                                if (this.dots[r].disabled) return;
                                                this.dragStart(r), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos()
                                            }
                                        }
                                    }, {
                                        key: "dragStart",
                                        value: function (t) {
                                            this.focusDotIndex = t, this.setScale(), this.states.add(Zt.Drag), this.states.add(Zt.Focus), this.$emit("drag-start", this.focusDotIndex)
                                        }
                                    }, {
                                        key: "dragMove",
                                        value: function (t) {
                                            if (!this.states.has(Zt.Drag)) return !1;
                                            t.preventDefault();
                                            var e = this.getPosByEvent(t);
                                            this.isCrossDot(e), this.control.setDotPos(e, this.focusDotIndex), this.lazy || this.syncValueByPos();
                                            var r = this.control.dotsValue;
                                            this.$emit("dragging", 1 === r.length ? r[0] : Rt(r), this.focusDotIndex)
                                        }
                                    }, {
                                        key: "isCrossDot",
                                        value: function (t) {
                                            if (this.canSort) {
                                                var e = this.focusDotIndex,
                                                    r = t;
                                                if (r > this.dragRange[1] ? (r = this.dragRange[1], this.focusDotIndex++) : r < this.dragRange[0] && (r = this.dragRange[0], this.focusDotIndex--), e !== this.focusDotIndex) {
                                                    var n = this.$refs["dot-".concat(this.focusDotIndex)];
                                                    n && n.$el && n.$el.focus(), this.control.setDotPos(r, e)
                                                }
                                            }
                                        }
                                    }, {
                                        key: "dragEnd",
                                        value: function (t) {
                                            var e = this;
                                            if (!this.states.has(Zt.Drag)) return !1;
                                            setTimeout((function () {
                                                e.lazy && e.syncValueByPos(), e.included && e.isNotSync ? e.control.setValue(e.value) : e.control.syncDotsPos(), e.states.delete(Zt.Drag), e.useKeyboard && !("targetTouches" in t) || e.states.delete(Zt.Focus), e.$emit("drag-end", e.focusDotIndex)
                                            }))
                                        }
                                    }, {
                                        key: "blurHandle",
                                        value: function (t) {
                                            if (!this.states.has(Zt.Focus) || !this.$refs.container || this.$refs.container.contains(t.target)) return !1;
                                            this.states.delete(Zt.Focus)
                                        }
                                    }, {
                                        key: "clickHandle",
                                        value: function (t) {
                                            if (!this.clickable || this.disabled) return !1;
                                            if (!this.states.has(Zt.Drag)) {
                                                this.setScale();
                                                var e = this.getPosByEvent(t);
                                                this.setValueByPos(e)
                                            }
                                        }
                                    }, {
                                        key: "focus",
                                        value: function () {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                                            this.states.add(Zt.Focus), this.focusDotIndex = t
                                        }
                                    }, {
                                        key: "blur",
                                        value: function () {
                                            this.states.delete(Zt.Focus)
                                        }
                                    }, {
                                        key: "getValue",
                                        value: function () {
                                            var t = this.control.dotsValue;
                                            return 1 === t.length ? t[0] : t
                                        }
                                    }, {
                                        key: "getIndex",
                                        value: function () {
                                            var t = this.control.dotsIndex;
                                            return 1 === t.length ? t[0] : t
                                        }
                                    }, {
                                        key: "setValue",
                                        value: function (t) {
                                            this.control.setValue(Array.isArray(t) ? Rt(t) : [t]), this.syncValueByPos()
                                        }
                                    }, {
                                        key: "setIndex",
                                        value: function (t) {
                                            var e = this,
                                                r = Array.isArray(t) ? t.map((function (t) {
                                                    return e.control.getValueByIndex(t)
                                                })) : this.control.getValueByIndex(t);
                                            this.setValue(r)
                                        }
                                    }, {
                                        key: "setValueByPos",
                                        value: function (t) {
                                            var e = this,
                                                r = this.control.getRecentDot(t);
                                            if (this.disabled || this.dots[r].disabled) return !1;
                                            this.focusDotIndex = r, this.control.setDotPos(t, r), this.syncValueByPos(), this.useKeyboard && this.states.add(Zt.Focus), setTimeout((function () {
                                                e.included && e.isNotSync ? e.control.setValue(e.value) : e.control.syncDotsPos()
                                            }))
                                        }
                                    }, {
                                        key: "keydownHandle",
                                        value: function (t) {
                                            var e = this;
                                            if (!this.useKeyboard || !this.states.has(Zt.Focus)) return !1;
                                            var r = this.included && this.marks,
                                                n = q(t, {
                                                    direction: this.direction,
                                                    max: r ? this.control.markList.length - 1 : this.control.total,
                                                    min: 0,
                                                    hook: this.keydownHook
                                                });
                                            if (n) {
                                                t.preventDefault();
                                                var a = -1,
                                                    o = 0;
                                                r ? (this.control.markList.some((function (t, r) {
                                                    return t.value === e.control.dotsValue[e.focusDotIndex] && (a = n(r), !0)
                                                })), a < 0 ? a = 0 : a > this.control.markList.length - 1 && (a = this.control.markList.length - 1), o = this.control.markList[a].pos) : (a = n(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), o = this.control.parseValue(this.control.getValueByIndex(a))), this.isCrossDot(o), this.control.setDotPos(o, this.focusDotIndex), this.syncValueByPos()
                                            }
                                        }
                                    }, {
                                        key: "getPosByEvent",
                                        value: function (t) {
                                            return Z(t, this.$refs.rail, this.isReverse)[this.isHorizontal ? "x" : "y"] / this.scale
                                        }
                                    }, {
                                        key: "renderSlot",
                                        value: function (t, e, r, n) {
                                            var a = this.$createElement,
                                                o = this.$scopedSlots[t];
                                            return o ? n ? o(e) : a("template", {
                                                slot: t
                                            }, [o(e)]) : r
                                        }
                                    }, {
                                        key: "render",
                                        value: function () {
                                            var t = this,
                                                e = arguments[0];
                                            return e("div", s()([{
                                                ref: "container",
                                                class: this.containerClasses,
                                                style: this.containerStyles,
                                                on: {
                                                    click: this.clickHandle,
                                                    touchstart: this.dragStartOnProcess,
                                                    mousedown: this.dragStartOnProcess
                                                }
                                            }, this.$attrs]), [e("div", {
                                                ref: "rail",
                                                class: "vue-slider-rail",
                                                style: this.railStyle
                                            }, [this.processArray.map((function (r, n) {
                                                return t.renderSlot("process", r, e("div", {
                                                    class: "vue-slider-process",
                                                    key: "process-".concat(n),
                                                    style: r.style
                                                }), !0)
                                            })), this.sliderMarks ? e("div", {
                                                class: "vue-slider-marks"
                                            }, [this.control.markList.map((function (r, n) {
                                                var a;
                                                return t.renderSlot("mark", r, e("vue-slider-mark", {
                                                    key: "mark-".concat(n),
                                                    attrs: {
                                                        mark: r,
                                                        hideLabel: t.hideLabel,
                                                        stepStyle: t.stepStyle,
                                                        stepActiveStyle: t.stepActiveStyle,
                                                        labelStyle: t.labelStyle,
                                                        labelActiveStyle: t.labelActiveStyle
                                                    },
                                                    style: (a = {}, Dt(a, t.isHorizontal ? "height" : "width", "100%"), Dt(a, t.isHorizontal ? "width" : "height", t.tailSize), Dt(a, t.mainDirection, "".concat(r.pos, "%")), a),
                                                    on: {
                                                        pressLabel: function (e) {
                                                            return t.clickable && t.setValueByPos(e)
                                                        }
                                                    }
                                                }, [t.renderSlot("step", r, null), t.renderSlot("label", r, null)]), !0)
                                            }))]) : null, this.dots.map((function (r, n) {
                                                var a;
                                                return e("vue-slider-dot", {
                                                    ref: "dot-".concat(n),
                                                    key: "dot-".concat(n),
                                                    attrs: jt({
                                                        value: r.value,
                                                        disabled: r.disabled,
                                                        focus: r.focus,
                                                        "dot-style": [r.style, r.disabled ? r.disabledStyle : null, r.focus ? r.focusStyle : null],
                                                        tooltip: r.tooltip || t.tooltip,
                                                        "tooltip-style": [t.tooltipStyle, r.tooltipStyle, r.disabled ? r.tooltipDisabledStyle : null, r.focus ? r.tooltipFocusStyle : null],
                                                        "tooltip-formatter": Array.isArray(t.sliderTooltipFormatter) ? t.sliderTooltipFormatter[n] : t.sliderTooltipFormatter,
                                                        "tooltip-placement": t.tooltipDirections[n],
                                                        role: "slider",
                                                        "aria-valuenow": r.value,
                                                        "aria-valuemin": t.min,
                                                        "aria-valuemax": t.max,
                                                        "aria-orientation": t.isHorizontal ? "horizontal" : "vertical",
                                                        tabindex: "0"
                                                    }, t.dotAttrs),
                                                    style: [t.dotBaseStyle, (a = {}, Dt(a, t.mainDirection, "".concat(r.pos, "%")), Dt(a, "transition", "".concat(t.mainDirection, " ").concat(t.animateTime, "s")), a)],
                                                    on: {
                                                        "drag-start": function () {
                                                            return t.dragStart(n)
                                                        }
                                                    },
                                                    nativeOn: {
                                                        focus: function () {
                                                            return !r.disabled && t.focus(n)
                                                        },
                                                        blur: function () {
                                                            return t.blur()
                                                        }
                                                    }
                                                }, [t.renderSlot("dot", r, null), t.renderSlot("tooltip", r, null)])
                                            })), this.renderSlot("default", {
                                                value: this.getValue()
                                            }, null, !0)])])
                                        }
                                    }, {
                                        key: "tailSize",
                                        get: function () {
                                            return K((this.isHorizontal ? this.height : this.width) || qt)
                                        }
                                    }, {
                                        key: "containerClasses",
                                        get: function () {
                                            return ["vue-slider", ["vue-slider-".concat(this.direction)], {
                                                "vue-slider-disabled": this.disabled
                                            }]
                                        }
                                    }, {
                                        key: "containerStyles",
                                        get: function () {
                                            var t = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
                                                e = kt(t, 2),
                                                r = e[0],
                                                n = e[1],
                                                a = this.width ? K(this.width) : this.isHorizontal ? "auto" : K(qt),
                                                o = this.height ? K(this.height) : this.isHorizontal ? K(qt) : "auto";
                                            return {
                                                padding: this.contained ? "".concat(n / 2, "px ").concat(r / 2, "px") : this.isHorizontal ? "".concat(n / 2, "px 0") : "0 ".concat(r / 2, "px"),
                                                width: a,
                                                height: o
                                            }
                                        }
                                    }, {
                                        key: "processArray",
                                        get: function () {
                                            var t = this;
                                            return this.control.processArray.map((function (e, r) {
                                                var n, a = kt(e, 3),
                                                    o = a[0],
                                                    i = a[1],
                                                    s = a[2];
                                                if (o > i) {
                                                    var c = [i, o];
                                                    o = c[0], i = c[1]
                                                }
                                                var u = t.isHorizontal ? "width" : "height";
                                                return {
                                                    start: o,
                                                    end: i,
                                                    index: r,
                                                    style: jt(jt((n = {}, Dt(n, t.isHorizontal ? "height" : "width", "100%"), Dt(n, t.isHorizontal ? "top" : "left", 0), Dt(n, t.mainDirection, "".concat(o, "%")), Dt(n, u, "".concat(i - o, "%")), Dt(n, "transitionProperty", "".concat(u, ",").concat(t.mainDirection)), Dt(n, "transitionDuration", "".concat(t.animateTime, "s")), n), t.processStyle), s)
                                                }
                                            }))
                                        }
                                    }, {
                                        key: "dotBaseStyle",
                                        get: function () {
                                            var t, e = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize],
                                                r = kt(e, 2),
                                                n = r[0],
                                                a = r[1];
                                            return t = this.isHorizontal ? Dt({
                                                transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                                                WebkitTransform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"),
                                                top: "50%"
                                            }, "ltr" === this.direction ? "left" : "right", "0") : Dt({
                                                transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                                                WebkitTransform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"),
                                                left: "50%"
                                            }, "btt" === this.direction ? "bottom" : "top", "0"), jt({
                                                width: "".concat(n, "px"),
                                                height: "".concat(a, "px")
                                            }, t)
                                        }
                                    }, {
                                        key: "mainDirection",
                                        get: function () {
                                            switch (this.direction) {
                                                case "ltr":
                                                    return "left";
                                                case "rtl":
                                                    return "right";
                                                case "btt":
                                                    return "bottom";
                                                case "ttb":
                                                    return "top"
                                            }
                                        }
                                    }, {
                                        key: "isHorizontal",
                                        get: function () {
                                            return "ltr" === this.direction || "rtl" === this.direction
                                        }
                                    }, {
                                        key: "isReverse",
                                        get: function () {
                                            return "rtl" === this.direction || "btt" === this.direction
                                        }
                                    }, {
                                        key: "tooltipDirections",
                                        get: function () {
                                            var t = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
                                            return Array.isArray(t) ? t : this.dots.map((function () {
                                                return t
                                            }))
                                        }
                                    }, {
                                        key: "dots",
                                        get: function () {
                                            var t = this;
                                            return this.control.dotsPos.map((function (e, r) {
                                                return jt({
                                                    pos: e,
                                                    index: r,
                                                    value: t.control.dotsValue[r],
                                                    focus: t.states.has(Zt.Focus) && t.focusDotIndex === r,
                                                    disabled: t.disabled,
                                                    style: t.dotStyle
                                                }, (Array.isArray(t.dotOptions) ? t.dotOptions[r] : t.dotOptions) || {})
                                            }))
                                        }
                                    }, {
                                        key: "animateTime",
                                        get: function () {
                                            return this.states.has(Zt.Drag) ? 0 : this.duration
                                        }
                                    }, {
                                        key: "canSort",
                                        get: function () {
                                            return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross
                                        }
                                    }, {
                                        key: "sliderData",
                                        get: function () {
                                            var t = this;
                                            return this.isObjectArrayData(this.data) ? this.data.map((function (e) {
                                                return e[t.dataValue]
                                            })) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data
                                        }
                                    }, {
                                        key: "sliderMarks",
                                        get: function () {
                                            var t = this;
                                            return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function (e) {
                                                var r = {
                                                    label: e
                                                };
                                                return t.data.some((function (n) {
                                                    return n[t.dataValue] === e && (r.label = n[t.dataLabel], !0)
                                                })), r
                                            } : this.isObjectData(this.data) ? this.data : void 0
                                        }
                                    }, {
                                        key: "sliderTooltipFormatter",
                                        get: function () {
                                            var t = this;
                                            if (this.tooltipFormatter) return this.tooltipFormatter;
                                            if (this.isObjectArrayData(this.data)) return function (e) {
                                                var r = "" + e;
                                                return t.data.some((function (n) {
                                                    return n[t.dataValue] === e && (r = n[t.dataLabel], !0)
                                                })), r
                                            };
                                            if (this.isObjectData(this.data)) {
                                                var e = this.data;
                                                return function (t) {
                                                    return e[t]
                                                }
                                            }
                                        }
                                    }, {
                                        key: "isNotSync",
                                        get: function () {
                                            var t = this.control.dotsValue;
                                            return Array.isArray(this.value) ? this.value.length !== t.length || this.value.some((function (e, r) {
                                                return e !== t[r]
                                            })) : this.value !== t[0]
                                        }
                                    }, {
                                        key: "dragRange",
                                        get: function () {
                                            var t = this.dots[this.focusDotIndex - 1],
                                                e = this.dots[this.focusDotIndex + 1];
                                            return [t ? t.pos : -1 / 0, e ? e.pos : 1 / 0]
                                        }
                                    }]), r
                                }(l.a);
                                return c([p("change", {
                                    default: 0
                                })], t.prototype, "value", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "silent", void 0), c([m({
                                    default: "ltr",
                                    validator: function (t) {
                                        return ["ltr", "rtl", "ttb", "btt"].indexOf(t) > -1
                                    }
                                })], t.prototype, "direction", void 0), c([m({
                                    type: [Number, String]
                                })], t.prototype, "width", void 0), c([m({
                                    type: [Number, String]
                                })], t.prototype, "height", void 0), c([m({
                                    default: 14
                                })], t.prototype, "dotSize", void 0), c([m({
                                    default: !1
                                })], t.prototype, "contained", void 0), c([m({
                                    type: Number,
                                    default: 0
                                })], t.prototype, "min", void 0), c([m({
                                    type: Number,
                                    default: 100
                                })], t.prototype, "max", void 0), c([m({
                                    type: Number,
                                    default: 1
                                })], t.prototype, "interval", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "disabled", void 0), c([m({
                                    type: Boolean,
                                    default: !0
                                })], t.prototype, "clickable", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "dragOnClick", void 0), c([m({
                                    type: Number,
                                    default: .5
                                })], t.prototype, "duration", void 0), c([m({
                                    type: [Object, Array]
                                })], t.prototype, "data", void 0), c([m({
                                    type: String,
                                    default: "value"
                                })], t.prototype, "dataValue", void 0), c([m({
                                    type: String,
                                    default: "label"
                                })], t.prototype, "dataLabel", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "lazy", void 0), c([m({
                                    type: String,
                                    validator: function (t) {
                                        return ["none", "always", "focus", "hover", "active"].indexOf(t) > -1
                                    },
                                    default: "active"
                                })], t.prototype, "tooltip", void 0), c([m({
                                    type: [String, Array],
                                    validator: function (t) {
                                        return (Array.isArray(t) ? t : [t]).every((function (t) {
                                            return ["top", "right", "bottom", "left"].indexOf(t) > -1
                                        }))
                                    }
                                })], t.prototype, "tooltipPlacement", void 0), c([m({
                                    type: [String, Array, Function]
                                })], t.prototype, "tooltipFormatter", void 0), c([m({
                                    type: Boolean,
                                    default: !0
                                })], t.prototype, "useKeyboard", void 0), c([m(Function)], t.prototype, "keydownHook", void 0), c([m({
                                    type: Boolean,
                                    default: !0
                                })], t.prototype, "enableCross", void 0), c([m({
                                    type: Boolean,
                                    default: !1
                                })], t.prototype, "fixed", void 0), c([m({
                                    type: Boolean,
                                    default: !0
                                })], t.prototype, "order", void 0), c([m(Number)], t.prototype, "minRange", void 0), c([m(Number)], t.prototype, "maxRange", void 0), c([m({
                                    type: [Boolean, Object, Array, Function],
                                    default: !1
                                })], t.prototype, "marks", void 0), c([m({
                                    type: [Boolean, Function],
                                    default: !0
                                })], t.prototype, "process", void 0), c([m({
                                    type: [Number]
                                })], t.prototype, "zoom", void 0), c([m(Boolean)], t.prototype, "included", void 0), c([m(Boolean)], t.prototype, "adsorb", void 0), c([m(Boolean)], t.prototype, "hideLabel", void 0), c([m()], t.prototype, "dotOptions", void 0), c([m()], t.prototype, "dotAttrs", void 0), c([m()], t.prototype, "railStyle", void 0), c([m()], t.prototype, "processStyle", void 0), c([m()], t.prototype, "dotStyle", void 0), c([m()], t.prototype, "tooltipStyle", void 0), c([m()], t.prototype, "stepStyle", void 0), c([m()], t.prototype, "stepActiveStyle", void 0), c([m()], t.prototype, "labelStyle", void 0), c([m()], t.prototype, "labelActiveStyle", void 0), c([h("value")], t.prototype, "onValueChanged", null), t = c([d()({
                                    data: function () {
                                        return {
                                            control: null
                                        }
                                    },
                                    components: {
                                        VueSliderDot: R,
                                        VueSliderMark: $
                                    }
                                })], t), t
                            }(),
                            Ht = Xt;
                        Ht.VueSliderMark = $, Ht.VueSliderDot = R;
                        var Wt = Ht;
                        e["default"] = Wt
                    }
                })["default"]
            }))
        },
        "9d18": function (t, e, r) {},
        a5db: function (t, e, r) {
            "use strict";
            r("0786")
        },
        add4: function (t, e, r) {
            "use strict";
            r("3283")
        },
        b96e: function (t, e, r) {
            "use strict";

            function n(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function a(t, e, r) {
                return e && n(t.prototype, e), r && n(t, r), t
            }
            r.d(e, "a", (function () {
                return a
            }))
        },
        d70d: function (t) {
            t.exports = JSON.parse('{"locale":"en","long":{"year":{"previous":"last year","current":"this year","next":"next year","past":{"one":"{0} year ago","other":"{0} years ago"},"future":{"one":"in {0} year","other":"in {0} years"}},"quarter":{"previous":"last quarter","current":"this quarter","next":"next quarter","past":{"one":"{0} quarter ago","other":"{0} quarters ago"},"future":{"one":"in {0} quarter","other":"in {0} quarters"}},"month":{"previous":"last month","current":"this month","next":"next month","past":{"one":"{0} month ago","other":"{0} months ago"},"future":{"one":"in {0} month","other":"in {0} months"}},"week":{"previous":"last week","current":"this week","next":"next week","past":{"one":"{0} week ago","other":"{0} weeks ago"},"future":{"one":"in {0} week","other":"in {0} weeks"}},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":{"one":"{0} hour ago","other":"{0} hours ago"},"future":{"one":"in {0} hour","other":"in {0} hours"}},"minute":{"current":"this minute","past":{"one":"{0} minute ago","other":"{0} minutes ago"},"future":{"one":"in {0} minute","other":"in {0} minutes"}},"second":{"current":"now","past":{"one":"{0} second ago","other":"{0} seconds ago"},"future":{"one":"in {0} second","other":"in {0} seconds"}}},"short":{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}},"narrow":{"year":{"previous":"last yr.","current":"this yr.","next":"next yr.","past":"{0} yr. ago","future":"in {0} yr."},"quarter":{"previous":"last qtr.","current":"this qtr.","next":"next qtr.","past":{"one":"{0} qtr. ago","other":"{0} qtrs. ago"},"future":{"one":"in {0} qtr.","other":"in {0} qtrs."}},"month":{"previous":"last mo.","current":"this mo.","next":"next mo.","past":"{0} mo. ago","future":"in {0} mo."},"week":{"previous":"last wk.","current":"this wk.","next":"next wk.","past":"{0} wk. ago","future":"in {0} wk."},"day":{"previous":"yesterday","current":"today","next":"tomorrow","past":{"one":"{0} day ago","other":"{0} days ago"},"future":{"one":"in {0} day","other":"in {0} days"}},"hour":{"current":"this hour","past":"{0} hr. ago","future":"in {0} hr."},"minute":{"current":"this minute","past":"{0} min. ago","future":"in {0} min."},"second":{"current":"now","past":"{0} sec. ago","future":"in {0} sec."}},"now":{"now":{"current":"now","future":"in a moment","past":"just now"}},"mini":{"year":"{0}yr","month":"{0}mo","week":"{0}wk","day":"{0}d","hour":"{0}h","minute":"{0}m","second":"{0}s","now":"now"},"short-time":{"year":"{0} yr.","month":"{0} mo.","week":"{0} wk.","day":{"one":"{0} day","other":"{0} days"},"hour":"{0} hr.","minute":"{0} min.","second":"{0} sec."},"long-time":{"year":{"one":"{0} year","other":"{0} years"},"month":{"one":"{0} month","other":"{0} months"},"week":{"one":"{0} week","other":"{0} weeks"},"day":{"one":"{0} day","other":"{0} days"},"hour":{"one":"{0} hour","other":"{0} hours"},"minute":{"one":"{0} minute","other":"{0} minutes"},"second":{"one":"{0} second","other":"{0} seconds"}}}')
        },
        d945: function (t, e, r) {
            "use strict";
            r("d9a0")
        },
        d9a0: function (t, e, r) {},
        ebe3: function (t, e, r) {
            "use strict";
            var n = r("07a3"),
                a = r("99a5"),
                o = (r("6a61"), r("402f"), r("2db5"), r("6ab7"), r("836b"), r("7478"), r("238c")),
                i = r("bf32"),
                s = r("e57c"),
                c = r("7032"),
                u = r("53a2"),
                l = function () {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t(e) {
                        var r, n, a, o, s, c;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return r = Object(i["n"])(e), n = [r.token0(), r.token1(), r.getReserves(), r.totalSupply()], t.next = 4, Promise.all(n);
                                case 4:
                                    return a = t.sent, o = {
                                        address: e.toLowerCase()
                                    }, s = a[0].toString().toLowerCase(), c = a[1].toString().toLowerCase(), o.token0 = s, o.token1 = c, o.reserve0 = a[2][0], o.reserve1 = a[2][1], o.totalSupply = a[3], t.abrupt("return", o);
                                case 14:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(),
                f = function () {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t(e) {
                        var r, a, c, f, d, p, m, h, b;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, l(e);
                                case 2:
                                    return r = t.sent, a = Object(i["e"])(r.token0), c = Object(i["e"])(r.token1), t.next = 7, Promise.all([a.decimals(), c.decimals()]);
                                case 7:
                                    if (f = t.sent, d = Object(n["a"])(f, 2), p = d[0], m = d[1], h = o["a"].utils.formatUnits(r.reserve0.toString(), p), b = o["a"].utils.formatUnits(r.reserve1.toString(), m), r.token0 !== s["a"].busd) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return", u["a"].toFixed(h / b));
                                case 17:
                                    return t.abrupt("return", u["a"].toFixed(b / h));
                                case 18:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = function () {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t(e) {
                        var r, a, o, i, s, c, u, f;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, l(e);
                                case 2:
                                    return r = t.sent, t.next = 5, Promise.all([p(r.token0), p(r.token1)]);
                                case 5:
                                    return a = t.sent, o = Object(n["a"])(a, 2), i = o[0], s = o[1], c = r.reserve0 * i, u = r.reserve1 * s, f = c + u, t.abrupt("return", f / r.totalSupply);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }(),
                p = function () {
                    var t = Object(a["a"])(regeneratorRuntime.mark((function t(e) {
                        var r, n;
                        return regeneratorRuntime.wrap((function (t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    if (r = Object(c["a"])(s["a"].busd.address), e.toLowerCase() !== r) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", 1);
                                case 3:
                                    return t.next = 5, Object(i["m"])().getPair(r, e);
                                case 5:
                                    if (n = t.sent, null !== n) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", 0);
                                case 8:
                                    return t.abrupt("return", f(n));
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                }();
            e["a"] = {
                getTokenPrice: p,
                getLpPrice: d,
                get_lp_token_busd_price: f,
                getPairByAddress: l
            }
        },
        fdb9: function (t, e, r) {
            t.exports = r.p + "img/certik.967dd2a5.png"
        }
    }
]);