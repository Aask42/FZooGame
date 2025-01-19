(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-cea06182"], {
        "8aad": function (e, t, a) {},
        a594: function (e, t, a) {
            "use strict";
            a("8aad")
        },
        e14e0: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = function () {
                    var e = this,
                        t = e.$createElement,
                        a = e._self._c || t;
                    return a("div", [a("div", {
                        staticClass: "pt-2 pb-2"
                    }, [a("h3", [e._v("My ZOO Balance " + e._s(e.balance))])]), a("div", {
                        staticClass: "ecommerce-application"
                    }, [a("section", {
                        staticClass: "grid-view wishlist-items"
                    }, e._l(e.nfts, (function (t, n) {
                        return a("b-card", {
                            key: t.id,
                            staticClass: "ecommerce-card",
                            attrs: {
                                "no-body": ""
                            }
                        }, [a("div", {
                            staticClass: "position-relative w-100 text-center"
                        }, [a("NFTCard", {
                            staticClass: "cursor-pointer w-100",
                            attrs: {
                                nft: t
                            }
                        }), a("div", {
                            staticClass: "nftName"
                        }, [a("div", [e._v(e._s(t.price) + " ZOO")])])], 1), a("app-collapse", {
                            staticStyle: {
                                margin: "0 4px"
                            }
                        }, [a("app-collapse-item", {
                            attrs: {
                                title: "Merge",
                                "is-visible": !1
                            }
                        }, [a("div", {
                            staticClass: "border",
                            staticStyle: {
                                "border-radius": "5px"
                            }
                        }, [a("SelectCard", {
                            attrs: {
                                rarity: t.rarity,
                                quantity: 3,
                                "is-selling": "0",
                                "is-teaming": "0"
                            },
                            on: {
                                change: e.handleSelectedCards
                            }
                        }), e.selectedCards && 3 === e.selectedCards.length ? a("div", {
                            staticStyle: {
                                padding: "0 10px 10px 10px"
                            }
                        }, [a("b-button", {
                            attrs: {
                                block: "",
                                pill: "",
                                variant: "success",
                                size: "sm"
                            },
                            on: {
                                click: function (a) {
                                    return e.merge(t)
                                }
                            }
                        }, [a("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.merging,
                                expression: "merging"
                            }],
                            staticClass: "mr-50",
                            attrs: {
                                small: ""
                            }
                        }), e._v(" Merge ")], 1)], 1) : e._e()], 1)])], 1), a("b-card-body", {
                            staticStyle: {
                                "border-top": "1px solid #3b4253"
                            }
                        }, [e.allowance > 0 ? a("b-button", {
                            staticClass: "btn-cart",
                            attrs: {
                                variant: "primary",
                                disabled: e.balance < t.price || t.loading
                            },
                            on: {
                                click: function (t) {
                                    return e.buyNFT(n)
                                }
                            }
                        }, [a("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.loading,
                                expression: "item.loading"
                            }],
                            staticClass: "mr-50",
                            attrs: {
                                small: ""
                            }
                        }), a("feather-icon", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.loading,
                                expression: "!item.loading"
                            }],
                            staticClass: "mr-50",
                            attrs: {
                                icon: "ArrowDownIcon"
                            }
                        }), a("span", [e._v(" " + e._s(e.$t("MarketPage.BuyBtn")))])], 1) : a("b-button", {
                            directives: [{
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: {
                                    400: !0
                                }
                            }],
                            staticClass: "btn-cart",
                            attrs: {
                                variant: "warning",
                                block: "",
                                disabled: t.loading
                            },
                            on: {
                                click: function (t) {
                                    return e.approve(n)
                                }
                            }
                        }, [a("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.loading,
                                expression: "item.loading"
                            }],
                            staticClass: "mr-50",
                            attrs: {
                                small: ""
                            }
                        }), a("feather-icon", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !t.loading,
                                expression: "!item.loading"
                            }],
                            staticClass: "mr-50",
                            attrs: {
                                icon: "UnlockIcon"
                            }
                        }), e._v(" " + e._s(e.$t("Approve")) + " ")], 1)], 1)], 1)
                    })), 1)])])
                },
                r = [],
                s = a("99a5"),
                i = a("1c03"),
                c = (a("6a61"), a("402f"), a("836b"), a("6540"), a("d2ba")),
                o = a("7032"),
                l = a("e57c"),
                u = a("83b8"),
                d = a("238c"),
                p = a("bf32"),
                m = a("cf6b"),
                f = a("19f5"),
                v = a("9fea"),
                g = {
                    name: "ZooMarket",
                    components: {
                        NFTCard: c["a"],
                        SelectCard: v["a"]
                    },
                    directives: {
                        Ripple: f["a"]
                    },
                    data: function () {
                        return {
                            merging: !1,
                            nfts: [],
                            allowance: 0,
                            balance: 0,
                            selectedCards: []
                        }
                    },
                    computed: Object(i["a"])({}, Object(m["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (e) {
                            e && e.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        this.defaultAccount && this.init()
                    },
                    methods: {
                        init: function () {
                            this.initNFTs(), this.getBalance(), this.getAllowance()
                        },
                        initNFTs: function () {
                            for (var e = [], t = 0; t < 6; t++)
                                for (var a = 0; a < 3; a++) {
                                    var n = {
                                        teamId: 3 + 4 * t,
                                        rarity: a + 1,
                                        price: 2 === a ? 60 * (a + 2) : 60 * (a + 1),
                                        level: 1,
                                        computingPower: a + 1,
                                        loading: !1
                                    };
                                    e.push(n)
                                }
                            this.nfts = e
                        },
                        buyNFT: function (e) {
                            var t = this;
                            this.nfts[e].loading = !0;
                            var a = this.nfts[e].teamId,
                                n = this.nfts[e].rarity;
                            Object(p["l"])().buyUniversalNFT(n, a).then(function () {
                                var e = Object(s["a"])(regeneratorRuntime.mark((function e(a) {
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, a.wait();
                                            case 2:
                                                t.getBalance();
                                            case 3:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function (t) {
                                    return e.apply(this, arguments)
                                }
                            }()).catch((function (e) {
                                console.error("buyUniversalNFT", e)
                            })).finally((function () {
                                t.nfts[e].loading = !1
                            }))
                        },
                        approve: function (e) {
                            var t = this,
                                a = Object(o["a"])(l["a"].zoo.address),
                                n = Object(o["a"])(u["k"]),
                                r = d["a"].constants.MaxUint256;
                            this.nfts[e].loading = !0, Object(p["e"])(a).approve(n, r).then(function () {
                                var e = Object(s["a"])(regeneratorRuntime.mark((function e(a) {
                                    return regeneratorRuntime.wrap((function (e) {
                                        while (1) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, a.wait();
                                            case 2:
                                                t.$NotifySuccess("Approve", "Approve Success"), t.getBalance();
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
                                t.$NotifyError("Approve", e.message)
                            })).finally((function () {
                                t.nfts[e].loading = !1, t.getAllowance()
                            }))
                        },
                        getAllowance: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, r, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return a = e.defaultAccount, n = Object(o["a"])(u["k"]), r = Object(o["a"])(l["a"].zoo.address), t.next = 5, Object(p["e"])(r).allowance(a, n);
                                        case 5:
                                            s = t.sent, e.allowance = s.toString();
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getBalance: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return a = e.defaultAccount, n = Object(o["a"])(l["a"].zoo.address), t.next = 4, Object(p["e"])(n).balanceOf(a);
                                        case 4:
                                            r = t.sent, e.balance = parseInt(d["a"].utils.formatUnits(r, l["a"].zoo.decimals), 10);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        handleSelectedCards: function (e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function a() {
                                return regeneratorRuntime.wrap((function (a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            t.selectedCards = e;
                                        case 1:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a)
                            })))()
                        },
                        merge: function (e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function a() {
                                var n, r, s, i, c, o, l;
                                return regeneratorRuntime.wrap((function (a) {
                                    while (1) switch (a.prev = a.next) {
                                        case 0:
                                            return t.merging = !0, n = t.selectedCards.map((function (e) {
                                                return e.nftId
                                            })), r = Object(p["k"])(), a.prev = 3, console.log("merge", e.rarity, e.teamId, n), a.next = 7, r.estimateGas.merge(e.rarity, e.teamId, n);
                                        case 7:
                                            return s = a.sent, i = s.toNumber(), c = {
                                                gasLimit: 2 * i
                                            }, a.next = 12, r.merge(e.rarity, e.teamId, n, c);
                                        case 12:
                                            return o = a.sent, a.next = 15, o.wait();
                                        case 15:
                                            a.next = 21;
                                            break;
                                        case 17:
                                            a.prev = 17, a.t0 = a["catch"](3), l = a.t0.data && a.t0.data.message ? a.t0.data.message : a.t0.message, t.$NotifyError("Error", l);
                                        case 21:
                                            t.merging = !1, t.$NotifySuccess("Success", "Merge success"), t.selectedCards = [];
                                        case 24:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [3, 17]
                                ])
                            })))()
                        }
                    }
                },
                b = g,
                h = (a("a594"), a("4ac2")),
                w = Object(h["a"])(b, n, r, !1, null, "0d8d9e43", null);
            t["default"] = w.exports
        }
    }
]);