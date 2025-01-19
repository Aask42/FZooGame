(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-e8217e38"], {
        "5cac": function (t, e, a) {
            t.exports = a.p + "img/fire.9dd6dfa9.png"
        },
        "7e24": function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("b-card", {
                        attrs: {
                            "img-src": a("dec0")
                        }
                    }, [n("div", {
                        staticClass: "d-flex align-items-center justify-content-center"
                    }, [n("img", {
                        staticStyle: {
                            width: "6rem"
                        },
                        attrs: {
                            src: a("5cac")
                        }
                    }), n("div", {
                        staticClass: "text-center pt-2"
                    }, [n("h1", [t._v("Total ZOO burnt " + t._s(t.burntZoo))])])]), n("b-row", {
                        staticClass: "m-2"
                    }, [n("b-col", {
                        staticClass: "text-center"
                    }, [n("h3", {}, [t._v(" " + t._s(t.$t("BuybackPage.Title")) + " ")])])], 1), n("b-table", {
                        staticClass: "mb-0",
                        attrs: {
                            responsive: "xl",
                            items: t.rows,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell(tx)",
                            fn: function (e) {
                                return [n("b-link", {
                                    staticClass: "ml-25",
                                    attrs: {
                                        href: "https://bscscan.com/tx/" + e.item.tx,
                                        target: "_blank"
                                    }
                                }, [n("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: {
                                        icon: "EyeIcon"
                                    }
                                }), t._v(" " + t._s(e.value.substr(0, 5)) + "..." + t._s(e.value.substr(e.value.length - 5)) + " ")], 1)]
                            }
                        }, {
                            key: "cell(from)",
                            fn: function (e) {
                                return [n("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(to)",
                            fn: function (e) {
                                return [n("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(amount)",
                            fn: function (e) {
                                return [n("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }])
                    }), t.rows && 0 !== t.rows.length ? n("b-pagination", {
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": t.pager.total,
                            "per-page": t.pager.perPage,
                            align: "center"
                        },
                        model: {
                            value: t.pager.currentPage,
                            callback: function (e) {
                                t.$set(t.pager, "currentPage", e)
                            },
                            expression: "pager.currentPage"
                        }
                    }) : t._e()], 1)], 1)
                },
                s = [],
                r = (a("402f"), a("6540"), a("a13e")),
                c = a("53a2"),
                o = {
                    name: "Buyback",
                    data: function () {
                        return {
                            burntZoo: "",
                            rows: [],
                            fields: [{
                                key: "tx",
                                label: this.$t("BuybackPage.Table.Tx")
                            }, {
                                key: "from",
                                label: this.$t("BuybackPage.Table.From")
                            }, {
                                key: "to",
                                label: this.$t("BuybackPage.Table.To")
                            }, {
                                key: "value",
                                label: this.$t("BuybackPage.Table.Amount")
                            }],
                            pager: {
                                currentPage: 1,
                                perPage: 20,
                                total: 0
                            }
                        }
                    },
                    watch: {
                        "pager.currentPage": {
                            handler: function (t) {
                                this.getRecords(t, this.pager.perPage)
                            }
                        }
                    },
                    mounted: function () {
                        this.getRecords(this.pager.currentPage, this.pager.perPage), this.getBurntZoo()
                    },
                    methods: {
                        getRecords: function (t, e) {
                            var a = this,
                                n = {
                                    "0xb6e51483eeceed86157596715a3f5f16886a60b9": "BuyBack Wallet",
                                    "0x289167dfddbb5f5a8c334e828332f505d4ebef9b": "ZOO Mall",
                                    "0x230a7aab3b75f5e6b5587c330a120fc810b8a07f": "Auction House",
                                    "0xdb2e0f1e359db3ecb66a23f559e240ccc2fabaa2": "Combat Ticket"
                                };
                            r["a"].get("/api/zoo/burnZoos", this.pager).then((function (t) {
                                a.rows = t.data.map((function (t) {
                                    return t.value = c["a"].fromWei(t.value), t.from = n[t.from] ? n[t.from] : t.from, t
                                })), a.meta = t.meta, a.pager.total = t.meta.total
                            })).catch((function (t) {
                                console.log(t)
                            })).finally((function () {
                                a.loading = !1
                            }))
                        },
                        getBurntZoo: function () {
                            var t = this;
                            r["a"].get("/api/zoo/burnZoosTotal").then((function (e) {
                                t.burntZoo = e
                            }))
                        }
                    }
                },
                l = o,
                i = a("4ac2"),
                u = Object(i["a"])(l, n, s, !1, null, "8107bb00", null);
            e["default"] = u.exports
        },
        dec0: function (t, e, a) {
            t.exports = a.p + "img/buyback.ea0ff896.jpg"
        }
    }
]);