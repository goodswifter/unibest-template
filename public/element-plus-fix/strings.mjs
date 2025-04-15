import { capitalize as capitalize$1 } from '@vue/shared';
import { camelize, hyphenate as _hyphenate } from '@vue/shared';

const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
const capitalize = (str) => capitalize$1(str);
const hyphenate = _hyphenate;
const kebabCase = _hyphenate;

export { camelize, capitalize, escapeStringRegexp, hyphenate, kebabCase }; 