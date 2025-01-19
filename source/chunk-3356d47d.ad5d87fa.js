(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-3356d47d"], {
        "1f98": function (t, e, a) {
            "use strict";
            a.r(e);
            var n = function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1,
                            expression: "false"
                        }],
                        staticClass: "text-center p-4"
                    }, [a("img", {
                        staticClass: "nft-sleep",
                        attrs: {
                            src: "/combat/closed.png"
                        }
                    }), a("h3", {
                        staticClass: "p-2"
                    }, [t._v("Page is currently under maintenance")])]), a("div", [a("div", {
                        staticClass: "text-center chest-bg p-0 bordered",
                        staticStyle: {
                            "border-radius": "10px",
                            position: "relative"
                        }
                    }, [a("div", {
                        staticClass: "keys"
                    }, [t._v(t._s(t.myKeys) + " Keys")]), a("canvas", {
                        ref: "canvas",
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            id: "canvas"
                        }
                    }), a("div", {
                        staticClass: "text-center",
                        staticStyle: {
                            width: "150px",
                            margin: "0 auto"
                        }
                    }, [a("b-input-group", {
                        staticClass: "input-group-merge"
                    }, [a("b-input-group-prepend", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [a("feather-icon", {
                        attrs: {
                            icon: "KeyIcon"
                        }
                    })], 1), a("b-form-input", {
                        staticClass: "text-center font-weight-bold",
                        staticStyle: {
                            "background-clip": "border-box"
                        },
                        attrs: {
                            type: "number"
                        },
                        on: {
                            input: t.checkOpenTotal
                        },
                        model: {
                            value: t.openTotal,
                            callback: function (e) {
                                t.openTotal = e
                            },
                            expression: "openTotal"
                        }
                    }), a("b-input-group-append", {
                        attrs: {
                            "is-text": ""
                        }
                    }, [t._v(" KEY ")])], 1)], 1), t.defaultAccount ? a("div", {
                        staticClass: "mt-1 pb-2"
                    }, [a("div", [t.allowanceAmount <= 0 ? a("b-button", {
                        attrs: {
                            variant: "primary",
                            pill: "",
                            disabled: t.loading,
                            size: "lg"
                        },
                        on: {
                            click: t.approve
                        }
                    }, [a("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" " + t._s(t.$t("Approve")) + " ")], 1) : a("b-button", {
                        attrs: {
                            variant: "primary",
                            pill: "",
                            size: "lg",
                            disabled: t.loading
                        },
                        on: {
                            click: t.openChest
                        }
                    }, [a("b-spinner", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.loading,
                            expression: "loading"
                        }],
                        attrs: {
                            small: ""
                        }
                    }), t._v(" " + t._s(t.$t("ChestPage.OpenChestBtn")) + " ")], 1)], 1)]) : a("div", {
                        staticClass: "mt-1 pb-2"
                    }, [a("b-button", {
                        attrs: {
                            variant: "primary",
                            pill: ""
                        },
                        on: {
                            click: function (e) {
                                return t.$store.commit("farm/setConnectWalletDialogVisible", !0)
                            }
                        }
                    }, [t._v(" " + t._s(t.$t("Unlock")) + " ")])], 1)]), a("div", {
                        staticClass: "mt-2"
                    }, [a("b-table", {
                        staticClass: "mb-0",
                        attrs: {
                            responsive: "xl",
                            items: t.records,
                            fields: t.fields
                        },
                        scopedSlots: t._u([{
                            key: "cell(createdAt)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value) + " ")])]
                            }
                        }, {
                            key: "cell(count)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value.length) + " ")])]
                            }
                        }, {
                            key: "cell(nfts)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [a("div", {
                                    staticClass: "d-flex"
                                }, t._l(e.item.transfers, (function (e) {
                                    return a("div", {
                                        key: e.id
                                    }, [a("NFTCard", {
                                        staticClass: "mr-50 cursor-pointer",
                                        staticStyle: {
                                            width: "3rem"
                                        },
                                        attrs: {
                                            nft: e.nft
                                        },
                                        on: {
                                            click: t.nftDetail
                                        }
                                    })], 1)
                                })), 0)])]
                            }
                        }, {
                            key: "cell(transfers)",
                            fn: function (e) {
                                return [a("span", {
                                    staticClass: "text-nowrap"
                                }, [t._v(" " + t._s(e.value.length) + " ")])]
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
                        }])
                    }), a("b-pagination", {
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
                    })], 1)])])
                },
                i = [],
                s = a("99a5"),
                r = a("1c03"),
                o = (a("6a61"), a("6540"), a("402f"), a("836b"), a("7478"), a("bf32")),
                c = a("83b8"),
                l = a("7032"),
                d = a("cf6b"),
                m = a("238c"),
                h = a("78e0"),
                u = a("b96e"),
                f = (a("270f"), a("1d7a"), a("2db5"), a("6ab7"), a("f33e")),
                p = a("b478"),
                b = a("7d03"),
                g = a("b53b"),
                v = a("5c54"),
                y = a("19b1"),
                w = function () {
                    function t(e, a) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                x: 1,
                                y: 1
                            },
                            i = arguments.length > 3 ? arguments[3] : void 0;
                        Object(h["a"])(this, t), this.from = i, this.position = a, this.scale = n, this.size = {
                            width: 418 / 3,
                            height: 220
                        }, this.cardSize = {
                            width: this.size.width - 8,
                            height: this.size.width - 8
                        };
                        var s = Object.assign({}, e);
                        if (s.reverse = new g["a"]({
                                resource: "nft-reverse"
                            }), s.background = new g["a"]({
                                resource: "nft-bg-".concat(s.rarity)
                            }), s.border = new g["a"]({
                                resource: "nft-border-".concat(s.rarity)
                            }), 4 === s.rarity) {
                            var r = s.teamId / 2;
                            s.avatar = new g["a"]({
                                resource: "nft-purple-".concat(r)
                            })
                        } else if (5 === s.rarity) {
                            var o = (s.teamId - 1) / 4;
                            s.avatar = new g["a"]({
                                resource: "nft-orange-".concat(o)
                            })
                        } else s.avatar = new g["a"]({
                            resource: "nft-normal-".concat(s.teamId)
                        });
                        this.item = s, this._createGameObject(), this.createCardBack()
                    }
                    return Object(u["a"])(t, [{
                        key: "_createGameObject",
                        value: function () {
                            return this.gameObject = new f["c"]("Card-".concat(this.item.nftId), {
                                size: this.size,
                                position: this.from,
                                origin: {
                                    x: .5,
                                    y: .5
                                },
                                anchor: {
                                    x: .5,
                                    y: .5
                                },
                                cale: {
                                    x: .1,
                                    y: .1
                                }
                            }), this.gameObject.addComponent(new y["a"]({
                                zIndex: 100
                            })), this.gameObject
                        }
                    }, {
                        key: "_crateCardComponet",
                        value: function (t, e, a, n) {
                            var i = new f["c"](a, {
                                size: e,
                                origin: {
                                    x: .5,
                                    y: .5
                                },
                                anchor: {
                                    x: .5,
                                    y: .5
                                },
                                scale: this.scale
                            });
                            return i.addComponent(t), i.addComponent(new y["a"]({
                                zIndex: n
                            })), i
                        }
                    }, {
                        key: "createAnimation0",
                        value: function (t) {
                            var e = new f["c"]("card-open-idle", {
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    },
                                    scale: {
                                        x: .7,
                                        y: .7
                                    }
                                }),
                                a = new p["a"]({
                                    resource: "cardOpenIdleAnimation",
                                    animationName: "play"
                                });
                            return e.addComponent(a), a.once("complete", (function (a) {
                                "function" === typeof t && t(e)
                            })), e.stop = function () {
                                a.stop()
                            }, e
                        }
                    }, {
                        key: "createAnimation1",
                        value: function (t) {
                            var e = new f["c"]("card-open-1", {
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                a = new p["a"]({
                                    resource: "showAnimation1",
                                    animationName: "play"
                                });
                            return e.addComponent(a), a.once("complete", (function (a) {
                                e.destroy(), "function" === typeof t && t(a)
                            })), e
                        }
                    }, {
                        key: "createAnimation2",
                        value: function (t) {
                            var e = new f["c"]("chest-open", {
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                a = new p["a"]({
                                    resource: "showAnimation2",
                                    animationName: "play"
                                });
                            return a.once("complete", (function (a) {
                                e.destroy(), "function" === typeof t && t(a)
                            })), e.addComponent(a), e
                        }
                    }, {
                        key: "createAnimation3",
                        value: function (t) {
                            var e = new f["c"]("chest-open", {
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                a = new p["a"]({
                                    resource: "showAnimation3",
                                    animationName: "play"
                                });
                            return e.addComponent(a), a.once("complete", (function (a) {
                                e.destroy(), "function" === typeof t && t(a)
                            })), e
                        }
                    }, {
                        key: "showBoomAnimation",
                        value: function () {
                            if (this.item.rarity <= 3) {
                                var t = this.createAnimation1((function (t) {}));
                                this.gameObject.addChild(t)
                            } else if (4 === this.item.rarity) {
                                var e = this.createAnimation2((function (t) {}));
                                this.gameObject.addChild(e)
                            } else if (5 === this.item.rarity) {
                                var a = this.createAnimation3((function (t) {}));
                                this.gameObject.addChild(a)
                            }
                        }
                    }, {
                        key: "playReverseCardAnimation",
                        value: function () {
                            this.reverseAnimation && this.reverseAnimation.group && this.reverseAnimation.play("reverse", 1)
                        }
                    }, {
                        key: "showCardFront",
                        value: function () {
                            this.gameObject.addChild(this._crateCardComponet(this.item.background, this.size, "card-background-".concat(this.item.nftId), 0)), this.gameObject.addChild(this._crateCardComponet(this.item.border, this.size, "card-border-".concat(this.item.nftId), 2)), this.gameObject.addChild(this._crateCardComponet(this.item.avatar, this.cardSize, "card-avatar-".concat(this.item.nftId), 1))
                        }
                    }, {
                        key: "createCardBack",
                        value: function () {
                            var t = this;
                            this.cardBackObject = new f["c"]("card-reverse-animation-".concat(this.item.nftId), {
                                size: this.size,
                                origin: {
                                    x: .5,
                                    y: .5
                                },
                                anchor: {
                                    x: .5,
                                    y: .5
                                },
                                skew: {
                                    x: 0,
                                    y: 0
                                }
                            }), this.cardBackObject.addComponent(this.item.reverse), this.reverseAnimation = new v["a"]({
                                group: {
                                    reverse: [{
                                        name: "scale.x",
                                        component: this.cardBackObject.transform,
                                        values: [{
                                            time: 0,
                                            value: .1,
                                            tween: "ease-out"
                                        }, {
                                            time: 500,
                                            value: 1,
                                            tween: "ease-in"
                                        }]
                                    }, {
                                        name: "scale.y",
                                        component: this.cardBackObject.transform,
                                        values: [{
                                            time: 0,
                                            value: .1,
                                            tween: "ease-out"
                                        }, {
                                            time: 500,
                                            value: 1,
                                            tween: "ease-in"
                                        }]
                                    }, {
                                        name: "skew.y",
                                        component: this.cardBackObject.transform,
                                        values: [{
                                            time: 0,
                                            value: 0,
                                            tween: "ease-in"
                                        }, {
                                            time: 400,
                                            value: 3,
                                            tween: "ease-out"
                                        }]
                                    }]
                                }
                            }), this.cardBackObject.addComponent(this.reverseAnimation), this.reverseAnimation.once("finish", (function () {
                                t.cardBackObject && t.cardBackObject.destroy(), t.showCardFront(), t.showBoomAnimation()
                            }));
                            var e = this.createAnimation0();
                            return this.cardBackObject.addChild(e), this.from && (this.flyAnimation = new v["a"]({
                                group: {
                                    fly: [{
                                        name: "position.x",
                                        component: this.gameObject.transform,
                                        values: [{
                                            time: 0,
                                            value: this.from.x,
                                            tween: "ease-out"
                                        }, {
                                            time: 250,
                                            value: this.position.x,
                                            tween: "ease-in"
                                        }]
                                    }, {
                                        name: "position.y",
                                        component: this.gameObject.transform,
                                        values: [{
                                            time: 0,
                                            value: this.from.y,
                                            tween: "ease-out"
                                        }, {
                                            time: 250,
                                            value: this.position.y,
                                            tween: "ease-in"
                                        }]
                                    }, {
                                        name: "scale.x",
                                        component: this.gameObject.transform,
                                        values: [{
                                            time: 0,
                                            value: .5,
                                            tween: "ease-out"
                                        }, {
                                            time: 300,
                                            value: 1,
                                            tween: "ease-in"
                                        }]
                                    }, {
                                        name: "scale.y",
                                        component: this.gameObject.transform,
                                        values: [{
                                            time: 0,
                                            value: .5,
                                            tween: "ease-out"
                                        }, {
                                            time: 500,
                                            value: 1,
                                            tween: "ease-in"
                                        }]
                                    }]
                                }
                            }), this.gameObject.addComponent(this.flyAnimation)), this.cardBackObject
                        }
                    }, {
                        key: "showCardBack",
                        value: function () {
                            this.gameObject.addChild(this.cardBackObject)
                        }
                    }, {
                        key: "fly",
                        value: function () {
                            var t = this;
                            return new Promise((function (e) {
                                t.flyAnimation.once("finish", (function (a) {
                                    e(t)
                                })), t.flyAnimation.group && t.flyAnimation.play("fly", 1)
                            }))
                        }
                    }, {
                        key: "getGameObject",
                        value: function () {
                            return this.gameObject
                        }
                    }]), t
                }(),
                x = w,
                A = function () {
                    function t(e, a, n) {
                        Object(h["a"])(this, t), this.elementId = e, this.canvasHeight = n, this.canvasWidth = a;
                        var i = new b["b"]({
                            canvas: document.querySelector(this.elementId),
                            width: this.canvasWidth,
                            height: this.canvasHeight,
                            transparent: !0,
                            renderType: 0
                        });
                        this.game = new f["b"]({
                            systems: [i, new g["b"], new p["b"], new v["b"]],
                            autoStart: !0,
                            frameRate: 40
                        })
                    }
                    return Object(u["a"])(t, [{
                        key: "createChestStaticAnimation",
                        value: function (t, e) {
                            var a = new f["c"]("chest-static", {
                                    position: t,
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                n = new p["a"]({
                                    resource: "chestAnimation",
                                    animationName: "animation3"
                                });
                            return n.on("complete", (function (t) {
                                "function" === typeof e && e(t)
                            })), n.play("animation3"), a.addComponent(n), a.addComponent(new y["a"]({
                                zIndex: 0
                            })), a
                        }
                    }, {
                        key: "createChestShakeAnimation",
                        value: function (t, e) {
                            var a = new f["c"]("chest-shake", {
                                    position: t,
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                n = new p["a"]({
                                    resource: "chestAnimation",
                                    animationName: "animation2"
                                });
                            return n.on("complete", (function (t) {
                                "function" === typeof e && e(t)
                            })), a.addComponent(n), a
                        }
                    }, {
                        key: "createChestOpenAnimation",
                        value: function (t, e) {
                            var a = new f["c"]("chest-open", {
                                    position: t,
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                n = new p["a"]({
                                    resource: "chestAnimation",
                                    animationName: "animation"
                                });
                            return a.addComponent(n), n.on("complete", (function (t) {
                                "function" === typeof e && e(a)
                            })), a
                        }
                    }, {
                        key: "createChestBoomAnimation",
                        value: function (t, e) {
                            var a = new f["c"]("cardBoomAnimation-open-1", {
                                    position: t,
                                    origin: {
                                        x: .5,
                                        y: .5
                                    },
                                    anchor: {
                                        x: .5,
                                        y: .5
                                    }
                                }),
                                n = new p["a"]({
                                    resource: "OpenChestBoomAnimation",
                                    animationName: "play"
                                });
                            return a.addComponent(n), n.on("complete", (function (t) {
                                "function" === typeof e && e(a)
                            })), a
                        }
                    }, {
                        key: "stopStaticAnimation",
                        value: function () {
                            this.game.scene.gameObjects.forEach((function (t) {
                                "chest-static" === t.name && t.destroy()
                            }))
                        }
                    }, {
                        key: "playStaticAnimation",
                        value: function () {
                            this.stopStaticAnimation();
                            var t = {
                                    x: this.canvasWidth / 2,
                                    y: this.canvasHeight / 2
                                },
                                e = this.createChestStaticAnimation(t);
                            this.game.scene.addChild(e)
                        }
                    }, {
                        key: "playShakeAnimation",
                        value: function () {
                            this.stopStaticAnimation(), this.destroyCards();
                            var t = {
                                    x: this.canvasWidth / 2,
                                    y: this.canvasHeight / 2
                                },
                                e = this.createChestShakeAnimation(t);
                            this.game.scene.addChild(e)
                        }
                    }, {
                        key: "stopShakeAnimation",
                        value: function () {
                            this.game.scene.gameObjects.forEach((function (t) {
                                "chest-shake" === t.name && t.destroy()
                            }))
                        }
                    }, {
                        key: "playBoomAnimation",
                        value: function () {
                            var t = {
                                    x: this.canvasWidth / 2,
                                    y: this.canvasHeight / 2
                                },
                                e = this.createChestBoomAnimation(t, (function (t) {
                                    t.destroy()
                                }));
                            this.game.scene.addChild(e)
                        }
                    }, {
                        key: "playOpenAnimation",
                        value: function () {
                            var t = this;
                            this.stopStaticAnimation();
                            var e = {
                                    x: this.canvasWidth / 2,
                                    y: this.canvasHeight / 2
                                },
                                a = this.createChestOpenAnimation(e, (function (e) {
                                    e.destroy(), t.playStaticAnimation()
                                }));
                            this.game.scene.addChild(a)
                        }
                    }, {
                        key: "calcCardPosition",
                        value: function (t) {
                            var e = this,
                                a = this.canvasWidth / 5;
                            t.forEach((function (n, i, s) {
                                var r, o;
                                i < 5 ? (r = a * i + a / 2 + Math.max(5 - t.length, 0) * (a / 2), o = t.length <= 5 ? e.canvasHeight / 2 : e.canvasHeight / 4) : (r = a * (i - 5) + a / 2 + Math.max(10 - t.length, 0) * (a / 2), o = e.canvasHeight / 4 * 3), s[i].x = r, s[i].y = o
                            }))
                        }
                    }, {
                        key: "destroyCards",
                        value: function () {
                            this.cards && 0 !== this.cards.length && (this.cards.forEach((function (t) {
                                t.gameObject && t.gameObject.destroy()
                            })), this.cards = [])
                        }
                    }, {
                        key: "playOpenNftAnimation",
                        value: function (t) {
                            var e = this;
                            this.destroyCards(), this.calcCardPosition(t);
                            var a = 1 === t.length ? 1.5 : 1;
                            this.cards = t.map((function (t) {
                                var n = {
                                        x: e.canvasWidth / 2,
                                        y: e.canvasHeight / 2
                                    },
                                    i = {
                                        x: t.x,
                                        y: t.y
                                    };
                                return new x(t, i, {
                                    x: a,
                                    y: a
                                }, n)
                            })), this.cards.reverse().forEach((function (t) {
                                e.game.scene.addChild(t.gameObject)
                            }));
                            var n = this.cards.reverse().map((function (t, e) {
                                return t.showCardBack(), new Promise((function (a) {
                                    setTimeout((function () {
                                        t.fly().then((function (t) {
                                            a(t)
                                        }))
                                    }), 200 * (e + 1))
                                }))
                            }));
                            Promise.all(n).then((function (t) {
                                t.forEach((function (t, e) {
                                    setTimeout((function () {
                                        t.playReverseCardAnimation()
                                    }), 500 * (e + 1))
                                }))
                            }))
                        }
                    }]), t
                }(),
                C = a("e57c"),
                k = a("b02c"),
                O = a("0985"),
                S = a("a13e"),
                P = a("53a2"),
                j = a("d2ba"),
                I = {
                    components: {
                        NFTCard: j["a"],
                        BTable: k["a"],
                        BPagination: O["a"]
                    },
                    data: function () {
                        return {
                            showDismissibleAlert: !0,
                            allowanceAmount: 0,
                            myKeys: 0,
                            openTotal: 1,
                            loading: !1,
                            game: null,
                            contract: null,
                            fields: [{
                                key: "createdAt",
                                label: this.$t("ChestPage.Table.Time")
                            }, {
                                key: "type",
                                label: this.$t("ChestPage.Table.Type")
                            }, {
                                key: "transfers",
                                label: this.$t("ChestPage.Table.Amount")
                            }, {
                                key: "nfts",
                                label: this.$t("ChestPage.Table.NFTs")
                            }, {
                                key: "tx",
                                label: this.$t("ChestPage.Table.tx")
                            }],
                            records: [],
                            pager: {
                                currentPage: 1,
                                perPage: 10,
                                total: 0
                            },
                            TYPE: {
                                "0x40deff23": "Open",
                                "0x62a1abf1": "Buy",
                                "0x464e494c": "Upgraded",
                                "0x50ccda0c": "Evolve"
                            },
                            canvasWidth: 0,
                            canvasHeight: 0,
                            chestGame: null,
                            unlock: !0
                        }
                    },
                    computed: Object(r["a"])({}, Object(d["b"])("farm", ["defaultAccount"])),
                    watch: {
                        defaultAccount: function (t) {
                            t && t.length > 0 && this.init()
                        },
                        "pager.currentPage": {
                            handler: function (t) {
                                this.getRecords(t, this.pager.perPage)
                            }
                        }
                    },
                    destroyed: function () {
                        this.game.destroyCards()
                    },
                    mounted: function () {
                        this.canvasWidth = this.$refs["canvas"].clientWidth, this.canvasHeight = this.$refs["canvas"].clientHeight;
                        var t = 1424 / this.canvasWidth,
                            e = 712 / this.canvasHeight;
                        this.game = new A("#canvas", this.canvasWidth * t, this.canvasHeight * e), this.game.playStaticAnimation(), this.defaultAccount && this.init()
                    },
                    methods: {
                        init: function () {
                            this.allowance(), this.balanceOf(), this.getRecords(this.pager.currentPage, this.pager.perPage)
                        },
                        checkOpenTotal: function (t) {
                            parseInt(t) > parseInt(this.myKeys) && this.$NotifyError("Not enough keys"), parseInt(t) > 10 && this.$NotifyError("Max input : 10")
                        },
                        getRecords: function (t, e) {
                            var a = this,
                                n = {
                                    currentPage: t,
                                    perPage: e,
                                    from: this.defaultAccount,
                                    method: "0x40deff23"
                                };
                            S["a"].get("/api/zoo/chest", n).then((function (t) {
                                a.records = t.data.map((function (t) {
                                    return t.type = a.TYPE[t.method], t
                                })), a.pager.total = t.meta.total
                            })).catch((function (t) {
                                var e = t.data && t.data.message ? t.data.message : t.message;
                                a.$NotifyError("Error", e)
                            }))
                        },
                        approve: function () {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var a, n;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            t.loading = !0, a = Object(l["a"])(c["j"]), n = Object(l["a"])(C["a"].key.address), Object(o["e"])(n).approve(a, m["a"].constants.MaxUint256).then(function () {
                                                var e = Object(s["a"])(regeneratorRuntime.mark((function e(a) {
                                                    var n;
                                                    return regeneratorRuntime.wrap((function (e) {
                                                        while (1) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, a.wait();
                                                            case 2:
                                                                if (n = e.sent, 1 !== n.status) {
                                                                    e.next = 9;
                                                                    break
                                                                }
                                                                return t.$NotifySuccess("Success", "Approve success"), e.next = 7, t.allowance();
                                                            case 7:
                                                                e.next = 10;
                                                                break;
                                                            case 9:
                                                                t.$NotifyError("Error", "Approve failed");
                                                            case 10:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function (t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }()).catch((function (e) {
                                                var a = e.data && e.data.message ? e.data.message : e.message;
                                                t.$NotifyError("Error", a)
                                            })).finally((function () {
                                                t.loading = !1
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        balanceOf: function () {
                            var t = this;
                            this.loading = !0;
                            var e = Object(l["a"])(C["a"].key.address);
                            Object(o["e"])(e).balanceOf(this.defaultAccount).then((function (e) {
                                var a = m["a"].utils.formatUnits(e.toString());
                                t.myKeys = P["a"].toFixed(a)
                            })).catch((function (e) {
                                var a = e.data && e.data.message ? e.data.message : e.message;
                                t.$NotifyError("Error", a)
                            })).finally((function () {
                                t.loading = !1
                            }))
                        },
                        allowance: function () {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var a, n, i, s;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            return a = Object(l["a"])(C["a"].key.address), n = t.defaultAccount, i = Object(l["a"])(c["j"]), e.next = 5, Object(o["e"])(a).allowance(n, i);
                                        case 5:
                                            s = e.sent, t.allowanceAmount = m["a"].utils.formatUnits(s, 18);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        openChest: function () {
                            var t = this;
                            return Object(s["a"])(regeneratorRuntime.mark((function e() {
                                var a, n, i, s, r;
                                return regeneratorRuntime.wrap((function (e) {
                                    while (1) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t.myKeys < 1)) {
                                                e.next = 3;
                                                break
                                            }
                                            return t.$NotifyError("Error", "Not enough keys"), e.abrupt("return");
                                        case 3:
                                            return t.loading = !0, e.prev = 4, t.game.playShakeAnimation(), t.contract = Object(o["k"])(), t.openTotal = Math.max(parseInt("" === t.openTotal ? 0 : t.openTotal), 1), t.openTotal = Math.min(t.openTotal, t.myKeys, 10), e.next = 11, t.contract.estimateGas.openNFTs(t.openTotal);
                                        case 11:
                                            return a = e.sent, n = a.toNumber(), i = {
                                                gasPrice: "5000000001",
                                                gasLimit: 2 * n
                                            }, e.next = 16, t.contract.openNFTs(t.openTotal, i);
                                        case 16:
                                            return s = e.sent, e.next = 19, s.wait();
                                        case 19:
                                            setTimeout((function () {
                                                t.openFinish(s.hash)
                                            }), 2e3), e.next = 29;
                                            break;
                                        case 22:
                                            e.prev = 22, e.t0 = e["catch"](4), r = e.t0.data && e.t0.data.message ? e.t0.data.message : e.t0.message, t.$NotifyError("Error", r), t.game.stopShakeAnimation(), t.game.playStaticAnimation(), t.loading = !1;
                                        case 29:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [4, 22]
                                ])
                            })))()
                        },
                        openFinish: function (t) {
                            var e = this,
                                a = {
                                    currentPage: 1,
                                    perPage: 10,
                                    tx: t
                                };
                            S["a"].get("/api/zoo/chest", a).then((function (t) {
                                var a = t.data[0].transfers.map((function (t) {
                                    return t.nft
                                }));
                                e.game.stopShakeAnimation(), e.game.playOpenAnimation(), setTimeout((function () {
                                    e.game.playStaticAnimation(), e.game.playOpenNftAnimation(a)
                                }), 1e3)
                            })).catch((function (t) {
                                var a = t.data && t.data.message ? t.data.message : t.message;
                                e.$NotifyError("Error", a)
                            })).finally((function () {
                                e.getRecords(1, e.pager.perPage), e.balanceOf(), e.loading = !1
                            }))
                        },
                        nftDetail: function (t) {
                            this.$router.push({
                                name: "apps-e-commerce-product-details",
                                params: {
                                    slug: t.nftId
                                }
                            })
                        },
                        open: function () {
                            var t = this;
                            this.game.playShakeAnimation(), setTimeout((function () {
                                t.game.stopShakeAnimation(), t.game.playOpenAnimation(), t.game.playBoomAnimation()
                            }), 2e3), setTimeout((function () {
                                t.createCards()
                            }), 3e3)
                        },
                        createCards: function () {
                            var t = [{
                                    id: 458,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 396,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 396,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 396,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 4,
                                        level: 1,
                                        teamId: 10,
                                        basicComputingPower: 2,
                                        computingPower: 2,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 457,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 395,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 395,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 395,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 1,
                                        level: 1,
                                        teamId: 18,
                                        basicComputingPower: 1,
                                        computingPower: 1,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 456,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 394,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 394,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 394,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 3,
                                        level: 1,
                                        teamId: 18,
                                        basicComputingPower: 4,
                                        computingPower: 4,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 455,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 393,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 393,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 393,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 1,
                                        level: 1,
                                        teamId: 11,
                                        basicComputingPower: 1,
                                        computingPower: 1,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 454,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 392,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 392,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 392,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 1,
                                        level: 1,
                                        teamId: 16,
                                        basicComputingPower: 1,
                                        computingPower: 1,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 453,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 391,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 391,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 391,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 1,
                                        level: 1,
                                        teamId: 2,
                                        basicComputingPower: 1,
                                        computingPower: 1,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 452,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 390,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 390,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 390,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 5,
                                        level: 1,
                                        teamId: 1,
                                        basicComputingPower: 98,
                                        computingPower: 98,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 451,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 389,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 389,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 389,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 2,
                                        level: 1,
                                        teamId: 5,
                                        basicComputingPower: 2,
                                        computingPower: 2,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 450,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 388,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 388,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 388,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 1,
                                        level: 1,
                                        teamId: 19,
                                        basicComputingPower: 1,
                                        computingPower: 1,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }, {
                                    id: 449,
                                    tx: "0x27fb22b4c02a86bace2b75d817b60e98cc8df029ee8f3e02631bc55fa0146b52",
                                    from: "0x0000000000000000000000000000000000000000",
                                    owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                    nftId: 387,
                                    createdAt: "2021-07-07 02:03:46",
                                    updatedAt: "2021-07-07 02:04:01",
                                    nft: {
                                        id: 387,
                                        owner: "0x59c7e7341504e1be396f698b79c513cebb3378ac",
                                        nftId: 387,
                                        name: null,
                                        isMinting: 1,
                                        isSelling: 0,
                                        isGrouping: 0,
                                        rarity: 2,
                                        level: 1,
                                        teamId: 5,
                                        basicComputingPower: 2,
                                        computingPower: 2,
                                        createdAt: "2021-07-07 02:03:46",
                                        updatedAt: "2021-07-07 02:04:03"
                                    }
                                }],
                                e = t.map((function (t) {
                                    return t.nft
                                }));
                            this.game.playOpenNftAnimation(e)
                        }
                    }
                },
                _ = I,
                N = (a("93f4"), a("4ac2")),
                T = Object(N["a"])(_, n, i, !1, null, "5617bd9e", null);
            e["default"] = T.exports
        },
        "366e": function (t, e, a) {},
        7803: function (t, e, a) {},
        "93f4": function (t, e, a) {
            "use strict";
            a("366e")
        },
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
                s = a("99a5"),
                r = (a("1d7a"), a("6a61"), {
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
                        return Object(s["a"])(regeneratorRuntime.mark((function e() {
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
                                this.item.src = "/nfts/purple/".concat(t, ".png"), this.item.name = r.purple[t]
                            } else if (5 === this.item.rarity) {
                                var e = (this.item.teamId - 1) / 4;
                                this.item.src = "/nfts/orange/".concat(e, ".png"), this.item.name = r.orange[e]
                            } else this.item.src = "/nfts/normal/".concat(this.item.teamId, ".png"), this.item.name = r.normal[this.item.teamId];
                            this.item.showLevel = this.nft.showLevel || !1, this.item.showPower = this.nft.showPower || !1, this.item.showStar = !1, this.item.canClick = this.nft.canClick || !1, this.item.showMinting = this.nft.showMinting || !1, this.item.star = Math.floor(this.nft.level / 10), this.item.name = this.item.name || "No Name"
                        }
                    }
                },
                c = o,
                l = (a("a145"), a("4ac2")),
                d = Object(l["a"])(c, n, i, !1, null, "01a91ad2", null);
            e["a"] = d.exports
        }
    }
]);