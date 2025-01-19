(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3a4299f9"], {
        "0767": function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("b-row", t._l(t.teams, (function (e, n) {
                        return a("b-col", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: (n + 1) % 4 !== 0,
                                expression: "(index+1) %4 !== 0"
                            }],
                            key: n,
                            attrs: {
                                md: "4",
                                lg: "4",
                                sm: "12"
                            }
                        }, [a("b-card", {
                            staticClass: "mb-2 position-relative",
                            attrs: {
                                title: e.name,
                                "img-top": "",
                                "img-alt": "card img"
                            }
                        }, [a("b-overlay", {
                            attrs: {
                                show: e.loading,
                                "no-wrap": ""
                            }
                        }), a("b-overlay", {
                            attrs: {
                                show: 0 === e.nfts.length,
                                "no-wrap": "",
                                opacity: .7
                            },
                            scopedSlots: t._u([{
                                key: "overlay",
                                fn: function () {
                                    return [a("div")]
                                },
                                proxy: !0
                            }], null, !0)
                        }), a("b-card-text", {
                            staticClass: "text-center"
                        }, [t._v(t._s(e.desc))]), a("b-card-body", {
                            staticClass: "d-flex justify-content-center"
                        }, [t._l(e.nfts, (function (e) {
                            return a("div", {
                                key: e.nftId
                            }, [a("NFTCard", {
                                staticClass: "cursor-pointer",
                                staticStyle: {
                                    width: "80px"
                                },
                                attrs: {
                                    nft: e
                                },
                                on: {
                                    click: t.nftDetail
                                }
                            })], 1)
                        })), a("div", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: 0 === e.nfts.length,
                                expression: "team.nfts.length===0"
                            }]
                        }, [a("img", {
                            staticStyle: {
                                width: "60px"
                            },
                            attrs: {
                                src: "/nfts/reverse.png",
                                alt: "card"
                            }
                        }), a("img", {
                            staticStyle: {
                                width: "60px"
                            },
                            attrs: {
                                src: "/nfts/reverse.png",
                                alt: "card"
                            }
                        }), a("img", {
                            staticStyle: {
                                width: "60px"
                            },
                            attrs: {
                                src: "/nfts/reverse.png",
                                alt: "card"
                            }
                        }), a("img", {
                            staticStyle: {
                                width: "60px"
                            },
                            attrs: {
                                src: "/nfts/reverse.png",
                                alt: "card"
                            }
                        })])], 2), a("div", [e.active ? a("b-button", {
                            attrs: {
                                "blockv-ripple.400": "'rgba(255, 255, 255, 0.15)'",
                                variant: "danger",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (a) {
                                    return t.disableTeamGain(n, e)
                                }
                            }
                        }, [t._v(" " + t._s(t.$t("TeamPage.Disable")) + " ")]) : a("div", [4 === e.nfts.length ? a("b-button", {
                            attrs: {
                                "blockv-ripple.400": "'rgba(255, 255, 255, 0.15)'",
                                variant: "primary",
                                block: "",
                                pill: ""
                            },
                            on: {
                                click: function (a) {
                                    return t.enableTeamGain(n, e)
                                }
                            }
                        }, [t._v(" " + t._s(t.$t("TeamPage.Enable")) + " ")]) : a("div", [a("b-button", {
                            attrs: {
                                variant: "flat-secondary",
                                block: "",
                                pill: ""
                            }
                        }, [t._v(" " + t._s(t.$t("TeamPage.CardsNotEnough")) + " ")])], 1)], 1)], 1)], 1)], 1)
                    })), 1)
                },
                i = [],
                r = a("190b"),
                s = a("99a5"),
                o = a("1c03"),
                c = (a("6a61"), a("13cf"), a("270f"), a("6540"), a("a13e")),
                l = a("5263"),
                f = a("cf6b"),
                h = a("d2ba"),
                u = a("bf32"),
                m = {
                    components: {
                        NFTCard: h["a"]
                    },
                    data: function () {
                        return {
                            loading: !1,
                            teams: []
                        }
                    },
                    computed: Object(o["a"])({}, Object(f["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (t) {
                            t && t.length > 0 && this.init()
                        }
                    },
                    mounted: function () {
                        this.teams = [];
                        for (var t = 0; t < 40; t++) this.teams.push({
                            name: l["a"][t],
                            desc: (t + 1) % 4 === 0 ? " " : this.$t("TeamPage.TeamingBounsDescription"),
                            active: !1,
                            loading: !0,
                            nfts: [],
                            teamingNfts: []
                        });
                        this.defaultAccount && this.init()
                    },
                    methods: {
                        addToTeam: function (t) {
                            var e = this.teams[t.teamId];
                            if (1 === t.isGrouping) {
                                var a = e.teamingNfts.some((function (e) {
                                    return e.rarity === t.rarity
                                }));
                                a || e.teamingNfts.push(t)
                            }
                            var n = e.nfts.find((function (e) {
                                return e.rarity === t.rarity
                            }));
                            n || t.isSelling || 1 === t.isGrouping || (t.showMinting = !0, e.nfts.push(t))
                        },
                        init: function () {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var a, n, i, r, s;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return a = {
                                                perPage: 1e3,
                                                currentPage: 1,
                                                owner: t.defaultAccount
                                            }, e.next = 3, c["a"].get("/api/zoo/nft", a);
                                        case 3:
                                            return n = e.sent, i = n.data, i.forEach((function (e) {
                                                t.addToTeam(e)
                                            })), e.next = 8, c["a"].get("/api/zoo/teams", a);
                                        case 8:
                                            r = e.sent, s = r.data, s.forEach((function (e) {
                                                t.teams[e.teamId].active = 1 === e.isEnabled, 1 === e.isEnabled && (t.teams[e.teamId].nfts = t.teams[e.teamId].teamingNfts)
                                            })), t.teams.forEach((function (e, a) {
                                                t.teamLoading(a, e, !1)
                                            }));
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        enableTeamGain: function (t, e) {
                            var a = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function n() {
                                var i, s, o;
                                return regeneratorRuntime.wrap((function (n) {
                                    while (1) switch (n.prev = n.next) {
                                        case 0:
                                            if (i = e.nfts.find((function (t) {
                                                    return 0 === t.isMinting
                                                })), !i) {
                                                n.next = 4;
                                                break
                                            }
                                            return a.$NotifyError("error", "There are cards in the team that have not been staked"), n.abrupt("return");
                                        case 4:
                                            return a.teamLoading(t, e, !0), a.$set(a.teams, t, e), n.prev = 6, s = e.nfts.map((function (t) {
                                                return t.nftId
                                            })), n.next = 10, Object(u["k"])().enableTeamGain(s);
                                        case 10:
                                            return o = n.sent, n.next = 13, o.wait();
                                        case 13:
                                            return n.next = 15, a.init();
                                        case 15:
                                            a.teams = Object(r["a"])(a.teams), n.next = 21;
                                            break;
                                        case 18:
                                            n.prev = 18, n.t0 = n["catch"](6), a.$NotifyError("Error", n.t0.message);
                                        case 21:
                                            return n.prev = 21, a.teamLoading(t, e, !1), n.finish(21);
                                        case 24:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [6, 18, 21, 24]
                                ])
                            })))()
                        },
                        disableTeamGain: function (t, e) {
                            var a = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function n() {
                                var i, s;
                                return regeneratorRuntime.wrap((function (n) {
                                    while (1) switch (n.prev = n.next) {
                                        case 0:
                                            return a.teamLoading(t, e, !0), n.prev = 1, i = e.nfts.map((function (t) {
                                                return t.nftId
                                            })), n.next = 5, Object(u["k"])().disableTeamGain(i);
                                        case 5:
                                            return s = n.sent, n.next = 8, s.wait();
                                        case 8:
                                            return n.next = 10, a.init();
                                        case 10:
                                            a.teams = Object(r["a"])(a.teams), n.next = 16;
                                            break;
                                        case 13:
                                            n.prev = 13, n.t0 = n["catch"](1), a.$NotifyError("Error", n.t0.message);
                                        case 16:
                                            return n.prev = 16, a.teamLoading(t, e, !1), n.finish(16);
                                        case 19:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [1, 13, 16, 19]
                                ])
                            })))()
                        },
                        teamLoading: function (t, e, a) {
                            e.loading = a, this.$set(this.teams, t, e)
                        },
                        nftDetail: function (t) {
                            this.$router.push({
                                name: "apps-e-commerce-product-details",
                                params: {
                                    slug: t.nftId
                                }
                            })
                        }
                    }
                },
                d = m,
                g = a("4ac2"),
                p = Object(g["a"])(d, n, i, !1, null, "87ed1d64", null);
            e["default"] = p.exports
        },
        "13cf": function (t, e, a) {
            "use strict";
            var n = a("a09b"),
                i = a("bfc3").find,
                r = a("c119"),
                s = a("c1e5"),
                o = "find",
                c = !0,
                l = s(o);
            o in [] && Array(1)[o]((function () {
                c = !1
            })), n({
                target: "Array",
                proto: !0,
                forced: c || !l
            }, {
                find: function (t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), r(o)
        },
        5263: function (t, e, a) {
            "use strict";
            e["a"] = ["Pelicans", "DogeArmy", "Nuggets", "Chow Chow", "Bobcats", "Uni", "The Cat & The Mouse", "Hyena", "King", "Kung Fu Bunny", "Monkey", "Alligator", "King Kong", "ShibaArmy", "Doggy", "Giraffe", "Heavy Weight", "C&D", "Akita", "Bulls", "Ice Age", "Wakanda", "Wakawaka", "Silance Alan", "Rooster", "Meander", "DeepSea", "null", "Fairytale", "ShallowSea", "The Sky Crawlers", "null", "Resolutes", "Royals", "Sharpshooters", "null", "Cold Blooded", "Pests", "Fatal Attraction", "null"]
        },
        7803: function (t, e, a) {},
        a145: function (t, e, a) {
            "use strict";
            a("7803")
        },
        d2ba: function (t, e, a) {
            "use strict";
            var n = function () {
                    var t = this,
                        e = this,
                        a = e.$createElement,
                        n = e._self._c || a;
                    return e.item ? n("div", {
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
                    }, [n("div", {
                        staticStyle: {
                            position: "relative",
                            padding: "0",
                            margin: "0"
                        }
                    }, [n("img", {
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        },
                        attrs: {
                            src: e.nft.border
                        }
                    }), 1 === e.nft.rarity && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-1",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 2 === e.nft.rarity && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-2",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 3 === e.nft.rarity && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-3",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 4 === e.nft.rarity && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), e.nft.showPower ? n("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "12%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }) : n("img", {
                        staticStyle: {
                            width: "90%",
                            position: "absolute",
                            top: "20%",
                            left: "5%"
                        },
                        attrs: {
                            src: e.nft.src
                        }
                    }), e.nft.showPower ? n("div", {
                        class: ["d-flex justify-content-center power", e.small ? "font-small-1" : ""]
                    }, [n("div", {
                        staticClass: "item"
                    }, [n("img", {
                        attrs: {
                            src: "/chest/level.png",
                            width: "20",
                            alt: "level"
                        }
                    }), e._v("   "), n("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.level))])]), n("div", {
                        staticStyle: {
                            width: "5%"
                        }
                    }), n("div", {
                        staticClass: "item"
                    }, [n("img", {
                        attrs: {
                            src: "/chest/airdrop.png",
                            width: "20",
                            alt: "power"
                        }
                    }), e._v("   "), n("div", {
                        staticStyle: {
                            color: "#fff"
                        }
                    }, [e._v(e._s(e.nft.computingPower))])])]) : e._e(), e.nft.isMinting && e.nft.showMinting ? n("div", {
                        staticClass: "minting"
                    }, [e._v(e._s(e.$t("Components.NFTCard.Minting")))]) : e._e(), e.nft.rarity >= 4 ? n("div", [n("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "38%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 10 ? "light" : "dark") + ".png"
                        }
                    }), n("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "48%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 20 ? "light" : "dark") + ".png"
                        }
                    }), n("img", {
                        staticStyle: {
                            width: "8%",
                            position: "absolute",
                            top: "1.8%",
                            left: "58%"
                        },
                        attrs: {
                            src: "/nfts/bg/" + e.nft.rarity + "/" + (e.nft.level >= 30 ? "light" : "dark") + ".png"
                        }
                    })]) : e._e()]), e.nft.showPower ? n("div", {
                        staticClass: "nftName"
                    }, [n("div", {
                        class: [e.small ? "font-small-1" : ""]
                    }, [e._v("NFT " + e._s(e.nft.nftId))]), e.small ? e._e() : n("div", [e._v(" " + e._s(e.nft.showPower ? e.nft.name : "") + " ")])]) : e._e(), 4 === e.nft.rarity && e.showHover && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-hover-4",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e(), 5 === e.nft.rarity && e.showHover && e.nft.showPower ? n("div", {
                        staticClass: "nft-bg-hover-5",
                        staticStyle: {
                            width: "100%",
                            height: "100%"
                        }
                    }) : e._e()]) : e._e()
                },
                i = [],
                r = a("99a5"),
                s = (a("1d7a"), a("6a61"), {
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
                c = o,
                l = (a("a145"), a("4ac2")),
                f = Object(l["a"])(c, n, i, !1, null, "01a91ad2", null);
            e["a"] = f.exports
        }
    }
]);