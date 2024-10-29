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
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length;
    if (v === 0 && i % 100 === 1)
        return 1;
    if (v === 0 && i % 100 === 2)
        return 2;
    if (v === 0 && (i % 100 === Math.floor(i % 100) && (i % 100 >= 3 && i % 100 <= 4)) || !(v === 0))
        return 3;
    return 5;
}
export default ["sl", [["d", "p"], ["dop.", "pop."], u], [["d", "p"], ["dop.", "pop."], ["dopoldne", "popoldne"]], [["n", "p", "t", "s", "č", "p", "s"], ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."], ["nedelja", "ponedeljek", "torek", "sreda", "četrtek", "petek", "sobota"], ["ned.", "pon.", "tor.", "sre.", "čet.", "pet.", "sob."]], u, [["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], ["jan.", "feb.", "mar.", "apr.", "maj", "jun.", "jul.", "avg.", "sep.", "okt.", "nov.", "dec."], ["januar", "februar", "marec", "april", "maj", "junij", "julij", "avgust", "september", "oktober", "november", "december"]], u, [["pr. Kr.", "po Kr."], u, ["pred Kristusom", "po Kristusu"]], 1, [6, 0], ["d. MM. yy", "d. MMM y", "d. MMMM y", "EEEE, d. MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} {0}", u], [",", ".", ";", "%", "+", "−", "e", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "evro", { "AUD": [u, "$"], "BRL": [u, "R$"], "BYN": [u, "р."], "CAD": [u, "$"], "GBP": [u, "£"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "₱"], "TWD": [u, "NT$"], "XCD": [u, "$"] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9zbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDO0lBRWpHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLENBQUM7SUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RixPQUFPLENBQUMsQ0FBQztJQUNiLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsQ0FBQztBQUVELGVBQWUsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBQyxhQUFhLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixDQUFDLEVBQUMsQ0FBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxlQUFlLENBQUMsRUFBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLFdBQVcsRUFBQyxTQUFTLEVBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxFQUFDLEtBQUssRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWS5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbCh2YWw6IG51bWJlcik6IG51bWJlciB7XG5jb25zdCBuID0gdmFsLCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyh2YWwpKSwgdiA9IHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuXG5pZiAodiA9PT0gMCAmJiBpICUgMTAwID09PSAxKVxuICAgIHJldHVybiAxO1xuaWYgKHYgPT09IDAgJiYgaSAlIDEwMCA9PT0gMilcbiAgICByZXR1cm4gMjtcbmlmICh2ID09PSAwICYmIChpICUgMTAwID09PSBNYXRoLmZsb29yKGkgJSAxMDApICYmIChpICUgMTAwID49IDMgJiYgaSAlIDEwMCA8PSA0KSkgfHwgISh2ID09PSAwKSlcbiAgICByZXR1cm4gMztcbnJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXCJzbFwiLFtbXCJkXCIsXCJwXCJdLFtcImRvcC5cIixcInBvcC5cIl0sdV0sW1tcImRcIixcInBcIl0sW1wiZG9wLlwiLFwicG9wLlwiXSxbXCJkb3BvbGRuZVwiLFwicG9wb2xkbmVcIl1dLFtbXCJuXCIsXCJwXCIsXCJ0XCIsXCJzXCIsXCLEjVwiLFwicFwiLFwic1wiXSxbXCJuZWQuXCIsXCJwb24uXCIsXCJ0b3IuXCIsXCJzcmUuXCIsXCLEjWV0LlwiLFwicGV0LlwiLFwic29iLlwiXSxbXCJuZWRlbGphXCIsXCJwb25lZGVsamVrXCIsXCJ0b3Jla1wiLFwic3JlZGFcIixcIsSNZXRydGVrXCIsXCJwZXRla1wiLFwic29ib3RhXCJdLFtcIm5lZC5cIixcInBvbi5cIixcInRvci5cIixcInNyZS5cIixcIsSNZXQuXCIsXCJwZXQuXCIsXCJzb2IuXCJdXSx1LFtbXCJqXCIsXCJmXCIsXCJtXCIsXCJhXCIsXCJtXCIsXCJqXCIsXCJqXCIsXCJhXCIsXCJzXCIsXCJvXCIsXCJuXCIsXCJkXCJdLFtcImphbi5cIixcImZlYi5cIixcIm1hci5cIixcImFwci5cIixcIm1halwiLFwianVuLlwiLFwianVsLlwiLFwiYXZnLlwiLFwic2VwLlwiLFwib2t0LlwiLFwibm92LlwiLFwiZGVjLlwiXSxbXCJqYW51YXJcIixcImZlYnJ1YXJcIixcIm1hcmVjXCIsXCJhcHJpbFwiLFwibWFqXCIsXCJqdW5palwiLFwianVsaWpcIixcImF2Z3VzdFwiLFwic2VwdGVtYmVyXCIsXCJva3RvYmVyXCIsXCJub3ZlbWJlclwiLFwiZGVjZW1iZXJcIl1dLHUsW1tcInByLiBLci5cIixcInBvIEtyLlwiXSx1LFtcInByZWQgS3Jpc3R1c29tXCIsXCJwbyBLcmlzdHVzdVwiXV0sMSxbNiwwXSxbXCJkLiBNTS4geXlcIixcImQuIE1NTSB5XCIsXCJkLiBNTU1NIHlcIixcIkVFRUUsIGQuIE1NTU0geVwiXSxbXCJISDptbVwiLFwiSEg6bW06c3NcIixcIkhIOm1tOnNzIHpcIixcIkhIOm1tOnNzIHp6enpcIl0sW1wiezF9LCB7MH1cIix1LFwiezF9IHswfVwiLHVdLFtcIixcIixcIi5cIixcIjtcIixcIiVcIixcIitcIixcIuKIklwiLFwiZVwiLFwiw5dcIixcIuKAsFwiLFwi4oieXCIsXCJOYU5cIixcIjpcIl0sW1wiIywjIzAuIyMjXCIsXCIjLCMjMMKgJVwiLFwiIywjIzAuMDDCoMKkXCIsXCIjRTBcIl0sXCJFVVJcIixcIuKCrFwiLFwiZXZyb1wiLHtcIkFVRFwiOlt1LFwiJFwiXSxcIkJSTFwiOlt1LFwiUiRcIl0sXCJCWU5cIjpbdSxcItGALlwiXSxcIkNBRFwiOlt1LFwiJFwiXSxcIkdCUFwiOlt1LFwiwqNcIl0sXCJNWE5cIjpbdSxcIiRcIl0sXCJOWkRcIjpbdSxcIiRcIl0sXCJQSFBcIjpbdSxcIuKCsVwiXSxcIlRXRFwiOlt1LFwiTlQkXCJdLFwiWENEXCI6W3UsXCIkXCJdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19