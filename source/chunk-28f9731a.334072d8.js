(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-28f9731a"], {
        "049d": function (t, e, a) {
            "use strict";
            a.r(e);
            var i = function () {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", [i("b-button", {
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
                            variant: "flat-primary"
                        },
                        on: {
                            click: function (e) {
                                return t.$router.back()
                            }
                        }
                    }, [i("feather-icon", {
                        staticClass: "mr-50",
                        attrs: {
                            icon: "ArrowLeftIcon"
                        }
                    }), i("span", {
                        staticClass: "align-middle"
                    }, [t._v(t._s(t.$t("NFTDetailPage.Back")))])], 1), i("div", {
                        staticClass: "p-1"
                    }), i("b-row", {
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
                        staticClass: "mb-1 mt-50 text-white"
                    }, [t._v(" " + t._s(t.$t("CombatPage.Title")) + " ")]), i("div", {
                        staticClass: "d-flex justify-content-center"
                    }, [i("div", {
                        staticClass: "p-1"
                    }, [i("div", [t._v("Daily Rewards")]), i("div", {
                        staticClass: "mt-50"
                    }, [t._v(t._s(t.pendingParticipationKeys) + " KEYs")]), i("b-button", {
                        staticClass: "mt-50",
                        attrs: {
                            variant: "relief-primary",
                            disabled: t.pendingParticipationKeys <= 0
                        },
                        on: {
                            click: t.claimParticipationRewards
                        }
                    }, [i("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingKey.participation,
                            expression: "loadingKey.participation"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Claim ")], 1)], 1), i("div", {
                        staticClass: "p-1"
                    }, [i("div", [t._v("Combat Rewards (Top 100)")]), i("div", {
                        staticClass: "mt-50"
                    }, [t._v(t._s(t.pendingDailyKeys) + " KEYs")]), i("b-button", {
                        staticClass: "mt-50",
                        attrs: {
                            variant: "relief-primary",
                            disabled: t.pendingDailyKeys <= 0
                        },
                        on: {
                            click: t.claimDailyRewards
                        }
                    }, [i("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingKey.daily,
                            expression: "loadingKey.daily"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Claim ")], 1)], 1), i("div", {
                        staticClass: "p-1"
                    }, [i("div", [t._v("Weekly Rewards (Top 100)")]), i("div", {
                        staticClass: "mt-50"
                    }, [t._v(t._s(t.pendingWeeklyKeys) + " KEYs")]), i("b-button", {
                        staticClass: "mt-50",
                        attrs: {
                            variant: "relief-primary",
                            disabled: t.pendingWeeklyKeys <= 0
                        },
                        on: {
                            click: t.claimWeeklyRewards
                        }
                    }, [i("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingKey.weekly,
                            expression: "loadingKey.weekly"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Claim ")], 1)], 1), i("div", {
                        staticClass: "p-1"
                    }, [i("div", [t._v("Event Rewards")]), i("div", {
                        staticClass: "mt-50"
                    }, [t._v(t._s(t.pendingMonthlyKeys) + " KEYs")]), i("b-button", {
                        staticClass: "mt-50",
                        attrs: {
                            variant: "relief-primary",
                            disabled: t.pendingMonthlyKeys <= 0
                        },
                        on: {
                            click: t.claimMonthlyRewards
                        }
                    }, [i("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loadingKey.monthly,
                            expression: "loadingKey.monthly"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" Claim ")], 1)], 1)])], 1)], 1)], 1), i("b-row", [i("b-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [i("b-card", [i("b-tabs", {
                        attrs: {
                            pills: "",
                            align: "left"
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
                    }, [i("b-tab", {
                        attrs: {
                            title: "Daily Ranking"
                        }
                    }, [i("daily-rewards")], 1), i("b-tab", {
                        attrs: {
                            title: "Weekly Ranking"
                        }
                    }, [i("weekly-rewards")], 1), i("b-tab", {
                        attrs: {
                            title: "Monthly Ranking"
                        }
                    }, [i("monthly-rewards")], 1)], 1)], 1)], 1), i("b-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [i("pvp-combat2")], 1)], 1)], 1)
                },
                n = [],
                r = a("99a5"),
                s = a("1c03"),
                l = (a("6a61"), a("7478"), a("402f"), a("19f5")),
                o = a("cf6b"),
                c = a("bf32"),
                d = a("238c"),
                u = a("e57c"),
                m = a("53a2"),
                f = a("2008"),
                v = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-card", [a("div", {
                        staticClass: "design-group"
                    }, [a("b-overlay", {
                        attrs: {
                            show: t.loading,
                            rounded: "sm"
                        }
                    }, [a("b-table", {
                        attrs: {
                            bordered: "",
                            responsive: "",
                            small: "small",
                            items: t.items,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell()",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(nickname)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value ? e.value : e.item.player) + " ")])]
                            }
                        }, {
                            key: "cell(attack)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.attackCards, (function (t, e) {
                                    return a("NFTCard", {
                                        key: e,
                                        staticStyle: {
                                            width: "30px"
                                        },
                                        attrs: {
                                            nft: t
                                        }
                                    })
                                })), 1)]
                            }
                        }, {
                            key: "cell(defenseCards)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.defenseCards, (function (t, e) {
                                    return a("NFTCard", {
                                        key: e,
                                        staticStyle: {
                                            width: "30px"
                                        },
                                        attrs: {
                                            nft: t
                                        }
                                    })
                                })), 1)]
                            }
                        }, {
                            key: "cell(defense)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.defenseCards, (function (t, e) {
                                    return a("NFTCard", {
                                        key: e,
                                        staticStyle: {
                                            width: "30px"
                                        },
                                        attrs: {
                                            nft: t
                                        }
                                    })
                                })), 1)]
                            }
                        }, {
                            key: "cell(id)",
                            fn: function (e) {
                                return [t._v(" " + t._s(e.item.id) + " ")]
                            }
                        }])
                    })], 1)], 1), a("b-pagination", {
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": t.pager.total,
                            "per-page": t.pager.perPage,
                            align: "center",
                            "no-page-detect": !0
                        },
                        on: {
                            change: t.currentPageChange
                        },
                        model: {
                            value: t.pager.currentPage,
                            callback: function (e) {
                                t.$set(t.pager, "currentPage", e)
                            },
                            expression: "pager.currentPage"
                        }
                    })], 1)
                },
                h = [],
                g = (a("6540"), a("d2ba")),
                b = a("a13e"),
                y = {
                    name: "Daily",
                    components: {
                        NFTCard: g["a"]
                    },
                    data: function () {
                        return {
                            loading: !0,
                            items: [],
                            fields: [{
                                key: "ranking",
                                label: "Ranking"
                            }, {
                                key: "nickname",
                                label: "Player"
                            }, {
                                key: "attack",
                                label: "Attack"
                            }, {
                                key: "defenseCards",
                                label: "defenseCards"
                            }, {
                                key: "score",
                                label: "Score"
                            }],
                            pager: {
                                currentPage: 1,
                                perPage: 50,
                                total: 0
                            }
                        }
                    },
                    mounted: function () {
                        this.getRecords(this.pager.currentPage, this.pager.perPage)
                    },
                    methods: {
                        currentPageChange: function (t) {
                            this.getRecords(t, this.pager.perPage)
                        },
                        getRecords: function (t, e) {
                            var a = this;
                            this.loading = !0;
                            var i = {
                                currentPage: t,
                                perPage: e
                            };
                            b["a"].get("/api/pvp/realRanking", i).then((function (e) {
                                a.items = e.data.map((function (e, i) {
                                    return e.ranking = (t - 1) * a.pager.perPage + i + 1, e
                                })), a.pager.total = e.meta.total, a.$nextTick((function () {
                                    a.$set(a.pager, "currentPage", e.meta.current_page)
                                })), a.loading = !1
                            })).catch((function (t) {
                                console.error("rewards", t), a.loading = !1
                            }))
                        }
                    }
                },
                p = y,
                k = a("4ac2"),
                w = Object(k["a"])(p, v, h, !1, null, "3e88163c", null),
                A = w.exports,
                R = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-card", [a("div", {
                        staticClass: "design-group"
                    }, [a("b-overlay", {
                        attrs: {
                            show: t.loading,
                            rounded: "sm"
                        }
                    }, [a("b-table", {
                        attrs: {
                            bordered: "",
                            responsive: "",
                            small: "small",
                            items: t.items,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell()",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(nickname)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value ? e.value : e.item.player) + " ")])]
                            }
                        }, {
                            key: "cell(attackCards)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.attackCards, (function (t, e) {
                                    return a("NFTCard", {
                                        key: e,
                                        staticStyle: {
                                            width: "30px"
                                        },
                                        attrs: {
                                            nft: t
                                        }
                                    })
                                })), 1)]
                            }
                        }])
                    })], 1)], 1)])
                },
                C = [],
                E = {
                    name: "WeeklyRewards",
                    components: {
                        NFTCard: g["a"]
                    },
                    data: function () {
                        return {
                            loading: !0,
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
                                key: "rank",
                                label: "Score"
                            }]
                        }
                    },
                    mounted: function () {
                        this.getRecords()
                    },
                    methods: {
                        getRecords: function () {
                            var t = this;
                            this.loading = !0, b["a"].get("/api/zoo/weeklyRanking").then((function (e) {
                                t.items = e.map((function (t, e) {
                                    return t.ranking = e + 1, t.attackCards = JSON.parse(t.attackCards), t
                                })), t.loading = !1
                            })).catch((function (e) {
                                console.error("rewards", e), t.loading = !1
                            }))
                        }
                    }
                },
                j = E,
                T = Object(k["a"])(j, R, C, !1, null, "1413896e", null),
                P = T.exports,
                V = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-card", [a("div", {
                        staticClass: "design-group"
                    }, [a("b-overlay", {
                        attrs: {
                            show: t.loading,
                            rounded: "sm"
                        }
                    }, [a("b-table", {
                        attrs: {
                            bordered: "",
                            responsive: "",
                            small: "small",
                            items: t.items,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell()",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(nickname)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "text-center"
                                }, [t._v(" " + t._s(e.value ? e.value : e.item.player) + " ")])]
                            }
                        }, {
                            key: "cell(attackCards)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.attackCards, (function (t, e) {
                                    return a("NFTCard", {
                                        key: e,
                                        staticStyle: {
                                            width: "30px"
                                        },
                                        attrs: {
                                            nft: t
                                        }
                                    })
                                })), 1)]
                            }
                        }])
                    })], 1)], 1)])
                },
                K = [],
                x = {
                    name: "MonthlyRewards",
                    components: {
                        NFTCard: g["a"]
                    },
                    data: function () {
                        return {
                            loading: !0,
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
                                key: "rank",
                                label: "Score"
                            }]
                        }
                    },
                    mounted: function () {
                        this.getRecords()
                    },
                    methods: {
                        getRecords: function () {
                            var t = this;
                            this.loading = !0, b["a"].get("/api/zoo/monthlyRanking").then((function (e) {
                                t.items = e.map((function (t, e) {
                                    return t.ranking = e + 1, t.attackCards = JSON.parse(t.attackCards), t
                                })), t.loading = !1
                            })).catch((function (e) {
                                console.error("rewards", e), t.loading = !1
                            }))
                        }
                    }
                },
                S = x,
                F = Object(k["a"])(S, V, K, !1, null, "0bca5e6a", null),
                O = F.exports,
                Y = {
                    name: "BattleRewards",
                    directives: {
                        Ripple: l["a"]
                    },
                    components: {
                        MonthlyRewards: O,
                        WeeklyRewards: P,
                        PvpCombat2: f["a"],
                        DailyRewards: A
                    },
                    data: function () {
                        return {
                            loadingKey: {
                                participation: !1,
                                daily: !1,
                                weekly: !1,
                                monthly: !1
                            },
                            pendingParticipationKeys: 0,
                            pendingDailyKeys: 0,
                            pendingWeeklyKeys: 0,
                            pendingMonthlyKeys: 0,
                            tabIndex: 0
                        }
                    },
                    mounted: function () {
                        this.keyReward()
                    },
                    computed: Object(s["a"])({}, Object(o["b"])("farm", ["defaultAccount"])),
                    methods: {
                        activateTab: function (t) {},
                        keyReward: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            Object(c["c"])().keyReward(t.defaultAccount).then((function (e) {
                                                t.pendingParticipationKeys = m["a"].toFixed(d["a"].utils.formatUnits(e, u["a"].key.decimals))
                                            })), Object(c["a"])().keyReward(t.defaultAccount).then((function (e) {
                                                t.pendingDailyKeys = m["a"].toFixed(d["a"].utils.formatUnits(e, u["a"].key.decimals))
                                            })), Object(c["d"])().keyReward(t.defaultAccount).then((function (e) {
                                                t.pendingWeeklyKeys = m["a"].toFixed(d["a"].utils.formatUnits(e, u["a"].key.decimals))
                                            })), Object(c["b"])().keyReward(t.defaultAccount).then((function (e) {
                                                t.pendingMonthlyKeys = m["a"].toFixed(d["a"].utils.formatUnits(e, u["a"].key.decimals))
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        claimParticipationRewards: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.loadingKey.participation = !0, Object(c["c"])().getReward().then(function () {
                                                var e = Object(r["a"])(regeneratorRuntime.mark((function e(a) {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.wait();
                                                            case 2:
                                                                t.keyReward();
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (t) {
                                                console.error("error", t)
                                            })).finally((function () {
                                                t.loadingKey.participation = !1
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        claimDailyRewards: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.loadingKey.daily = !0, Object(c["a"])().getReward().then(function () {
                                                var e = Object(r["a"])(regeneratorRuntime.mark((function e(a) {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.wait();
                                                            case 2:
                                                                t.keyReward();
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (t) {
                                                console.error("error", t)
                                            })).finally((function () {
                                                t.loadingKey.daily = !1
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        claimWeeklyRewards: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.loadingKey.weekly = !0, Object(c["d"])().getReward().then(function () {
                                                var e = Object(r["a"])(regeneratorRuntime.mark((function e(a) {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.wait();
                                                            case 2:
                                                                t.keyReward();
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (t) {
                                                console.error("error", t)
                                            })).finally((function () {
                                                t.loadingKey.weekly = !1
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        claimMonthlyRewards: function () {
                            var t = this;
                            return Object(r["a"])(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.loadingKey.monthly = !0, Object(c["b"])().getReward().then(function () {
                                                var e = Object(r["a"])(regeneratorRuntime.mark((function e(a) {
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.wait();
                                                            case 2:
                                                                t.keyReward();
                                                            case 3:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (t) {
                                                console.error("error", t)
                                            })).finally((function () {
                                                t.loadingKey.monthly = !1
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                H = Y,
                I = Object(k["a"])(H, i, n, !1, null, "04b21199", null);
            e["default"] = I.exports
        },
        2008: function (t, e, a) {
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
                },
                n = [],
                r = {
                    name: "PvpCombat",
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
                    mounted: function () {
                        this.day(), this.week(), this.month()
                    },
                    methods: {
                        day: function () {
                            for (var t = [
                                    ["1", 3.6, 7.2, 14.4, 25.2, 36],
                                    ["2", 3, 6, 12, 21, 30],
                                    ["3", 2.4, 4.8, 9.6, 16.8, 24],
                                    ["4", 1.5, 3, 6, 10.5, 15],
                                    ["5", 1.2, 2.4, 4.8, 8.4, 12],
                                    ["6", .9, 1.8, 3.6, 6.3, 9],
                                    ["7", .75, 1.5, 3, 5.25, 7.5],
                                    ["8-10", .6, 1.2, 2.4, 4.2, 6],
                                    ["11-15", .45, .9, 1.8, 3.15, 4.5],
                                    ["16-20", .36, .72, 1.44, 2.52, 3.6],
                                    ["21-30", .33, .66, 1.32, 2.31, 3.3],
                                    ["31-40", .3, .6, 1.2, 2.1, 3],
                                    ["41-50", .27, .54, 1.08, 1.89, 2.7],
                                    ["51-60", .18, .36, .72, 1.26, 1.8],
                                    ["61-70", .18, .36, .72, 1.26, 1.8],
                                    ["71-80", .18, .36, .72, 1.26, 1.8],
                                    ["81-90", .15, .3, .6, 1.05, 1.5],
                                    ["91-100", .15, .3, .6, 1.05, 1.5],
                                    ["101-120", .12, .24, .48, .84, 1.2],
                                    ["121-140", .09, .18, .36, .63, .9],
                                    ["141-160", .09, .18, .36, .63, .9],
                                    ["161-180", .06, .12, .24, .42, .6],
                                    ["181-200", .06, .12, .24, .42, .6]
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
                        },
                        week: function () {
                            for (var t = [
                                    ["1", 12.6, 25.2, 50.4, 88.2, "126 + Extra 500 USDT"],
                                    ["2", 10.5, 21, 42, 73.5, "105 + Extra 400 USDT"],
                                    ["3", 8.4, 16.8, 33.6, 58.8, "84  + Extra 300 USDT"],
                                    ["4", 5.25, 10.5, 21, 36.75, 52.5],
                                    ["5", 4.2, 8.4, 16.8, 29.4, 42],
                                    ["6", 3.15, 6.3, 12.6, 22.05, 31.5],
                                    ["7", 2.625, 5.25, 10.5, 18.375, 26.25],
                                    ["8-10", 2.1, 4.2, 8.4, 14.7, 21],
                                    ["11-15", 1.575, 3.15, 6.3, 11.025, 15.75],
                                    ["16-20", 1.26, 2.52, 5.04, 8.82, 12.6],
                                    ["21-30", .84, 1.68, 3.36, 5.88, 8.4],
                                    ["31-40", .735, 1.47, 2.94, 5.145, 7.35],
                                    ["41-50", .63, 1.26, 2.52, 4.41, 6.3],
                                    ["51-60", .525, 1.05, 2.1, 3.675, 5.25],
                                    ["61-70", .42, .84, 1.68, 2.94, 4.2],
                                    ["71-80", .315, .63, 1.26, 2.205, 3.15],
                                    ["81-90", .21, .42, .84, 1.47, 2.1],
                                    ["91-100", .105, .21, .42, .735, 1.05]
                                ], e = [], a = 0; a < t.length; a++) {
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
                        month: function () {
                            for (var t = [
                                    ["1", "50.4", "100.8", "201.6", "352.8", "504 + Extra 5000 USDT"],
                                    ["2", "42", "84", "168", "294", "420  + Extra 2500 USDT"],
                                    ["3", "33.6", "67.2", "134.4", "235.2", "336 + Extra 1000 USDT"],
                                    ["4", "21", "42", "84", "147", "210 + Extra 500 USDT"],
                                    ["5", "16.8", "33.6", "67.2", "117.6", "168  + Extra 350 USDT"],
                                    ["6", "12.6", "25.2", "50.4", "88.2", "126 + Extra 300 USDT"],
                                    ["7", "10.5", "21", "42", "73.5", "105 + Extra 200 USDT"],
                                    ["8-10", "8.4", "16.8", "33.6", "58.8", "84  + Extra 150 USDT"],
                                    ["11-15", "6.3", "12.6", "25.2", "44.1", "63  + Extra 100 USDT"],
                                    ["16-20", "5.04", "10.08", "20.16", "35.28", "50.4  + Extra 50 USDT"],
                                    ["21-30", "3.36", "6.72", "13.44", "23.52", "33.6"],
                                    ["31-40", "2.94", "5.88", "11.76", "20.58", "29.4"],
                                    ["41-50", "2.52", "5.04", "10.08", "17.64", "25.2"],
                                    ["51-60", "2.1", "4.2", "8.4", "14.7", "21"],
                                    ["61-70", "1.68", "3.36", "6.72", "11.76", "16.8"],
                                    ["71-80", "1.26", "2.52", "5.04", "8.82", "12.6"],
                                    ["81-90", "0.84", "1.68", "3.36", "5.88", "8.4"],
                                    ["91-100", "0.42", "0.84", "1.68", "2.94", "4.2"]
                                ], e = [], a = 0; a < t.length; a++) {
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
                },
                s = r,
                l = a("4ac2"),
                o = Object(l["a"])(s, i, n, !1, null, "7eb3f360", null);
            e["a"] = o.exports
        },
        7803: function (t, e, a) {},
        "8ee6": function (t, e) {
            t.exports = "data:image/png;base64,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"
        },
        a145: function (t, e, a) {
            "use strict";
            a("7803")
        },
        d2ba: function (t, e, a) {
            "use strict";
            var i = function () {
                    var t = this,
                        e = this,
                        a = e.$createElement,
                        i = e._self._c || a;
                    return e.item ? i("div", {
                        staticStyle: {
                            padding: "0",
                            margin: "0",
                            position: "relative"
                        },
                        on: {
                            click: function () {
                                t.$emit("click", e.item)
                            },
                            mouseenter: e.enter,
                            mouseleave: e.leave
                        }
                    }, [i("div", {
                        staticStyle: {
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }
                    }, [i("img", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            src: e.nft.border
                        }
                    }), 1 === e.nft.rarity && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-1",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 2 === e.nft.rarity && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-2",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 3 === e.nft.rarity && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-3",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 4 === e.nft.rarity && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), e.nft.showPower ? i("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "12%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }) : i("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "20%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }), e.nft.showPower ? i("div", {
                        class: ["d-flex justify-content-center power", e.small ? "font-small-1" : ""]
                    }, [i("div", {
                        staticClass: "item"
                    }, [i("img", {
                        attrs: {
                            src: "/chest/level.png",
                            width: "20",
                            alt: "level"
                        }
                    }), e._v("   "), i("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.level))])]), i("div", {
                        staticStyle: {
                            width: "5%"
                        }
                    }), i("div", {
                        staticClass: "item"
                    }, [i("img", {
                        attrs: {
                            src: "/chest/airdrop.png",
                            width: "20",
                            alt: "power"
                        }
                    }), e._v("   "), i("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.computingPower))])])]) : e._e(), e.nft.isMinting && e.nft.showMinting ? i("div", {
                        staticClass: "minting"
                    }, [e._v(e._s(e.$t("Components.NFTCard.Minting")))]) : e._e(), e.nft.rarity >= 4 ? i("div", [i("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "38%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 10 ? "light" : "dark") + ".png"
                        }
                    }), i("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "48%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 20 ? "light" : "dark") + ".png"
                        }
                    }), i("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "58%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 30 ? "light" : "dark") + ".png"
                        }
                    })]) : e._e()]), e.nft.showPower ? i("div", {
                        staticClass: "nftName"
                    }, [i("div", {
                        class: [e.small ? "font-small-1" : ""]
                    }, [e._v("NFT " + e._s(e.nft.nftId))]), e.small ? e._e() : i("div", [e._v(" " + e._s(e.nft.showPower ? e.nft.name : "") + " ")])]) : e._e(), 4 === e.nft.rarity && e.showHover && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-hover-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.showHover && e.nft.showPower ? i("div", {
                        staticClass: "nft-bg-hover-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e()]) : e._e()
                },
                n = [],
                r = a("99a5"),
                s = (a("1d7a"), a("6a61"), {
                    orange: ["DOGE", "UNI", "BUNNY", "SHIB", "DUCK", "PANTHER", "Nithe", "Surinks", "Jeremiah", "Apalala"],
                    purple: ["RVN", "HOGE", "TRTL", "GRUMPY", "CAT", "MONK", "FEG", "DOGGY", "PIG", "AKITA", "MAMMOTH", "ANTELOPE", "Duke", "McStubby", "Femme Feli", "Talon", "Stealth", "Wingo", "Hobble", "Ormr"],
                    normal: ["Fox", "Corgi", "Doggy Brother", "Chow Chow", "Leopard", "Sheep", "Mice", "Hyena", "Lion", "Panda", "GentleMonkey", "Alligator", "Zebra", "Hokkaido Doggy", "Border Collie", "Giraffe", "Hippo", "Cock", "Bear", "Bull", "Nuttie", "Spikes", "Parrot", "Marmot", "NFT24", "Shabina", "Clawdious", "NFT27", "Guile", "Shelldon", "Mr E.B.", "NFT31", "Boom Boom", "Fred", "Flash", "NFT35", "Krank", "Miss Quito", "Razor", "NFT39"],
                    boss: ["", "Vitalik", "Musk", "Satoshi", "GreyScale"]
                }),
                l = {
                    props: {
                        nft: {
                            type: Object,
                            default: null
                        },
                        small: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: function () {
                        return {
                            item: null,
                            showHover: !1
                        }
                    },
                    watch: {
                        nft: function () {
                            this.init()
                        }
                    },
                    mounted: function () {
                        var t = this;
                        return Object(r["a"])(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function (e) {
                                while (1) switch (e.prev = e.next) {
                                    case 0:
                                        t.init();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        enter: function () {
                            this.showHover = !0
                        },
                        leave: function () {
                            this.showHover = !1
                        },
                        init: function () {
                            if (this.item = this.nft, this.item.bg = "/nfts/bg/".concat(this.item.rarity, "/bg.png"), this.item.border = "/nfts/bg/".concat(this.item.rarity, "/border.png"), 4 === this.item.rarity) {
                                var t = this.item.teamId / 2;
                                this.item.src = "/nfts/purple/".concat(t, ".png"), this.item.name = s.purple[t]
                            } else if (5 === this.item.rarity) {
                                var e = (this.item.teamId - 1) / 4;
                                this.item.src = "/nfts/orange/".concat(e, ".png"), this.item.name = s.orange[e]
                            } else this.item.src = "/nfts/normal/".concat(this.item.teamId, ".png"), this.item.name = s.normal[this.item.teamId];
                            this.item.showLevel = this.nft.showLevel || !1, this.item.showPower = this.nft.showPower || !1, this.item.showStar = !1, this.item.canClick = this.nft.canClick || !1, this.item.showMinting = this.nft.showMinting || !1, this.item.star = Math.floor(this.nft.level / 10), this.item.name = this.item.name || "No Name"
                        }
                    }
                },
                o = l,
                c = (a("a145"), a("4ac2")),
                d = Object(c["a"])(o, i, n, !1, null, "01a91ad2", null);
            e["a"] = d.exports
        },
        ee15: function (t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMUAAABTCAMAAAAY2TOcAAABAlBMVEUAAADtj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0aftj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj53tj50b0acb0acb0aftj53tj53tj53tj53/vAEb0af/vAEb0aftj50b0acb0acb0af/vAEb0af/vAEb0af/vAEb0acb0af/vAH/vAH/vAH/vAH/vAH/vAEb0af/vAEb0af4qz7/vAHtj50b0af/vAFW6jjPAAAAU3RSTlMAAvcI/RXta/IF3tfCWUnStU8sIOF86L2ml4LNuHE3EAySU5wpKCQbsY5hRfnIq6Iy5NaxnYiFdz708uBkQQtbTph5IBT56MXw4puXSEY9IpIxHhHzkVEAAAVwSURBVHja7dtpV9pAGAXgmz00gOyL7CKyKWC12s1q7b4vL/3/f6U0CBPizICVWNLj88GPntzhvZkJJ4DsSgShR0SlKsKOJvRiDeGm0x+5GELNpqn8HkLMpitqVkNo2TTn9BFWNnkUDISTTV6mpSCMbFp0MEIIZchHb9QROhm65nAHYZMhjkQa4ZIhHvV0Q4+Ir14+e/Ps0095CsZ5jA30+cmvP558WZKCGRoIELlwM98mIVzvX2GBQ0JmT8HMZqT4+GvmJTzi2CIxPYuZzUjxYZ7iGWaUZIkkKTLZ8s78w9iMFL/m3swyxCYBhCnUQl/BAT2wNExtRAr/ZxHpOUTCFCWrhokhEZnb05JvRIrFXmhWhkiUwmyMMJWdfizFFrAZKbz3qHolR1dyKPkKnY+xGYrRlN5ZunlcHr+4gxRsv6hlTZpLILpQ6O00PEY0dyAv+sV4/HA36BRs7/5xYpPHtieFOoj7rrROzKTodYjsPh2Px0/PcTfaXZsWJOcptio1XHO4WJgTQdFfPxy72FQFKF1Uyac9TWEXR+CJ0iK1mQLH0djFpio4reE++eXcC42yQvs06ZrEGWegHs5ivEOgUgWdrksAhe09CJ0SRykWgc+L47Hr7WsEqNohrm3I7RBXpnKt6Oduv4McqMdlEtiBXIoEzEdtzlRdIDDxKAmlIafpJLI/TPmn6hIB0OKNApIlEjNXeJ6VKPcRsFalrBJZOHsguwwskyepUgyBqe00p2uo1gCtq5PICZYpkpTZHCEISvU0Or/swvQGtSUrt1yFJB7sFCd/ulUFa2XECjnyOIMrklXF5ZaLk5BZiVwdeg8bZ+sKEnl8UtJ9a6XMW3IgLLdciwT0ogHAYKMVj+C20r2BTddkMadYtqDcchFBqcopuDzDag6TGv6a1u86xKO3F4ImyO8RluPe4pw4rnTJyx7E6n93Q02oJJDAopjJLbdcmTOIFhueJPmonV4NN1FPFv0rJb9Io8Art1yDfPa7NTB1nbOrly0DK3tEUjlO3ZKHnHJLWbRo4DsBHxCPHrXakDFS8d5poxB1CrB0Ylab+lqR5vJgVrzVls7gc0IiB6dpf4PT1aS13eyUDvfnA7gHJG0SawkOuA6LuYI0MTnO97Z9kjhxFy7Vj1W6hbxjih4NqjkSiUJAe6SvXm4obNlO6rz/ppKIainAUJXu/tp0qRwS6EFoND3n7mEVDk0V0jc8L26l3ALkSCI5G/Q8cdl1iEVOVSJTwSo60yGvQiBLfA3taoIl5U2wKxoSTxNSe9Hl5Wb7WiYmTlwlnlxc9uzOqj2nbBNHFXKKlcVKLLKlL4hEbN4iG5hTOiSwDa/e/vWhxLqcNduQSvBrzdQeyKrN9G3yqeDOVDi1XjRSZdVmUoe+Q4CBOzPi1NrHklabaW+R1wB3RzF9teYoSKvN1MvkEccdGizWmqfuSKvNRJo0l1Fwh6yFWvOlbHm1mawnZ3CeH73Aopan1kKxJdVmYiq59DQC85zz9f4huboaJIpLqs08Nv3P0+sPMfH0AguGrNZiWmlJtZmWu8HEEJjLsesSXj0i6hhYIm3SqiNvHBCZGoJz8XQ88RxebVZrmeSyajNahxoI0u7DWQhmkLrZI3YSyyiNFAL14ug5/k4kOqt2qLVzbrVD/S74RF93qx122Um1Q/w6+xWlTEmEn1HEvXv37v2P+vmw/lLHw9LJ2cgYu8dHWFGkSBNOG5vm659X3M6xEiNPrjzWp5qP47bO393kvbAEuaLrG6nWYB1HuuPx1DFWYTg00YxgXRo6TWRxS6/fTl80vFhxpLZIr6z1cD2hF28/UpMMR1+xKoNN8TpoDlEnhds7+r6Lfyce3bhftf8GxgHAIi+xyUgAAAAASUVORK5CYII="
        }
    }
]);