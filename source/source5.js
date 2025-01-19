(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4869bc43"], {
    "4c13": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r("div", [r("b-row", [r("b-col", [r("b-card", [r("b-card-title", [e._v(" Referral program ")]), r("b-card-body", [r("h3", [e._v(" Invite Your Friends. Earn ZOO. ")]), r("h6", {
            staticClass: "mt-2"
          }, [e._v(" You will get 50%, Will be Burnt 50% ")]), r("div", [r("h6", {
            staticClass: "mt-2"
          }, [e._v("Invitation Incentive"), r("br")]), r("b-list-group", {
            staticClass: "mt-2"
          }, [r("b-list-group-item", {
            staticClass: "d-flex justify-content-between"
          }, [r("span", [e._v("10 invitations")]), r("span", [e._v("1 KEY")])]), r("b-list-group-item", {
            staticClass: "d-flex justify-content-between"
          }, [r("span", [e._v("25 invitations")]), r("span", [e._v("1 KEY")])]), r("b-list-group-item", {
            staticClass: "d-flex justify-content-between"
          }, [r("span", [e._v("45 invitations")]), r("span", [e._v("1 KEY")])]), r("b-list-group-item", {
            staticClass: "d-flex justify-content-between"
          }, [r("span", [e._v("70 invitations")]), r("span", [e._v("1 Mystery Box")])])], 1)], 1)])], 1)], 1), r("b-col", [e.myInviter && "0x0000000000000000000000000000000000000000" !== e.myInviter ? r("b-card", [r("b-card-title", [e._v(" My Inviter ")]), r("b-card-body", [e.myInviter ? e._e() : r("b-spinner", {
            attrs: {
              small: ""
            }
          }), e._v(" " + e._s(e.myInviter) + " ")], 1)], 1) : e._e(), r("b-card", [r("b-card-title", [e._v(" My Referral Link ")]), r("b-card-body", [e.isRegistered ? r("div", [e.userinfo.id ? r("b-input-group", [r("b-form-input", {
            model: {
              value: e.inviterLink,
              callback: function (t) {
                e.inviterLink = t
              },
              expression: "inviterLink"
            }
          }), r("b-input-group-append", [r("b-button", {
            attrs: {
              variant: "primary"
            },
            on: {
              click: e.doCopy
            }
          }, [e._v(" Copy ")])], 1)], 1) : r("b-spinner", {
            attrs: {
              small: ""
            }
          })], 1) : r("div", {
            staticClass: "d-flex mt-3"
          }, [r("b-button", {
            staticClass: "mr-1",
            attrs: {
              disabled: e.allowance > 0,
              variant: "warning"
            },
            on: {
              click: e.approve
            }
          }, [e.allowance <= 0 && e.loading ? r("b-spinner", {
            attrs: {
              small: ""
            }
          }) : e._e(), e._v(" Approve ")], 1), r("b-button", {
            attrs: {
              disabled: e.allowance <= 0,
              variant: "primary"
            },
            on: {
              click: e.register
            }
          }, [e.allowance > 0 && e.loading ? r("b-spinner", {
            attrs: {
              small: ""
            }
          }) : e._e(), e._v(" Pay " + e._s(e.price) + " ZOO & Register as a inviter ")], 1)], 1), 0 !== e.myKeyReward ? r("div", {
            staticClass: "mt-2 text-center"
          }, [r("b-button", {
            attrs: {
              variant: "success",
              disabled: 0 === e.myKeyReward
            },
            on: {
              click: e.getReward
            }
          }, [e.loading ? r("b-spinner", {
            attrs: {
              small: ""
            }
          }) : e._e(), e._v(" Get Key Reward ( " + e._s(e.myKeyReward) + " KEY ) ")], 1)], 1) : e._e()])], 1)], 1)], 1), r("b-card", [r("b-card-title", [e._v(" My invitations (" + e._s(e.rows.length) + ") ")]), r("b-card-body", [r("b-table", {
            staticClass: "mb-0",
            attrs: {
              responsive: "xl",
              items: e.rows,
              fields: e.fields
            }
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
          })], 1)], 1)], 1)
        },
        a = [],
        i = r("99a5"),
        s = r("1c03"),
        c = (r("6a61"), r("402f"), r("836b"), r("d545"), r("d0bf"), r("6540"), r("cf6b")),
        o = r("bf32"),
        u = r("238c"),
        l = r("a13e"),
        d = r("53a2"),
        p = r("7032"),
        b = r("e57c"),
        v = {
          name: "Referral",
          data: function () {
            return {
              loading: !1,
              isRegistered: !1,
              price: 0,
              allowance: 0,
              inviterLink: "https://zoogame.app?inviter=",
              rows: [],
              fields: [{
                key: "user",
                label: "user"
              }, {
                key: "reward",
                label: "Referral Reward (ZOO)"
              }, {
                key: "mintReward",
                label: "Mint Reward (ZOO)"
              }, {
                key: "cardReward",
                label: "Market Reward (USDT)"
              }],
              myKeyReward: 0,
              pager: {
                currentPage: 1,
                perPage: 10,
                total: 0
              },
              defaultInviter: "0xAAF114F18aCC2af6E24267Ad9C53Ca2Afa94Ec48",
              myInviter: ""
            }
          },
          computed: Object(s["a"])({}, Object(c["b"])("farm", ["defaultAccount", "keyPrice", "zooPrice", "userinfo"])),
          watch: {
            defaultAccount: function (e) {
              e && e.length > 0 && this.init()
            },
            userinfo: function (e) {
              this.init()
            }
          },
          mounted: function () {
            this.defaultAccount && this.init()
          },
          methods: {
            init: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return e.inviterLink = "https://zoogame.app?inviter=" + e.userinfo.id, r = Object(o["p"])(), t.next = 4, r.isRegistered(e.defaultAccount);
                    case 4:
                      return e.isRegistered = t.sent, t.next = 7, r.price();
                    case 7:
                      return e.price = t.sent, e.price = d["a"].toReadable(e.price), n = "0x1D229B958D5DDFca92146585a8711aECbE56F095", t.next = 12, Object(o["e"])(n).allowance(e.defaultAccount, r.address);
                    case 12:
                      return e.allowance = t.sent, console.log({
                        isRegistered: e.isRegistered,
                        allowance: e.allowance.toString()
                      }), t.next = 16, e.invitees();
                    case 16:
                      return t.next = 18, r.keyRewards(e.defaultAccount);
                    case 18:
                      return e.myKeyReward = t.sent, e.myKeyReward = d["a"].toReadable(e.myKeyReward), e.myKeyReward = parseInt(e.myKeyReward), t.next = 23, r.getInviter(e.defaultAccount);
                    case 23:
                      e.myInviter = t.sent, console.log({
                        myInviter: e.myInviter
                      });
                    case 25:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            approve: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n, a, i;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.prev = 0, e.loading = !0, r = Object(o["p"])(), n = "0x1D229B958D5DDFca92146585a8711aECbE56F095", t.next = 6, Object(o["e"])(n).approve(r.address, u["a"].constants.MaxUint256);
                    case 6:
                      return a = t.sent, t.next = 9, a.wait();
                    case 9:
                      e.$NotifySuccess("Approve", "Success"), e.allowance = Number.MAX_SAFE_INTEGER, t.next = 17;
                      break;
                    case 13:
                      t.prev = 13, t.t0 = t["catch"](0), i = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", i);
                    case 17:
                      e.loading = !1;
                    case 18:
                    case "end":
                      return t.stop()
                  }
                }), t, null, [
                  [0, 13]
                ])
              })))()
            },
            getBalance: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return r = Object(p["a"])(b["a"].zoo.address), t.next = 3, Object(o["e"])(r).balanceOf(e.defaultAccount);
                    case 3:
                      return n = t.sent, t.abrupt("return", parseInt(u["a"].utils.formatUnits(n, b["a"].zoo.decimals), 10));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            register: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n, a, i, s, c;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return t.next = 2, e.getBalance();
                    case 2:
                      if (r = t.sent, !(r < 10)) {
                        t.next = 6;
                        break
                      }
                      return e.$NotifyError("Error", "zoo not enough"), t.abrupt("return");
                    case 6:
                      if (e.loading = !0, n = e.defaultInviter, !e.userinfo.inviter) {
                        t.next = 13;
                        break
                      }
                      return a = 0 === e.userinfo.inviter ? 100 : e.userinfo.inviter, t.next = 12, l["a"].get("/api/zoo/getUserAddress", {
                        id: a
                      });
                    case 12:
                      n = t.sent;
                    case 13:
                      return t.prev = 13, i = Object(o["p"])(), t.next = 17, i.register(n);
                    case 17:
                      return s = t.sent, t.next = 20, s.wait();
                    case 20:
                      return e.$NotifySuccess("Register", "Success"), t.next = 23, e.init();
                    case 23:
                      t.next = 29;
                      break;
                    case 25:
                      t.prev = 25, t.t0 = t["catch"](13), c = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", c);
                    case 29:
                      e.loading = !1;
                    case 30:
                    case "end":
                      return t.stop()
                  }
                }), t, null, [
                  [13, 25]
                ])
              })))()
            },
            invitees: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return r = Object(o["p"])(), t.next = 3, r.invitees(e.defaultAccount);
                    case 3:
                      n = t.sent, e.rows = n.map((function (e) {
                        return {
                          user: e,
                          reward: "5",
                          mintReward: 0,
                          cardReward: 0
                        }
                      }));
                    case 5:
                    case "end":
                      return t.stop()
                  }
                }), t)
              })))()
            },
            setPrice: function () {
              return Object(i["a"])(regeneratorRuntime.mark((function e() {
                var t, r;
                return regeneratorRuntime.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return t = Object(o["p"])(), e.next = 3, t.setPrice(10);
                    case 3:
                      return r = e.sent, e.next = 6, r.wait();
                    case 6:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            },
            doCopy: function () {
              var e = this;
              this.$copyText(this.inviterLink).then((function () {
                e.$NotifySuccess("Text copied", "success")
              }), (function (t) {
                e.$NotifySuccess("Can not copy!", "fail")
              }))
            },
            getReward: function () {
              var e = this;
              return Object(i["a"])(regeneratorRuntime.mark((function t() {
                var r, n, a;
                return regeneratorRuntime.wrap((function (t) {
                  while (1) switch (t.prev = t.next) {
                    case 0:
                      return e.loading = !0, t.prev = 1, r = Object(o["p"])(), t.next = 5, r.getReward();
                    case 5:
                      return n = t.sent, t.next = 8, n.wait();
                    case 8:
                      return e.$NotifySuccess("Get Reward", "Success"), t.next = 11, e.init();
                    case 11:
                      t.next = 17;
                      break;
                    case 13:
                      t.prev = 13, t.t0 = t["catch"](1), a = t.t0.data && t.t0.data.message ? t.t0.data.message : t.t0.message, e.$NotifyError("Error", a);
                    case 17:
                      e.loading = !1;
                    case 18:
                    case "end":
                      return t.stop()
                  }
                }), t, null, [
                  [1, 13]
                ])
              })))()
            },
            currentPageChange: function (e) {
              this.getRecords(e, this.pager.perPage)
            },
            getRecords: function () {
              return Object(i["a"])(regeneratorRuntime.mark((function e() {
                return regeneratorRuntime.wrap((function (e) {
                  while (1) switch (e.prev = e.next) {
                    case 0:
                      return e.abrupt("return", []);
                    case 1:
                    case "end":
                      return e.stop()
                  }
                }), e)
              })))()
            }
          }
        },
        f = v,
        g = (r("7b48"), r("4ac2")),
        m = Object(g["a"])(f, n, a, !1, null, "342cbfb8", null);
      t["default"] = m.exports
    },
    "7b48": function (e, t, r) {
      "use strict";
      r("fcdd")
    },
    d545: function (e, t, r) {
      var n = r("a09b");
      n({
        target: "Number",
        stat: !0
      }, {
        MAX_SAFE_INTEGER: 9007199254740991
      })
    },
    fcdd: function (e, t, r) {}
  }
]);