/* eslint-disable @typescript-eslint/prefer-regexp-exec */
/* eslint-disable functional/functional-parameters */

/**
 * A TypeScript port of a subset of is.js (https://github.com/arasatasaygin/is.js)
 * See https://github.com/arasatasaygin/is.js/blob/56294950656ba58f940248510cdf3e45af357a1e/is.js
 * MIT license https://github.com/arasatasaygin/is.js/blob/master/LICENSE
 */

const userAgent = (
  (typeof navigator === "object" && navigator.userAgent) ||
  ""
).toLowerCase();
const vendor = (
  (typeof navigator === "object" && navigator.vendor) ||
  ""
).toLowerCase();

export const is = {
  chrome: (): boolean => {
    const match = vendor.includes("google inc")
      ? userAgent.match(/(?:chrome|crios)\/(\d+)/u)
      : null;
    return match !== null && !is.opera();
  },
  opera: (): boolean => {
    const match = userAgent.match(/(?:^opera.+?version|opr)\/(\d+)/u);
    return match !== null;
  },
};
