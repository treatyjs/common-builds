/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;
    if (i === 0 || i === 1)
        return 1;
    if (e === 0 && (!(i === 0) && (i % 1000000 === 0 && v === 0)) || !(e >= 0 && e <= 5))
        return 4;
    return 5;
}
export default ["fr-SY", [["AM", "PM"], u, u], u, [["D", "L", "M", "M", "J", "V", "S"], ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], ["di", "lu", "ma", "me", "je", "ve", "sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."], ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]], u, [["av. J.-C.", "ap. J.-C."], u, ["avant Jésus-Christ", "après Jésus-Christ"]], 6, [5, 6], ["dd/MM/y", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1} {0}", "{1}, {0}", "{1} 'à' {0}", u], [",", " ", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "SYP", "LS", "livre syrienne", { "ARS": ["$AR", "$"], "AUD": ["$AU", "$"], "BEF": ["FB"], "BMD": ["$BM", "$"], "BND": ["$BN", "$"], "BYN": [u, "р."], "BZD": ["$BZ", "$"], "CAD": ["$CA", "$"], "CLP": ["$CL", "$"], "CNY": [u, "¥"], "COP": ["$CO", "$"], "CYP": ["£CY"], "EGP": [u, "£E"], "FJD": ["$FJ", "$"], "FKP": ["£FK", "£"], "FRF": ["F"], "GBP": ["£GB", "£"], "GIP": ["£GI", "£"], "HKD": [u, "$"], "IEP": ["£IE"], "ILP": ["£IL"], "ITL": ["₤IT"], "JPY": [u, "¥"], "KMF": [u, "FC"], "LBP": ["£LB", "£L"], "MTP": ["£MT"], "MXN": ["$MX", "$"], "NAD": ["$NA", "$"], "NIO": [u, "$C"], "NZD": ["$NZ", "$"], "PHP": [u, "₱"], "RHD": ["$RH"], "RON": [u, "L"], "RWF": [u, "FR"], "SBD": ["$SB", "$"], "SGD": ["$SG", "$"], "SRD": ["$SR", "$"], "SYP": ["LS", "£"], "TOP": [u, "$T"], "TTD": ["$TT", "$"], "TWD": [u, "NT$"], "USD": ["$US", "$"], "UYU": ["$UY", "$"], "WST": ["$WS"], "XCD": [u, "$"], "XPF": ["FCFP"], "ZMW": [u, "Kw"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnItU1kuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9mci1TWS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUUxSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsT0FBTyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQztJQUNiLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsZ0JBQWdCLENBQUMsRUFBQyxDQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZLlxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKHZhbDogbnVtYmVyKTogbnVtYmVyIHtcbmNvbnN0IG4gPSB2YWwsIGkgPSBNYXRoLmZsb29yKE1hdGguYWJzKHZhbCkpLCB2ID0gdmFsLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsIGUgPSBwYXJzZUludCh2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9eW15lXSooZShbLStdP1xcZCspKT8vLCAnJDInKSkgfHwgMDtcblxuaWYgKGkgPT09IDAgfHwgaSA9PT0gMSlcbiAgICByZXR1cm4gMTtcbmlmIChlID09PSAwICYmICghKGkgPT09IDApICYmIChpICUgMTAwMDAwMCA9PT0gMCAmJiB2ID09PSAwKSkgfHwgIShlID49IDAgJiYgZSA8PSA1KSlcbiAgICByZXR1cm4gNDtcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJmci1TWVwiLFtbXCJBTVwiLFwiUE1cIl0sdSx1XSx1LFtbXCJEXCIsXCJMXCIsXCJNXCIsXCJNXCIsXCJKXCIsXCJWXCIsXCJTXCJdLFtcImRpbS5cIixcImx1bi5cIixcIm1hci5cIixcIm1lci5cIixcImpldS5cIixcInZlbi5cIixcInNhbS5cIl0sW1wiZGltYW5jaGVcIixcImx1bmRpXCIsXCJtYXJkaVwiLFwibWVyY3JlZGlcIixcImpldWRpXCIsXCJ2ZW5kcmVkaVwiLFwic2FtZWRpXCJdLFtcImRpXCIsXCJsdVwiLFwibWFcIixcIm1lXCIsXCJqZVwiLFwidmVcIixcInNhXCJdXSx1LFtbXCJKXCIsXCJGXCIsXCJNXCIsXCJBXCIsXCJNXCIsXCJKXCIsXCJKXCIsXCJBXCIsXCJTXCIsXCJPXCIsXCJOXCIsXCJEXCJdLFtcImphbnYuXCIsXCJmw6l2ci5cIixcIm1hcnNcIixcImF2ci5cIixcIm1haVwiLFwianVpblwiLFwianVpbC5cIixcImFvw7t0XCIsXCJzZXB0LlwiLFwib2N0LlwiLFwibm92LlwiLFwiZMOpYy5cIl0sW1wiamFudmllclwiLFwiZsOpdnJpZXJcIixcIm1hcnNcIixcImF2cmlsXCIsXCJtYWlcIixcImp1aW5cIixcImp1aWxsZXRcIixcImFvw7t0XCIsXCJzZXB0ZW1icmVcIixcIm9jdG9icmVcIixcIm5vdmVtYnJlXCIsXCJkw6ljZW1icmVcIl1dLHUsW1tcImF2LiBKLi1DLlwiLFwiYXAuIEouLUMuXCJdLHUsW1wiYXZhbnQgSsOpc3VzLUNocmlzdFwiLFwiYXByw6hzIErDqXN1cy1DaHJpc3RcIl1dLDYsWzUsNl0sW1wiZGQvTU0veVwiLFwiZCBNTU0geVwiLFwiZCBNTU1NIHlcIixcIkVFRUUgZCBNTU1NIHlcIl0sW1wiaDptbSBhXCIsXCJoOm1tOnNzIGFcIixcImg6bW06c3MgYSB6XCIsXCJoOm1tOnNzIGEgenp6elwiXSxbXCJ7MX0gezB9XCIsXCJ7MX0sIHswfVwiLFwiezF9ICfDoCcgezB9XCIsdV0sW1wiLFwiLFwi4oCvXCIsXCI7XCIsXCIlXCIsXCIrXCIsXCItXCIsXCJFXCIsXCLDl1wiLFwi4oCwXCIsXCLiiJ5cIixcIk5hTlwiLFwiOlwiXSxbXCIjLCMjMC4jIyNcIixcIiMsIyMwwqAlXCIsXCIjLCMjMC4wMMKgwqRcIixcIiNFMFwiXSxcIlNZUFwiLFwiTFNcIixcImxpdnJlIHN5cmllbm5lXCIse1wiQVJTXCI6W1wiJEFSXCIsXCIkXCJdLFwiQVVEXCI6W1wiJEFVXCIsXCIkXCJdLFwiQkVGXCI6W1wiRkJcIl0sXCJCTURcIjpbXCIkQk1cIixcIiRcIl0sXCJCTkRcIjpbXCIkQk5cIixcIiRcIl0sXCJCWU5cIjpbdSxcItGALlwiXSxcIkJaRFwiOltcIiRCWlwiLFwiJFwiXSxcIkNBRFwiOltcIiRDQVwiLFwiJFwiXSxcIkNMUFwiOltcIiRDTFwiLFwiJFwiXSxcIkNOWVwiOlt1LFwiwqVcIl0sXCJDT1BcIjpbXCIkQ09cIixcIiRcIl0sXCJDWVBcIjpbXCLCo0NZXCJdLFwiRUdQXCI6W3UsXCLCo0VcIl0sXCJGSkRcIjpbXCIkRkpcIixcIiRcIl0sXCJGS1BcIjpbXCLCo0ZLXCIsXCLCo1wiXSxcIkZSRlwiOltcIkZcIl0sXCJHQlBcIjpbXCLCo0dCXCIsXCLCo1wiXSxcIkdJUFwiOltcIsKjR0lcIixcIsKjXCJdLFwiSEtEXCI6W3UsXCIkXCJdLFwiSUVQXCI6W1wiwqNJRVwiXSxcIklMUFwiOltcIsKjSUxcIl0sXCJJVExcIjpbXCLigqRJVFwiXSxcIkpQWVwiOlt1LFwiwqVcIl0sXCJLTUZcIjpbdSxcIkZDXCJdLFwiTEJQXCI6W1wiwqNMQlwiLFwiwqNMXCJdLFwiTVRQXCI6W1wiwqNNVFwiXSxcIk1YTlwiOltcIiRNWFwiLFwiJFwiXSxcIk5BRFwiOltcIiROQVwiLFwiJFwiXSxcIk5JT1wiOlt1LFwiJENcIl0sXCJOWkRcIjpbXCIkTlpcIixcIiRcIl0sXCJQSFBcIjpbdSxcIuKCsVwiXSxcIlJIRFwiOltcIiRSSFwiXSxcIlJPTlwiOlt1LFwiTFwiXSxcIlJXRlwiOlt1LFwiRlJcIl0sXCJTQkRcIjpbXCIkU0JcIixcIiRcIl0sXCJTR0RcIjpbXCIkU0dcIixcIiRcIl0sXCJTUkRcIjpbXCIkU1JcIixcIiRcIl0sXCJTWVBcIjpbXCJMU1wiLFwiwqNcIl0sXCJUT1BcIjpbdSxcIiRUXCJdLFwiVFREXCI6W1wiJFRUXCIsXCIkXCJdLFwiVFdEXCI6W3UsXCJOVCRcIl0sXCJVU0RcIjpbXCIkVVNcIixcIiRcIl0sXCJVWVVcIjpbXCIkVVlcIixcIiRcIl0sXCJXU1RcIjpbXCIkV1NcIl0sXCJYQ0RcIjpbdSxcIiRcIl0sXCJYUEZcIjpbXCJGQ0ZQXCJdLFwiWk1XXCI6W3UsXCJLd1wiXX0sXCJsdHJcIiwgcGx1cmFsXTtcbiJdfQ==