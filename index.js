"use strict";

import fn from "./function.js";
import undef from "./undefined.js";
import regexp from "./regexp.js";

export { fn as function };
export { undef as undefined };
export { regexp };

export const all = [fn, undef, regexp];
