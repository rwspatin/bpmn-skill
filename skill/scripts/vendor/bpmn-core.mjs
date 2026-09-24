var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/.pnpm/dayjs@1.11.21/node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports2, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), Y = _.prototype;
      return O.prototype = Y, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        Y[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// packages/mermaid/src/diagrams/common/parser/runChevrotainParse.ts
function runChevrotainParse(config2, input) {
  const lexResult = config2.lexer.tokenize(input);
  if (lexResult.errors.length > 0) {
    const lexError = lexResult.errors[0];
    const start = Number.isFinite(lexError.offset) ? lexError.offset : input.length;
    const end = start + (Number.isFinite(lexError.length) ? lexError.length : 0);
    throw new Error(
      `Error lexing ${config2.diagramType} diagram: ${lexError.message} at line ${lexError.line ?? 1}, column ${lexError.column ?? 1} [${start},${end})`
    );
  }
  config2.parser.input = lexResult.tokens;
  const cst = config2.entry();
  if (config2.parser.errors.length > 0) {
    throw new Error(
      `Error parsing ${config2.diagramType} diagram: ${config2.parser.errors[0].message}`
    );
  }
  config2.visit(cst);
}

// node_modules/.pnpm/dompurify@3.4.12/node_modules/dompurify/dist/purify.es.mjs
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) {
  freeze = function freeze2(x) {
    return x;
  };
}
if (!seal) {
  seal = function seal2(x) {
    return x;
  };
}
if (!apply) {
  apply = function apply3(func, thisArg) {
    for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }
    return func.apply(thisArg, args);
  };
}
if (!construct) {
  construct = function construct2(Func) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    return new Func(...args);
  };
}
var arrayForEach = unapply(Array.prototype.forEach);
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  if (!arrayIsArray(array)) {
    return set;
  }
  let l = array.length;
  while (l--) {
    let element = array[l];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) {
          array[l] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array, index);
    if (!isPropertyExist) {
      array[index] = null;
    }
  }
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property2 = _ref3[0];
    const value = _ref3[1];
    const isPropertyExist = objectHasOwnProperty(object, property2);
    if (isPropertyExist) {
      if (arrayIsArray(value)) {
        newObject[property2] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property2] = clone(value);
      } else {
        newObject[property2] = value;
      }
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string": {
      return value;
    }
    case "number": {
      return numberToString(value);
    }
    case "boolean": {
      return booleanToString(value);
    }
    case "bigint": {
      return bigintToString ? bigintToString(value) : "0";
    }
    case "symbol": {
      return symbolToString ? symbolToString(value) : "Symbol()";
    }
    case "undefined": {
      return objectToString(value);
    }
    case "function":
    case "object": {
      if (value === null) {
        return objectToString(value);
      }
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default: {
      return objectToString(value);
    }
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var text = freeze(["#text"]);
var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]);
var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
};
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root2) => createDOMPurify(root2);
  DOMPurify.version = "3.4.12";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap;
  _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap;
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
  const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) {
      throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
    }
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze(["mi", "mo", "mn", "ms", "mtext"]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
    SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, {
      transform: transformCaseFunc
    });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, {
      transform: transformCaseFunc
    });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, {
      transform: stringToString
    });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, {
      transform: transformCaseFunc
    });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), {
      transform: transformCaseFunc
    });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), {
      transform: transformCaseFunc
    });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "MATHML_TEXT_INTEGRATION_POINTS") && cfg.MATHML_TEXT_INTEGRATION_POINTS && typeof cfg.MATHML_TEXT_INTEGRATION_POINTS === "object" ? clone(cfg.MATHML_TEXT_INTEGRATION_POINTS) : addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
    HTML_INTEGRATION_POINTS = objectHasOwnProperty(cfg, "HTML_INTEGRATION_POINTS") && cfg.HTML_INTEGRATION_POINTS && typeof cfg.HTML_INTEGRATION_POINTS === "object" ? clone(cfg.HTML_INTEGRATION_POINTS) : addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
    const customElementHandling = objectHasOwnProperty(cfg, "CUSTOM_ELEMENT_HANDLING") && cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING === "object" ? clone(cfg.CUSTOM_ELEMENT_HANDLING) : create(null);
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    }
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    }
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") {
        EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      } else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
          ALLOWED_TAGS = clone(ALLOWED_TAGS);
        }
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") {
        EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      } else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
          ALLOWED_ATTR = clone(ALLOWED_ATTR);
        }
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") && arrayIsArray(cfg.ADD_URI_SAFE_ATTR)) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "FORBID_CONTENTS") && arrayIsArray(cfg.FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      }
      if (trustedTypesPolicy && typeof emptyHTML === "string") {
        emptyHTML = _createTrustedHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) {
      return tagName === "svg";
    }
    if (parent.namespaceURI === MATHML_NAMESPACE) {
      return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    }
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) {
      return tagName === "math";
    }
    if (parent.namespaceURI === SVG_NAMESPACE) {
      return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    }
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
      return false;
    }
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
      return false;
    }
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      return _checkSvgNamespace(tagName, parent, parentTagName);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      return _checkMathMlNamespace(tagName, parent, parentTagName);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      return _checkHtmlNamespace(tagName, parent, parentTagName);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_) {
      remove(node);
      if (!getParentNode(node)) {
        throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root2) {
    _neutralizeSubtree(root2);
    const childNodes = getChildNodes(root2);
    if (childNodes) {
      const snapshot = [];
      arrayForEach(childNodes, (child) => {
        arrayPush(snapshot, child);
      });
      arrayForEach(snapshot, (child) => {
        try {
          remove(child);
        } catch (_) {
        }
      });
    }
    const attributes = getAttributes(root2);
    if (attributes) {
      for (let i = attributes.length - 1; i >= 0; --i) {
        const attribute = attributes[i];
        const name = attribute && attribute.name;
        if (typeof name === "string") {
          try {
            root2.removeAttribute(name);
          } catch (_) {
          }
        }
      }
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_) {
        }
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) {
      return;
    }
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) {
        continue;
      }
      try {
        element.removeAttribute(name);
      } catch (_) {
      }
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root2) {
    const stack = [root2];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      if (nodeType === NODE_TYPE.element) {
        _stripDisallowedAttributes(node);
      }
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push(childNodes[i]);
        }
      }
    }
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root2) {
    if (!SAFE_FOR_XML) {
      return;
    }
    const stack = [root2];
    while (stack.length > 0) {
      const node = stack.pop();
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove(node);
        } catch (_) {
        }
        continue;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(getNodeName ? getNodeName(node) : node.nodeName);
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) {
            element.removeAttribute("patchsrc");
          }
          if (element.hasAttribute && element.hasAttribute("for") && lcTag !== "label" && lcTag !== "output") {
            element.removeAttribute("for");
          }
        } catch (_) {
        }
      }
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push(childNodes[i]);
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root2) {
    return createNodeIterator.call(
      root2.ownerDocument || root2,
      root2,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    node.normalize();
    const walker = createNodeIterator.call(
      node.ownerDocument || node,
      node,
      // eslint-disable-next-line no-bitwise
      NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) {
      arrayForEach(templates, (tmpl) => {
        if (_isDocumentFragment(tmpl.content)) {
          _scrubTemplateExpressions2(tmpl.content);
        }
      });
    }
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") {
      return false;
    }
    if (transformCaseFunc(realTagName) !== "form") {
      return false;
    }
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    element.nodeType !== getNodeType(element) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) {
      return false;
    }
    try {
      return typeof getNodeType(value) === "number";
    } catch (_) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) {
      return;
    }
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) {
      return true;
    }
    if (SAFE_FOR_XML && currentNode.namespaceURI === HTML_NAMESPACE && tagName === "style" && _isNode(currentNode.firstElementChild)) {
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) {
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) {
      return true;
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
      if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
        return false;
      }
      if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
        return false;
      }
    }
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = IN_PLACE ? childNodes[i] : cloneNode(childNodes[i], true);
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root2) {
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (currentNode !== root2 && getParentNode(currentNode) === null) {
      return true;
    }
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(getNodeName ? getNodeName(currentNode) : currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode !== root2 && getParentNode(currentNode) === null) {
      return true;
    }
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
      }
      return removed;
    }
    const nt = getNodeType ? getNodeType(currentNode) : currentNode.nodeType;
    if (nt === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) {
      return false;
    }
    if (SAFE_FOR_XML && lcName === "patchsrc") {
      return false;
    }
    if (SAFE_FOR_XML && lcName === "for" && lcTag !== "label" && lcTag !== "output") {
      return false;
    }
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) ;
    else if (!nameIsPermitted) {
      if (
        // First condition does a very basic check if a) it's basically a valid custom element tagname AND
        // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
        _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
        // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
        lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))
      ) ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) ;
    else if (value) {
      return false;
    } else ;
    return true;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) {
      switch (trustedTypes.getAttributeType(lcTag, lcName)) {
        case "TrustedHTML": {
          return _createTrustedHTML(value);
        }
        case "TrustedScriptURL": {
          return _createTrustedScriptURL(value);
        }
      }
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) {
        currentNode.setAttributeNS(namespaceURI, name, value);
      } else {
        currentNode.setAttribute(name, value);
      }
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
      } else {
        arrayPop(DOMPurify.removed);
      }
    } catch (_) {
      _removeAttribute(name, currentNode);
    }
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l--) {
      const attr = attributes[l];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (lcName === "attributename" && stringMatch(value, "href")) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        value = _stripTemplateExpressions(value);
      }
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        _setAttributeValue(currentNode, name, namespaceURI, value);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode);
      if (_isDocumentFragment(shadowNode.content)) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
      const shadowNodeType = getNodeType ? getNodeType(shadowNode) : shadowNode.nodeType;
      if (shadowNodeType === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root2) {
    const stack = [{
      node: root2,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const nodeType = getNodeType ? getNodeType(node) : node.nodeType;
      const isElement = nodeType === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) {
        for (let i = childNodes.length - 1; i >= 0; --i) {
          stack.push({
            node: childNodes[i],
            shadow: null
          });
        }
      }
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) {
            stack.push({
              node: content,
              shadow: null
            });
          }
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) {
          stack.push({
            node: null,
            shadow: sr
          }, {
            node: sr,
            shadow: null
          });
        }
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") {
        throw typeErrorCreate("dirty is not a string, aborting");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else {
      _parseConfig(cfg);
    }
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) {
      ALLOWED_TAGS = clone(ALLOWED_TAGS);
    }
    if (hooks.uponSanitizeAttribute.length > 0) {
      ALLOWED_ATTR = clone(ALLOWED_ATTR);
    }
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn = getNodeName ? getNodeName(dirty) : dirty.nodeName;
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      try {
        _sanitizeAttachedShadowRoots(dirty);
      } catch (error) {
        _neutralizeRoot(dirty);
        throw error;
      }
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
      _sanitizeAttachedShadowRoots(importedNode);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
      dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const walkRoot = inPlace ? dirty : body;
    const nodeIterator = _createNodeIterator(walkRoot);
    try {
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode);
        if (_isDocumentFragment(currentNode.content)) {
          _sanitizeShadowDOM2(currentNode.content);
        }
      }
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        arrayForEach(DOMPurify.removed, (entry) => {
          if (entry.element) {
            _neutralizeSubtree(entry.element);
          }
        });
      }
      throw error;
    }
    if (inPlace) {
      arrayForEach(DOMPurify.removed, (entry) => {
        if (entry.element) {
          _neutralizeSubtree(entry.element);
        }
      });
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(dirty);
      }
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) {
        _scrubTemplateExpressions2(body);
      }
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      serializedHTML = _stripTemplateExpressions(serializedHTML);
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return void 0;
    }
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) {
      return;
    }
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();

// packages/mermaid/src/assignWithDepth.ts
var assignWithDepth = (dst, src, { depth = 2 } = {}) => {
  const config2 = { depth };
  if (Array.isArray(src) && !Array.isArray(dst)) {
    src.forEach((s) => assignWithDepth(dst, s, config2));
    return dst;
  } else if (Array.isArray(src) && Array.isArray(dst)) {
    src.forEach((s) => {
      if (!dst.includes(s)) {
        dst.push(s);
      }
    });
    return dst;
  }
  if (dst === void 0 || dst === null || depth <= 0) {
    if (dst !== void 0 && dst !== null && typeof dst === "object" && typeof src === "object") {
      return Object.assign(dst, src);
    } else {
      return src;
    }
  }
  if (src !== void 0 && src !== null && typeof dst === "object" && typeof src === "object") {
    const dstWithKeys = dst;
    Object.entries(src).forEach(([key, srcValue]) => {
      if (typeof srcValue === "object") {
        if (srcValue === null) {
          return;
        }
        if (!Object.hasOwn(dst, key)) {
          Object.defineProperty(dst, key, {
            value: void 0,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
        if (dstWithKeys[key] === void 0) {
          dstWithKeys[key] = Array.isArray(srcValue) ? [] : {};
        }
        if (typeof dstWithKeys[key] === "object") {
          dstWithKeys[key] = assignWithDepth(dstWithKeys[key], srcValue, { depth: depth - 1 });
        }
      } else if (typeof dstWithKeys[key] !== "object") {
        if (Object.hasOwn(dst, key)) {
          dstWithKeys[key] = srcValue;
        } else {
          Object.defineProperty(dst, key, {
            value: srcValue,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    });
  }
  return dst;
};
var assignWithDepth_default = assignWithDepth;

// packages/mermaid/src/logger.ts
var import_dayjs = __toESM(require_dayjs_min(), 1);
var log = {
  trace: (..._args) => {
  },
  debug: (..._args) => {
  },
  info: (..._args) => {
  },
  warn: (..._args) => {
  },
  error: (..._args) => {
  },
  fatal: (..._args) => {
  }
};

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/utils/channel.js
var Channel = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (r) => r >= 255 ? 255 : r < 0 ? 0 : r,
    g: (g) => g >= 255 ? 255 : g < 0 ? 0 : g,
    b: (b) => b >= 255 ? 255 : b < 0 ? 0 : b,
    h: (h) => h % 360,
    s: (s) => s >= 100 ? 100 : s < 0 ? 0 : s,
    l: (l) => l >= 100 ? 100 : l < 0 ? 0 : l,
    a: (a) => a >= 1 ? 1 : a < 0 ? 0 : a
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (c) => {
    const n = c / 255;
    return c > 0.03928 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (p, q, t) => {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  },
  hsl2rgb: ({ h, s, l }, channel) => {
    if (!s)
      return l * 2.55;
    h /= 360;
    s /= 100;
    l /= 100;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    switch (channel) {
      case "r":
        return Channel.hue2rgb(p, q, h + 1 / 3) * 255;
      case "g":
        return Channel.hue2rgb(p, q, h) * 255;
      case "b":
        return Channel.hue2rgb(p, q, h - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r, g, b }, channel) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (channel === "l")
      return l * 100;
    if (max === min)
      return 0;
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (channel === "s")
      return s * 100;
    switch (max) {
      case r:
        return ((g - b) / d + (g < b ? 6 : 0)) * 60;
      case g:
        return ((b - r) / d + 2) * 60;
      case b:
        return ((r - g) / d + 4) * 60;
      default:
        return -1;
    }
  }
};
var channel_default = Channel;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/utils/lang.js
var Lang = {
  /* API */
  clamp: (number, lower, upper) => {
    if (lower > upper)
      return Math.min(lower, Math.max(upper, number));
    return Math.min(upper, Math.max(lower, number));
  },
  round: (number) => {
    return Math.round(number * 1e10) / 1e10;
  }
};
var lang_default = Lang;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/utils/unit.js
var Unit = {
  /* API */
  dec2hex: (dec) => {
    const hex = Math.round(dec).toString(16);
    return hex.length > 1 ? hex : `0${hex}`;
  }
};
var unit_default = Unit;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/utils/index.js
var Utils = {
  channel: channel_default,
  lang: lang_default,
  unit: unit_default
};
var utils_default = Utils;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/constants.js
var DEC2HEX = {};
for (let i = 0; i <= 255; i++)
  DEC2HEX[i] = utils_default.unit.dec2hex(i);
var TYPE = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/channels/type.js
var Type = class {
  constructor() {
    this.type = TYPE.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(type) {
    if (this.type && this.type !== type)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = type;
  }
  reset() {
    this.type = TYPE.ALL;
  }
  is(type) {
    return this.type === type;
  }
};
var type_default = Type;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/channels/index.js
var Channels = class {
  /* CONSTRUCTOR */
  constructor(data, color) {
    this.color = color;
    this.changed = false;
    this.data = data;
    this.type = new type_default();
  }
  /* API */
  set(data, color) {
    this.color = color;
    this.changed = false;
    this.data = data;
    this.type.type = TYPE.ALL;
    return this;
  }
  /* HELPERS */
  _ensureHSL() {
    const data = this.data;
    const { h, s, l } = data;
    if (h === void 0)
      data.h = utils_default.channel.rgb2hsl(data, "h");
    if (s === void 0)
      data.s = utils_default.channel.rgb2hsl(data, "s");
    if (l === void 0)
      data.l = utils_default.channel.rgb2hsl(data, "l");
  }
  _ensureRGB() {
    const data = this.data;
    const { r, g, b } = data;
    if (r === void 0)
      data.r = utils_default.channel.hsl2rgb(data, "r");
    if (g === void 0)
      data.g = utils_default.channel.hsl2rgb(data, "g");
    if (b === void 0)
      data.b = utils_default.channel.hsl2rgb(data, "b");
  }
  /* GETTERS */
  get r() {
    const data = this.data;
    const r = data.r;
    if (!this.type.is(TYPE.HSL) && r !== void 0)
      return r;
    this._ensureHSL();
    return utils_default.channel.hsl2rgb(data, "r");
  }
  get g() {
    const data = this.data;
    const g = data.g;
    if (!this.type.is(TYPE.HSL) && g !== void 0)
      return g;
    this._ensureHSL();
    return utils_default.channel.hsl2rgb(data, "g");
  }
  get b() {
    const data = this.data;
    const b = data.b;
    if (!this.type.is(TYPE.HSL) && b !== void 0)
      return b;
    this._ensureHSL();
    return utils_default.channel.hsl2rgb(data, "b");
  }
  get h() {
    const data = this.data;
    const h = data.h;
    if (!this.type.is(TYPE.RGB) && h !== void 0)
      return h;
    this._ensureRGB();
    return utils_default.channel.rgb2hsl(data, "h");
  }
  get s() {
    const data = this.data;
    const s = data.s;
    if (!this.type.is(TYPE.RGB) && s !== void 0)
      return s;
    this._ensureRGB();
    return utils_default.channel.rgb2hsl(data, "s");
  }
  get l() {
    const data = this.data;
    const l = data.l;
    if (!this.type.is(TYPE.RGB) && l !== void 0)
      return l;
    this._ensureRGB();
    return utils_default.channel.rgb2hsl(data, "l");
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(r) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.r = r;
  }
  set g(g) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.g = g;
  }
  set b(b) {
    this.type.set(TYPE.RGB);
    this.changed = true;
    this.data.b = b;
  }
  set h(h) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.h = h;
  }
  set s(s) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.s = s;
  }
  set l(l) {
    this.type.set(TYPE.HSL);
    this.changed = true;
    this.data.l = l;
  }
  set a(a) {
    this.changed = true;
    this.data.a = a;
  }
};
var channels_default = Channels;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/channels/reusable.js
var channels = new channels_default({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var reusable_default = channels;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/color/hex.js
var Hex = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (color) => {
    if (color.charCodeAt(0) !== 35)
      return;
    const match = color.match(Hex.re);
    if (!match)
      return;
    const hex = match[1];
    const dec = parseInt(hex, 16);
    const length = hex.length;
    const hasAlpha = length % 4 === 0;
    const isFullLength = length > 4;
    const multiplier = isFullLength ? 1 : 17;
    const bits = isFullLength ? 8 : 4;
    const bitsOffset = hasAlpha ? 0 : -1;
    const mask = isFullLength ? 255 : 15;
    return reusable_default.set({
      r: (dec >> bits * (bitsOffset + 3) & mask) * multiplier,
      g: (dec >> bits * (bitsOffset + 2) & mask) * multiplier,
      b: (dec >> bits * (bitsOffset + 1) & mask) * multiplier,
      a: hasAlpha ? (dec & mask) * multiplier / 255 : 1
    }, color);
  },
  stringify: (channels2) => {
    const { r, g, b, a } = channels2;
    if (a < 1) {
      return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}${DEC2HEX[Math.round(a * 255)]}`;
    } else {
      return `#${DEC2HEX[Math.round(r)]}${DEC2HEX[Math.round(g)]}${DEC2HEX[Math.round(b)]}`;
    }
  }
};
var hex_default = Hex;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/color/hsl.js
var HSL = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (hue) => {
    const match = hue.match(HSL.hueRe);
    if (match) {
      const [, number, unit] = match;
      switch (unit) {
        case "grad":
          return utils_default.channel.clamp.h(parseFloat(number) * 0.9);
        case "rad":
          return utils_default.channel.clamp.h(parseFloat(number) * 180 / Math.PI);
        case "turn":
          return utils_default.channel.clamp.h(parseFloat(number) * 360);
      }
    }
    return utils_default.channel.clamp.h(parseFloat(hue));
  },
  /* API */
  parse: (color) => {
    const charCode = color.charCodeAt(0);
    if (charCode !== 104 && charCode !== 72)
      return;
    const match = color.match(HSL.re);
    if (!match)
      return;
    const [, h, s, l, a, isAlphaPercentage] = match;
    return reusable_default.set({
      h: HSL._hue2deg(h),
      s: utils_default.channel.clamp.s(parseFloat(s)),
      l: utils_default.channel.clamp.l(parseFloat(l)),
      a: a ? utils_default.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, color);
  },
  stringify: (channels2) => {
    const { h, s, l, a } = channels2;
    if (a < 1) {
      return `hsla(${utils_default.lang.round(h)}, ${utils_default.lang.round(s)}%, ${utils_default.lang.round(l)}%, ${a})`;
    } else {
      return `hsl(${utils_default.lang.round(h)}, ${utils_default.lang.round(s)}%, ${utils_default.lang.round(l)}%)`;
    }
  }
};
var hsl_default = HSL;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/color/keyword.js
var Keyword = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (color) => {
    color = color.toLowerCase();
    const hex = Keyword.colors[color];
    if (!hex)
      return;
    return hex_default.parse(hex);
  },
  stringify: (channels2) => {
    const hex = hex_default.stringify(channels2);
    for (const name in Keyword.colors) {
      if (Keyword.colors[name] === hex)
        return name;
    }
    return;
  }
};
var keyword_default = Keyword;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/color/rgb.js
var RGB = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (color) => {
    const charCode = color.charCodeAt(0);
    if (charCode !== 114 && charCode !== 82)
      return;
    const match = color.match(RGB.re);
    if (!match)
      return;
    const [, r, isRedPercentage, g, isGreenPercentage, b, isBluePercentage, a, isAlphaPercentage] = match;
    return reusable_default.set({
      r: utils_default.channel.clamp.r(isRedPercentage ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: utils_default.channel.clamp.g(isGreenPercentage ? parseFloat(g) * 2.55 : parseFloat(g)),
      b: utils_default.channel.clamp.b(isBluePercentage ? parseFloat(b) * 2.55 : parseFloat(b)),
      a: a ? utils_default.channel.clamp.a(isAlphaPercentage ? parseFloat(a) / 100 : parseFloat(a)) : 1
    }, color);
  },
  stringify: (channels2) => {
    const { r, g, b, a } = channels2;
    if (a < 1) {
      return `rgba(${utils_default.lang.round(r)}, ${utils_default.lang.round(g)}, ${utils_default.lang.round(b)}, ${utils_default.lang.round(a)})`;
    } else {
      return `rgb(${utils_default.lang.round(r)}, ${utils_default.lang.round(g)}, ${utils_default.lang.round(b)})`;
    }
  }
};
var rgb_default = RGB;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/color/index.js
var Color = {
  /* VARIABLES */
  format: {
    keyword: keyword_default,
    hex: hex_default,
    rgb: rgb_default,
    rgba: rgb_default,
    hsl: hsl_default,
    hsla: hsl_default
  },
  /* API */
  parse: (color) => {
    if (typeof color !== "string")
      return color;
    const channels2 = hex_default.parse(color) || rgb_default.parse(color) || hsl_default.parse(color) || keyword_default.parse(color);
    if (channels2)
      return channels2;
    throw new Error(`Unsupported color format: "${color}"`);
  },
  stringify: (channels2) => {
    if (!channels2.changed && channels2.color)
      return channels2.color;
    if (channels2.type.is(TYPE.HSL) || channels2.data.r === void 0) {
      return hsl_default.stringify(channels2);
    } else if (channels2.a < 1 || !Number.isInteger(channels2.r) || !Number.isInteger(channels2.g) || !Number.isInteger(channels2.b)) {
      return rgb_default.stringify(channels2);
    } else {
      return hex_default.stringify(channels2);
    }
  }
};
var color_default = Color;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/change.js
var change = (color, channels2) => {
  const ch = color_default.parse(color);
  for (const c in channels2) {
    ch[c] = utils_default.channel.clamp[c](channels2[c]);
  }
  return color_default.stringify(ch);
};
var change_default = change;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/rgba.js
var rgba = (r, g, b = 0, a = 1) => {
  if (typeof r !== "number")
    return change_default(r, { a: g });
  const channels2 = reusable_default.set({
    r: utils_default.channel.clamp.r(r),
    g: utils_default.channel.clamp.g(g),
    b: utils_default.channel.clamp.b(b),
    a: utils_default.channel.clamp.a(a)
  });
  return color_default.stringify(channels2);
};
var rgba_default = rgba;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/luminance.js
var luminance = (color) => {
  const { r, g, b } = color_default.parse(color);
  const luminance2 = 0.2126 * utils_default.channel.toLinear(r) + 0.7152 * utils_default.channel.toLinear(g) + 0.0722 * utils_default.channel.toLinear(b);
  return utils_default.lang.round(luminance2);
};
var luminance_default = luminance;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/is_light.js
var isLight = (color) => {
  return luminance_default(color) >= 0.5;
};
var is_light_default = isLight;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/is_dark.js
var isDark = (color) => {
  return !is_light_default(color);
};
var is_dark_default = isDark;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/adjust_channel.js
var adjustChannel = (color, channel, amount) => {
  const channels2 = color_default.parse(color);
  const amountCurrent = channels2[channel];
  const amountNext = utils_default.channel.clamp[channel](amountCurrent + amount);
  if (amountCurrent !== amountNext)
    channels2[channel] = amountNext;
  return color_default.stringify(channels2);
};
var adjust_channel_default = adjustChannel;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/lighten.js
var lighten = (color, amount) => {
  return adjust_channel_default(color, "l", amount);
};
var lighten_default = lighten;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/darken.js
var darken = (color, amount) => {
  return adjust_channel_default(color, "l", -amount);
};
var darken_default = darken;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/adjust.js
var adjust = (color, channels2) => {
  const ch = color_default.parse(color);
  const changes = {};
  for (const c in channels2) {
    if (!channels2[c])
      continue;
    changes[c] = ch[c] + channels2[c];
  }
  return change_default(color, changes);
};
var adjust_default = adjust;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/mix.js
var mix = (color1, color2, weight = 50) => {
  const { r: r1, g: g1, b: b1, a: a1 } = color_default.parse(color1);
  const { r: r2, g: g2, b: b2, a: a2 } = color_default.parse(color2);
  const weightScale = weight / 100;
  const weightNormalized = weightScale * 2 - 1;
  const alphaDelta = a1 - a2;
  const weight1combined = weightNormalized * alphaDelta === -1 ? weightNormalized : (weightNormalized + alphaDelta) / (1 + weightNormalized * alphaDelta);
  const weight1 = (weight1combined + 1) / 2;
  const weight2 = 1 - weight1;
  const r = r1 * weight1 + r2 * weight2;
  const g = g1 * weight1 + g2 * weight2;
  const b = b1 * weight1 + b2 * weight2;
  const a = a1 * weightScale + a2 * (1 - weightScale);
  return rgba_default(r, g, b, a);
};
var mix_default = mix;

// node_modules/.pnpm/khroma@2.1.0/node_modules/khroma/dist/methods/invert.js
var invert = (color, weight = 100) => {
  const inverse = color_default.parse(color);
  inverse.r = 255 - inverse.r;
  inverse.g = 255 - inverse.g;
  inverse.b = 255 - inverse.b;
  return mix_default(inverse, color, weight);
};
var invert_default = invert;

// packages/mermaid/src/themes/erDiagram-oldHardcodedValues.ts
var oldAttributeBackgroundColorOdd = "#ffffff";
var oldAttributeBackgroundColorEven = "#f2f2f2";

// packages/mermaid/src/themes/theme-helpers.js
var mkBorder = (col, darkMode) => darkMode ? adjust_default(col, { s: -40, l: 10 }) : adjust_default(col, { s: -40, l: -10 });

// packages/mermaid/src/themes/theme-base.js
var Theme = class {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#fff4dd";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 5;
    this.strokeWidth = 1;
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.useGradient = true;
    this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#333";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || this.primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.vertLineColor = this.vertLineColor || "navy";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.noteFontWeight = this.noteFontWeight || "normal";
    this.fontWeight = this.fontWeight || "normal";
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    if (this.darkMode) {
      this.rowOdd = this.rowOdd || darken_default(this.mainBkg, 5) || "#ffffff";
      this.rowEven = this.rowEven || darken_default(this.mainBkg, 10);
    } else {
      this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff";
      this.rowEven = this.rowEven || lighten_default(this.mainBkg, 5);
    }
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || this.tertiaryColor;
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210, l: 150 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || this.primaryColor;
    this.fillType1 = this.fillType1 || this.secondaryColor;
    this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust_default(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(this.primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust_default(this.primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust_default(this.primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 });
    this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 });
    this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -30 });
    this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, { h: 60, l: -30 });
    this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, { h: -60, l: -30 });
    this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, { h: 60, l: -30 });
    this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, { h: 120, l: -30 });
    this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, { h: 120, l: -30 });
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    };
    this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    };
    this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545";
    this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    };
    this.archEdgeColor = this.archEdgeColor || "#777";
    this.archEdgeArrowColor = this.archEdgeArrowColor || "#777";
    this.archEdgeWidth = this.archEdgeWidth || "3";
    this.archGroupBorderColor = this.archGroupBorderColor || "#000";
    this.archGroupBorderWidth = this.archGroupBorderWidth || "2px";
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.emUiFill = this.emUiFill || "white";
    this.emUiStroke = this.emUiStroke || "#dbdada";
    this.emProcessorFill = this.emProcessorFill || "#edb3f6";
    this.emProcessorStroke = this.emProcessorStroke || "#b88cbf";
    this.emReadModelFill = this.emReadModelFill || "#d3f1a2";
    this.emReadModelStroke = this.emReadModelStroke || "#a3b732";
    this.emCommandFill = this.emCommandFill || "#bcd6fe";
    this.emCommandStroke = this.emCommandStroke || "#679ac3";
    this.emEventFill = this.emEventFill || "#ffb778";
    this.emEventStroke = this.emEventStroke || "#c19a0f";
    this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)";
    this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)";
    this.emArrowhead = this.emArrowhead || this.lineColor;
    this.emRelationStroke = this.emRelationStroke || this.lineColor;
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
    this.gradientStart = this.primaryBorderColor;
    this.gradientStop = this.secondaryBorderColor;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    if (Object.hasOwn(overrides, "nodeBorder") && !Object.hasOwn(overrides, "useGradient")) {
      this.useGradient = false;
    }
  }
};
var getThemeVariables = (userOverrides) => {
  const theme = new Theme();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-dark.js
var Theme2 = class {
  constructor() {
    this.background = "#333";
    this.primaryColor = "#1f2020";
    this.secondaryColor = lighten_default(this.primaryColor, 16);
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert_default(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.lineColor = invert_default(this.background);
    this.textColor = invert_default(this.background);
    this.mainBkg = "#1f2020";
    this.secondBkg = "calculated";
    this.mainContrastColor = "lightgrey";
    this.darkTextColor = lighten_default(invert_default("#323D47"), 10);
    this.lineColor = "calculated";
    this.border1 = "#ccc";
    this.border2 = rgba_default(255, 255, 255, 0.25);
    this.arrowheadColor = "calculated";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.labelBackground = "#181818";
    this.textColor = "#ccc";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 5;
    this.strokeWidth = 1;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "#F9FFFE";
    this.edgeLabelBackground = "calculated";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "calculated";
    this.actorLineColor = "calculated";
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "calculated";
    this.activationBkgColor = "calculated";
    this.sequenceNumberColor = "black";
    this.clusterBkg = "#302F3D";
    this.sectionBkgColor = darken_default("#EAE8D9", 30);
    this.altSectionBkgColor = "calculated";
    this.sectionBkgColor2 = "#EAE8D9";
    this.excludeBkgColor = darken_default(this.sectionBkgColor, 10);
    this.taskBorderColor = rgba_default(255, 255, 255, 70);
    this.taskBkgColor = "calculated";
    this.taskTextColor = "calculated";
    this.taskTextLightColor = "calculated";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = rgba_default(255, 255, 255, 50);
    this.activeTaskBkgColor = "#81B1DB";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#E83737";
    this.critBkgColor = "#E83737";
    this.taskTextDarkColor = "calculated";
    this.todayLineColor = "#DB5757";
    this.vertLineColor = "#00BFFF";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 5) || "#ffffff";
    this.rowEven = this.rowEven || darken_default(this.mainBkg, 10);
    this.labelColor = "calculated";
    this.errorBkgColor = "#a44141";
    this.errorTextColor = "#ddd";
    this.useGradient = true;
    this.gradientStart = this.primaryBorderColor;
    this.gradientStop = this.secondaryBorderColor;
    this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
    this.noteFontWeight = this.noteFontWeight || "normal";
    this.fontWeight = this.fontWeight || "normal";
  }
  updateColors() {
    this.secondBkg = lighten_default(this.mainBkg, 16);
    this.lineColor = this.mainContrastColor;
    this.arrowheadColor = this.mainContrastColor;
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.lineColor;
    this.edgeLabelBackground = lighten_default(this.labelBackground, 25);
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = this.border1;
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.mainContrastColor;
    this.actorLineColor = this.actorBorder;
    this.signalColor = this.mainContrastColor;
    this.signalTextColor = this.mainContrastColor;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.mainContrastColor;
    this.loopTextColor = this.mainContrastColor;
    this.noteBorderColor = this.secondaryBorderColor;
    this.noteBkgColor = this.secondBkg;
    this.noteTextColor = this.secondaryTextColor;
    this.activationBorderColor = this.border1;
    this.activationBkgColor = this.secondBkg;
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.altSectionBkgColor = this.background;
    this.taskBkgColor = lighten_default(this.mainBkg, 23);
    this.taskTextColor = this.darkTextColor;
    this.taskTextLightColor = this.mainContrastColor;
    this.taskTextOutsideColor = this.taskTextLightColor;
    this.gridColor = this.mainContrastColor;
    this.doneTaskBkgColor = this.mainContrastColor;
    this.taskTextDarkColor = invert_default(this.doneTaskBkgColor);
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#555";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = "#f4f4f4";
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
    this.cScale1 = this.cScale1 || "#0b0000";
    this.cScale2 = this.cScale2 || "#4d1037";
    this.cScale3 = this.cScale3 || "#3f5258";
    this.cScale4 = this.cScale4 || "#4f2f1b";
    this.cScale5 = this.cScale5 || "#6e0a0a";
    this.cScale6 = this.cScale6 || "#3b0048";
    this.cScale7 = this.cScale7 || "#995a01";
    this.cScale8 = this.cScale8 || "#154706";
    this.cScale9 = this.cScale9 || "#161722";
    this.cScale10 = this.cScale10 || "#00296f";
    this.cScale11 = this.cScale11 || "#01629c";
    this.cScale12 = this.cScale12 || "#010029";
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 30, s: -30, l: -(-10 + i * 4) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 30, s: -30, l: -(-7 + i * 4) });
    }
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + i] = this["cScale" + i];
    }
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.mainContrastColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.mainContrastColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    for (let i = 0; i < 8; i++) {
      this["venn" + (i + 1)] = this["venn" + (i + 1)] ?? lighten_default(this["cScale" + i], 30);
    }
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#FF6B6B",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#1B5E20",
      complicatedBg: this.cynefin?.complicatedBg || "#0D47A1",
      chaoticBg: this.cynefin?.chaoticBg || "#BF360C",
      clearBg: this.cynefin?.clearBg || "#F57F17",
      confusionBg: this.cynefin?.confusionBg || "#4A148C",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    };
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#3498db,#2ecc71,#e74c3c,#f1c40f,#bdc3c7,#ffffff,#34495e,#9b59b6,#1abc9c,#e67e22"
    };
    this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.background
    };
    this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    };
    this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#ff6b6b";
    this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.mainBkg,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.mainBkg
    };
    this.classText = this.primaryTextColor;
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = lighten_default(this.secondaryColor, 20);
    this.git1 = lighten_default(this.pie2 || this.secondaryColor, 20);
    this.git2 = lighten_default(this.pie3 || this.tertiaryColor, 20);
    this.git3 = lighten_default(this.pie4 || adjust_default(this.primaryColor, { h: -30 }), 20);
    this.git4 = lighten_default(this.pie5 || adjust_default(this.primaryColor, { h: -60 }), 20);
    this.git5 = lighten_default(this.pie6 || adjust_default(this.primaryColor, { h: -90 }), 10);
    this.git6 = lighten_default(this.pie7 || adjust_default(this.primaryColor, { h: 60 }), 10);
    this.git7 = lighten_default(this.pie8 || adjust_default(this.primaryColor, { h: 120 }), 20);
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.emUiFill = this.emUiFill || "#2d2d2d";
    this.emUiStroke = this.emUiStroke || "#555";
    this.emProcessorFill = this.emProcessorFill || lighten_default("#5a3d5c", 10);
    this.emProcessorStroke = this.emProcessorStroke || "#8a6d8c";
    this.emReadModelFill = this.emReadModelFill || lighten_default("#3d5a2d", 10);
    this.emReadModelStroke = this.emReadModelStroke || "#6d8c5c";
    this.emCommandFill = this.emCommandFill || lighten_default("#2d3d5a", 10);
    this.emCommandStroke = this.emCommandStroke || "#5c6d8c";
    this.emEventFill = this.emEventFill || lighten_default("#5a452d", 10);
    this.emEventStroke = this.emEventStroke || "#8c755c";
    this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || lighten_default(this.background, 5);
    this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || lighten_default(this.background, 12);
    this.emArrowhead = this.emArrowhead || this.lineColor;
    this.emRelationStroke = this.emRelationStroke || this.lineColor;
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || lighten_default(this.background, 12);
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || lighten_default(this.background, 2);
    this.nodeBorder = this.nodeBorder || "#999";
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables2 = (userOverrides) => {
  const theme = new Theme2();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-default.js
var Theme3 = class {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#ECECFF";
    this.secondaryColor = adjust_default(this.primaryColor, { h: 120 });
    this.secondaryColor = "#ffffde";
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.lineColor = invert_default(this.background);
    this.textColor = invert_default(this.background);
    this.background = "white";
    this.mainBkg = "#ECECFF";
    this.secondBkg = "#ffffde";
    this.lineColor = "#333333";
    this.border1 = "#9370DB";
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.border2 = "#aaaa33";
    this.arrowheadColor = "#333333";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.labelBackground = "rgba(232,232,232, 0.8)";
    this.textColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 5;
    this.strokeWidth = 1;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "calculated";
    this.edgeLabelBackground = "calculated";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "black";
    this.actorLineColor = "calculated";
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.clusterBkg = "#FBFBFF";
    this.sectionBkgColor = "calculated";
    this.altSectionBkgColor = "calculated";
    this.sectionBkgColor2 = "calculated";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "calculated";
    this.taskTextLightColor = "calculated";
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextDarkColor = "calculated";
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.taskTextClickableColor = "calculated";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "calculated";
    this.critBorderColor = "calculated";
    this.critBkgColor = "calculated";
    this.todayLineColor = "calculated";
    this.vertLineColor = "calculated";
    this.sectionBkgColor = rgba_default(102, 102, 255, 0.49);
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "#fff400";
    this.taskBorderColor = "#534fbc";
    this.taskBkgColor = "#8a90dd";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "black";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "#534fbc";
    this.activeTaskBkgColor = "#bfc7ff";
    this.gridColor = "lightgrey";
    this.doneTaskBkgColor = "lightgrey";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#ff8888";
    this.critBkgColor = "red";
    this.todayLineColor = "red";
    this.vertLineColor = "navy";
    this.noteFontWeight = this.noteFontWeight || "normal";
    this.fontWeight = this.fontWeight || "normal";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.rowOdd = "calculated";
    this.rowEven = "calculated";
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
    this.useGradient = false;
    this.gradientStart = this.primaryBorderColor;
    this.gradientStop = this.secondaryBorderColor;
    this.dropShadow = "drop-shadow(1px 2px 2px rgba(185, 185, 185, 1))";
    this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    this["cScalePeer1"] = this["cScalePeer1"] || darken_default(this.secondaryColor, 45);
    this["cScalePeer2"] = this["cScalePeer2"] || darken_default(this.tertiaryColor, 40);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScale" + i] = darken_default(this["cScale" + i], 10);
      this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 25);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || adjust_default(this["cScale" + i], { h: 180 });
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 30, l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 30, l: -(7 + i * 5) });
    }
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    if (this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || invert_default(this.labelTextColor);
      this.cScaleLabel3 = this.cScaleLabel3 || invert_default(this.labelTextColor);
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.labelTextColor;
      }
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.lineColor;
    this.titleColor = this.textColor;
    this.edgeLabelBackground = this.labelBackground;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = this.border1;
    this.actorBkg = this.mainBkg;
    this.labelBoxBkgColor = this.actorBkg;
    this.signalColor = this.textColor;
    this.signalTextColor = this.textColor;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.actorTextColor;
    this.loopTextColor = this.actorTextColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.actorTextColor;
    this.actorLineColor = this.actorBorder;
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.rowOdd = this.rowOdd || lighten_default(this.primaryColor, 75) || "#ffffff";
    this.rowEven = this.rowEven || lighten_default(this.primaryColor, 1);
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.specialStateColor = this.lineColor;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || adjust_default(this.tertiaryColor, { l: -40 });
    this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 });
    this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -20 });
    this.pie7 = this.pie7 || adjust_default(this.primaryColor, { h: 60, l: -20 });
    this.pie8 = this.pie8 || adjust_default(this.primaryColor, { h: -60, l: -40 });
    this.pie9 = this.pie9 || adjust_default(this.primaryColor, { h: 120, l: -40 });
    this.pie10 = this.pie10 || adjust_default(this.primaryColor, { h: 60, l: -40 });
    this.pie11 = this.pie11 || adjust_default(this.primaryColor, { h: -90, l: -40 });
    this.pie12 = this.pie12 || adjust_default(this.primaryColor, { h: 120, l: -30 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 });
    this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 });
    this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -40 });
    this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, { h: 60, l: -30 });
    this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, { h: -60, l: -30 });
    this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, { h: 60, l: -30 });
    this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, { h: 120, l: -30 });
    this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, { h: 120, l: -30 });
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    };
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    };
    this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545";
    this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    };
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#ECECFF,#8493A6,#FFC3A0,#DCDDE1,#B8E994,#D1A36F,#C3CDE6,#FFB6C1,#496078,#F8F3E3"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.labelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || darken_default(invert_default(this.git0), 25);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.emUiFill = this.emUiFill || "white";
    this.emUiStroke = this.emUiStroke || "#dbdada";
    this.emProcessorFill = this.emProcessorFill || "#edb3f6";
    this.emProcessorStroke = this.emProcessorStroke || "#b88cbf";
    this.emReadModelFill = this.emReadModelFill || "#d3f1a2";
    this.emReadModelStroke = this.emReadModelStroke || "#a3b732";
    this.emCommandFill = this.emCommandFill || "#bcd6fe";
    this.emCommandStroke = this.emCommandStroke || "#679ac3";
    this.emEventFill = this.emEventFill || "#ffb778";
    this.emEventStroke = this.emEventStroke || "#c19a0f";
    this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)";
    this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)";
    this.emArrowhead = this.emArrowhead || this.lineColor;
    this.emRelationStroke = this.emRelationStroke || this.lineColor;
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    Object.keys(this).forEach((k) => {
      if (this[k] === "calculated") {
        this[k] = void 0;
      }
    });
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables3 = (userOverrides) => {
  const theme = new Theme3();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-forest.js
var Theme4 = class {
  constructor() {
    this.background = "#f4f4f4";
    this.primaryColor = "#cde498";
    this.secondaryColor = "#cdffb2";
    this.background = "white";
    this.mainBkg = "#cde498";
    this.secondBkg = "#cdffb2";
    this.lineColor = "green";
    this.border1 = "#13540c";
    this.border2 = "#6eaa49";
    this.arrowheadColor = "green";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.tertiaryColor = lighten_default("#cde498", 10);
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.primaryColor);
    this.lineColor = invert_default(this.background);
    this.textColor = invert_default(this.background);
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 5;
    this.strokeWidth = 1;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "#333";
    this.edgeLabelBackground = "#e8e8e8";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "black";
    this.actorLineColor = "calculated";
    this.signalColor = "#333";
    this.signalTextColor = "#333";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "#326932";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.sectionBkgColor = "#6eaa49";
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "#6eaa49";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "#487e3a";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "black";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "lightgrey";
    this.doneTaskBkgColor = "lightgrey";
    this.doneTaskBorderColor = "grey";
    this.critBorderColor = "#ff8888";
    this.critBkgColor = "red";
    this.todayLineColor = "red";
    this.vertLineColor = "#00BFFF";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.noteFontWeight = "normal";
    this.fontWeight = "normal";
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
    this.useGradient = true;
    this.gradientStart = this.primaryBorderColor;
    this.gradientStop = this.secondaryBorderColor;
    this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.5))";
  }
  updateColors() {
    this.actorBorder = darken_default(this.mainBkg, 20);
    this.actorBkg = this.mainBkg;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelTextColor = this.actorTextColor;
    this.loopTextColor = this.actorTextColor;
    this.noteBorderColor = this.border2;
    this.noteTextColor = this.actorTextColor;
    this.actorLineColor = this.actorBorder;
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    this["cScalePeer1"] = this["cScalePeer1"] || darken_default(this.secondaryColor, 45);
    this["cScalePeer2"] = this["cScalePeer2"] || darken_default(this.tertiaryColor, 40);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScale" + i] = darken_default(this["cScale" + i], 10);
      this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 25);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || adjust_default(this["cScale" + i], { h: 180 });
    }
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 30, s: -30, l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 30, s: -30, l: -(8 + i * 5) });
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.lineColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.taskBorderColor = this.border1;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.activeTaskBorderColor = this.taskBorderColor;
    this.activeTaskBkgColor = this.mainBkg;
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff";
    this.rowEven = this.rowEven || lighten_default(this.mainBkg, 20);
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = this.lineColor;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -30 });
    this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -30 });
    this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { h: 40, l: -40 });
    this.pie7 = this.pie7 || adjust_default(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(this.primaryColor, { h: 60, l: -50 });
    this.pie11 = this.pie11 || adjust_default(this.primaryColor, { h: -60, l: -50 });
    this.pie12 = this.pie12 || adjust_default(this.primaryColor, { h: 120, l: -50 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.venn1 = this.venn1 ?? adjust_default(this.primaryColor, { l: -30 });
    this.venn2 = this.venn2 ?? adjust_default(this.secondaryColor, { l: -30 });
    this.venn3 = this.venn3 ?? adjust_default(this.tertiaryColor, { l: -30 });
    this.venn4 = this.venn4 ?? adjust_default(this.primaryColor, { h: 60, l: -30 });
    this.venn5 = this.venn5 ?? adjust_default(this.primaryColor, { h: -60, l: -30 });
    this.venn6 = this.venn6 ?? adjust_default(this.secondaryColor, { h: 60, l: -30 });
    this.venn7 = this.venn7 ?? adjust_default(this.primaryColor, { h: 120, l: -30 });
    this.venn8 = this.venn8 ?? adjust_default(this.secondaryColor, { h: 120, l: -30 });
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B4513",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#C8E6C9",
      complicatedBg: this.cynefin?.complicatedBg || "#DCEDC8",
      chaoticBg: this.cynefin?.chaoticBg || "#FFE0B2",
      clearBg: this.cynefin?.clearBg || "#FFF9C4",
      confusionBg: this.cynefin?.confusionBg || "#D7CCC8",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    };
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.packet = {
      startByteColor: this.primaryTextColor,
      endByteColor: this.primaryTextColor,
      labelColor: this.primaryTextColor,
      titleColor: this.primaryTextColor,
      blockStrokeColor: this.primaryTextColor,
      blockFillColor: this.mainBkg
    };
    this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    };
    this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545";
    this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    };
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#CDE498,#FF6B6B,#A0D2DB,#D7BDE2,#F0F0F0,#FFC3A0,#7FD8BE,#FF9A8B,#FAF3E0,#FFF176"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.gitBranchLabel0 = this.gitBranchLabel0 || invert_default(this.labelTextColor);
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || invert_default(this.labelTextColor);
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.emUiFill = this.emUiFill || "white";
    this.emUiStroke = this.emUiStroke || "#dbdada";
    this.emProcessorFill = this.emProcessorFill || "#edb3f6";
    this.emProcessorStroke = this.emProcessorStroke || "#b88cbf";
    this.emReadModelFill = this.emReadModelFill || "#d3f1a2";
    this.emReadModelStroke = this.emReadModelStroke || "#a3b732";
    this.emCommandFill = this.emCommandFill || "#bcd6fe";
    this.emCommandStroke = this.emCommandStroke || "#679ac3";
    this.emEventFill = this.emEventFill || "#ffb778";
    this.emEventStroke = this.emEventStroke || "#c19a0f";
    this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)";
    this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)";
    this.emArrowhead = this.emArrowhead || this.lineColor;
    this.emRelationStroke = this.emRelationStroke || this.lineColor;
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables4 = (userOverrides) => {
  const theme = new Theme4();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-neutral.js
var Theme5 = class {
  constructor() {
    this.primaryColor = "#eee";
    this.contrast = "#707070";
    this.secondaryColor = lighten_default(this.contrast, 55);
    this.background = "#ffffff";
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.lineColor = invert_default(this.background);
    this.textColor = invert_default(this.background);
    this.mainBkg = "#eee";
    this.secondBkg = "calculated";
    this.lineColor = "#666";
    this.border1 = "#999";
    this.border2 = "calculated";
    this.note = "#ffa";
    this.text = "#333";
    this.critical = "#d42";
    this.done = "#bbb";
    this.arrowheadColor = "#333333";
    this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif';
    this.fontSize = "16px";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 5;
    this.strokeWidth = 1;
    this.nodeBkg = "calculated";
    this.nodeBorder = "calculated";
    this.clusterBkg = "calculated";
    this.clusterBorder = "calculated";
    this.defaultLinkColor = "calculated";
    this.titleColor = "calculated";
    this.edgeLabelBackground = "white";
    this.actorBorder = "calculated";
    this.actorBkg = "calculated";
    this.actorTextColor = "calculated";
    this.actorLineColor = this.actorBorder;
    this.signalColor = "calculated";
    this.signalTextColor = "calculated";
    this.labelBoxBkgColor = "calculated";
    this.labelBoxBorderColor = "calculated";
    this.labelTextColor = "calculated";
    this.loopTextColor = "calculated";
    this.noteBorderColor = "calculated";
    this.noteBkgColor = "calculated";
    this.noteTextColor = "calculated";
    this.activationBorderColor = "#666";
    this.activationBkgColor = "#f4f4f4";
    this.sequenceNumberColor = "white";
    this.sectionBkgColor = "calculated";
    this.altSectionBkgColor = "white";
    this.sectionBkgColor2 = "calculated";
    this.excludeBkgColor = "#eeeeee";
    this.taskBorderColor = "calculated";
    this.taskBkgColor = "calculated";
    this.taskTextLightColor = "white";
    this.taskTextColor = "calculated";
    this.taskTextDarkColor = "calculated";
    this.taskTextOutsideColor = "calculated";
    this.taskTextClickableColor = "#003163";
    this.activeTaskBorderColor = "calculated";
    this.activeTaskBkgColor = "calculated";
    this.gridColor = "calculated";
    this.doneTaskBkgColor = "calculated";
    this.doneTaskBorderColor = "calculated";
    this.critBkgColor = "calculated";
    this.critBorderColor = "calculated";
    this.todayLineColor = "calculated";
    this.vertLineColor = "calculated";
    this.personBorder = this.primaryBorderColor;
    this.personBkg = this.mainBkg;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.noteFontWeight = "normal";
    this.fontWeight = "normal";
    this.rowOdd = this.rowOdd || lighten_default(this.mainBkg, 75) || "#ffffff";
    this.rowEven = this.rowEven || "#f4f4f4";
    this.labelColor = "black";
    this.errorBkgColor = "#552222";
    this.errorTextColor = "#552222";
    this.useGradient = true;
    this.gradientStart = this.primaryBorderColor;
    this.gradientStop = this.secondaryBorderColor;
    this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,1))";
  }
  updateColors() {
    this.secondBkg = lighten_default(this.contrast, 55);
    this.border2 = this.contrast;
    this.actorBorder = lighten_default(this.border1, 23);
    this.actorBkg = this.mainBkg;
    this.actorTextColor = this.text;
    this.actorLineColor = this.actorBorder;
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.signalColor = this.text;
    this.signalTextColor = this.text;
    this.labelBoxBkgColor = this.actorBkg;
    this.labelBoxBorderColor = this.actorBorder;
    this.labelTextColor = this.text;
    this.loopTextColor = this.text;
    this.noteBorderColor = "#999";
    this.noteBkgColor = "#666";
    this.noteTextColor = "#fff";
    this.cScale0 = this.cScale0 || "#555";
    this.cScale1 = this.cScale1 || "#F4F4F4";
    this.cScale2 = this.cScale2 || "#555";
    this.cScale3 = this.cScale3 || "#BBB";
    this.cScale4 = this.cScale4 || "#777";
    this.cScale5 = this.cScale5 || "#999";
    this.cScale6 = this.cScale6 || "#DDD";
    this.cScale7 = this.cScale7 || "#FFF";
    this.cScale8 = this.cScale8 || "#DDD";
    this.cScale9 = this.cScale9 || "#BBB";
    this.cScale10 = this.cScale10 || "#999";
    this.cScale11 = this.cScale11 || "#777";
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1;
    this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { l: -(5 + i * 5) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { l: -(8 + i * 5) });
    }
    this.nodeBkg = this.mainBkg;
    this.nodeBorder = this.border1;
    this.clusterBkg = this.secondBkg;
    this.clusterBorder = this.border2;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.lineColor;
    this.titleColor = this.text;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.sectionBkgColor = lighten_default(this.contrast, 30);
    this.sectionBkgColor2 = lighten_default(this.contrast, 30);
    this.taskBorderColor = darken_default(this.contrast, 10);
    this.taskBkgColor = this.contrast;
    this.taskTextColor = this.taskTextLightColor;
    this.taskTextDarkColor = this.text;
    this.taskTextOutsideColor = this.taskTextDarkColor;
    this.activeTaskBorderColor = this.taskBorderColor;
    this.activeTaskBkgColor = this.mainBkg;
    this.gridColor = lighten_default(this.border1, 30);
    this.doneTaskBkgColor = this.done;
    this.doneTaskBorderColor = this.lineColor;
    this.critBkgColor = this.critical;
    this.critBorderColor = darken_default(this.critBkgColor, 10);
    this.todayLineColor = this.critBkgColor;
    this.vertLineColor = this.critBkgColor;
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.transitionColor = this.transitionColor || "#000";
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f4f4f4";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.stateBorder = this.stateBorder || "#000";
    this.innerEndBackground = this.primaryBorderColor;
    this.specialStateColor = "#222";
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.classText = this.primaryTextColor;
    this.fillType0 = this.primaryColor;
    this.fillType1 = this.secondaryColor;
    this.fillType2 = adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = adjust_default(this.secondaryColor, { h: 128 });
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + i] = this["cScale" + i];
    }
    this.pie12 = this.pie0;
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    for (let i = 0; i < 8; i++) {
      this["venn" + (i + 1)] = this["venn" + (i + 1)] ?? this["cScale" + i];
    }
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.cynefin = {
      domainFontSize: this.cynefin?.domainFontSize || 16,
      itemFontSize: this.cynefin?.itemFontSize || 12,
      boundaryColor: this.cynefin?.boundaryColor || this.lineColor,
      boundaryWidth: this.cynefin?.boundaryWidth || 2,
      cliffColor: this.cynefin?.cliffColor || "#8B0000",
      cliffWidth: this.cynefin?.cliffWidth || 4,
      arrowColor: this.cynefin?.arrowColor || this.lineColor,
      arrowWidth: this.cynefin?.arrowWidth || 2,
      complexBg: this.cynefin?.complexBg || "#E8F5E9",
      complicatedBg: this.cynefin?.complicatedBg || "#E3F2FD",
      chaoticBg: this.cynefin?.chaoticBg || "#FBE9E7",
      clearBg: this.cynefin?.clearBg || "#FFF8E1",
      confusionBg: this.cynefin?.confusionBg || "#F3E5F5",
      textColor: this.cynefin?.textColor || this.textColor,
      labelColor: this.cynefin?.labelColor || this.primaryTextColor
    };
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      dataLabelColor: this.xyChart?.dataLabelColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#EEE,#6BB8E4,#8ACB88,#C7ACD6,#E8DCC2,#FFB2A8,#FFF380,#7E8D91,#FFD8B1,#FAF3E0"
    };
    this.radar = {
      axisColor: this.radar?.axisColor || this.lineColor,
      axisStrokeWidth: this.radar?.axisStrokeWidth || 2,
      axisLabelFontSize: this.radar?.axisLabelFontSize || 12,
      curveOpacity: this.radar?.curveOpacity || 0.5,
      curveStrokeWidth: this.radar?.curveStrokeWidth || 2,
      graticuleColor: this.radar?.graticuleColor || "#DEDEDE",
      graticuleStrokeWidth: this.radar?.graticuleStrokeWidth || 1,
      graticuleOpacity: this.radar?.graticuleOpacity || 0.3,
      legendBoxSize: this.radar?.legendBoxSize || 12,
      legendFontSize: this.radar?.legendFontSize || 12
    };
    this.wardleyEvolutionColor = this.wardleyEvolutionColor || "#dc3545";
    this.wardley = {
      backgroundColor: this.wardley?.backgroundColor || this.background,
      axisColor: this.wardley?.axisColor || this.lineColor,
      axisTextColor: this.wardley?.axisTextColor || this.primaryTextColor,
      gridColor: this.wardley?.gridColor || this.gridColor,
      componentFill: this.wardley?.componentFill || this.background,
      componentStroke: this.wardley?.componentStroke || this.lineColor,
      componentLabelColor: this.wardley?.componentLabelColor || this.primaryTextColor,
      linkStroke: this.wardley?.linkStroke || this.lineColor,
      evolutionStroke: this.wardley?.evolutionStroke || this.wardleyEvolutionColor,
      annotationStroke: this.wardley?.annotationStroke || this.lineColor,
      annotationTextColor: this.wardley?.annotationTextColor || this.primaryTextColor,
      annotationFill: this.wardley?.annotationFill || this.background
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground;
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = darken_default(this.pie1, 25) || this.primaryColor;
    this.git1 = this.pie2 || this.secondaryColor;
    this.git2 = this.pie3 || this.tertiaryColor;
    this.git3 = this.pie4 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.pie5 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.pie6 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.pie7 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.pie8 || adjust_default(this.primaryColor, { h: 120 });
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || this.labelTextColor;
    this.gitBranchLabel0 = this.branchLabelColor;
    this.gitBranchLabel1 = "white";
    this.gitBranchLabel2 = this.branchLabelColor;
    this.gitBranchLabel3 = "white";
    this.gitBranchLabel4 = this.branchLabelColor;
    this.gitBranchLabel5 = this.branchLabelColor;
    this.gitBranchLabel6 = this.branchLabelColor;
    this.gitBranchLabel7 = this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.emUiFill = this.emUiFill || "white";
    this.emUiStroke = this.emUiStroke || "#dbdada";
    this.emProcessorFill = this.emProcessorFill || "#edb3f6";
    this.emProcessorStroke = this.emProcessorStroke || "#b88cbf";
    this.emReadModelFill = this.emReadModelFill || "#d3f1a2";
    this.emReadModelStroke = this.emReadModelStroke || "#a3b732";
    this.emCommandFill = this.emCommandFill || "#bcd6fe";
    this.emCommandStroke = this.emCommandStroke || "#679ac3";
    this.emEventFill = this.emEventFill || "#ffb778";
    this.emEventStroke = this.emEventStroke || "#c19a0f";
    this.emSwimlaneBackgroundOdd = this.emSwimlaneBackgroundOdd || "rgb(250,250,250)";
    this.emSwimlaneBackgroundStroke = this.emSwimlaneBackgroundStroke || "rgb(240,240,240)";
    this.emArrowhead = this.emArrowhead || this.lineColor;
    this.emRelationStroke = this.emRelationStroke || this.lineColor;
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables5 = (userOverrides) => {
  const theme = new Theme5();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-neo.js
var Theme6 = class {
  constructor() {
    this.background = "#ffffff";
    this.primaryColor = "#cccccc";
    this.mainBkg = "#ffffff";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 3;
    this.strokeWidth = 2;
    this.primaryBorderColor = mkBorder(this.primaryColor, this.darkMode);
    this.fontFamily = "arial, sans-serif";
    this.fontSize = "14px";
    this.nodeBorder = "#000000";
    this.stateBorder = "#000000";
    this.useGradient = true;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.25));";
    this.tertiaryColor = "#ffffff";
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.noteFontWeight = "normal";
    this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#333";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || (is_dark_default(this.background) ? lighten_default(this.background, 4) : darken_default(this.background, 4));
    const primaryColor = "#ECECFE";
    const secondaryColor = "#E9E9F1";
    const tertiaryColor = adjust_default(primaryColor, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || primaryColor;
    this.cScale1 = this.cScale1 || secondaryColor;
    this.cScale2 = this.cScale2 || tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(primaryColor, { h: 210, l: 150 });
    this.cScale9 = this.cScale9 || adjust_default(primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(primaryColor, { h: 330 });
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || primaryColor;
    this.fillType1 = this.fillType1 || secondaryColor;
    this.fillType2 = this.fillType2 || adjust_default(primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust_default(secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust_default(primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust_default(secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust_default(primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust_default(secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || primaryColor;
    this.pie2 = this.pie2 || secondaryColor;
    this.pie3 = this.pie3 || tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust_default(tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust_default(primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust_default(primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust_default(primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || primaryColor;
    this.git1 = this.git1 || secondaryColor;
    this.git2 = this.git2 || tertiaryColor;
    this.git3 = this.git3 || adjust_default(primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables6 = (userOverrides) => {
  const theme = new Theme6();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-neo-dark.js
var Theme7 = class {
  constructor() {
    this.background = "#333";
    this.primaryColor = "#1f2020";
    this.secondaryColor = lighten_default(this.primaryColor, 16);
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert_default(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.mainBkg = "#2a2020";
    this.secondBkg = "calculated";
    this.mainContrastColor = "lightgrey";
    this.darkTextColor = lighten_default(invert_default("#323D47"), 10);
    this.border1 = "#ccc";
    this.border2 = rgba_default(255, 255, 255, 0.25);
    this.arrowheadColor = invert_default(this.background);
    this.fontFamily = "arial, sans-serif";
    this.fontSize = "14px";
    this.labelBackground = "#181818";
    this.textColor = "#ccc";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 3;
    this.strokeWidth = 1;
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#333";
    this.THEME_COLOR_LIMIT = 12;
    this.fontFamily = "arial, sans-serif";
    this.fontSize = "14px";
    this.useGradient = true;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "drop-shadow( 1px 2px 2px rgba(185,185,185,0.2))";
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.noteFontWeight = "normal";
    this.fontWeight = "normal";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#333";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.secondBkg = this.secondBkg === "calculated" ? lighten_default(this.mainBkg, 16) : this.secondBkg;
    this.nodeBorder = this.nodeBorder || this.border1;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || this.primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || this.secondBkg;
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210, l: 150 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || this.primaryColor;
    this.fillType1 = this.fillType1 || this.secondaryColor;
    this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust_default(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(this.primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust_default(this.primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust_default(this.primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.git0 = this.git0 || "#0b0000";
    this.git1 = this.git1 || "#4d1037";
    this.git2 = this.git2 || "#3f5258";
    this.git3 = this.git3 || "#4f2f1b";
    this.git4 = this.git4 || "#6e0a0a";
    this.git5 = this.git5 || "#3b0048";
    this.git6 = this.git6 || "#995a01";
    this.git7 = this.git7 || "#154706";
    this.gitDarkMode = true;
    if (this.gitDarkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables7 = (userOverrides) => {
  const theme = new Theme7();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-redux.js
var Theme8 = class {
  constructor() {
    this.background = "#ffffff";
    this.primaryColor = "#cccccc";
    this.mainBkg = "#ffffff";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#28253D";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 12;
    this.strokeWidth = 2;
    this.primaryBorderColor = mkBorder("#28253D", this.darkMode);
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.nodeBorder = "#28253D";
    this.stateBorder = "#28253D";
    this.useGradient = false;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "url(#drop-shadow)";
    this.nodeShadow = true;
    this.tertiaryColor = "#ffffff";
    this.clusterBkg = "#F9F9FB";
    this.clusterBorder = "#BDBCCC";
    this.noteBorderColor = "#FACC15";
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.actorBorder = "#28253D";
    this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#FEF9C3";
    this.noteTextColor = this.noteTextColor || "#28253D";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.noteFontWeight = 600;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || (is_dark_default(this.background) ? lighten_default(this.background, 4) : darken_default(this.background, 4));
    const primaryColor = "#ECECFE";
    const secondaryColor = "#E9E9F1";
    const tertiaryColor = adjust_default(primaryColor, { h: 180, l: 5 });
    this.sectionBkgColor = this.sectionBkgColor || tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.compositeTitleBackground = "#F9F9FB";
    this.altBackground = "#F9F9FB";
    this.stateEdgeLabelBackground = "#FFFFFF";
    this.fontWeight = 600;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScale" + i] = this.mainBkg;
    }
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || primaryColor;
    this.fillType1 = this.fillType1 || secondaryColor;
    this.fillType2 = this.fillType2 || adjust_default(primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust_default(secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust_default(primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust_default(secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust_default(primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust_default(secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || primaryColor;
    this.pie2 = this.pie2 || secondaryColor;
    this.pie3 = this.pie3 || tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust_default(tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust_default(primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust_default(primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust_default(primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.requirementEdgeLabelBackground = "#FFFFFF";
    this.git0 = this.git0 || primaryColor;
    this.git1 = this.git1 || secondaryColor;
    this.git2 = this.git2 || tertiaryColor;
    this.git3 = this.git3 || adjust_default(primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
    this.erEdgeLabelBackground = "#FFFFFF";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables8 = (userOverrides) => {
  const theme = new Theme8();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-redux-dark.js
var Theme9 = class {
  constructor() {
    this.background = "#333";
    this.primaryColor = "#1f2020";
    this.secondaryColor = lighten_default(this.primaryColor, 16);
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert_default(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.mainBkg = "#111113";
    this.secondBkg = "calculated";
    this.mainContrastColor = "lightgrey";
    this.darkTextColor = lighten_default(invert_default("#323D47"), 10);
    this.border1 = "#ccc";
    this.border2 = rgba_default(255, 255, 255, 0.25);
    this.arrowheadColor = invert_default(this.background);
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.labelBackground = "#111113";
    this.textColor = "#ccc";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 12;
    this.strokeWidth = 2;
    this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3";
    this.noteTextColor = this.noteTextColor ?? "#28253D";
    this.THEME_COLOR_LIMIT = 12;
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.nodeBorder = "#FFFFFF";
    this.stateBorder = "#FFFFFF";
    this.useGradient = false;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "url(#drop-shadow)";
    this.nodeShadow = true;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.clusterBkg = "#1E1A2E";
    this.clusterBorder = "#BDBCCC";
    this.noteBorderColor = "#FACC15";
    this.noteFontWeight = 600;
    this.filterColor = "#FFFFFF";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#FFFFFF";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.secondBkg = this.secondBkg === "calculated" ? lighten_default(this.mainBkg, 16) : this.secondBkg;
    this.nodeBorder = this.nodeBorder || this.border1;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = "#FFFFFF";
    this.signalColor = "#FFFFFF";
    this.labelBoxBorderColor = "#BDBCCC";
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor;
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || this.primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || this.secondBkg;
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.compositeBackground = "#16141F";
    this.altBackground = "#16141F";
    this.compositeTitleBackground = "#16141F";
    this.stateEdgeLabelBackground = "#16141F";
    this.fontWeight = 600;
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#f0f0f0";
    this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg;
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || this.primaryColor;
    this.cScale1 = this.cScale1 || this.secondaryColor;
    this.cScale2 = this.cScale2 || this.tertiaryColor;
    this.cScale3 = this.cScale3 || adjust_default(this.primaryColor, { h: 30 });
    this.cScale4 = this.cScale4 || adjust_default(this.primaryColor, { h: 60 });
    this.cScale5 = this.cScale5 || adjust_default(this.primaryColor, { h: 90 });
    this.cScale6 = this.cScale6 || adjust_default(this.primaryColor, { h: 120 });
    this.cScale7 = this.cScale7 || adjust_default(this.primaryColor, { h: 150 });
    this.cScale8 = this.cScale8 || adjust_default(this.primaryColor, { h: 210, l: 150 });
    this.cScale9 = this.cScale9 || adjust_default(this.primaryColor, { h: 270 });
    this.cScale10 = this.cScale10 || adjust_default(this.primaryColor, { h: 300 });
    this.cScale11 = this.cScale11 || adjust_default(this.primaryColor, { h: 330 });
    if (this.darkMode) {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 75);
      }
    } else {
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
        this["cScale" + i] = darken_default(this["cScale" + i], 25);
      }
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    this.fillType0 = this.fillType0 || this.primaryColor;
    this.fillType1 = this.fillType1 || this.secondaryColor;
    this.fillType2 = this.fillType2 || adjust_default(this.primaryColor, { h: 64 });
    this.fillType3 = this.fillType3 || adjust_default(this.secondaryColor, { h: 64 });
    this.fillType4 = this.fillType4 || adjust_default(this.primaryColor, { h: -64 });
    this.fillType5 = this.fillType5 || adjust_default(this.secondaryColor, { h: -64 });
    this.fillType6 = this.fillType6 || adjust_default(this.primaryColor, { h: 128 });
    this.fillType7 = this.fillType7 || adjust_default(this.secondaryColor, { h: 128 });
    this.pie1 = this.pie1 || this.primaryColor;
    this.pie2 = this.pie2 || this.secondaryColor;
    this.pie3 = this.pie3 || this.tertiaryColor;
    this.pie4 = this.pie4 || adjust_default(this.primaryColor, { l: -10 });
    this.pie5 = this.pie5 || adjust_default(this.secondaryColor, { l: -10 });
    this.pie6 = this.pie6 || adjust_default(this.tertiaryColor, { l: -10 });
    this.pie7 = this.pie7 || adjust_default(this.primaryColor, { h: 60, l: -10 });
    this.pie8 = this.pie8 || adjust_default(this.primaryColor, { h: -60, l: -10 });
    this.pie9 = this.pie9 || adjust_default(this.primaryColor, { h: 120, l: 0 });
    this.pie10 = this.pie10 || adjust_default(this.primaryColor, { h: 60, l: -20 });
    this.pie11 = this.pie11 || adjust_default(this.primaryColor, { h: -60, l: -20 });
    this.pie12 = this.pie12 || adjust_default(this.primaryColor, { h: 120, l: -10 });
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.requirementEdgeLabelBackground = "#16141F";
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
    this.erEdgeLabelBackground = "#16141F";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables9 = (userOverrides) => {
  const theme = new Theme9();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-redux-color.js
var Theme10 = class {
  constructor() {
    this.background = "#ffffff";
    this.primaryColor = "#cccccc";
    this.mainBkg = "#ffffff";
    this.noteBkgColor = "#fff5ad";
    this.noteTextColor = "#28253D";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 12;
    this.strokeWidth = 2;
    this.primaryBorderColor = mkBorder("#28253D", this.darkMode);
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.nodeBorder = "#28253D";
    this.stateBorder = "#28253D";
    this.useGradient = false;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "url(#drop-shadow)";
    this.nodeShadow = true;
    this.tertiaryColor = "#ffffff";
    this.clusterBkg = "#F9F9FB";
    this.clusterBorder = "#BDBCCC";
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.actorBorder = "#28253D";
    this.noteBorderColor = "#FACC15";
    this.noteFontWeight = 600;
    this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ];
    this.bkgColorArray = [
      "#FDF4FF",
      //Fuchsia-50
      "#F0FDFA",
      //Teal-50
      "#FFF7ED",
      //Orange-50
      "#ECFEFF",
      // Cyan-50
      "#F0FDF4",
      // Green-50
      "#F5F3FF",
      //Violet-50
      "#FEF2F2",
      //red-50
      "#FEFCE8",
      //yellow-50
      "#EEF2FF",
      //indigo-50
      "#F7FEE7",
      //Lime-50
      "#F0F9FF",
      //Sky-50
      "#FFF1F2"
      //Rose-50
    ];
    this.usecaseActorBorder = "#A78BFA";
    this.usecaseActorBkg = "#F5F3FF";
    this.usecaseBorder = "#2DD4BF";
    this.usecaseBkg = "#F0FDFA";
    this.usecaseBoundaryBorder = "#BDBCCC";
    this.usecaseBoundaryBkg = "#FAFAFC";
    this.usecaseIncludeLine = "#38BDF8";
    this.usecaseExtendLine = "#FB923C";
    this.filterColor = "#000000";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#28253D");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#28253D";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.nodeBorder = this.nodeBorder || this.primaryBorderColor;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || (is_dark_default(this.background) ? lighten_default(this.background, 4) : darken_default(this.background, 4));
    const primaryColor = "#ECECFE";
    const secondaryColor = "#E9E9F1";
    const tertiaryColor = adjust_default(primaryColor, { h: 180, l: 5 });
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey";
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateEdgeLabelBackground = this.stateEdgeLabelBackground || "#FFFFFF";
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor;
    this.altBackground = this.altBackground || "#F9F9FB";
    this.compositeTitleBackground = this.compositeTitleBackground || "#F9F9FB";
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || "#f4a8ff";
    this.cScale1 = this.cScale1 || "#46ecd5";
    this.cScale2 = this.cScale2 || "#ffb86a";
    this.cScale3 = this.cScale3 || "#dab2ff";
    this.cScale4 = this.cScale4 || "#7bf1a8";
    this.cScale5 = this.cScale5 || "#c4b4ff";
    this.cScale6 = this.cScale6 || "#ffa2a2";
    this.cScale7 = this.cScale7 || "#ffdf20";
    this.cScale8 = this.cScale8 || "#a3b3ff";
    this.cScale9 = this.cScale9 || "#bbf451";
    this.cScale10 = this.cScale10 || "#74d4ff";
    this.cScale11 = this.cScale11 || "#ffa1ad";
    this.sectionBkgColor = this.sectionBkgColor || this.cScale0;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.cScale1;
    this.altSectionBkgColor = this.altSectionBkgColor || "white";
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    for (let i = 0; i < 8; i++) {
      this["fillType" + i] = this["fillType" + i] || this.bkgColorArray[i];
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + (i + 1)] = this["pie" + (i + 1)] || this["cScale" + i];
    }
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || this.textColor;
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    for (let i = 0; i < 8; i++) {
      this["venn" + (i + 1)] = this["venn" + (i + 1)] ?? this.borderColorArray[i % this.borderColorArray.length];
    }
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.requirementEdgeLabelBackground = "#FFFFFF";
    this.git0 = this.git0 || primaryColor;
    this.git1 = this.git1 || secondaryColor;
    this.git2 = this.git2 || tertiaryColor;
    this.git3 = this.git3 || adjust_default(primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.fontWeight = 600;
    this.erEdgeLabelBackground = "#FFFFFF";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables10 = (userOverrides) => {
  const theme = new Theme10();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/theme-redux-dark-color.js
var Theme11 = class {
  constructor() {
    this.background = "#333";
    this.primaryColor = "#1f2020";
    this.secondaryColor = lighten_default(this.primaryColor, 16);
    this.tertiaryColor = adjust_default(this.primaryColor, { h: -160 });
    this.primaryBorderColor = invert_default(this.background);
    this.secondaryBorderColor = mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = mkBorder(this.tertiaryColor, this.darkMode);
    this.primaryTextColor = invert_default(this.primaryColor);
    this.secondaryTextColor = invert_default(this.secondaryColor);
    this.tertiaryTextColor = invert_default(this.tertiaryColor);
    this.mainBkg = "#111113";
    this.secondBkg = "calculated";
    this.mainContrastColor = "lightgrey";
    this.darkTextColor = lighten_default(invert_default("#323D47"), 10);
    this.border1 = "#ccc";
    this.border2 = rgba_default(255, 255, 255, 0.25);
    this.arrowheadColor = invert_default(this.background);
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.labelBackground = "#111113";
    this.textColor = "#ccc";
    this.THEME_COLOR_LIMIT = 12;
    this.radius = 12;
    this.strokeWidth = 2;
    this.noteBkgColor = this.noteBkgColor ?? "#FEF9C3";
    this.noteTextColor = this.noteTextColor ?? "#28253D";
    this.THEME_COLOR_LIMIT = 12;
    this.fontFamily = '"Recursive Variable", arial, sans-serif';
    this.fontSize = "14px";
    this.nodeBorder = "#FFFFFF";
    this.stateBorder = "#FFFFFF";
    this.useGradient = false;
    this.gradientStart = "#0042eb";
    this.gradientStop = "#eb0042";
    this.dropShadow = "url(#drop-shadow)";
    this.nodeShadow = true;
    this.archEdgeColor = "calculated";
    this.archEdgeArrowColor = "calculated";
    this.archEdgeWidth = "3";
    this.archGroupBorderColor = this.primaryBorderColor;
    this.archGroupBorderWidth = "2px";
    this.clusterBkg = "#1E1A2E";
    this.clusterBorder = "#BDBCCC";
    this.noteBorderColor = "#FACC15";
    this.noteFontWeight = 600;
    this.borderColorArray = [
      "#E879F9",
      //Fuchsia-400
      "#2DD4BF",
      //Teal-400
      "#FB923C",
      //Orange-400
      "#22D3EE",
      // Cyan-400
      "#4ADE80",
      // Green-400
      "#A78BFA",
      //Violet-400
      "#F87171",
      //red-400
      "#FACC15",
      //yellow-400
      "#818CF8",
      //indigo-400
      "#A3E635 ",
      //Lime-400
      "#38BDF8",
      //Sky-400
      "#FB7185"
      //Rose-400
    ];
    this.bkgColorArray = [];
    this.usecaseActorBorder = "#A78BFA";
    this.usecaseBorder = "#2DD4BF";
    this.usecaseBoundaryBorder = "#BDBCCC";
    this.usecaseIncludeLine = "#38BDF8";
    this.usecaseExtendLine = "#FB923C";
    this.filterColor = "#FFFFFF";
  }
  updateColors() {
    this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#FFFFFF");
    this.secondaryColor = this.secondaryColor || adjust_default(this.primaryColor, { h: -120 });
    this.tertiaryColor = this.tertiaryColor || adjust_default(this.primaryColor, { h: 180, l: 5 });
    this.primaryBorderColor = this.primaryBorderColor || mkBorder(this.primaryColor, this.darkMode);
    this.secondaryBorderColor = this.secondaryBorderColor || mkBorder(this.secondaryColor, this.darkMode);
    this.tertiaryBorderColor = this.tertiaryBorderColor || mkBorder(this.tertiaryColor, this.darkMode);
    this.noteBorderColor = this.noteBorderColor || mkBorder(this.noteBkgColor, this.darkMode);
    this.noteBkgColor = this.noteBkgColor || "#fff5ad";
    this.noteTextColor = this.noteTextColor || "#FFFFFF";
    this.secondaryTextColor = this.secondaryTextColor || invert_default(this.secondaryColor);
    this.tertiaryTextColor = this.tertiaryTextColor || invert_default(this.tertiaryColor);
    this.lineColor = this.lineColor || invert_default(this.background);
    this.arrowheadColor = this.arrowheadColor || invert_default(this.background);
    this.textColor = this.textColor || this.primaryTextColor;
    this.border2 = this.border2 || this.tertiaryBorderColor;
    this.nodeBkg = this.nodeBkg || this.primaryColor;
    this.mainBkg = this.mainBkg || this.primaryColor;
    this.secondBkg = this.secondBkg === "calculated" ? lighten_default(this.mainBkg, 16) : this.secondBkg;
    this.nodeBorder = this.nodeBorder || this.border1;
    this.clusterBkg = this.clusterBkg || this.tertiaryColor;
    this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor;
    this.bpmnLaneBkg = this.bpmnLaneBkg || this.clusterBkg;
    this.bpmnPoolBorder = this.bpmnPoolBorder || this.clusterBorder;
    this.bpmnMessageFlow = this.bpmnMessageFlow || this.lineColor;
    this.defaultLinkColor = this.defaultLinkColor || this.lineColor;
    this.titleColor = this.titleColor || this.tertiaryTextColor;
    this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.nodeTextColor = this.nodeTextColor || this.primaryTextColor;
    this.flowContainerStroke = this.flowContainerStroke || this.secondaryBorderColor;
    this.actorBorder = "#FFFFFF";
    this.signalColor = "#FFFFFF";
    this.labelBoxBorderColor = "#BDBCCC";
    this.actorBorder = this.actorBorder || this.primaryBorderColor;
    this.actorBkg = this.actorBkg || this.mainBkg;
    this.actorTextColor = this.actorTextColor || this.primaryTextColor;
    this.actorLineColor = this.actorLineColor || this.actorBorder;
    this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg;
    this.signalColor = this.signalColor || this.textColor;
    this.signalTextColor = this.signalTextColor || this.textColor;
    this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder;
    this.labelTextColor = this.labelTextColor || this.actorTextColor;
    this.loopTextColor = this.loopTextColor || this.actorTextColor;
    this.activationBorderColor = this.activationBorderColor || darken_default(this.secondaryColor, 10);
    this.activationBkgColor = this.activationBkgColor || this.secondaryColor;
    this.sequenceNumberColor = this.sequenceNumberColor || invert_default(this.lineColor);
    this.rectBkgColor = this.rectBkgColor || this.tertiaryColor;
    this.rootLabelColor = "#FFFFFF";
    this.excludeBkgColor = this.excludeBkgColor || "#eeeeee";
    this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor;
    this.taskBkgColor = this.taskBkgColor || this.primaryColor;
    this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor;
    this.activeTaskBkgColor = this.activeTaskBkgColor || lighten_default(this.primaryColor, 23);
    this.gridColor = this.gridColor || "lightgrey";
    this.doneTaskBkgColor = this.doneTaskBkgColor || this.secondBkg;
    this.doneTaskBorderColor = this.doneTaskBorderColor || "grey";
    this.critBorderColor = this.critBorderColor || "#ff8888";
    this.critBkgColor = this.critBkgColor || "red";
    this.todayLineColor = this.todayLineColor || "red";
    this.taskTextColor = this.taskTextColor || this.textColor;
    this.vertLineColor = this.vertLineColor || this.primaryBorderColor;
    this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor;
    this.taskTextLightColor = this.taskTextLightColor || this.textColor;
    this.taskTextColor = this.taskTextColor || this.primaryTextColor;
    this.taskTextDarkColor = this.taskTextDarkColor || this.textColor;
    this.taskTextClickableColor = this.taskTextClickableColor || "#003163";
    this.archEdgeColor = this.lineColor;
    this.archEdgeArrowColor = this.lineColor;
    this.personBorder = this.personBorder || this.primaryBorderColor;
    this.personBkg = this.personBkg || this.mainBkg;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.transitionLabelColor = this.transitionLabelColor || this.textColor;
    this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor;
    this.stateEdgeLabelBackground = this.stateEdgeLabelBackground || "#16141F";
    this.stateBkg = this.stateBkg || this.mainBkg;
    this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg;
    this.compositeBackground = this.compositeBackground || "#16141F";
    this.altBackground = this.altBackground || "#16141F";
    this.compositeTitleBackground = this.compositeTitleBackground || "#16141F";
    this.compositeBorder = this.compositeBorder || this.nodeBorder;
    this.innerEndBackground = this.nodeBorder;
    this.errorBkgColor = this.errorBkgColor || this.tertiaryColor;
    this.errorTextColor = this.errorTextColor || this.tertiaryTextColor;
    this.transitionColor = this.transitionColor || this.lineColor;
    this.specialStateColor = this.lineColor;
    this.cScale0 = this.cScale0 || "#f4a8ff";
    this.cScale1 = this.cScale1 || "#46ecd5";
    this.cScale2 = this.cScale2 || "#ffb86a";
    this.cScale3 = this.cScale3 || "#dab2ff";
    this.cScale4 = this.cScale4 || "#7bf1a8";
    this.cScale5 = this.cScale5 || "#c4b4ff";
    this.cScale6 = this.cScale6 || "#ffa2a2";
    this.cScale7 = this.cScale7 || "#ffdf20";
    this.cScale8 = this.cScale8 || "#a3b3ff";
    this.cScale9 = this.cScale9 || "#bbf451";
    this.cScale10 = this.cScale10 || "#74d4ff";
    this.cScale11 = this.cScale11 || "#ffa1ad";
    this.sectionBkgColor = this.sectionBkgColor || this.cScale0;
    this.sectionBkgColor2 = this.sectionBkgColor2 || this.cScale1;
    this.altSectionBkgColor = this.altSectionBkgColor || this.background;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleInv" + i] = this["cScaleInv" + i] || invert_default(this["cScale" + i]);
    }
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      if (this.darkMode) {
        this["cScalePeer" + i] = this["cScalePeer" + i] || lighten_default(this["cScale" + i], 10);
      } else {
        this["cScalePeer" + i] = this["cScalePeer" + i] || darken_default(this["cScale" + i], 10);
      }
    }
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["cScaleLabel" + i] = darken_default(this["cScale" + i], 75);
    }
    const multiplier = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++) {
      this["surface" + i] = this["surface" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (5 + i * 3) });
      this["surfacePeer" + i] = this["surfacePeer" + i] || adjust_default(this.mainBkg, { h: 180, s: -15, l: multiplier * (8 + i * 3) });
    }
    this.classText = this.classText || this.textColor;
    const journeyFills = [
      "#701a75",
      // Fuchsia-900
      "#134e4a",
      // Teal-900
      "#7c2d12",
      // Orange-900
      "#581c87",
      // Purple-900
      "#14532d",
      // Green-900
      "#4c1d95",
      // Violet-900
      "#7f1d1d",
      // Red-900
      "#713f12"
      // Yellow-900
    ];
    journeyFills.forEach((fill, i) => {
      this["fillType" + i] = this["fillType" + i] || fill;
    });
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++) {
      this["pie" + (i + 1)] = this["pie" + (i + 1)] || this["cScale" + i];
    }
    this.pieTitleTextSize = this.pieTitleTextSize || "25px";
    this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor;
    this.pieSectionTextSize = this.pieSectionTextSize || "17px";
    this.pieSectionTextColor = this.pieSectionTextColor || "#28253D";
    this.pieLegendTextSize = this.pieLegendTextSize || "17px";
    this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor;
    this.pieStrokeColor = this.pieStrokeColor || "black";
    this.pieStrokeWidth = this.pieStrokeWidth || "2px";
    this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px";
    this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black";
    this.pieOpacity = this.pieOpacity || "0.7";
    for (let i = 0; i < 8; i++) {
      this["venn" + (i + 1)] = this["venn" + (i + 1)] ?? this.borderColorArray[i % this.borderColorArray.length];
    }
    this.vennTitleTextColor = this.vennTitleTextColor ?? this.titleColor;
    this.vennSetTextColor = this.vennSetTextColor ?? this.textColor;
    this.quadrant1Fill = this.quadrant1Fill || this.primaryColor;
    this.quadrant2Fill = this.quadrant2Fill || adjust_default(this.primaryColor, { r: 5, g: 5, b: 5 });
    this.quadrant3Fill = this.quadrant3Fill || adjust_default(this.primaryColor, { r: 10, g: 10, b: 10 });
    this.quadrant4Fill = this.quadrant4Fill || adjust_default(this.primaryColor, { r: 15, g: 15, b: 15 });
    this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor;
    this.quadrant2TextFill = this.quadrant2TextFill || adjust_default(this.primaryTextColor, { r: -5, g: -5, b: -5 });
    this.quadrant3TextFill = this.quadrant3TextFill || adjust_default(this.primaryTextColor, { r: -10, g: -10, b: -10 });
    this.quadrant4TextFill = this.quadrant4TextFill || adjust_default(this.primaryTextColor, { r: -15, g: -15, b: -15 });
    this.quadrantPointFill = this.quadrantPointFill || is_dark_default(this.quadrant1Fill) ? lighten_default(this.quadrant1Fill) : darken_default(this.quadrant1Fill);
    this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor;
    this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor;
    this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor;
    this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor;
    this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor;
    this.xyChart = {
      backgroundColor: this.xyChart?.backgroundColor || this.background,
      titleColor: this.xyChart?.titleColor || this.primaryTextColor,
      legendTextColor: this.xyChart?.legendTextColor || this.primaryTextColor,
      xAxisTitleColor: this.xyChart?.xAxisTitleColor || this.primaryTextColor,
      xAxisLabelColor: this.xyChart?.xAxisLabelColor || this.primaryTextColor,
      xAxisTickColor: this.xyChart?.xAxisTickColor || this.primaryTextColor,
      xAxisLineColor: this.xyChart?.xAxisLineColor || this.primaryTextColor,
      yAxisTitleColor: this.xyChart?.yAxisTitleColor || this.primaryTextColor,
      yAxisLabelColor: this.xyChart?.yAxisLabelColor || this.primaryTextColor,
      yAxisTickColor: this.xyChart?.yAxisTickColor || this.primaryTextColor,
      yAxisLineColor: this.xyChart?.yAxisLineColor || this.primaryTextColor,
      plotColorPalette: this.xyChart?.plotColorPalette || "#FFF4DD,#FFD8B1,#FFA07A,#ECEFF1,#D6DBDF,#C3E0A8,#FFB6A4,#FFD74D,#738FA7,#FFFFF0"
    };
    this.requirementBackground = this.requirementBackground || this.primaryColor;
    this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor;
    this.requirementBorderSize = this.requirementBorderSize || "1";
    this.requirementTextColor = this.requirementTextColor || this.primaryTextColor;
    this.relationColor = this.relationColor || this.lineColor;
    this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? darken_default(this.secondaryColor, 30) : this.secondaryColor);
    this.relationLabelColor = this.relationLabelColor || this.actorTextColor;
    this.requirementEdgeLabelBackground = "#16141F";
    this.git0 = this.git0 || this.primaryColor;
    this.git1 = this.git1 || this.secondaryColor;
    this.git2 = this.git2 || this.tertiaryColor;
    this.git3 = this.git3 || adjust_default(this.primaryColor, { h: -30 });
    this.git4 = this.git4 || adjust_default(this.primaryColor, { h: -60 });
    this.git5 = this.git5 || adjust_default(this.primaryColor, { h: -90 });
    this.git6 = this.git6 || adjust_default(this.primaryColor, { h: 60 });
    this.git7 = this.git7 || adjust_default(this.primaryColor, { h: 120 });
    if (this.darkMode) {
      this.git0 = lighten_default(this.git0, 25);
      this.git1 = lighten_default(this.git1, 25);
      this.git2 = lighten_default(this.git2, 25);
      this.git3 = lighten_default(this.git3, 25);
      this.git4 = lighten_default(this.git4, 25);
      this.git5 = lighten_default(this.git5, 25);
      this.git6 = lighten_default(this.git6, 25);
      this.git7 = lighten_default(this.git7, 25);
    } else {
      this.git0 = darken_default(this.git0, 25);
      this.git1 = darken_default(this.git1, 25);
      this.git2 = darken_default(this.git2, 25);
      this.git3 = darken_default(this.git3, 25);
      this.git4 = darken_default(this.git4, 25);
      this.git5 = darken_default(this.git5, 25);
      this.git6 = darken_default(this.git6, 25);
      this.git7 = darken_default(this.git7, 25);
    }
    this.gitInv0 = this.gitInv0 || invert_default(this.git0);
    this.gitInv1 = this.gitInv1 || invert_default(this.git1);
    this.gitInv2 = this.gitInv2 || invert_default(this.git2);
    this.gitInv3 = this.gitInv3 || invert_default(this.git3);
    this.gitInv4 = this.gitInv4 || invert_default(this.git4);
    this.gitInv5 = this.gitInv5 || invert_default(this.git5);
    this.gitInv6 = this.gitInv6 || invert_default(this.git6);
    this.gitInv7 = this.gitInv7 || invert_default(this.git7);
    this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor;
    this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor;
    this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor;
    this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor;
    this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor;
    this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor;
    this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor;
    this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor;
    this.tagLabelColor = this.tagLabelColor || this.primaryTextColor;
    this.tagLabelBackground = this.tagLabelBackground || this.primaryColor;
    this.tagLabelBorder = this.tagBorder || this.primaryBorderColor;
    this.tagLabelFontSize = this.tagLabelFontSize || "10px";
    this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor;
    this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor;
    this.commitLabelFontSize = this.commitLabelFontSize || "10px";
    this.commitLineColor = this.commitLineColor ?? "#BDBCCC";
    this.fontWeight = 600;
    this.erEdgeLabelBackground = "#16141F";
    this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || oldAttributeBackgroundColorOdd;
    this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || oldAttributeBackgroundColorEven;
  }
  calculate(overrides) {
    if (typeof overrides !== "object") {
      this.updateColors();
      return;
    }
    const keys2 = Object.keys(overrides);
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
    this.updateColors();
    keys2.forEach((k) => {
      this[k] = overrides[k];
    });
  }
};
var getThemeVariables11 = (userOverrides) => {
  const theme = new Theme11();
  theme.calculate(userOverrides);
  return theme;
};

// packages/mermaid/src/themes/index.js
var themes_default = {
  base: {
    getThemeVariables
  },
  dark: {
    getThemeVariables: getThemeVariables2
  },
  default: {
    getThemeVariables: getThemeVariables3
  },
  forest: {
    getThemeVariables: getThemeVariables4
  },
  neutral: {
    getThemeVariables: getThemeVariables5
  },
  neo: {
    getThemeVariables: getThemeVariables6
  },
  "neo-dark": {
    getThemeVariables: getThemeVariables7
  },
  redux: {
    getThemeVariables: getThemeVariables8
  },
  "redux-dark": {
    getThemeVariables: getThemeVariables9
  },
  "redux-color": {
    getThemeVariables: getThemeVariables10
  },
  "redux-dark-color": {
    getThemeVariables: getThemeVariables11
  }
};

// packages/mermaid/src/schemas/config.schema.yaml?only-defaults=true
var config_schema_default = {
  "flowchart": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "titleTopMargin": 25,
    "subGraphTitleMargin": {
      "top": 0,
      "bottom": 0
    },
    "diagramPadding": 8,
    "htmlLabels": null,
    "nodeSpacing": 50,
    "rankSpacing": 50,
    "curve": "basis",
    "padding": 15,
    "wrappingWidth": 120,
    "minNodeWidth": 120,
    "inheritDir": false
  },
  "swimlane": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "layout": "swimlane",
    "lineHops": "arc",
    "ignoreCrossLaneEdges": true,
    "optimizeRanksByCrossings": true,
    "automaticLaneOrdering": false
  },
  "agentflow": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "titleTopMargin": 25,
    "diagramPadding": 8,
    "nodeSpacing": 50,
    "rankSpacing": 50,
    "wrappingWidth": 120,
    "minNodeWidth": 120
  },
  "sequence": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "hideUnusedParticipants": false,
    "activationWidth": 10,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "actorMargin": 50,
    "width": 150,
    "height": 65,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "mirrorActors": true,
    "forceMenus": false,
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "showSequenceNumbers": false,
    "actorFontSize": 14,
    "actorFontFamily": '"Open Sans", sans-serif',
    "actorFontWeight": 400,
    "noteFontSize": 14,
    "noteFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
    "noteFontWeight": 400,
    "noteAlign": "center",
    "messageFontSize": 16,
    "messageFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
    "messageFontWeight": 400,
    "wrap": false,
    "wrapPadding": 10,
    "labelBoxWidth": 50,
    "labelBoxHeight": 20
  },
  "gantt": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "barHeight": 20,
    "barGap": 4,
    "topPadding": 50,
    "rightPadding": 75,
    "leftPadding": 75,
    "gridLineStartPadding": 35,
    "fontSize": 11,
    "sectionFontSize": 11,
    "numberSectionStyles": 4,
    "axisFormat": "%Y-%m-%d",
    "topAxis": false,
    "displayMode": "",
    "weekday": "sunday"
  },
  "journey": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "leftMargin": 150,
    "maxLabelWidth": 360,
    "width": 150,
    "height": 50,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "taskFontSize": 14,
    "taskFontFamily": '"Open Sans", sans-serif',
    "taskMargin": 50,
    "activationWidth": 10,
    "textPlacement": "fo",
    "actorColours": [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    "sectionFills": [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    "sectionColours": [
      "#fff"
    ],
    "titleColor": "",
    "titleFontFamily": '"trebuchet ms", verdana, arial, sans-serif',
    "titleFontSize": "4ex"
  },
  "class": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "titleTopMargin": 25,
    "arrowMarkerAbsolute": false,
    "dividerMargin": 10,
    "padding": 5,
    "textHeight": 10,
    "htmlLabels": false,
    "hideEmptyMembersBox": false,
    "hierarchicalNamespaces": true
  },
  "state": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "layout": "elk",
    "wrappingWidth": 120,
    "minNodeWidth": 120,
    "titleTopMargin": 25,
    "dividerMargin": 10,
    "sizeUnit": 5,
    "padding": 8,
    "textHeight": 10,
    "titleShift": -15,
    "noteMargin": 10,
    "forkWidth": 70,
    "forkHeight": 7,
    "miniPadding": 2,
    "fontSizeFactor": 5.02,
    "fontSize": 24,
    "labelHeight": 16,
    "edgeLengthFactor": "20",
    "compositTitleSize": 35,
    "radius": 5
  },
  "er": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "titleTopMargin": 25,
    "diagramPadding": 20,
    "layoutDirection": "TB",
    "minEntityWidth": 100,
    "minEntityHeight": 75,
    "entityPadding": 15,
    "nodeSpacing": 140,
    "rankSpacing": 80,
    "stroke": "gray",
    "fill": "honeydew",
    "fontSize": 12
  },
  "pie": {
    "useMaxWidth": true,
    "textPosition": 0.75,
    "donutHole": 0,
    "legendPosition": "right",
    "highlightSlice": ""
  },
  "quadrantChart": {
    "useMaxWidth": true,
    "chartWidth": 500,
    "chartHeight": 500,
    "titleFontSize": 20,
    "titlePadding": 10,
    "quadrantPadding": 5,
    "xAxisLabelPadding": 5,
    "yAxisLabelPadding": 5,
    "xAxisLabelFontSize": 16,
    "yAxisLabelFontSize": 16,
    "quadrantLabelFontSize": 16,
    "quadrantTextTopPadding": 5,
    "pointTextPadding": 5,
    "pointLabelFontSize": 12,
    "pointRadius": 5,
    "xAxisPosition": "top",
    "yAxisPosition": "left",
    "quadrantInternalBorderStrokeWidth": 1,
    "quadrantExternalBorderStrokeWidth": 2
  },
  "xyChart": {
    "useMaxWidth": true,
    "width": 700,
    "height": 500,
    "titleFontSize": 20,
    "titlePadding": 10,
    "showDataLabel": false,
    "showDataLabelOutsideBar": false,
    "showTitle": true,
    "showLegend": true,
    "legendFontSize": 14,
    "legendPadding": 10,
    "xAxis": {
      "$ref": "#/$defs/XYChartAxisConfig",
      "showLabel": true,
      "labelFontSize": 14,
      "labelPadding": 5,
      "showTitle": true,
      "titleFontSize": 16,
      "titlePadding": 5,
      "showTick": true,
      "tickLength": 5,
      "tickWidth": 2,
      "showAxisLine": true,
      "axisLineWidth": 2,
      "labelRotation": 0
    },
    "yAxis": {
      "$ref": "#/$defs/XYChartAxisConfig",
      "showLabel": true,
      "labelFontSize": 14,
      "labelPadding": 5,
      "showTitle": true,
      "titleFontSize": 16,
      "titlePadding": 5,
      "showTick": true,
      "tickLength": 5,
      "tickWidth": 2,
      "showAxisLine": true,
      "axisLineWidth": 2,
      "labelRotation": 0
    },
    "chartOrientation": "vertical",
    "plotReservedSpacePercent": 50
  },
  "requirement": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "rect_fill": "#f9f9f9",
    "text_color": "#333",
    "rect_border_size": "0.5px",
    "rect_border_color": "#bbb",
    "rect_min_width": 200,
    "rect_min_height": 200,
    "fontSize": 14,
    "rect_padding": 10,
    "line_height": 20
  },
  "mindmap": {
    "useMaxWidth": true,
    "padding": 10,
    "maxNodeWidth": 200,
    "layoutAlgorithm": "cose-bilkent"
  },
  "ishikawa": {
    "useMaxWidth": true,
    "diagramPadding": 20
  },
  "kanban": {
    "useMaxWidth": true,
    "padding": 8,
    "sectionWidth": 200,
    "ticketBaseUrl": ""
  },
  "timeline": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "leftMargin": 150,
    "width": 150,
    "height": 50,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35,
    "messageAlign": "center",
    "bottomMarginAdj": 1,
    "rightAngles": false,
    "taskFontSize": 14,
    "taskFontFamily": '"Open Sans", sans-serif',
    "taskMargin": 50,
    "activationWidth": 10,
    "textPlacement": "fo",
    "actorColours": [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    "sectionFills": [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    "sectionColours": [
      "#fff"
    ],
    "disableMulticolor": false
  },
  "gitGraph": {
    "useMaxWidth": true,
    "titleTopMargin": 25,
    "diagramPadding": 8,
    "nodeLabel": {
      "width": 75,
      "height": 100,
      "x": -25,
      "y": 0
    },
    "mainBranchName": "main",
    "mainBranchOrder": 0,
    "showCommitLabel": true,
    "showBranches": true,
    "rotateCommitLabel": true,
    "parallelCommits": false,
    "arrowMarkerAbsolute": false
  },
  "c4": {
    "useMaxWidth": true,
    "diagramMarginX": 50,
    "diagramMarginY": 10,
    "c4ShapeMargin": 50,
    "c4ShapePadding": 20,
    "width": 216,
    "height": 60,
    "boxMargin": 10,
    "c4ShapeInRow": 4,
    "nextLinePaddingX": 0,
    "c4BoundaryInRow": 2,
    "personFontSize": 14,
    "personFontFamily": '"Open Sans", sans-serif',
    "personFontWeight": "normal",
    "external_personFontSize": 14,
    "external_personFontFamily": '"Open Sans", sans-serif',
    "external_personFontWeight": "normal",
    "systemFontSize": 14,
    "systemFontFamily": '"Open Sans", sans-serif',
    "systemFontWeight": "normal",
    "external_systemFontSize": 14,
    "external_systemFontFamily": '"Open Sans", sans-serif',
    "external_systemFontWeight": "normal",
    "system_dbFontSize": 14,
    "system_dbFontFamily": '"Open Sans", sans-serif',
    "system_dbFontWeight": "normal",
    "external_system_dbFontSize": 14,
    "external_system_dbFontFamily": '"Open Sans", sans-serif',
    "external_system_dbFontWeight": "normal",
    "system_queueFontSize": 14,
    "system_queueFontFamily": '"Open Sans", sans-serif',
    "system_queueFontWeight": "normal",
    "external_system_queueFontSize": 14,
    "external_system_queueFontFamily": '"Open Sans", sans-serif',
    "external_system_queueFontWeight": "normal",
    "boundaryFontSize": 14,
    "boundaryFontFamily": '"Open Sans", sans-serif',
    "boundaryFontWeight": "normal",
    "messageFontSize": 12,
    "messageFontFamily": '"Open Sans", sans-serif',
    "messageFontWeight": "normal",
    "containerFontSize": 14,
    "containerFontFamily": '"Open Sans", sans-serif',
    "containerFontWeight": "normal",
    "external_containerFontSize": 14,
    "external_containerFontFamily": '"Open Sans", sans-serif',
    "external_containerFontWeight": "normal",
    "container_dbFontSize": 14,
    "container_dbFontFamily": '"Open Sans", sans-serif',
    "container_dbFontWeight": "normal",
    "external_container_dbFontSize": 14,
    "external_container_dbFontFamily": '"Open Sans", sans-serif',
    "external_container_dbFontWeight": "normal",
    "container_queueFontSize": 14,
    "container_queueFontFamily": '"Open Sans", sans-serif',
    "container_queueFontWeight": "normal",
    "external_container_queueFontSize": 14,
    "external_container_queueFontFamily": '"Open Sans", sans-serif',
    "external_container_queueFontWeight": "normal",
    "componentFontSize": 14,
    "componentFontFamily": '"Open Sans", sans-serif',
    "componentFontWeight": "normal",
    "external_componentFontSize": 14,
    "external_componentFontFamily": '"Open Sans", sans-serif',
    "external_componentFontWeight": "normal",
    "component_dbFontSize": 14,
    "component_dbFontFamily": '"Open Sans", sans-serif',
    "component_dbFontWeight": "normal",
    "external_component_dbFontSize": 14,
    "external_component_dbFontFamily": '"Open Sans", sans-serif',
    "external_component_dbFontWeight": "normal",
    "component_queueFontSize": 14,
    "component_queueFontFamily": '"Open Sans", sans-serif',
    "component_queueFontWeight": "normal",
    "external_component_queueFontSize": 14,
    "external_component_queueFontFamily": '"Open Sans", sans-serif',
    "external_component_queueFontWeight": "normal",
    "wrap": true,
    "wrapPadding": 10,
    "person_bg_color": "#08427B",
    "person_border_color": "#073B6F",
    "external_person_bg_color": "#686868",
    "external_person_border_color": "#8A8A8A",
    "system_bg_color": "#1168BD",
    "system_border_color": "#3C7FC0",
    "system_db_bg_color": "#1168BD",
    "system_db_border_color": "#3C7FC0",
    "system_queue_bg_color": "#1168BD",
    "system_queue_border_color": "#3C7FC0",
    "external_system_bg_color": "#999999",
    "external_system_border_color": "#8A8A8A",
    "external_system_db_bg_color": "#999999",
    "external_system_db_border_color": "#8A8A8A",
    "external_system_queue_bg_color": "#999999",
    "external_system_queue_border_color": "#8A8A8A",
    "container_bg_color": "#438DD5",
    "container_border_color": "#3C7FC0",
    "container_db_bg_color": "#438DD5",
    "container_db_border_color": "#3C7FC0",
    "container_queue_bg_color": "#438DD5",
    "container_queue_border_color": "#3C7FC0",
    "external_container_bg_color": "#B3B3B3",
    "external_container_border_color": "#A6A6A6",
    "external_container_db_bg_color": "#B3B3B3",
    "external_container_db_border_color": "#A6A6A6",
    "external_container_queue_bg_color": "#B3B3B3",
    "external_container_queue_border_color": "#A6A6A6",
    "component_bg_color": "#85BBF0",
    "component_border_color": "#78A8D8",
    "component_db_bg_color": "#85BBF0",
    "component_db_border_color": "#78A8D8",
    "component_queue_bg_color": "#85BBF0",
    "component_queue_border_color": "#78A8D8",
    "external_component_bg_color": "#CCCCCC",
    "external_component_border_color": "#BFBFBF",
    "external_component_db_bg_color": "#CCCCCC",
    "external_component_db_border_color": "#BFBFBF",
    "external_component_queue_bg_color": "#CCCCCC",
    "external_component_queue_border_color": "#BFBFBF"
  },
  "sankey": {
    "useMaxWidth": true,
    "width": 600,
    "height": 400,
    "linkColor": "gradient",
    "nodeAlignment": "justify",
    "showValues": true,
    "prefix": "",
    "suffix": "",
    "nodeWidth": 10,
    "nodePadding": 12,
    "labelStyle": "legacy"
  },
  "block": {
    "useMaxWidth": true,
    "padding": 8
  },
  "packet": {
    "useMaxWidth": true,
    "rowHeight": 32,
    "bitWidth": 32,
    "bitsPerRow": 32,
    "showBits": true,
    "bitOrder": "ascending",
    "paddingX": 5,
    "paddingY": 5
  },
  "treeView": {
    "useMaxWidth": true,
    "rowIndent": 10,
    "paddingX": 5,
    "paddingY": 5,
    "lineThickness": 1,
    "showIcons": false,
    "defaultIconPack": "",
    "filenameIcons": {},
    "extensionIcons": {}
  },
  "architecture": {
    "useMaxWidth": true,
    "padding": 40,
    "iconSize": 80,
    "fontSize": 16,
    "randomize": false,
    "nodeSeparation": 75,
    "idealEdgeLengthMultiplier": 1.5,
    "edgeElasticity": 0.45,
    "numIter": 2500,
    "seed": 1
  },
  "eventmodeling": {
    "useMaxWidth": true,
    "padding": 30,
    "rowHeight": 32
  },
  "radar": {
    "useMaxWidth": true,
    "width": 600,
    "height": 600,
    "marginTop": 50,
    "marginRight": 50,
    "marginBottom": 50,
    "marginLeft": 50,
    "axisScaleFactor": 1,
    "axisLabelFactor": 1.05,
    "curveTension": 0.17
  },
  "usecase": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "wrappingWidth": 120,
    "minNodeWidth": 120,
    "actorFontSize": 14,
    "actorFontFamily": '"Open Sans", sans-serif',
    "actorFontWeight": "normal",
    "usecaseFontSize": 12,
    "usecaseFontFamily": '"Open Sans", sans-serif',
    "usecaseFontWeight": "normal",
    "nodeSpacing": 50,
    "rankSpacing": 50,
    "diagramPadding": 20,
    "colorScheme": "role"
  },
  "venn": {
    "useMaxWidth": true,
    "theme": "redux-color",
    "look": "neo",
    "width": 800,
    "height": 450,
    "padding": 8,
    "useDebugLayout": false
  },
  "cynefin": {
    "useMaxWidth": true,
    "width": 800,
    "height": 600,
    "padding": 40,
    "showDomainDescriptions": true,
    "boundaryAmplitude": 8,
    "seed": 0
  },
  "theme": "default",
  "look": "classic",
  "handDrawnSeed": 0,
  "layout": "elk",
  "maxTextSize": 5e4,
  "maxEdges": 500,
  "darkMode": false,
  "fontFamily": '"trebuchet ms", verdana, arial, sans-serif;',
  "logLevel": 5,
  "securityLevel": "strict",
  "startOnLoad": true,
  "arrowMarkerAbsolute": false,
  "secure": [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize",
    "suppressErrorRendering",
    "maxEdges"
  ],
  "legacyMathML": false,
  "forceLegacyMathML": false,
  "deterministicIds": false,
  "fontSize": 16,
  "markdownAutoWrap": true,
  "suppressErrorRendering": false
};

// packages/mermaid/src/defaultConfig.ts
var config = {
  ...config_schema_default,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  elk: {
    // mergeEdges is needed here to be considered
    mergeEdges: false,
    straightenEdges: true,
    lineHops: true,
    preset: "default",
    // Left undefined so `??` can tell "the user chose this" from "nobody did",
    // which is what lets `elk.preset` supply a value while an explicit setting
    // still wins. Listed rather than omitted so `configKeys` still finds them.
    nodePlacementStrategy: void 0,
    layeringStrategy: void 0,
    cycleBreakingStrategy: void 0,
    layeringLayerBound: 4,
    nodePlacementAlignment: void 0,
    forceNodeModelOrder: false,
    considerModelOrder: "NODES_AND_EDGES",
    keepEntryNodeOnTop: false
  },
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: themes_default.default.getThemeVariables(),
  sequence: {
    ...config_schema_default.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  class: {
    // Built from scratch rather than spread from the schema, so the appearance defaults
    // have to be carried across by hand; the rest stay off, `padding` above all — the
    // schema default of 5 would change class node dimensions on the unified renderer.
    // Optional chaining: the docs scripts short-circuit `.schema.yaml` to `{}`.
    theme: config_schema_default.class?.theme,
    look: config_schema_default.class?.look,
    layout: config_schema_default.class?.layout,
    hideEmptyMembersBox: false,
    hierarchicalNamespaces: true
  },
  gantt: {
    ...config_schema_default.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...config_schema_default.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    flowchart: {
      ...config_schema_default.flowchart,
      inheritDir: false
      // default to legacy behavior
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...config_schema_default.pie,
    useWidth: 984
  },
  xyChart: {
    ...config_schema_default.xyChart,
    useWidth: void 0
  },
  requirement: {
    ...config_schema_default.requirement,
    useWidth: void 0
  },
  packet: {
    ...config_schema_default.packet
  },
  eventmodeling: {
    ...config_schema_default.eventmodeling
  },
  treeView: {
    ...config_schema_default.treeView,
    useWidth: void 0
  },
  radar: {
    ...config_schema_default.radar
  },
  usecase: {
    ...config_schema_default.usecase
  },
  bpmn: {
    ...config_schema_default.bpmn
  },
  railroad: {
    ...config_schema_default.railroad,
    // Railroad colors and typography derive from the active theme unless explicitly overridden.
    fontSize: void 0,
    fontFamily: void 0,
    terminalFill: void 0,
    terminalStroke: void 0,
    terminalTextColor: void 0,
    nonTerminalFill: void 0,
    nonTerminalStroke: void 0,
    nonTerminalTextColor: void 0,
    lineColor: void 0,
    markerFill: void 0,
    commentFill: void 0,
    commentStroke: void 0,
    commentTextColor: void 0,
    specialFill: void 0,
    specialStroke: void 0,
    ruleNameColor: void 0
  },
  ishikawa: {
    ...config_schema_default.ishikawa
  },
  sankey: {
    ...config_schema_default.sankey,
    // Set so that `configKeys` includes this key for sanitizeDirective
    nodeColors: void 0
  },
  treemap: {
    useMaxWidth: true,
    padding: 10,
    diagramPadding: 8,
    showValues: true,
    nodeWidth: 100,
    nodeHeight: 40,
    borderWidth: 1,
    valueFontSize: 12,
    labelFontSize: 14,
    valueFormat: ","
  },
  venn: {
    ...config_schema_default.venn
  },
  cynefin: {
    ...config_schema_default.cynefin
  }
};
var keyify = (obj, prefix = "") => Object.keys(obj).reduce((res, el) => {
  if (Array.isArray(obj[el])) {
    return res;
  } else if (typeof obj[el] === "object" && obj[el] !== null) {
    return [...res, prefix + el, ...keyify(obj[el], "")];
  }
  return [...res, prefix + el];
}, []);
var configKeys = new Set(keyify(config, ""));
var defaultConfig_default = config;

// packages/mermaid/src/config.ts
var defaultConfig = Object.freeze(defaultConfig_default);
var evaluate = (val) => val === false || ["false", "null", "0"].includes(String(val).trim().toLowerCase()) ? false : true;
var siteConfig = assignWithDepth_default({}, defaultConfig);
var currentConfig = assignWithDepth_default({}, defaultConfig);
var getConfig = () => {
  return assignWithDepth_default({}, currentConfig);
};
var ConfigWarning = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead.",
  FLOWCHART_HTML_LABELS_DEPRECATED: "flowchart.htmlLabels is deprecated. Please use global htmlLabels instead."
};
var issuedWarnings = {};
var issueWarning = (warning) => {
  if (issuedWarnings[warning]) {
    return;
  }
  log.warn(ConfigWarning[warning]);
  issuedWarnings[warning] = true;
};
var getEffectiveHtmlLabels = (config2) => {
  if (config2.flowchart?.htmlLabels != void 0) {
    issueWarning("FLOWCHART_HTML_LABELS_DEPRECATED");
  }
  return evaluate(config2.htmlLabels ?? config2.flowchart?.htmlLabels ?? true);
};

// packages/mermaid/src/diagrams/common/common.ts
var lineBreakRegex = /<\/?br\s*\/?>/gi;
var lineBreakTestRegex = new RegExp(lineBreakRegex.source, "i");
var setupDompurifyHooksIfNotSetup = /* @__PURE__ */ (() => {
  let setup = false;
  return () => {
    if (!setup) {
      setupDompurifyHooks();
      setup = true;
    }
  };
})();
function setupDompurifyHooks() {
  const TEMPORARY_ATTRIBUTE = "data-temp-href-target";
  purify.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute("target")) {
      node.setAttribute(TEMPORARY_ATTRIBUTE, node.getAttribute("target") ?? "");
    }
  });
  purify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(TEMPORARY_ATTRIBUTE)) {
      node.setAttribute("target", node.getAttribute(TEMPORARY_ATTRIBUTE) ?? "");
      node.removeAttribute(TEMPORARY_ATTRIBUTE);
      if (node.getAttribute("target") === "_blank") {
        node.setAttribute("rel", "noopener");
      }
    }
  });
}
var removeScript = (txt) => {
  setupDompurifyHooksIfNotSetup();
  const sanitizedText = purify.sanitize(txt);
  return sanitizedText;
};
var sanitizeMore = (text2, config2) => {
  if (getEffectiveHtmlLabels(config2)) {
    const level = config2.securityLevel;
    if (level === "antiscript" || level === "strict" || level === "sandbox") {
      text2 = removeScript(text2);
    } else if (level !== "loose") {
      text2 = breakToPlaceholder(text2);
      text2 = text2.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      text2 = text2.replace(/=/g, "&equals;");
      text2 = placeholderToBreak(text2);
    }
  }
  return text2;
};
var sanitizeText = (text2, config2) => {
  if (!text2) {
    return text2;
  }
  if (config2.dompurifyConfig) {
    text2 = purify.sanitize(sanitizeMore(text2, config2), config2.dompurifyConfig).toString();
  } else {
    text2 = purify.sanitize(sanitizeMore(text2, config2), {
      FORBID_TAGS: ["style"]
    }).toString();
  }
  return text2;
};
var placeholderToBreak = (s) => {
  return s.replace(/#br#/g, "<br/>");
};
var breakToPlaceholder = (s) => {
  return s.replace(lineBreakRegex, "#br#");
};

// packages/mermaid/src/diagrams/common/commonDb.ts
var accTitle = "";
var diagramTitle = "";
var accDescription = "";
var sanitizeText2 = (txt) => sanitizeText(txt, getConfig());
var clear = () => {
  accTitle = "";
  accDescription = "";
  diagramTitle = "";
};
var setAccTitle = (txt) => {
  accTitle = sanitizeText2(txt).replace(/^\s+/g, "");
};
var getAccTitle = () => accTitle;
var setAccDescription = (txt) => {
  accDescription = sanitizeText2(txt).replace(/\n\s+/g, "\n");
};
var getAccDescription = () => accDescription;
var setDiagramTitle = (txt) => {
  diagramTitle = sanitizeText2(txt);
};
var getDiagramTitle = () => diagramTitle;

// packages/mermaid/src/diagram-api/diagramAPI.ts
var getConfig2 = getConfig;

// packages/mermaid/src/diagrams/bpmn/bpmnDb.ts
var DEFAULT_BPMN_CONFIG = defaultConfig_default.bpmn;
var createState = () => ({
  direction: "LR",
  nodes: [],
  flows: [],
  lanes: [],
  pools: []
});
var state = createState();
var clear2 = () => {
  state = createState();
  clear();
};
var setDirection = (dir) => {
  state.direction = dir;
};
var getDirection = () => state.direction;
var addNode = (node) => {
  state.nodes.push(node);
};
var addFlow = (flow) => {
  state.flows.push(flow);
};
var addPool = (pool) => {
  state.pools.push(pool);
};
var addLane = (lane) => {
  state.lanes.push(lane);
  const pool = state.pools.find((candidate) => candidate.id === lane.poolId);
  pool?.laneIds.push(lane.id);
};
var getModel = () => ({
  direction: state.direction,
  nodes: state.nodes,
  flows: state.flows,
  lanes: state.lanes,
  pools: state.pools
});
var getConfig3 = () => {
  const globalConfig = getConfig2();
  return { ...DEFAULT_BPMN_CONFIG, ...globalConfig.bpmn };
};
var EVENT_SHAPE = {
  start: "circle",
  intermediate: "dbl-circ",
  // single circle; the thick BPMN end border comes from styles.ts
  end: "circle"
};
var eventClasses = (position, trigger) => ["bpmn-node", "bpmn-event", `bpmn-event-${position}`, `bpmn-trigger-${trigger}`].join(" ");
var nodeShape = (node) => {
  switch (node.kind) {
    case "event":
      return EVENT_SHAPE[node.position];
    case "task":
      return "rounded";
    case "gateway":
      return "diam";
    case "data":
      return "doc";
  }
};
var nodeClasses = (node) => {
  switch (node.kind) {
    case "event":
      return eventClasses(node.position, node.trigger);
    case "task":
      return `bpmn-node bpmn-task bpmn-task-${node.subtype}`;
    case "gateway":
      return `bpmn-node bpmn-gateway bpmn-gateway-${node.gateway}`;
    case "data":
      return "bpmn-node bpmn-data";
  }
};
var getData = () => {
  const globalConfig = getConfig2();
  const config2 = getConfig3();
  const sanitize = (value) => sanitizeText(value, globalConfig);
  const nodes = [];
  const edges = [];
  const laneById = new Map(state.lanes.map((lane) => [lane.id, lane]));
  const poolById = new Map(state.pools.map((pool) => [pool.id, pool]));
  const emittedBands = /* @__PURE__ */ new Map();
  const bandForNode = (node) => {
    if (node.laneId && laneById.has(node.laneId)) {
      const lane = laneById.get(node.laneId);
      if (!emittedBands.has(lane.id)) {
        emittedBands.set(lane.id, {
          id: lane.id,
          label: lane.label,
          colorIndex: emittedBands.size
        });
      }
      return lane.id;
    }
    if (node.poolId && poolById.has(node.poolId)) {
      const pool = poolById.get(node.poolId);
      if (!emittedBands.has(pool.id)) {
        emittedBands.set(pool.id, {
          id: pool.id,
          label: pool.label,
          colorIndex: emittedBands.size
        });
      }
      return pool.id;
    }
    return void 0;
  };
  const nodeParent = /* @__PURE__ */ new Map();
  for (const node of state.nodes) {
    nodeParent.set(node.id, bandForNode(node));
  }
  for (const band of emittedBands.values()) {
    nodes.push({
      id: band.id,
      label: sanitize(band.label),
      isGroup: true,
      shape: "roundedWithTitle",
      padding: 30,
      look: globalConfig.look,
      colorIndex: band.colorIndex,
      cssClasses: "bpmn-lane"
    });
  }
  for (const node of state.nodes) {
    const parentId = nodeParent.get(node.id);
    const externalLabel = node.kind === "event" || node.kind === "gateway";
    const padding = node.kind === "event" ? 34 : node.kind === "gateway" ? 30 : node.kind === "task" ? 18 : 12;
    nodes.push({
      id: node.id,
      label: externalLabel ? "" : sanitize(node.label ?? node.id),
      shape: nodeShape(node),
      isGroup: false,
      padding,
      look: globalConfig.look,
      cssClasses: nodeClasses(node),
      ...node.kind === "task" ? { width: 120 } : {},
      ...parentId ? { parentId } : {}
    });
  }
  let flowCounter = 0;
  for (const flow of state.flows) {
    flowCounter += 1;
    const isMessage = flow.kind === "message";
    const isAssociation = flow.kind === "association";
    edges.push({
      id: flow.id || `bpmn-edge-${flowCounter}`,
      start: flow.sourceId,
      end: flow.targetId,
      source: flow.sourceId,
      target: flow.targetId,
      type: "edge",
      classes: ["bpmn-edge", `bpmn-flow-${flow.kind}`, flow.isDefault ? "bpmn-flow-default" : ""].filter(Boolean).join(" "),
      pattern: isMessage ? "dashed" : isAssociation ? "dotted" : "solid",
      // BPMN: sequence = filled arrow; message = hollow-circle source + open arrow;
      // association = no arrowhead.
      arrowTypeStart: isMessage ? "arrow_circle" : "none",
      arrowTypeEnd: isAssociation ? "none" : "arrow_point",
      ...flow.label ? { label: sanitize(flow.label) } : {},
      labelpos: "c",
      thickness: "normal",
      look: globalConfig.look,
      minlen: 1,
      style: []
    });
  }
  return {
    nodes,
    edges,
    config: globalConfig,
    type: "bpmn",
    layoutAlgorithm: "dagre",
    direction: state.direction,
    // Extra breathing room so external event/gateway labels do not collide and
    // nodes are not cramped against lane borders.
    nodeSpacing: Math.max(config2.nodeSpacing, 60),
    rankSpacing: Math.max(config2.rankSpacing, 95),
    diagramPadding: config2.diagramPadding,
    useMaxWidth: config2.useMaxWidth,
    markers: ["point", "circle", "cross"]
  };
};
var db = {
  clear: clear2,
  setDirection,
  getDirection,
  addNode,
  addFlow,
  addPool,
  addLane,
  getModel,
  getData,
  getConfig: getConfig3,
  setAccTitle,
  getAccTitle,
  setDiagramTitle,
  getDiagramTitle,
  getAccDescription,
  setAccDescription
};

// packages/mermaid/src/diagrams/bpmn/bpmnValidate.ts
var isFlowNode = (node) => node.kind !== "data";
var levenshtein = (a, b) => {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = tmp;
    }
  }
  return dp[n];
};
var didYouMean = (id, known) => {
  let best;
  let bestDist = Infinity;
  for (const candidate of known) {
    const dist = levenshtein(id.toLowerCase(), candidate.toLowerCase());
    if (dist < bestDist) {
      bestDist = dist;
      best = candidate;
    }
  }
  return best !== void 0 && bestDist <= 2 ? ` \u2014 did you mean '${best}'?` : "";
};
var poolLabelOf = (model, poolId) => model.pools.find((pool) => pool.id === poolId)?.label ?? "";
function validateBpmn(model) {
  const errors = [];
  const nodeById = /* @__PURE__ */ new Map();
  const seenIds = /* @__PURE__ */ new Map();
  for (const node of model.nodes) {
    if (seenIds.has(node.id)) {
      errors.push(
        `bpmn: duplicate id '${node.id}' (first declared on line ${seenIds.get(node.id)}). Ids must be unique. Rename one, e.g. '${node.id}b'.`
      );
      continue;
    }
    seenIds.set(node.id, node.line);
    nodeById.set(node.id, node);
  }
  const knownIds = [...nodeById.keys()];
  const validFlows = [];
  for (const flow of model.flows) {
    const src = nodeById.get(flow.sourceId);
    const dst = nodeById.get(flow.targetId);
    if (!src) {
      errors.push(
        `bpmn: flow references unknown node '${flow.sourceId}'. Declare it, e.g. 'task ${flow.sourceId} "..."', or fix the id${didYouMean(flow.sourceId, knownIds)}.`
      );
    }
    if (!dst) {
      errors.push(
        `bpmn: flow references unknown node '${flow.targetId}'. Declare it, e.g. 'task ${flow.targetId} "..."', or fix the id${didYouMean(flow.targetId, knownIds)}.`
      );
    }
    if (src && dst) {
      validFlows.push(flow);
    }
  }
  for (const lane of model.lanes) {
    if (!lane.poolId) {
      errors.push(
        `bpmn: lane '${lane.label}' is declared outside any pool. Lanes must sit inside a pool. Wrap it, e.g. 'pool "Order handling"' then indent 'lane "${lane.label}"'.`
      );
    }
  }
  const sequenceFlows = validFlows.filter((flow) => flow.kind === "sequence");
  const messageFlows = validFlows.filter((flow) => flow.kind === "message");
  const outByNode = /* @__PURE__ */ new Map();
  const inByNode = /* @__PURE__ */ new Map();
  for (const flow of sequenceFlows) {
    (outByNode.get(flow.sourceId) ?? outByNode.set(flow.sourceId, []).get(flow.sourceId)).push(
      flow
    );
    (inByNode.get(flow.targetId) ?? inByNode.set(flow.targetId, []).get(flow.targetId)).push(flow);
  }
  for (const node of model.nodes) {
    if (node.kind === "event" && node.position === "start") {
      const incoming = inByNode.get(node.id);
      if (incoming && incoming.length > 0) {
        errors.push(
          `bpmn: start event '${node.id}' has an incoming sequence flow from '${incoming[0].sourceId}'. Start events begin a process and cannot be a flow target. Use an 'intermediate' event here, or make '${node.id}' a task.`
        );
      }
    }
    if (node.kind === "event" && node.position === "end") {
      const outgoing = outByNode.get(node.id);
      if (outgoing && outgoing.length > 0) {
        errors.push(
          `bpmn: end event '${node.id}' has an outgoing sequence flow to '${outgoing[0].targetId}'. End events terminate a path and cannot have outgoing flows. Use an 'intermediate' event, or move the flow to start from an earlier node.`
        );
      }
    }
  }
  const gatewayTypeName = {
    exclusive: "exclusive",
    parallel: "parallel",
    inclusive: "inclusive",
    event: "event-based"
  };
  for (const node of model.nodes) {
    if (node.kind !== "gateway") {
      continue;
    }
    const outgoing = outByNode.get(node.id) ?? [];
    const incoming = inByNode.get(node.id) ?? [];
    const typeName = gatewayTypeName[node.gateway];
    if ((node.gateway === "exclusive" || node.gateway === "inclusive") && outgoing.length === 1 && incoming.length <= 1) {
      errors.push(
        `bpmn: ${typeName} gateway '${node.id}' has 1 outgoing flow. A diverging gateway needs 2 or more outgoing sequence flows. Add another branch, e.g. '${node.id} -- no --> e2', or replace '${node.id}' with a task if no decision is made here.`
      );
    }
    if (node.gateway === "parallel") {
      const conditional = outgoing.find((flow) => flow.label !== void 0);
      if (conditional) {
        errors.push(
          `bpmn: parallel gateway '${node.id}' has a condition '${conditional.label}' on the flow to '${conditional.targetId}'. Parallel gateways activate all branches unconditionally \u2014 conditions are not allowed. Remove the condition, or change '${node.id}' to 'xor' or 'or'.`
        );
      }
    }
    const defaults2 = outgoing.filter((flow) => flow.isDefault);
    if (defaults2.length > 1) {
      errors.push(
        `bpmn: ${typeName} gateway '${node.id}' has ${defaults2.length} default flows (to '${defaults2[0].targetId}' and to '${defaults2[1].targetId}'). A gateway may have at most one default flow. Keep 'default' on exactly one branch and give the other a condition.`
      );
    }
  }
  for (const [sourceId, flows] of outByNode) {
    const src = nodeById.get(sourceId);
    if (!src || src.kind === "gateway") {
      continue;
    }
    if (flows.length < 2) {
      continue;
    }
    const conditional = flows.find((flow) => flow.label !== void 0);
    if (conditional) {
      const kind = src.kind === "event" ? "event" : "task";
      errors.push(
        `bpmn: the flow '${sourceId} -- "${conditional.label}" --> ${conditional.targetId}' has a condition but '${sourceId}' is a ${kind}. Conditions belong on flows leaving an exclusive (xor) or inclusive (or) gateway. Insert a gateway, e.g. '${sourceId} --> g1' then 'g1 -- ${conditional.label} --> ${conditional.targetId}'.`
      );
    }
  }
  for (const flow of messageFlows) {
    const src = nodeById.get(flow.sourceId);
    const dst = nodeById.get(flow.targetId);
    if (src.poolId && dst.poolId && src.poolId === dst.poolId) {
      errors.push(
        `bpmn: message flow '${flow.sourceId} ==> ${flow.targetId}' connects two nodes in the same pool '${poolLabelOf(model, src.poolId)}'. Message flows may only cross pool boundaries. Use a sequence flow '-->' within a pool, or move one endpoint to another pool.`
      );
    }
  }
  for (const flow of sequenceFlows) {
    const src = nodeById.get(flow.sourceId);
    const dst = nodeById.get(flow.targetId);
    if (src.poolId && dst.poolId && src.poolId !== dst.poolId) {
      errors.push(
        `bpmn: sequence flow '${flow.sourceId} --> ${flow.targetId}' crosses from pool '${poolLabelOf(model, src.poolId)}' to pool '${poolLabelOf(model, dst.poolId)}'. Sequence flows stay inside one pool. Use a message flow '==>' between pools.`
      );
    }
  }
  const forward = /* @__PURE__ */ new Map();
  const backward = /* @__PURE__ */ new Map();
  for (const flow of sequenceFlows) {
    (forward.get(flow.sourceId) ?? forward.set(flow.sourceId, []).get(flow.sourceId)).push(
      flow.targetId
    );
    (backward.get(flow.targetId) ?? backward.set(flow.targetId, []).get(flow.targetId)).push(
      flow.sourceId
    );
  }
  const reachSet = (starts, graph) => {
    const seen = new Set(starts);
    const stack = [...starts];
    while (stack.length) {
      const cur = stack.pop();
      for (const next of graph.get(cur) ?? []) {
        if (!seen.has(next)) {
          seen.add(next);
          stack.push(next);
        }
      }
    }
    return seen;
  };
  const flowNodes = model.nodes.filter(isFlowNode);
  const scopes = /* @__PURE__ */ new Map();
  for (const node of flowNodes) {
    const key = node.poolId ?? "__top__";
    (scopes.get(key) ?? scopes.set(key, []).get(key)).push(node);
  }
  for (const scopeNodes of scopes.values()) {
    if (scopeNodes.length <= 1) {
      continue;
    }
    const startIds = scopeNodes.filter((n) => n.kind === "event" && n.position === "start").map((n) => n.id);
    const endIds = scopeNodes.filter((n) => n.kind === "event" && n.position === "end").map((n) => n.id);
    if (endIds.length > 0) {
      const canReachEnd = reachSet(endIds, backward);
      for (const node of scopeNodes) {
        if (node.kind === "event" && node.position === "end") {
          continue;
        }
        if (!canReachEnd.has(node.id)) {
          errors.push(
            `bpmn: node '${node.id}' has no path to an end event. In BPMN every flow node must reach at least one end event. Add an outgoing sequence flow from '${node.id}', e.g. '${node.id} --> ${endIds[0]}', or connect it to an existing node that already reaches an end.`
          );
        }
      }
    }
    if (startIds.length > 0) {
      const reachableFromStart = reachSet(startIds, forward);
      for (const node of scopeNodes) {
        if (node.kind === "event" && node.position === "start") {
          continue;
        }
        if (!reachableFromStart.has(node.id)) {
          errors.push(
            `bpmn: node '${node.id}' is unreachable \u2014 no start event leads to it. Add an incoming sequence flow, e.g. '${startIds[0]} --> ${node.id}', or remove '${node.id}'.`
          );
        }
      }
    }
  }
  return errors;
}

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString2(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString2 = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString2 ? symbolToString2.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_trimmedEndIndex.js
var reWhitespace = /\s/;
function trimmedEndIndex(string) {
  var index = string.length;
  while (index-- && reWhitespace.test(string.charAt(index))) {
  }
  return index;
}
var trimmedEndIndex_default = trimmedEndIndex;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTrim.js
var reTrimStart = /^\s+/;
function baseTrim(string) {
  return string ? string.slice(0, trimmedEndIndex_default(string) + 1).replace(reTrimStart, "") : string;
}
var baseTrim_default = baseTrim;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toNumber.js
var NAN = 0 / 0;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol_default(value)) {
    return NAN;
  }
  if (isObject_default(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject_default(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = baseTrim_default(value);
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var toNumber_default = toNumber;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toFinite.js
var INFINITY2 = 1 / 0;
var MAX_INTEGER = 17976931348623157e292;
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_default(value);
  if (value === INFINITY2 || value === -INFINITY2) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}
var toFinite_default = toFinite;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toInteger.js
function toInteger(value) {
  var result = toFinite_default(value), remainder = result % 1;
  return result === result ? remainder ? result - remainder : result : 0;
}
var toInteger_default = toInteger;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/identity.js
function identity(value) {
  return value;
}
var identity_default = identity;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isMasked.js
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_WeakMap.js
var WeakMap = getNative_default(root_default, "WeakMap");
var WeakMap_default = WeakMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseCreate.js
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject_default(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
var baseCreate_default = baseCreate;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_apply.js
function apply2(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var apply_default = apply2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/noop.js
function noop() {
}
var noop_default = noop;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyArray.js
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var copyArray_default = copyArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_shortOut.js
var HOT_COUNT = 800;
var HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var shortOut_default = shortOut;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/constant.js
function constant(value) {
  return function() {
    return value;
  };
}
var constant_default = constant;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_defineProperty.js
var defineProperty = (function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
})();
var defineProperty_default = defineProperty;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseSetToString.js
var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
  return defineProperty_default(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant_default(string),
    "writable": true
  });
};
var baseSetToString_default = baseSetToString;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setToString.js
var setToString = shortOut_default(baseSetToString_default);
var setToString_default = setToString;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEach.js
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
var arrayEach_default = arrayEach;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseFindIndex.js
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
var baseFindIndex_default = baseFindIndex;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsNaN.js
function baseIsNaN(value) {
  return value !== value;
}
var baseIsNaN_default = baseIsNaN;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_strictIndexOf.js
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1, length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
var strictIndexOf_default = strictIndexOf;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIndexOf.js
function baseIndexOf(array, value, fromIndex) {
  return value === value ? strictIndexOf_default(array, value, fromIndex) : baseFindIndex_default(array, baseIsNaN_default, fromIndex);
}
var baseIndexOf_default = baseIndexOf;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayIncludes.js
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf_default(array, value, 0) > -1;
}
var arrayIncludes_default = arrayIncludes;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copyObject.js
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue_default(object, key, newValue);
    } else {
      assignValue_default(object, key, newValue);
    }
  }
  return object;
}
var copyObject_default = copyObject;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overRest.js
var nativeMax = Math.max;
function overRest(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply_default(func, this, otherArgs);
  };
}
var overRest_default = overRest;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseRest.js
function baseRest(func, start) {
  return setToString_default(overRest_default(func, start, identity_default), func + "");
}
var baseRest_default = baseRest;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isLength.js
var MAX_SAFE_INTEGER2 = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
}
var isLength_default = isLength;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLike.js
function isArrayLike(value) {
  return value != null && isLength_default(value.length) && !isFunction_default(value);
}
var isArrayLike_default = isArrayLike;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isIterateeCall.js
function isIterateeCall(value, index, object) {
  if (!isObject_default(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
    return eq_default(object[index], value);
  }
  return false;
}
var isIterateeCall_default = isIterateeCall;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createAssigner.js
function createAssigner(assigner) {
  return baseRest_default(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var createAssigner_default = createAssigner;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isPrototype.js
var objectProto5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
  return value === proto;
}
var isPrototype_default = isPrototype;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseTimes.js
function baseTimes(n, iteratee) {
  var index = -1, result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
var baseTimes_default = baseTimes;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsArguments.js
var argsTag = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
}
var baseIsArguments_default = baseIsArguments;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArguments.js
var objectProto6 = Object.prototype;
var hasOwnProperty4 = objectProto6.hasOwnProperty;
var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
var isArguments = baseIsArguments_default(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments_default : function(value) {
  return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArguments_default = isArguments;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubFalse.js
function stubFalse() {
  return false;
}
var stubFalse_default = stubFalse;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isBuffer.js
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer2 = moduleExports ? root_default.Buffer : void 0;
var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse_default;
var isBuffer_default = isBuffer;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsTypedArray.js
var argsTag2 = "[object Arguments]";
var arrayTag = "[object Array]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag2 = "[object Function]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var objectTag = "[object Object]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
}
var baseIsTypedArray_default = baseIsTypedArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUnary.js
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var baseUnary_default = baseUnary;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nodeUtil.js
var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
var freeProcess = moduleExports2 && freeGlobal_default.process;
var nodeUtil = (function() {
  try {
    var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e) {
  }
})();
var nodeUtil_default = nodeUtil;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isTypedArray.js
var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
var isTypedArray_default = isTypedArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayLikeKeys.js
var objectProto7 = Object.prototype;
var hasOwnProperty5 = objectProto7.hasOwnProperty;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex_default(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var arrayLikeKeys_default = arrayLikeKeys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_overArg.js
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var overArg_default = overArg;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeys.js
var nativeKeys = overArg_default(Object.keys, Object);
var nativeKeys_default = nativeKeys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeys.js
var objectProto8 = Object.prototype;
var hasOwnProperty6 = objectProto8.hasOwnProperty;
function baseKeys(object) {
  if (!isPrototype_default(object)) {
    return nativeKeys_default(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty6.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var baseKeys_default = baseKeys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keys.js
function keys(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
}
var keys_default = keys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/assign.js
var objectProto9 = Object.prototype;
var hasOwnProperty7 = objectProto9.hasOwnProperty;
var assign = createAssigner_default(function(object, source) {
  if (isPrototype_default(source) || isArrayLike_default(source)) {
    copyObject_default(source, keys_default(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty7.call(source, key)) {
      assignValue_default(object, key, source[key]);
    }
  }
});
var assign_default = assign;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeKeysIn.js
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var nativeKeysIn_default = nativeKeysIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseKeysIn.js
var objectProto10 = Object.prototype;
var hasOwnProperty8 = objectProto10.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject_default(object)) {
    return nativeKeysIn_default(object);
  }
  var isProto = isPrototype_default(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var baseKeysIn_default = baseKeysIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/keysIn.js
function keysIn(object) {
  return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
}
var keysIn_default = keysIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto11 = Object.prototype;
var hasOwnProperty9 = objectProto11.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty9.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashHas.js
var objectProto12 = Object.prototype;
var hasOwnProperty10 = objectProto12.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty10.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Hash.js
function Hash(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_ListCache.js
function ListCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMapData.js
function getMapData(map2, key) {
  var data = map2.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_MapCache.js
function MapCache(entries2) {
  var index = -1, length = entries2 == null ? 0 : entries2.length;
  this.clear();
  while (++index < length) {
    var entry = entries2[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_toKey.js
var INFINITY3 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY3 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayPush.js
function arrayPush2(array, values2) {
  var index = -1, length = values2.length, offset = array.length;
  while (++index < length) {
    array[offset + index] = values2[index];
  }
  return array;
}
var arrayPush_default = arrayPush2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isFlattenable.js
var spreadableSymbol = Symbol_default ? Symbol_default.isConcatSpreadable : void 0;
function isFlattenable(value) {
  return isArray_default(value) || isArguments_default(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var isFlattenable_default = isFlattenable;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseFlatten.js
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1, length = array.length;
  predicate || (predicate = isFlattenable_default);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush_default(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var baseFlatten_default = baseFlatten;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/flatten.js
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten_default(array, 1) : [];
}
var flatten_default = flatten;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getPrototype.js
var getPrototype = overArg_default(Object.getPrototypeOf, Object);
var getPrototype_default = getPrototype;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayReduce.js
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1, length = array == null ? 0 : array.length;
  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}
var arrayReduce_default = arrayReduce;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackClear.js
function stackClear() {
  this.__data__ = new ListCache_default();
  this.size = 0;
}
var stackClear_default = stackClear;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackDelete.js
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var stackDelete_default = stackDelete;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackGet.js
function stackGet(key) {
  return this.__data__.get(key);
}
var stackGet_default = stackGet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackHas.js
function stackHas(key) {
  return this.__data__.has(key);
}
var stackHas_default = stackHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_stackSet.js
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache_default) {
    var pairs = data.__data__;
    if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache_default(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var stackSet_default = stackSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Stack.js
function Stack(entries2) {
  var data = this.__data__ = new ListCache_default(entries2);
  this.size = data.size;
}
Stack.prototype.clear = stackClear_default;
Stack.prototype["delete"] = stackDelete_default;
Stack.prototype.get = stackGet_default;
Stack.prototype.has = stackHas_default;
Stack.prototype.set = stackSet_default;
var Stack_default = Stack;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssign.js
function baseAssign(object, source) {
  return object && copyObject_default(source, keys_default(source), object);
}
var baseAssign_default = baseAssign;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAssignIn.js
function baseAssignIn(object, source) {
  return object && copyObject_default(source, keysIn_default(source), object);
}
var baseAssignIn_default = baseAssignIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneBuffer.js
var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
var Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
var allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
var cloneBuffer_default = cloneBuffer;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayFilter.js
function arrayFilter(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var arrayFilter_default = arrayFilter;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/stubArray.js
function stubArray() {
  return [];
}
var stubArray_default = stubArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbols.js
var objectProto13 = Object.prototype;
var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable2.call(object, symbol);
  });
};
var getSymbols_default = getSymbols;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbols.js
function copySymbols(source, object) {
  return copyObject_default(source, getSymbols_default(source), object);
}
var copySymbols_default = copySymbols;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getSymbolsIn.js
var nativeGetSymbols2 = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
  var result = [];
  while (object) {
    arrayPush_default(result, getSymbols_default(object));
    object = getPrototype_default(object);
  }
  return result;
};
var getSymbolsIn_default = getSymbolsIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_copySymbolsIn.js
function copySymbolsIn(source, object) {
  return copyObject_default(source, getSymbolsIn_default(source), object);
}
var copySymbolsIn_default = copySymbolsIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseGetAllKeys.js
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
}
var baseGetAllKeys_default = baseGetAllKeys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeys.js
function getAllKeys(object) {
  return baseGetAllKeys_default(object, keys_default, getSymbols_default);
}
var getAllKeys_default = getAllKeys;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getAllKeysIn.js
function getAllKeysIn(object) {
  return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
}
var getAllKeysIn_default = getAllKeysIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_DataView.js
var DataView = getNative_default(root_default, "DataView");
var DataView_default = DataView;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Promise.js
var Promise2 = getNative_default(root_default, "Promise");
var Promise_default = Promise2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Set.js
var Set2 = getNative_default(root_default, "Set");
var Set_default = Set2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getTag.js
var mapTag2 = "[object Map]";
var objectTag2 = "[object Object]";
var promiseTag = "[object Promise]";
var setTag2 = "[object Set]";
var weakMapTag2 = "[object WeakMap]";
var dataViewTag2 = "[object DataView]";
var dataViewCtorString = toSource_default(DataView_default);
var mapCtorString = toSource_default(Map_default);
var promiseCtorString = toSource_default(Promise_default);
var setCtorString = toSource_default(Set_default);
var weakMapCtorString = toSource_default(WeakMap_default);
var getTag = baseGetTag_default;
if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
  getTag = function(value) {
    var result = baseGetTag_default(value), Ctor = result == objectTag2 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag2;
        case mapCtorString:
          return mapTag2;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag2;
        case weakMapCtorString:
          return weakMapTag2;
      }
    }
    return result;
  };
}
var getTag_default = getTag;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneArray.js
var objectProto14 = Object.prototype;
var hasOwnProperty11 = objectProto14.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var initCloneArray_default = initCloneArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_Uint8Array.js
var Uint8Array2 = root_default.Uint8Array;
var Uint8Array_default = Uint8Array2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneArrayBuffer.js
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
  return result;
}
var cloneArrayBuffer_default = cloneArrayBuffer;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneDataView.js
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var cloneDataView_default = cloneDataView;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneRegExp.js
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var cloneRegExp_default = cloneRegExp;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneSymbol.js
var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var cloneSymbol_default = cloneSymbol;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cloneTypedArray.js
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var cloneTypedArray_default = cloneTypedArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneByTag.js
var boolTag2 = "[object Boolean]";
var dateTag2 = "[object Date]";
var mapTag3 = "[object Map]";
var numberTag2 = "[object Number]";
var regexpTag2 = "[object RegExp]";
var setTag3 = "[object Set]";
var stringTag2 = "[object String]";
var symbolTag2 = "[object Symbol]";
var arrayBufferTag2 = "[object ArrayBuffer]";
var dataViewTag3 = "[object DataView]";
var float32Tag2 = "[object Float32Array]";
var float64Tag2 = "[object Float64Array]";
var int8Tag2 = "[object Int8Array]";
var int16Tag2 = "[object Int16Array]";
var int32Tag2 = "[object Int32Array]";
var uint8Tag2 = "[object Uint8Array]";
var uint8ClampedTag2 = "[object Uint8ClampedArray]";
var uint16Tag2 = "[object Uint16Array]";
var uint32Tag2 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag2:
      return cloneArrayBuffer_default(object);
    case boolTag2:
    case dateTag2:
      return new Ctor(+object);
    case dataViewTag3:
      return cloneDataView_default(object, isDeep);
    case float32Tag2:
    case float64Tag2:
    case int8Tag2:
    case int16Tag2:
    case int32Tag2:
    case uint8Tag2:
    case uint8ClampedTag2:
    case uint16Tag2:
    case uint32Tag2:
      return cloneTypedArray_default(object, isDeep);
    case mapTag3:
      return new Ctor();
    case numberTag2:
    case stringTag2:
      return new Ctor(object);
    case regexpTag2:
      return cloneRegExp_default(object);
    case setTag3:
      return new Ctor();
    case symbolTag2:
      return cloneSymbol_default(object);
  }
}
var initCloneByTag_default = initCloneByTag;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_initCloneObject.js
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
}
var initCloneObject_default = initCloneObject;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMap.js
var mapTag4 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike_default(value) && getTag_default(value) == mapTag4;
}
var baseIsMap_default = baseIsMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isMap.js
var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
var isMap_default = isMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsSet.js
var setTag4 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike_default(value) && getTag_default(value) == setTag4;
}
var baseIsSet_default = baseIsSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isSet.js
var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
var isSet_default = isSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseClone.js
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var argsTag3 = "[object Arguments]";
var arrayTag2 = "[object Array]";
var boolTag3 = "[object Boolean]";
var dateTag3 = "[object Date]";
var errorTag2 = "[object Error]";
var funcTag3 = "[object Function]";
var genTag2 = "[object GeneratorFunction]";
var mapTag5 = "[object Map]";
var numberTag3 = "[object Number]";
var objectTag3 = "[object Object]";
var regexpTag3 = "[object RegExp]";
var setTag5 = "[object Set]";
var stringTag3 = "[object String]";
var symbolTag3 = "[object Symbol]";
var weakMapTag3 = "[object WeakMap]";
var arrayBufferTag3 = "[object ArrayBuffer]";
var dataViewTag4 = "[object DataView]";
var float32Tag3 = "[object Float32Array]";
var float64Tag3 = "[object Float64Array]";
var int8Tag3 = "[object Int8Array]";
var int16Tag3 = "[object Int16Array]";
var int32Tag3 = "[object Int32Array]";
var uint8Tag3 = "[object Uint8Array]";
var uint8ClampedTag3 = "[object Uint8ClampedArray]";
var uint16Tag3 = "[object Uint16Array]";
var uint32Tag3 = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag3] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject_default(value)) {
    return value;
  }
  var isArr = isArray_default(value);
  if (isArr) {
    result = initCloneArray_default(value);
    if (!isDeep) {
      return copyArray_default(value, result);
    }
  } else {
    var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
    if (isBuffer_default(value)) {
      return cloneBuffer_default(value, isDeep);
    }
    if (tag == objectTag3 || tag == argsTag3 || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject_default(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag_default(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack_default());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet_default(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap_default(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach_default(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
var baseClone_default = baseClone;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/clone.js
var CLONE_SYMBOLS_FLAG2 = 4;
function clone2(value) {
  return baseClone_default(value, CLONE_SYMBOLS_FLAG2);
}
var clone_default = clone2;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/compact.js
function compact(array) {
  var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index < length) {
    var value = array[index];
    if (value) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var compact_default = compact;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setCacheAdd.js
var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED3);
  return this;
}
var setCacheAdd_default = setCacheAdd;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setCacheHas.js
function setCacheHas(value) {
  return this.__data__.has(value);
}
var setCacheHas_default = setCacheHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_SetCache.js
function SetCache(values2) {
  var index = -1, length = values2 == null ? 0 : values2.length;
  this.__data__ = new MapCache_default();
  while (++index < length) {
    this.add(values2[index]);
  }
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
SetCache.prototype.has = setCacheHas_default;
var SetCache_default = SetCache;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arraySome.js
function arraySome(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}
var arraySome_default = arraySome;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_cacheHas.js
function cacheHas(cache, key) {
  return cache.has(key);
}
var cacheHas_default = cacheHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalArrays.js
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
  stack.set(array, other);
  stack.set(other, array);
  while (++index < arrLength) {
    var arrValue = array[index], othValue = other[index];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome_default(other, function(othValue2, othIndex) {
        if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array);
  stack["delete"](other);
  return result;
}
var equalArrays_default = equalArrays;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_mapToArray.js
function mapToArray(map2) {
  var index = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}
var mapToArray_default = mapToArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_setToArray.js
function setToArray(set) {
  var index = -1, result = Array(set.size);
  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}
var setToArray_default = setToArray;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalByTag.js
var COMPARE_PARTIAL_FLAG2 = 1;
var COMPARE_UNORDERED_FLAG2 = 2;
var boolTag4 = "[object Boolean]";
var dateTag4 = "[object Date]";
var errorTag3 = "[object Error]";
var mapTag6 = "[object Map]";
var numberTag4 = "[object Number]";
var regexpTag4 = "[object RegExp]";
var setTag6 = "[object Set]";
var stringTag4 = "[object String]";
var symbolTag4 = "[object Symbol]";
var arrayBufferTag4 = "[object ArrayBuffer]";
var dataViewTag5 = "[object DataView]";
var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag5:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;
    case arrayBufferTag4:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
        return false;
      }
      return true;
    case boolTag4:
    case dateTag4:
    case numberTag4:
      return eq_default(+object, +other);
    case errorTag3:
      return object.name == other.name && object.message == other.message;
    case regexpTag4:
    case stringTag4:
      return object == other + "";
    case mapTag6:
      var convert = mapToArray_default;
    case setTag6:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
      convert || (convert = setToArray_default);
      if (object.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG2;
      stack.set(object, other);
      var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object);
      return result;
    case symbolTag4:
      if (symbolValueOf2) {
        return symbolValueOf2.call(object) == symbolValueOf2.call(other);
      }
  }
  return false;
}
var equalByTag_default = equalByTag;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_equalObjects.js
var COMPARE_PARTIAL_FLAG3 = 1;
var objectProto15 = Object.prototype;
var hasOwnProperty12 = objectProto15.hasOwnProperty;
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty12.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);
  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object);
  stack["delete"](other);
  return result;
}
var equalObjects_default = equalObjects;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsEqualDeep.js
var COMPARE_PARTIAL_FLAG4 = 1;
var argsTag4 = "[object Arguments]";
var arrayTag3 = "[object Array]";
var objectTag4 = "[object Object]";
var objectProto16 = Object.prototype;
var hasOwnProperty13 = objectProto16.hasOwnProperty;
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
  objTag = objTag == argsTag4 ? objectTag4 : objTag;
  othTag = othTag == argsTag4 ? objectTag4 : othTag;
  var objIsObj = objTag == objectTag4, othIsObj = othTag == objectTag4, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer_default(object)) {
    if (!isBuffer_default(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack_default());
    return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
    var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack_default());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack_default());
  return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
}
var baseIsEqualDeep_default = baseIsEqualDeep;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsEqual.js
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
}
var baseIsEqual_default = baseIsEqual;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsMatch.js
var COMPARE_PARTIAL_FLAG5 = 1;
var COMPARE_UNORDERED_FLAG3 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index, noCustomizer = !customizer;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack_default();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var baseIsMatch_default = baseIsMatch;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_isStrictComparable.js
function isStrictComparable(value) {
  return value === value && !isObject_default(value);
}
var isStrictComparable_default = isStrictComparable;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_getMatchData.js
function getMatchData(object) {
  var result = keys_default(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable_default(value)];
  }
  return result;
}
var getMatchData_default = getMatchData;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_matchesStrictComparable.js
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
var matchesStrictComparable_default = matchesStrictComparable;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseMatches.js
function baseMatches(source) {
  var matchData = getMatchData_default(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch_default(object, source, matchData);
  };
}
var baseMatches_default = baseMatches;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseHasIn.js
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}
var baseHasIn_default = baseHasIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_hasPath.js
function hasPath(object, path, hasFunc) {
  path = castPath_default(path, object);
  var index = -1, length = path.length, result = false;
  while (++index < length) {
    var key = toKey_default(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
}
var hasPath_default = hasPath;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/hasIn.js
function hasIn(object, path) {
  return object != null && hasPath_default(object, path, baseHasIn_default);
}
var hasIn_default = hasIn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseMatchesProperty.js
var COMPARE_PARTIAL_FLAG6 = 1;
var COMPARE_UNORDERED_FLAG4 = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey_default(path) && isStrictComparable_default(srcValue)) {
    return matchesStrictComparable_default(toKey_default(path), srcValue);
  }
  return function(object) {
    var objValue = get_default(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
  };
}
var baseMatchesProperty_default = baseMatchesProperty;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseProperty.js
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
var baseProperty_default = baseProperty;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_basePropertyDeep.js
function basePropertyDeep(path) {
  return function(object) {
    return baseGet_default(object, path);
  };
}
var basePropertyDeep_default = basePropertyDeep;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/property.js
function property(path) {
  return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
}
var property_default = property;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIteratee.js
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity_default;
  }
  if (typeof value == "object") {
    return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
  }
  return property_default(value);
}
var baseIteratee_default = baseIteratee;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayAggregator.js
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}
var arrayAggregator_default = arrayAggregator;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createBaseFor.js
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var createBaseFor_default = createBaseFor;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseFor.js
var baseFor = createBaseFor_default();
var baseFor_default = baseFor;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseForOwn.js
function baseForOwn(object, iteratee) {
  return object && baseFor_default(object, iteratee, keys_default);
}
var baseForOwn_default = baseForOwn;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createBaseEach.js
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_default(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var createBaseEach_default = createBaseEach;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseEach.js
var baseEach = createBaseEach_default(baseForOwn_default);
var baseEach_default = baseEach;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseAggregator.js
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach_default(collection, function(value, key, collection2) {
    setter(accumulator, value, iteratee(value), collection2);
  });
  return accumulator;
}
var baseAggregator_default = baseAggregator;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createAggregator.js
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray_default(collection) ? arrayAggregator_default : baseAggregator_default, accumulator = initializer ? initializer() : {};
    return func(collection, setter, baseIteratee_default(iteratee, 2), accumulator);
  };
}
var createAggregator_default = createAggregator;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/defaults.js
var objectProto17 = Object.prototype;
var hasOwnProperty14 = objectProto17.hasOwnProperty;
var defaults = baseRest_default(function(object, sources) {
  object = Object(object);
  var index = -1;
  var length = sources.length;
  var guard = length > 2 ? sources[2] : void 0;
  if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
    length = 1;
  }
  while (++index < length) {
    var source = sources[index];
    var props = keysIn_default(source);
    var propsIndex = -1;
    var propsLength = props.length;
    while (++propsIndex < propsLength) {
      var key = props[propsIndex];
      var value = object[key];
      if (value === void 0 || eq_default(value, objectProto17[key]) && !hasOwnProperty14.call(object, key)) {
        object[key] = source[key];
      }
    }
  }
  return object;
});
var defaults_default = defaults;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isArrayLikeObject.js
function isArrayLikeObject(value) {
  return isObjectLike_default(value) && isArrayLike_default(value);
}
var isArrayLikeObject_default = isArrayLikeObject;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayIncludesWith.js
function arrayIncludesWith(array, value, comparator) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
var arrayIncludesWith_default = arrayIncludesWith;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseDifference.js
var LARGE_ARRAY_SIZE2 = 200;
function baseDifference(array, values2, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, isCommon = true, length = array.length, result = [], valuesLength = values2.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values2 = arrayMap_default(values2, baseUnary_default(iteratee));
  }
  if (comparator) {
    includes2 = arrayIncludesWith_default;
    isCommon = false;
  } else if (values2.length >= LARGE_ARRAY_SIZE2) {
    includes2 = cacheHas_default;
    isCommon = false;
    values2 = new SetCache_default(values2);
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee == null ? value : iteratee(value);
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var valuesIndex = valuesLength;
        while (valuesIndex--) {
          if (values2[valuesIndex] === computed) {
            continue outer;
          }
        }
        result.push(value);
      } else if (!includes2(values2, computed, comparator)) {
        result.push(value);
      }
    }
  return result;
}
var baseDifference_default = baseDifference;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/difference.js
var difference = baseRest_default(function(array, values2) {
  return isArrayLikeObject_default(array) ? baseDifference_default(array, baseFlatten_default(values2, 1, isArrayLikeObject_default, true)) : [];
});
var difference_default = difference;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/drop.js
function drop(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger_default(n);
  return baseSlice_default(array, n < 0 ? 0 : n, length);
}
var drop_default = drop;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/dropRight.js
function dropRight(array, n, guard) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  n = guard || n === void 0 ? 1 : toInteger_default(n);
  n = length - n;
  return baseSlice_default(array, 0, n < 0 ? 0 : n);
}
var dropRight_default = dropRight;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_castFunction.js
function castFunction(value) {
  return typeof value == "function" ? value : identity_default;
}
var castFunction_default = castFunction;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/forEach.js
function forEach(collection, iteratee) {
  var func = isArray_default(collection) ? arrayEach_default : baseEach_default;
  return func(collection, castFunction_default(iteratee));
}
var forEach_default = forEach;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_arrayEvery.js
function arrayEvery(array, predicate) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}
var arrayEvery_default = arrayEvery;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseEvery.js
function baseEvery(collection, predicate) {
  var result = true;
  baseEach_default(collection, function(value, index, collection2) {
    result = !!predicate(value, index, collection2);
    return result;
  });
  return result;
}
var baseEvery_default = baseEvery;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/every.js
function every(collection, predicate, guard) {
  var func = isArray_default(collection) ? arrayEvery_default : baseEvery_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var every_default = every;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseFilter.js
function baseFilter(collection, predicate) {
  var result = [];
  baseEach_default(collection, function(value, index, collection2) {
    if (predicate(value, index, collection2)) {
      result.push(value);
    }
  });
  return result;
}
var baseFilter_default = baseFilter;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/filter.js
function filter(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, baseIteratee_default(predicate, 3));
}
var filter_default = filter;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createFind.js
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike_default(collection)) {
      var iteratee = baseIteratee_default(predicate, 3);
      collection = keys_default(collection);
      predicate = function(key) {
        return iteratee(iterable[key], key, iterable);
      };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : void 0;
  };
}
var createFind_default = createFind;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/findIndex.js
var nativeMax2 = Math.max;
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax2(length + index, 0);
  }
  return baseFindIndex_default(array, baseIteratee_default(predicate, 3), index);
}
var findIndex_default = findIndex;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/find.js
var find = createFind_default(findIndex_default);
var find_default = find;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/head.js
function head(array) {
  return array && array.length ? array[0] : void 0;
}
var head_default = head;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseMap.js
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike_default(collection) ? Array(collection.length) : [];
  baseEach_default(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
var baseMap_default = baseMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/map.js
function map(collection, iteratee) {
  var func = isArray_default(collection) ? arrayMap_default : baseMap_default;
  return func(collection, baseIteratee_default(iteratee, 3));
}
var map_default = map;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/flatMap.js
function flatMap(collection, iteratee) {
  return baseFlatten_default(map_default(collection, iteratee), 1);
}
var flatMap_default = flatMap;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/groupBy.js
var objectProto18 = Object.prototype;
var hasOwnProperty15 = objectProto18.hasOwnProperty;
var groupBy = createAggregator_default(function(result, value, key) {
  if (hasOwnProperty15.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue_default(result, key, [value]);
  }
});
var groupBy_default = groupBy;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseHas.js
var objectProto19 = Object.prototype;
var hasOwnProperty16 = objectProto19.hasOwnProperty;
function baseHas(object, key) {
  return object != null && hasOwnProperty16.call(object, key);
}
var baseHas_default = baseHas;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/has.js
function has(object, path) {
  return object != null && hasPath_default(object, path, baseHas_default);
}
var has_default = has;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isString.js
var stringTag5 = "[object String]";
function isString(value) {
  return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag5;
}
var isString_default = isString;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseValues.js
function baseValues(object, props) {
  return arrayMap_default(props, function(key) {
    return object[key];
  });
}
var baseValues_default = baseValues;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/values.js
function values(object) {
  return object == null ? [] : baseValues_default(object, keys_default(object));
}
var values_default = values;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/includes.js
var nativeMax3 = Math.max;
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike_default(collection) ? collection : values_default(collection);
  fromIndex = fromIndex && !guard ? toInteger_default(fromIndex) : 0;
  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax3(length + fromIndex, 0);
  }
  return isString_default(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf_default(collection, value, fromIndex) > -1;
}
var includes_default = includes;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/indexOf.js
var nativeMax4 = Math.max;
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_default(fromIndex);
  if (index < 0) {
    index = nativeMax4(length + index, 0);
  }
  return baseIndexOf_default(array, value, index);
}
var indexOf_default = indexOf;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isEmpty.js
var mapTag7 = "[object Map]";
var setTag7 = "[object Set]";
var objectProto20 = Object.prototype;
var hasOwnProperty17 = objectProto20.hasOwnProperty;
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_default(value) && (isArray_default(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer_default(value) || isTypedArray_default(value) || isArguments_default(value))) {
    return !value.length;
  }
  var tag = getTag_default(value);
  if (tag == mapTag7 || tag == setTag7) {
    return !value.size;
  }
  if (isPrototype_default(value)) {
    return !baseKeys_default(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty17.call(value, key)) {
      return false;
    }
  }
  return true;
}
var isEmpty_default = isEmpty;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseIsRegExp.js
var regexpTag5 = "[object RegExp]";
function baseIsRegExp(value) {
  return isObjectLike_default(value) && baseGetTag_default(value) == regexpTag5;
}
var baseIsRegExp_default = baseIsRegExp;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isRegExp.js
var nodeIsRegExp = nodeUtil_default && nodeUtil_default.isRegExp;
var isRegExp = nodeIsRegExp ? baseUnary_default(nodeIsRegExp) : baseIsRegExp_default;
var isRegExp_default = isRegExp;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/isUndefined.js
function isUndefined(value) {
  return value === void 0;
}
var isUndefined_default = isUndefined;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/negate.js
var FUNC_ERROR_TEXT2 = "Expected a function";
function negate(predicate) {
  if (typeof predicate != "function") {
    throw new TypeError(FUNC_ERROR_TEXT2);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0:
        return !predicate.call(this);
      case 1:
        return !predicate.call(this, args[0]);
      case 2:
        return !predicate.call(this, args[0], args[1]);
      case 3:
        return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}
var negate_default = negate;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_basePickBy.js
function basePickBy(object, paths, predicate) {
  var index = -1, length = paths.length, result = {};
  while (++index < length) {
    var path = paths[index], value = baseGet_default(object, path);
    if (predicate(value, path)) {
      baseSet_default(result, castPath_default(path, object), value);
    }
  }
  return result;
}
var basePickBy_default = basePickBy;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/pickBy.js
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = arrayMap_default(getAllKeysIn_default(object), function(prop) {
    return [prop];
  });
  predicate = baseIteratee_default(predicate);
  return basePickBy_default(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}
var pickBy_default = pickBy;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseReduce.js
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection2) {
    accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
  });
  return accumulator;
}
var baseReduce_default = baseReduce;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/reduce.js
function reduce(collection, iteratee, accumulator) {
  var func = isArray_default(collection) ? arrayReduce_default : baseReduce_default, initAccum = arguments.length < 3;
  return func(collection, baseIteratee_default(iteratee, 4), accumulator, initAccum, baseEach_default);
}
var reduce_default = reduce;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/reject.js
function reject(collection, predicate) {
  var func = isArray_default(collection) ? arrayFilter_default : baseFilter_default;
  return func(collection, negate_default(baseIteratee_default(predicate, 3)));
}
var reject_default = reject;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseSome.js
function baseSome(collection, predicate) {
  var result;
  baseEach_default(collection, function(value, index, collection2) {
    result = predicate(value, index, collection2);
    return !result;
  });
  return !!result;
}
var baseSome_default = baseSome;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/some.js
function some(collection, predicate, guard) {
  var func = isArray_default(collection) ? arraySome_default : baseSome_default;
  if (guard && isIterateeCall_default(collection, predicate, guard)) {
    predicate = void 0;
  }
  return func(collection, baseIteratee_default(predicate, 3));
}
var some_default = some;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_createSet.js
var INFINITY4 = 1 / 0;
var createSet = !(Set_default && 1 / setToArray_default(new Set_default([, -0]))[1] == INFINITY4) ? noop_default : function(values2) {
  return new Set_default(values2);
};
var createSet_default = createSet;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/_baseUniq.js
var LARGE_ARRAY_SIZE3 = 200;
function baseUniq(array, iteratee, comparator) {
  var index = -1, includes2 = arrayIncludes_default, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes2 = arrayIncludesWith_default;
  } else if (length >= LARGE_ARRAY_SIZE3) {
    var set = iteratee ? null : createSet_default(array);
    if (set) {
      return setToArray_default(set);
    }
    isCommon = false;
    includes2 = cacheHas_default;
    seen = new SetCache_default();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index < length) {
      var value = array[index], computed = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed === computed) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed);
        }
        result.push(value);
      } else if (!includes2(seen, computed, comparator)) {
        if (seen !== result) {
          seen.push(computed);
        }
        result.push(value);
      }
    }
  return result;
}
var baseUniq_default = baseUniq;

// node_modules/.pnpm/lodash-es@4.17.23/node_modules/lodash-es/uniq.js
function uniq(array) {
  return array && array.length ? baseUniq_default(array) : [];
}
var uniq_default = uniq;

// node_modules/.pnpm/@chevrotain+utils@11.1.2/node_modules/@chevrotain/utils/lib/src/print.js
function PRINT_ERROR(msg) {
  if (console && console.error) {
    console.error(`Error: ${msg}`);
  }
}
function PRINT_WARNING(msg) {
  if (console && console.warn) {
    console.warn(`Warning: ${msg}`);
  }
}

// node_modules/.pnpm/@chevrotain+utils@11.1.2/node_modules/@chevrotain/utils/lib/src/timer.js
function timer(func) {
  const start = (/* @__PURE__ */ new Date()).getTime();
  const val = func();
  const end = (/* @__PURE__ */ new Date()).getTime();
  const total = end - start;
  return { time: total, value: val };
}

// node_modules/.pnpm/@chevrotain+utils@11.1.2/node_modules/@chevrotain/utils/lib/src/to-fast-properties.js
function toFastProperties(toBecomeFast) {
  function FakeConstructor() {
  }
  FakeConstructor.prototype = toBecomeFast;
  const fakeInstance = new FakeConstructor();
  function fakeAccess() {
    return typeof fakeInstance.bar;
  }
  fakeAccess();
  fakeAccess();
  if (1)
    return toBecomeFast;
  (0, eval)(toBecomeFast);
}

// node_modules/.pnpm/@chevrotain+gast@11.1.2/node_modules/@chevrotain/gast/lib/src/model.js
function tokenLabel(tokType) {
  if (hasTokenLabel(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var AbstractProduction = class {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(_definition) {
    this._definition = _definition;
  }
  accept(visitor) {
    visitor.visit(this);
    forEach_default(this.definition, (prod) => {
      prod.accept(visitor);
    });
  }
};
var NonTerminal = class extends AbstractProduction {
  constructor(options) {
    super([]);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  set definition(definition) {
  }
  get definition() {
    if (this.referencedRule !== void 0) {
      return this.referencedRule.definition;
    }
    return [];
  }
  accept(visitor) {
    visitor.visit(this);
  }
};
var Rule = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.orgText = "";
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternative = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.ignoreAmbiguities = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Option = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatory = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionMandatoryWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Repetition = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var RepetitionWithSeparator = class extends AbstractProduction {
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Alternation = class extends AbstractProduction {
  get definition() {
    return this._definition;
  }
  set definition(value) {
    this._definition = value;
  }
  constructor(options) {
    super(options.definition);
    this.idx = 1;
    this.ignoreAmbiguities = false;
    this.hasPredicates = false;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
};
var Terminal = class {
  constructor(options) {
    this.idx = 1;
    assign_default(this, pickBy_default(options, (v) => v !== void 0));
  }
  accept(visitor) {
    visitor.visit(this);
  }
};
function serializeGrammar(topRules) {
  return map_default(topRules, serializeProduction);
}
function serializeProduction(node) {
  function convertDefinition(definition) {
    return map_default(definition, serializeProduction);
  }
  if (node instanceof NonTerminal) {
    const serializedNonTerminal = {
      type: "NonTerminal",
      name: node.nonTerminalName,
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedNonTerminal.label = node.label;
    }
    return serializedNonTerminal;
  } else if (node instanceof Alternative) {
    return {
      type: "Alternative",
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Option) {
    return {
      type: "Option",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatory) {
    return {
      type: "RepetitionMandatory",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionMandatoryWithSeparator) {
    return {
      type: "RepetitionMandatoryWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof RepetitionWithSeparator) {
    return {
      type: "RepetitionWithSeparator",
      idx: node.idx,
      separator: serializeProduction(new Terminal({ terminalType: node.separator })),
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Repetition) {
    return {
      type: "Repetition",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Alternation) {
    return {
      type: "Alternation",
      idx: node.idx,
      definition: convertDefinition(node.definition)
    };
  } else if (node instanceof Terminal) {
    const serializedTerminal = {
      type: "Terminal",
      name: node.terminalType.name,
      label: tokenLabel(node.terminalType),
      idx: node.idx
    };
    if (isString_default(node.label)) {
      serializedTerminal.terminalLabel = node.label;
    }
    const pattern = node.terminalType.PATTERN;
    if (node.terminalType.PATTERN) {
      serializedTerminal.pattern = isRegExp_default(pattern) ? pattern.source : pattern;
    }
    return serializedTerminal;
  } else if (node instanceof Rule) {
    return {
      type: "Rule",
      name: node.name,
      orgText: node.orgText,
      definition: convertDefinition(node.definition)
    };
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/.pnpm/@chevrotain+gast@11.1.2/node_modules/@chevrotain/gast/lib/src/visitor.js
var GAstVisitor = class {
  visit(node) {
    const nodeAny = node;
    switch (nodeAny.constructor) {
      case NonTerminal:
        return this.visitNonTerminal(nodeAny);
      case Alternative:
        return this.visitAlternative(nodeAny);
      case Option:
        return this.visitOption(nodeAny);
      case RepetitionMandatory:
        return this.visitRepetitionMandatory(nodeAny);
      case RepetitionMandatoryWithSeparator:
        return this.visitRepetitionMandatoryWithSeparator(nodeAny);
      case RepetitionWithSeparator:
        return this.visitRepetitionWithSeparator(nodeAny);
      case Repetition:
        return this.visitRepetition(nodeAny);
      case Alternation:
        return this.visitAlternation(nodeAny);
      case Terminal:
        return this.visitTerminal(nodeAny);
      case Rule:
        return this.visitRule(nodeAny);
      /* c8 ignore next 2 */
      default:
        throw Error("non exhaustive match");
    }
  }
  /* c8 ignore next */
  visitNonTerminal(node) {
  }
  /* c8 ignore next */
  visitAlternative(node) {
  }
  /* c8 ignore next */
  visitOption(node) {
  }
  /* c8 ignore next */
  visitRepetition(node) {
  }
  /* c8 ignore next */
  visitRepetitionMandatory(node) {
  }
  /* c8 ignore next 3 */
  visitRepetitionMandatoryWithSeparator(node) {
  }
  /* c8 ignore next */
  visitRepetitionWithSeparator(node) {
  }
  /* c8 ignore next */
  visitAlternation(node) {
  }
  /* c8 ignore next */
  visitTerminal(node) {
  }
  /* c8 ignore next */
  visitRule(node) {
  }
};

// node_modules/.pnpm/@chevrotain+gast@11.1.2/node_modules/@chevrotain/gast/lib/src/helpers.js
function isSequenceProd(prod) {
  return prod instanceof Alternative || prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionMandatory || prod instanceof RepetitionMandatoryWithSeparator || prod instanceof RepetitionWithSeparator || prod instanceof Terminal || prod instanceof Rule;
}
function isOptionalProd(prod, alreadyVisited = []) {
  const isDirectlyOptional = prod instanceof Option || prod instanceof Repetition || prod instanceof RepetitionWithSeparator;
  if (isDirectlyOptional) {
    return true;
  }
  if (prod instanceof Alternation) {
    return some_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else if (prod instanceof NonTerminal && includes_default(alreadyVisited, prod)) {
    return false;
  } else if (prod instanceof AbstractProduction) {
    if (prod instanceof NonTerminal) {
      alreadyVisited.push(prod);
    }
    return every_default(prod.definition, (subProd) => {
      return isOptionalProd(subProd, alreadyVisited);
    });
  } else {
    return false;
  }
}
function isBranchingProd(prod) {
  return prod instanceof Alternation;
}
function getProductionDslName(prod) {
  if (prod instanceof NonTerminal) {
    return "SUBRULE";
  } else if (prod instanceof Option) {
    return "OPTION";
  } else if (prod instanceof Alternation) {
    return "OR";
  } else if (prod instanceof RepetitionMandatory) {
    return "AT_LEAST_ONE";
  } else if (prod instanceof RepetitionMandatoryWithSeparator) {
    return "AT_LEAST_ONE_SEP";
  } else if (prod instanceof RepetitionWithSeparator) {
    return "MANY_SEP";
  } else if (prod instanceof Repetition) {
    return "MANY";
  } else if (prod instanceof Terminal) {
    return "CONSUME";
  } else {
    throw Error("non exhaustive match");
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/rest.js
var RestWalker = class {
  walk(prod, prevRest = []) {
    forEach_default(prod.definition, (subProd, index) => {
      const currRest = drop_default(prod.definition, index + 1);
      if (subProd instanceof NonTerminal) {
        this.walkProdRef(subProd, currRest, prevRest);
      } else if (subProd instanceof Terminal) {
        this.walkTerminal(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternative) {
        this.walkFlat(subProd, currRest, prevRest);
      } else if (subProd instanceof Option) {
        this.walkOption(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatory) {
        this.walkAtLeastOne(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionMandatoryWithSeparator) {
        this.walkAtLeastOneSep(subProd, currRest, prevRest);
      } else if (subProd instanceof RepetitionWithSeparator) {
        this.walkManySep(subProd, currRest, prevRest);
      } else if (subProd instanceof Repetition) {
        this.walkMany(subProd, currRest, prevRest);
      } else if (subProd instanceof Alternation) {
        this.walkOr(subProd, currRest, prevRest);
      } else {
        throw Error("non exhaustive match");
      }
    });
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
  }
  walkFlat(flatProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(flatProd, fullOrRest);
  }
  walkOption(optionProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    this.walk(optionProd, fullOrRest);
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    const fullAtLeastOneRest = [
      new Option({ definition: atLeastOneProd.definition })
    ].concat(currRest, prevRest);
    this.walk(atLeastOneProd, fullAtLeastOneRest);
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    const fullAtLeastOneSepRest = restForRepetitionWithSeparator(atLeastOneSepProd, currRest, prevRest);
    this.walk(atLeastOneSepProd, fullAtLeastOneSepRest);
  }
  walkMany(manyProd, currRest, prevRest) {
    const fullManyRest = [
      new Option({ definition: manyProd.definition })
    ].concat(currRest, prevRest);
    this.walk(manyProd, fullManyRest);
  }
  walkManySep(manySepProd, currRest, prevRest) {
    const fullManySepRest = restForRepetitionWithSeparator(manySepProd, currRest, prevRest);
    this.walk(manySepProd, fullManySepRest);
  }
  walkOr(orProd, currRest, prevRest) {
    const fullOrRest = currRest.concat(prevRest);
    forEach_default(orProd.definition, (alt) => {
      const prodWrapper = new Alternative({ definition: [alt] });
      this.walk(prodWrapper, fullOrRest);
    });
  }
};
function restForRepetitionWithSeparator(repSepProd, currRest, prevRest) {
  const repSepRest = [
    new Option({
      definition: [
        new Terminal({ terminalType: repSepProd.separator })
      ].concat(repSepProd.definition)
    })
  ];
  const fullRepSepRest = repSepRest.concat(currRest, prevRest);
  return fullRepSepRest;
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/first.js
function first(prod) {
  if (prod instanceof NonTerminal) {
    return first(prod.referencedRule);
  } else if (prod instanceof Terminal) {
    return firstForTerminal(prod);
  } else if (isSequenceProd(prod)) {
    return firstForSequence(prod);
  } else if (isBranchingProd(prod)) {
    return firstForBranching(prod);
  } else {
    throw Error("non exhaustive match");
  }
}
function firstForSequence(prod) {
  let firstSet = [];
  const seq = prod.definition;
  let nextSubProdIdx = 0;
  let hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  let currSubProd;
  let isLastInnerProdOptional = true;
  while (hasInnerProdsRemaining && isLastInnerProdOptional) {
    currSubProd = seq[nextSubProdIdx];
    isLastInnerProdOptional = isOptionalProd(currSubProd);
    firstSet = firstSet.concat(first(currSubProd));
    nextSubProdIdx = nextSubProdIdx + 1;
    hasInnerProdsRemaining = seq.length > nextSubProdIdx;
  }
  return uniq_default(firstSet);
}
function firstForBranching(prod) {
  const allAlternativesFirsts = map_default(prod.definition, (innerProd) => {
    return first(innerProd);
  });
  return uniq_default(flatten_default(allAlternativesFirsts));
}
function firstForTerminal(terminal) {
  return [terminal.terminalType];
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/constants.js
var IN = "_~IN~_";

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/follow.js
var ResyncFollowsWalker = class extends RestWalker {
  constructor(topProd) {
    super();
    this.topProd = topProd;
    this.follows = {};
  }
  startWalking() {
    this.walk(this.topProd);
    return this.follows;
  }
  walkTerminal(terminal, currRest, prevRest) {
  }
  walkProdRef(refProd, currRest, prevRest) {
    const followName = buildBetweenProdsFollowPrefix(refProd.referencedRule, refProd.idx) + this.topProd.name;
    const fullRest = currRest.concat(prevRest);
    const restProd = new Alternative({ definition: fullRest });
    const t_in_topProd_follows = first(restProd);
    this.follows[followName] = t_in_topProd_follows;
  }
};
function computeAllProdsFollows(topProductions) {
  const reSyncFollows = {};
  forEach_default(topProductions, (topProd) => {
    const currRefsFollow = new ResyncFollowsWalker(topProd).startWalking();
    assign_default(reSyncFollows, currRefsFollow);
  });
  return reSyncFollows;
}
function buildBetweenProdsFollowPrefix(inner, occurenceInParent) {
  return inner.name + occurenceInParent + IN;
}

// node_modules/.pnpm/@chevrotain+regexp-to-ast@11.1.2/node_modules/@chevrotain/regexp-to-ast/lib/src/utils.js
function cc(char) {
  return char.charCodeAt(0);
}
function insertToSet(item, set) {
  if (Array.isArray(item)) {
    item.forEach(function(subItem) {
      set.push(subItem);
    });
  } else {
    set.push(item);
  }
}
function addFlag(flagObj, flagKey) {
  if (flagObj[flagKey] === true) {
    throw "duplicate flag " + flagKey;
  }
  const x = flagObj[flagKey];
  flagObj[flagKey] = true;
}
function ASSERT_EXISTS(obj) {
  if (obj === void 0) {
    throw Error("Internal Error - Should never get here!");
  }
  return true;
}
function ASSERT_NEVER_REACH_HERE() {
  throw Error("Internal Error - Should never get here!");
}
function isCharacter(obj) {
  return obj["type"] === "Character";
}

// node_modules/.pnpm/@chevrotain+regexp-to-ast@11.1.2/node_modules/@chevrotain/regexp-to-ast/lib/src/character-classes.js
var digitsCharCodes = [];
for (let i = cc("0"); i <= cc("9"); i++) {
  digitsCharCodes.push(i);
}
var wordCharCodes = [cc("_")].concat(digitsCharCodes);
for (let i = cc("a"); i <= cc("z"); i++) {
  wordCharCodes.push(i);
}
for (let i = cc("A"); i <= cc("Z"); i++) {
  wordCharCodes.push(i);
}
var whitespaceCodes = [
  cc(" "),
  cc("\f"),
  cc("\n"),
  cc("\r"),
  cc("	"),
  cc("\v"),
  cc("	"),
  cc("\xA0"),
  cc("\u1680"),
  cc("\u2000"),
  cc("\u2001"),
  cc("\u2002"),
  cc("\u2003"),
  cc("\u2004"),
  cc("\u2005"),
  cc("\u2006"),
  cc("\u2007"),
  cc("\u2008"),
  cc("\u2009"),
  cc("\u200A"),
  cc("\u2028"),
  cc("\u2029"),
  cc("\u202F"),
  cc("\u205F"),
  cc("\u3000"),
  cc("\uFEFF")
];

// node_modules/.pnpm/@chevrotain+regexp-to-ast@11.1.2/node_modules/@chevrotain/regexp-to-ast/lib/src/regexp-parser.js
var hexDigitPattern = /[0-9a-fA-F]/;
var decimalPattern = /[0-9]/;
var decimalPatternNoZero = /[1-9]/;
var RegExpParser = class {
  constructor() {
    this.idx = 0;
    this.input = "";
    this.groupIdx = 0;
  }
  saveState() {
    return {
      idx: this.idx,
      input: this.input,
      groupIdx: this.groupIdx
    };
  }
  restoreState(newState) {
    this.idx = newState.idx;
    this.input = newState.input;
    this.groupIdx = newState.groupIdx;
  }
  pattern(input) {
    this.idx = 0;
    this.input = input;
    this.groupIdx = 0;
    this.consumeChar("/");
    const value = this.disjunction();
    this.consumeChar("/");
    const flags = {
      type: "Flags",
      loc: { begin: this.idx, end: input.length },
      global: false,
      ignoreCase: false,
      multiLine: false,
      unicode: false,
      sticky: false
    };
    while (this.isRegExpFlag()) {
      switch (this.popChar()) {
        case "g":
          addFlag(flags, "global");
          break;
        case "i":
          addFlag(flags, "ignoreCase");
          break;
        case "m":
          addFlag(flags, "multiLine");
          break;
        case "u":
          addFlag(flags, "unicode");
          break;
        case "y":
          addFlag(flags, "sticky");
          break;
      }
    }
    if (this.idx !== this.input.length) {
      throw Error("Redundant input: " + this.input.substring(this.idx));
    }
    return {
      type: "Pattern",
      flags,
      value,
      loc: this.loc(0)
    };
  }
  disjunction() {
    const alts = [];
    const begin = this.idx;
    alts.push(this.alternative());
    while (this.peekChar() === "|") {
      this.consumeChar("|");
      alts.push(this.alternative());
    }
    return { type: "Disjunction", value: alts, loc: this.loc(begin) };
  }
  alternative() {
    const terms = [];
    const begin = this.idx;
    while (this.isTerm()) {
      terms.push(this.term());
    }
    return { type: "Alternative", value: terms, loc: this.loc(begin) };
  }
  term() {
    if (this.isAssertion()) {
      return this.assertion();
    } else {
      return this.atom();
    }
  }
  assertion() {
    const begin = this.idx;
    switch (this.popChar()) {
      case "^":
        return {
          type: "StartAnchor",
          loc: this.loc(begin)
        };
      case "$":
        return { type: "EndAnchor", loc: this.loc(begin) };
      // '\b' or '\B'
      case "\\":
        switch (this.popChar()) {
          case "b":
            return {
              type: "WordBoundary",
              loc: this.loc(begin)
            };
          case "B":
            return {
              type: "NonWordBoundary",
              loc: this.loc(begin)
            };
        }
        throw Error("Invalid Assertion Escape");
      // '(?=' or '(?!'
      case "(":
        this.consumeChar("?");
        let type;
        switch (this.popChar()) {
          case "=":
            type = "Lookahead";
            break;
          case "!":
            type = "NegativeLookahead";
            break;
          case "<": {
            switch (this.popChar()) {
              case "=":
                type = "Lookbehind";
                break;
              case "!":
                type = "NegativeLookbehind";
            }
            break;
          }
        }
        ASSERT_EXISTS(type);
        const disjunction = this.disjunction();
        this.consumeChar(")");
        return {
          type,
          value: disjunction,
          loc: this.loc(begin)
        };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  quantifier(isBacktracking = false) {
    let range = void 0;
    const begin = this.idx;
    switch (this.popChar()) {
      case "*":
        range = {
          atLeast: 0,
          atMost: Infinity
        };
        break;
      case "+":
        range = {
          atLeast: 1,
          atMost: Infinity
        };
        break;
      case "?":
        range = {
          atLeast: 0,
          atMost: 1
        };
        break;
      case "{":
        const atLeast = this.integerIncludingZero();
        switch (this.popChar()) {
          case "}":
            range = {
              atLeast,
              atMost: atLeast
            };
            break;
          case ",":
            let atMost;
            if (this.isDigit()) {
              atMost = this.integerIncludingZero();
              range = {
                atLeast,
                atMost
              };
            } else {
              range = {
                atLeast,
                atMost: Infinity
              };
            }
            this.consumeChar("}");
            break;
        }
        if (isBacktracking === true && range === void 0) {
          return void 0;
        }
        ASSERT_EXISTS(range);
        break;
    }
    if (isBacktracking === true && range === void 0) {
      return void 0;
    }
    if (ASSERT_EXISTS(range)) {
      if (this.peekChar(0) === "?") {
        this.consumeChar("?");
        range.greedy = false;
      } else {
        range.greedy = true;
      }
      range.type = "Quantifier";
      range.loc = this.loc(begin);
      return range;
    }
  }
  atom() {
    let atom;
    const begin = this.idx;
    switch (this.peekChar()) {
      case ".":
        atom = this.dotAll();
        break;
      case "\\":
        atom = this.atomEscape();
        break;
      case "[":
        atom = this.characterClass();
        break;
      case "(":
        atom = this.group();
        break;
    }
    if (atom === void 0 && this.isPatternCharacter()) {
      atom = this.patternCharacter();
    }
    if (ASSERT_EXISTS(atom)) {
      atom.loc = this.loc(begin);
      if (this.isQuantifier()) {
        atom.quantifier = this.quantifier();
      }
      return atom;
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  dotAll() {
    this.consumeChar(".");
    return {
      type: "Set",
      complement: true,
      value: [cc("\n"), cc("\r"), cc("\u2028"), cc("\u2029")]
    };
  }
  atomEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return this.decimalEscapeAtom();
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  decimalEscapeAtom() {
    const value = this.positiveInteger();
    return { type: "GroupBackReference", value };
  }
  characterClassEscape() {
    let set;
    let complement = false;
    switch (this.popChar()) {
      case "d":
        set = digitsCharCodes;
        break;
      case "D":
        set = digitsCharCodes;
        complement = true;
        break;
      case "s":
        set = whitespaceCodes;
        break;
      case "S":
        set = whitespaceCodes;
        complement = true;
        break;
      case "w":
        set = wordCharCodes;
        break;
      case "W":
        set = wordCharCodes;
        complement = true;
        break;
    }
    if (ASSERT_EXISTS(set)) {
      return { type: "Set", value: set, complement };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlEscapeAtom() {
    let escapeCode;
    switch (this.popChar()) {
      case "f":
        escapeCode = cc("\f");
        break;
      case "n":
        escapeCode = cc("\n");
        break;
      case "r":
        escapeCode = cc("\r");
        break;
      case "t":
        escapeCode = cc("	");
        break;
      case "v":
        escapeCode = cc("\v");
        break;
    }
    if (ASSERT_EXISTS(escapeCode)) {
      return { type: "Character", value: escapeCode };
    }
    return ASSERT_NEVER_REACH_HERE();
  }
  controlLetterEscapeAtom() {
    this.consumeChar("c");
    const letter = this.popChar();
    if (/[a-zA-Z]/.test(letter) === false) {
      throw Error("Invalid ");
    }
    const letterCode = letter.toUpperCase().charCodeAt(0) - 64;
    return { type: "Character", value: letterCode };
  }
  nulCharacterAtom() {
    this.consumeChar("0");
    return { type: "Character", value: cc("\0") };
  }
  hexEscapeSequenceAtom() {
    this.consumeChar("x");
    return this.parseHexDigits(2);
  }
  regExpUnicodeEscapeSequenceAtom() {
    this.consumeChar("u");
    return this.parseHexDigits(4);
  }
  identityEscapeAtom() {
    const escapedChar = this.popChar();
    return { type: "Character", value: cc(escapedChar) };
  }
  classPatternCharacterAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case "]":
        throw Error("TBD");
      default:
        const nextChar = this.popChar();
        return { type: "Character", value: cc(nextChar) };
    }
  }
  characterClass() {
    const set = [];
    let complement = false;
    this.consumeChar("[");
    if (this.peekChar(0) === "^") {
      this.consumeChar("^");
      complement = true;
    }
    while (this.isClassAtom()) {
      const from = this.classAtom();
      const isFromSingleChar = from.type === "Character";
      if (isCharacter(from) && this.isRangeDash()) {
        this.consumeChar("-");
        const to = this.classAtom();
        const isToSingleChar = to.type === "Character";
        if (isCharacter(to)) {
          if (to.value < from.value) {
            throw Error("Range out of order in character class");
          }
          set.push({ from: from.value, to: to.value });
        } else {
          insertToSet(from.value, set);
          set.push(cc("-"));
          insertToSet(to.value, set);
        }
      } else {
        insertToSet(from.value, set);
      }
    }
    this.consumeChar("]");
    return { type: "Set", complement, value: set };
  }
  classAtom() {
    switch (this.peekChar()) {
      // istanbul ignore next
      case "]":
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
        throw Error("TBD");
      case "\\":
        return this.classEscape();
      default:
        return this.classPatternCharacterAtom();
    }
  }
  classEscape() {
    this.consumeChar("\\");
    switch (this.peekChar()) {
      // Matches a backspace.
      // (Not to be confused with \b word boundary outside characterClass)
      case "b":
        this.consumeChar("b");
        return { type: "Character", value: cc("\b") };
      case "d":
      case "D":
      case "s":
      case "S":
      case "w":
      case "W":
        return this.characterClassEscape();
      case "f":
      case "n":
      case "r":
      case "t":
      case "v":
        return this.controlEscapeAtom();
      case "c":
        return this.controlLetterEscapeAtom();
      case "0":
        return this.nulCharacterAtom();
      case "x":
        return this.hexEscapeSequenceAtom();
      case "u":
        return this.regExpUnicodeEscapeSequenceAtom();
      default:
        return this.identityEscapeAtom();
    }
  }
  group() {
    let capturing = true;
    this.consumeChar("(");
    switch (this.peekChar(0)) {
      case "?":
        this.consumeChar("?");
        this.consumeChar(":");
        capturing = false;
        break;
      default:
        this.groupIdx++;
        break;
    }
    const value = this.disjunction();
    this.consumeChar(")");
    const groupAst = {
      type: "Group",
      capturing,
      value
    };
    if (capturing) {
      groupAst["idx"] = this.groupIdx;
    }
    return groupAst;
  }
  positiveInteger() {
    let number = this.popChar();
    if (decimalPatternNoZero.test(number) === false) {
      throw Error("Expecting a positive integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  integerIncludingZero() {
    let number = this.popChar();
    if (decimalPattern.test(number) === false) {
      throw Error("Expecting an integer");
    }
    while (decimalPattern.test(this.peekChar(0))) {
      number += this.popChar();
    }
    return parseInt(number, 10);
  }
  patternCharacter() {
    const nextChar = this.popChar();
    switch (nextChar) {
      // istanbul ignore next
      case "\n":
      // istanbul ignore next
      case "\r":
      // istanbul ignore next
      case "\u2028":
      // istanbul ignore next
      case "\u2029":
      // istanbul ignore next
      case "^":
      // istanbul ignore next
      case "$":
      // istanbul ignore next
      case "\\":
      // istanbul ignore next
      case ".":
      // istanbul ignore next
      case "*":
      // istanbul ignore next
      case "+":
      // istanbul ignore next
      case "?":
      // istanbul ignore next
      case "(":
      // istanbul ignore next
      case ")":
      // istanbul ignore next
      case "[":
      // istanbul ignore next
      case "|":
        throw Error("TBD");
      default:
        return { type: "Character", value: cc(nextChar) };
    }
  }
  isRegExpFlag() {
    switch (this.peekChar(0)) {
      case "g":
      case "i":
      case "m":
      case "u":
      case "y":
        return true;
      default:
        return false;
    }
  }
  isRangeDash() {
    return this.peekChar() === "-" && this.isClassAtom(1);
  }
  isDigit() {
    return decimalPattern.test(this.peekChar(0));
  }
  isClassAtom(howMuch = 0) {
    switch (this.peekChar(howMuch)) {
      case "]":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  isTerm() {
    return this.isAtom() || this.isAssertion();
  }
  isAtom() {
    if (this.isPatternCharacter()) {
      return true;
    }
    switch (this.peekChar(0)) {
      case ".":
      case "\\":
      // atomEscape
      case "[":
      // characterClass
      // TODO: isAtom must be called before isAssertion - disambiguate
      case "(":
        return true;
      default:
        return false;
    }
  }
  isAssertion() {
    switch (this.peekChar(0)) {
      case "^":
      case "$":
        return true;
      // '\b' or '\B'
      case "\\":
        switch (this.peekChar(1)) {
          case "b":
          case "B":
            return true;
          default:
            return false;
        }
      // '(?=' or '(?!' or `(?<=` or `(?<!`
      case "(":
        return this.peekChar(1) === "?" && (this.peekChar(2) === "=" || this.peekChar(2) === "!" || this.peekChar(2) === "<" && (this.peekChar(3) === "=" || this.peekChar(3) === "!"));
      default:
        return false;
    }
  }
  isQuantifier() {
    const prevState = this.saveState();
    try {
      return this.quantifier(true) !== void 0;
    } catch (e) {
      return false;
    } finally {
      this.restoreState(prevState);
    }
  }
  isPatternCharacter() {
    switch (this.peekChar()) {
      case "^":
      case "$":
      case "\\":
      case ".":
      case "*":
      case "+":
      case "?":
      case "(":
      case ")":
      case "[":
      case "|":
      case "/":
      case "\n":
      case "\r":
      case "\u2028":
      case "\u2029":
        return false;
      default:
        return true;
    }
  }
  parseHexDigits(howMany) {
    let hexString = "";
    for (let i = 0; i < howMany; i++) {
      const hexChar = this.popChar();
      if (hexDigitPattern.test(hexChar) === false) {
        throw Error("Expecting a HexDecimal digits");
      }
      hexString += hexChar;
    }
    const charCode = parseInt(hexString, 16);
    return { type: "Character", value: charCode };
  }
  peekChar(howMuch = 0) {
    return this.input[this.idx + howMuch];
  }
  popChar() {
    const nextChar = this.peekChar(0);
    this.consumeChar(void 0);
    return nextChar;
  }
  consumeChar(char) {
    if (char !== void 0 && this.input[this.idx] !== char) {
      throw Error("Expected: '" + char + "' but found: '" + this.input[this.idx] + "' at offset: " + this.idx);
    }
    if (this.idx >= this.input.length) {
      throw Error("Unexpected end of input");
    }
    this.idx++;
  }
  loc(begin) {
    return { begin, end: this.idx };
  }
};

// node_modules/.pnpm/@chevrotain+regexp-to-ast@11.1.2/node_modules/@chevrotain/regexp-to-ast/lib/src/base-regexp-visitor.js
var BaseRegExpVisitor = class {
  visitChildren(node) {
    for (const key in node) {
      const child = node[key];
      if (node.hasOwnProperty(key)) {
        if (child.type !== void 0) {
          this.visit(child);
        } else if (Array.isArray(child)) {
          child.forEach((subChild) => {
            this.visit(subChild);
          }, this);
        }
      }
    }
  }
  visit(node) {
    switch (node.type) {
      case "Pattern":
        this.visitPattern(node);
        break;
      case "Flags":
        this.visitFlags(node);
        break;
      case "Disjunction":
        this.visitDisjunction(node);
        break;
      case "Alternative":
        this.visitAlternative(node);
        break;
      case "StartAnchor":
        this.visitStartAnchor(node);
        break;
      case "EndAnchor":
        this.visitEndAnchor(node);
        break;
      case "WordBoundary":
        this.visitWordBoundary(node);
        break;
      case "NonWordBoundary":
        this.visitNonWordBoundary(node);
        break;
      case "Lookahead":
        this.visitLookahead(node);
        break;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        break;
      case "Lookbehind":
        this.visitLookbehind(node);
        break;
      case "NegativeLookbehind":
        this.visitNegativeLookbehind(node);
        break;
      case "Character":
        this.visitCharacter(node);
        break;
      case "Set":
        this.visitSet(node);
        break;
      case "Group":
        this.visitGroup(node);
        break;
      case "GroupBackReference":
        this.visitGroupBackReference(node);
        break;
      case "Quantifier":
        this.visitQuantifier(node);
        break;
    }
    this.visitChildren(node);
  }
  visitPattern(node) {
  }
  visitFlags(node) {
  }
  visitDisjunction(node) {
  }
  visitAlternative(node) {
  }
  // Assertion
  visitStartAnchor(node) {
  }
  visitEndAnchor(node) {
  }
  visitWordBoundary(node) {
  }
  visitNonWordBoundary(node) {
  }
  visitLookahead(node) {
  }
  visitNegativeLookahead(node) {
  }
  visitLookbehind(node) {
  }
  visitNegativeLookbehind(node) {
  }
  // atoms
  visitCharacter(node) {
  }
  visitSet(node) {
  }
  visitGroup(node) {
  }
  visitGroupBackReference(node) {
  }
  visitQuantifier(node) {
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/reg_exp_parser.js
var regExpAstCache = {};
var regExpParser = new RegExpParser();
function getRegExpAst(regExp) {
  const regExpStr = regExp.toString();
  if (regExpAstCache.hasOwnProperty(regExpStr)) {
    return regExpAstCache[regExpStr];
  } else {
    const regExpAst = regExpParser.pattern(regExpStr);
    regExpAstCache[regExpStr] = regExpAst;
    return regExpAst;
  }
}
function clearRegExpParserCache() {
  regExpAstCache = {};
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/reg_exp.js
var complementErrorMessage = "Complement Sets are not supported for first char optimization";
var failedOptimizationPrefixMsg = 'Unable to use "first char" lexer optimizations:\n';
function getOptimizedStartCodesIndices(regExp, ensureOptimizations = false) {
  try {
    const ast = getRegExpAst(regExp);
    const firstChars = firstCharOptimizedIndices(ast.value, {}, ast.flags.ignoreCase);
    return firstChars;
  } catch (e) {
    if (e.message === complementErrorMessage) {
      if (ensureOptimizations) {
        PRINT_WARNING(`${failedOptimizationPrefixMsg}	Unable to optimize: < ${regExp.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);
      }
    } else {
      let msgSuffix = "";
      if (ensureOptimizations) {
        msgSuffix = "\n	This will disable the lexer's first char optimizations.\n	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.";
      }
      PRINT_ERROR(`${failedOptimizationPrefixMsg}
	Failed parsing: < ${regExp.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues` + msgSuffix);
    }
  }
  return [];
}
function firstCharOptimizedIndices(ast, result, ignoreCase) {
  switch (ast.type) {
    case "Disjunction":
      for (let i = 0; i < ast.value.length; i++) {
        firstCharOptimizedIndices(ast.value[i], result, ignoreCase);
      }
      break;
    case "Alternative":
      const terms = ast.value;
      for (let i = 0; i < terms.length; i++) {
        const term = terms[i];
        switch (term.type) {
          case "EndAnchor":
          // A group back reference cannot affect potential starting char.
          // because if a back reference is the first production than automatically
          // the group being referenced has had to come BEFORE so its codes have already been added
          case "GroupBackReference":
          // assertions do not affect potential starting codes
          case "Lookahead":
          case "NegativeLookahead":
          case "Lookbehind":
          case "NegativeLookbehind":
          case "StartAnchor":
          case "WordBoundary":
          case "NonWordBoundary":
            continue;
        }
        const atom = term;
        switch (atom.type) {
          case "Character":
            addOptimizedIdxToResult(atom.value, result, ignoreCase);
            break;
          case "Set":
            if (atom.complement === true) {
              throw Error(complementErrorMessage);
            }
            forEach_default(atom.value, (code) => {
              if (typeof code === "number") {
                addOptimizedIdxToResult(code, result, ignoreCase);
              } else {
                const range = code;
                if (ignoreCase === true) {
                  for (let rangeCode = range.from; rangeCode <= range.to; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                } else {
                  for (let rangeCode = range.from; rangeCode <= range.to && rangeCode < minOptimizationVal; rangeCode++) {
                    addOptimizedIdxToResult(rangeCode, result, ignoreCase);
                  }
                  if (range.to >= minOptimizationVal) {
                    const minUnOptVal = range.from >= minOptimizationVal ? range.from : minOptimizationVal;
                    const maxUnOptVal = range.to;
                    const minOptIdx = charCodeToOptimizedIndex(minUnOptVal);
                    const maxOptIdx = charCodeToOptimizedIndex(maxUnOptVal);
                    for (let currOptIdx = minOptIdx; currOptIdx <= maxOptIdx; currOptIdx++) {
                      result[currOptIdx] = currOptIdx;
                    }
                  }
                }
              }
            });
            break;
          case "Group":
            firstCharOptimizedIndices(atom.value, result, ignoreCase);
            break;
          /* istanbul ignore next */
          default:
            throw Error("Non Exhaustive Match");
        }
        const isOptionalQuantifier = atom.quantifier !== void 0 && atom.quantifier.atLeast === 0;
        if (
          // A group may be optional due to empty contents /(?:)/
          // or if everything inside it is optional /((a)?)/
          atom.type === "Group" && isWholeOptional(atom) === false || // If this term is not a group it may only be optional if it has an optional quantifier
          atom.type !== "Group" && isOptionalQuantifier === false
        ) {
          break;
        }
      }
      break;
    /* istanbul ignore next */
    default:
      throw Error("non exhaustive match!");
  }
  return values_default(result);
}
function addOptimizedIdxToResult(code, result, ignoreCase) {
  const optimizedCharIdx = charCodeToOptimizedIndex(code);
  result[optimizedCharIdx] = optimizedCharIdx;
  if (ignoreCase === true) {
    handleIgnoreCase(code, result);
  }
}
function handleIgnoreCase(code, result) {
  const char = String.fromCharCode(code);
  const upperChar = char.toUpperCase();
  if (upperChar !== char) {
    const optimizedCharIdx = charCodeToOptimizedIndex(upperChar.charCodeAt(0));
    result[optimizedCharIdx] = optimizedCharIdx;
  } else {
    const lowerChar = char.toLowerCase();
    if (lowerChar !== char) {
      const optimizedCharIdx = charCodeToOptimizedIndex(lowerChar.charCodeAt(0));
      result[optimizedCharIdx] = optimizedCharIdx;
    }
  }
}
function findCode(setNode, targetCharCodes) {
  return find_default(setNode.value, (codeOrRange) => {
    if (typeof codeOrRange === "number") {
      return includes_default(targetCharCodes, codeOrRange);
    } else {
      const range = codeOrRange;
      return find_default(targetCharCodes, (targetCode) => range.from <= targetCode && targetCode <= range.to) !== void 0;
    }
  });
}
function isWholeOptional(ast) {
  const quantifier = ast.quantifier;
  if (quantifier && quantifier.atLeast === 0) {
    return true;
  }
  if (!ast.value) {
    return false;
  }
  return isArray_default(ast.value) ? every_default(ast.value, isWholeOptional) : isWholeOptional(ast.value);
}
var CharCodeFinder = class extends BaseRegExpVisitor {
  constructor(targetCharCodes) {
    super();
    this.targetCharCodes = targetCharCodes;
    this.found = false;
  }
  visitChildren(node) {
    if (this.found === true) {
      return;
    }
    switch (node.type) {
      case "Lookahead":
        this.visitLookahead(node);
        return;
      case "NegativeLookahead":
        this.visitNegativeLookahead(node);
        return;
      case "Lookbehind":
        this.visitLookbehind(node);
        return;
      case "NegativeLookbehind":
        this.visitNegativeLookbehind(node);
        return;
    }
    super.visitChildren(node);
  }
  visitCharacter(node) {
    if (includes_default(this.targetCharCodes, node.value)) {
      this.found = true;
    }
  }
  visitSet(node) {
    if (node.complement) {
      if (findCode(node, this.targetCharCodes) === void 0) {
        this.found = true;
      }
    } else {
      if (findCode(node, this.targetCharCodes) !== void 0) {
        this.found = true;
      }
    }
  }
};
function canMatchCharCode(charCodes, pattern) {
  if (pattern instanceof RegExp) {
    const ast = getRegExpAst(pattern);
    const charCodeFinder = new CharCodeFinder(charCodes);
    charCodeFinder.visit(ast);
    return charCodeFinder.found;
  } else {
    return find_default(pattern, (char) => {
      return includes_default(charCodes, char.charCodeAt(0));
    }) !== void 0;
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/lexer.js
var PATTERN = "PATTERN";
var DEFAULT_MODE = "defaultMode";
var MODES = "modes";
function analyzeTokenTypes(tokenTypes, options) {
  options = defaults_default(options, {
    debug: false,
    safeMode: false,
    positionTracking: "full",
    lineTerminatorCharacters: ["\r", "\n"],
    tracer: (msg, action) => action()
  });
  const tracer = options.tracer;
  tracer("initCharCodeToOptimizedIndexMap", () => {
    initCharCodeToOptimizedIndexMap();
  });
  let onlyRelevantTypes;
  tracer("Reject Lexer.NA", () => {
    onlyRelevantTypes = reject_default(tokenTypes, (currType) => {
      return currType[PATTERN] === Lexer.NA;
    });
  });
  let hasCustom = false;
  let allTransformedPatterns;
  tracer("Transform Patterns", () => {
    hasCustom = false;
    allTransformedPatterns = map_default(onlyRelevantTypes, (currType) => {
      const currPattern = currType[PATTERN];
      if (isRegExp_default(currPattern)) {
        const regExpSource = currPattern.source;
        if (regExpSource.length === 1 && // only these regExp meta characters which can appear in a length one regExp
        regExpSource !== "^" && regExpSource !== "$" && regExpSource !== "." && !currPattern.ignoreCase) {
          return regExpSource;
        } else if (regExpSource.length === 2 && regExpSource[0] === "\\" && // not a meta character
        !includes_default([
          "d",
          "D",
          "s",
          "S",
          "t",
          "r",
          "n",
          "t",
          "0",
          "c",
          "b",
          "B",
          "f",
          "v",
          "w",
          "W"
        ], regExpSource[1])) {
          return regExpSource[1];
        } else {
          return addStickyFlag(currPattern);
        }
      } else if (isFunction_default(currPattern)) {
        hasCustom = true;
        return { exec: currPattern };
      } else if (typeof currPattern === "object") {
        hasCustom = true;
        return currPattern;
      } else if (typeof currPattern === "string") {
        if (currPattern.length === 1) {
          return currPattern;
        } else {
          const escapedRegExpString = currPattern.replace(/[\\^$.*+?()[\]{}|]/g, "\\$&");
          const wrappedRegExp = new RegExp(escapedRegExpString);
          return addStickyFlag(wrappedRegExp);
        }
      } else {
        throw Error("non exhaustive match");
      }
    });
  });
  let patternIdxToType;
  let patternIdxToGroup;
  let patternIdxToLongerAltIdxArr;
  let patternIdxToPushMode;
  let patternIdxToPopMode;
  tracer("misc mapping", () => {
    patternIdxToType = map_default(onlyRelevantTypes, (currType) => currType.tokenTypeIdx);
    patternIdxToGroup = map_default(onlyRelevantTypes, (clazz) => {
      const groupName = clazz.GROUP;
      if (groupName === Lexer.SKIPPED) {
        return void 0;
      } else if (isString_default(groupName)) {
        return groupName;
      } else if (isUndefined_default(groupName)) {
        return false;
      } else {
        throw Error("non exhaustive match");
      }
    });
    patternIdxToLongerAltIdxArr = map_default(onlyRelevantTypes, (clazz) => {
      const longerAltType = clazz.LONGER_ALT;
      if (longerAltType) {
        const longerAltIdxArr = isArray_default(longerAltType) ? map_default(longerAltType, (type) => indexOf_default(onlyRelevantTypes, type)) : [indexOf_default(onlyRelevantTypes, longerAltType)];
        return longerAltIdxArr;
      }
    });
    patternIdxToPushMode = map_default(onlyRelevantTypes, (clazz) => clazz.PUSH_MODE);
    patternIdxToPopMode = map_default(onlyRelevantTypes, (clazz) => has_default(clazz, "POP_MODE"));
  });
  let patternIdxToCanLineTerminator;
  tracer("Line Terminator Handling", () => {
    const lineTerminatorCharCodes = getCharCodes(options.lineTerminatorCharacters);
    patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => false);
    if (options.positionTracking !== "onlyOffset") {
      patternIdxToCanLineTerminator = map_default(onlyRelevantTypes, (tokType) => {
        if (has_default(tokType, "LINE_BREAKS")) {
          return !!tokType.LINE_BREAKS;
        } else {
          return checkLineBreaksIssues(tokType, lineTerminatorCharCodes) === false && canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
        }
      });
    }
  });
  let patternIdxToIsCustom;
  let patternIdxToShort;
  let emptyGroups;
  let patternIdxToConfig;
  tracer("Misc Mapping #2", () => {
    patternIdxToIsCustom = map_default(onlyRelevantTypes, isCustomPattern);
    patternIdxToShort = map_default(allTransformedPatterns, isShortPattern);
    emptyGroups = reduce_default(onlyRelevantTypes, (acc, clazz) => {
      const groupName = clazz.GROUP;
      if (isString_default(groupName) && !(groupName === Lexer.SKIPPED)) {
        acc[groupName] = [];
      }
      return acc;
    }, {});
    patternIdxToConfig = map_default(allTransformedPatterns, (x, idx) => {
      return {
        pattern: allTransformedPatterns[idx],
        longerAlt: patternIdxToLongerAltIdxArr[idx],
        canLineTerminator: patternIdxToCanLineTerminator[idx],
        isCustom: patternIdxToIsCustom[idx],
        short: patternIdxToShort[idx],
        group: patternIdxToGroup[idx],
        push: patternIdxToPushMode[idx],
        pop: patternIdxToPopMode[idx],
        tokenTypeIdx: patternIdxToType[idx],
        tokenType: onlyRelevantTypes[idx]
      };
    });
  });
  let canBeOptimized = true;
  let charCodeToPatternIdxToConfig = [];
  if (!options.safeMode) {
    tracer("First Char Optimization", () => {
      charCodeToPatternIdxToConfig = reduce_default(onlyRelevantTypes, (result, currTokType, idx) => {
        if (typeof currTokType.PATTERN === "string") {
          const charCode = currTokType.PATTERN.charCodeAt(0);
          const optimizedIdx = charCodeToOptimizedIndex(charCode);
          addToMapOfArrays(result, optimizedIdx, patternIdxToConfig[idx]);
        } else if (isArray_default(currTokType.START_CHARS_HINT)) {
          let lastOptimizedIdx;
          forEach_default(currTokType.START_CHARS_HINT, (charOrInt) => {
            const charCode = typeof charOrInt === "string" ? charOrInt.charCodeAt(0) : charOrInt;
            const currOptimizedIdx = charCodeToOptimizedIndex(charCode);
            if (lastOptimizedIdx !== currOptimizedIdx) {
              lastOptimizedIdx = currOptimizedIdx;
              addToMapOfArrays(result, currOptimizedIdx, patternIdxToConfig[idx]);
            }
          });
        } else if (isRegExp_default(currTokType.PATTERN)) {
          if (currTokType.PATTERN.unicode) {
            canBeOptimized = false;
            if (options.ensureOptimizations) {
              PRINT_ERROR(`${failedOptimizationPrefixMsg}	Unable to analyze < ${currTokType.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);
            }
          } else {
            const optimizedCodes = getOptimizedStartCodesIndices(currTokType.PATTERN, options.ensureOptimizations);
            if (isEmpty_default(optimizedCodes)) {
              canBeOptimized = false;
            }
            forEach_default(optimizedCodes, (code) => {
              addToMapOfArrays(result, code, patternIdxToConfig[idx]);
            });
          }
        } else {
          if (options.ensureOptimizations) {
            PRINT_ERROR(`${failedOptimizationPrefixMsg}	TokenType: <${currTokType.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`);
          }
          canBeOptimized = false;
        }
        return result;
      }, []);
    });
  }
  return {
    emptyGroups,
    patternIdxToConfig,
    charCodeToPatternIdxToConfig,
    hasCustom,
    canBeOptimized
  };
}
function validatePatterns(tokenTypes, validModesNames) {
  let errors = [];
  const missingResult = findMissingPatterns(tokenTypes);
  errors = errors.concat(missingResult.errors);
  const invalidResult = findInvalidPatterns(missingResult.valid);
  const validTokenTypes = invalidResult.valid;
  errors = errors.concat(invalidResult.errors);
  errors = errors.concat(validateRegExpPattern(validTokenTypes));
  errors = errors.concat(findInvalidGroupType(validTokenTypes));
  errors = errors.concat(findModesThatDoNotExist(validTokenTypes, validModesNames));
  errors = errors.concat(findUnreachablePatterns(validTokenTypes));
  return errors;
}
function validateRegExpPattern(tokenTypes) {
  let errors = [];
  const withRegExpPatterns = filter_default(tokenTypes, (currTokType) => isRegExp_default(currTokType[PATTERN]));
  errors = errors.concat(findEndOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findStartOfInputAnchor(withRegExpPatterns));
  errors = errors.concat(findUnsupportedFlags(withRegExpPatterns));
  errors = errors.concat(findDuplicatePatterns(withRegExpPatterns));
  errors = errors.concat(findEmptyMatchRegExps(withRegExpPatterns));
  return errors;
}
function findMissingPatterns(tokenTypes) {
  const tokenTypesWithMissingPattern = filter_default(tokenTypes, (currType) => {
    return !has_default(currType, PATTERN);
  });
  const errors = map_default(tokenTypesWithMissingPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- missing static 'PATTERN' property",
      type: LexerDefinitionErrorType.MISSING_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithMissingPattern);
  return { errors, valid };
}
function findInvalidPatterns(tokenTypes) {
  const tokenTypesWithInvalidPattern = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return !isRegExp_default(pattern) && !isFunction_default(pattern) && !has_default(pattern, "exec") && !isString_default(pattern);
  });
  const errors = map_default(tokenTypesWithInvalidPattern, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",
      type: LexerDefinitionErrorType.INVALID_PATTERN,
      tokenTypes: [currType]
    };
  });
  const valid = difference_default(tokenTypes, tokenTypesWithInvalidPattern);
  return { errors, valid };
}
var end_of_input = /[^\\][$]/;
function findEndOfInputAnchor(tokenTypes) {
  class EndAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitEndAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const endAnchorVisitor = new EndAnchorFinder();
      endAnchorVisitor.visit(regexpAst);
      return endAnchorVisitor.found;
    } catch (e) {
      return end_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain end of input anchor '$'\n	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.EOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findEmptyMatchRegExps(tokenTypes) {
  const matchesEmptyString = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    return pattern.test("");
  });
  const errors = map_default(matchesEmptyString, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' must not match an empty string",
      type: LexerDefinitionErrorType.EMPTY_MATCH_PATTERN,
      tokenTypes: [currType]
    };
  });
  return errors;
}
var start_of_input = /[^\\[][\^]|^\^/;
function findStartOfInputAnchor(tokenTypes) {
  class StartAnchorFinder extends BaseRegExpVisitor {
    constructor() {
      super(...arguments);
      this.found = false;
    }
    visitStartAnchor(node) {
      this.found = true;
    }
  }
  const invalidRegex = filter_default(tokenTypes, (currType) => {
    const pattern = currType.PATTERN;
    try {
      const regexpAst = getRegExpAst(pattern);
      const startAnchorVisitor = new StartAnchorFinder();
      startAnchorVisitor.visit(regexpAst);
      return startAnchorVisitor.found;
    } catch (e) {
      return start_of_input.test(pattern.source);
    }
  });
  const errors = map_default(invalidRegex, (currType) => {
    return {
      message: "Unexpected RegExp Anchor Error:\n	Token Type: ->" + currType.name + "<- static 'PATTERN' cannot contain start of input anchor '^'\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.",
      type: LexerDefinitionErrorType.SOI_ANCHOR_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findUnsupportedFlags(tokenTypes) {
  const invalidFlags = filter_default(tokenTypes, (currType) => {
    const pattern = currType[PATTERN];
    return pattern instanceof RegExp && (pattern.multiline || pattern.global);
  });
  const errors = map_default(invalidFlags, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'PATTERN' may NOT contain global('g') or multiline('m')",
      type: LexerDefinitionErrorType.UNSUPPORTED_FLAGS_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findDuplicatePatterns(tokenTypes) {
  const found = [];
  let identicalPatterns = map_default(tokenTypes, (outerType) => {
    return reduce_default(tokenTypes, (result, innerType) => {
      if (outerType.PATTERN.source === innerType.PATTERN.source && !includes_default(found, innerType) && innerType.PATTERN !== Lexer.NA) {
        found.push(innerType);
        result.push(innerType);
        return result;
      }
      return result;
    }, []);
  });
  identicalPatterns = compact_default(identicalPatterns);
  const duplicatePatterns = filter_default(identicalPatterns, (currIdenticalSet) => {
    return currIdenticalSet.length > 1;
  });
  const errors = map_default(duplicatePatterns, (setOfIdentical) => {
    const tokenTypeNames = map_default(setOfIdentical, (currType) => {
      return currType.name;
    });
    const dupPatternSrc = head_default(setOfIdentical).PATTERN;
    return {
      message: `The same RegExp pattern ->${dupPatternSrc}<-has been used in all of the following Token Types: ${tokenTypeNames.join(", ")} <-`,
      type: LexerDefinitionErrorType.DUPLICATE_PATTERNS_FOUND,
      tokenTypes: setOfIdentical
    };
  });
  return errors;
}
function findInvalidGroupType(tokenTypes) {
  const invalidTypes = filter_default(tokenTypes, (clazz) => {
    if (!has_default(clazz, "GROUP")) {
      return false;
    }
    const group = clazz.GROUP;
    return group !== Lexer.SKIPPED && group !== Lexer.NA && !isString_default(group);
  });
  const errors = map_default(invalidTypes, (currType) => {
    return {
      message: "Token Type: ->" + currType.name + "<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",
      type: LexerDefinitionErrorType.INVALID_GROUP_TYPE_FOUND,
      tokenTypes: [currType]
    };
  });
  return errors;
}
function findModesThatDoNotExist(tokenTypes, validModes) {
  const invalidModes = filter_default(tokenTypes, (clazz) => {
    return clazz.PUSH_MODE !== void 0 && !includes_default(validModes, clazz.PUSH_MODE);
  });
  const errors = map_default(invalidModes, (tokType) => {
    const msg = `Token Type: ->${tokType.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${tokType.PUSH_MODE}<-which does not exist`;
    return {
      message: msg,
      type: LexerDefinitionErrorType.PUSH_MODE_DOES_NOT_EXIST,
      tokenTypes: [tokType]
    };
  });
  return errors;
}
function findUnreachablePatterns(tokenTypes) {
  const errors = [];
  const canBeTested = reduce_default(tokenTypes, (result, tokType, idx) => {
    const pattern = tokType.PATTERN;
    if (pattern === Lexer.NA) {
      return result;
    }
    if (isString_default(pattern)) {
      result.push({ str: pattern, idx, tokenType: tokType });
    } else if (isRegExp_default(pattern) && noMetaChar(pattern)) {
      result.push({ str: pattern.source, idx, tokenType: tokType });
    }
    return result;
  }, []);
  forEach_default(tokenTypes, (aTokType, aIdx) => {
    forEach_default(canBeTested, ({ str: bStr, idx: bIdx, tokenType: bTokType }) => {
      if (aIdx < bIdx && tryToMatchStrToPattern(bStr, aTokType.PATTERN)) {
        const msg = `Token: ->${bTokType.name}<- can never be matched.
Because it appears AFTER the Token Type ->${aTokType.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;
        errors.push({
          message: msg,
          type: LexerDefinitionErrorType.UNREACHABLE_PATTERN,
          tokenTypes: [aTokType, bTokType]
        });
      }
    });
  });
  return errors;
}
function tryToMatchStrToPattern(str, pattern) {
  if (isRegExp_default(pattern)) {
    if (usesLookAheadOrBehind(pattern)) {
      return false;
    }
    const regExpArray = pattern.exec(str);
    return regExpArray !== null && regExpArray.index === 0;
  } else if (isFunction_default(pattern)) {
    return pattern(str, 0, [], {});
  } else if (has_default(pattern, "exec")) {
    return pattern.exec(str, 0, [], {});
  } else if (typeof pattern === "string") {
    return pattern === str;
  } else {
    throw Error("non exhaustive match");
  }
}
function noMetaChar(regExp) {
  const metaChars = [
    ".",
    "\\",
    "[",
    "]",
    "|",
    "^",
    "$",
    "(",
    ")",
    "?",
    "*",
    "+",
    "{"
  ];
  return find_default(metaChars, (char) => regExp.source.indexOf(char) !== -1) === void 0;
}
function usesLookAheadOrBehind(regExp) {
  return /(\(\?=)|(\(\?!)|(\(\?<=)|(\(\?<!)/.test(regExp.source);
}
function addStickyFlag(pattern) {
  const flags = pattern.ignoreCase ? "iy" : "y";
  return new RegExp(`${pattern.source}`, flags);
}
function performRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const errors = [];
  if (!has_default(lexerDefinition, DEFAULT_MODE)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + DEFAULT_MODE + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE
    });
  }
  if (!has_default(lexerDefinition, MODES)) {
    errors.push({
      message: "A MultiMode Lexer cannot be initialized without a <" + MODES + "> property in its definition\n",
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY
    });
  }
  if (has_default(lexerDefinition, MODES) && has_default(lexerDefinition, DEFAULT_MODE) && !has_default(lexerDefinition.modes, lexerDefinition.defaultMode)) {
    errors.push({
      message: `A MultiMode Lexer cannot be initialized with a ${DEFAULT_MODE}: <${lexerDefinition.defaultMode}>which does not exist
`,
      type: LexerDefinitionErrorType.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST
    });
  }
  if (has_default(lexerDefinition, MODES)) {
    forEach_default(lexerDefinition.modes, (currModeValue, currModeName) => {
      forEach_default(currModeValue, (currTokType, currIdx) => {
        if (isUndefined_default(currTokType)) {
          errors.push({
            message: `A Lexer cannot be initialized using an undefined Token Type. Mode:<${currModeName}> at index: <${currIdx}>
`,
            type: LexerDefinitionErrorType.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED
          });
        } else if (has_default(currTokType, "LONGER_ALT")) {
          const longerAlt = isArray_default(currTokType.LONGER_ALT) ? currTokType.LONGER_ALT : [currTokType.LONGER_ALT];
          forEach_default(longerAlt, (currLongerAlt) => {
            if (!isUndefined_default(currLongerAlt) && !includes_default(currModeValue, currLongerAlt)) {
              errors.push({
                message: `A MultiMode Lexer cannot be initialized with a longer_alt <${currLongerAlt.name}> on token <${currTokType.name}> outside of mode <${currModeName}>
`,
                type: LexerDefinitionErrorType.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE
              });
            }
          });
        }
      });
    });
  }
  return errors;
}
function performWarningRuntimeChecks(lexerDefinition, trackLines, lineTerminatorCharacters) {
  const warnings = [];
  let hasAnyLineBreak = false;
  const allTokenTypes = compact_default(flatten_default(values_default(lexerDefinition.modes)));
  const concreteTokenTypes = reject_default(allTokenTypes, (currType) => currType[PATTERN] === Lexer.NA);
  const terminatorCharCodes = getCharCodes(lineTerminatorCharacters);
  if (trackLines) {
    forEach_default(concreteTokenTypes, (tokType) => {
      const currIssue = checkLineBreaksIssues(tokType, terminatorCharCodes);
      if (currIssue !== false) {
        const message = buildLineBreakIssueMessage(tokType, currIssue);
        const warningDescriptor = {
          message,
          type: currIssue.issue,
          tokenType: tokType
        };
        warnings.push(warningDescriptor);
      } else {
        if (has_default(tokType, "LINE_BREAKS")) {
          if (tokType.LINE_BREAKS === true) {
            hasAnyLineBreak = true;
          }
        } else {
          if (canMatchCharCode(terminatorCharCodes, tokType.PATTERN)) {
            hasAnyLineBreak = true;
          }
        }
      }
    });
  }
  if (trackLines && !hasAnyLineBreak) {
    warnings.push({
      message: "Warning: No LINE_BREAKS Found.\n	This Lexer has been defined to track line and column information,\n	But none of the Token Types can be identified as matching a line terminator.\n	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS \n	for details.",
      type: LexerDefinitionErrorType.NO_LINE_BREAKS_FLAGS
    });
  }
  return warnings;
}
function cloneEmptyGroups(emptyGroups) {
  const clonedResult = {};
  const groupKeys = keys_default(emptyGroups);
  forEach_default(groupKeys, (currKey) => {
    const currGroupValue = emptyGroups[currKey];
    if (isArray_default(currGroupValue)) {
      clonedResult[currKey] = [];
    } else {
      throw Error("non exhaustive match");
    }
  });
  return clonedResult;
}
function isCustomPattern(tokenType) {
  const pattern = tokenType.PATTERN;
  if (isRegExp_default(pattern)) {
    return false;
  } else if (isFunction_default(pattern)) {
    return true;
  } else if (has_default(pattern, "exec")) {
    return true;
  } else if (isString_default(pattern)) {
    return false;
  } else {
    throw Error("non exhaustive match");
  }
}
function isShortPattern(pattern) {
  if (isString_default(pattern) && pattern.length === 1) {
    return pattern.charCodeAt(0);
  } else {
    return false;
  }
}
var LineTerminatorOptimizedTester = {
  // implements /\n|\r\n?/g.test
  test: function(text2) {
    const len = text2.length;
    for (let i = this.lastIndex; i < len; i++) {
      const c = text2.charCodeAt(i);
      if (c === 10) {
        this.lastIndex = i + 1;
        return true;
      } else if (c === 13) {
        if (text2.charCodeAt(i + 1) === 10) {
          this.lastIndex = i + 2;
        } else {
          this.lastIndex = i + 1;
        }
        return true;
      }
    }
    return false;
  },
  lastIndex: 0
};
function checkLineBreaksIssues(tokType, lineTerminatorCharCodes) {
  if (has_default(tokType, "LINE_BREAKS")) {
    return false;
  } else {
    if (isRegExp_default(tokType.PATTERN)) {
      try {
        canMatchCharCode(lineTerminatorCharCodes, tokType.PATTERN);
      } catch (e) {
        return {
          issue: LexerDefinitionErrorType.IDENTIFY_TERMINATOR,
          errMsg: e.message
        };
      }
      return false;
    } else if (isString_default(tokType.PATTERN)) {
      return false;
    } else if (isCustomPattern(tokType)) {
      return { issue: LexerDefinitionErrorType.CUSTOM_LINE_BREAK };
    } else {
      throw Error("non exhaustive match");
    }
  }
}
function buildLineBreakIssueMessage(tokType, details) {
  if (details.issue === LexerDefinitionErrorType.IDENTIFY_TERMINATOR) {
    return `Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${tokType.name}> Token Type
	 Root cause: ${details.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;
  } else if (details.issue === LexerDefinitionErrorType.CUSTOM_LINE_BREAK) {
    return `Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${tokType.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;
  } else {
    throw Error("non exhaustive match");
  }
}
function getCharCodes(charsOrCodes) {
  const charCodes = map_default(charsOrCodes, (numOrString) => {
    if (isString_default(numOrString)) {
      return numOrString.charCodeAt(0);
    } else {
      return numOrString;
    }
  });
  return charCodes;
}
function addToMapOfArrays(map2, key, value) {
  if (map2[key] === void 0) {
    map2[key] = [value];
  } else {
    map2[key].push(value);
  }
}
var minOptimizationVal = 256;
var charCodeToOptimizedIdxMap = [];
function charCodeToOptimizedIndex(charCode) {
  return charCode < minOptimizationVal ? charCode : charCodeToOptimizedIdxMap[charCode];
}
function initCharCodeToOptimizedIndexMap() {
  if (isEmpty_default(charCodeToOptimizedIdxMap)) {
    charCodeToOptimizedIdxMap = new Array(65536);
    for (let i = 0; i < 65536; i++) {
      charCodeToOptimizedIdxMap[i] = i > 255 ? 255 + ~~(i / 255) : i;
    }
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/tokens.js
function tokenStructuredMatcher(tokInstance, tokConstructor) {
  const instanceType = tokInstance.tokenTypeIdx;
  if (instanceType === tokConstructor.tokenTypeIdx) {
    return true;
  } else {
    return tokConstructor.isParent === true && tokConstructor.categoryMatchesMap[instanceType] === true;
  }
}
function tokenStructuredMatcherNoCategories(token, tokType) {
  return token.tokenTypeIdx === tokType.tokenTypeIdx;
}
var tokenShortNameIdx = 1;
var tokenIdxToClass = {};
function augmentTokenTypes(tokenTypes) {
  const tokenTypesAndParents = expandCategories(tokenTypes);
  assignTokenDefaultProps(tokenTypesAndParents);
  assignCategoriesMapProp(tokenTypesAndParents);
  assignCategoriesTokensProp(tokenTypesAndParents);
  forEach_default(tokenTypesAndParents, (tokType) => {
    tokType.isParent = tokType.categoryMatches.length > 0;
  });
}
function expandCategories(tokenTypes) {
  let result = clone_default(tokenTypes);
  let categories = tokenTypes;
  let searching = true;
  while (searching) {
    categories = compact_default(flatten_default(map_default(categories, (currTokType) => currTokType.CATEGORIES)));
    const newCategories = difference_default(categories, result);
    result = result.concat(newCategories);
    if (isEmpty_default(newCategories)) {
      searching = false;
    } else {
      categories = newCategories;
    }
  }
  return result;
}
function assignTokenDefaultProps(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    if (!hasShortKeyProperty(currTokType)) {
      tokenIdxToClass[tokenShortNameIdx] = currTokType;
      currTokType.tokenTypeIdx = tokenShortNameIdx++;
    }
    if (hasCategoriesProperty(currTokType) && !isArray_default(currTokType.CATEGORIES)) {
      currTokType.CATEGORIES = [currTokType.CATEGORIES];
    }
    if (!hasCategoriesProperty(currTokType)) {
      currTokType.CATEGORIES = [];
    }
    if (!hasExtendingTokensTypesProperty(currTokType)) {
      currTokType.categoryMatches = [];
    }
    if (!hasExtendingTokensTypesMapProperty(currTokType)) {
      currTokType.categoryMatchesMap = {};
    }
  });
}
function assignCategoriesTokensProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    currTokType.categoryMatches = [];
    forEach_default(currTokType.categoryMatchesMap, (val, key) => {
      currTokType.categoryMatches.push(tokenIdxToClass[key].tokenTypeIdx);
    });
  });
}
function assignCategoriesMapProp(tokenTypes) {
  forEach_default(tokenTypes, (currTokType) => {
    singleAssignCategoriesToksMap([], currTokType);
  });
}
function singleAssignCategoriesToksMap(path, nextNode) {
  forEach_default(path, (pathNode) => {
    nextNode.categoryMatchesMap[pathNode.tokenTypeIdx] = true;
  });
  forEach_default(nextNode.CATEGORIES, (nextCategory) => {
    const newPath = path.concat(nextNode);
    if (!includes_default(newPath, nextCategory)) {
      singleAssignCategoriesToksMap(newPath, nextCategory);
    }
  });
}
function hasShortKeyProperty(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}
function hasCategoriesProperty(tokType) {
  return has_default(tokType, "CATEGORIES");
}
function hasExtendingTokensTypesProperty(tokType) {
  return has_default(tokType, "categoryMatches");
}
function hasExtendingTokensTypesMapProperty(tokType) {
  return has_default(tokType, "categoryMatchesMap");
}
function isTokenType(tokType) {
  return has_default(tokType, "tokenTypeIdx");
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/lexer_errors_public.js
var defaultLexerErrorProvider = {
  buildUnableToPopLexerModeMessage(token) {
    return `Unable to pop Lexer Mode after encountering Token ->${token.image}<- The Mode Stack is empty`;
  },
  buildUnexpectedCharactersMessage(fullText, startOffset, length, line, column, mode) {
    return `unexpected character: ->${fullText.charAt(startOffset)}<- at offset: ${startOffset}, skipped ${length} characters.`;
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/lexer_public.js
var LexerDefinitionErrorType;
(function(LexerDefinitionErrorType2) {
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MISSING_PATTERN"] = 0] = "MISSING_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_PATTERN"] = 1] = "INVALID_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EOI_ANCHOR_FOUND"] = 2] = "EOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNSUPPORTED_FLAGS_FOUND"] = 3] = "UNSUPPORTED_FLAGS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["DUPLICATE_PATTERNS_FOUND"] = 4] = "DUPLICATE_PATTERNS_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["INVALID_GROUP_TYPE_FOUND"] = 5] = "INVALID_GROUP_TYPE_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["PUSH_MODE_DOES_NOT_EXIST"] = 6] = "PUSH_MODE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE"] = 7] = "MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY"] = 8] = "MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST"] = 9] = "MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED"] = 10] = "LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["SOI_ANCHOR_FOUND"] = 11] = "SOI_ANCHOR_FOUND";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["EMPTY_MATCH_PATTERN"] = 12] = "EMPTY_MATCH_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["NO_LINE_BREAKS_FLAGS"] = 13] = "NO_LINE_BREAKS_FLAGS";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["UNREACHABLE_PATTERN"] = 14] = "UNREACHABLE_PATTERN";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["IDENTIFY_TERMINATOR"] = 15] = "IDENTIFY_TERMINATOR";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["CUSTOM_LINE_BREAK"] = 16] = "CUSTOM_LINE_BREAK";
  LexerDefinitionErrorType2[LexerDefinitionErrorType2["MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"] = 17] = "MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE";
})(LexerDefinitionErrorType || (LexerDefinitionErrorType = {}));
var DEFAULT_LEXER_CONFIG = {
  deferDefinitionErrorsHandling: false,
  positionTracking: "full",
  lineTerminatorsPattern: /\n|\r\n?/g,
  lineTerminatorCharacters: ["\n", "\r"],
  ensureOptimizations: false,
  safeMode: false,
  errorMessageProvider: defaultLexerErrorProvider,
  traceInitPerf: false,
  skipValidations: false,
  recoveryEnabled: true
};
Object.freeze(DEFAULT_LEXER_CONFIG);
var Lexer = class {
  constructor(lexerDefinition, config2 = DEFAULT_LEXER_CONFIG) {
    this.lexerDefinition = lexerDefinition;
    this.lexerDefinitionErrors = [];
    this.lexerDefinitionWarning = [];
    this.patternIdxToConfig = {};
    this.charCodeToPatternIdxToConfig = {};
    this.modes = [];
    this.emptyGroups = {};
    this.trackStartLines = true;
    this.trackEndLines = true;
    this.hasCustom = false;
    this.canModeBeOptimized = {};
    this.TRACE_INIT = (phaseDesc, phaseImpl) => {
      if (this.traceInitPerf === true) {
        this.traceInitIndent++;
        const indent = new Array(this.traceInitIndent + 1).join("	");
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          console.log(`${indent}--> <${phaseDesc}>`);
        }
        const { time, value } = timer(phaseImpl);
        const traceMethod = time > 10 ? console.warn : console.log;
        if (this.traceInitIndent < this.traceInitMaxIdent) {
          traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
        }
        this.traceInitIndent--;
        return value;
      } else {
        return phaseImpl();
      }
    };
    if (typeof config2 === "boolean") {
      throw Error("The second argument to the Lexer constructor is now an ILexerConfig Object.\na boolean 2nd argument is no longer supported");
    }
    this.config = assign_default({}, DEFAULT_LEXER_CONFIG, config2);
    const traceInitVal = this.config.traceInitPerf;
    if (traceInitVal === true) {
      this.traceInitMaxIdent = Infinity;
      this.traceInitPerf = true;
    } else if (typeof traceInitVal === "number") {
      this.traceInitMaxIdent = traceInitVal;
      this.traceInitPerf = true;
    }
    this.traceInitIndent = -1;
    this.TRACE_INIT("Lexer Constructor", () => {
      let actualDefinition;
      let hasOnlySingleMode = true;
      this.TRACE_INIT("Lexer Config handling", () => {
        if (this.config.lineTerminatorsPattern === DEFAULT_LEXER_CONFIG.lineTerminatorsPattern) {
          this.config.lineTerminatorsPattern = LineTerminatorOptimizedTester;
        } else {
          if (this.config.lineTerminatorCharacters === DEFAULT_LEXER_CONFIG.lineTerminatorCharacters) {
            throw Error("Error: Missing <lineTerminatorCharacters> property on the Lexer config.\n	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS");
          }
        }
        if (config2.safeMode && config2.ensureOptimizations) {
          throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');
        }
        this.trackStartLines = /full|onlyStart/i.test(this.config.positionTracking);
        this.trackEndLines = /full/i.test(this.config.positionTracking);
        if (isArray_default(lexerDefinition)) {
          actualDefinition = {
            modes: { defaultMode: clone_default(lexerDefinition) },
            defaultMode: DEFAULT_MODE
          };
        } else {
          hasOnlySingleMode = false;
          actualDefinition = clone_default(lexerDefinition);
        }
      });
      if (this.config.skipValidations === false) {
        this.TRACE_INIT("performRuntimeChecks", () => {
          this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(performRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
        this.TRACE_INIT("performWarningRuntimeChecks", () => {
          this.lexerDefinitionWarning = this.lexerDefinitionWarning.concat(performWarningRuntimeChecks(actualDefinition, this.trackStartLines, this.config.lineTerminatorCharacters));
        });
      }
      actualDefinition.modes = actualDefinition.modes ? actualDefinition.modes : {};
      forEach_default(actualDefinition.modes, (currModeValue, currModeName) => {
        actualDefinition.modes[currModeName] = reject_default(currModeValue, (currTokType) => isUndefined_default(currTokType));
      });
      const allModeNames = keys_default(actualDefinition.modes);
      forEach_default(actualDefinition.modes, (currModDef, currModName) => {
        this.TRACE_INIT(`Mode: <${currModName}> processing`, () => {
          this.modes.push(currModName);
          if (this.config.skipValidations === false) {
            this.TRACE_INIT(`validatePatterns`, () => {
              this.lexerDefinitionErrors = this.lexerDefinitionErrors.concat(validatePatterns(currModDef, allModeNames));
            });
          }
          if (isEmpty_default(this.lexerDefinitionErrors)) {
            augmentTokenTypes(currModDef);
            let currAnalyzeResult;
            this.TRACE_INIT(`analyzeTokenTypes`, () => {
              currAnalyzeResult = analyzeTokenTypes(currModDef, {
                lineTerminatorCharacters: this.config.lineTerminatorCharacters,
                positionTracking: config2.positionTracking,
                ensureOptimizations: config2.ensureOptimizations,
                safeMode: config2.safeMode,
                tracer: this.TRACE_INIT
              });
            });
            this.patternIdxToConfig[currModName] = currAnalyzeResult.patternIdxToConfig;
            this.charCodeToPatternIdxToConfig[currModName] = currAnalyzeResult.charCodeToPatternIdxToConfig;
            this.emptyGroups = assign_default({}, this.emptyGroups, currAnalyzeResult.emptyGroups);
            this.hasCustom = currAnalyzeResult.hasCustom || this.hasCustom;
            this.canModeBeOptimized[currModName] = currAnalyzeResult.canBeOptimized;
          }
        });
      });
      this.defaultMode = actualDefinition.defaultMode;
      if (!isEmpty_default(this.lexerDefinitionErrors) && !this.config.deferDefinitionErrorsHandling) {
        const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
          return error.message;
        });
        const allErrMessagesString = allErrMessages.join("-----------------------\n");
        throw new Error("Errors detected in definition of Lexer:\n" + allErrMessagesString);
      }
      forEach_default(this.lexerDefinitionWarning, (warningDescriptor) => {
        PRINT_WARNING(warningDescriptor.message);
      });
      this.TRACE_INIT("Choosing sub-methods implementations", () => {
        if (hasOnlySingleMode) {
          this.handleModes = noop_default;
        }
        if (this.trackStartLines === false) {
          this.computeNewColumn = identity_default;
        }
        if (this.trackEndLines === false) {
          this.updateTokenEndLineColumnLocation = noop_default;
        }
        if (/full/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createFullToken;
        } else if (/onlyStart/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createStartOnlyToken;
        } else if (/onlyOffset/i.test(this.config.positionTracking)) {
          this.createTokenInstance = this.createOffsetOnlyToken;
        } else {
          throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);
        }
        if (this.hasCustom) {
          this.addToken = this.addTokenUsingPush;
          this.handlePayload = this.handlePayloadWithCustom;
        } else {
          this.addToken = this.addTokenUsingMemberAccess;
          this.handlePayload = this.handlePayloadNoCustom;
        }
      });
      this.TRACE_INIT("Failed Optimization Warnings", () => {
        const unOptimizedModes = reduce_default(this.canModeBeOptimized, (cannotBeOptimized, canBeOptimized, modeName) => {
          if (canBeOptimized === false) {
            cannotBeOptimized.push(modeName);
          }
          return cannotBeOptimized;
        }, []);
        if (config2.ensureOptimizations && !isEmpty_default(unOptimizedModes)) {
          throw Error(`Lexer Modes: < ${unOptimizedModes.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`);
        }
      });
      this.TRACE_INIT("clearRegExpParserCache", () => {
        clearRegExpParserCache();
      });
      this.TRACE_INIT("toFastProperties", () => {
        toFastProperties(this);
      });
    });
  }
  tokenize(text2, initialMode = this.defaultMode) {
    if (!isEmpty_default(this.lexerDefinitionErrors)) {
      const allErrMessages = map_default(this.lexerDefinitionErrors, (error) => {
        return error.message;
      });
      const allErrMessagesString = allErrMessages.join("-----------------------\n");
      throw new Error("Unable to Tokenize because Errors detected in definition of Lexer:\n" + allErrMessagesString);
    }
    return this.tokenizeInternal(text2, initialMode);
  }
  // There is quite a bit of duplication between this and "tokenizeInternalLazy"
  // This is intentional due to performance considerations.
  // this method also used quite a bit of `!` none null assertions because it is too optimized
  // for `tsc` to always understand it is "safe"
  tokenizeInternal(text2, initialMode) {
    let i, j, k, matchAltImage, longerAlt, matchedImage, payload, altPayload, imageLength, group, tokType, newToken, errLength, msg, match;
    const orgText = text2;
    const orgLength = orgText.length;
    let offset = 0;
    let matchedTokensIndex = 0;
    const guessedNumberOfTokens = this.hasCustom ? 0 : Math.floor(text2.length / 10);
    const matchedTokens = new Array(guessedNumberOfTokens);
    const errors = [];
    let line = this.trackStartLines ? 1 : void 0;
    let column = this.trackStartLines ? 1 : void 0;
    const groups = cloneEmptyGroups(this.emptyGroups);
    const trackLines = this.trackStartLines;
    const lineTerminatorPattern = this.config.lineTerminatorsPattern;
    let currModePatternsLength = 0;
    let patternIdxToConfig = [];
    let currCharCodeToPatternIdxToConfig = [];
    const modeStack = [];
    const emptyArray = [];
    Object.freeze(emptyArray);
    let isOptimizedMode = false;
    const pop_mode = (popToken) => {
      if (modeStack.length === 1 && // if we have both a POP_MODE and a PUSH_MODE this is in-fact a "transition"
      // So no error should occur.
      popToken.tokenType.PUSH_MODE === void 0) {
        const msg2 = this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(popToken);
        errors.push({
          offset: popToken.startOffset,
          line: popToken.startLine,
          column: popToken.startColumn,
          length: popToken.image.length,
          message: msg2
        });
      } else {
        modeStack.pop();
        const newMode = last_default(modeStack);
        patternIdxToConfig = this.patternIdxToConfig[newMode];
        currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
        currModePatternsLength = patternIdxToConfig.length;
        const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
        if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
          isOptimizedMode = true;
        } else {
          isOptimizedMode = false;
        }
      }
    };
    function push_mode(newMode) {
      modeStack.push(newMode);
      currCharCodeToPatternIdxToConfig = this.charCodeToPatternIdxToConfig[newMode];
      patternIdxToConfig = this.patternIdxToConfig[newMode];
      currModePatternsLength = patternIdxToConfig.length;
      currModePatternsLength = patternIdxToConfig.length;
      const modeCanBeOptimized = this.canModeBeOptimized[newMode] && this.config.safeMode === false;
      if (currCharCodeToPatternIdxToConfig && modeCanBeOptimized) {
        isOptimizedMode = true;
      } else {
        isOptimizedMode = false;
      }
    }
    push_mode.call(this, initialMode);
    let currConfig;
    const recoveryEnabled = this.config.recoveryEnabled;
    while (offset < orgLength) {
      matchedImage = null;
      imageLength = -1;
      const nextCharCode = orgText.charCodeAt(offset);
      let chosenPatternIdxToConfig;
      if (isOptimizedMode) {
        const optimizedCharIdx = charCodeToOptimizedIndex(nextCharCode);
        const possiblePatterns = currCharCodeToPatternIdxToConfig[optimizedCharIdx];
        chosenPatternIdxToConfig = possiblePatterns !== void 0 ? possiblePatterns : emptyArray;
      } else {
        chosenPatternIdxToConfig = patternIdxToConfig;
      }
      const chosenPatternsLength = chosenPatternIdxToConfig.length;
      for (i = 0; i < chosenPatternsLength; i++) {
        currConfig = chosenPatternIdxToConfig[i];
        const currPattern = currConfig.pattern;
        payload = null;
        const singleCharCode = currConfig.short;
        if (singleCharCode !== false) {
          if (nextCharCode === singleCharCode) {
            imageLength = 1;
            matchedImage = currPattern;
          }
        } else if (currConfig.isCustom === true) {
          match = currPattern.exec(orgText, offset, matchedTokens, groups);
          if (match !== null) {
            matchedImage = match[0];
            imageLength = matchedImage.length;
            if (match.payload !== void 0) {
              payload = match.payload;
            }
          } else {
            matchedImage = null;
          }
        } else {
          currPattern.lastIndex = offset;
          imageLength = this.matchLength(currPattern, text2, offset);
        }
        if (imageLength !== -1) {
          longerAlt = currConfig.longerAlt;
          if (longerAlt !== void 0) {
            matchedImage = text2.substring(offset, offset + imageLength);
            const longerAltLength = longerAlt.length;
            for (k = 0; k < longerAltLength; k++) {
              const longerAltConfig = patternIdxToConfig[longerAlt[k]];
              const longerAltPattern = longerAltConfig.pattern;
              altPayload = null;
              if (longerAltConfig.isCustom === true) {
                match = longerAltPattern.exec(orgText, offset, matchedTokens, groups);
                if (match !== null) {
                  matchAltImage = match[0];
                  if (match.payload !== void 0) {
                    altPayload = match.payload;
                  }
                } else {
                  matchAltImage = null;
                }
              } else {
                longerAltPattern.lastIndex = offset;
                matchAltImage = this.match(longerAltPattern, text2, offset);
              }
              if (matchAltImage && matchAltImage.length > matchedImage.length) {
                matchedImage = matchAltImage;
                imageLength = matchAltImage.length;
                payload = altPayload;
                currConfig = longerAltConfig;
                break;
              }
            }
          }
          break;
        }
      }
      if (imageLength !== -1) {
        group = currConfig.group;
        if (group !== void 0) {
          matchedImage = matchedImage !== null ? matchedImage : text2.substring(offset, offset + imageLength);
          tokType = currConfig.tokenTypeIdx;
          newToken = this.createTokenInstance(matchedImage, offset, tokType, currConfig.tokenType, line, column, imageLength);
          this.handlePayload(newToken, payload);
          if (group === false) {
            matchedTokensIndex = this.addToken(matchedTokens, matchedTokensIndex, newToken);
          } else {
            groups[group].push(newToken);
          }
        }
        if (trackLines === true && currConfig.canLineTerminator === true) {
          let numOfLTsInMatch = 0;
          let foundTerminator;
          let lastLTEndOffset;
          lineTerminatorPattern.lastIndex = 0;
          do {
            matchedImage = matchedImage !== null ? matchedImage : text2.substring(offset, offset + imageLength);
            foundTerminator = lineTerminatorPattern.test(matchedImage);
            if (foundTerminator === true) {
              lastLTEndOffset = lineTerminatorPattern.lastIndex - 1;
              numOfLTsInMatch++;
            }
          } while (foundTerminator === true);
          if (numOfLTsInMatch !== 0) {
            line = line + numOfLTsInMatch;
            column = imageLength - lastLTEndOffset;
            this.updateTokenEndLineColumnLocation(newToken, group, lastLTEndOffset, numOfLTsInMatch, line, column, imageLength);
          } else {
            column = this.computeNewColumn(column, imageLength);
          }
        } else {
          column = this.computeNewColumn(column, imageLength);
        }
        offset = offset + imageLength;
        this.handleModes(currConfig, pop_mode, push_mode, newToken);
      } else {
        const errorStartOffset = offset;
        const errorLine = line;
        const errorColumn = column;
        let foundResyncPoint = recoveryEnabled === false;
        while (foundResyncPoint === false && offset < orgLength) {
          offset++;
          for (j = 0; j < currModePatternsLength; j++) {
            const currConfig2 = patternIdxToConfig[j];
            const currPattern = currConfig2.pattern;
            const singleCharCode = currConfig2.short;
            if (singleCharCode !== false) {
              if (orgText.charCodeAt(offset) === singleCharCode) {
                foundResyncPoint = true;
              }
            } else if (currConfig2.isCustom === true) {
              foundResyncPoint = currPattern.exec(orgText, offset, matchedTokens, groups) !== null;
            } else {
              currPattern.lastIndex = offset;
              foundResyncPoint = currPattern.exec(text2) !== null;
            }
            if (foundResyncPoint === true) {
              break;
            }
          }
        }
        errLength = offset - errorStartOffset;
        column = this.computeNewColumn(column, errLength);
        msg = this.config.errorMessageProvider.buildUnexpectedCharactersMessage(orgText, errorStartOffset, errLength, errorLine, errorColumn, last_default(modeStack));
        errors.push({
          offset: errorStartOffset,
          line: errorLine,
          column: errorColumn,
          length: errLength,
          message: msg
        });
        if (recoveryEnabled === false) {
          break;
        }
      }
    }
    if (!this.hasCustom) {
      matchedTokens.length = matchedTokensIndex;
    }
    return {
      tokens: matchedTokens,
      groups,
      errors
    };
  }
  handleModes(config2, pop_mode, push_mode, newToken) {
    if (config2.pop === true) {
      const pushMode = config2.push;
      pop_mode(newToken);
      if (pushMode !== void 0) {
        push_mode.call(this, pushMode);
      }
    } else if (config2.push !== void 0) {
      push_mode.call(this, config2.push);
    }
  }
  // TODO: decrease this under 600 characters? inspect stripping comments option in TSC compiler
  updateTokenEndLineColumnLocation(newToken, group, lastLTIdx, numOfLTsInMatch, line, column, imageLength) {
    let lastCharIsLT, fixForEndingInLT;
    if (group !== void 0) {
      lastCharIsLT = lastLTIdx === imageLength - 1;
      fixForEndingInLT = lastCharIsLT ? -1 : 0;
      if (!(numOfLTsInMatch === 1 && lastCharIsLT === true)) {
        newToken.endLine = line + fixForEndingInLT;
        newToken.endColumn = column - 1 + -fixForEndingInLT;
      }
    }
  }
  computeNewColumn(oldColumn, imageLength) {
    return oldColumn + imageLength;
  }
  createOffsetOnlyToken(image, startOffset, tokenTypeIdx, tokenType) {
    return {
      image,
      startOffset,
      tokenTypeIdx,
      tokenType
    };
  }
  createStartOnlyToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn) {
    return {
      image,
      startOffset,
      startLine,
      startColumn,
      tokenTypeIdx,
      tokenType
    };
  }
  createFullToken(image, startOffset, tokenTypeIdx, tokenType, startLine, startColumn, imageLength) {
    return {
      image,
      startOffset,
      endOffset: startOffset + imageLength - 1,
      startLine,
      endLine: startLine,
      startColumn,
      endColumn: startColumn + imageLength - 1,
      tokenTypeIdx,
      tokenType
    };
  }
  addTokenUsingPush(tokenVector, index, tokenToAdd) {
    tokenVector.push(tokenToAdd);
    return index;
  }
  addTokenUsingMemberAccess(tokenVector, index, tokenToAdd) {
    tokenVector[index] = tokenToAdd;
    index++;
    return index;
  }
  handlePayloadNoCustom(token, payload) {
  }
  handlePayloadWithCustom(token, payload) {
    if (payload !== null) {
      token.payload = payload;
    }
  }
  match(pattern, text2, offset) {
    const found = pattern.test(text2);
    if (found === true) {
      return text2.substring(offset, pattern.lastIndex);
    }
    return null;
  }
  matchLength(pattern, text2, offset) {
    const found = pattern.test(text2);
    if (found === true) {
      return pattern.lastIndex - offset;
    }
    return -1;
  }
};
Lexer.SKIPPED = "This marks a skipped Token pattern, this means each token identified by it will be consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";
Lexer.NA = /NOT_APPLICABLE/;

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/scan/tokens_public.js
function tokenLabel2(tokType) {
  if (hasTokenLabel2(tokType)) {
    return tokType.LABEL;
  } else {
    return tokType.name;
  }
}
function hasTokenLabel2(obj) {
  return isString_default(obj.LABEL) && obj.LABEL !== "";
}
var PARENT = "parent";
var CATEGORIES = "categories";
var LABEL = "label";
var GROUP = "group";
var PUSH_MODE = "push_mode";
var POP_MODE = "pop_mode";
var LONGER_ALT = "longer_alt";
var LINE_BREAKS = "line_breaks";
var START_CHARS_HINT = "start_chars_hint";
function createToken(config2) {
  return createTokenInternal(config2);
}
function createTokenInternal(config2) {
  const pattern = config2.pattern;
  const tokenType = {};
  tokenType.name = config2.name;
  if (!isUndefined_default(pattern)) {
    tokenType.PATTERN = pattern;
  }
  if (has_default(config2, PARENT)) {
    throw "The parent property is no longer supported.\nSee: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.";
  }
  if (has_default(config2, CATEGORIES)) {
    tokenType.CATEGORIES = config2[CATEGORIES];
  }
  augmentTokenTypes([tokenType]);
  if (has_default(config2, LABEL)) {
    tokenType.LABEL = config2[LABEL];
  }
  if (has_default(config2, GROUP)) {
    tokenType.GROUP = config2[GROUP];
  }
  if (has_default(config2, POP_MODE)) {
    tokenType.POP_MODE = config2[POP_MODE];
  }
  if (has_default(config2, PUSH_MODE)) {
    tokenType.PUSH_MODE = config2[PUSH_MODE];
  }
  if (has_default(config2, LONGER_ALT)) {
    tokenType.LONGER_ALT = config2[LONGER_ALT];
  }
  if (has_default(config2, LINE_BREAKS)) {
    tokenType.LINE_BREAKS = config2[LINE_BREAKS];
  }
  if (has_default(config2, START_CHARS_HINT)) {
    tokenType.START_CHARS_HINT = config2[START_CHARS_HINT];
  }
  return tokenType;
}
var EOF = createToken({ name: "EOF", pattern: Lexer.NA });
augmentTokenTypes([EOF]);
function createTokenInstance(tokType, image, startOffset, endOffset, startLine, endLine, startColumn, endColumn) {
  return {
    image,
    startOffset,
    endOffset,
    startLine,
    endLine,
    startColumn,
    endColumn,
    tokenTypeIdx: tokType.tokenTypeIdx,
    tokenType: tokType
  };
}
function tokenMatcher(token, tokType) {
  return tokenStructuredMatcher(token, tokType);
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/errors_public.js
var defaultParserErrorProvider = {
  buildMismatchTokenMessage({ expected, actual, previous, ruleName }) {
    const hasLabel = hasTokenLabel2(expected);
    const expectedMsg = hasLabel ? `--> ${tokenLabel2(expected)} <--` : `token of type --> ${expected.name} <--`;
    const msg = `Expecting ${expectedMsg} but found --> '${actual.image}' <--`;
    return msg;
  },
  buildNotAllInputParsedMessage({ firstRedundant, ruleName }) {
    return "Redundant input, expecting EOF but found: " + firstRedundant.image;
  },
  buildNoViableAltMessage({ expectedPathsPerAlt, actual, previous, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const allLookAheadPaths = reduce_default(expectedPathsPerAlt, (result, currAltPaths) => result.concat(currAltPaths), []);
      const nextValidTokenSequences = map_default(allLookAheadPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(", ")}]`);
      const nextValidSequenceItems = map_default(nextValidTokenSequences, (itemMsg, idx) => `  ${idx + 1}. ${itemMsg}`);
      const calculatedDescription = `one of these possible Token sequences:
${nextValidSequenceItems.join("\n")}`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  },
  buildEarlyExitMessage({ expectedIterationPaths, actual, customUserDescription, ruleName }) {
    const errPrefix = "Expecting: ";
    const actualText = head_default(actual).image;
    const errSuffix = "\nbut found: '" + actualText + "'";
    if (customUserDescription) {
      return errPrefix + customUserDescription + errSuffix;
    } else {
      const nextValidTokenSequences = map_default(expectedIterationPaths, (currPath) => `[${map_default(currPath, (currTokenType) => tokenLabel2(currTokenType)).join(",")}]`);
      const calculatedDescription = `expecting at least one iteration which starts with one of these possible Token sequences::
  <${nextValidTokenSequences.join(" ,")}>`;
      return errPrefix + calculatedDescription + errSuffix;
    }
  }
};
Object.freeze(defaultParserErrorProvider);
var defaultGrammarResolverErrorProvider = {
  buildRuleNotFoundError(topLevelRule, undefinedRule) {
    const msg = "Invalid grammar, reference to a rule which is not defined: ->" + undefinedRule.nonTerminalName + "<-\ninside top level rule: ->" + topLevelRule.name + "<-";
    return msg;
  }
};
var defaultGrammarValidatorErrorProvider = {
  buildDuplicateFoundError(topLevelRule, duplicateProds) {
    function getExtraProductionArgument2(prod) {
      if (prod instanceof Terminal) {
        return prod.terminalType.name;
      } else if (prod instanceof NonTerminal) {
        return prod.nonTerminalName;
      } else {
        return "";
      }
    }
    const topLevelName = topLevelRule.name;
    const duplicateProd = head_default(duplicateProds);
    const index = duplicateProd.idx;
    const dslName = getProductionDslName(duplicateProd);
    const extraArgument = getExtraProductionArgument2(duplicateProd);
    const hasExplicitIndex = index > 0;
    let msg = `->${dslName}${hasExplicitIndex ? index : ""}<- ${extraArgument ? `with argument: ->${extraArgument}<-` : ""}
                  appears more than once (${duplicateProds.length} times) in the top level rule: ->${topLevelName}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;
    msg = msg.replace(/[ \t]+/g, " ");
    msg = msg.replace(/\s\s+/g, "\n");
    return msg;
  },
  buildNamespaceConflictError(rule) {
    const errMsg = `Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${rule.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`;
    return errMsg;
  },
  buildAlternationPrefixAmbiguityError(options) {
    const pathMsg = map_default(options.prefixPath, (currTok) => tokenLabel2(currTok)).join(", ");
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    const errMsg = `Ambiguous alternatives: <${options.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
<${pathMsg}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`;
    return errMsg;
  },
  buildAlternationAmbiguityError(options) {
    const occurrence = options.alternation.idx === 0 ? "" : options.alternation.idx;
    const isEmptyPath = options.prefixPath.length === 0;
    let currMessage = `Ambiguous Alternatives Detected: <${options.ambiguityIndices.join(" ,")}> in <OR${occurrence}> inside <${options.topLevelRule.name}> Rule,
`;
    if (isEmptyPath) {
      currMessage += `These alternatives are all empty (match no tokens), making them indistinguishable.
Only the last alternative may be empty.
`;
    } else {
      const pathMsg = map_default(options.prefixPath, (currtok) => tokenLabel2(currtok)).join(", ");
      currMessage += `<${pathMsg}> may appears as a prefix path in all these alternatives.
`;
    }
    currMessage += `See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`;
    return currMessage;
  },
  buildEmptyRepetitionError(options) {
    let dslName = getProductionDslName(options.repetition);
    if (options.repetition.idx !== 0) {
      dslName += options.repetition.idx;
    }
    const errMsg = `The repetition <${dslName}> within Rule <${options.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildTokenNameError(options) {
    return "deprecated";
  },
  buildEmptyAlternationError(options) {
    const errMsg = `Ambiguous empty alternative: <${options.emptyChoiceIdx + 1}> in <OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`;
    return errMsg;
  },
  buildTooManyAlternativesError(options) {
    const errMsg = `An Alternation cannot have more than 256 alternatives:
<OR${options.alternation.idx}> inside <${options.topLevelRule.name}> Rule.
 has ${options.alternation.definition.length + 1} alternatives.`;
    return errMsg;
  },
  buildLeftRecursionError(options) {
    const ruleName = options.topLevelRule.name;
    const pathNames = map_default(options.leftRecursionPath, (currRule) => currRule.name);
    const leftRecursivePath = `${ruleName} --> ${pathNames.concat([ruleName]).join(" --> ")}`;
    const errMsg = `Left Recursion found in grammar.
rule: <${ruleName}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${leftRecursivePath}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`;
    return errMsg;
  },
  // TODO: remove - `errors_public` from nyc.config.js exclude
  //       once this method is fully removed from this file
  buildInvalidRuleNameError(options) {
    return "deprecated";
  },
  buildDuplicateRuleNameError(options) {
    let ruleName;
    if (options.topLevelRule instanceof Rule) {
      ruleName = options.topLevelRule.name;
    } else {
      ruleName = options.topLevelRule;
    }
    const errMsg = `Duplicate definition, rule: ->${ruleName}<- is already defined in the grammar: ->${options.grammarName}<-`;
    return errMsg;
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/resolver.js
function resolveGrammar(topLevels, errMsgProvider) {
  const refResolver = new GastRefResolverVisitor(topLevels, errMsgProvider);
  refResolver.resolveRefs();
  return refResolver.errors;
}
var GastRefResolverVisitor = class extends GAstVisitor {
  constructor(nameToTopRule, errMsgProvider) {
    super();
    this.nameToTopRule = nameToTopRule;
    this.errMsgProvider = errMsgProvider;
    this.errors = [];
  }
  resolveRefs() {
    forEach_default(values_default(this.nameToTopRule), (prod) => {
      this.currTopLevel = prod;
      prod.accept(this);
    });
  }
  visitNonTerminal(node) {
    const ref = this.nameToTopRule[node.nonTerminalName];
    if (!ref) {
      const msg = this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel, node);
      this.errors.push({
        message: msg,
        type: ParserDefinitionErrorType.UNRESOLVED_SUBRULE_REF,
        ruleName: this.currTopLevel.name,
        unresolvedRefName: node.nonTerminalName
      });
    } else {
      node.referencedRule = ref;
    }
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/interpreter.js
var AbstractNextPossibleTokensWalker = class extends RestWalker {
  constructor(topProd, path) {
    super();
    this.topProd = topProd;
    this.path = path;
    this.possibleTokTypes = [];
    this.nextProductionName = "";
    this.nextProductionOccurrence = 0;
    this.found = false;
    this.isAtEndOfPath = false;
  }
  startWalking() {
    this.found = false;
    if (this.path.ruleStack[0] !== this.topProd.name) {
      throw Error("The path does not start with the walker's top Rule!");
    }
    this.ruleStack = clone_default(this.path.ruleStack).reverse();
    this.occurrenceStack = clone_default(this.path.occurrenceStack).reverse();
    this.ruleStack.pop();
    this.occurrenceStack.pop();
    this.updateExpectedNext();
    this.walk(this.topProd);
    return this.possibleTokTypes;
  }
  walk(prod, prevRest = []) {
    if (!this.found) {
      super.walk(prod, prevRest);
    }
  }
  walkProdRef(refProd, currRest, prevRest) {
    if (refProd.referencedRule.name === this.nextProductionName && refProd.idx === this.nextProductionOccurrence) {
      const fullRest = currRest.concat(prevRest);
      this.updateExpectedNext();
      this.walk(refProd.referencedRule, fullRest);
    }
  }
  updateExpectedNext() {
    if (isEmpty_default(this.ruleStack)) {
      this.nextProductionName = "";
      this.nextProductionOccurrence = 0;
      this.isAtEndOfPath = true;
    } else {
      this.nextProductionName = this.ruleStack.pop();
      this.nextProductionOccurrence = this.occurrenceStack.pop();
    }
  }
};
var NextAfterTokenWalker = class extends AbstractNextPossibleTokensWalker {
  constructor(topProd, path) {
    super(topProd, path);
    this.path = path;
    this.nextTerminalName = "";
    this.nextTerminalOccurrence = 0;
    this.nextTerminalName = this.path.lastTok.name;
    this.nextTerminalOccurrence = this.path.lastTokOccurrence;
  }
  walkTerminal(terminal, currRest, prevRest) {
    if (this.isAtEndOfPath && terminal.terminalType.name === this.nextTerminalName && terminal.idx === this.nextTerminalOccurrence && !this.found) {
      const fullRest = currRest.concat(prevRest);
      const restProd = new Alternative({ definition: fullRest });
      this.possibleTokTypes = first(restProd);
      this.found = true;
    }
  }
};
var AbstractNextTerminalAfterProductionWalker = class extends RestWalker {
  constructor(topRule, occurrence) {
    super();
    this.topRule = topRule;
    this.occurrence = occurrence;
    this.result = {
      token: void 0,
      occurrence: void 0,
      isEndOfRule: void 0
    };
  }
  startWalking() {
    this.walk(this.topRule);
    return this.result;
  }
};
var NextTerminalAfterManyWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkMany(manyProd, currRest, prevRest) {
    if (manyProd.idx === this.occurrence) {
      const firstAfterMany = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterMany === void 0;
      if (firstAfterMany instanceof Terminal) {
        this.result.token = firstAfterMany.terminalType;
        this.result.occurrence = firstAfterMany.idx;
      }
    } else {
      super.walkMany(manyProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterManySepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkManySep(manySepProd, currRest, prevRest) {
    if (manySepProd.idx === this.occurrence) {
      const firstAfterManySep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterManySep === void 0;
      if (firstAfterManySep instanceof Terminal) {
        this.result.token = firstAfterManySep.terminalType;
        this.result.occurrence = firstAfterManySep.idx;
      }
    } else {
      super.walkManySep(manySepProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (atLeastOneProd.idx === this.occurrence) {
      const firstAfterAtLeastOne = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterAtLeastOne === void 0;
      if (firstAfterAtLeastOne instanceof Terminal) {
        this.result.token = firstAfterAtLeastOne.terminalType;
        this.result.occurrence = firstAfterAtLeastOne.idx;
      }
    } else {
      super.walkAtLeastOne(atLeastOneProd, currRest, prevRest);
    }
  }
};
var NextTerminalAfterAtLeastOneSepWalker = class extends AbstractNextTerminalAfterProductionWalker {
  walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest) {
    if (atleastOneSepProd.idx === this.occurrence) {
      const firstAfterfirstAfterAtLeastOneSep = head_default(currRest.concat(prevRest));
      this.result.isEndOfRule = firstAfterfirstAfterAtLeastOneSep === void 0;
      if (firstAfterfirstAfterAtLeastOneSep instanceof Terminal) {
        this.result.token = firstAfterfirstAfterAtLeastOneSep.terminalType;
        this.result.occurrence = firstAfterfirstAfterAtLeastOneSep.idx;
      }
    } else {
      super.walkAtLeastOneSep(atleastOneSepProd, currRest, prevRest);
    }
  }
};
function possiblePathsFrom(targetDef, maxLength, currPath = []) {
  currPath = clone_default(currPath);
  let result = [];
  let i = 0;
  function remainingPathWith(nextDef) {
    return nextDef.concat(drop_default(targetDef, i + 1));
  }
  function getAlternativesForProd(definition) {
    const alternatives = possiblePathsFrom(remainingPathWith(definition), maxLength, currPath);
    return result.concat(alternatives);
  }
  while (currPath.length < maxLength && i < targetDef.length) {
    const prod = targetDef[i];
    if (prod instanceof Alternative) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof NonTerminal) {
      return getAlternativesForProd(prod.definition);
    } else if (prod instanceof Option) {
      result = getAlternativesForProd(prod.definition);
    } else if (prod instanceof RepetitionMandatory) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const newDef = [
        new Alternative({ definition: prod.definition }),
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ];
      return getAlternativesForProd(newDef);
    } else if (prod instanceof RepetitionWithSeparator) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: [new Terminal({ terminalType: prod.separator })].concat(prod.definition)
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Repetition) {
      const newDef = prod.definition.concat([
        new Repetition({
          definition: prod.definition
        })
      ]);
      result = getAlternativesForProd(newDef);
    } else if (prod instanceof Alternation) {
      forEach_default(prod.definition, (currAlt) => {
        if (isEmpty_default(currAlt.definition) === false) {
          result = getAlternativesForProd(currAlt.definition);
        }
      });
      return result;
    } else if (prod instanceof Terminal) {
      currPath.push(prod.terminalType);
    } else {
      throw Error("non exhaustive match");
    }
    i++;
  }
  result.push({
    partialPath: currPath,
    suffixDef: drop_default(targetDef, i)
  });
  return result;
}
function nextPossibleTokensAfter(initialDef, tokenVector, tokMatcher, maxLookAhead) {
  const EXIT_NON_TERMINAL = "EXIT_NONE_TERMINAL";
  const EXIT_NON_TERMINAL_ARR = [EXIT_NON_TERMINAL];
  const EXIT_ALTERNATIVE = "EXIT_ALTERNATIVE";
  let foundCompletePath = false;
  const tokenVectorLength = tokenVector.length;
  const minimalAlternativesIndex = tokenVectorLength - maxLookAhead - 1;
  const result = [];
  const possiblePaths = [];
  possiblePaths.push({
    idx: -1,
    def: initialDef,
    ruleStack: [],
    occurrenceStack: []
  });
  while (!isEmpty_default(possiblePaths)) {
    const currPath = possiblePaths.pop();
    if (currPath === EXIT_ALTERNATIVE) {
      if (foundCompletePath && last_default(possiblePaths).idx <= minimalAlternativesIndex) {
        possiblePaths.pop();
      }
      continue;
    }
    const currDef = currPath.def;
    const currIdx = currPath.idx;
    const currRuleStack = currPath.ruleStack;
    const currOccurrenceStack = currPath.occurrenceStack;
    if (isEmpty_default(currDef)) {
      continue;
    }
    const prod = currDef[0];
    if (prod === EXIT_NON_TERMINAL) {
      const nextPath = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: dropRight_default(currRuleStack),
        occurrenceStack: dropRight_default(currOccurrenceStack)
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Terminal) {
      if (currIdx < tokenVectorLength - 1) {
        const nextIdx = currIdx + 1;
        const actualToken = tokenVector[nextIdx];
        if (tokMatcher(actualToken, prod.terminalType)) {
          const nextPath = {
            idx: nextIdx,
            def: drop_default(currDef),
            ruleStack: currRuleStack,
            occurrenceStack: currOccurrenceStack
          };
          possiblePaths.push(nextPath);
        }
      } else if (currIdx === tokenVectorLength - 1) {
        result.push({
          nextTokenType: prod.terminalType,
          nextTokenOccurrence: prod.idx,
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        });
        foundCompletePath = true;
      } else {
        throw Error("non exhaustive match");
      }
    } else if (prod instanceof NonTerminal) {
      const newRuleStack = clone_default(currRuleStack);
      newRuleStack.push(prod.nonTerminalName);
      const newOccurrenceStack = clone_default(currOccurrenceStack);
      newOccurrenceStack.push(prod.idx);
      const nextPath = {
        idx: currIdx,
        def: prod.definition.concat(EXIT_NON_TERMINAL_ARR, drop_default(currDef)),
        ruleStack: newRuleStack,
        occurrenceStack: newOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof Option) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nextPathWith = {
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof RepetitionMandatory) {
      const secondIteration = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionMandatoryWithSeparator) {
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const secondIteration = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([secondIteration], drop_default(currDef));
      const nextPath = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPath);
    } else if (prod instanceof RepetitionWithSeparator) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const separatorGast = new Terminal({
        terminalType: prod.separator
      });
      const nthRepetition = new Repetition({
        definition: [separatorGast].concat(prod.definition),
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Repetition) {
      const nextPathWithout = {
        idx: currIdx,
        def: drop_default(currDef),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWithout);
      possiblePaths.push(EXIT_ALTERNATIVE);
      const nthRepetition = new Repetition({
        definition: prod.definition,
        idx: prod.idx
      });
      const nextDef = prod.definition.concat([nthRepetition], drop_default(currDef));
      const nextPathWith = {
        idx: currIdx,
        def: nextDef,
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      };
      possiblePaths.push(nextPathWith);
    } else if (prod instanceof Alternation) {
      for (let i = prod.definition.length - 1; i >= 0; i--) {
        const currAlt = prod.definition[i];
        const currAltPath = {
          idx: currIdx,
          def: currAlt.definition.concat(drop_default(currDef)),
          ruleStack: currRuleStack,
          occurrenceStack: currOccurrenceStack
        };
        possiblePaths.push(currAltPath);
        possiblePaths.push(EXIT_ALTERNATIVE);
      }
    } else if (prod instanceof Alternative) {
      possiblePaths.push({
        idx: currIdx,
        def: prod.definition.concat(drop_default(currDef)),
        ruleStack: currRuleStack,
        occurrenceStack: currOccurrenceStack
      });
    } else if (prod instanceof Rule) {
      possiblePaths.push(expandTopLevelRule(prod, currIdx, currRuleStack, currOccurrenceStack));
    } else {
      throw Error("non exhaustive match");
    }
  }
  return result;
}
function expandTopLevelRule(topRule, currIdx, currRuleStack, currOccurrenceStack) {
  const newRuleStack = clone_default(currRuleStack);
  newRuleStack.push(topRule.name);
  const newCurrOccurrenceStack = clone_default(currOccurrenceStack);
  newCurrOccurrenceStack.push(1);
  return {
    idx: currIdx,
    def: topRule.definition,
    ruleStack: newRuleStack,
    occurrenceStack: newCurrOccurrenceStack
  };
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/lookahead.js
var PROD_TYPE;
(function(PROD_TYPE2) {
  PROD_TYPE2[PROD_TYPE2["OPTION"] = 0] = "OPTION";
  PROD_TYPE2[PROD_TYPE2["REPETITION"] = 1] = "REPETITION";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY"] = 2] = "REPETITION_MANDATORY";
  PROD_TYPE2[PROD_TYPE2["REPETITION_MANDATORY_WITH_SEPARATOR"] = 3] = "REPETITION_MANDATORY_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["REPETITION_WITH_SEPARATOR"] = 4] = "REPETITION_WITH_SEPARATOR";
  PROD_TYPE2[PROD_TYPE2["ALTERNATION"] = 5] = "ALTERNATION";
})(PROD_TYPE || (PROD_TYPE = {}));
function getProdType(prod) {
  if (prod instanceof Option || prod === "Option") {
    return PROD_TYPE.OPTION;
  } else if (prod instanceof Repetition || prod === "Repetition") {
    return PROD_TYPE.REPETITION;
  } else if (prod instanceof RepetitionMandatory || prod === "RepetitionMandatory") {
    return PROD_TYPE.REPETITION_MANDATORY;
  } else if (prod instanceof RepetitionMandatoryWithSeparator || prod === "RepetitionMandatoryWithSeparator") {
    return PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR;
  } else if (prod instanceof RepetitionWithSeparator || prod === "RepetitionWithSeparator") {
    return PROD_TYPE.REPETITION_WITH_SEPARATOR;
  } else if (prod instanceof Alternation || prod === "Alternation") {
    return PROD_TYPE.ALTERNATION;
  } else {
    throw Error("non exhaustive match");
  }
}
function buildLookaheadFuncForOr(occurrence, ruleGrammar, maxLookahead, hasPredicates, dynamicTokensEnabled, laFuncBuilder) {
  const lookAheadPaths = getLookaheadPathsForOr(occurrence, ruleGrammar, maxLookahead);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return laFuncBuilder(lookAheadPaths, hasPredicates, tokenMatcher2, dynamicTokensEnabled);
}
function buildLookaheadFuncForOptionalProd(occurrence, ruleGrammar, k, dynamicTokensEnabled, prodType, lookaheadBuilder) {
  const lookAheadPaths = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k);
  const tokenMatcher2 = areTokenCategoriesNotUsed(lookAheadPaths) ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
  return lookaheadBuilder(lookAheadPaths[0], tokenMatcher2, dynamicTokensEnabled);
}
function buildAlternativesLookAheadFunc(alts, hasPredicates, tokenMatcher2, dynamicTokensEnabled) {
  const numOfAlts = alts.length;
  const areAllOneTokenLookahead = every_default(alts, (currAlt) => {
    return every_default(currAlt, (currPath) => {
      return currPath.length === 1;
    });
  });
  if (hasPredicates) {
    return function(orAlts) {
      const predicates = map_default(orAlts, (currAlt) => currAlt.GATE);
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        const currPredicate = predicates[t];
        if (currPredicate !== void 0 && currPredicate.call(this) === false) {
          continue;
        }
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  } else if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokenAlts = map_default(alts, (currAlt) => {
      return flatten_default(currAlt);
    });
    const choiceToAlt = reduce_default(singleTokenAlts, (result, currAlt, idx) => {
      forEach_default(currAlt, (currTokType) => {
        if (!has_default(result, currTokType.tokenTypeIdx)) {
          result[currTokType.tokenTypeIdx] = idx;
        }
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          if (!has_default(result, currExtendingType)) {
            result[currExtendingType] = idx;
          }
        });
      });
      return result;
    }, {});
    return function() {
      const nextToken = this.LA(1);
      return choiceToAlt[nextToken.tokenTypeIdx];
    };
  } else {
    return function() {
      for (let t = 0; t < numOfAlts; t++) {
        const currAlt = alts[t];
        const currNumOfPaths = currAlt.length;
        nextPath: for (let j = 0; j < currNumOfPaths; j++) {
          const currPath = currAlt[j];
          const currPathLength = currPath.length;
          for (let i = 0; i < currPathLength; i++) {
            const nextToken = this.LA(i + 1);
            if (tokenMatcher2(nextToken, currPath[i]) === false) {
              continue nextPath;
            }
          }
          return t;
        }
      }
      return void 0;
    };
  }
}
function buildSingleAlternativeLookaheadFunction(alt, tokenMatcher2, dynamicTokensEnabled) {
  const areAllOneTokenLookahead = every_default(alt, (currPath) => {
    return currPath.length === 1;
  });
  const numOfPaths = alt.length;
  if (areAllOneTokenLookahead && !dynamicTokensEnabled) {
    const singleTokensTypes = flatten_default(alt);
    if (singleTokensTypes.length === 1 && isEmpty_default(singleTokensTypes[0].categoryMatches)) {
      const expectedTokenType = singleTokensTypes[0];
      const expectedTokenUniqueKey = expectedTokenType.tokenTypeIdx;
      return function() {
        return this.LA(1).tokenTypeIdx === expectedTokenUniqueKey;
      };
    } else {
      const choiceToAlt = reduce_default(singleTokensTypes, (result, currTokType, idx) => {
        result[currTokType.tokenTypeIdx] = true;
        forEach_default(currTokType.categoryMatches, (currExtendingType) => {
          result[currExtendingType] = true;
        });
        return result;
      }, []);
      return function() {
        const nextToken = this.LA(1);
        return choiceToAlt[nextToken.tokenTypeIdx] === true;
      };
    }
  } else {
    return function() {
      nextPath: for (let j = 0; j < numOfPaths; j++) {
        const currPath = alt[j];
        const currPathLength = currPath.length;
        for (let i = 0; i < currPathLength; i++) {
          const nextToken = this.LA(i + 1);
          if (tokenMatcher2(nextToken, currPath[i]) === false) {
            continue nextPath;
          }
        }
        return true;
      }
      return false;
    };
  }
}
var RestDefinitionFinderWalker = class extends RestWalker {
  constructor(topProd, targetOccurrence, targetProdType) {
    super();
    this.topProd = topProd;
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
  }
  startWalking() {
    this.walk(this.topProd);
    return this.restDef;
  }
  checkIsTarget(node, expectedProdType, currRest, prevRest) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdType) {
      this.restDef = currRest.concat(prevRest);
      return true;
    }
    return false;
  }
  walkOption(optionProd, currRest, prevRest) {
    if (!this.checkIsTarget(optionProd, PROD_TYPE.OPTION, currRest, prevRest)) {
      super.walkOption(optionProd, currRest, prevRest);
    }
  }
  walkAtLeastOne(atLeastOneProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneProd, PROD_TYPE.REPETITION_MANDATORY, currRest, prevRest)) {
      super.walkOption(atLeastOneProd, currRest, prevRest);
    }
  }
  walkAtLeastOneSep(atLeastOneSepProd, currRest, prevRest) {
    if (!this.checkIsTarget(atLeastOneSepProd, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(atLeastOneSepProd, currRest, prevRest);
    }
  }
  walkMany(manyProd, currRest, prevRest) {
    if (!this.checkIsTarget(manyProd, PROD_TYPE.REPETITION, currRest, prevRest)) {
      super.walkOption(manyProd, currRest, prevRest);
    }
  }
  walkManySep(manySepProd, currRest, prevRest) {
    if (!this.checkIsTarget(manySepProd, PROD_TYPE.REPETITION_WITH_SEPARATOR, currRest, prevRest)) {
      super.walkOption(manySepProd, currRest, prevRest);
    }
  }
};
var InsideDefinitionFinderVisitor = class extends GAstVisitor {
  constructor(targetOccurrence, targetProdType, targetRef) {
    super();
    this.targetOccurrence = targetOccurrence;
    this.targetProdType = targetProdType;
    this.targetRef = targetRef;
    this.result = [];
  }
  checkIsTarget(node, expectedProdName) {
    if (node.idx === this.targetOccurrence && this.targetProdType === expectedProdName && (this.targetRef === void 0 || node === this.targetRef)) {
      this.result = node.definition;
    }
  }
  visitOption(node) {
    this.checkIsTarget(node, PROD_TYPE.OPTION);
  }
  visitRepetition(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION);
  }
  visitRepetitionMandatory(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY);
  }
  visitRepetitionMandatoryWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR);
  }
  visitRepetitionWithSeparator(node) {
    this.checkIsTarget(node, PROD_TYPE.REPETITION_WITH_SEPARATOR);
  }
  visitAlternation(node) {
    this.checkIsTarget(node, PROD_TYPE.ALTERNATION);
  }
};
function initializeArrayOfArrays(size) {
  const result = new Array(size);
  for (let i = 0; i < size; i++) {
    result[i] = [];
  }
  return result;
}
function pathToHashKeys(path) {
  let keys2 = [""];
  for (let i = 0; i < path.length; i++) {
    const tokType = path[i];
    const longerKeys = [];
    for (let j = 0; j < keys2.length; j++) {
      const currShorterKey = keys2[j];
      longerKeys.push(currShorterKey + "_" + tokType.tokenTypeIdx);
      for (let t = 0; t < tokType.categoryMatches.length; t++) {
        const categoriesKeySuffix = "_" + tokType.categoryMatches[t];
        longerKeys.push(currShorterKey + categoriesKeySuffix);
      }
    }
    keys2 = longerKeys;
  }
  return keys2;
}
function isUniquePrefixHash(altKnownPathsKeys, searchPathKeys, idx) {
  for (let currAltIdx = 0; currAltIdx < altKnownPathsKeys.length; currAltIdx++) {
    if (currAltIdx === idx) {
      continue;
    }
    const otherAltKnownPathsKeys = altKnownPathsKeys[currAltIdx];
    for (let searchIdx = 0; searchIdx < searchPathKeys.length; searchIdx++) {
      const searchKey = searchPathKeys[searchIdx];
      if (otherAltKnownPathsKeys[searchKey] === true) {
        return false;
      }
    }
  }
  return true;
}
function lookAheadSequenceFromAlternatives(altsDefs, k) {
  const partialAlts = map_default(altsDefs, (currAlt) => possiblePathsFrom([currAlt], 1));
  const finalResult = initializeArrayOfArrays(partialAlts.length);
  const altsHashes = map_default(partialAlts, (currAltPaths) => {
    const dict = {};
    forEach_default(currAltPaths, (item) => {
      const keys2 = pathToHashKeys(item.partialPath);
      forEach_default(keys2, (currKey) => {
        dict[currKey] = true;
      });
    });
    return dict;
  });
  let newData = partialAlts;
  for (let pathLength = 1; pathLength <= k; pathLength++) {
    const currDataset = newData;
    newData = initializeArrayOfArrays(currDataset.length);
    for (let altIdx = 0; altIdx < currDataset.length; altIdx++) {
      const currAltPathsAndSuffixes = currDataset[altIdx];
      for (let currPathIdx = 0; currPathIdx < currAltPathsAndSuffixes.length; currPathIdx++) {
        const currPathPrefix = currAltPathsAndSuffixes[currPathIdx].partialPath;
        const suffixDef = currAltPathsAndSuffixes[currPathIdx].suffixDef;
        const prefixKeys = pathToHashKeys(currPathPrefix);
        const isUnique = isUniquePrefixHash(altsHashes, prefixKeys, altIdx);
        if (isUnique || isEmpty_default(suffixDef) || currPathPrefix.length === k) {
          const currAltResult = finalResult[altIdx];
          if (containsPath(currAltResult, currPathPrefix) === false) {
            currAltResult.push(currPathPrefix);
            for (let j = 0; j < prefixKeys.length; j++) {
              const currKey = prefixKeys[j];
              altsHashes[altIdx][currKey] = true;
            }
          }
        } else {
          const newPartialPathsAndSuffixes = possiblePathsFrom(suffixDef, pathLength + 1, currPathPrefix);
          newData[altIdx] = newData[altIdx].concat(newPartialPathsAndSuffixes);
          forEach_default(newPartialPathsAndSuffixes, (item) => {
            const prefixKeys2 = pathToHashKeys(item.partialPath);
            forEach_default(prefixKeys2, (key) => {
              altsHashes[altIdx][key] = true;
            });
          });
        }
      }
    }
  }
  return finalResult;
}
function getLookaheadPathsForOr(occurrence, ruleGrammar, k, orProd) {
  const visitor = new InsideDefinitionFinderVisitor(occurrence, PROD_TYPE.ALTERNATION, orProd);
  ruleGrammar.accept(visitor);
  return lookAheadSequenceFromAlternatives(visitor.result, k);
}
function getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, k) {
  const insideDefVisitor = new InsideDefinitionFinderVisitor(occurrence, prodType);
  ruleGrammar.accept(insideDefVisitor);
  const insideDef = insideDefVisitor.result;
  const afterDefWalker = new RestDefinitionFinderWalker(ruleGrammar, occurrence, prodType);
  const afterDef = afterDefWalker.startWalking();
  const insideFlat = new Alternative({ definition: insideDef });
  const afterFlat = new Alternative({ definition: afterDef });
  return lookAheadSequenceFromAlternatives([insideFlat, afterFlat], k);
}
function containsPath(alternative, searchPath) {
  compareOtherPath: for (let i = 0; i < alternative.length; i++) {
    const otherPath = alternative[i];
    if (otherPath.length !== searchPath.length) {
      continue;
    }
    for (let j = 0; j < otherPath.length; j++) {
      const searchTok = searchPath[j];
      const otherTok = otherPath[j];
      const matchingTokens = searchTok === otherTok || otherTok.categoryMatchesMap[searchTok.tokenTypeIdx] !== void 0;
      if (matchingTokens === false) {
        continue compareOtherPath;
      }
    }
    return true;
  }
  return false;
}
function isStrictPrefixOfPath(prefix, other) {
  return prefix.length < other.length && every_default(prefix, (tokType, idx) => {
    const otherTokType = other[idx];
    return tokType === otherTokType || otherTokType.categoryMatchesMap[tokType.tokenTypeIdx];
  });
}
function areTokenCategoriesNotUsed(lookAheadPaths) {
  return every_default(lookAheadPaths, (singleAltPaths) => every_default(singleAltPaths, (singlePath) => every_default(singlePath, (token) => isEmpty_default(token.categoryMatches))));
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/checks.js
function validateLookahead(options) {
  const lookaheadValidationErrorMessages = options.lookaheadStrategy.validate({
    rules: options.rules,
    tokenTypes: options.tokenTypes,
    grammarName: options.grammarName
  });
  return map_default(lookaheadValidationErrorMessages, (errorMessage) => Object.assign({ type: ParserDefinitionErrorType.CUSTOM_LOOKAHEAD_VALIDATION }, errorMessage));
}
function validateGrammar(topLevels, tokenTypes, errMsgProvider, grammarName) {
  const duplicateErrors = flatMap_default(topLevels, (currTopLevel) => validateDuplicateProductions(currTopLevel, errMsgProvider));
  const termsNamespaceConflictErrors = checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider);
  const tooManyAltsErrors = flatMap_default(topLevels, (curRule) => validateTooManyAlts(curRule, errMsgProvider));
  const duplicateRulesError = flatMap_default(topLevels, (curRule) => validateRuleDoesNotAlreadyExist(curRule, topLevels, grammarName, errMsgProvider));
  return duplicateErrors.concat(termsNamespaceConflictErrors, tooManyAltsErrors, duplicateRulesError);
}
function validateDuplicateProductions(topLevelRule, errMsgProvider) {
  const collectorVisitor2 = new OccurrenceValidationCollector();
  topLevelRule.accept(collectorVisitor2);
  const allRuleProductions = collectorVisitor2.allProductions;
  const productionGroups = groupBy_default(allRuleProductions, identifyProductionForDuplicates);
  const duplicates = pickBy_default(productionGroups, (currGroup) => {
    return currGroup.length > 1;
  });
  const errors = map_default(values_default(duplicates), (currDuplicates) => {
    const firstProd = head_default(currDuplicates);
    const msg = errMsgProvider.buildDuplicateFoundError(topLevelRule, currDuplicates);
    const dslName = getProductionDslName(firstProd);
    const defError = {
      message: msg,
      type: ParserDefinitionErrorType.DUPLICATE_PRODUCTIONS,
      ruleName: topLevelRule.name,
      dslName,
      occurrence: firstProd.idx
    };
    const param = getExtraProductionArgument(firstProd);
    if (param) {
      defError.parameter = param;
    }
    return defError;
  });
  return errors;
}
function identifyProductionForDuplicates(prod) {
  return `${getProductionDslName(prod)}_#_${prod.idx}_#_${getExtraProductionArgument(prod)}`;
}
function getExtraProductionArgument(prod) {
  if (prod instanceof Terminal) {
    return prod.terminalType.name;
  } else if (prod instanceof NonTerminal) {
    return prod.nonTerminalName;
  } else {
    return "";
  }
}
var OccurrenceValidationCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitNonTerminal(subrule) {
    this.allProductions.push(subrule);
  }
  visitOption(option) {
    this.allProductions.push(option);
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
  visitAlternation(or) {
    this.allProductions.push(or);
  }
  visitTerminal(terminal) {
    this.allProductions.push(terminal);
  }
};
function validateRuleDoesNotAlreadyExist(rule, allRules, className, errMsgProvider) {
  const errors = [];
  const occurrences = reduce_default(allRules, (result, curRule) => {
    if (curRule.name === rule.name) {
      return result + 1;
    }
    return result;
  }, 0);
  if (occurrences > 1) {
    const errMsg = errMsgProvider.buildDuplicateRuleNameError({
      topLevelRule: rule,
      grammarName: className
    });
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
      ruleName: rule.name
    });
  }
  return errors;
}
function validateRuleIsOverridden(ruleName, definedRulesNames, className) {
  const errors = [];
  let errMsg;
  if (!includes_default(definedRulesNames, ruleName)) {
    errMsg = `Invalid rule override, rule: ->${ruleName}<- cannot be overridden in the grammar: ->${className}<-as it is not defined in any of the super grammars `;
    errors.push({
      message: errMsg,
      type: ParserDefinitionErrorType.INVALID_RULE_OVERRIDE,
      ruleName
    });
  }
  return errors;
}
function validateNoLeftRecursion(topRule, currRule, errMsgProvider, path = []) {
  const errors = [];
  const nextNonTerminals = getFirstNoneTerminal(currRule.definition);
  if (isEmpty_default(nextNonTerminals)) {
    return [];
  } else {
    const ruleName = topRule.name;
    const foundLeftRecursion = includes_default(nextNonTerminals, topRule);
    if (foundLeftRecursion) {
      errors.push({
        message: errMsgProvider.buildLeftRecursionError({
          topLevelRule: topRule,
          leftRecursionPath: path
        }),
        type: ParserDefinitionErrorType.LEFT_RECURSION,
        ruleName
      });
    }
    const validNextSteps = difference_default(nextNonTerminals, path.concat([topRule]));
    const errorsFromNextSteps = flatMap_default(validNextSteps, (currRefRule) => {
      const newPath = clone_default(path);
      newPath.push(currRefRule);
      return validateNoLeftRecursion(topRule, currRefRule, errMsgProvider, newPath);
    });
    return errors.concat(errorsFromNextSteps);
  }
}
function getFirstNoneTerminal(definition) {
  let result = [];
  if (isEmpty_default(definition)) {
    return result;
  }
  const firstProd = head_default(definition);
  if (firstProd instanceof NonTerminal) {
    result.push(firstProd.referencedRule);
  } else if (firstProd instanceof Alternative || firstProd instanceof Option || firstProd instanceof RepetitionMandatory || firstProd instanceof RepetitionMandatoryWithSeparator || firstProd instanceof RepetitionWithSeparator || firstProd instanceof Repetition) {
    result = result.concat(getFirstNoneTerminal(firstProd.definition));
  } else if (firstProd instanceof Alternation) {
    result = flatten_default(map_default(firstProd.definition, (currSubDef) => getFirstNoneTerminal(currSubDef.definition)));
  } else if (firstProd instanceof Terminal) {
  } else {
    throw Error("non exhaustive match");
  }
  const isFirstOptional = isOptionalProd(firstProd);
  const hasMore = definition.length > 1;
  if (isFirstOptional && hasMore) {
    const rest = drop_default(definition);
    return result.concat(getFirstNoneTerminal(rest));
  } else {
    return result;
  }
}
var OrCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.alternations = [];
  }
  visitAlternation(node) {
    this.alternations.push(node);
  }
};
function validateEmptyOrAlternative(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    const exceptLast = dropRight_default(currOr.definition);
    return flatMap_default(exceptLast, (currAlternative, currAltIdx) => {
      const possibleFirstInAlt = nextPossibleTokensAfter([currAlternative], [], tokenStructuredMatcher, 1);
      if (isEmpty_default(possibleFirstInAlt)) {
        return [
          {
            message: errMsgProvider.buildEmptyAlternationError({
              topLevelRule,
              alternation: currOr,
              emptyChoiceIdx: currAltIdx
            }),
            type: ParserDefinitionErrorType.NONE_LAST_EMPTY_ALT,
            ruleName: topLevelRule.name,
            occurrence: currOr.idx,
            alternative: currAltIdx + 1
          }
        ];
      } else {
        return [];
      }
    });
  });
  return errors;
}
function validateAmbiguousAlternationAlternatives(topLevelRule, globalMaxLookahead, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  let ors = orCollector.alternations;
  ors = reject_default(ors, (currOr) => currOr.ignoreAmbiguities === true);
  const errors = flatMap_default(ors, (currOr) => {
    const currOccurrence = currOr.idx;
    const actualMaxLookahead = currOr.maxLookahead || globalMaxLookahead;
    const alternatives = getLookaheadPathsForOr(currOccurrence, topLevelRule, actualMaxLookahead, currOr);
    const altsAmbiguityErrors = checkAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    const altsPrefixAmbiguityErrors = checkPrefixAlternativesAmbiguities(alternatives, currOr, topLevelRule, errMsgProvider);
    return altsAmbiguityErrors.concat(altsPrefixAmbiguityErrors);
  });
  return errors;
}
var RepetitionCollector = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.allProductions = [];
  }
  visitRepetitionWithSeparator(manySep) {
    this.allProductions.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.allProductions.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.allProductions.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.allProductions.push(many);
  }
};
function validateTooManyAlts(topLevelRule, errMsgProvider) {
  const orCollector = new OrCollector();
  topLevelRule.accept(orCollector);
  const ors = orCollector.alternations;
  const errors = flatMap_default(ors, (currOr) => {
    if (currOr.definition.length > 255) {
      return [
        {
          message: errMsgProvider.buildTooManyAlternativesError({
            topLevelRule,
            alternation: currOr
          }),
          type: ParserDefinitionErrorType.TOO_MANY_ALTS,
          ruleName: topLevelRule.name,
          occurrence: currOr.idx
        }
      ];
    } else {
      return [];
    }
  });
  return errors;
}
function validateSomeNonEmptyLookaheadPath(topLevelRules, maxLookahead, errMsgProvider) {
  const errors = [];
  forEach_default(topLevelRules, (currTopRule) => {
    const collectorVisitor2 = new RepetitionCollector();
    currTopRule.accept(collectorVisitor2);
    const allRuleProductions = collectorVisitor2.allProductions;
    forEach_default(allRuleProductions, (currProd) => {
      const prodType = getProdType(currProd);
      const actualMaxLookahead = currProd.maxLookahead || maxLookahead;
      const currOccurrence = currProd.idx;
      const paths = getLookaheadPathsForOptionalProd(currOccurrence, currTopRule, prodType, actualMaxLookahead);
      const pathsInsideProduction = paths[0];
      if (isEmpty_default(flatten_default(pathsInsideProduction))) {
        const errMsg = errMsgProvider.buildEmptyRepetitionError({
          topLevelRule: currTopRule,
          repetition: currProd
        });
        errors.push({
          message: errMsg,
          type: ParserDefinitionErrorType.NO_NON_EMPTY_LOOKAHEAD,
          ruleName: currTopRule.name
        });
      }
    });
  });
  return errors;
}
function checkAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
  const foundAmbiguousPaths = [];
  const identicalAmbiguities = reduce_default(alternatives, (result, currAlt, currAltIdx) => {
    if (alternation.definition[currAltIdx].ignoreAmbiguities === true) {
      return result;
    }
    forEach_default(currAlt, (currPath) => {
      const altsCurrPathAppearsIn = [currAltIdx];
      forEach_default(alternatives, (currOtherAlt, currOtherAltIdx) => {
        if (currAltIdx !== currOtherAltIdx && containsPath(currOtherAlt, currPath) && // ignore (skip) ambiguities with this "other" alternative
        alternation.definition[currOtherAltIdx].ignoreAmbiguities !== true) {
          altsCurrPathAppearsIn.push(currOtherAltIdx);
        }
      });
      if (altsCurrPathAppearsIn.length > 1 && !containsPath(foundAmbiguousPaths, currPath)) {
        foundAmbiguousPaths.push(currPath);
        result.push({
          alts: altsCurrPathAppearsIn,
          path: currPath
        });
      }
    });
    return result;
  }, []);
  const currErrors = map_default(identicalAmbiguities, (currAmbDescriptor) => {
    const ambgIndices = map_default(currAmbDescriptor.alts, (currAltIdx) => currAltIdx + 1);
    const currMessage = errMsgProvider.buildAlternationAmbiguityError({
      topLevelRule: rule,
      alternation,
      ambiguityIndices: ambgIndices,
      prefixPath: currAmbDescriptor.path
    });
    return {
      message: currMessage,
      type: ParserDefinitionErrorType.AMBIGUOUS_ALTS,
      ruleName: rule.name,
      occurrence: alternation.idx,
      alternatives: currAmbDescriptor.alts
    };
  });
  return currErrors;
}
function checkPrefixAlternativesAmbiguities(alternatives, alternation, rule, errMsgProvider) {
  const pathsAndIndices = reduce_default(alternatives, (result, currAlt, idx) => {
    const currPathsAndIdx = map_default(currAlt, (currPath) => {
      return { idx, path: currPath };
    });
    return result.concat(currPathsAndIdx);
  }, []);
  const errors = compact_default(flatMap_default(pathsAndIndices, (currPathAndIdx) => {
    const alternativeGast = alternation.definition[currPathAndIdx.idx];
    if (alternativeGast.ignoreAmbiguities === true) {
      return [];
    }
    const targetIdx = currPathAndIdx.idx;
    const targetPath = currPathAndIdx.path;
    const prefixAmbiguitiesPathsAndIndices = filter_default(pathsAndIndices, (searchPathAndIdx) => {
      return (
        // ignore (skip) ambiguities with this "other" alternative
        alternation.definition[searchPathAndIdx.idx].ignoreAmbiguities !== true && searchPathAndIdx.idx < targetIdx && // checking for strict prefix because identical lookaheads
        // will be be detected using a different validation.
        isStrictPrefixOfPath(searchPathAndIdx.path, targetPath)
      );
    });
    const currPathPrefixErrors = map_default(prefixAmbiguitiesPathsAndIndices, (currAmbPathAndIdx) => {
      const ambgIndices = [currAmbPathAndIdx.idx + 1, targetIdx + 1];
      const occurrence = alternation.idx === 0 ? "" : alternation.idx;
      const message = errMsgProvider.buildAlternationPrefixAmbiguityError({
        topLevelRule: rule,
        alternation,
        ambiguityIndices: ambgIndices,
        prefixPath: currAmbPathAndIdx.path
      });
      return {
        message,
        type: ParserDefinitionErrorType.AMBIGUOUS_PREFIX_ALTS,
        ruleName: rule.name,
        occurrence,
        alternatives: ambgIndices
      };
    });
    return currPathPrefixErrors;
  }));
  return errors;
}
function checkTerminalAndNoneTerminalsNameSpace(topLevels, tokenTypes, errMsgProvider) {
  const errors = [];
  const tokenNames = map_default(tokenTypes, (currToken) => currToken.name);
  forEach_default(topLevels, (currRule) => {
    const currRuleName = currRule.name;
    if (includes_default(tokenNames, currRuleName)) {
      const errMsg = errMsgProvider.buildNamespaceConflictError(currRule);
      errors.push({
        message: errMsg,
        type: ParserDefinitionErrorType.CONFLICT_TOKENS_RULES_NAMESPACE,
        ruleName: currRuleName
      });
    }
  });
  return errors;
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/gast/gast_resolver_public.js
function resolveGrammar2(options) {
  const actualOptions = defaults_default(options, {
    errMsgProvider: defaultGrammarResolverErrorProvider
  });
  const topRulesTable = {};
  forEach_default(options.rules, (rule) => {
    topRulesTable[rule.name] = rule;
  });
  return resolveGrammar(topRulesTable, actualOptions.errMsgProvider);
}
function validateGrammar2(options) {
  options = defaults_default(options, {
    errMsgProvider: defaultGrammarValidatorErrorProvider
  });
  return validateGrammar(options.rules, options.tokenTypes, options.errMsgProvider, options.grammarName);
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/exceptions_public.js
var MISMATCHED_TOKEN_EXCEPTION = "MismatchedTokenException";
var NO_VIABLE_ALT_EXCEPTION = "NoViableAltException";
var EARLY_EXIT_EXCEPTION = "EarlyExitException";
var NOT_ALL_INPUT_PARSED_EXCEPTION = "NotAllInputParsedException";
var RECOGNITION_EXCEPTION_NAMES = [
  MISMATCHED_TOKEN_EXCEPTION,
  NO_VIABLE_ALT_EXCEPTION,
  EARLY_EXIT_EXCEPTION,
  NOT_ALL_INPUT_PARSED_EXCEPTION
];
Object.freeze(RECOGNITION_EXCEPTION_NAMES);
function isRecognitionException(error) {
  return includes_default(RECOGNITION_EXCEPTION_NAMES, error.name);
}
var RecognitionException = class extends Error {
  constructor(message, token) {
    super(message);
    this.token = token;
    this.resyncedTokens = [];
    Object.setPrototypeOf(this, new.target.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var MismatchedTokenException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = MISMATCHED_TOKEN_EXCEPTION;
  }
};
var NoViableAltException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = NO_VIABLE_ALT_EXCEPTION;
  }
};
var NotAllInputParsedException = class extends RecognitionException {
  constructor(message, token) {
    super(message, token);
    this.name = NOT_ALL_INPUT_PARSED_EXCEPTION;
  }
};
var EarlyExitException = class extends RecognitionException {
  constructor(message, token, previousToken) {
    super(message, token);
    this.previousToken = previousToken;
    this.name = EARLY_EXIT_EXCEPTION;
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/recoverable.js
var EOF_FOLLOW_KEY = {};
var IN_RULE_RECOVERY_EXCEPTION = "InRuleRecoveryException";
var InRuleRecoveryException = class extends Error {
  constructor(message) {
    super(message);
    this.name = IN_RULE_RECOVERY_EXCEPTION;
  }
};
var Recoverable = class {
  initRecoverable(config2) {
    this.firstAfterRepMap = {};
    this.resyncFollows = {};
    this.recoveryEnabled = has_default(config2, "recoveryEnabled") ? config2.recoveryEnabled : DEFAULT_PARSER_CONFIG.recoveryEnabled;
    if (this.recoveryEnabled) {
      this.attemptInRepetitionRecovery = attemptInRepetitionRecovery;
    }
  }
  getTokenToInsert(tokType) {
    const tokToInsert = createTokenInstance(tokType, "", NaN, NaN, NaN, NaN, NaN, NaN);
    tokToInsert.isInsertedInRecovery = true;
    return tokToInsert;
  }
  canTokenTypeBeInsertedInRecovery(tokType) {
    return true;
  }
  canTokenTypeBeDeletedInRecovery(tokType) {
    return true;
  }
  tryInRepetitionRecovery(grammarRule, grammarRuleArgs, lookAheadFunc, expectedTokType) {
    const reSyncTokType = this.findReSyncTokenType();
    const savedLexerState = this.exportLexerState();
    const resyncedTokens = [];
    let passedResyncPoint = false;
    const nextTokenWithoutResync = this.LA(1);
    let currToken = this.LA(1);
    const generateErrorMessage = () => {
      const previousToken = this.LA(0);
      const msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: expectedTokType,
        actual: nextTokenWithoutResync,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
      const error = new MismatchedTokenException(msg, nextTokenWithoutResync, this.LA(0));
      error.resyncedTokens = dropRight_default(resyncedTokens);
      this.SAVE_ERROR(error);
    };
    while (!passedResyncPoint) {
      if (this.tokenMatcher(currToken, expectedTokType)) {
        generateErrorMessage();
        return;
      } else if (lookAheadFunc.call(this)) {
        generateErrorMessage();
        grammarRule.apply(this, grammarRuleArgs);
        return;
      } else if (this.tokenMatcher(currToken, reSyncTokType)) {
        passedResyncPoint = true;
      } else {
        currToken = this.SKIP_TOKEN();
        this.addToResyncTokens(currToken, resyncedTokens);
      }
    }
    this.importLexerState(savedLexerState);
  }
  shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck) {
    if (notStuck === false) {
      return false;
    }
    if (this.tokenMatcher(this.LA(1), expectTokAfterLastMatch)) {
      return false;
    }
    if (this.isBackTracking()) {
      return false;
    }
    if (this.canPerformInRuleRecovery(expectTokAfterLastMatch, this.getFollowsForInRuleRecovery(expectTokAfterLastMatch, nextTokIdx))) {
      return false;
    }
    return true;
  }
  // Error Recovery functionality
  getFollowsForInRuleRecovery(tokType, tokIdxInRule) {
    const grammarPath = this.getCurrentGrammarPath(tokType, tokIdxInRule);
    const follows = this.getNextPossibleTokenTypes(grammarPath);
    return follows;
  }
  tryInRuleRecovery(expectedTokType, follows) {
    if (this.canRecoverWithSingleTokenInsertion(expectedTokType, follows)) {
      const tokToInsert = this.getTokenToInsert(expectedTokType);
      return tokToInsert;
    }
    if (this.canRecoverWithSingleTokenDeletion(expectedTokType)) {
      const nextTok = this.SKIP_TOKEN();
      this.consumeToken();
      return nextTok;
    }
    throw new InRuleRecoveryException("sad sad panda");
  }
  canPerformInRuleRecovery(expectedToken, follows) {
    return this.canRecoverWithSingleTokenInsertion(expectedToken, follows) || this.canRecoverWithSingleTokenDeletion(expectedToken);
  }
  canRecoverWithSingleTokenInsertion(expectedTokType, follows) {
    if (!this.canTokenTypeBeInsertedInRecovery(expectedTokType)) {
      return false;
    }
    if (isEmpty_default(follows)) {
      return false;
    }
    const mismatchedTok = this.LA(1);
    const isMisMatchedTokInFollows = find_default(follows, (possibleFollowsTokType) => {
      return this.tokenMatcher(mismatchedTok, possibleFollowsTokType);
    }) !== void 0;
    return isMisMatchedTokInFollows;
  }
  canRecoverWithSingleTokenDeletion(expectedTokType) {
    if (!this.canTokenTypeBeDeletedInRecovery(expectedTokType)) {
      return false;
    }
    const isNextTokenWhatIsExpected = this.tokenMatcher(this.LA(2), expectedTokType);
    return isNextTokenWhatIsExpected;
  }
  isInCurrentRuleReSyncSet(tokenTypeIdx) {
    const followKey = this.getCurrFollowKey();
    const currentRuleReSyncSet = this.getFollowSetFromFollowKey(followKey);
    return includes_default(currentRuleReSyncSet, tokenTypeIdx);
  }
  findReSyncTokenType() {
    const allPossibleReSyncTokTypes = this.flattenFollowSet();
    let nextToken = this.LA(1);
    let k = 2;
    while (true) {
      const foundMatch = find_default(allPossibleReSyncTokTypes, (resyncTokType) => {
        const canMatch = tokenMatcher(nextToken, resyncTokType);
        return canMatch;
      });
      if (foundMatch !== void 0) {
        return foundMatch;
      }
      nextToken = this.LA(k);
      k++;
    }
  }
  getCurrFollowKey() {
    if (this.RULE_STACK.length === 1) {
      return EOF_FOLLOW_KEY;
    }
    const currRuleShortName = this.getLastExplicitRuleShortName();
    const currRuleIdx = this.getLastExplicitRuleOccurrenceIndex();
    const prevRuleShortName = this.getPreviousExplicitRuleShortName();
    return {
      ruleName: this.shortRuleNameToFullName(currRuleShortName),
      idxInCallingRule: currRuleIdx,
      inRule: this.shortRuleNameToFullName(prevRuleShortName)
    };
  }
  buildFullFollowKeyStack() {
    const explicitRuleStack = this.RULE_STACK;
    const explicitOccurrenceStack = this.RULE_OCCURRENCE_STACK;
    return map_default(explicitRuleStack, (ruleName, idx) => {
      if (idx === 0) {
        return EOF_FOLLOW_KEY;
      }
      return {
        ruleName: this.shortRuleNameToFullName(ruleName),
        idxInCallingRule: explicitOccurrenceStack[idx],
        inRule: this.shortRuleNameToFullName(explicitRuleStack[idx - 1])
      };
    });
  }
  flattenFollowSet() {
    const followStack = map_default(this.buildFullFollowKeyStack(), (currKey) => {
      return this.getFollowSetFromFollowKey(currKey);
    });
    return flatten_default(followStack);
  }
  getFollowSetFromFollowKey(followKey) {
    if (followKey === EOF_FOLLOW_KEY) {
      return [EOF];
    }
    const followName = followKey.ruleName + followKey.idxInCallingRule + IN + followKey.inRule;
    return this.resyncFollows[followName];
  }
  // It does not make any sense to include a virtual EOF token in the list of resynced tokens
  // as EOF does not really exist and thus does not contain any useful information (line/column numbers)
  addToResyncTokens(token, resyncTokens) {
    if (!this.tokenMatcher(token, EOF)) {
      resyncTokens.push(token);
    }
    return resyncTokens;
  }
  reSyncTo(tokType) {
    const resyncedTokens = [];
    let nextTok = this.LA(1);
    while (this.tokenMatcher(nextTok, tokType) === false) {
      nextTok = this.SKIP_TOKEN();
      this.addToResyncTokens(nextTok, resyncedTokens);
    }
    return dropRight_default(resyncedTokens);
  }
  attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  }
  getCurrentGrammarPath(tokType, tokIdxInRule) {
    const pathRuleStack = this.getHumanReadableRuleStack();
    const pathOccurrenceStack = clone_default(this.RULE_OCCURRENCE_STACK);
    const grammarPath = {
      ruleStack: pathRuleStack,
      occurrenceStack: pathOccurrenceStack,
      lastTok: tokType,
      lastTokOccurrence: tokIdxInRule
    };
    return grammarPath;
  }
  getHumanReadableRuleStack() {
    return map_default(this.RULE_STACK, (currShortName) => this.shortRuleNameToFullName(currShortName));
  }
};
function attemptInRepetitionRecovery(prodFunc, args, lookaheadFunc, dslMethodIdx, prodOccurrence, nextToksWalker, notStuck) {
  const key = this.getKeyForAutomaticLookahead(dslMethodIdx, prodOccurrence);
  let firstAfterRepInfo = this.firstAfterRepMap[key];
  if (firstAfterRepInfo === void 0) {
    const currRuleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[currRuleName];
    const walker = new nextToksWalker(ruleGrammar, prodOccurrence);
    firstAfterRepInfo = walker.startWalking();
    this.firstAfterRepMap[key] = firstAfterRepInfo;
  }
  let expectTokAfterLastMatch = firstAfterRepInfo.token;
  let nextTokIdx = firstAfterRepInfo.occurrence;
  const isEndOfRule = firstAfterRepInfo.isEndOfRule;
  if (this.RULE_STACK.length === 1 && isEndOfRule && expectTokAfterLastMatch === void 0) {
    expectTokAfterLastMatch = EOF;
    nextTokIdx = 1;
  }
  if (expectTokAfterLastMatch === void 0 || nextTokIdx === void 0) {
    return;
  }
  if (this.shouldInRepetitionRecoveryBeTried(expectTokAfterLastMatch, nextTokIdx, notStuck)) {
    this.tryInRepetitionRecovery(prodFunc, args, lookaheadFunc, expectTokAfterLastMatch);
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/keys.js
var BITS_FOR_METHOD_TYPE = 4;
var BITS_FOR_OCCURRENCE_IDX = 8;
var BITS_FOR_ALT_IDX = 8;
var OR_IDX = 1 << BITS_FOR_OCCURRENCE_IDX;
var OPTION_IDX = 2 << BITS_FOR_OCCURRENCE_IDX;
var MANY_IDX = 3 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_IDX = 4 << BITS_FOR_OCCURRENCE_IDX;
var MANY_SEP_IDX = 5 << BITS_FOR_OCCURRENCE_IDX;
var AT_LEAST_ONE_SEP_IDX = 6 << BITS_FOR_OCCURRENCE_IDX;
function getKeyForAutomaticLookahead(ruleIdx, dslMethodIdx, occurrence) {
  return occurrence | dslMethodIdx | ruleIdx;
}
var BITS_START_FOR_ALT_IDX = 32 - BITS_FOR_ALT_IDX;

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/grammar/llk_lookahead.js
var LLkLookaheadStrategy = class {
  constructor(options) {
    var _a;
    this.maxLookahead = (_a = options === null || options === void 0 ? void 0 : options.maxLookahead) !== null && _a !== void 0 ? _a : DEFAULT_PARSER_CONFIG.maxLookahead;
  }
  validate(options) {
    const leftRecursionErrors = this.validateNoLeftRecursion(options.rules);
    if (isEmpty_default(leftRecursionErrors)) {
      const emptyAltErrors = this.validateEmptyOrAlternatives(options.rules);
      const ambiguousAltsErrors = this.validateAmbiguousAlternationAlternatives(options.rules, this.maxLookahead);
      const emptyRepetitionErrors = this.validateSomeNonEmptyLookaheadPath(options.rules, this.maxLookahead);
      const allErrors = [
        ...leftRecursionErrors,
        ...emptyAltErrors,
        ...ambiguousAltsErrors,
        ...emptyRepetitionErrors
      ];
      return allErrors;
    }
    return leftRecursionErrors;
  }
  validateNoLeftRecursion(rules) {
    return flatMap_default(rules, (currTopRule) => validateNoLeftRecursion(currTopRule, currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateEmptyOrAlternatives(rules) {
    return flatMap_default(rules, (currTopRule) => validateEmptyOrAlternative(currTopRule, defaultGrammarValidatorErrorProvider));
  }
  validateAmbiguousAlternationAlternatives(rules, maxLookahead) {
    return flatMap_default(rules, (currTopRule) => validateAmbiguousAlternationAlternatives(currTopRule, maxLookahead, defaultGrammarValidatorErrorProvider));
  }
  validateSomeNonEmptyLookaheadPath(rules, maxLookahead) {
    return validateSomeNonEmptyLookaheadPath(rules, maxLookahead, defaultGrammarValidatorErrorProvider);
  }
  buildLookaheadForAlternation(options) {
    return buildLookaheadFuncForOr(options.prodOccurrence, options.rule, options.maxLookahead, options.hasPredicates, options.dynamicTokensEnabled, buildAlternativesLookAheadFunc);
  }
  buildLookaheadForOptional(options) {
    return buildLookaheadFuncForOptionalProd(options.prodOccurrence, options.rule, options.maxLookahead, options.dynamicTokensEnabled, getProdType(options.prodType), buildSingleAlternativeLookaheadFunction);
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/looksahead.js
var LooksAhead = class {
  initLooksAhead(config2) {
    this.dynamicTokensEnabled = has_default(config2, "dynamicTokensEnabled") ? config2.dynamicTokensEnabled : DEFAULT_PARSER_CONFIG.dynamicTokensEnabled;
    this.maxLookahead = has_default(config2, "maxLookahead") ? config2.maxLookahead : DEFAULT_PARSER_CONFIG.maxLookahead;
    this.lookaheadStrategy = has_default(config2, "lookaheadStrategy") ? config2.lookaheadStrategy : new LLkLookaheadStrategy({ maxLookahead: this.maxLookahead });
    this.lookAheadFuncsCache = /* @__PURE__ */ new Map();
  }
  preComputeLookaheadFunctions(rules) {
    forEach_default(rules, (currRule) => {
      this.TRACE_INIT(`${currRule.name} Rule Lookahead`, () => {
        const { alternation, repetition, option, repetitionMandatory, repetitionMandatoryWithSeparator, repetitionWithSeparator } = collectMethods(currRule);
        forEach_default(alternation, (currProd) => {
          const prodIdx = currProd.idx === 0 ? "" : currProd.idx;
          this.TRACE_INIT(`${getProductionDslName(currProd)}${prodIdx}`, () => {
            const laFunc = this.lookaheadStrategy.buildLookaheadForAlternation({
              prodOccurrence: currProd.idx,
              rule: currRule,
              maxLookahead: currProd.maxLookahead || this.maxLookahead,
              hasPredicates: currProd.hasPredicates,
              dynamicTokensEnabled: this.dynamicTokensEnabled
            });
            const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[currRule.name], OR_IDX, currProd.idx);
            this.setLaFuncCache(key, laFunc);
          });
        });
        forEach_default(repetition, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_IDX, "Repetition", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(option, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, OPTION_IDX, "Option", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatory, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_IDX, "RepetitionMandatory", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionMandatoryWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, AT_LEAST_ONE_SEP_IDX, "RepetitionMandatoryWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
        forEach_default(repetitionWithSeparator, (currProd) => {
          this.computeLookaheadFunc(currRule, currProd.idx, MANY_SEP_IDX, "RepetitionWithSeparator", currProd.maxLookahead, getProductionDslName(currProd));
        });
      });
    });
  }
  computeLookaheadFunc(rule, prodOccurrence, prodKey, prodType, prodMaxLookahead, dslMethodName) {
    this.TRACE_INIT(`${dslMethodName}${prodOccurrence === 0 ? "" : prodOccurrence}`, () => {
      const laFunc = this.lookaheadStrategy.buildLookaheadForOptional({
        prodOccurrence,
        rule,
        maxLookahead: prodMaxLookahead || this.maxLookahead,
        dynamicTokensEnabled: this.dynamicTokensEnabled,
        prodType
      });
      const key = getKeyForAutomaticLookahead(this.fullRuleNameToShort[rule.name], prodKey, prodOccurrence);
      this.setLaFuncCache(key, laFunc);
    });
  }
  // this actually returns a number, but it is always used as a string (object prop key)
  getKeyForAutomaticLookahead(dslMethodIdx, occurrence) {
    const currRuleShortName = this.getLastExplicitRuleShortName();
    return getKeyForAutomaticLookahead(currRuleShortName, dslMethodIdx, occurrence);
  }
  getLaFuncFromCache(key) {
    return this.lookAheadFuncsCache.get(key);
  }
  /* istanbul ignore next */
  setLaFuncCache(key, value) {
    this.lookAheadFuncsCache.set(key, value);
  }
};
var DslMethodsCollectorVisitor = class extends GAstVisitor {
  constructor() {
    super(...arguments);
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  reset() {
    this.dslMethods = {
      option: [],
      alternation: [],
      repetition: [],
      repetitionWithSeparator: [],
      repetitionMandatory: [],
      repetitionMandatoryWithSeparator: []
    };
  }
  visitOption(option) {
    this.dslMethods.option.push(option);
  }
  visitRepetitionWithSeparator(manySep) {
    this.dslMethods.repetitionWithSeparator.push(manySep);
  }
  visitRepetitionMandatory(atLeastOne) {
    this.dslMethods.repetitionMandatory.push(atLeastOne);
  }
  visitRepetitionMandatoryWithSeparator(atLeastOneSep) {
    this.dslMethods.repetitionMandatoryWithSeparator.push(atLeastOneSep);
  }
  visitRepetition(many) {
    this.dslMethods.repetition.push(many);
  }
  visitAlternation(or) {
    this.dslMethods.alternation.push(or);
  }
};
var collectorVisitor = new DslMethodsCollectorVisitor();
function collectMethods(rule) {
  collectorVisitor.reset();
  rule.accept(collectorVisitor);
  const dslMethods = collectorVisitor.dslMethods;
  collectorVisitor.reset();
  return dslMethods;
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/cst/cst.js
function setNodeLocationOnlyOffset(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
  }
}
function setNodeLocationFull(currNodeLocation, newLocationInfo) {
  if (isNaN(currNodeLocation.startOffset) === true) {
    currNodeLocation.startOffset = newLocationInfo.startOffset;
    currNodeLocation.startColumn = newLocationInfo.startColumn;
    currNodeLocation.startLine = newLocationInfo.startLine;
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  } else if (currNodeLocation.endOffset < newLocationInfo.endOffset === true) {
    currNodeLocation.endOffset = newLocationInfo.endOffset;
    currNodeLocation.endColumn = newLocationInfo.endColumn;
    currNodeLocation.endLine = newLocationInfo.endLine;
  }
}
function addTerminalToCst(node, token, tokenTypeName) {
  if (node.children[tokenTypeName] === void 0) {
    node.children[tokenTypeName] = [token];
  } else {
    node.children[tokenTypeName].push(token);
  }
}
function addNoneTerminalToCst(node, ruleName, ruleResult) {
  if (node.children[ruleName] === void 0) {
    node.children[ruleName] = [ruleResult];
  } else {
    node.children[ruleName].push(ruleResult);
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/lang/lang_extensions.js
var NAME = "name";
function defineNameProp(obj, nameValue) {
  Object.defineProperty(obj, NAME, {
    enumerable: false,
    configurable: true,
    writable: false,
    value: nameValue
  });
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/cst/cst_visitor.js
function defaultVisit(ctx, param) {
  const childrenNames = keys_default(ctx);
  const childrenNamesLength = childrenNames.length;
  for (let i = 0; i < childrenNamesLength; i++) {
    const currChildName = childrenNames[i];
    const currChildArray = ctx[currChildName];
    const currChildArrayLength = currChildArray.length;
    for (let j = 0; j < currChildArrayLength; j++) {
      const currChild = currChildArray[j];
      if (currChild.tokenTypeIdx === void 0) {
        this[currChild.name](currChild.children, param);
      }
    }
  }
}
function createBaseSemanticVisitorConstructor(grammarName, ruleNames) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemantics");
  const semanticProto = {
    visit: function(cstNode, param) {
      if (isArray_default(cstNode)) {
        cstNode = cstNode[0];
      }
      if (isUndefined_default(cstNode)) {
        return void 0;
      }
      return this[cstNode.name](cstNode.children, param);
    },
    validateVisitor: function() {
      const semanticDefinitionErrors = validateVisitor(this, ruleNames);
      if (!isEmpty_default(semanticDefinitionErrors)) {
        const errorMessages = map_default(semanticDefinitionErrors, (currDefError) => currDefError.msg);
        throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${errorMessages.join("\n\n").replace(/\n/g, "\n	")}`);
      }
    }
  };
  derivedConstructor.prototype = semanticProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  derivedConstructor._RULE_NAMES = ruleNames;
  return derivedConstructor;
}
function createBaseVisitorConstructorWithDefaults(grammarName, ruleNames, baseConstructor) {
  const derivedConstructor = function() {
  };
  defineNameProp(derivedConstructor, grammarName + "BaseSemanticsWithDefaults");
  const withDefaultsProto = Object.create(baseConstructor.prototype);
  forEach_default(ruleNames, (ruleName) => {
    withDefaultsProto[ruleName] = defaultVisit;
  });
  derivedConstructor.prototype = withDefaultsProto;
  derivedConstructor.prototype.constructor = derivedConstructor;
  return derivedConstructor;
}
var CstVisitorDefinitionError;
(function(CstVisitorDefinitionError2) {
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["REDUNDANT_METHOD"] = 0] = "REDUNDANT_METHOD";
  CstVisitorDefinitionError2[CstVisitorDefinitionError2["MISSING_METHOD"] = 1] = "MISSING_METHOD";
})(CstVisitorDefinitionError || (CstVisitorDefinitionError = {}));
function validateVisitor(visitorInstance, ruleNames) {
  const missingErrors = validateMissingCstMethods(visitorInstance, ruleNames);
  return missingErrors;
}
function validateMissingCstMethods(visitorInstance, ruleNames) {
  const missingRuleNames = filter_default(ruleNames, (currRuleName) => {
    return isFunction_default(visitorInstance[currRuleName]) === false;
  });
  const errors = map_default(missingRuleNames, (currRuleName) => {
    return {
      msg: `Missing visitor method: <${currRuleName}> on ${visitorInstance.constructor.name} CST Visitor.`,
      type: CstVisitorDefinitionError.MISSING_METHOD,
      methodName: currRuleName
    };
  });
  return compact_default(errors);
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/tree_builder.js
var TreeBuilder = class {
  initTreeBuilder(config2) {
    this.CST_STACK = [];
    this.outputCst = config2.outputCst;
    this.nodeLocationTracking = has_default(config2, "nodeLocationTracking") ? config2.nodeLocationTracking : DEFAULT_PARSER_CONFIG.nodeLocationTracking;
    if (!this.outputCst) {
      this.cstInvocationStateUpdate = noop_default;
      this.cstFinallyStateUpdate = noop_default;
      this.cstPostTerminal = noop_default;
      this.cstPostNonTerminal = noop_default;
      this.cstPostRule = noop_default;
    } else {
      if (/full/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationFull;
          this.setNodeLocationFromNode = setNodeLocationFull;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleFull;
          this.setInitialNodeLocation = this.setInitialNodeLocationFullRegular;
        }
      } else if (/onlyOffset/i.test(this.nodeLocationTracking)) {
        if (this.recoveryEnabled) {
          this.setNodeLocationFromToken = setNodeLocationOnlyOffset;
          this.setNodeLocationFromNode = setNodeLocationOnlyOffset;
          this.cstPostRule = noop_default;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRecovery;
        } else {
          this.setNodeLocationFromToken = noop_default;
          this.setNodeLocationFromNode = noop_default;
          this.cstPostRule = this.cstPostRuleOnlyOffset;
          this.setInitialNodeLocation = this.setInitialNodeLocationOnlyOffsetRegular;
        }
      } else if (/none/i.test(this.nodeLocationTracking)) {
        this.setNodeLocationFromToken = noop_default;
        this.setNodeLocationFromNode = noop_default;
        this.cstPostRule = noop_default;
        this.setInitialNodeLocation = noop_default;
      } else {
        throw Error(`Invalid <nodeLocationTracking> config option: "${config2.nodeLocationTracking}"`);
      }
    }
  }
  setInitialNodeLocationOnlyOffsetRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      endOffset: NaN
    };
  }
  setInitialNodeLocationOnlyOffsetRegular(cstNode) {
    cstNode.location = {
      // without error recovery the starting Location of a new CstNode is guaranteed
      // To be the next Token's startOffset (for valid inputs).
      // For invalid inputs there won't be any CSTOutput so this potential
      // inaccuracy does not matter
      startOffset: this.LA(1).startOffset,
      endOffset: NaN
    };
  }
  setInitialNodeLocationFullRecovery(cstNode) {
    cstNode.location = {
      startOffset: NaN,
      startLine: NaN,
      startColumn: NaN,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  /**
       *  @see setInitialNodeLocationOnlyOffsetRegular for explanation why this work
  
       * @param cstNode
       */
  setInitialNodeLocationFullRegular(cstNode) {
    const nextToken = this.LA(1);
    cstNode.location = {
      startOffset: nextToken.startOffset,
      startLine: nextToken.startLine,
      startColumn: nextToken.startColumn,
      endOffset: NaN,
      endLine: NaN,
      endColumn: NaN
    };
  }
  cstInvocationStateUpdate(fullRuleName) {
    const cstNode = {
      name: fullRuleName,
      children: /* @__PURE__ */ Object.create(null)
    };
    this.setInitialNodeLocation(cstNode);
    this.CST_STACK.push(cstNode);
  }
  cstFinallyStateUpdate() {
    this.CST_STACK.pop();
  }
  cstPostRuleFull(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
      loc.endLine = prevToken.endLine;
      loc.endColumn = prevToken.endColumn;
    } else {
      loc.startOffset = NaN;
      loc.startLine = NaN;
      loc.startColumn = NaN;
    }
  }
  cstPostRuleOnlyOffset(ruleCstNode) {
    const prevToken = this.LA(0);
    const loc = ruleCstNode.location;
    if (loc.startOffset <= prevToken.startOffset === true) {
      loc.endOffset = prevToken.endOffset;
    } else {
      loc.startOffset = NaN;
    }
  }
  cstPostTerminal(key, consumedToken) {
    const rootCst = this.CST_STACK[this.CST_STACK.length - 1];
    addTerminalToCst(rootCst, consumedToken, key);
    this.setNodeLocationFromToken(rootCst.location, consumedToken);
  }
  cstPostNonTerminal(ruleCstResult, ruleName) {
    const preCstNode = this.CST_STACK[this.CST_STACK.length - 1];
    addNoneTerminalToCst(preCstNode, ruleName, ruleCstResult);
    this.setNodeLocationFromNode(preCstNode.location, ruleCstResult.location);
  }
  getBaseCstVisitorConstructor() {
    if (isUndefined_default(this.baseCstVisitorConstructor)) {
      const newBaseCstVisitorConstructor = createBaseSemanticVisitorConstructor(this.className, keys_default(this.gastProductionsCache));
      this.baseCstVisitorConstructor = newBaseCstVisitorConstructor;
      return newBaseCstVisitorConstructor;
    }
    return this.baseCstVisitorConstructor;
  }
  getBaseCstVisitorConstructorWithDefaults() {
    if (isUndefined_default(this.baseCstVisitorWithDefaultsConstructor)) {
      const newConstructor = createBaseVisitorConstructorWithDefaults(this.className, keys_default(this.gastProductionsCache), this.getBaseCstVisitorConstructor());
      this.baseCstVisitorWithDefaultsConstructor = newConstructor;
      return newConstructor;
    }
    return this.baseCstVisitorWithDefaultsConstructor;
  }
  getLastExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 1];
  }
  getPreviousExplicitRuleShortName() {
    const ruleStack = this.RULE_STACK;
    return ruleStack[ruleStack.length - 2];
  }
  getLastExplicitRuleOccurrenceIndex() {
    const occurrenceStack = this.RULE_OCCURRENCE_STACK;
    return occurrenceStack[occurrenceStack.length - 1];
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/lexer_adapter.js
var LexerAdapter = class {
  initLexerAdapter() {
    this.tokVector = [];
    this.tokVectorLength = 0;
    this.currIdx = -1;
  }
  set input(newInput) {
    if (this.selfAnalysisDone !== true) {
      throw Error(`Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.`);
    }
    this.reset();
    this.tokVector = newInput;
    this.tokVectorLength = newInput.length;
  }
  get input() {
    return this.tokVector;
  }
  // skips a token and returns the next token
  SKIP_TOKEN() {
    if (this.currIdx <= this.tokVector.length - 2) {
      this.consumeToken();
      return this.LA(1);
    } else {
      return END_OF_FILE;
    }
  }
  // Lexer (accessing Token vector) related methods which can be overridden to implement lazy lexers
  // or lexers dependent on parser context.
  LA(howMuch) {
    const soughtIdx = this.currIdx + howMuch;
    if (soughtIdx < 0 || this.tokVectorLength <= soughtIdx) {
      return END_OF_FILE;
    } else {
      return this.tokVector[soughtIdx];
    }
  }
  consumeToken() {
    this.currIdx++;
  }
  exportLexerState() {
    return this.currIdx;
  }
  importLexerState(newState) {
    this.currIdx = newState;
  }
  resetLexerState() {
    this.currIdx = -1;
  }
  moveToTerminatedState() {
    this.currIdx = this.tokVector.length - 1;
  }
  getLexerPosition() {
    return this.exportLexerState();
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_api.js
var RecognizerApi = class {
  ACTION(impl) {
    return impl.call(this);
  }
  consume(idx, tokType, options) {
    return this.consumeInternal(tokType, idx, options);
  }
  subrule(idx, ruleToCall, options) {
    return this.subruleInternal(ruleToCall, idx, options);
  }
  option(idx, actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, idx);
  }
  or(idx, altsOrOpts) {
    return this.orInternal(altsOrOpts, idx);
  }
  many(idx, actionORMethodDef) {
    return this.manyInternal(idx, actionORMethodDef);
  }
  atLeastOne(idx, actionORMethodDef) {
    return this.atLeastOneInternal(idx, actionORMethodDef);
  }
  CONSUME(tokType, options) {
    return this.consumeInternal(tokType, 0, options);
  }
  CONSUME1(tokType, options) {
    return this.consumeInternal(tokType, 1, options);
  }
  CONSUME2(tokType, options) {
    return this.consumeInternal(tokType, 2, options);
  }
  CONSUME3(tokType, options) {
    return this.consumeInternal(tokType, 3, options);
  }
  CONSUME4(tokType, options) {
    return this.consumeInternal(tokType, 4, options);
  }
  CONSUME5(tokType, options) {
    return this.consumeInternal(tokType, 5, options);
  }
  CONSUME6(tokType, options) {
    return this.consumeInternal(tokType, 6, options);
  }
  CONSUME7(tokType, options) {
    return this.consumeInternal(tokType, 7, options);
  }
  CONSUME8(tokType, options) {
    return this.consumeInternal(tokType, 8, options);
  }
  CONSUME9(tokType, options) {
    return this.consumeInternal(tokType, 9, options);
  }
  SUBRULE(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 0, options);
  }
  SUBRULE1(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 1, options);
  }
  SUBRULE2(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 2, options);
  }
  SUBRULE3(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 3, options);
  }
  SUBRULE4(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 4, options);
  }
  SUBRULE5(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 5, options);
  }
  SUBRULE6(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 6, options);
  }
  SUBRULE7(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 7, options);
  }
  SUBRULE8(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 8, options);
  }
  SUBRULE9(ruleToCall, options) {
    return this.subruleInternal(ruleToCall, 9, options);
  }
  OPTION(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 0);
  }
  OPTION1(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 1);
  }
  OPTION2(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 2);
  }
  OPTION3(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 3);
  }
  OPTION4(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 4);
  }
  OPTION5(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 5);
  }
  OPTION6(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 6);
  }
  OPTION7(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 7);
  }
  OPTION8(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 8);
  }
  OPTION9(actionORMethodDef) {
    return this.optionInternal(actionORMethodDef, 9);
  }
  OR(altsOrOpts) {
    return this.orInternal(altsOrOpts, 0);
  }
  OR1(altsOrOpts) {
    return this.orInternal(altsOrOpts, 1);
  }
  OR2(altsOrOpts) {
    return this.orInternal(altsOrOpts, 2);
  }
  OR3(altsOrOpts) {
    return this.orInternal(altsOrOpts, 3);
  }
  OR4(altsOrOpts) {
    return this.orInternal(altsOrOpts, 4);
  }
  OR5(altsOrOpts) {
    return this.orInternal(altsOrOpts, 5);
  }
  OR6(altsOrOpts) {
    return this.orInternal(altsOrOpts, 6);
  }
  OR7(altsOrOpts) {
    return this.orInternal(altsOrOpts, 7);
  }
  OR8(altsOrOpts) {
    return this.orInternal(altsOrOpts, 8);
  }
  OR9(altsOrOpts) {
    return this.orInternal(altsOrOpts, 9);
  }
  MANY(actionORMethodDef) {
    this.manyInternal(0, actionORMethodDef);
  }
  MANY1(actionORMethodDef) {
    this.manyInternal(1, actionORMethodDef);
  }
  MANY2(actionORMethodDef) {
    this.manyInternal(2, actionORMethodDef);
  }
  MANY3(actionORMethodDef) {
    this.manyInternal(3, actionORMethodDef);
  }
  MANY4(actionORMethodDef) {
    this.manyInternal(4, actionORMethodDef);
  }
  MANY5(actionORMethodDef) {
    this.manyInternal(5, actionORMethodDef);
  }
  MANY6(actionORMethodDef) {
    this.manyInternal(6, actionORMethodDef);
  }
  MANY7(actionORMethodDef) {
    this.manyInternal(7, actionORMethodDef);
  }
  MANY8(actionORMethodDef) {
    this.manyInternal(8, actionORMethodDef);
  }
  MANY9(actionORMethodDef) {
    this.manyInternal(9, actionORMethodDef);
  }
  MANY_SEP(options) {
    this.manySepFirstInternal(0, options);
  }
  MANY_SEP1(options) {
    this.manySepFirstInternal(1, options);
  }
  MANY_SEP2(options) {
    this.manySepFirstInternal(2, options);
  }
  MANY_SEP3(options) {
    this.manySepFirstInternal(3, options);
  }
  MANY_SEP4(options) {
    this.manySepFirstInternal(4, options);
  }
  MANY_SEP5(options) {
    this.manySepFirstInternal(5, options);
  }
  MANY_SEP6(options) {
    this.manySepFirstInternal(6, options);
  }
  MANY_SEP7(options) {
    this.manySepFirstInternal(7, options);
  }
  MANY_SEP8(options) {
    this.manySepFirstInternal(8, options);
  }
  MANY_SEP9(options) {
    this.manySepFirstInternal(9, options);
  }
  AT_LEAST_ONE(actionORMethodDef) {
    this.atLeastOneInternal(0, actionORMethodDef);
  }
  AT_LEAST_ONE1(actionORMethodDef) {
    return this.atLeastOneInternal(1, actionORMethodDef);
  }
  AT_LEAST_ONE2(actionORMethodDef) {
    this.atLeastOneInternal(2, actionORMethodDef);
  }
  AT_LEAST_ONE3(actionORMethodDef) {
    this.atLeastOneInternal(3, actionORMethodDef);
  }
  AT_LEAST_ONE4(actionORMethodDef) {
    this.atLeastOneInternal(4, actionORMethodDef);
  }
  AT_LEAST_ONE5(actionORMethodDef) {
    this.atLeastOneInternal(5, actionORMethodDef);
  }
  AT_LEAST_ONE6(actionORMethodDef) {
    this.atLeastOneInternal(6, actionORMethodDef);
  }
  AT_LEAST_ONE7(actionORMethodDef) {
    this.atLeastOneInternal(7, actionORMethodDef);
  }
  AT_LEAST_ONE8(actionORMethodDef) {
    this.atLeastOneInternal(8, actionORMethodDef);
  }
  AT_LEAST_ONE9(actionORMethodDef) {
    this.atLeastOneInternal(9, actionORMethodDef);
  }
  AT_LEAST_ONE_SEP(options) {
    this.atLeastOneSepFirstInternal(0, options);
  }
  AT_LEAST_ONE_SEP1(options) {
    this.atLeastOneSepFirstInternal(1, options);
  }
  AT_LEAST_ONE_SEP2(options) {
    this.atLeastOneSepFirstInternal(2, options);
  }
  AT_LEAST_ONE_SEP3(options) {
    this.atLeastOneSepFirstInternal(3, options);
  }
  AT_LEAST_ONE_SEP4(options) {
    this.atLeastOneSepFirstInternal(4, options);
  }
  AT_LEAST_ONE_SEP5(options) {
    this.atLeastOneSepFirstInternal(5, options);
  }
  AT_LEAST_ONE_SEP6(options) {
    this.atLeastOneSepFirstInternal(6, options);
  }
  AT_LEAST_ONE_SEP7(options) {
    this.atLeastOneSepFirstInternal(7, options);
  }
  AT_LEAST_ONE_SEP8(options) {
    this.atLeastOneSepFirstInternal(8, options);
  }
  AT_LEAST_ONE_SEP9(options) {
    this.atLeastOneSepFirstInternal(9, options);
  }
  RULE(name, implementation, config2 = DEFAULT_RULE_CONFIG) {
    if (includes_default(this.definedRulesNames, name)) {
      const errMsg = defaultGrammarValidatorErrorProvider.buildDuplicateRuleNameError({
        topLevelRule: name,
        grammarName: this.className
      });
      const error = {
        message: errMsg,
        type: ParserDefinitionErrorType.DUPLICATE_RULE_NAME,
        ruleName: name
      };
      this.definitionErrors.push(error);
    }
    this.definedRulesNames.push(name);
    const ruleImplementation = this.defineRule(name, implementation, config2);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  OVERRIDE_RULE(name, impl, config2 = DEFAULT_RULE_CONFIG) {
    const ruleErrors = validateRuleIsOverridden(name, this.definedRulesNames, this.className);
    this.definitionErrors = this.definitionErrors.concat(ruleErrors);
    const ruleImplementation = this.defineRule(name, impl, config2);
    this[name] = ruleImplementation;
    return ruleImplementation;
  }
  BACKTRACK(grammarRule, args) {
    return function() {
      this.isBackTrackingStack.push(1);
      const orgState = this.saveRecogState();
      try {
        grammarRule.apply(this, args);
        return true;
      } catch (e) {
        if (isRecognitionException(e)) {
          return false;
        } else {
          throw e;
        }
      } finally {
        this.reloadRecogState(orgState);
        this.isBackTrackingStack.pop();
      }
    };
  }
  // GAST export APIs
  getGAstProductions() {
    return this.gastProductionsCache;
  }
  getSerializedGastProductions() {
    return serializeGrammar(values_default(this.gastProductionsCache));
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/recognizer_engine.js
var RecognizerEngine = class {
  initRecognizerEngine(tokenVocabulary, config2) {
    this.className = this.constructor.name;
    this.shortRuleNameToFull = {};
    this.fullRuleNameToShort = {};
    this.ruleShortNameIdx = 256;
    this.tokenMatcher = tokenStructuredMatcherNoCategories;
    this.subruleIdx = 0;
    this.definedRulesNames = [];
    this.tokensMap = {};
    this.isBackTrackingStack = [];
    this.RULE_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
    this.gastProductionsCache = {};
    if (has_default(config2, "serializedGrammar")) {
      throw Error("The Parser's configuration can no longer contain a <serializedGrammar> property.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0\n	For Further details.");
    }
    if (isArray_default(tokenVocabulary)) {
      if (isEmpty_default(tokenVocabulary)) {
        throw Error("A Token Vocabulary cannot be empty.\n	Note that the first argument for the parser constructor\n	is no longer a Token vector (since v4.0).");
      }
      if (typeof tokenVocabulary[0].startOffset === "number") {
        throw Error("The Parser constructor no longer accepts a token vector as the first argument.\n	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0\n	For Further details.");
      }
    }
    if (isArray_default(tokenVocabulary)) {
      this.tokensMap = reduce_default(tokenVocabulary, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (has_default(tokenVocabulary, "modes") && every_default(flatten_default(values_default(tokenVocabulary.modes)), isTokenType)) {
      const allTokenTypes2 = flatten_default(values_default(tokenVocabulary.modes));
      const uniqueTokens = uniq_default(allTokenTypes2);
      this.tokensMap = reduce_default(uniqueTokens, (acc, tokType) => {
        acc[tokType.name] = tokType;
        return acc;
      }, {});
    } else if (isObject_default(tokenVocabulary)) {
      this.tokensMap = clone_default(tokenVocabulary);
    } else {
      throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");
    }
    this.tokensMap["EOF"] = EOF;
    const allTokenTypes = has_default(tokenVocabulary, "modes") ? flatten_default(values_default(tokenVocabulary.modes)) : values_default(tokenVocabulary);
    const noTokenCategoriesUsed = every_default(allTokenTypes, (tokenConstructor) => isEmpty_default(tokenConstructor.categoryMatches));
    this.tokenMatcher = noTokenCategoriesUsed ? tokenStructuredMatcherNoCategories : tokenStructuredMatcher;
    augmentTokenTypes(values_default(this.tokensMap));
  }
  defineRule(ruleName, impl, config2) {
    if (this.selfAnalysisDone) {
      throw Error(`Grammar rule <${ruleName}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);
    }
    const resyncEnabled = has_default(config2, "resyncEnabled") ? config2.resyncEnabled : DEFAULT_RULE_CONFIG.resyncEnabled;
    const recoveryValueFunc = has_default(config2, "recoveryValueFunc") ? config2.recoveryValueFunc : DEFAULT_RULE_CONFIG.recoveryValueFunc;
    const shortName = this.ruleShortNameIdx << BITS_FOR_METHOD_TYPE + BITS_FOR_OCCURRENCE_IDX;
    this.ruleShortNameIdx++;
    this.shortRuleNameToFull[shortName] = ruleName;
    this.fullRuleNameToShort[ruleName] = shortName;
    let invokeRuleWithTry;
    if (this.outputCst === true) {
      invokeRuleWithTry = function invokeRuleWithTry2(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          impl.apply(this, args);
          const cst = this.CST_STACK[this.CST_STACK.length - 1];
          this.cstPostRule(cst);
          return cst;
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    } else {
      invokeRuleWithTry = function invokeRuleWithTryCst(...args) {
        try {
          this.ruleInvocationStateUpdate(shortName, ruleName, this.subruleIdx);
          return impl.apply(this, args);
        } catch (e) {
          return this.invokeRuleCatch(e, resyncEnabled, recoveryValueFunc);
        } finally {
          this.ruleFinallyStateUpdate();
        }
      };
    }
    const wrappedGrammarRule = Object.assign(invokeRuleWithTry, { ruleName, originalGrammarAction: impl });
    return wrappedGrammarRule;
  }
  invokeRuleCatch(e, resyncEnabledConfig, recoveryValueFunc) {
    const isFirstInvokedRule = this.RULE_STACK.length === 1;
    const reSyncEnabled = resyncEnabledConfig && !this.isBackTracking() && this.recoveryEnabled;
    if (isRecognitionException(e)) {
      const recogError = e;
      if (reSyncEnabled) {
        const reSyncTokType = this.findReSyncTokenType();
        if (this.isInCurrentRuleReSyncSet(reSyncTokType)) {
          recogError.resyncedTokens = this.reSyncTo(reSyncTokType);
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            return partialCstResult;
          } else {
            return recoveryValueFunc(e);
          }
        } else {
          if (this.outputCst) {
            const partialCstResult = this.CST_STACK[this.CST_STACK.length - 1];
            partialCstResult.recoveredNode = true;
            recogError.partialCstResult = partialCstResult;
          }
          throw recogError;
        }
      } else if (isFirstInvokedRule) {
        this.moveToTerminatedState();
        return recoveryValueFunc(e);
      } else {
        throw recogError;
      }
    } else {
      throw e;
    }
  }
  // Implementation of parsing DSL
  optionInternal(actionORMethodDef, occurrence) {
    const key = this.getKeyForAutomaticLookahead(OPTION_IDX, occurrence);
    return this.optionInternalLogic(actionORMethodDef, occurrence, key);
  }
  optionInternalLogic(actionORMethodDef, occurrence, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      return action.call(this);
    }
    return void 0;
  }
  atLeastOneInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_IDX, prodOccurrence);
    return this.atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  atLeastOneInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookAheadFunc = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookAheadFunc;
        lookAheadFunc = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    if (lookAheadFunc.call(this) === true) {
      let notStuck = this.doSingleRepetition(action);
      while (lookAheadFunc.call(this) === true && notStuck === true) {
        notStuck = this.doSingleRepetition(action);
      }
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY, actionORMethodDef.ERR_MSG);
    }
    this.attemptInRepetitionRecovery(this.atLeastOneInternal, [prodOccurrence, actionORMethodDef], lookAheadFunc, AT_LEAST_ONE_IDX, prodOccurrence, NextTerminalAfterAtLeastOneWalker);
  }
  atLeastOneSepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(AT_LEAST_ONE_SEP_IDX, prodOccurrence);
    this.atLeastOneSepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  atLeastOneSepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLookaheadFunc = this.getLaFuncFromCache(key);
    if (firstIterationLookaheadFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterAtLeastOneSepWalker
      ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, NextTerminalAfterAtLeastOneSepWalker);
    } else {
      throw this.raiseEarlyExitException(prodOccurrence, PROD_TYPE.REPETITION_MANDATORY_WITH_SEPARATOR, options.ERR_MSG);
    }
  }
  manyInternal(prodOccurrence, actionORMethodDef) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_IDX, prodOccurrence);
    return this.manyInternalLogic(prodOccurrence, actionORMethodDef, laKey);
  }
  manyInternalLogic(prodOccurrence, actionORMethodDef, key) {
    let lookaheadFunction = this.getLaFuncFromCache(key);
    let action;
    if (typeof actionORMethodDef !== "function") {
      action = actionORMethodDef.DEF;
      const predicate = actionORMethodDef.GATE;
      if (predicate !== void 0) {
        const orgLookaheadFunction = lookaheadFunction;
        lookaheadFunction = () => {
          return predicate.call(this) && orgLookaheadFunction.call(this);
        };
      }
    } else {
      action = actionORMethodDef;
    }
    let notStuck = true;
    while (lookaheadFunction.call(this) === true && notStuck === true) {
      notStuck = this.doSingleRepetition(action);
    }
    this.attemptInRepetitionRecovery(
      this.manyInternal,
      [prodOccurrence, actionORMethodDef],
      lookaheadFunction,
      MANY_IDX,
      prodOccurrence,
      NextTerminalAfterManyWalker,
      // The notStuck parameter is only relevant when "attemptInRepetitionRecovery"
      // is invoked from manyInternal, in the MANY_SEP case and AT_LEAST_ONE[_SEP]
      // An infinite loop cannot occur as:
      // - Either the lookahead is guaranteed to consume something (Single Token Separator)
      // - AT_LEAST_ONE by definition is guaranteed to consume something (or error out).
      notStuck
    );
  }
  manySepFirstInternal(prodOccurrence, options) {
    const laKey = this.getKeyForAutomaticLookahead(MANY_SEP_IDX, prodOccurrence);
    this.manySepFirstInternalLogic(prodOccurrence, options, laKey);
  }
  manySepFirstInternalLogic(prodOccurrence, options, key) {
    const action = options.DEF;
    const separator = options.SEP;
    const firstIterationLaFunc = this.getLaFuncFromCache(key);
    if (firstIterationLaFunc.call(this) === true) {
      action.call(this);
      const separatorLookAheadFunc = () => {
        return this.tokenMatcher(this.LA(1), separator);
      };
      while (this.tokenMatcher(this.LA(1), separator) === true) {
        this.CONSUME(separator);
        action.call(this);
      }
      this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
        prodOccurrence,
        separator,
        separatorLookAheadFunc,
        action,
        NextTerminalAfterManySepWalker
      ], separatorLookAheadFunc, MANY_SEP_IDX, prodOccurrence, NextTerminalAfterManySepWalker);
    }
  }
  repetitionSepSecondInternal(prodOccurrence, separator, separatorLookAheadFunc, action, nextTerminalAfterWalker) {
    while (separatorLookAheadFunc()) {
      this.CONSUME(separator);
      action.call(this);
    }
    this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal, [
      prodOccurrence,
      separator,
      separatorLookAheadFunc,
      action,
      nextTerminalAfterWalker
    ], separatorLookAheadFunc, AT_LEAST_ONE_SEP_IDX, prodOccurrence, nextTerminalAfterWalker);
  }
  doSingleRepetition(action) {
    const beforeIteration = this.getLexerPosition();
    action.call(this);
    const afterIteration = this.getLexerPosition();
    return afterIteration > beforeIteration;
  }
  orInternal(altsOrOpts, occurrence) {
    const laKey = this.getKeyForAutomaticLookahead(OR_IDX, occurrence);
    const alts = isArray_default(altsOrOpts) ? altsOrOpts : altsOrOpts.DEF;
    const laFunc = this.getLaFuncFromCache(laKey);
    const altIdxToTake = laFunc.call(this, alts);
    if (altIdxToTake !== void 0) {
      const chosenAlternative = alts[altIdxToTake];
      return chosenAlternative.ALT.call(this);
    }
    this.raiseNoAltException(occurrence, altsOrOpts.ERR_MSG);
  }
  ruleFinallyStateUpdate() {
    this.RULE_STACK.pop();
    this.RULE_OCCURRENCE_STACK.pop();
    this.cstFinallyStateUpdate();
    if (this.RULE_STACK.length === 0 && this.isAtEndOfInput() === false) {
      const firstRedundantTok = this.LA(1);
      const errMsg = this.errorMessageProvider.buildNotAllInputParsedMessage({
        firstRedundant: firstRedundantTok,
        ruleName: this.getCurrRuleFullName()
      });
      this.SAVE_ERROR(new NotAllInputParsedException(errMsg, firstRedundantTok));
    }
  }
  subruleInternal(ruleToCall, idx, options) {
    let ruleResult;
    try {
      const args = options !== void 0 ? options.ARGS : void 0;
      this.subruleIdx = idx;
      ruleResult = ruleToCall.apply(this, args);
      this.cstPostNonTerminal(ruleResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleToCall.ruleName);
      return ruleResult;
    } catch (e) {
      throw this.subruleInternalError(e, options, ruleToCall.ruleName);
    }
  }
  subruleInternalError(e, options, ruleName) {
    if (isRecognitionException(e) && e.partialCstResult !== void 0) {
      this.cstPostNonTerminal(e.partialCstResult, options !== void 0 && options.LABEL !== void 0 ? options.LABEL : ruleName);
      delete e.partialCstResult;
    }
    throw e;
  }
  consumeInternal(tokType, idx, options) {
    let consumedToken;
    try {
      const nextToken = this.LA(1);
      if (this.tokenMatcher(nextToken, tokType) === true) {
        this.consumeToken();
        consumedToken = nextToken;
      } else {
        this.consumeInternalError(tokType, nextToken, options);
      }
    } catch (eFromConsumption) {
      consumedToken = this.consumeInternalRecovery(tokType, idx, eFromConsumption);
    }
    this.cstPostTerminal(options !== void 0 && options.LABEL !== void 0 ? options.LABEL : tokType.name, consumedToken);
    return consumedToken;
  }
  consumeInternalError(tokType, nextToken, options) {
    let msg;
    const previousToken = this.LA(0);
    if (options !== void 0 && options.ERR_MSG) {
      msg = options.ERR_MSG;
    } else {
      msg = this.errorMessageProvider.buildMismatchTokenMessage({
        expected: tokType,
        actual: nextToken,
        previous: previousToken,
        ruleName: this.getCurrRuleFullName()
      });
    }
    throw this.SAVE_ERROR(new MismatchedTokenException(msg, nextToken, previousToken));
  }
  consumeInternalRecovery(tokType, idx, eFromConsumption) {
    if (this.recoveryEnabled && // TODO: more robust checking of the exception type. Perhaps Typescript extending expressions?
    eFromConsumption.name === "MismatchedTokenException" && !this.isBackTracking()) {
      const follows = this.getFollowsForInRuleRecovery(tokType, idx);
      try {
        return this.tryInRuleRecovery(tokType, follows);
      } catch (eFromInRuleRecovery) {
        if (eFromInRuleRecovery.name === IN_RULE_RECOVERY_EXCEPTION) {
          throw eFromConsumption;
        } else {
          throw eFromInRuleRecovery;
        }
      }
    } else {
      throw eFromConsumption;
    }
  }
  saveRecogState() {
    const savedErrors = this.errors;
    const savedRuleStack = clone_default(this.RULE_STACK);
    return {
      errors: savedErrors,
      lexerState: this.exportLexerState(),
      RULE_STACK: savedRuleStack,
      CST_STACK: this.CST_STACK
    };
  }
  reloadRecogState(newState) {
    this.errors = newState.errors;
    this.importLexerState(newState.lexerState);
    this.RULE_STACK = newState.RULE_STACK;
  }
  ruleInvocationStateUpdate(shortName, fullName, idxInCallingRule) {
    this.RULE_OCCURRENCE_STACK.push(idxInCallingRule);
    this.RULE_STACK.push(shortName);
    this.cstInvocationStateUpdate(fullName);
  }
  isBackTracking() {
    return this.isBackTrackingStack.length !== 0;
  }
  getCurrRuleFullName() {
    const shortName = this.getLastExplicitRuleShortName();
    return this.shortRuleNameToFull[shortName];
  }
  shortRuleNameToFullName(shortName) {
    return this.shortRuleNameToFull[shortName];
  }
  isAtEndOfInput() {
    return this.tokenMatcher(this.LA(1), EOF);
  }
  reset() {
    this.resetLexerState();
    this.subruleIdx = 0;
    this.isBackTrackingStack = [];
    this.errors = [];
    this.RULE_STACK = [];
    this.CST_STACK = [];
    this.RULE_OCCURRENCE_STACK = [];
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/error_handler.js
var ErrorHandler = class {
  initErrorHandler(config2) {
    this._errors = [];
    this.errorMessageProvider = has_default(config2, "errorMessageProvider") ? config2.errorMessageProvider : DEFAULT_PARSER_CONFIG.errorMessageProvider;
  }
  SAVE_ERROR(error) {
    if (isRecognitionException(error)) {
      error.context = {
        ruleStack: this.getHumanReadableRuleStack(),
        ruleOccurrenceStack: clone_default(this.RULE_OCCURRENCE_STACK)
      };
      this._errors.push(error);
      return error;
    } else {
      throw Error("Trying to save an Error which is not a RecognitionException");
    }
  }
  get errors() {
    return clone_default(this._errors);
  }
  set errors(newErrors) {
    this._errors = newErrors;
  }
  // TODO: consider caching the error message computed information
  raiseEarlyExitException(occurrence, prodType, userDefinedErrMsg) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOptionalProd(occurrence, ruleGrammar, prodType, this.maxLookahead);
    const insideProdPaths = lookAheadPathsPerAlternative[0];
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const msg = this.errorMessageProvider.buildEarlyExitMessage({
      expectedIterationPaths: insideProdPaths,
      actual: actualTokens,
      previous: this.LA(0),
      customUserDescription: userDefinedErrMsg,
      ruleName
    });
    throw this.SAVE_ERROR(new EarlyExitException(msg, this.LA(1), this.LA(0)));
  }
  // TODO: consider caching the error message computed information
  raiseNoAltException(occurrence, errMsgTypes) {
    const ruleName = this.getCurrRuleFullName();
    const ruleGrammar = this.getGAstProductions()[ruleName];
    const lookAheadPathsPerAlternative = getLookaheadPathsForOr(occurrence, ruleGrammar, this.maxLookahead);
    const actualTokens = [];
    for (let i = 1; i <= this.maxLookahead; i++) {
      actualTokens.push(this.LA(i));
    }
    const previousToken = this.LA(0);
    const errMsg = this.errorMessageProvider.buildNoViableAltMessage({
      expectedPathsPerAlt: lookAheadPathsPerAlternative,
      actual: actualTokens,
      previous: previousToken,
      customUserDescription: errMsgTypes,
      ruleName: this.getCurrRuleFullName()
    });
    throw this.SAVE_ERROR(new NoViableAltException(errMsg, this.LA(1), previousToken));
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/context_assist.js
var ContentAssist = class {
  initContentAssist() {
  }
  computeContentAssist(startRuleName, precedingInput) {
    const startRuleGast = this.gastProductionsCache[startRuleName];
    if (isUndefined_default(startRuleGast)) {
      throw Error(`Rule ->${startRuleName}<- does not exist in this grammar.`);
    }
    return nextPossibleTokensAfter([startRuleGast], precedingInput, this.tokenMatcher, this.maxLookahead);
  }
  // TODO: should this be a member method or a utility? it does not have any state or usage of 'this'...
  // TODO: should this be more explicitly part of the public API?
  getNextPossibleTokenTypes(grammarPath) {
    const topRuleName = head_default(grammarPath.ruleStack);
    const gastProductions = this.getGAstProductions();
    const topProduction = gastProductions[topRuleName];
    const nextPossibleTokenTypes = new NextAfterTokenWalker(topProduction, grammarPath).startWalking();
    return nextPossibleTokenTypes;
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/gast_recorder.js
var RECORDING_NULL_OBJECT = {
  description: "This Object indicates the Parser is during Recording Phase"
};
Object.freeze(RECORDING_NULL_OBJECT);
var HANDLE_SEPARATOR = true;
var MAX_METHOD_IDX = Math.pow(2, BITS_FOR_OCCURRENCE_IDX) - 1;
var RFT = createToken({ name: "RECORDING_PHASE_TOKEN", pattern: Lexer.NA });
augmentTokenTypes([RFT]);
var RECORDING_PHASE_TOKEN = createTokenInstance(
  RFT,
  "This IToken indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  // Using "-1" instead of NaN (as in EOF) because an actual number is less likely to
  // cause errors if the output of LA or CONSUME would be (incorrectly) used during the recording phase.
  -1,
  -1,
  -1,
  -1,
  -1,
  -1
);
Object.freeze(RECORDING_PHASE_TOKEN);
var RECORDING_PHASE_CSTNODE = {
  name: "This CSTNode indicates the Parser is in Recording Phase\n	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details",
  children: {}
};
var GastRecorder = class {
  initGastRecorder(config2) {
    this.recordingProdStack = [];
    this.RECORDING_PHASE = false;
  }
  enableRecording() {
    this.RECORDING_PHASE = true;
    this.TRACE_INIT("Enable Recording", () => {
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        this[`CONSUME${idx}`] = function(arg1, arg2) {
          return this.consumeInternalRecord(arg1, i, arg2);
        };
        this[`SUBRULE${idx}`] = function(arg1, arg2) {
          return this.subruleInternalRecord(arg1, i, arg2);
        };
        this[`OPTION${idx}`] = function(arg1) {
          return this.optionInternalRecord(arg1, i);
        };
        this[`OR${idx}`] = function(arg1) {
          return this.orInternalRecord(arg1, i);
        };
        this[`MANY${idx}`] = function(arg1) {
          this.manyInternalRecord(i, arg1);
        };
        this[`MANY_SEP${idx}`] = function(arg1) {
          this.manySepFirstInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE${idx}`] = function(arg1) {
          this.atLeastOneInternalRecord(i, arg1);
        };
        this[`AT_LEAST_ONE_SEP${idx}`] = function(arg1) {
          this.atLeastOneSepFirstInternalRecord(i, arg1);
        };
      }
      this[`consume`] = function(idx, arg1, arg2) {
        return this.consumeInternalRecord(arg1, idx, arg2);
      };
      this[`subrule`] = function(idx, arg1, arg2) {
        return this.subruleInternalRecord(arg1, idx, arg2);
      };
      this[`option`] = function(idx, arg1) {
        return this.optionInternalRecord(arg1, idx);
      };
      this[`or`] = function(idx, arg1) {
        return this.orInternalRecord(arg1, idx);
      };
      this[`many`] = function(idx, arg1) {
        this.manyInternalRecord(idx, arg1);
      };
      this[`atLeastOne`] = function(idx, arg1) {
        this.atLeastOneInternalRecord(idx, arg1);
      };
      this.ACTION = this.ACTION_RECORD;
      this.BACKTRACK = this.BACKTRACK_RECORD;
      this.LA = this.LA_RECORD;
    });
  }
  disableRecording() {
    this.RECORDING_PHASE = false;
    this.TRACE_INIT("Deleting Recording methods", () => {
      const that = this;
      for (let i = 0; i < 10; i++) {
        const idx = i > 0 ? i : "";
        delete that[`CONSUME${idx}`];
        delete that[`SUBRULE${idx}`];
        delete that[`OPTION${idx}`];
        delete that[`OR${idx}`];
        delete that[`MANY${idx}`];
        delete that[`MANY_SEP${idx}`];
        delete that[`AT_LEAST_ONE${idx}`];
        delete that[`AT_LEAST_ONE_SEP${idx}`];
      }
      delete that[`consume`];
      delete that[`subrule`];
      delete that[`option`];
      delete that[`or`];
      delete that[`many`];
      delete that[`atLeastOne`];
      delete that.ACTION;
      delete that.BACKTRACK;
      delete that.LA;
    });
  }
  //   Parser methods are called inside an ACTION?
  //   Maybe try/catch/finally on ACTIONS while disabling the recorders state changes?
  // @ts-expect-error -- noop place holder
  ACTION_RECORD(impl) {
  }
  // Executing backtracking logic will break our recording logic assumptions
  BACKTRACK_RECORD(grammarRule, args) {
    return () => true;
  }
  // LA is part of the official API and may be used for custom lookahead logic
  // by end users who may forget to wrap it in ACTION or inside a GATE
  LA_RECORD(howMuch) {
    return END_OF_FILE;
  }
  topLevelRuleRecord(name, def) {
    try {
      const newTopLevelRule = new Rule({ definition: [], name });
      newTopLevelRule.name = name;
      this.recordingProdStack.push(newTopLevelRule);
      def.call(this);
      this.recordingProdStack.pop();
      return newTopLevelRule;
    } catch (originalError) {
      if (originalError.KNOWN_RECORDER_ERROR !== true) {
        try {
          originalError.message = originalError.message + '\n	 This error was thrown during the "grammar recording phase" For more info see:\n	https://chevrotain.io/docs/guide/internals.html#grammar-recording';
        } catch (mutabilityError) {
          throw originalError;
        }
      }
      throw originalError;
    }
  }
  // Implementation of parsing DSL
  optionInternalRecord(actionORMethodDef, occurrence) {
    return recordProd.call(this, Option, actionORMethodDef, occurrence);
  }
  atLeastOneInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, RepetitionMandatory, actionORMethodDef, occurrence);
  }
  atLeastOneSepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionMandatoryWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  manyInternalRecord(occurrence, actionORMethodDef) {
    recordProd.call(this, Repetition, actionORMethodDef, occurrence);
  }
  manySepFirstInternalRecord(occurrence, options) {
    recordProd.call(this, RepetitionWithSeparator, options, occurrence, HANDLE_SEPARATOR);
  }
  orInternalRecord(altsOrOpts, occurrence) {
    return recordOrProd.call(this, altsOrOpts, occurrence);
  }
  subruleInternalRecord(ruleToCall, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!ruleToCall || has_default(ruleToCall, "ruleName") === false) {
      const error = new Error(`<SUBRULE${getIdxSuffix(occurrence)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(ruleToCall)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const ruleName = ruleToCall.ruleName;
    const newNoneTerminal = new NonTerminal({
      idx: occurrence,
      nonTerminalName: ruleName,
      label: options === null || options === void 0 ? void 0 : options.LABEL,
      // The resolving of the `referencedRule` property will be done once all the Rule's GASTs have been created
      referencedRule: void 0
    });
    prevProd.definition.push(newNoneTerminal);
    return this.outputCst ? RECORDING_PHASE_CSTNODE : RECORDING_NULL_OBJECT;
  }
  consumeInternalRecord(tokType, occurrence, options) {
    assertMethodIdxIsValid(occurrence);
    if (!hasShortKeyProperty(tokType)) {
      const error = new Error(`<CONSUME${getIdxSuffix(occurrence)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(tokType)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);
      error.KNOWN_RECORDER_ERROR = true;
      throw error;
    }
    const prevProd = last_default(this.recordingProdStack);
    const newNoneTerminal = new Terminal({
      idx: occurrence,
      terminalType: tokType,
      label: options === null || options === void 0 ? void 0 : options.LABEL
    });
    prevProd.definition.push(newNoneTerminal);
    return RECORDING_PHASE_TOKEN;
  }
};
function recordProd(prodConstructor, mainProdArg, occurrence, handleSep = false) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const grammarAction = isFunction_default(mainProdArg) ? mainProdArg : mainProdArg.DEF;
  const newProd = new prodConstructor({ definition: [], idx: occurrence });
  if (handleSep) {
    newProd.separator = mainProdArg.SEP;
  }
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  this.recordingProdStack.push(newProd);
  grammarAction.call(this);
  prevProd.definition.push(newProd);
  this.recordingProdStack.pop();
  return RECORDING_NULL_OBJECT;
}
function recordOrProd(mainProdArg, occurrence) {
  assertMethodIdxIsValid(occurrence);
  const prevProd = last_default(this.recordingProdStack);
  const hasOptions = isArray_default(mainProdArg) === false;
  const alts = hasOptions === false ? mainProdArg : mainProdArg.DEF;
  const newOrProd = new Alternation({
    definition: [],
    idx: occurrence,
    ignoreAmbiguities: hasOptions && mainProdArg.IGNORE_AMBIGUITIES === true
  });
  if (has_default(mainProdArg, "MAX_LOOKAHEAD")) {
    newOrProd.maxLookahead = mainProdArg.MAX_LOOKAHEAD;
  }
  const hasPredicates = some_default(alts, (currAlt) => isFunction_default(currAlt.GATE));
  newOrProd.hasPredicates = hasPredicates;
  prevProd.definition.push(newOrProd);
  forEach_default(alts, (currAlt) => {
    const currAltFlat = new Alternative({ definition: [] });
    newOrProd.definition.push(currAltFlat);
    if (has_default(currAlt, "IGNORE_AMBIGUITIES")) {
      currAltFlat.ignoreAmbiguities = currAlt.IGNORE_AMBIGUITIES;
    } else if (has_default(currAlt, "GATE")) {
      currAltFlat.ignoreAmbiguities = true;
    }
    this.recordingProdStack.push(currAltFlat);
    currAlt.ALT.call(this);
    this.recordingProdStack.pop();
  });
  return RECORDING_NULL_OBJECT;
}
function getIdxSuffix(idx) {
  return idx === 0 ? "" : `${idx}`;
}
function assertMethodIdxIsValid(idx) {
  if (idx < 0 || idx > MAX_METHOD_IDX) {
    const error = new Error(
      // The stack trace will contain all the needed details
      `Invalid DSL Method idx value: <${idx}>
	Idx value must be a none negative value smaller than ${MAX_METHOD_IDX + 1}`
    );
    error.KNOWN_RECORDER_ERROR = true;
    throw error;
  }
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/traits/perf_tracer.js
var PerformanceTracer = class {
  initPerformanceTracer(config2) {
    if (has_default(config2, "traceInitPerf")) {
      const userTraceInitPerf = config2.traceInitPerf;
      const traceIsNumber = typeof userTraceInitPerf === "number";
      this.traceInitMaxIdent = traceIsNumber ? userTraceInitPerf : Infinity;
      this.traceInitPerf = traceIsNumber ? userTraceInitPerf > 0 : userTraceInitPerf;
    } else {
      this.traceInitMaxIdent = 0;
      this.traceInitPerf = DEFAULT_PARSER_CONFIG.traceInitPerf;
    }
    this.traceInitIndent = -1;
  }
  TRACE_INIT(phaseDesc, phaseImpl) {
    if (this.traceInitPerf === true) {
      this.traceInitIndent++;
      const indent = new Array(this.traceInitIndent + 1).join("	");
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        console.log(`${indent}--> <${phaseDesc}>`);
      }
      const { time, value } = timer(phaseImpl);
      const traceMethod = time > 10 ? console.warn : console.log;
      if (this.traceInitIndent < this.traceInitMaxIdent) {
        traceMethod(`${indent}<-- <${phaseDesc}> time: ${time}ms`);
      }
      this.traceInitIndent--;
      return value;
    } else {
      return phaseImpl();
    }
  }
};

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/utils/apply_mixins.js
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    const baseProto = baseCtor.prototype;
    Object.getOwnPropertyNames(baseProto).forEach((propName) => {
      if (propName === "constructor") {
        return;
      }
      const basePropDescriptor = Object.getOwnPropertyDescriptor(baseProto, propName);
      if (basePropDescriptor && (basePropDescriptor.get || basePropDescriptor.set)) {
        Object.defineProperty(derivedCtor.prototype, propName, basePropDescriptor);
      } else {
        derivedCtor.prototype[propName] = baseCtor.prototype[propName];
      }
    });
  });
}

// node_modules/.pnpm/chevrotain@11.1.2/node_modules/chevrotain/lib/src/parse/parser/parser.js
var END_OF_FILE = createTokenInstance(EOF, "", NaN, NaN, NaN, NaN, NaN, NaN);
Object.freeze(END_OF_FILE);
var DEFAULT_PARSER_CONFIG = Object.freeze({
  recoveryEnabled: false,
  maxLookahead: 3,
  dynamicTokensEnabled: false,
  outputCst: true,
  errorMessageProvider: defaultParserErrorProvider,
  nodeLocationTracking: "none",
  traceInitPerf: false,
  skipValidations: false
});
var DEFAULT_RULE_CONFIG = Object.freeze({
  recoveryValueFunc: () => void 0,
  resyncEnabled: true
});
var ParserDefinitionErrorType;
(function(ParserDefinitionErrorType2) {
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_NAME"] = 0] = "INVALID_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_RULE_NAME"] = 1] = "DUPLICATE_RULE_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_RULE_OVERRIDE"] = 2] = "INVALID_RULE_OVERRIDE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["DUPLICATE_PRODUCTIONS"] = 3] = "DUPLICATE_PRODUCTIONS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["UNRESOLVED_SUBRULE_REF"] = 4] = "UNRESOLVED_SUBRULE_REF";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["LEFT_RECURSION"] = 5] = "LEFT_RECURSION";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NONE_LAST_EMPTY_ALT"] = 6] = "NONE_LAST_EMPTY_ALT";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_ALTS"] = 7] = "AMBIGUOUS_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CONFLICT_TOKENS_RULES_NAMESPACE"] = 8] = "CONFLICT_TOKENS_RULES_NAMESPACE";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["INVALID_TOKEN_NAME"] = 9] = "INVALID_TOKEN_NAME";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["NO_NON_EMPTY_LOOKAHEAD"] = 10] = "NO_NON_EMPTY_LOOKAHEAD";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["AMBIGUOUS_PREFIX_ALTS"] = 11] = "AMBIGUOUS_PREFIX_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["TOO_MANY_ALTS"] = 12] = "TOO_MANY_ALTS";
  ParserDefinitionErrorType2[ParserDefinitionErrorType2["CUSTOM_LOOKAHEAD_VALIDATION"] = 13] = "CUSTOM_LOOKAHEAD_VALIDATION";
})(ParserDefinitionErrorType || (ParserDefinitionErrorType = {}));
var Parser = class _Parser {
  /**
   *  @deprecated use the **instance** method with the same name instead
   */
  static performSelfAnalysis(parserInstance) {
    throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.");
  }
  performSelfAnalysis() {
    this.TRACE_INIT("performSelfAnalysis", () => {
      let defErrorsMsgs;
      this.selfAnalysisDone = true;
      const className = this.className;
      this.TRACE_INIT("toFastProps", () => {
        toFastProperties(this);
      });
      this.TRACE_INIT("Grammar Recording", () => {
        try {
          this.enableRecording();
          forEach_default(this.definedRulesNames, (currRuleName) => {
            const wrappedRule = this[currRuleName];
            const originalGrammarAction = wrappedRule["originalGrammarAction"];
            let recordedRuleGast;
            this.TRACE_INIT(`${currRuleName} Rule`, () => {
              recordedRuleGast = this.topLevelRuleRecord(currRuleName, originalGrammarAction);
            });
            this.gastProductionsCache[currRuleName] = recordedRuleGast;
          });
        } finally {
          this.disableRecording();
        }
      });
      let resolverErrors = [];
      this.TRACE_INIT("Grammar Resolving", () => {
        resolverErrors = resolveGrammar2({
          rules: values_default(this.gastProductionsCache)
        });
        this.definitionErrors = this.definitionErrors.concat(resolverErrors);
      });
      this.TRACE_INIT("Grammar Validations", () => {
        if (isEmpty_default(resolverErrors) && this.skipValidations === false) {
          const validationErrors = validateGrammar2({
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            errMsgProvider: defaultGrammarValidatorErrorProvider,
            grammarName: className
          });
          const lookaheadValidationErrors = validateLookahead({
            lookaheadStrategy: this.lookaheadStrategy,
            rules: values_default(this.gastProductionsCache),
            tokenTypes: values_default(this.tokensMap),
            grammarName: className
          });
          this.definitionErrors = this.definitionErrors.concat(validationErrors, lookaheadValidationErrors);
        }
      });
      if (isEmpty_default(this.definitionErrors)) {
        if (this.recoveryEnabled) {
          this.TRACE_INIT("computeAllProdsFollows", () => {
            const allFollows = computeAllProdsFollows(values_default(this.gastProductionsCache));
            this.resyncFollows = allFollows;
          });
        }
        this.TRACE_INIT("ComputeLookaheadFunctions", () => {
          var _a, _b;
          (_b = (_a = this.lookaheadStrategy).initialize) === null || _b === void 0 ? void 0 : _b.call(_a, {
            rules: values_default(this.gastProductionsCache)
          });
          this.preComputeLookaheadFunctions(values_default(this.gastProductionsCache));
        });
      }
      if (!_Parser.DEFER_DEFINITION_ERRORS_HANDLING && !isEmpty_default(this.definitionErrors)) {
        defErrorsMsgs = map_default(this.definitionErrors, (defError) => defError.message);
        throw new Error(`Parser Definition Errors detected:
 ${defErrorsMsgs.join("\n-------------------------------\n")}`);
      }
    });
  }
  constructor(tokenVocabulary, config2) {
    this.definitionErrors = [];
    this.selfAnalysisDone = false;
    const that = this;
    that.initErrorHandler(config2);
    that.initLexerAdapter();
    that.initLooksAhead(config2);
    that.initRecognizerEngine(tokenVocabulary, config2);
    that.initRecoverable(config2);
    that.initTreeBuilder(config2);
    that.initContentAssist();
    that.initGastRecorder(config2);
    that.initPerformanceTracer(config2);
    if (has_default(config2, "ignoredIssues")) {
      throw new Error("The <ignoredIssues> IParserConfig property has been deprecated.\n	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.\n	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES\n	For further details.");
    }
    this.skipValidations = has_default(config2, "skipValidations") ? config2.skipValidations : DEFAULT_PARSER_CONFIG.skipValidations;
  }
};
Parser.DEFER_DEFINITION_ERRORS_HANDLING = false;
applyMixins(Parser, [
  Recoverable,
  LooksAhead,
  TreeBuilder,
  LexerAdapter,
  RecognizerEngine,
  RecognizerApi,
  ErrorHandler,
  ContentAssist,
  GastRecorder,
  PerformanceTracer
]);
var CstParser = class extends Parser {
  constructor(tokenVocabulary, config2 = DEFAULT_PARSER_CONFIG) {
    const configClone = clone_default(config2);
    configClone.outputCst = true;
    super(tokenVocabulary, configClone);
  }
};

// packages/mermaid/src/diagrams/bpmn/parser/bpmn.tokens.ts
function customMatch(text2, offset, image) {
  const match = [image];
  match.index = offset;
  match.input = text2;
  return match;
}
var matchComment = (text2, offset) => {
  if (text2[offset] !== "%" || text2[offset + 1] !== "%") {
    return null;
  }
  for (let index = offset - 1; index >= 0; index--) {
    const character = text2[index];
    if (character === "\n" || character === "\r") {
      break;
    }
    if (character !== " " && character !== "	") {
      return null;
    }
  }
  let end = offset + 2;
  while (end < text2.length && text2[end] !== "\n" && text2[end] !== "\r") {
    end++;
  }
  return customMatch(text2, offset, text2.slice(offset, end));
};
var LabelText = createToken({ name: "LABEL_TEXT", pattern: Lexer.NA });
var Word = createToken({ name: "WORD", pattern: Lexer.NA, categories: LabelText });
var NumberLiteral = createToken({
  name: "NUMBER",
  pattern: /(?:\d+\.\d+|\d+|\.\d+)(?:[%A-Za-z]+)?/,
  categories: LabelText
});
var Identifier = createToken({
  name: "IDENTIFIER",
  pattern: /[A-Z_a-z]\w*/,
  categories: Word
});
var WhiteSpace = createToken({
  name: "HWS",
  pattern: /[\t ]+/,
  group: Lexer.SKIPPED
});
var Comment = createToken({
  name: "COMMENT",
  pattern: matchComment,
  start_chars_hint: ["%"],
  group: Lexer.SKIPPED,
  line_breaks: false
});
var NewLine = createToken({
  name: "NEWLINE",
  pattern: /\r\n|\n|\r/,
  line_breaks: true
});
var PlainString = createToken({
  name: "STRING",
  pattern: /"[^\n\r"]*"|'[^\n\r']*'/
});
var kw = (name, pattern) => createToken({ name, pattern, longer_alt: Identifier, categories: Word });
var Bpmn = kw("BPMN", /bpmn(?:-beta)?/i);
var DirLR = kw("DIR_LR", /lr/i);
var DirRL = kw("DIR_RL", /rl/i);
var DirTB = kw("DIR_TB", /tb|td/i);
var DirBT = kw("DIR_BT", /bt/i);
var KwStart = kw("START", /start(?:event)?|begin/i);
var KwIntermediate = kw("INTERMEDIATE", /intermediate/i);
var KwEnd = kw("END", /end(?:event)?|stop/i);
var KwMessage = kw("MESSAGE", /message|msg/i);
var KwTimer = kw("TIMER", /timer|time|clock/i);
var KwUserTask = kw("USER_TASK", /user[ _-]?task/i);
var KwServiceTask = kw("SERVICE_TASK", /service[ _-]?task/i);
var KwScriptTask = kw("SCRIPT_TASK", /script[ _-]?task/i);
var KwTask = kw("TASK", /task|activity|step/i);
var KwXor = kw("XOR", /xor|exclusive(?:gateway)?|decision/i);
var KwAnd = kw("AND", /and|parallel(?:gateway)?/i);
var KwOr = kw("OR", /or|inclusive(?:gateway)?/i);
var KwEvent = kw("EVENT", /event(?:-?based)?(?:gateway)?/i);
var KwPool = kw("POOL", /pool|participant/i);
var KwLane = kw("LANE", /lane|swimlane/i);
var KwDataStore = kw("DATASTORE", /datastore|data[ _-]?store/i);
var KwData = kw("DATA", /data/i);
var KwDefault = kw("DEFAULT", /default/i);
var SeqArrow = createToken({ name: "SEQ_ARROW", pattern: /-+>|→/ });
var MessageArrow = createToken({ name: "MSG_ARROW", pattern: /=+>|~+>/ });
var Association = createToken({ name: "ASSOCIATION", pattern: /-\.-|\.{3}/ });
var DashStart = createToken({ name: "DASH_START", pattern: /-{2,}/ });
var Pipe = createToken({ name: "PIPE", pattern: /\|/ });
var Colon = createToken({ name: "COLON", pattern: /:/ });
var bpmnDefaultTokens = [
  WhiteSpace,
  Comment,
  NewLine,
  PlainString,
  // multi-char operators before their single-char / prefix cousins
  MessageArrow,
  SeqArrow,
  Association,
  DashStart,
  Pipe,
  Colon,
  // keywords before IDENTIFIER
  Bpmn,
  DirLR,
  DirRL,
  DirTB,
  DirBT,
  KwStart,
  KwIntermediate,
  KwEnd,
  KwMessage,
  KwTimer,
  KwUserTask,
  KwServiceTask,
  KwScriptTask,
  KwTask,
  KwXor,
  KwAnd,
  KwOr,
  KwEvent,
  KwPool,
  KwLane,
  KwDataStore,
  KwData,
  KwDefault,
  Identifier,
  NumberLiteral
  // NA categories are never matched directly; listed for completeness
];
var bpmnTokens = [LabelText, Word, ...bpmnDefaultTokens];
var bpmnLexerModes = {
  defaultMode: "defaultMode",
  modes: {
    defaultMode: [...bpmnDefaultTokens]
  }
};

// packages/mermaid/src/diagrams/bpmn/parser/bpmn.lexer.ts
var bpmnLexer = new Lexer(bpmnLexerModes);

// packages/mermaid/src/diagrams/bpmn/parser/bpmn.parser.ts
var BpmnParser = class extends CstParser {
  constructor() {
    super(bpmnTokens, { recoveryEnabled: false, maxLookahead: 3 });
    this.document = this.RULE("document", () => {
      this.MANY(() => this.CONSUME(NewLine));
      this.SUBRULE(this.header);
      this.MANY2(() => this.SUBRULE(this.statement));
    });
    this.header = this.RULE("header", () => {
      this.CONSUME(Bpmn);
      this.OPTION(() => this.SUBRULE(this.direction));
      this.MANY(() => this.CONSUME(NewLine));
    });
    this.direction = this.RULE("direction", () => {
      this.OR([
        { ALT: () => this.CONSUME(DirLR) },
        { ALT: () => this.CONSUME(DirRL) },
        { ALT: () => this.CONSUME(DirTB) },
        { ALT: () => this.CONSUME(DirBT) }
      ]);
    });
    this.statement = this.RULE("statement", () => {
      this.OR([
        { ALT: () => this.SUBRULE(this.poolDecl) },
        { ALT: () => this.SUBRULE(this.laneDecl) },
        { ALT: () => this.SUBRULE(this.element) },
        { ALT: () => this.SUBRULE(this.flow) }
      ]);
      this.MANY(() => this.CONSUME(NewLine));
    });
    this.poolDecl = this.RULE("poolDecl", () => {
      this.CONSUME(KwPool);
      this.SUBRULE(this.nameOrId);
    });
    this.laneDecl = this.RULE("laneDecl", () => {
      this.CONSUME(KwLane);
      this.SUBRULE(this.nameOrId);
    });
    /** A pool/lane name: a quoted string, or a bare identifier. */
    this.nameOrId = this.RULE("nameOrId", () => {
      this.OR([
        { ALT: () => this.CONSUME(PlainString) },
        { ALT: () => this.SUBRULE(this.labelPhrase) }
      ]);
    });
    this.element = this.RULE("element", () => {
      this.OR([
        { ALT: () => this.SUBRULE(this.eventDecl) },
        { ALT: () => this.SUBRULE(this.taskDecl) },
        { ALT: () => this.SUBRULE(this.gatewayDecl) },
        { ALT: () => this.SUBRULE(this.dataDecl) }
      ]);
    });
    this.eventDecl = this.RULE("eventDecl", () => {
      this.OR([
        { ALT: () => this.CONSUME(KwStart) },
        { ALT: () => this.CONSUME(KwIntermediate) },
        { ALT: () => this.CONSUME(KwEnd) }
      ]);
      this.OPTION(() => {
        this.OR2([{ ALT: () => this.CONSUME(KwMessage) }, { ALT: () => this.CONSUME(KwTimer) }]);
      });
      this.CONSUME(Identifier);
      this.OPTION2(() => this.SUBRULE(this.label));
    });
    this.taskDecl = this.RULE("taskDecl", () => {
      this.OR([
        {
          ALT: () => {
            this.CONSUME(KwTask);
            this.OPTION(() => {
              this.CONSUME(Colon);
              this.CONSUME(Identifier, { LABEL: "subtype" });
            });
          }
        },
        { ALT: () => this.CONSUME(KwUserTask) },
        { ALT: () => this.CONSUME(KwServiceTask) },
        { ALT: () => this.CONSUME(KwScriptTask) }
      ]);
      this.CONSUME2(Identifier, { LABEL: "id" });
      this.OPTION2(() => this.SUBRULE(this.label));
    });
    this.gatewayDecl = this.RULE("gatewayDecl", () => {
      this.OR([
        { ALT: () => this.CONSUME(KwXor) },
        { ALT: () => this.CONSUME(KwAnd) },
        { ALT: () => this.CONSUME(KwOr) },
        { ALT: () => this.CONSUME(KwEvent) }
      ]);
      this.CONSUME(Identifier);
      this.OPTION(() => this.SUBRULE(this.label));
    });
    this.dataDecl = this.RULE("dataDecl", () => {
      this.OR([{ ALT: () => this.CONSUME(KwDataStore) }, { ALT: () => this.CONSUME(KwData) }]);
      this.CONSUME(Identifier);
      this.OPTION(() => this.SUBRULE(this.label));
    });
    this.flow = this.RULE("flow", () => {
      this.CONSUME(Identifier);
      this.AT_LEAST_ONE(() => {
        this.SUBRULE(this.connector);
        this.CONSUME2(Identifier, { LABEL: "target" });
      });
    });
    this.connector = this.RULE("connector", () => {
      this.OR([
        {
          // -- label -->
          ALT: () => {
            this.CONSUME(DashStart);
            this.SUBRULE(this.flowLabel);
            this.CONSUME(SeqArrow);
          }
        },
        {
          // --> or -->|label|
          ALT: () => {
            this.CONSUME2(SeqArrow);
            this.OPTION(() => {
              this.CONSUME(Pipe);
              this.SUBRULE2(this.flowLabel);
              this.CONSUME2(Pipe);
            });
          }
        },
        {
          // ==> or ==>|label|
          ALT: () => {
            this.CONSUME(MessageArrow);
            this.OPTION2(() => {
              this.CONSUME3(Pipe);
              this.SUBRULE3(this.flowLabel);
              this.CONSUME4(Pipe);
            });
          }
        },
        // -.- association
        { ALT: () => this.CONSUME(Association) }
      ]);
    });
    /** A declaration label: a quoted string or a run of bare words. */
    this.label = this.RULE("label", () => {
      this.OR([
        { ALT: () => this.CONSUME(PlainString) },
        { ALT: () => this.SUBRULE(this.labelPhrase) }
      ]);
    });
    /**
     * A flow-condition label: a quoted string or a run of bare words. The word
     * `default` is recognised in the visitor (it lexes as a `LabelText` word).
     */
    this.flowLabel = this.RULE("flowLabel", () => {
      this.OR([
        { ALT: () => this.CONSUME(PlainString) },
        { ALT: () => this.SUBRULE(this.labelPhrase) }
      ]);
    });
    /** One or more bare label words (identifiers, keywords, numbers). */
    this.labelPhrase = this.RULE("labelPhrase", () => {
      this.AT_LEAST_ONE(() => this.CONSUME(LabelText));
    });
    this.performSelfAnalysis();
  }
};
var bpmnParser = new BpmnParser();

// packages/mermaid/src/diagrams/bpmn/parser/bpmn.visitor.ts
var BaseVisitor = bpmnParser.getBaseCstVisitorConstructor();
var first2 = (arr) => Array.isArray(arr) ? arr[0] : void 0;
var tokenText = (tok) => tok?.image ?? "";
var unquote = (raw) => {
  const trimmed = raw.trim();
  if (trimmed.startsWith('"') && trimmed.endsWith('"') || trimmed.startsWith("'") && trimmed.endsWith("'")) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};
var SUBTYPES = {
  user: "user",
  service: "service",
  script: "script",
  abstract: "abstract"
};
var slug = (value, index, prefix) => {
  const base = value.toLowerCase().replace(/[^\da-z]+/g, "_").replace(/^_+|_+$/g, "");
  return base ? `__${prefix}_${base}` : `__${prefix}_${index}`;
};
var BpmnVisitor = class extends BaseVisitor {
  constructor() {
    super();
    this.poolCount = 0;
    this.laneCount = 0;
    this.flowCount = 0;
    this.validateVisitor();
  }
  build(cst, db2) {
    this.db = db2;
    this.currentPoolId = void 0;
    this.currentPoolLabel = void 0;
    this.currentLaneId = void 0;
    this.poolCount = 0;
    this.laneCount = 0;
    this.flowCount = 0;
    this.visit(cst);
  }
  document(ctx) {
    if (ctx.header) {
      this.visit(ctx.header);
    }
    (ctx.statement ?? []).forEach((stmt) => this.visit(stmt));
  }
  header(ctx) {
    if (ctx.direction) {
      this.visit(ctx.direction);
    }
  }
  direction(ctx) {
    let dir = "LR";
    if (ctx.DIR_RL) {
      dir = "RL";
    } else if (ctx.DIR_TB) {
      dir = "TB";
    } else if (ctx.DIR_BT) {
      dir = "BT";
    } else {
      dir = "LR";
    }
    this.db.setDirection(dir);
  }
  statement(ctx) {
    if (ctx.poolDecl) {
      this.visit(ctx.poolDecl);
    } else if (ctx.laneDecl) {
      this.visit(ctx.laneDecl);
    } else if (ctx.element) {
      this.visit(ctx.element);
    } else if (ctx.flow) {
      this.visit(ctx.flow);
    }
  }
  poolDecl(ctx) {
    const label = this.readNameOrId(ctx.nameOrId);
    this.poolCount += 1;
    const id = slug(label, this.poolCount, "pool");
    this.currentPoolId = id;
    this.currentPoolLabel = label;
    this.currentLaneId = void 0;
    this.db.addPool({ id, label, order: this.poolCount, laneIds: [] });
  }
  laneDecl(ctx) {
    const label = this.readNameOrId(ctx.nameOrId);
    this.laneCount += 1;
    const id = slug(label, this.laneCount, "lane");
    const line = this.lineOf(ctx.nameOrId);
    if (!this.currentPoolId) {
      this.currentLaneId = id;
      this.db.addLane({ id, label, poolId: "", order: this.laneCount });
      return;
    }
    this.currentLaneId = id;
    this.db.addLane({ id, label, poolId: this.currentPoolId, order: this.laneCount });
    void line;
  }
  readNameOrId(nameOrId) {
    const node = first2(nameOrId);
    if (!node) {
      return "";
    }
    const ctx = node.children;
    if (ctx.STRING) {
      return unquote(tokenText(first2(ctx.STRING)));
    }
    if (ctx.labelPhrase) {
      return this.readLabelPhrase(ctx.labelPhrase);
    }
    return "";
  }
  element(ctx) {
    if (ctx.eventDecl) {
      this.visit(ctx.eventDecl);
    } else if (ctx.taskDecl) {
      this.visit(ctx.taskDecl);
    } else if (ctx.gatewayDecl) {
      this.visit(ctx.gatewayDecl);
    } else if (ctx.dataDecl) {
      this.visit(ctx.dataDecl);
    }
  }
  eventDecl(ctx) {
    let position = "start";
    let keyToken;
    if (ctx.START) {
      position = "start";
      keyToken = first2(ctx.START);
    } else if (ctx.INTERMEDIATE) {
      position = "intermediate";
      keyToken = first2(ctx.INTERMEDIATE);
    } else if (ctx.END) {
      position = "end";
      keyToken = first2(ctx.END);
    }
    let trigger = "none";
    if (ctx.MESSAGE) {
      trigger = "message";
    } else if (ctx.TIMER) {
      trigger = "timer";
    }
    const idTok = first2(ctx.IDENTIFIER);
    this.db.addNode({
      kind: "event",
      id: tokenText(idTok),
      label: this.readLabel(ctx.label),
      position,
      trigger,
      laneId: this.currentLaneId,
      poolId: this.currentPoolId,
      line: idTok?.startLine ?? keyToken?.startLine ?? 0
    });
  }
  taskDecl(ctx) {
    let subtype = "abstract";
    if (ctx.USER_TASK) {
      subtype = "user";
    } else if (ctx.SERVICE_TASK) {
      subtype = "service";
    } else if (ctx.SCRIPT_TASK) {
      subtype = "script";
    } else if (ctx.subtype) {
      const raw = tokenText(first2(ctx.subtype)).toLowerCase();
      subtype = SUBTYPES[raw] ?? "abstract";
    }
    const idTok = first2(ctx.id);
    this.db.addNode({
      kind: "task",
      id: tokenText(idTok),
      label: this.readLabel(ctx.label),
      subtype,
      laneId: this.currentLaneId,
      poolId: this.currentPoolId,
      line: idTok?.startLine ?? 0
    });
  }
  gatewayDecl(ctx) {
    let gateway = "exclusive";
    if (ctx.AND) {
      gateway = "parallel";
    } else if (ctx.OR) {
      gateway = "inclusive";
    } else if (ctx.EVENT) {
      gateway = "event";
    } else {
      gateway = "exclusive";
    }
    const idTok = first2(ctx.IDENTIFIER);
    this.db.addNode({
      kind: "gateway",
      id: tokenText(idTok),
      label: this.readLabel(ctx.label),
      gateway,
      laneId: this.currentLaneId,
      poolId: this.currentPoolId,
      line: idTok?.startLine ?? 0
    });
  }
  // These rules are read directly by their parents (readNameOrId/readLabel/etc.),
  // so the visitor only needs to declare them for `validateVisitor`.
  nameOrId() {
  }
  connector() {
  }
  label() {
  }
  flowLabel() {
  }
  labelPhrase() {
  }
  dataDecl(ctx) {
    const idTok = first2(ctx.IDENTIFIER);
    this.db.addNode({
      kind: "data",
      id: tokenText(idTok),
      label: this.readLabel(ctx.label),
      laneId: this.currentLaneId,
      poolId: this.currentPoolId,
      line: idTok?.startLine ?? 0
    });
  }
  flow(ctx) {
    const ids = [...ctx.IDENTIFIER ?? [], ...ctx.target ?? []].sort(
      (a, b) => (a.startOffset ?? 0) - (b.startOffset ?? 0)
    );
    const connectors = ctx.connector ?? [];
    for (const [i, connector] of connectors.entries()) {
      const sourceTok = ids[i];
      const targetTok = ids[i + 1];
      if (!sourceTok || !targetTok) {
        continue;
      }
      const conn = this.readConnector(connector);
      this.flowCount += 1;
      const rawLabel = conn.label;
      const isDefault = rawLabel !== void 0 && rawLabel.trim().toLowerCase() === "default";
      this.db.addFlow({
        id: `__flow_${this.flowCount}`,
        sourceId: tokenText(sourceTok),
        targetId: tokenText(targetTok),
        kind: conn.kind,
        label: isDefault ? void 0 : rawLabel,
        isDefault: isDefault || void 0,
        line: sourceTok.startLine ?? 0
      });
    }
  }
  readConnector(node) {
    const ctx = node.children;
    let label;
    if (ctx.flowLabel) {
      label = this.readFlowLabel(ctx.flowLabel);
    }
    if (ctx.MSG_ARROW) {
      return { kind: "message", label };
    }
    if (ctx.ASSOCIATION) {
      return { kind: "association", label };
    }
    return { kind: "sequence", label };
  }
  readFlowLabel(flowLabel) {
    const node = first2(flowLabel);
    if (!node) {
      return void 0;
    }
    const ctx = node.children;
    if (ctx.STRING) {
      return unquote(tokenText(first2(ctx.STRING)));
    }
    if (ctx.labelPhrase) {
      return this.readLabelPhrase(ctx.labelPhrase);
    }
    return void 0;
  }
  readLabel(label) {
    if (!label) {
      return void 0;
    }
    const node = first2(label);
    if (!node) {
      return void 0;
    }
    const ctx = node.children;
    if (ctx.STRING) {
      return unquote(tokenText(first2(ctx.STRING)));
    }
    if (ctx.labelPhrase) {
      return this.readLabelPhrase(ctx.labelPhrase);
    }
    return void 0;
  }
  readLabelPhrase(labelPhrase) {
    const node = first2(labelPhrase);
    if (!node) {
      return "";
    }
    const ctx = node.children;
    const words = [];
    for (const key of Object.keys(ctx)) {
      for (const tok of ctx[key]) {
        words.push(tok);
      }
    }
    words.sort((a, b) => (a.startOffset ?? 0) - (b.startOffset ?? 0));
    return words.map((tok) => tok.image).join(" ");
  }
  lineOf(nameOrId) {
    const node = first2(nameOrId);
    if (!node) {
      return 0;
    }
    const ctx = node.children;
    for (const key of Object.keys(ctx)) {
      const tok = first2(ctx[key]);
      if (tok?.startLine) {
        return tok.startLine;
      }
    }
    return 0;
  }
};
var bpmnVisitor = new BpmnVisitor();

// packages/mermaid/src/diagrams/bpmn/parser/bpmn.chevrotain.ts
var parser = {
  // eslint-disable-next-line @typescript-eslint/require-await -- normalizes synchronous parser errors into rejected promises
  parse: async (input) => {
    db.clear();
    bpmnParser.input = [];
    try {
      runChevrotainParse(
        {
          diagramType: "bpmn",
          lexer: bpmnLexer,
          parser: bpmnParser,
          entry: () => bpmnParser.document(),
          visit: (cst) => bpmnVisitor.build(cst, db)
        },
        input
      );
    } catch (error) {
      db.clear();
      const parseError = bpmnParser.errors[0];
      if (parseError) {
        const { token } = parseError;
        const line = token.startLine ?? 1;
        const column = token.startColumn ?? 1;
        throw new Error(
          `Error parsing bpmn diagram: ${parseError.message} at line ${line}, column ${column}`
        );
      }
      throw error;
    }
    const errors = validateBpmn(db.getModel());
    if (errors.length > 0) {
      db.clear();
      throw new Error(errors.join("\n"));
    }
  }
};

// packages/mermaid/src/diagrams/bpmn/export/layout.ts
var SIZE = {
  event: { w: 36, h: 36 },
  gateway: { w: 50, h: 50 },
  task: { w: 110, h: 70 },
  data: { w: 50, h: 60 }
};
var COL_GAP = 70;
var ROW_H = 100;
var LANE_LABEL_W = 30;
var LANE_PAD = 20;
var POOL_HEADER_W = 0;
var POOL_GAP = 40;
var MARGIN = 40;
var nodeSize = (node) => SIZE[node.kind];
function layoutForExport(model) {
  const seq = model.flows.filter((f) => f.kind === "sequence");
  const rank = /* @__PURE__ */ new Map();
  for (const n of model.nodes) {
    rank.set(n.id, 0);
  }
  for (let iteration = 0; iteration < model.nodes.length + 1; iteration++) {
    let changed = false;
    for (const f of seq) {
      const r = (rank.get(f.sourceId) ?? 0) + 1;
      if (r > (rank.get(f.targetId) ?? 0)) {
        rank.set(f.targetId, r);
        changed = true;
      }
    }
    if (!changed) {
      break;
    }
  }
  const DEFAULT = "__default__";
  const processes = /* @__PURE__ */ new Map();
  for (const n of model.nodes) {
    const key = n.poolId ?? DEFAULT;
    (processes.get(key) ?? processes.set(key, []).get(key)).push(n);
  }
  const nodes = /* @__PURE__ */ new Map();
  const lanes = /* @__PURE__ */ new Map();
  const pools = /* @__PURE__ */ new Map();
  let cursorY = MARGIN;
  let maxRight = MARGIN;
  for (const [poolKey, poolNodes] of processes) {
    const poolLanes = model.lanes.filter((l) => l.poolId === poolKey).sort((a, b) => a.order - b.order);
    const laneOrder = poolLanes.map((l) => l.id);
    const hasNodesWithoutLane = poolNodes.some((n) => !n.laneId);
    if (hasNodesWithoutLane || laneOrder.length === 0) {
      laneOrder.unshift(void 0);
    }
    const poolLeft = MARGIN;
    const contentLeft = poolLeft + LANE_LABEL_W + POOL_HEADER_W + LANE_PAD;
    let laneTop = cursorY;
    let poolBottom = cursorY;
    let poolRight = contentLeft;
    for (const laneId of laneOrder) {
      const laneNodes = poolNodes.filter((n) => (n.laneId ?? void 0) === laneId);
      if (laneNodes.length === 0) {
        continue;
      }
      const perRank = /* @__PURE__ */ new Map();
      let maxSlots = 1;
      const placements = [];
      for (const node of laneNodes) {
        const r = rank.get(node.id) ?? 0;
        const slot = perRank.get(r) ?? 0;
        perRank.set(r, slot + 1);
        maxSlots = Math.max(maxSlots, slot + 1);
        placements.push({ node, r, slot });
      }
      const laneHeight = maxSlots * ROW_H + LANE_PAD;
      for (const { node, r, slot } of placements) {
        const { w, h } = nodeSize(node);
        const cellCenterX = contentLeft + r * (SIZE.task.w + COL_GAP) + SIZE.task.w / 2;
        const cellCenterY = laneTop + slot * ROW_H + ROW_H / 2 + LANE_PAD / 2;
        nodes.set(node.id, {
          x: Math.round(cellCenterX - w / 2),
          y: Math.round(cellCenterY - h / 2),
          width: w,
          height: h
        });
        poolRight = Math.max(poolRight, cellCenterX + SIZE.task.w / 2 + LANE_PAD);
      }
      if (laneId) {
        lanes.set(laneId, {
          x: poolLeft + LANE_LABEL_W,
          y: laneTop,
          width: 0,
          // filled after poolRight is known
          height: laneHeight
        });
      }
      laneTop += laneHeight;
      poolBottom = laneTop;
    }
    const poolWidth = poolRight - poolLeft;
    for (const laneId of laneOrder) {
      if (laneId && lanes.has(laneId)) {
        lanes.get(laneId).width = poolRight - (poolLeft + LANE_LABEL_W);
      }
    }
    if (poolKey !== DEFAULT) {
      pools.set(poolKey, {
        x: poolLeft,
        y: cursorY,
        width: poolWidth,
        height: poolBottom - cursorY
      });
    }
    maxRight = Math.max(maxRight, poolRight);
    cursorY = poolBottom + POOL_GAP;
  }
  return {
    nodes,
    lanes,
    pools,
    width: maxRight + MARGIN,
    height: cursorY - POOL_GAP + MARGIN
  };
}

// packages/mermaid/src/diagrams/bpmn/export/toBpmnXml.ts
var xml2 = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
var nameAttr = (label) => label ? ` name="${xml2(label)}"` : "";
var EVENT_TAG = {
  start: "startEvent",
  intermediate: "intermediateCatchEvent",
  end: "endEvent"
};
var TASK_TAG = {
  abstract: "task",
  user: "userTask",
  service: "serviceTask",
  script: "scriptTask"
};
var GATEWAY_TAG = {
  exclusive: "exclusiveGateway",
  parallel: "parallelGateway",
  inclusive: "inclusiveGateway",
  event: "eventBasedGateway"
};
var processId = (poolKey, defaultKey) => poolKey === defaultKey ? "Process_1" : `Process_${poolKey.replace(/[^\w-]/g, "_")}`;
var participantId = (poolKey) => `Participant_${poolKey.replace(/[^\w-]/g, "_")}`;
function bpmnModelToXml(model) {
  const layout = layoutForExport(model);
  const nodeById = new Map(model.nodes.map((n) => [n.id, n]));
  const DEFAULT = "__default__";
  const hasPools = model.pools.length > 0;
  const procKeyOf = (n) => n.poolId ?? DEFAULT;
  const processKeys = [...new Set(model.nodes.map(procKeyOf))];
  const seqAndAssoc = model.flows.filter((f) => f.kind !== "message");
  const messageFlows = model.flows.filter((f) => f.kind === "message");
  const outByNode = /* @__PURE__ */ new Map();
  const inByNode = /* @__PURE__ */ new Map();
  for (const f of model.flows.filter((flow) => flow.kind === "sequence")) {
    (outByNode.get(f.sourceId) ?? outByNode.set(f.sourceId, []).get(f.sourceId)).push(f);
    (inByNode.get(f.targetId) ?? inByNode.set(f.targetId, []).get(f.targetId)).push(f);
  }
  const isGatewaySource = (id) => {
    const n = nodeById.get(id);
    return n?.kind === "gateway" && (n.gateway === "exclusive" || n.gateway === "inclusive");
  };
  const processXml = [];
  for (const key of processKeys) {
    const nodes = model.nodes.filter((n) => procKeyOf(n) === key);
    const flows = seqAndAssoc.filter((f) => procKeyOf(nodeById.get(f.sourceId)) === key);
    const lines = [];
    const lanes = model.lanes.filter((l) => l.poolId === key);
    if (lanes.length > 0) {
      lines.push(`    <bpmn:laneSet id="LaneSet_${key.replace(/[^\w-]/g, "_")}">`);
      for (const lane of lanes) {
        lines.push(`      <bpmn:lane id="${lane.id}"${nameAttr(lane.label)}>`);
        for (const n of nodes.filter((nd) => nd.laneId === lane.id && nd.kind !== "data")) {
          lines.push(`        <bpmn:flowNodeRef>${xml2(n.id)}</bpmn:flowNodeRef>`);
        }
        lines.push(`      </bpmn:lane>`);
      }
      lines.push(`    </bpmn:laneSet>`);
    }
    for (const n of nodes) {
      const incoming = (inByNode.get(n.id) ?? []).map((f) => f.id);
      const outgoing = (outByNode.get(n.id) ?? []).map((f) => f.id);
      const io = [
        ...incoming.map((id) => `      <bpmn:incoming>${xml2(id)}</bpmn:incoming>`),
        ...outgoing.map((id) => `      <bpmn:outgoing>${xml2(id)}</bpmn:outgoing>`)
      ];
      if (n.kind === "event") {
        const tag = EVENT_TAG[n.position];
        const def = n.trigger === "message" ? `      <bpmn:messageEventDefinition id="${n.id}_def" />` : n.trigger === "timer" ? `      <bpmn:timerEventDefinition id="${n.id}_def" />` : "";
        const children = [...io, def].filter(Boolean);
        lines.push(`    <bpmn:${tag} id="${n.id}"${nameAttr(n.label)}>`);
        lines.push(...children);
        lines.push(`    </bpmn:${tag}>`);
      } else if (n.kind === "task") {
        const tag = TASK_TAG[n.subtype];
        lines.push(`    <bpmn:${tag} id="${n.id}"${nameAttr(n.label)}>`);
        lines.push(...io);
        lines.push(`    </bpmn:${tag}>`);
      } else if (n.kind === "gateway") {
        const tag = GATEWAY_TAG[n.gateway];
        const def = (outByNode.get(n.id) ?? []).find((f) => f.isDefault);
        const defAttr = def ? ` default="${def.id}"` : "";
        lines.push(`    <bpmn:${tag} id="${n.id}"${nameAttr(n.label)}${defAttr}>`);
        lines.push(...io);
        lines.push(`    </bpmn:${tag}>`);
      } else {
        lines.push(
          `    <bpmn:dataObjectReference id="${n.id}"${nameAttr(n.label)} dataObjectRef="DataObject_${n.id}" />`
        );
        lines.push(`    <bpmn:dataObject id="DataObject_${n.id}" />`);
      }
    }
    for (const f of flows) {
      if (f.kind === "association") {
        lines.push(
          `    <bpmn:association id="${f.id}" sourceRef="${xml2(f.sourceId)}" targetRef="${xml2(f.targetId)}" />`
        );
        continue;
      }
      const cond = f.label && isGatewaySource(f.sourceId) && !f.isDefault ? `
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">${xml2(f.label)}</bpmn:conditionExpression>
    ` : "";
      lines.push(
        `    <bpmn:sequenceFlow id="${f.id}"${nameAttr(f.label)} sourceRef="${xml2(f.sourceId)}" targetRef="${xml2(f.targetId)}">${cond}</bpmn:sequenceFlow>`
      );
    }
    processXml.push(
      `  <bpmn:process id="${processId(key, DEFAULT)}" isExecutable="false">
${lines.join("\n")}
  </bpmn:process>`
    );
  }
  let collaborationXml = "";
  const planeElement = hasPools ? "Collaboration_1" : processId(processKeys[0] ?? DEFAULT, DEFAULT);
  if (hasPools) {
    const parts = model.pools.map(
      (p) => `    <bpmn:participant id="${participantId(p.id)}"${nameAttr(p.label)} processRef="${processId(p.id, DEFAULT)}" />`
    );
    const msgs = messageFlows.map(
      (f) => `    <bpmn:messageFlow id="${f.id}"${nameAttr(f.label)} sourceRef="${xml2(f.sourceId)}" targetRef="${xml2(f.targetId)}" />`
    );
    collaborationXml = `  <bpmn:collaboration id="Collaboration_1">
${[...parts, ...msgs].join("\n")}
  </bpmn:collaboration>
`;
  }
  const di = [];
  const shape = (id, ref, box, horizontal) => `      <bpmndi:BPMNShape id="${id}" bpmnElement="${ref}"${horizontal ? ' isHorizontal="true"' : ""}>
        <dc:Bounds x="${box.x}" y="${box.y}" width="${box.width}" height="${box.height}" />
      </bpmndi:BPMNShape>`;
  for (const [poolKey, box] of layout.pools) {
    di.push(shape(`Shape_${participantId(poolKey)}`, participantId(poolKey), box, true));
  }
  for (const [laneId, box] of layout.lanes) {
    di.push(shape(`Shape_${laneId}`, laneId, box, true));
  }
  for (const n of model.nodes) {
    const box = layout.nodes.get(n.id);
    if (box) {
      di.push(shape(`Shape_${n.id}`, n.id, box));
    }
  }
  const waypoints = (src, dst, vertical) => {
    const pts = vertical ? [
      { x: Math.round(src.x + src.width / 2), y: src.y + src.height },
      { x: Math.round(dst.x + dst.width / 2), y: dst.y }
    ] : [
      { x: src.x + src.width, y: Math.round(src.y + src.height / 2) },
      { x: dst.x, y: Math.round(dst.y + dst.height / 2) }
    ];
    return pts.map((p) => `        <di:waypoint x="${p.x}" y="${p.y}" />`).join("\n");
  };
  for (const f of model.flows) {
    const src = layout.nodes.get(f.sourceId);
    const dst = layout.nodes.get(f.targetId);
    if (!src || !dst) {
      continue;
    }
    di.push(
      `      <bpmndi:BPMNEdge id="Edge_${f.id}" bpmnElement="${f.id}">
${waypoints(src, dst, f.kind === "message")}
      </bpmndi:BPMNEdge>`
    );
  }
  const diXml = `  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="${planeElement}">
${di.join("\n")}
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_bpmn" targetNamespace="http://bpmn.io/schema/bpmn">
${collaborationXml}${processXml.join("\n")}
${diXml}
</bpmn:definitions>
`;
}

// packages/mermaid/src/diagrams/bpmn/export/index.ts
async function toBpmnXml(dsl) {
  await parser.parse(dsl);
  return bpmnModelToXml(db.getModel());
}
export {
  db,
  parser,
  toBpmnXml,
  validateBpmn
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.12 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.12/LICENSE *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
