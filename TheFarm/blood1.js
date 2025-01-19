(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0cda0eb8"], {
    "0a3d": function(t, e, a) {},
    2008: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
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
            })], 1), a("b-card", [a("b-card-title", [t._v("Weekly Ranking Rewards")]), a("ul", [a("li", [t._v("We will dedicate 1,050 KEYs for PVP weekly combat reward. ")])]), a("b-table", {
                attrs: {
                    responsive: "",
                    small: "small",
                    items: t.weekItems,
                    fields: t.weekFields
                }
            })], 1), a("b-card", [a("b-card-title", [t._v("Monthly Ranking Rewards")]), a("ul", [a("li", [t._v("We will dedicate 4,200 KEYs for PVP monthly combat reward. ")])]), a("b-table", {
                attrs: {
                    responsive: "",
                    small: "small",
                    items: t.monthItems,
                    fields: t.monthFields
                }
            })], 1)], 1)])])
        }
          , r = []
          , n = {
            name: "PvpCombat",
            data: function() {
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
                    }],
                    weekItems: [],
                    weekFields: [{
                        key: "ranking",
                        label: "Ranking"
                    }, {
                        key: "_2",
                        label: "7 EXTRA"
                    }, {
                        key: "_4",
                        label: "14 EXTRA"
                    }, {
                        key: "_6",
                        label: "21 EXTRA"
                    }, {
                        key: "_8",
                        label: "28 EXTRA"
                    }, {
                        key: "_10",
                        label: "35 EXTRA"
                    }],
                    monthItems: [],
                    monthFields: [{
                        key: "ranking",
                        label: "Ranking"
                    }, {
                        key: "_5",
                        label: "28 EXTRA"
                    }, {
                        key: "_10",
                        label: "56 EXTRA"
                    }, {
                        key: "_15",
                        label: "84 EXTRA"
                    }, {
                        key: "_20",
                        label: "112 EXTRA"
                    }, {
                        key: "_25",
                        label: "140 EXTRA"
                    }]
                }
            },
            mounted: function() {
                this.day(),
                this.week(),
                this.month()
            },
            methods: {
                day: function() {
                    for (var t = [["1", 3.6, 7.2, 14.4, 25.2, 36], ["2", 3, 6, 12, 21, 30], ["3", 2.4, 4.8, 9.6, 16.8, 24], ["4", 1.5, 3, 6, 10.5, 15], ["5", 1.2, 2.4, 4.8, 8.4, 12], ["6", .9, 1.8, 3.6, 6.3, 9], ["7", .75, 1.5, 3, 5.25, 7.5], ["8-10", .6, 1.2, 2.4, 4.2, 6], ["11-15", .45, .9, 1.8, 3.15, 4.5], ["16-20", .36, .72, 1.44, 2.52, 3.6], ["21-30", .33, .66, 1.32, 2.31, 3.3], ["31-40", .3, .6, 1.2, 2.1, 3], ["41-50", .27, .54, 1.08, 1.89, 2.7], ["51-60", .18, .36, .72, 1.26, 1.8], ["61-70", .18, .36, .72, 1.26, 1.8], ["71-80", .18, .36, .72, 1.26, 1.8], ["81-90", .15, .3, .6, 1.05, 1.5], ["91-100", .15, .3, .6, 1.05, 1.5], ["101-120", .12, .24, .48, .84, 1.2], ["121-140", .09, .18, .36, .63, .9], ["141-160", .09, .18, .36, .63, .9], ["161-180", .06, .12, .24, .42, .6], ["181-200", .06, .12, .24, .42, .6]], e = [], a = 0; a < t.length; a++) {
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
                },
                week: function() {
                    for (var t = [["1", 12.6, 25.2, 50.4, 88.2, "126 + Extra 500 USDT"], ["2", 10.5, 21, 42, 73.5, "105 + Extra 400 USDT"], ["3", 8.4, 16.8, 33.6, 58.8, "84  + Extra 300 USDT"], ["4", 5.25, 10.5, 21, 36.75, 52.5], ["5", 4.2, 8.4, 16.8, 29.4, 42], ["6", 3.15, 6.3, 12.6, 22.05, 31.5], ["7", 2.625, 5.25, 10.5, 18.375, 26.25], ["8-10", 2.1, 4.2, 8.4, 14.7, 21], ["11-15", 1.575, 3.15, 6.3, 11.025, 15.75], ["16-20", 1.26, 2.52, 5.04, 8.82, 12.6], ["21-30", .84, 1.68, 3.36, 5.88, 8.4], ["31-40", .735, 1.47, 2.94, 5.145, 7.35], ["41-50", .63, 1.26, 2.52, 4.41, 6.3], ["51-60", .525, 1.05, 2.1, 3.675, 5.25], ["61-70", .42, .84, 1.68, 2.94, 4.2], ["71-80", .315, .63, 1.26, 2.205, 3.15], ["81-90", .21, .42, .84, 1.47, 2.1], ["91-100", .105, .21, .42, .735, 1.05]], e = [], a = 0; a < t.length; a++) {
                        var i = {
                            ranking: t[a][0],
                            _2: t[a][1],
                            _4: t[a][2],
                            _6: t[a][3],
                            _8: t[a][4],
                            _10: t[a][5]
                        };
                        e.push(i)
                    }
                    this.weekItems = e
                },
                month: function() {
                    for (var t = [["1", "50.4", "100.8", "201.6", "352.8", "504 + Extra 5000 USDT"], ["2", "42", "84", "168", "294", "420  + Extra 2500 USDT"], ["3", "33.6", "67.2", "134.4", "235.2", "336 + Extra 1000 USDT"], ["4", "21", "42", "84", "147", "210 + Extra 500 USDT"], ["5", "16.8", "33.6", "67.2", "117.6", "168  + Extra 350 USDT"], ["6", "12.6", "25.2", "50.4", "88.2", "126 + Extra 300 USDT"], ["7", "10.5", "21", "42", "73.5", "105 + Extra 200 USDT"], ["8-10", "8.4", "16.8", "33.6", "58.8", "84  + Extra 150 USDT"], ["11-15", "6.3", "12.6", "25.2", "44.1", "63  + Extra 100 USDT"], ["16-20", "5.04", "10.08", "20.16", "35.28", "50.4  + Extra 50 USDT"], ["21-30", "3.36", "6.72", "13.44", "23.52", "33.6"], ["31-40", "2.94", "5.88", "11.76", "20.58", "29.4"], ["41-50", "2.52", "5.04", "10.08", "17.64", "25.2"], ["51-60", "2.1", "4.2", "8.4", "14.7", "21"], ["61-70", "1.68", "3.36", "6.72", "11.76", "16.8"], ["71-80", "1.26", "2.52", "5.04", "8.82", "12.6"], ["81-90", "0.84", "1.68", "3.36", "5.88", "8.4"], ["91-100", "0.42", "0.84", "1.68", "2.94", "4.2"]], e = [], a = 0; a < t.length; a++) {
                        var i = {
                            ranking: t[a][0],
                            _5: t[a][1],
                            _10: t[a][2],
                            _15: t[a][3],
                            _20: t[a][4],
                            _25: t[a][5]
                        };
                        e.push(i)
                    }
                    this.monthItems = e
                }
            }
        }
          , s = n
          , o = a("4ac2")
          , l = Object(o["a"])(s, i, r, !1, null, "7eb3f360", null);
        e["a"] = l.exports
    },
    "2cd2": function(t, e, a) {
        "use strict";
        a("4a10")
    },
    "2f88": function(t, e, a) {
        "use strict";
        a("0a3d")
    },
    3904: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
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
        }
          , r = []
          , n = a("99a5")
          , s = a("1c03")
          , o = (a("6a61"),
        a("402f"),
        a("836b"),
        a("7478"),
        a("7032"))
          , l = a("83b8")
          , h = a("e57c")
          , u = a("bf32")
          , c = a("cf6b")
          , f = a("53a2")
          , m = a("238c")
          , _ = a("19f5")
          , p = {
            name: "BuyTicketDialog",
            directives: {
                Ripple: _["a"]
            },
            data: function() {
                return {
                    allowanceTotal: 0,
                    zooTokenTotal: 0,
                    ticketPrice: 0,
                    buyCount: 0,
                    loading: !1
                }
            },
            mounted: function() {
                this.init()
            },
            computed: Object(s["a"])({}, Object(c["b"])("farm", ["defaultAccount"])),
            methods: {
                init: function() {
                    this.$refs["buyTicket-modal"].show(),
                    this.allowance(),
                    this.getZooToken(),
                    this.getTicketPrice(),
                    this.userInfo()
                },
                hiddenModal: function() {
                    this.$refs["buyTicket-modal"] && this.$refs["buyTicket-modal"].hide(),
                    this.$emit("close")
                },
                allowance: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = Object(o["a"])(l["i"]),
                                    i = Object(o["a"])(h["a"].zoo.address),
                                    e.next = 5,
                                    Object(u["e"])(i).allowance(t.defaultAccount, a);
                                case 5:
                                    r = e.sent,
                                    t.allowanceTotal = r.toString(),
                                    console.log(t.allowanceTotal),
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e["catch"](0),
                                    console.error("allowance", e.t0);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 10]])
                    }
                    )))()
                },
                approve: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    t.loading = !0,
                                    a = Object(o["a"])(l["i"]),
                                    i = Object(o["a"])(h["a"].zoo.address),
                                    e.next = 6,
                                    Object(u["e"])(i).approve(a, m["a"].constants.MaxUint256);
                                case 6:
                                    return r = e.sent,
                                    e.next = 9,
                                    r.wait();
                                case 9:
                                    return e.next = 11,
                                    t.allowance();
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13,
                                    e.t0 = e["catch"](0),
                                    console.error("approve", e.t0);
                                case 16:
                                    t.loading = !1;
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 13]])
                    }
                    )))()
                },
                getZooToken: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    a = Object(o["a"])(h["a"].zoo.address),
                                    e.next = 4,
                                    Object(u["e"])(a).balanceOf(t.defaultAccount);
                                case 4:
                                    i = e.sent,
                                    t.zooTokenTotal = f["a"].toFixed(m["a"].utils.formatUnits(i, h["a"].zoo.decimals)),
                                    e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8,
                                    e.t0 = e["catch"](0),
                                    console.error("getZooToken", e.t0);
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 8]])
                    }
                    )))()
                },
                getTicketPrice: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Object(u["j"])().showCurrentPrice();
                                case 3:
                                    a = e.sent,
                                    t.ticketPrice = f["a"].toFixed(m["a"].utils.formatUnits(a, h["a"].zoo.decimals)),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    console.error("getTicketPrice", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                },
                userInfo: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Object(u["j"])().userInfo(t.defaultAccount);
                                case 3:
                                    a = e.sent,
                                    t.buyCount = a.count.toNumber(),
                                    e.next = 10;
                                    break;
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    console.error("userInfo", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                },
                buyTicket: function() {
                    var t = this;
                    return Object(n["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    t.loading = !0,
                                    e.next = 4,
                                    Object(u["j"])().buyTicket();
                                case 4:
                                    return a = e.sent,
                                    e.next = 7,
                                    a.wait();
                                case 7:
                                    t.hiddenModal(),
                                    t.$emit("buyTicketCallback", !0),
                                    e.next = 15;
                                    break;
                                case 11:
                                    e.prev = 11,
                                    e.t0 = e["catch"](0),
                                    console.error("buyTicket", e.t0),
                                    t.$emit("buyTicketCallback", !1);
                                case 15:
                                    t.loading = !1;
                                case 16:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 11]])
                    }
                    )))()
                }
            }
        }
          , d = p
          , y = a("4ac2")
          , g = Object(y["a"])(d, i, r, !1, null, "94ac4d9a", null);
        e["a"] = g.exports
    },
    "3d7e": function(t, e, a) {
        "use strict";
        a("f024")
    },
    4548: function(t, e, a) {
        "use strict";
        a("9282")
    },
    "4a10": function(t, e, a) {},
    "4ca3": function(t, e, a) {
        "use strict";
        a.r(e);
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", [!1 === t.isNewbie ? a("combat") : t._e(), !0 === t.isNewbie ? a("combat-newcomer") : t._e()], 1)
        }
          , r = []
          , n = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.battlefieldVisible,
                    expression: "!battlefieldVisible"
                }]
            }, [i("b-row", {
                staticClass: "match-height"
            }, [i("b-col", {
                attrs: {
                    lg: "12",
                    md: "12"
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
                    click: function(e) {
                        return t.$router.push({
                            name: "combatRewards"
                        })
                    }
                }
            }, [t._v(" " + t._s(t.$t("CombatPage.CombatRewardsBtn")) + " ")])], 1)], 1)], 1)], 1), i("b-row", [i("b-col", {
                attrs: {
                    md: "6"
                }
            }, [i("b-card", {
                staticClass: "card-app-design p-relative"
            }, [i("b-overlay", {
                attrs: {
                    show: t.loading,
                    "no-wrap": ""
                }
            }), i("b-card-title", {
                staticClass: "mt-1 mb-75"
            }, [t._v(t._s(t.$t("CombatPage.Tournament")))]), i("div", {
                staticClass: "design-group"
            }, [i("h6", {
                staticClass: "section-label"
            }, [t._v(t._s(t.$t("CombatPage.Team")))]), i("SelectCard", {
                staticClass: "mb-1",
                attrs: {
                    desc: "Select attack cards",
                    selected: t.myItem.attackCards,
                    quantity: 3,
                    disabled: t.loading
                },
                on: {
                    change: t.handleSetAttackCards
                }
            }), i("SelectCard", {
                attrs: {
                    desc: "Select defense cards",
                    selected: t.myItem.defenseCards,
                    quantity: 3,
                    disabled: t.loading
                },
                on: {
                    change: t.handleSetDefenseCards
                }
            })], 1), i("div", {
                staticClass: "text-right"
            }, [i("b-button", {
                attrs: {
                    variant: "primary",
                    size: "sm"
                },
                on: {
                    click: function(e) {
                        return t.$router.push({
                            name: "combatRecords"
                        })
                    }
                }
            }, [i("feather-icon", {
                staticClass: "mr-50",
                attrs: {
                    icon: "EyeIcon"
                }
            }), t._v(" Combat History ")], 1)], 1), i("div", {
                staticClass: "design-group"
            }, [i("h6", {
                staticClass: "section-label"
            }, [t._v(t._s(t.$t("CombatPage.Rank")))]), i("b-table", {
                attrs: {
                    bordered: "",
                    responsive: "",
                    small: "small",
                    items: t.items,
                    fields: t.fields
                },
                scopedSlots: t._u([{
                    key: "cell()",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "text-center"
                        }, [t._v(" " + t._s(e.value) + " ")])]
                    }
                }, {
                    key: "cell(nickname)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "text-center"
                        }, [t._v(" " + t._s(e.value ? e.value : e.item.player) + " ")])]
                    }
                }, {
                    key: "cell(attackCards)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "d-flex"
                        }, t._l(e.value, (function(t, e) {
                            return i("NFTCard", {
                                key: e,
                                staticStyle: {
                                    width: "30px"
                                },
                                attrs: {
                                    nft: t
                                }
                            })
                        }
                        )), 1)]
                    }
                }, {
                    key: "cell(defenseCards)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "d-flex"
                        }, t._l(e.value, (function(t, e) {
                            return i("NFTCard", {
                                key: e,
                                staticStyle: {
                                    width: "30px"
                                },
                                attrs: {
                                    nft: t
                                }
                            })
                        }
                        )), 1)]
                    }
                }, {
                    key: "cell(id)",
                    fn: function(e) {
                        return [3 === t.myItem.defenseCards.length && 3 === t.myItem.attackCards.length && t.isCombat ? i("b-button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.item.show && t.myItem.owner !== e.item.owner && (t.myItem.hitPlayer && t.myItem.hitPlayer.higher <= e.item.ranking && e.item.ranking <= t.myItem.hitPlayer.lower || Math.abs(t.myItem.score - e.item.score) <= 10),
                                expression: "data.item.show && myItem.owner !== data.item.owner && ((myItem.hitPlayer && myItem.hitPlayer.higher <= data.item.ranking && data.item.ranking<= myItem.hitPlayer.lower) || Math.abs(myItem.score-data.item.score)<=10)"
                            }],
                            attrs: {
                                variant: "primary",
                                block: "",
                                size: "sm",
                                pill: ""
                            },
                            on: {
                                click: function(a) {
                                    return t.chooseTarget(e.item)
                                }
                            }
                        }, [t._v(" " + t._s(t.$t("CombatPage.CombatBtn")) + " ")]) : i("b-button", {
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: "",
                                disabled: "",
                                size: "sm"
                            }
                        }, [t._v(" " + t._s(t.$t("CombatPage.CombatBtn")) + " ")])]
                    }
                }])
            })], 1)], 1)], 1), i("b-col", {
                attrs: {
                    md: "6"
                }
            }, [i("b-card", [i("div", {
                staticClass: "w-100 d-flex justify-content-center"
            }, [i("img", {
                staticClass: "w-50",
                attrs: {
                    src: a("bb74")
                }
            })])]), i("pvp-combat2")], 1)], 1)], 1), t.showBuyTicketDialog ? i("buy-ticket-dialog", {
                on: {
                    close: function(e) {
                        t.showBuyTicketDialog = !1
                    },
                    buyTicketCallback: t.buyTicketCallback
                }
            }) : t._e(), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.battlefieldVisible,
                    expression: "battlefieldVisible"
                }],
                staticStyle: {
                    position: "relative"
                }
            }, [i("canvas", {
                ref: "canvas",
                staticStyle: {
                    width: "100%",
                    "border-radius": "5px",
                    background: "url('/combat/bg.jpg') no-repeat",
                    "background-size": "100% 100%"
                },
                attrs: {
                    id: "canvas"
                }
            }), i("b-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.game && !1 === t.game.skip,
                    expression: "game && game.skip === false"
                }],
                staticStyle: {
                    position: "absolute",
                    bottom: "60px",
                    right: "10px"
                },
                attrs: {
                    pill: "",
                    variant: "outline-primary"
                },
                on: {
                    click: t.skip
                }
            }, [t._v(" Skip ")]), i("div", {
                staticClass: "text-center"
            }, [i("b-button", {
                attrs: {
                    pill: "",
                    variant: "primary",
                    disabled: t.loading
                },
                on: {
                    click: function(e) {
                        t.battlefieldVisible = !1
                    }
                }
            }, [i("feather-icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                staticClass: "mr-50",
                attrs: {
                    icon: "ArrowLeftIcon"
                }
            }), t._v(" " + t._s(t.$t("CombatPage.BackBtn")) + " ")], 1)], 1)], 1), t.combatSyncFail ? i("combat-sync-fail-dailog", {
                on: {
                    close: function(e) {
                        t.combatSyncFail = !1
                    }
                }
            }) : t._e(), t.isCombat ? t._e() : i("settle-dialog")], 1)
        }
          , s = []
          , o = a("190b")
          , l = a("99a5")
          , h = a("1c03")
          , u = (a("6540"),
        a("cca2"),
        a("402f"),
        a("2db5"),
        a("6ab7"),
        a("6a61"),
        a("ab31"),
        a("4f40"),
        a("172f"),
        a("c45c"));
        function c(t, e) {
            var a = "undefined" !== typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!a) {
                if (Array.isArray(t) || (a = Object(u["a"])(t)) || e && t && "number" === typeof t.length) {
                    a && (t = a);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, s = !0, o = !1;
            return {
                s: function() {
                    a = a.call(t)
                },
                n: function() {
                    var t = a.next();
                    return s = t.done,
                    t
                },
                e: function(t) {
                    o = !0,
                    n = t
                },
                f: function() {
                    try {
                        s || null == a["return"] || a["return"]()
                    } finally {
                        if (o)
                            throw n
                    }
                }
            }
        }
        var f = a("78e0")
          , m = a("b96e")
          , _ = (a("270f"),
        a("b131"),
        a("1f70"),
        a("13cf"),
        a("f33e"))
          , p = a("b478")
          , d = a("7d03")
          , y = a("b53b")
          , g = a("5c54")
          , b = a("41547")
          , v = function(t, e) {
            return v = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a])
            }
            ,
            v(t, e)
        };
        function D(t, e) {
            function a() {
                this.constructor = t
            }
            v(t, e),
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype,
            new a)
        }
        function T(t, e, a, i) {
            var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, a) : i;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                s = Reflect.decorate(t, e, a, i);
            else
                for (var o = t.length - 1; o >= 0; o--)
                    (r = t[o]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, a, s) : r(e, a)) || s);
            return n > 3 && s && Object.defineProperty(e, a, s),
            s
        }
        function A(t, e, a, i) {
            return new (a || (a = Promise))((function(r, n) {
                function s(t) {
                    try {
                        l(i.next(t))
                    } catch (e) {
                        n(e)
                    }
                }
                function o(t) {
                    try {
                        l(i["throw"](t))
                    } catch (e) {
                        n(e)
                    }
                }
                function l(t) {
                    t.done ? r(t.value) : new a((function(e) {
                        e(t.value)
                    }
                    )).then(s, o)
                }
                l((i = i.apply(t, e || [])).next())
            }
            ))
        }
        function P(t, e) {
            var a, i, r, n, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n;
            function o(t) {
                return function(e) {
                    return l([t, e])
                }
            }
            function l(n) {
                if (a)
                    throw new TypeError("Generator is already executing.");
                while (s)
                    try {
                        if (a = 1,
                        i && (r = 2 & n[0] ? i["return"] : n[0] ? i["throw"] || ((r = i["return"]) && r.call(i),
                        0) : i.next) && !(r = r.call(i, n[1])).done)
                            return r;
                        switch (i = 0,
                        r && (n = [2 & n[0], r.value]),
                        n[0]) {
                        case 0:
                        case 1:
                            r = n;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            i = n[1],
                            n = [0];
                            continue;
                        case 7:
                            n = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (r = s.trys,
                            !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                s.label = n[1];
                                break
                            }
                            if (6 === n[0] && s.label < r[1]) {
                                s.label = r[1],
                                r = n;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2],
                                s.ops.push(n);
                                break
                            }
                            r[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        n = e.call(t, s)
                    } catch (o) {
                        n = [6, o],
                        i = 0
                    } finally {
                        a = r = 0
                    }
                if (5 & n[0])
                    throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }
        }
        (function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.waitPlay = !1,
                e.waitStop = !1,
                e.waitPlayInfo = {
                    animationName: null
                },
                e.resource = "",
                e.armatureName = "",
                e.animationName = "",
                e.autoPlay = !0,
                e
            }
            D(e, t),
            e.prototype.init = function(t) {
                if (t) {
                    if (!t.armatureName)
                        throw new Error("The dragonBone component on " + this.gameObject.name + ", armatureName is required!");
                    Object.assign(this, t),
                    this.autoPlay && this.play(this.animationName)
                }
            }
            ,
            e.prototype.play = function(t, e) {
                t && (this.animationName = t),
                this.armature ? this.armature.play(this.animationName, e) : (this.waitPlayInfo = {
                    animationName: t,
                    times: e
                },
                this.waitPlay = !0)
            }
            ,
            e.prototype.stop = function(t) {
                this.armature ? this.armature.stop(t) : (this.waitPlayInfo = {
                    animationName: t
                },
                this.waitStop = !0),
                this.animationName = null
            }
            ,
            Object.defineProperty(e.prototype, "armature", {
                get: function() {
                    return this._armature
                },
                set: function(t) {
                    if (this._armature = t,
                    t) {
                        var e = this.waitPlayInfo
                          , a = e.animationName
                          , i = e.times;
                        this.waitPlay && this.play(a, i),
                        this.waitStop && this.stop(a),
                        this.waitPlay = !1,
                        this.waitStop = !1
                    }
                },
                enumerable: !1,
                configurable: !0
            }),
            e.prototype.onDestroy = function() {
                this.removeAllListeners()
            }
            ,
            e.componentName = "DragonBone",
            T([_["i"].IDEProp], e.prototype, "resource", void 0),
            T([_["i"].IDEProp], e.prototype, "armatureName", void 0),
            T([_["i"].IDEProp], e.prototype, "animationName", void 0),
            T([_["i"].IDEProp], e.prototype, "autoPlay", void 0)
        }
        )(_["a"]);
        const O = {
            Texture: b["Texture"],
            Rectangle: b["Rectangle"],
            Sprite: b["Sprite"],
            Graphics: b["Graphics"],
            BLEND_MODES: b["BLEND_MODES"],
            mesh: b["mesh"],
            ticker: b["ticker"]
        };
        var S, x = function() {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a])
            }
            ;
            return function(e, a) {
                function i() {
                    this.constructor = e
                }
                t(e, a),
                e.prototype = null === a ? Object.create(a) : (i.prototype = a.prototype,
                new i)
            }
        }();
        (function(t) {
            var e = function() {
                function e(a) {
                    this._clock = new t.WorldClock,
                    this._events = [],
                    this._objects = [],
                    this._eventManager = null,
                    this._eventManager = a,
                    console.info("DragonBones: " + e.VERSION + "\nWebsite: http://dragonbones.com/\nSource and Demo: https://github.com/DragonBones/")
                }
                return e.prototype.advanceTime = function(e) {
                    if (this._objects.length > 0) {
                        for (var a = 0, i = this._objects; a < i.length; a++) {
                            var r = i[a];
                            r.returnToPool()
                        }
                        this._objects.length = 0
                    }
                    if (this._clock.advanceTime(e),
                    this._events.length > 0) {
                        for (var n = 0; n < this._events.length; ++n) {
                            var s = this._events[n]
                              , o = s.armature;
                            null !== o._armatureData && (o.eventDispatcher.dispatchDBEvent(s.type, s),
                            s.type === t.EventObject.SOUND_EVENT && this._eventManager.dispatchDBEvent(s.type, s)),
                            this.bufferObject(s)
                        }
                        this._events.length = 0
                    }
                }
                ,
                e.prototype.bufferEvent = function(t) {
                    this._events.indexOf(t) < 0 && this._events.push(t)
                }
                ,
                e.prototype.bufferObject = function(t) {
                    this._objects.indexOf(t) < 0 && this._objects.push(t)
                }
                ,
                Object.defineProperty(e.prototype, "clock", {
                    get: function() {
                        return this._clock
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "eventManager", {
                    get: function() {
                        return this._eventManager
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e.VERSION = "5.7.000",
                e.yDown = !0,
                e.debug = !1,
                e.debugDraw = !1,
                e
            }();
            t.DragonBones = e
        }
        )(S || (S = {})),
        console.warn || (console.warn = function() {}
        ),
        console.assert || (console.assert = function() {}
        ),
        Date.now || (Date.now = function() {
            return (new Date).getTime()
        }
        ),
        function(t) {
            var e = function() {
                function t() {
                    this.hashCode = t._hashCode++,
                    this._isInPool = !1
                }
                return t._returnObject = function(e) {
                    var a = String(e.constructor)
                      , i = a in t._maxCountMap ? t._maxCountMap[a] : t._defaultMaxCount
                      , r = t._poolsMap[a] = t._poolsMap[a] || [];
                    r.length < i && (e._isInPool ? console.warn("The object is already in the pool.") : (e._isInPool = !0,
                    r.push(e)))
                }
                ,
                t.toString = function() {
                    throw new Error
                }
                ,
                t.setMaxCount = function(e, a) {
                    if ((a < 0 || a !== a) && (a = 0),
                    null !== e) {
                        var i = String(e)
                          , r = i in t._poolsMap ? t._poolsMap[i] : null;
                        null !== r && r.length > a && (r.length = a),
                        t._maxCountMap[i] = a
                    } else
                        for (var i in t._defaultMaxCount = a,
                        t._poolsMap) {
                            r = t._poolsMap[i];
                            r.length > a && (r.length = a),
                            i in t._maxCountMap && (t._maxCountMap[i] = a)
                        }
                }
                ,
                t.clearPool = function(e) {
                    if (void 0 === e && (e = null),
                    null !== e) {
                        var a = String(e)
                          , i = a in t._poolsMap ? t._poolsMap[a] : null;
                        null !== i && i.length > 0 && (i.length = 0)
                    } else
                        for (var r in t._poolsMap) {
                            i = t._poolsMap[r];
                            i.length = 0
                        }
                }
                ,
                t.borrowObject = function(e) {
                    var a = String(e)
                      , i = a in t._poolsMap ? t._poolsMap[a] : null;
                    if (null !== i && i.length > 0) {
                        var r = i.pop();
                        return r._isInPool = !1,
                        r
                    }
                    var n = new e;
                    return n._onClear(),
                    n
                }
                ,
                t.prototype.returnToPool = function() {
                    this._onClear(),
                    t._returnObject(this)
                }
                ,
                t._hashCode = 0,
                t._defaultMaxCount = 3e3,
                t._maxCountMap = {},
                t._poolsMap = {},
                t
            }();
            t.BaseObject = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t, e, a, i, r, n) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = 0),
                    void 0 === a && (a = 0),
                    void 0 === i && (i = 1),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = 0),
                    this.a = t,
                    this.b = e,
                    this.c = a,
                    this.d = i,
                    this.tx = r,
                    this.ty = n
                }
                return t.prototype.toString = function() {
                    return "[object dragonBones.Matrix] a:" + this.a + " b:" + this.b + " c:" + this.c + " d:" + this.d + " tx:" + this.tx + " ty:" + this.ty
                }
                ,
                t.prototype.copyFrom = function(t) {
                    return this.a = t.a,
                    this.b = t.b,
                    this.c = t.c,
                    this.d = t.d,
                    this.tx = t.tx,
                    this.ty = t.ty,
                    this
                }
                ,
                t.prototype.copyFromArray = function(t, e) {
                    return void 0 === e && (e = 0),
                    this.a = t[e],
                    this.b = t[e + 1],
                    this.c = t[e + 2],
                    this.d = t[e + 3],
                    this.tx = t[e + 4],
                    this.ty = t[e + 5],
                    this
                }
                ,
                t.prototype.identity = function() {
                    return this.a = this.d = 1,
                    this.b = this.c = 0,
                    this.tx = this.ty = 0,
                    this
                }
                ,
                t.prototype.concat = function(t) {
                    var e = this.a * t.a
                      , a = 0
                      , i = 0
                      , r = this.d * t.d
                      , n = this.tx * t.a + t.tx
                      , s = this.ty * t.d + t.ty;
                    return 0 === this.b && 0 === this.c || (e += this.b * t.c,
                    a += this.b * t.d,
                    i += this.c * t.a,
                    r += this.c * t.b),
                    0 === t.b && 0 === t.c || (a += this.a * t.b,
                    i += this.d * t.c,
                    n += this.ty * t.c,
                    s += this.tx * t.b),
                    this.a = e,
                    this.b = a,
                    this.c = i,
                    this.d = r,
                    this.tx = n,
                    this.ty = s,
                    this
                }
                ,
                t.prototype.invert = function() {
                    var t = this.a
                      , e = this.b
                      , a = this.c
                      , i = this.d
                      , r = this.tx
                      , n = this.ty;
                    if (0 === e && 0 === a)
                        return this.b = this.c = 0,
                        0 === t || 0 === i ? this.a = this.b = this.tx = this.ty = 0 : (t = this.a = 1 / t,
                        i = this.d = 1 / i,
                        this.tx = -t * r,
                        this.ty = -i * n),
                        this;
                    var s = t * i - e * a;
                    if (0 === s)
                        return this.a = this.d = 1,
                        this.b = this.c = 0,
                        this.tx = this.ty = 0,
                        this;
                    s = 1 / s;
                    var o = this.a = i * s;
                    return e = this.b = -e * s,
                    a = this.c = -a * s,
                    i = this.d = t * s,
                    this.tx = -(o * r + a * n),
                    this.ty = -(e * r + i * n),
                    this
                }
                ,
                t.prototype.transformPoint = function(t, e, a, i) {
                    void 0 === i && (i = !1),
                    a.x = this.a * t + this.c * e,
                    a.y = this.b * t + this.d * e,
                    i || (a.x += this.tx,
                    a.y += this.ty)
                }
                ,
                t.prototype.transformRectangle = function(t, e) {
                    void 0 === e && (e = !1);
                    var a = this.a
                      , i = this.b
                      , r = this.c
                      , n = this.d
                      , s = e ? 0 : this.tx
                      , o = e ? 0 : this.ty
                      , l = t.x
                      , h = t.y
                      , u = l + t.width
                      , c = h + t.height
                      , f = a * l + r * h + s
                      , m = i * l + n * h + o
                      , _ = a * u + r * h + s
                      , p = i * u + n * h + o
                      , d = a * u + r * c + s
                      , y = i * u + n * c + o
                      , g = a * l + r * c + s
                      , b = i * l + n * c + o
                      , v = 0;
                    f > _ && (v = f,
                    f = _,
                    _ = v),
                    d > g && (v = d,
                    d = g,
                    g = v),
                    t.x = Math.floor(f < d ? f : d),
                    t.width = Math.ceil((_ > g ? _ : g) - t.x),
                    m > p && (v = m,
                    m = p,
                    p = v),
                    y > b && (v = y,
                    y = b,
                    b = v),
                    t.y = Math.floor(m < y ? m : y),
                    t.height = Math.ceil((p > b ? p : b) - t.y)
                }
                ,
                t
            }();
            t.Matrix = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t, e, a, i, r, n) {
                    void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    void 0 === a && (a = 0),
                    void 0 === i && (i = 0),
                    void 0 === r && (r = 1),
                    void 0 === n && (n = 1),
                    this.x = t,
                    this.y = e,
                    this.skew = a,
                    this.rotation = i,
                    this.scaleX = r,
                    this.scaleY = n
                }
                return t.normalizeRadian = function(t) {
                    return t = (t + Math.PI) % (2 * Math.PI),
                    t += t > 0 ? -Math.PI : Math.PI,
                    t
                }
                ,
                t.prototype.toString = function() {
                    return "[object dragonBones.Transform] x:" + this.x + " y:" + this.y + " skewX:" + 180 * this.skew / Math.PI + " skewY:" + 180 * this.rotation / Math.PI + " scaleX:" + this.scaleX + " scaleY:" + this.scaleY
                }
                ,
                t.prototype.copyFrom = function(t) {
                    return this.x = t.x,
                    this.y = t.y,
                    this.skew = t.skew,
                    this.rotation = t.rotation,
                    this.scaleX = t.scaleX,
                    this.scaleY = t.scaleY,
                    this
                }
                ,
                t.prototype.identity = function() {
                    return this.x = this.y = 0,
                    this.skew = this.rotation = 0,
                    this.scaleX = this.scaleY = 1,
                    this
                }
                ,
                t.prototype.add = function(t) {
                    return this.x += t.x,
                    this.y += t.y,
                    this.skew += t.skew,
                    this.rotation += t.rotation,
                    this.scaleX *= t.scaleX,
                    this.scaleY *= t.scaleY,
                    this
                }
                ,
                t.prototype.minus = function(t) {
                    return this.x -= t.x,
                    this.y -= t.y,
                    this.skew -= t.skew,
                    this.rotation -= t.rotation,
                    this.scaleX /= t.scaleX,
                    this.scaleY /= t.scaleY,
                    this
                }
                ,
                t.prototype.fromMatrix = function(e) {
                    var a = this.scaleX
                      , i = this.scaleY
                      , r = t.PI_Q;
                    this.x = e.tx,
                    this.y = e.ty,
                    this.rotation = Math.atan(e.b / e.a);
                    var n = Math.atan(-e.c / e.d);
                    return this.scaleX = this.rotation > -r && this.rotation < r ? e.a / Math.cos(this.rotation) : e.b / Math.sin(this.rotation),
                    this.scaleY = n > -r && n < r ? e.d / Math.cos(n) : -e.c / Math.sin(n),
                    a >= 0 && this.scaleX < 0 && (this.scaleX = -this.scaleX,
                    this.rotation = this.rotation - Math.PI),
                    i >= 0 && this.scaleY < 0 && (this.scaleY = -this.scaleY,
                    n -= Math.PI),
                    this.skew = n - this.rotation,
                    this
                }
                ,
                t.prototype.toMatrix = function(t) {
                    return 0 === this.rotation ? (t.a = 1,
                    t.b = 0) : (t.a = Math.cos(this.rotation),
                    t.b = Math.sin(this.rotation)),
                    0 === this.skew ? (t.c = -t.b,
                    t.d = t.a) : (t.c = -Math.sin(this.skew + this.rotation),
                    t.d = Math.cos(this.skew + this.rotation)),
                    1 !== this.scaleX && (t.a *= this.scaleX,
                    t.b *= this.scaleX),
                    1 !== this.scaleY && (t.c *= this.scaleY,
                    t.d *= this.scaleY),
                    t.tx = this.x,
                    t.ty = this.y,
                    this
                }
                ,
                t.PI = Math.PI,
                t.PI_D = 2 * Math.PI,
                t.PI_H = Math.PI / 2,
                t.PI_Q = Math.PI / 4,
                t.RAD_DEG = 180 / Math.PI,
                t.DEG_RAD = Math.PI / 180,
                t
            }();
            t.Transform = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t, e, a, i, r, n, s, o) {
                    void 0 === t && (t = 1),
                    void 0 === e && (e = 1),
                    void 0 === a && (a = 1),
                    void 0 === i && (i = 1),
                    void 0 === r && (r = 0),
                    void 0 === n && (n = 0),
                    void 0 === s && (s = 0),
                    void 0 === o && (o = 0),
                    this.alphaMultiplier = t,
                    this.redMultiplier = e,
                    this.greenMultiplier = a,
                    this.blueMultiplier = i,
                    this.alphaOffset = r,
                    this.redOffset = n,
                    this.greenOffset = s,
                    this.blueOffset = o
                }
                return t.prototype.copyFrom = function(t) {
                    this.alphaMultiplier = t.alphaMultiplier,
                    this.redMultiplier = t.redMultiplier,
                    this.greenMultiplier = t.greenMultiplier,
                    this.blueMultiplier = t.blueMultiplier,
                    this.alphaOffset = t.alphaOffset,
                    this.redOffset = t.redOffset,
                    this.greenOffset = t.greenOffset,
                    this.blueOffset = t.blueOffset
                }
                ,
                t.prototype.identity = function() {
                    this.alphaMultiplier = this.redMultiplier = this.greenMultiplier = this.blueMultiplier = 1,
                    this.alphaOffset = this.redOffset = this.greenOffset = this.blueOffset = 0
                }
                ,
                t
            }();
            t.ColorTransform = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t, e) {
                    void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    this.x = t,
                    this.y = e
                }
                return t.prototype.copyFrom = function(t) {
                    this.x = t.x,
                    this.y = t.y
                }
                ,
                t.prototype.clear = function() {
                    this.x = this.y = 0
                }
                ,
                t
            }();
            t.Point = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t, e, a, i) {
                    void 0 === t && (t = 0),
                    void 0 === e && (e = 0),
                    void 0 === a && (a = 0),
                    void 0 === i && (i = 0),
                    this.x = t,
                    this.y = e,
                    this.width = a,
                    this.height = i
                }
                return t.prototype.copyFrom = function(t) {
                    this.x = t.x,
                    this.y = t.y,
                    this.width = t.width,
                    this.height = t.height
                }
                ,
                t.prototype.clear = function() {
                    this.x = this.y = 0,
                    this.width = this.height = 0
                }
                ,
                t
            }();
            t.Rectangle = e
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ints = [],
                    e.floats = [],
                    e.strings = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.UserData]"
                }
                ,
                e.prototype._onClear = function() {
                    this.ints.length = 0,
                    this.floats.length = 0,
                    this.strings.length = 0
                }
                ,
                e.prototype.addInt = function(t) {
                    this.ints.push(t)
                }
                ,
                e.prototype.addFloat = function(t) {
                    this.floats.push(t)
                }
                ,
                e.prototype.addString = function(t) {
                    this.strings.push(t)
                }
                ,
                e.prototype.getInt = function(t) {
                    return void 0 === t && (t = 0),
                    t >= 0 && t < this.ints.length ? this.ints[t] : 0
                }
                ,
                e.prototype.getFloat = function(t) {
                    return void 0 === t && (t = 0),
                    t >= 0 && t < this.floats.length ? this.floats[t] : 0
                }
                ,
                e.prototype.getString = function(t) {
                    return void 0 === t && (t = 0),
                    t >= 0 && t < this.strings.length ? this.strings[t] : ""
                }
                ,
                e
            }(t.BaseObject);
            t.UserData = e;
            var a = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.data = null,
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.ActionData]"
                }
                ,
                e.prototype._onClear = function() {
                    null !== this.data && this.data.returnToPool(),
                    this.type = 0,
                    this.name = "",
                    this.bone = null,
                    this.slot = null,
                    this.data = null
                }
                ,
                e
            }(t.BaseObject);
            t.ActionData = a
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.frameIndices = [],
                    e.cachedFrames = [],
                    e.armatureNames = [],
                    e.armatures = {},
                    e.userData = null,
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.DragonBonesData]"
                }
                ,
                e.prototype._onClear = function() {
                    for (var t in this.armatures)
                        this.armatures[t].returnToPool(),
                        delete this.armatures[t];
                    null !== this.userData && this.userData.returnToPool(),
                    this.autoSearch = !1,
                    this.frameRate = 0,
                    this.version = "",
                    this.name = "",
                    this.stage = null,
                    this.frameIndices.length = 0,
                    this.cachedFrames.length = 0,
                    this.armatureNames.length = 0,
                    this.binary = null,
                    this.intArray = null,
                    this.floatArray = null,
                    this.frameIntArray = null,
                    this.frameFloatArray = null,
                    this.frameArray = null,
                    this.timelineArray = null,
                    this.colorArray = null,
                    this.userData = null
                }
                ,
                e.prototype.addArmature = function(t) {
                    t.name in this.armatures ? console.warn("Same armature: " + t.name) : (t.parent = this,
                    this.armatures[t.name] = t,
                    this.armatureNames.push(t.name))
                }
                ,
                e.prototype.getArmature = function(t) {
                    return t in this.armatures ? this.armatures[t] : null
                }
                ,
                e
            }(t.BaseObject);
            t.DragonBonesData = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.aabb = new t.Rectangle,
                    a.animationNames = [],
                    a.sortedBones = [],
                    a.sortedSlots = [],
                    a.defaultActions = [],
                    a.actions = [],
                    a.bones = {},
                    a.slots = {},
                    a.constraints = {},
                    a.skins = {},
                    a.animations = {},
                    a.canvas = null,
                    a.userData = null,
                    a
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.ArmatureData]"
                }
                ,
                a.prototype._onClear = function() {
                    for (var t = 0, e = this.defaultActions; t < e.length; t++) {
                        var a = e[t];
                        a.returnToPool()
                    }
                    for (var i = 0, r = this.actions; i < r.length; i++) {
                        a = r[i];
                        a.returnToPool()
                    }
                    for (var n in this.bones)
                        this.bones[n].returnToPool(),
                        delete this.bones[n];
                    for (var n in this.slots)
                        this.slots[n].returnToPool(),
                        delete this.slots[n];
                    for (var n in this.constraints)
                        this.constraints[n].returnToPool(),
                        delete this.constraints[n];
                    for (var n in this.skins)
                        this.skins[n].returnToPool(),
                        delete this.skins[n];
                    for (var n in this.animations)
                        this.animations[n].returnToPool(),
                        delete this.animations[n];
                    null !== this.canvas && this.canvas.returnToPool(),
                    null !== this.userData && this.userData.returnToPool(),
                    this.type = 0,
                    this.frameRate = 0,
                    this.cacheFrameRate = 0,
                    this.scale = 1,
                    this.name = "",
                    this.aabb.clear(),
                    this.animationNames.length = 0,
                    this.sortedBones.length = 0,
                    this.sortedSlots.length = 0,
                    this.defaultActions.length = 0,
                    this.actions.length = 0,
                    this.defaultSkin = null,
                    this.defaultAnimation = null,
                    this.canvas = null,
                    this.userData = null,
                    this.parent = null
                }
                ,
                a.prototype.sortBones = function() {
                    var t = this.sortedBones.length;
                    if (!(t <= 0)) {
                        var e = this.sortedBones.concat()
                          , a = 0
                          , i = 0;
                        this.sortedBones.length = 0;
                        while (i < t) {
                            var r = e[a++];
                            if (a >= t && (a = 0),
                            !(this.sortedBones.indexOf(r) >= 0)) {
                                var n = !1;
                                for (var s in this.constraints) {
                                    var o = this.constraints[s];
                                    if (o.root === r && this.sortedBones.indexOf(o.target) < 0) {
                                        n = !0;
                                        break
                                    }
                                }
                                n || null !== r.parent && this.sortedBones.indexOf(r.parent) < 0 || (this.sortedBones.push(r),
                                i++)
                            }
                        }
                    }
                }
                ,
                a.prototype.cacheFrames = function(t) {
                    if (!(this.cacheFrameRate > 0))
                        for (var e in this.cacheFrameRate = t,
                        this.animations)
                            this.animations[e].cacheFrames(this.cacheFrameRate)
                }
                ,
                a.prototype.setCacheFrame = function(t, e) {
                    var a = this.parent.cachedFrames
                      , i = a.length;
                    return a.length += 10,
                    a[i] = t.a,
                    a[i + 1] = t.b,
                    a[i + 2] = t.c,
                    a[i + 3] = t.d,
                    a[i + 4] = t.tx,
                    a[i + 5] = t.ty,
                    a[i + 6] = e.rotation,
                    a[i + 7] = e.skew,
                    a[i + 8] = e.scaleX,
                    a[i + 9] = e.scaleY,
                    i
                }
                ,
                a.prototype.getCacheFrame = function(t, e, a) {
                    var i = this.parent.cachedFrames;
                    t.a = i[a],
                    t.b = i[a + 1],
                    t.c = i[a + 2],
                    t.d = i[a + 3],
                    t.tx = i[a + 4],
                    t.ty = i[a + 5],
                    e.rotation = i[a + 6],
                    e.skew = i[a + 7],
                    e.scaleX = i[a + 8],
                    e.scaleY = i[a + 9],
                    e.x = t.tx,
                    e.y = t.ty
                }
                ,
                a.prototype.addBone = function(t) {
                    t.name in this.bones ? console.warn("Same bone: " + t.name) : (this.bones[t.name] = t,
                    this.sortedBones.push(t))
                }
                ,
                a.prototype.addSlot = function(t) {
                    t.name in this.slots ? console.warn("Same slot: " + t.name) : (this.slots[t.name] = t,
                    this.sortedSlots.push(t))
                }
                ,
                a.prototype.addConstraint = function(t) {
                    t.name in this.constraints ? console.warn("Same constraint: " + t.name) : this.constraints[t.name] = t
                }
                ,
                a.prototype.addSkin = function(t) {
                    t.name in this.skins ? console.warn("Same skin: " + t.name) : (t.parent = this,
                    this.skins[t.name] = t,
                    null === this.defaultSkin && (this.defaultSkin = t),
                    "default" === t.name && (this.defaultSkin = t))
                }
                ,
                a.prototype.addAnimation = function(t) {
                    t.name in this.animations ? console.warn("Same animation: " + t.name) : (t.parent = this,
                    this.animations[t.name] = t,
                    this.animationNames.push(t.name),
                    null === this.defaultAnimation && (this.defaultAnimation = t))
                }
                ,
                a.prototype.addAction = function(t, e) {
                    e ? this.defaultActions.push(t) : this.actions.push(t)
                }
                ,
                a.prototype.getBone = function(t) {
                    return t in this.bones ? this.bones[t] : null
                }
                ,
                a.prototype.getSlot = function(t) {
                    return t in this.slots ? this.slots[t] : null
                }
                ,
                a.prototype.getConstraint = function(t) {
                    return t in this.constraints ? this.constraints[t] : null
                }
                ,
                a.prototype.getSkin = function(t) {
                    return t in this.skins ? this.skins[t] : null
                }
                ,
                a.prototype.getMesh = function(t, e, a) {
                    var i = this.getSkin(t);
                    return null === i ? null : i.getDisplay(e, a)
                }
                ,
                a.prototype.getAnimation = function(t) {
                    return t in this.animations ? this.animations[t] : null
                }
                ,
                a
            }(t.BaseObject);
            t.ArmatureData = e;
            var a = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.transform = new t.Transform,
                    a.userData = null,
                    a
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.BoneData]"
                }
                ,
                a.prototype._onClear = function() {
                    null !== this.userData && this.userData.returnToPool(),
                    this.inheritTranslation = !1,
                    this.inheritRotation = !1,
                    this.inheritScale = !1,
                    this.inheritReflection = !1,
                    this.type = 0,
                    this.length = 0,
                    this.alpha = 1,
                    this.name = "",
                    this.transform.identity(),
                    this.userData = null,
                    this.parent = null
                }
                ,
                a
            }(t.BaseObject);
            t.BoneData = a;
            var i = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.geometry = new t.GeometryData,
                    a
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.SurfaceData]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this.type = 1,
                    this.segmentX = 0,
                    this.segmentY = 0,
                    this.geometry.clear()
                }
                ,
                a
            }(a);
            t.SurfaceData = i;
            var r = function(e) {
                function a() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.color = null,
                    t.userData = null,
                    t
                }
                return x(a, e),
                a.createColor = function() {
                    return new t.ColorTransform
                }
                ,
                a.toString = function() {
                    return "[class dragonBones.SlotData]"
                }
                ,
                a.prototype._onClear = function() {
                    null !== this.userData && this.userData.returnToPool(),
                    this.blendMode = 0,
                    this.displayIndex = 0,
                    this.zOrder = 0,
                    this.zIndex = 0,
                    this.alpha = 1,
                    this.name = "",
                    this.color = null,
                    this.userData = null,
                    this.parent = null
                }
                ,
                a.DEFAULT_COLOR = new t.ColorTransform,
                a
            }(t.BaseObject);
            t.SlotData = r
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    this.order = 0,
                    this.name = "",
                    this.type = 0,
                    this.target = null,
                    this.root = null,
                    this.bone = null
                }
                ,
                e
            }(t.BaseObject);
            t.ConstraintData = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.IKConstraintData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.scaleEnabled = !1,
                    this.bendPositive = !1,
                    this.weight = 1
                }
                ,
                e
            }(e);
            t.IKConstraintData = a;
            var i = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bones = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.PathConstraintData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.pathSlot = null,
                    this.pathDisplayData = null,
                    this.bones.length = 0,
                    this.positionMode = 0,
                    this.spacingMode = 1,
                    this.rotateMode = 1,
                    this.position = 0,
                    this.spacing = 0,
                    this.rotateOffset = 0,
                    this.rotateMix = 0,
                    this.translateMix = 0
                }
                ,
                e.prototype.AddBone = function(t) {
                    this.bones.push(t)
                }
                ,
                e
            }(e);
            t.PathConstraintData = i
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.CanvasData]"
                }
                ,
                e.prototype._onClear = function() {
                    this.hasBackground = !1,
                    this.color = 0,
                    this.x = 0,
                    this.y = 0,
                    this.width = 0,
                    this.height = 0
                }
                ,
                e
            }(t.BaseObject);
            t.CanvasData = e
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.displays = {},
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.SkinData]"
                }
                ,
                e.prototype._onClear = function() {
                    for (var t in this.displays) {
                        for (var e = this.displays[t], a = 0, i = e; a < i.length; a++) {
                            var r = i[a];
                            null !== r && r.returnToPool()
                        }
                        delete this.displays[t]
                    }
                    this.name = "",
                    this.parent = null
                }
                ,
                e.prototype.addDisplay = function(t, e) {
                    t in this.displays || (this.displays[t] = []),
                    null !== e && (e.parent = this);
                    var a = this.displays[t];
                    a.push(e)
                }
                ,
                e.prototype.getDisplay = function(t, e) {
                    var a = this.getDisplays(t);
                    if (null !== a)
                        for (var i = 0, r = a; i < r.length; i++) {
                            var n = r[i];
                            if (null !== n && n.name === e)
                                return n
                        }
                    return null
                }
                ,
                e.prototype.getDisplays = function(t) {
                    return t in this.displays ? this.displays[t] : null
                }
                ,
                e
            }(t.BaseObject);
            t.SkinData = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t() {
                    this.weight = null
                }
                return t.prototype.clear = function() {
                    this.isShared || null === this.weight || this.weight.returnToPool(),
                    this.isShared = !1,
                    this.inheritDeform = !1,
                    this.offset = 0,
                    this.data = null,
                    this.weight = null
                }
                ,
                t.prototype.shareFrom = function(t) {
                    this.isShared = !0,
                    this.offset = t.offset,
                    this.weight = t.weight
                }
                ,
                Object.defineProperty(t.prototype, "vertexCount", {
                    get: function() {
                        var t = this.data.intArray;
                        return t[this.offset + 0]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(t.prototype, "triangleCount", {
                    get: function() {
                        var t = this.data.intArray;
                        return t[this.offset + 1]
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }();
            t.GeometryData = e;
            var a = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.transform = new t.Transform,
                    a
                }
                return x(a, e),
                a.prototype._onClear = function() {
                    this.name = "",
                    this.path = "",
                    this.transform.identity(),
                    this.parent = null
                }
                ,
                a
            }(t.BaseObject);
            t.DisplayData = a;
            var i = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.pivot = new t.Point,
                    a
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.ImageDisplayData]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this.type = 0,
                    this.pivot.clear(),
                    this.texture = null
                }
                ,
                a
            }(a);
            t.ImageDisplayData = i;
            var r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.actions = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.ArmatureDisplayData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this);
                    for (var e = 0, a = this.actions; e < a.length; e++) {
                        var i = a[e];
                        i.returnToPool()
                    }
                    this.type = 1,
                    this.inheritAnimation = !1,
                    this.actions.length = 0,
                    this.armature = null
                }
                ,
                e.prototype.addAction = function(t) {
                    this.actions.push(t)
                }
                ,
                e
            }(a);
            t.ArmatureDisplayData = r;
            var n = function(t) {
                function a() {
                    var a = null !== t && t.apply(this, arguments) || this;
                    return a.geometry = new e,
                    a
                }
                return x(a, t),
                a.toString = function() {
                    return "[class dragonBones.MeshDisplayData]"
                }
                ,
                a.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.type = 2,
                    this.geometry.clear(),
                    this.texture = null
                }
                ,
                a
            }(a);
            t.MeshDisplayData = n;
            var s = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.boundingBox = null,
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.BoundingBoxDisplayData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    null !== this.boundingBox && this.boundingBox.returnToPool(),
                    this.type = 3,
                    this.boundingBox = null
                }
                ,
                e
            }(a);
            t.BoundingBoxDisplayData = s;
            var o = function(t) {
                function a() {
                    var a = null !== t && t.apply(this, arguments) || this;
                    return a.geometry = new e,
                    a.curveLengths = [],
                    a
                }
                return x(a, t),
                a.toString = function() {
                    return "[class dragonBones.PathDisplayData]"
                }
                ,
                a.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.type = 4,
                    this.closed = !1,
                    this.constantSpeed = !1,
                    this.geometry.clear(),
                    this.curveLengths.length = 0
                }
                ,
                a
            }(a);
            t.PathDisplayData = o;
            var l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bones = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.WeightData]"
                }
                ,
                e.prototype._onClear = function() {
                    this.count = 0,
                    this.offset = 0,
                    this.bones.length = 0
                }
                ,
                e.prototype.addBone = function(t) {
                    this.bones.push(t)
                }
                ,
                e
            }(t.BaseObject);
            t.WeightData = l
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    this.color = 0,
                    this.width = 0,
                    this.height = 0
                }
                ,
                e
            }(t.BaseObject);
            t.BoundingBoxData = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.RectangleBoundingBoxData]"
                }
                ,
                e._computeOutCode = function(t, e, a, i, r, n) {
                    var s = 0;
                    return t < a ? s |= 1 : t > r && (s |= 2),
                    e < i ? s |= 4 : e > n && (s |= 8),
                    s
                }
                ,
                e.rectangleIntersectsSegment = function(t, a, i, r, n, s, o, l, h, u, c) {
                    void 0 === h && (h = null),
                    void 0 === u && (u = null),
                    void 0 === c && (c = null);
                    var f = t > n && t < o && a > s && a < l
                      , m = i > n && i < o && r > s && r < l;
                    if (f && m)
                        return -1;
                    var _ = 0
                      , p = e._computeOutCode(t, a, n, s, o, l)
                      , d = e._computeOutCode(i, r, n, s, o, l);
                    while (1) {
                        if (0 === (p | d)) {
                            _ = 2;
                            break
                        }
                        if (0 !== (p & d))
                            break;
                        var y = 0
                          , g = 0
                          , b = 0
                          , v = 0 !== p ? p : d;
                        0 !== (4 & v) ? (y = t + (i - t) * (s - a) / (r - a),
                        g = s,
                        null !== c && (b = .5 * -Math.PI)) : 0 !== (8 & v) ? (y = t + (i - t) * (l - a) / (r - a),
                        g = l,
                        null !== c && (b = .5 * Math.PI)) : 0 !== (2 & v) ? (g = a + (r - a) * (o - t) / (i - t),
                        y = o,
                        null !== c && (b = 0)) : 0 !== (1 & v) && (g = a + (r - a) * (n - t) / (i - t),
                        y = n,
                        null !== c && (b = Math.PI)),
                        v === p ? (t = y,
                        a = g,
                        p = e._computeOutCode(t, a, n, s, o, l),
                        null !== c && (c.x = b)) : (i = y,
                        r = g,
                        d = e._computeOutCode(i, r, n, s, o, l),
                        null !== c && (c.y = b))
                    }
                    return _ && (f ? (_ = 2,
                    null !== h && (h.x = i,
                    h.y = r),
                    null !== u && (u.x = i,
                    u.y = i),
                    null !== c && (c.x = c.y + Math.PI)) : m ? (_ = 1,
                    null !== h && (h.x = t,
                    h.y = a),
                    null !== u && (u.x = t,
                    u.y = a),
                    null !== c && (c.y = c.x + Math.PI)) : (_ = 3,
                    null !== h && (h.x = t,
                    h.y = a),
                    null !== u && (u.x = i,
                    u.y = r))),
                    _
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.type = 0
                }
                ,
                e.prototype.containsPoint = function(t, e) {
                    var a = .5 * this.width;
                    if (t >= -a && t <= a) {
                        var i = .5 * this.height;
                        if (e >= -i && e <= i)
                            return !0
                    }
                    return !1
                }
                ,
                e.prototype.intersectsSegment = function(t, a, i, r, n, s, o) {
                    void 0 === n && (n = null),
                    void 0 === s && (s = null),
                    void 0 === o && (o = null);
                    var l = .5 * this.width
                      , h = .5 * this.height
                      , u = e.rectangleIntersectsSegment(t, a, i, r, -l, -h, l, h, n, s, o);
                    return u
                }
                ,
                e
            }(e);
            t.RectangleBoundingBoxData = a;
            var i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.EllipseData]"
                }
                ,
                e.ellipseIntersectsSegment = function(t, e, a, i, r, n, s, o, l, h, u) {
                    void 0 === l && (l = null),
                    void 0 === h && (h = null),
                    void 0 === u && (u = null);
                    var c = s / o
                      , f = c * c;
                    e *= c,
                    i *= c;
                    var m = a - t
                      , _ = i - e
                      , p = Math.sqrt(m * m + _ * _)
                      , d = m / p
                      , y = _ / p
                      , g = (r - t) * d + (n - e) * y
                      , b = g * g
                      , v = t * t + e * e
                      , D = s * s
                      , T = D - v + b
                      , A = 0;
                    if (T >= 0) {
                        var P = Math.sqrt(T)
                          , O = g - P
                          , S = g + P
                          , x = O < 0 ? -1 : O <= p ? 0 : 1
                          , w = S < 0 ? -1 : S <= p ? 0 : 1
                          , E = x * w;
                        if (E < 0)
                            return -1;
                        0 === E && (-1 === x ? (A = 2,
                        a = t + S * d,
                        i = (e + S * y) / c,
                        null !== l && (l.x = a,
                        l.y = i),
                        null !== h && (h.x = a,
                        h.y = i),
                        null !== u && (u.x = Math.atan2(i / D * f, a / D),
                        u.y = u.x + Math.PI)) : 1 === w ? (A = 1,
                        t += O * d,
                        e = (e + O * y) / c,
                        null !== l && (l.x = t,
                        l.y = e),
                        null !== h && (h.x = t,
                        h.y = e),
                        null !== u && (u.x = Math.atan2(e / D * f, t / D),
                        u.y = u.x + Math.PI)) : (A = 3,
                        null !== l && (l.x = t + O * d,
                        l.y = (e + O * y) / c,
                        null !== u && (u.x = Math.atan2(l.y / D * f, l.x / D))),
                        null !== h && (h.x = t + S * d,
                        h.y = (e + S * y) / c,
                        null !== u && (u.y = Math.atan2(h.y / D * f, h.x / D)))))
                    }
                    return A
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.type = 1
                }
                ,
                e.prototype.containsPoint = function(t, e) {
                    var a = .5 * this.width;
                    if (t >= -a && t <= a) {
                        var i = .5 * this.height;
                        if (e >= -i && e <= i)
                            return e *= a / i,
                            Math.sqrt(t * t + e * e) <= a
                    }
                    return !1
                }
                ,
                e.prototype.intersectsSegment = function(t, a, i, r, n, s, o) {
                    void 0 === n && (n = null),
                    void 0 === s && (s = null),
                    void 0 === o && (o = null);
                    var l = e.ellipseIntersectsSegment(t, a, i, r, 0, 0, .5 * this.width, .5 * this.height, n, s, o);
                    return l
                }
                ,
                e
            }(e);
            t.EllipseBoundingBoxData = i;
            var r = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.vertices = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.PolygonBoundingBoxData]"
                }
                ,
                e.polygonIntersectsSegment = function(t, e, a, i, r, n, s, o) {
                    void 0 === n && (n = null),
                    void 0 === s && (s = null),
                    void 0 === o && (o = null),
                    t === a && (t = a + 1e-6),
                    e === i && (e = i + 1e-6);
                    for (var l = r.length, h = t - a, u = e - i, c = t * i - e * a, f = 0, m = r[l - 2], _ = r[l - 1], p = 0, d = 0, y = 0, g = 0, b = 0, v = 0, D = 0; D < l; D += 2) {
                        var T = r[D]
                          , A = r[D + 1];
                        m === T && (m = T + 1e-4),
                        _ === A && (_ = A + 1e-4);
                        var P = m - T
                          , O = _ - A
                          , S = m * A - _ * T
                          , x = h * O - u * P
                          , w = (c * P - h * S) / x;
                        if ((w >= m && w <= T || w >= T && w <= m) && (0 === h || w >= t && w <= a || w >= a && w <= t)) {
                            var E = (c * O - u * S) / x;
                            if ((E >= _ && E <= A || E >= A && E <= _) && (0 === u || E >= e && E <= i || E >= i && E <= e)) {
                                if (null === s) {
                                    y = w,
                                    g = E,
                                    b = w,
                                    v = E,
                                    f++,
                                    null !== o && (o.x = Math.atan2(A - _, T - m) - .5 * Math.PI,
                                    o.y = o.x);
                                    break
                                }
                                var C = w - t;
                                C < 0 && (C = -C),
                                0 === f ? (p = C,
                                d = C,
                                y = w,
                                g = E,
                                b = w,
                                v = E,
                                null !== o && (o.x = Math.atan2(A - _, T - m) - .5 * Math.PI,
                                o.y = o.x)) : (C < p && (p = C,
                                y = w,
                                g = E,
                                null !== o && (o.x = Math.atan2(A - _, T - m) - .5 * Math.PI)),
                                C > d && (d = C,
                                b = w,
                                v = E,
                                null !== o && (o.y = Math.atan2(A - _, T - m) - .5 * Math.PI))),
                                f++
                            }
                        }
                        m = T,
                        _ = A
                    }
                    return 1 === f ? (null !== n && (n.x = y,
                    n.y = g),
                    null !== s && (s.x = y,
                    s.y = g),
                    null !== o && (o.y = o.x + Math.PI)) : f > 1 && (f++,
                    null !== n && (n.x = y,
                    n.y = g),
                    null !== s && (s.x = b,
                    s.y = v)),
                    f
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.type = 2,
                    this.x = 0,
                    this.y = 0,
                    this.vertices.length = 0
                }
                ,
                e.prototype.containsPoint = function(t, e) {
                    var a = !1;
                    if (t >= this.x && t <= this.width && e >= this.y && e <= this.height)
                        for (var i = 0, r = this.vertices.length, n = r - 2; i < r; i += 2) {
                            var s = this.vertices[n + 1]
                              , o = this.vertices[i + 1];
                            if (o < e && s >= e || s < e && o >= e) {
                                var l = this.vertices[n]
                                  , h = this.vertices[i];
                                (e - o) * (l - h) / (s - o) + h < t && (a = !a)
                            }
                            n = i
                        }
                    return a
                }
                ,
                e.prototype.intersectsSegment = function(t, i, r, n, s, o, l) {
                    void 0 === s && (s = null),
                    void 0 === o && (o = null),
                    void 0 === l && (l = null);
                    var h = 0;
                    return 0 !== a.rectangleIntersectsSegment(t, i, r, n, this.x, this.y, this.x + this.width, this.y + this.height, null, null, null) && (h = e.polygonIntersectsSegment(t, i, r, n, this.vertices, s, o, l)),
                    h
                }
                ,
                e
            }(e);
            t.PolygonBoundingBoxData = r
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.cachedFrames = [],
                    e.boneTimelines = {},
                    e.slotTimelines = {},
                    e.constraintTimelines = {},
                    e.animationTimelines = {},
                    e.boneCachedFrameIndices = {},
                    e.slotCachedFrameIndices = {},
                    e.actionTimeline = null,
                    e.zOrderTimeline = null,
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationData]"
                }
                ,
                e.prototype._onClear = function() {
                    for (var t in this.boneTimelines) {
                        for (var e = 0, a = this.boneTimelines[t]; e < a.length; e++) {
                            var i = a[e];
                            i.returnToPool()
                        }
                        delete this.boneTimelines[t]
                    }
                    for (var t in this.slotTimelines) {
                        for (var r = 0, n = this.slotTimelines[t]; r < n.length; r++) {
                            i = n[r];
                            i.returnToPool()
                        }
                        delete this.slotTimelines[t]
                    }
                    for (var t in this.constraintTimelines) {
                        for (var s = 0, o = this.constraintTimelines[t]; s < o.length; s++) {
                            i = o[s];
                            i.returnToPool()
                        }
                        delete this.constraintTimelines[t]
                    }
                    for (var t in this.animationTimelines) {
                        for (var l = 0, h = this.animationTimelines[t]; l < h.length; l++) {
                            i = h[l];
                            i.returnToPool()
                        }
                        delete this.animationTimelines[t]
                    }
                    for (var t in this.boneCachedFrameIndices)
                        delete this.boneCachedFrameIndices[t];
                    for (var t in this.slotCachedFrameIndices)
                        delete this.slotCachedFrameIndices[t];
                    null !== this.actionTimeline && this.actionTimeline.returnToPool(),
                    null !== this.zOrderTimeline && this.zOrderTimeline.returnToPool(),
                    this.frameIntOffset = 0,
                    this.frameFloatOffset = 0,
                    this.frameOffset = 0,
                    this.blendType = 0,
                    this.frameCount = 0,
                    this.playTimes = 0,
                    this.duration = 0,
                    this.scale = 1,
                    this.fadeInTime = 0,
                    this.cacheFrameRate = 0,
                    this.name = "",
                    this.cachedFrames.length = 0,
                    this.actionTimeline = null,
                    this.zOrderTimeline = null,
                    this.parent = null
                }
                ,
                e.prototype.cacheFrames = function(t) {
                    if (!(this.cacheFrameRate > 0)) {
                        this.cacheFrameRate = Math.max(Math.ceil(t * this.scale), 1);
                        var e = Math.ceil(this.cacheFrameRate * this.duration) + 1;
                        this.cachedFrames.length = e;
                        for (var a = 0, i = this.cacheFrames.length; a < i; ++a)
                            this.cachedFrames[a] = !1;
                        for (var r = 0, n = this.parent.sortedBones; r < n.length; r++) {
                            var s = n[r]
                              , o = new Array(e);
                            for (a = 0,
                            i = o.length; a < i; ++a)
                                o[a] = -1;
                            this.boneCachedFrameIndices[s.name] = o
                        }
                        for (var l = 0, h = this.parent.sortedSlots; l < h.length; l++) {
                            var u = h[l];
                            for (o = new Array(e),
                            a = 0,
                            i = o.length; a < i; ++a)
                                o[a] = -1;
                            this.slotCachedFrameIndices[u.name] = o
                        }
                    }
                }
                ,
                e.prototype.addBoneTimeline = function(t, e) {
                    var a = t in this.boneTimelines ? this.boneTimelines[t] : this.boneTimelines[t] = [];
                    a.indexOf(e) < 0 && a.push(e)
                }
                ,
                e.prototype.addSlotTimeline = function(t, e) {
                    var a = t in this.slotTimelines ? this.slotTimelines[t] : this.slotTimelines[t] = [];
                    a.indexOf(e) < 0 && a.push(e)
                }
                ,
                e.prototype.addConstraintTimeline = function(t, e) {
                    var a = t in this.constraintTimelines ? this.constraintTimelines[t] : this.constraintTimelines[t] = [];
                    a.indexOf(e) < 0 && a.push(e)
                }
                ,
                e.prototype.addAnimationTimeline = function(t, e) {
                    var a = t in this.animationTimelines ? this.animationTimelines[t] : this.animationTimelines[t] = [];
                    a.indexOf(e) < 0 && a.push(e)
                }
                ,
                e.prototype.getBoneTimelines = function(t) {
                    return t in this.boneTimelines ? this.boneTimelines[t] : null
                }
                ,
                e.prototype.getSlotTimelines = function(t) {
                    return t in this.slotTimelines ? this.slotTimelines[t] : null
                }
                ,
                e.prototype.getConstraintTimelines = function(t) {
                    return t in this.constraintTimelines ? this.constraintTimelines[t] : null
                }
                ,
                e.prototype.getAnimationTimelines = function(t) {
                    return t in this.animationTimelines ? this.animationTimelines[t] : null
                }
                ,
                e.prototype.getBoneCachedFrameIndices = function(t) {
                    return t in this.boneCachedFrameIndices ? this.boneCachedFrameIndices[t] : null
                }
                ,
                e.prototype.getSlotCachedFrameIndices = function(t) {
                    return t in this.slotCachedFrameIndices ? this.slotCachedFrameIndices[t] : null
                }
                ,
                e
            }(t.BaseObject);
            t.AnimationData = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.TimelineData]"
                }
                ,
                e.prototype._onClear = function() {
                    this.type = 10,
                    this.offset = 0,
                    this.frameIndicesOffset = -1
                }
                ,
                e
            }(t.BaseObject);
            t.TimelineData = a;
            var i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationTimelineData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.x = 0,
                    this.y = 0
                }
                ,
                e
            }(a);
            t.AnimationTimelineData = i
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.boneMask = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationConfig]"
                }
                ,
                e.prototype._onClear = function() {
                    this.pauseFadeOut = !0,
                    this.fadeOutMode = 4,
                    this.fadeOutTweenType = 1,
                    this.fadeOutTime = -1,
                    this.actionEnabled = !0,
                    this.additive = !1,
                    this.displayControl = !0,
                    this.pauseFadeIn = !0,
                    this.resetToPose = !0,
                    this.fadeInTweenType = 1,
                    this.playTimes = -1,
                    this.layer = 0,
                    this.position = 0,
                    this.duration = -1,
                    this.timeScale = -100,
                    this.weight = 1,
                    this.fadeInTime = -1,
                    this.autoFadeOutTime = -1,
                    this.name = "",
                    this.animation = "",
                    this.group = "",
                    this.boneMask.length = 0
                }
                ,
                e.prototype.clear = function() {
                    this._onClear()
                }
                ,
                e.prototype.copyFrom = function(t) {
                    this.pauseFadeOut = t.pauseFadeOut,
                    this.fadeOutMode = t.fadeOutMode,
                    this.autoFadeOutTime = t.autoFadeOutTime,
                    this.fadeOutTweenType = t.fadeOutTweenType,
                    this.actionEnabled = t.actionEnabled,
                    this.additive = t.additive,
                    this.displayControl = t.displayControl,
                    this.pauseFadeIn = t.pauseFadeIn,
                    this.resetToPose = t.resetToPose,
                    this.playTimes = t.playTimes,
                    this.layer = t.layer,
                    this.position = t.position,
                    this.duration = t.duration,
                    this.timeScale = t.timeScale,
                    this.fadeInTime = t.fadeInTime,
                    this.fadeOutTime = t.fadeOutTime,
                    this.fadeInTweenType = t.fadeInTweenType,
                    this.weight = t.weight,
                    this.name = t.name,
                    this.animation = t.animation,
                    this.group = t.group,
                    this.boneMask.length = t.boneMask.length;
                    for (var e = 0, a = this.boneMask.length; e < a; ++e)
                        this.boneMask[e] = t.boneMask[e]
                }
                ,
                e
            }(t.BaseObject);
            t.AnimationConfig = e
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.textures = {},
                    e
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    for (var t in this.textures)
                        this.textures[t].returnToPool(),
                        delete this.textures[t];
                    this.autoSearch = !1,
                    this.width = 0,
                    this.height = 0,
                    this.scale = 1,
                    this.name = "",
                    this.imagePath = ""
                }
                ,
                e.prototype.copyFrom = function(t) {
                    for (var e in this.autoSearch = t.autoSearch,
                    this.scale = t.scale,
                    this.width = t.width,
                    this.height = t.height,
                    this.name = t.name,
                    this.imagePath = t.imagePath,
                    this.textures)
                        this.textures[e].returnToPool(),
                        delete this.textures[e];
                    for (var e in t.textures) {
                        var a = this.createTexture();
                        a.copyFrom(t.textures[e]),
                        this.textures[e] = a
                    }
                }
                ,
                e.prototype.addTexture = function(t) {
                    t.name in this.textures ? console.warn("Same texture: " + t.name) : (t.parent = this,
                    this.textures[t.name] = t)
                }
                ,
                e.prototype.getTexture = function(t) {
                    return t in this.textures ? this.textures[t] : null
                }
                ,
                e
            }(t.BaseObject);
            t.TextureAtlasData = e;
            var a = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.region = new t.Rectangle,
                    a.frame = null,
                    a
                }
                return x(a, e),
                a.createRectangle = function() {
                    return new t.Rectangle
                }
                ,
                a.prototype._onClear = function() {
                    this.rotated = !1,
                    this.name = "",
                    this.region.clear(),
                    this.parent = null,
                    this.frame = null
                }
                ,
                a.prototype.copyFrom = function(t) {
                    this.rotated = t.rotated,
                    this.name = t.name,
                    this.region.copyFrom(t.region),
                    this.parent = t.parent,
                    null === this.frame && null !== t.frame ? this.frame = a.createRectangle() : null !== this.frame && null === t.frame && (this.frame = null),
                    null !== this.frame && null !== t.frame && this.frame.copyFrom(t.frame)
                }
                ,
                a
            }(t.BaseObject);
            t.TextureData = a
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._bones = [],
                    t._slots = [],
                    t._constraints = [],
                    t._actions = [],
                    t._animation = null,
                    t._proxy = null,
                    t._replaceTextureAtlasData = null,
                    t._clock = null,
                    t
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.Armature]"
                }
                ,
                a._onSortSlots = function(t, e) {
                    return 1e3 * t._zIndex + t._zOrder > 1e3 * e._zIndex + e._zOrder ? 1 : -1
                }
                ,
                a.prototype._onClear = function() {
                    null !== this._clock && this._clock.remove(this);
                    for (var t = 0, e = this._bones; t < e.length; t++) {
                        var a = e[t];
                        a.returnToPool()
                    }
                    for (var i = 0, r = this._slots; i < r.length; i++) {
                        var n = r[i];
                        n.returnToPool()
                    }
                    for (var s = 0, o = this._constraints; s < o.length; s++) {
                        var l = o[s];
                        l.returnToPool()
                    }
                    for (var h = 0, u = this._actions; h < u.length; h++) {
                        var c = u[h];
                        c.returnToPool()
                    }
                    null !== this._animation && this._animation.returnToPool(),
                    null !== this._proxy && this._proxy.dbClear(),
                    null !== this._replaceTextureAtlasData && this._replaceTextureAtlasData.returnToPool(),
                    this.inheritAnimation = !0,
                    this.userData = null,
                    this._lockUpdate = !1,
                    this._slotsDirty = !0,
                    this._zOrderDirty = !1,
                    this._zIndexDirty = !1,
                    this._alphaDirty = !0,
                    this._flipX = !1,
                    this._flipY = !1,
                    this._cacheFrameIndex = -1,
                    this._alpha = 1,
                    this._globalAlpha = 1,
                    this._bones.length = 0,
                    this._slots.length = 0,
                    this._constraints.length = 0,
                    this._actions.length = 0,
                    this._armatureData = null,
                    this._animation = null,
                    this._proxy = null,
                    this._display = null,
                    this._replaceTextureAtlasData = null,
                    this._replacedTexture = null,
                    this._dragonBones = null,
                    this._clock = null,
                    this._parent = null
                }
                ,
                a.prototype._sortZOrder = function(t, e) {
                    var a = this._armatureData.sortedSlots
                      , i = null === t;
                    if (this._zOrderDirty || !i) {
                        for (var r = 0, n = a.length; r < n; ++r) {
                            var s = i ? r : t[e + r];
                            if (!(s < 0 || s >= n)) {
                                var o = a[s]
                                  , l = this.getSlot(o.name);
                                null !== l && l._setZOrder(r)
                            }
                        }
                        this._slotsDirty = !0,
                        this._zOrderDirty = !i
                    }
                }
                ,
                a.prototype._addBone = function(t) {
                    this._bones.indexOf(t) < 0 && this._bones.push(t)
                }
                ,
                a.prototype._addSlot = function(t) {
                    this._slots.indexOf(t) < 0 && this._slots.push(t)
                }
                ,
                a.prototype._addConstraint = function(t) {
                    this._constraints.indexOf(t) < 0 && this._constraints.push(t)
                }
                ,
                a.prototype._bufferAction = function(t, e) {
                    this._actions.indexOf(t) < 0 && (e ? this._actions.push(t) : this._actions.unshift(t))
                }
                ,
                a.prototype.dispose = function() {
                    null !== this._armatureData && (this._lockUpdate = !0,
                    this._dragonBones.bufferObject(this))
                }
                ,
                a.prototype.init = function(e, a, i, r) {
                    null === this._armatureData && (this._armatureData = e,
                    this._animation = t.BaseObject.borrowObject(t.Animation),
                    this._proxy = a,
                    this._display = i,
                    this._dragonBones = r,
                    this._proxy.dbInit(this),
                    this._animation.init(this),
                    this._animation.animations = this._armatureData.animations)
                }
                ,
                a.prototype.advanceTime = function(t) {
                    if (!this._lockUpdate)
                        if (this._lockUpdate = !0,
                        null !== this._armatureData)
                            if (null !== this._armatureData.parent) {
                                var e = this._cacheFrameIndex;
                                if (this._animation.advanceTime(t),
                                this._slotsDirty || this._zIndexDirty) {
                                    if (this._slots.sort(a._onSortSlots),
                                    this._zIndexDirty)
                                        for (var i = 0, r = this._slots.length; i < r; ++i)
                                            this._slots[i]._setZOrder(i);
                                    this._slotsDirty = !1,
                                    this._zIndexDirty = !1
                                }
                                if (this._alphaDirty) {
                                    this._alphaDirty = !1,
                                    this._globalAlpha = this._alpha * (null !== this._parent ? this._parent._globalAlpha : 1);
                                    for (var n = 0, s = this._bones; n < s.length; n++) {
                                        var o = s[n];
                                        o._updateAlpha()
                                    }
                                    for (var l = 0, h = this._slots; l < h.length; l++) {
                                        var u = h[l];
                                        u._updateAlpha()
                                    }
                                }
                                if (this._cacheFrameIndex < 0 || this._cacheFrameIndex !== e) {
                                    i = 0,
                                    r = 0;
                                    for (i = 0,
                                    r = this._bones.length; i < r; ++i)
                                        this._bones[i].update(this._cacheFrameIndex);
                                    for (i = 0,
                                    r = this._slots.length; i < r; ++i)
                                        this._slots[i].update(this._cacheFrameIndex)
                                }
                                if (this._actions.length > 0) {
                                    for (var c = 0, f = this._actions; c < f.length; c++) {
                                        var m = f[c]
                                          , _ = m.actionData;
                                        if (null !== _ && 0 === _.type)
                                            if (null !== m.slot) {
                                                var p = m.slot.childArmature;
                                                null !== p && p.animation.fadeIn(_.name)
                                            } else if (null !== m.bone)
                                                for (var d = 0, y = this.getSlots(); d < y.length; d++) {
                                                    u = y[d];
                                                    if (u.parent === m.bone) {
                                                        p = u.childArmature;
                                                        null !== p && p.animation.fadeIn(_.name)
                                                    }
                                                }
                                            else
                                                this._animation.fadeIn(_.name);
                                        m.returnToPool()
                                    }
                                    this._actions.length = 0
                                }
                                this._lockUpdate = !1,
                                this._proxy.dbUpdate()
                            } else
                                console.warn("The armature data has been disposed.\nPlease make sure dispose armature before call factory.clear().");
                        else
                            console.warn("The armature has been disposed.")
                }
                ,
                a.prototype.invalidUpdate = function(t, e) {
                    if (void 0 === t && (t = null),
                    void 0 === e && (e = !1),
                    null !== t && t.length > 0) {
                        var a = this.getBone(t);
                        if (null !== a && (a.invalidUpdate(),
                        e))
                            for (var i = 0, r = this._slots; i < r.length; i++) {
                                var n = r[i];
                                n.parent === a && n.invalidUpdate()
                            }
                    } else {
                        for (var s = 0, o = this._bones; s < o.length; s++) {
                            a = o[s];
                            a.invalidUpdate()
                        }
                        if (e)
                            for (var l = 0, h = this._slots; l < h.length; l++) {
                                n = h[l];
                                n.invalidUpdate()
                            }
                    }
                }
                ,
                a.prototype.containsPoint = function(t, e) {
                    for (var a = 0, i = this._slots; a < i.length; a++) {
                        var r = i[a];
                        if (r.containsPoint(t, e))
                            return r
                    }
                    return null
                }
                ,
                a.prototype.intersectsSegment = function(t, e, a, i, r, n, s) {
                    void 0 === r && (r = null),
                    void 0 === n && (n = null),
                    void 0 === s && (s = null);
                    for (var o = t === a, l = 0, h = 0, u = 0, c = 0, f = 0, m = 0, _ = 0, p = 0, d = null, y = null, g = 0, b = this._slots; g < b.length; g++) {
                        var v = b[g]
                          , D = v.intersectsSegment(t, e, a, i, r, n, s);
                        if (D > 0) {
                            if (null === r && null === n) {
                                d = v;
                                break
                            }
                            if (null !== r) {
                                var T = o ? r.y - e : r.x - t;
                                T < 0 && (T = -T),
                                (null === d || T < l) && (l = T,
                                u = r.x,
                                c = r.y,
                                d = v,
                                s && (_ = s.x))
                            }
                            if (null !== n) {
                                T = n.x - t;
                                T < 0 && (T = -T),
                                (null === y || T > h) && (h = T,
                                f = n.x,
                                m = n.y,
                                y = v,
                                null !== s && (p = s.y))
                            }
                        }
                    }
                    return null !== d && null !== r && (r.x = u,
                    r.y = c,
                    null !== s && (s.x = _)),
                    null !== y && null !== n && (n.x = f,
                    n.y = m,
                    null !== s && (s.y = p)),
                    d
                }
                ,
                a.prototype.getBone = function(t) {
                    for (var e = 0, a = this._bones; e < a.length; e++) {
                        var i = a[e];
                        if (i.name === t)
                            return i
                    }
                    return null
                }
                ,
                a.prototype.getBoneByDisplay = function(t) {
                    var e = this.getSlotByDisplay(t);
                    return null !== e ? e.parent : null
                }
                ,
                a.prototype.getSlot = function(t) {
                    for (var e = 0, a = this._slots; e < a.length; e++) {
                        var i = a[e];
                        if (i.name === t)
                            return i
                    }
                    return null
                }
                ,
                a.prototype.getSlotByDisplay = function(t) {
                    if (null !== t)
                        for (var e = 0, a = this._slots; e < a.length; e++) {
                            var i = a[e];
                            if (i.display === t)
                                return i
                        }
                    return null
                }
                ,
                a.prototype.getBones = function() {
                    return this._bones
                }
                ,
                a.prototype.getSlots = function() {
                    return this._slots
                }
                ,
                Object.defineProperty(a.prototype, "flipX", {
                    get: function() {
                        return this._flipX
                    },
                    set: function(t) {
                        this._flipX !== t && (this._flipX = t,
                        this.invalidUpdate())
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "flipY", {
                    get: function() {
                        return this._flipY
                    },
                    set: function(t) {
                        this._flipY !== t && (this._flipY = t,
                        this.invalidUpdate())
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "cacheFrameRate", {
                    get: function() {
                        return this._armatureData.cacheFrameRate
                    },
                    set: function(t) {
                        if (this._armatureData.cacheFrameRate !== t) {
                            this._armatureData.cacheFrames(t);
                            for (var e = 0, a = this._slots; e < a.length; e++) {
                                var i = a[e]
                                  , r = i.childArmature;
                                null !== r && (r.cacheFrameRate = t)
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "name", {
                    get: function() {
                        return this._armatureData.name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "armatureData", {
                    get: function() {
                        return this._armatureData
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "animation", {
                    get: function() {
                        return this._animation
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "proxy", {
                    get: function() {
                        return this._proxy
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "eventDispatcher", {
                    get: function() {
                        return this._proxy
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "display", {
                    get: function() {
                        return this._display
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "replacedTexture", {
                    get: function() {
                        return this._replacedTexture
                    },
                    set: function(t) {
                        if (this._replacedTexture !== t) {
                            null !== this._replaceTextureAtlasData && (this._replaceTextureAtlasData.returnToPool(),
                            this._replaceTextureAtlasData = null),
                            this._replacedTexture = t;
                            for (var e = 0, a = this._slots; e < a.length; e++) {
                                var i = a[e];
                                i.invalidUpdate(),
                                i.update(-1)
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "clock", {
                    get: function() {
                        return this._clock
                    },
                    set: function(t) {
                        if (this._clock !== t) {
                            null !== this._clock && this._clock.remove(this),
                            this._clock = t,
                            this._clock && this._clock.add(this);
                            for (var e = 0, a = this._slots; e < a.length; e++) {
                                var i = a[e]
                                  , r = i.childArmature;
                                null !== r && (r.clock = this._clock)
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "parent", {
                    get: function() {
                        return this._parent
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a.prototype.getDisplay = function() {
                    return this._display
                }
                ,
                a
            }(t.BaseObject);
            t.Armature = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.globalTransformMatrix = new t.Matrix,
                    a.global = new t.Transform,
                    a.offset = new t.Transform,
                    a
                }
                return x(a, e),
                a.prototype._onClear = function() {
                    this.globalTransformMatrix.identity(),
                    this.global.identity(),
                    this.offset.identity(),
                    this.origin = null,
                    this.userData = null,
                    this._globalDirty = !1,
                    this._alpha = 1,
                    this._globalAlpha = 1,
                    this._armature = null
                }
                ,
                a.prototype.updateGlobalTransform = function() {
                    this._globalDirty && (this._globalDirty = !1,
                    this.global.fromMatrix(this.globalTransformMatrix))
                }
                ,
                Object.defineProperty(a.prototype, "armature", {
                    get: function() {
                        return this._armature
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a._helpMatrix = new t.Matrix,
                a._helpTransform = new t.Transform,
                a._helpPoint = new t.Point,
                a
            }(t.BaseObject);
            t.TransformObject = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a.animationPose = new t.Transform,
                    a
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.Bone]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this.offsetMode = 1,
                    this.animationPose.identity(),
                    this._transformDirty = !1,
                    this._childrenTransformDirty = !1,
                    this._localDirty = !0,
                    this._hasConstraint = !1,
                    this._visible = !0,
                    this._cachedFrameIndex = -1,
                    this._boneData = null,
                    this._parent = null,
                    this._cachedFrameIndices = null
                }
                ,
                a.prototype._updateGlobalTransformMatrix = function(e) {
                    var a = this._boneData
                      , i = this.global
                      , r = this.globalTransformMatrix
                      , n = this.origin
                      , s = this.offset
                      , o = this.animationPose
                      , l = this._parent
                      , h = this._armature.flipX
                      , u = this._armature.flipY === t.DragonBones.yDown
                      , c = null !== l
                      , f = 0;
                    if (1 === this.offsetMode ? null !== n ? (i.x = n.x + s.x + o.x,
                    i.y = n.y + s.y + o.y,
                    i.skew = n.skew + s.skew + o.skew,
                    i.rotation = n.rotation + s.rotation + o.rotation,
                    i.scaleX = n.scaleX * s.scaleX * o.scaleX,
                    i.scaleY = n.scaleY * s.scaleY * o.scaleY) : i.copyFrom(s).add(o) : 0 === this.offsetMode ? null !== n ? i.copyFrom(n).add(o) : i.copyFrom(o) : (c = !1,
                    i.copyFrom(s)),
                    c) {
                        var m = 1 === l._boneData.type
                          , _ = m ? l._bone : null
                          , p = m ? l._getGlobalTransformMatrix(i.x, i.y) : l.globalTransformMatrix;
                        if (!a.inheritScale || m && null === _) {
                            if (a.inheritTranslation) {
                                var d = i.x
                                  , y = i.y;
                                i.x = p.a * d + p.c * y + p.tx,
                                i.y = p.b * d + p.d * y + p.ty
                            } else
                                h && (i.x = -i.x),
                                u && (i.y = -i.y);
                            a.inheritRotation ? (l.updateGlobalTransform(),
                            f = l.global.scaleX < 0 ? i.rotation + l.global.rotation + Math.PI : i.rotation + l.global.rotation,
                            p.a * p.d - p.b * p.c < 0 && (f -= 2 * i.rotation,
                            (h !== u || a.inheritReflection) && (i.skew += Math.PI)),
                            i.rotation = f) : (h || u) && (h && u ? f = i.rotation + Math.PI : (f = h ? Math.PI - i.rotation : -i.rotation,
                            i.skew += Math.PI),
                            i.rotation = f),
                            i.toMatrix(r)
                        } else
                            m ? (a.inheritRotation && (i.rotation += l.global.rotation),
                            _.updateGlobalTransform(),
                            i.scaleX *= _.global.scaleX,
                            i.scaleY *= _.global.scaleY,
                            p.transformPoint(i.x, i.y, i),
                            i.toMatrix(r),
                            a.inheritTranslation ? (i.x = r.tx,
                            i.y = r.ty) : (r.tx = i.x,
                            r.ty = i.y)) : (a.inheritRotation || (l.updateGlobalTransform(),
                            f = h && u ? i.rotation - (l.global.rotation + Math.PI) : h ? i.rotation + l.global.rotation + Math.PI : u ? i.rotation + l.global.rotation : i.rotation - l.global.rotation,
                            i.rotation = f),
                            i.toMatrix(r),
                            r.concat(p),
                            a.inheritTranslation ? (i.x = r.tx,
                            i.y = r.ty) : (r.tx = i.x,
                            r.ty = i.y),
                            e ? i.fromMatrix(r) : this._globalDirty = !0)
                    } else
                        (h || u) && (h && (i.x = -i.x),
                        u && (i.y = -i.y),
                        h && u ? f = i.rotation + Math.PI : (f = h ? Math.PI - i.rotation : -i.rotation,
                        i.skew += Math.PI),
                        i.rotation = f),
                        i.toMatrix(r)
                }
                ,
                a.prototype._updateAlpha = function() {
                    null !== this._parent ? this._globalAlpha = this._alpha * this._parent._globalAlpha : this._globalAlpha = this._alpha * this._armature._globalAlpha
                }
                ,
                a.prototype.init = function(t, e) {
                    null === this._boneData && (this._boneData = t,
                    this._armature = e,
                    this._alpha = this._boneData.alpha,
                    null !== this._boneData.parent && (this._parent = this._armature.getBone(this._boneData.parent.name)),
                    this._armature._addBone(this),
                    this.origin = this._boneData.transform)
                }
                ,
                a.prototype.update = function(t) {
                    if (t >= 0 && null !== this._cachedFrameIndices) {
                        var e = this._cachedFrameIndices[t];
                        if (e >= 0 && this._cachedFrameIndex === e)
                            this._transformDirty = !1;
                        else if (e >= 0)
                            this._transformDirty = !0,
                            this._cachedFrameIndex = e;
                        else {
                            if (this._hasConstraint)
                                for (var a = 0, i = this._armature._constraints; a < i.length; a++) {
                                    var r = i[a];
                                    r._root === this && r.update()
                                }
                            this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty ? (this._transformDirty = !0,
                            this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1,
                            this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0,
                            this._cachedFrameIndex = -1)
                        }
                    } else {
                        if (this._hasConstraint)
                            for (var n = 0, s = this._armature._constraints; n < s.length; n++) {
                                r = s[n];
                                r._root === this && r.update()
                            }
                        (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && (t = -1,
                        this._transformDirty = !0,
                        this._cachedFrameIndex = -1)
                    }
                    if (this._transformDirty)
                        if (this._transformDirty = !1,
                        this._childrenTransformDirty = !0,
                        this._cachedFrameIndex < 0) {
                            var o = t >= 0;
                            this._localDirty && this._updateGlobalTransformMatrix(o),
                            o && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
                        } else
                            this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
                    else
                        this._childrenTransformDirty && (this._childrenTransformDirty = !1);
                    this._localDirty = !0
                }
                ,
                a.prototype.updateByConstraint = function() {
                    this._localDirty && (this._localDirty = !1,
                    (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && this._updateGlobalTransformMatrix(!0),
                    this._transformDirty = !0)
                }
                ,
                a.prototype.invalidUpdate = function() {
                    this._transformDirty = !0
                }
                ,
                a.prototype.contains = function(t) {
                    if (t === this)
                        return !1;
                    var e = t;
                    while (e !== this && null !== e)
                        e = e.parent;
                    return e === this
                }
                ,
                Object.defineProperty(a.prototype, "boneData", {
                    get: function() {
                        return this._boneData
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "visible", {
                    get: function() {
                        return this._visible
                    },
                    set: function(t) {
                        if (this._visible !== t) {
                            this._visible = t;
                            for (var e = 0, a = this._armature.getSlots(); e < a.length; e++) {
                                var i = a[e];
                                i.parent === this && i._updateVisible()
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "name", {
                    get: function() {
                        return this._boneData.name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "parent", {
                    get: function() {
                        return this._parent
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a
            }(t.TransformObject);
            t.Bone = e
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._vertices = [],
                    e._deformVertices = [],
                    e._hullCache = [],
                    e._matrixCahce = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.Surface]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._dX = 0,
                    this._dY = 0,
                    this._k = 0,
                    this._kX = 0,
                    this._kY = 0,
                    this._vertices.length = 0,
                    this._deformVertices.length = 0,
                    this._matrixCahce.length = 0,
                    this._hullCache.length = 0,
                    this._bone = null
                }
                ,
                e.prototype._getAffineTransform = function(t, e, a, i, r, n, s, o, l, h, u, c, f) {
                    var m = s - r
                      , _ = o - n
                      , p = l - r
                      , d = h - n;
                    u.rotation = Math.atan2(_, m),
                    u.skew = Math.atan2(d, p) - .5 * Math.PI - u.rotation,
                    f && (u.rotation += Math.PI),
                    u.scaleX = Math.sqrt(m * m + _ * _) / a,
                    u.scaleY = Math.sqrt(p * p + d * d) / i,
                    u.toMatrix(c),
                    u.x = c.tx = r - (c.a * t + c.c * e),
                    u.y = c.ty = n - (c.b * t + c.d * e)
                }
                ,
                e.prototype._updateVertices = function() {
                    var t = this._armature.armatureData.parent
                      , e = this._boneData.geometry
                      , a = t.intArray
                      , i = t.floatArray
                      , r = a[e.offset + 0]
                      , n = a[e.offset + 2]
                      , s = this._vertices
                      , o = this._deformVertices;
                    if (null !== this._parent)
                        if (1 === this._parent._boneData.type)
                            for (var l = 0, h = r; l < h; ++l) {
                                var u = 2 * l
                                  , c = i[n + u] + o[u]
                                  , f = i[n + u + 1] + o[u + 1]
                                  , m = this._parent._getGlobalTransformMatrix(c, f);
                                s[u] = m.a * c + m.c * f + m.tx,
                                s[u + 1] = m.b * c + m.d * f + m.ty
                            }
                        else {
                            var _ = this._parent.globalTransformMatrix;
                            for (l = 0,
                            h = r; l < h; ++l) {
                                u = 2 * l,
                                c = i[n + u] + o[u],
                                f = i[n + u + 1] + o[u + 1];
                                s[u] = _.a * c + _.c * f + _.tx,
                                s[u + 1] = _.b * c + _.d * f + _.ty
                            }
                        }
                    else
                        for (l = 0,
                        h = r; l < h; ++l) {
                            u = 2 * l;
                            s[u] = i[n + u] + o[u],
                            s[u + 1] = i[n + u + 1] + o[u + 1]
                        }
                }
                ,
                e.prototype._updateGlobalTransformMatrix = function(t) {
                    var e = 2 * this._boneData.segmentX
                      , a = this._vertices.length - 2
                      , i = 200
                      , r = this._vertices[0]
                      , n = this._vertices[1]
                      , s = this._vertices[e]
                      , o = this._vertices[e + 1]
                      , l = this._vertices[a]
                      , h = this._vertices[a + 1]
                      , u = this._vertices[a - e]
                      , c = this._vertices[a - e + 1]
                      , f = r + .5 * (l - r)
                      , m = n + .5 * (h - n)
                      , _ = s + .5 * (u - s)
                      , p = o + .5 * (c - o)
                      , d = f + .5 * (_ - f)
                      , y = m + .5 * (p - m)
                      , g = s + .5 * (l - s)
                      , b = o + .5 * (h - o)
                      , v = u + .5 * (l - u)
                      , D = c + .5 * (h - c);
                    this._getAffineTransform(0, 0, i, i, d, y, g, b, v, D, this.global, this.globalTransformMatrix, !1),
                    this._globalDirty = !1
                }
                ,
                e.prototype._getGlobalTransformMatrix = function(t, a) {
                    var i = 200
                      , r = 1e3;
                    if (t < -r || r < t || a < -r || r < a)
                        return this.globalTransformMatrix;
                    var n = !1
                      , s = this._boneData
                      , o = s.segmentX
                      , l = s.segmentY
                      , h = 2 * s.segmentX
                      , u = this._dX
                      , c = this._dY
                      , f = Math.floor((t + i) / u)
                      , m = Math.floor((a + i) / c)
                      , _ = 0
                      , p = f * u - i
                      , d = m * c - i
                      , y = this._matrixCahce
                      , g = e._helpMatrix;
                    if (t < -i) {
                        if (a < -i || a >= i)
                            return this.globalTransformMatrix;
                        if (n = a > this._kX * (t + i) + d,
                        _ = 7 * (2 * (o * l + o + l + l + m) + (n ? 1 : 0)),
                        y[_] > 0)
                            g.copyFromArray(y, _ + 1);
                        else {
                            var b = m * (h + 2)
                              , v = this._hullCache[4]
                              , D = this._hullCache[5]
                              , T = this._hullCache[2] - (l - m) * v
                              , A = this._hullCache[3] - (l - m) * D
                              , P = this._vertices;
                            n ? this._getAffineTransform(-i, d + c, r - i, c, P[b + h + 2], P[b + h + 3], T + v, A + D, P[b], P[b + 1], e._helpTransform, g, !0) : this._getAffineTransform(-r, d, r - i, c, T, A, P[b], P[b + 1], T + v, A + D, e._helpTransform, g, !1),
                            y[_] = 1,
                            y[_ + 1] = g.a,
                            y[_ + 2] = g.b,
                            y[_ + 3] = g.c,
                            y[_ + 4] = g.d,
                            y[_ + 5] = g.tx,
                            y[_ + 6] = g.ty
                        }
                    } else if (t >= i) {
                        if (a < -i || a >= i)
                            return this.globalTransformMatrix;
                        if (n = a > this._kX * (t - r) + d,
                        _ = 7 * (2 * (o * l + o + m) + (n ? 1 : 0)),
                        y[_] > 0)
                            g.copyFromArray(y, _ + 1);
                        else {
                            b = (m + 1) * (h + 2) - 2,
                            v = this._hullCache[4],
                            D = this._hullCache[5],
                            T = this._hullCache[0] + m * v,
                            A = this._hullCache[1] + m * D,
                            P = this._vertices;
                            n ? this._getAffineTransform(r, d + c, r - i, c, T + v, A + D, P[b + h + 2], P[b + h + 3], T, A, e._helpTransform, g, !0) : this._getAffineTransform(i, d, r - i, c, P[b], P[b + 1], T, A, P[b + h + 2], P[b + h + 3], e._helpTransform, g, !1),
                            y[_] = 1,
                            y[_ + 1] = g.a,
                            y[_ + 2] = g.b,
                            y[_ + 3] = g.c,
                            y[_ + 4] = g.d,
                            y[_ + 5] = g.tx,
                            y[_ + 6] = g.ty
                        }
                    } else if (a < -i) {
                        if (t < -i || t >= i)
                            return this.globalTransformMatrix;
                        if (n = a > this._kY * (t - p - u) - r,
                        _ = 7 * (2 * (o * l + f) + (n ? 1 : 0)),
                        y[_] > 0)
                            g.copyFromArray(y, _ + 1);
                        else {
                            b = 2 * f,
                            v = this._hullCache[10],
                            D = this._hullCache[11],
                            T = this._hullCache[8] + f * v,
                            A = this._hullCache[9] + f * D,
                            P = this._vertices;
                            n ? this._getAffineTransform(p + u, -i, u, r - i, P[b + 2], P[b + 3], P[b], P[b + 1], T + v, A + D, e._helpTransform, g, !0) : this._getAffineTransform(p, -r, u, r - i, T, A, T + v, A + D, P[b], P[b + 1], e._helpTransform, g, !1),
                            y[_] = 1,
                            y[_ + 1] = g.a,
                            y[_ + 2] = g.b,
                            y[_ + 3] = g.c,
                            y[_ + 4] = g.d,
                            y[_ + 5] = g.tx,
                            y[_ + 6] = g.ty
                        }
                    } else if (a >= i) {
                        if (t < -i || t >= i)
                            return this.globalTransformMatrix;
                        if (n = a > this._kY * (t - p - u) + i,
                        _ = 7 * (2 * (o * l + o + l + f) + (n ? 1 : 0)),
                        y[_] > 0)
                            g.copyFromArray(y, _ + 1);
                        else {
                            b = l * (h + 2) + 2 * f,
                            v = this._hullCache[10],
                            D = this._hullCache[11],
                            T = this._hullCache[6] - (o - f) * v,
                            A = this._hullCache[7] - (o - f) * D,
                            P = this._vertices;
                            n ? this._getAffineTransform(p + u, r, u, r - i, T + v, A + D, T, A, P[b + 2], P[b + 3], e._helpTransform, g, !0) : this._getAffineTransform(p, i, u, r - i, P[b], P[b + 1], P[b + 2], P[b + 3], T, A, e._helpTransform, g, !1),
                            y[_] = 1,
                            y[_ + 1] = g.a,
                            y[_ + 2] = g.b,
                            y[_ + 3] = g.c,
                            y[_ + 4] = g.d,
                            y[_ + 5] = g.tx,
                            y[_ + 6] = g.ty
                        }
                    } else if (n = a > this._k * (t - p - u) + d,
                    _ = 7 * (2 * (o * m + f) + (n ? 1 : 0)),
                    y[_] > 0)
                        g.copyFromArray(y, _ + 1);
                    else {
                        b = 2 * f + m * (h + 2),
                        P = this._vertices;
                        n ? this._getAffineTransform(p + u, d + c, u, c, P[b + h + 4], P[b + h + 5], P[b + h + 2], P[b + h + 3], P[b + 2], P[b + 3], e._helpTransform, g, !0) : this._getAffineTransform(p, d, u, c, P[b], P[b + 1], P[b + 2], P[b + 3], P[b + h + 2], P[b + h + 3], e._helpTransform, g, !1),
                        y[_] = 1,
                        y[_ + 1] = g.a,
                        y[_ + 2] = g.b,
                        y[_ + 3] = g.c,
                        y[_ + 4] = g.d,
                        y[_ + 5] = g.tx,
                        y[_ + 6] = g.ty
                    }
                    return g
                }
                ,
                e.prototype.init = function(e, a) {
                    if (null === this._boneData) {
                        t.prototype.init.call(this, e, a);
                        var i = e.segmentX
                          , r = e.segmentY
                          , n = this._armature.armatureData.parent.intArray[e.geometry.offset + 0]
                          , s = 1e3
                          , o = 200;
                        this._dX = 2 * o / i,
                        this._dY = 2 * o / r,
                        this._k = -this._dY / this._dX,
                        this._kX = -this._dY / (s - o),
                        this._kY = -(s - o) / this._dX,
                        this._vertices.length = 2 * n,
                        this._deformVertices.length = 2 * n,
                        this._matrixCahce.length = 2 * (i * r + 2 * i + 2 * r) * 7,
                        this._hullCache.length = 10;
                        for (var l = 0; l < 2 * n; ++l)
                            this._deformVertices[l] = 0;
                        null !== this._parent && (0 === this._parent.boneData.type ? this._bone = this._parent : this._bone = this._parent._bone)
                    }
                }
                ,
                e.prototype.update = function(t) {
                    if (t >= 0 && null !== this._cachedFrameIndices) {
                        var a = this._cachedFrameIndices[t];
                        if (a >= 0 && this._cachedFrameIndex === a)
                            this._transformDirty = !1;
                        else if (a >= 0)
                            this._transformDirty = !0,
                            this._cachedFrameIndex = a;
                        else {
                            if (this._hasConstraint)
                                for (var i = 0, r = this._armature._constraints; i < r.length; i++) {
                                    var n = r[i];
                                    n._root === this && n.update()
                                }
                            this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty ? (this._transformDirty = !0,
                            this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1,
                            this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0,
                            this._cachedFrameIndex = -1)
                        }
                    } else {
                        if (this._hasConstraint)
                            for (var s = 0, o = this._armature._constraints; s < o.length; s++) {
                                n = o[s];
                                n._root === this && n.update()
                            }
                        (this._transformDirty || null !== this._parent && this._parent._childrenTransformDirty) && (t = -1,
                        this._transformDirty = !0,
                        this._cachedFrameIndex = -1)
                    }
                    if (this._transformDirty) {
                        this._transformDirty = !1,
                        this._childrenTransformDirty = !0;
                        for (var l = 0, h = this._matrixCahce.length; l < h; l += 7)
                            this._matrixCahce[l] = -1;
                        if (this._updateVertices(),
                        this._cachedFrameIndex < 0) {
                            var u = t >= 0;
                            this._localDirty && this._updateGlobalTransformMatrix(u),
                            u && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
                        } else
                            this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
                        var c = 1e3
                          , f = 200
                          , m = 2 * this.global.x
                          , _ = 2 * this.global.y
                          , p = e._helpPoint;
                        this.globalTransformMatrix.transformPoint(c, -f, p),
                        this._hullCache[0] = p.x,
                        this._hullCache[1] = p.y,
                        this._hullCache[2] = m - p.x,
                        this._hullCache[3] = _ - p.y,
                        this.globalTransformMatrix.transformPoint(0, this._dY, p, !0),
                        this._hullCache[4] = p.x,
                        this._hullCache[5] = p.y,
                        this.globalTransformMatrix.transformPoint(f, c, p),
                        this._hullCache[6] = p.x,
                        this._hullCache[7] = p.y,
                        this._hullCache[8] = m - p.x,
                        this._hullCache[9] = _ - p.y,
                        this.globalTransformMatrix.transformPoint(this._dX, 0, p, !0),
                        this._hullCache[10] = p.x,
                        this._hullCache[11] = p.y
                    } else
                        this._childrenTransformDirty && (this._childrenTransformDirty = !1);
                    this._localDirty = !0
                }
                ,
                e
            }(t.Bone);
            t.Surface = e
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.deformVertices = [],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.DisplayFrame]"
                }
                ,
                e.prototype._onClear = function() {
                    this.rawDisplayData = null,
                    this.displayData = null,
                    this.textureData = null,
                    this.display = null,
                    this.deformVertices.length = 0
                }
                ,
                e.prototype.updateDeformVertices = function() {
                    if (null !== this.rawDisplayData && 0 === this.deformVertices.length) {
                        var t;
                        if (2 === this.rawDisplayData.type)
                            t = this.rawDisplayData.geometry;
                        else {
                            if (4 !== this.rawDisplayData.type)
                                return;
                            t = this.rawDisplayData.geometry
                        }
                        var e = 0;
                        e = null !== t.weight ? 2 * t.weight.count : 2 * t.data.intArray[t.offset + 0],
                        this.deformVertices.length = e;
                        for (var a = 0, i = this.deformVertices.length; a < i; ++a)
                            this.deformVertices[a] = 0
                    }
                }
                ,
                e.prototype.getGeometryData = function() {
                    if (null !== this.displayData) {
                        if (2 === this.displayData.type)
                            return this.displayData.geometry;
                        if (4 === this.displayData.type)
                            return this.displayData.geometry
                    }
                    if (null !== this.rawDisplayData) {
                        if (2 === this.rawDisplayData.type)
                            return this.rawDisplayData.geometry;
                        if (4 === this.rawDisplayData.type)
                            return this.rawDisplayData.geometry
                    }
                    return null
                }
                ,
                e.prototype.getBoundingBox = function() {
                    return null !== this.displayData && 3 === this.displayData.type ? this.displayData.boundingBox : null !== this.rawDisplayData && 3 === this.rawDisplayData.type ? this.rawDisplayData.boundingBox : null
                }
                ,
                e.prototype.getTextureData = function() {
                    if (null !== this.displayData) {
                        if (0 === this.displayData.type)
                            return this.displayData.texture;
                        if (2 === this.displayData.type)
                            return this.displayData.texture
                    }
                    if (null !== this.textureData)
                        return this.textureData;
                    if (null !== this.rawDisplayData) {
                        if (0 === this.rawDisplayData.type)
                            return this.rawDisplayData.texture;
                        if (2 === this.rawDisplayData.type)
                            return this.rawDisplayData.texture
                    }
                    return null
                }
                ,
                e
            }(t.BaseObject);
            t.DisplayFrame = e;
            var a = function(a) {
                function i() {
                    var e = null !== a && a.apply(this, arguments) || this;
                    return e._localMatrix = new t.Matrix,
                    e._colorTransform = new t.ColorTransform,
                    e._displayFrames = [],
                    e._geometryBones = [],
                    e._rawDisplay = null,
                    e._meshDisplay = null,
                    e._display = null,
                    e
                }
                return x(i, a),
                i.prototype._onClear = function() {
                    a.prototype._onClear.call(this);
                    for (var e = [], i = 0, r = this._displayFrames; i < r.length; i++) {
                        var n = r[i]
                          , s = n.display;
                        s !== this._rawDisplay && s !== this._meshDisplay && e.indexOf(s) < 0 && e.push(s),
                        n.returnToPool()
                    }
                    for (var o = 0, l = e; o < l.length; o++) {
                        var h = l[o];
                        h instanceof t.Armature ? h.dispose() : this._disposeDisplay(h, !0)
                    }
                    null !== this._meshDisplay && this._meshDisplay !== this._rawDisplay && this._disposeDisplay(this._meshDisplay, !1),
                    null !== this._rawDisplay && this._disposeDisplay(this._rawDisplay, !1),
                    this.displayController = null,
                    this._displayDataDirty = !1,
                    this._displayDirty = !1,
                    this._geometryDirty = !1,
                    this._textureDirty = !1,
                    this._visibleDirty = !1,
                    this._blendModeDirty = !1,
                    this._zOrderDirty = !1,
                    this._colorDirty = !1,
                    this._verticesDirty = !1,
                    this._transformDirty = !1,
                    this._visible = !0,
                    this._blendMode = 0,
                    this._displayIndex = -1,
                    this._animationDisplayIndex = -1,
                    this._zOrder = 0,
                    this._zIndex = 0,
                    this._cachedFrameIndex = -1,
                    this._pivotX = 0,
                    this._pivotY = 0,
                    this._localMatrix.identity(),
                    this._colorTransform.identity(),
                    this._displayFrames.length = 0,
                    this._geometryBones.length = 0,
                    this._slotData = null,
                    this._displayFrame = null,
                    this._geometryData = null,
                    this._boundingBoxData = null,
                    this._textureData = null,
                    this._rawDisplay = null,
                    this._meshDisplay = null,
                    this._display = null,
                    this._childArmature = null,
                    this._parent = null,
                    this._cachedFrameIndices = null
                }
                ,
                i.prototype._hasDisplay = function(t) {
                    for (var e = 0, a = this._displayFrames; e < a.length; e++) {
                        var i = a[e];
                        if (i.display === t)
                            return !0
                    }
                    return !1
                }
                ,
                i.prototype._isBonesUpdate = function() {
                    for (var t = 0, e = this._geometryBones; t < e.length; t++) {
                        var a = e[t];
                        if (null !== a && a._childrenTransformDirty)
                            return !0
                    }
                    return !1
                }
                ,
                i.prototype._updateAlpha = function() {
                    var t = this._alpha * this._parent._globalAlpha;
                    this._globalAlpha !== t && (this._globalAlpha = t,
                    this._colorDirty = !0)
                }
                ,
                i.prototype._updateDisplayData = function() {
                    var e = this._displayFrame
                      , a = this._geometryData
                      , r = this._textureData
                      , n = null
                      , s = null;
                    if (this._displayFrame = null,
                    this._geometryData = null,
                    this._boundingBoxData = null,
                    this._textureData = null,
                    this._displayIndex >= 0 && this._displayIndex < this._displayFrames.length && (this._displayFrame = this._displayFrames[this._displayIndex],
                    n = this._displayFrame.rawDisplayData,
                    s = this._displayFrame.displayData,
                    this._geometryData = this._displayFrame.getGeometryData(),
                    this._boundingBoxData = this._displayFrame.getBoundingBox(),
                    this._textureData = this._displayFrame.getTextureData()),
                    this._displayFrame !== e || this._geometryData !== a || this._textureData !== r) {
                        if (null === this._geometryData && null !== this._textureData) {
                            var o = null !== s && 0 === s.type ? s : n
                              , l = this._textureData.parent.scale * this._armature._armatureData.scale
                              , h = this._textureData.frame;
                            this._pivotX = o.pivot.x,
                            this._pivotY = o.pivot.y;
                            var u = null !== h ? h : this._textureData.region
                              , c = u.width
                              , f = u.height;
                            this._textureData.rotated && null === h && (c = u.height,
                            f = u.width),
                            this._pivotX *= c * l,
                            this._pivotY *= f * l,
                            null !== h && (this._pivotX += h.x * l,
                            this._pivotY += h.y * l),
                            null !== n && o !== n && (n.transform.toMatrix(i._helpMatrix),
                            i._helpMatrix.invert(),
                            i._helpMatrix.transformPoint(0, 0, i._helpPoint),
                            this._pivotX -= i._helpPoint.x,
                            this._pivotY -= i._helpPoint.y,
                            o.transform.toMatrix(i._helpMatrix),
                            i._helpMatrix.invert(),
                            i._helpMatrix.transformPoint(0, 0, i._helpPoint),
                            this._pivotX += i._helpPoint.x,
                            this._pivotY += i._helpPoint.y),
                            t.DragonBones.yDown || (this._pivotY = (this._textureData.rotated ? this._textureData.region.width : this._textureData.region.height) * l - this._pivotY)
                        } else
                            this._pivotX = 0,
                            this._pivotY = 0;
                        if (this.origin = null !== n ? n.transform : null !== s ? s.transform : null,
                        null !== this.origin ? this.global.copyFrom(this.origin).add(this.offset).toMatrix(this._localMatrix) : this.global.copyFrom(this.offset).toMatrix(this._localMatrix),
                        this._geometryData !== a)
                            if (this._geometryDirty = !0,
                            this._verticesDirty = !0,
                            null !== this._geometryData) {
                                if (this._geometryBones.length = 0,
                                null !== this._geometryData.weight)
                                    for (var m = 0, _ = this._geometryData.weight.bones.length; m < _; ++m) {
                                        var p = this._armature.getBone(this._geometryData.weight.bones[m].name);
                                        this._geometryBones.push(p)
                                    }
                            } else
                                this._geometryBones.length = 0,
                                this._geometryData = null;
                        this._textureDirty = this._textureData !== r,
                        this._transformDirty = !0
                    }
                }
                ,
                i.prototype._updateDisplay = function() {
                    var e = null !== this._display ? this._display : this._rawDisplay
                      , a = this._childArmature;
                    null !== this._displayFrame ? (this._display = this._displayFrame.display,
                    null !== this._display && this._display instanceof t.Armature ? (this._childArmature = this._display,
                    this._display = this._childArmature.display) : this._childArmature = null) : (this._display = null,
                    this._childArmature = null);
                    var i = null !== this._display ? this._display : this._rawDisplay;
                    if (i !== e && (this._textureDirty = !0,
                    this._visibleDirty = !0,
                    this._blendModeDirty = !0,
                    this._colorDirty = !0,
                    this._transformDirty = !0,
                    this._onUpdateDisplay(),
                    this._replaceDisplay(e)),
                    this._childArmature !== a && (null !== a && (a._parent = null,
                    a.clock = null,
                    a.inheritAnimation && a.animation.reset()),
                    null !== this._childArmature && (this._childArmature._parent = this,
                    this._childArmature.clock = this._armature.clock,
                    this._childArmature.inheritAnimation))) {
                        if (0 === this._childArmature.cacheFrameRate) {
                            var r = this._armature.cacheFrameRate;
                            0 !== r && (this._childArmature.cacheFrameRate = r)
                        }
                        if (null !== this._displayFrame) {
                            var n = null
                              , s = null !== this._displayFrame.displayData ? this._displayFrame.displayData : this._displayFrame.rawDisplayData;
                            if (null !== s && 1 === s.type && (n = s.actions),
                            null !== n && n.length > 0)
                                for (var o = 0, l = n; o < l.length; o++) {
                                    var h = l[o]
                                      , u = t.BaseObject.borrowObject(t.EventObject);
                                    t.EventObject.actionDataToInstance(h, u, this._armature),
                                    u.slot = this,
                                    this._armature._bufferAction(u, !1)
                                }
                            else
                                this._childArmature.animation.play()
                        }
                    }
                }
                ,
                i.prototype._updateGlobalTransformMatrix = function(t) {
                    var e = 0 === this._parent._boneData.type ? this._parent.globalTransformMatrix : this._parent._getGlobalTransformMatrix(this.global.x, this.global.y);
                    this.globalTransformMatrix.copyFrom(this._localMatrix),
                    this.globalTransformMatrix.concat(e),
                    t ? this.global.fromMatrix(this.globalTransformMatrix) : this._globalDirty = !0
                }
                ,
                i.prototype._setDisplayIndex = function(t, e) {
                    if (void 0 === e && (e = !1),
                    e) {
                        if (this._animationDisplayIndex === t)
                            return;
                        this._animationDisplayIndex = t
                    }
                    this._displayIndex !== t && (this._displayIndex = t < this._displayFrames.length ? t : this._displayFrames.length - 1,
                    this._displayDataDirty = !0,
                    this._displayDirty = this._displayIndex < 0 || this._display !== this._displayFrames[this._displayIndex].display)
                }
                ,
                i.prototype._setZOrder = function(t) {
                    return this._zOrder,
                    this._zOrder = t,
                    this._zOrderDirty = !0,
                    this._zOrderDirty
                }
                ,
                i.prototype._setColor = function(t) {
                    return this._colorTransform.copyFrom(t),
                    this._colorDirty = !0
                }
                ,
                i.prototype.init = function(t, e, a, i) {
                    if (null === this._slotData) {
                        this._slotData = t,
                        this._colorDirty = !0,
                        this._blendModeDirty = !0,
                        this._blendMode = this._slotData.blendMode,
                        this._zOrder = this._slotData.zOrder,
                        this._zIndex = this._slotData.zIndex,
                        this._alpha = this._slotData.alpha,
                        this._colorTransform.copyFrom(this._slotData.color),
                        this._rawDisplay = a,
                        this._meshDisplay = i,
                        this._armature = e;
                        var r = this._armature.getBone(this._slotData.parent.name);
                        null !== r && (this._parent = r),
                        this._armature._addSlot(this),
                        this._initDisplay(this._rawDisplay, !1),
                        this._rawDisplay !== this._meshDisplay && this._initDisplay(this._meshDisplay, !1),
                        this._onUpdateDisplay(),
                        this._addDisplay()
                    }
                }
                ,
                i.prototype.update = function(t) {
                    if (this._displayDataDirty && (this._updateDisplayData(),
                    this._displayDataDirty = !1),
                    this._displayDirty && (this._updateDisplay(),
                    this._displayDirty = !1),
                    (this._geometryDirty || this._textureDirty) && (null !== this._display && this._display !== this._rawDisplay && this._display !== this._meshDisplay || this._updateFrame(),
                    this._geometryDirty = !1,
                    this._textureDirty = !1),
                    null !== this._display) {
                        if (this._visibleDirty && (this._updateVisible(),
                        this._visibleDirty = !1),
                        this._blendModeDirty && (this._updateBlendMode(),
                        this._blendModeDirty = !1),
                        this._colorDirty && (this._updateColor(),
                        this._colorDirty = !1),
                        this._zOrderDirty && (this._updateZOrder(),
                        this._zOrderDirty = !1),
                        null !== this._geometryData && this._display === this._meshDisplay) {
                            var e = null !== this._geometryData.weight
                              , a = 0 !== this._parent._boneData.type;
                            if ((this._verticesDirty || e && this._isBonesUpdate() || a && this._parent._childrenTransformDirty) && (this._updateMesh(),
                            this._verticesDirty = !1),
                            e || a)
                                return
                        }
                        if (t >= 0 && null !== this._cachedFrameIndices) {
                            var i = this._cachedFrameIndices[t];
                            i >= 0 && this._cachedFrameIndex === i ? this._transformDirty = !1 : i >= 0 ? (this._transformDirty = !0,
                            this._cachedFrameIndex = i) : this._transformDirty || this._parent._childrenTransformDirty ? (this._transformDirty = !0,
                            this._cachedFrameIndex = -1) : this._cachedFrameIndex >= 0 ? (this._transformDirty = !1,
                            this._cachedFrameIndices[t] = this._cachedFrameIndex) : (this._transformDirty = !0,
                            this._cachedFrameIndex = -1)
                        } else
                            (this._transformDirty || this._parent._childrenTransformDirty) && (t = -1,
                            this._transformDirty = !0,
                            this._cachedFrameIndex = -1);
                        if (this._transformDirty) {
                            if (this._cachedFrameIndex < 0) {
                                var r = t >= 0;
                                this._updateGlobalTransformMatrix(r),
                                r && null !== this._cachedFrameIndices && (this._cachedFrameIndex = this._cachedFrameIndices[t] = this._armature._armatureData.setCacheFrame(this.globalTransformMatrix, this.global))
                            } else
                                this._armature._armatureData.getCacheFrame(this.globalTransformMatrix, this.global, this._cachedFrameIndex);
                            this._updateTransform(),
                            this._transformDirty = !1
                        }
                    }
                }
                ,
                i.prototype.invalidUpdate = function() {
                    this._displayDataDirty = !0,
                    this._displayDirty = !0,
                    this._transformDirty = !0
                }
                ,
                i.prototype.updateTransformAndMatrix = function() {
                    this._transformDirty && (this._updateGlobalTransformMatrix(!1),
                    this._transformDirty = !1)
                }
                ,
                i.prototype.replaceRawDisplayData = function(t, e) {
                    if (void 0 === e && (e = -1),
                    e < 0)
                        e = this._displayIndex < 0 ? 0 : this._displayIndex;
                    else if (e >= this._displayFrames.length)
                        return;
                    var a = this._displayFrames[e];
                    if (a.rawDisplayData !== t) {
                        if (a.deformVertices.length = 0,
                        a.rawDisplayData = t,
                        null === a.rawDisplayData) {
                            var i = this._armature._armatureData.defaultSkin;
                            if (null !== i) {
                                var r = i.getDisplays(this._slotData.name);
                                null !== r && e < r.length && (a.rawDisplayData = r[e])
                            }
                        }
                        e === this._displayIndex && (this._displayDataDirty = !0)
                    }
                }
                ,
                i.prototype.replaceDisplayData = function(t, e) {
                    if (void 0 === e && (e = -1),
                    e < 0)
                        e = this._displayIndex < 0 ? 0 : this._displayIndex;
                    else if (e >= this._displayFrames.length)
                        return;
                    var a = this._displayFrames[e];
                    a.displayData !== t && a.rawDisplayData !== t && (a.displayData = t,
                    e === this._displayIndex && (this._displayDataDirty = !0))
                }
                ,
                i.prototype.replaceTextureData = function(t, e) {
                    if (void 0 === e && (e = -1),
                    e < 0)
                        e = this._displayIndex < 0 ? 0 : this._displayIndex;
                    else if (e >= this._displayFrames.length)
                        return;
                    var a = this._displayFrames[e];
                    a.textureData !== t && (a.textureData = t,
                    e === this._displayIndex && (this._displayDataDirty = !0))
                }
                ,
                i.prototype.replaceDisplay = function(e, a) {
                    if (void 0 === a && (a = -1),
                    a < 0)
                        a = this._displayIndex < 0 ? 0 : this._displayIndex;
                    else if (a >= this._displayFrames.length)
                        return;
                    var i = this._displayFrames[a];
                    if (i.display !== e) {
                        var r = i.display;
                        i.display = e,
                        null === r || r === this._rawDisplay || r === this._meshDisplay || this._hasDisplay(r) || r instanceof t.Armature || this._disposeDisplay(r, !0),
                        null === e || e === this._rawDisplay || e === this._meshDisplay || this._hasDisplay(r) || e instanceof t.Armature || this._initDisplay(e, !0),
                        a === this._displayIndex && (this._displayDirty = !0)
                    }
                }
                ,
                i.prototype.containsPoint = function(t, e) {
                    return null !== this._boundingBoxData && (this.updateTransformAndMatrix(),
                    i._helpMatrix.copyFrom(this.globalTransformMatrix),
                    i._helpMatrix.invert(),
                    i._helpMatrix.transformPoint(t, e, i._helpPoint),
                    this._boundingBoxData.containsPoint(i._helpPoint.x, i._helpPoint.y))
                }
                ,
                i.prototype.intersectsSegment = function(t, e, a, r, n, s, o) {
                    if (void 0 === n && (n = null),
                    void 0 === s && (s = null),
                    void 0 === o && (o = null),
                    null === this._boundingBoxData)
                        return 0;
                    this.updateTransformAndMatrix(),
                    i._helpMatrix.copyFrom(this.globalTransformMatrix),
                    i._helpMatrix.invert(),
                    i._helpMatrix.transformPoint(t, e, i._helpPoint),
                    t = i._helpPoint.x,
                    e = i._helpPoint.y,
                    i._helpMatrix.transformPoint(a, r, i._helpPoint),
                    a = i._helpPoint.x,
                    r = i._helpPoint.y;
                    var l = this._boundingBoxData.intersectsSegment(t, e, a, r, n, s, o);
                    return l > 0 && (1 === l || 2 === l ? null !== n ? (this.globalTransformMatrix.transformPoint(n.x, n.y, n),
                    null !== s && (s.x = n.x,
                    s.y = n.y)) : null !== s && this.globalTransformMatrix.transformPoint(s.x, s.y, s) : (null !== n && this.globalTransformMatrix.transformPoint(n.x, n.y, n),
                    null !== s && this.globalTransformMatrix.transformPoint(s.x, s.y, s)),
                    null !== o && (this.globalTransformMatrix.transformPoint(Math.cos(o.x), Math.sin(o.x), i._helpPoint, !0),
                    o.x = Math.atan2(i._helpPoint.y, i._helpPoint.x),
                    this.globalTransformMatrix.transformPoint(Math.cos(o.y), Math.sin(o.y), i._helpPoint, !0),
                    o.y = Math.atan2(i._helpPoint.y, i._helpPoint.x))),
                    l
                }
                ,
                i.prototype.getDisplayFrameAt = function(t) {
                    return this._displayFrames[t]
                }
                ,
                Object.defineProperty(i.prototype, "visible", {
                    get: function() {
                        return this._visible
                    },
                    set: function(t) {
                        this._visible !== t && (this._visible = t,
                        this._updateVisible())
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "displayFrameCount", {
                    get: function() {
                        return this._displayFrames.length
                    },
                    set: function(a) {
                        var i = this._displayFrames.length;
                        if (i < a) {
                            this._displayFrames.length = a;
                            for (var r = i; r < a; ++r)
                                this._displayFrames[r] = t.BaseObject.borrowObject(e)
                        } else if (i > a) {
                            for (r = i - 1; r < a; --r)
                                this.replaceDisplay(null, r),
                                this._displayFrames[r].returnToPool();
                            this._displayFrames.length = a
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "displayIndex", {
                    get: function() {
                        return this._displayIndex
                    },
                    set: function(t) {
                        this._setDisplayIndex(t),
                        this.update(-1)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "name", {
                    get: function() {
                        return this._slotData.name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "displayList", {
                    get: function() {
                        for (var t = new Array, e = 0, a = this._displayFrames; e < a.length; e++) {
                            var i = a[e];
                            t.push(i.display)
                        }
                        return t
                    },
                    set: function(t) {
                        this.displayFrameCount = t.length;
                        for (var e = 0, a = 0, i = t; a < i.length; a++) {
                            var r = i[a];
                            this.replaceDisplay(r, e++)
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "slotData", {
                    get: function() {
                        return this._slotData
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "boundingBoxData", {
                    get: function() {
                        return this._boundingBoxData
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "rawDisplay", {
                    get: function() {
                        return this._rawDisplay
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "meshDisplay", {
                    get: function() {
                        return this._meshDisplay
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "display", {
                    get: function() {
                        return this._display
                    },
                    set: function(t) {
                        this._display !== t && (0 === this._displayFrames.length && (this.displayFrameCount = 1,
                        this._displayIndex = 0),
                        this.replaceDisplay(t, this._displayIndex))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "childArmature", {
                    get: function() {
                        return this._childArmature
                    },
                    set: function(t) {
                        this._childArmature !== t && (this.display = t)
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "parent", {
                    get: function() {
                        return this._parent
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                i.prototype.getDisplay = function() {
                    return this._display
                }
                ,
                i.prototype.setDisplay = function(t) {
                    this.display = t
                }
                ,
                i
            }(t.TransformObject);
            t.Slot = a
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.prototype._onClear = function() {
                    this._armature = null,
                    this._target = null,
                    this._root = null,
                    this._bone = null
                }
                ,
                Object.defineProperty(a.prototype, "name", {
                    get: function() {
                        return this._constraintData.name
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a._helpMatrix = new t.Matrix,
                a._helpTransform = new t.Transform,
                a._helpPoint = new t.Point,
                a
            }(t.BaseObject);
            t.Constraint = e;
            var a = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.IKConstraint]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this._scaleEnabled = !1,
                    this._bendPositive = !1,
                    this._weight = 1,
                    this._constraintData = null
                }
                ,
                a.prototype._computeA = function() {
                    var e = this._target.global
                      , a = this._root.global
                      , i = this._root.globalTransformMatrix
                      , r = Math.atan2(e.y - a.y, e.x - a.x);
                    a.scaleX < 0 && (r += Math.PI),
                    a.rotation += t.Transform.normalizeRadian(r - a.rotation) * this._weight,
                    a.toMatrix(i)
                }
                ,
                a.prototype._computeB = function() {
                    var e = this._bone._boneData.length
                      , a = this._root
                      , i = this._target.global
                      , r = a.global
                      , n = this._bone.global
                      , s = this._bone.globalTransformMatrix
                      , o = s.a * e
                      , l = s.b * e
                      , h = o * o + l * l
                      , u = Math.sqrt(h)
                      , c = n.x - r.x
                      , f = n.y - r.y
                      , m = c * c + f * f
                      , _ = Math.sqrt(m)
                      , p = n.rotation
                      , d = r.rotation
                      , y = Math.atan2(f, c);
                    c = i.x - r.x,
                    f = i.y - r.y;
                    var g = c * c + f * f
                      , b = Math.sqrt(g)
                      , v = 0;
                    if (u + _ <= b || b + u <= _ || b + _ <= u)
                        v = Math.atan2(i.y - r.y, i.x - r.x),
                        u + _ <= b || _ < u && (v += Math.PI);
                    else {
                        var D = (m - h + g) / (2 * g)
                          , T = Math.sqrt(m - D * D * g) / b
                          , A = r.x + c * D
                          , P = r.y + f * D
                          , O = -f * T
                          , S = c * T
                          , x = !1
                          , w = a.parent;
                        if (null !== w) {
                            var E = w.globalTransformMatrix;
                            x = E.a * E.d - E.b * E.c < 0
                        }
                        x !== this._bendPositive ? (n.x = A - O,
                        n.y = P - S) : (n.x = A + O,
                        n.y = P + S),
                        v = Math.atan2(n.y - r.y, n.x - r.x)
                    }
                    var C = t.Transform.normalizeRadian(v - y);
                    r.rotation = d + C * this._weight,
                    r.toMatrix(a.globalTransformMatrix);
                    var I = y + C * this._weight;
                    n.x = r.x + Math.cos(I) * _,
                    n.y = r.y + Math.sin(I) * _;
                    var M = Math.atan2(i.y - n.y, i.x - n.x);
                    n.scaleX < 0 && (M += Math.PI),
                    n.rotation = r.rotation + p - d + t.Transform.normalizeRadian(M - C - p) * this._weight,
                    n.toMatrix(s)
                }
                ,
                a.prototype.init = function(t, e) {
                    if (null === this._constraintData) {
                        this._constraintData = t,
                        this._armature = e,
                        this._target = this._armature.getBone(this._constraintData.target.name),
                        this._root = this._armature.getBone(this._constraintData.root.name),
                        this._bone = null !== this._constraintData.bone ? this._armature.getBone(this._constraintData.bone.name) : null;
                        var a = this._constraintData;
                        this._scaleEnabled = a.scaleEnabled,
                        this._bendPositive = a.bendPositive,
                        this._weight = a.weight,
                        this._root._hasConstraint = !0
                    }
                }
                ,
                a.prototype.update = function() {
                    this._root.updateByConstraint(),
                    null !== this._bone ? (this._bone.updateByConstraint(),
                    this._computeB()) : this._computeA()
                }
                ,
                a.prototype.invalidUpdate = function() {
                    this._root.invalidUpdate(),
                    null !== this._bone && this._bone.invalidUpdate()
                }
                ,
                a
            }(e);
            t.IKConstraint = a;
            var i = function(e) {
                function a() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._bones = [],
                    t._spaces = [],
                    t._positions = [],
                    t._curves = [],
                    t._boneLengths = [],
                    t._pathGlobalVertices = [],
                    t._segments = [10],
                    t
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.PathConstraint]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this.dirty = !1,
                    this.pathOffset = 0,
                    this.position = 0,
                    this.spacing = 0,
                    this.rotateOffset = 0,
                    this.rotateMix = 1,
                    this.translateMix = 1,
                    this._pathSlot = null,
                    this._bones.length = 0,
                    this._spaces.length = 0,
                    this._positions.length = 0,
                    this._curves.length = 0,
                    this._boneLengths.length = 0,
                    this._pathGlobalVertices.length = 0
                }
                ,
                a.prototype._updatePathVertices = function(t) {
                    var e = this._armature
                      , a = e.armatureData.parent
                      , i = e.armatureData.scale
                      , r = a.intArray
                      , n = a.floatArray
                      , s = t.offset
                      , o = r[s + 0]
                      , l = r[s + 2];
                    this._pathGlobalVertices.length = 2 * o;
                    var h = t.weight;
                    if (null !== h)
                        for (var u = this._pathSlot._geometryBones, c = h.bones.length, f = h.offset, m = r[f + 1], _ = m, p = f + 2 + c, d = (x = 0,
                        0); x < o; x++) {
                            for (var y = r[p++], g = 0, b = 0, v = 0, D = y; v < D; v++) {
                                var T = r[p++]
                                  , A = u[T];
                                if (null !== A) {
                                    A.updateByConstraint();
                                    S = A.globalTransformMatrix;
                                    var P = n[_++];
                                    E = n[_++] * i,
                                    C = n[_++] * i;
                                    g += (S.a * E + S.c * C + S.tx) * P,
                                    b += (S.b * E + S.d * C + S.ty) * P
                                }
                            }
                            this._pathGlobalVertices[d++] = g,
                            this._pathGlobalVertices[d++] = b
                        }
                    else {
                        var O = this._pathSlot.parent;
                        O.updateByConstraint();
                        for (var S = O.globalTransformMatrix, x = 0, w = l; x < o; x += 2) {
                            var E = n[w++] * i
                              , C = n[w++] * i
                              , I = S.a * E + S.c * C + S.tx
                              , M = S.b * E + S.d * C + S.ty;
                            this._pathGlobalVertices[x] = I,
                            this._pathGlobalVertices[x + 1] = M
                        }
                    }
                }
                ,
                a.prototype._computeVertices = function(t, e, a, i) {
                    for (var r = a, n = t; r < e; r += 2)
                        i[r] = this._pathGlobalVertices[n++],
                        i[r + 1] = this._pathGlobalVertices[n++]
                }
                ,
                a.prototype._computeBezierCurve = function(t, e, a, i, r) {
                    var n = this._armature
                      , s = n.armatureData.parent.intArray
                      , o = s[t.geometry.offset + 0]
                      , l = this._positions
                      , h = this._spaces
                      , u = t.closed
                      , c = Array()
                      , f = 2 * o
                      , m = f / 6
                      , _ = -1
                      , p = this.position;
                    l.length = 3 * e + 2;
                    var d = 0;
                    if (t.constantSpeed) {
                        u ? (f += 2,
                        c.length = o,
                        this._computeVertices(2, f - 4, 0, c),
                        this._computeVertices(0, 2, f - 4, c),
                        c[f - 2] = c[0],
                        c[f - 1] = c[1]) : (m--,
                        f -= 4,
                        c.length = f,
                        this._computeVertices(2, f, 0, c));
                        var y = new Array(m);
                        d = 0;
                        for (var g, b, v, D, T, A, P, O, S = c[0], x = c[1], w = 0, E = 0, C = 0, I = 0, M = 0, B = 0, F = (X = 0,
                        2); X < m; X++,
                        F += 6)
                            w = c[F],
                            E = c[F + 1],
                            C = c[F + 2],
                            I = c[F + 3],
                            M = c[F + 4],
                            B = c[F + 5],
                            g = .1875 * (S - 2 * w + C),
                            b = .1875 * (x - 2 * E + I),
                            v = .09375 * (3 * (w - C) - S + M),
                            D = .09375 * (3 * (E - I) - x + B),
                            T = 2 * g + v,
                            A = 2 * b + D,
                            P = .75 * (w - S) + g + .16666667 * v,
                            O = .75 * (E - x) + b + .16666667 * D,
                            d += Math.sqrt(P * P + O * O),
                            P += T,
                            O += A,
                            T += v,
                            A += D,
                            d += Math.sqrt(P * P + O * O),
                            P += T,
                            O += A,
                            d += Math.sqrt(P * P + O * O),
                            P += T + v,
                            O += A + D,
                            d += Math.sqrt(P * P + O * O),
                            y[X] = d,
                            S = M,
                            x = B;
                        if (i && (p *= d),
                        r)
                            for (X = 0; X < e; X++)
                                h[X] *= d;
                        for (var k = this._segments, R = 0, j = (X = 0,
                        z = 0,
                        G = 0,
                        0); X < e; X++,
                        z += 3) {
                            W = h[X];
                            p += W;
                            var N = p;
                            if (u)
                                N %= d,
                                N < 0 && (N += d),
                                G = 0;
                            else {
                                if (N < 0)
                                    continue;
                                if (N > d)
                                    continue
                            }
                            for (; ; G++) {
                                var V = y[G];
                                if (!(N > V)) {
                                    if (0 === G)
                                        N /= V;
                                    else {
                                        var L = y[G - 1];
                                        N = (N - L) / (V - L)
                                    }
                                    break
                                }
                            }
                            if (G !== _) {
                                _ = G;
                                var Y = 6 * G;
                                for (S = c[Y],
                                x = c[Y + 1],
                                w = c[Y + 2],
                                E = c[Y + 3],
                                C = c[Y + 4],
                                I = c[Y + 5],
                                M = c[Y + 6],
                                B = c[Y + 7],
                                g = .03 * (S - 2 * w + C),
                                b = .03 * (x - 2 * E + I),
                                v = .006 * (3 * (w - C) - S + M),
                                D = .006 * (3 * (E - I) - x + B),
                                T = 2 * g + v,
                                A = 2 * b + D,
                                P = .3 * (w - S) + g + .16666667 * v,
                                O = .3 * (E - x) + b + .16666667 * D,
                                R = Math.sqrt(P * P + O * O),
                                k[0] = R,
                                Y = 1; Y < 8; Y++)
                                    P += T,
                                    O += A,
                                    T += v,
                                    A += D,
                                    R += Math.sqrt(P * P + O * O),
                                    k[Y] = R;
                                P += T,
                                O += A,
                                R += Math.sqrt(P * P + O * O),
                                k[8] = R,
                                P += T + v,
                                O += A + D,
                                R += Math.sqrt(P * P + O * O),
                                k[9] = R,
                                j = 0
                            }
                            for (N *= R; ; j++) {
                                var U = k[j];
                                if (!(N > U)) {
                                    if (0 === j)
                                        N /= U;
                                    else {
                                        L = k[j - 1];
                                        N = j + (N - L) / (U - L)
                                    }
                                    break
                                }
                            }
                            this.addCurvePosition(.1 * N, S, x, w, E, C, I, M, B, l, z, a)
                        }
                    } else {
                        var H = t.curveLengths;
                        if (m -= u ? 1 : 2,
                        d = H[m],
                        i && (p *= d),
                        r)
                            for (var X = 0; X < e; X++)
                                h[X] *= d;
                        c.length = 8;
                        for (var X = 0, z = 0, G = 0; X < e; X++,
                        z += 3) {
                            var W = h[X];
                            if (p += W,
                            u)
                                p %= d,
                                p < 0 && (p += d),
                                G = 0;
                            else {
                                if (p < 0)
                                    continue;
                                if (p > d)
                                    continue
                            }
                            for (var K = 0; ; G++) {
                                var q = H[G];
                                if (!(p > q)) {
                                    if (0 === G)
                                        K = p / q;
                                    else {
                                        var Z = H[G - 1];
                                        K = (p - Z) / (q - Z)
                                    }
                                    break
                                }
                            }
                            G !== _ && (_ = G,
                            u && G === m ? (this._computeVertices(f - 4, 4, 0, c),
                            this._computeVertices(0, 4, 4, c)) : this._computeVertices(6 * G + 2, 8, 0, c)),
                            this.addCurvePosition(K, c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], l, z, a)
                        }
                    }
                }
                ,
                a.prototype.addCurvePosition = function(t, e, a, i, r, n, s, o, l, h, u, c) {
                    if (0 === t)
                        return h[u] = e,
                        h[u + 1] = a,
                        void (h[u + 2] = 0);
                    if (1 === t)
                        return h[u] = o,
                        h[u + 1] = l,
                        void (h[u + 2] = 0);
                    var f = 1 - t
                      , m = f * f
                      , _ = t * t
                      , p = m * f
                      , d = m * t * 3
                      , y = f * _ * 3
                      , g = t * _
                      , b = p * e + d * i + y * n + g * o
                      , v = p * a + d * r + y * s + g * l;
                    h[u] = b,
                    h[u + 1] = v,
                    h[u + 2] = c ? Math.atan2(v - (p * a + d * r + y * s), b - (p * e + d * i + y * n)) : 0
                }
                ,
                a.prototype.init = function(t, e) {
                    this._constraintData = t,
                    this._armature = e;
                    var a = t;
                    this.pathOffset = a.pathDisplayData.geometry.offset,
                    this.position = a.position,
                    this.spacing = a.spacing,
                    this.rotateOffset = a.rotateOffset,
                    this.rotateMix = a.rotateMix,
                    this.translateMix = a.translateMix,
                    this._root = this._armature.getBone(a.root.name),
                    this._target = this._armature.getBone(a.target.name),
                    this._pathSlot = this._armature.getSlot(a.pathSlot.name);
                    for (var i = 0, r = a.bones.length; i < r; i++) {
                        var n = this._armature.getBone(a.bones[i].name);
                        null !== n && this._bones.push(n)
                    }
                    2 === a.rotateMode && (this._boneLengths.length = this._bones.length),
                    this._root._hasConstraint = !0
                }
                ,
                a.prototype.update = function() {
                    var e = this._pathSlot;
                    if (null !== e._geometryData && e._geometryData.offset === this.pathOffset) {
                        var a = this._constraintData
                          , i = !1;
                        if (this._root._childrenTransformDirty ? (this._updatePathVertices(e._geometryData),
                        i = !0) : (e._verticesDirty || e._isBonesUpdate()) && (this._updatePathVertices(e._geometryData),
                        e._verticesDirty = !1,
                        i = !0),
                        i || this.dirty) {
                            var r = a.positionMode
                              , n = a.spacingMode
                              , s = a.rotateMode
                              , o = this._bones
                              , l = 0 === n
                              , h = 2 === s
                              , u = 0 === s
                              , c = o.length
                              , f = u ? c : c + 1
                              , m = this.spacing
                              , _ = this._spaces;
                            if (_.length = f,
                            h || l) {
                                _[0] = 0;
                                for (var p = 0, d = f - 1; p < d; p++) {
                                    var y = o[p];
                                    y.updateByConstraint();
                                    var g = y._boneData.length
                                      , b = y.globalTransformMatrix
                                      , v = g * b.a
                                      , D = g * b.b
                                      , T = Math.sqrt(v * v + D * D);
                                    h && (this._boneLengths[p] = T),
                                    _[p + 1] = (g + m) * T / g
                                }
                            } else
                                for (p = 0; p < f; p++)
                                    _[p] = m;
                            this._computeBezierCurve(e._displayFrame.rawDisplayData, f, u, 1 === r, 2 === n);
                            var A, P = this._positions, O = this.rotateOffset, S = P[0], x = P[1];
                            if (0 === O)
                                A = 1 === s;
                            else {
                                A = !1;
                                y = e.parent;
                                if (null !== y) {
                                    b = y.globalTransformMatrix;
                                    O *= b.a * b.d - b.b * b.c > 0 ? t.Transform.DEG_RAD : -t.Transform.DEG_RAD
                                }
                            }
                            for (var w = this.rotateMix, E = this.translateMix, C = (p = 0,
                            3); p < c; p++,
                            C += 3) {
                                y = o[p];
                                y.updateByConstraint();
                                b = y.globalTransformMatrix;
                                b.tx += (S - b.tx) * E,
                                b.ty += (x - b.ty) * E;
                                v = P[C],
                                D = P[C + 1];
                                var I = v - S
                                  , M = D - x;
                                if (h) {
                                    var B = this._boneLengths[p]
                                      , F = (Math.sqrt(I * I + M * M) / B - 1) * w + 1;
                                    b.a *= F,
                                    b.b *= F
                                }
                                if (S = v,
                                x = D,
                                w > 0) {
                                    var k = b.a
                                      , R = b.b
                                      , j = b.c
                                      , N = b.d
                                      , V = void 0
                                      , L = void 0
                                      , Y = void 0;
                                    if (V = u ? P[C - 1] : Math.atan2(M, I),
                                    V -= Math.atan2(R, k),
                                    A) {
                                        L = Math.cos(V),
                                        Y = Math.sin(V);
                                        var U = y._boneData.length;
                                        S += (U * (L * k - Y * R) - I) * w,
                                        x += (U * (Y * k + L * R) - M) * w
                                    } else
                                        V += O;
                                    V > t.Transform.PI ? V -= t.Transform.PI_D : V < -t.Transform.PI && (V += t.Transform.PI_D),
                                    V *= w,
                                    L = Math.cos(V),
                                    Y = Math.sin(V),
                                    b.a = L * k - Y * R,
                                    b.b = Y * k + L * R,
                                    b.c = L * j - Y * N,
                                    b.d = Y * j + L * N
                                }
                                y.global.fromMatrix(b)
                            }
                            this.dirty = !1
                        }
                    }
                }
                ,
                a.prototype.invalidUpdate = function() {}
                ,
                a
            }(e);
            t.PathConstraint = i
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t(t) {
                    void 0 === t && (t = 0),
                    this.time = 0,
                    this.timeScale = 1,
                    this._systemTime = 0,
                    this._animatebles = [],
                    this._clock = null,
                    this.time = t,
                    this._systemTime = .001 * (new Date).getTime()
                }
                return t.prototype.advanceTime = function(t) {
                    t !== t && (t = 0);
                    var e = .001 * Date.now();
                    if (t < 0 && (t = e - this._systemTime),
                    this._systemTime = e,
                    1 !== this.timeScale && (t *= this.timeScale),
                    0 !== t) {
                        t < 0 ? this.time -= t : this.time += t;
                        for (var a = 0, i = 0, r = this._animatebles.length; a < r; ++a) {
                            var n = this._animatebles[a];
                            null !== n ? (i > 0 && (this._animatebles[a - i] = n,
                            this._animatebles[a] = null),
                            n.advanceTime(t)) : i++
                        }
                        if (i > 0) {
                            for (r = this._animatebles.length; a < r; ++a) {
                                var s = this._animatebles[a];
                                null !== s ? this._animatebles[a - i] = s : i++
                            }
                            this._animatebles.length -= i
                        }
                    }
                }
                ,
                t.prototype.contains = function(t) {
                    if (t === this)
                        return !1;
                    var e = t;
                    while (e !== this && null !== e)
                        e = e.clock;
                    return e === this
                }
                ,
                t.prototype.add = function(t) {
                    this._animatebles.indexOf(t) < 0 && (this._animatebles.push(t),
                    t.clock = this)
                }
                ,
                t.prototype.remove = function(t) {
                    var e = this._animatebles.indexOf(t);
                    e >= 0 && (this._animatebles[e] = null,
                    t.clock = null)
                }
                ,
                t.prototype.clear = function() {
                    for (var t = 0, e = this._animatebles; t < e.length; t++) {
                        var a = e[t];
                        null !== a && (a.clock = null)
                    }
                }
                ,
                Object.defineProperty(t.prototype, "clock", {
                    get: function() {
                        return this._clock
                    },
                    set: function(t) {
                        this._clock !== t && (null !== this._clock && this._clock.remove(this),
                        this._clock = t,
                        null !== this._clock && this._clock.add(this))
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                t
            }();
            t.WorldClock = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._animationNames = [],
                    t._animationStates = [],
                    t._animations = {},
                    t._blendStates = {},
                    t._animationConfig = null,
                    t
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.Animation]"
                }
                ,
                a.prototype._onClear = function() {
                    for (var t = 0, e = this._animationStates; t < e.length; t++) {
                        var a = e[t];
                        a.returnToPool()
                    }
                    for (var i in this._animations)
                        delete this._animations[i];
                    for (var i in this._blendStates) {
                        var r = this._blendStates[i];
                        for (var n in r)
                            r[n].returnToPool();
                        delete this._blendStates[i]
                    }
                    null !== this._animationConfig && this._animationConfig.returnToPool(),
                    this.timeScale = 1,
                    this._animationDirty = !1,
                    this._inheritTimeScale = 1,
                    this._animationNames.length = 0,
                    this._animationStates.length = 0,
                    this._armature = null,
                    this._animationConfig = null,
                    this._lastAnimationState = null
                }
                ,
                a.prototype._fadeOut = function(t) {
                    switch (t.fadeOutMode) {
                    case 1:
                        for (var e = 0, a = this._animationStates; e < a.length; e++) {
                            var i = a[e];
                            null === i._parent && (i.layer === t.layer && i.fadeOut(t.fadeOutTime, t.pauseFadeOut))
                        }
                        break;
                    case 2:
                        for (var r = 0, n = this._animationStates; r < n.length; r++) {
                            i = n[r];
                            null === i._parent && (i.group === t.group && i.fadeOut(t.fadeOutTime, t.pauseFadeOut))
                        }
                        break;
                    case 3:
                        for (var s = 0, o = this._animationStates; s < o.length; s++) {
                            i = o[s];
                            null === i._parent && (i.layer === t.layer && i.group === t.group && i.fadeOut(t.fadeOutTime, t.pauseFadeOut))
                        }
                        break;
                    case 4:
                        for (var l = 0, h = this._animationStates; l < h.length; l++) {
                            i = h[l];
                            null === i._parent && i.fadeOut(t.fadeOutTime, t.pauseFadeOut)
                        }
                        break
                    }
                }
                ,
                a.prototype.init = function(e) {
                    null === this._armature && (this._armature = e,
                    this._animationConfig = t.BaseObject.borrowObject(t.AnimationConfig))
                }
                ,
                a.prototype.advanceTime = function(t) {
                    for (var e in t < 0 && (t = -t),
                    this._armature.inheritAnimation && null !== this._armature._parent ? this._inheritTimeScale = this._armature._parent._armature.animation._inheritTimeScale * this.timeScale : this._inheritTimeScale = this.timeScale,
                    1 !== this._inheritTimeScale && (t *= this._inheritTimeScale),
                    this._blendStates) {
                        var a = this._blendStates[e];
                        for (var i in a)
                            a[i].reset()
                    }
                    var r = this._animationStates.length;
                    if (1 === r) {
                        var n = this._animationStates[0];
                        if (n._fadeState > 0 && n._subFadeState > 0)
                            this._armature._dragonBones.bufferObject(n),
                            this._animationStates.length = 0,
                            this._lastAnimationState = null;
                        else {
                            var s = n.animationData
                              , o = s.cacheFrameRate;
                            if (this._animationDirty && o > 0) {
                                this._animationDirty = !1;
                                for (var l = 0, h = this._armature.getBones(); l < h.length; l++) {
                                    var u = h[l];
                                    u._cachedFrameIndices = s.getBoneCachedFrameIndices(u.name)
                                }
                                for (var c = 0, f = this._armature.getSlots(); c < f.length; c++) {
                                    var m = f[c];
                                    if (m.displayFrameCount > 0) {
                                        var _ = m.getDisplayFrameAt(0).rawDisplayData;
                                        if (null !== _ && _.parent === this._armature.armatureData.defaultSkin) {
                                            m._cachedFrameIndices = s.getSlotCachedFrameIndices(m.name);
                                            continue
                                        }
                                    }
                                    m._cachedFrameIndices = null
                                }
                            }
                            n.advanceTime(t, o)
                        }
                    } else if (r > 1) {
                        for (var p = 0, d = 0; p < r; ++p) {
                            n = this._animationStates[p];
                            n._fadeState > 0 && n._subFadeState > 0 ? (d++,
                            this._armature._dragonBones.bufferObject(n),
                            this._animationDirty = !0,
                            this._lastAnimationState === n && (this._lastAnimationState = null)) : (d > 0 && (this._animationStates[p - d] = n),
                            n.advanceTime(t, 0)),
                            p === r - 1 && d > 0 && (this._animationStates.length -= d,
                            null === this._lastAnimationState && this._animationStates.length > 0 && (this._lastAnimationState = this._animationStates[this._animationStates.length - 1]))
                        }
                        this._armature._cacheFrameIndex = -1
                    } else
                        this._armature._cacheFrameIndex = -1
                }
                ,
                a.prototype.reset = function() {
                    for (var t = 0, e = this._animationStates; t < e.length; t++) {
                        var a = e[t];
                        a.returnToPool()
                    }
                    this._animationDirty = !1,
                    this._animationConfig.clear(),
                    this._animationStates.length = 0,
                    this._lastAnimationState = null
                }
                ,
                a.prototype.stop = function(t) {
                    if (void 0 === t && (t = null),
                    null !== t) {
                        var e = this.getState(t);
                        null !== e && e.stop()
                    } else
                        for (var a = 0, i = this._animationStates; a < i.length; a++) {
                            e = i[a];
                            e.stop()
                        }
                }
                ,
                a.prototype.playConfig = function(e) {
                    var a = e.animation;
                    if (!(a in this._animations))
                        return console.warn("Non-existent animation.\n", "DragonBones name: " + this._armature.armatureData.parent.name, "Armature name: " + this._armature.name, "Animation name: " + a),
                        null;
                    var i = this._animations[a];
                    if (5 === e.fadeOutMode)
                        for (var r = 0, n = this._animationStates; r < n.length; r++) {
                            var s = n[r];
                            if (s._fadeState < 1 && s.layer === e.layer && s.animationData === i)
                                return s
                        }
                    0 === this._animationStates.length ? e.fadeInTime = 0 : e.fadeInTime < 0 && (e.fadeInTime = i.fadeInTime),
                    e.fadeOutTime < 0 && (e.fadeOutTime = e.fadeInTime),
                    e.timeScale <= -100 && (e.timeScale = 1 / i.scale),
                    i.frameCount > 0 ? (e.position < 0 ? (e.position %= i.duration,
                    e.position = i.duration - e.position) : e.position === i.duration ? e.position -= 1e-6 : e.position > i.duration && (e.position %= i.duration),
                    e.duration > 0 && e.position + e.duration > i.duration && (e.duration = i.duration - e.position),
                    e.playTimes < 0 && (e.playTimes = i.playTimes)) : (e.playTimes = 1,
                    e.position = 0,
                    e.duration > 0 && (e.duration = 0)),
                    0 === e.duration && (e.duration = -1),
                    this._fadeOut(e);
                    var o = t.BaseObject.borrowObject(t.AnimationState);
                    if (o.init(this._armature, i, e),
                    this._animationDirty = !0,
                    this._armature._cacheFrameIndex = -1,
                    this._animationStates.length > 0) {
                        for (var l = !1, h = 0, u = this._animationStates.length; h < u; ++h) {
                            if (o.layer > this._animationStates[h].layer) {
                                l = !0,
                                this._animationStates.splice(h, 0, o);
                                break
                            }
                            if (h !== u - 1 && o.layer > this._animationStates[h + 1].layer) {
                                l = !0,
                                this._animationStates.splice(h + 1, 0, o);
                                break
                            }
                        }
                        l || this._animationStates.push(o)
                    } else
                        this._animationStates.push(o);
                    for (var c = 0, f = this._armature.getSlots(); c < f.length; c++) {
                        var m = f[c]
                          , _ = m.childArmature;
                        null !== _ && _.inheritAnimation && _.animation.hasAnimation(a) && null === _.animation.getState(a) && _.animation.fadeIn(a)
                    }
                    for (var p in i.animationTimelines) {
                        var d = this.fadeIn(p, 0, 1, o.layer, "", 5);
                        if (null !== d) {
                            var y = i.animationTimelines[p];
                            d.actionEnabled = !1,
                            d.resetToPose = !1,
                            d.stop(),
                            o.addState(d, y);
                            var g = this._animationStates.indexOf(o)
                              , b = this._animationStates.indexOf(d);
                            b < g && (this._animationStates.splice(g, 1),
                            this._animationStates.splice(b, 0, o))
                        }
                    }
                    return this._lastAnimationState = o,
                    o
                }
                ,
                a.prototype.play = function(t, e) {
                    if (void 0 === t && (t = null),
                    void 0 === e && (e = -1),
                    this._animationConfig.clear(),
                    this._animationConfig.resetToPose = !0,
                    this._animationConfig.playTimes = e,
                    this._animationConfig.fadeInTime = 0,
                    this._animationConfig.animation = null !== t ? t : "",
                    null !== t && t.length > 0)
                        this.playConfig(this._animationConfig);
                    else if (null === this._lastAnimationState) {
                        var a = this._armature.armatureData.defaultAnimation;
                        null !== a && (this._animationConfig.animation = a.name,
                        this.playConfig(this._animationConfig))
                    } else
                        this._lastAnimationState.isPlaying || this._lastAnimationState.isCompleted ? (this._animationConfig.animation = this._lastAnimationState.name,
                        this.playConfig(this._animationConfig)) : this._lastAnimationState.play();
                    return this._lastAnimationState
                }
                ,
                a.prototype.fadeIn = function(t, e, a, i, r, n) {
                    return void 0 === e && (e = -1),
                    void 0 === a && (a = -1),
                    void 0 === i && (i = 0),
                    void 0 === r && (r = null),
                    void 0 === n && (n = 3),
                    this._animationConfig.clear(),
                    this._animationConfig.fadeOutMode = n,
                    this._animationConfig.playTimes = a,
                    this._animationConfig.layer = i,
                    this._animationConfig.fadeInTime = e,
                    this._animationConfig.animation = t,
                    this._animationConfig.group = null !== r ? r : "",
                    this.playConfig(this._animationConfig)
                }
                ,
                a.prototype.gotoAndPlayByTime = function(t, e, a) {
                    return void 0 === e && (e = 0),
                    void 0 === a && (a = -1),
                    this._animationConfig.clear(),
                    this._animationConfig.resetToPose = !0,
                    this._animationConfig.playTimes = a,
                    this._animationConfig.position = e,
                    this._animationConfig.fadeInTime = 0,
                    this._animationConfig.animation = t,
                    this.playConfig(this._animationConfig)
                }
                ,
                a.prototype.gotoAndPlayByFrame = function(t, e, a) {
                    void 0 === e && (e = 0),
                    void 0 === a && (a = -1),
                    this._animationConfig.clear(),
                    this._animationConfig.resetToPose = !0,
                    this._animationConfig.playTimes = a,
                    this._animationConfig.fadeInTime = 0,
                    this._animationConfig.animation = t;
                    var i = t in this._animations ? this._animations[t] : null;
                    return null !== i && (this._animationConfig.position = i.frameCount > 0 ? i.duration * e / i.frameCount : 0),
                    this.playConfig(this._animationConfig)
                }
                ,
                a.prototype.gotoAndPlayByProgress = function(t, e, a) {
                    void 0 === e && (e = 0),
                    void 0 === a && (a = -1),
                    this._animationConfig.clear(),
                    this._animationConfig.resetToPose = !0,
                    this._animationConfig.playTimes = a,
                    this._animationConfig.fadeInTime = 0,
                    this._animationConfig.animation = t;
                    var i = t in this._animations ? this._animations[t] : null;
                    return null !== i && (this._animationConfig.position = i.duration * (e > 0 ? e : 0)),
                    this.playConfig(this._animationConfig)
                }
                ,
                a.prototype.gotoAndStopByTime = function(t, e) {
                    void 0 === e && (e = 0);
                    var a = this.gotoAndPlayByTime(t, e, 1);
                    return null !== a && a.stop(),
                    a
                }
                ,
                a.prototype.gotoAndStopByFrame = function(t, e) {
                    void 0 === e && (e = 0);
                    var a = this.gotoAndPlayByFrame(t, e, 1);
                    return null !== a && a.stop(),
                    a
                }
                ,
                a.prototype.gotoAndStopByProgress = function(t, e) {
                    void 0 === e && (e = 0);
                    var a = this.gotoAndPlayByProgress(t, e, 1);
                    return null !== a && a.stop(),
                    a
                }
                ,
                a.prototype.getBlendState = function(e, a, i) {
                    e in this._blendStates || (this._blendStates[e] = {});
                    var r = this._blendStates[e];
                    if (!(a in r)) {
                        var n = r[a] = t.BaseObject.borrowObject(t.BlendState);
                        n.target = i
                    }
                    return r[a]
                }
                ,
                a.prototype.getState = function(t, e) {
                    void 0 === e && (e = -1);
                    var a = this._animationStates.length;
                    while (a--) {
                        var i = this._animationStates[a];
                        if (i.name === t && (e < 0 || i.layer === e))
                            return i
                    }
                    return null
                }
                ,
                a.prototype.hasAnimation = function(t) {
                    return t in this._animations
                }
                ,
                a.prototype.getStates = function() {
                    return this._animationStates
                }
                ,
                Object.defineProperty(a.prototype, "isPlaying", {
                    get: function() {
                        for (var t = 0, e = this._animationStates; t < e.length; t++) {
                            var a = e[t];
                            if (a.isPlaying)
                                return !0
                        }
                        return !1
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "isCompleted", {
                    get: function() {
                        for (var t = 0, e = this._animationStates; t < e.length; t++) {
                            var a = e[t];
                            if (!a.isCompleted)
                                return !1
                        }
                        return this._animationStates.length > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "lastAnimationName", {
                    get: function() {
                        return null !== this._lastAnimationState ? this._lastAnimationState.name : ""
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "animationNames", {
                    get: function() {
                        return this._animationNames
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "animations", {
                    get: function() {
                        return this._animations
                    },
                    set: function(t) {
                        if (this._animations !== t) {
                            for (var e in this._animationNames.length = 0,
                            this._animations)
                                delete this._animations[e];
                            for (var e in t)
                                this._animationNames.push(e),
                                this._animations[e] = t[e]
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "animationConfig", {
                    get: function() {
                        return this._animationConfig.clear(),
                        this._animationConfig
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "lastAnimationState", {
                    get: function() {
                        return this._lastAnimationState
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a
            }(t.BaseObject);
            t.Animation = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function i() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._boneMask = [],
                    t._boneTimelines = [],
                    t._boneBlendTimelines = [],
                    t._slotTimelines = [],
                    t._slotBlendTimelines = [],
                    t._constraintTimelines = [],
                    t._animationTimelines = [],
                    t._poseTimelines = [],
                    t._actionTimeline = null,
                    t._zOrderTimeline = null,
                    t
                }
                return x(i, e),
                i.toString = function() {
                    return "[class dragonBones.AnimationState]"
                }
                ,
                i.prototype._onClear = function() {
                    for (var t = 0, e = this._boneTimelines; t < e.length; t++) {
                        var a = e[t];
                        a.returnToPool()
                    }
                    for (var i = 0, r = this._boneBlendTimelines; i < r.length; i++) {
                        a = r[i];
                        a.returnToPool()
                    }
                    for (var n = 0, s = this._slotTimelines; n < s.length; n++) {
                        a = s[n];
                        a.returnToPool()
                    }
                    for (var o = 0, l = this._slotBlendTimelines; o < l.length; o++) {
                        a = l[o];
                        a.returnToPool()
                    }
                    for (var h = 0, u = this._constraintTimelines; h < u.length; h++) {
                        a = u[h];
                        a.returnToPool()
                    }
                    for (var c = 0, f = this._animationTimelines; c < f.length; c++) {
                        a = f[c];
                        var m = a.target;
                        m._parent === this && (m._fadeState = 1,
                        m._subFadeState = 1,
                        m._parent = null),
                        a.returnToPool()
                    }
                    null !== this._actionTimeline && this._actionTimeline.returnToPool(),
                    null !== this._zOrderTimeline && this._zOrderTimeline.returnToPool(),
                    this.actionEnabled = !1,
                    this.additive = !1,
                    this.displayControl = !1,
                    this.resetToPose = !1,
                    this.blendType = 0,
                    this.playTimes = 1,
                    this.layer = 0,
                    this.timeScale = 1,
                    this._weight = 1,
                    this.parameterX = 0,
                    this.parameterY = 0,
                    this.positionX = 0,
                    this.positionY = 0,
                    this.autoFadeOutTime = 0,
                    this.fadeTotalTime = 0,
                    this.name = "",
                    this.group = "",
                    this._timelineDirty = 2,
                    this._playheadState = 0,
                    this._fadeState = -1,
                    this._subFadeState = -1,
                    this._position = 0,
                    this._duration = 0,
                    this._fadeTime = 0,
                    this._time = 0,
                    this._fadeProgress = 0,
                    this._weightResult = 0,
                    this._boneMask.length = 0,
                    this._boneTimelines.length = 0,
                    this._boneBlendTimelines.length = 0,
                    this._slotTimelines.length = 0,
                    this._slotBlendTimelines.length = 0,
                    this._constraintTimelines.length = 0,
                    this._animationTimelines.length = 0,
                    this._poseTimelines.length = 0,
                    this._animationData = null,
                    this._armature = null,
                    this._actionTimeline = null,
                    this._zOrderTimeline = null,
                    this._activeChildA = null,
                    this._activeChildB = null,
                    this._parent = null
                }
                ,
                i.prototype._updateTimelines = function() {
                    for (var e = 0, a = this._armature._constraints; e < a.length; e++) {
                        var i = a[e]
                          , r = this._animationData.getConstraintTimelines(i.name);
                        if (null !== r)
                            for (var n = 0, s = r; n < s.length; n++) {
                                var o = s[n];
                                switch (o.type) {
                                case 30:
                                    var l = t.BaseObject.borrowObject(t.IKConstraintTimelineState);
                                    l.target = i,
                                    l.init(this._armature, this, o),
                                    this._constraintTimelines.push(l);
                                    break
                                }
                            }
                        else if (this.resetToPose) {
                            l = t.BaseObject.borrowObject(t.IKConstraintTimelineState);
                            l.target = i,
                            l.init(this._armature, this, null),
                            this._constraintTimelines.push(l),
                            this._poseTimelines.push(l)
                        }
                    }
                }
                ,
                i.prototype._updateBoneAndSlotTimelines = function() {
                    for (var e = {}, i = 0, r = this._boneTimelines; i < r.length; i++) {
                        var n = r[i]
                          , s = n.target.target.name;
                        s in e || (e[s] = []),
                        e[s].push(n)
                    }
                    for (var o = 0, l = this._boneBlendTimelines; o < l.length; o++) {
                        n = l[o],
                        s = n.target.target.name;
                        s in e || (e[s] = []),
                        e[s].push(n)
                    }
                    for (var h = 0, u = this._armature.getBones(); h < u.length; h++) {
                        var c = u[h];
                        s = c.name;
                        if (this.containsBoneMask(s))
                            if (s in e)
                                delete e[s];
                            else {
                                var f = this._animationData.getBoneTimelines(s)
                                  , m = this._armature.animation.getBlendState(a.BONE_TRANSFORM, c.name, c);
                                if (null !== f)
                                    for (var _ = 0, p = f; _ < p.length; _++) {
                                        var d = p[_];
                                        switch (d.type) {
                                        case 10:
                                            n = t.BaseObject.borrowObject(t.BoneAllTimelineState);
                                            n.target = m,
                                            n.init(this._armature, this, d),
                                            this._boneTimelines.push(n);
                                            break;
                                        case 11:
                                            n = t.BaseObject.borrowObject(t.BoneTranslateTimelineState);
                                            n.target = m,
                                            n.init(this._armature, this, d),
                                            this._boneTimelines.push(n);
                                            break;
                                        case 12:
                                            n = t.BaseObject.borrowObject(t.BoneRotateTimelineState);
                                            n.target = m,
                                            n.init(this._armature, this, d),
                                            this._boneTimelines.push(n);
                                            break;
                                        case 13:
                                            n = t.BaseObject.borrowObject(t.BoneScaleTimelineState);
                                            n.target = m,
                                            n.init(this._armature, this, d),
                                            this._boneTimelines.push(n);
                                            break;
                                        case 60:
                                            n = t.BaseObject.borrowObject(t.AlphaTimelineState);
                                            n.target = this._armature.animation.getBlendState(a.BONE_ALPHA, c.name, c),
                                            n.init(this._armature, this, d),
                                            this._boneBlendTimelines.push(n);
                                            break;
                                        case 50:
                                            n = t.BaseObject.borrowObject(t.SurfaceTimelineState);
                                            n.target = this._armature.animation.getBlendState(a.SURFACE, c.name, c),
                                            n.init(this._armature, this, d),
                                            this._boneBlendTimelines.push(n);
                                            break
                                        }
                                    }
                                else if (this.resetToPose)
                                    if (0 === c._boneData.type) {
                                        n = t.BaseObject.borrowObject(t.BoneAllTimelineState);
                                        n.target = m,
                                        n.init(this._armature, this, null),
                                        this._boneTimelines.push(n),
                                        this._poseTimelines.push(n)
                                    } else {
                                        n = t.BaseObject.borrowObject(t.SurfaceTimelineState);
                                        n.target = this._armature.animation.getBlendState(a.SURFACE, c.name, c),
                                        n.init(this._armature, this, null),
                                        this._boneBlendTimelines.push(n),
                                        this._poseTimelines.push(n)
                                    }
                            }
                    }
                    for (var y in e)
                        for (var g = 0, b = e[y]; g < b.length; g++) {
                            n = b[g];
                            var v = this._boneTimelines.indexOf(n);
                            v >= 0 && (this._boneTimelines.splice(v, 1),
                            n.returnToPool()),
                            v = this._boneBlendTimelines.indexOf(n),
                            v >= 0 && (this._boneBlendTimelines.splice(v, 1),
                            n.returnToPool())
                        }
                    for (var D = {}, T = [], A = 0, P = this._slotTimelines; A < P.length; A++) {
                        n = P[A],
                        s = n.target.name;
                        s in D || (D[s] = []),
                        D[s].push(n)
                    }
                    for (var O = 0, S = this._slotBlendTimelines; O < S.length; O++) {
                        n = S[O],
                        s = n.target.target.name;
                        s in D || (D[s] = []),
                        D[s].push(n)
                    }
                    for (var x = 0, w = this._armature.getSlots(); x < w.length; x++) {
                        var E = w[x]
                          , C = E.parent.name;
                        if (this.containsBoneMask(C)) {
                            s = E.name;
                            if (s in D)
                                delete D[s];
                            else {
                                var I = !1
                                  , M = !1;
                                T.length = 0;
                                f = this._animationData.getSlotTimelines(s);
                                if (null !== f)
                                    for (var B = 0, F = f; B < F.length; B++) {
                                        d = F[B];
                                        switch (d.type) {
                                        case 20:
                                            n = t.BaseObject.borrowObject(t.SlotDislayTimelineState);
                                            n.target = E,
                                            n.init(this._armature, this, d),
                                            this._slotTimelines.push(n),
                                            I = !0;
                                            break;
                                        case 23:
                                            n = t.BaseObject.borrowObject(t.SlotZIndexTimelineState);
                                            n.target = this._armature.animation.getBlendState(a.SLOT_Z_INDEX, E.name, E),
                                            n.init(this._armature, this, d),
                                            this._slotBlendTimelines.push(n);
                                            break;
                                        case 21:
                                            n = t.BaseObject.borrowObject(t.SlotColorTimelineState);
                                            n.target = E,
                                            n.init(this._armature, this, d),
                                            this._slotTimelines.push(n),
                                            M = !0;
                                            break;
                                        case 22:
                                            n = t.BaseObject.borrowObject(t.DeformTimelineState);
                                            n.target = this._armature.animation.getBlendState(a.SLOT_DEFORM, E.name, E),
                                            n.init(this._armature, this, d),
                                            null !== n.target ? (this._slotBlendTimelines.push(n),
                                            T.push(n.geometryOffset)) : n.returnToPool();
                                            break;
                                        case 24:
                                            n = t.BaseObject.borrowObject(t.AlphaTimelineState);
                                            n.target = this._armature.animation.getBlendState(a.SLOT_ALPHA, E.name, E),
                                            n.init(this._armature, this, d),
                                            this._slotBlendTimelines.push(n);
                                            break
                                        }
                                    }
                                if (this.resetToPose) {
                                    if (!I) {
                                        n = t.BaseObject.borrowObject(t.SlotDislayTimelineState);
                                        n.target = E,
                                        n.init(this._armature, this, null),
                                        this._slotTimelines.push(n),
                                        this._poseTimelines.push(n)
                                    }
                                    if (!M) {
                                        n = t.BaseObject.borrowObject(t.SlotColorTimelineState);
                                        n.target = E,
                                        n.init(this._armature, this, null),
                                        this._slotTimelines.push(n),
                                        this._poseTimelines.push(n)
                                    }
                                    for (var k = 0, R = E.displayFrameCount; k < R; ++k) {
                                        var j = E.getDisplayFrameAt(k);
                                        if (0 !== j.deformVertices.length) {
                                            var N = j.getGeometryData();
                                            if (null !== N && T.indexOf(N.offset) < 0) {
                                                n = t.BaseObject.borrowObject(t.DeformTimelineState);
                                                n.geometryOffset = N.offset,
                                                n.displayFrame = j,
                                                n.target = this._armature.animation.getBlendState(a.SLOT_DEFORM, E.name, E),
                                                n.init(this._armature, this, null),
                                                this._slotBlendTimelines.push(n),
                                                this._poseTimelines.push(n)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    for (var y in D)
                        for (var V = 0, L = D[y]; V < L.length; V++) {
                            n = L[V],
                            v = this._slotTimelines.indexOf(n);
                            v >= 0 && (this._slotTimelines.splice(v, 1),
                            n.returnToPool()),
                            v = this._slotBlendTimelines.indexOf(n),
                            v >= 0 && (this._slotBlendTimelines.splice(v, 1),
                            n.returnToPool())
                        }
                }
                ,
                i.prototype._advanceFadeTime = function(e) {
                    var a = this._fadeState > 0;
                    if (this._subFadeState < 0) {
                        this._subFadeState = 0;
                        var i = null === this._parent && this.actionEnabled;
                        if (i) {
                            var r = a ? t.EventObject.FADE_OUT : t.EventObject.FADE_IN;
                            if (this._armature.eventDispatcher.hasDBEventListener(r)) {
                                var n = t.BaseObject.borrowObject(t.EventObject);
                                n.type = r,
                                n.armature = this._armature,
                                n.animationState = this,
                                this._armature._dragonBones.bufferEvent(n)
                            }
                        }
                    }
                    if (e < 0 && (e = -e),
                    this._fadeTime += e,
                    this._fadeTime >= this.fadeTotalTime ? (this._subFadeState = 1,
                    this._fadeProgress = a ? 0 : 1) : this._fadeTime > 0 ? this._fadeProgress = a ? 1 - this._fadeTime / this.fadeTotalTime : this._fadeTime / this.fadeTotalTime : this._fadeProgress = a ? 1 : 0,
                    this._subFadeState > 0) {
                        a || (this._playheadState |= 1,
                        this._fadeState = 0);
                        i = null === this._parent && this.actionEnabled;
                        if (i) {
                            r = a ? t.EventObject.FADE_OUT_COMPLETE : t.EventObject.FADE_IN_COMPLETE;
                            if (this._armature.eventDispatcher.hasDBEventListener(r)) {
                                n = t.BaseObject.borrowObject(t.EventObject);
                                n.type = r,
                                n.armature = this._armature,
                                n.animationState = this,
                                this._armature._dragonBones.bufferEvent(n)
                            }
                        }
                    }
                }
                ,
                i.prototype.init = function(e, a, i) {
                    if (null === this._armature) {
                        if (this._armature = e,
                        this._animationData = a,
                        this.resetToPose = i.resetToPose,
                        this.additive = i.additive,
                        this.displayControl = i.displayControl,
                        this.actionEnabled = i.actionEnabled,
                        this.blendType = a.blendType,
                        this.layer = i.layer,
                        this.playTimes = i.playTimes,
                        this.timeScale = i.timeScale,
                        this.fadeTotalTime = i.fadeInTime,
                        this.autoFadeOutTime = i.autoFadeOutTime,
                        this.name = i.name.length > 0 ? i.name : i.animation,
                        this.group = i.group,
                        this._weight = i.weight,
                        i.pauseFadeIn ? this._playheadState = 2 : this._playheadState = 3,
                        i.duration < 0 ? (this._position = 0,
                        this._duration = this._animationData.duration,
                        0 !== i.position ? this.timeScale >= 0 ? this._time = i.position : this._time = i.position - this._duration : this._time = 0) : (this._position = i.position,
                        this._duration = i.duration,
                        this._time = 0),
                        this.timeScale < 0 && 0 === this._time && (this._time = -1e-6),
                        this.fadeTotalTime <= 0 && (this._fadeProgress = .999999),
                        i.boneMask.length > 0) {
                            this._boneMask.length = i.boneMask.length;
                            for (var r = 0, n = this._boneMask.length; r < n; ++r)
                                this._boneMask[r] = i.boneMask[r]
                        }
                        this._actionTimeline = t.BaseObject.borrowObject(t.ActionTimelineState),
                        this._actionTimeline.init(this._armature, this, this._animationData.actionTimeline),
                        this._actionTimeline.currentTime = this._time,
                        this._actionTimeline.currentTime < 0 && (this._actionTimeline.currentTime = this._duration - this._actionTimeline.currentTime),
                        null !== this._animationData.zOrderTimeline && (this._zOrderTimeline = t.BaseObject.borrowObject(t.ZOrderTimelineState),
                        this._zOrderTimeline.init(this._armature, this, this._animationData.zOrderTimeline))
                    }
                }
                ,
                i.prototype.advanceTime = function(t, e) {
                    0 === this._fadeState && 0 === this._subFadeState || this._advanceFadeTime(t),
                    3 === this._playheadState && (1 !== this.timeScale && (t *= this.timeScale),
                    this._time += t),
                    0 !== this._timelineDirty && (2 === this._timelineDirty && this._updateTimelines(),
                    this._timelineDirty = 0,
                    this._updateBoneAndSlotTimelines());
                    var a = 0 !== this._fadeState || 0 === this._subFadeState
                      , i = 0 === this._fadeState && e > 0
                      , r = !0
                      , n = !0
                      , s = this._time;
                    if (this._weightResult = this._weight * this._fadeProgress,
                    null !== this._parent && (this._weightResult *= this._parent._weightResult),
                    this._actionTimeline.playState <= 0 && this._actionTimeline.update(s),
                    0 !== this._weight) {
                        if (i) {
                            var o = 2 * e;
                            this._actionTimeline.currentTime = Math.floor(this._actionTimeline.currentTime * o) / o
                        }
                        if (null !== this._zOrderTimeline && this._zOrderTimeline.playState <= 0 && this._zOrderTimeline.update(s),
                        i) {
                            var l = Math.floor(this._actionTimeline.currentTime * e);
                            this._armature._cacheFrameIndex === l ? (r = !1,
                            n = !1) : (this._armature._cacheFrameIndex = l,
                            this._animationData.cachedFrames[l] ? n = !1 : this._animationData.cachedFrames[l] = !0)
                        }
                        if (r) {
                            var h = !1
                              , u = null;
                            if (n)
                                for (var c = 0, f = this._boneTimelines.length; c < f; ++c) {
                                    var m = this._boneTimelines[c];
                                    if (m.playState <= 0 && m.update(s),
                                    m.target !== u) {
                                        var _ = m.target;
                                        if (h = _.update(this),
                                        u = _,
                                        1 === _.dirty) {
                                            var p = _.target.animationPose;
                                            p.x = 0,
                                            p.y = 0,
                                            p.rotation = 0,
                                            p.skew = 0,
                                            p.scaleX = 1,
                                            p.scaleY = 1
                                        }
                                    }
                                    h && m.blend(a)
                                }
                            for (c = 0,
                            f = this._boneBlendTimelines.length; c < f; ++c) {
                                m = this._boneBlendTimelines[c];
                                m.playState <= 0 && m.update(s),
                                m.target.update(this) && m.blend(a)
                            }
                            if (this.displayControl)
                                for (c = 0,
                                f = this._slotTimelines.length; c < f; ++c) {
                                    m = this._slotTimelines[c];
                                    if (m.playState <= 0) {
                                        var d = m.target
                                          , y = d.displayController;
                                        null !== y && y !== this.name && y !== this.group || m.update(s)
                                    }
                                }
                            for (c = 0,
                            f = this._slotBlendTimelines.length; c < f; ++c) {
                                m = this._slotBlendTimelines[c];
                                if (m.playState <= 0) {
                                    _ = m.target;
                                    m.update(s),
                                    _.update(this) && m.blend(a)
                                }
                            }
                            for (c = 0,
                            f = this._constraintTimelines.length; c < f; ++c) {
                                m = this._constraintTimelines[c];
                                m.playState <= 0 && m.update(s)
                            }
                            if (this._animationTimelines.length > 0) {
                                var g = 100
                                  , b = 100
                                  , v = null
                                  , D = null;
                                for (c = 0,
                                f = this._animationTimelines.length; c < f; ++c) {
                                    m = this._animationTimelines[c];
                                    if (m.playState <= 0 && m.update(s),
                                    1 === this.blendType) {
                                        var T = m.target
                                          , A = this.parameterX - T.positionX;
                                        A >= 0 ? A < g && (g = A,
                                        v = T) : -A < b && (b = -A,
                                        D = T)
                                    }
                                }
                                null !== v && (this._activeChildA !== v && (null !== this._activeChildA && (this._activeChildA.weight = 0),
                                this._activeChildA = v,
                                this._activeChildA.activeTimeline()),
                                this._activeChildB !== D && (null !== this._activeChildB && (this._activeChildB.weight = 0),
                                this._activeChildB = D),
                                v.weight = b / (g + b),
                                D && (D.weight = 1 - v.weight))
                            }
                        }
                        if (0 === this._fadeState) {
                            if (this._subFadeState > 0 && (this._subFadeState = 0,
                            this._poseTimelines.length > 0)) {
                                for (var P = 0, O = this._poseTimelines; P < O.length; P++) {
                                    m = O[P];
                                    var S = this._boneTimelines.indexOf(m);
                                    S >= 0 ? (this._boneTimelines.splice(S, 1),
                                    m.returnToPool()) : (S = this._boneBlendTimelines.indexOf(m),
                                    S >= 0 ? (this._boneBlendTimelines.splice(S, 1),
                                    m.returnToPool()) : (S = this._slotTimelines.indexOf(m),
                                    S >= 0 ? (this._slotTimelines.splice(S, 1),
                                    m.returnToPool()) : (S = this._slotBlendTimelines.indexOf(m),
                                    S >= 0 ? (this._slotBlendTimelines.splice(S, 1),
                                    m.returnToPool()) : (S = this._constraintTimelines.indexOf(m),
                                    S >= 0 && (this._constraintTimelines.splice(S, 1),
                                    m.returnToPool())))))
                                }
                                this._poseTimelines.length = 0
                            }
                            this._actionTimeline.playState > 0 && this.autoFadeOutTime >= 0 && this.fadeOut(this.autoFadeOutTime)
                        }
                    }
                }
                ,
                i.prototype.play = function() {
                    this._playheadState = 3
                }
                ,
                i.prototype.stop = function() {
                    this._playheadState &= 1
                }
                ,
                i.prototype.fadeOut = function(t, e) {
                    if (void 0 === e && (e = !0),
                    t < 0 && (t = 0),
                    e && (this._playheadState &= 2),
                    this._fadeState > 0) {
                        if (t > this.fadeTotalTime - this._fadeTime)
                            return
                    } else {
                        this._fadeState = 1,
                        this._subFadeState = -1,
                        (t <= 0 || this._fadeProgress <= 0) && (this._fadeProgress = 1e-6);
                        for (var a = 0, i = this._boneTimelines; a < i.length; a++) {
                            var r = i[a];
                            r.fadeOut()
                        }
                        for (var n = 0, s = this._boneBlendTimelines; n < s.length; n++) {
                            r = s[n];
                            r.fadeOut()
                        }
                        for (var o = 0, l = this._slotTimelines; o < l.length; o++) {
                            r = l[o];
                            r.fadeOut()
                        }
                        for (var h = 0, u = this._slotBlendTimelines; h < u.length; h++) {
                            r = u[h];
                            r.fadeOut()
                        }
                        for (var c = 0, f = this._constraintTimelines; c < f.length; c++) {
                            r = f[c];
                            r.fadeOut()
                        }
                        for (var m = 0, _ = this._animationTimelines; m < _.length; m++) {
                            r = _[m];
                            r.fadeOut();
                            var p = r.target;
                            p.fadeOut(999999, !0)
                        }
                    }
                    this.displayControl = !1,
                    this.fadeTotalTime = this._fadeProgress > 1e-6 ? t / this._fadeProgress : 0,
                    this._fadeTime = this.fadeTotalTime * (1 - this._fadeProgress)
                }
                ,
                i.prototype.containsBoneMask = function(t) {
                    return 0 === this._boneMask.length || this._boneMask.indexOf(t) >= 0
                }
                ,
                i.prototype.addBoneMask = function(t, e) {
                    void 0 === e && (e = !0);
                    var a = this._armature.getBone(t);
                    if (null !== a) {
                        if (this._boneMask.indexOf(t) < 0 && this._boneMask.push(t),
                        e)
                            for (var i = 0, r = this._armature.getBones(); i < r.length; i++) {
                                var n = r[i];
                                this._boneMask.indexOf(n.name) < 0 && a.contains(n) && this._boneMask.push(n.name)
                            }
                        this._timelineDirty = 1
                    }
                }
                ,
                i.prototype.removeBoneMask = function(t, e) {
                    void 0 === e && (e = !0);
                    var a = this._boneMask.indexOf(t);
                    if (a >= 0 && this._boneMask.splice(a, 1),
                    e) {
                        var i = this._armature.getBone(t);
                        if (null !== i) {
                            var r = this._armature.getBones();
                            if (this._boneMask.length > 0)
                                for (var n = 0, s = r; n < s.length; n++) {
                                    var o = s[n]
                                      , l = this._boneMask.indexOf(o.name);
                                    l >= 0 && i.contains(o) && this._boneMask.splice(l, 1)
                                }
                            else
                                for (var h = 0, u = r; h < u.length; h++) {
                                    o = u[h];
                                    o !== i && (i.contains(o) || this._boneMask.push(o.name))
                                }
                        }
                    }
                    this._timelineDirty = 1
                }
                ,
                i.prototype.removeAllBoneMask = function() {
                    this._boneMask.length = 0,
                    this._timelineDirty = 1
                }
                ,
                i.prototype.addState = function(e, a) {
                    if (void 0 === a && (a = null),
                    null !== a)
                        for (var i = 0, r = a; i < r.length; i++) {
                            var n = r[i];
                            switch (n.type) {
                            case 40:
                                var s = t.BaseObject.borrowObject(t.AnimationProgressTimelineState);
                                if (s.target = e,
                                s.init(this._armature, this, n),
                                this._animationTimelines.push(s),
                                0 !== this.blendType) {
                                    var o = n;
                                    e.positionX = o.x,
                                    e.positionY = o.y,
                                    e.weight = 0
                                }
                                e._parent = this,
                                this.resetToPose = !1;
                                break;
                            case 41:
                                s = t.BaseObject.borrowObject(t.AnimationWeightTimelineState);
                                s.target = e,
                                s.init(this._armature, this, n),
                                this._animationTimelines.push(s);
                                break;
                            case 42:
                                s = t.BaseObject.borrowObject(t.AnimationParametersTimelineState);
                                s.target = e,
                                s.init(this._armature, this, n),
                                this._animationTimelines.push(s);
                                break
                            }
                        }
                    null === e._parent && (e._parent = this)
                }
                ,
                i.prototype.activeTimeline = function() {
                    for (var t = 0, e = this._slotTimelines; t < e.length; t++) {
                        var a = e[t];
                        a.dirty = !0,
                        a.currentTime = -1
                    }
                }
                ,
                Object.defineProperty(i.prototype, "isFadeIn", {
                    get: function() {
                        return this._fadeState < 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "isFadeOut", {
                    get: function() {
                        return this._fadeState > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "isFadeComplete", {
                    get: function() {
                        return 0 === this._fadeState
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "isPlaying", {
                    get: function() {
                        return 0 !== (2 & this._playheadState) && this._actionTimeline.playState <= 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "isCompleted", {
                    get: function() {
                        return this._actionTimeline.playState > 0
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "currentPlayTimes", {
                    get: function() {
                        return this._actionTimeline.currentPlayTimes
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "totalTime", {
                    get: function() {
                        return this._duration
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "currentTime", {
                    get: function() {
                        return this._actionTimeline.currentTime
                    },
                    set: function(t) {
                        var e = this._actionTimeline.currentPlayTimes - (this._actionTimeline.playState > 0 ? 1 : 0);
                        if ((t < 0 || this._duration < t) && (t = t % this._duration + e * this._duration,
                        t < 0 && (t += this._duration)),
                        this.playTimes > 0 && e === this.playTimes - 1 && t === this._duration && null === this._parent && (t = this._duration - 1e-6),
                        this._time !== t) {
                            this._time = t,
                            this._actionTimeline.setCurrentTime(this._time),
                            null !== this._zOrderTimeline && (this._zOrderTimeline.playState = -1);
                            for (var a = 0, i = this._boneTimelines; a < i.length; a++) {
                                var r = i[a];
                                r.playState = -1
                            }
                            for (var n = 0, s = this._slotTimelines; n < s.length; n++) {
                                r = s[n];
                                r.playState = -1
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "weight", {
                    get: function() {
                        return this._weight
                    },
                    set: function(t) {
                        if (this._weight !== t) {
                            this._weight = t;
                            for (var e = 0, a = this._boneTimelines; e < a.length; e++) {
                                var i = a[e];
                                i.dirty = !0
                            }
                            for (var r = 0, n = this._boneBlendTimelines; r < n.length; r++) {
                                i = n[r];
                                i.dirty = !0
                            }
                            for (var s = 0, o = this._slotBlendTimelines; s < o.length; s++) {
                                i = o[s];
                                i.dirty = !0
                            }
                        }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(i.prototype, "animationData", {
                    get: function() {
                        return this._animationData
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                i
            }(t.BaseObject);
            t.AnimationState = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.BlendState]"
                }
                ,
                e.prototype._onClear = function() {
                    this.reset(),
                    this.target = null
                }
                ,
                e.prototype.update = function(t) {
                    var e = t.layer
                      , a = t._weightResult;
                    if (this.dirty > 0) {
                        if (this.leftWeight > 0) {
                            if (this.layer !== e) {
                                if (this.layerWeight >= this.leftWeight)
                                    return this.dirty++,
                                    this.layer = e,
                                    this.leftWeight = 0,
                                    this.blendWeight = 0,
                                    !1;
                                this.layer = e,
                                this.leftWeight -= this.layerWeight,
                                this.layerWeight = 0
                            }
                            return a *= this.leftWeight,
                            this.dirty++,
                            this.blendWeight = a,
                            this.layerWeight += this.blendWeight,
                            !0
                        }
                        return !1
                    }
                    return this.dirty++,
                    this.layer = e,
                    this.leftWeight = 1,
                    this.blendWeight = a,
                    this.layerWeight = a,
                    !0
                }
                ,
                e.prototype.reset = function() {
                    this.dirty = 0,
                    this.layer = 0,
                    this.leftWeight = 0,
                    this.layerWeight = 0,
                    this.blendWeight = 0
                }
                ,
                e.BONE_TRANSFORM = "boneTransform",
                e.BONE_ALPHA = "boneAlpha",
                e.SURFACE = "surface",
                e.SLOT_DEFORM = "slotDeform",
                e.SLOT_ALPHA = "slotAlpha",
                e.SLOT_Z_INDEX = "slotZIndex",
                e
            }(t.BaseObject);
            t.BlendState = a
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    this.dirty = !1,
                    this.playState = -1,
                    this.currentPlayTimes = -1,
                    this.currentTime = -1,
                    this.target = null,
                    this._isTween = !1,
                    this._valueOffset = 0,
                    this._frameValueOffset = 0,
                    this._frameOffset = 0,
                    this._frameRate = 0,
                    this._frameCount = 0,
                    this._frameIndex = -1,
                    this._frameRateR = 0,
                    this._position = 0,
                    this._duration = 0,
                    this._timeScale = 1,
                    this._timeOffset = 0,
                    this._animationData = null,
                    this._timelineData = null,
                    this._armature = null,
                    this._animationState = null,
                    this._actionTimeline = null,
                    this._frameArray = null,
                    this._valueArray = null,
                    this._timelineArray = null,
                    this._frameIndices = null
                }
                ,
                e.prototype._setCurrentTime = function(t) {
                    var e = this.playState
                      , a = this.currentPlayTimes
                      , i = this.currentTime;
                    if (null !== this._actionTimeline && this._frameCount <= 1)
                        this.playState = this._actionTimeline.playState >= 0 ? 1 : -1,
                        this.currentPlayTimes = 1,
                        this.currentTime = this._actionTimeline.currentTime;
                    else if (null === this._actionTimeline || 1 !== this._timeScale || 0 !== this._timeOffset) {
                        var r = this._animationState.playTimes
                          , n = r * this._duration;
                        t *= this._timeScale,
                        0 !== this._timeOffset && (t += this._timeOffset * this._animationData.duration),
                        r > 0 && (t >= n || t <= -n) ? (this.playState <= 0 && 3 === this._animationState._playheadState && (this.playState = 1),
                        this.currentPlayTimes = r,
                        this.currentTime = t < 0 ? 0 : this._duration + 1e-6) : (0 !== this.playState && 3 === this._animationState._playheadState && (this.playState = 0),
                        t < 0 ? (t = -t,
                        this.currentPlayTimes = Math.floor(t / this._duration),
                        this.currentTime = this._duration - t % this._duration) : (this.currentPlayTimes = Math.floor(t / this._duration),
                        this.currentTime = t % this._duration)),
                        this.currentTime += this._position
                    } else
                        this.playState = this._actionTimeline.playState,
                        this.currentPlayTimes = this._actionTimeline.currentPlayTimes,
                        this.currentTime = this._actionTimeline.currentTime;
                    return (this.currentPlayTimes !== a || this.currentTime !== i) && ((e < 0 && this.playState !== e || this.playState <= 0 && this.currentPlayTimes !== a) && (this._frameIndex = -1),
                    !0)
                }
                ,
                e.prototype.init = function(t, e, a) {
                    if (this._armature = t,
                    this._animationState = e,
                    this._timelineData = a,
                    this._actionTimeline = this._animationState._actionTimeline,
                    this === this._actionTimeline && (this._actionTimeline = null),
                    this._animationData = this._animationState.animationData,
                    this._frameRate = this._animationData.parent.frameRate,
                    this._frameRateR = 1 / this._frameRate,
                    this._position = this._animationState._position,
                    this._duration = this._animationState._duration,
                    null !== this._timelineData) {
                        var i = this._animationData.parent.parent;
                        this._frameArray = i.frameArray,
                        this._timelineArray = i.timelineArray,
                        this._frameIndices = i.frameIndices,
                        this._frameCount = this._timelineArray[this._timelineData.offset + 2],
                        this._frameValueOffset = this._timelineArray[this._timelineData.offset + 4],
                        this._timeScale = 100 / this._timelineArray[this._timelineData.offset + 0],
                        this._timeOffset = .01 * this._timelineArray[this._timelineData.offset + 1]
                    }
                }
                ,
                e.prototype.fadeOut = function() {
                    this.dirty = !1
                }
                ,
                e.prototype.update = function(t) {
                    if (this._setCurrentTime(t)) {
                        if (this._frameCount > 1) {
                            var e = Math.floor(this.currentTime * this._frameRate)
                              , a = this._frameIndices[this._timelineData.frameIndicesOffset + e];
                            this._frameIndex !== a && (this._frameIndex = a,
                            this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + this._frameIndex],
                            this._onArriveAtFrame())
                        } else
                            this._frameIndex < 0 && (this._frameIndex = 0,
                            null !== this._timelineData && (this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5]),
                            this._onArriveAtFrame());
                        (this._isTween || this.dirty) && this._onUpdateFrame()
                    }
                }
                ,
                e.prototype.blend = function(t) {}
                ,
                e
            }(t.BaseObject);
            t.TimelineState = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e._getEasingValue = function(t, e, a) {
                    var i = e;
                    switch (t) {
                    case 3:
                        i = Math.pow(e, 2);
                        break;
                    case 4:
                        i = 1 - Math.pow(1 - e, 2);
                        break;
                    case 5:
                        i = .5 * (1 - Math.cos(e * Math.PI));
                        break
                    }
                    return (i - e) * a + e
                }
                ,
                e._getEasingCurveValue = function(t, e, a, i) {
                    if (t <= 0)
                        return 0;
                    if (t >= 1)
                        return 1;
                    var r = a > 0
                      , n = a + 1
                      , s = Math.floor(t * n)
                      , o = 0
                      , l = 0;
                    return r ? (o = 0 === s ? 0 : e[i + s - 1],
                    l = s === n - 1 ? 1e4 : e[i + s]) : (o = e[i + s - 1],
                    l = e[i + s]),
                    1e-4 * (o + (l - o) * (t * n - s))
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._tweenType = 0,
                    this._curveCount = 0,
                    this._framePosition = 0,
                    this._frameDurationR = 0,
                    this._tweenEasing = 0,
                    this._tweenProgress = 0,
                    this._valueScale = 1
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (this._frameCount > 1 && (this._frameIndex !== this._frameCount - 1 || 0 === this._animationState.playTimes || this._animationState.currentPlayTimes < this._animationState.playTimes - 1))
                        if (this._tweenType = this._frameArray[this._frameOffset + 1],
                        this._isTween = 0 !== this._tweenType,
                        this._isTween ? 2 === this._tweenType ? this._curveCount = this._frameArray[this._frameOffset + 2] : 0 !== this._tweenType && 1 !== this._tweenType && (this._tweenEasing = .01 * this._frameArray[this._frameOffset + 2]) : this.dirty = !0,
                        this._framePosition = this._frameArray[this._frameOffset] * this._frameRateR,
                        this._frameIndex === this._frameCount - 1)
                            this._frameDurationR = 1 / (this._animationData.duration - this._framePosition);
                        else {
                            var t = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + this._frameIndex + 1]
                              , e = this._frameArray[t] * this._frameRateR - this._framePosition;
                            this._frameDurationR = e > 0 ? 1 / e : 0
                        }
                    else
                        this.dirty = !0,
                        this._isTween = !1
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    this._isTween && (this.dirty = !0,
                    this._tweenProgress = (this.currentTime - this._framePosition) * this._frameDurationR,
                    2 === this._tweenType ? this._tweenProgress = e._getEasingCurveValue(this._tweenProgress, this._frameArray, this._curveCount, this._frameOffset + 3) : 1 !== this._tweenType && (this._tweenProgress = e._getEasingValue(this._tweenType, this._tweenProgress, this._tweenEasing)))
                }
                ,
                e
            }(e);
            t.TweenTimelineState = a;
            var i = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._current = 0,
                    this._difference = 0,
                    this._result = 0
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (t.prototype._onArriveAtFrame.call(this),
                    null !== this._timelineData) {
                        var e = this._valueScale
                          , a = this._valueArray
                          , i = this._valueOffset + this._frameValueOffset + this._frameIndex;
                        if (this._isTween) {
                            var r = this._frameIndex === this._frameCount - 1 ? this._valueOffset + this._frameValueOffset : i + 1;
                            1 === e ? (this._current = a[i],
                            this._difference = a[r] - this._current) : (this._current = a[i] * e,
                            this._difference = a[r] * e - this._current)
                        } else
                            this._result = a[i] * e
                    } else
                        this._result = 0
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this),
                    this._isTween && (this._result = this._current + this._difference * this._tweenProgress)
                }
                ,
                e
            }(a);
            t.SingleValueTimelineState = i;
            var r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._currentA = 0,
                    this._currentB = 0,
                    this._differenceA = 0,
                    this._differenceB = 0,
                    this._resultA = 0,
                    this._resultB = 0
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (t.prototype._onArriveAtFrame.call(this),
                    null !== this._timelineData) {
                        var e = this._valueScale
                          , a = this._valueArray
                          , i = this._valueOffset + this._frameValueOffset + 2 * this._frameIndex;
                        if (this._isTween) {
                            var r = this._frameIndex === this._frameCount - 1 ? this._valueOffset + this._frameValueOffset : i + 2;
                            1 === e ? (this._currentA = a[i],
                            this._currentB = a[i + 1],
                            this._differenceA = a[r] - this._currentA,
                            this._differenceB = a[r + 1] - this._currentB) : (this._currentA = a[i] * e,
                            this._currentB = a[i + 1] * e,
                            this._differenceA = a[r] * e - this._currentA,
                            this._differenceB = a[r + 1] * e - this._currentB)
                        } else
                            this._resultA = a[i] * e,
                            this._resultB = a[i + 1] * e
                    } else
                        this._resultA = 0,
                        this._resultB = 0
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this),
                    this._isTween && (this._resultA = this._currentA + this._differenceA * this._tweenProgress,
                    this._resultB = this._currentB + this._differenceB * this._tweenProgress)
                }
                ,
                e
            }(a);
            t.DoubleValueTimelineState = r;
            var n = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._rd = [],
                    e
                }
                return x(e, t),
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._valueCount = 0,
                    this._rd.length = 0
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    t.prototype._onArriveAtFrame.call(this);
                    var e = this._valueCount
                      , a = this._rd;
                    if (null !== this._timelineData) {
                        var i = this._valueScale
                          , r = this._valueArray
                          , n = this._valueOffset + this._frameValueOffset + this._frameIndex * e;
                        if (this._isTween) {
                            var s = this._frameIndex === this._frameCount - 1 ? this._valueOffset + this._frameValueOffset : n + e;
                            if (1 === i)
                                for (var o = 0; o < e; ++o)
                                    a[e + o] = r[s + o] - r[n + o];
                            else
                                for (o = 0; o < e; ++o)
                                    a[e + o] = (r[s + o] - r[n + o]) * i
                        } else if (1 === i)
                            for (o = 0; o < e; ++o)
                                a[o] = r[n + o];
                        else
                            for (o = 0; o < e; ++o)
                                a[o] = r[n + o] * i
                    } else
                        for (o = 0; o < e; ++o)
                            a[o] = 0
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    if (t.prototype._onUpdateFrame.call(this),
                    this._isTween) {
                        var e = this._valueCount
                          , a = this._valueScale
                          , i = this._tweenProgress
                          , r = this._valueArray
                          , n = this._rd
                          , s = this._valueOffset + this._frameValueOffset + this._frameIndex * e;
                        if (1 === a)
                            for (var o = 0; o < e; ++o)
                                n[o] = r[s + o] + n[e + o] * i;
                        else
                            for (o = 0; o < e; ++o)
                                n[o] = r[s + o] * a + n[e + o] * i
                    }
                }
                ,
                e
            }(a);
            t.MutilpleValueTimelineState = n
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.ActionTimelineState]"
                }
                ,
                a.prototype._onCrossFrame = function(e) {
                    var a = this._armature.eventDispatcher;
                    if (this._animationState.actionEnabled)
                        for (var i = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5 + e], r = this._frameArray[i + 1], n = this._animationData.parent.actions, s = 0; s < r; ++s) {
                            var o = this._frameArray[i + 2 + s]
                              , l = n[o];
                            if (0 === l.type) {
                                var h = t.BaseObject.borrowObject(t.EventObject);
                                h.time = this._frameArray[i] / this._frameRate,
                                h.animationState = this._animationState,
                                t.EventObject.actionDataToInstance(l, h, this._armature),
                                this._armature._bufferAction(h, !0)
                            } else {
                                var u = 10 === l.type ? t.EventObject.FRAME_EVENT : t.EventObject.SOUND_EVENT;
                                if (11 === l.type || a.hasDBEventListener(u)) {
                                    h = t.BaseObject.borrowObject(t.EventObject);
                                    h.time = this._frameArray[i] / this._frameRate,
                                    h.animationState = this._animationState,
                                    t.EventObject.actionDataToInstance(l, h, this._armature),
                                    this._armature._dragonBones.bufferEvent(h)
                                }
                            }
                        }
                }
                ,
                a.prototype._onArriveAtFrame = function() {}
                ,
                a.prototype._onUpdateFrame = function() {}
                ,
                a.prototype.update = function(e) {
                    var a = this.playState
                      , i = this.currentPlayTimes
                      , r = this.currentTime;
                    if (this._setCurrentTime(e)) {
                        var n = null === this._animationState._parent && this._animationState.actionEnabled
                          , s = this._armature.eventDispatcher;
                        if (a < 0) {
                            if (this.playState === a)
                                return;
                            if (this._animationState.displayControl && this._animationState.resetToPose && this._armature._sortZOrder(null, 0),
                            i = this.currentPlayTimes,
                            n && s.hasDBEventListener(t.EventObject.START)) {
                                var o = t.BaseObject.borrowObject(t.EventObject);
                                o.type = t.EventObject.START,
                                o.armature = this._armature,
                                o.animationState = this._animationState,
                                this._armature._dragonBones.bufferEvent(o)
                            }
                        }
                        var l = this._animationState.timeScale < 0
                          , h = null
                          , u = null;
                        if (n && this.currentPlayTimes !== i && (s.hasDBEventListener(t.EventObject.LOOP_COMPLETE) && (h = t.BaseObject.borrowObject(t.EventObject),
                        h.type = t.EventObject.LOOP_COMPLETE,
                        h.armature = this._armature,
                        h.animationState = this._animationState),
                        this.playState > 0 && s.hasDBEventListener(t.EventObject.COMPLETE) && (u = t.BaseObject.borrowObject(t.EventObject),
                        u.type = t.EventObject.COMPLETE,
                        u.armature = this._armature,
                        u.animationState = this._animationState)),
                        this._frameCount > 1) {
                            var c = this._timelineData
                              , f = Math.floor(this.currentTime * this._frameRate)
                              , m = this._frameIndices[c.frameIndicesOffset + f];
                            if (this._frameIndex !== m) {
                                var _ = this._frameIndex;
                                if (this._frameIndex = m,
                                null !== this._timelineArray)
                                    if (this._frameOffset = this._animationData.frameOffset + this._timelineArray[c.offset + 5 + this._frameIndex],
                                    l) {
                                        if (_ < 0) {
                                            var p = Math.floor(r * this._frameRate);
                                            _ = this._frameIndices[c.frameIndicesOffset + p],
                                            this.currentPlayTimes === i && _ === m && (_ = -1)
                                        }
                                        while (_ >= 0) {
                                            var d = this._animationData.frameOffset + this._timelineArray[c.offset + 5 + _]
                                              , y = this._frameArray[d] / this._frameRate;
                                            if (this._position <= y && y <= this._position + this._duration && this._onCrossFrame(_),
                                            null !== h && 0 === _ && (this._armature._dragonBones.bufferEvent(h),
                                            h = null),
                                            _ > 0 ? _-- : _ = this._frameCount - 1,
                                            _ === m)
                                                break
                                        }
                                    } else {
                                        if (_ < 0) {
                                            p = Math.floor(r * this._frameRate);
                                            _ = this._frameIndices[c.frameIndicesOffset + p];
                                            d = this._animationData.frameOffset + this._timelineArray[c.offset + 5 + _],
                                            y = this._frameArray[d] / this._frameRate;
                                            this.currentPlayTimes === i && (r <= y ? _ > 0 ? _-- : _ = this._frameCount - 1 : _ === m && (_ = -1))
                                        }
                                        while (_ >= 0) {
                                            _ < this._frameCount - 1 ? _++ : _ = 0;
                                            d = this._animationData.frameOffset + this._timelineArray[c.offset + 5 + _],
                                            y = this._frameArray[d] / this._frameRate;
                                            if (this._position <= y && y <= this._position + this._duration && this._onCrossFrame(_),
                                            null !== h && 0 === _ && (this._armature._dragonBones.bufferEvent(h),
                                            h = null),
                                            _ === m)
                                                break
                                        }
                                    }
                            }
                        } else if (this._frameIndex < 0 && (this._frameIndex = 0,
                        null !== this._timelineData)) {
                            this._frameOffset = this._animationData.frameOffset + this._timelineArray[this._timelineData.offset + 5];
                            y = this._frameArray[this._frameOffset] / this._frameRate;
                            this.currentPlayTimes === i ? r <= y && this._onCrossFrame(this._frameIndex) : this._position <= y && (l || null === h || (this._armature._dragonBones.bufferEvent(h),
                            h = null),
                            this._onCrossFrame(this._frameIndex))
                        }
                        null !== h && this._armature._dragonBones.bufferEvent(h),
                        null !== u && this._armature._dragonBones.bufferEvent(u)
                    }
                }
                ,
                a.prototype.setCurrentTime = function(t) {
                    this._setCurrentTime(t),
                    this._frameIndex = -1
                }
                ,
                a
            }(t.TimelineState);
            t.ActionTimelineState = e;
            var a = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.ZOrderTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (this.playState >= 0) {
                        var t = this._frameArray[this._frameOffset + 1];
                        t > 0 ? this._armature._sortZOrder(this._frameArray, this._frameOffset + 2) : this._armature._sortZOrder(null, 0)
                    }
                }
                ,
                e.prototype._onUpdateFrame = function() {}
                ,
                e
            }(t.TimelineState);
            t.ZOrderTimelineState = a;
            var i = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.BoneAllTimelineState]"
                }
                ,
                a.prototype._onArriveAtFrame = function() {
                    e.prototype._onArriveAtFrame.call(this),
                    this._isTween && this._frameIndex === this._frameCount - 1 && (this._rd[2] = t.Transform.normalizeRadian(this._rd[2]),
                    this._rd[3] = t.Transform.normalizeRadian(this._rd[3])),
                    null === this._timelineData && (this._rd[4] = 1,
                    this._rd[5] = 1)
                }
                ,
                a.prototype.init = function(t, a, i) {
                    e.prototype.init.call(this, t, a, i),
                    this._valueOffset = this._animationData.frameFloatOffset,
                    this._valueCount = 6,
                    this._valueArray = this._animationData.parent.parent.frameFloatArray
                }
                ,
                a.prototype.fadeOut = function() {
                    this.dirty = !1,
                    this._rd[2] = t.Transform.normalizeRadian(this._rd[2]),
                    this._rd[3] = t.Transform.normalizeRadian(this._rd[3])
                }
                ,
                a.prototype.blend = function(t) {
                    var e = this._armature.armatureData.scale
                      , a = this._rd
                      , i = this.target
                      , r = i.target
                      , n = i.blendWeight
                      , s = r.animationPose;
                    i.dirty > 1 ? (s.x += a[0] * n * e,
                    s.y += a[1] * n * e,
                    s.rotation += a[2] * n,
                    s.skew += a[3] * n,
                    s.scaleX += (a[4] - 1) * n,
                    s.scaleY += (a[5] - 1) * n) : (s.x = a[0] * n * e,
                    s.y = a[1] * n * e,
                    s.rotation = a[2] * n,
                    s.skew = a[3] * n,
                    s.scaleX = (a[4] - 1) * n + 1,
                    s.scaleY = (a[5] - 1) * n + 1),
                    (t || this.dirty) && (this.dirty = !1,
                    r._transformDirty = !0)
                }
                ,
                a
            }(t.MutilpleValueTimelineState);
            t.BoneAllTimelineState = i;
            var r = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.BoneTranslateTimelineState]"
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameFloatOffset,
                    this._valueScale = this._armature.armatureData.scale,
                    this._valueArray = this._animationData.parent.parent.frameFloatArray
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight
                      , r = a.animationPose;
                    e.dirty > 1 ? (r.x += this._resultA * i,
                    r.y += this._resultB * i) : 1 !== i ? (r.x = this._resultA * i,
                    r.y = this._resultB * i) : (r.x = this._resultA,
                    r.y = this._resultB),
                    (t || this.dirty) && (this.dirty = !1,
                    a._transformDirty = !0)
                }
                ,
                e
            }(t.DoubleValueTimelineState);
            t.BoneTranslateTimelineState = r;
            var n = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.BoneRotateTimelineState]"
                }
                ,
                a.prototype._onArriveAtFrame = function() {
                    e.prototype._onArriveAtFrame.call(this),
                    this._isTween && this._frameIndex === this._frameCount - 1 && (this._differenceA = t.Transform.normalizeRadian(this._differenceA),
                    this._differenceB = t.Transform.normalizeRadian(this._differenceB))
                }
                ,
                a.prototype.init = function(t, a, i) {
                    e.prototype.init.call(this, t, a, i),
                    this._valueOffset = this._animationData.frameFloatOffset,
                    this._valueArray = this._animationData.parent.parent.frameFloatArray
                }
                ,
                a.prototype.fadeOut = function() {
                    this.dirty = !1,
                    this._resultA = t.Transform.normalizeRadian(this._resultA),
                    this._resultB = t.Transform.normalizeRadian(this._resultB)
                }
                ,
                a.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight
                      , r = a.animationPose;
                    e.dirty > 1 ? (r.rotation += this._resultA * i,
                    r.skew += this._resultB * i) : 1 !== i ? (r.rotation = this._resultA * i,
                    r.skew = this._resultB * i) : (r.rotation = this._resultA,
                    r.skew = this._resultB),
                    (t || this.dirty) && (this.dirty = !1,
                    a._transformDirty = !0)
                }
                ,
                a
            }(t.DoubleValueTimelineState);
            t.BoneRotateTimelineState = n;
            var s = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.BoneScaleTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    t.prototype._onArriveAtFrame.call(this),
                    null === this._timelineData && (this._resultA = 1,
                    this._resultB = 1)
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameFloatOffset,
                    this._valueArray = this._animationData.parent.parent.frameFloatArray
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight
                      , r = a.animationPose;
                    e.dirty > 1 ? (r.scaleX += (this._resultA - 1) * i,
                    r.scaleY += (this._resultB - 1) * i) : 1 !== i ? (r.scaleX = (this._resultA - 1) * i + 1,
                    r.scaleY = (this._resultB - 1) * i + 1) : (r.scaleX = this._resultA,
                    r.scaleY = this._resultB),
                    (t || this.dirty) && (this.dirty = !1,
                    a._transformDirty = !0)
                }
                ,
                e
            }(t.DoubleValueTimelineState);
            t.BoneScaleTimelineState = s;
            var o = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.SurfaceTimelineState]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this._deformCount = 0,
                    this._deformOffset = 0,
                    this._sameValueOffset = 0
                }
                ,
                e.prototype.init = function(e, a, i) {
                    if (t.prototype.init.call(this, e, a, i),
                    null !== this._timelineData) {
                        var r = this._animationData.parent.parent
                          , n = r.frameIntArray
                          , s = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3];
                        this._valueOffset = this._animationData.frameFloatOffset,
                        this._valueCount = n[s + 2],
                        this._deformCount = n[s + 1],
                        this._deformOffset = n[s + 3],
                        this._sameValueOffset = n[s + 4] + this._animationData.frameFloatOffset,
                        this._valueScale = this._armature.armatureData.scale,
                        this._valueArray = r.frameFloatArray,
                        this._rd.length = 2 * this._valueCount
                    } else
                        this._deformCount = this.target.target._deformVertices.length
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight
                      , r = a._deformVertices
                      , n = this._valueArray;
                    if (null !== n)
                        for (var s = this._valueCount, o = this._deformOffset, l = this._sameValueOffset, h = this._rd, u = 0; u < this._deformCount; ++u) {
                            var c = 0;
                            c = u < o ? n[l + u] : u < o + s ? h[u - o] : n[l + u - s],
                            e.dirty > 1 ? r[u] += c * i : r[u] = c * i
                        }
                    else if (1 === e.dirty)
                        for (u = 0; u < this._deformCount; ++u)
                            r[u] = 0;
                    (t || this.dirty) && (this.dirty = !1,
                    a._transformDirty = !0)
                }
                ,
                e
            }(t.MutilpleValueTimelineState);
            t.SurfaceTimelineState = o;
            var l = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AlphaTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    t.prototype._onArriveAtFrame.call(this),
                    null === this._timelineData && (this._result = 1)
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueScale = .01,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight;
                    e.dirty > 1 ? (a._alpha += this._result * i,
                    a._alpha > 1 && (a._alpha = 1)) : a._alpha = this._result * i,
                    (t || this.dirty) && (this.dirty = !1,
                    this._armature._alphaDirty = !0)
                }
                ,
                e
            }(t.SingleValueTimelineState);
            t.AlphaTimelineState = l;
            var h = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.SlotDislayTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (this.playState >= 0) {
                        var t = this.target
                          , e = null !== this._timelineData ? this._frameArray[this._frameOffset + 1] : t._slotData.displayIndex;
                        t.displayIndex !== e && t._setDisplayIndex(e, !0)
                    }
                }
                ,
                e.prototype._onUpdateFrame = function() {}
                ,
                e
            }(t.TimelineState);
            t.SlotDislayTimelineState = h;
            var u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._current = [0, 0, 0, 0, 0, 0, 0, 0],
                    e._difference = [0, 0, 0, 0, 0, 0, 0, 0],
                    e._result = [0, 0, 0, 0, 0, 0, 0, 0],
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.SlotColorTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (t.prototype._onArriveAtFrame.call(this),
                    null !== this._timelineData) {
                        var e = this._animationData.parent.parent
                          , a = e.colorArray
                          , i = e.frameIntArray
                          , r = this._animationData.frameIntOffset + this._frameValueOffset + this._frameIndex
                          , n = i[r];
                        n < 0 && (n += 65536),
                        this._isTween ? (this._current[0] = a[n++],
                        this._current[1] = a[n++],
                        this._current[2] = a[n++],
                        this._current[3] = a[n++],
                        this._current[4] = a[n++],
                        this._current[5] = a[n++],
                        this._current[6] = a[n++],
                        this._current[7] = a[n++],
                        n = this._frameIndex === this._frameCount - 1 ? i[this._animationData.frameIntOffset + this._frameValueOffset] : i[r + 1],
                        n < 0 && (n += 65536),
                        this._difference[0] = a[n++] - this._current[0],
                        this._difference[1] = a[n++] - this._current[1],
                        this._difference[2] = a[n++] - this._current[2],
                        this._difference[3] = a[n++] - this._current[3],
                        this._difference[4] = a[n++] - this._current[4],
                        this._difference[5] = a[n++] - this._current[5],
                        this._difference[6] = a[n++] - this._current[6],
                        this._difference[7] = a[n++] - this._current[7]) : (this._result[0] = .01 * a[n++],
                        this._result[1] = .01 * a[n++],
                        this._result[2] = .01 * a[n++],
                        this._result[3] = .01 * a[n++],
                        this._result[4] = a[n++],
                        this._result[5] = a[n++],
                        this._result[6] = a[n++],
                        this._result[7] = a[n++])
                    } else {
                        var s = this.target
                          , o = s.slotData.color;
                        this._result[0] = o.alphaMultiplier,
                        this._result[1] = o.redMultiplier,
                        this._result[2] = o.greenMultiplier,
                        this._result[3] = o.blueMultiplier,
                        this._result[4] = o.alphaOffset,
                        this._result[5] = o.redOffset,
                        this._result[6] = o.greenOffset,
                        this._result[7] = o.blueOffset
                    }
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this),
                    this._isTween && (this._result[0] = .01 * (this._current[0] + this._difference[0] * this._tweenProgress),
                    this._result[1] = .01 * (this._current[1] + this._difference[1] * this._tweenProgress),
                    this._result[2] = .01 * (this._current[2] + this._difference[2] * this._tweenProgress),
                    this._result[3] = .01 * (this._current[3] + this._difference[3] * this._tweenProgress),
                    this._result[4] = this._current[4] + this._difference[4] * this._tweenProgress,
                    this._result[5] = this._current[5] + this._difference[5] * this._tweenProgress,
                    this._result[6] = this._current[6] + this._difference[6] * this._tweenProgress,
                    this._result[7] = this._current[7] + this._difference[7] * this._tweenProgress)
                }
                ,
                e.prototype.fadeOut = function() {
                    this._isTween = !1
                }
                ,
                e.prototype.update = function(e) {
                    if (t.prototype.update.call(this, e),
                    this._isTween || this.dirty) {
                        var a = this.target
                          , i = a._colorTransform;
                        if (0 !== this._animationState._fadeState || 0 !== this._animationState._subFadeState) {
                            if (i.alphaMultiplier !== this._result[0] || i.redMultiplier !== this._result[1] || i.greenMultiplier !== this._result[2] || i.blueMultiplier !== this._result[3] || i.alphaOffset !== this._result[4] || i.redOffset !== this._result[5] || i.greenOffset !== this._result[6] || i.blueOffset !== this._result[7]) {
                                var r = Math.pow(this._animationState._fadeProgress, 4);
                                i.alphaMultiplier += (this._result[0] - i.alphaMultiplier) * r,
                                i.redMultiplier += (this._result[1] - i.redMultiplier) * r,
                                i.greenMultiplier += (this._result[2] - i.greenMultiplier) * r,
                                i.blueMultiplier += (this._result[3] - i.blueMultiplier) * r,
                                i.alphaOffset += (this._result[4] - i.alphaOffset) * r,
                                i.redOffset += (this._result[5] - i.redOffset) * r,
                                i.greenOffset += (this._result[6] - i.greenOffset) * r,
                                i.blueOffset += (this._result[7] - i.blueOffset) * r,
                                a._colorDirty = !0
                            }
                        } else
                            this.dirty && (this.dirty = !1,
                            i.alphaMultiplier === this._result[0] && i.redMultiplier === this._result[1] && i.greenMultiplier === this._result[2] && i.blueMultiplier === this._result[3] && i.alphaOffset === this._result[4] && i.redOffset === this._result[5] && i.greenOffset === this._result[6] && i.blueOffset === this._result[7] || (i.alphaMultiplier = this._result[0],
                            i.redMultiplier = this._result[1],
                            i.greenMultiplier = this._result[2],
                            i.blueMultiplier = this._result[3],
                            i.alphaOffset = this._result[4],
                            i.redOffset = this._result[5],
                            i.greenOffset = this._result[6],
                            i.blueOffset = this._result[7],
                            a._colorDirty = !0))
                    }
                }
                ,
                e
            }(t.TweenTimelineState);
            t.SlotColorTimelineState = u;
            var c = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.SlotZIndexTimelineState]"
                }
                ,
                e.prototype._onArriveAtFrame = function() {
                    if (t.prototype._onArriveAtFrame.call(this),
                    null === this._timelineData) {
                        var e = this.target
                          , a = e.target;
                        this._result = a.slotData.zIndex
                    }
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight;
                    e.dirty > 1 ? a._zIndex += this._result * i : a._zIndex = this._result * i,
                    (t || this.dirty) && (this.dirty = !1,
                    this._armature._zIndexDirty = !0)
                }
                ,
                e
            }(t.SingleValueTimelineState);
            t.SlotZIndexTimelineState = c;
            var f = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.DeformTimelineState]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    this.geometryOffset = 0,
                    this.displayFrame = null,
                    this._deformCount = 0,
                    this._deformOffset = 0,
                    this._sameValueOffset = 0
                }
                ,
                e.prototype.init = function(e, a, i) {
                    if (t.prototype.init.call(this, e, a, i),
                    null !== this._timelineData) {
                        var r = this._animationData.frameIntOffset + this._timelineArray[this._timelineData.offset + 3]
                          , n = this._animationData.parent.parent
                          , s = n.frameIntArray
                          , o = this.target.target;
                        this.geometryOffset = s[r + 0],
                        this.geometryOffset < 0 && (this.geometryOffset += 65536);
                        for (var l = 0, h = o.displayFrameCount; l < h; ++l) {
                            var u = o.getDisplayFrameAt(l)
                              , c = u.getGeometryData();
                            if (null !== c && c.offset === this.geometryOffset) {
                                this.displayFrame = u,
                                this.displayFrame.updateDeformVertices();
                                break
                            }
                        }
                        if (null === this.displayFrame)
                            return void this.returnToPool();
                        this._valueOffset = this._animationData.frameFloatOffset,
                        this._valueCount = s[r + 2],
                        this._deformCount = s[r + 1],
                        this._deformOffset = s[r + 3],
                        this._sameValueOffset = s[r + 4] + this._animationData.frameFloatOffset,
                        this._valueScale = this._armature.armatureData.scale,
                        this._valueArray = n.frameFloatArray,
                        this._rd.length = 2 * this._valueCount
                    } else
                        this._deformCount = this.displayFrame.deformVertices.length
                }
                ,
                e.prototype.blend = function(t) {
                    var e = this.target
                      , a = e.target
                      , i = e.blendWeight
                      , r = this.displayFrame.deformVertices
                      , n = this._valueArray;
                    if (null !== n)
                        for (var s = this._valueCount, o = this._deformOffset, l = this._sameValueOffset, h = this._rd, u = 0; u < this._deformCount; ++u) {
                            var c = 0;
                            c = u < o ? n[l + u] : u < o + s ? h[u - o] : n[l + u - s],
                            e.dirty > 1 ? r[u] += c * i : r[u] = c * i
                        }
                    else if (1 === e.dirty)
                        for (u = 0; u < this._deformCount; ++u)
                            r[u] = 0;
                    (t || this.dirty) && (this.dirty = !1,
                    a._geometryData === this.displayFrame.getGeometryData() && (a._verticesDirty = !0))
                }
                ,
                e
            }(t.MutilpleValueTimelineState);
            t.DeformTimelineState = f;
            var m = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.IKConstraintTimelineState]"
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this);
                    var e = this.target;
                    if (null !== this._timelineData)
                        e._bendPositive = this._currentA > 0,
                        e._weight = this._currentB;
                    else {
                        var a = e._constraintData;
                        e._bendPositive = a.bendPositive,
                        e._weight = a.weight
                    }
                    e.invalidUpdate(),
                    this.dirty = !1
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueScale = .01,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e
            }(t.DoubleValueTimelineState);
            t.IKConstraintTimelineState = m;
            var _ = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationProgressTimelineState]"
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this);
                    var e = this.target;
                    null !== e._parent && (e.currentTime = this._result * e.totalTime),
                    this.dirty = !1
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueScale = 1e-4,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e
            }(t.SingleValueTimelineState);
            t.AnimationProgressTimelineState = _;
            var p = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationWeightTimelineState]"
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this);
                    var e = this.target;
                    null !== e._parent && (e.weight = this._result),
                    this.dirty = !1
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueScale = 1e-4,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e
            }(t.SingleValueTimelineState);
            t.AnimationWeightTimelineState = p;
            var d = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.AnimationParametersTimelineState]"
                }
                ,
                e.prototype._onUpdateFrame = function() {
                    t.prototype._onUpdateFrame.call(this);
                    var e = this.target;
                    null !== e._parent && (e.parameterX = this._resultA,
                    e.parameterY = this._resultB),
                    this.dirty = !1
                }
                ,
                e.prototype.init = function(e, a, i) {
                    t.prototype.init.call(this, e, a, i),
                    this._valueOffset = this._animationData.frameIntOffset,
                    this._valueScale = 1e-4,
                    this._valueArray = this._animationData.parent.parent.frameIntArray
                }
                ,
                e
            }(t.DoubleValueTimelineState);
            t.AnimationParametersTimelineState = d
        }(S || (S = {})),
        function(t) {
            var e = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return x(e, t),
                e.actionDataToInstance = function(t, a, i) {
                    0 === t.type ? a.type = e.FRAME_EVENT : a.type = 10 === t.type ? e.FRAME_EVENT : e.SOUND_EVENT,
                    a.name = t.name,
                    a.armature = i,
                    a.actionData = t,
                    a.data = t.data,
                    null !== t.bone && (a.bone = i.getBone(t.bone.name)),
                    null !== t.slot && (a.slot = i.getSlot(t.slot.name))
                }
                ,
                e.toString = function() {
                    return "[class dragonBones.EventObject]"
                }
                ,
                e.prototype._onClear = function() {
                    this.time = 0,
                    this.type = "",
                    this.name = "",
                    this.armature = null,
                    this.bone = null,
                    this.slot = null,
                    this.animationState = null,
                    this.actionData = null,
                    this.data = null
                }
                ,
                e.START = "start",
                e.LOOP_COMPLETE = "loopComplete",
                e.COMPLETE = "complete",
                e.FADE_IN = "fadeIn",
                e.FADE_IN_COMPLETE = "fadeInComplete",
                e.FADE_OUT = "fadeOut",
                e.FADE_OUT_COMPLETE = "fadeOutComplete",
                e.FRAME_EVENT = "frameEvent",
                e.SOUND_EVENT = "soundEvent",
                e
            }(t.BaseObject);
            t.EventObject = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function t() {}
                return t._getArmatureType = function(t) {
                    switch (t.toLowerCase()) {
                    case "stage":
                        return 2;
                    case "armature":
                        return 0;
                    case "movieclip":
                        return 1;
                    default:
                        return 0
                    }
                }
                ,
                t._getBoneType = function(t) {
                    switch (t.toLowerCase()) {
                    case "bone":
                        return 0;
                    case "surface":
                        return 1;
                    default:
                        return 0
                    }
                }
                ,
                t._getPositionMode = function(t) {
                    switch (t.toLocaleLowerCase()) {
                    case "percent":
                        return 1;
                    case "fixed":
                        return 0;
                    default:
                        return 1
                    }
                }
                ,
                t._getSpacingMode = function(t) {
                    switch (t.toLocaleLowerCase()) {
                    case "length":
                        return 0;
                    case "percent":
                        return 2;
                    case "fixed":
                        return 1;
                    default:
                        return 0
                    }
                }
                ,
                t._getRotateMode = function(t) {
                    switch (t.toLocaleLowerCase()) {
                    case "tangent":
                        return 0;
                    case "chain":
                        return 1;
                    case "chainscale":
                        return 2;
                    default:
                        return 0
                    }
                }
                ,
                t._getDisplayType = function(t) {
                    switch (t.toLowerCase()) {
                    case "image":
                        return 0;
                    case "mesh":
                        return 2;
                    case "armature":
                        return 1;
                    case "boundingbox":
                        return 3;
                    case "path":
                        return 4;
                    default:
                        return 0
                    }
                }
                ,
                t._getBoundingBoxType = function(t) {
                    switch (t.toLowerCase()) {
                    case "rectangle":
                        return 0;
                    case "ellipse":
                        return 1;
                    case "polygon":
                        return 2;
                    default:
                        return 0
                    }
                }
                ,
                t._getBlendMode = function(t) {
                    switch (t.toLowerCase()) {
                    case "normal":
                        return 0;
                    case "add":
                        return 1;
                    case "alpha":
                        return 2;
                    case "darken":
                        return 3;
                    case "difference":
                        return 4;
                    case "erase":
                        return 5;
                    case "hardlight":
                        return 6;
                    case "invert":
                        return 7;
                    case "layer":
                        return 8;
                    case "lighten":
                        return 9;
                    case "multiply":
                        return 10;
                    case "overlay":
                        return 11;
                    case "screen":
                        return 12;
                    case "subtract":
                        return 13;
                    default:
                        return 0
                    }
                }
                ,
                t._getAnimationBlendType = function(t) {
                    switch (t.toLowerCase()) {
                    case "none":
                        return 0;
                    case "1d":
                        return 1;
                    default:
                        return 0
                    }
                }
                ,
                t._getActionType = function(t) {
                    switch (t.toLowerCase()) {
                    case "play":
                        return 0;
                    case "frame":
                        return 10;
                    case "sound":
                        return 11;
                    default:
                        return 0
                    }
                }
                ,
                t.DATA_VERSION_2_3 = "2.3",
                t.DATA_VERSION_3_0 = "3.0",
                t.DATA_VERSION_4_0 = "4.0",
                t.DATA_VERSION_4_5 = "4.5",
                t.DATA_VERSION_5_0 = "5.0",
                t.DATA_VERSION_5_5 = "5.5",
                t.DATA_VERSION_5_6 = "5.6",
                t.DATA_VERSION = t.DATA_VERSION_5_6,
                t.DATA_VERSIONS = [t.DATA_VERSION_4_0, t.DATA_VERSION_4_5, t.DATA_VERSION_5_0, t.DATA_VERSION_5_5, t.DATA_VERSION_5_6],
                t.TEXTURE_ATLAS = "textureAtlas",
                t.SUB_TEXTURE = "SubTexture",
                t.FORMAT = "format",
                t.IMAGE_PATH = "imagePath",
                t.WIDTH = "width",
                t.HEIGHT = "height",
                t.ROTATED = "rotated",
                t.FRAME_X = "frameX",
                t.FRAME_Y = "frameY",
                t.FRAME_WIDTH = "frameWidth",
                t.FRAME_HEIGHT = "frameHeight",
                t.DRADON_BONES = "dragonBones",
                t.USER_DATA = "userData",
                t.ARMATURE = "armature",
                t.CANVAS = "canvas",
                t.BONE = "bone",
                t.SURFACE = "surface",
                t.SLOT = "slot",
                t.CONSTRAINT = "constraint",
                t.SKIN = "skin",
                t.DISPLAY = "display",
                t.FRAME = "frame",
                t.IK = "ik",
                t.PATH_CONSTRAINT = "path",
                t.ANIMATION = "animation",
                t.TIMELINE = "timeline",
                t.FFD = "ffd",
                t.TRANSLATE_FRAME = "translateFrame",
                t.ROTATE_FRAME = "rotateFrame",
                t.SCALE_FRAME = "scaleFrame",
                t.DISPLAY_FRAME = "displayFrame",
                t.COLOR_FRAME = "colorFrame",
                t.DEFAULT_ACTIONS = "defaultActions",
                t.ACTIONS = "actions",
                t.EVENTS = "events",
                t.INTS = "ints",
                t.FLOATS = "floats",
                t.STRINGS = "strings",
                t.TRANSFORM = "transform",
                t.PIVOT = "pivot",
                t.AABB = "aabb",
                t.COLOR = "color",
                t.VERSION = "version",
                t.COMPATIBLE_VERSION = "compatibleVersion",
                t.FRAME_RATE = "frameRate",
                t.TYPE = "type",
                t.SUB_TYPE = "subType",
                t.NAME = "name",
                t.PARENT = "parent",
                t.TARGET = "target",
                t.STAGE = "stage",
                t.SHARE = "share",
                t.PATH = "path",
                t.LENGTH = "length",
                t.DISPLAY_INDEX = "displayIndex",
                t.Z_ORDER = "zOrder",
                t.Z_INDEX = "zIndex",
                t.BLEND_MODE = "blendMode",
                t.INHERIT_TRANSLATION = "inheritTranslation",
                t.INHERIT_ROTATION = "inheritRotation",
                t.INHERIT_SCALE = "inheritScale",
                t.INHERIT_REFLECTION = "inheritReflection",
                t.INHERIT_ANIMATION = "inheritAnimation",
                t.INHERIT_DEFORM = "inheritDeform",
                t.SEGMENT_X = "segmentX",
                t.SEGMENT_Y = "segmentY",
                t.BEND_POSITIVE = "bendPositive",
                t.CHAIN = "chain",
                t.WEIGHT = "weight",
                t.BLEND_TYPE = "blendType",
                t.FADE_IN_TIME = "fadeInTime",
                t.PLAY_TIMES = "playTimes",
                t.SCALE = "scale",
                t.OFFSET = "offset",
                t.POSITION = "position",
                t.DURATION = "duration",
                t.TWEEN_EASING = "tweenEasing",
                t.TWEEN_ROTATE = "tweenRotate",
                t.TWEEN_SCALE = "tweenScale",
                t.CLOCK_WISE = "clockwise",
                t.CURVE = "curve",
                t.SOUND = "sound",
                t.EVENT = "event",
                t.ACTION = "action",
                t.X = "x",
                t.Y = "y",
                t.SKEW_X = "skX",
                t.SKEW_Y = "skY",
                t.SCALE_X = "scX",
                t.SCALE_Y = "scY",
                t.VALUE = "value",
                t.ROTATE = "rotate",
                t.SKEW = "skew",
                t.ALPHA = "alpha",
                t.ALPHA_OFFSET = "aO",
                t.RED_OFFSET = "rO",
                t.GREEN_OFFSET = "gO",
                t.BLUE_OFFSET = "bO",
                t.ALPHA_MULTIPLIER = "aM",
                t.RED_MULTIPLIER = "rM",
                t.GREEN_MULTIPLIER = "gM",
                t.BLUE_MULTIPLIER = "bM",
                t.UVS = "uvs",
                t.VERTICES = "vertices",
                t.TRIANGLES = "triangles",
                t.WEIGHTS = "weights",
                t.SLOT_POSE = "slotPose",
                t.BONE_POSE = "bonePose",
                t.BONES = "bones",
                t.POSITION_MODE = "positionMode",
                t.SPACING_MODE = "spacingMode",
                t.ROTATE_MODE = "rotateMode",
                t.SPACING = "spacing",
                t.ROTATE_OFFSET = "rotateOffset",
                t.ROTATE_MIX = "rotateMix",
                t.TRANSLATE_MIX = "translateMix",
                t.TARGET_DISPLAY = "targetDisplay",
                t.CLOSED = "closed",
                t.CONSTANT_SPEED = "constantSpeed",
                t.VERTEX_COUNT = "vertexCount",
                t.LENGTHS = "lengths",
                t.GOTO_AND_PLAY = "gotoAndPlay",
                t.DEFAULT_NAME = "default",
                t
            }();
            t.DataParser = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function i() {
                    var a = null !== e && e.apply(this, arguments) || this;
                    return a._rawTextureAtlasIndex = 0,
                    a._rawBones = [],
                    a._data = null,
                    a._armature = null,
                    a._bone = null,
                    a._geometry = null,
                    a._slot = null,
                    a._skin = null,
                    a._mesh = null,
                    a._animation = null,
                    a._timeline = null,
                    a._rawTextureAtlases = null,
                    a._frameValueType = 0,
                    a._defaultColorOffset = -1,
                    a._prevClockwise = 0,
                    a._prevRotation = 0,
                    a._frameDefaultValue = 0,
                    a._frameValueScale = 1,
                    a._helpMatrixA = new t.Matrix,
                    a._helpMatrixB = new t.Matrix,
                    a._helpTransform = new t.Transform,
                    a._helpColorTransform = new t.ColorTransform,
                    a._helpPoint = new t.Point,
                    a._helpArray = [],
                    a._intArray = [],
                    a._floatArray = [],
                    a._frameIntArray = [],
                    a._frameFloatArray = [],
                    a._frameArray = [],
                    a._timelineArray = [],
                    a._colorArray = [],
                    a._cacheRawMeshes = [],
                    a._cacheMeshes = [],
                    a._actionFrames = [],
                    a._weightSlotPose = {},
                    a._weightBonePoses = {},
                    a._cacheBones = {},
                    a._slotChildActions = {},
                    a
                }
                return x(i, e),
                i._getBoolean = function(t, e, a) {
                    if (e in t) {
                        var i = t[e]
                          , r = typeof i;
                        if ("boolean" === r)
                            return i;
                        if ("string" !== r)
                            return !!i;
                        switch (i) {
                        case "0":
                        case "NaN":
                        case "":
                        case "false":
                        case "null":
                        case "undefined":
                            return !1;
                        default:
                            return !0
                        }
                    }
                    return a
                }
                ,
                i._getNumber = function(t, e, a) {
                    if (e in t) {
                        var i = t[e];
                        return null === i || "NaN" === i ? a : +i || 0
                    }
                    return a
                }
                ,
                i._getString = function(t, e, a) {
                    if (e in t) {
                        var i = t[e]
                          , r = typeof i;
                        return "string" === r ? i : String(i)
                    }
                    return a
                }
                ,
                i.prototype._getCurvePoint = function(t, e, a, i, r, n, s, o, l, h) {
                    var u = 1 - l
                      , c = u * u
                      , f = l * l
                      , m = u * c
                      , _ = 3 * l * c
                      , p = 3 * u * f
                      , d = l * f;
                    h.x = m * t + _ * a + p * r + d * s,
                    h.y = m * e + _ * i + p * n + d * o
                }
                ,
                i.prototype._samplingEasingCurve = function(t, e) {
                    var a = t.length;
                    if (a % 3 === 1) {
                        for (var i = -2, r = 0, n = e.length; r < n; ++r) {
                            var s = (r + 1) / (n + 1);
                            while ((i + 6 < a ? t[i + 6] : 1) < s)
                                i += 6;
                            var o = i >= 0 && i + 6 < a
                              , l = o ? t[i] : 0
                              , h = o ? t[i + 1] : 0
                              , u = t[i + 2]
                              , c = t[i + 3]
                              , f = t[i + 4]
                              , m = t[i + 5]
                              , _ = o ? t[i + 6] : 1
                              , p = o ? t[i + 7] : 1
                              , d = 0
                              , y = 1;
                            while (y - d > 1e-4) {
                                var g = .5 * (y + d);
                                this._getCurvePoint(l, h, u, c, f, m, _, p, g, this._helpPoint),
                                s - this._helpPoint.x > 0 ? d = g : y = g
                            }
                            e[r] = this._helpPoint.y
                        }
                        return !0
                    }
                    for (i = 0,
                    r = 0,
                    n = e.length; r < n; ++r) {
                        s = (r + 1) / (n + 1);
                        while (t[i + 6] < s)
                            i += 6;
                        l = t[i],
                        h = t[i + 1],
                        u = t[i + 2],
                        c = t[i + 3],
                        f = t[i + 4],
                        m = t[i + 5],
                        _ = t[i + 6],
                        p = t[i + 7],
                        d = 0,
                        y = 1;
                        while (y - d > 1e-4) {
                            g = .5 * (y + d);
                            this._getCurvePoint(l, h, u, c, f, m, _, p, g, this._helpPoint),
                            s - this._helpPoint.x > 0 ? d = g : y = g
                        }
                        e[r] = this._helpPoint.y
                    }
                    return !1
                }
                ,
                i.prototype._parseActionDataInFrame = function(e, a, i, r) {
                    t.DataParser.EVENT in e && this._mergeActionFrame(e[t.DataParser.EVENT], a, 10, i, r),
                    t.DataParser.SOUND in e && this._mergeActionFrame(e[t.DataParser.SOUND], a, 11, i, r),
                    t.DataParser.ACTION in e && this._mergeActionFrame(e[t.DataParser.ACTION], a, 0, i, r),
                    t.DataParser.EVENTS in e && this._mergeActionFrame(e[t.DataParser.EVENTS], a, 10, i, r),
                    t.DataParser.ACTIONS in e && this._mergeActionFrame(e[t.DataParser.ACTIONS], a, 0, i, r)
                }
                ,
                i.prototype._mergeActionFrame = function(t, e, i, r, n) {
                    for (var s = this._armature.actions.length, o = this._parseActionData(t, i, r, n), l = 0, h = null, u = 0, c = o; u < c.length; u++) {
                        var f = c[u];
                        this._armature.addAction(f, !1)
                    }
                    0 === this._actionFrames.length && (h = new a,
                    h.frameStart = 0,
                    this._actionFrames.push(h),
                    h = null);
                    for (var m = 0, _ = this._actionFrames; m < _.length; m++) {
                        var p = _[m];
                        if (p.frameStart === e) {
                            h = p;
                            break
                        }
                        if (p.frameStart > e)
                            break;
                        l++
                    }
                    null === h && (h = new a,
                    h.frameStart = e,
                    this._actionFrames.splice(l, 0, h));
                    for (var d = 0; d < o.length; ++d)
                        h.actions.push(s + d)
                }
                ,
                i.prototype._parseArmature = function(e, a) {
                    var r = t.BaseObject.borrowObject(t.ArmatureData);
                    if (r.name = i._getString(e, t.DataParser.NAME, ""),
                    r.frameRate = i._getNumber(e, t.DataParser.FRAME_RATE, this._data.frameRate),
                    r.scale = a,
                    t.DataParser.TYPE in e && "string" === typeof e[t.DataParser.TYPE] ? r.type = t.DataParser._getArmatureType(e[t.DataParser.TYPE]) : r.type = i._getNumber(e, t.DataParser.TYPE, 0),
                    0 === r.frameRate && (r.frameRate = 24),
                    this._armature = r,
                    t.DataParser.CANVAS in e) {
                        var n = e[t.DataParser.CANVAS]
                          , s = t.BaseObject.borrowObject(t.CanvasData);
                        t.DataParser.COLOR in n ? s.hasBackground = !0 : s.hasBackground = !1,
                        s.color = i._getNumber(n, t.DataParser.COLOR, 0),
                        s.x = i._getNumber(n, t.DataParser.X, 0) * r.scale,
                        s.y = i._getNumber(n, t.DataParser.Y, 0) * r.scale,
                        s.width = i._getNumber(n, t.DataParser.WIDTH, 0) * r.scale,
                        s.height = i._getNumber(n, t.DataParser.HEIGHT, 0) * r.scale,
                        r.canvas = s
                    }
                    if (t.DataParser.AABB in e) {
                        var o = e[t.DataParser.AABB];
                        r.aabb.x = i._getNumber(o, t.DataParser.X, 0) * r.scale,
                        r.aabb.y = i._getNumber(o, t.DataParser.Y, 0) * r.scale,
                        r.aabb.width = i._getNumber(o, t.DataParser.WIDTH, 0) * r.scale,
                        r.aabb.height = i._getNumber(o, t.DataParser.HEIGHT, 0) * r.scale
                    }
                    if (t.DataParser.BONE in e)
                        for (var l = e[t.DataParser.BONE], h = 0, u = l; h < u.length; h++) {
                            var c = u[h]
                              , f = i._getString(c, t.DataParser.PARENT, "")
                              , m = this._parseBone(c);
                            if (f.length > 0) {
                                var _ = r.getBone(f);
                                null !== _ ? m.parent = _ : (f in this._cacheBones || (this._cacheBones[f] = []),
                                this._cacheBones[f].push(m))
                            }
                            if (m.name in this._cacheBones) {
                                for (var p = 0, d = this._cacheBones[m.name]; p < d.length; p++) {
                                    var y = d[p];
                                    y.parent = m
                                }
                                delete this._cacheBones[m.name]
                            }
                            r.addBone(m),
                            this._rawBones.push(m)
                        }
                    if (t.DataParser.IK in e)
                        for (var g = e[t.DataParser.IK], b = 0, v = g; b < v.length; b++) {
                            var D = v[b]
                              , T = this._parseIKConstraint(D);
                            T && r.addConstraint(T)
                        }
                    if (r.sortBones(),
                    t.DataParser.SLOT in e)
                        for (var A = 0, P = e[t.DataParser.SLOT], O = 0, S = P; O < S.length; O++) {
                            var x = S[O];
                            r.addSlot(this._parseSlot(x, A++))
                        }
                    if (t.DataParser.SKIN in e)
                        for (var w = e[t.DataParser.SKIN], E = 0, C = w; E < C.length; E++) {
                            var I = C[E];
                            r.addSkin(this._parseSkin(I))
                        }
                    if (t.DataParser.PATH_CONSTRAINT in e)
                        for (var M = e[t.DataParser.PATH_CONSTRAINT], B = 0, F = M; B < F.length; B++) {
                            var k = F[B];
                            T = this._parsePathConstraint(k);
                            T && r.addConstraint(T)
                        }
                    for (var R = 0, j = this._cacheRawMeshes.length; R < j; ++R) {
                        var N = this._cacheRawMeshes[R]
                          , V = i._getString(N, t.DataParser.SHARE, "");
                        if (0 !== V.length) {
                            var L = i._getString(N, t.DataParser.SKIN, t.DataParser.DEFAULT_NAME);
                            0 === L.length && (L = t.DataParser.DEFAULT_NAME);
                            var Y = r.getMesh(L, "", V);
                            if (null !== Y) {
                                var U = this._cacheMeshes[R];
                                U.geometry.shareFrom(Y.geometry)
                            }
                        }
                    }
                    if (t.DataParser.ANIMATION in e)
                        for (var H = e[t.DataParser.ANIMATION], X = 0, z = H; X < z.length; X++) {
                            var G = z[X]
                              , W = this._parseAnimation(G);
                            r.addAnimation(W)
                        }
                    if (t.DataParser.DEFAULT_ACTIONS in e)
                        for (var K = this._parseActionData(e[t.DataParser.DEFAULT_ACTIONS], 0, null, null), q = 0, Z = K; q < Z.length; q++) {
                            var J = Z[q];
                            if (r.addAction(J, !0),
                            0 === J.type) {
                                W = r.getAnimation(J.name);
                                null !== W && (r.defaultAnimation = W)
                            }
                        }
                    if (t.DataParser.ACTIONS in e) {
                        K = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null);
                        for (var Q = 0, $ = K; Q < $.length; Q++) {
                            J = $[Q];
                            r.addAction(J, !1)
                        }
                    }
                    for (var tt in this._rawBones.length = 0,
                    this._cacheRawMeshes.length = 0,
                    this._cacheMeshes.length = 0,
                    this._armature = null,
                    this._weightSlotPose)
                        delete this._weightSlotPose[tt];
                    for (var tt in this._weightBonePoses)
                        delete this._weightBonePoses[tt];
                    for (var tt in this._cacheBones)
                        delete this._cacheBones[tt];
                    for (var tt in this._slotChildActions)
                        delete this._slotChildActions[tt];
                    return r
                }
                ,
                i.prototype._parseBone = function(e) {
                    var a = 0;
                    if (a = t.DataParser.TYPE in e && "string" === typeof e[t.DataParser.TYPE] ? t.DataParser._getBoneType(e[t.DataParser.TYPE]) : i._getNumber(e, t.DataParser.TYPE, 0),
                    0 === a) {
                        var r = this._armature.scale
                          , n = t.BaseObject.borrowObject(t.BoneData);
                        return n.inheritTranslation = i._getBoolean(e, t.DataParser.INHERIT_TRANSLATION, !0),
                        n.inheritRotation = i._getBoolean(e, t.DataParser.INHERIT_ROTATION, !0),
                        n.inheritScale = i._getBoolean(e, t.DataParser.INHERIT_SCALE, !0),
                        n.inheritReflection = i._getBoolean(e, t.DataParser.INHERIT_REFLECTION, !0),
                        n.length = i._getNumber(e, t.DataParser.LENGTH, 0) * r,
                        n.alpha = i._getNumber(e, t.DataParser.ALPHA, 1),
                        n.name = i._getString(e, t.DataParser.NAME, ""),
                        t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], n.transform, r),
                        n
                    }
                    var s = t.BaseObject.borrowObject(t.SurfaceData);
                    return s.alpha = i._getNumber(e, t.DataParser.ALPHA, 1),
                    s.name = i._getString(e, t.DataParser.NAME, ""),
                    s.segmentX = i._getNumber(e, t.DataParser.SEGMENT_X, 0),
                    s.segmentY = i._getNumber(e, t.DataParser.SEGMENT_Y, 0),
                    this._parseGeometry(e, s.geometry),
                    s
                }
                ,
                i.prototype._parseIKConstraint = function(e) {
                    var a = this._armature.getBone(i._getString(e, t.DataParser.BONE, ""));
                    if (null === a)
                        return null;
                    var r = this._armature.getBone(i._getString(e, t.DataParser.TARGET, ""));
                    if (null === r)
                        return null;
                    var n = i._getNumber(e, t.DataParser.CHAIN, 0)
                      , s = t.BaseObject.borrowObject(t.IKConstraintData);
                    return s.scaleEnabled = i._getBoolean(e, t.DataParser.SCALE, !1),
                    s.bendPositive = i._getBoolean(e, t.DataParser.BEND_POSITIVE, !0),
                    s.weight = i._getNumber(e, t.DataParser.WEIGHT, 1),
                    s.name = i._getString(e, t.DataParser.NAME, ""),
                    s.type = 0,
                    s.target = r,
                    n > 0 && null !== a.parent ? (s.root = a.parent,
                    s.bone = a) : (s.root = a,
                    s.bone = null),
                    s
                }
                ,
                i.prototype._parsePathConstraint = function(e) {
                    var a = this._armature.getSlot(i._getString(e, t.DataParser.TARGET, ""));
                    if (null === a)
                        return null;
                    var r = this._armature.defaultSkin;
                    if (null === r)
                        return null;
                    var n = r.getDisplay(a.name, i._getString(e, t.DataParser.TARGET_DISPLAY, a.name));
                    if (null === n || !(n instanceof t.PathDisplayData))
                        return null;
                    var s = e[t.DataParser.BONES];
                    if (null === s || 0 === s.length)
                        return null;
                    var o = t.BaseObject.borrowObject(t.PathConstraintData);
                    o.name = i._getString(e, t.DataParser.NAME, ""),
                    o.type = 1,
                    o.pathSlot = a,
                    o.pathDisplayData = n,
                    o.target = a.parent,
                    o.positionMode = t.DataParser._getPositionMode(i._getString(e, t.DataParser.POSITION_MODE, "")),
                    o.spacingMode = t.DataParser._getSpacingMode(i._getString(e, t.DataParser.SPACING_MODE, "")),
                    o.rotateMode = t.DataParser._getRotateMode(i._getString(e, t.DataParser.ROTATE_MODE, "")),
                    o.position = i._getNumber(e, t.DataParser.POSITION, 0),
                    o.spacing = i._getNumber(e, t.DataParser.SPACING, 0),
                    o.rotateOffset = i._getNumber(e, t.DataParser.ROTATE_OFFSET, 0),
                    o.rotateMix = i._getNumber(e, t.DataParser.ROTATE_MIX, 1),
                    o.translateMix = i._getNumber(e, t.DataParser.TRANSLATE_MIX, 1);
                    for (var l = 0, h = s; l < h.length; l++) {
                        var u = h[l]
                          , c = this._armature.getBone(u);
                        null !== c && (o.AddBone(c),
                        null === o.root && (o.root = c))
                    }
                    return o
                }
                ,
                i.prototype._parseSlot = function(e, a) {
                    var r = t.BaseObject.borrowObject(t.SlotData);
                    return r.displayIndex = i._getNumber(e, t.DataParser.DISPLAY_INDEX, 0),
                    r.zOrder = a,
                    r.zIndex = i._getNumber(e, t.DataParser.Z_INDEX, 0),
                    r.alpha = i._getNumber(e, t.DataParser.ALPHA, 1),
                    r.name = i._getString(e, t.DataParser.NAME, ""),
                    r.parent = this._armature.getBone(i._getString(e, t.DataParser.PARENT, "")),
                    t.DataParser.BLEND_MODE in e && "string" === typeof e[t.DataParser.BLEND_MODE] ? r.blendMode = t.DataParser._getBlendMode(e[t.DataParser.BLEND_MODE]) : r.blendMode = i._getNumber(e, t.DataParser.BLEND_MODE, 0),
                    t.DataParser.COLOR in e ? (r.color = t.SlotData.createColor(),
                    this._parseColorTransform(e[t.DataParser.COLOR], r.color)) : r.color = t.SlotData.DEFAULT_COLOR,
                    t.DataParser.ACTIONS in e && (this._slotChildActions[r.name] = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null)),
                    r
                }
                ,
                i.prototype._parseSkin = function(e) {
                    var a = t.BaseObject.borrowObject(t.SkinData);
                    if (a.name = i._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME),
                    0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME),
                    t.DataParser.SLOT in e) {
                        var r = e[t.DataParser.SLOT];
                        this._skin = a;
                        for (var n = 0, s = r; n < s.length; n++) {
                            var o = s[n]
                              , l = i._getString(o, t.DataParser.NAME, "")
                              , h = this._armature.getSlot(l);
                            if (null !== h) {
                                if (this._slot = h,
                                t.DataParser.DISPLAY in o)
                                    for (var u = o[t.DataParser.DISPLAY], c = 0, f = u; c < f.length; c++) {
                                        var m = f[c];
                                        m ? a.addDisplay(l, this._parseDisplay(m)) : a.addDisplay(l, null)
                                    }
                                this._slot = null
                            }
                        }
                        this._skin = null
                    }
                    return a
                }
                ,
                i.prototype._parseDisplay = function(e) {
                    var a = i._getString(e, t.DataParser.NAME, "")
                      , r = i._getString(e, t.DataParser.PATH, "")
                      , n = 0
                      , s = null;
                    switch (n = t.DataParser.TYPE in e && "string" === typeof e[t.DataParser.TYPE] ? t.DataParser._getDisplayType(e[t.DataParser.TYPE]) : i._getNumber(e, t.DataParser.TYPE, n),
                    n) {
                    case 0:
                        var o = s = t.BaseObject.borrowObject(t.ImageDisplayData);
                        o.name = a,
                        o.path = r.length > 0 ? r : a,
                        this._parsePivot(e, o);
                        break;
                    case 1:
                        var l = s = t.BaseObject.borrowObject(t.ArmatureDisplayData);
                        if (l.name = a,
                        l.path = r.length > 0 ? r : a,
                        l.inheritAnimation = !0,
                        t.DataParser.ACTIONS in e)
                            for (var h = this._parseActionData(e[t.DataParser.ACTIONS], 0, null, null), u = 0, c = h; u < c.length; u++) {
                                var f = c[u];
                                l.addAction(f)
                            }
                        else if (this._slot.name in this._slotChildActions) {
                            var m = this._skin.getDisplays(this._slot.name);
                            if (null === m ? 0 === this._slot.displayIndex : this._slot.displayIndex === m.length) {
                                for (var _ = 0, p = this._slotChildActions[this._slot.name]; _ < p.length; _++) {
                                    f = p[_];
                                    l.addAction(f)
                                }
                                delete this._slotChildActions[this._slot.name]
                            }
                        }
                        break;
                    case 2:
                        var d = s = t.BaseObject.borrowObject(t.MeshDisplayData);
                        d.geometry.inheritDeform = i._getBoolean(e, t.DataParser.INHERIT_DEFORM, !0),
                        d.name = a,
                        d.path = r.length > 0 ? r : a,
                        t.DataParser.SHARE in e ? (d.geometry.data = this._data,
                        this._cacheRawMeshes.push(e),
                        this._cacheMeshes.push(d)) : this._parseMesh(e, d);
                        break;
                    case 3:
                        var y = this._parseBoundingBox(e);
                        if (null !== y) {
                            var g = s = t.BaseObject.borrowObject(t.BoundingBoxDisplayData);
                            g.name = a,
                            g.path = r.length > 0 ? r : a,
                            g.boundingBox = y
                        }
                        break;
                    case 4:
                        var b = e[t.DataParser.LENGTHS]
                          , v = s = t.BaseObject.borrowObject(t.PathDisplayData);
                        v.closed = i._getBoolean(e, t.DataParser.CLOSED, !1),
                        v.constantSpeed = i._getBoolean(e, t.DataParser.CONSTANT_SPEED, !1),
                        v.name = a,
                        v.path = r.length > 0 ? r : a,
                        v.curveLengths.length = b.length;
                        for (var D = 0, T = b.length; D < T; ++D)
                            v.curveLengths[D] = b[D];
                        this._parsePath(e, v);
                        break
                    }
                    return null !== s && t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], s.transform, this._armature.scale),
                    s
                }
                ,
                i.prototype._parsePath = function(t, e) {
                    this._parseGeometry(t, e.geometry)
                }
                ,
                i.prototype._parsePivot = function(e, a) {
                    if (t.DataParser.PIVOT in e) {
                        var r = e[t.DataParser.PIVOT];
                        a.pivot.x = i._getNumber(r, t.DataParser.X, 0),
                        a.pivot.y = i._getNumber(r, t.DataParser.Y, 0)
                    } else
                        a.pivot.x = .5,
                        a.pivot.y = .5
                }
                ,
                i.prototype._parseMesh = function(e, a) {
                    if (this._parseGeometry(e, a.geometry),
                    t.DataParser.WEIGHTS in e) {
                        var i = e[t.DataParser.SLOT_POSE]
                          , r = e[t.DataParser.BONE_POSE]
                          , n = this._skin.name + "_" + this._slot.name + "_" + a.name;
                        this._weightSlotPose[n] = i,
                        this._weightBonePoses[n] = r
                    }
                }
                ,
                i.prototype._parseBoundingBox = function(e) {
                    var a = null
                      , r = 0;
                    switch (r = t.DataParser.SUB_TYPE in e && "string" === typeof e[t.DataParser.SUB_TYPE] ? t.DataParser._getBoundingBoxType(e[t.DataParser.SUB_TYPE]) : i._getNumber(e, t.DataParser.SUB_TYPE, r),
                    r) {
                    case 0:
                        a = t.BaseObject.borrowObject(t.RectangleBoundingBoxData);
                        break;
                    case 1:
                        a = t.BaseObject.borrowObject(t.EllipseBoundingBoxData);
                        break;
                    case 2:
                        a = this._parsePolygonBoundingBox(e);
                        break
                    }
                    return null !== a && (a.color = i._getNumber(e, t.DataParser.COLOR, 0),
                    0 !== a.type && 1 !== a.type || (a.width = i._getNumber(e, t.DataParser.WIDTH, 0),
                    a.height = i._getNumber(e, t.DataParser.HEIGHT, 0))),
                    a
                }
                ,
                i.prototype._parsePolygonBoundingBox = function(e) {
                    var a = t.BaseObject.borrowObject(t.PolygonBoundingBoxData);
                    if (t.DataParser.VERTICES in e) {
                        var i = this._armature.scale
                          , r = e[t.DataParser.VERTICES]
                          , n = a.vertices;
                        n.length = r.length;
                        for (var s = 0, o = r.length; s < o; s += 2) {
                            var l = r[s] * i
                              , h = r[s + 1] * i;
                            n[s] = l,
                            n[s + 1] = h,
                            0 === s ? (a.x = l,
                            a.y = h,
                            a.width = l,
                            a.height = h) : (l < a.x ? a.x = l : l > a.width && (a.width = l),
                            h < a.y ? a.y = h : h > a.height && (a.height = h))
                        }
                        a.width -= a.x,
                        a.height -= a.y
                    } else
                        console.warn("Data error.\n Please reexport DragonBones Data to fixed the bug.");
                    return a
                }
                ,
                i.prototype._parseAnimation = function(e) {
                    var a = t.BaseObject.borrowObject(t.AnimationData);
                    if (a.blendType = t.DataParser._getAnimationBlendType(i._getString(e, t.DataParser.BLEND_TYPE, "")),
                    a.frameCount = i._getNumber(e, t.DataParser.DURATION, 0),
                    a.playTimes = i._getNumber(e, t.DataParser.PLAY_TIMES, 1),
                    a.duration = a.frameCount / this._armature.frameRate,
                    a.fadeInTime = i._getNumber(e, t.DataParser.FADE_IN_TIME, 0),
                    a.scale = i._getNumber(e, t.DataParser.SCALE, 1),
                    a.name = i._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME),
                    0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME),
                    a.frameIntOffset = this._frameIntArray.length,
                    a.frameFloatOffset = this._frameFloatArray.length,
                    a.frameOffset = this._frameArray.length,
                    this._animation = a,
                    t.DataParser.FRAME in e) {
                        var r = e[t.DataParser.FRAME]
                          , n = r.length;
                        if (n > 0)
                            for (var s = 0, o = 0; s < n; ++s) {
                                var l = r[s];
                                this._parseActionDataInFrame(l, o, null, null),
                                o += i._getNumber(l, t.DataParser.DURATION, 1)
                            }
                    }
                    if (t.DataParser.Z_ORDER in e && (this._animation.zOrderTimeline = this._parseTimeline(e[t.DataParser.Z_ORDER], null, t.DataParser.FRAME, 1, 0, 0, this._parseZOrderFrame)),
                    t.DataParser.BONE in e)
                        for (var h = e[t.DataParser.BONE], u = 0, c = h; u < c.length; u++) {
                            var f = c[u];
                            this._parseBoneTimeline(f)
                        }
                    if (t.DataParser.SLOT in e) {
                        h = e[t.DataParser.SLOT];
                        for (var m = 0, _ = h; m < _.length; m++) {
                            f = _[m];
                            this._parseSlotTimeline(f)
                        }
                    }
                    if (t.DataParser.FFD in e) {
                        h = e[t.DataParser.FFD];
                        for (var p = 0, d = h; p < d.length; p++) {
                            f = d[p];
                            var y = i._getString(f, t.DataParser.SKIN, t.DataParser.DEFAULT_NAME)
                              , g = i._getString(f, t.DataParser.SLOT, "")
                              , b = i._getString(f, t.DataParser.NAME, "");
                            if (0 === y.length && (y = t.DataParser.DEFAULT_NAME),
                            this._slot = this._armature.getSlot(g),
                            this._mesh = this._armature.getMesh(y, g, b),
                            null !== this._slot && null !== this._mesh) {
                                var v = this._parseTimeline(f, null, t.DataParser.FRAME, 22, 2, 0, this._parseSlotDeformFrame);
                                null !== v && this._animation.addSlotTimeline(g, v),
                                this._slot = null,
                                this._mesh = null
                            }
                        }
                    }
                    if (t.DataParser.IK in e) {
                        h = e[t.DataParser.IK];
                        for (var D = 0, T = h; D < T.length; D++) {
                            f = T[D];
                            var A = i._getString(f, t.DataParser.NAME, "")
                              , P = this._armature.getConstraint(A);
                            if (null !== P) {
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, 30, 1, 2, this._parseIKConstraintFrame);
                                null !== v && this._animation.addConstraintTimeline(A, v)
                            }
                        }
                    }
                    if (this._actionFrames.length > 0 && (this._animation.actionTimeline = this._parseTimeline(null, this._actionFrames, "", 0, 0, 0, this._parseActionFrame),
                    this._actionFrames.length = 0),
                    t.DataParser.TIMELINE in e) {
                        h = e[t.DataParser.TIMELINE];
                        for (var O = 0, S = h; O < S.length; O++) {
                            f = S[O];
                            var x = i._getNumber(f, t.DataParser.TYPE, 0)
                              , w = i._getString(f, t.DataParser.NAME, "");
                            v = null;
                            switch (x) {
                            case 0:
                                break;
                            case 20:
                            case 23:
                            case 60:
                            case 24:
                            case 40:
                            case 41:
                                if (20 === x ? (this._frameValueType = 0,
                                this._frameValueScale = 1) : (this._frameValueType = 1,
                                this._frameValueScale = 23 === x ? 1 : 40 === x || 41 === x ? 1e4 : 100),
                                this._frameDefaultValue = 60 === x || 24 === x || 41 === x ? 1 : 0,
                                40 === x && 0 !== a.blendType) {
                                    v = t.BaseObject.borrowObject(t.AnimationTimelineData);
                                    var E = v;
                                    E.x = i._getNumber(f, t.DataParser.X, 0),
                                    E.y = i._getNumber(f, t.DataParser.Y, 0)
                                }
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, x, this._frameValueType, 1, this._parseSingleValueFrame, v);
                                break;
                            case 11:
                            case 12:
                            case 13:
                            case 30:
                            case 42:
                                30 === x || 42 === x ? (this._frameValueType = 1,
                                this._frameValueScale = 42 === x ? 1e4 : 100) : (this._frameValueScale = 12 === x ? t.Transform.DEG_RAD : 1,
                                this._frameValueType = 2),
                                this._frameDefaultValue = 13 === x || 30 === x ? 1 : 0,
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, x, this._frameValueType, 2, this._parseDoubleValueFrame);
                                break;
                            case 1:
                                break;
                            case 50:
                                var C = this._armature.getBone(w);
                                if (null === C)
                                    continue;
                                this._geometry = C.geometry,
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, x, 2, 0, this._parseDeformFrame),
                                this._geometry = null;
                                break;
                            case 22:
                                for (var y in this._geometry = null,
                                this._armature.skins) {
                                    var I = this._armature.skins[y];
                                    for (var M in I.displays)
                                        for (var B = I.displays[M], F = 0, k = B; F < k.length; F++) {
                                            var R = k[F];
                                            if (null !== R && R.name === w) {
                                                this._geometry = R.geometry;
                                                break
                                            }
                                        }
                                }
                                if (null === this._geometry)
                                    continue;
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, x, 2, 0, this._parseDeformFrame),
                                this._geometry = null;
                                break;
                            case 21:
                                v = this._parseTimeline(f, null, t.DataParser.FRAME, x, 1, 1, this._parseSlotColorFrame);
                                break
                            }
                            if (null !== v)
                                switch (x) {
                                case 0:
                                    break;
                                case 1:
                                    break;
                                case 11:
                                case 12:
                                case 13:
                                case 50:
                                case 60:
                                    this._animation.addBoneTimeline(w, v);
                                    break;
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                    this._animation.addSlotTimeline(w, v);
                                    break;
                                case 30:
                                    this._animation.addConstraintTimeline(w, v);
                                    break;
                                case 40:
                                case 41:
                                case 42:
                                    this._animation.addAnimationTimeline(w, v);
                                    break
                                }
                        }
                    }
                    return this._animation = null,
                    a
                }
                ,
                i.prototype._parseTimeline = function(e, r, n, s, o, l, h, u) {
                    if (void 0 === u && (u = null),
                    null !== e && n.length > 0 && n in e && (r = e[n]),
                    null === r)
                        return null;
                    var c = r.length;
                    if (0 === c)
                        return null;
                    var f = this._frameIntArray.length
                      , m = this._frameFloatArray.length
                      , _ = this._timelineArray.length;
                    switch (null === u && (u = t.BaseObject.borrowObject(t.TimelineData)),
                    u.type = s,
                    u.offset = _,
                    this._frameValueType = o,
                    this._timeline = u,
                    this._timelineArray.length += 5 + c,
                    null !== e ? (this._timelineArray[_ + 0] = Math.round(100 * i._getNumber(e, t.DataParser.SCALE, 1)),
                    this._timelineArray[_ + 1] = Math.round(100 * i._getNumber(e, t.DataParser.OFFSET, 0))) : (this._timelineArray[_ + 0] = 100,
                    this._timelineArray[_ + 1] = 0),
                    this._timelineArray[_ + 2] = c,
                    this._timelineArray[_ + 3] = l,
                    this._frameValueType) {
                    case 0:
                        this._timelineArray[_ + 4] = 0;
                        break;
                    case 1:
                        this._timelineArray[_ + 4] = f - this._animation.frameIntOffset;
                        break;
                    case 2:
                        this._timelineArray[_ + 4] = m - this._animation.frameFloatOffset;
                        break
                    }
                    if (1 === c)
                        u.frameIndicesOffset = -1,
                        this._timelineArray[_ + 5 + 0] = h.call(this, r[0], 0, 0) - this._animation.frameOffset;
                    else {
                        var p = this._animation.frameCount + 1
                          , d = this._data.frameIndices
                          , y = d.length;
                        d.length += p,
                        u.frameIndicesOffset = y;
                        for (var g = 0, b = 0, v = 0, D = 0; g < p; ++g) {
                            if (v + D <= g && b < c) {
                                var T = r[b];
                                v = g,
                                D = b === c - 1 ? this._animation.frameCount - v : T instanceof a ? this._actionFrames[b + 1].frameStart - v : i._getNumber(T, t.DataParser.DURATION, 1),
                                this._timelineArray[_ + 5 + b] = h.call(this, T, v, D) - this._animation.frameOffset,
                                b++
                            }
                            d[y + g] = b - 1
                        }
                    }
                    return this._timeline = null,
                    u
                }
                ,
                i.prototype._parseBoneTimeline = function(e) {
                    var a = this._armature.getBone(i._getString(e, t.DataParser.NAME, ""));
                    if (null !== a) {
                        if (this._bone = a,
                        this._slot = this._armature.getSlot(this._bone.name),
                        t.DataParser.TRANSLATE_FRAME in e) {
                            this._frameDefaultValue = 0,
                            this._frameValueScale = 1;
                            var r = this._parseTimeline(e, null, t.DataParser.TRANSLATE_FRAME, 11, 2, 2, this._parseDoubleValueFrame);
                            null !== r && this._animation.addBoneTimeline(a.name, r)
                        }
                        if (t.DataParser.ROTATE_FRAME in e) {
                            this._frameDefaultValue = 0,
                            this._frameValueScale = 1;
                            r = this._parseTimeline(e, null, t.DataParser.ROTATE_FRAME, 12, 2, 2, this._parseBoneRotateFrame);
                            null !== r && this._animation.addBoneTimeline(a.name, r)
                        }
                        if (t.DataParser.SCALE_FRAME in e) {
                            this._frameDefaultValue = 1,
                            this._frameValueScale = 1;
                            r = this._parseTimeline(e, null, t.DataParser.SCALE_FRAME, 13, 2, 2, this._parseBoneScaleFrame);
                            null !== r && this._animation.addBoneTimeline(a.name, r)
                        }
                        if (t.DataParser.FRAME in e) {
                            r = this._parseTimeline(e, null, t.DataParser.FRAME, 10, 2, 6, this._parseBoneAllFrame);
                            null !== r && this._animation.addBoneTimeline(a.name, r)
                        }
                        this._bone = null,
                        this._slot = null
                    }
                }
                ,
                i.prototype._parseSlotTimeline = function(e) {
                    var a = this._armature.getSlot(i._getString(e, t.DataParser.NAME, ""));
                    if (null !== a) {
                        var r = null
                          , n = null;
                        this._slot = a,
                        r = t.DataParser.DISPLAY_FRAME in e ? this._parseTimeline(e, null, t.DataParser.DISPLAY_FRAME, 20, 0, 0, this._parseSlotDisplayFrame) : this._parseTimeline(e, null, t.DataParser.FRAME, 20, 0, 0, this._parseSlotDisplayFrame),
                        n = t.DataParser.COLOR_FRAME in e ? this._parseTimeline(e, null, t.DataParser.COLOR_FRAME, 21, 1, 1, this._parseSlotColorFrame) : this._parseTimeline(e, null, t.DataParser.FRAME, 21, 1, 1, this._parseSlotColorFrame),
                        null !== r && this._animation.addSlotTimeline(a.name, r),
                        null !== n && this._animation.addSlotTimeline(a.name, n),
                        this._slot = null
                    }
                }
                ,
                i.prototype._parseFrame = function(t, e, a) {
                    var i = this._frameArray.length;
                    return this._frameArray.length += 1,
                    this._frameArray[i + 0] = e,
                    i
                }
                ,
                i.prototype._parseTweenFrame = function(e, a, r) {
                    var n = this._parseFrame(e, a, r);
                    if (r > 0)
                        if (t.DataParser.CURVE in e) {
                            var s = r + 1;
                            this._helpArray.length = s;
                            var o = this._samplingEasingCurve(e[t.DataParser.CURVE], this._helpArray);
                            this._frameArray.length += 2 + this._helpArray.length,
                            this._frameArray[n + 1] = 2,
                            this._frameArray[n + 2] = o ? s : -s;
                            for (var l = 0; l < s; ++l)
                                this._frameArray[n + 3 + l] = Math.round(1e4 * this._helpArray[l])
                        } else {
                            var h = -2
                              , u = h;
                            t.DataParser.TWEEN_EASING in e && (u = i._getNumber(e, t.DataParser.TWEEN_EASING, h)),
                            u === h ? (this._frameArray.length += 1,
                            this._frameArray[n + 1] = 0) : 0 === u ? (this._frameArray.length += 1,
                            this._frameArray[n + 1] = 1) : u < 0 ? (this._frameArray.length += 2,
                            this._frameArray[n + 1] = 3,
                            this._frameArray[n + 2] = Math.round(100 * -u)) : u <= 1 ? (this._frameArray.length += 2,
                            this._frameArray[n + 1] = 4,
                            this._frameArray[n + 2] = Math.round(100 * u)) : (this._frameArray.length += 2,
                            this._frameArray[n + 1] = 5,
                            this._frameArray[n + 2] = Math.round(100 * u - 100))
                        }
                    else
                        this._frameArray.length += 1,
                        this._frameArray[n + 1] = 0;
                    return n
                }
                ,
                i.prototype._parseSingleValueFrame = function(e, a, r) {
                    var n = 0;
                    switch (this._frameValueType) {
                    case 0:
                        n = this._parseFrame(e, a, r),
                        this._frameArray.length += 1,
                        this._frameArray[n + 1] = i._getNumber(e, t.DataParser.VALUE, this._frameDefaultValue);
                        break;
                    case 1:
                        n = this._parseTweenFrame(e, a, r);
                        var s = this._frameIntArray.length;
                        this._frameIntArray.length += 1,
                        this._frameIntArray[s] = Math.round(i._getNumber(e, t.DataParser.VALUE, this._frameDefaultValue) * this._frameValueScale);
                        break;
                    case 2:
                        n = this._parseTweenFrame(e, a, r);
                        s = this._frameFloatArray.length;
                        this._frameFloatArray.length += 1,
                        this._frameFloatArray[s] = i._getNumber(e, t.DataParser.VALUE, this._frameDefaultValue) * this._frameValueScale;
                        break
                    }
                    return n
                }
                ,
                i.prototype._parseDoubleValueFrame = function(e, a, r) {
                    var n = 0;
                    switch (this._frameValueType) {
                    case 0:
                        n = this._parseFrame(e, a, r),
                        this._frameArray.length += 2,
                        this._frameArray[n + 1] = i._getNumber(e, t.DataParser.X, this._frameDefaultValue),
                        this._frameArray[n + 2] = i._getNumber(e, t.DataParser.Y, this._frameDefaultValue);
                        break;
                    case 1:
                        n = this._parseTweenFrame(e, a, r);
                        var s = this._frameIntArray.length;
                        this._frameIntArray.length += 2,
                        this._frameIntArray[s] = Math.round(i._getNumber(e, t.DataParser.X, this._frameDefaultValue) * this._frameValueScale),
                        this._frameIntArray[s + 1] = Math.round(i._getNumber(e, t.DataParser.Y, this._frameDefaultValue) * this._frameValueScale);
                        break;
                    case 2:
                        n = this._parseTweenFrame(e, a, r);
                        s = this._frameFloatArray.length;
                        this._frameFloatArray.length += 2,
                        this._frameFloatArray[s] = i._getNumber(e, t.DataParser.X, this._frameDefaultValue) * this._frameValueScale,
                        this._frameFloatArray[s + 1] = i._getNumber(e, t.DataParser.Y, this._frameDefaultValue) * this._frameValueScale;
                        break
                    }
                    return n
                }
                ,
                i.prototype._parseActionFrame = function(t, e, a) {
                    var i = this._frameArray.length
                      , r = t.actions.length;
                    this._frameArray.length += 2 + r,
                    this._frameArray[i + 0] = e,
                    this._frameArray[i + 0 + 1] = r;
                    for (var n = 0; n < r; ++n)
                        this._frameArray[i + 0 + 2 + n] = t.actions[n];
                    return i
                }
                ,
                i.prototype._parseZOrderFrame = function(e, a, i) {
                    var r = this._parseFrame(e, a, i);
                    if (t.DataParser.Z_ORDER in e) {
                        var n = e[t.DataParser.Z_ORDER];
                        if (n.length > 0) {
                            for (var s = this._armature.sortedSlots.length, o = new Array(s - n.length / 2), l = new Array(s), h = 0; h < o.length; ++h)
                                o[h] = 0;
                            for (var u = 0; u < s; ++u)
                                l[u] = -1;
                            for (var c = 0, f = 0, m = 0, _ = n.length; m < _; m += 2) {
                                var p = n[m]
                                  , d = n[m + 1];
                                while (c !== p)
                                    o[f++] = c++;
                                var y = c + d;
                                l[y] = c++
                            }
                            while (c < s)
                                o[f++] = c++;
                            this._frameArray.length += 1 + s,
                            this._frameArray[r + 1] = s;
                            var g = s;
                            while (g--)
                                -1 === l[g] ? this._frameArray[r + 2 + g] = o[--f] || 0 : this._frameArray[r + 2 + g] = l[g] || 0;
                            return r
                        }
                    }
                    return this._frameArray.length += 1,
                    this._frameArray[r + 1] = 0,
                    r
                }
                ,
                i.prototype._parseBoneAllFrame = function(e, a, r) {
                    this._helpTransform.identity(),
                    t.DataParser.TRANSFORM in e && this._parseTransform(e[t.DataParser.TRANSFORM], this._helpTransform, 1);
                    var n = this._helpTransform.rotation;
                    0 !== a && (0 === this._prevClockwise ? n = this._prevRotation + t.Transform.normalizeRadian(n - this._prevRotation) : ((this._prevClockwise > 0 ? n >= this._prevRotation : n <= this._prevRotation) && (this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1),
                    n = this._prevRotation + n - this._prevRotation + t.Transform.PI_D * this._prevClockwise)),
                    this._prevClockwise = i._getNumber(e, t.DataParser.TWEEN_ROTATE, 0),
                    this._prevRotation = n;
                    var s = this._parseTweenFrame(e, a, r)
                      , o = this._frameFloatArray.length;
                    return this._frameFloatArray.length += 6,
                    this._frameFloatArray[o++] = this._helpTransform.x,
                    this._frameFloatArray[o++] = this._helpTransform.y,
                    this._frameFloatArray[o++] = n,
                    this._frameFloatArray[o++] = this._helpTransform.skew,
                    this._frameFloatArray[o++] = this._helpTransform.scaleX,
                    this._frameFloatArray[o++] = this._helpTransform.scaleY,
                    this._parseActionDataInFrame(e, a, this._bone, this._slot),
                    s
                }
                ,
                i.prototype._parseBoneTranslateFrame = function(e, a, r) {
                    var n = this._parseTweenFrame(e, a, r)
                      , s = this._frameFloatArray.length;
                    return this._frameFloatArray.length += 2,
                    this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.X, 0),
                    this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.Y, 0),
                    n
                }
                ,
                i.prototype._parseBoneRotateFrame = function(e, a, r) {
                    var n = i._getNumber(e, t.DataParser.ROTATE, 0) * t.Transform.DEG_RAD;
                    0 !== a && (0 === this._prevClockwise ? n = this._prevRotation + t.Transform.normalizeRadian(n - this._prevRotation) : ((this._prevClockwise > 0 ? n >= this._prevRotation : n <= this._prevRotation) && (this._prevClockwise = this._prevClockwise > 0 ? this._prevClockwise - 1 : this._prevClockwise + 1),
                    n = this._prevRotation + n - this._prevRotation + t.Transform.PI_D * this._prevClockwise)),
                    this._prevClockwise = i._getNumber(e, t.DataParser.CLOCK_WISE, 0),
                    this._prevRotation = n;
                    var s = this._parseTweenFrame(e, a, r)
                      , o = this._frameFloatArray.length;
                    return this._frameFloatArray.length += 2,
                    this._frameFloatArray[o++] = n,
                    this._frameFloatArray[o++] = i._getNumber(e, t.DataParser.SKEW, 0) * t.Transform.DEG_RAD,
                    s
                }
                ,
                i.prototype._parseBoneScaleFrame = function(e, a, r) {
                    var n = this._parseTweenFrame(e, a, r)
                      , s = this._frameFloatArray.length;
                    return this._frameFloatArray.length += 2,
                    this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.X, 1),
                    this._frameFloatArray[s++] = i._getNumber(e, t.DataParser.Y, 1),
                    n
                }
                ,
                i.prototype._parseSlotDisplayFrame = function(e, a, r) {
                    var n = this._parseFrame(e, a, r);
                    return this._frameArray.length += 1,
                    t.DataParser.VALUE in e ? this._frameArray[n + 1] = i._getNumber(e, t.DataParser.VALUE, 0) : this._frameArray[n + 1] = i._getNumber(e, t.DataParser.DISPLAY_INDEX, 0),
                    this._parseActionDataInFrame(e, a, this._slot.parent, this._slot),
                    n
                }
                ,
                i.prototype._parseSlotColorFrame = function(e, a, i) {
                    var r = this._parseTweenFrame(e, a, i)
                      , n = -1;
                    if (t.DataParser.VALUE in e || t.DataParser.COLOR in e) {
                        var s = t.DataParser.VALUE in e ? e[t.DataParser.VALUE] : e[t.DataParser.COLOR];
                        for (var o in s) {
                            this._parseColorTransform(s, this._helpColorTransform),
                            n = this._colorArray.length,
                            this._colorArray.length += 8,
                            this._colorArray[n++] = Math.round(100 * this._helpColorTransform.alphaMultiplier),
                            this._colorArray[n++] = Math.round(100 * this._helpColorTransform.redMultiplier),
                            this._colorArray[n++] = Math.round(100 * this._helpColorTransform.greenMultiplier),
                            this._colorArray[n++] = Math.round(100 * this._helpColorTransform.blueMultiplier),
                            this._colorArray[n++] = Math.round(this._helpColorTransform.alphaOffset),
                            this._colorArray[n++] = Math.round(this._helpColorTransform.redOffset),
                            this._colorArray[n++] = Math.round(this._helpColorTransform.greenOffset),
                            this._colorArray[n++] = Math.round(this._helpColorTransform.blueOffset),
                            n -= 8;
                            break
                        }
                    }
                    n < 0 && (this._defaultColorOffset < 0 && (this._defaultColorOffset = n = this._colorArray.length,
                    this._colorArray.length += 8,
                    this._colorArray[n++] = 100,
                    this._colorArray[n++] = 100,
                    this._colorArray[n++] = 100,
                    this._colorArray[n++] = 100,
                    this._colorArray[n++] = 0,
                    this._colorArray[n++] = 0,
                    this._colorArray[n++] = 0,
                    this._colorArray[n++] = 0),
                    n = this._defaultColorOffset);
                    var l = this._frameIntArray.length;
                    return this._frameIntArray.length += 1,
                    this._frameIntArray[l] = n,
                    r
                }
                ,
                i.prototype._parseSlotDeformFrame = function(e, a, r) {
                    var n = this._frameFloatArray.length
                      , s = this._parseTweenFrame(e, a, r)
                      , o = t.DataParser.VERTICES in e ? e[t.DataParser.VERTICES] : null
                      , l = i._getNumber(e, t.DataParser.OFFSET, 0)
                      , h = this._intArray[this._mesh.geometry.offset + 0]
                      , u = this._mesh.parent.name + "_" + this._slot.name + "_" + this._mesh.name
                      , c = this._mesh.geometry.weight
                      , f = 0
                      , m = 0
                      , _ = 0
                      , p = 0;
                    if (null !== c) {
                        var d = this._weightSlotPose[u];
                        this._helpMatrixA.copyFromArray(d, 0),
                        this._frameFloatArray.length += 2 * c.count,
                        _ = c.offset + 2 + c.bones.length
                    } else
                        this._frameFloatArray.length += 2 * h;
                    for (var y = 0; y < 2 * h; y += 2)
                        if (null === o ? (f = 0,
                        m = 0) : (f = y < l || y - l >= o.length ? 0 : o[y - l],
                        m = y + 1 < l || y + 1 - l >= o.length ? 0 : o[y + 1 - l]),
                        null !== c) {
                            var g = this._weightBonePoses[u]
                              , b = this._intArray[_++];
                            this._helpMatrixA.transformPoint(f, m, this._helpPoint, !0),
                            f = this._helpPoint.x,
                            m = this._helpPoint.y;
                            for (var v = 0; v < b; ++v) {
                                var D = this._intArray[_++];
                                this._helpMatrixB.copyFromArray(g, 7 * D + 1),
                                this._helpMatrixB.invert(),
                                this._helpMatrixB.transformPoint(f, m, this._helpPoint, !0),
                                this._frameFloatArray[n + p++] = this._helpPoint.x,
                                this._frameFloatArray[n + p++] = this._helpPoint.y
                            }
                        } else
                            this._frameFloatArray[n + y] = f,
                            this._frameFloatArray[n + y + 1] = m;
                    if (0 === a) {
                        var T = this._frameIntArray.length;
                        this._frameIntArray.length += 5,
                        this._frameIntArray[T + 0] = this._mesh.geometry.offset,
                        this._frameIntArray[T + 1] = this._frameFloatArray.length - n,
                        this._frameIntArray[T + 2] = this._frameFloatArray.length - n,
                        this._frameIntArray[T + 3] = 0,
                        this._frameIntArray[T + 4] = n - this._animation.frameFloatOffset,
                        this._timelineArray[this._timeline.offset + 3] = T - this._animation.frameIntOffset
                    }
                    return s
                }
                ,
                i.prototype._parseIKConstraintFrame = function(e, a, r) {
                    var n = this._parseTweenFrame(e, a, r)
                      , s = this._frameIntArray.length;
                    return this._frameIntArray.length += 2,
                    this._frameIntArray[s++] = i._getBoolean(e, t.DataParser.BEND_POSITIVE, !0) ? 1 : 0,
                    this._frameIntArray[s++] = Math.round(100 * i._getNumber(e, t.DataParser.WEIGHT, 1)),
                    n
                }
                ,
                i.prototype._parseActionData = function(e, a, r, n) {
                    var s = new Array;
                    if ("string" === typeof e) {
                        var o = t.BaseObject.borrowObject(t.ActionData);
                        o.type = a,
                        o.name = e,
                        o.bone = r,
                        o.slot = n,
                        s.push(o)
                    } else if (e instanceof Array)
                        for (var l = 0, h = e; l < h.length; l++) {
                            var u = h[l];
                            o = t.BaseObject.borrowObject(t.ActionData);
                            if (t.DataParser.GOTO_AND_PLAY in u ? (o.type = 0,
                            o.name = i._getString(u, t.DataParser.GOTO_AND_PLAY, "")) : (t.DataParser.TYPE in u && "string" === typeof u[t.DataParser.TYPE] ? o.type = t.DataParser._getActionType(u[t.DataParser.TYPE]) : o.type = i._getNumber(u, t.DataParser.TYPE, a),
                            o.name = i._getString(u, t.DataParser.NAME, "")),
                            t.DataParser.BONE in u) {
                                var c = i._getString(u, t.DataParser.BONE, "");
                                o.bone = this._armature.getBone(c)
                            } else
                                o.bone = r;
                            if (t.DataParser.SLOT in u) {
                                var f = i._getString(u, t.DataParser.SLOT, "");
                                o.slot = this._armature.getSlot(f)
                            } else
                                o.slot = n;
                            var m = null;
                            if (t.DataParser.INTS in u) {
                                null === m && (m = t.BaseObject.borrowObject(t.UserData));
                                for (var _ = u[t.DataParser.INTS], p = 0, d = _; p < d.length; p++) {
                                    var y = d[p];
                                    m.addInt(y)
                                }
                            }
                            if (t.DataParser.FLOATS in u) {
                                null === m && (m = t.BaseObject.borrowObject(t.UserData));
                                for (var g = u[t.DataParser.FLOATS], b = 0, v = g; b < v.length; b++) {
                                    y = v[b];
                                    m.addFloat(y)
                                }
                            }
                            if (t.DataParser.STRINGS in u) {
                                null === m && (m = t.BaseObject.borrowObject(t.UserData));
                                for (var D = u[t.DataParser.STRINGS], T = 0, A = D; T < A.length; T++) {
                                    y = A[T];
                                    m.addString(y)
                                }
                            }
                            o.data = m,
                            s.push(o)
                        }
                    return s
                }
                ,
                i.prototype._parseDeformFrame = function(e, a, r) {
                    var n = this._frameFloatArray.length
                      , s = this._parseTweenFrame(e, a, r)
                      , o = t.DataParser.VERTICES in e ? e[t.DataParser.VERTICES] : t.DataParser.VALUE in e ? e[t.DataParser.VALUE] : null
                      , l = i._getNumber(e, t.DataParser.OFFSET, 0)
                      , h = this._intArray[this._geometry.offset + 0]
                      , u = this._geometry.weight
                      , c = 0
                      , f = 0;
                    if (null !== u)
                        ;
                    else {
                        this._frameFloatArray.length += 2 * h;
                        for (var m = 0; m < 2 * h; m += 2)
                            null !== o ? (c = m < l || m - l >= o.length ? 0 : o[m - l],
                            f = m + 1 < l || m + 1 - l >= o.length ? 0 : o[m + 1 - l]) : (c = 0,
                            f = 0),
                            this._frameFloatArray[n + m] = c,
                            this._frameFloatArray[n + m + 1] = f
                    }
                    if (0 === a) {
                        var _ = this._frameIntArray.length;
                        this._frameIntArray.length += 5,
                        this._frameIntArray[_ + 0] = this._geometry.offset,
                        this._frameIntArray[_ + 1] = this._frameFloatArray.length - n,
                        this._frameIntArray[_ + 2] = this._frameFloatArray.length - n,
                        this._frameIntArray[_ + 3] = 0,
                        this._frameIntArray[_ + 4] = n - this._animation.frameFloatOffset,
                        this._timelineArray[this._timeline.offset + 3] = _ - this._animation.frameIntOffset
                    }
                    return s
                }
                ,
                i.prototype._parseTransform = function(e, a, r) {
                    a.x = i._getNumber(e, t.DataParser.X, 0) * r,
                    a.y = i._getNumber(e, t.DataParser.Y, 0) * r,
                    t.DataParser.ROTATE in e || t.DataParser.SKEW in e ? (a.rotation = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.ROTATE, 0) * t.Transform.DEG_RAD),
                    a.skew = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW, 0) * t.Transform.DEG_RAD)) : (t.DataParser.SKEW_X in e || t.DataParser.SKEW_Y in e) && (a.rotation = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW_Y, 0) * t.Transform.DEG_RAD),
                    a.skew = t.Transform.normalizeRadian(i._getNumber(e, t.DataParser.SKEW_X, 0) * t.Transform.DEG_RAD) - a.rotation),
                    a.scaleX = i._getNumber(e, t.DataParser.SCALE_X, 1),
                    a.scaleY = i._getNumber(e, t.DataParser.SCALE_Y, 1)
                }
                ,
                i.prototype._parseColorTransform = function(e, a) {
                    a.alphaMultiplier = .01 * i._getNumber(e, t.DataParser.ALPHA_MULTIPLIER, 100),
                    a.redMultiplier = .01 * i._getNumber(e, t.DataParser.RED_MULTIPLIER, 100),
                    a.greenMultiplier = .01 * i._getNumber(e, t.DataParser.GREEN_MULTIPLIER, 100),
                    a.blueMultiplier = .01 * i._getNumber(e, t.DataParser.BLUE_MULTIPLIER, 100),
                    a.alphaOffset = i._getNumber(e, t.DataParser.ALPHA_OFFSET, 0),
                    a.redOffset = i._getNumber(e, t.DataParser.RED_OFFSET, 0),
                    a.greenOffset = i._getNumber(e, t.DataParser.GREEN_OFFSET, 0),
                    a.blueOffset = i._getNumber(e, t.DataParser.BLUE_OFFSET, 0)
                }
                ,
                i.prototype._parseGeometry = function(e, a) {
                    var i = e[t.DataParser.VERTICES]
                      , r = Math.floor(i.length / 2)
                      , n = 0
                      , s = this._intArray.length
                      , o = this._floatArray.length;
                    a.offset = s,
                    a.data = this._data,
                    this._intArray.length += 4,
                    this._intArray[s + 0] = r,
                    this._intArray[s + 2] = o,
                    this._intArray[s + 3] = -1,
                    this._floatArray.length += 2 * r;
                    for (var l = 0, h = 2 * r; l < h; ++l)
                        this._floatArray[o + l] = i[l];
                    if (t.DataParser.TRIANGLES in e) {
                        var u = e[t.DataParser.TRIANGLES];
                        n = Math.floor(u.length / 3),
                        this._intArray.length += 3 * n;
                        for (l = 0,
                        h = 3 * n; l < h; ++l)
                            this._intArray[s + 4 + l] = u[l]
                    }
                    if (this._intArray[s + 1] = n,
                    t.DataParser.UVS in e) {
                        var c = e[t.DataParser.UVS]
                          , f = o + 2 * r;
                        this._floatArray.length += 2 * r;
                        for (l = 0,
                        h = 2 * r; l < h; ++l)
                            this._floatArray[f + l] = c[l]
                    }
                    if (t.DataParser.WEIGHTS in e) {
                        var m = e[t.DataParser.WEIGHTS]
                          , _ = Math.floor(m.length - r) / 2
                          , p = this._intArray.length
                          , d = this._floatArray.length
                          , y = 0
                          , g = this._armature.sortedBones
                          , b = t.BaseObject.borrowObject(t.WeightData);
                        if (b.count = _,
                        b.offset = p,
                        this._intArray.length += 2 + y + r + _,
                        this._intArray[p + 1] = d,
                        t.DataParser.BONE_POSE in e) {
                            var v = e[t.DataParser.SLOT_POSE]
                              , D = e[t.DataParser.BONE_POSE]
                              , T = new Array;
                            y = Math.floor(D.length / 7),
                            T.length = y;
                            for (l = 0; l < y; ++l) {
                                var A = D[7 * l]
                                  , P = this._rawBones[A];
                                b.addBone(P),
                                T[l] = A,
                                this._intArray[p + 2 + l] = g.indexOf(P)
                            }
                            this._floatArray.length += 3 * _,
                            this._helpMatrixA.copyFromArray(v, 0);
                            l = 0;
                            for (var O = 0, S = p + 2 + y, x = d; l < r; ++l) {
                                var w = 2 * l
                                  , E = this._intArray[S++] = m[O++]
                                  , C = this._floatArray[o + w]
                                  , I = this._floatArray[o + w + 1];
                                this._helpMatrixA.transformPoint(C, I, this._helpPoint),
                                C = this._helpPoint.x,
                                I = this._helpPoint.y;
                                for (var M = 0; M < E; ++M) {
                                    A = m[O++];
                                    var B = T.indexOf(A);
                                    this._helpMatrixB.copyFromArray(D, 7 * B + 1),
                                    this._helpMatrixB.invert(),
                                    this._helpMatrixB.transformPoint(C, I, this._helpPoint),
                                    this._intArray[S++] = B,
                                    this._floatArray[x++] = m[O++],
                                    this._floatArray[x++] = this._helpPoint.x,
                                    this._floatArray[x++] = this._helpPoint.y
                                }
                            }
                        } else {
                            var F = e[t.DataParser.BONES];
                            y = F.length;
                            for (l = 0; l < y; l++) {
                                A = F[l],
                                P = this._rawBones[A];
                                b.addBone(P),
                                this._intArray[p + 2 + l] = g.indexOf(P)
                            }
                            this._floatArray.length += 3 * _;
                            l = 0,
                            O = 0,
                            x = 0,
                            S = p + 2 + y;
                            for (var k = d; l < _; l++) {
                                E = m[O++];
                                this._intArray[S++] = E;
                                for (M = 0; M < E; M++) {
                                    B = m[O++];
                                    var R = m[O++];
                                    C = i[x++],
                                    I = i[x++];
                                    this._intArray[S++] = F.indexOf(B),
                                    this._floatArray[k++] = R,
                                    this._floatArray[k++] = C,
                                    this._floatArray[k++] = I
                                }
                            }
                        }
                        a.weight = b
                    }
                }
                ,
                i.prototype._parseArray = function(t) {
                    this._intArray.length = 0,
                    this._floatArray.length = 0,
                    this._frameIntArray.length = 0,
                    this._frameFloatArray.length = 0,
                    this._frameArray.length = 0,
                    this._timelineArray.length = 0,
                    this._colorArray.length = 0
                }
                ,
                i.prototype._modifyArray = function() {
                    this._intArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._intArray.push(0),
                    this._frameIntArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._frameIntArray.push(0),
                    this._frameArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._frameArray.push(0),
                    this._timelineArray.length % Uint16Array.BYTES_PER_ELEMENT !== 0 && this._timelineArray.push(0),
                    this._timelineArray.length % Int16Array.BYTES_PER_ELEMENT !== 0 && this._colorArray.push(0);
                    for (var t = this._intArray.length * Int16Array.BYTES_PER_ELEMENT, e = this._floatArray.length * Float32Array.BYTES_PER_ELEMENT, a = this._frameIntArray.length * Int16Array.BYTES_PER_ELEMENT, i = this._frameFloatArray.length * Float32Array.BYTES_PER_ELEMENT, r = this._frameArray.length * Int16Array.BYTES_PER_ELEMENT, n = this._timelineArray.length * Uint16Array.BYTES_PER_ELEMENT, s = this._colorArray.length * Int16Array.BYTES_PER_ELEMENT, o = t + e + a + i + r + n + s, l = new ArrayBuffer(o), h = new Int16Array(l,0,this._intArray.length), u = new Float32Array(l,t,this._floatArray.length), c = new Int16Array(l,t + e,this._frameIntArray.length), f = new Float32Array(l,t + e + a,this._frameFloatArray.length), m = new Int16Array(l,t + e + a + i,this._frameArray.length), _ = new Uint16Array(l,t + e + a + i + r,this._timelineArray.length), p = new Int16Array(l,t + e + a + i + r + n,this._colorArray.length), d = 0, y = this._intArray.length; d < y; ++d)
                        h[d] = this._intArray[d];
                    for (d = 0,
                    y = this._floatArray.length; d < y; ++d)
                        u[d] = this._floatArray[d];
                    for (d = 0,
                    y = this._frameIntArray.length; d < y; ++d)
                        c[d] = this._frameIntArray[d];
                    for (d = 0,
                    y = this._frameFloatArray.length; d < y; ++d)
                        f[d] = this._frameFloatArray[d];
                    for (d = 0,
                    y = this._frameArray.length; d < y; ++d)
                        m[d] = this._frameArray[d];
                    for (d = 0,
                    y = this._timelineArray.length; d < y; ++d)
                        _[d] = this._timelineArray[d];
                    for (d = 0,
                    y = this._colorArray.length; d < y; ++d)
                        p[d] = this._colorArray[d];
                    this._data.binary = l,
                    this._data.intArray = h,
                    this._data.floatArray = u,
                    this._data.frameIntArray = c,
                    this._data.frameFloatArray = f,
                    this._data.frameArray = m,
                    this._data.timelineArray = _,
                    this._data.colorArray = p,
                    this._defaultColorOffset = -1
                }
                ,
                i.prototype.parseDragonBonesData = function(e, a) {
                    void 0 === a && (a = 1),
                    console.assert(null !== e && void 0 !== e, "Data error.");
                    var r = i._getString(e, t.DataParser.VERSION, "")
                      , n = i._getString(e, t.DataParser.COMPATIBLE_VERSION, "");
                    if (t.DataParser.DATA_VERSIONS.indexOf(r) >= 0 || t.DataParser.DATA_VERSIONS.indexOf(n) >= 0) {
                        var s = t.BaseObject.borrowObject(t.DragonBonesData);
                        if (s.version = r,
                        s.name = i._getString(e, t.DataParser.NAME, ""),
                        s.frameRate = i._getNumber(e, t.DataParser.FRAME_RATE, 24),
                        0 === s.frameRate && (s.frameRate = 24),
                        t.DataParser.ARMATURE in e) {
                            this._data = s,
                            this._parseArray(e);
                            for (var o = e[t.DataParser.ARMATURE], l = 0, h = o; l < h.length; l++) {
                                var u = h[l];
                                s.addArmature(this._parseArmature(u, a))
                            }
                            this._data.binary || this._modifyArray(),
                            t.DataParser.STAGE in e ? s.stage = s.getArmature(i._getString(e, t.DataParser.STAGE, "")) : s.armatureNames.length > 0 && (s.stage = s.getArmature(s.armatureNames[0])),
                            this._data = null
                        }
                        return t.DataParser.TEXTURE_ATLAS in e && (this._rawTextureAtlases = e[t.DataParser.TEXTURE_ATLAS]),
                        s
                    }
                    return console.assert(!1, "Nonsupport data version: " + r + "\nPlease convert DragonBones data to support version.\nRead more: https://github.com/DragonBones/Tools/"),
                    null
                }
                ,
                i.prototype.parseTextureAtlasData = function(e, a, r) {
                    if (void 0 === r && (r = 1),
                    console.assert(void 0 !== e),
                    null === e) {
                        if (null === this._rawTextureAtlases || 0 === this._rawTextureAtlases.length)
                            return !1;
                        var n = this._rawTextureAtlases[this._rawTextureAtlasIndex++];
                        return this.parseTextureAtlasData(n, a, r),
                        this._rawTextureAtlasIndex >= this._rawTextureAtlases.length && (this._rawTextureAtlasIndex = 0,
                        this._rawTextureAtlases = null),
                        !0
                    }
                    if (a.width = i._getNumber(e, t.DataParser.WIDTH, 0),
                    a.height = i._getNumber(e, t.DataParser.HEIGHT, 0),
                    a.scale = 1 === r ? 1 / i._getNumber(e, t.DataParser.SCALE, 1) : r,
                    a.name = i._getString(e, t.DataParser.NAME, ""),
                    a.imagePath = i._getString(e, t.DataParser.IMAGE_PATH, ""),
                    t.DataParser.SUB_TEXTURE in e)
                        for (var s = e[t.DataParser.SUB_TEXTURE], o = 0, l = s.length; o < l; ++o) {
                            var h = s[o]
                              , u = i._getNumber(h, t.DataParser.FRAME_WIDTH, -1)
                              , c = i._getNumber(h, t.DataParser.FRAME_HEIGHT, -1)
                              , f = a.createTexture();
                            f.rotated = i._getBoolean(h, t.DataParser.ROTATED, !1),
                            f.name = i._getString(h, t.DataParser.NAME, ""),
                            f.region.x = i._getNumber(h, t.DataParser.X, 0),
                            f.region.y = i._getNumber(h, t.DataParser.Y, 0),
                            f.region.width = i._getNumber(h, t.DataParser.WIDTH, 0),
                            f.region.height = i._getNumber(h, t.DataParser.HEIGHT, 0),
                            u > 0 && c > 0 && (f.frame = t.TextureData.createRectangle(),
                            f.frame.x = i._getNumber(h, t.DataParser.FRAME_X, 0),
                            f.frame.y = i._getNumber(h, t.DataParser.FRAME_Y, 0),
                            f.frame.width = u,
                            f.frame.height = c),
                            a.addTexture(f)
                        }
                    return !0
                }
                ,
                i.getInstance = function() {
                    return null === i._objectDataParserInstance && (i._objectDataParserInstance = new i),
                    i._objectDataParserInstance
                }
                ,
                i._objectDataParserInstance = null,
                i
            }(t.DataParser);
            t.ObjectDataParser = e;
            var a = function() {
                function t() {
                    this.frameStart = 0,
                    this.actions = []
                }
                return t
            }();
            t.ActionFrame = a
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.prototype._inRange = function(t, e, a) {
                    return e <= t && t <= a
                }
                ,
                a.prototype._decodeUTF8 = function(t) {
                    var e, a = -1, i = -1, r = 65533, n = 0, s = "", o = 0, l = 0, h = 0, u = 0;
                    while (t.length > n) {
                        var c = t[n++];
                        if (c === a)
                            e = 0 !== l ? r : i;
                        else if (0 === l)
                            this._inRange(c, 0, 127) ? e = c : (this._inRange(c, 194, 223) ? (l = 1,
                            u = 128,
                            o = c - 192) : this._inRange(c, 224, 239) ? (l = 2,
                            u = 2048,
                            o = c - 224) : this._inRange(c, 240, 244) && (l = 3,
                            u = 65536,
                            o = c - 240),
                            o *= Math.pow(64, l),
                            e = null);
                        else if (this._inRange(c, 128, 191))
                            if (h += 1,
                            o += (c - 128) * Math.pow(64, l - h),
                            h !== l)
                                e = null;
                            else {
                                var f = o
                                  , m = u;
                                o = 0,
                                l = 0,
                                h = 0,
                                u = 0,
                                e = this._inRange(f, m, 1114111) && !this._inRange(f, 55296, 57343) ? f : c
                            }
                        else
                            o = 0,
                            l = 0,
                            h = 0,
                            u = 0,
                            n--,
                            e = c;
                        null !== e && e !== i && (e <= 65535 ? e > 0 && (s += String.fromCharCode(e)) : (e -= 65536,
                        s += String.fromCharCode(55296 + (e >> 10 & 1023)),
                        s += String.fromCharCode(56320 + (1023 & e))))
                    }
                    return s
                }
                ,
                a.prototype._parseBinaryTimeline = function(e, a, i) {
                    void 0 === i && (i = null);
                    var r = null !== i ? i : t.BaseObject.borrowObject(t.TimelineData);
                    r.type = e,
                    r.offset = a,
                    this._timeline = r;
                    var n = this._timelineArrayBuffer[r.offset + 2];
                    if (1 === n)
                        r.frameIndicesOffset = -1;
                    else {
                        var s = 0
                          , o = this._animation.frameCount + 1
                          , l = this._data.frameIndices;
                        s = l.length,
                        l.length += o,
                        r.frameIndicesOffset = s;
                        for (var h = 0, u = 0, c = 0, f = 0; h < o; ++h)
                            c + f <= h && u < n && (c = this._frameArrayBuffer[this._animation.frameOffset + this._timelineArrayBuffer[r.offset + 5 + u]],
                            f = u === n - 1 ? this._animation.frameCount - c : this._frameArrayBuffer[this._animation.frameOffset + this._timelineArrayBuffer[r.offset + 5 + u + 1]] - c,
                            u++),
                            l[s + h] = u - 1
                    }
                    return this._timeline = null,
                    r
                }
                ,
                a.prototype._parseAnimation = function(e) {
                    var a = t.BaseObject.borrowObject(t.AnimationData);
                    a.blendType = t.DataParser._getAnimationBlendType(t.ObjectDataParser._getString(e, t.DataParser.BLEND_TYPE, "")),
                    a.frameCount = t.ObjectDataParser._getNumber(e, t.DataParser.DURATION, 0),
                    a.playTimes = t.ObjectDataParser._getNumber(e, t.DataParser.PLAY_TIMES, 1),
                    a.duration = a.frameCount / this._armature.frameRate,
                    a.fadeInTime = t.ObjectDataParser._getNumber(e, t.DataParser.FADE_IN_TIME, 0),
                    a.scale = t.ObjectDataParser._getNumber(e, t.DataParser.SCALE, 1),
                    a.name = t.ObjectDataParser._getString(e, t.DataParser.NAME, t.DataParser.DEFAULT_NAME),
                    0 === a.name.length && (a.name = t.DataParser.DEFAULT_NAME);
                    var i = e[t.DataParser.OFFSET];
                    if (a.frameIntOffset = i[0],
                    a.frameFloatOffset = i[1],
                    a.frameOffset = i[2],
                    this._animation = a,
                    t.DataParser.ACTION in e && (a.actionTimeline = this._parseBinaryTimeline(0, e[t.DataParser.ACTION])),
                    t.DataParser.Z_ORDER in e && (a.zOrderTimeline = this._parseBinaryTimeline(1, e[t.DataParser.Z_ORDER])),
                    t.DataParser.BONE in e) {
                        var r = e[t.DataParser.BONE];
                        for (var n in r) {
                            var s = r[n]
                              , o = this._armature.getBone(n);
                            if (null !== o)
                                for (var l = 0, h = s.length; l < h; l += 2) {
                                    var u = s[l]
                                      , c = s[l + 1]
                                      , f = this._parseBinaryTimeline(u, c);
                                    this._animation.addBoneTimeline(o.name, f)
                                }
                        }
                    }
                    if (t.DataParser.SLOT in e) {
                        r = e[t.DataParser.SLOT];
                        for (var n in r) {
                            s = r[n];
                            var m = this._armature.getSlot(n);
                            if (null !== m)
                                for (l = 0,
                                h = s.length; l < h; l += 2) {
                                    u = s[l],
                                    c = s[l + 1],
                                    f = this._parseBinaryTimeline(u, c);
                                    this._animation.addSlotTimeline(m.name, f)
                                }
                        }
                    }
                    if (t.DataParser.CONSTRAINT in e) {
                        r = e[t.DataParser.CONSTRAINT];
                        for (var n in r) {
                            s = r[n];
                            var _ = this._armature.getConstraint(n);
                            if (null !== _)
                                for (l = 0,
                                h = s.length; l < h; l += 2) {
                                    u = s[l],
                                    c = s[l + 1],
                                    f = this._parseBinaryTimeline(u, c);
                                    this._animation.addConstraintTimeline(_.name, f)
                                }
                        }
                    }
                    if (t.DataParser.TIMELINE in e) {
                        s = e[t.DataParser.TIMELINE];
                        for (var p = 0, d = s; p < d.length; p++) {
                            var y = d[p];
                            c = t.ObjectDataParser._getNumber(y, t.DataParser.OFFSET, 0);
                            if (c >= 0) {
                                u = t.ObjectDataParser._getNumber(y, t.DataParser.TYPE, 0);
                                var g = t.ObjectDataParser._getString(y, t.DataParser.NAME, "");
                                f = null;
                                if (40 === u && 0 !== a.blendType) {
                                    f = t.BaseObject.borrowObject(t.AnimationTimelineData);
                                    var b = f;
                                    b.x = t.ObjectDataParser._getNumber(y, t.DataParser.X, 0),
                                    b.y = t.ObjectDataParser._getNumber(y, t.DataParser.Y, 0)
                                }
                                switch (f = this._parseBinaryTimeline(u, c, f),
                                u) {
                                case 0:
                                    break;
                                case 1:
                                    break;
                                case 11:
                                case 12:
                                case 13:
                                case 50:
                                case 60:
                                    this._animation.addBoneTimeline(g, f);
                                    break;
                                case 20:
                                case 21:
                                case 22:
                                case 23:
                                case 24:
                                    this._animation.addSlotTimeline(g, f);
                                    break;
                                case 30:
                                    this._animation.addConstraintTimeline(g, f);
                                    break;
                                case 40:
                                case 41:
                                case 42:
                                    this._animation.addAnimationTimeline(g, f);
                                    break
                                }
                            }
                        }
                    }
                    return this._animation = null,
                    a
                }
                ,
                a.prototype._parseGeometry = function(e, a) {
                    a.offset = e[t.DataParser.OFFSET],
                    a.data = this._data;
                    var i = this._intArrayBuffer[a.offset + 3];
                    if (i >= 0) {
                        var r = t.BaseObject.borrowObject(t.WeightData)
                          , n = this._intArrayBuffer[a.offset + 0]
                          , s = this._intArrayBuffer[i + 0];
                        r.offset = i;
                        for (var o = 0; o < s; ++o) {
                            var l = this._intArrayBuffer[i + 2 + o];
                            r.addBone(this._rawBones[l])
                        }
                        for (var h = i + 2 + s, u = 0, c = (o = 0,
                        n); o < c; ++o) {
                            var f = this._intArrayBuffer[h++];
                            u += f,
                            h += f
                        }
                        r.count = u,
                        a.weight = r
                    }
                }
                ,
                a.prototype._parseArray = function(e) {
                    var a = e[t.DataParser.OFFSET]
                      , i = a[1]
                      , r = a[3]
                      , n = a[5]
                      , s = a[7]
                      , o = a[9]
                      , l = a[11]
                      , h = a.length > 12 ? a[13] : 0
                      , u = new Int16Array(this._binary,this._binaryOffset + a[0],i / Int16Array.BYTES_PER_ELEMENT)
                      , c = new Float32Array(this._binary,this._binaryOffset + a[2],r / Float32Array.BYTES_PER_ELEMENT)
                      , f = new Int16Array(this._binary,this._binaryOffset + a[4],n / Int16Array.BYTES_PER_ELEMENT)
                      , m = new Float32Array(this._binary,this._binaryOffset + a[6],s / Float32Array.BYTES_PER_ELEMENT)
                      , _ = new Int16Array(this._binary,this._binaryOffset + a[8],o / Int16Array.BYTES_PER_ELEMENT)
                      , p = new Uint16Array(this._binary,this._binaryOffset + a[10],l / Uint16Array.BYTES_PER_ELEMENT)
                      , d = h > 0 ? new Int16Array(this._binary,this._binaryOffset + a[12],h / Int16Array.BYTES_PER_ELEMENT) : u;
                    this._data.binary = this._binary,
                    this._data.intArray = this._intArrayBuffer = u,
                    this._data.floatArray = c,
                    this._data.frameIntArray = f,
                    this._data.frameFloatArray = m,
                    this._data.frameArray = this._frameArrayBuffer = _,
                    this._data.timelineArray = this._timelineArrayBuffer = p,
                    this._data.colorArray = d
                }
                ,
                a.prototype.parseDragonBonesData = function(t, a) {
                    void 0 === a && (a = 1),
                    console.assert(null !== t && void 0 !== t && t instanceof ArrayBuffer, "Data error.");
                    var i = new Uint8Array(t,0,8);
                    if (i[0] !== "D".charCodeAt(0) || i[1] !== "B".charCodeAt(0) || i[2] !== "D".charCodeAt(0) || i[3] !== "T".charCodeAt(0))
                        return console.assert(!1, "Nonsupport data."),
                        null;
                    var r = new Uint32Array(t,8,1)[0]
                      , n = new Uint8Array(t,12,r)
                      , s = this._decodeUTF8(n)
                      , o = JSON.parse(s);
                    return this._binaryOffset = 12 + r,
                    this._binary = t,
                    e.prototype.parseDragonBonesData.call(this, o, a)
                }
                ,
                a.getInstance = function() {
                    return null === a._binaryDataParserInstance && (a._binaryDataParserInstance = new a),
                    a._binaryDataParserInstance
                }
                ,
                a._binaryDataParserInstance = null,
                a
            }(t.ObjectDataParser);
            t.BinaryDataParser = e
        }(S || (S = {})),
        function(t) {
            var e = function() {
                function e(a) {
                    void 0 === a && (a = null),
                    this.autoSearch = !1,
                    this._dragonBonesDataMap = {},
                    this._textureAtlasDataMap = {},
                    this._dragonBones = null,
                    this._dataParser = null,
                    null === e._objectParser && (e._objectParser = new t.ObjectDataParser),
                    null === e._binaryParser && (e._binaryParser = new t.BinaryDataParser),
                    this._dataParser = null !== a ? a : e._objectParser
                }
                return e.prototype._isSupportMesh = function() {
                    return !0
                }
                ,
                e.prototype._getTextureData = function(t, e) {
                    if (t in this._textureAtlasDataMap)
                        for (var a = 0, i = this._textureAtlasDataMap[t]; a < i.length; a++) {
                            var r = i[a]
                              , n = r.getTexture(e);
                            if (null !== n)
                                return n
                        }
                    if (this.autoSearch)
                        for (var s in this._textureAtlasDataMap)
                            for (var o = 0, l = this._textureAtlasDataMap[s]; o < l.length; o++) {
                                r = l[o];
                                if (r.autoSearch) {
                                    n = r.getTexture(e);
                                    if (null !== n)
                                        return n
                                }
                            }
                    return null
                }
                ,
                e.prototype._fillBuildArmaturePackage = function(t, e, a, i, r) {
                    var n = null
                      , s = null;
                    if (e.length > 0 && e in this._dragonBonesDataMap && (n = this._dragonBonesDataMap[e],
                    s = n.getArmature(a)),
                    null === s && (0 === e.length || this.autoSearch))
                        for (var o in this._dragonBonesDataMap)
                            if (n = this._dragonBonesDataMap[o],
                            (0 === e.length || n.autoSearch) && (s = n.getArmature(a),
                            null !== s)) {
                                e = o;
                                break
                            }
                    if (null !== s) {
                        if (t.dataName = e,
                        t.textureAtlasName = r,
                        t.data = n,
                        t.armature = s,
                        t.skin = null,
                        i.length > 0 && (t.skin = s.getSkin(i),
                        null === t.skin && this.autoSearch))
                            for (var o in this._dragonBonesDataMap) {
                                var l = this._dragonBonesDataMap[o]
                                  , h = l.getArmature(i);
                                if (null !== h) {
                                    t.skin = h.defaultSkin;
                                    break
                                }
                            }
                        return null === t.skin && (t.skin = s.defaultSkin),
                        !0
                    }
                    return !1
                }
                ,
                e.prototype._buildBones = function(e, a) {
                    for (var i = 0, r = e.armature.sortedBones; i < r.length; i++) {
                        var n = r[i]
                          , s = t.BaseObject.borrowObject(0 === n.type ? t.Bone : t.Surface);
                        s.init(n, a)
                    }
                }
                ,
                e.prototype._buildSlots = function(t, e) {
                    var a = t.skin
                      , i = t.armature.defaultSkin;
                    if (null !== a && null !== i) {
                        var r = {};
                        for (var n in i.displays) {
                            var s = i.getDisplays(n);
                            r[n] = s
                        }
                        if (a !== i)
                            for (var n in a.displays) {
                                s = a.getDisplays(n);
                                r[n] = s
                            }
                        for (var o = 0, l = t.armature.sortedSlots; o < l.length; o++) {
                            var h = l[o]
                              , u = h.name in r ? r[h.name] : null
                              , c = this._buildSlot(t, h, e);
                            if (null !== u) {
                                c.displayFrameCount = u.length;
                                for (var f = 0, m = c.displayFrameCount; f < m; ++f) {
                                    var _ = u[f];
                                    if (c.replaceRawDisplayData(_, f),
                                    null !== _) {
                                        if (t.textureAtlasName.length > 0) {
                                            var p = this._getTextureData(t.textureAtlasName, _.path);
                                            c.replaceTextureData(p, f)
                                        }
                                        var d = this._getSlotDisplay(t, _, c);
                                        c.replaceDisplay(d, f)
                                    } else
                                        c.replaceDisplay(null)
                                }
                            }
                            c._setDisplayIndex(h.displayIndex, !0)
                        }
                    }
                }
                ,
                e.prototype._buildConstraints = function(e, a) {
                    var i = e.armature.constraints;
                    for (var r in i) {
                        var n = i[r];
                        switch (n.type) {
                        case 0:
                            var s = t.BaseObject.borrowObject(t.IKConstraint);
                            s.init(n, a),
                            a._addConstraint(s);
                            break;
                        case 1:
                            var o = t.BaseObject.borrowObject(t.PathConstraint);
                            o.init(n, a),
                            a._addConstraint(o);
                            break;
                        default:
                            var l = t.BaseObject.borrowObject(t.IKConstraint);
                            l.init(n, a),
                            a._addConstraint(l);
                            break
                        }
                    }
                }
                ,
                e.prototype._buildChildArmature = function(t, e, a) {
                    return this.buildArmature(a.path, null !== t ? t.dataName : "", "", null !== t ? t.textureAtlasName : "")
                }
                ,
                e.prototype._getSlotDisplay = function(e, a, i) {
                    var r = null !== e ? e.dataName : a.parent.parent.parent.name
                      , n = null;
                    switch (a.type) {
                    case 0:
                        var s = a;
                        null === s.texture && (s.texture = this._getTextureData(r, a.path)),
                        n = i.rawDisplay;
                        break;
                    case 2:
                        var o = a;
                        null === o.texture && (o.texture = this._getTextureData(r, o.path)),
                        n = this._isSupportMesh() ? i.meshDisplay : i.rawDisplay;
                        break;
                    case 1:
                        var l = a
                          , h = this._buildChildArmature(e, i, l);
                        if (null !== h) {
                            if (h.inheritAnimation = l.inheritAnimation,
                            !h.inheritAnimation) {
                                var u = l.actions.length > 0 ? l.actions : h.armatureData.defaultActions;
                                if (u.length > 0)
                                    for (var c = 0, f = u; c < f.length; c++) {
                                        var m = f[c]
                                          , _ = t.BaseObject.borrowObject(t.EventObject);
                                        t.EventObject.actionDataToInstance(m, _, i.armature),
                                        _.slot = i,
                                        i.armature._bufferAction(_, !1)
                                    }
                                else
                                    h.animation.play()
                            }
                            l.armature = h.armatureData
                        }
                        n = h;
                        break
                    }
                    return n
                }
                ,
                e.prototype.parseDragonBonesData = function(t, a, i) {
                    void 0 === a && (a = null),
                    void 0 === i && (i = 1);
                    var r = t instanceof ArrayBuffer ? e._binaryParser : this._dataParser
                      , n = r.parseDragonBonesData(t, i);
                    while (1) {
                        var s = this._buildTextureAtlasData(null, null);
                        if (!r.parseTextureAtlasData(null, s, i)) {
                            s.returnToPool();
                            break
                        }
                        this.addTextureAtlasData(s, a)
                    }
                    return null !== n && this.addDragonBonesData(n, a),
                    n
                }
                ,
                e.prototype.parseTextureAtlasData = function(t, e, a, i) {
                    void 0 === a && (a = null),
                    void 0 === i && (i = 1);
                    var r = this._buildTextureAtlasData(null, null);
                    return this._dataParser.parseTextureAtlasData(t, r, i),
                    this._buildTextureAtlasData(r, e || null),
                    this.addTextureAtlasData(r, a),
                    r
                }
                ,
                e.prototype.updateTextureAtlases = function(t, e) {
                    var a = this.getTextureAtlasData(e);
                    if (null !== a)
                        for (var i = 0, r = a.length; i < r; ++i)
                            i < t.length && this._buildTextureAtlasData(a[i], t[i])
                }
                ,
                e.prototype.getDragonBonesData = function(t) {
                    return t in this._dragonBonesDataMap ? this._dragonBonesDataMap[t] : null
                }
                ,
                e.prototype.addDragonBonesData = function(t, e) {
                    if (void 0 === e && (e = null),
                    e = null !== e ? e : t.name,
                    e in this._dragonBonesDataMap) {
                        if (this._dragonBonesDataMap[e] === t)
                            return;
                        console.warn("Can not add same name data: " + e)
                    } else
                        this._dragonBonesDataMap[e] = t
                }
                ,
                e.prototype.removeDragonBonesData = function(t, e) {
                    void 0 === e && (e = !0),
                    t in this._dragonBonesDataMap && (e && this._dragonBones.bufferObject(this._dragonBonesDataMap[t]),
                    delete this._dragonBonesDataMap[t])
                }
                ,
                e.prototype.getTextureAtlasData = function(t) {
                    return t in this._textureAtlasDataMap ? this._textureAtlasDataMap[t] : null
                }
                ,
                e.prototype.addTextureAtlasData = function(t, e) {
                    void 0 === e && (e = null),
                    e = null !== e ? e : t.name;
                    var a = e in this._textureAtlasDataMap ? this._textureAtlasDataMap[e] : this._textureAtlasDataMap[e] = [];
                    a.indexOf(t) < 0 && a.push(t)
                }
                ,
                e.prototype.removeTextureAtlasData = function(t, e) {
                    if (void 0 === e && (e = !0),
                    t in this._textureAtlasDataMap) {
                        var a = this._textureAtlasDataMap[t];
                        if (e)
                            for (var i = 0, r = a; i < r.length; i++) {
                                var n = r[i];
                                this._dragonBones.bufferObject(n)
                            }
                        delete this._textureAtlasDataMap[t]
                    }
                }
                ,
                e.prototype.getArmatureData = function(t, e) {
                    void 0 === e && (e = "");
                    var i = new a;
                    return this._fillBuildArmaturePackage(i, e, t, "", "") ? i.armature : null
                }
                ,
                e.prototype.clear = function(t) {
                    for (var e in void 0 === t && (t = !0),
                    this._dragonBonesDataMap)
                        t && this._dragonBones.bufferObject(this._dragonBonesDataMap[e]),
                        delete this._dragonBonesDataMap[e];
                    for (var e in this._textureAtlasDataMap) {
                        if (t)
                            for (var a = this._textureAtlasDataMap[e], i = 0, r = a; i < r.length; i++) {
                                var n = r[i];
                                this._dragonBones.bufferObject(n)
                            }
                        delete this._textureAtlasDataMap[e]
                    }
                }
                ,
                e.prototype.buildArmature = function(t, e, i, r) {
                    void 0 === e && (e = ""),
                    void 0 === i && (i = ""),
                    void 0 === r && (r = "");
                    var n = new a;
                    if (!this._fillBuildArmaturePackage(n, e || "", t, i || "", r || ""))
                        return console.warn("No armature data: " + t + ", " + (null !== e ? e : "")),
                        null;
                    var s = this._buildArmature(n);
                    return this._buildBones(n, s),
                    this._buildSlots(n, s),
                    this._buildConstraints(n, s),
                    s.invalidUpdate(null, !0),
                    s.advanceTime(0),
                    s
                }
                ,
                e.prototype.replaceDisplay = function(t, e, a) {
                    if (void 0 === a && (a = -1),
                    a < 0 && (a = t.displayIndex),
                    a < 0 && (a = 0),
                    t.replaceDisplayData(e, a),
                    null !== e) {
                        var i = this._getSlotDisplay(null, e, t);
                        if (0 === e.type) {
                            var r = t.getDisplayFrameAt(a).rawDisplayData;
                            null !== r && 2 === r.type && (i = t.meshDisplay)
                        }
                        t.replaceDisplay(i, a)
                    } else
                        t.replaceDisplay(null, a)
                }
                ,
                e.prototype.replaceSlotDisplay = function(t, e, a, i, r, n) {
                    void 0 === n && (n = -1);
                    var s = this.getArmatureData(e, t || "");
                    if (null === s || null === s.defaultSkin)
                        return !1;
                    var o = s.defaultSkin.getDisplay(a, i);
                    return this.replaceDisplay(r, o, n),
                    !0
                }
                ,
                e.prototype.replaceSlotDisplayList = function(t, e, a, i) {
                    var r = this.getArmatureData(e, t || "");
                    if (!r || !r.defaultSkin)
                        return !1;
                    var n = r.defaultSkin.getDisplays(a);
                    if (!n)
                        return !1;
                    i.displayFrameCount = n.length;
                    for (var s = 0, o = i.displayFrameCount; s < o; ++s) {
                        var l = n[s];
                        this.replaceDisplay(i, l, s)
                    }
                    return !0
                }
                ,
                e.prototype.replaceSkin = function(t, e, a, i) {
                    void 0 === a && (a = !1),
                    void 0 === i && (i = null);
                    for (var r = !1, n = e.parent.defaultSkin, s = 0, o = t.getSlots(); s < o.length; s++) {
                        var l = o[s];
                        if (!(null !== i && i.indexOf(l.name) >= 0)) {
                            var h = e.getDisplays(l.name);
                            if (null !== h || (null !== n && e !== n && (h = n.getDisplays(l.name)),
                            null !== h)) {
                                l.displayFrameCount = h.length;
                                for (var u = 0, c = l.displayFrameCount; u < c; ++u) {
                                    var f = h[u];
                                    l.replaceRawDisplayData(f, u),
                                    null !== f ? l.replaceDisplay(this._getSlotDisplay(null, f, l), u) : l.replaceDisplay(null, u)
                                }
                                r = !0
                            } else
                                a && (l.displayFrameCount = 0)
                        }
                    }
                    return r
                }
                ,
                e.prototype.replaceAnimation = function(e, a, i) {
                    void 0 === i && (i = !0);
                    var r = a.defaultSkin;
                    if (null === r)
                        return !1;
                    if (i)
                        e.animation.animations = a.animations;
                    else {
                        var n = e.animation.animations
                          , s = {};
                        for (var o in n)
                            s[o] = n[o];
                        for (var o in a.animations)
                            s[o] = a.animations[o];
                        e.animation.animations = s
                    }
                    for (var l = 0, h = e.getSlots(); l < h.length; l++)
                        for (var u = h[l], c = 0, f = 0, m = u.displayList; f < m.length; f++) {
                            var _ = m[f];
                            if (_ instanceof t.Armature) {
                                var p = r.getDisplays(u.name);
                                if (null !== p && c < p.length) {
                                    var d = p[c];
                                    if (null !== d && 1 === d.type) {
                                        var y = this.getArmatureData(d.path, d.parent.parent.parent.name);
                                        y && this.replaceAnimation(_, y, i)
                                    }
                                }
                            }
                            c++
                        }
                    return !0
                }
                ,
                e.prototype.getAllDragonBonesData = function() {
                    return this._dragonBonesDataMap
                }
                ,
                e.prototype.getAllTextureAtlasData = function() {
                    return this._textureAtlasDataMap
                }
                ,
                Object.defineProperty(e.prototype, "clock", {
                    get: function() {
                        return this._dragonBones.clock
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(e.prototype, "dragonBones", {
                    get: function() {
                        return this._dragonBones
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                e._objectParser = null,
                e._binaryParser = null,
                e
            }();
            t.BaseFactory = e;
            var a = function() {
                function t() {
                    this.dataName = "",
                    this.textureAtlasName = "",
                    this.skin = null
                }
                return t
            }();
            t.BuildArmaturePackage = a
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function i() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t._renderTexture = null,
                    t
                }
                return x(i, e),
                i.toString = function() {
                    return "[class dragonBones.PixiTextureAtlasData]"
                }
                ,
                i.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this._renderTexture,
                    this._renderTexture = null
                }
                ,
                i.prototype.createTexture = function() {
                    return t.BaseObject.borrowObject(a)
                }
                ,
                Object.defineProperty(i.prototype, "renderTexture", {
                    get: function() {
                        return this._renderTexture
                    },
                    set: function(t) {
                        if (this._renderTexture !== t)
                            if (this._renderTexture = t,
                            null !== this._renderTexture)
                                for (var e in this.textures) {
                                    var a = this.textures[e];
                                    a.renderTexture = new O.Texture(this._renderTexture,new O.Rectangle(a.region.x,a.region.y,a.region.width,a.region.height),new O.Rectangle(a.region.x,a.region.y,a.region.width,a.region.height),new O.Rectangle(0,0,a.region.width,a.region.height),a.rotated)
                                }
                            else
                                for (var e in this.textures) {
                                    a = this.textures[e];
                                    a.renderTexture = null
                                }
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                i
            }(t.TextureAtlasData);
            t.PixiTextureAtlasData = e;
            var a = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.renderTexture = null,
                    e
                }
                return x(e, t),
                e.toString = function() {
                    return "[class dragonBones.PixiTextureData]"
                }
                ,
                e.prototype._onClear = function() {
                    t.prototype._onClear.call(this),
                    null !== this.renderTexture && this.renderTexture.destroy(!1),
                    this.renderTexture = null
                }
                ,
                e
            }(t.TextureData);
            t.PixiTextureData = a
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.debugDraw = !1,
                    t._debugDraw = !1,
                    t._armature = null,
                    t._debugDrawer = null,
                    t
                }
                return x(a, e),
                a.prototype.dbInit = function(t) {
                    this._armature = t
                }
                ,
                a.prototype.dbClear = function() {
                    null !== this._debugDrawer && this._debugDrawer.destroy(!0),
                    this._armature = null,
                    this._debugDrawer = null,
                    e.prototype.destroy.call(this)
                }
                ,
                a.prototype.dbUpdate = function() {
                    var e = t.DragonBones.debugDraw || this.debugDraw;
                    if (e || this._debugDraw)
                        if (this._debugDraw = e,
                        this._debugDraw) {
                            if (null === this._debugDrawer) {
                                this._debugDrawer = new O.Sprite;
                                var a = new O.Graphics;
                                this._debugDrawer.addChild(a)
                            }
                            this.addChild(this._debugDrawer);
                            var i = this._debugDrawer.getChildAt(0);
                            i.clear();
                            for (var r = this._armature.getBones(), n = 0, s = r.length; n < s; ++n) {
                                var o = r[n]
                                  , l = o.boneData.length
                                  , h = o.globalTransformMatrix.tx
                                  , u = o.globalTransformMatrix.ty
                                  , c = h + o.globalTransformMatrix.a * l
                                  , f = u + o.globalTransformMatrix.b * l;
                                i.lineStyle(2, 65535, .7),
                                i.moveTo(h, u),
                                i.lineTo(c, f),
                                i.lineStyle(0, 0, 0),
                                i.beginFill(65535, .7),
                                i.drawCircle(h, u, 3),
                                i.endFill()
                            }
                            var m = this._armature.getSlots();
                            for (n = 0,
                            s = m.length; n < s; ++n) {
                                var _ = m[n]
                                  , p = _.boundingBoxData;
                                if (p) {
                                    var d = this._debugDrawer.getChildByName(_.name);
                                    switch (d || (d = new O.Graphics,
                                    d.name = _.name,
                                    this._debugDrawer.addChild(d)),
                                    d.clear(),
                                    d.lineStyle(2, 16711935, .7),
                                    p.type) {
                                    case 0:
                                        d.drawRect(.5 * -p.width, .5 * -p.height, p.width, p.height);
                                        break;
                                    case 1:
                                        d.drawEllipse(.5 * -p.width, .5 * -p.height, p.width, p.height);
                                        break;
                                    case 2:
                                        for (var y = p.vertices, g = 0, b = y.length; g < b; g += 2) {
                                            var v = y[g]
                                              , D = y[g + 1];
                                            0 === g ? d.moveTo(v, D) : d.lineTo(v, D)
                                        }
                                        d.lineTo(y[0], y[1]);
                                        break
                                    }
                                    d.endFill(),
                                    _.updateTransformAndMatrix(),
                                    _.updateGlobalTransform();
                                    var T = _.global;
                                    d.setTransform(T.x, T.y, T.scaleX, T.scaleY, T.rotation, T.skew, 0, _._pivotX, _._pivotY)
                                } else {
                                    d = this._debugDrawer.getChildByName(_.name);
                                    d && this._debugDrawer.removeChild(d)
                                }
                            }
                        } else
                            null !== this._debugDrawer && this._debugDrawer.parent === this && this.removeChild(this._debugDrawer)
                }
                ,
                a.prototype.dispose = function(t) {
                    null !== this._armature && (this._armature.dispose(),
                    this._armature = null)
                }
                ,
                a.prototype.destroy = function() {
                    this.dispose()
                }
                ,
                a.prototype.dispatchDBEvent = function(t, e) {
                    this.emit(t, e)
                }
                ,
                a.prototype.hasDBEventListener = function(t) {
                    return this.listeners(t, !0)
                }
                ,
                a.prototype.addDBEventListener = function(t, e, a) {
                    this.addListener(t, e, a)
                }
                ,
                a.prototype.removeDBEventListener = function(t, e, a) {
                    this.removeListener(t, e, a)
                }
                ,
                Object.defineProperty(a.prototype, "armature", {
                    get: function() {
                        return this._armature
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                Object.defineProperty(a.prototype, "animation", {
                    get: function() {
                        return this._armature.animation
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a
            }(O.Sprite);
            t.PixiArmatureDisplay = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return x(a, e),
                a.toString = function() {
                    return "[class dragonBones.PixiSlot]"
                }
                ,
                a.prototype._onClear = function() {
                    e.prototype._onClear.call(this),
                    this._textureScale = 1,
                    this._renderDisplay = null,
                    this._updateTransform = this._updateTransformV4
                }
                ,
                a.prototype._initDisplay = function(t, e) {}
                ,
                a.prototype._disposeDisplay = function(t, e) {
                    e || t.destroy()
                }
                ,
                a.prototype._onUpdateDisplay = function() {
                    this._renderDisplay = this._display ? this._display : this._rawDisplay
                }
                ,
                a.prototype._addDisplay = function() {
                    var t = this._armature.display;
                    t.addChild(this._renderDisplay)
                }
                ,
                a.prototype._replaceDisplay = function(t) {
                    var e = this._armature.display
                      , a = t;
                    e.addChild(this._renderDisplay),
                    e.swapChildren(this._renderDisplay, a),
                    e.removeChild(a),
                    this._textureScale = 1
                }
                ,
                a.prototype._removeDisplay = function() {
                    this._renderDisplay.parent.removeChild(this._renderDisplay)
                }
                ,
                a.prototype._updateZOrder = function() {
                    var t = this._armature.display
                      , e = t.getChildIndex(this._renderDisplay);
                    e !== this._zOrder && t.addChildAt(this._renderDisplay, this._zOrder)
                }
                ,
                a.prototype._updateVisible = function() {
                    this._renderDisplay.visible = this._parent.visible && this._visible
                }
                ,
                a.prototype._updateBlendMode = function() {
                    if (this._renderDisplay instanceof O.Sprite)
                        switch (this._blendMode) {
                        case 0:
                            this._renderDisplay.blendMode = O.BLEND_MODES.NORMAL;
                            break;
                        case 1:
                            this._renderDisplay.blendMode = O.BLEND_MODES.ADD;
                            break;
                        case 3:
                            this._renderDisplay.blendMode = O.BLEND_MODES.DARKEN;
                            break;
                        case 4:
                            this._renderDisplay.blendMode = O.BLEND_MODES.DIFFERENCE;
                            break;
                        case 6:
                            this._renderDisplay.blendMode = O.BLEND_MODES.HARD_LIGHT;
                            break;
                        case 9:
                            this._renderDisplay.blendMode = O.BLEND_MODES.LIGHTEN;
                            break;
                        case 10:
                            this._renderDisplay.blendMode = O.BLEND_MODES.MULTIPLY;
                            break;
                        case 11:
                            this._renderDisplay.blendMode = O.BLEND_MODES.OVERLAY;
                            break;
                        case 12:
                            this._renderDisplay.blendMode = O.BLEND_MODES.SCREEN;
                            break
                        }
                }
                ,
                a.prototype._updateColor = function() {
                    var t = this._colorTransform.alphaMultiplier * this._globalAlpha;
                    if (this._renderDisplay.alpha = t,
                    this._renderDisplay instanceof O.Sprite || this._renderDisplay instanceof O.mesh.Mesh) {
                        var e = (Math.round(255 * this._colorTransform.redMultiplier) << 16) + (Math.round(255 * this._colorTransform.greenMultiplier) << 8) + Math.round(255 * this._colorTransform.blueMultiplier);
                        this._renderDisplay.tint = e
                    }
                }
                ,
                a.prototype._updateFrame = function() {
                    var e = this._textureData;
                    if (this._displayIndex >= 0 && null !== this._display && null !== e) {
                        var a = e.parent;
                        null !== this._armature.replacedTexture && (null === this._armature._replaceTextureAtlasData ? (a = t.BaseObject.borrowObject(t.PixiTextureAtlasData),
                        a.copyFrom(e.parent),
                        a.renderTexture = this._armature.replacedTexture,
                        this._armature._replaceTextureAtlasData = a) : a = this._armature._replaceTextureAtlasData,
                        e = a.getTexture(e.name));
                        var i = e.renderTexture;
                        if (null !== i) {
                            if (null !== this._geometryData) {
                                var r = this._geometryData.data
                                  , n = r.intArray
                                  , s = r.floatArray
                                  , o = n[this._geometryData.offset + 0]
                                  , l = n[this._geometryData.offset + 1]
                                  , h = n[this._geometryData.offset + 2];
                                h < 0 && (h += 65536);
                                var u = h + 2 * o
                                  , c = this._armature._armatureData.scale
                                  , f = this._renderDisplay
                                  , m = a.width > 0 ? a.width : i.baseTexture.width
                                  , _ = a.height > 0 ? a.height : i.baseTexture.height
                                  , p = e.region;
                                f.vertices = new Float32Array(2 * o),
                                f.uvs = new Float32Array(2 * o),
                                f.indices = new Uint16Array(3 * l);
                                for (var d = 0, y = 2 * o; d < y; ++d)
                                    f.vertices[d] = s[h + d] * c;
                                for (d = 0; d < 3 * l; ++d)
                                    f.indices[d] = n[this._geometryData.offset + 4 + d];
                                for (d = 0,
                                y = 2 * o; d < y; d += 2) {
                                    var g = s[u + d]
                                      , b = s[u + d + 1];
                                    e.rotated ? (f.uvs[d] = (p.x + (1 - b) * p.width) / m,
                                    f.uvs[d + 1] = (p.y + g * p.height) / _) : (f.uvs[d] = (p.x + g * p.width) / m,
                                    f.uvs[d + 1] = (p.y + b * p.height) / _)
                                }
                                this._textureScale = 1,
                                f.texture = i,
                                f.dirty++,
                                f.indexDirty++;
                                var v = null !== this._geometryData.weight
                                  , D = 0 !== this._parent._boneData.type;
                                (v || D) && this._identityTransform()
                            } else {
                                this._textureScale = e.parent.scale * this._armature._armatureData.scale;
                                var T = this._renderDisplay;
                                T.texture = i
                            }
                            return void (this._visibleDirty = !0)
                        }
                    }
                    if (null !== this._geometryData) {
                        f = this._renderDisplay;
                        f.texture = null,
                        f.x = 0,
                        f.y = 0,
                        f.visible = !1
                    } else {
                        T = this._renderDisplay;
                        T.texture = null,
                        T.x = 0,
                        T.y = 0,
                        T.visible = !1
                    }
                }
                ,
                a.prototype._updateMesh = function() {
                    var t = this._armature._armatureData.scale
                      , e = this._displayFrame.deformVertices
                      , a = this._geometryBones
                      , i = this._geometryData
                      , r = i.weight
                      , n = e.length > 0 && i.inheritDeform
                      , s = this._renderDisplay;
                    if (null !== r) {
                        var o = i.data
                          , l = o.intArray
                          , h = o.floatArray
                          , u = l[i.offset + 0]
                          , c = l[r.offset + 1];
                        c < 0 && (c += 65536);
                        for (var f = 0, m = 0, _ = r.offset + 2 + a.length, p = c, d = 0; f < u; ++f) {
                            for (var y = l[_++], g = 0, b = 0, v = 0; v < y; ++v) {
                                var D = l[_++]
                                  , T = a[D];
                                if (null !== T) {
                                    var A = T.globalTransformMatrix
                                      , P = h[p++]
                                      , O = h[p++] * t
                                      , S = h[p++] * t;
                                    n && (O += e[d++],
                                    S += e[d++]),
                                    g += (A.a * O + A.c * S + A.tx) * P,
                                    b += (A.b * O + A.d * S + A.ty) * P
                                }
                            }
                            s.vertices[m++] = g,
                            s.vertices[m++] = b
                        }
                    } else {
                        var x = 0 !== this._parent._boneData.type
                          , w = (o = i.data,
                        l = o.intArray,
                        h = o.floatArray,
                        u = l[i.offset + 0],
                        l[i.offset + 2]);
                        w < 0 && (w += 65536);
                        f = 0;
                        for (var E = 2 * u; f < E; f += 2) {
                            var C = h[w + f] * t
                              , I = h[w + f + 1] * t;
                            if (n && (C += e[f],
                            I += e[f + 1]),
                            x) {
                                A = this._parent._getGlobalTransformMatrix(C, I);
                                s.vertices[f] = A.a * C + A.c * I + A.tx,
                                s.vertices[f + 1] = A.b * C + A.d * I + A.ty
                            } else
                                s.vertices[f] = C,
                                s.vertices[f + 1] = I
                        }
                    }
                }
                ,
                a.prototype._updateTransform = function() {
                    throw new Error
                }
                ,
                a.prototype._updateTransformV3 = function() {
                    this.updateGlobalTransform();
                    var t = this.global;
                    if (this._renderDisplay === this._rawDisplay || this._renderDisplay === this._meshDisplay) {
                        var e = t.x - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY)
                          , a = t.y - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
                        this._renderDisplay.setTransform(e, a, t.scaleX * this._textureScale, t.scaleY * this._textureScale, t.rotation, t.skew, 0)
                    } else
                        this._renderDisplay.position.set(t.x, t.y),
                        this._renderDisplay.rotation = t.rotation,
                        this._renderDisplay.skew.set(t.skew, 0),
                        this._renderDisplay.scale.set(t.scaleX, t.scaleY)
                }
                ,
                a.prototype._updateTransformV4 = function() {
                    this.updateGlobalTransform();
                    var t = this.global;
                    if (this._renderDisplay === this._rawDisplay || this._renderDisplay === this._meshDisplay) {
                        var e = t.x - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY)
                          , a = t.y - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
                        this._renderDisplay.setTransform(e, a, t.scaleX * this._textureScale, t.scaleY * this._textureScale, t.rotation, -t.skew, 0)
                    } else
                        this._renderDisplay.position.set(t.x, t.y),
                        this._renderDisplay.rotation = t.rotation,
                        this._renderDisplay.skew.set(-t.skew, 0),
                        this._renderDisplay.scale.set(t.scaleX, t.scaleY)
                }
                ,
                a.prototype._identityTransform = function() {
                    this._renderDisplay.setTransform(0, 0, 1, 1, 0, 0, 0)
                }
                ,
                a
            }(t.Slot);
            t.PixiSlot = e
        }(S || (S = {})),
        function(t) {
            var e = function(e) {
                function a(i) {
                    void 0 === i && (i = null);
                    var r = e.call(this, i) || this;
                    if (null === a._dragonBonesInstance) {
                        var n = new t.PixiArmatureDisplay;
                        a._dragonBonesInstance = new t.DragonBones(n)
                    }
                    return r._dragonBones = a._dragonBonesInstance,
                    r
                }
                return x(a, e),
                a._clockHandler = function(t) {
                    this._dragonBonesInstance.advanceTime(O.ticker.shared.elapsedMS * t * .001)
                }
                ,
                Object.defineProperty(a, "factory", {
                    get: function() {
                        return null === a._factory && (a._factory = new a),
                        a._factory
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a.prototype._buildTextureAtlasData = function(e, a) {
                    return e ? e.renderTexture = a : e = t.BaseObject.borrowObject(t.PixiTextureAtlasData),
                    e
                }
                ,
                a.prototype._buildArmature = function(e) {
                    var a = t.BaseObject.borrowObject(t.Armature)
                      , i = new t.PixiArmatureDisplay;
                    return a.init(e.armature, i, i, this._dragonBones),
                    a
                }
                ,
                a.prototype._buildSlot = function(e, a, i) {
                    var r = t.BaseObject.borrowObject(t.PixiSlot);
                    return r.init(a, i, new O.Sprite, new O.mesh.Mesh(null,null,null,null,O.mesh.Mesh.DRAW_MODES.TRIANGLES)),
                    r
                }
                ,
                a.prototype.buildArmatureDisplay = function(t, e, a, i) {
                    void 0 === e && (e = ""),
                    void 0 === a && (a = ""),
                    void 0 === i && (i = "");
                    var r = this.buildArmature(t, e || "", a || "", i || "");
                    return null !== r ? (this._dragonBones.clock.add(r),
                    r.display) : null
                }
                ,
                a.prototype.getTextureDisplay = function(t, e) {
                    void 0 === e && (e = null);
                    var a = this._getTextureData(null !== e ? e : "", t);
                    return null !== a && null !== a.renderTexture ? new O.Sprite(a.renderTexture) : null
                }
                ,
                Object.defineProperty(a.prototype, "soundEventManager", {
                    get: function() {
                        return this._dragonBones.eventManager
                    },
                    enumerable: !0,
                    configurable: !0
                }),
                a._dragonBonesInstance = null,
                a._factory = null,
                a
            }(t.BaseFactory);
            t.PixiFactory = e
        }(S || (S = {}));
        var w = S
          , E = function() {
            function t(t) {
                var e = t.armatureName;
                this.factory = w.PixiFactory.factory,
                this.armature = this.factory.buildArmatureDisplay(e)
            }
            return t.prototype.play = function(t, e) {
                return this.armature.animation.play(t, e)
            }
            ,
            t.prototype.stop = function(t) {
                return this.armature.animation.stop(t)
            }
            ,
            t
        }()
          , C = {
            START: "start",
            LOOP_COMPLETE: "loopComplete",
            COMPLETE: "complete",
            FADE_IN: "fadeIn",
            FADE_IN_COMPLETE: "fadeInComplete",
            FADE_OUT: "fadeOut",
            FADE_OUT_COMPLETE: "fadeOutComplete",
            FRAME_EVENT: "frameEvent",
            SOUND_EVENT: "soundEvent"
        }
          , I = w.PixiFactory.factory;
        _["j"].registerInstance(_["g"].DRAGONBONE, (function(t) {
            var e = t.data;
            I.parseDragonBonesData(e.ske),
            I.parseTextureAtlasData(e.tex, b["Texture"].from(e.image))
        }
        ));
        var M = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "DragonBone",
                e.armatures = {},
                e.autoPlay = {},
                e.isRemovedMap = new Map,
                e
            }
            return D(e, t),
            e.prototype.init = function() {
                this.renderSystem = this.game.getSystem(d["b"]),
                this.renderSystem.rendererManager.register(this),
                b["ticker"].shared.add(w.PixiFactory._clockHandler, w.PixiFactory)
            }
            ,
            e.prototype.componentChanged = function(t) {
                return A(this, void 0, void 0, (function() {
                    return P(this, (function(e) {
                        if (this.autoPlay[t.gameObject.id] = t.component.autoPlay,
                        "DragonBone" === t.componentName)
                            if (t.type === _["f"].ADD)
                                this.add(t);
                            else if (t.type === _["f"].CHANGE)
                                switch (t.prop.prop[0]) {
                                case "armature":
                                    this.change(t);
                                    break
                                }
                            else
                                t.type === _["f"].REMOVE && this.remove(t);
                        return [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.add = function(t) {
                return A(this, void 0, void 0, (function() {
                    var e, a, i, r;
                    return P(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return e = t.component,
                            this.isRemovedMap.delete(e),
                            [4, _["j"].getResource(e.resource)];
                        case 1:
                            if (n.sent(),
                            this.isRemovedMap.get(e))
                                return this.isRemovedMap.delete(e),
                                [2];
                            for (r in a = new E({
                                armatureName: e.armatureName
                            }),
                            this.armatures[t.gameObject.id] = a,
                            this.renderSystem.containerManager.getContainer(t.gameObject.id).addChildAt(a.armature, 0),
                            e.armature = a,
                            i = function(t) {
                                a.armature.on(C[t], (function(a) {
                                    e.emit(C[t], a)
                                }
                                ))
                            }
                            ,
                            C)
                                i(r);
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.change = function(t) {
                if (this.remove(t),
                this.add(t),
                this.autoPlay[t.gameObject.id]) {
                    var e = t.component;
                    e.play(e.animationName)
                }
            }
            ,
            e.prototype.remove = function(t) {
                var e = this.armatures[t.gameObject.id];
                if (e) {
                    this.autoPlay[t.gameObject.id] = e.armature.animation.isPlaying,
                    this.renderSystem.containerManager.getContainer(t.gameObject.id).removeChild(e.armature),
                    e.armature.removeAllListeners(),
                    e.armature.destroy();
                    var a = t.component;
                    a.armature = null,
                    delete this.armatures[t.gameObject.id],
                    t.type === _["f"].CHANGE && (delete this.autoPlay[t.gameObject.id],
                    a.removeAllListeners())
                } else
                    this.isRemovedMap.set(t.component, !0)
            }
            ,
            e.systemName = "DragonBone",
            e = T([_["i"].componentObserver({
                DragonBone: ["armatureName"]
            })], e),
            e
        }(d["a"])
          , B = function(t, e) {
            return B = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a])
            }
            ,
            B(t, e)
        };
        /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
        function F(t, e) {
            function a() {
                this.constructor = t
            }
            B(t, e),
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype,
            new a)
        }
        (function(t) {
            function e(e) {
                var a = this;
                return e.autoStart = !1,
                a = t.call(this, e) || this,
                a
            }
            F(e, t)
        }
        )(b["Application"]),
        function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            F(e, t)
        }(b["Container"]);
        var k = function(t) {
            function e() {
                return null !== t && t.apply(this, arguments) || this
            }
            return F(e, t),
            e
        }(b["Graphics"])
          , R = (function(t) {
            function e(e, a, i, r, n) {
                var s, o = this;
                return s = "string" === e ? b["Texture"].fromFrame(e) : b["Texture"].from(e),
                o = t.call(this, s, a, i, r, n) || this,
                o
            }
            F(e, t)
        }(b["mesh"].NineSlicePlane),
        function() {
            function t(t) {
                this._image = null,
                this._image = t,
                t ? t instanceof HTMLImageElement ? this.sprite = b["Sprite"].from(t) : t instanceof b["Texture"] && (this.sprite = new b["Sprite"](t)) : this.sprite = new b["Sprite"]
            }
            Object.defineProperty(t.prototype, "image", {
                get: function() {
                    return this._image
                },
                set: function(t) {
                    this._image !== t && (t instanceof HTMLImageElement ? (this.sprite.texture && this.sprite.texture.destroy(!1),
                    this.sprite.texture = b["Texture"].from(t)) : t instanceof b["Texture"] && (this.sprite.texture = t),
                    this._image = t)
                },
                enumerable: !1,
                configurable: !0
            })
        }(),
        function() {
            function t(t) {
                var e = t.frames;
                this.animatedSprite = new b["extras"].AnimatedSprite(e)
            }
            t.prototype.play = function() {
                this.animatedSprite.play()
            }
            ,
            t.prototype.stop = function() {
                this.animatedSprite.stop()
            }
            ,
            Object.defineProperty(t.prototype, "speed", {
                get: function() {
                    return this.animatedSprite.animationSpeed
                },
                set: function(t) {
                    this.animatedSprite.animationSpeed = t
                },
                enumerable: !1,
                configurable: !0
            })
        }(),
        function(t) {
            function e(e, a) {
                return t.call(this, e, a) || this
            }
            F(e, t)
        }(b["Text"]),
        b["extras"].TilingSprite)
          , j = (function() {
            function t(t) {
                this._image = null,
                this._image = t,
                t ? t instanceof HTMLImageElement ? this.tilingSprite = new R(b["Texture"].from(t)) : t instanceof b["Texture"] && (this.tilingSprite = new R(t)) : this.tilingSprite = new R(b["Texture"].EMPTY)
            }
            Object.defineProperty(t.prototype, "image", {
                get: function() {
                    return this._image
                },
                set: function(t) {
                    this._image !== t && (t instanceof HTMLImageElement ? this.tilingSprite.texture = b["Texture"].from(t) : t instanceof b["Texture"] && (this.tilingSprite.texture = t),
                    this._image = t)
                },
                enumerable: !1,
                configurable: !0
            })
        }(),
        function(t, e) {
            return j = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a])
            }
            ,
            j(t, e)
        }
        );
        function N(t, e) {
            function a() {
                this.constructor = t
            }
            j(t, e),
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype,
            new a)
        }
        function V(t, e, a, i) {
            var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, a) : i;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                s = Reflect.decorate(t, e, a, i);
            else
                for (var o = t.length - 1; o >= 0; o--)
                    (r = t[o]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, a, s) : r(e, a)) || s);
            return n > 3 && s && Object.defineProperty(e, a, s),
            s
        }
        function L(t, e, a, i) {
            return new (a || (a = Promise))((function(r, n) {
                function s(t) {
                    try {
                        l(i.next(t))
                    } catch (e) {
                        n(e)
                    }
                }
                function o(t) {
                    try {
                        l(i["throw"](t))
                    } catch (e) {
                        n(e)
                    }
                }
                function l(t) {
                    t.done ? r(t.value) : new a((function(e) {
                        e(t.value)
                    }
                    )).then(s, o)
                }
                l((i = i.apply(t, e || [])).next())
            }
            ))
        }
        function Y(t, e) {
            var a, i, r, n, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n;
            function o(t) {
                return function(e) {
                    return l([t, e])
                }
            }
            function l(n) {
                if (a)
                    throw new TypeError("Generator is already executing.");
                while (s)
                    try {
                        if (a = 1,
                        i && (r = 2 & n[0] ? i["return"] : n[0] ? i["throw"] || ((r = i["return"]) && r.call(i),
                        0) : i.next) && !(r = r.call(i, n[1])).done)
                            return r;
                        switch (i = 0,
                        r && (n = [2 & n[0], r.value]),
                        n[0]) {
                        case 0:
                        case 1:
                            r = n;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            i = n[1],
                            n = [0];
                            continue;
                        case 7:
                            n = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (r = s.trys,
                            !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                s.label = n[1];
                                break
                            }
                            if (6 === n[0] && s.label < r[1]) {
                                s.label = r[1],
                                r = n;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2],
                                s.ops.push(n);
                                break
                            }
                            r[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        n = e.call(t, s)
                    } catch (o) {
                        n = [6, o],
                        i = 0
                    } finally {
                        a = r = 0
                    }
                if (5 & n[0])
                    throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }
        }
        var U = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.graphics = null,
                e
            }
            return N(e, t),
            e.prototype.init = function() {
                this.graphics = new k
            }
            ,
            e.componentName = "Graphics",
            e
        }(_["a"])
          , H = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "Graphics",
                e
            }
            return N(e, t),
            e.prototype.init = function() {
                this.renderSystem = this.game.getSystem(d["b"]),
                this.renderSystem.rendererManager.register(this)
            }
            ,
            e.prototype.componentChanged = function(t) {
                return L(this, void 0, void 0, (function() {
                    return Y(this, (function(e) {
                        return t.type === _["f"].ADD ? this.containerManager.getContainer(t.gameObject.id).addChildAt(t.component.graphics, 0) : t.type === _["f"].REMOVE && this.containerManager.getContainer(t.gameObject.id).removeChild(t.component.graphics),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.systemName = "Graphics",
            e = V([_["i"].componentObserver({
                Graphics: ["graphics"]
            })], e),
            e
        }(d["a"])
          , X = a("362d")
          , z = function(t, e) {
            return z = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(t, e) {
                t.__proto__ = e
            }
            || function(t, e) {
                for (var a in e)
                    e.hasOwnProperty(a) && (t[a] = e[a])
            }
            ,
            z(t, e)
        };
        function G(t, e) {
            function a() {
                this.constructor = t
            }
            z(t, e),
            t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype,
            new a)
        }
        function W(t, e, a, i) {
            var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, a) : i;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate)
                s = Reflect.decorate(t, e, a, i);
            else
                for (var o = t.length - 1; o >= 0; o--)
                    (r = t[o]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, a, s) : r(e, a)) || s);
            return n > 3 && s && Object.defineProperty(e, a, s),
            s
        }
        function K(t, e, a, i) {
            return new (a || (a = Promise))((function(r, n) {
                function s(t) {
                    try {
                        l(i.next(t))
                    } catch (e) {
                        n(e)
                    }
                }
                function o(t) {
                    try {
                        l(i["throw"](t))
                    } catch (e) {
                        n(e)
                    }
                }
                function l(t) {
                    t.done ? r(t.value) : new a((function(e) {
                        e(t.value)
                    }
                    )).then(s, o)
                }
                l((i = i.apply(t, e || [])).next())
            }
            ))
        }
        function q(t, e) {
            var a, i, r, n, s = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return n = {
                next: o(0),
                throw: o(1),
                return: o(2)
            },
            "function" === typeof Symbol && (n[Symbol.iterator] = function() {
                return this
            }
            ),
            n;
            function o(t) {
                return function(e) {
                    return l([t, e])
                }
            }
            function l(n) {
                if (a)
                    throw new TypeError("Generator is already executing.");
                while (s)
                    try {
                        if (a = 1,
                        i && (r = 2 & n[0] ? i["return"] : n[0] ? i["throw"] || ((r = i["return"]) && r.call(i),
                        0) : i.next) && !(r = r.call(i, n[1])).done)
                            return r;
                        switch (i = 0,
                        r && (n = [2 & n[0], r.value]),
                        n[0]) {
                        case 0:
                        case 1:
                            r = n;
                            break;
                        case 4:
                            return s.label++,
                            {
                                value: n[1],
                                done: !1
                            };
                        case 5:
                            s.label++,
                            i = n[1],
                            n = [0];
                            continue;
                        case 7:
                            n = s.ops.pop(),
                            s.trys.pop();
                            continue;
                        default:
                            if (r = s.trys,
                            !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                s.label = n[1];
                                break
                            }
                            if (6 === n[0] && s.label < r[1]) {
                                s.label = r[1],
                                r = n;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2],
                                s.ops.push(n);
                                break
                            }
                            r[2] && s.ops.pop(),
                            s.trys.pop();
                            continue
                        }
                        n = e.call(t, s)
                    } catch (o) {
                        n = [6, o],
                        i = 0
                    } finally {
                        a = r = 0
                    }
                if (5 & n[0])
                    throw n[1];
                return {
                    value: n[0] ? n[1] : void 0,
                    done: !0
                }
            }
        }
        var Z = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.text = "",
                e.style = {},
                e
            }
            return G(e, t),
            e.prototype.init = function(t) {
                var e = new b["TextStyle"]({
                    fontSize: 20
                })
                  , a = {};
                for (var i in e)
                    0 === i.indexOf("_") && (a[i.substring(1)] = e[i]);
                this.style = a,
                t && (this.text = t.text,
                Object.assign(this.style, t.style))
            }
            ,
            e.componentName = "Text",
            W([_["i"].IDEProp], e.prototype, "text", void 0),
            W([_["i"].IDEProp], e.prototype, "style", void 0),
            e
        }(_["a"])
          , J = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.name = "Text",
                e.texts = {},
                e
            }
            return G(e, t),
            e.prototype.init = function() {
                this.renderSystem = this.game.getSystem(d["b"]),
                this.renderSystem.rendererManager.register(this)
            }
            ,
            e.prototype.componentChanged = function(t) {
                return K(this, void 0, void 0, (function() {
                    var e, a;
                    return q(this, (function(i) {
                        return "Text" !== t.componentName || (t.type === _["f"].ADD ? (e = t.component,
                        a = new X["d"](e.text,e.style),
                        this.containerManager.getContainer(t.gameObject.id).addChildAt(a, 0),
                        this.texts[t.gameObject.id] = {
                            text: a,
                            component: t.component
                        },
                        this.setSize(t)) : t.type === _["f"].REMOVE ? (this.containerManager.getContainer(t.gameObject.id).removeChild(this.texts[t.gameObject.id].text),
                        delete this.texts[t.gameObject.id]) : (this.change(t),
                        this.setSize(t))),
                        [2]
                    }
                    ))
                }
                ))
            }
            ,
            e.prototype.change = function(t) {
                var e = this.texts[t.gameObject.id]
                  , a = e.text
                  , i = e.component;
                "text" === t.prop.prop[0] ? a.text = i.text : "style" === t.prop.prop[0] && Object.assign(a.style, t.component.style)
            }
            ,
            e.prototype.setSize = function(t) {
                var e = t.gameObject.transform;
                e && (e.size.width = this.texts[t.gameObject.id].text.width,
                e.size.height = this.texts[t.gameObject.id].text.height)
            }
            ,
            e.systemName = "Text",
            e = W([_["i"].componentObserver({
                Text: ["text", {
                    prop: ["style"],
                    deep: !0
                }]
            })], e),
            e
        }(d["a"])
          , Q = a("19b1")
          , $ = (a("1d7a"),
        [[{
            name: "wind",
            value: "zidan"
        }, {
            name: "wind",
            value: "hit"
        }], [{
            name: "thunder",
            value: "lei_zidan"
        }, {
            name: "thunder",
            value: "lei_hit"
        }], [{
            name: "blade",
            value: "daoguang"
        }, {
            name: "blade",
            value: "hit"
        }], [{
            name: "blast",
            value: "zidang"
        }, {
            name: "blast",
            value: "baodian"
        }], [{
            name: "ice",
            value: "zidan"
        }, {
            name: "ice",
            value: "hit"
        }]])
          , tt = {
            create: function(t, e, a, i) {
                t < 0 && (t = 0);
                var r = $[t][e]
                  , n = new _["c"](r.name,{
                    position: a,
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    scale: {
                        x: 1,
                        y: 1
                    }
                })
                  , s = new p["a"]({
                    resource: r.name,
                    animationName: r.value,
                    autoPlay: !0
                });
                return s.once("complete", (function(t) {
                    "function" === typeof i && i(n)
                }
                )),
                n.addComponent(s),
                n
            },
            createBullet: function(t, e, a, i) {
                var r = this.create(t - 1, 0, e, i)
                  , n = Math.atan2(a.y - e.y, a.x - e.x);
                return r.transform.rotation = n,
                r
            },
            createHit: function(t, e, a) {
                return this.create(t - 1, 1, e, a)
            },
            createReadyEff: function(t, e) {
                var a = new _["c"]("ready",{
                    position: {
                        x: 0,
                        y: 0
                    },
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    scale: {
                        x: .5,
                        y: .5
                    }
                })
                  , i = new p["a"]({
                    resource: "ready",
                    animationName: "eff",
                    autoPlay: !0
                });
                return i.once("complete", (function(t) {
                    t.track.loop = !1,
                    a.destroy(),
                    "function" === typeof e && e(a)
                }
                )),
                a.addComponent(i),
                a
            },
            createResult: function(t, e, a) {
                var i = new _["c"]("victory_failure",{
                    position: e,
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    scale: {
                        x: .5,
                        y: .5
                    }
                })
                  , r = new p["a"]({
                    resource: "victory_failure",
                    animationName: t,
                    autoPlay: !0
                });
                return r.once("complete", (function(t) {
                    t.track.loop = !1,
                    "function" === typeof a && a(i)
                }
                )),
                i.addComponent(r),
                i
            },
            createStart: function(t, e) {
                var a = new _["c"]("combat_start",{
                    position: t,
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    scale: {
                        x: 1.4,
                        y: 1.4
                    }
                })
                  , i = new p["a"]({
                    resource: "combat_start",
                    animationName: "start",
                    autoPlay: !0
                });
                return i.once("complete", (function(t) {
                    t.track.loop = !1,
                    a.destroy(),
                    "function" === typeof e && e(a)
                }
                )),
                a.addComponent(i),
                a
            },
            createArrow: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "999"
                  , a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = new _["c"]("arrow-up",{
                    position: t,
                    size: {
                        width: 40,
                        height: 40
                    },
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: .5,
                        y: .5
                    },
                    scale: {
                        x: 1,
                        y: 1
                    }
                });
                i.addComponent(new y["a"]({
                    resource: a ? "arrow-up" : "arrow-down"
                })),
                i.addComponent(new Q["a"]({
                    zIndex: 1e3
                }));
                var r = new _["c"]("arrow-up-text",{
                    origin: {
                        x: .5,
                        y: .5
                    },
                    anchor: {
                        x: 2,
                        y: .5
                    }
                });
                return this.bloodText = new Z({
                    text: e,
                    style: {
                        fontFamily: "Arial",
                        fontSize: 25,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fill: a ? ["#b9ffce", "#009c2f"] : ["#ffa7a7", "#9c0000"]
                    }
                }),
                r.addComponent(this.bloodText),
                i.addChild(r),
                i
            }
        }
          , et = a("dd72")
          , at = function() {
            function t(e, a) {
                Object(f["a"])(this, t),
                this.position = a,
                this.bgdSize = {
                    width: 180,
                    height: 180
                },
                this.imgSize = {
                    width: .65 * this.bgdSize.width,
                    height: .65 * this.bgdSize.height
                },
                this.maskSize = {
                    width: .7 * this.bgdSize.width,
                    height: .7 * this.bgdSize.height
                };
                var i = Object.assign({}, e);
                if (i.mask = new y["a"]({
                    resource: "avatar-mask"
                }),
                i.bg = new y["a"]({
                    resource: "avatar-bg-".concat(i.rarity)
                }),
                4 === i.rarity) {
                    var r = i.teamId / 2;
                    i.avatar = new y["a"]({
                        resource: "avatar-purple-".concat(r)
                    })
                } else if (5 === i.rarity) {
                    var n = (i.teamId - 1) / 4;
                    i.avatar = new y["a"]({
                        resource: "avatar-orange-".concat(n)
                    })
                } else
                    i.avatar = new y["a"]({
                        resource: "avatar-normal-".concat(i.teamId)
                    });
                void 0 !== i.bossId && (i.avatar = new y["a"]({
                    resource: "avatar-boss-".concat(i.bossId)
                })),
                this.item = i,
                this.createGameObject(),
                this.init()
            }
            return Object(m["a"])(t, [{
                key: "init",
                value: function() {
                    var t = this
                      , e = et.find((function(e) {
                        return e.rarity === t.item.rarity && e.teamId === t.item.teamId
                    }
                    ));
                    if (e) {
                        if (this.item.data = Object.assign({}, e),
                        this.item.rarity >= 4 && 1 !== this.item.level) {
                            var a = this.item.data.upgradeTable[this.item.level - 1];
                            this.item.data.live += a.live,
                            this.item.data.attack += a.attack,
                            this.item.data.defense += a.defense,
                            this.item.data.fatal += a.fatal,
                            this.item.data.recover += a.recover
                        }
                        this.item.data.attack = 1.1 * this.item.data.attack,
                        this.item.data.live += this.item.computingPower / 5,
                        this.item.data.attack += this.item.computingPower / 25,
                        this.item.data.defense += this.item.computingPower / 25,
                        this.item.data.fatal += 1e-4 * this.item.computingPower,
                        this.item.data.recover += 1e-4 * this.item.computingPower
                    }
                    this.item.data ? (this.death = !1,
                    this.blood = Math.floor(this.item.data.live),
                    this.setBloodProgress(1),
                    this.setBloodText(this.blood, this.blood)) : console.error("Set Game Data: rarity", this.item.rarity, "teamId", this.item.teamId, "***************")
                }
            }, {
                key: "createBloodProgress",
                value: function(t) {
                    var e = new _["c"](t,{
                        origin: {
                            x: .5,
                            y: .5
                        },
                        anchor: {
                            x: .5,
                            y: .5
                        },
                        rotation: 0 - Math.PI / 2
                    });
                    return this.bloodProgress = e.addComponent(new U),
                    e
                }
            }, {
                key: "setBloodProgress",
                value: function(t) {
                    var e = 2 * Math.PI * t;
                    this.bloodProgress.graphics.clear(),
                    this.bloodProgress.graphics.beginFill(16724553, 1),
                    this.bloodProgress.graphics.moveTo(0, 0),
                    this.bloodProgress.graphics.arc(0, 0, .37 * this.bgdSize.width, 0, e),
                    this.bloodProgress.graphics.closePath(),
                    this.bloodProgress.graphics.endFill()
                }
            }, {
                key: "setBloodFlag",
                value: function(t) {
                    if (!this.bloodFlagText) {
                        var e = new _["c"]("text".concat(this.item.nftId),{
                            position: {
                                x: 60,
                                y: 0
                            },
                            origin: {
                                x: 0,
                                y: 0
                            },
                            anchor: {
                                x: 0,
                                y: 0
                            }
                        });
                        this.gameObject.addChild(e),
                        this.bloodFlagText = e.addComponent(new Z({
                            text: "- " + t,
                            style: {
                                fontFamily: "Arial",
                                fontSize: 26,
                                fontStyle: "italic",
                                fontWeight: "bold",
                                fill: ["#b35d9e", "#84c35f", "#ebe44f"],
                                fillGradientType: 1,
                                fillGradientStops: [.1, .4],
                                stroke: "#4a1850",
                                strokeThickness: 5,
                                dropShadow: !0,
                                dropShadowColor: "#000000",
                                dropShadowBlur: 4,
                                dropShadowAngle: Math.PI / 6,
                                dropShadowDistance: 6,
                                wordWrap: !0,
                                wordWrapWidth: 400,
                                breakWords: !0
                            }
                        }));
                        var a = e.addComponent(new Q["a"]({
                            alpha: .5
                        }))
                          , i = e.addComponent(new g["a"]({
                            group: {
                                idle: [{
                                    name: "position.y",
                                    component: e.transform,
                                    values: [{
                                        time: 0,
                                        value: 0,
                                        tween: "ease-out"
                                    }, {
                                        time: 800,
                                        value: -50,
                                        tween: "ease-in"
                                    }]
                                }, {
                                    name: "alpha",
                                    component: a,
                                    values: [{
                                        time: 0,
                                        value: 1,
                                        tween: "ease-in"
                                    }, {
                                        time: 800,
                                        value: 0,
                                        tween: "ease-in"
                                    }]
                                }]
                            }
                        }));
                        this.bloodFlagText.play = function() {
                            i.play("idle", 1)
                        }
                    }
                    this.bloodFlagText.text = "-" + t,
                    this.bloodFlagText.play()
                }
            }, {
                key: "setBloodText",
                value: function(t, e) {
                    if (!this.bloodText) {
                        var a = new _["c"]("blood-text-".concat(this.item.nftId),{
                            origin: {
                                x: .5,
                                y: .5
                            },
                            anchor: {
                                x: .5,
                                y: 1
                            }
                        });
                        this.gameObject.addChild(a),
                        this.bloodText = new Z({
                            text: t + " / " + e,
                            style: {
                                fontFamily: "Arial",
                                fontSize: 14,
                                fontStyle: "italic",
                                fontWeight: "bold",
                                fill: ["#b35d9e", "#84c35f", "#ebe44f"],
                                stroke: "#4a1850",
                                strokeThickness: 5
                            }
                        }),
                        a.addComponent(this.bloodText)
                    }
                    this.bloodText.text = t + " / " + e
                }
            }, {
                key: "createHeaderComponent",
                value: function(t, e, a) {
                    var i = new _["c"](a,{
                        size: e,
                        origin: {
                            x: .5,
                            y: .5
                        },
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    });
                    return i.addComponent(t),
                    i
                }
            }, {
                key: "createGameObject",
                value: function() {
                    this.gameObject = new _["c"]("avatar-".concat(this.item.nftId),{
                        size: this.bgdSize,
                        position: this.position,
                        origin: {
                            x: .5,
                            y: .5
                        },
                        anchor: {
                            x: .5,
                            y: .5
                        }
                    });
                    var t = this.createHeaderComponent(this.item.bg, this.bgdSize, "avatar-".concat(this.item.nftId, "-bg"))
                      , e = this.createBloodProgress("avatar-".concat(this.item.nftId, "-blood"))
                      , a = this.createHeaderComponent(this.item.mask, this.maskSize, "avatar-".concat(this.item.nftId, "-mask"))
                      , i = this.createHeaderComponent(this.item.avatar, this.imgSize, "avatar-".concat(this.item.nftId, "-img"));
                    this.gameObject.addChild(t),
                    this.gameObject.addChild(e),
                    this.gameObject.addChild(a),
                    this.gameObject.addChild(i);
                    var r = this.gameObject.addComponent(new Q["a"]({
                        alpha: 1
                    }));
                    return this.scaleAnimation = new g["a"]({
                        group: {
                            small: [{
                                name: "scale.x",
                                component: this.gameObject.transform,
                                values: [{
                                    time: 0,
                                    value: 1,
                                    tween: "ease-out"
                                }, {
                                    time: 1e3,
                                    value: .7,
                                    tween: "ease-in"
                                }, {
                                    time: 1010,
                                    value: 1
                                }]
                            }, {
                                name: "scale.y",
                                component: this.gameObject.transform,
                                values: [{
                                    time: 0,
                                    value: 1,
                                    tween: "ease-out"
                                }, {
                                    time: 1e3,
                                    value: .7,
                                    tween: "ease-in"
                                }, {
                                    time: 1010,
                                    value: 1
                                }]
                            }],
                            large: [{
                                name: "scale.x",
                                component: this.gameObject.transform,
                                values: [{
                                    time: 0,
                                    value: 1,
                                    tween: "ease-out"
                                }, {
                                    time: 100,
                                    value: 1.3,
                                    tween: "ease-in"
                                }, {
                                    time: 200,
                                    value: 1
                                }]
                            }, {
                                name: "scale.y",
                                component: this.gameObject.transform,
                                values: [{
                                    time: 0,
                                    value: 1,
                                    tween: "ease-out"
                                }, {
                                    time: 100,
                                    value: 1.3,
                                    tween: "ease-in"
                                }, {
                                    time: 200,
                                    value: 1
                                }]
                            }],
                            death: [{
                                name: "alpha",
                                component: r,
                                values: [{
                                    time: 0,
                                    value: 1,
                                    tween: "ease-in"
                                }, {
                                    time: 200,
                                    value: 0,
                                    tween: "ease-in"
                                }]
                            }]
                        }
                    }),
                    this.gameObject.addComponent(this.scaleAnimation),
                    this.gameObject
                }
            }, {
                key: "defend",
                value: function(t) {
                    var e = t.item.data
                      , a = this.item.data
                      , i = Math.floor(100 * Math.random()) <= 100 * e.fatal
                      , r = (5 - 333 * Math.random() % 10) / 100
                      , n = (5 - 444 * Math.random() % 10) / 100
                      , s = Math.floor(e.attack * (1 + r))
                      , o = Math.floor(a.defense * (1 + n))
                      , l = Math.floor((s - o) * (i ? 2 : 1) * (1 + e.fatal));
                    return (1 === e.gift && 2 === a.gift || 2 === e.gift && 5 === a.gift || 3 === e.gift && 4 === a.gift || 4 === e.gift && 1 === a.gift || 5 === e.gift && 3 === a.gift) && (l *= 1.1),
                    s - o < .1 * s && (l = .1 * s),
                    l = parseInt(l),
                    this.blood = Math.max(this.blood - l, 0),
                    this.blood <= 0 && (this.death = !0),
                    {
                        from: t,
                        to: this,
                        hitValue: l,
                        blood: this.blood,
                        death: this.death
                    }
                }
            }, {
                key: "setHitValue",
                value: function(t) {
                    this.blood = Math.max(0, parseInt(this.blood - t)),
                    this.blood <= 0 && (this.death = !0,
                    this.scaleAnimation.play("death", 1)),
                    this.setBloodFlag(t),
                    this.setBloodText(this.blood, parseInt(this.item.data.live)),
                    this.setBloodProgress(Math.max(0, this.blood / this.item.data.live))
                }
            }, {
                key: "playReadyAnimation",
                value: function() {
                    var t = this
                      , e = this.position
                      , a = tt.createReadyEff(e);
                    return this.gameObject.addChild(a),
                    this.scaleAnimation.play("small", 1),
                    new Promise((function(e) {
                        t.scaleAnimation.once("finish", (function(t) {
                            e(t)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "playShootAnimation",
                value: function(t, e) {
                    var a = this;
                    return new Promise((function(i) {
                        var r = tt.createBullet(t, a.position, e.position);
                        a.gameObject.scene.addChild(r);
                        var n = new g["a"]({
                            group: {
                                move: [{
                                    name: "position.x",
                                    component: r.transform,
                                    values: [{
                                        time: 0,
                                        value: a.position.x,
                                        tween: "ease-in"
                                    }, {
                                        time: 30,
                                        value: a.position.x,
                                        tween: "ease-in"
                                    }, {
                                        time: 200,
                                        value: e.position.x,
                                        tween: "ease-out"
                                    }]
                                }, {
                                    name: "position.y",
                                    component: r.transform,
                                    values: [{
                                        time: 0,
                                        value: a.position.y,
                                        tween: "ease-in"
                                    }, {
                                        time: 30,
                                        value: a.position.y,
                                        tween: "ease-in"
                                    }, {
                                        time: 200,
                                        value: e.position.y,
                                        tween: "ease-out"
                                    }]
                                }]
                            }
                        });
                        n.once("finish", (function(t) {
                            r.destroy(),
                            i(e)
                        }
                        )),
                        r.addComponent(n),
                        n.play("move", 1)
                    }
                    ))
                }
            }, {
                key: "playHitAnimation",
                value: function(t, e) {
                    var a = this;
                    return new Promise((function(i) {
                        var r = tt.createHit(t, e.position, (function(t) {
                            t.destroy(),
                            i()
                        }
                        ));
                        a.gameObject.scene.addChild(r),
                        e.scaleAnimation.play("large", 3)
                    }
                    ))
                }
            }, {
                key: "playAttackAnimation",
                value: function() {
                    var t = Object(l["a"])(regeneratorRuntime.mark((function t(e, a) {
                        var i;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!e.death) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    return i = this.item.data.gift,
                                    t.next = 5,
                                    this.playReadyAnimation();
                                case 5:
                                    return t.next = 7,
                                    this.playShootAnimation(i, e);
                                case 7:
                                    return t.next = 9,
                                    this.playHitAnimation(i, e);
                                case 9:
                                    return t.next = 11,
                                    e.setHitValue(a);
                                case 11:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e(e, a) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]),
            t
        }()
          , it = at
          , rt = a("53a2")
          , nt = a("a13e")
          , st = function() {
            function t(e, a, i) {
                Object(f["a"])(this, t),
                this.skip = !1,
                this.attacking = !1,
                this.reverse = !1,
                this.heros = [],
                this.elementId = e,
                this.canvasHeight = i,
                this.canvasWidth = a,
                this.game = new _["b"]({
                    systems: [new d["b"]({
                        canvas: document.querySelector(this.elementId),
                        width: this.canvasWidth,
                        height: this.canvasHeight,
                        transparent: !0,
                        renderType: 0
                    }), new y["b"], new p["b"], new M, new g["b"], new H, new J, new Q["b"]],
                    autoStart: !1
                })
            }
            return Object(m["a"])(t, [{
                key: "clearHeroes",
                value: function() {
                    this.heros.forEach((function(t) {
                        t.gameObject && t.gameObject.scene && t.gameObject.destroy()
                    }
                    )),
                    this.heros = [],
                    this.attackHeros = [],
                    this.defendHeros = []
                }
            }, {
                key: "clearResultAnimation",
                value: function() {
                    this.successAnimation1 && null !== this.successAnimation1.scene && this.successAnimation1.destroy(),
                    this.failAnimation1 && null !== this.failAnimation1.scene && this.failAnimation1.destroy(),
                    this.successAnimation2 && null !== this.successAnimation2.scene && this.successAnimation2.destroy(),
                    this.failAnimation2 && null !== this.failAnimation2.scene && this.failAnimation2.destroy()
                }
            }, {
                key: "playStartAnimation",
                value: function() {
                    var t = this;
                    return this.skip = !0,
                    new Promise((function(e) {
                        var a = {
                            x: t.canvasWidth / 2,
                            y: t.canvasHeight / 2
                        }
                          , i = tt.createStart(a, (function() {
                            t.skip = !1,
                            e()
                        }
                        ));
                        t.game.scene.addChild(i)
                    }
                    ))
                }
            }, {
                key: "playArrow",
                value: function(t, e) {
                    t = (e ? "+ " : "- ") + Math.abs(parseInt(t));
                    var a = {
                        x: this.canvasWidth / 2,
                        y: this.canvasHeight / 6
                    };
                    this.arrowObject = tt.createArrow(a, t, e),
                    this.game.scene.addChild(this.arrowObject)
                }
            }, {
                key: "playSuccessAnimation",
                value: function() {
                    var t = this
                      , e = {
                        x: this.canvasWidth / 2,
                        y: this.canvasHeight / 2
                    };
                    this.successAnimation1 = tt.createResult("victory_start", e, (function(a) {
                        t.successAnimation1.destroy(),
                        t.clearResultAnimation(),
                        t.successAnimation2 = tt.createResult("victory_idle", e),
                        t.game.scene.addChild(t.successAnimation2)
                    }
                    )),
                    this.game.scene.addChild(this.successAnimation1)
                }
            }, {
                key: "playFailAnimation",
                value: function() {
                    var t = this
                      , e = {
                        x: this.canvasWidth / 2,
                        y: this.canvasHeight / 2
                    };
                    this.failAnimation1 = tt.createResult("failure_start", e, (function(a) {
                        t.failAnimation1.destroy(),
                        t.clearResultAnimation(),
                        t.failAnimation2 = tt.createResult("failure_idle", e),
                        t.game.scene.addChild(t.failAnimation2)
                    }
                    )),
                    this.game.scene.addChild(this.failAnimation1)
                }
            }, {
                key: "initGroupA",
                value: function(t) {
                    var e, a = this, i = t.slice(0, 3), r = -1 !== i.findIndex((function(t) {
                        return t.teamId !== i[0].teamId
                    }
                    )) ? 0 : .1;
                    return this.attackHeros = i.map((function(t, e) {
                        t.teamAddition = r;
                        var i = a.canvasWidth / 6;
                        i = 1 === e ? i + 150 : i;
                        var n = (e + 1) * a.canvasHeight / 4
                          , s = {
                            x: i,
                            y: n
                        };
                        return new it(t,s)
                    }
                    )),
                    (e = this.heros).push.apply(e, Object(o["a"])(this.attackHeros)),
                    this.attackHeros
                }
            }, {
                key: "initGroupB",
                value: function(t) {
                    var e, a = this, i = t.slice(3, 6), r = -1 !== i.findIndex((function(t) {
                        return t.teamId !== i[0].teamId
                    }
                    )) ? 0 : .1;
                    return this.defendHeros = i.map((function(t, e) {
                        t.teamAddition = r;
                        var i = a.canvasWidth / 6 * 5;
                        i = 1 === e ? i - 150 : i;
                        var n = (e + 1) * a.canvasHeight / 4
                          , s = {
                            x: i,
                            y: n
                        };
                        return new it(t,s)
                    }
                    )),
                    (e = this.heros).push.apply(e, Object(o["a"])(this.defendHeros)),
                    this.defendHeros
                }
            }, {
                key: "start",
                value: function() {
                    var t = Object(l["a"])(regeneratorRuntime.mark((function t(e, a, i, r, n) {
                        var s, o, l, h, u, f, m, _, p, d, y, g, b = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (this.game.start(),
                                    this.clearHeroes(),
                                    this.clearResultAnimation(),
                                    this.arrowObject && null !== this.arrowObject.scene && this.arrowObject.destroy(),
                                    6 === e.length) {
                                        t.next = 6;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 6:
                                    return this.initGroupA(e),
                                    this.initGroupB(e),
                                    this.heros.forEach((function(t) {
                                        b.game.scene.addChild(t.gameObject)
                                    }
                                    )),
                                    this.heros.forEach((function(t) {
                                        t.init()
                                    }
                                    )),
                                    s = r ? "/api/pvpNewbie/combat" : "/api/pvp/combat",
                                    t.next = 13,
                                    nt["a"].get(s, {
                                        player1: a,
                                        player2: i
                                    });
                                case 13:
                                    if (o = t.sent,
                                    !o.data.error) {
                                        t.next = 17;
                                        break
                                    }
                                    return n({
                                        error: o.data.error
                                    }),
                                    t.abrupt("return");
                                case 17:
                                    for (l = o.data.result,
                                    h = o.data.changeScore,
                                    u = 0; u < l.length; u++)
                                        l[u].data = l[u].data.map((function(t) {
                                            var e = b.heros.find((function(e) {
                                                return t.from.nftId === e.item.nftId
                                            }
                                            ))
                                              , a = b.heros.find((function(e) {
                                                return t.to.nftId === e.item.nftId
                                            }
                                            ));
                                            return t.from = e,
                                            t.to = a,
                                            t
                                        }
                                        ));
                                    return f = l,
                                    t.next = 23,
                                    this.playStartAnimation();
                                case 23:
                                    this.game.skip = !1,
                                    m = [],
                                    _ = 0;
                                case 26:
                                    if (!(_ < f.length)) {
                                        t.next = 67;
                                        break
                                    }
                                    p = f[_],
                                    d = c(p.data),
                                    t.prev = 29,
                                    d.s();
                                case 31:
                                    if ((y = d.n()).done) {
                                        t.next = 41;
                                        break
                                    }
                                    if (g = y.value,
                                    !this.skip) {
                                        t.next = 37;
                                        break
                                    }
                                    m.push(g.from.playAttackAnimation(g.to, g.hitValue)),
                                    t.next = 39;
                                    break;
                                case 37:
                                    return t.next = 39,
                                    g.from.playAttackAnimation(g.to, g.hitValue);
                                case 39:
                                    t.next = 31;
                                    break;
                                case 41:
                                    t.next = 46;
                                    break;
                                case 43:
                                    t.prev = 43,
                                    t.t0 = t["catch"](29),
                                    d.e(t.t0);
                                case 46:
                                    return t.prev = 46,
                                    d.f(),
                                    t.finish(46);
                                case 49:
                                    if ("success" !== p.result) {
                                        t.next = 57;
                                        break
                                    }
                                    return this.game.skip = !1,
                                    t.next = 53,
                                    Promise.all(m);
                                case 53:
                                    this.playSuccessAnimation(),
                                    this.playArrow(h, !0),
                                    t.next = 63;
                                    break;
                                case 57:
                                    if ("fail" !== p.result) {
                                        t.next = 63;
                                        break
                                    }
                                    return this.game.skip = !1,
                                    t.next = 61,
                                    Promise.all(m);
                                case 61:
                                    this.playFailAnimation(),
                                    this.playArrow(h, !1);
                                case 63:
                                    n(p);
                                case 64:
                                    _++,
                                    t.next = 26;
                                    break;
                                case 67:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this, [[29, 43, 46, 49]])
                    }
                    )));
                    function e(e, a, i, r, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }, {
                key: "calcRankValue",
                value: function(t, e, a) {
                    var i = 32
                      , r = a ? 1 : 0
                      , n = !r
                      , s = 1 / (1 + Math.pow(10, (e - t) / 400))
                      , o = 1 / (1 + Math.pow(10, (t - e) / 400))
                      , l = t + i * (r - s)
                      , h = e + i * (n - o);
                    return [l, h]
                }
            }, {
                key: "showRankValue",
                value: function(t, e, a) {
                    var i = 32
                      , r = a ? 1 : 0
                      , n = 1 / (1 + Math.pow(10, (e - t) / 400));
                    return i * (r - n)
                }
            }, {
                key: "end",
                value: function() {
                    clearInterval(this.interval),
                    this.clearResultAnimation(),
                    this.clearHeroes()
                }
            }, {
                key: "bossStart",
                value: function(t, e, a) {
                    var i, r = this;
                    this.interval && clearInterval(this.interval),
                    this.attacking = !1,
                    this.clearHeroes(),
                    this.clearResultAnimation();
                    var n = new it(t,{
                        x: this.canvasWidth / 2,
                        y: this.canvasHeight / 2
                    });
                    this.defendHeros = [n],
                    this.heros.push(n);
                    var s = this.canvasHeight / 2.5
                      , h = {
                        x: this.canvasWidth / 2,
                        y: this.canvasHeight / 2
                    }
                      , u = rt["a"].getCirclePoints(s, h, e.length);
                    this.attackHeros = e.map((function(t, e) {
                        var a = u[e]
                          , i = new it(t,a);
                        return i
                    }
                    )),
                    (i = this.heros).push.apply(i, Object(o["a"])(this.attackHeros)),
                    this.heros.forEach((function(t) {
                        r.game.scene.addChild(t.gameObject)
                    }
                    )),
                    this.playStartAnimation(),
                    this.interval = setInterval(Object(l["a"])(regeneratorRuntime.mark((function t() {
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    r.bossAttack().then((function(t) {
                                        "success" === t.result ? (clearInterval(r.interval),
                                        r.playSuccessAnimation()) : "fail" === t.result && (clearInterval(r.interval),
                                        r.playFailAnimation()),
                                        a(t)
                                    }
                                    ));
                                case 1:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t)
                    }
                    ))), 3500)
                }
            }, {
                key: "bossAttack",
                value: function() {
                    var t = Object(l["a"])(regeneratorRuntime.mark((function t() {
                        var e, a, i, r, n = this;
                        return regeneratorRuntime.wrap((function(t) {
                            while (1)
                                switch (t.prev = t.next) {
                                case 0:
                                    if (!this.attacking) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 2:
                                    if (this.attacking = !0,
                                    e = [],
                                    a = this.defendHeros[0],
                                    this.attackHeros.forEach((function(t) {
                                        if (!t.death && !a.death) {
                                            var i = n.reverse ? [a, t] : [t, a];
                                            e.push(i)
                                        }
                                    }
                                    )),
                                    0 !== e.length) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 8:
                                    return i = e.map((function(t) {
                                        return t[0].attack(t[1])
                                    }
                                    )),
                                    t.next = 11,
                                    Promise.all(i);
                                case 11:
                                    return r = t.sent,
                                    this.reverse = !this.reverse,
                                    t.abrupt("return", new Promise((function(t) {
                                        n.attacking = !1,
                                        a.death ? t({
                                            result: "success",
                                            data: r
                                        }) : n.attackHeros[0].death ? t({
                                            result: "fail",
                                            data: r
                                        }) : t({
                                            result: "battle",
                                            data: r
                                        })
                                    }
                                    )));
                                case 14:
                                case "end":
                                    return t.stop()
                                }
                        }
                        ), t, this)
                    }
                    )));
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e
                }()
            }]),
            t
        }()
          , ot = a("9fea")
          , lt = a("cf6b")
          , ht = a("d2ba")
          , ut = a("bf32")
          , ct = a("3904")
          , ft = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("div", {
                staticClass: "box"
            }, [a("b-modal", {
                ref: "modal-danger",
                attrs: {
                    "ok-only": "",
                    "ok-variant": "danger",
                    "ok-title": "Confirm",
                    "modal-class": "modal-danger",
                    title: "Error"
                },
                on: {
                    hidden: t.hiddenModal
                }
            }, [a("b-card-text", [t._v(" Can not sync Combat Result due to the congestion of BSC. Combat Ticket is not consumed. ")])], 1)], 1)
        }
          , mt = []
          , _t = {
            name: "CombatSyncFailDailog",
            mounted: function() {
                this.$refs["modal-danger"].show()
            },
            methods: {
                hiddenModal: function() {
                    this.$refs["buyTicket-modal"] && this.$refs["modal-danger"].hide(),
                    this.$emit("close")
                }
            }
        }
          , pt = _t
          , dt = (a("4548"),
        a("4ac2"))
          , yt = Object(dt["a"])(pt, ft, mt, !1, null, "1ebc3685", null)
          , gt = yt.exports
          , bt = a("de8d")
          , vt = a("2008")
          , Dt = {
            name: "Combat",
            components: {
                PvpCombat2: vt["a"],
                NFTCard: ht["a"],
                SelectCard: ot["a"],
                BuyTicketDialog: ct["a"],
                CombatSyncFailDailog: gt,
                SettleDialog: bt["a"]
            },
            data: function() {
                return {
                    isCombat: !0,
                    combatSyncFail: !1,
                    showBuyTicketDialog: !1,
                    items: [],
                    fields: [{
                        key: "ranking",
                        label: "Ranking"
                    }, {
                        key: "nickname",
                        label: "Player"
                    }, {
                        key: "attackCards",
                        label: "Attack"
                    }, {
                        key: "defenseCards",
                        label: "Defense"
                    }, {
                        key: "score",
                        label: "Score"
                    }, {
                        key: "id",
                        label: "Combat"
                    }],
                    myItem: {
                        attackCards: [],
                        defenseCards: [],
                        bossCards: [],
                        hitPlayer: {
                            lower: 0,
                            higher: 0
                        }
                    },
                    targetItem: {
                        attackCards: [],
                        defenseCards: [],
                        bossCards: []
                    },
                    game: null,
                    battlefieldVisible: !0,
                    loading: !1
                }
            },
            computed: Object(h["a"])({}, Object(lt["b"])("farm", ["defaultAccount"])),
            watch: {
                defaultAccount: function(t) {
                    t && t.length > 0 && this.initData()
                }
            },
            mounted: function() {
                var t = this;
                return Object(l["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.getTimestamp();
                            case 2:
                                t.battlefieldVisible = !1,
                                t.loadResource(),
                                t.initGame(),
                                t.initData();
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            destroyed: function() {
                this.game.end()
            },
            methods: {
                getTimestamp: function() {
                    var t = this;
                    nt["a"].get("/api/pvp/timestamp").then((function(e) {
                        t.isCombat = e.isCombat
                    }
                    ))
                },
                loadResource: function() {
                    _["j"].on(_["d"].COMPLETE, (function(t) {}
                    )),
                    _["j"].preload()
                },
                initGame: function() {
                    this.canvasWidth = this.$refs["canvas"].clientWidth,
                    this.canvasHeight = this.$refs["canvas"].clientHeight,
                    this.game = new st("#canvas",this.canvasWidth,this.canvasHeight)
                },
                initData: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        var a, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.loading = !0,
                                    a = {
                                        owner: t.defaultAccount
                                    },
                                    e.next = 4,
                                    nt["a"].get("/api/pvp/getMyCombatNfts", a);
                                case 4:
                                    return i = e.sent,
                                    t.myItem = i.data,
                                    e.next = 8,
                                    nt["a"].get("/api/pvp/combatList", {
                                        player: t.defaultAccount
                                    });
                                case 8:
                                    r = e.sent,
                                    r.data && 0 !== r.data.length && (t.items = r.data.map((function(e) {
                                        return t.myItem.owner.toLowerCase() === e.owner.toLowerCase() && (t.myItem.hitPlayer = t.calcHitPlayerRanking(e.ranking),
                                        t.myItem.score = e.score),
                                        e.show = 3 === e.defenseCards.length && 3 === e.attackCards.length,
                                        e
                                    }
                                    ))),
                                    t.loading = !1;
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                handleSetAttackCards: function(t) {
                    var e = this;
                    if (3 === t.length) {
                        var a = t.map((function(t) {
                            return t.nftId
                        }
                        ))
                          , i = {
                            owner: this.defaultAccount,
                            attack: a.join(",")
                        };
                        nt["a"].post("/api/pvp/setMyCombatNfts", i).then((function(t) {
                            e.myItem = t.data,
                            e.initData()
                        }
                        ))
                    }
                },
                handleSetDefenseCards: function(t) {
                    var e = this;
                    if (3 === t.length) {
                        var a = t.map((function(t) {
                            return t.nftId
                        }
                        ))
                          , i = {
                            owner: this.defaultAccount,
                            defense: a.join(",")
                        };
                        nt["a"].post("/api/pvp/setMyCombatNfts", i).then((function(t) {
                            e.myItem = t.data,
                            e.initData()
                        }
                        ))
                    }
                },
                getBuyTicketCount: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Object(ut["j"])().userInfo(t.defaultAccount);
                                case 3:
                                    return a = e.sent,
                                    e.abrupt("return", a.count.toNumber());
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    console.error("userInfo", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                },
                buyTicketCallback: function(t) {
                    t && this.chooseTarget(this.targetItem)
                },
                getCombatCount: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", nt["a"].get("/api/pvp/myCombatCount", {
                                        owner: t.defaultAccount
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                chooseTarget: function(t) {
                    var e = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function a() {
                        var i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return e.targetItem = t,
                                    a.next = 3,
                                    Promise.all([e.getBuyTicketCount(), e.getCombatCount()]);
                                case 3:
                                    if (i = a.sent,
                                    !(i[0] <= i[1])) {
                                        a.next = 7;
                                        break
                                    }
                                    return e.showBuyTicketDialog = !0,
                                    a.abrupt("return");
                                case 7:
                                    e.battlefieldVisible = !0,
                                    e.start();
                                case 9:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                skip: function() {
                    this.game.skip = !0
                },
                start: function() {
                    var t = this
                      , e = [];
                    e.push.apply(e, Object(o["a"])(this.myItem.attackCards)),
                    e.push.apply(e, Object(o["a"])(this.targetItem.defenseCards)),
                    this.loading = !0,
                    this.game.start(e, this.myItem.owner, this.targetItem.owner, !1, (function(e) {
                        e.error ? t.syncCombat(e.error) : ("success" === e.result || "fail" === e.result) && (t.loading = !1,
                        t.initData())
                    }
                    ))
                },
                syncCombat: function(t) {
                    "1001" === t ? this.$NotifyError("Error", "Combat expired, please refresh the Page.") : "tickets error" === t ? this.combatSyncFail = !0 : "combat is closed" === t ? this.isCombat = !1 : this.combatSyncFail = !0
                },
                calcHitPlayerRanking: function(t) {
                    var e = {
                        lower: 0,
                        higher: 0
                    };
                    return t >= 1 && t <= 23 ? (e.higher = t - 9 < 1 ? 1 : t - 9,
                    e.lower = t + 9) : t >= 24 && t <= 201 ? (e.higher = t - (t - 5 + .5 + Math.pow(-1, t - 5 - 1) / 2) / 2,
                    e.lower = t + (t - 5 + .5 + Math.pow(-1, t - 5 - 1) / 2) / 2) : (e.higher = t - 100,
                    e.lower = t + 100),
                    e
                }
            }
        }
          , Tt = Dt
          , At = (a("2cd2"),
        Object(dt["a"])(Tt, n, s, !1, null, "3367de62", null))
          , Pt = At.exports
          , Ot = function() {
            var t = this
              , e = t.$createElement
              , i = t._self._c || e;
            return i("div", [i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.battlefieldVisible,
                    expression: "!battlefieldVisible"
                }]
            }, [i("b-row", {
                staticClass: "match-height"
            }, [i("b-col", {
                attrs: {
                    lg: "12",
                    md: "12"
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
                    click: function(e) {
                        return t.$router.push({
                            name: "combatNewcomerRewards"
                        })
                    }
                }
            }, [t._v(" " + t._s(t.$t("CombatPage.CombatRewardsBtn")) + " ")])], 1)], 1)], 1)], 1), i("b-row", [i("b-col", {
                attrs: {
                    md: "6"
                }
            }, [i("b-card", [i("b-card-title", {
                staticClass: "text-center"
            }, [t._v(" Newbie Pool Testing")]), i("b-card-text", [t._v(" This pool is dedicated to new warriors of ZOO-Crypto World. Every new warriors within 3 days will enjoy this extra KEY rewards Pool. Total: 500 Keys. ")])], 1), i("b-card", {
                staticClass: "card-app-design p-relative"
            }, [i("b-overlay", {
                attrs: {
                    show: t.loading,
                    "no-wrap": ""
                }
            }), i("b-card-title", {
                staticClass: "mt-1 mb-75"
            }, [t._v(t._s(t.$t("CombatPage.Tournament")))]), i("div", {
                staticClass: "design-group"
            }, [i("h6", {
                staticClass: "section-label"
            }, [t._v(t._s(t.$t("CombatPage.Team")))]), i("SelectCard", {
                staticClass: "mb-1",
                attrs: {
                    desc: "Select attack cards",
                    selected: t.myItem.attackCards,
                    quantity: 3,
                    disabled: t.loading
                },
                on: {
                    change: t.handleSetAttackCards
                }
            }), i("SelectCard", {
                attrs: {
                    desc: "Select defense cards",
                    selected: t.myItem.defenseCards,
                    quantity: 3,
                    disabled: t.loading
                },
                on: {
                    change: t.handleSetDefenseCards
                }
            })], 1), i("div", {
                staticClass: "text-right"
            }, [i("b-button", {
                attrs: {
                    variant: "primary",
                    size: "sm"
                },
                on: {
                    click: function(e) {
                        return t.$router.push({
                            name: "combatRecords"
                        })
                    }
                }
            }, [i("feather-icon", {
                staticClass: "mr-50",
                attrs: {
                    icon: "EyeIcon"
                }
            }), t._v(" Combat History ")], 1)], 1), i("div", {
                staticClass: "design-group"
            }, [i("h6", {
                staticClass: "section-label"
            }, [t._v(t._s(t.$t("CombatPage.Rank")))]), i("b-table", {
                attrs: {
                    bordered: "",
                    responsive: "",
                    small: "small",
                    items: t.items,
                    fields: t.fields
                },
                scopedSlots: t._u([{
                    key: "cell()",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "text-center"
                        }, [t._v(" " + t._s(e.value) + " ")])]
                    }
                }, {
                    key: "cell(nickname)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "text-center"
                        }, [t._v(" " + t._s(e.value ? e.value : e.item.player) + " ")])]
                    }
                }, {
                    key: "cell(attackCards)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "d-flex"
                        }, t._l(e.value, (function(t, e) {
                            return i("NFTCard", {
                                key: e,
                                staticStyle: {
                                    width: "30px"
                                },
                                attrs: {
                                    nft: t
                                }
                            })
                        }
                        )), 1)]
                    }
                }, {
                    key: "cell(defenseCards)",
                    fn: function(e) {
                        return [i("div", {
                            staticClass: "d-flex"
                        }, t._l(e.value, (function(t, e) {
                            return i("NFTCard", {
                                key: e,
                                staticStyle: {
                                    width: "30px"
                                },
                                attrs: {
                                    nft: t
                                }
                            })
                        }
                        )), 1)]
                    }
                }, {
                    key: "cell(id)",
                    fn: function(e) {
                        return [3 === t.myItem.defenseCards.length && 3 === t.myItem.attackCards.length && t.isCombat ? i("b-button", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.item.show && t.myItem.owner !== e.item.owner && (t.myItem.hitPlayer && t.myItem.hitPlayer.higher <= e.item.ranking && e.item.ranking <= t.myItem.hitPlayer.lower || Math.abs(t.myItem.score - e.item.score) <= 10),
                                expression: "data.item.show && myItem.owner !== data.item.owner && ((myItem.hitPlayer && myItem.hitPlayer.higher <= data.item.ranking && data.item.ranking<= myItem.hitPlayer.lower) || Math.abs(myItem.score-data.item.score)<=10)"
                            }],
                            attrs: {
                                variant: "primary",
                                block: "",
                                size: "sm",
                                pill: ""
                            },
                            on: {
                                click: function(a) {
                                    return t.chooseTarget(e.item)
                                }
                            }
                        }, [t._v(" " + t._s(t.$t("CombatPage.CombatBtn")) + " ")]) : i("b-button", {
                            attrs: {
                                variant: "primary",
                                block: "",
                                pill: "",
                                disabled: "",
                                size: "sm"
                            }
                        }, [t._v(" " + t._s(t.$t("CombatPage.CombatBtn")) + " ")])]
                    }
                }])
            })], 1)], 1)], 1), i("b-col", {
                attrs: {
                    md: "6"
                }
            }, [i("b-card", [i("div", {
                staticClass: "w-100 d-flex justify-content-center"
            }, [i("img", {
                staticClass: "w-50",
                attrs: {
                    src: a("bb74")
                }
            })])]), i("newbie-rewards-description")], 1)], 1)], 1), t.showBuyTicketDialog ? i("buy-ticket-dialog", {
                on: {
                    close: function(e) {
                        t.showBuyTicketDialog = !1
                    },
                    buyTicketCallback: t.buyTicketCallback
                }
            }) : t._e(), i("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.battlefieldVisible,
                    expression: "battlefieldVisible"
                }],
                staticStyle: {
                    position: "relative"
                }
            }, [i("canvas", {
                ref: "canvas",
                staticStyle: {
                    width: "100%",
                    "border-radius": "5px",
                    background: "url('/combat/bg.jpg') no-repeat",
                    "background-size": "100% 100%"
                },
                attrs: {
                    id: "canvas"
                }
            }), i("b-button", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.game && !1 === t.game.skip,
                    expression: "game && game.skip === false"
                }],
                staticStyle: {
                    position: "absolute",
                    bottom: "60px",
                    right: "10px"
                },
                attrs: {
                    pill: "",
                    variant: "outline-primary"
                },
                on: {
                    click: t.skip
                }
            }, [t._v(" Skip ")]), i("div", {
                staticClass: "text-center"
            }, [i("b-button", {
                attrs: {
                    pill: "",
                    variant: "primary",
                    disabled: t.loading
                },
                on: {
                    click: function(e) {
                        t.battlefieldVisible = !1
                    }
                }
            }, [i("feather-icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.loading,
                    expression: "!loading"
                }],
                staticClass: "mr-50",
                attrs: {
                    icon: "ArrowLeftIcon"
                }
            }), t._v(" " + t._s(t.$t("CombatPage.BackBtn")) + " ")], 1)], 1)], 1), t.combatSyncFail ? i("combat-sync-fail-dailog", {
                on: {
                    close: function(e) {
                        t.combatSyncFail = !1
                    }
                }
            }) : t._e(), t.isCombat ? t._e() : i("settle-dialog")], 1)
        }
          , St = []
          , xt = a("d6f6")
          , wt = {
            name: "CombatNewcomer",
            components: {
                NewbieRewardsDescription: xt["a"],
                NFTCard: ht["a"],
                SelectCard: ot["a"],
                BuyTicketDialog: ct["a"],
                CombatSyncFailDailog: gt,
                SettleDialog: bt["a"]
            },
            data: function() {
                return {
                    isCombat: !0,
                    combatSyncFail: !1,
                    showBuyTicketDialog: !1,
                    items: [],
                    fields: [{
                        key: "ranking",
                        label: "Ranking"
                    }, {
                        key: "nickname",
                        label: "Player"
                    }, {
                        key: "attackCards",
                        label: "Attack"
                    }, {
                        key: "defenseCards",
                        label: "Defense"
                    }, {
                        key: "score",
                        label: "Score"
                    }, {
                        key: "id",
                        label: "Combat"
                    }],
                    myItem: {
                        attackCards: [],
                        defenseCards: [],
                        bossCards: [],
                        hitPlayer: {
                            lower: 0,
                            higher: 0
                        }
                    },
                    targetItem: {
                        attackCards: [],
                        defenseCards: [],
                        bossCards: []
                    },
                    game: null,
                    battlefieldVisible: !0,
                    loading: !1
                }
            },
            computed: Object(h["a"])({}, Object(lt["b"])("farm", ["defaultAccount"])),
            watch: {
                defaultAccount: function(t) {
                    t && t.length > 0 && this.initData()
                }
            },
            mounted: function() {
                var t = this;
                return Object(l["a"])(regeneratorRuntime.mark((function e() {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                t.getTimestamp();
                            case 2:
                                t.battlefieldVisible = !1,
                                t.loadResource(),
                                t.initGame(),
                                t.initData();
                            case 6:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            destroyed: function() {
                this.game.end()
            },
            methods: {
                getTimestamp: function() {
                    var t = this;
                    nt["a"].get("/api/pvpNewbie/timestamp").then((function(e) {
                        t.isCombat = e.isCombat
                    }
                    ))
                },
                loadResource: function() {
                    _["j"].on(_["d"].COMPLETE, (function(t) {}
                    )),
                    _["j"].preload()
                },
                initGame: function() {
                    this.canvasWidth = this.$refs["canvas"].clientWidth,
                    this.canvasHeight = this.$refs["canvas"].clientHeight,
                    this.game = new st("#canvas",this.canvasWidth,this.canvasHeight)
                },
                initData: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        var a, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t.loading = !0,
                                    a = {
                                        owner: t.defaultAccount
                                    },
                                    e.next = 4,
                                    nt["a"].get("/api/pvpNewbie/getMyCombatNfts", a);
                                case 4:
                                    return i = e.sent,
                                    t.myItem = i.data,
                                    e.next = 8,
                                    nt["a"].get("/api/pvpNewbie/combatList", {
                                        player: t.defaultAccount
                                    });
                                case 8:
                                    r = e.sent,
                                    r.data && 0 !== r.data.length && (t.items = r.data.map((function(e) {
                                        return t.myItem.owner.toLowerCase() === e.owner.toLowerCase() && (t.myItem.hitPlayer = t.calcHitPlayerRanking(e.ranking),
                                        t.myItem.score = e.score),
                                        e.show = 3 === e.defenseCards.length && 3 === e.attackCards.length,
                                        e
                                    }
                                    ))),
                                    t.loading = !1;
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                handleSetAttackCards: function(t) {
                    var e = this;
                    if (3 === t.length) {
                        var a = t.map((function(t) {
                            return t.nftId
                        }
                        ))
                          , i = {
                            owner: this.defaultAccount,
                            attack: a.join(",")
                        };
                        nt["a"].post("/api/pvpNewbie/setMyCombatNfts", i).then((function(t) {
                            e.myItem = t.data,
                            e.initData()
                        }
                        ))
                    }
                },
                handleSetDefenseCards: function(t) {
                    var e = this;
                    if (3 === t.length) {
                        var a = t.map((function(t) {
                            return t.nftId
                        }
                        ))
                          , i = {
                            owner: this.defaultAccount,
                            defense: a.join(",")
                        };
                        nt["a"].post("/api/pvpNewbie/setMyCombatNfts", i).then((function(t) {
                            e.myItem = t.data,
                            e.initData()
                        }
                        ))
                    }
                },
                getBuyTicketCount: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        var a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    e.next = 3,
                                    Object(ut["j"])().userInfo(t.defaultAccount);
                                case 3:
                                    return a = e.sent,
                                    e.abrupt("return", a.count.toNumber());
                                case 7:
                                    e.prev = 7,
                                    e.t0 = e["catch"](0),
                                    console.error("userInfo", e.t0);
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[0, 7]])
                    }
                    )))()
                },
                buyTicketCallback: function(t) {
                    t && this.chooseTarget(this.targetItem)
                },
                getCombatCount: function() {
                    var t = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", nt["a"].get("/api/pvpNewbie/myCombatCount", {
                                        owner: t.defaultAccount
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                chooseTarget: function(t) {
                    var e = this;
                    return Object(l["a"])(regeneratorRuntime.mark((function a() {
                        var i;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return e.targetItem = t,
                                    a.next = 3,
                                    Promise.all([e.getBuyTicketCount(), e.getCombatCount()]);
                                case 3:
                                    if (i = a.sent,
                                    !(i[0] <= i[1])) {
                                        a.next = 7;
                                        break
                                    }
                                    return e.showBuyTicketDialog = !0,
                                    a.abrupt("return");
                                case 7:
                                    e.battlefieldVisible = !0,
                                    e.start();
                                case 9:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )))()
                },
                skip: function() {
                    this.game.skip = !0
                },
                start: function() {
                    var t = this
                      , e = [];
                    e.push.apply(e, Object(o["a"])(this.myItem.attackCards)),
                    e.push.apply(e, Object(o["a"])(this.targetItem.defenseCards)),
                    this.loading = !0,
                    this.game.start(e, this.myItem.owner, this.targetItem.owner, !0, (function(e) {
                        e.error ? t.syncCombat(e.error) : ("success" === e.result || "fail" === e.result) && (t.loading = !1,
                        t.initData())
                    }
                    ))
                },
                syncCombat: function(t) {
                    "1001" === t ? this.$NotifyError("Error", "Combat expired, please refresh the Page.") : "tickets error" === t ? this.combatSyncFail = !0 : "combat is closed" === t ? this.isCombat = !1 : this.combatSyncFail = !0
                },
                calcHitPlayerRanking: function(t) {
                    var e = {
                        lower: 0,
                        higher: 0
                    };
                    return t >= 1 && t <= 23 ? (e.higher = t - 9 < 1 ? 1 : t - 9,
                    e.lower = t + 9) : t >= 24 && t <= 201 ? (e.higher = t - (t - 5 + .5 + Math.pow(-1, t - 5 - 1) / 2) / 2,
                    e.lower = t + (t - 5 + .5 + Math.pow(-1, t - 5 - 1) / 2) / 2) : (e.higher = t - 100,
                    e.lower = t + 100),
                    e
                }
            }
        }
          , Et = wt
          , Ct = (a("2f88"),
        Object(dt["a"])(Et, Ot, St, !1, null, "fa049b88", null))
          , It = Ct.exports
          , Mt = {
            name: "Index",
            components: {
                Combat: Pt,
                CombatNewcomer: It
            },
            data: function() {
                return {
                    isNewbie: this.$store.state.farm.userinfo.isNewbie
                }
            },
            watch: {
                "$store.state.farm.userinfo": {
                    handler: function(t) {
                        this.isNewbie = t.isNewbie
                    },
                    deep: !0
                }
            },
            mounted: function() {},
            created: function() {}
        }
          , Bt = Mt
          , Ft = Object(dt["a"])(Bt, i, r, !1, null, "61cfe24b", null);
        e["default"] = Ft.exports
    },
    "8ee6": function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAAB0CAMAAABExqW4AAAB/lBMVEUAAABiVu5iVu5Hi9L/vAFiVu5iVu7/vAFiVu5iVu5iVu5iVu5iVu5iVu5iVu5iVu78syv/vAFiVu5iVu5iVu7/vAFiVu5iVu7/vAFiVu5iVu7/vAFiVu7tj51iVu5iVu5iVu7/vAH/vAFiVu5iVu5iVu5iVu5iVu7/vAFiVu5iVu5iVu5iVu5iVu5iVu78tCn/vAFiVu7/vAFiVu5iVu5iVu5iVu7/vAH/vAHtj53/vAHtj51iVu5iVu7/vAFiVu4b0af/vAH/vAFiVu5iVu5iVu4b0aftj53/vAH/vAHtj51iVu7/vAEb0acb0adiVu7/vAH/vAHtj53/vAFiVu5iVu7/vAFiVu5iVu5iVu7/vAH/vAFiVu5iVu7tj53tj51iVu4b0adiVu5iVu7/vAH/vAH/vAFiVu7/vAH/vAH/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAFiVu7/vAH/vAH/vAFiVu4b0acb0af/vAFiVu7/vAEb0acb0acb0af/vAEb0af/vAH/vAH/vAH/vAEb0aftj53tj53/vAEb0af/vAH/vAEb0aftj53/vAEb0aftj53tj50b0aftj53tj50b0acb0af/vAEb0acb0acb0acb0aftj53tj53tj50b0aftj53tj53tj53tj53tj51iVu7/vAHtj50b0ae3TuNqAAAApnRSTlMABvYD4f0L8RTpiPLhtTglBP76zEz37L6YGwL0pZmRg0L85uWuoXcvIx4Pl41vXgfruaacZlM8Hw/17+Pb1NLIsa+OamFWS0g+OCMhE/3s19bPwb6yqaF+c1lZSUYYFvzdyMN7e2tONCgXDfvjy7i0m4N0Tzs0LSsiFtzQxcKhlIqHcWVDMZp7b25gXlMzHQoH79fWzru3p5N8d3A/27OhVVE9L6mPdPsNfAAAChJJREFUeNrE2utTElEYBvDHQCgzg5LEyEysJLtgVELYja5iZjo0VlBTlpqa10q7WVnqhybLmma6TH0+R/7LVjda2N1z9pC76++rMw7PvMt73vMusMFghOpww1KNZbCLpy9O7U/oOr2uBPaYH6HU/oSuKkJ2wQ5DZ+voGiQs2UQIqYUN+p2UyQnLOHYTyWlYLjpG6VokdOwgy0obYS3PowBdk4TbjxDZY1gqlvBSkxK21bTcaalpg6Cd5K/9sNDkeICOvj9lSsJLx5eWHb8EIWUk5yqsEuvropIJYPJH06oTtkkB5YhCVbxOFNWwRFIq34oFSMILKe/qEtYs5dTA2A2S5xBk5pdPFoIs2vtiNQlblnJaYOgcybcHZkt257XPOBSt3b7/TnhnKecOjBwiBerNLl9hY0kV/nV22voaXiglhZ7CPE80VToLlYGZgrZzyvTvYeUWonIOJmnXOxc+QMPTn6grOmHbF8FeeksTkFwD1883Z3qGvwuWT2sKegbfdSoJTT0Pm9cRjY0O8HRkJa+Myid/Yi2fBwxJv7uohPhU03K8peYTuCo2Eh0V4PmalXwFT2vERxlGwLaYTnmlhGZq2Eb03AdPT1bSwS8f2zi4QhNjMNHTDURXFXjODH/99vot9ExOjMnlY5uFjTaXE33rXCiep/Wsk9IuaiAJ+1SXE5ZbKFI445cPtXS/k/LULaKA48xFWOX2CcJUhmIsLkTiVOZtl1cwTJ0o9Db78Bessf4kYdsKYbEPiYBqIJkcoUwRFLh4Reparz/DCrUvNxCm0vUQMjg76tMZyTzvA5ThEfI968gu63kOa5Rsbr55Y+fu0/WlRO0CjEXfpTTPY7/RsmkO+V5lZcMfYbYbDcjjqK44drBsx72764RXGQO9I16dPjKEnIUg1dOOfB+Hs7JXMNf2MtY1d31D5dHaPYdPvgTP/ATjTJ+GIvbDa3y9fd6TXdbxDKZyHOF2Sz7PE+nYY5lAvqT2cExA5fNrKeCVizBVyW7O/YHPM+cPUo5Wo9XoBDR+Pcy+hakaq4jkLoqX6Y5TLl8YKqFRdSfSunjGATPd3iqfBy4IG5rqf3820ZVKvqB8o9BKFxQ9Cstdzk0yD2AoPJDpm4mMNP07yobGKVcvdMT8SsdpguUa6kV3hpHpoOokGATQ30Q5JqHrSaeyhbJa8zbh0ZOqjclTzChlinugL9zrU0YeS1XmrSw2FZswDVmfjzIkwBRKKf/DQoe2EEV5kQndYfw1wLoD9oHjw/LzPQBLHSQFXODibB/CM16qZwo87d3egAcW2l5b1LoJ3MO81Um1gjAw1w0rKJOayvmiEr5AgViEcfWznzKpqR0Al9FRl45zltn2c1URjU3FJPSGoBZN0UJRrJ31W4lWObjY1yJlrvZpnmP7KZOaViN4RLac851U4ceaeVpPdFWIJ/TFoGsx75abxlqp2EYU4s1UsE1mgsoe0W7KpMawUzxhBkztCbqiC6aK+p0+pz8KYze3EJbDwgmDHnDMBswfqufc8qg4ByN7CVu9cMIZcIWm5TKbJ+SmMncIfJUbyIFNzM1vo2jCKfB5euvqhsCytALF8At26MYjcox9j2t1YzYLJuwS+T0JzEzoFPtlxq1yItkHWbU25lFwBJWE7yDA1IR1yjkFJtd+suIy8lRXXr9WL9ZMB5ry1hcCbK9h810ia4Da7VzMKvBM5SKOQYi938OSA6WEsVNTYu7eCq75vxHT9icMBagsEIKuByc57UTcfJxK4mH1W9vflidERo7ozugXsHYL94W1uEm3/Jxo3tpanhCh8aA36NevYMNLkq8Sq5D8082d9SYRRXEA/8+QQeiwKDQgiJRoaUMLGFKo0dhUU7VqTTRE0pLY1rQmdYk+qHGNy1Pb9MGosRob9+WI31KYUrY7dzoVZgB/r0xCDsy95957zkwxxHsqVdvlV2gby6KHqXU24d6ux1Cr2j59hDZxj1ODPJpy5g74VVvzBRMiNUqjFdiq7Tu0gXuBWBNoErdqa7rghEgqBtAkXtXWdLEUqVpEy20oVVuzJWVue1PrnX5ngclmLxFPHP+DvI+4htH9bDnSMIKud9dOWkLoeq6QSBr60e3cOXKMhu3E40RV9u2XlW/noMuJs+gIgREPkRewREZ82/dsH2GeoeHb9fvENbSdrUesHu0KvVGZWAuoeFkoyUKXPcUDmr3X0VbWRV/DZCJkcsyYHEPFJPOUkGaERfuuon2EiYNqZ2bWfL/Ii3C1ULKq9y4tOnoGoeHMENogmL9CFdOoM5R0eqjC0fi013f9ER64D6SJpPG+iABz9T7R3iDZ0n6JrU5kCyVzuiO8eBiAVaYSMTUzGIRZXAs6DipmE5tXyah4XSh6Db0R3jqPkmHaYs+lp2CCB8wqOwJ1sRkvkYiKc99Wvrxdhz4Hbt+AYpBqXRnO2GCoqahEjQbB5V4cw795cQhl41RP8vYYNyxtYQ+xAjDUSWKJqYGlIFpuqE8mNQIMZfWRKl8u7UYrCQnON4kwWJi4roycsqE1LCcd3G+BwR6QFikcOraQC88kI24rmjDgIR4vjLZAGvqFmEhl4gV/KJ44NaozVuuUq/fkQDzq9DqcQCwscnsqjJYkvmELsEgM31gq2pPIuGICPyqxsX3J1udr0y5e8BFPn/L5MeKzjzmjfckIE5XqPt06c5BYYRguTuqkNBSXaRun7kqkQXqALUKa/bmmYTg3qRIzKOsnTXFggjREUSOY8TKVCYNY3p9GmZ9U+EaxJSaSBr8FQA9xeaZQL+JnFt6GeP7n5ho25Yl1cFBn85XDhqJgaCdnukv9ElVEYIyNUgXmAxSCnRpdiKGGcIF4PC4oBD+pE2ehwj3iYRbeLf8LS55Dwdxj4zZUaE82aZQNPdlZaSUQlw1eeH8olew3oHBLVMfJ5PTc9ofuNtWsItvAY5v2GbvwXrup/IWKFNWKWtAoJpMar4Aqt32n9T9rwkEyjHP6fSWSDNXoCert9LTHUMslsldYoUlIXoIpLNXFhpQAgzPZSJdRj838CXSKPirz8NJTREeNncn8DgGdIiaRQo6AJ8csN4Ng9DT203cOJ5XYl8AVkBtS5hBYweG6SyzoHL1UdGxKf1u57IYayyWqyqCDWBxE3lkwuJNNhvu24mouCaKTTJPfCm0RzaUKm/kvo6MEogK2E6ItKWaEsZnfj+4TkKsbCgaT+V3oQjOkEJd0vMvQiW4kjOlLc3kiaRCqJrNz6GQRtT3tw+XjbGYJQdXqfOFtZ4cYIhoXUOvj8eI+bA0Nwm6o2K3Ucd+YGOKP9ckdTzb2AGp8LXekPoIOc9mC4jNMcu5nofDpEHYmMYpaz/5sWoYO6wWFaSPx13yhaAVNeVR+ZdlX6PDyjdIvshsmWSkUze9Hc9aKJ1q6H0OZe1OYX4VpDn0qjogfaNbx5YfQbS47CRNNZr/jP/UXWwY/uvmwUHIAAAAASUVORK5CYII="
    },
    9282: function(t, e, a) {},
    bb74: function(t, e, a) {
        t.exports = a.p + "img/element.ca478ed2.png"
    },
    cca2: function(t, e, a) {
        "use strict";
        var i = a("a09b")
          , r = a("7866")
          , n = a("ec87")
          , s = a("f8b2")
          , o = [].join
          , l = r != Object
          , h = s("join", ",");
        i({
            target: "Array",
            proto: !0,
            forced: l || !h
        }, {
            join: function(t) {
                return o.call(n(this), void 0 === t ? "," : t)
            }
        })
    },
    d6f6: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
            return a("b-card", [a("b-card-title", [t._v(" Daily Ranking Rewards")]), a("ul", [a("li", [t._v(" Each of our new users will be automatically assigned to the Newbie Battlefield within the first three days, where you will receive exclusive rewards for newcomers. At the same time, we have also adjusted the overall battle rewards, see below for details ")])]), a("ol", [a("li", {
                staticClass: "mt-75"
            }, [t._v("We will dedicate 350 KEYs for daily newbie combat reward. ")]), a("li", {
                staticClass: "mt-75"
            }, [t._v("200 KEYs, will be disseminated to Every Player who take Part in Combat and burnt ZOO. (Real Play to Earn). ")]), a("li", {
                staticClass: "mt-75"
            }, [t._v("150 KEYs, will be disseminated to TOP 100 newbie Players. ")]), a("li", {
                staticClass: "mt-75"
            }, [t._v("Daily KEY reward of TOP 100 Players is related to EXTRA Combat Chances (ZOO Token Burning), Combat will be caculated as follow ")]), a("ul", [a("li", {
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
            })], 1)
        }
          , r = []
          , n = {
            name: "NewbieRewardsDescription",
            data: function() {
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
            mounted: function() {
                this.day()
            },
            methods: {
                day: function() {
                    for (var t = [["1", 1.5, 3, 6, 10.5, 15], ["2", 1.25, 2.5, 5, 8.75, 12.5], ["3", 1, 2, 4, 7, 10], ["4", .75, 1.5, 3, 5.25, 7.5], ["5", .5, 1, 2, 3.5, 5], ["6", .35, .7, 1.4, 2.45, 3.5], ["7", .3, .6, 1.2, 2.1, 3], ["8-10", .25, .5, 1, 1.75, 2.5], ["11-15", .2, .4, .8, 1.4, 2], ["16-20", .15, .3, .6, 1.05, 1.5], ["21-30", .125, .25, .5, .875, 1.25], ["31-40", .125, .25, .5, .875, 1.25], ["41-50", .1, .2, .4, .7, 1], ["51-60", .1, .2, .4, .7, 1], ["61-70", .075, .15, .3, .525, .75], ["71-80", .075, .15, .3, .525, .75], ["81-90", .05, .1, .2, .35, .5], ["91-100", .05, .1, .2, .35, .5]], e = [], a = 0; a < t.length; a++) {
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
        }
          , s = n
          , o = a("4ac2")
          , l = Object(o["a"])(s, i, r, !1, null, "539b2478", null);
        e["a"] = l.exports
    },
    de8d: function(t, e, a) {
        "use strict";
        var i = function() {
            var t = this
              , e = t.$createElement
              , a = t._self._c || e;
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
        }
          , r = []
          , n = {
            name: "SettleDialog",
            mounted: function() {
                this.$refs["modal"].show()
            },
            methods: {
                hiddenModal: function() {
                    this.$refs["modal"] && this.$refs["modal"].hide(),
                    this.$emit("close")
                }
            }
        }
          , s = n
          , o = (a("3d7e"),
        a("4ac2"))
          , l = Object(o["a"])(s, i, r, !1, null, "e3bfb866", null);
        e["a"] = l.exports
    },
    ee15: function(t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII="
    },
    f024: function(t, e, a) {}
}]);
