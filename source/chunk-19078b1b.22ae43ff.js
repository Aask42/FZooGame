(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-19078b1b"], {
        "2a8a": function (e, t, r) {
            "use strict";
            r("b9df")
        },
        "3c3d": function (e, t, r) {
            "use strict";
            r("7693")
        },
        7693: function (e, t, r) {},
        8763: function (e, t, r) {
            "use strict";
            r.r(t);
            var a = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "container p-0"
                    }, [r("b-row", [r("b-col", {
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("b-card", {
                        staticClass: "cursor-pointer",
                        on: {
                            click: function (t) {
                                e.tabIndex = 1
                            }
                        }
                    }, [r("b-card-title", {
                        staticClass: "text-center"
                    }, [e._v("10 Mystery Box")]), r("b-card-body", [r("div", {
                        ref: "mystery-box",
                        staticClass: "d-flex align-content-center justify-content-center w-100"
                    }, [r("img", {
                        staticClass: "rounded-sm",
                        staticStyle: {
                            width: "60%"
                        },
                        attrs: {
                            src: "/mystery-box.png"
                        }
                    })]), r("div", {
                        staticClass: "text-center"
                    }, [e._v(" total amount in this auction：" + e._s(e.maxQuantity) + " "), r("br"), e._v(" sold：" + e._s(e.curQuantity)), r("br")])])], 1)], 1), r("b-col", {
                        staticClass: "d-flex",
                        attrs: {
                            cols: "12",
                            md: "6"
                        }
                    }, [r("b-card", {
                        staticStyle: {
                            flex: "1"
                        }
                    }, [r("b-card-title", {
                        staticClass: "text-center"
                    }, [e._v(" Round: " + e._s(e.round) + ", Countdown: " + e._s(e.remainingTime) + " s ")]), r("b-card-body", [r("div", [r("b-row", {
                        staticClass: "text-center"
                    }, [r("b-col", {
                        attrs: {
                            cols: "6"
                        }
                    }, [r("b-card-sub-title", [e._v("Highest Bidder")]), r("b-card-title", {
                        staticClass: "pt-75"
                    }, [e._v(e._s(e.currentHighestBidder))])], 1), r("b-col", [r("b-card-sub-title", [e._v("Price")]), r("b-card-title", {
                        staticClass: "mt-75"
                    }, [e._v(" " + e._s(parseInt(e.currentHighestBid)) + " ZOO ")])], 1)], 1), r("div", {
                        staticClass: "mb-2 text-center"
                    }, [r("b-form-spinbutton", {
                        staticClass: "mb-1",
                        attrs: {
                            size: "lg",
                            min: e.currentHighestBid,
                            max: "1000000000"
                        },
                        model: {
                            value: e.value,
                            callback: function (t) {
                                e.value = t
                            },
                            expression: "value"
                        }
                    })], 1), r("div", {
                        staticClass: "mt-2",
                        staticStyle: {
                            display: "flex",
                            "justify-content": "space-between"
                        }
                    }, [r("b-button", {
                        attrs: {
                            pill: "",
                            variant: "outline-primary"
                        },
                        on: {
                            click: function () {
                                e.increase(10)
                            }
                        }
                    }, [e._v(" + 10 ")]), r("b-button", {
                        attrs: {
                            pill: "",
                            variant: "outline-primary"
                        },
                        on: {
                            click: function () {
                                e.increase(50)
                            }
                        }
                    }, [e._v(" + 50 ")]), r("b-button", {
                        attrs: {
                            pill: "",
                            variant: "outline-primary"
                        },
                        on: {
                            click: function () {
                                e.increase(100)
                            }
                        }
                    }, [e._v(" + 100 ")])], 1), r("div", {
                        staticClass: "mt-2"
                    }, [e.allowance > 0 ? r("b-button", {
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
                            disabled: !e.isStart || e.expired || 0 === e.remainingTime || e.loading
                        },
                        on: {
                            click: e.bid
                        }
                    }, [r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), e._v(" Bid ")], 1) : r("b-button", {
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
                            variant: "warning",
                            block: "",
                            pill: "",
                            disabled: e.loading
                        },
                        on: {
                            click: e.approve
                        }
                    }, [r("feather-icon", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !e.loading,
                            expression: "!loading"
                        }],
                        attrs: {
                            icon: "UnlockIcon"
                        }
                    }), r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), e._v(" Approve ")], 1)], 1), e.pendingReturns > 0 ? r("div", {
                        staticClass: "mt-2"
                    }, [r("b-button", {
                        attrs: {
                            variant: "success",
                            block: "",
                            pill: "",
                            disabled: e.withdrawloading
                        },
                        on: {
                            click: e.withdraw
                        }
                    }, [r("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.withdrawloading,
                            expression: "withdrawloading"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), e._v(" Withdraw " + e._s(this.pendingReturns) + " Boxes ")], 1)], 1) : e._e()], 1)])], 1)], 1)], 1), r("b-tabs", {
                        attrs: {
                            align: "center"
                        },
                        model: {
                            value: e.tabIndex,
                            callback: function (t) {
                                e.tabIndex = t
                            },
                            expression: "tabIndex"
                        }
                    }, [r("b-tab", {
                        attrs: {
                            title: "Auction Logs"
                        }
                    }, [r("b-card", [r("b-table", {
                        staticClass: "mb-0 mt-3",
                        attrs: {
                            responsive: "xl",
                            items: e.rows,
                            fields: e.fields
                        },
                        scopedSlots: e._u([{
                            key: "cell(tx)",
                            fn: function (e) {
                                return [r("b-link", {
                                    staticClass: "ml-25",
                                    attrs: {
                                        href: "https://bscscan.com/tx/" + e.item.tx,
                                        target: "_blank"
                                    }
                                }, [r("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: {
                                        icon: "EyeIcon"
                                    }
                                })], 1)]
                            }
                        }])
                    }), r("b-pagination", {
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": e.pager.total,
                            "per-page": e.pager.perPage,
                            align: "center",
                            "no-page-detect": !0
                        },
                        on: {
                            change: e.currentPageChange
                        },
                        model: {
                            value: e.pager.currentPage,
                            callback: function (t) {
                                e.$set(e.pager, "currentPage", t)
                            },
                            expression: "pager.currentPage"
                        }
                    })], 1)], 1), r("b-tab", {
                        attrs: {
                            title: "Detail"
                        }
                    }, [r("detail")], 1), r("b-tab", {
                        attrs: {
                            title: "My Mystery Boxes"
                        }
                    }, [e.defaultAccount ? r("div", [r("my-boxes")], 1) : e._e()]), r("b-tab", {
                        attrs: {
                            title: "Market"
                        }
                    }, [r("box-market")], 1)], 1)], 1)
                },
                n = [],
                s = r("99a5"),
                i = r("1c03"),
                c = (r("402f"), r("836b"), r("6540"), r("6a61"), r("bf32")),
                o = r("cf6b"),
                u = r("53a2"),
                l = r("238c"),
                d = r("19f5"),
                g = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "my-box"
                    }, [r("div", {
                        staticClass: "text-center mb-2 mt-2"
                    }, [e._v(" My total boxes: " + e._s(e.pager.total) + " ")]), r("b-row", e._l(e.records, (function (t, a) {
                        return r("b-col", {
                            key: a,
                            attrs: {
                                md: "3"
                            }
                        }, [r("b-card", {
                            staticClass: "text-center"
                        }, [r("b-link", {
                            attrs: {
                                target: "_blank",
                                href: "https://bscscan.com/token/0x2fbfdde8fb0d7852857319666a6d4a146de02dc3?a=" + t.nftId.toString()
                            }
                        }, [r("img", {
                            staticClass: "rounded-sm w-75",
                            attrs: {
                                src: "/mystery-box.png"
                            }
                        })]), r("h5", [e._v("Mystery Box [" + e._s(t.nftId) + "]")]), e.isApprovedForAll ? r("div", {
                            staticClass: "mt-1"
                        }, [r("b-input-group", {
                            attrs: {
                                prepend: "$",
                                size: "sm"
                            }
                        }, [r("b-form-input", {
                            attrs: {
                                type: "number",
                                placeholder: "set price"
                            },
                            model: {
                                value: t.price,
                                callback: function (r) {
                                    e.$set(t, "price", r)
                                },
                                expression: "item.price"
                            }
                        }), r("b-input-group-append", [r("b-button", {
                            attrs: {
                                variant: "primary",
                                disabled: t.loading
                            },
                            on: {
                                click: function (r) {
                                    return e.sell(t)
                                }
                            }
                        }, [r("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.loading,
                                expression: "item.loading"
                            }],
                            attrs: {
                                small: ""
                            }
                        }), r("span", [e._v("Sell")])], 1)], 1)], 1)], 1) : r("div", [r("b-button", {
                            attrs: {
                                size: "sm",
                                variant: "warning",
                                block: ""
                            },
                            on: {
                                click: e.approve
                            }
                        }, [r("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.loading,
                                expression: "loading"
                            }],
                            attrs: {
                                small: ""
                            }
                        }), r("span", [e._v("Approve for sell")])], 1)], 1)], 1)], 1)
                    })), 1), 0 !== e.pager.total ? r("b-pagination", {
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": e.pager.total,
                            "per-page": e.pager.perPage,
                            align: "center",
                            "no-page-detect": !0
                        },
                        on: {
                            change: e.currentPageChange
                        },
                        model: {
                            value: e.pager.currentPage,
                            callback: function (t) {
                                e.$set(e.pager, "currentPage", t)
                            },
                            expression: "pager.currentPage"
                        }
                    }) : e._e()], 1)
                },
                p = [],
                m = (r("2db5"), r("6ab7"), {
                    name: "MyBoxes",
                    data: function () {
                        return {
                            loading: !1,
                            records: [],
                            pager: {
                                currentPage: 1,
                                perPage: 8,
                                total: 0
                            },
                            isApprovedForAll: !1,
                            price: ""
                        }
                    },
                    computed: Object(i["a"])({}, Object(o["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (e) {
                            e && e.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.getTotalLength();
                                    case 2:
                                        return t.next = 4, e.getRecords(e.pager.currentPage, e.pager.perPage);
                                    case 4:
                                        return t.next = 6, e.init();
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        init: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["h"])(), a = Object(c["g"])(), t.next = 4, r.isApprovedForAll(e.defaultAccount, a.address);
                                        case 4:
                                            e.isApprovedForAll = t.sent, console.log("init", e.isApprovedForAll);
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        currentPageChange: function (e) {
                            this.getRecords(e, this.pager.perPage)
                        },
                        getRecords: function (e, t) {
                            var r = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, i;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            for (r.loading = !0, a = (e - 1) * r.pager.perPage, n = [], s = a + r.pager.perPage > r.pager.total ? r.pager.total : a + r.pager.perPage, i = a; i < s; i++) n.push(Object(c["h"])().tokenOfOwnerByIndex(r.defaultAccount, i));
                                            return t.next = 7, Promise.all(n);
                                        case 7:
                                            r.records = t.sent, r.records = r.records.map((function (e) {
                                                return {
                                                    nftId: e,
                                                    price: "",
                                                    loading: !1
                                                }
                                            })), r.$set(r.pager, "currentPage", e), r.loading = !1;
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getTotalLength: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, Object(c["h"])().balanceOf(e.defaultAccount);
                                        case 2:
                                            r = t.sent, e.pager.total = r.toNumber();
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        approve: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, s;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["h"])(), a = Object(c["g"])(), t.prev = 2, t.next = 5, r.setApprovalForAll(a.address, !0);
                                        case 5:
                                            return n = t.sent, t.next = 8, n.wait();
                                        case 8:
                                            e.$NotifySuccess("Approve success!"), e.isApprovedForAll = !0, t.next = 16;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](2), s = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", s);
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [2, 12]
                                ])
                            })))()
                        },
                        sell: function (e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, s, i, o, u;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            if (e.loading = !0, a = e.nftId, n = parseInt(e.price), !(isNaN(n) || n <= 0)) {
                                                r.next = 6;
                                                break
                                            }
                                            return t.$NotifyError("error", "price is error"), r.abrupt("return");
                                        case 6:
                                            return r.prev = 6, s = l["a"].utils.parseUnits(n.toString()), i = Object(c["g"])(), r.next = 11, i.sell(a, s);
                                        case 11:
                                            return o = r.sent, r.next = 14, o.wait();
                                        case 14:
                                            return t.$NotifySuccess("Listed success!"), r.next = 17, t.getRecords(t.pager.currentPage, t.pager.perPage);
                                        case 17:
                                            r.next = 23;
                                            break;
                                        case 19:
                                            r.prev = 19, r.t0 = r["catch"](6), u = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, t.$NotifyError("Error", u);
                                        case 23:
                                            e.loading = !1;
                                        case 24:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [6, 19]
                                ])
                            })))()
                        }
                    }
                }),
                b = m,
                v = (r("3c3d"), r("4ac2")),
                f = Object(v["a"])(b, g, p, !1, null, "5d14abfa", null),
                h = f.exports,
                w = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "my-box"
                    }, [r("div", {
                        staticClass: "text-center mb-2 mt-2"
                    }, [e._v(" Total boxes: " + e._s(e.pager.total) + " ")]), r("b-row", e._l(e.records, (function (t, a) {
                        return r("b-col", {
                            key: a,
                            attrs: {
                                md: "3"
                            }
                        }, [r("b-card", {
                            staticClass: "text-center"
                        }, [r("b-link", {
                            attrs: {
                                target: "_blank",
                                href: "https://bscscan.com/token/0x2fbfdde8fb0d7852857319666a6d4a146de02dc3?a=" + t.nftId.toString()
                            }
                        }, [r("img", {
                            staticClass: "rounded-sm w-75",
                            attrs: {
                                src: "/mystery-box.png"
                            }
                        })]), r("h5", [e._v("Mystery Box [" + e._s(t.nftId) + "]")]), r("h6", [e._v("$ " + e._s(t.price) + " BUSD")]), e.allowance > 0 ? r("div", {
                            staticClass: "mt-1"
                        }, [t.user === e.defaultAccount ? r("b-button", {
                            attrs: {
                                size: "sm",
                                disabled: t.loading,
                                variant: "info",
                                block: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.unsell(t)
                                }
                            }
                        }, [r("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: t.loading,
                                expression: "item.loading"
                            }],
                            attrs: {
                                small: ""
                            }
                        }), r("span", [e._v("Withdraw")])], 1) : r("b-button", {
                            attrs: {
                                size: "sm",
                                disabled: t.loading,
                                variant: "primary",
                                block: ""
                            },
                            on: {
                                click: function (r) {
                                    return e.buy(t)
                                }
                            }
                        }, [r("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.loading,
                                expression: "loading"
                            }],
                            attrs: {
                                small: ""
                            }
                        }), r("span", [e._v("Buy")])], 1)], 1) : r("div", [r("b-button", {
                            attrs: {
                                size: "sm",
                                disabled: e.loading,
                                variant: "warning",
                                block: ""
                            },
                            on: {
                                click: e.approve
                            }
                        }, [r("b-spinner", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.loading,
                                expression: "loading"
                            }],
                            attrs: {
                                small: ""
                            }
                        }), r("span", [e._v("Approve")])], 1)], 1)], 1)], 1)
                    })), 1), 0 !== e.pager.total ? r("b-pagination", {
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": e.pager.total,
                            "per-page": e.pager.perPage,
                            align: "center",
                            "no-page-detect": !0
                        },
                        on: {
                            change: e.currentPageChange
                        },
                        model: {
                            value: e.pager.currentPage,
                            callback: function (t) {
                                e.$set(e.pager, "currentPage", t)
                            },
                            expression: "pager.currentPage"
                        }
                    }) : e._e()], 1)
                },
                x = [],
                y = r("e57c"),
                k = r("7032"),
                R = {
                    name: "BoxMarket",
                    data: function () {
                        return {
                            loading: !1,
                            records: [],
                            pager: {
                                currentPage: 1,
                                perPage: 8,
                                total: 0
                            },
                            allowance: 0
                        }
                    },
                    computed: Object(i["a"])({}, Object(o["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (e) {
                            e && e.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        var e = this;
                        return Object(s["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function (t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, e.init();
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        init: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.getTotal();
                                        case 2:
                                            return t.next = 4, e.getRecords(e.pager.currentPage, e.pager.perPage);
                                        case 4:
                                            return r = Object(k["a"])(y["a"].busd.address), a = Object(c["e"])(r), n = Object(c["g"])(), t.next = 9, a.allowance(e.defaultAccount, n.address);
                                        case 9:
                                            e.allowance = t.sent;
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        currentPageChange: function (e) {
                            this.getRecords(e, this.pager.perPage)
                        },
                        getTotal: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["g"])(), t.next = 3, r.total();
                                        case 3:
                                            a = t.sent, e.pager.total = a.toNumber();
                                        case 5:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getRecords: function (e, t) {
                            var r = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var a, n, s, i;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            for (a = (e - 1) * r.pager.perPage, n = [], s = a + r.pager.perPage > r.pager.total ? r.pager.total : a + r.pager.perPage, i = a; i < s; i++) n.push(Object(c["g"])().getTransactionByIndex(i));
                                            return t.next = 6, Promise.all(n);
                                        case 6:
                                            r.records = t.sent, r.records = r.records.map((function (e) {
                                                return {
                                                    transactionId: e.transactionId.toNumber(),
                                                    user: e.user.toLowerCase(),
                                                    nftId: e.nftId.toNumber(),
                                                    price: l["a"].utils.formatUnits(e.price),
                                                    loading: !1
                                                }
                                            })), r.$set(r.pager, "currentPage", e);
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        approve: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, s, i;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return e.loading = !0, r = Object(k["a"])(y["a"].busd.address), a = Object(c["e"])(r), n = Object(c["g"])(), t.prev = 4, t.next = 7, a.approve(n.address, l["a"].constants.MaxUint256);
                                        case 7:
                                            return s = t.sent, t.next = 10, s.wait();
                                        case 10:
                                            e.$NotifySuccess("Approve success!"), t.next = 17;
                                            break;
                                        case 13:
                                            t.prev = 13, t.t0 = t["catch"](4), i = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", i);
                                        case 17:
                                            return e.loading = !1, t.next = 20, e.init();
                                        case 20:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [4, 13]
                                ])
                            })))()
                        },
                        buy: function (e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, s;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e.loading = !0, r.prev = 1, a = Object(c["g"])(), r.next = 5, a.buy(e.transactionId);
                                        case 5:
                                            return n = r.sent, r.next = 8, n.wait();
                                        case 8:
                                            return t.$NotifySuccess("Buy success!"), r.next = 11, t.getRecords(t.pager.currentPage, t.pager.perPage);
                                        case 11:
                                            r.next = 17;
                                            break;
                                        case 13:
                                            r.prev = 13, r.t0 = r["catch"](1), s = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, t.$NotifyError("Error", s);
                                        case 17:
                                            e.loading = !1;
                                        case 18:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [1, 13]
                                ])
                            })))()
                        },
                        unsell: function (e) {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function r() {
                                var a, n, s;
                                return regeneratorRuntime.wrap((function (r) {
                                    while (1) switch (r.prev = r.next) {
                                        case 0:
                                            return e.loading = !0, r.prev = 1, a = Object(c["g"])(), r.next = 5, a.unsell(e.transactionId);
                                        case 5:
                                            return n = r.sent, r.next = 8, n.wait();
                                        case 8:
                                            return t.$NotifySuccess("Withdraw success!"), r.next = 11, t.init();
                                        case 11:
                                            r.next = 17;
                                            break;
                                        case 13:
                                            r.prev = 13, r.t0 = r["catch"](1), s = r.t0.data && r.t0.data.message ? r.t0.data.message : r.t0.message, t.$NotifyError("Error", s);
                                        case 17:
                                            e.loading = !1;
                                        case 18:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [1, 13]
                                ])
                            })))()
                        }
                    }
                },
                O = R,
                _ = (r("2a8a"), Object(v["a"])(O, w, x, !1, null, "1add72fc", null)),
                P = _.exports,
                A = r("a13e"),
                j = function () {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "mt-3"
                    }, [r("b-row", [r("b-col", {
                        staticClass: "d-flex",
                        attrs: {
                            cols: "12",
                            md: "7"
                        }
                    }, [r("b-card", {
                        staticStyle: {
                            flex: "1"
                        }
                    }, [e._v(" ZOO-Crypto World is a gaming platform built on Binance Smart Chain. With the capability of bringing P2E, Defi and Combat systems together. ZOO-Crypto World had accumulated over 40,000,000 USD TVL and has surpassed 15,000,000 USD in ZOO NFT trades within one month! ")])], 1), r("b-col", {
                        staticClass: "d-flex"
                    }, [r("b-card", {
                        staticStyle: {
                            flex: "1"
                        }
                    }, [r("div", {
                        staticClass: "d-flex justify-content-between"
                    }, [r("div", [e._v("Publisher")]), r("div", [e._v("ZOO-Crypto World")])]), r("div", {
                        staticClass: "d-flex justify-content-between mt-1"
                    }, [r("div", [e._v("Quantity Issued")]), r("div", [e._v("2,000")])]), r("div", {
                        staticClass: "d-flex justify-content-between mt-1"
                    }, [r("div", [e._v("Issue date")]), r("div", [e._v("2021-09-02")])])])], 1)], 1), r("b-card", [r("b-table", {
                        attrs: {
                            responsive: "xl",
                            items: e.rows,
                            fields: e.fields
                        },
                        scopedSlots: e._u([{
                            key: "cell(Edition)",
                            fn: function (t) {
                                return [r("div", [r("img", {
                                    style: {
                                        width: "2rem"
                                    },
                                    attrs: {
                                        src: "/auction/detail/" + t.item.img
                                    }
                                }), e._v(" " + e._s(t.value) + " ")])]
                            }
                        }, {
                            key: "cell(IssueAmount)",
                            fn: function (t) {
                                return [r("div", [e._v(" " + e._s(parseInt(t.value / 5)) + " ")])]
                            }
                        }, {
                            key: "cell(Rank)",
                            fn: function (t) {
                                return [r("div", ["ssr" === t.value ? r("div", [r("img", {
                                    style: {
                                        width: "3rem"
                                    },
                                    attrs: {
                                        src: "/auction/detail/" + t.value + ".svg"
                                    }
                                }), e._v(" - Legendary ")]) : e._e(), "sr" === t.value ? r("div", [r("img", {
                                    style: {
                                        width: "1.9rem"
                                    },
                                    attrs: {
                                        src: "/auction/detail/" + t.value + ".svg"
                                    }
                                }), e._v(" - Epic ")]) : e._e(), "r" === t.value ? r("div", [r("img", {
                                    style: {
                                        width: "1rem"
                                    },
                                    attrs: {
                                        src: "/auction/detail/" + t.value + ".svg"
                                    }
                                }), e._v(" - Rare ")]) : e._e(), "n" === t.value ? r("div", [r("img", {
                                    style: {
                                        width: "1rem"
                                    },
                                    attrs: {
                                        src: "/auction/detail/" + t.value + ".svg"
                                    }
                                }), "Scrap Cryptonium" === t.item.Edition ? r("span", [e._v(" - Junk ")]) : r("span", [e._v(" - Norma ")])]) : e._e()])]
                            }
                        }])
                    })], 1)], 1)
                },
                E = [],
                B = {
                    name: "Detail",
                    data: function () {
                        return {
                            fields: [{
                                key: "Edition",
                                label: "Edition"
                            }, {
                                key: "IssueAmount",
                                label: "Issue Amount"
                            }, {
                                key: "Rank",
                                label: "Rank"
                            }, {
                                key: "Probability",
                                label: "Probability"
                            }],
                            rows: [{
                                Edition: "ArmorZ (Legendary)",
                                IssueAmount: "35",
                                Rank: "ssr",
                                Probability: "0.35%",
                                img: "1.png"
                            }, {
                                Edition: "HelmetZ (Legendary)",
                                IssueAmount: "35",
                                Rank: "ssr",
                                Probability: "0.35%",
                                img: "2.png"
                            }, {
                                Edition: "BootZ (Epic)",
                                IssueAmount: "126",
                                Rank: "sr",
                                Probability: "1.26%",
                                img: "3.png"
                            }, {
                                Edition: "BarcerZ (Epic)",
                                IssueAmount: "126",
                                Rank: "sr",
                                Probability: "1.26%",
                                img: "4.png"
                            }, {
                                Edition: "EpaulettesZ (Epic)",
                                IssueAmount: "126",
                                Rank: "sr",
                                Probability: "1.26%",
                                img: "5.png"
                            }, {
                                Edition: "GloveZ (Epic)",
                                IssueAmount: "126",
                                Rank: "sr",
                                Probability: "1.26%",
                                img: "6.png"
                            }, {
                                Edition: "PowerCoreZ (Epic)",
                                IssueAmount: "126",
                                Rank: "sr",
                                Probability: "1.26%",
                                img: "7.png"
                            }, {
                                Edition: "Boot (Rare)",
                                IssueAmount: "280",
                                Rank: "r",
                                Probability: "2.80%",
                                img: "8.png"
                            }, {
                                Edition: "Barcer (Rare)",
                                IssueAmount: "280",
                                Rank: "r",
                                Probability: "2.80%",
                                img: "9.png"
                            }, {
                                Edition: "Epaulettes (Rare)",
                                IssueAmount: "280",
                                Rank: "r",
                                Probability: "2.80%",
                                img: "10.png"
                            }, {
                                Edition: "Glove (Rare)",
                                IssueAmount: "280",
                                Rank: "r",
                                Probability: "2.80%",
                                img: "11.png"
                            }, {
                                Edition: "PowerCore (Rare)",
                                IssueAmount: "280",
                                Rank: "r",
                                Probability: "2.80%",
                                img: "12.png"
                            }, {
                                Edition: "Galactic Cryptonium",
                                IssueAmount: "1400",
                                Rank: "r",
                                Probability: "14.00%",
                                img: "13.png"
                            }, {
                                Edition: "Refined Cryptonium",
                                IssueAmount: "1625",
                                Rank: "n",
                                Probability: "16.25%",
                                img: "14.png"
                            }, {
                                Edition: "Scrap Cryptonium",
                                IssueAmount: "4875",
                                Rank: "n",
                                Probability: "48.75%",
                                img: "15.png"
                            }]
                        }
                    }
                },
                C = B,
                N = Object(v["a"])(C, j, E, !1, null, "33344202", null),
                I = N.exports,
                S = {
                    name: "Auction",
                    components: {
                        Detail: I,
                        MyBoxes: h,
                        BoxMarket: P
                    },
                    directives: {
                        Ripple: d["a"]
                    },
                    data: function () {
                        return {
                            tabIndex: 0,
                            loading: !1,
                            withdrawloading: !1,
                            loadingAuctionHistory: !1,
                            zooBalance: 0,
                            allowance: 0,
                            lastBidBlockNumber: 0,
                            round: 0,
                            isStart: !1,
                            expired: !0,
                            auctionEndTime: 0,
                            remainingTime: 0,
                            maxQuantity: 0,
                            curQuantity: 0,
                            currentHighestBidder: 0,
                            currentHighestBid: 0,
                            pendingReturns: 0,
                            value: 0,
                            rows: [],
                            fields: [{
                                key: "round",
                                label: "ROUND"
                            }, {
                                key: "user",
                                label: "player"
                            }, {
                                key: "amount",
                                label: "AMOUNT"
                            }, {
                                key: "createdAt",
                                label: "createdAt"
                            }, {
                                key: "tx",
                                label: "tx"
                            }],
                            pager: {
                                currentPage: null,
                                perPage: 10,
                                total: 0
                            }
                        }
                    },
                    computed: Object(i["a"])({}, Object(o["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (e) {
                            e && e.length > 0 && (this.init(), this.history())
                        },
                        currentHighestBid: function (e) {
                            this.history()
                        }
                    },
                    mounted: function () {
                        this.defaultAccount && (this.init(), this.history())
                    },
                    destroyed: function () {
                        this.interval && clearInterval(this.interval)
                    },
                    methods: {
                        init: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["t"])(), a = Object(c["f"])(), t.next = 4, r.balanceOf(e.defaultAccount);
                                        case 4:
                                            return e.zooBalance = t.sent, e.zooBalance = u["a"].toReadable(e.zooBalance), e.zooBalance = u["a"].commify(e.zooBalance), t.next = 9, r.allowance(e.defaultAccount, a.address);
                                        case 9:
                                            return e.allowance = t.sent, t.next = 12, e.fresh();
                                        case 12:
                                            e.countdown();
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        fresh: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["f"])(), t.next = 3, r.lastBidBlockNumber();
                                        case 3:
                                            return e.lastBidBlockNumber = t.sent, e.lastBidBlockNumber = e.lastBidBlockNumber.toNumber(), t.next = 7, r.pendingReturns(e.defaultAccount);
                                        case 7:
                                            return e.pendingReturns = t.sent, t.next = 10, r.round();
                                        case 10:
                                            return a = t.sent, e.round = Math.max(0, a - 44), t.next = 14, r.isStart();
                                        case 14:
                                            return e.isStart = t.sent, t.next = 17, r.maxQuantity();
                                        case 17:
                                            return e.maxQuantity = t.sent, t.next = 20, r.curQuantity();
                                        case 20:
                                            if (e.curQuantity = t.sent, e.isStart) {
                                                t.next = 23;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 23:
                                            return t.next = 25, r.expired();
                                        case 25:
                                            if (e.expired = t.sent, !e.expired) {
                                                t.next = 28;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 28:
                                            return t.next = 30, r.currentHighestBidder();
                                        case 30:
                                            return e.currentHighestBidder = t.sent, e.currentHighestBidder = u["a"].shortAddress(e.currentHighestBidder), t.next = 34, r.currentHighestBid();
                                        case 34:
                                            return e.currentHighestBid = t.sent, e.currentHighestBid = u["a"].toReadable(e.currentHighestBid), e.currentHighestBid = parseInt(e.currentHighestBid), e.value <= e.currentHighestBid && (e.value = e.currentHighestBid), t.next = 40, r.auctionEndTime();
                                        case 40:
                                            e.auctionEndTime = t.sent, e.auctionEndTime = e.auctionEndTime.toNumber(), e.remainingTime = e.auctionEndTime - Math.floor((new Date).getTime() / 1e3), e.remainingTime = Math.max(0, e.remainingTime);
                                        case 44:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        countdown: function () {
                            var e = this;
                            this.interval && clearInterval(this.interval), this.interval = setInterval(Object(s["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, e.fresh();
                                        case 2:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            }))), 1e3)
                        },
                        approve: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, s, i, o;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.loading = !0, r = Object(c["f"])(), a = Object(c["t"])(), t.next = 6, a.approve(r.address, l["a"].constants.MaxUint256);
                                        case 6:
                                            return n = t.sent, t.next = 9, n.wait();
                                        case 9:
                                            e.$NotifySuccess("Approve", "Approve Success"), t.next = 16;
                                            break;
                                        case 12:
                                            t.prev = 12, t.t0 = t["catch"](0), s = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", s);
                                        case 16:
                                            return i = Object(c["t"])(), o = Object(c["f"])(), t.next = 20, i.allowance(e.defaultAccount, o.address);
                                        case 20:
                                            e.allowance = t.sent, e.loading = !1;
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 12]
                                ])
                            })))()
                        },
                        start: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, s, i, o, l;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["f"])(), a = !1, n = 2e3, s = 10, i = u["a"].toBigNumber("1"), o = 120, t.next = 8, r.start(a, n, s, i, o);
                                        case 8:
                                            return l = t.sent, t.next = 11, l.wait();
                                        case 11:
                                            e.$NotifySuccess("Start", "Auction Start");
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        auctionEnd: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["f"])(), t.next = 3, r.auctionEnd();
                                        case 3:
                                            return a = t.sent, t.next = 6, a.wait();
                                        case 6:
                                            e.$NotifySuccess("Start", "Auction Start"), e.countdown();
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        stop: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return r = Object(c["f"])(), t.next = 3, r.stop();
                                        case 3:
                                            e.countdown();
                                        case 4:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        increase: function (e) {
                            this.value += e
                        },
                        bid: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n, s, i, o, l;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.loading = !0, r = Object(c["f"])(), a = u["a"].toBigNumber(e.value.toString()), t.next = 6, r.estimateGas.bid(a);
                                        case 6:
                                            return n = t.sent, s = n.toNumber(), i = {
                                                gasPrice: "5000000001",
                                                gasLimit: 2 * s
                                            }, t.next = 11, r.bid(a, i);
                                        case 11:
                                            return o = t.sent, t.next = 14, o.wait();
                                        case 14:
                                            t.next = 21;
                                            break;
                                        case 16:
                                            t.prev = 16, t.t0 = t["catch"](0), console.error("error", t.t0), l = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, -1 !== l.indexOf("bid too low") ? e.$NotifyError("Error", "bid too low") : e.$NotifyError("Error", "Bid Fail");
                                        case 21:
                                            e.loading = !1;
                                        case 22:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 16]
                                ])
                            })))()
                        },
                        withdraw: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                var r, a, n;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.withdrawloading = !0, r = Object(c["f"])(), t.next = 5, r.withdraw();
                                        case 5:
                                            return a = t.sent, t.next = 8, a.wait();
                                        case 8:
                                            e.$NotifySuccess("Success", "Withdraw success"), t.next = 15;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t["catch"](0), n = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", n);
                                        case 15:
                                            e.withdrawloading = !1;
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })))()
                        },
                        history: function () {
                            var e = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            e.getRecords(e.pager.currentPage, e.pager.perPage);
                                        case 1:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        currentPageChange: function (e) {
                            this.getRecords(e, this.pager.perPage)
                        },
                        getRecords: function (e, t) {
                            var r = this;
                            this.loadingAuctionHistory = !0;
                            var a = {
                                currentPage: e,
                                perPage: t
                            };
                            A["a"].get("/api/auction/bids", a).then((function (e) {
                                r.rows = e.data.map((function (e) {
                                    return e.round = Math.max(0, e.round - 44), e.user = e.user.nickname, e
                                })), r.pager.total = e.meta.total, r.$nextTick((function () {
                                    r.$set(r.pager, "currentPage", e.meta.current_page)
                                }))
                            })).catch((function (e) {
                                r.$NotifyError("Error", e.message)
                            })).finally((function () {
                                r.loadingAuctionHistory = !1
                            }))
                        }
                    }
                },
                $ = S,
                H = Object(v["a"])($, a, n, !1, null, "5729d2aa", null);
            t["default"] = H.exports
        },
        b9df: function (e, t, r) {}
    }
]);