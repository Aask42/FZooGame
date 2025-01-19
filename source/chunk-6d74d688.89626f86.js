(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6d74d688"], {
        3904: function (t, e, a) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-modal", {
                        ref: "buyTicket-modal",
                        attrs: {
                            title: "",
                            "hide-footer": "",
                            size: "sm",
                            "no-close-on-backdrop": ""
                        },
                        on: {
                            hidden: t.hiddenModal
                        }
                    }, [a("h2", {
                        staticClass: "w-100 text-center p-2"
                    }, [t.ticketPrice <= 0 ? a("span", [t._v("Free")]) : t.ticketPrice > 0 && t.ticketPrice > t.zooTokenTotal ? a("span", [t._v("Not Enough Zoo")]) : t.ticketPrice > 0 && t.ticketPrice < t.zooTokenTotal ? a("span", [t._v(" " + t._s(t.ticketPrice) + " Zoo ")]) : t._e()]), a("div", {
                        staticClass: "w-100 pb-2 pt-2 text-center"
                    }, [a("div", [t.allowanceTotal <= 0 ? a("b-button", {
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
                            variant: "primary"
                        },
                        on: {
                            click: t.approve
                        }
                    }, [t.loading ? a("b-spinner", {
                        staticClass: "mr-25",
                        attrs: {
                            small: ""
                        }
                    }) : t._e(), t._v(" Approve ")], 1) : t._e(), t.allowanceTotal > 0 && t.zooTokenTotal >= t.ticketPrice ? a("b-button", {
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
                            variant: "primary"
                        },
                        on: {
                            click: t.buyTicket
                        }
                    }, [t.loading ? a("b-spinner", {
                        staticClass: "mr-25",
                        attrs: {
                            small: ""
                        }
                    }) : t._e(), t._v(" Confirm ")], 1) : t._e()], 1)])])
                },
                n = [],
                r = a("99a5"),
                o = a("1c03"),
                s = (a("6a61"), a("402f"), a("836b"), a("7478"), a("7032")),
                c = a("83b8"),
                l = a("e57c"),
                u = a("bf32"),
                d = a("cf6b"),
                b = a("53a2"),
                v = a("238c"),
                m = a("19f5"),
                A = {
                    name: "BuyTicketDialog",
                    directives: {
                        Ripple: m["a"]
                    },
                    data: function () {
                        return {
                            allowanceTotal: 0,
                            zooTokenTotal: 0,
                            ticketPrice: 0,
                            buyCount: 0,
                            loading: !1
                        }
                    },
                    mounted: function () {
                        this.init()
                    },
                    computed: Object(o["a"])({}, Object(d["b"])("farm", ["defaultAccount"])),
                    methods: {
                        init: function () {
                            this.$refs["buyTicket-modal"].show(), this.allowance(), this.getZooToken(), this.getTicketPrice(), this.userInfo()
                        },
                        hiddenModal: function () {
                            this.$refs["buyTicket-modal"] && this.$refs["buyTicket-modal"].hide(), this.$emit("close")
                        },
                        allowance: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a, i, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, a = Object(s["a"])(c["i"]), i = Object(s["a"])(l["a"].zoo.address), e.next = 5, Object(u["e"])(i).allowance(t.defaultAccount, a);
                                        case 5:
                                            n = e.sent, t.allowanceTotal = n.toString(), console.log(t.allowanceTotal), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e["catch"](0), console.error("allowance", e.t0);
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 10]
                                ])
                            })))()
                        },
                        approve: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a, i, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.loading = !0, a = Object(s["a"])(c["i"]), i = Object(s["a"])(l["a"].zoo.address), e.next = 6, Object(u["e"])(i).approve(a, v["a"].constants.MaxUint256);
                                        case 6:
                                            return n = e.sent, e.next = 9, n.wait();
                                        case 9:
                                            return e.next = 11, t.allowance();
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e["catch"](0), console.error("approve", e.t0);
                                        case 16:
                                            t.loading = !1;
                                        case 17:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 13]
                                ])
                            })))()
                        },
                        getZooToken: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a, i;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, a = Object(s["a"])(l["a"].zoo.address), e.next = 4, Object(u["e"])(a).balanceOf(t.defaultAccount);
                                        case 4:
                                            i = e.sent, t.zooTokenTotal = b["a"].toFixed(v["a"].utils.formatUnits(i, l["a"].zoo.decimals)), e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e["catch"](0), console.error("getZooToken", e.t0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        getTicketPrice: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(u["j"])().showCurrentPrice();
                                        case 3:
                                            a = e.sent, t.ticketPrice = b["a"].toFixed(v["a"].utils.formatUnits(a, l["a"].zoo.decimals)), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e["catch"](0), console.error("getTicketPrice", e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        userInfo: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, Object(u["j"])().userInfo(t.defaultAccount);
                                        case 3:
                                            a = e.sent, t.buyCount = a.count.toNumber(), e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e["catch"](0), console.error("userInfo", e.t0);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        buyTicket: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.loading = !0, e.next = 4, Object(u["j"])().buyTicket();
                                        case 4:
                                            return a = e.sent, e.next = 7, a.wait();
                                        case 7:
                                            t.hiddenModal(), t.$emit("buyTicketCallback", !0), e.next = 15;
                                            break;
                                        case 11:
                                            e.prev = 11, e.t0 = e["catch"](0), console.error("buyTicket", e.t0), t.$emit("buyTicketCallback", !1);
                                        case 15:
                                            t.loading = !1;
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 11]
                                ])
                            })))()
                        }
                    }
                },
                f = A,
                p = a("4ac2"),
                h = Object(p["a"])(f, i, n, !1, null, "94ac4d9a", null);
            e["a"] = h.exports
        },
        "3ce4": function (t, e, a) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("div", [a("div", [a("b-card", [a("b-card-title", [t._v(" Daily Ranking Rewards")]), a("ol", [a("li", {
                        staticClass: "mt-75"
                    }, [t._v("We will dedicate 900 KEYs for daily combat reward. ")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("500 KEYs, will be disseminated to Every Player who take Part in Combat and burnt ZOO. (Real Play to Earn). ")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("450 KEYs, will be disseminated to TOP 200 Players. ")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("Daily KEY reward of TOP 200 Players is related to EXTRA Combat Chances (ZOO Token Burning), Combat will be caculated as follow ")]), a("ul", [a("li", {
                        staticClass: "mt-75"
                    }, [t._v("1 EXTRA Combats, 10% of KEYs")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("2 EXTRA Combats, 20% of KEYs")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("3 EXTRA Combats, 40% of KEYs")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("4 EXTRA Combats, 70% of KEYs")]), a("li", {
                        staticClass: "mt-75"
                    }, [t._v("5 EXTRA Combats, 100% of KEYs")])])]), a("b-table", {
                        attrs: {
                            responsive: "",
                            small: "small",
                            items: t.dayItems,
                            fields: t.dayFields
                        }
                    })], 1)], 1)])])
                },
                n = [],
                r = {
                    name: "PveCombat",
                    data: function () {
                        return {
                            dayItems: [],
                            dayFields: [{
                                key: "ranking",
                                label: "Ranking"
                            }, {
                                key: "_1",
                                label: "1 EXTRA"
                            }, {
                                key: "_2",
                                label: "2 EXTRA"
                            }, {
                                key: "_3",
                                label: "3 EXTRA"
                            }, {
                                key: "_4",
                                label: "4 EXTRA"
                            }, {
                                key: "_5",
                                label: "5 EXTRA"
                            }]
                        }
                    },
                    mounted: function () {
                        this.day()
                    },
                    methods: {
                        day: function () {
                            for (var t = [
                                    ["1", "3.6", "7.2", "14.4", "25.2", "36"],
                                    ["2", "3", "6", "12", "21", "30"],
                                    ["3", "2.4", "4.8", "9.6", "16.8", "24"],
                                    ["4", "1.5", "3", "6", "10.5", "15"],
                                    ["5", "1.2", "2.4", "4.8", "8.4", "12"],
                                    ["6", "0.9", "1.8", "3.6", "6.3", "9"],
                                    ["7", "0.75", "1.5", "3", "5.25", "7.5"],
                                    ["8-10", "0.6", "1.2", "2.4", "4.2", "6"],
                                    ["11-15", "0.45", "0.9", "1.8", "3.15", "4.5"],
                                    ["16-20", "0.36", "0.72", "1.44", "2.52", "3.6"],
                                    ["21-30", "0.33", "0.66", "1.32", "2.31", "3.3"],
                                    ["31-40", "0.3", "0.6", "1.2", "2.1", "3"],
                                    ["41-50", "0.27", "0.54", "1.08", "1.89", "2.7"],
                                    ["51-60", "0.18", "0.36", "0.72", "1.26", "1.8"],
                                    ["61-70", "0.18", "0.36", "0.72", "1.26", "1.8"],
                                    ["71-80", "0.18", "0.36", "0.72", "1.26", "1.8"],
                                    ["81-90", "0.15", "0.3", "0.6", "1.05", "1.5"],
                                    ["91-100", "0.15", "0.3", "0.6", "1.05", "1.5"],
                                    ["101-120", "0.12", "0.24", "0.48", "0.84", "1.2"],
                                    ["121-140", "0.09", "0.18", "0.36", "0.63", "0.9"],
                                    ["141-160", "0.09", "0.18", "0.36", "0.63", "0.9"],
                                    ["161-180", "0.06", "0.12", "0.24", "0.42", "0.6"],
                                    ["181-200", "0.06", "0.12", "0.24", "0.42", "0.6"]
                                ], e = [], a = 0; a < t.length; a++) {
                                var i = {
                                    ranking: t[a][0],
                                    _1: t[a][1],
                                    _2: t[a][2],
                                    _3: t[a][3],
                                    _4: t[a][4],
                                    _5: t[a][5]
                                };
                                e.push(i)
                            }
                            this.dayItems = e
                        }
                    }
                },
                o = r,
                s = a("4ac2"),
                c = Object(s["a"])(o, i, n, !1, null, "5dff2773", null);
            e["a"] = c.exports
        },
        "3d7e": function (t, e, a) {
            "use strict";
            a("f024")
        },
        "60dd": function (t, e, a) {},
        "7e03": function (t, e, a) {
            "use strict";
            a.r(e);
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("b-row", {
                        staticStyle: {
                            display: "flex",
                            "align-content": "flex-start",
                            "flex-flow": "row wrap"
                        }
                    }, [i("div", {
                        staticClass: "pl-1 pr-1 mb-1",
                        staticStyle: {
                            "text-align": "center",
                            margin: "0 auto"
                        }
                    }, [i("iframe", {
                        ref: "gameContainer",
                        staticClass: "gameContainer",
                        style: {
                            width: t.gameContainerWidth + "px"
                        },
                        attrs: {
                            src: t.url
                        }
                    })]), i("div", {
                        staticClass: "mb-1",
                        staticStyle: {
                            flex: "1"
                        }
                    }, [i("div", {
                        staticStyle: {
                            "overflow-y": "auto",
                            padding: "0px"
                        },
                        style: {
                            height: t.gameContainerHeight + "px"
                        }
                    }, [i("b-card", {
                        staticClass: "card card-congratulations",
                        attrs: {
                            "text-variant": "center"
                        }
                    }, [i("b-img", {
                        staticClass: "congratulations-img-left",
                        attrs: {
                            src: a("8ee6")
                        }
                    }), i("b-img", {
                        staticClass: "congratulations-img-right",
                        attrs: {
                            src: a("ee15")
                        }
                    }), i("b-avatar", {
                        staticClass: "shadow mb-2",
                        attrs: {
                            variant: "primary",
                            size: "70"
                        }
                    }, [i("feather-icon", {
                        attrs: {
                            size: "28",
                            icon: "AwardIcon"
                        }
                    })], 1), i("h1", {
                        staticClass: "mb-1 mt-50 text-white",
                        staticStyle: {
                            "font-size": "3.5rem"
                        }
                    }, [t._v(" " + t._s(t.$t("CombatPage.Title")) + " ")]), i("b-card-text", {
                        staticClass: "m-auto w-75"
                    }, [i("b-button", {
                        attrs: {
                            variant: "relief-primary"
                        },
                        on: {
                            click: function (e) {
                                return t.$router.push({
                                    name: "combatRewards"
                                })
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("CombatPage.CombatRewardsBtn")) + " ")])], 1)], 1), i("b-card", [i("b-button", {
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
                            pill: "",
                            disabled: !t.isCombat
                        },
                        on: {
                            click: function (e) {
                                t.showBuyTicketDialog = !0
                            }
                        }
                    }, [t._v(" Buy Ticket ")])], 1), i("pve-combat"), i("b-card", [t._v(" PVE：BOSS will be refreshed every 12 hours. There will be 200 Keys reward to the top 200 damage ranking. ")]), i("b-card", [i("ol", [i("li", {
                        staticClass: "mt-75"
                    }, [t._v(" Daily Combat Start: UTC 10:00")]), i("li", {
                        staticClass: "mt-75"
                    }, [t._v(" Daily Combat End: UTC 9:30")]), i("li", {
                        staticClass: "mt-75"
                    }, [t._v(" Daily KEY Settlement: 10 mins in between")]), i("li", {
                        staticClass: "mt-75"
                    }, [t._v(" Daily Key Reward Claiming: Next day UTC 10:00.")])])])], 1)]), t.showBuyTicketDialog ? i("buy-ticket-dialog", {
                        on: {
                            close: function (e) {
                                t.showBuyTicketDialog = !1
                            },
                            buyTicketCallback: t.buyTicketCallback
                        }
                    }) : t._e(), t.isCombat ? t._e() : i("settle-dialog")], 1)
                },
                n = [],
                r = a("1c03"),
                o = a("cf6b"),
                s = a("19f5"),
                c = a("3904"),
                l = a("3ce4"),
                u = a("a13e"),
                d = a("de8d"),
                b = {
                    name: "GameFrame",
                    components: {
                        SettleDialog: d["a"],
                        PveCombat: l["a"],
                        BuyTicketDialog: c["a"]
                    },
                    directives: {
                        Ripple: s["a"]
                    },
                    data: function () {
                        return {
                            url: "https://game1.zoogame.app/client/index.html",
                            gameContainerWidth: "200px",
                            gameContainerHeight: "200px",
                            showBuyTicketDialog: !1,
                            isCombat: !0
                        }
                    },
                    computed: Object(r["a"])({}, Object(o["b"])({
                        defaultAccount: function (t) {
                            return t.farm.defaultAccount
                        }
                    })),
                    watch: {
                        defaultAccount: function (t) {
                            t && t.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        this.defaultAccount && this.init()
                    },
                    methods: {
                        init: function () {
                            this.gameContainerHeight = this.$refs.gameContainer.clientHeight, this.gameContainerWidth = .5625 * this.$refs.gameContainer.clientHeight, this.url += "?account=" + this.defaultAccount + "&t=" + Math.random(), this.getTimestamp()
                        },
                        getTimestamp: function () {
                            var t = this;
                            u["a"].get("/api/pvp/timestamp").then((function (e) {
                                t.isCombat = e.isCombat
                            }))
                        },
                        buyTicketCallback: function (t) {
                            console.log(t)
                        }
                    }
                },
                v = b,
                m = (a("86dc"), a("4ac2")),
                A = Object(m["a"])(v, i, n, !1, null, "360ed820", null);
            e["default"] = A.exports
        },
        "86dc": function (t, e, a) {
            "use strict";
            a("60dd")
        },
        "8ee6": function (t, e) {
            t.exports = "data:image/png;base64,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"
        },
        de8d: function (t, e, a) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "box"
                    }, [a("b-modal", {
                        ref: "modal",
                        attrs: {
                            "ok-only": "",
                            "ok-variant": "danger",
                            "ok-title": "Confirm",
                            "modal-class": "modal-danger",
                            title: "",
                            "hide-footer": "",
                            "no-close-on-backdrop": ""
                        },
                        on: {
                            hidden: t.hiddenModal
                        }
                    }, [a("div", {
                        staticClass: "text-center"
                    }, [a("img", {
                        attrs: {
                            src: "/combat/closed.png",
                            width: "50%"
                        }
                    })]), a("div", {
                        staticClass: "text-center mt-1"
                    }, [a("b-card-title", [a("div", [t._v(" UTC 9:30 ~ 10:00 Daily Rewards Settling ...")])])], 1)])], 1)
                },
                n = [],
                r = {
                    name: "SettleDialog",
                    mounted: function () {
                        this.$refs["modal"].show()
                    },
                    methods: {
                        hiddenModal: function () {
                            this.$refs["modal"] && this.$refs["modal"].hide(), this.$emit("close")
                        }
                    }
                },
                o = r,
                s = (a("3d7e"), a("4ac2")),
                c = Object(s["a"])(o, i, n, !1, null, "e3bfb866", null);
            e["a"] = c.exports
        },
        ee15: function (t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII="
        },
        f024: function (t, e, a) {}
    }
]);