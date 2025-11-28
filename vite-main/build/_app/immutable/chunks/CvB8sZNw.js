import { c as commonjsGlobal, g as getDefaultExportFromCjs } from "./OO7lCI-F.js";
var calendar$1 = { exports: {} };
(function(module, exports$1) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e, t, a) {
      var n = "h:mm A", d = { lastDay: "[Yesterday at] " + n, sameDay: "[Today at] " + n, nextDay: "[Tomorrow at] " + n, nextWeek: "dddd [at] " + n, lastWeek: "[Last] dddd [at] " + n, sameElse: "MM/DD/YYYY" };
      t.prototype.calendar = function(e2, t2) {
        var n2 = t2 || this.$locale().calendar || d, o = a(e2 || void 0).startOf("d"), s = this.diff(o, "d", true), i = "sameElse", f = s < -6 ? i : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : i, l = n2[f] || d[f];
        return "function" == typeof l ? l.call(this, a()) : this.format(l);
      };
    };
  });
})(calendar$1);
var calendarExports = calendar$1.exports;
const calendar = /* @__PURE__ */ getDefaultExportFromCjs(calendarExports);
export {
  calendar as c
};
