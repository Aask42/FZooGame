(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-265e4ad5"], {
        "0240": function (t, e, a) {
            "use strict";
            a("3d15")
        },
        "16b3": function (t, e, a) {
            "use strict";
            a("fed5")
        },
        "1d79": function (t, e, a) {},
        "2ae6": function (t, e, a) {},
        "3d15": function (t, e, a) {},
        4122: function (t, e, a) {
            "use strict";
            a.r(e);
            var s = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("b-tabs", {
                        attrs: {
                            pills: "",
                            align: "center"
                        },
                        model: {
                            value: t.tabIndex,
                            callback: function (e) {
                                t.tabIndex = e
                            },
                            expression: "tabIndex"
                        }
                    }, [a("b-tab", {
                        attrs: {
                            title: t.$t("LeaderboardPage.PlayerHashPower")
                        }
                    }, [0 === t.tabIndex ? a("player-hash-power") : t._e()], 1), a("b-tab", {
                        attrs: {
                            title: t.$t("LeaderboardPage.NftHashPower")
                        }
                    }, [1 === t.tabIndex ? a("nft-hash-power") : t._e()], 1)], 1)], 1)
                },
                r = [],
                n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("b-overlay", {
                        attrs: {
                            show: t.loading,
                            "no-wrap": ""
                        }
                    }), t.loading || 3 !== t.playerTop3.length ? t._e() : a("stage", {
                        attrs: {
                            "player-top3": t.playerTop3
                        }
                    }), t.loading ? t._e() : a("b-card", {
                        staticClass: "no-top-radius"
                    }, [a("b-table", {
                        staticClass: "mb-0",
                        attrs: {
                            responsive: "xl",
                            items: t.records,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell(ranking)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(user.nickname)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("span", {
                                    class: "rankname-" + e.item.ranking
                                }, [t._v(" " + t._s(e.value))])])]
                            }
                        }, {
                            key: "cell(countryImage)",
                            fn: function (t) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("img", {
                                    staticStyle: {
                                        width: "6rem",
                                        height: "3.72rem",
                                        "box-shadow": "0 4px 24px 0 rgb(34 41 47 / 10%)",
                                        "border-radius": "2px"
                                    },
                                    attrs: {
                                        src: t.value
                                    }
                                })])]
                            }
                        }, {
                            key: "cell(nftId)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex align-items-center"
                                }, [a("NFTCard", {
                                    staticClass: "mr-50",
                                    staticStyle: {
                                        width: "3rem"
                                    },
                                    attrs: {
                                        nft: e.item
                                    },
                                    on: {
                                        click: t.nftDetail
                                    }
                                }), a("div", {}, [t._v(" " + t._s(e.item.name))])], 1)]
                            }
                        }, {
                            key: "cell(star)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("ul", {
                                    staticClass: "unstyled-list list-inline"
                                }, t._l(3, (function (t) {
                                    return a("li", {
                                        key: t,
                                        staticClass: "ratings-list-item",
                                        class: {
                                            "ml-25": t - 1
                                        }
                                    }, [a("feather-icon", {
                                        class: [{
                                            "fill-current": t <= e.value
                                        }, t <= e.value ? "text-warning" : "text-muted"],
                                        attrs: {
                                            icon: "StarIcon",
                                            size: "16"
                                        }
                                    })], 1)
                                })), 0)])]
                            }
                        }, {
                            key: "cell(level)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("div", {
                                    staticClass: "d-flex"
                                }, [a("img", {
                                    attrs: {
                                        src: "/chest/level.png",
                                        width: "20",
                                        alt: "power"
                                    }
                                }), a("div", {
                                    staticClass: " ml-50",
                                    staticStyle: {
                                        "margin-bottom": "-20px"
                                    }
                                }, [t._v(" " + t._s(e.value))])])])]
                            }
                        }, {
                            key: "cell(computingPower)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("div", {
                                    staticClass: "d-flex"
                                }, [a("img", {
                                    attrs: {
                                        src: "/chest/airdrop.png",
                                        width: "20",
                                        alt: "power"
                                    }
                                }), a("div", {
                                    staticClass: " ml-50",
                                    staticStyle: {
                                        "margin-bottom": "-20px"
                                    }
                                }, [t._v(t._s(e.value))])])])]
                            }
                        }, {
                            key: "cell(tx)",
                            fn: function (t) {
                                return [a("b-link", {
                                    staticClass: "ml-25",
                                    attrs: {
                                        href: "https://bscscan.com/tx/" + t.item.tx,
                                        target: "_blank"
                                    }
                                }, [a("feather-icon", {
                                    staticClass: "mr-50",
                                    attrs: {
                                        icon: "EyeIcon"
                                    }
                                })], 1)]
                            }
                        }], null, !1, 4093278548)
                    }), a("b-pagination", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": t.pager.total,
                            "per-page": t.pager.perPage,
                            align: "center"
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
                    })], 1)], 1)
                },
                i = [],
                o = a("1c03"),
                l = (a("6540"), a("b131"), a("a13e")),
                c = a("d2ba"),
                g = a("cf6b"),
                d = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        ref: "stage",
                        staticClass: "stage",
                        style: {
                            height: t.stageHeight + "px"
                        }
                    }, [t._l(t.playerTop3, (function (t, e) {
                        return a("flag", {
                            key: e,
                            class: "flag-" + e.toString(),
                            attrs: {
                                player: t
                            }
                        })
                    })), a("img", {
                        staticClass: "bg",
                        attrs: {
                            src: "/leadboard/stage.png"
                        }
                    }), t._l(t.playerTop3, (function (t, e) {
                        return a("role", {
                            key: t.account,
                            class: "role-" + e.toString(),
                            attrs: {
                                player: t
                            }
                        })
                    }))], 2)
                },
                u = [],
                f = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "box"
                    }, [a("img", {
                        staticClass: "w-100 nft",
                        attrs: {
                            src: t.item.src
                        }
                    }), a("img", {
                        staticClass: "w-75 nft-shadow",
                        attrs: {
                            src: "/leadboard/nft-shadow.png"
                        }
                    })])
                },
                h = [],
                p = {
                    name: "Role",
                    props: ["player"],
                    data: function () {
                        return {
                            item: {}
                        }
                    },
                    mounted: function () {
                        if (this.item = this.player.nfts[0], 4 === this.item.rarity) {
                            var t = this.item.teamId / 2;
                            this.item.src = "/nfts/purple/".concat(t, ".png")
                        } else if (5 === this.item.rarity) {
                            var e = (this.item.teamId - 1) / 4;
                            this.item.src = "/nfts/orange/".concat(e, ".png")
                        } else this.item.src = "/nfts/normal/".concat(this.item.teamId, ".png")
                    }
                },
                m = p,
                b = (a("16b3"), a("4ac2")),
                w = Object(b["a"])(m, f, h, !1, null, "008acb40", null),
                y = w.exports,
                v = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "box"
                    }, [a("img", {
                        staticClass: "w-100 flag-bg",
                        attrs: {
                            src: "/leadboard/flag-bg.png"
                        }
                    }), a("img", {
                        staticClass: "flag",
                        attrs: {
                            src: t.player.countryImage
                        }
                    }), a("img", {
                        staticClass: "flag-cover",
                        attrs: {
                            src: "/leadboard/flag-cover.png"
                        }
                    }), a("div", {
                        staticClass: "nickname",
                        class: "name-" + t.player.ranking.toString()
                    }, [t._v(t._s(t.player.nickname))])])
                },
                P = [],
                k = {
                    name: "Flag",
                    props: ["player"],
                    data: function () {
                        return {}
                    },
                    mounted: function () {}
                },
                _ = k,
                C = (a("f3db"), Object(b["a"])(_, v, P, !1, null, "0975e607", null)),
                x = C.exports,
                S = {
                    name: "Stage",
                    components: {
                        Role: y,
                        Flag: x
                    },
                    props: ["playerTop3"],
                    data: function () {
                        return {
                            stageWidth: 0,
                            stageHeight: 0
                        }
                    },
                    mounted: function () {
                        var t = this;
                        this.$nextTick((function () {
                            t.stageWidth = t.$refs["stage"].clientWidth;
                            var e = t.stageWidth / 1600;
                            t.stageHeight = 780 * e
                        })), window.onresize = function () {
                            t.stageWidth = t.$refs["stage"].clientWidth;
                            var e = t.stageWidth / 1600;
                            t.stageHeight = 780 * e
                        }
                    }
                },
                T = S,
                N = (a("0240"), Object(b["a"])(T, d, u, !1, null, "1ab894e8", null)),
                H = N.exports,
                I = {
                    name: "NftHashPower",
                    components: {
                        NFTCard: c["a"],
                        Stage: H
                    },
                    data: function () {
                        return {
                            fields: [{
                                key: "ranking",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.Ranking")
                            }, {
                                key: "countryImage",
                                label: "region"
                            }, {
                                key: "nickname",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.Owner")
                            }, {
                                key: "nftId",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.NFT")
                            }, {
                                key: "star",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.Star")
                            }, {
                                key: "level",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.Level")
                            }, {
                                key: "computingPower",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.HashPower")
                            }],
                            records: [],
                            pager: {
                                currentPage: 1,
                                perPage: 100,
                                total: 100
                            },
                            loading: !0,
                            playerTop3: []
                        }
                    },
                    computed: Object(o["a"])({}, Object(g["b"])("farm", ["defaultAccount"])),
                    mounted: function () {
                        this.getRecords(this.pager.currentPage, this.pager.perPage)
                    },
                    methods: {
                        currentPageChange: function (t) {
                            this.getRecords(t, this.pager.perPage)
                        },
                        nftDetail: function (t) {
                            this.$router.push({
                                name: "apps-e-commerce-product-details",
                                params: {
                                    slug: t.nftId
                                }
                            })
                        },
                        getRecords: function (t, e) {
                            var a = this;
                            this.loading = !0;
                            var s = {
                                currentPage: t,
                                perPage: e
                            };
                            l["a"].get("/api/zoo/nfts", s).then((function (t) {
                                a.records = t.data.map((function (t, e) {
                                    return t.ranking = 10 * (s.currentPage - 1) + e + 1, t.star = t.level / 10, t.nickname = t.user.nickname, t.country = t.user.country, t.user.country ? t.countryImage = "/country-leadboard/" + t.user.country + ".png" : t.countryImage = "/country-leadboard/0.png", t
                                })), a.playerTop3 = a.records.slice(0, 3), a.loading = !1
                            })).catch((function (t) {
                                var e = t.data && t.data.message ? t.data.message : t.message;
                                a.$NotifyError("Error", e)
                            }))
                        }
                    }
                },
                $ = I,
                O = (a("510e"), Object(b["a"])($, n, i, !1, null, "6518fd9e", null)),
                F = O.exports,
                E = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("b-overlay", {
                        attrs: {
                            show: t.loading,
                            "no-wrap": ""
                        }
                    }), t.loading || 3 !== t.playerTop3.length ? t._e() : a("stage", {
                        attrs: {
                            "player-top3": t.playerTop3
                        }
                    }), t.loading ? t._e() : a("b-card", {
                        staticClass: "no-top-radius"
                    }, [a("b-table", {
                        staticClass: "mb-0",
                        attrs: {
                            responsive: "xl",
                            items: t.records,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell(ranking)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(nickname)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("span", {
                                    class: "rankname-" + e.item.ranking
                                }, [t._v(" " + t._s(e.value))])])]
                            }
                        }, {
                            key: "cell(countryImage)",
                            fn: function (t) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("img", {
                                    staticStyle: {
                                        width: "6rem",
                                        height: "3.72rem",
                                        "box-shadow": "0 4px 24px 0 rgb(34 41 47 / 10%)",
                                        "border-radius": "2px"
                                    },
                                    attrs: {
                                        src: t.value
                                    }
                                })])]
                            }
                        }, {
                            key: "cell(nfts)",
                            fn: function (e) {
                                return [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.nfts, (function (e) {
                                    return a("div", {
                                        key: e.id,
                                        attrs: {
                                            lg: "1",
                                            md: "4"
                                        }
                                    }, [a("NFTCard", {
                                        staticClass: "mr-50",
                                        staticStyle: {
                                            width: "3rem"
                                        },
                                        attrs: {
                                            nft: e
                                        },
                                        on: {
                                            click: t.nftDetail
                                        }
                                    })], 1)
                                })), 0)]
                            }
                        }, {
                            key: "cell(power)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("img", {
                                    attrs: {
                                        src: "/chest/airdrop.png",
                                        width: "20",
                                        alt: "power"
                                    }
                                }), t._v(" " + t._s(e.value) + " ")])]
                            }
                        }], null, !1, 3299307970)
                    }), a("b-pagination", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "mt-2",
                        attrs: {
                            "total-rows": t.pager.total,
                            "per-page": t.pager.perPage,
                            align: "center"
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
                    })], 1)], 1)
                },
                L = [],
                M = {
                    name: "PlayerHashPower",
                    components: {
                        NFTCard: c["a"],
                        Stage: H
                    },
                    data: function () {
                        return {
                            fields: [{
                                key: "ranking",
                                label: this.$t("LeaderboardPage.NftHashPowerTable.Ranking")
                            }, {
                                key: "countryImage",
                                label: "region"
                            }, {
                                key: "nickname",
                                label: this.$t("LeaderboardPage.PlayerHashPowerTable.Owner")
                            }, {
                                key: "nfts",
                                label: this.$t("LeaderboardPage.PlayerHashPowerTable.NFTs")
                            }, {
                                key: "power",
                                label: this.$t("LeaderboardPage.PlayerHashPowerTable.HashPower")
                            }],
                            records: [],
                            pager: {
                                currentPage: 1,
                                perPage: 100,
                                total: 100
                            },
                            loading: !0,
                            playerTop3: []
                        }
                    },
                    computed: Object(o["a"])({}, Object(g["b"])("farm", ["defaultAccount"])),
                    mounted: function () {
                        this.getRecords(this.pager.currentPage, this.pager.perPage)
                    },
                    methods: {
                        currentPageChange: function (t) {
                            this.getRecords(t, this.pager.perPage)
                        },
                        nftDetail: function (t) {
                            this.$router.push({
                                name: "apps-e-commerce-product-details",
                                params: {
                                    slug: t.nftId
                                }
                            })
                        },
                        getRecords: function (t, e) {
                            var a = this;
                            this.loading = !0;
                            var s = {
                                currentPage: t,
                                perPage: e
                            };
                            l["a"].get("/api/zoo/users", s).then((function (t) {
                                a.records = t.data.map((function (t, e) {
                                    return t.ranking = 10 * (s.currentPage - 1) + e + 1, t.country ? t.countryImage = "/country-leadboard/" + t.country + ".png" : t.countryImage = "/country-leadboard/0.png", t
                                })), a.playerTop3 = a.records.slice(0, 3), a.loading = !1
                            })).catch((function (t) {
                                var e = t.data && t.data.message ? t.data.message : t.message;
                                a.$NotifyError("Error", e)
                            }))
                        }
                    }
                },
                R = M,
                j = (a("d081"), Object(b["a"])(R, E, L, !1, null, "06251ba1", null)),
                G = j.exports,
                A = {
                    name: "Index",
                    components: {
                        NftHashPower: F,
                        PlayerHashPower: G
                    },
                    data: function () {
                        return {
                            tabIndex: 0
                        }
                    }
                },
                B = A,
                D = Object(b["a"])(B, s, r, !1, null, "07f8004c", null);
            e["default"] = D.exports
        },
        "510e": function (t, e, a) {
            "use strict";
            a("c324")
        },
        7803: function (t, e, a) {},
        a145: function (t, e, a) {
            "use strict";
            a("7803")
        },
        c324: function (t, e, a) {},
        d081: function (t, e, a) {
            "use strict";
            a("1d79")
        },
        d2ba: function (t, e, a) {
            "use strict";
            var s = function () {
                    var t = this,
                        e = this,
                        a = e.$createElement,
                        s = e._self._c || a;
                    return e.item ? s("div", {
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
                    }, [s("div", {
                        staticStyle: {
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }
                    }, [s("img", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            src: e.nft.border
                        }
                    }), 1 === e.nft.rarity && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-1",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 2 === e.nft.rarity && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-2",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 3 === e.nft.rarity && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-3",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 4 === e.nft.rarity && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), e.nft.showPower ? s("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "12%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }) : s("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "20%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }), e.nft.showPower ? s("div", {
                        class: ["d-flex justify-content-center power", e.small ? "font-small-1" : ""]
                    }, [s("div", {
                        staticClass: "item"
                    }, [s("img", {
                        attrs: {
                            src: "/chest/level.png",
                            width: "20",
                            alt: "level"
                        }
                    }), e._v("   "), s("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.level))])]), s("div", {
                        staticStyle: {
                            width: "5%"
                        }
                    }), s("div", {
                        staticClass: "item"
                    }, [s("img", {
                        attrs: {
                            src: "/chest/airdrop.png",
                            width: "20",
                            alt: "power"
                        }
                    }), e._v("   "), s("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.computingPower))])])]) : e._e(), e.nft.isMinting && e.nft.showMinting ? s("div", {
                        staticClass: "minting"
                    }, [e._v(e._s(e.$t("Components.NFTCard.Minting")))]) : e._e(), e.nft.rarity >= 4 ? s("div", [s("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "38%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 10 ? "light" : "dark") + ".png"
                        }
                    }), s("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "48%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 20 ? "light" : "dark") + ".png"
                        }
                    }), s("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "58%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 30 ? "light" : "dark") + ".png"
                        }
                    })]) : e._e()]), e.nft.showPower ? s("div", {
                        staticClass: "nftName"
                    }, [s("div", {
                        class: [e.small ? "font-small-1" : ""]
                    }, [e._v("NFT " + e._s(e.nft.nftId))]), e.small ? e._e() : s("div", [e._v(" " + e._s(e.nft.showPower ? e.nft.name : "") + " ")])]) : e._e(), 4 === e.nft.rarity && e.showHover && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-hover-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.showHover && e.nft.showPower ? s("div", {
                        staticClass: "nft-bg-hover-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e()]) : e._e()
                },
                r = [],
                n = a("99a5"),
                i = (a("1d7a"), a("6a61"), {
                    orange: ["DOGE", "UNI", "BUNNY", "SHIB", "DUCK", "PANTHER", "Nithe", "Surinks", "Jeremiah", "Apalala"],
                    purple: ["RVN", "HOGE", "TRTL", "GRUMPY", "CAT", "MONK", "FEG", "DOGGY", "PIG", "AKITA", "MAMMOTH", "ANTELOPE", "Duke", "McStubby", "Femme Feli", "Talon", "Stealth", "Wingo", "Hobble", "Ormr"],
                    normal: ["Fox", "Corgi", "Doggy Brother", "Chow Chow", "Leopard", "Sheep", "Mice", "Hyena", "Lion", "Panda", "GentleMonkey", "Alligator", "Zebra", "Hokkaido Doggy", "Border Collie", "Giraffe", "Hippo", "Cock", "Bear", "Bull", "Nuttie", "Spikes", "Parrot", "Marmot", "NFT24", "Shabina", "Clawdious", "NFT27", "Guile", "Shelldon", "Mr E.B.", "NFT31", "Boom Boom", "Fred", "Flash", "NFT35", "Krank", "Miss Quito", "Razor", "NFT39"],
                    boss: ["", "Vitalik", "Musk", "Satoshi", "GreyScale"]
                }),
                o = {
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
                        return Object(n["a"])(regeneratorRuntime.mark((function e() {
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
                                this.item.src = "/nfts/purple/".concat(t, ".png"), this.item.name = i.purple[t]
                            } else if (5 === this.item.rarity) {
                                var e = (this.item.teamId - 1) / 4;
                                this.item.src = "/nfts/orange/".concat(e, ".png"), this.item.name = i.orange[e]
                            } else this.item.src = "/nfts/normal/".concat(this.item.teamId, ".png"), this.item.name = i.normal[this.item.teamId];
                            this.item.showLevel = this.nft.showLevel || !1, this.item.showPower = this.nft.showPower || !1, this.item.showStar = !1, this.item.canClick = this.nft.canClick || !1, this.item.showMinting = this.nft.showMinting || !1, this.item.star = Math.floor(this.nft.level / 10), this.item.name = this.item.name || "No Name"
                        }
                    }
                },
                l = o,
                c = (a("a145"), a("4ac2")),
                g = Object(c["a"])(l, s, r, !1, null, "01a91ad2", null);
            e["a"] = g.exports
        },
        f3db: function (t, e, a) {
            "use strict";
            a("2ae6")
        },
        fed5: function (t, e, a) {}
    }
]);