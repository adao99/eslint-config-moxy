/* eslint no-unused-vars:2 */

// `no-unused-vars` - disallow unused variables
// ---------------------------------------------------------------------
// Bad
(function () {
    const x = 1;
    const y = 2;

    console.log(x);
})();
// Good
(function () {
    const x = 1;

    console.log(x);
})();
