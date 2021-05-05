/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 696:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"_from":"axios@^0.21.1","_id":"axios@0.21.1","_inBundle":false,"_integrity":"sha512-dKQiRHxGD9PPRIUNIWvZhPTPpl1rf/OxTYKsqKUDjBwYylTvV7SjSHJb9ratfyzM6wCdLCOYLzs73qpg5c4iGA==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"axios@^0.21.1","name":"axios","escapedName":"axios","rawSpec":"^0.21.1","saveSpec":null,"fetchSpec":"^0.21.1"},"_requiredBy":["/github-api"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.1.tgz","_shasum":"22563481962f4d6bde9a76d516ef0e5d3c09b2b8","_spec":"axios@^0.21.1","_where":"/Users/p001842/Desktop/kuc-dev/doc-sample/action-kuc-demo/node_modules/github-api","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundleDependencies":false,"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.10.0"},"deprecated":false,"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"homepage":"https://github.com/axios/axios","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test && bundlesize","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.1"}');

/***/ }),

/***/ 9165:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(798);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 8864:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const command_1 = __nccwpck_require__(9165);
const file_command_1 = __nccwpck_require__(6526);
const utils_1 = __nccwpck_require__(798);
const os = __importStar(__nccwpck_require__(2087));
const path = __importStar(__nccwpck_require__(5622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    process.stdout.write(os.EOL);
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 6526:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__nccwpck_require__(5747));
const os = __importStar(__nccwpck_require__(2087));
const utils_1 = __nccwpck_require__(798);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 798:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 8020:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const fs_1 = __nccwpck_require__(5747);
const os_1 = __nccwpck_require__(2087);
class Context {
    /**
     * Hydrate the context from the environment
     */
    constructor() {
        this.payload = {};
        if (process.env.GITHUB_EVENT_PATH) {
            if (fs_1.existsSync(process.env.GITHUB_EVENT_PATH)) {
                this.payload = JSON.parse(fs_1.readFileSync(process.env.GITHUB_EVENT_PATH, { encoding: 'utf8' }));
            }
            else {
                const path = process.env.GITHUB_EVENT_PATH;
                process.stdout.write(`GITHUB_EVENT_PATH ${path} does not exist${os_1.EOL}`);
            }
        }
        this.eventName = process.env.GITHUB_EVENT_NAME;
        this.sha = process.env.GITHUB_SHA;
        this.ref = process.env.GITHUB_REF;
        this.workflow = process.env.GITHUB_WORKFLOW;
        this.action = process.env.GITHUB_ACTION;
        this.actor = process.env.GITHUB_ACTOR;
        this.job = process.env.GITHUB_JOB;
        this.runNumber = parseInt(process.env.GITHUB_RUN_NUMBER, 10);
        this.runId = parseInt(process.env.GITHUB_RUN_ID, 10);
    }
    get issue() {
        const payload = this.payload;
        return Object.assign(Object.assign({}, this.repo), { number: (payload.issue || payload.pull_request || payload).number });
    }
    get repo() {
        if (process.env.GITHUB_REPOSITORY) {
            const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
            return { owner, repo };
        }
        if (this.payload.repository) {
            return {
                owner: this.payload.repository.owner.login,
                repo: this.payload.repository.name
            };
        }
        throw new Error("context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'");
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map

/***/ }),

/***/ 6366:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokit = exports.context = void 0;
const Context = __importStar(__nccwpck_require__(8020));
const utils_1 = __nccwpck_require__(9562);
exports.context = new Context.Context();
/**
 * Returns a hydrated octokit ready to use for GitHub Actions
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokit(token, options) {
    return new utils_1.GitHub(utils_1.getOctokitOptions(token, options));
}
exports.getOctokit = getOctokit;
//# sourceMappingURL=github.js.map

/***/ }),

/***/ 8362:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getApiBaseUrl = exports.getProxyAgent = exports.getAuthString = void 0;
const httpClient = __importStar(__nccwpck_require__(9740));
function getAuthString(token, options) {
    if (!token && !options.auth) {
        throw new Error('Parameter token or opts.auth is required');
    }
    else if (token && options.auth) {
        throw new Error('Parameters token and opts.auth may not both be specified');
    }
    return typeof options.auth === 'string' ? options.auth : `token ${token}`;
}
exports.getAuthString = getAuthString;
function getProxyAgent(destinationUrl) {
    const hc = new httpClient.HttpClient();
    return hc.getAgent(destinationUrl);
}
exports.getProxyAgent = getProxyAgent;
function getApiBaseUrl() {
    return process.env['GITHUB_API_URL'] || 'https://api.github.com';
}
exports.getApiBaseUrl = getApiBaseUrl;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9562:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getOctokitOptions = exports.GitHub = exports.context = void 0;
const Context = __importStar(__nccwpck_require__(8020));
const Utils = __importStar(__nccwpck_require__(8362));
// octokit + plugins
const core_1 = __nccwpck_require__(4013);
const plugin_rest_endpoint_methods_1 = __nccwpck_require__(9400);
const plugin_paginate_rest_1 = __nccwpck_require__(2185);
exports.context = new Context.Context();
const baseUrl = Utils.getApiBaseUrl();
const defaults = {
    baseUrl,
    request: {
        agent: Utils.getProxyAgent(baseUrl)
    }
};
exports.GitHub = core_1.Octokit.plugin(plugin_rest_endpoint_methods_1.restEndpointMethods, plugin_paginate_rest_1.paginateRest).defaults(defaults);
/**
 * Convience function to correctly format Octokit Options to pass into the constructor.
 *
 * @param     token    the repo PAT or GITHUB_TOKEN
 * @param     options  other options to set
 */
function getOctokitOptions(token, options) {
    const opts = Object.assign({}, options || {}); // Shallow clone - don't mutate the object provided by the caller
    // Auth
    const auth = Utils.getAuthString(token, opts);
    if (auth) {
        opts.auth = auth;
    }
    return opts;
}
exports.getOctokitOptions = getOctokitOptions;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 9740:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const http = __nccwpck_require__(8605);
const https = __nccwpck_require__(7211);
const pm = __nccwpck_require__(2929);
let tunnel;
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    let proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return new Promise(async (resolve, reject) => {
            let output = Buffer.alloc(0);
            this.message.on('data', (chunk) => {
                output = Buffer.concat([output, chunk]);
            });
            this.message.on('end', () => {
                resolve(output.toString());
            });
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    let parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
    }
    get(requestUrl, additionalHeaders) {
        return this.request('GET', requestUrl, null, additionalHeaders || {});
    }
    del(requestUrl, additionalHeaders) {
        return this.request('DELETE', requestUrl, null, additionalHeaders || {});
    }
    post(requestUrl, data, additionalHeaders) {
        return this.request('POST', requestUrl, data, additionalHeaders || {});
    }
    patch(requestUrl, data, additionalHeaders) {
        return this.request('PATCH', requestUrl, data, additionalHeaders || {});
    }
    put(requestUrl, data, additionalHeaders) {
        return this.request('PUT', requestUrl, data, additionalHeaders || {});
    }
    head(requestUrl, additionalHeaders) {
        return this.request('HEAD', requestUrl, null, additionalHeaders || {});
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return this.request(verb, requestUrl, stream, additionalHeaders);
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    async getJson(requestUrl, additionalHeaders = {}) {
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        let res = await this.get(requestUrl, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async postJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.post(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async putJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.put(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    async patchJson(requestUrl, obj, additionalHeaders = {}) {
        let data = JSON.stringify(obj, null, 2);
        additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
        additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
        let res = await this.patch(requestUrl, data, additionalHeaders);
        return this._processResponse(res, this.requestOptions);
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    async request(verb, requestUrl, data, headers) {
        if (this._disposed) {
            throw new Error('Client has already been disposed.');
        }
        let parsedUrl = new URL(requestUrl);
        let info = this._prepareRequest(verb, parsedUrl, headers);
        // Only perform retries on reads since writes may not be idempotent.
        let maxTries = this._allowRetries && RetryableHttpVerbs.indexOf(verb) != -1
            ? this._maxRetries + 1
            : 1;
        let numTries = 0;
        let response;
        while (numTries < maxTries) {
            response = await this.requestRaw(info, data);
            // Check if it's an authentication challenge
            if (response &&
                response.message &&
                response.message.statusCode === HttpCodes.Unauthorized) {
                let authenticationHandler;
                for (let i = 0; i < this.handlers.length; i++) {
                    if (this.handlers[i].canHandleAuthentication(response)) {
                        authenticationHandler = this.handlers[i];
                        break;
                    }
                }
                if (authenticationHandler) {
                    return authenticationHandler.handleAuthentication(this, info, data);
                }
                else {
                    // We have received an unauthorized response but have no handlers to handle it.
                    // Let the response return to the caller.
                    return response;
                }
            }
            let redirectsRemaining = this._maxRedirects;
            while (HttpRedirectCodes.indexOf(response.message.statusCode) != -1 &&
                this._allowRedirects &&
                redirectsRemaining > 0) {
                const redirectUrl = response.message.headers['location'];
                if (!redirectUrl) {
                    // if there's no location to redirect to, we won't
                    break;
                }
                let parsedRedirectUrl = new URL(redirectUrl);
                if (parsedUrl.protocol == 'https:' &&
                    parsedUrl.protocol != parsedRedirectUrl.protocol &&
                    !this._allowRedirectDowngrade) {
                    throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                }
                // we need to finish reading the response before reassigning response
                // which will leak the open socket.
                await response.readBody();
                // strip authorization header if redirected to a different hostname
                if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                    for (let header in headers) {
                        // header names are case insensitive
                        if (header.toLowerCase() === 'authorization') {
                            delete headers[header];
                        }
                    }
                }
                // let's make the request with the new redirectUrl
                info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                response = await this.requestRaw(info, data);
                redirectsRemaining--;
            }
            if (HttpResponseRetryCodes.indexOf(response.message.statusCode) == -1) {
                // If not a retry code, return immediately instead of retrying
                return response;
            }
            numTries += 1;
            if (numTries < maxTries) {
                await response.readBody();
                await this._performExponentialBackoff(numTries);
            }
        }
        return response;
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return new Promise((resolve, reject) => {
            let callbackForResult = function (err, res) {
                if (err) {
                    reject(err);
                }
                resolve(res);
            };
            this.requestRawWithCallback(info, data, callbackForResult);
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        let socket;
        if (typeof data === 'string') {
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        let handleResult = (err, res) => {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        };
        let req = info.httpModule.request(info.options, (msg) => {
            let res = new HttpClientResponse(msg);
            handleResult(null, res);
        });
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error('Request timeout: ' + info.options.path), null);
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err, null);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        let parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            this.handlers.forEach(handler => {
                handler.prepareRequest(info.options);
            });
        }
        return info;
    }
    _mergeHeaders(headers) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        const lowercaseKeys = obj => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        let proxyUrl = pm.getProxyUrl(parsedUrl);
        let useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (!!agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (!!this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        if (useProxy) {
            // If using proxy, need tunnel
            if (!tunnel) {
                tunnel = __nccwpck_require__(3357);
            }
            const agentOptions = {
                maxSockets: maxSockets,
                keepAlive: this._keepAlive,
                proxy: {
                    ...((proxyUrl.username || proxyUrl.password) && {
                        proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                    }),
                    host: proxyUrl.hostname,
                    port: proxyUrl.port
                }
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets: maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
        const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
        return new Promise(resolve => setTimeout(() => resolve(), ms));
    }
    static dateTimeDeserializer(key, value) {
        if (typeof value === 'string') {
            let a = new Date(value);
            if (!isNaN(a.valueOf())) {
                return a;
            }
        }
        return value;
    }
    async _processResponse(res, options) {
        return new Promise(async (resolve, reject) => {
            const statusCode = res.message.statusCode;
            const response = {
                statusCode: statusCode,
                result: null,
                headers: {}
            };
            // not found leads to null obj returned
            if (statusCode == HttpCodes.NotFound) {
                resolve(response);
            }
            let obj;
            let contents;
            // get the result from the body
            try {
                contents = await res.readBody();
                if (contents && contents.length > 0) {
                    if (options && options.deserializeDates) {
                        obj = JSON.parse(contents, HttpClient.dateTimeDeserializer);
                    }
                    else {
                        obj = JSON.parse(contents);
                    }
                    response.result = obj;
                }
                response.headers = res.message.headers;
            }
            catch (err) {
                // Invalid resource (contents not json);  leaving result obj null
            }
            // note that 3xx redirects are handled by the http layer.
            if (statusCode > 299) {
                let msg;
                // if exception/error in body, attempt to get better error
                if (obj && obj.message) {
                    msg = obj.message;
                }
                else if (contents && contents.length > 0) {
                    // it may be the case that the exception is in the body message as string
                    msg = contents;
                }
                else {
                    msg = 'Failed request: (' + statusCode + ')';
                }
                let err = new HttpClientError(msg, statusCode);
                err.result = response.result;
                reject(err);
            }
            else {
                resolve(response);
            }
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ 2929:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function getProxyUrl(reqUrl) {
    let usingSsl = reqUrl.protocol === 'https:';
    let proxyUrl;
    if (checkBypass(reqUrl)) {
        return proxyUrl;
    }
    let proxyVar;
    if (usingSsl) {
        proxyVar = process.env['https_proxy'] || process.env['HTTPS_PROXY'];
    }
    else {
        proxyVar = process.env['http_proxy'] || process.env['HTTP_PROXY'];
    }
    if (proxyVar) {
        proxyUrl = new URL(proxyVar);
    }
    return proxyUrl;
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    let noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    let upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (let upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperReqHosts.some(x => x === upperNoProxyItem)) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;


/***/ }),

/***/ 3181:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

async function auth(token) {
  const tokenType = token.split(/\./).length === 3 ? "app" : /^v\d+\./.test(token) ? "installation" : "oauth";
  return {
    type: "token",
    token: token,
    tokenType
  };
}

/**
 * Prefix token for usage in the Authorization header
 *
 * @param token OAuth token or JSON Web Token
 */
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }

  return `token ${token}`;
}

async function hook(token, request, route, parameters) {
  const endpoint = request.endpoint.merge(route, parameters);
  endpoint.headers.authorization = withAuthorizationPrefix(token);
  return request(endpoint);
}

const createTokenAuth = function createTokenAuth(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }

  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }

  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};

exports.createTokenAuth = createTokenAuth;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4013:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var universalUserAgent = __nccwpck_require__(4020);
var beforeAfterHook = __nccwpck_require__(579);
var request = __nccwpck_require__(8096);
var graphql = __nccwpck_require__(4170);
var authToken = __nccwpck_require__(3181);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

const VERSION = "3.4.0";

class Octokit {
  constructor(options = {}) {
    const hook = new beforeAfterHook.Collection();
    const requestDefaults = {
      baseUrl: request.request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        // @ts-ignore internal usage only, no need to type
        hook: hook.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    }; // prepend default user agent with `options.userAgent` if set

    requestDefaults.headers["user-agent"] = [options.userAgent, `octokit-core.js/${VERSION} ${universalUserAgent.getUserAgent()}`].filter(Boolean).join(" ");

    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }

    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }

    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }

    this.request = request.request.defaults(requestDefaults);
    this.graphql = graphql.withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {},
      info: () => {},
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook; // (1) If neither `options.authStrategy` nor `options.auth` are set, the `octokit` instance
    //     is unauthenticated. The `this.auth()` method is a no-op and no request hook is registered.
    // (2) If only `options.auth` is set, use the default token authentication strategy.
    // (3) If `options.authStrategy` is set then use it and pass in `options.auth`. Always pass own request as many strategies accept a custom request instance.
    // TODO: type `options.auth` based on `options.authStrategy`.

    if (!options.authStrategy) {
      if (!options.auth) {
        // (1)
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        // (2)
        const auth = authToken.createTokenAuth(options.auth); // @ts-ignore  ¯\_(ツ)_/¯

        hook.wrap("request", auth.hook);
        this.auth = auth;
      }
    } else {
      const {
        authStrategy
      } = options,
            otherOptions = _objectWithoutProperties(options, ["authStrategy"]);

      const auth = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        // we pass the current octokit instance as well as its constructor options
        // to allow for authentication strategies that return a new octokit instance
        // that shares the same internal state as the current one. The original
        // requirement for this was the "event-octokit" authentication strategy
        // of https://github.com/probot/octokit-auth-probot.
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth)); // @ts-ignore  ¯\_(ツ)_/¯

      hook.wrap("request", auth.hook);
      this.auth = auth;
    } // apply plugins
    // https://stackoverflow.com/a/16345172


    const classConstructor = this.constructor;
    classConstructor.plugins.forEach(plugin => {
      Object.assign(this, plugin(this, options));
    });
  }

  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};

        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }

        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }

    };
    return OctokitWithDefaults;
  }
  /**
   * Attach a plugin (or many) to your Octokit instance.
   *
   * @example
   * const API = Octokit.plugin(plugin1, plugin2, plugin3, ...)
   */


  static plugin(...newPlugins) {
    var _a;

    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {}, _a.plugins = currentPlugins.concat(newPlugins.filter(plugin => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }

}
Octokit.VERSION = VERSION;
Octokit.plugins = [];

exports.Octokit = Octokit;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7879:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var isPlainObject = __nccwpck_require__(1810);
var universalUserAgent = __nccwpck_require__(4020);

function lowercaseKeys(object) {
  if (!object) {
    return {};
  }

  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}

function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach(key => {
    if (isPlainObject.isPlainObject(options[key])) {
      if (!(key in defaults)) Object.assign(result, {
        [key]: options[key]
      });else result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, {
        [key]: options[key]
      });
    }
  });
  return result;
}

function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? {
      method,
      url
    } : {
      url: method
    }, options);
  } else {
    options = Object.assign({}, route);
  } // lowercase header names before merging with defaults to avoid duplicates


  options.headers = lowercaseKeys(options.headers); // remove properties with undefined values before merging

  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options); // mediaType.previews arrays are merged, instead of overwritten

  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter(preview => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }

  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map(preview => preview.replace(/-preview/, ""));
  return mergedOptions;
}

function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  return url + separator + names.map(name => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }

    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}

const urlVariableRegex = /\{[^}]+\}/g;

function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}

function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);

  if (!matches) {
    return [];
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}

function omit(object, keysToOmit) {
  return Object.keys(object).filter(option => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}

// Based on https://github.com/bramstein/url-template, licensed under BSD
// TODO: create separate package.
//
// Copyright (c) 2012-2014, Bram Stein
// All rights reserved.
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//  1. Redistributions of source code must retain the above copyright
//     notice, this list of conditions and the following disclaimer.
//  2. Redistributions in binary form must reproduce the above copyright
//     notice, this list of conditions and the following disclaimer in the
//     documentation and/or other materials provided with the distribution.
//  3. The name of the author may not be used to endorse or promote products
//     derived from this software without specific prior written permission.
// THIS SOFTWARE IS PROVIDED BY THE AUTHOR "AS IS" AND ANY EXPRESS OR IMPLIED
// WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
// EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* istanbul ignore file */
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }

    return part;
  }).join("");
}

function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);

  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}

function isDefined(value) {
  return value !== undefined && value !== null;
}

function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}

function getValues(context, operator, key, modifier) {
  var value = context[key],
      result = [];

  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();

      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }

      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];

        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function (value) {
            tmp.push(encodeValue(operator, value));
          });
        } else {
          Object.keys(value).forEach(function (k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }

        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }

  return result;
}

function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}

function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];

      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }

      expression.split(/,/g).forEach(function (variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });

      if (operator && operator !== "+") {
        var separator = ",";

        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }

        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}

function parse(options) {
  // https://fetch.spec.whatwg.org/#methods
  let method = options.method.toUpperCase(); // replace :varname with {varname} to make it RFC 6570 compatible

  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, ["method", "baseUrl", "url", "headers", "request", "mediaType"]); // extract variable names from URL to calculate remaining variables later

  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);

  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }

  const omittedParameters = Object.keys(options).filter(option => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);

  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      // e.g. application/vnd.github.v3+json => application/vnd.github.v3.raw
      headers.accept = headers.accept.split(/,/).map(preview => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }

    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map(preview => {
        const format = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format}`;
      }).join(",");
    }
  } // for GET/HEAD requests, set URL query parameters from remaining parameters
  // for PATCH/POST/PUT/DELETE requests, set request body from remaining parameters


  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  } // default content-type for JSON if body is set


  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  } // GitHub expects 'content-length: 0' header for PUT/PATCH requests without body.
  // fetch does not allow to set `content-length` header, but we can set body to an empty string


  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  } // Only return body/request keys if present


  return Object.assign({
    method,
    url,
    headers
  }, typeof body !== "undefined" ? {
    body
  } : null, options.request ? {
    request: options.request
  } : null);
}

function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}

function withDefaults(oldDefaults, newDefaults) {
  const DEFAULTS = merge(oldDefaults, newDefaults);
  const endpoint = endpointWithDefaults.bind(null, DEFAULTS);
  return Object.assign(endpoint, {
    DEFAULTS,
    defaults: withDefaults.bind(null, DEFAULTS),
    merge: merge.bind(null, DEFAULTS),
    parse
  });
}

const VERSION = "6.0.11";

const userAgent = `octokit-endpoint.js/${VERSION} ${universalUserAgent.getUserAgent()}`; // DEFAULTS has all properties set that EndpointOptions has, except url.
// So we use RequestParameters and add method as additional required property.

const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};

const endpoint = withDefaults(null, DEFAULTS);

exports.endpoint = endpoint;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4170:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var request = __nccwpck_require__(8096);
var universalUserAgent = __nccwpck_require__(4020);

const VERSION = "4.6.1";

class GraphqlError extends Error {
  constructor(request, response) {
    const message = response.data.errors[0].message;
    super(message);
    Object.assign(this, response.data);
    Object.assign(this, {
      headers: response.headers
    });
    this.name = "GraphqlError";
    this.request = request; // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}

const NON_VARIABLE_OPTIONS = ["method", "baseUrl", "url", "headers", "request", "query", "mediaType"];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }

    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key)) continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }

  const parsedOptions = typeof query === "string" ? Object.assign({
    query
  }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }

    if (!result.variables) {
      result.variables = {};
    }

    result.variables[key] = parsedOptions[key];
    return result;
  }, {}); // workaround for GitHub Enterprise baseUrl set with /api/v3 suffix
  // https://github.com/octokit/auth-app.js/issues/111#issuecomment-657610451

  const baseUrl = parsedOptions.baseUrl || request.endpoint.DEFAULTS.baseUrl;

  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }

  return request(requestOptions).then(response => {
    if (response.data.errors) {
      const headers = {};

      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }

      throw new GraphqlError(requestOptions, {
        headers,
        data: response.data
      });
    }

    return response.data.data;
  });
}

function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);

  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };

  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.request.endpoint
  });
}

const graphql$1 = withDefaults(request.request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}

exports.graphql = graphql$1;
exports.withCustomRequest = withCustomRequest;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 2185:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

const VERSION = "2.13.3";

/**
 * Some “list” response that can be paginated have a different response structure
 *
 * They have a `total_count` key in the response (search also has `incomplete_results`,
 * /installation/repositories also has `repository_selection`), as well as a key with
 * the list of the items which name varies from endpoint to endpoint.
 *
 * Octokit normalizes these responses so that paginated results are always returned following
 * the same structure. One challenge is that if the list response has only one page, no Link
 * header is provided, so this header alone is not sufficient to check wether a response is
 * paginated or not.
 *
 * We check if a "total_count" key is present in the response data, but also make sure that
 * a "url" property is not, as the "Get the combined status for a specific ref" endpoint would
 * otherwise match: https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
 */
function normalizePaginatedListResponse(response) {
  const responseNeedsNormalization = "total_count" in response.data && !("url" in response.data);
  if (!responseNeedsNormalization) return response; // keep the additional properties intact as there is currently no other way
  // to retrieve the same information.

  const incompleteResults = response.data.incomplete_results;
  const repositorySelection = response.data.repository_selection;
  const totalCount = response.data.total_count;
  delete response.data.incomplete_results;
  delete response.data.repository_selection;
  delete response.data.total_count;
  const namespaceKey = Object.keys(response.data)[0];
  const data = response.data[namespaceKey];
  response.data = data;

  if (typeof incompleteResults !== "undefined") {
    response.data.incomplete_results = incompleteResults;
  }

  if (typeof repositorySelection !== "undefined") {
    response.data.repository_selection = repositorySelection;
  }

  response.data.total_count = totalCount;
  return response;
}

function iterator(octokit, route, parameters) {
  const options = typeof route === "function" ? route.endpoint(parameters) : octokit.request.endpoint(route, parameters);
  const requestMethod = typeof route === "function" ? route : octokit.request;
  const method = options.method;
  const headers = options.headers;
  let url = options.url;
  return {
    [Symbol.asyncIterator]: () => ({
      async next() {
        if (!url) return {
          done: true
        };
        const response = await requestMethod({
          method,
          url,
          headers
        });
        const normalizedResponse = normalizePaginatedListResponse(response); // `response.headers.link` format:
        // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
        // sets `url` to undefined if "next" URL is not present or `link` header is not set

        url = ((normalizedResponse.headers.link || "").match(/<([^>]+)>;\s*rel="next"/) || [])[1];
        return {
          value: normalizedResponse
        };
      }

    })
  };
}

function paginate(octokit, route, parameters, mapFn) {
  if (typeof parameters === "function") {
    mapFn = parameters;
    parameters = undefined;
  }

  return gather(octokit, [], iterator(octokit, route, parameters)[Symbol.asyncIterator](), mapFn);
}

function gather(octokit, results, iterator, mapFn) {
  return iterator.next().then(result => {
    if (result.done) {
      return results;
    }

    let earlyExit = false;

    function done() {
      earlyExit = true;
    }

    results = results.concat(mapFn ? mapFn(result.value, done) : result.value.data);

    if (earlyExit) {
      return results;
    }

    return gather(octokit, results, iterator, mapFn);
  });
}

const composePaginateRest = Object.assign(paginate, {
  iterator
});

const paginatingEndpoints = ["GET /app/installations", "GET /applications/grants", "GET /authorizations", "GET /enterprises/{enterprise}/actions/permissions/organizations", "GET /enterprises/{enterprise}/actions/runner-groups", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/organizations", "GET /enterprises/{enterprise}/actions/runner-groups/{runner_group_id}/runners", "GET /enterprises/{enterprise}/actions/runners", "GET /enterprises/{enterprise}/actions/runners/downloads", "GET /events", "GET /gists", "GET /gists/public", "GET /gists/starred", "GET /gists/{gist_id}/comments", "GET /gists/{gist_id}/commits", "GET /gists/{gist_id}/forks", "GET /installation/repositories", "GET /issues", "GET /marketplace_listing/plans", "GET /marketplace_listing/plans/{plan_id}/accounts", "GET /marketplace_listing/stubbed/plans", "GET /marketplace_listing/stubbed/plans/{plan_id}/accounts", "GET /networks/{owner}/{repo}/events", "GET /notifications", "GET /organizations", "GET /orgs/{org}/actions/permissions/repositories", "GET /orgs/{org}/actions/runner-groups", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/repositories", "GET /orgs/{org}/actions/runner-groups/{runner_group_id}/runners", "GET /orgs/{org}/actions/runners", "GET /orgs/{org}/actions/runners/downloads", "GET /orgs/{org}/actions/secrets", "GET /orgs/{org}/actions/secrets/{secret_name}/repositories", "GET /orgs/{org}/blocks", "GET /orgs/{org}/credential-authorizations", "GET /orgs/{org}/events", "GET /orgs/{org}/failed_invitations", "GET /orgs/{org}/hooks", "GET /orgs/{org}/installations", "GET /orgs/{org}/invitations", "GET /orgs/{org}/invitations/{invitation_id}/teams", "GET /orgs/{org}/issues", "GET /orgs/{org}/members", "GET /orgs/{org}/migrations", "GET /orgs/{org}/migrations/{migration_id}/repositories", "GET /orgs/{org}/outside_collaborators", "GET /orgs/{org}/projects", "GET /orgs/{org}/public_members", "GET /orgs/{org}/repos", "GET /orgs/{org}/team-sync/groups", "GET /orgs/{org}/teams", "GET /orgs/{org}/teams/{team_slug}/discussions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", "GET /orgs/{org}/teams/{team_slug}/invitations", "GET /orgs/{org}/teams/{team_slug}/members", "GET /orgs/{org}/teams/{team_slug}/projects", "GET /orgs/{org}/teams/{team_slug}/repos", "GET /orgs/{org}/teams/{team_slug}/team-sync/group-mappings", "GET /orgs/{org}/teams/{team_slug}/teams", "GET /projects/columns/{column_id}/cards", "GET /projects/{project_id}/collaborators", "GET /projects/{project_id}/columns", "GET /repos/{owner}/{repo}/actions/artifacts", "GET /repos/{owner}/{repo}/actions/runners", "GET /repos/{owner}/{repo}/actions/runners/downloads", "GET /repos/{owner}/{repo}/actions/runs", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts", "GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs", "GET /repos/{owner}/{repo}/actions/secrets", "GET /repos/{owner}/{repo}/actions/workflows", "GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs", "GET /repos/{owner}/{repo}/assignees", "GET /repos/{owner}/{repo}/branches", "GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations", "GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs", "GET /repos/{owner}/{repo}/code-scanning/alerts", "GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances", "GET /repos/{owner}/{repo}/code-scanning/analyses", "GET /repos/{owner}/{repo}/collaborators", "GET /repos/{owner}/{repo}/comments", "GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/commits", "GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", "GET /repos/{owner}/{repo}/commits/{commit_sha}/comments", "GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", "GET /repos/{owner}/{repo}/commits/{ref}/check-runs", "GET /repos/{owner}/{repo}/commits/{ref}/check-suites", "GET /repos/{owner}/{repo}/commits/{ref}/statuses", "GET /repos/{owner}/{repo}/contributors", "GET /repos/{owner}/{repo}/deployments", "GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses", "GET /repos/{owner}/{repo}/events", "GET /repos/{owner}/{repo}/forks", "GET /repos/{owner}/{repo}/git/matching-refs/{ref}", "GET /repos/{owner}/{repo}/hooks", "GET /repos/{owner}/{repo}/invitations", "GET /repos/{owner}/{repo}/issues", "GET /repos/{owner}/{repo}/issues/comments", "GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/issues/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/comments", "GET /repos/{owner}/{repo}/issues/{issue_number}/events", "GET /repos/{owner}/{repo}/issues/{issue_number}/labels", "GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", "GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", "GET /repos/{owner}/{repo}/keys", "GET /repos/{owner}/{repo}/labels", "GET /repos/{owner}/{repo}/milestones", "GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels", "GET /repos/{owner}/{repo}/notifications", "GET /repos/{owner}/{repo}/pages/builds", "GET /repos/{owner}/{repo}/projects", "GET /repos/{owner}/{repo}/pulls", "GET /repos/{owner}/{repo}/pulls/comments", "GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", "GET /repos/{owner}/{repo}/pulls/{pull_number}/comments", "GET /repos/{owner}/{repo}/pulls/{pull_number}/commits", "GET /repos/{owner}/{repo}/pulls/{pull_number}/files", "GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews", "GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments", "GET /repos/{owner}/{repo}/releases", "GET /repos/{owner}/{repo}/releases/{release_id}/assets", "GET /repos/{owner}/{repo}/secret-scanning/alerts", "GET /repos/{owner}/{repo}/stargazers", "GET /repos/{owner}/{repo}/subscribers", "GET /repos/{owner}/{repo}/tags", "GET /repos/{owner}/{repo}/teams", "GET /repositories", "GET /repositories/{repository_id}/environments/{environment_name}/secrets", "GET /scim/v2/enterprises/{enterprise}/Groups", "GET /scim/v2/enterprises/{enterprise}/Users", "GET /scim/v2/organizations/{org}/Users", "GET /search/code", "GET /search/commits", "GET /search/issues", "GET /search/labels", "GET /search/repositories", "GET /search/topics", "GET /search/users", "GET /teams/{team_id}/discussions", "GET /teams/{team_id}/discussions/{discussion_number}/comments", "GET /teams/{team_id}/discussions/{discussion_number}/comments/{comment_number}/reactions", "GET /teams/{team_id}/discussions/{discussion_number}/reactions", "GET /teams/{team_id}/invitations", "GET /teams/{team_id}/members", "GET /teams/{team_id}/projects", "GET /teams/{team_id}/repos", "GET /teams/{team_id}/team-sync/group-mappings", "GET /teams/{team_id}/teams", "GET /user/blocks", "GET /user/emails", "GET /user/followers", "GET /user/following", "GET /user/gpg_keys", "GET /user/installations", "GET /user/installations/{installation_id}/repositories", "GET /user/issues", "GET /user/keys", "GET /user/marketplace_purchases", "GET /user/marketplace_purchases/stubbed", "GET /user/memberships/orgs", "GET /user/migrations", "GET /user/migrations/{migration_id}/repositories", "GET /user/orgs", "GET /user/public_emails", "GET /user/repos", "GET /user/repository_invitations", "GET /user/starred", "GET /user/subscriptions", "GET /user/teams", "GET /users", "GET /users/{username}/events", "GET /users/{username}/events/orgs/{org}", "GET /users/{username}/events/public", "GET /users/{username}/followers", "GET /users/{username}/following", "GET /users/{username}/gists", "GET /users/{username}/gpg_keys", "GET /users/{username}/keys", "GET /users/{username}/orgs", "GET /users/{username}/projects", "GET /users/{username}/received_events", "GET /users/{username}/received_events/public", "GET /users/{username}/repos", "GET /users/{username}/starred", "GET /users/{username}/subscriptions"];

function isPaginatingEndpoint(arg) {
  if (typeof arg === "string") {
    return paginatingEndpoints.includes(arg);
  } else {
    return false;
  }
}

/**
 * @param octokit Octokit instance
 * @param options Options passed to Octokit constructor
 */

function paginateRest(octokit) {
  return {
    paginate: Object.assign(paginate.bind(null, octokit), {
      iterator: iterator.bind(null, octokit)
    })
  };
}
paginateRest.VERSION = VERSION;

exports.composePaginateRest = composePaginateRest;
exports.isPaginatingEndpoint = isPaginatingEndpoint;
exports.paginateRest = paginateRest;
exports.paginatingEndpoints = paginatingEndpoints;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9400:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const Endpoints = {
  actions: {
    addSelectedRepoToOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    cancelWorkflowRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/cancel"],
    createOrUpdateEnvironmentSecret: ["PUT /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    createOrUpdateOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}"],
    createOrUpdateRepoSecret: ["PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    createRegistrationTokenForOrg: ["POST /orgs/{org}/actions/runners/registration-token"],
    createRegistrationTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/registration-token"],
    createRemoveTokenForOrg: ["POST /orgs/{org}/actions/runners/remove-token"],
    createRemoveTokenForRepo: ["POST /repos/{owner}/{repo}/actions/runners/remove-token"],
    createWorkflowDispatch: ["POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches"],
    deleteArtifact: ["DELETE /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    deleteEnvironmentSecret: ["DELETE /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    deleteOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}"],
    deleteRepoSecret: ["DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    deleteSelfHostedRunnerFromOrg: ["DELETE /orgs/{org}/actions/runners/{runner_id}"],
    deleteSelfHostedRunnerFromRepo: ["DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    deleteWorkflowRun: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}"],
    deleteWorkflowRunLogs: ["DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    disableSelectedRepositoryGithubActionsOrganization: ["DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    disableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable"],
    downloadArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}"],
    downloadJobLogsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs"],
    downloadWorkflowRunLogs: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs"],
    enableSelectedRepositoryGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories/{repository_id}"],
    enableWorkflow: ["PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable"],
    getAllowedActionsOrganization: ["GET /orgs/{org}/actions/permissions/selected-actions"],
    getAllowedActionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    getArtifact: ["GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}"],
    getEnvironmentPublicKey: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/public-key"],
    getEnvironmentSecret: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets/{secret_name}"],
    getGithubActionsPermissionsOrganization: ["GET /orgs/{org}/actions/permissions"],
    getGithubActionsPermissionsRepository: ["GET /repos/{owner}/{repo}/actions/permissions"],
    getJobForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/jobs/{job_id}"],
    getOrgPublicKey: ["GET /orgs/{org}/actions/secrets/public-key"],
    getOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}"],
    getPendingDeploymentsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    getRepoPermissions: ["GET /repos/{owner}/{repo}/actions/permissions", {}, {
      renamed: ["actions", "getGithubActionsPermissionsRepository"]
    }],
    getRepoPublicKey: ["GET /repos/{owner}/{repo}/actions/secrets/public-key"],
    getRepoSecret: ["GET /repos/{owner}/{repo}/actions/secrets/{secret_name}"],
    getReviewsForRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals"],
    getSelfHostedRunnerForOrg: ["GET /orgs/{org}/actions/runners/{runner_id}"],
    getSelfHostedRunnerForRepo: ["GET /repos/{owner}/{repo}/actions/runners/{runner_id}"],
    getWorkflow: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}"],
    getWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}"],
    getWorkflowRunUsage: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing"],
    getWorkflowUsage: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing"],
    listArtifactsForRepo: ["GET /repos/{owner}/{repo}/actions/artifacts"],
    listEnvironmentSecrets: ["GET /repositories/{repository_id}/environments/{environment_name}/secrets"],
    listJobsForWorkflowRun: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs"],
    listOrgSecrets: ["GET /orgs/{org}/actions/secrets"],
    listRepoSecrets: ["GET /repos/{owner}/{repo}/actions/secrets"],
    listRepoWorkflows: ["GET /repos/{owner}/{repo}/actions/workflows"],
    listRunnerApplicationsForOrg: ["GET /orgs/{org}/actions/runners/downloads"],
    listRunnerApplicationsForRepo: ["GET /repos/{owner}/{repo}/actions/runners/downloads"],
    listSelectedReposForOrgSecret: ["GET /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    listSelectedRepositoriesEnabledGithubActionsOrganization: ["GET /orgs/{org}/actions/permissions/repositories"],
    listSelfHostedRunnersForOrg: ["GET /orgs/{org}/actions/runners"],
    listSelfHostedRunnersForRepo: ["GET /repos/{owner}/{repo}/actions/runners"],
    listWorkflowRunArtifacts: ["GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts"],
    listWorkflowRuns: ["GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs"],
    listWorkflowRunsForRepo: ["GET /repos/{owner}/{repo}/actions/runs"],
    reRunWorkflow: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun"],
    removeSelectedRepoFromOrgSecret: ["DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}"],
    reviewPendingDeploymentsForRun: ["POST /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments"],
    setAllowedActionsOrganization: ["PUT /orgs/{org}/actions/permissions/selected-actions"],
    setAllowedActionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsOrganization: ["PUT /orgs/{org}/actions/permissions"],
    setGithubActionsPermissionsRepository: ["PUT /repos/{owner}/{repo}/actions/permissions"],
    setSelectedReposForOrgSecret: ["PUT /orgs/{org}/actions/secrets/{secret_name}/repositories"],
    setSelectedRepositoriesEnabledGithubActionsOrganization: ["PUT /orgs/{org}/actions/permissions/repositories"]
  },
  activity: {
    checkRepoIsStarredByAuthenticatedUser: ["GET /user/starred/{owner}/{repo}"],
    deleteRepoSubscription: ["DELETE /repos/{owner}/{repo}/subscription"],
    deleteThreadSubscription: ["DELETE /notifications/threads/{thread_id}/subscription"],
    getFeeds: ["GET /feeds"],
    getRepoSubscription: ["GET /repos/{owner}/{repo}/subscription"],
    getThread: ["GET /notifications/threads/{thread_id}"],
    getThreadSubscriptionForAuthenticatedUser: ["GET /notifications/threads/{thread_id}/subscription"],
    listEventsForAuthenticatedUser: ["GET /users/{username}/events"],
    listNotificationsForAuthenticatedUser: ["GET /notifications"],
    listOrgEventsForAuthenticatedUser: ["GET /users/{username}/events/orgs/{org}"],
    listPublicEvents: ["GET /events"],
    listPublicEventsForRepoNetwork: ["GET /networks/{owner}/{repo}/events"],
    listPublicEventsForUser: ["GET /users/{username}/events/public"],
    listPublicOrgEvents: ["GET /orgs/{org}/events"],
    listReceivedEventsForUser: ["GET /users/{username}/received_events"],
    listReceivedPublicEventsForUser: ["GET /users/{username}/received_events/public"],
    listRepoEvents: ["GET /repos/{owner}/{repo}/events"],
    listRepoNotificationsForAuthenticatedUser: ["GET /repos/{owner}/{repo}/notifications"],
    listReposStarredByAuthenticatedUser: ["GET /user/starred"],
    listReposStarredByUser: ["GET /users/{username}/starred"],
    listReposWatchedByUser: ["GET /users/{username}/subscriptions"],
    listStargazersForRepo: ["GET /repos/{owner}/{repo}/stargazers"],
    listWatchedReposForAuthenticatedUser: ["GET /user/subscriptions"],
    listWatchersForRepo: ["GET /repos/{owner}/{repo}/subscribers"],
    markNotificationsAsRead: ["PUT /notifications"],
    markRepoNotificationsAsRead: ["PUT /repos/{owner}/{repo}/notifications"],
    markThreadAsRead: ["PATCH /notifications/threads/{thread_id}"],
    setRepoSubscription: ["PUT /repos/{owner}/{repo}/subscription"],
    setThreadSubscription: ["PUT /notifications/threads/{thread_id}/subscription"],
    starRepoForAuthenticatedUser: ["PUT /user/starred/{owner}/{repo}"],
    unstarRepoForAuthenticatedUser: ["DELETE /user/starred/{owner}/{repo}"]
  },
  apps: {
    addRepoToInstallation: ["PUT /user/installations/{installation_id}/repositories/{repository_id}"],
    checkToken: ["POST /applications/{client_id}/token"],
    createContentAttachment: ["POST /content_references/{content_reference_id}/attachments", {
      mediaType: {
        previews: ["corsair"]
      }
    }],
    createFromManifest: ["POST /app-manifests/{code}/conversions"],
    createInstallationAccessToken: ["POST /app/installations/{installation_id}/access_tokens"],
    deleteAuthorization: ["DELETE /applications/{client_id}/grant"],
    deleteInstallation: ["DELETE /app/installations/{installation_id}"],
    deleteToken: ["DELETE /applications/{client_id}/token"],
    getAuthenticated: ["GET /app"],
    getBySlug: ["GET /apps/{app_slug}"],
    getInstallation: ["GET /app/installations/{installation_id}"],
    getOrgInstallation: ["GET /orgs/{org}/installation"],
    getRepoInstallation: ["GET /repos/{owner}/{repo}/installation"],
    getSubscriptionPlanForAccount: ["GET /marketplace_listing/accounts/{account_id}"],
    getSubscriptionPlanForAccountStubbed: ["GET /marketplace_listing/stubbed/accounts/{account_id}"],
    getUserInstallation: ["GET /users/{username}/installation"],
    getWebhookConfigForApp: ["GET /app/hook/config"],
    listAccountsForPlan: ["GET /marketplace_listing/plans/{plan_id}/accounts"],
    listAccountsForPlanStubbed: ["GET /marketplace_listing/stubbed/plans/{plan_id}/accounts"],
    listInstallationReposForAuthenticatedUser: ["GET /user/installations/{installation_id}/repositories"],
    listInstallations: ["GET /app/installations"],
    listInstallationsForAuthenticatedUser: ["GET /user/installations"],
    listPlans: ["GET /marketplace_listing/plans"],
    listPlansStubbed: ["GET /marketplace_listing/stubbed/plans"],
    listReposAccessibleToInstallation: ["GET /installation/repositories"],
    listSubscriptionsForAuthenticatedUser: ["GET /user/marketplace_purchases"],
    listSubscriptionsForAuthenticatedUserStubbed: ["GET /user/marketplace_purchases/stubbed"],
    removeRepoFromInstallation: ["DELETE /user/installations/{installation_id}/repositories/{repository_id}"],
    resetToken: ["PATCH /applications/{client_id}/token"],
    revokeInstallationAccessToken: ["DELETE /installation/token"],
    scopeToken: ["POST /applications/{client_id}/token/scoped"],
    suspendInstallation: ["PUT /app/installations/{installation_id}/suspended"],
    unsuspendInstallation: ["DELETE /app/installations/{installation_id}/suspended"],
    updateWebhookConfigForApp: ["PATCH /app/hook/config"]
  },
  billing: {
    getGithubActionsBillingOrg: ["GET /orgs/{org}/settings/billing/actions"],
    getGithubActionsBillingUser: ["GET /users/{username}/settings/billing/actions"],
    getGithubPackagesBillingOrg: ["GET /orgs/{org}/settings/billing/packages"],
    getGithubPackagesBillingUser: ["GET /users/{username}/settings/billing/packages"],
    getSharedStorageBillingOrg: ["GET /orgs/{org}/settings/billing/shared-storage"],
    getSharedStorageBillingUser: ["GET /users/{username}/settings/billing/shared-storage"]
  },
  checks: {
    create: ["POST /repos/{owner}/{repo}/check-runs"],
    createSuite: ["POST /repos/{owner}/{repo}/check-suites"],
    get: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}"],
    getSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}"],
    listAnnotations: ["GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations"],
    listForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-runs"],
    listForSuite: ["GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs"],
    listSuitesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/check-suites"],
    rerequestSuite: ["POST /repos/{owner}/{repo}/check-suites/{check_suite_id}/rerequest"],
    setSuitesPreferences: ["PATCH /repos/{owner}/{repo}/check-suites/preferences"],
    update: ["PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}"]
  },
  codeScanning: {
    deleteAnalysis: ["DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}{?confirm_delete}"],
    getAlert: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}", {}, {
      renamedParameters: {
        alert_id: "alert_number"
      }
    }],
    getAnalysis: ["GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}"],
    getSarif: ["GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/code-scanning/alerts"],
    listAlertsInstances: ["GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances"],
    listRecentAnalyses: ["GET /repos/{owner}/{repo}/code-scanning/analyses"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}"],
    uploadSarif: ["POST /repos/{owner}/{repo}/code-scanning/sarifs"]
  },
  codesOfConduct: {
    getAllCodesOfConduct: ["GET /codes_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getConductCode: ["GET /codes_of_conduct/{key}", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }],
    getForRepo: ["GET /repos/{owner}/{repo}/community/code_of_conduct", {
      mediaType: {
        previews: ["scarlet-witch"]
      }
    }]
  },
  emojis: {
    get: ["GET /emojis"]
  },
  enterpriseAdmin: {
    disableSelectedOrganizationGithubActionsEnterprise: ["DELETE /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    enableSelectedOrganizationGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations/{org_id}"],
    getAllowedActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/selected-actions"],
    getGithubActionsPermissionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions"],
    listSelectedOrganizationsEnabledGithubActionsEnterprise: ["GET /enterprises/{enterprise}/actions/permissions/organizations"],
    setAllowedActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/selected-actions"],
    setGithubActionsPermissionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions"],
    setSelectedOrganizationsEnabledGithubActionsEnterprise: ["PUT /enterprises/{enterprise}/actions/permissions/organizations"]
  },
  gists: {
    checkIsStarred: ["GET /gists/{gist_id}/star"],
    create: ["POST /gists"],
    createComment: ["POST /gists/{gist_id}/comments"],
    delete: ["DELETE /gists/{gist_id}"],
    deleteComment: ["DELETE /gists/{gist_id}/comments/{comment_id}"],
    fork: ["POST /gists/{gist_id}/forks"],
    get: ["GET /gists/{gist_id}"],
    getComment: ["GET /gists/{gist_id}/comments/{comment_id}"],
    getRevision: ["GET /gists/{gist_id}/{sha}"],
    list: ["GET /gists"],
    listComments: ["GET /gists/{gist_id}/comments"],
    listCommits: ["GET /gists/{gist_id}/commits"],
    listForUser: ["GET /users/{username}/gists"],
    listForks: ["GET /gists/{gist_id}/forks"],
    listPublic: ["GET /gists/public"],
    listStarred: ["GET /gists/starred"],
    star: ["PUT /gists/{gist_id}/star"],
    unstar: ["DELETE /gists/{gist_id}/star"],
    update: ["PATCH /gists/{gist_id}"],
    updateComment: ["PATCH /gists/{gist_id}/comments/{comment_id}"]
  },
  git: {
    createBlob: ["POST /repos/{owner}/{repo}/git/blobs"],
    createCommit: ["POST /repos/{owner}/{repo}/git/commits"],
    createRef: ["POST /repos/{owner}/{repo}/git/refs"],
    createTag: ["POST /repos/{owner}/{repo}/git/tags"],
    createTree: ["POST /repos/{owner}/{repo}/git/trees"],
    deleteRef: ["DELETE /repos/{owner}/{repo}/git/refs/{ref}"],
    getBlob: ["GET /repos/{owner}/{repo}/git/blobs/{file_sha}"],
    getCommit: ["GET /repos/{owner}/{repo}/git/commits/{commit_sha}"],
    getRef: ["GET /repos/{owner}/{repo}/git/ref/{ref}"],
    getTag: ["GET /repos/{owner}/{repo}/git/tags/{tag_sha}"],
    getTree: ["GET /repos/{owner}/{repo}/git/trees/{tree_sha}"],
    listMatchingRefs: ["GET /repos/{owner}/{repo}/git/matching-refs/{ref}"],
    updateRef: ["PATCH /repos/{owner}/{repo}/git/refs/{ref}"]
  },
  gitignore: {
    getAllTemplates: ["GET /gitignore/templates"],
    getTemplate: ["GET /gitignore/templates/{name}"]
  },
  interactions: {
    getRestrictionsForAuthenticatedUser: ["GET /user/interaction-limits"],
    getRestrictionsForOrg: ["GET /orgs/{org}/interaction-limits"],
    getRestrictionsForRepo: ["GET /repos/{owner}/{repo}/interaction-limits"],
    getRestrictionsForYourPublicRepos: ["GET /user/interaction-limits", {}, {
      renamed: ["interactions", "getRestrictionsForAuthenticatedUser"]
    }],
    removeRestrictionsForAuthenticatedUser: ["DELETE /user/interaction-limits"],
    removeRestrictionsForOrg: ["DELETE /orgs/{org}/interaction-limits"],
    removeRestrictionsForRepo: ["DELETE /repos/{owner}/{repo}/interaction-limits"],
    removeRestrictionsForYourPublicRepos: ["DELETE /user/interaction-limits", {}, {
      renamed: ["interactions", "removeRestrictionsForAuthenticatedUser"]
    }],
    setRestrictionsForAuthenticatedUser: ["PUT /user/interaction-limits"],
    setRestrictionsForOrg: ["PUT /orgs/{org}/interaction-limits"],
    setRestrictionsForRepo: ["PUT /repos/{owner}/{repo}/interaction-limits"],
    setRestrictionsForYourPublicRepos: ["PUT /user/interaction-limits", {}, {
      renamed: ["interactions", "setRestrictionsForAuthenticatedUser"]
    }]
  },
  issues: {
    addAssignees: ["POST /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    addLabels: ["POST /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    checkUserCanBeAssigned: ["GET /repos/{owner}/{repo}/assignees/{assignee}"],
    create: ["POST /repos/{owner}/{repo}/issues"],
    createComment: ["POST /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    createLabel: ["POST /repos/{owner}/{repo}/labels"],
    createMilestone: ["POST /repos/{owner}/{repo}/milestones"],
    deleteComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    deleteLabel: ["DELETE /repos/{owner}/{repo}/labels/{name}"],
    deleteMilestone: ["DELETE /repos/{owner}/{repo}/milestones/{milestone_number}"],
    get: ["GET /repos/{owner}/{repo}/issues/{issue_number}"],
    getComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    getEvent: ["GET /repos/{owner}/{repo}/issues/events/{event_id}"],
    getLabel: ["GET /repos/{owner}/{repo}/labels/{name}"],
    getMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}"],
    list: ["GET /issues"],
    listAssignees: ["GET /repos/{owner}/{repo}/assignees"],
    listComments: ["GET /repos/{owner}/{repo}/issues/{issue_number}/comments"],
    listCommentsForRepo: ["GET /repos/{owner}/{repo}/issues/comments"],
    listEvents: ["GET /repos/{owner}/{repo}/issues/{issue_number}/events"],
    listEventsForRepo: ["GET /repos/{owner}/{repo}/issues/events"],
    listEventsForTimeline: ["GET /repos/{owner}/{repo}/issues/{issue_number}/timeline", {
      mediaType: {
        previews: ["mockingbird"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/issues"],
    listForOrg: ["GET /orgs/{org}/issues"],
    listForRepo: ["GET /repos/{owner}/{repo}/issues"],
    listLabelsForMilestone: ["GET /repos/{owner}/{repo}/milestones/{milestone_number}/labels"],
    listLabelsForRepo: ["GET /repos/{owner}/{repo}/labels"],
    listLabelsOnIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    listMilestones: ["GET /repos/{owner}/{repo}/milestones"],
    lock: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    removeAllLabels: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    removeAssignees: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees"],
    removeLabel: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels/{name}"],
    setLabels: ["PUT /repos/{owner}/{repo}/issues/{issue_number}/labels"],
    unlock: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/lock"],
    update: ["PATCH /repos/{owner}/{repo}/issues/{issue_number}"],
    updateComment: ["PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}"],
    updateLabel: ["PATCH /repos/{owner}/{repo}/labels/{name}"],
    updateMilestone: ["PATCH /repos/{owner}/{repo}/milestones/{milestone_number}"]
  },
  licenses: {
    get: ["GET /licenses/{license}"],
    getAllCommonlyUsed: ["GET /licenses"],
    getForRepo: ["GET /repos/{owner}/{repo}/license"]
  },
  markdown: {
    render: ["POST /markdown"],
    renderRaw: ["POST /markdown/raw", {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    }]
  },
  meta: {
    get: ["GET /meta"],
    getOctocat: ["GET /octocat"],
    getZen: ["GET /zen"],
    root: ["GET /"]
  },
  migrations: {
    cancelImport: ["DELETE /repos/{owner}/{repo}/import"],
    deleteArchiveForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    deleteArchiveForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    downloadArchiveForOrg: ["GET /orgs/{org}/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getArchiveForAuthenticatedUser: ["GET /user/migrations/{migration_id}/archive", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getCommitAuthors: ["GET /repos/{owner}/{repo}/import/authors"],
    getImportStatus: ["GET /repos/{owner}/{repo}/import"],
    getLargeFiles: ["GET /repos/{owner}/{repo}/import/large_files"],
    getStatusForAuthenticatedUser: ["GET /user/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    getStatusForOrg: ["GET /orgs/{org}/migrations/{migration_id}", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForAuthenticatedUser: ["GET /user/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/migrations", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForOrg: ["GET /orgs/{org}/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    listReposForUser: ["GET /user/migrations/{migration_id}/repositories", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    mapCommitAuthor: ["PATCH /repos/{owner}/{repo}/import/authors/{author_id}"],
    setLfsPreference: ["PATCH /repos/{owner}/{repo}/import/lfs"],
    startForAuthenticatedUser: ["POST /user/migrations"],
    startForOrg: ["POST /orgs/{org}/migrations"],
    startImport: ["PUT /repos/{owner}/{repo}/import"],
    unlockRepoForAuthenticatedUser: ["DELETE /user/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    unlockRepoForOrg: ["DELETE /orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", {
      mediaType: {
        previews: ["wyandotte"]
      }
    }],
    updateImport: ["PATCH /repos/{owner}/{repo}/import"]
  },
  orgs: {
    blockUser: ["PUT /orgs/{org}/blocks/{username}"],
    cancelInvitation: ["DELETE /orgs/{org}/invitations/{invitation_id}"],
    checkBlockedUser: ["GET /orgs/{org}/blocks/{username}"],
    checkMembershipForUser: ["GET /orgs/{org}/members/{username}"],
    checkPublicMembershipForUser: ["GET /orgs/{org}/public_members/{username}"],
    convertMemberToOutsideCollaborator: ["PUT /orgs/{org}/outside_collaborators/{username}"],
    createInvitation: ["POST /orgs/{org}/invitations"],
    createWebhook: ["POST /orgs/{org}/hooks"],
    deleteWebhook: ["DELETE /orgs/{org}/hooks/{hook_id}"],
    get: ["GET /orgs/{org}"],
    getMembershipForAuthenticatedUser: ["GET /user/memberships/orgs/{org}"],
    getMembershipForUser: ["GET /orgs/{org}/memberships/{username}"],
    getWebhook: ["GET /orgs/{org}/hooks/{hook_id}"],
    getWebhookConfigForOrg: ["GET /orgs/{org}/hooks/{hook_id}/config"],
    list: ["GET /organizations"],
    listAppInstallations: ["GET /orgs/{org}/installations"],
    listBlockedUsers: ["GET /orgs/{org}/blocks"],
    listFailedInvitations: ["GET /orgs/{org}/failed_invitations"],
    listForAuthenticatedUser: ["GET /user/orgs"],
    listForUser: ["GET /users/{username}/orgs"],
    listInvitationTeams: ["GET /orgs/{org}/invitations/{invitation_id}/teams"],
    listMembers: ["GET /orgs/{org}/members"],
    listMembershipsForAuthenticatedUser: ["GET /user/memberships/orgs"],
    listOutsideCollaborators: ["GET /orgs/{org}/outside_collaborators"],
    listPendingInvitations: ["GET /orgs/{org}/invitations"],
    listPublicMembers: ["GET /orgs/{org}/public_members"],
    listWebhooks: ["GET /orgs/{org}/hooks"],
    pingWebhook: ["POST /orgs/{org}/hooks/{hook_id}/pings"],
    removeMember: ["DELETE /orgs/{org}/members/{username}"],
    removeMembershipForUser: ["DELETE /orgs/{org}/memberships/{username}"],
    removeOutsideCollaborator: ["DELETE /orgs/{org}/outside_collaborators/{username}"],
    removePublicMembershipForAuthenticatedUser: ["DELETE /orgs/{org}/public_members/{username}"],
    setMembershipForUser: ["PUT /orgs/{org}/memberships/{username}"],
    setPublicMembershipForAuthenticatedUser: ["PUT /orgs/{org}/public_members/{username}"],
    unblockUser: ["DELETE /orgs/{org}/blocks/{username}"],
    update: ["PATCH /orgs/{org}"],
    updateMembershipForAuthenticatedUser: ["PATCH /user/memberships/orgs/{org}"],
    updateWebhook: ["PATCH /orgs/{org}/hooks/{hook_id}"],
    updateWebhookConfigForOrg: ["PATCH /orgs/{org}/hooks/{hook_id}/config"]
  },
  packages: {
    deletePackageForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}"],
    deletePackageForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}"],
    deletePackageVersionForAuthenticatedUser: ["DELETE /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    deletePackageVersionForOrg: ["DELETE /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getAllPackageVersionsForAPackageOwnedByAnOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByOrg"]
    }],
    getAllPackageVersionsForAPackageOwnedByTheAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions", {}, {
      renamed: ["packages", "getAllPackageVersionsForPackageOwnedByAuthenticatedUser"]
    }],
    getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByOrg: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions"],
    getAllPackageVersionsForPackageOwnedByUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions"],
    getPackageForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}"],
    getPackageForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}"],
    getPackageForUser: ["GET /users/{username}/packages/{package_type}/{package_name}"],
    getPackageVersionForAuthenticatedUser: ["GET /user/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForOrganization: ["GET /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    getPackageVersionForUser: ["GET /users/{username}/packages/{package_type}/{package_name}/versions/{package_version_id}"],
    restorePackageForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/restore{?token}"],
    restorePackageVersionForAuthenticatedUser: ["POST /user/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"],
    restorePackageVersionForOrg: ["POST /orgs/{org}/packages/{package_type}/{package_name}/versions/{package_version_id}/restore"]
  },
  projects: {
    addCollaborator: ["PUT /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createCard: ["POST /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createColumn: ["POST /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForAuthenticatedUser: ["POST /user/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForOrg: ["POST /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    createForRepo: ["POST /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    delete: ["DELETE /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteCard: ["DELETE /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    deleteColumn: ["DELETE /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    get: ["GET /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getCard: ["GET /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getColumn: ["GET /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    getPermissionForUser: ["GET /projects/{project_id}/collaborators/{username}/permission", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCards: ["GET /projects/columns/{column_id}/cards", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listCollaborators: ["GET /projects/{project_id}/collaborators", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listColumns: ["GET /projects/{project_id}/columns", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForOrg: ["GET /orgs/{org}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForRepo: ["GET /repos/{owner}/{repo}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listForUser: ["GET /users/{username}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveCard: ["POST /projects/columns/cards/{card_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    moveColumn: ["POST /projects/columns/{column_id}/moves", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    removeCollaborator: ["DELETE /projects/{project_id}/collaborators/{username}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    update: ["PATCH /projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateCard: ["PATCH /projects/columns/cards/{card_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    updateColumn: ["PATCH /projects/columns/{column_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }]
  },
  pulls: {
    checkIfMerged: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    create: ["POST /repos/{owner}/{repo}/pulls"],
    createReplyForReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies"],
    createReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    createReviewComment: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    deletePendingReview: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    deleteReviewComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    dismissReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals"],
    get: ["GET /repos/{owner}/{repo}/pulls/{pull_number}"],
    getReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    getReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}"],
    list: ["GET /repos/{owner}/{repo}/pulls"],
    listCommentsForReview: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments"],
    listCommits: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/commits"],
    listFiles: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/files"],
    listRequestedReviewers: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    listReviewComments: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/comments"],
    listReviewCommentsForRepo: ["GET /repos/{owner}/{repo}/pulls/comments"],
    listReviews: ["GET /repos/{owner}/{repo}/pulls/{pull_number}/reviews"],
    merge: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/merge"],
    removeRequestedReviewers: ["DELETE /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    requestReviewers: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/requested_reviewers"],
    submitReview: ["POST /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/events"],
    update: ["PATCH /repos/{owner}/{repo}/pulls/{pull_number}"],
    updateBranch: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/update-branch", {
      mediaType: {
        previews: ["lydian"]
      }
    }],
    updateReview: ["PUT /repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}"],
    updateReviewComment: ["PATCH /repos/{owner}/{repo}/pulls/comments/{comment_id}"]
  },
  rateLimit: {
    get: ["GET /rate_limit"]
  },
  reactions: {
    createForCommitComment: ["POST /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssue: ["POST /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForIssueComment: ["POST /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForPullRequestReviewComment: ["POST /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    createForTeamDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssue: ["DELETE /repos/{owner}/{repo}/issues/{issue_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForIssueComment: ["DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForPullRequestComment: ["DELETE /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussion: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteForTeamDiscussionComment: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    deleteLegacy: ["DELETE /reactions/{reaction_id}", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }, {
      deprecated: "octokit.rest.reactions.deleteLegacy() is deprecated, see https://docs.github.com/rest/reference/reactions/#delete-a-reaction-legacy"
    }],
    listForCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssue: ["GET /repos/{owner}/{repo}/issues/{issue_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForIssueComment: ["GET /repos/{owner}/{repo}/issues/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForPullRequestReviewComment: ["GET /repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }],
    listForTeamDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/reactions", {
      mediaType: {
        previews: ["squirrel-girl"]
      }
    }]
  },
  repos: {
    acceptInvitation: ["PATCH /user/repository_invitations/{invitation_id}"],
    addAppAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    addCollaborator: ["PUT /repos/{owner}/{repo}/collaborators/{username}"],
    addStatusCheckContexts: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    addTeamAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    addUserAccessRestrictions: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    checkCollaborator: ["GET /repos/{owner}/{repo}/collaborators/{username}"],
    checkVulnerabilityAlerts: ["GET /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    compareCommits: ["GET /repos/{owner}/{repo}/compare/{base}...{head}"],
    createCommitComment: ["POST /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    createCommitSignatureProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    createCommitStatus: ["POST /repos/{owner}/{repo}/statuses/{sha}"],
    createDeployKey: ["POST /repos/{owner}/{repo}/keys"],
    createDeployment: ["POST /repos/{owner}/{repo}/deployments"],
    createDeploymentStatus: ["POST /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    createDispatchEvent: ["POST /repos/{owner}/{repo}/dispatches"],
    createForAuthenticatedUser: ["POST /user/repos"],
    createFork: ["POST /repos/{owner}/{repo}/forks"],
    createInOrg: ["POST /orgs/{org}/repos"],
    createOrUpdateEnvironment: ["PUT /repos/{owner}/{repo}/environments/{environment_name}"],
    createOrUpdateFileContents: ["PUT /repos/{owner}/{repo}/contents/{path}"],
    createPagesSite: ["POST /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    createRelease: ["POST /repos/{owner}/{repo}/releases"],
    createUsingTemplate: ["POST /repos/{template_owner}/{template_repo}/generate", {
      mediaType: {
        previews: ["baptiste"]
      }
    }],
    createWebhook: ["POST /repos/{owner}/{repo}/hooks"],
    declineInvitation: ["DELETE /user/repository_invitations/{invitation_id}"],
    delete: ["DELETE /repos/{owner}/{repo}"],
    deleteAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    deleteAdminBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    deleteAnEnvironment: ["DELETE /repos/{owner}/{repo}/environments/{environment_name}"],
    deleteBranchProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection"],
    deleteCommitComment: ["DELETE /repos/{owner}/{repo}/comments/{comment_id}"],
    deleteCommitSignatureProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    deleteDeployKey: ["DELETE /repos/{owner}/{repo}/keys/{key_id}"],
    deleteDeployment: ["DELETE /repos/{owner}/{repo}/deployments/{deployment_id}"],
    deleteFile: ["DELETE /repos/{owner}/{repo}/contents/{path}"],
    deleteInvitation: ["DELETE /repos/{owner}/{repo}/invitations/{invitation_id}"],
    deletePagesSite: ["DELETE /repos/{owner}/{repo}/pages", {
      mediaType: {
        previews: ["switcheroo"]
      }
    }],
    deletePullRequestReviewProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    deleteRelease: ["DELETE /repos/{owner}/{repo}/releases/{release_id}"],
    deleteReleaseAsset: ["DELETE /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    deleteWebhook: ["DELETE /repos/{owner}/{repo}/hooks/{hook_id}"],
    disableAutomatedSecurityFixes: ["DELETE /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    disableVulnerabilityAlerts: ["DELETE /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    downloadArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}", {}, {
      renamed: ["repos", "downloadZipballArchive"]
    }],
    downloadTarballArchive: ["GET /repos/{owner}/{repo}/tarball/{ref}"],
    downloadZipballArchive: ["GET /repos/{owner}/{repo}/zipball/{ref}"],
    enableAutomatedSecurityFixes: ["PUT /repos/{owner}/{repo}/automated-security-fixes", {
      mediaType: {
        previews: ["london"]
      }
    }],
    enableVulnerabilityAlerts: ["PUT /repos/{owner}/{repo}/vulnerability-alerts", {
      mediaType: {
        previews: ["dorian"]
      }
    }],
    get: ["GET /repos/{owner}/{repo}"],
    getAccessRestrictions: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions"],
    getAdminBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    getAllEnvironments: ["GET /repos/{owner}/{repo}/environments"],
    getAllStatusCheckContexts: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts"],
    getAllTopics: ["GET /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    getAppsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps"],
    getBranch: ["GET /repos/{owner}/{repo}/branches/{branch}"],
    getBranchProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection"],
    getClones: ["GET /repos/{owner}/{repo}/traffic/clones"],
    getCodeFrequencyStats: ["GET /repos/{owner}/{repo}/stats/code_frequency"],
    getCollaboratorPermissionLevel: ["GET /repos/{owner}/{repo}/collaborators/{username}/permission"],
    getCombinedStatusForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/status"],
    getCommit: ["GET /repos/{owner}/{repo}/commits/{ref}"],
    getCommitActivityStats: ["GET /repos/{owner}/{repo}/stats/commit_activity"],
    getCommitComment: ["GET /repos/{owner}/{repo}/comments/{comment_id}"],
    getCommitSignatureProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures", {
      mediaType: {
        previews: ["zzzax"]
      }
    }],
    getCommunityProfileMetrics: ["GET /repos/{owner}/{repo}/community/profile"],
    getContent: ["GET /repos/{owner}/{repo}/contents/{path}"],
    getContributorsStats: ["GET /repos/{owner}/{repo}/stats/contributors"],
    getDeployKey: ["GET /repos/{owner}/{repo}/keys/{key_id}"],
    getDeployment: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}"],
    getDeploymentStatus: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}"],
    getEnvironment: ["GET /repos/{owner}/{repo}/environments/{environment_name}"],
    getLatestPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/latest"],
    getLatestRelease: ["GET /repos/{owner}/{repo}/releases/latest"],
    getPages: ["GET /repos/{owner}/{repo}/pages"],
    getPagesBuild: ["GET /repos/{owner}/{repo}/pages/builds/{build_id}"],
    getParticipationStats: ["GET /repos/{owner}/{repo}/stats/participation"],
    getPullRequestReviewProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    getPunchCardStats: ["GET /repos/{owner}/{repo}/stats/punch_card"],
    getReadme: ["GET /repos/{owner}/{repo}/readme"],
    getReadmeInDirectory: ["GET /repos/{owner}/{repo}/readme/{dir}"],
    getRelease: ["GET /repos/{owner}/{repo}/releases/{release_id}"],
    getReleaseAsset: ["GET /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    getReleaseByTag: ["GET /repos/{owner}/{repo}/releases/tags/{tag}"],
    getStatusChecksProtection: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    getTeamsWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams"],
    getTopPaths: ["GET /repos/{owner}/{repo}/traffic/popular/paths"],
    getTopReferrers: ["GET /repos/{owner}/{repo}/traffic/popular/referrers"],
    getUsersWithAccessToProtectedBranch: ["GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users"],
    getViews: ["GET /repos/{owner}/{repo}/traffic/views"],
    getWebhook: ["GET /repos/{owner}/{repo}/hooks/{hook_id}"],
    getWebhookConfigForRepo: ["GET /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    listBranches: ["GET /repos/{owner}/{repo}/branches"],
    listBranchesForHeadCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listCollaborators: ["GET /repos/{owner}/{repo}/collaborators"],
    listCommentsForCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/comments"],
    listCommitCommentsForRepo: ["GET /repos/{owner}/{repo}/comments"],
    listCommitStatusesForRef: ["GET /repos/{owner}/{repo}/commits/{ref}/statuses"],
    listCommits: ["GET /repos/{owner}/{repo}/commits"],
    listContributors: ["GET /repos/{owner}/{repo}/contributors"],
    listDeployKeys: ["GET /repos/{owner}/{repo}/keys"],
    listDeploymentStatuses: ["GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses"],
    listDeployments: ["GET /repos/{owner}/{repo}/deployments"],
    listForAuthenticatedUser: ["GET /user/repos"],
    listForOrg: ["GET /orgs/{org}/repos"],
    listForUser: ["GET /users/{username}/repos"],
    listForks: ["GET /repos/{owner}/{repo}/forks"],
    listInvitations: ["GET /repos/{owner}/{repo}/invitations"],
    listInvitationsForAuthenticatedUser: ["GET /user/repository_invitations"],
    listLanguages: ["GET /repos/{owner}/{repo}/languages"],
    listPagesBuilds: ["GET /repos/{owner}/{repo}/pages/builds"],
    listPublic: ["GET /repositories"],
    listPullRequestsAssociatedWithCommit: ["GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls", {
      mediaType: {
        previews: ["groot"]
      }
    }],
    listReleaseAssets: ["GET /repos/{owner}/{repo}/releases/{release_id}/assets"],
    listReleases: ["GET /repos/{owner}/{repo}/releases"],
    listTags: ["GET /repos/{owner}/{repo}/tags"],
    listTeams: ["GET /repos/{owner}/{repo}/teams"],
    listWebhooks: ["GET /repos/{owner}/{repo}/hooks"],
    merge: ["POST /repos/{owner}/{repo}/merges"],
    pingWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/pings"],
    removeAppAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    removeCollaborator: ["DELETE /repos/{owner}/{repo}/collaborators/{username}"],
    removeStatusCheckContexts: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    removeStatusCheckProtection: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    removeTeamAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    removeUserAccessRestrictions: ["DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    renameBranch: ["POST /repos/{owner}/{repo}/branches/{branch}/rename"],
    replaceAllTopics: ["PUT /repos/{owner}/{repo}/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    requestPagesBuild: ["POST /repos/{owner}/{repo}/pages/builds"],
    setAdminBranchProtection: ["POST /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins"],
    setAppAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps", {}, {
      mapToData: "apps"
    }],
    setStatusCheckContexts: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts", {}, {
      mapToData: "contexts"
    }],
    setTeamAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams", {}, {
      mapToData: "teams"
    }],
    setUserAccessRestrictions: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users", {}, {
      mapToData: "users"
    }],
    testPushWebhook: ["POST /repos/{owner}/{repo}/hooks/{hook_id}/tests"],
    transfer: ["POST /repos/{owner}/{repo}/transfer"],
    update: ["PATCH /repos/{owner}/{repo}"],
    updateBranchProtection: ["PUT /repos/{owner}/{repo}/branches/{branch}/protection"],
    updateCommitComment: ["PATCH /repos/{owner}/{repo}/comments/{comment_id}"],
    updateInformationAboutPagesSite: ["PUT /repos/{owner}/{repo}/pages"],
    updateInvitation: ["PATCH /repos/{owner}/{repo}/invitations/{invitation_id}"],
    updatePullRequestReviewProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_pull_request_reviews"],
    updateRelease: ["PATCH /repos/{owner}/{repo}/releases/{release_id}"],
    updateReleaseAsset: ["PATCH /repos/{owner}/{repo}/releases/assets/{asset_id}"],
    updateStatusCheckPotection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks", {}, {
      renamed: ["repos", "updateStatusCheckProtection"]
    }],
    updateStatusCheckProtection: ["PATCH /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks"],
    updateWebhook: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}"],
    updateWebhookConfigForRepo: ["PATCH /repos/{owner}/{repo}/hooks/{hook_id}/config"],
    uploadReleaseAsset: ["POST /repos/{owner}/{repo}/releases/{release_id}/assets{?name,label}", {
      baseUrl: "https://uploads.github.com"
    }]
  },
  search: {
    code: ["GET /search/code"],
    commits: ["GET /search/commits", {
      mediaType: {
        previews: ["cloak"]
      }
    }],
    issuesAndPullRequests: ["GET /search/issues"],
    labels: ["GET /search/labels"],
    repos: ["GET /search/repositories"],
    topics: ["GET /search/topics", {
      mediaType: {
        previews: ["mercy"]
      }
    }],
    users: ["GET /search/users"]
  },
  secretScanning: {
    getAlert: ["GET /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"],
    listAlertsForRepo: ["GET /repos/{owner}/{repo}/secret-scanning/alerts"],
    updateAlert: ["PATCH /repos/{owner}/{repo}/secret-scanning/alerts/{alert_number}"]
  },
  teams: {
    addOrUpdateMembershipForUserInOrg: ["PUT /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    addOrUpdateProjectPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    addOrUpdateRepoPermissionsInOrg: ["PUT /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    checkPermissionsForProjectInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects/{project_id}", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    checkPermissionsForRepoInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    create: ["POST /orgs/{org}/teams"],
    createDiscussionCommentInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    createDiscussionInOrg: ["POST /orgs/{org}/teams/{team_slug}/discussions"],
    deleteDiscussionCommentInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    deleteDiscussionInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    deleteInOrg: ["DELETE /orgs/{org}/teams/{team_slug}"],
    getByName: ["GET /orgs/{org}/teams/{team_slug}"],
    getDiscussionCommentInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    getDiscussionInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    getMembershipForUserInOrg: ["GET /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    list: ["GET /orgs/{org}/teams"],
    listChildInOrg: ["GET /orgs/{org}/teams/{team_slug}/teams"],
    listDiscussionCommentsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments"],
    listDiscussionsInOrg: ["GET /orgs/{org}/teams/{team_slug}/discussions"],
    listForAuthenticatedUser: ["GET /user/teams"],
    listMembersInOrg: ["GET /orgs/{org}/teams/{team_slug}/members"],
    listPendingInvitationsInOrg: ["GET /orgs/{org}/teams/{team_slug}/invitations"],
    listProjectsInOrg: ["GET /orgs/{org}/teams/{team_slug}/projects", {
      mediaType: {
        previews: ["inertia"]
      }
    }],
    listReposInOrg: ["GET /orgs/{org}/teams/{team_slug}/repos"],
    removeMembershipForUserInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/memberships/{username}"],
    removeProjectInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/projects/{project_id}"],
    removeRepoInOrg: ["DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}"],
    updateDiscussionCommentInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}"],
    updateDiscussionInOrg: ["PATCH /orgs/{org}/teams/{team_slug}/discussions/{discussion_number}"],
    updateInOrg: ["PATCH /orgs/{org}/teams/{team_slug}"]
  },
  users: {
    addEmailForAuthenticated: ["POST /user/emails"],
    block: ["PUT /user/blocks/{username}"],
    checkBlocked: ["GET /user/blocks/{username}"],
    checkFollowingForUser: ["GET /users/{username}/following/{target_user}"],
    checkPersonIsFollowedByAuthenticated: ["GET /user/following/{username}"],
    createGpgKeyForAuthenticated: ["POST /user/gpg_keys"],
    createPublicSshKeyForAuthenticated: ["POST /user/keys"],
    deleteEmailForAuthenticated: ["DELETE /user/emails"],
    deleteGpgKeyForAuthenticated: ["DELETE /user/gpg_keys/{gpg_key_id}"],
    deletePublicSshKeyForAuthenticated: ["DELETE /user/keys/{key_id}"],
    follow: ["PUT /user/following/{username}"],
    getAuthenticated: ["GET /user"],
    getByUsername: ["GET /users/{username}"],
    getContextForUser: ["GET /users/{username}/hovercard"],
    getGpgKeyForAuthenticated: ["GET /user/gpg_keys/{gpg_key_id}"],
    getPublicSshKeyForAuthenticated: ["GET /user/keys/{key_id}"],
    list: ["GET /users"],
    listBlockedByAuthenticated: ["GET /user/blocks"],
    listEmailsForAuthenticated: ["GET /user/emails"],
    listFollowedByAuthenticated: ["GET /user/following"],
    listFollowersForAuthenticatedUser: ["GET /user/followers"],
    listFollowersForUser: ["GET /users/{username}/followers"],
    listFollowingForUser: ["GET /users/{username}/following"],
    listGpgKeysForAuthenticated: ["GET /user/gpg_keys"],
    listGpgKeysForUser: ["GET /users/{username}/gpg_keys"],
    listPublicEmailsForAuthenticated: ["GET /user/public_emails"],
    listPublicKeysForUser: ["GET /users/{username}/keys"],
    listPublicSshKeysForAuthenticated: ["GET /user/keys"],
    setPrimaryEmailVisibilityForAuthenticated: ["PATCH /user/email/visibility"],
    unblock: ["DELETE /user/blocks/{username}"],
    unfollow: ["DELETE /user/following/{username}"],
    updateAuthenticated: ["PATCH /user"]
  }
};

const VERSION = "4.15.1";

function endpointsToMethods(octokit, endpointsMap) {
  const newMethods = {};

  for (const [scope, endpoints] of Object.entries(endpointsMap)) {
    for (const [methodName, endpoint] of Object.entries(endpoints)) {
      const [route, defaults, decorations] = endpoint;
      const [method, url] = route.split(/ /);
      const endpointDefaults = Object.assign({
        method,
        url
      }, defaults);

      if (!newMethods[scope]) {
        newMethods[scope] = {};
      }

      const scopeMethods = newMethods[scope];

      if (decorations) {
        scopeMethods[methodName] = decorate(octokit, scope, methodName, endpointDefaults, decorations);
        continue;
      }

      scopeMethods[methodName] = octokit.request.defaults(endpointDefaults);
    }
  }

  return newMethods;
}

function decorate(octokit, scope, methodName, defaults, decorations) {
  const requestWithDefaults = octokit.request.defaults(defaults);
  /* istanbul ignore next */

  function withDecorations(...args) {
    // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
    let options = requestWithDefaults.endpoint.merge(...args); // There are currently no other decorations than `.mapToData`

    if (decorations.mapToData) {
      options = Object.assign({}, options, {
        data: options[decorations.mapToData],
        [decorations.mapToData]: undefined
      });
      return requestWithDefaults(options);
    }

    if (decorations.renamed) {
      const [newScope, newMethodName] = decorations.renamed;
      octokit.log.warn(`octokit.${scope}.${methodName}() has been renamed to octokit.${newScope}.${newMethodName}()`);
    }

    if (decorations.deprecated) {
      octokit.log.warn(decorations.deprecated);
    }

    if (decorations.renamedParameters) {
      // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488
      const options = requestWithDefaults.endpoint.merge(...args);

      for (const [name, alias] of Object.entries(decorations.renamedParameters)) {
        if (name in options) {
          octokit.log.warn(`"${name}" parameter is deprecated for "octokit.${scope}.${methodName}()". Use "${alias}" instead`);

          if (!(alias in options)) {
            options[alias] = options[name];
          }

          delete options[name];
        }
      }

      return requestWithDefaults(options);
    } // @ts-ignore https://github.com/microsoft/TypeScript/issues/25488


    return requestWithDefaults(...args);
  }

  return Object.assign(withDecorations, requestWithDefaults);
}

function restEndpointMethods(octokit) {
  const api = endpointsToMethods(octokit, Endpoints);
  return _objectSpread2(_objectSpread2({}, api), {}, {
    rest: api
  });
}
restEndpointMethods.VERSION = VERSION;

exports.restEndpointMethods = restEndpointMethods;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 9063:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var deprecation = __nccwpck_require__(4827);
var once = _interopDefault(__nccwpck_require__(1738));

const logOnce = once(deprecation => console.warn(deprecation));
/**
 * Error with extra properties to help with debugging
 */

class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = "HttpError";
    this.status = statusCode;
    Object.defineProperty(this, "code", {
      get() {
        logOnce(new deprecation.Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }

    });
    this.headers = options.headers || {}; // redact request credentials without mutating original request options

    const requestCopy = Object.assign({}, options.request);

    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }

    requestCopy.url = requestCopy.url // client_id & client_secret can be passed as URL query parameters to increase rate limit
    // see https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications
    .replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]") // OAuth tokens can be passed as URL query parameters, although it is not recommended
    // see https://developer.github.com/v3/#oauth2-token-sent-in-a-header
    .replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
  }

}

exports.RequestError = RequestError;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 8096:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var endpoint = __nccwpck_require__(7879);
var universalUserAgent = __nccwpck_require__(4020);
var isPlainObject = __nccwpck_require__(1810);
var nodeFetch = _interopDefault(__nccwpck_require__(5597));
var requestError = __nccwpck_require__(9063);

const VERSION = "5.4.15";

function getBufferResponse(response) {
  return response.arrayBuffer();
}

function fetchWrapper(requestOptions) {
  if (isPlainObject.isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || nodeFetch;
  return fetch(requestOptions.url, Object.assign({
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect: requestOptions.redirect
  }, // `requestOptions.request.agent` type is incompatible
  // see https://github.com/octokit/types.ts/pull/264
  requestOptions.request)).then(response => {
    url = response.url;
    status = response.status;

    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }

    if (status === 204 || status === 205) {
      return;
    } // GitHub API returns 200 for HEAD requests


    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }

      throw new requestError.RequestError(response.statusText, status, {
        headers,
        request: requestOptions
      });
    }

    if (status === 304) {
      throw new requestError.RequestError("Not modified", status, {
        headers,
        request: requestOptions
      });
    }

    if (status >= 400) {
      return response.text().then(message => {
        const error = new requestError.RequestError(message, status, {
          headers,
          request: requestOptions
        });

        try {
          let responseBody = JSON.parse(error.message);
          Object.assign(error, responseBody);
          let errors = responseBody.errors; // Assumption `errors` would always be in Array format

          error.message = error.message + ": " + errors.map(JSON.stringify).join(", ");
        } catch (e) {// ignore, see octokit/rest.js#684
        }

        throw error;
      });
    }

    const contentType = response.headers.get("content-type");

    if (/application\/json/.test(contentType)) {
      return response.json();
    }

    if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
      return response.text();
    }

    return getBufferResponse(response);
  }).then(data => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch(error => {
    if (error instanceof requestError.RequestError) {
      throw error;
    }

    throw new requestError.RequestError(error.message, 500, {
      headers,
      request: requestOptions
    });
  });
}

function withDefaults(oldEndpoint, newDefaults) {
  const endpoint = oldEndpoint.defaults(newDefaults);

  const newApi = function (route, parameters) {
    const endpointOptions = endpoint.merge(route, parameters);

    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint.parse(endpointOptions));
    }

    const request = (route, parameters) => {
      return fetchWrapper(endpoint.parse(endpoint.merge(route, parameters)));
    };

    Object.assign(request, {
      endpoint,
      defaults: withDefaults.bind(null, endpoint)
    });
    return endpointOptions.request.hook(request, endpointOptions);
  };

  return Object.assign(newApi, {
    endpoint,
    defaults: withDefaults.bind(null, endpoint)
  });
}

const request = withDefaults(endpoint.endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION} ${universalUserAgent.getUserAgent()}`
  }
});

exports.request = request;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 5462:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(9427);

/***/ }),

/***/ 3420:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var settle = __nccwpck_require__(2003);
var buildFullPath = __nccwpck_require__(3792);
var buildURL = __nccwpck_require__(1843);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var httpFollow = __nccwpck_require__(3697).http;
var httpsFollow = __nccwpck_require__(3697).https;
var url = __nccwpck_require__(8835);
var zlib = __nccwpck_require__(8761);
var pkg = __nccwpck_require__(696);
var createError = __nccwpck_require__(5007);
var enhanceError = __nccwpck_require__(6455);

var isHttps = /https:?/;

/**
 *
 * @param {http.ClientRequestArgs} options
 * @param {AxiosProxyConfig} proxy
 * @param {string} location
 */
function setProxy(options, proxy, location) {
  options.hostname = proxy.host;
  options.host = proxy.host;
  options.port = proxy.port;
  options.path = location;

  // Basic proxy authorization
  if (proxy.auth) {
    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
  }

  // If a proxy is used, any redirects must also pass through the proxy
  options.beforeRedirect = function beforeRedirect(redirection) {
    redirection.headers.host = redirection.host;
    setProxy(redirection, proxy, redirection.href);
  };
}

/*eslint consistent-return:0*/
module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    var resolve = function resolve(value) {
      resolvePromise(value);
    };
    var reject = function reject(value) {
      rejectPromise(value);
    };
    var data = config.data;
    var headers = config.headers;

    // Set User-Agent (required by some servers)
    // Only set header if it hasn't been set in config
    // See https://github.com/axios/axios/issues/69
    if (!headers['User-Agent'] && !headers['user-agent']) {
      headers['User-Agent'] = 'axios/' + pkg.version;
    }

    if (data && !utils.isStream(data)) {
      if (Buffer.isBuffer(data)) {
        // Nothing to do...
      } else if (utils.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils.isString(data)) {
        data = Buffer.from(data, 'utf-8');
      } else {
        return reject(createError(
          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
          config
        ));
      }

      // Add Content-Length header if data exists
      headers['Content-Length'] = data.length;
    }

    // HTTP basic authentication
    var auth = undefined;
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      auth = username + ':' + password;
    }

    // Parse url
    var fullPath = buildFullPath(config.baseURL, config.url);
    var parsed = url.parse(fullPath);
    var protocol = parsed.protocol || 'http:';

    if (!auth && parsed.auth) {
      var urlAuth = parsed.auth.split(':');
      var urlUsername = urlAuth[0] || '';
      var urlPassword = urlAuth[1] || '';
      auth = urlUsername + ':' + urlPassword;
    }

    if (auth) {
      delete headers.Authorization;
    }

    var isHttpsRequest = isHttps.test(protocol);
    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    var options = {
      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
      method: config.method.toUpperCase(),
      headers: headers,
      agent: agent,
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth: auth
    };

    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
    }

    var proxy = config.proxy;
    if (!proxy && proxy !== false) {
      var proxyEnv = protocol.slice(0, -1) + '_proxy';
      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
      if (proxyUrl) {
        var parsedProxyUrl = url.parse(proxyUrl);
        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
        var shouldProxy = true;

        if (noProxyEnv) {
          var noProxy = noProxyEnv.split(',').map(function trim(s) {
            return s.trim();
          });

          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
            if (!proxyElement) {
              return false;
            }
            if (proxyElement === '*') {
              return true;
            }
            if (proxyElement[0] === '.' &&
                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
              return true;
            }

            return parsed.hostname === proxyElement;
          });
        }

        if (shouldProxy) {
          proxy = {
            host: parsedProxyUrl.hostname,
            port: parsedProxyUrl.port,
            protocol: parsedProxyUrl.protocol
          };

          if (parsedProxyUrl.auth) {
            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
            proxy.auth = {
              username: proxyUrlAuth[0],
              password: proxyUrlAuth[1]
            };
          }
        }
      }
    }

    if (proxy) {
      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    }

    var transport;
    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsProxy ? https : http;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      transport = isHttpsProxy ? httpsFollow : httpFollow;
    }

    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    }

    // Create the request
    var req = transport.request(options, function handleResponse(res) {
      if (req.aborted) return;

      // uncompress the response body transparently if required
      var stream = res;

      // return the last request in case of redirects
      var lastRequest = res.req || req;


      // if no content, is HEAD request or decompress disabled we should not decompress
      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
        switch (res.headers['content-encoding']) {
        /*eslint default-case:0*/
        case 'gzip':
        case 'compress':
        case 'deflate':
        // add the unzipper to the body stream processing pipeline
          stream = stream.pipe(zlib.createUnzip());

          // remove the content-encoding in order to not confuse downstream operations
          delete res.headers['content-encoding'];
          break;
        }
      }

      var response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: res.headers,
        config: config,
        request: lastRequest
      };

      if (config.responseType === 'stream') {
        response.data = stream;
        settle(resolve, reject, response);
      } else {
        var responseBuffer = [];
        stream.on('data', function handleStreamData(chunk) {
          responseBuffer.push(chunk);

          // make sure the content length is not over the maxContentLength if specified
          if (config.maxContentLength > -1 && Buffer.concat(responseBuffer).length > config.maxContentLength) {
            stream.destroy();
            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
              config, null, lastRequest));
          }
        });

        stream.on('error', function handleStreamError(err) {
          if (req.aborted) return;
          reject(enhanceError(err, config, null, lastRequest));
        });

        stream.on('end', function handleStreamEnd() {
          var responseData = Buffer.concat(responseBuffer);
          if (config.responseType !== 'arraybuffer') {
            responseData = responseData.toString(config.responseEncoding);
            if (!config.responseEncoding || config.responseEncoding === 'utf8') {
              responseData = utils.stripBOM(responseData);
            }
          }

          response.data = responseData;
          settle(resolve, reject, response);
        });
      }
    });

    // Handle errors
    req.on('error', function handleRequestError(err) {
      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
      reject(enhanceError(err, config, null, req));
    });

    // Handle request timeout
    if (config.timeout) {
      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
      // And then these socket which be hang up will devoring CPU little by little.
      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
      req.setTimeout(config.timeout, function handleRequestTimeout() {
        req.abort();
        reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', req));
      });
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (req.aborted) return;

        req.abort();
        reject(cancel);
      });
    }

    // Send the request
    if (utils.isStream(data)) {
      data.on('error', function handleStreamError(err) {
        reject(enhanceError(err, config, null, req));
      }).pipe(req);
    } else {
      req.end(data);
    }
  });
};


/***/ }),

/***/ 2122:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var settle = __nccwpck_require__(2003);
var cookies = __nccwpck_require__(7843);
var buildURL = __nccwpck_require__(1843);
var buildFullPath = __nccwpck_require__(3792);
var parseHeaders = __nccwpck_require__(8953);
var isURLSameOrigin = __nccwpck_require__(558);
var createError = __nccwpck_require__(5007);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ 9427:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var bind = __nccwpck_require__(1479);
var Axios = __nccwpck_require__(3912);
var mergeConfig = __nccwpck_require__(3365);
var defaults = __nccwpck_require__(7737);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __nccwpck_require__(9998);
axios.CancelToken = __nccwpck_require__(4885);
axios.isCancel = __nccwpck_require__(8186);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __nccwpck_require__(8972);

// Expose isAxiosError
axios.isAxiosError = __nccwpck_require__(4469);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ 9998:
/***/ ((module) => {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ 4885:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var Cancel = __nccwpck_require__(9998);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ 8186:
/***/ ((module) => {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ 3912:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var buildURL = __nccwpck_require__(1843);
var InterceptorManager = __nccwpck_require__(631);
var dispatchRequest = __nccwpck_require__(5054);
var mergeConfig = __nccwpck_require__(3365);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ 631:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ 3792:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var isAbsoluteURL = __nccwpck_require__(8950);
var combineURLs = __nccwpck_require__(6310);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ 5007:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var enhanceError = __nccwpck_require__(6455);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ 5054:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var transformData = __nccwpck_require__(3861);
var isCancel = __nccwpck_require__(8186);
var defaults = __nccwpck_require__(7737);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ 6455:
/***/ ((module) => {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ 3365:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ 2003:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var createError = __nccwpck_require__(5007);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ 3861:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ 7737:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);
var normalizeHeaderName = __nccwpck_require__(3497);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __nccwpck_require__(2122);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __nccwpck_require__(3420);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;


/***/ }),

/***/ 1479:
/***/ ((module) => {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ 1843:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ 6310:
/***/ ((module) => {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ 7843:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ 8950:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ 4469:
/***/ ((module) => {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ 558:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ 3497:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ 8953:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var utils = __nccwpck_require__(1853);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ 8972:
/***/ ((module) => {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ 1853:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var bind = __nccwpck_require__(1479);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ 579:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var register = __nccwpck_require__(7979)
var addHook = __nccwpck_require__(2131)
var removeHook = __nccwpck_require__(4793)

// bind with array of arguments: https://stackoverflow.com/a/21792913
var bind = Function.bind
var bindable = bind.bind(bind)

function bindApi (hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state])
  hook.api = { remove: removeHookRef }
  hook.remove = removeHookRef

  ;['before', 'error', 'after', 'wrap'].forEach(function (kind) {
    var args = name ? [state, kind, name] : [state, kind]
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args)
  })
}

function HookSingular () {
  var singularHookName = 'h'
  var singularHookState = {
    registry: {}
  }
  var singularHook = register.bind(null, singularHookState, singularHookName)
  bindApi(singularHook, singularHookState, singularHookName)
  return singularHook
}

function HookCollection () {
  var state = {
    registry: {}
  }

  var hook = register.bind(null, state)
  bindApi(hook, state)

  return hook
}

var collectionHookDeprecationMessageDisplayed = false
function Hook () {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4')
    collectionHookDeprecationMessageDisplayed = true
  }
  return HookCollection()
}

Hook.Singular = HookSingular.bind()
Hook.Collection = HookCollection.bind()

module.exports = Hook
// expose constructors as a named property for TypeScript
module.exports.Hook = Hook
module.exports.Singular = Hook.Singular
module.exports.Collection = Hook.Collection


/***/ }),

/***/ 2131:
/***/ ((module) => {

module.exports = addHook;

function addHook(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }

  if (kind === "before") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(orig.bind(null, options))
        .then(method.bind(null, options));
    };
  }

  if (kind === "after") {
    hook = function (method, options) {
      var result;
      return Promise.resolve()
        .then(method.bind(null, options))
        .then(function (result_) {
          result = result_;
          return orig(result, options);
        })
        .then(function () {
          return result;
        });
    };
  }

  if (kind === "error") {
    hook = function (method, options) {
      return Promise.resolve()
        .then(method.bind(null, options))
        .catch(function (error) {
          return orig(error, options);
        });
    };
  }

  state.registry[name].push({
    hook: hook,
    orig: orig,
  });
}


/***/ }),

/***/ 7979:
/***/ ((module) => {

module.exports = register;

function register(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }

  if (!options) {
    options = {};
  }

  if (Array.isArray(name)) {
    return name.reverse().reduce(function (callback, name) {
      return register.bind(null, state, name, callback, options);
    }, method)();
  }

  return Promise.resolve().then(function () {
    if (!state.registry[name]) {
      return method(options);
    }

    return state.registry[name].reduce(function (method, registered) {
      return registered.hook.bind(null, method, options);
    }, method)();
  });
}


/***/ }),

/***/ 4793:
/***/ ((module) => {

module.exports = removeHook;

function removeHook(state, name, method) {
  if (!state.registry[name]) {
    return;
  }

  var index = state.registry[name]
    .map(function (registered) {
      return registered.orig;
    })
    .indexOf(method);

  if (index === -1) {
    return;
  }

  state.registry[name].splice(index, 1);
}


/***/ }),

/***/ 9349:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __nccwpck_require__(6210);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ 6210:
/***/ ((module, exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __nccwpck_require__(9093);

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ 583:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __nccwpck_require__(9349);
} else {
  module.exports = __nccwpck_require__(4797);
}


/***/ }),

/***/ 4797:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

var tty = __nccwpck_require__(3867);
var util = __nccwpck_require__(1669);

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __nccwpck_require__(6210);
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __nccwpck_require__(5747);
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __nccwpck_require__(1631);
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ 4827:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

class Deprecation extends Error {
  constructor(message) {
    super(message); // Maintains proper stack trace (only available on V8)

    /* istanbul ignore next */

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = 'Deprecation';
  }

}

exports.Deprecation = Deprecation;


/***/ }),

/***/ 4946:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var debug;

module.exports = function () {
  if (!debug) {
    try {
      /* eslint global-require: off */
      debug = __nccwpck_require__(583)("follow-redirects");
    }
    catch (error) {
      debug = function () { /* */ };
    }
  }
  debug.apply(null, arguments);
};


/***/ }),

/***/ 3697:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var url = __nccwpck_require__(8835);
var URL = url.URL;
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var Writable = __nccwpck_require__(2413).Writable;
var assert = __nccwpck_require__(2357);
var debug = __nccwpck_require__(4946);

// Create handlers that pass events from native requests
var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
var eventHandlers = Object.create(null);
events.forEach(function (event) {
  eventHandlers[event] = function (arg1, arg2, arg3) {
    this._redirectable.emit(event, arg1, arg2, arg3);
  };
});

// Error types with codes
var RedirectionError = createErrorType(
  "ERR_FR_REDIRECTION_FAILURE",
  ""
);
var TooManyRedirectsError = createErrorType(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded"
);
var MaxBodyLengthExceededError = createErrorType(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
);
var WriteAfterEndError = createErrorType(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
);

// An HTTP(S) request that can be redirected
function RedirectableRequest(options, responseCallback) {
  // Initialize the request
  Writable.call(this);
  this._sanitizeOptions(options);
  this._options = options;
  this._ended = false;
  this._ending = false;
  this._redirectCount = 0;
  this._redirects = [];
  this._requestBodyLength = 0;
  this._requestBodyBuffers = [];

  // Attach a callback if passed
  if (responseCallback) {
    this.on("response", responseCallback);
  }

  // React to responses of native requests
  var self = this;
  this._onNativeResponse = function (response) {
    self._processResponse(response);
  };

  // Perform the first request
  this._performRequest();
}
RedirectableRequest.prototype = Object.create(Writable.prototype);

RedirectableRequest.prototype.abort = function () {
  // Abort the internal request
  abortRequest(this._currentRequest);

  // Abort this request
  this.emit("abort");
  this.removeAllListeners();
};

// Writes buffered data to the current native request
RedirectableRequest.prototype.write = function (data, encoding, callback) {
  // Writing is not allowed if end has been called
  if (this._ending) {
    throw new WriteAfterEndError();
  }

  // Validate input and shift parameters if necessary
  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  }
  if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Ignore empty buffers, since writing them doesn't invoke the callback
  // https://github.com/nodejs/node/issues/22066
  if (data.length === 0) {
    if (callback) {
      callback();
    }
    return;
  }
  // Only write when we don't exceed the maximum body length
  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    this._requestBodyLength += data.length;
    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    this._currentRequest.write(data, encoding, callback);
  }
  // Error when we exceed the maximum body length
  else {
    this.emit("error", new MaxBodyLengthExceededError());
    this.abort();
  }
};

// Ends the current native request
RedirectableRequest.prototype.end = function (data, encoding, callback) {
  // Shift parameters if necessary
  if (typeof data === "function") {
    callback = data;
    data = encoding = null;
  }
  else if (typeof encoding === "function") {
    callback = encoding;
    encoding = null;
  }

  // Write data if needed and end
  if (!data) {
    this._ended = this._ending = true;
    this._currentRequest.end(null, null, callback);
  }
  else {
    var self = this;
    var currentRequest = this._currentRequest;
    this.write(data, encoding, function () {
      self._ended = true;
      currentRequest.end(null, null, callback);
    });
    this._ending = true;
  }
};

// Sets a header value on the current native request
RedirectableRequest.prototype.setHeader = function (name, value) {
  this._options.headers[name] = value;
  this._currentRequest.setHeader(name, value);
};

// Clears a header value on the current native request
RedirectableRequest.prototype.removeHeader = function (name) {
  delete this._options.headers[name];
  this._currentRequest.removeHeader(name);
};

// Global timeout for all underlying requests
RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
  var self = this;
  if (callback) {
    this.on("timeout", callback);
  }

  function destroyOnTimeout(socket) {
    socket.setTimeout(msecs);
    socket.removeListener("timeout", socket.destroy);
    socket.addListener("timeout", socket.destroy);
  }

  // Sets up a timer to trigger a timeout event
  function startTimer(socket) {
    if (self._timeout) {
      clearTimeout(self._timeout);
    }
    self._timeout = setTimeout(function () {
      self.emit("timeout");
      clearTimer();
    }, msecs);
    destroyOnTimeout(socket);
  }

  // Prevent a timeout from triggering
  function clearTimer() {
    clearTimeout(this._timeout);
    if (callback) {
      self.removeListener("timeout", callback);
    }
    if (!this.socket) {
      self._currentRequest.removeListener("socket", startTimer);
    }
  }

  // Start the timer when the socket is opened
  if (this.socket) {
    startTimer(this.socket);
  }
  else {
    this._currentRequest.once("socket", startTimer);
  }

  this.on("socket", destroyOnTimeout);
  this.once("response", clearTimer);
  this.once("error", clearTimer);

  return this;
};

// Proxy all other public ClientRequest methods
[
  "flushHeaders", "getHeader",
  "setNoDelay", "setSocketKeepAlive",
].forEach(function (method) {
  RedirectableRequest.prototype[method] = function (a, b) {
    return this._currentRequest[method](a, b);
  };
});

// Proxy all public ClientRequest properties
["aborted", "connection", "socket"].forEach(function (property) {
  Object.defineProperty(RedirectableRequest.prototype, property, {
    get: function () { return this._currentRequest[property]; },
  });
});

RedirectableRequest.prototype._sanitizeOptions = function (options) {
  // Ensure headers are always present
  if (!options.headers) {
    options.headers = {};
  }

  // Since http.request treats host as an alias of hostname,
  // but the url module interprets host as hostname plus port,
  // eliminate the host property to avoid confusion.
  if (options.host) {
    // Use hostname if set, because it has precedence
    if (!options.hostname) {
      options.hostname = options.host;
    }
    delete options.host;
  }

  // Complete the URL object when necessary
  if (!options.pathname && options.path) {
    var searchPos = options.path.indexOf("?");
    if (searchPos < 0) {
      options.pathname = options.path;
    }
    else {
      options.pathname = options.path.substring(0, searchPos);
      options.search = options.path.substring(searchPos);
    }
  }
};


// Executes the next native request (initial or redirect)
RedirectableRequest.prototype._performRequest = function () {
  // Load the native protocol
  var protocol = this._options.protocol;
  var nativeProtocol = this._options.nativeProtocols[protocol];
  if (!nativeProtocol) {
    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    return;
  }

  // If specified, use the agent corresponding to the protocol
  // (HTTP and HTTPS use different types of agents)
  if (this._options.agents) {
    var scheme = protocol.substr(0, protocol.length - 1);
    this._options.agent = this._options.agents[scheme];
  }

  // Create the native request
  var request = this._currentRequest =
        nativeProtocol.request(this._options, this._onNativeResponse);
  this._currentUrl = url.format(this._options);

  // Set up event handlers
  request._redirectable = this;
  for (var e = 0; e < events.length; e++) {
    request.on(events[e], eventHandlers[events[e]]);
  }

  // End a redirected request
  // (The first request must be ended explicitly with RedirectableRequest#end)
  if (this._isRedirect) {
    // Write the request entity and end.
    var i = 0;
    var self = this;
    var buffers = this._requestBodyBuffers;
    (function writeNext(error) {
      // Only write if this request has not been redirected yet
      /* istanbul ignore else */
      if (request === self._currentRequest) {
        // Report any write errors
        /* istanbul ignore if */
        if (error) {
          self.emit("error", error);
        }
        // Write the next buffer if there are still left
        else if (i < buffers.length) {
          var buffer = buffers[i++];
          /* istanbul ignore else */
          if (!request.finished) {
            request.write(buffer.data, buffer.encoding, writeNext);
          }
        }
        // End the request if `end` has been called on us
        else if (self._ended) {
          request.end();
        }
      }
    }());
  }
};

// Processes a response from the current native request
RedirectableRequest.prototype._processResponse = function (response) {
  // Store the redirected response
  var statusCode = response.statusCode;
  if (this._options.trackRedirects) {
    this._redirects.push({
      url: this._currentUrl,
      headers: response.headers,
      statusCode: statusCode,
    });
  }

  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
  // that further action needs to be taken by the user agent in order to
  // fulfill the request. If a Location header field is provided,
  // the user agent MAY automatically redirect its request to the URI
  // referenced by the Location field value,
  // even if the specific status code is not understood.
  var location = response.headers.location;
  if (location && this._options.followRedirects !== false &&
      statusCode >= 300 && statusCode < 400) {
    // Abort the current request
    abortRequest(this._currentRequest);
    // Discard the remainder of the response to avoid waiting for data
    response.destroy();

    // RFC7231§6.4: A client SHOULD detect and intervene
    // in cyclical redirections (i.e., "infinite" redirection loops).
    if (++this._redirectCount > this._options.maxRedirects) {
      this.emit("error", new TooManyRedirectsError());
      return;
    }

    // RFC7231§6.4: Automatic redirection needs to done with
    // care for methods not known to be safe, […]
    // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    // the request method from POST to GET for the subsequent request.
    if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
        // RFC7231§6.4.4: The 303 (See Other) status code indicates that
        // the server is redirecting the user agent to a different resource […]
        // A user agent can perform a retrieval request targeting that URI
        // (a GET or HEAD request if using HTTP) […]
        (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
      this._options.method = "GET";
      // Drop a possible entity and headers related to it
      this._requestBodyBuffers = [];
      removeMatchingHeaders(/^content-/i, this._options.headers);
    }

    // Drop the Host header, as the redirect might lead to a different host
    var previousHostName = removeMatchingHeaders(/^host$/i, this._options.headers) ||
      url.parse(this._currentUrl).hostname;

    // Create the redirected request
    var redirectUrl = url.resolve(this._currentUrl, location);
    debug("redirecting to", redirectUrl);
    this._isRedirect = true;
    var redirectUrlParts = url.parse(redirectUrl);
    Object.assign(this._options, redirectUrlParts);

    // Drop the Authorization header if redirecting to another host
    if (redirectUrlParts.hostname !== previousHostName) {
      removeMatchingHeaders(/^authorization$/i, this._options.headers);
    }

    // Evaluate the beforeRedirect callback
    if (typeof this._options.beforeRedirect === "function") {
      var responseDetails = { headers: response.headers };
      try {
        this._options.beforeRedirect.call(null, this._options, responseDetails);
      }
      catch (err) {
        this.emit("error", err);
        return;
      }
      this._sanitizeOptions(this._options);
    }

    // Perform the redirected request
    try {
      this._performRequest();
    }
    catch (cause) {
      var error = new RedirectionError("Redirected request failed: " + cause.message);
      error.cause = cause;
      this.emit("error", error);
    }
  }
  else {
    // The response is not a redirect; return it as-is
    response.responseUrl = this._currentUrl;
    response.redirects = this._redirects;
    this.emit("response", response);

    // Clean up
    this._requestBodyBuffers = [];
  }
};

// Wraps the key/value object of protocols with redirect functionality
function wrap(protocols) {
  // Default settings
  var exports = {
    maxRedirects: 21,
    maxBodyLength: 10 * 1024 * 1024,
  };

  // Wrap each protocol
  var nativeProtocols = {};
  Object.keys(protocols).forEach(function (scheme) {
    var protocol = scheme + ":";
    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    // Executes a request, following redirects
    function request(input, options, callback) {
      // Parse parameters
      if (typeof input === "string") {
        var urlStr = input;
        try {
          input = urlToOptions(new URL(urlStr));
        }
        catch (err) {
          /* istanbul ignore next */
          input = url.parse(urlStr);
        }
      }
      else if (URL && (input instanceof URL)) {
        input = urlToOptions(input);
      }
      else {
        callback = options;
        options = input;
        input = { protocol: protocol };
      }
      if (typeof options === "function") {
        callback = options;
        options = null;
      }

      // Set defaults
      options = Object.assign({
        maxRedirects: exports.maxRedirects,
        maxBodyLength: exports.maxBodyLength,
      }, input, options);
      options.nativeProtocols = nativeProtocols;

      assert.equal(options.protocol, protocol, "protocol mismatch");
      debug("options", options);
      return new RedirectableRequest(options, callback);
    }

    // Executes a GET request, following redirects
    function get(input, options, callback) {
      var wrappedRequest = wrappedProtocol.request(input, options, callback);
      wrappedRequest.end();
      return wrappedRequest;
    }

    // Expose the properties on the wrapped protocol
    Object.defineProperties(wrappedProtocol, {
      request: { value: request, configurable: true, enumerable: true, writable: true },
      get: { value: get, configurable: true, enumerable: true, writable: true },
    });
  });
  return exports;
}

/* istanbul ignore next */
function noop() { /* empty */ }

// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
function urlToOptions(urlObject) {
  var options = {
    protocol: urlObject.protocol,
    hostname: urlObject.hostname.startsWith("[") ?
      /* istanbul ignore next */
      urlObject.hostname.slice(1, -1) :
      urlObject.hostname,
    hash: urlObject.hash,
    search: urlObject.search,
    pathname: urlObject.pathname,
    path: urlObject.pathname + urlObject.search,
    href: urlObject.href,
  };
  if (urlObject.port !== "") {
    options.port = Number(urlObject.port);
  }
  return options;
}

function removeMatchingHeaders(regex, headers) {
  var lastValue;
  for (var header in headers) {
    if (regex.test(header)) {
      lastValue = headers[header];
      delete headers[header];
    }
  }
  return lastValue;
}

function createErrorType(code, defaultMessage) {
  function CustomError(message) {
    Error.captureStackTrace(this, this.constructor);
    this.message = message || defaultMessage;
  }
  CustomError.prototype = new Error();
  CustomError.prototype.constructor = CustomError;
  CustomError.prototype.name = "Error [" + code + "]";
  CustomError.prototype.code = code;
  return CustomError;
}

function abortRequest(request) {
  for (var e = 0; e < events.length; e++) {
    request.removeListener(events[e], eventHandlers[events[e]]);
  }
  request.on("error", noop);
  request.abort();
}

// Exports
module.exports = wrap({ http: http, https: https });
module.exports.wrap = wrap;


/***/ }),

/***/ 3411:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * A Gist can retrieve and modify gists.
 */
var Gist = function (_Requestable) {
  _inherits(Gist, _Requestable);

  /**
   * Create a Gist.
   * @param {string} id - the id of the gist (not required when creating a gist)
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Gist(id, auth, apiBase) {
    _classCallCheck(this, Gist);

    var _this = _possibleConstructorReturn(this, (Gist.__proto__ || Object.getPrototypeOf(Gist)).call(this, auth, apiBase));

    _this.__id = id;
    return _this;
  }

  /**
   * Fetch a gist.
   * @see https://developer.github.com/v3/gists/#get-a-single-gist
   * @param {Requestable.callback} [cb] - will receive the gist
   * @return {Promise} - the Promise for the http request
   */


  _createClass(Gist, [{
    key: 'read',
    value: function read(cb) {
      return this._request('GET', '/gists/' + this.__id, null, cb);
    }

    /**
     * Create a new gist.
     * @see https://developer.github.com/v3/gists/#create-a-gist
     * @param {Object} gist - the data for the new gist
     * @param {Requestable.callback} [cb] - will receive the new gist upon creation
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'create',
    value: function create(gist, cb) {
      var _this2 = this;

      return this._request('POST', '/gists', gist, cb).then(function (response) {
        _this2.__id = response.data.id;
        return response;
      });
    }

    /**
     * Delete a gist.
     * @see https://developer.github.com/v3/gists/#delete-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request succeeds
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'delete',
    value: function _delete(cb) {
      return this._request('DELETE', '/gists/' + this.__id, null, cb);
    }

    /**
     * Fork a gist.
     * @see https://developer.github.com/v3/gists/#fork-a-gist
     * @param {Requestable.callback} [cb] - the function that will receive the gist
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'fork',
    value: function fork(cb) {
      return this._request('POST', '/gists/' + this.__id + '/forks', null, cb);
    }

    /**
     * Update a gist.
     * @see https://developer.github.com/v3/gists/#edit-a-gist
     * @param {Object} gist - the new data for the gist
     * @param {Requestable.callback} [cb] - the function that receives the API result
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'update',
    value: function update(gist, cb) {
      return this._request('PATCH', '/gists/' + this.__id, gist, cb);
    }

    /**
     * Star a gist.
     * @see https://developer.github.com/v3/gists/#star-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'star',
    value: function star(cb) {
      return this._request('PUT', '/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * Unstar a gist.
     * @see https://developer.github.com/v3/gists/#unstar-a-gist
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'unstar',
    value: function unstar(cb) {
      return this._request('DELETE', '/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * Check if a gist is starred by the user.
     * @see https://developer.github.com/v3/gists/#check-if-a-gist-is-starred
     * @param {Requestable.callback} [cb] - will receive true if the gist is starred and false if the gist is not starred
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'isStarred',
    value: function isStarred(cb) {
      return this._request204or404('/gists/' + this.__id + '/star', null, cb);
    }

    /**
     * List the gist's commits
     * @see https://developer.github.com/v3/gists/#list-gist-commits
     * @param {Requestable.callback} [cb] - will receive the array of commits
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'listCommits',
    value: function listCommits(cb) {
      return this._requestAllPages('/gists/' + this.__id + '/commits', null, cb);
    }

    /**
     * Fetch one of the gist's revision.
     * @see https://developer.github.com/v3/gists/#get-a-specific-revision-of-a-gist
     * @param {string} revision - the id of the revision
     * @param {Requestable.callback} [cb] - will receive the revision
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'getRevision',
    value: function getRevision(revision, cb) {
      return this._request('GET', '/gists/' + this.__id + '/' + revision, null, cb);
    }

    /**
     * List the gist's comments
     * @see https://developer.github.com/v3/gists/comments/#list-comments-on-a-gist
     * @param {Requestable.callback} [cb] - will receive the array of comments
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listComments',
    value: function listComments(cb) {
      return this._requestAllPages('/gists/' + this.__id + '/comments', null, cb);
    }

    /**
     * Fetch one of the gist's comments
     * @see https://developer.github.com/v3/gists/comments/#get-a-single-comment
     * @param {number} comment - the id of the comment
     * @param {Requestable.callback} [cb] - will receive the comment
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'getComment',
    value: function getComment(comment, cb) {
      return this._request('GET', '/gists/' + this.__id + '/comments/' + comment, null, cb);
    }

    /**
     * Comment on a gist
     * @see https://developer.github.com/v3/gists/comments/#create-a-comment
     * @param {string} comment - the comment to add
     * @param {Requestable.callback} [cb] - the function that receives the API result
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'createComment',
    value: function createComment(comment, cb) {
      return this._request('POST', '/gists/' + this.__id + '/comments', { body: comment }, cb);
    }

    /**
     * Edit a comment on the gist
     * @see https://developer.github.com/v3/gists/comments/#edit-a-comment
     * @param {number} comment - the id of the comment
     * @param {string} body - the new comment
     * @param {Requestable.callback} [cb] - will receive the modified comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editComment',
    value: function editComment(comment, body, cb) {
      return this._request('PATCH', '/gists/' + this.__id + '/comments/' + comment, { body: body }, cb);
    }

    /**
     * Delete a comment on the gist.
     * @see https://developer.github.com/v3/gists/comments/#delete-a-comment
     * @param {number} comment - the id of the comment
     * @param {Requestable.callback} [cb] - will receive true if the request succeeds
     * @return {Promise} - the Promise for the http request
     */

  }, {
    key: 'deleteComment',
    value: function deleteComment(comment, cb) {
      return this._request('DELETE', '/gists/' + this.__id + '/comments/' + comment, null, cb);
    }
  }]);

  return Gist;
}(_Requestable3.default);

module.exports = Gist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpc3QuanMiXSwibmFtZXMiOlsiR2lzdCIsImlkIiwiYXV0aCIsImFwaUJhc2UiLCJfX2lkIiwiY2IiLCJfcmVxdWVzdCIsImdpc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiX3JlcXVlc3QyMDRvcjQwNCIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJyZXZpc2lvbiIsImNvbW1lbnQiLCJib2R5IiwiUmVxdWVzdGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7Ozs7Ozs7K2VBUEE7Ozs7Ozs7QUFTQTs7O0lBR01BLEk7OztBQUNIOzs7Ozs7QUFNQSxnQkFBWUMsRUFBWixFQUFnQkMsSUFBaEIsRUFBc0JDLE9BQXRCLEVBQStCO0FBQUE7O0FBQUEsNEdBQ3RCRCxJQURzQixFQUNoQkMsT0FEZ0I7O0FBRTVCLFVBQUtDLElBQUwsR0FBWUgsRUFBWjtBQUY0QjtBQUc5Qjs7QUFFRDs7Ozs7Ozs7Ozt5QkFNS0ksRSxFQUFJO0FBQ04sYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLRixJQUFwQyxFQUE0QyxJQUE1QyxFQUFrREMsRUFBbEQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzJCQU9PRSxJLEVBQU1GLEUsRUFBSTtBQUFBOztBQUNkLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsRUFBc0IsUUFBdEIsRUFBZ0NDLElBQWhDLEVBQXNDRixFQUF0QyxFQUNIRyxJQURHLENBQ0UsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pCLGVBQUtMLElBQUwsR0FBWUssU0FBU0MsSUFBVCxDQUFjVCxFQUExQjtBQUNBLGVBQU9RLFFBQVA7QUFDRixPQUpHLENBQVA7QUFLRjs7QUFFRDs7Ozs7Ozs7OzRCQU1PSixFLEVBQUk7QUFDUixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUtGLElBQXZDLEVBQStDLElBQS9DLEVBQXFEQyxFQUFyRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozt5QkFNS0EsRSxFQUFJO0FBQ04sYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxjQUFnQyxLQUFLRixJQUFyQyxhQUFtRCxJQUFuRCxFQUF5REMsRUFBekQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzJCQU9PRSxJLEVBQU1GLEUsRUFBSTtBQUNkLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBS0YsSUFBdEMsRUFBOENHLElBQTlDLEVBQW9ERixFQUFwRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozt5QkFNS0EsRSxFQUFJO0FBQ04sYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLRixJQUFwQyxZQUFpRCxJQUFqRCxFQUF1REMsRUFBdkQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7MkJBTU9BLEUsRUFBSTtBQUNSLGFBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsY0FBa0MsS0FBS0YsSUFBdkMsWUFBb0QsSUFBcEQsRUFBMERDLEVBQTFELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzhCQU1VQSxFLEVBQUk7QUFDWCxhQUFPLEtBQUtNLGdCQUFMLGFBQWdDLEtBQUtQLElBQXJDLFlBQWtELElBQWxELEVBQXdEQyxFQUF4RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztnQ0FNWUEsRSxFQUFJO0FBQ2IsYUFBTyxLQUFLTyxnQkFBTCxhQUFnQyxLQUFLUixJQUFyQyxlQUFxRCxJQUFyRCxFQUEyREMsRUFBM0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2dDQU9ZUSxRLEVBQVVSLEUsRUFBSTtBQUN2QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLElBQXBDLFNBQTRDUyxRQUE1QyxFQUF3RCxJQUF4RCxFQUE4RFIsRUFBOUQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7aUNBTWFBLEUsRUFBSTtBQUNkLGFBQU8sS0FBS08sZ0JBQUwsYUFBZ0MsS0FBS1IsSUFBckMsZ0JBQXNELElBQXRELEVBQTREQyxFQUE1RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1dTLE8sRUFBU1QsRSxFQUFJO0FBQ3JCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsY0FBK0IsS0FBS0YsSUFBcEMsa0JBQXFEVSxPQUFyRCxFQUFnRSxJQUFoRSxFQUFzRVQsRUFBdEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2tDQU9jUyxPLEVBQVNULEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGNBQWdDLEtBQUtGLElBQXJDLGdCQUFzRCxFQUFDVyxNQUFNRCxPQUFQLEVBQXRELEVBQXVFVCxFQUF2RSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O2dDQVFZUyxPLEVBQVNDLEksRUFBTVYsRSxFQUFJO0FBQzVCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBS0YsSUFBdEMsa0JBQXVEVSxPQUF2RCxFQUFrRSxFQUFDQyxNQUFNQSxJQUFQLEVBQWxFLEVBQWdGVixFQUFoRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7a0NBT2NTLE8sRUFBU1QsRSxFQUFJO0FBQ3hCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsY0FBa0MsS0FBS0YsSUFBdkMsa0JBQXdEVSxPQUF4RCxFQUFtRSxJQUFuRSxFQUF5RVQsRUFBekUsQ0FBUDtBQUNGOzs7O0VBNUtlVyxxQjs7QUErS25CQyxPQUFPQyxPQUFQLEdBQWlCbEIsSUFBakIiLCJmaWxlIjoiR2lzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIEEgR2lzdCBjYW4gcmV0cmlldmUgYW5kIG1vZGlmeSBnaXN0cy5cbiAqL1xuY2xhc3MgR2lzdCBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgR2lzdC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgZ2lzdCAobm90IHJlcXVpcmVkIHdoZW4gY3JlYXRpbmcgYSBnaXN0KVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihpZCwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9faWQgPSBpZDtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGZXRjaCBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2dldC1hLXNpbmdsZS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBnaXN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHJlYWQoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jY3JlYXRlLWEtZ2lzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGdpc3QgLSB0aGUgZGF0YSBmb3IgdGhlIG5ldyBnaXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgZ2lzdCB1cG9uIGNyZWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZShnaXN0LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL2dpc3RzJywgZ2lzdCwgY2IpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19pZCA9IHJlc3BvbnNlLmRhdGEuaWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNkZWxldGUtYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9naXN0cy8ke3RoaXMuX19pZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRm9yayBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2ZvcmstYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gdGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCByZWNlaXZlIHRoZSBnaXN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvcmsoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vZm9ya3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGEgZ2lzdC5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy8jZWRpdC1hLWdpc3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBnaXN0IC0gdGhlIG5ldyBkYXRhIGZvciB0aGUgZ2lzdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHRoZSBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBBUEkgcmVzdWx0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZShnaXN0LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9naXN0cy8ke3RoaXMuX19pZH1gLCBnaXN0LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU3RhciBhIGdpc3QuXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI3N0YXItYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBzdGFyKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vc3RhcmAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVbnN0YXIgYSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyN1bnN0YXItYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bnN0YXIoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9zdGFyYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENoZWNrIGlmIGEgZ2lzdCBpcyBzdGFycmVkIGJ5IHRoZSB1c2VyLlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNjaGVjay1pZi1hLWdpc3QtaXMtc3RhcnJlZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBnaXN0IGlzIHN0YXJyZWQgYW5kIGZhbHNlIGlmIHRoZSBnaXN0IGlzIG5vdCBzdGFycmVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGlzU3RhcnJlZChjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL2dpc3RzLyR7dGhpcy5fX2lkfS9zdGFyYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGdpc3QncyBjb21taXRzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2xpc3QtZ2lzdC1jb21taXRzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBjb21taXRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RDb21taXRzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvZ2lzdHMvJHt0aGlzLl9faWR9L2NvbW1pdHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRmV0Y2ggb25lIG9mIHRoZSBnaXN0J3MgcmV2aXNpb24uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvI2dldC1hLXNwZWNpZmljLXJldmlzaW9uLW9mLWEtZ2lzdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJldmlzaW9uIC0gdGhlIGlkIG9mIHRoZSByZXZpc2lvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmV2aXNpb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmV2aXNpb24ocmV2aXNpb24sIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9naXN0cy8ke3RoaXMuX19pZH0vJHtyZXZpc2lvbn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgZ2lzdCdzIGNvbW1lbnRzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2xpc3QtY29tbWVudHMtb24tYS1naXN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBjb21tZW50c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0Q29tbWVudHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9naXN0cy8ke3RoaXMuX19pZH0vY29tbWVudHNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRmV0Y2ggb25lIG9mIHRoZSBnaXN0J3MgY29tbWVudHNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXN0cy9jb21tZW50cy8jZ2V0LWEtc2luZ2xlLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb21tZW50IC0gdGhlIGlkIG9mIHRoZSBjb21tZW50XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbW1lbnQoY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50cy8ke2NvbW1lbnR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbW1lbnQgb24gYSBnaXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2NyZWF0ZS1hLWNvbW1lbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50IC0gdGhlIGNvbW1lbnQgdG8gYWRkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gdGhlIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIEFQSSByZXN1bHRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIFByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlQ29tbWVudChjb21tZW50LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50c2AsIHtib2R5OiBjb21tZW50fSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYSBjb21tZW50IG9uIHRoZSBnaXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2lzdHMvY29tbWVudHMvI2VkaXQtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudCAtIHRoZSBpZCBvZiB0aGUgY29tbWVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJvZHkgLSB0aGUgbmV3IGNvbW1lbnRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIGNvbW1lbnRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdENvbW1lbnQoY29tbWVudCwgYm9keSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvZ2lzdHMvJHt0aGlzLl9faWR9L2NvbW1lbnRzLyR7Y29tbWVudH1gLCB7Ym9keTogYm9keX0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBjb21tZW50IG9uIHRoZSBnaXN0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzL2NvbW1lbnRzLyNkZWxldGUtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gY29tbWVudCAtIHRoZSBpZCBvZiB0aGUgY29tbWVudFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBQcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZUNvbW1lbnQoY29tbWVudCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL2dpc3RzLyR7dGhpcy5fX2lkfS9jb21tZW50cy8ke2NvbW1lbnR9YCwgbnVsbCwgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdpc3Q7XG4iXX0=
//# sourceMappingURL=Gist.js.map


/***/ }),

/***/ 6915:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/* eslint valid-jsdoc: ["error", {"requireReturnDescription": false}] */

var _Gist = __nccwpck_require__(3411);

var _Gist2 = _interopRequireDefault(_Gist);

var _User = __nccwpck_require__(4293);

var _User2 = _interopRequireDefault(_User);

var _Issue = __nccwpck_require__(6899);

var _Issue2 = _interopRequireDefault(_Issue);

var _Search = __nccwpck_require__(3333);

var _Search2 = _interopRequireDefault(_Search);

var _RateLimit = __nccwpck_require__(4653);

var _RateLimit2 = _interopRequireDefault(_RateLimit);

var _Repository = __nccwpck_require__(2348);

var _Repository2 = _interopRequireDefault(_Repository);

var _Organization = __nccwpck_require__(884);

var _Organization2 = _interopRequireDefault(_Organization);

var _Team = __nccwpck_require__(1728);

var _Team2 = _interopRequireDefault(_Team);

var _Markdown = __nccwpck_require__(4747);

var _Markdown2 = _interopRequireDefault(_Markdown);

var _Project = __nccwpck_require__(1140);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * GitHub encapsulates the functionality to create various API wrapper objects.
 */
var GitHub = function () {
  /**
   * Create a new GitHub.
   * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
   *                                  not provided requests will be made unauthenticated
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function GitHub(auth) {
    var apiBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://api.github.com';

    _classCallCheck(this, GitHub);

    this.__apiBase = apiBase;
    this.__auth = auth || {};
  }

  /**
   * Create a new Gist wrapper
   * @param {string} [id] - the id for the gist, leave undefined when creating a new gist
   * @return {Gist}
   */


  _createClass(GitHub, [{
    key: 'getGist',
    value: function getGist(id) {
      return new _Gist2.default(id, this.__auth, this.__apiBase);
    }

    /**
     * Create a new User wrapper
     * @param {string} [user] - the name of the user to get information about
     *                        leave undefined for the authenticated user
     * @return {User}
     */

  }, {
    key: 'getUser',
    value: function getUser(user) {
      return new _User2.default(user, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Organization wrapper
     * @param {string} organization - the name of the organization
     * @return {Organization}
     */

  }, {
    key: 'getOrganization',
    value: function getOrganization(organization) {
      return new _Organization2.default(organization, this.__auth, this.__apiBase);
    }

    /**
     * create a new Team wrapper
     * @param {string} teamId - the name of the team
     * @return {team}
     */

  }, {
    key: 'getTeam',
    value: function getTeam(teamId) {
      return new _Team2.default(teamId, this.__auth, this.__apiBase);
    }

    /**
     * Create a new Repository wrapper
     * @param {string} user - the user who owns the repository
     * @param {string} repo - the name of the repository
     * @return {Repository}
     */

  }, {
    key: 'getRepo',
    value: function getRepo(user, repo) {
      return new _Repository2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
    }

    /**
     * Create a new Issue wrapper
     * @param {string} user - the user who owns the repository
     * @param {string} repo - the name of the repository
     * @return {Issue}
     */

  }, {
    key: 'getIssues',
    value: function getIssues(user, repo) {
      return new _Issue2.default(this._getFullName(user, repo), this.__auth, this.__apiBase);
    }

    /**
     * Create a new Search wrapper
     * @param {string} query - the query to search for
     * @return {Search}
     */

  }, {
    key: 'search',
    value: function search(query) {
      return new _Search2.default(query, this.__auth, this.__apiBase);
    }

    /**
     * Create a new RateLimit wrapper
     * @return {RateLimit}
     */

  }, {
    key: 'getRateLimit',
    value: function getRateLimit() {
      return new _RateLimit2.default(this.__auth, this.__apiBase);
    }

    /**
     * Create a new Markdown wrapper
     * @return {Markdown}
     */

  }, {
    key: 'getMarkdown',
    value: function getMarkdown() {
      return new _Markdown2.default(this.__auth, this.__apiBase);
    }

    /**
     * Create a new Project wrapper
     * @param {string} id - the id of the project
     * @return {Project}
     */

  }, {
    key: 'getProject',
    value: function getProject(id) {
      return new _Project2.default(id, this.__auth, this.__apiBase);
    }

    /**
     * Computes the full repository name
     * @param {string} user - the username (or the full name)
     * @param {string} repo - the repository name, must not be passed if `user` is the full name
     * @return {string} the repository's full name
     */

  }, {
    key: '_getFullName',
    value: function _getFullName(user, repo) {
      var fullname = user;

      if (repo) {
        fullname = user + '/' + repo;
      }

      return fullname;
    }
  }]);

  return GitHub;
}();

module.exports = GitHub;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdpdEh1Yi5qcyJdLCJuYW1lcyI6WyJHaXRIdWIiLCJhdXRoIiwiYXBpQmFzZSIsIl9fYXBpQmFzZSIsIl9fYXV0aCIsImlkIiwiR2lzdCIsInVzZXIiLCJVc2VyIiwib3JnYW5pemF0aW9uIiwiT3JnYW5pemF0aW9uIiwidGVhbUlkIiwiVGVhbSIsInJlcG8iLCJSZXBvc2l0b3J5IiwiX2dldEZ1bGxOYW1lIiwiSXNzdWUiLCJxdWVyeSIsIlNlYXJjaCIsIlJhdGVMaW1pdCIsIk1hcmtkb3duIiwiUHJvamVjdCIsImZ1bGxuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7cWpCQUFBOzs7Ozs7QUFNQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQTs7O0lBR01BLE07QUFDSDs7Ozs7O0FBTUEsa0JBQVlDLElBQVosRUFBc0Q7QUFBQSxRQUFwQ0MsT0FBb0MsdUVBQTFCLHdCQUEwQjs7QUFBQTs7QUFDbkQsU0FBS0MsU0FBTCxHQUFpQkQsT0FBakI7QUFDQSxTQUFLRSxNQUFMLEdBQWNILFFBQVEsRUFBdEI7QUFDRjs7QUFFRDs7Ozs7Ozs7OzRCQUtRSSxFLEVBQUk7QUFDVCxhQUFPLElBQUlDLGNBQUosQ0FBU0QsRUFBVCxFQUFhLEtBQUtELE1BQWxCLEVBQTBCLEtBQUtELFNBQS9CLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzRCQU1RSSxJLEVBQU07QUFDWCxhQUFPLElBQUlDLGNBQUosQ0FBU0QsSUFBVCxFQUFlLEtBQUtILE1BQXBCLEVBQTRCLEtBQUtELFNBQWpDLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7b0NBS2dCTSxZLEVBQWM7QUFDM0IsYUFBTyxJQUFJQyxzQkFBSixDQUFpQkQsWUFBakIsRUFBK0IsS0FBS0wsTUFBcEMsRUFBNEMsS0FBS0QsU0FBakQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs0QkFLUVEsTSxFQUFRO0FBQ2IsYUFBTyxJQUFJQyxjQUFKLENBQVNELE1BQVQsRUFBaUIsS0FBS1AsTUFBdEIsRUFBOEIsS0FBS0QsU0FBbkMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7NEJBTVFJLEksRUFBTU0sSSxFQUFNO0FBQ2pCLGFBQU8sSUFBSUMsb0JBQUosQ0FBZSxLQUFLQyxZQUFMLENBQWtCUixJQUFsQixFQUF3Qk0sSUFBeEIsQ0FBZixFQUE4QyxLQUFLVCxNQUFuRCxFQUEyRCxLQUFLRCxTQUFoRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs4QkFNVUksSSxFQUFNTSxJLEVBQU07QUFDbkIsYUFBTyxJQUFJRyxlQUFKLENBQVUsS0FBS0QsWUFBTCxDQUFrQlIsSUFBbEIsRUFBd0JNLElBQXhCLENBQVYsRUFBeUMsS0FBS1QsTUFBOUMsRUFBc0QsS0FBS0QsU0FBM0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7OzsyQkFLT2MsSyxFQUFPO0FBQ1gsYUFBTyxJQUFJQyxnQkFBSixDQUFXRCxLQUFYLEVBQWtCLEtBQUtiLE1BQXZCLEVBQStCLEtBQUtELFNBQXBDLENBQVA7QUFDRjs7QUFFRDs7Ozs7OzttQ0FJZTtBQUNaLGFBQU8sSUFBSWdCLG1CQUFKLENBQWMsS0FBS2YsTUFBbkIsRUFBMkIsS0FBS0QsU0FBaEMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7O2tDQUljO0FBQ1gsYUFBTyxJQUFJaUIsa0JBQUosQ0FBYSxLQUFLaEIsTUFBbEIsRUFBMEIsS0FBS0QsU0FBL0IsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7OzsrQkFLV0UsRSxFQUFJO0FBQ1osYUFBTyxJQUFJZ0IsaUJBQUosQ0FBWWhCLEVBQVosRUFBZ0IsS0FBS0QsTUFBckIsRUFBNkIsS0FBS0QsU0FBbEMsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7aUNBTWFJLEksRUFBTU0sSSxFQUFNO0FBQ3RCLFVBQUlTLFdBQVdmLElBQWY7O0FBRUEsVUFBSU0sSUFBSixFQUFVO0FBQ1BTLG1CQUFjZixJQUFkLFNBQXNCTSxJQUF0QjtBQUNGOztBQUVELGFBQU9TLFFBQVA7QUFDRjs7Ozs7O0FBR0pDLE9BQU9DLE9BQVAsR0FBaUJ4QixNQUFqQiIsImZpbGUiOiJHaXRIdWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG4vKiBlc2xpbnQgdmFsaWQtanNkb2M6IFtcImVycm9yXCIsIHtcInJlcXVpcmVSZXR1cm5EZXNjcmlwdGlvblwiOiBmYWxzZX1dICovXG5cbmltcG9ydCBHaXN0IGZyb20gJy4vR2lzdCc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IElzc3VlIGZyb20gJy4vSXNzdWUnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgUmF0ZUxpbWl0IGZyb20gJy4vUmF0ZUxpbWl0JztcbmltcG9ydCBSZXBvc2l0b3J5IGZyb20gJy4vUmVwb3NpdG9yeSc7XG5pbXBvcnQgT3JnYW5pemF0aW9uIGZyb20gJy4vT3JnYW5pemF0aW9uJztcbmltcG9ydCBUZWFtIGZyb20gJy4vVGVhbSc7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSAnLi9NYXJrZG93bic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuXG4vKipcbiAqIEdpdEh1YiBlbmNhcHN1bGF0ZXMgdGhlIGZ1bmN0aW9uYWxpdHkgdG8gY3JlYXRlIHZhcmlvdXMgQVBJIHdyYXBwZXIgb2JqZWN0cy5cbiAqL1xuY2xhc3MgR2l0SHViIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IEdpdEh1Yi5cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gdGhlIGNyZWRlbnRpYWxzIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWIuIElmIGF1dGggaXNcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBwcm92aWRlZCByZXF1ZXN0cyB3aWxsIGJlIG1hZGUgdW5hdXRoZW50aWNhdGVkXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihhdXRoLCBhcGlCYXNlID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20nKSB7XG4gICAgICB0aGlzLl9fYXBpQmFzZSA9IGFwaUJhc2U7XG4gICAgICB0aGlzLl9fYXV0aCA9IGF1dGggfHwge307XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IEdpc3Qgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtpZF0gLSB0aGUgaWQgZm9yIHRoZSBnaXN0LCBsZWF2ZSB1bmRlZmluZWQgd2hlbiBjcmVhdGluZyBhIG5ldyBnaXN0XG4gICAgKiBAcmV0dXJuIHtHaXN0fVxuICAgICovXG4gICBnZXRHaXN0KGlkKSB7XG4gICAgICByZXR1cm4gbmV3IEdpc3QoaWQsIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IFVzZXIgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IFt1c2VyXSAtIHRoZSBuYW1lIG9mIHRoZSB1c2VyIHRvIGdldCBpbmZvcm1hdGlvbiBhYm91dFxuICAgICogICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZSB1bmRlZmluZWQgZm9yIHRoZSBhdXRoZW50aWNhdGVkIHVzZXJcbiAgICAqIEByZXR1cm4ge1VzZXJ9XG4gICAgKi9cbiAgIGdldFVzZXIodXNlcikge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKHVzZXIsIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IE9yZ2FuaXphdGlvbiB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3JnYW5pemF0aW9uIC0gdGhlIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvblxuICAgICogQHJldHVybiB7T3JnYW5pemF0aW9ufVxuICAgICovXG4gICBnZXRPcmdhbml6YXRpb24ob3JnYW5pemF0aW9uKSB7XG4gICAgICByZXR1cm4gbmV3IE9yZ2FuaXphdGlvbihvcmdhbml6YXRpb24sIHRoaXMuX19hdXRoLCB0aGlzLl9fYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogY3JlYXRlIGEgbmV3IFRlYW0gd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHRlYW1JZCAtIHRoZSBuYW1lIG9mIHRoZSB0ZWFtXG4gICAgKiBAcmV0dXJuIHt0ZWFtfVxuICAgICovXG4gICBnZXRUZWFtKHRlYW1JZCkge1xuICAgICAgcmV0dXJuIG5ldyBUZWFtKHRlYW1JZCwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgUmVwb3NpdG9yeSB3cmFwcGVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlciAtIHRoZSB1c2VyIHdobyBvd25zIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIHRoZSBuYW1lIG9mIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcmV0dXJuIHtSZXBvc2l0b3J5fVxuICAgICovXG4gICBnZXRSZXBvKHVzZXIsIHJlcG8pIHtcbiAgICAgIHJldHVybiBuZXcgUmVwb3NpdG9yeSh0aGlzLl9nZXRGdWxsTmFtZSh1c2VyLCByZXBvKSwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgSXNzdWUgd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXIgLSB0aGUgdXNlciB3aG8gb3ducyB0aGUgcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG8gLSB0aGUgbmFtZSBvZiB0aGUgcmVwb3NpdG9yeVxuICAgICogQHJldHVybiB7SXNzdWV9XG4gICAgKi9cbiAgIGdldElzc3Vlcyh1c2VyLCByZXBvKSB7XG4gICAgICByZXR1cm4gbmV3IElzc3VlKHRoaXMuX2dldEZ1bGxOYW1lKHVzZXIsIHJlcG8pLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBTZWFyY2ggd3JhcHBlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gdGhlIHF1ZXJ5IHRvIHNlYXJjaCBmb3JcbiAgICAqIEByZXR1cm4ge1NlYXJjaH1cbiAgICAqL1xuICAgc2VhcmNoKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbmV3IFNlYXJjaChxdWVyeSwgdGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgUmF0ZUxpbWl0IHdyYXBwZXJcbiAgICAqIEByZXR1cm4ge1JhdGVMaW1pdH1cbiAgICAqL1xuICAgZ2V0UmF0ZUxpbWl0KCkge1xuICAgICAgcmV0dXJuIG5ldyBSYXRlTGltaXQodGhpcy5fX2F1dGgsIHRoaXMuX19hcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgTWFya2Rvd24gd3JhcHBlclxuICAgICogQHJldHVybiB7TWFya2Rvd259XG4gICAgKi9cbiAgIGdldE1hcmtkb3duKCkge1xuICAgICAgcmV0dXJuIG5ldyBNYXJrZG93bih0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBQcm9qZWN0IHdyYXBwZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgcHJvamVjdFxuICAgICogQHJldHVybiB7UHJvamVjdH1cbiAgICAqL1xuICAgZ2V0UHJvamVjdChpZCkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9qZWN0KGlkLCB0aGlzLl9fYXV0aCwgdGhpcy5fX2FwaUJhc2UpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENvbXB1dGVzIHRoZSBmdWxsIHJlcG9zaXRvcnkgbmFtZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXIgLSB0aGUgdXNlcm5hbWUgKG9yIHRoZSBmdWxsIG5hbWUpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIHRoZSByZXBvc2l0b3J5IG5hbWUsIG11c3Qgbm90IGJlIHBhc3NlZCBpZiBgdXNlcmAgaXMgdGhlIGZ1bGwgbmFtZVxuICAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgcmVwb3NpdG9yeSdzIGZ1bGwgbmFtZVxuICAgICovXG4gICBfZ2V0RnVsbE5hbWUodXNlciwgcmVwbykge1xuICAgICAgbGV0IGZ1bGxuYW1lID0gdXNlcjtcblxuICAgICAgaWYgKHJlcG8pIHtcbiAgICAgICAgIGZ1bGxuYW1lID0gYCR7dXNlcn0vJHtyZXBvfWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmdWxsbmFtZTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHaXRIdWI7XG4iXX0=
//# sourceMappingURL=GitHub.js.map


/***/ }),

/***/ 6899:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Issue wraps the functionality to get issues for repositories
 */
var Issue = function (_Requestable) {
  _inherits(Issue, _Requestable);

  /**
   * Create a new Issue
   * @param {string} repository - the full name of the repository (`:user/:repo`) to get issues for
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Issue(repository, auth, apiBase) {
    _classCallCheck(this, Issue);

    var _this = _possibleConstructorReturn(this, (Issue.__proto__ || Object.getPrototypeOf(Issue)).call(this, auth, apiBase));

    _this.__repository = repository;
    return _this;
  }

  /**
   * Create a new issue
   * @see https://developer.github.com/v3/issues/#create-an-issue
   * @param {Object} issueData - the issue to create
   * @param {Requestable.callback} [cb] - will receive the created issue
   * @return {Promise} - the promise for the http request
   */


  _createClass(Issue, [{
    key: 'createIssue',
    value: function createIssue(issueData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/issues', issueData, cb);
    }

    /**
     * List the issues for the repository
     * @see https://developer.github.com/v3/issues/#list-issues-for-a-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of issues
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssues',
    value: function listIssues(options, cb) {
      return this._requestAllPages('/repos/' + this.__repository + '/issues', options, cb);
    }

    /**
     * List the events for an issue
     * @see https://developer.github.com/v3/issues/events/#list-events-for-an-issue
     * @param {number} issue - the issue to get events for
     * @param {Requestable.callback} [cb] - will receive the list of events
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssueEvents',
    value: function listIssueEvents(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/events', null, cb);
    }

    /**
     * List comments on an issue
     * @see https://developer.github.com/v3/issues/comments/#list-comments-on-an-issue
     * @param {number} issue - the id of the issue to get comments from
     * @param {Requestable.callback} [cb] - will receive the comments
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listIssueComments',
    value: function listIssueComments(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue + '/comments', null, cb);
    }

    /**
     * Get a single comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#get-a-single-comment
     * @param {number} id - the comment id to get
     * @param {Requestable.callback} [cb] - will receive the comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getIssueComment',
    value: function getIssueComment(id, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
    }

    /**
     * Comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#create-a-comment
     * @param {number} issue - the id of the issue to comment on
     * @param {string} comment - the comment to add
     * @param {Requestable.callback} [cb] - will receive the created comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createIssueComment',
    value: function createIssueComment(issue, comment, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/issues/' + issue + '/comments', { body: comment }, cb);
    }

    /**
     * Edit a comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#edit-a-comment
     * @param {number} id - the comment id to edit
     * @param {string} comment - the comment to edit
     * @param {Requestable.callback} [cb] - will receive the edited comment
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editIssueComment',
    value: function editIssueComment(id, comment, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/issues/comments/' + id, { body: comment }, cb);
    }

    /**
     * Delete a comment on an issue
     * @see https://developer.github.com/v3/issues/comments/#delete-a-comment
     * @param {number} id - the comment id to delete
     * @param {Requestable.callback} [cb] - will receive true if the request is successful
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteIssueComment',
    value: function deleteIssueComment(id, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/issues/comments/' + id, null, cb);
    }

    /**
     * Edit an issue
     * @see https://developer.github.com/v3/issues/#edit-an-issue
     * @param {number} issue - the issue number to edit
     * @param {Object} issueData - the new issue data
     * @param {Requestable.callback} [cb] - will receive the modified issue
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editIssue',
    value: function editIssue(issue, issueData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/issues/' + issue, issueData, cb);
    }

    /**
     * Get a particular issue
     * @see https://developer.github.com/v3/issues/#get-a-single-issue
     * @param {number} issue - the issue number to fetch
     * @param {Requestable.callback} [cb] - will receive the issue
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getIssue',
    value: function getIssue(issue, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/issues/' + issue, null, cb);
    }

    /**
     * List the milestones for the repository
     * @see https://developer.github.com/v3/issues/milestones/#list-milestones-for-a-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of milestones
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMilestones',
    value: function listMilestones(options, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/milestones', options, cb);
    }

    /**
     * Get a milestone
     * @see https://developer.github.com/v3/issues/milestones/#get-a-single-milestone
     * @param {string} milestone - the id of the milestone to fetch
     * @param {Requestable.callback} [cb] - will receive the milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getMilestone',
    value: function getMilestone(milestone, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
    }

    /**
     * Create a new milestone
     * @see https://developer.github.com/v3/issues/milestones/#create-a-milestone
     * @param {Object} milestoneData - the milestone definition
     * @param {Requestable.callback} [cb] - will receive the milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createMilestone',
    value: function createMilestone(milestoneData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/milestones', milestoneData, cb);
    }

    /**
     * Edit a milestone
     * @see https://developer.github.com/v3/issues/milestones/#update-a-milestone
     * @param {string} milestone - the id of the milestone to edit
     * @param {Object} milestoneData - the updates to make to the milestone
     * @param {Requestable.callback} [cb] - will receive the updated milestone
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editMilestone',
    value: function editMilestone(milestone, milestoneData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/milestones/' + milestone, milestoneData, cb);
    }

    /**
     * Delete a milestone (this is distinct from closing a milestone)
     * @see https://developer.github.com/v3/issues/milestones/#delete-a-milestone
     * @param {string} milestone - the id of the milestone to delete
     * @param {Requestable.callback} [cb] - will receive the status
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteMilestone',
    value: function deleteMilestone(milestone, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/milestones/' + milestone, null, cb);
    }

    /**
     * Create a new label
     * @see https://developer.github.com/v3/issues/labels/#create-a-label
     * @param {Object} labelData - the label definition
     * @param {Requestable.callback} [cb] - will receive the object representing the label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createLabel',
    value: function createLabel(labelData, cb) {
      return this._request('POST', '/repos/' + this.__repository + '/labels', labelData, cb);
    }

    /**
     * List the labels for the repository
     * @see https://developer.github.com/v3/issues/labels/#list-all-labels-for-this-repository
     * @param {Object} options - filtering options
     * @param {Requestable.callback} [cb] - will receive the array of labels
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listLabels',
    value: function listLabels(options, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/labels', options, cb);
    }

    /**
     * Get a label
     * @see https://developer.github.com/v3/issues/labels/#get-a-single-label
     * @param {string} label - the name of the label to fetch
     * @param {Requestable.callback} [cb] - will receive the label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getLabel',
    value: function getLabel(label, cb) {
      return this._request('GET', '/repos/' + this.__repository + '/labels/' + label, null, cb);
    }

    /**
     * Edit a label
     * @see https://developer.github.com/v3/issues/labels/#update-a-label
     * @param {string} label - the name of the label to edit
     * @param {Object} labelData - the updates to make to the label
     * @param {Requestable.callback} [cb] - will receive the updated label
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editLabel',
    value: function editLabel(label, labelData, cb) {
      return this._request('PATCH', '/repos/' + this.__repository + '/labels/' + label, labelData, cb);
    }

    /**
     * Delete a label
     * @see https://developer.github.com/v3/issues/labels/#delete-a-label
     * @param {string} label - the name of the label to delete
     * @param {Requestable.callback} [cb] - will receive the status
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteLabel',
    value: function deleteLabel(label, cb) {
      return this._request('DELETE', '/repos/' + this.__repository + '/labels/' + label, null, cb);
    }
  }]);

  return Issue;
}(_Requestable3.default);

module.exports = Issue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklzc3VlLmpzIl0sIm5hbWVzIjpbIklzc3VlIiwicmVwb3NpdG9yeSIsImF1dGgiLCJhcGlCYXNlIiwiX19yZXBvc2l0b3J5IiwiaXNzdWVEYXRhIiwiY2IiLCJfcmVxdWVzdCIsIm9wdGlvbnMiLCJfcmVxdWVzdEFsbFBhZ2VzIiwiaXNzdWUiLCJpZCIsImNvbW1lbnQiLCJib2R5IiwibWlsZXN0b25lIiwibWlsZXN0b25lRGF0YSIsImxhYmVsRGF0YSIsImxhYmVsIiwiUmVxdWVzdGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7Ozs7Ozs7K2VBUEE7Ozs7Ozs7QUFTQTs7O0lBR01BLEs7OztBQUNIOzs7Ozs7QUFNQSxpQkFBWUMsVUFBWixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQUE7O0FBQUEsOEdBQzlCRCxJQUQ4QixFQUN4QkMsT0FEd0I7O0FBRXBDLFVBQUtDLFlBQUwsR0FBb0JILFVBQXBCO0FBRm9DO0FBR3RDOztBQUVEOzs7Ozs7Ozs7OztnQ0FPWUksUyxFQUFXQyxFLEVBQUk7QUFDeEIsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxjQUFnQyxLQUFLSCxZQUFyQyxjQUE0REMsU0FBNUQsRUFBdUVDLEVBQXZFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzsrQkFPV0UsTyxFQUFTRixFLEVBQUk7QUFDckIsYUFBTyxLQUFLRyxnQkFBTCxhQUFnQyxLQUFLTCxZQUFyQyxjQUE0REksT0FBNUQsRUFBcUVGLEVBQXJFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztvQ0FPZ0JJLEssRUFBT0osRSxFQUFJO0FBQ3hCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsY0FBK0IsS0FBS0gsWUFBcEMsZ0JBQTJETSxLQUEzRCxjQUEyRSxJQUEzRSxFQUFpRkosRUFBakYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O3NDQU9rQkksSyxFQUFPSixFLEVBQUk7QUFDMUIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLSCxZQUFwQyxnQkFBMkRNLEtBQTNELGdCQUE2RSxJQUE3RSxFQUFtRkosRUFBbkYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O29DQU9nQkssRSxFQUFJTCxFLEVBQUk7QUFDckIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLSCxZQUFwQyx5QkFBb0VPLEVBQXBFLEVBQTBFLElBQTFFLEVBQWdGTCxFQUFoRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O3VDQVFtQkksSyxFQUFPRSxPLEVBQVNOLEUsRUFBSTtBQUNwQyxhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGNBQWdDLEtBQUtILFlBQXJDLGdCQUE0RE0sS0FBNUQsZ0JBQThFLEVBQUNHLE1BQU1ELE9BQVAsRUFBOUUsRUFBK0ZOLEVBQS9GLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7cUNBUWlCSyxFLEVBQUlDLE8sRUFBU04sRSxFQUFJO0FBQy9CLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBS0gsWUFBdEMseUJBQXNFTyxFQUF0RSxFQUE0RSxFQUFDRSxNQUFNRCxPQUFQLEVBQTVFLEVBQTZGTixFQUE3RixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7dUNBT21CSyxFLEVBQUlMLEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUtILFlBQXZDLHlCQUF1RU8sRUFBdkUsRUFBNkUsSUFBN0UsRUFBbUZMLEVBQW5GLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7OEJBUVVJLEssRUFBT0wsUyxFQUFXQyxFLEVBQUk7QUFDN0IsYUFBTyxLQUFLQyxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLSCxZQUF0QyxnQkFBNkRNLEtBQTdELEVBQXNFTCxTQUF0RSxFQUFpRkMsRUFBakYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OzZCQU9TSSxLLEVBQU9KLEUsRUFBSTtBQUNqQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtILFlBQXBDLGdCQUEyRE0sS0FBM0QsRUFBb0UsSUFBcEUsRUFBMEVKLEVBQTFFLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzttQ0FPZUUsTyxFQUFTRixFLEVBQUk7QUFDekIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxjQUErQixLQUFLSCxZQUFwQyxrQkFBK0RJLE9BQS9ELEVBQXdFRixFQUF4RSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7aUNBT2FRLFMsRUFBV1IsRSxFQUFJO0FBQ3pCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLEtBQWQsY0FBK0IsS0FBS0gsWUFBcEMsb0JBQStEVSxTQUEvRCxFQUE0RSxJQUE1RSxFQUFrRlIsRUFBbEYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O29DQU9nQlMsYSxFQUFlVCxFLEVBQUk7QUFDaEMsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxjQUFnQyxLQUFLSCxZQUFyQyxrQkFBZ0VXLGFBQWhFLEVBQStFVCxFQUEvRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjUSxTLEVBQVdDLGEsRUFBZVQsRSxFQUFJO0FBQ3pDLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE9BQWQsY0FBaUMsS0FBS0gsWUFBdEMsb0JBQWlFVSxTQUFqRSxFQUE4RUMsYUFBOUUsRUFBNkZULEVBQTdGLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztvQ0FPZ0JRLFMsRUFBV1IsRSxFQUFJO0FBQzVCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsY0FBa0MsS0FBS0gsWUFBdkMsb0JBQWtFVSxTQUFsRSxFQUErRSxJQUEvRSxFQUFxRlIsRUFBckYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2dDQU9ZVSxTLEVBQVdWLEUsRUFBSTtBQUN4QixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxNQUFkLGNBQWdDLEtBQUtILFlBQXJDLGNBQTREWSxTQUE1RCxFQUF1RVYsRUFBdkUsQ0FBUDtBQUNGOztBQUVGOzs7Ozs7Ozs7OytCQU9ZRSxPLEVBQVNGLEUsRUFBSTtBQUNyQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtILFlBQXBDLGNBQTJESSxPQUEzRCxFQUFvRUYsRUFBcEUsQ0FBUDtBQUNGOztBQUVGOzs7Ozs7Ozs7OzZCQU9VVyxLLEVBQU9YLEUsRUFBSTtBQUNqQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtILFlBQXBDLGdCQUEyRGEsS0FBM0QsRUFBb0UsSUFBcEUsRUFBMEVYLEVBQTFFLENBQVA7QUFDRjs7QUFFRjs7Ozs7Ozs7Ozs7OEJBUVdXLEssRUFBT0QsUyxFQUFXVixFLEVBQUk7QUFDN0IsYUFBTyxLQUFLQyxRQUFMLENBQWMsT0FBZCxjQUFpQyxLQUFLSCxZQUF0QyxnQkFBNkRhLEtBQTdELEVBQXNFRCxTQUF0RSxFQUFpRlYsRUFBakYsQ0FBUDtBQUNGOztBQUVGOzs7Ozs7Ozs7O2dDQU9hVyxLLEVBQU9YLEUsRUFBSTtBQUNwQixhQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLGNBQWtDLEtBQUtILFlBQXZDLGdCQUE4RGEsS0FBOUQsRUFBdUUsSUFBdkUsRUFBNkVYLEVBQTdFLENBQVA7QUFDRjs7OztFQTNPZ0JZLHFCOztBQThPcEJDLE9BQU9DLE9BQVAsR0FBaUJwQixLQUFqQiIsImZpbGUiOiJJc3N1ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuXG4vKipcbiAqIElzc3VlIHdyYXBzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGdldCBpc3N1ZXMgZm9yIHJlcG9zaXRvcmllc1xuICovXG5jbGFzcyBJc3N1ZSBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IElzc3VlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwb3NpdG9yeSAtIHRoZSBmdWxsIG5hbWUgb2YgdGhlIHJlcG9zaXRvcnkgKGA6dXNlci86cmVwb2ApIHRvIGdldCBpc3N1ZXMgZm9yXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnksIGF1dGgsIGFwaUJhc2UpIHtcbiAgICAgIHN1cGVyKGF1dGgsIGFwaUJhc2UpO1xuICAgICAgdGhpcy5fX3JlcG9zaXRvcnkgPSByZXBvc2l0b3J5O1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy8jY3JlYXRlLWFuLWlzc3VlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gaXNzdWVEYXRhIC0gdGhlIGlzc3VlIHRvIGNyZWF0ZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY3JlYXRlZCBpc3N1ZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVJc3N1ZShpc3N1ZURhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzYCwgaXNzdWVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgaXNzdWVzIGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy8jbGlzdC1pc3N1ZXMtZm9yLWEtcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBmaWx0ZXJpbmcgb3B0aW9uc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgYXJyYXkgb2YgaXNzdWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RJc3N1ZXMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgZXZlbnRzIGZvciBhbiBpc3N1ZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9ldmVudHMvI2xpc3QtZXZlbnRzLWZvci1hbi1pc3N1ZVxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlzc3VlIC0gdGhlIGlzc3VlIHRvIGdldCBldmVudHMgZm9yXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGV2ZW50c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0SXNzdWVFdmVudHMoaXNzdWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvJHtpc3N1ZX0vZXZlbnRzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgY29tbWVudHMgb24gYW4gaXNzdWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvY29tbWVudHMvI2xpc3QtY29tbWVudHMtb24tYW4taXNzdWVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpc3N1ZSAtIHRoZSBpZCBvZiB0aGUgaXNzdWUgdG8gZ2V0IGNvbW1lbnRzIGZyb21cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1lbnRzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RJc3N1ZUNvbW1lbnRzKGlzc3VlLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzLyR7aXNzdWV9L2NvbW1lbnRzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIHNpbmdsZSBjb21tZW50IG9uIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2NvbW1lbnRzLyNnZXQtYS1zaW5nbGUtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGNvbW1lbnQgaWQgdG8gZ2V0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjb21tZW50XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldElzc3VlQ29tbWVudChpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy9jb21tZW50cy8ke2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21tZW50IG9uIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2NvbW1lbnRzLyNjcmVhdGUtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaXNzdWUgLSB0aGUgaWQgb2YgdGhlIGlzc3VlIHRvIGNvbW1lbnQgb25cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21tZW50IC0gdGhlIGNvbW1lbnQgdG8gYWRkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBjcmVhdGVkIGNvbW1lbnRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlSXNzdWVDb21tZW50KGlzc3VlLCBjb21tZW50LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy8ke2lzc3VlfS9jb21tZW50c2AsIHtib2R5OiBjb21tZW50fSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYSBjb21tZW50IG9uIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2NvbW1lbnRzLyNlZGl0LWEtY29tbWVudFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGNvbW1lbnQgaWQgdG8gZWRpdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1lbnQgLSB0aGUgY29tbWVudCB0byBlZGl0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBlZGl0ZWQgY29tbWVudFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBlZGl0SXNzdWVDb21tZW50KGlkLCBjb21tZW50LCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvY29tbWVudHMvJHtpZH1gLCB7Ym9keTogY29tbWVudH0sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBjb21tZW50IG9uIGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2NvbW1lbnRzLyNkZWxldGUtYS1jb21tZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgY29tbWVudCBpZCB0byBkZWxldGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZUlzc3VlQ29tbWVudChpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2lzc3Vlcy9jb21tZW50cy8ke2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGFuIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzLyNlZGl0LWFuLWlzc3VlXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaXNzdWUgLSB0aGUgaXNzdWUgbnVtYmVyIHRvIGVkaXRcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBpc3N1ZURhdGEgLSB0aGUgbmV3IGlzc3VlIGRhdGFcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIGlzc3VlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGVkaXRJc3N1ZShpc3N1ZSwgaXNzdWVEYXRhLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9pc3N1ZXMvJHtpc3N1ZX1gLCBpc3N1ZURhdGEsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBwYXJ0aWN1bGFyIGlzc3VlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzLyNnZXQtYS1zaW5nbGUtaXNzdWVcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpc3N1ZSAtIHRoZSBpc3N1ZSBudW1iZXIgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGlzc3VlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldElzc3VlKGlzc3VlLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vaXNzdWVzLyR7aXNzdWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIG1pbGVzdG9uZXMgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL21pbGVzdG9uZXMvI2xpc3QtbWlsZXN0b25lcy1mb3ItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGZpbHRlcmluZyBvcHRpb25zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBtaWxlc3RvbmVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RNaWxlc3RvbmVzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9taWxlc3RvbmVzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIG1pbGVzdG9uZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyNnZXQtYS1zaW5nbGUtbWlsZXN0b25lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWlsZXN0b25lIC0gdGhlIGlkIG9mIHRoZSBtaWxlc3RvbmUgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG1pbGVzdG9uZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRNaWxlc3RvbmUobWlsZXN0b25lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lcy8ke21pbGVzdG9uZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IG1pbGVzdG9uZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9taWxlc3RvbmVzLyNjcmVhdGUtYS1taWxlc3RvbmVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBtaWxlc3RvbmVEYXRhIC0gdGhlIG1pbGVzdG9uZSBkZWZpbml0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtaWxlc3RvbmVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlTWlsZXN0b25lKG1pbGVzdG9uZURhdGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lc2AsIG1pbGVzdG9uZURhdGEsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgbWlsZXN0b25lXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL21pbGVzdG9uZXMvI3VwZGF0ZS1hLW1pbGVzdG9uZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG1pbGVzdG9uZSAtIHRoZSBpZCBvZiB0aGUgbWlsZXN0b25lIHRvIGVkaXRcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBtaWxlc3RvbmVEYXRhIC0gdGhlIHVwZGF0ZXMgdG8gbWFrZSB0byB0aGUgbWlsZXN0b25lXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIG1pbGVzdG9uZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBlZGl0TWlsZXN0b25lKG1pbGVzdG9uZSwgbWlsZXN0b25lRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbWlsZXN0b25lcy8ke21pbGVzdG9uZX1gLCBtaWxlc3RvbmVEYXRhLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgbWlsZXN0b25lICh0aGlzIGlzIGRpc3RpbmN0IGZyb20gY2xvc2luZyBhIG1pbGVzdG9uZSlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbWlsZXN0b25lcy8jZGVsZXRlLWEtbWlsZXN0b25lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWlsZXN0b25lIC0gdGhlIGlkIG9mIHRoZSBtaWxlc3RvbmUgdG8gZGVsZXRlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBzdGF0dXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlTWlsZXN0b25lKG1pbGVzdG9uZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L21pbGVzdG9uZXMvJHttaWxlc3RvbmV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBsYWJlbFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9sYWJlbHMvI2NyZWF0ZS1hLWxhYmVsXG4gICAgKiBAcGFyYW0ge09iamVjdH0gbGFiZWxEYXRhIC0gdGhlIGxhYmVsIGRlZmluaXRpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGxhYmVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUxhYmVsKGxhYmVsRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9sYWJlbHNgLCBsYWJlbERhdGEsIGNiKTtcbiAgIH1cblxuICAvKipcbiAgICogTGlzdCB0aGUgbGFiZWxzIGZvciB0aGUgcmVwb3NpdG9yeVxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvaXNzdWVzL2xhYmVscy8jbGlzdC1hbGwtbGFiZWxzLWZvci10aGlzLXJlcG9zaXRvcnlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBmaWx0ZXJpbmcgb3B0aW9uc1xuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBhcnJheSBvZiBsYWJlbHNcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGxpc3RMYWJlbHMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX3JlcG9zaXRvcnl9L2xhYmVsc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAvKipcbiAgICogR2V0IGEgbGFiZWxcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9sYWJlbHMvI2dldC1hLXNpbmdsZS1sYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSB0aGUgbmFtZSBvZiB0aGUgbGFiZWwgdG8gZmV0Y2hcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGFiZWxcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGdldExhYmVsKGxhYmVsLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbGFiZWxzLyR7bGFiZWx9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gIC8qKlxuICAgKiBFZGl0IGEgbGFiZWxcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2lzc3Vlcy9sYWJlbHMvI3VwZGF0ZS1hLWxhYmVsXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCAtIHRoZSBuYW1lIG9mIHRoZSBsYWJlbCB0byBlZGl0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBsYWJlbERhdGEgLSB0aGUgdXBkYXRlcyB0byBtYWtlIHRvIHRoZSBsYWJlbFxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIGxhYmVsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBlZGl0TGFiZWwobGFiZWwsIGxhYmVsRGF0YSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fcmVwb3NpdG9yeX0vbGFiZWxzLyR7bGFiZWx9YCwgbGFiZWxEYXRhLCBjYik7XG4gICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZSBhIGxhYmVsXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9pc3N1ZXMvbGFiZWxzLyNkZWxldGUtYS1sYWJlbFxuICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSB0aGUgbmFtZSBvZiB0aGUgbGFiZWwgdG8gZGVsZXRlXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHN0YXR1c1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgZGVsZXRlTGFiZWwobGFiZWwsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19yZXBvc2l0b3J5fS9sYWJlbHMvJHtsYWJlbH1gLCBudWxsLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSXNzdWU7XG4iXX0=
//# sourceMappingURL=Issue.js.map


/***/ }),

/***/ 4747:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Renders html from Markdown text
 */
var Markdown = function (_Requestable) {
  _inherits(Markdown, _Requestable);

  /**
   * construct a Markdown
   * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
   * @param {string} [apiBase] - the base Github API URL
   * @return {Promise} - the promise for the http request
   */
  function Markdown(auth, apiBase) {
    _classCallCheck(this, Markdown);

    return _possibleConstructorReturn(this, (Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call(this, auth, apiBase));
  }

  /**
   * Render html from Markdown text.
   * @see https://developer.github.com/v3/markdown/#render-an-arbitrary-markdown-document
   * @param {Object} options - conversion options
   * @param {string} [options.text] - the markdown text to convert
   * @param {string} [options.mode=markdown] - can be either `markdown` or `gfm`
   * @param {string} [options.context] - repository name if mode is gfm
   * @param {Requestable.callback} [cb] - will receive the converted html
   * @return {Promise} - the promise for the http request
   */


  _createClass(Markdown, [{
    key: 'render',
    value: function render(options, cb) {
      return this._request('POST', '/markdown', options, cb, true);
    }
  }]);

  return Markdown;
}(_Requestable3.default);

module.exports = Markdown;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk1hcmtkb3duLmpzIl0sIm5hbWVzIjpbIk1hcmtkb3duIiwiYXV0aCIsImFwaUJhc2UiLCJvcHRpb25zIiwiY2IiLCJfcmVxdWVzdCIsIlJlcXVlc3RhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQU9BOzs7Ozs7Ozs7OytlQVBBOzs7Ozs7O0FBU0E7OztJQUdNQSxROzs7QUFDSDs7Ozs7O0FBTUEsb0JBQVlDLElBQVosRUFBa0JDLE9BQWxCLEVBQTJCO0FBQUE7O0FBQUEsK0dBQ2xCRCxJQURrQixFQUNaQyxPQURZO0FBRTFCOztBQUVEOzs7Ozs7Ozs7Ozs7OzsyQkFVT0MsTyxFQUFTQyxFLEVBQUk7QUFDakIsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxFQUFzQixXQUF0QixFQUFtQ0YsT0FBbkMsRUFBNENDLEVBQTVDLEVBQWdELElBQWhELENBQVA7QUFDRjs7OztFQXZCbUJFLHFCOztBQTBCdkJDLE9BQU9DLE9BQVAsR0FBaUJSLFFBQWpCIiwiZmlsZSI6Ik1hcmtkb3duLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogUmVuZGVycyBodG1sIGZyb20gTWFya2Rvd24gdGV4dFxuICovXG5jbGFzcyBNYXJrZG93biBleHRlbmRzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogY29uc3RydWN0IGEgTWFya2Rvd25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gYXV0aCAtIHRoZSBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgdG8gR2l0SHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2VdIC0gdGhlIGJhc2UgR2l0aHViIEFQSSBVUkxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY29uc3RydWN0b3IoYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogUmVuZGVyIGh0bWwgZnJvbSBNYXJrZG93biB0ZXh0LlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL21hcmtkb3duLyNyZW5kZXItYW4tYXJiaXRyYXJ5LW1hcmtkb3duLWRvY3VtZW50XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIGNvbnZlcnNpb24gb3B0aW9uc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnRleHRdIC0gdGhlIG1hcmtkb3duIHRleHQgdG8gY29udmVydFxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLm1vZGU9bWFya2Rvd25dIC0gY2FuIGJlIGVpdGhlciBgbWFya2Rvd25gIG9yIGBnZm1gXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuY29udGV4dF0gLSByZXBvc2l0b3J5IG5hbWUgaWYgbW9kZSBpcyBnZm1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNvbnZlcnRlZCBodG1sXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHJlbmRlcihvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCAnL21hcmtkb3duJywgb3B0aW9ucywgY2IsIHRydWUpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcmtkb3duO1xuIl19
//# sourceMappingURL=Markdown.js.map


/***/ }),

/***/ 884:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Organization encapsulates the functionality to create repositories in organizations
 */
var Organization = function (_Requestable) {
  _inherits(Organization, _Requestable);

  /**
   * Create a new Organization
   * @param {string} organization - the name of the organization
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Organization(organization, auth, apiBase) {
    _classCallCheck(this, Organization);

    var _this = _possibleConstructorReturn(this, (Organization.__proto__ || Object.getPrototypeOf(Organization)).call(this, auth, apiBase));

    _this.__name = organization;
    return _this;
  }

  /**
   * Create a repository in an organization
   * @see https://developer.github.com/v3/repos/#create
   * @param {Object} options - the repository definition
   * @param {Requestable.callback} [cb] - will receive the created repository
   * @return {Promise} - the promise for the http request
   */


  _createClass(Organization, [{
    key: 'createRepo',
    value: function createRepo(options, cb) {
      return this._request('POST', '/orgs/' + this.__name + '/repos', options, cb);
    }

    /**
     * List the repositories in an organization
     * @see https://developer.github.com/v3/repos/#list-organization-repositories
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getRepos',
    value: function getRepos(cb) {
      var requestOptions = this._getOptionsWithDefaults({ direction: 'desc' });

      return this._requestAllPages('/orgs/' + this.__name + '/repos', requestOptions, cb);
    }

    /**
     * Query if the user is a member or not
     * @param {string} username - the user in question
     * @param {Requestable.callback} [cb] - will receive true if the user is a member
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'isMember',
    value: function isMember(username, cb) {
      return this._request204or404('/orgs/' + this.__name + '/members/' + username, null, cb);
    }

    /**
     * List the users who are members of the company
     * @see https://developer.github.com/v3/orgs/members/#members-list
     * @param {object} options - filtering options
     * @param {string} [options.filter=all] - can be either `2fa_disabled` or `all`
     * @param {string} [options.role=all] - can be one of: `all`, `admin`, or `member`
     * @param {Requestable.callback} [cb] - will receive the list of users
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMembers',
    value: function listMembers(options, cb) {
      return this._request('GET', '/orgs/' + this.__name + '/members', options, cb);
    }

    /**
     * List the Teams in the Organization
     * @see https://developer.github.com/v3/orgs/teams/#list-teams
     * @param {Requestable.callback} [cb] - will receive the list of teams
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getTeams',
    value: function getTeams(cb) {
      return this._requestAllPages('/orgs/' + this.__name + '/teams', undefined, cb);
    }

    /**
     * Create a team
     * @see https://developer.github.com/v3/orgs/teams/#create-team
     * @param {object} options - Team creation parameters
     * @param {string} options.name - The name of the team
     * @param {string} [options.description] - Team description
     * @param {string} [options.repo_names] - Repos to add the team to
     * @param {string} [options.privacy=secret] - The level of privacy the team should have. Can be either one
     * of: `secret`, or `closed`
     * @param {Requestable.callback} [cb] - will receive the created team
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createTeam',
    value: function createTeam(options, cb) {
      return this._request('POST', '/orgs/' + this.__name + '/teams', options, cb);
    }

    /**
     * Get information about all projects
     * @see https://developer.github.com/v3/projects/#list-organization-projects
     * @param {Requestable.callback} [cb] - will receive the list of projects
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listProjects',
    value: function listProjects(cb) {
      return this._requestAllPages('/orgs/' + this.__name + '/projects', { AcceptHeader: 'inertia-preview' }, cb);
    }

    /**
     * Create a new project
     * @see https://developer.github.com/v3/repos/projects/#create-a-project
     * @param {Object} options - the description of the project
     * @param {Requestable.callback} cb - will receive the newly created project
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'createProject',
    value: function createProject(options, cb) {
      options = options || {};
      options.AcceptHeader = 'inertia-preview';
      return this._request('POST', '/orgs/' + this.__name + '/projects', options, cb);
    }
  }]);

  return Organization;
}(_Requestable3.default);

module.exports = Organization;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk9yZ2FuaXphdGlvbi5qcyJdLCJuYW1lcyI6WyJPcmdhbml6YXRpb24iLCJvcmdhbml6YXRpb24iLCJhdXRoIiwiYXBpQmFzZSIsIl9fbmFtZSIsIm9wdGlvbnMiLCJjYiIsIl9yZXF1ZXN0IiwicmVxdWVzdE9wdGlvbnMiLCJfZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyIsImRpcmVjdGlvbiIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJ1c2VybmFtZSIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJ1bmRlZmluZWQiLCJBY2NlcHRIZWFkZXIiLCJSZXF1ZXN0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7Ozs7Ozs7OzsrZUFQQTs7Ozs7OztBQVNBOzs7SUFHTUEsWTs7O0FBQ0g7Ozs7OztBQU1BLHdCQUFZQyxZQUFaLEVBQTBCQyxJQUExQixFQUFnQ0MsT0FBaEMsRUFBeUM7QUFBQTs7QUFBQSw0SEFDaENELElBRGdDLEVBQzFCQyxPQUQwQjs7QUFFdEMsVUFBS0MsTUFBTCxHQUFjSCxZQUFkO0FBRnNDO0FBR3hDOztBQUVEOzs7Ozs7Ozs7OzsrQkFPV0ksTyxFQUFTQyxFLEVBQUk7QUFDckIsYUFBTyxLQUFLQyxRQUFMLENBQWMsTUFBZCxhQUErQixLQUFLSCxNQUFwQyxhQUFvREMsT0FBcEQsRUFBNkRDLEVBQTdELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzZCQU1TQSxFLEVBQUk7QUFDVixVQUFJRSxpQkFBaUIsS0FBS0MsdUJBQUwsQ0FBNkIsRUFBQ0MsV0FBVyxNQUFaLEVBQTdCLENBQXJCOztBQUVBLGFBQU8sS0FBS0MsZ0JBQUwsWUFBK0IsS0FBS1AsTUFBcEMsYUFBb0RJLGNBQXBELEVBQW9FRixFQUFwRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs2QkFNU00sUSxFQUFVTixFLEVBQUk7QUFDcEIsYUFBTyxLQUFLTyxnQkFBTCxZQUErQixLQUFLVCxNQUFwQyxpQkFBc0RRLFFBQXRELEVBQWtFLElBQWxFLEVBQXdFTixFQUF4RSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7OztnQ0FTWUQsTyxFQUFTQyxFLEVBQUk7QUFDdEIsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxhQUE4QixLQUFLSCxNQUFuQyxlQUFxREMsT0FBckQsRUFBOERDLEVBQTlELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OzZCQU1TQSxFLEVBQUk7QUFDVixhQUFPLEtBQUtLLGdCQUFMLFlBQStCLEtBQUtQLE1BQXBDLGFBQW9EVSxTQUFwRCxFQUErRFIsRUFBL0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7K0JBWVdELE8sRUFBU0MsRSxFQUFJO0FBQ3JCLGFBQU8sS0FBS0MsUUFBTCxDQUFjLE1BQWQsYUFBK0IsS0FBS0gsTUFBcEMsYUFBb0RDLE9BQXBELEVBQTZEQyxFQUE3RCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztpQ0FNYUEsRSxFQUFJO0FBQ2QsYUFBTyxLQUFLSyxnQkFBTCxZQUErQixLQUFLUCxNQUFwQyxnQkFBdUQsRUFBQ1csY0FBYyxpQkFBZixFQUF2RCxFQUEwRlQsRUFBMUYsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O2tDQU9jRCxPLEVBQVNDLEUsRUFBSTtBQUN4QkQsZ0JBQVVBLFdBQVcsRUFBckI7QUFDQUEsY0FBUVUsWUFBUixHQUF1QixpQkFBdkI7QUFDQSxhQUFPLEtBQUtSLFFBQUwsQ0FBYyxNQUFkLGFBQStCLEtBQUtILE1BQXBDLGdCQUF1REMsT0FBdkQsRUFBZ0VDLEVBQWhFLENBQVA7QUFDRjs7OztFQXpHdUJVLHFCOztBQTRHM0JDLE9BQU9DLE9BQVAsR0FBaUJsQixZQUFqQiIsImZpbGUiOiJPcmdhbml6YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcblxuLyoqXG4gKiBPcmdhbml6YXRpb24gZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSByZXBvc2l0b3JpZXMgaW4gb3JnYW5pemF0aW9uc1xuICovXG5jbGFzcyBPcmdhbml6YXRpb24gZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBPcmdhbml6YXRpb25cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmdhbml6YXRpb24gLSB0aGUgbmFtZSBvZiB0aGUgb3JnYW5pemF0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKG9yZ2FuaXphdGlvbiwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fbmFtZSA9IG9yZ2FuaXphdGlvbjtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSByZXBvc2l0b3J5IGluIGFuIG9yZ2FuaXphdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNjcmVhdGVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIHJlcG9zaXRvcnkgZGVmaW5pdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgY3JlYXRlZCByZXBvc2l0b3J5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVJlcG8ob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9vcmdzLyR7dGhpcy5fX25hbWV9L3JlcG9zYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHJlcG9zaXRvcmllcyBpbiBhbiBvcmdhbml6YXRpb25cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jbGlzdC1vcmdhbml6YXRpb24tcmVwb3NpdG9yaWVzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRSZXBvcyhjYikge1xuICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cyh7ZGlyZWN0aW9uOiAnZGVzYyd9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL29yZ3MvJHt0aGlzLl9fbmFtZX0vcmVwb3NgLCByZXF1ZXN0T3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFF1ZXJ5IGlmIHRoZSB1c2VyIGlzIGEgbWVtYmVyIG9yIG5vdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gdGhlIHVzZXIgaW4gcXVlc3Rpb25cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgdXNlciBpcyBhIG1lbWJlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBpc01lbWJlcih1c2VybmFtZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC9vcmdzLyR7dGhpcy5fX25hbWV9L21lbWJlcnMvJHt1c2VybmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcnMgd2hvIGFyZSBtZW1iZXJzIG9mIHRoZSBjb21wYW55XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy9tZW1iZXJzLyNtZW1iZXJzLWxpc3RcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gZmlsdGVyaW5nIG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5maWx0ZXI9YWxsXSAtIGNhbiBiZSBlaXRoZXIgYDJmYV9kaXNhYmxlZGAgb3IgYGFsbGBcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yb2xlPWFsbF0gLSBjYW4gYmUgb25lIG9mOiBgYWxsYCwgYGFkbWluYCwgb3IgYG1lbWJlcmBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgdXNlcnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE1lbWJlcnMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL29yZ3MvJHt0aGlzLl9fbmFtZX0vbWVtYmVyc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBUZWFtcyBpbiB0aGUgT3JnYW5pemF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jbGlzdC10ZWFtc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiB0ZWFtc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRUZWFtcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL29yZ3MvJHt0aGlzLl9fbmFtZX0vdGVhbXNgLCB1bmRlZmluZWQsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSB0ZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jY3JlYXRlLXRlYW1cbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGVhbSBjcmVhdGlvbiBwYXJhbWV0ZXJzXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5uYW1lIC0gVGhlIG5hbWUgb2YgdGhlIHRlYW1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kZXNjcmlwdGlvbl0gLSBUZWFtIGRlc2NyaXB0aW9uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucmVwb19uYW1lc10gLSBSZXBvcyB0byBhZGQgdGhlIHRlYW0gdG9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wcml2YWN5PXNlY3JldF0gLSBUaGUgbGV2ZWwgb2YgcHJpdmFjeSB0aGUgdGVhbSBzaG91bGQgaGF2ZS4gQ2FuIGJlIGVpdGhlciBvbmVcbiAgICAqIG9mOiBgc2VjcmV0YCwgb3IgYGNsb3NlZGBcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNyZWF0ZWQgdGVhbVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVUZWFtKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvb3Jncy8ke3RoaXMuX19uYW1lfS90ZWFtc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHByb2plY3RzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvI2xpc3Qtb3JnYW5pemF0aW9uLXByb2plY3RzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHByb2plY3RzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RQcm9qZWN0cyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL29yZ3MvJHt0aGlzLl9fbmFtZX0vcHJvamVjdHNgLCB7QWNjZXB0SGVhZGVyOiAnaW5lcnRpYS1wcmV2aWV3J30sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3Byb2plY3RzLyNjcmVhdGUtYS1wcm9qZWN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ld2x5IGNyZWF0ZWQgcHJvamVjdFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVQcm9qZWN0KG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIG9wdGlvbnMuQWNjZXB0SGVhZGVyID0gJ2luZXJ0aWEtcHJldmlldyc7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvb3Jncy8ke3RoaXMuX19uYW1lfS9wcm9qZWN0c2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBPcmdhbml6YXRpb247XG4iXX0=
//# sourceMappingURL=Organization.js.map


/***/ }),

/***/ 1140:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * Project encapsulates the functionality to create, query, and modify cards and columns.
 */
var Project = function (_Requestable) {
   _inherits(Project, _Requestable);

   /**
    * Create a Project.
    * @param {string} id - the id of the project
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function Project(id, auth, apiBase) {
      _classCallCheck(this, Project);

      var _this = _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).call(this, auth, apiBase, 'inertia-preview'));

      _this.__id = id;
      return _this;
   }

   /**
    * Get information about a project
    * @see https://developer.github.com/v3/projects/#get-a-project
    * @param {Requestable.callback} cb - will receive the project information
    * @return {Promise} - the promise for the http request
    */


   _createClass(Project, [{
      key: 'getProject',
      value: function getProject(cb) {
         return this._request('GET', '/projects/' + this.__id, null, cb);
      }

      /**
       * Edit a project
       * @see https://developer.github.com/v3/projects/#update-a-project
       * @param {Object} options - the description of the project
       * @param {Requestable.callback} cb - will receive the modified project
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateProject',
      value: function updateProject(options, cb) {
         return this._request('PATCH', '/projects/' + this.__id, options, cb);
      }

      /**
       * Delete a project
       * @see https://developer.github.com/v3/projects/#delete-a-project
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteProject',
      value: function deleteProject(cb) {
         return this._request('DELETE', '/projects/' + this.__id, null, cb);
      }

      /**
       * Get information about all columns of a project
       * @see https://developer.github.com/v3/projects/columns/#list-project-columns
       * @param {Requestable.callback} [cb] - will receive the list of columns
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjectColumns',
      value: function listProjectColumns(cb) {
         return this._requestAllPages('/projects/' + this.__id + '/columns', null, cb);
      }

      /**
       * Get information about a column
       * @see https://developer.github.com/v3/projects/columns/#get-a-project-column
       * @param {string} colId - the id of the column
       * @param {Requestable.callback} cb - will receive the column information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getProjectColumn',
      value: function getProjectColumn(colId, cb) {
         return this._request('GET', '/projects/columns/' + colId, null, cb);
      }

      /**
       * Create a new column
       * @see https://developer.github.com/v3/projects/columns/#create-a-project-column
       * @param {Object} options - the description of the column
       * @param {Requestable.callback} cb - will receive the newly created column
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createProjectColumn',
      value: function createProjectColumn(options, cb) {
         return this._request('POST', '/projects/' + this.__id + '/columns', options, cb);
      }

      /**
       * Edit a column
       * @see https://developer.github.com/v3/projects/columns/#update-a-project-column
       * @param {string} colId - the column id
       * @param {Object} options - the description of the column
       * @param {Requestable.callback} cb - will receive the modified column
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateProjectColumn',
      value: function updateProjectColumn(colId, options, cb) {
         return this._request('PATCH', '/projects/columns/' + colId, options, cb);
      }

      /**
       * Delete a column
       * @see https://developer.github.com/v3/projects/columns/#delete-a-project-column
       * @param {string} colId - the column to be deleted
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteProjectColumn',
      value: function deleteProjectColumn(colId, cb) {
         return this._request('DELETE', '/projects/columns/' + colId, null, cb);
      }

      /**
       * Move a column
       * @see https://developer.github.com/v3/projects/columns/#move-a-project-column
       * @param {string} colId - the column to be moved
       * @param {string} position - can be one of first, last, or after:<column-id>,
       * where <column-id> is the id value of a column in the same project.
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'moveProjectColumn',
      value: function moveProjectColumn(colId, position, cb) {
         return this._request('POST', '/projects/columns/' + colId + '/moves', { position: position }, cb);
      }

      /**
       * Get information about all cards of a project
       * @see https://developer.github.com/v3/projects/cards/#list-project-cards
       * @param {Requestable.callback} [cb] - will receive the list of cards
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjectCards',
      value: function listProjectCards(cb) {
         var _this2 = this;

         return this.listProjectColumns().then(function (_ref) {
            var data = _ref.data;

            return Promise.all(data.map(function (column) {
               return _this2._requestAllPages('/projects/columns/' + column.id + '/cards', null);
            }));
         }).then(function (cardsInColumns) {
            var cards = cardsInColumns.reduce(function (prev, _ref2) {
               var data = _ref2.data;

               prev.push.apply(prev, _toConsumableArray(data));
               return prev;
            }, []);
            if (cb) {
               cb(null, cards);
            }
            return cards;
         }).catch(function (err) {
            if (cb) {
               cb(err);
               return;
            }
            throw err;
         });
      }

      /**
      * Get information about all cards of a column
      * @see https://developer.github.com/v3/projects/cards/#list-project-cards
      * @param {string} colId - the id of the column
      * @param {Requestable.callback} [cb] - will receive the list of cards
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'listColumnCards',
      value: function listColumnCards(colId, cb) {
         return this._requestAllPages('/projects/columns/' + colId + '/cards', null, cb);
      }

      /**
      * Get information about a card
      * @see https://developer.github.com/v3/projects/cards/#get-a-project-card
      * @param {string} cardId - the id of the card
      * @param {Requestable.callback} cb - will receive the card information
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'getProjectCard',
      value: function getProjectCard(cardId, cb) {
         return this._request('GET', '/projects/columns/cards/' + cardId, null, cb);
      }

      /**
      * Create a new card
      * @see https://developer.github.com/v3/projects/cards/#create-a-project-card
      * @param {string} colId - the column id
      * @param {Object} options - the description of the card
      * @param {Requestable.callback} cb - will receive the newly created card
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'createProjectCard',
      value: function createProjectCard(colId, options, cb) {
         return this._request('POST', '/projects/columns/' + colId + '/cards', options, cb);
      }

      /**
      * Edit a card
      * @see https://developer.github.com/v3/projects/cards/#update-a-project-card
      * @param {string} cardId - the card id
      * @param {Object} options - the description of the card
      * @param {Requestable.callback} cb - will receive the modified card
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'updateProjectCard',
      value: function updateProjectCard(cardId, options, cb) {
         return this._request('PATCH', '/projects/columns/cards/' + cardId, options, cb);
      }

      /**
      * Delete a card
      * @see https://developer.github.com/v3/projects/cards/#delete-a-project-card
      * @param {string} cardId - the card to be deleted
      * @param {Requestable.callback} cb - will receive true if the operation is successful
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'deleteProjectCard',
      value: function deleteProjectCard(cardId, cb) {
         return this._request('DELETE', '/projects/columns/cards/' + cardId, null, cb);
      }

      /**
      * Move a card
      * @see https://developer.github.com/v3/projects/cards/#move-a-project-card
      * @param {string} cardId - the card to be moved
      * @param {string} position - can be one of top, bottom, or after:<card-id>,
      * where <card-id> is the id value of a card in the same project.
      * @param {string} colId - the id value of a column in the same project.
      * @param {Requestable.callback} cb - will receive true if the operation is successful
      * @return {Promise} - the promise for the http request
      */

   }, {
      key: 'moveProjectCard',
      value: function moveProjectCard(cardId, position, colId, cb) {
         return this._request('POST', '/projects/columns/cards/' + cardId + '/moves', { position: position, column_id: colId }, // eslint-disable-line camelcase
         cb);
      }
   }]);

   return Project;
}(_Requestable3.default);

module.exports = Project;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2plY3QuanMiXSwibmFtZXMiOlsiUHJvamVjdCIsImlkIiwiYXV0aCIsImFwaUJhc2UiLCJfX2lkIiwiY2IiLCJfcmVxdWVzdCIsIm9wdGlvbnMiLCJfcmVxdWVzdEFsbFBhZ2VzIiwiY29sSWQiLCJwb3NpdGlvbiIsImxpc3RQcm9qZWN0Q29sdW1ucyIsInRoZW4iLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImNvbHVtbiIsImNhcmRzSW5Db2x1bW5zIiwiY2FyZHMiLCJyZWR1Y2UiLCJwcmV2IiwicHVzaCIsImNhdGNoIiwiZXJyIiwiY2FyZElkIiwiY29sdW1uX2lkIiwiUmVxdWVzdGFibGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7O0FBT0E7Ozs7Ozs7Ozs7OzsrZUFQQTs7Ozs7OztBQVNBOzs7SUFHTUEsTzs7O0FBQ0g7Ozs7OztBQU1BLG9CQUFZQyxFQUFaLEVBQWdCQyxJQUFoQixFQUFzQkMsT0FBdEIsRUFBK0I7QUFBQTs7QUFBQSxvSEFDdEJELElBRHNCLEVBQ2hCQyxPQURnQixFQUNQLGlCQURPOztBQUU1QixZQUFLQyxJQUFMLEdBQVlILEVBQVo7QUFGNEI7QUFHOUI7O0FBRUQ7Ozs7Ozs7Ozs7aUNBTVdJLEUsRUFBSTtBQUNaLGdCQUFPLEtBQUtDLFFBQUwsQ0FBYyxLQUFkLGlCQUFrQyxLQUFLRixJQUF2QyxFQUErQyxJQUEvQyxFQUFxREMsRUFBckQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O29DQU9jRSxPLEVBQVNGLEUsRUFBSTtBQUN4QixnQkFBTyxLQUFLQyxRQUFMLENBQWMsT0FBZCxpQkFBb0MsS0FBS0YsSUFBekMsRUFBaURHLE9BQWpELEVBQTBERixFQUExRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7OztvQ0FNY0EsRSxFQUFJO0FBQ2YsZ0JBQU8sS0FBS0MsUUFBTCxDQUFjLFFBQWQsaUJBQXFDLEtBQUtGLElBQTFDLEVBQWtELElBQWxELEVBQXdEQyxFQUF4RCxDQUFQO0FBQ0Y7O0FB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LEVBQVNGLEUsRUFBSTtBQUNwQyxnQkFBTyxLQUFLQyxRQUFMLENBQWMsT0FBZCwrQkFBa0RtQixNQUFsRCxFQUE0RGxCLE9BQTVELEVBQXFFRixFQUFyRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7d0NBT2tCb0IsTSxFQUFRcEIsRSxFQUFJO0FBQzNCLGdCQUFPLEtBQUtDLFFBQUwsQ0FBYyxRQUFkLCtCQUFtRG1CLE1BQW5ELEVBQTZELElBQTdELEVBQW1FcEIsRUFBbkUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7O3NDQVVnQm9CLE0sRUFBUWYsUSxFQUFVRCxLLEVBQU9KLEUsRUFBSTtBQUMxQyxnQkFBTyxLQUFLQyxRQUFMLENBQ0osTUFESSwrQkFFdUJtQixNQUZ2QixhQUdKLEVBQUNmLFVBQVVBLFFBQVgsRUFBcUJnQixXQUFXakIsS0FBaEMsRUFISSxFQUdvQztBQUN4Q0osV0FKSSxDQUFQO0FBTUY7Ozs7RUE1TmtCc0IscUI7O0FBK050QkMsT0FBT0MsT0FBUCxHQUFpQjdCLE9BQWpCIiwiZmlsZSI6IlByb2plY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcblxuLyoqXG4gKiBQcm9qZWN0IGVuY2Fwc3VsYXRlcyB0aGUgZnVuY3Rpb25hbGl0eSB0byBjcmVhdGUsIHF1ZXJ5LCBhbmQgbW9kaWZ5IGNhcmRzIGFuZCBjb2x1bW5zLlxuICovXG5jbGFzcyBQcm9qZWN0IGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBQcm9qZWN0LlxuICAgICogQHBhcmFtIHtzdHJpbmd9IGlkIC0gdGhlIGlkIG9mIHRoZSBwcm9qZWN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGlkLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlLCAnaW5lcnRpYS1wcmV2aWV3Jyk7XG4gICAgICB0aGlzLl9faWQgPSBpZDtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9qZWN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvI2dldC1hLXByb2plY3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBwcm9qZWN0IGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFByb2plY3QoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3Byb2plY3RzLyR7dGhpcy5fX2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyN1cGRhdGUtYS1wcm9qZWN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIHByb2plY3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUHJvamVjdChvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9wcm9qZWN0cy8ke3RoaXMuX19pZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyNkZWxldGUtYS1wcm9qZWN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVQcm9qZWN0KGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9wcm9qZWN0cy8ke3RoaXMuX19pZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBjb2x1bW5zIG9mIGEgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NvbHVtbnMvI2xpc3QtcHJvamVjdC1jb2x1bW5zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGNvbHVtbnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFByb2plY3RDb2x1bW5zKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvcHJvamVjdHMvJHt0aGlzLl9faWR9L2NvbHVtbnNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgY29sdW1uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY29sdW1ucy8jZ2V0LWEtcHJvamVjdC1jb2x1bW5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xJZCAtIHRoZSBpZCBvZiB0aGUgY29sdW1uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29sdW1uIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFByb2plY3RDb2x1bW4oY29sSWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9wcm9qZWN0cy9jb2x1bW5zLyR7Y29sSWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyBjb2x1bW5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jb2x1bW5zLyNjcmVhdGUtYS1wcm9qZWN0LWNvbHVtblxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvbHVtblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ld2x5IGNyZWF0ZWQgY29sdW1uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVByb2plY3RDb2x1bW4ob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9wcm9qZWN0cy8ke3RoaXMuX19pZH0vY29sdW1uc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBFZGl0IGEgY29sdW1uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY29sdW1ucy8jdXBkYXRlLWEtcHJvamVjdC1jb2x1bW5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xJZCAtIHRoZSBjb2x1bW4gaWRcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjb2x1bW5cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBtb2RpZmllZCBjb2x1bW5cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUHJvamVjdENvbHVtbihjb2xJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcHJvamVjdHMvY29sdW1ucy8ke2NvbElkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSBjb2x1bW5cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jb2x1bW5zLyNkZWxldGUtYS1wcm9qZWN0LWNvbHVtblxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbElkIC0gdGhlIGNvbHVtbiB0byBiZSBkZWxldGVkXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVQcm9qZWN0Q29sdW1uKGNvbElkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcHJvamVjdHMvY29sdW1ucy8ke2NvbElkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBNb3ZlIGEgY29sdW1uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY29sdW1ucy8jbW92ZS1hLXByb2plY3QtY29sdW1uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgY29sdW1uIHRvIGJlIG1vdmVkXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcG9zaXRpb24gLSBjYW4gYmUgb25lIG9mIGZpcnN0LCBsYXN0LCBvciBhZnRlcjo8Y29sdW1uLWlkPixcbiAgICAqIHdoZXJlIDxjb2x1bW4taWQ+IGlzIHRoZSBpZCB2YWx1ZSBvZiBhIGNvbHVtbiBpbiB0aGUgc2FtZSBwcm9qZWN0LlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbW92ZVByb2plY3RDb2x1bW4oY29sSWQsIHBvc2l0aW9uLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoXG4gICAgICAgICAnUE9TVCcsXG4gICAgICAgICBgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2xJZH0vbW92ZXNgLFxuICAgICAgICAge3Bvc2l0aW9uOiBwb3NpdGlvbn0sXG4gICAgICAgICBjYlxuICAgICAgKTtcbiAgIH1cblxuICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBjYXJkcyBvZiBhIHByb2plY3RcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NhcmRzLyNsaXN0LXByb2plY3QtY2FyZHNcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBjYXJkc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgbGlzdFByb2plY3RDYXJkcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMubGlzdFByb2plY3RDb2x1bW5zKClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4ge1xuICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoZGF0YS5tYXAoKGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvcHJvamVjdHMvY29sdW1ucy8ke2NvbHVtbi5pZH0vY2FyZHNgLCBudWxsKTtcbiAgICAgICAgICAgfSkpO1xuICAgICAgICB9KS50aGVuKChjYXJkc0luQ29sdW1ucykgPT4ge1xuICAgICAgICAgICBjb25zdCBjYXJkcyA9IGNhcmRzSW5Db2x1bW5zLnJlZHVjZSgocHJldiwge2RhdGF9KSA9PiB7XG4gICAgICAgICAgICAgIHByZXYucHVzaCguLi5kYXRhKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgIH0sIFtdKTtcbiAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgIGNiKG51bGwsIGNhcmRzKTtcbiAgICAgICAgICAgfVxuICAgICAgICAgICByZXR1cm4gY2FyZHM7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgIGNiKGVycik7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBjYXJkcyBvZiBhIGNvbHVtblxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY2FyZHMvI2xpc3QtcHJvamVjdC1jYXJkc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgaWQgb2YgdGhlIGNvbHVtblxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGNhcmRzXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBsaXN0Q29sdW1uQ2FyZHMoY29sSWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvcHJvamVjdHMvY29sdW1ucy8ke2NvbElkfS9jYXJkc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIGNhcmRcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzL2NhcmRzLyNnZXQtYS1wcm9qZWN0LWNhcmRcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNhcmRJZCAtIHRoZSBpZCBvZiB0aGUgY2FyZFxuICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY2FyZCBpbmZvcm1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAqL1xuICAgZ2V0UHJvamVjdENhcmQoY2FyZElkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcHJvamVjdHMvY29sdW1ucy9jYXJkcy8ke2NhcmRJZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgKiBDcmVhdGUgYSBuZXcgY2FyZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY2FyZHMvI2NyZWF0ZS1hLXByb2plY3QtY2FyZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgY29sdW1uIGlkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBjYXJkXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXdseSBjcmVhdGVkIGNhcmRcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIGNyZWF0ZVByb2plY3RDYXJkKGNvbElkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3Byb2plY3RzL2NvbHVtbnMvJHtjb2xJZH0vY2FyZHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgKiBFZGl0IGEgY2FyZFxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvY2FyZHMvI3VwZGF0ZS1hLXByb2plY3QtY2FyZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FyZElkIC0gdGhlIGNhcmQgaWRcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNhcmRcbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG1vZGlmaWVkIGNhcmRcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIHVwZGF0ZVByb2plY3RDYXJkKGNhcmRJZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcHJvamVjdHMvY29sdW1ucy9jYXJkcy8ke2NhcmRJZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgKiBEZWxldGUgYSBjYXJkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jYXJkcy8jZGVsZXRlLWEtcHJvamVjdC1jYXJkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjYXJkSWQgLSB0aGUgY2FyZCB0byBiZSBkZWxldGVkXG4gICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICovXG4gICBkZWxldGVQcm9qZWN0Q2FyZChjYXJkSWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9wcm9qZWN0cy9jb2x1bW5zL2NhcmRzLyR7Y2FyZElkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAqIE1vdmUgYSBjYXJkXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wcm9qZWN0cy9jYXJkcy8jbW92ZS1hLXByb2plY3QtY2FyZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2FyZElkIC0gdGhlIGNhcmQgdG8gYmUgbW92ZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvc2l0aW9uIC0gY2FuIGJlIG9uZSBvZiB0b3AsIGJvdHRvbSwgb3IgYWZ0ZXI6PGNhcmQtaWQ+LFxuICAgKiB3aGVyZSA8Y2FyZC1pZD4gaXMgdGhlIGlkIHZhbHVlIG9mIGEgY2FyZCBpbiB0aGUgc2FtZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gY29sSWQgLSB0aGUgaWQgdmFsdWUgb2YgYSBjb2x1bW4gaW4gdGhlIHNhbWUgcHJvamVjdC5cbiAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWxcbiAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgKi9cbiAgIG1vdmVQcm9qZWN0Q2FyZChjYXJkSWQsIHBvc2l0aW9uLCBjb2xJZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KFxuICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgYC9wcm9qZWN0cy9jb2x1bW5zL2NhcmRzLyR7Y2FyZElkfS9tb3Zlc2AsXG4gICAgICAgICB7cG9zaXRpb246IHBvc2l0aW9uLCBjb2x1bW5faWQ6IGNvbElkfSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjYW1lbGNhc2VcbiAgICAgICAgIGNiXG4gICAgICApO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2plY3Q7XG4iXX0=
//# sourceMappingURL=Project.js.map


/***/ }),

/***/ 4653:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * RateLimit allows users to query their rate-limit status
 */
var RateLimit = function (_Requestable) {
  _inherits(RateLimit, _Requestable);

  /**
   * construct a RateLimit
   * @param {Requestable.auth} auth - the credentials to authenticate to GitHub
   * @param {string} [apiBase] - the base Github API URL
   * @return {Promise} - the promise for the http request
   */
  function RateLimit(auth, apiBase) {
    _classCallCheck(this, RateLimit);

    return _possibleConstructorReturn(this, (RateLimit.__proto__ || Object.getPrototypeOf(RateLimit)).call(this, auth, apiBase));
  }

  /**
   * Query the current rate limit
   * @see https://developer.github.com/v3/rate_limit/
   * @param {Requestable.callback} [cb] - will receive the rate-limit data
   * @return {Promise} - the promise for the http request
   */


  _createClass(RateLimit, [{
    key: 'getRateLimit',
    value: function getRateLimit(cb) {
      return this._request('GET', '/rate_limit', null, cb);
    }
  }]);

  return RateLimit;
}(_Requestable3.default);

module.exports = RateLimit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJhdGVMaW1pdC5qcyJdLCJuYW1lcyI6WyJSYXRlTGltaXQiLCJhdXRoIiwiYXBpQmFzZSIsImNiIiwiX3JlcXVlc3QiLCJSZXF1ZXN0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7Ozs7Ozs7OzsrZUFQQTs7Ozs7OztBQVNBOzs7SUFHTUEsUzs7O0FBQ0g7Ozs7OztBQU1BLHFCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQjtBQUFBOztBQUFBLGlIQUNsQkQsSUFEa0IsRUFDWkMsT0FEWTtBQUUxQjs7QUFFRDs7Ozs7Ozs7OztpQ0FNYUMsRSxFQUFJO0FBQ2QsYUFBTyxLQUFLQyxRQUFMLENBQWMsS0FBZCxFQUFxQixhQUFyQixFQUFvQyxJQUFwQyxFQUEwQ0QsRUFBMUMsQ0FBUDtBQUNGOzs7O0VBbkJvQkUscUI7O0FBc0J4QkMsT0FBT0MsT0FBUCxHQUFpQlAsU0FBakIiLCJmaWxlIjoiUmF0ZUxpbWl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5cbi8qKlxuICogUmF0ZUxpbWl0IGFsbG93cyB1c2VycyB0byBxdWVyeSB0aGVpciByYXRlLWxpbWl0IHN0YXR1c1xuICovXG5jbGFzcyBSYXRlTGltaXQgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIGNvbnN0cnVjdCBhIFJhdGVMaW1pdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBhdXRoIC0gdGhlIGNyZWRlbnRpYWxzIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRIdWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjb25zdHJ1Y3RvcihhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBRdWVyeSB0aGUgY3VycmVudCByYXRlIGxpbWl0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmF0ZV9saW1pdC9cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJhdGUtbGltaXQgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRSYXRlTGltaXQoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCAnL3JhdGVfbGltaXQnLCBudWxsLCBjYik7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmF0ZUxpbWl0O1xuIl19
//# sourceMappingURL=RateLimit.js.map


/***/ }),

/***/ 2348:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _utf = __nccwpck_require__(3736);

var _utf2 = _interopRequireDefault(_utf);

var _jsBase = __nccwpck_require__(6065);

var _debug = __nccwpck_require__(583);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:repository');

/**
 * Repository encapsulates the functionality to create, query, and modify files.
 */

var Repository = function (_Requestable) {
   _inherits(Repository, _Requestable);

   /**
    * Create a Repository.
    * @param {string} fullname - the full name of the repository
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function Repository(fullname, auth, apiBase) {
      _classCallCheck(this, Repository);

      var _this = _possibleConstructorReturn(this, (Repository.__proto__ || Object.getPrototypeOf(Repository)).call(this, auth, apiBase));

      _this.__fullname = fullname;
      _this.__currentTree = {
         branch: null,
         sha: null
      };
      return _this;
   }

   /**
    * Get a reference
    * @see https://developer.github.com/v3/git/refs/#get-a-reference
    * @param {string} ref - the reference to get
    * @param {Requestable.callback} [cb] - will receive the reference's refSpec or a list of refSpecs that match `ref`
    * @return {Promise} - the promise for the http request
    */


   _createClass(Repository, [{
      key: 'getRef',
      value: function getRef(ref, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
      }

      /**
       * Create a reference
       * @see https://developer.github.com/v3/git/refs/#create-a-reference
       * @param {Object} options - the object describing the ref
       * @param {Requestable.callback} [cb] - will receive the ref
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRef',
      value: function createRef(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/git/refs', options, cb);
      }

      /**
       * Delete a reference
       * @see https://developer.github.com/v3/git/refs/#delete-a-reference
       * @param {string} ref - the name of the ref to delte
       * @param {Requestable.callback} [cb] - will receive true if the request is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRef',
      value: function deleteRef(ref, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/git/refs/' + ref, null, cb);
      }

      /**
       * Delete a repository
       * @see https://developer.github.com/v3/repos/#delete-a-repository
       * @param {Requestable.callback} [cb] - will receive true if the request is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRepo',
      value: function deleteRepo(cb) {
         return this._request('DELETE', '/repos/' + this.__fullname, null, cb);
      }

      /**
       * List the tags on a repository
       * @see https://developer.github.com/v3/repos/#list-tags
       * @param {Requestable.callback} [cb] - will receive the tag data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listTags',
      value: function listTags(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/tags', null, cb);
      }

      /**
       * List the open pull requests on the repository
       * @see https://developer.github.com/v3/pulls/#list-pull-requests
       * @param {Object} options - options to filter the search
       * @param {Requestable.callback} [cb] - will receive the list of PRs
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listPullRequests',
      value: function listPullRequests(options, cb) {
         options = options || {};
         return this._request('GET', '/repos/' + this.__fullname + '/pulls', options, cb);
      }

      /**
       * Get information about a specific pull request
       * @see https://developer.github.com/v3/pulls/#get-a-single-pull-request
       * @param {number} number - the PR you wish to fetch
       * @param {Requestable.callback} [cb] - will receive the PR from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getPullRequest',
      value: function getPullRequest(number, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number, null, cb);
      }

      /**
       * List the files of a specific pull request
       * @see https://developer.github.com/v3/pulls/#list-pull-requests-files
       * @param {number|string} number - the PR you wish to fetch
       * @param {Requestable.callback} [cb] - will receive the list of files from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listPullRequestFiles',
      value: function listPullRequestFiles(number, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number + '/files', null, cb);
      }

      /**
       * Compare two branches/commits/repositories
       * @see https://developer.github.com/v3/repos/commits/#compare-two-commits
       * @param {string} base - the base commit
       * @param {string} head - the head commit
       * @param {Requestable.callback} cb - will receive the comparison
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'compareBranches',
      value: function compareBranches(base, head, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/compare/' + base + '...' + head, null, cb);
      }

      /**
       * List all the branches for the repository
       * @see https://developer.github.com/v3/repos/#list-branches
       * @param {Requestable.callback} cb - will receive the list of branches
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listBranches',
      value: function listBranches(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/branches', null, cb);
      }

      /**
       * Get a raw blob from the repository
       * @see https://developer.github.com/v3/git/blobs/#get-a-blob
       * @param {string} sha - the sha of the blob to fetch
       * @param {Requestable.callback} cb - will receive the blob from the API
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getBlob',
      value: function getBlob(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/blobs/' + sha, null, cb, 'raw');
      }

      /**
       * Get a single branch
       * @see https://developer.github.com/v3/repos/branches/#get-branch
       * @param {string} branch - the name of the branch to fetch
       * @param {Requestable.callback} cb - will receive the branch from the API
       * @returns {Promise} - the promise for the http request
       */

   }, {
      key: 'getBranch',
      value: function getBranch(branch, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/branches/' + branch, null, cb);
      }

      /**
       * Get a commit from the repository
       * @see https://developer.github.com/v3/repos/commits/#get-a-single-commit
       * @param {string} sha - the sha for the commit to fetch
       * @param {Requestable.callback} cb - will receive the commit data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getCommit',
      value: function getCommit(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/commits/' + sha, null, cb);
      }

      /**
       * List the commits on a repository, optionally filtering by path, author or time range
       * @see https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
       * @param {Object} [options] - the filtering options for commits
       * @param {string} [options.sha] - the SHA or branch to start from
       * @param {string} [options.path] - the path to search on
       * @param {string} [options.author] - the commit author
       * @param {(Date|string)} [options.since] - only commits after this date will be returned
       * @param {(Date|string)} [options.until] - only commits before this date will be returned
       * @param {Requestable.callback} cb - will receive the list of commits found matching the criteria
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listCommits',
      value: function listCommits(options, cb) {
         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }
         options.since = this._dateToISO(options.since);
         options.until = this._dateToISO(options.until);

         return this._request('GET', '/repos/' + this.__fullname + '/commits', options, cb);
      }

      /**
       * List the commits on a pull request
       * @see https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository
       * @param {number|string} number - the number of the pull request to list the commits
       * @param {Object} [options] - the filtering options for commits
       * @param {Requestable.callback} [cb] - will receive the commits information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listCommitsOnPR',
      value: function listCommitsOnPR(number, options, cb) {
         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }
         return this._request('GET', '/repos/' + this.__fullname + '/pulls/' + number + '/commits', options, cb);
      }

      /**
       * Gets a single commit information for a repository
       * @see https://developer.github.com/v3/repos/commits/#get-a-single-commit
       * @param {string} ref - the reference for the commit-ish
       * @param {Requestable.callback} cb - will receive the commit information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSingleCommit',
      value: function getSingleCommit(ref, cb) {
         ref = ref || '';
         return this._request('GET', '/repos/' + this.__fullname + '/commits/' + ref, null, cb);
      }

      /**
       * Get tha sha for a particular object in the repository. This is a convenience function
       * @see https://developer.github.com/v3/repos/contents/#get-contents
       * @param {string} [branch] - the branch to look in, or the repository's default branch if omitted
       * @param {string} path - the path of the file or directory
       * @param {Requestable.callback} cb - will receive a description of the requested object, including a `SHA` property
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getSha',
      value: function getSha(branch, path, cb) {
         branch = branch ? '?ref=' + branch : '';
         return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path + branch, null, cb);
      }

      /**
       * List the commit statuses for a particular sha, branch, or tag
       * @see https://developer.github.com/v3/repos/statuses/#list-statuses-for-a-specific-ref
       * @param {string} sha - the sha, branch, or tag to get statuses for
       * @param {Requestable.callback} cb - will receive the list of statuses
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listStatuses',
      value: function listStatuses(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/commits/' + sha + '/statuses', null, cb);
      }

      /**
       * Get the combined view of commit statuses for a particular sha, branch, or tag
       * @see https://developer.github.com/v3/repos/statuses/#get-the-combined-status-for-a-specific-ref
       * @param {string} sha - the sha, branch, or tag to get the combined status for
       * @param {Requestable.callback} cb - will receive the combined status
       * @returns {Promise} - the promise for the http request
       */

   }, {
      key: 'getCombinedStatus',
      value: function getCombinedStatus(sha, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/commits/' + sha + '/status', null, cb);
      }

      /**
       * Get a description of a git tree
       * @see https://developer.github.com/v3/git/trees/#get-a-tree
       * @param {string} treeSHA - the SHA of the tree to fetch
       * @param {Requestable.callback} cb - will receive the callback data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getTree',
      value: function getTree(treeSHA, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/git/trees/' + treeSHA, null, cb);
      }

      /**
       * Create a blob
       * @see https://developer.github.com/v3/git/blobs/#create-a-blob
       * @param {(string|Buffer|Blob)} content - the content to add to the repository
       * @param {Requestable.callback} cb - will receive the details of the created blob
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createBlob',
      value: function createBlob(content, cb) {
         var postBody = this._getContentObject(content);

         log('sending content', postBody);
         return this._request('POST', '/repos/' + this.__fullname + '/git/blobs', postBody, cb);
      }

      /**
       * Get the object that represents the provided content
       * @param {string|Buffer|Blob} content - the content to send to the server
       * @return {Object} the representation of `content` for the GitHub API
       */

   }, {
      key: '_getContentObject',
      value: function _getContentObject(content) {
         if (typeof content === 'string') {
            log('contet is a string');
            return {
               content: _utf2.default.encode(content),
               encoding: 'utf-8'
            };
         } else if (typeof Buffer !== 'undefined' && content instanceof Buffer) {
            log('We appear to be in Node');
            return {
               content: content.toString('base64'),
               encoding: 'base64'
            };
         } else if (typeof Blob !== 'undefined' && content instanceof Blob) {
            log('We appear to be in the browser');
            return {
               content: _jsBase.Base64.encode(content),
               encoding: 'base64'
            };
         } else {
            // eslint-disable-line
            log('Not sure what this content is: ' + (typeof content === 'undefined' ? 'undefined' : _typeof(content)) + ', ' + JSON.stringify(content));
            throw new Error('Unknown content passed to postBlob. Must be string or Buffer (node) or Blob (web)');
         }
      }

      /**
       * Update a tree in Git
       * @see https://developer.github.com/v3/git/trees/#create-a-tree
       * @param {string} baseTreeSHA - the SHA of the tree to update
       * @param {string} path - the path for the new file
       * @param {string} blobSHA - the SHA for the blob to put at `path`
       * @param {Requestable.callback} cb - will receive the new tree that is created
       * @return {Promise} - the promise for the http request
       * @deprecated use {@link Repository#createTree} instead
       */

   }, {
      key: 'updateTree',
      value: function updateTree(baseTreeSHA, path, blobSHA, cb) {
         var newTree = {
            base_tree: baseTreeSHA, // eslint-disable-line
            tree: [{
               path: path,
               sha: blobSHA,
               mode: '100644',
               type: 'blob'
            }]
         };

         return this._request('POST', '/repos/' + this.__fullname + '/git/trees', newTree, cb);
      }

      /**
       * Create a new tree in git
       * @see https://developer.github.com/v3/git/trees/#create-a-tree
       * @param {Object} tree - the tree to create
       * @param {string} baseSHA - the root sha of the tree
       * @param {Requestable.callback} cb - will receive the new tree that is created
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createTree',
      value: function createTree(tree, baseSHA, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/git/trees', {
            tree: tree,
            base_tree: baseSHA // eslint-disable-line camelcase
         }, cb);
      }

      /**
       * Add a commit to the repository
       * @see https://developer.github.com/v3/git/commits/#create-a-commit
       * @param {string} parent - the SHA of the parent commit
       * @param {string} tree - the SHA of the tree for this commit
       * @param {string} message - the commit message
       * @param {Object} [options] - commit options
       * @param {Object} [options.author] - the author of the commit
       * @param {Object} [options.commiter] - the committer
       * @param {Requestable.callback} cb - will receive the commit that is created
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'commit',
      value: function commit(parent, tree, message, options, cb) {
         var _this2 = this;

         if (typeof options === 'function') {
            cb = options;
            options = {};
         }

         var data = {
            message: message,
            tree: tree,
            parents: [parent]
         };

         data = Object.assign({}, options, data);

         return this._request('POST', '/repos/' + this.__fullname + '/git/commits', data, cb).then(function (response) {
            _this2.__currentTree.sha = response.data.sha; // Update latest commit
            return response;
         });
      }

      /**
       * Update a ref
       * @see https://developer.github.com/v3/git/refs/#update-a-reference
       * @param {string} ref - the ref to update
       * @param {string} commitSHA - the SHA to point the reference to
       * @param {boolean} force - indicates whether to force or ensure a fast-forward update
       * @param {Requestable.callback} cb - will receive the updated ref back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateHead',
      value: function updateHead(ref, commitSHA, force, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/git/refs/' + ref, {
            sha: commitSHA,
            force: force
         }, cb);
      }

      /**
       * Update commit status
       * @see https://developer.github.com/v3/repos/statuses/
       * @param {string} commitSHA - the SHA of the commit that should be updated
       * @param {object} options - Commit status parameters
       * @param {string} options.state - The state of the status. Can be one of: pending, success, error, or failure.
       * @param {string} [options.target_url] - The target URL to associate with this status.
       * @param {string} [options.description] - A short description of the status.
       * @param {string} [options.context] - A string label to differentiate this status among CI systems.
       * @param {Requestable.callback} cb - will receive the updated commit back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateStatus',
      value: function updateStatus(commitSHA, options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/statuses/' + commitSHA, options, cb);
      }

      /**
       * Update repository information
       * @see https://developer.github.com/v3/repos/#edit
       * @param {object} options - New parameters that will be set to the repository
       * @param {string} options.name - Name of the repository
       * @param {string} [options.description] - A short description of the repository
       * @param {string} [options.homepage] - A URL with more information about the repository
       * @param {boolean} [options.private] - Either true to make the repository private, or false to make it public.
       * @param {boolean} [options.has_issues] - Either true to enable issues for this repository, false to disable them.
       * @param {boolean} [options.has_wiki] - Either true to enable the wiki for this repository, false to disable it.
       * @param {boolean} [options.has_downloads] - Either true to enable downloads, false to disable them.
       * @param {string} [options.default_branch] - Updates the default branch for this repository.
       * @param {Requestable.callback} cb - will receive the updated repository back
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateRepository',
      value: function updateRepository(options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname, options, cb);
      }

      /**
        * Get information about the repository
        * @see https://developer.github.com/v3/repos/#get
        * @param {Requestable.callback} cb - will receive the information about the repository
        * @return {Promise} - the promise for the http request
        */

   }, {
      key: 'getDetails',
      value: function getDetails(cb) {
         return this._request('GET', '/repos/' + this.__fullname, null, cb);
      }

      /**
       * List the contributors to the repository
       * @see https://developer.github.com/v3/repos/#list-contributors
       * @param {Requestable.callback} cb - will receive the list of contributors
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContributors',
      value: function getContributors(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/contributors', null, cb);
      }

      /**
       * List the contributor stats to the repository
       * @see https://developer.github.com/v3/repos/#list-contributors
       * @param {Requestable.callback} cb - will receive the list of contributors
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContributorStats',
      value: function getContributorStats(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/stats/contributors', null, cb);
      }

      /**
       * List the users who are collaborators on the repository. The currently authenticated user must have
       * push access to use this method
       * @see https://developer.github.com/v3/repos/collaborators/#list-collaborators
       * @param {Requestable.callback} cb - will receive the list of collaborators
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getCollaborators',
      value: function getCollaborators(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/collaborators', null, cb);
      }

      /**
       * Check if a user is a collaborator on the repository
       * @see https://developer.github.com/v3/repos/collaborators/#check-if-a-user-is-a-collaborator
       * @param {string} username - the user to check
       * @param {Requestable.callback} cb - will receive true if the user is a collaborator and false if they are not
       * @return {Promise} - the promise for the http request {Boolean} [description]
       */

   }, {
      key: 'isCollaborator',
      value: function isCollaborator(username, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/collaborators/' + username, null, cb);
      }

      /**
       * Get the contents of a repository
       * @see https://developer.github.com/v3/repos/contents/#get-contents
       * @param {string} ref - the ref to check
       * @param {string} path - the path containing the content to fetch
       * @param {boolean} raw - `true` if the results should be returned raw instead of GitHub's normalized format
       * @param {Requestable.callback} cb - will receive the fetched data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getContents',
      value: function getContents(ref, path, raw, cb) {
         path = path ? '' + encodeURI(path) : '';
         return this._request('GET', '/repos/' + this.__fullname + '/contents/' + path, {
            ref: ref
         }, cb, raw);
      }

      /**
       * Get the README of a repository
       * @see https://developer.github.com/v3/repos/contents/#get-the-readme
       * @param {string} ref - the ref to check
       * @param {boolean} raw - `true` if the results should be returned raw instead of GitHub's normalized format
       * @param {Requestable.callback} cb - will receive the fetched data
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getReadme',
      value: function getReadme(ref, raw, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/readme', {
            ref: ref
         }, cb, raw);
      }

      /**
       * Fork a repository
       * @see https://developer.github.com/v3/repos/forks/#create-a-fork
       * @param {Requestable.callback} cb - will receive the information about the newly created fork
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'fork',
      value: function fork(cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/forks', null, cb);
      }

      /**
       * Fork a repository to an organization
       * @see https://developer.github.com/v3/repos/forks/#create-a-fork
       * @param {String} org - organization where you'd like to create the fork.
       * @param {Requestable.callback} cb - will receive the information about the newly created fork
       * @return {Promise} - the promise for the http request
       *
       */

   }, {
      key: 'forkToOrg',
      value: function forkToOrg(org, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/forks?organization=' + org, null, cb);
      }

      /**
       * List a repository's forks
       * @see https://developer.github.com/v3/repos/forks/#list-forks
       * @param {Requestable.callback} cb - will receive the list of repositories forked from this one
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listForks',
      value: function listForks(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/forks', null, cb);
      }

      /**
       * Create a new branch from an existing branch.
       * @param {string} [oldBranch=master] - the name of the existing branch
       * @param {string} newBranch - the name of the new branch
       * @param {Requestable.callback} cb - will receive the commit data for the head of the new branch
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createBranch',
      value: function createBranch(oldBranch, newBranch, cb) {
         var _this3 = this;

         if (typeof newBranch === 'function') {
            cb = newBranch;
            newBranch = oldBranch;
            oldBranch = 'master';
         }

         return this.getRef('heads/' + oldBranch).then(function (response) {
            var sha = response.data.object.sha;
            return _this3.createRef({
               sha: sha,
               ref: 'refs/heads/' + newBranch
            }, cb);
         });
      }

      /**
       * Create a new pull request
       * @see https://developer.github.com/v3/pulls/#create-a-pull-request
       * @param {Object} options - the pull request description
       * @param {Requestable.callback} cb - will receive the new pull request
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createPullRequest',
      value: function createPullRequest(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/pulls', options, cb);
      }

      /**
       * Update a pull request
       * @see https://developer.github.com/v3/pulls/#update-a-pull-request
       * @param {number|string} number - the number of the pull request to update
       * @param {Object} options - the pull request description
       * @param {Requestable.callback} [cb] - will receive the pull request information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updatePullRequest',
      value: function updatePullRequest(number, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/pulls/' + number, options, cb);
      }

      /**
       * List the hooks for the repository
       * @see https://developer.github.com/v3/repos/hooks/#list-hooks
       * @param {Requestable.callback} cb - will receive the list of hooks
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listHooks',
      value: function listHooks(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/hooks', null, cb);
      }

      /**
       * Get a hook for the repository
       * @see https://developer.github.com/v3/repos/hooks/#get-single-hook
       * @param {number} id - the id of the webook
       * @param {Requestable.callback} cb - will receive the details of the webook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getHook',
      value: function getHook(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/hooks/' + id, null, cb);
      }

      /**
       * Add a new hook to the repository
       * @see https://developer.github.com/v3/repos/hooks/#create-a-hook
       * @param {Object} options - the configuration describing the new hook
       * @param {Requestable.callback} cb - will receive the new webhook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createHook',
      value: function createHook(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/hooks', options, cb);
      }

      /**
       * Edit an existing webhook
       * @see https://developer.github.com/v3/repos/hooks/#edit-a-hook
       * @param {number} id - the id of the webhook
       * @param {Object} options - the new description of the webhook
       * @param {Requestable.callback} cb - will receive the updated webhook
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateHook',
      value: function updateHook(id, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/hooks/' + id, options, cb);
      }

      /**
       * Delete a webhook
       * @see https://developer.github.com/v3/repos/hooks/#delete-a-hook
       * @param {number} id - the id of the webhook to be deleted
       * @param {Requestable.callback} cb - will receive true if the call is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteHook',
      value: function deleteHook(id, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/hooks/' + id, null, cb);
      }

      /**
       * List the deploy keys for the repository
       * @see https://developer.github.com/v3/repos/keys/#list-deploy-keys
       * @param {Requestable.callback} cb - will receive the list of deploy keys
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listKeys',
      value: function listKeys(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/keys', null, cb);
      }

      /**
       * Get a deploy key for the repository
       * @see https://developer.github.com/v3/repos/keys/#get-a-deploy-key
       * @param {number} id - the id of the deploy key
       * @param {Requestable.callback} cb - will receive the details of the deploy key
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getKey',
      value: function getKey(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/keys/' + id, null, cb);
      }

      /**
       * Add a new deploy key to the repository
       * @see https://developer.github.com/v3/repos/keys/#add-a-new-deploy-key
       * @param {Object} options - the configuration describing the new deploy key
       * @param {Requestable.callback} cb - will receive the new deploy key
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createKey',
      value: function createKey(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/keys', options, cb);
      }

      /**
       * Delete a deploy key
       * @see https://developer.github.com/v3/repos/keys/#remove-a-deploy-key
       * @param {number} id - the id of the deploy key to be deleted
       * @param {Requestable.callback} cb - will receive true if the call is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteKey',
      value: function deleteKey(id, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/keys/' + id, null, cb);
      }

      /**
       * Delete a file from a branch
       * @see https://developer.github.com/v3/repos/contents/#delete-a-file
       * @param {string} branch - the branch to delete from, or the default branch if not specified
       * @param {string} path - the path of the file to remove
       * @param {Requestable.callback} cb - will receive the commit in which the delete occurred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteFile',
      value: function deleteFile(branch, path, cb) {
         var _this4 = this;

         return this.getSha(branch, path).then(function (response) {
            var deleteCommit = {
               message: 'Delete the file at \'' + path + '\'',
               sha: response.data.sha,
               branch: branch
            };
            return _this4._request('DELETE', '/repos/' + _this4.__fullname + '/contents/' + path, deleteCommit, cb);
         });
      }

      /**
       * Change all references in a repo from oldPath to new_path
       * @param {string} branch - the branch to carry out the reference change, or the default branch if not specified
       * @param {string} oldPath - original path
       * @param {string} newPath - new reference path
       * @param {Requestable.callback} cb - will receive the commit in which the move occurred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'move',
      value: function move(branch, oldPath, newPath, cb) {
         var _this5 = this;

         var oldSha = void 0;
         return this.getRef('heads/' + branch).then(function (_ref) {
            var object = _ref.data.object;
            return _this5.getTree(object.sha + '?recursive=true');
         }).then(function (_ref2) {
            var _ref2$data = _ref2.data,
                tree = _ref2$data.tree,
                sha = _ref2$data.sha;

            oldSha = sha;
            var newTree = tree.map(function (ref) {
               if (ref.path === oldPath) {
                  ref.path = newPath;
               }
               if (ref.type === 'tree') {
                  delete ref.sha;
               }
               return ref;
            });
            return _this5.createTree(newTree);
         }).then(function (_ref3) {
            var tree = _ref3.data;
            return _this5.commit(oldSha, tree.sha, 'Renamed \'' + oldPath + '\' to \'' + newPath + '\'');
         }).then(function (_ref4) {
            var commit = _ref4.data;
            return _this5.updateHead('heads/' + branch, commit.sha, true, cb);
         });
      }

      /**
       * Write a file to the repository
       * @see https://developer.github.com/v3/repos/contents/#update-a-file
       * @param {string} branch - the name of the branch
       * @param {string} path - the path for the file
       * @param {string} content - the contents of the file
       * @param {string} message - the commit message
       * @param {Object} [options] - commit options
       * @param {Object} [options.author] - the author of the commit
       * @param {Object} [options.commiter] - the committer
       * @param {boolean} [options.encode] - true if the content should be base64 encoded
       * @param {Requestable.callback} cb - will receive the new commit
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'writeFile',
      value: function writeFile(branch, path, content, message, options, cb) {
         var _this6 = this;

         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }
         var filePath = path ? encodeURI(path) : '';
         var shouldEncode = options.encode !== false;
         var commit = {
            branch: branch,
            message: message,
            author: options.author,
            committer: options.committer,
            content: shouldEncode ? _jsBase.Base64.encode(content) : content
         };

         return this.getSha(branch, filePath).then(function (response) {
            commit.sha = response.data.sha;
            return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
         }, function () {
            return _this6._request('PUT', '/repos/' + _this6.__fullname + '/contents/' + filePath, commit, cb);
         });
      }

      /**
       * Check if a repository is starred by you
       * @see https://developer.github.com/v3/activity/starring/#check-if-you-are-starring-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is starred and false if the repository
       *                                  is not starred
       * @return {Promise} - the promise for the http request {Boolean} [description]
       */

   }, {
      key: 'isStarred',
      value: function isStarred(cb) {
         return this._request204or404('/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Star a repository
       * @see https://developer.github.com/v3/activity/starring/#star-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is starred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'star',
      value: function star(cb) {
         return this._request('PUT', '/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Unstar a repository
       * @see https://developer.github.com/v3/activity/starring/#unstar-a-repository
       * @param {Requestable.callback} cb - will receive true if the repository is unstarred
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'unstar',
      value: function unstar(cb) {
         return this._request('DELETE', '/user/starred/' + this.__fullname, null, cb);
      }

      /**
       * Create a new release
       * @see https://developer.github.com/v3/repos/releases/#create-a-release
       * @param {Object} options - the description of the release
       * @param {Requestable.callback} cb - will receive the newly created release
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRelease',
      value: function createRelease(options, cb) {
         return this._request('POST', '/repos/' + this.__fullname + '/releases', options, cb);
      }

      /**
       * Edit a release
       * @see https://developer.github.com/v3/repos/releases/#edit-a-release
       * @param {string} id - the id of the release
       * @param {Object} options - the description of the release
       * @param {Requestable.callback} cb - will receive the modified release
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'updateRelease',
      value: function updateRelease(id, options, cb) {
         return this._request('PATCH', '/repos/' + this.__fullname + '/releases/' + id, options, cb);
      }

      /**
       * Get information about all releases
       * @see https://developer.github.com/v3/repos/releases/#list-releases-for-a-repository
       * @param {Requestable.callback} cb - will receive the release information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listReleases',
      value: function listReleases(cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/releases', null, cb);
      }

      /**
       * Get information about a release
       * @see https://developer.github.com/v3/repos/releases/#get-a-single-release
       * @param {string} id - the id of the release
       * @param {Requestable.callback} cb - will receive the release information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getRelease',
      value: function getRelease(id, cb) {
         return this._request('GET', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
      }

      /**
       * Delete a release
       * @see https://developer.github.com/v3/repos/releases/#delete-a-release
       * @param {string} id - the release to be deleted
       * @param {Requestable.callback} cb - will receive true if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'deleteRelease',
      value: function deleteRelease(id, cb) {
         return this._request('DELETE', '/repos/' + this.__fullname + '/releases/' + id, null, cb);
      }

      /**
       * Merge a pull request
       * @see https://developer.github.com/v3/pulls/#merge-a-pull-request-merge-button
       * @param {number|string} number - the number of the pull request to merge
       * @param {Object} options - the merge options for the pull request
       * @param {Requestable.callback} [cb] - will receive the merge information if the operation is successful
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'mergePullRequest',
      value: function mergePullRequest(number, options, cb) {
         return this._request('PUT', '/repos/' + this.__fullname + '/pulls/' + number + '/merge', options, cb);
      }

      /**
       * Get information about all projects
       * @see https://developer.github.com/v3/projects/#list-repository-projects
       * @param {Requestable.callback} [cb] - will receive the list of projects
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listProjects',
      value: function listProjects(cb) {
         return this._requestAllPages('/repos/' + this.__fullname + '/projects', { AcceptHeader: 'inertia-preview' }, cb);
      }

      /**
       * Create a new project
       * @see https://developer.github.com/v3/projects/#create-a-repository-project
       * @param {Object} options - the description of the project
       * @param {Requestable.callback} cb - will receive the newly created project
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createProject',
      value: function createProject(options, cb) {
         options = options || {};
         options.AcceptHeader = 'inertia-preview';
         return this._request('POST', '/repos/' + this.__fullname + '/projects', options, cb);
      }
   }]);

   return Repository;
}(_Requestable3.default);

module.exports = Repository;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcG9zaXRvcnkuanMiXSwibmFtZXMiOlsibG9nIiwiUmVwb3NpdG9yeSIsImZ1bGxuYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJfX2Z1bGxuYW1lIiwiX19jdXJyZW50VHJlZSIsImJyYW5jaCIsInNoYSIsInJlZiIsImNiIiwiX3JlcXVlc3QiLCJvcHRpb25zIiwibnVtYmVyIiwiYmFzZSIsImhlYWQiLCJzaW5jZSIsIl9kYXRlVG9JU08iLCJ1bnRpbCIsInBhdGgiLCJ0cmVlU0hBIiwiY29udGVudCIsInBvc3RCb2R5IiwiX2dldENvbnRlbnRPYmplY3QiLCJVdGY4IiwiZW5jb2RlIiwiZW5jb2RpbmciLCJCdWZmZXIiLCJ0b1N0cmluZyIsIkJsb2IiLCJCYXNlNjQiLCJKU09OIiwic3RyaW5naWZ5IiwiRXJyb3IiLCJiYXNlVHJlZVNIQSIsImJsb2JTSEEiLCJuZXdUcmVlIiwiYmFzZV90cmVlIiwidHJlZSIsIm1vZGUiLCJ0eXBlIiwiYmFzZVNIQSIsInBhcmVudCIsIm1lc3NhZ2UiLCJkYXRhIiwicGFyZW50cyIsIk9iamVjdCIsImFzc2lnbiIsInRoZW4iLCJyZXNwb25zZSIsImNvbW1pdFNIQSIsImZvcmNlIiwidXNlcm5hbWUiLCJyYXciLCJlbmNvZGVVUkkiLCJvcmciLCJvbGRCcmFuY2giLCJuZXdCcmFuY2giLCJnZXRSZWYiLCJvYmplY3QiLCJjcmVhdGVSZWYiLCJpZCIsImdldFNoYSIsImRlbGV0ZUNvbW1pdCIsIm9sZFBhdGgiLCJuZXdQYXRoIiwib2xkU2hhIiwiZ2V0VHJlZSIsIm1hcCIsImNyZWF0ZVRyZWUiLCJjb21taXQiLCJ1cGRhdGVIZWFkIiwiZmlsZVBhdGgiLCJzaG91bGRFbmNvZGUiLCJhdXRob3IiLCJjb21taXR0ZXIiLCJfcmVxdWVzdDIwNG9yNDA0IiwiX3JlcXVlc3RBbGxQYWdlcyIsIkFjY2VwdEhlYWRlciIsIlJlcXVlc3RhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0E7Ozs7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InNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTMgTWljaGFlbCBBdWZyZWl0ZXIgKERldmVsb3BtZW50IFNlZWQpIGFuZCAyMDE2IFlhaG9vIEluYy5cbiAqIEBsaWNlbnNlICAgIExpY2Vuc2VkIHVuZGVyIHtAbGluayBodHRwczovL3NwZHgub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZS1DbGVhci5odG1sIEJTRC0zLUNsYXVzZS1DbGVhcn0uXG4gKiAgICAgICAgICAgICBHaXRodWIuanMgaXMgZnJlZWx5IGRpc3RyaWJ1dGFibGUuXG4gKi9cblxuaW1wb3J0IFJlcXVlc3RhYmxlIGZyb20gJy4vUmVxdWVzdGFibGUnO1xuaW1wb3J0IFV0ZjggZnJvbSAndXRmOCc7XG5pbXBvcnQge1xuICAgQmFzZTY0LFxufSBmcm9tICdqcy1iYXNlNjQnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmNvbnN0IGxvZyA9IGRlYnVnKCdnaXRodWI6cmVwb3NpdG9yeScpO1xuXG4vKipcbiAqIFJlcG9zaXRvcnkgZW5jYXBzdWxhdGVzIHRoZSBmdW5jdGlvbmFsaXR5IHRvIGNyZWF0ZSwgcXVlcnksIGFuZCBtb2RpZnkgZmlsZXMuXG4gKi9cbmNsYXNzIFJlcG9zaXRvcnkgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFJlcG9zaXRvcnkuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZnVsbG5hbWUgLSB0aGUgZnVsbCBuYW1lIG9mIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGZ1bGxuYW1lLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX19mdWxsbmFtZSA9IGZ1bGxuYW1lO1xuICAgICAgdGhpcy5fX2N1cnJlbnRUcmVlID0ge1xuICAgICAgICAgYnJhbmNoOiBudWxsLFxuICAgICAgICAgc2hhOiBudWxsLFxuICAgICAgfTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSByZWZlcmVuY2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jZ2V0LWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZmVyZW5jZSB0byBnZXRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlZmVyZW5jZSdzIHJlZlNwZWMgb3IgYSBsaXN0IG9mIHJlZlNwZWNzIHRoYXQgbWF0Y2ggYHJlZmBcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVmKHJlZiwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmcy8ke3JlZn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgcmVmZXJlbmNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3JlZnMvI2NyZWF0ZS1hLXJlZmVyZW5jZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgb2JqZWN0IGRlc2NyaWJpbmcgdGhlIHJlZlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVmXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVJlZihvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSByZWZlcmVuY2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvcmVmcy8jZGVsZXRlLWEtcmVmZXJlbmNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIG5hbWUgb2YgdGhlIHJlZiB0byBkZWx0ZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXF1ZXN0IGlzIHN1Y2Nlc3NmdWxcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlUmVmKHJlZiwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvcmVmcy8ke3JlZn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRGVsZXRlIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNkZWxldGUtYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3QgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVSZXBvKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdGFncyBvbiBhIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jbGlzdC10YWdzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB0YWcgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0VGFncyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3RhZ3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgb3BlbiBwdWxsIHJlcXVlc3RzIG9uIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI2xpc3QtcHVsbC1yZXF1ZXN0c1xuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBvcHRpb25zIHRvIGZpbHRlciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIFBSc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UHVsbFJlcXVlc3RzKG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxsc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jZ2V0LWEtc2luZ2xlLXB1bGwtcmVxdWVzdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIHRoZSBQUiB5b3Ugd2lzaCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgUFIgZnJvbSB0aGUgQVBJXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFB1bGxSZXF1ZXN0KG51bWJlciwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxscy8ke251bWJlcn1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgZmlsZXMgb2YgYSBzcGVjaWZpYyBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jbGlzdC1wdWxsLXJlcXVlc3RzLWZpbGVzXG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlciAtIHRoZSBQUiB5b3Ugd2lzaCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBmaWxlcyBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFB1bGxSZXF1ZXN0RmlsZXMobnVtYmVyLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfS9maWxlc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21wYXJlIHR3byBicmFuY2hlcy9jb21taXRzL3JlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2NvbXBhcmUtdHdvLWNvbW1pdHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlIC0gdGhlIGJhc2UgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaGVhZCAtIHRoZSBoZWFkIGNvbW1pdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbXBhcmlzb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY29tcGFyZUJyYW5jaGVzKGJhc2UsIGhlYWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tcGFyZS8ke2Jhc2V9Li4uJHtoZWFkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IGFsbCB0aGUgYnJhbmNoZXMgZm9yIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2xpc3QtYnJhbmNoZXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGJyYW5jaGVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RCcmFuY2hlcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2JyYW5jaGVzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIHJhdyBibG9iIGZyb20gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvYmxvYnMvI2dldC1hLWJsb2JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBzaGEgLSB0aGUgc2hhIG9mIHRoZSBibG9iIHRvIGZldGNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgYmxvYiBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0QmxvYihzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L2Jsb2JzLyR7c2hhfWAsIG51bGwsIGNiLCAncmF3Jyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgc2luZ2xlIGJyYW5jaFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2JyYW5jaGVzLyNnZXQtYnJhbmNoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmNoIC0gdGhlIG5hbWUgb2YgdGhlIGJyYW5jaCB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGJyYW5jaCBmcm9tIHRoZSBBUElcbiAgICAqIEByZXR1cm5zIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldEJyYW5jaChicmFuY2gsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vYnJhbmNoZXMvJHticmFuY2h9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIGNvbW1pdCBmcm9tIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29tbWl0cy8jZ2V0LWEtc2luZ2xlLWNvbW1pdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IHNoYSAtIHRoZSBzaGEgZm9yIHRoZSBjb21taXQgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb21taXQoc2hhLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9jb21taXRzLyR7c2hhfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb21taXRzIG9uIGEgcmVwb3NpdG9yeSwgb3B0aW9uYWxseSBmaWx0ZXJpbmcgYnkgcGF0aCwgYXV0aG9yIG9yIHRpbWUgcmFuZ2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb21taXRzLyNsaXN0LWNvbW1pdHMtb24tYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIGZpbHRlcmluZyBvcHRpb25zIGZvciBjb21taXRzXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuc2hhXSAtIHRoZSBTSEEgb3IgYnJhbmNoIHRvIHN0YXJ0IGZyb21cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wYXRoXSAtIHRoZSBwYXRoIHRvIHNlYXJjaCBvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmF1dGhvcl0gLSB0aGUgY29tbWl0IGF1dGhvclxuICAgICogQHBhcmFtIHsoRGF0ZXxzdHJpbmcpfSBbb3B0aW9ucy5zaW5jZV0gLSBvbmx5IGNvbW1pdHMgYWZ0ZXIgdGhpcyBkYXRlIHdpbGwgYmUgcmV0dXJuZWRcbiAgICAqIEBwYXJhbSB7KERhdGV8c3RyaW5nKX0gW29wdGlvbnMudW50aWxdIC0gb25seSBjb21taXRzIGJlZm9yZSB0aGlzIGRhdGUgd2lsbCBiZSByZXR1cm5lZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29tbWl0cyBmb3VuZCBtYXRjaGluZyB0aGUgY3JpdGVyaWFcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdENvbW1pdHMob3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICBvcHRpb25zLnNpbmNlID0gdGhpcy5fZGF0ZVRvSVNPKG9wdGlvbnMuc2luY2UpO1xuICAgICAgb3B0aW9ucy51bnRpbCA9IHRoaXMuX2RhdGVUb0lTTyhvcHRpb25zLnVudGlsKTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbW1pdHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgY29tbWl0cyBvbiBhIHB1bGwgcmVxdWVzdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2xpc3QtY29tbWl0cy1vbi1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbnVtYmVyIC0gdGhlIG51bWJlciBvZiB0aGUgcHVsbCByZXF1ZXN0IHRvIGxpc3QgdGhlIGNvbW1pdHNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgZmlsdGVyaW5nIG9wdGlvbnMgZm9yIGNvbW1pdHNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdHMgaW5mb3JtYXRpb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdENvbW1pdHNPblBSKG51bWJlciwgb3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHVsbHMvJHtudW1iZXJ9L2NvbW1pdHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgc2luZ2xlIGNvbW1pdCBpbmZvcm1hdGlvbiBmb3IgYSByZXBvc2l0b3J5XG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbW1pdHMvI2dldC1hLXNpbmdsZS1jb21taXRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZmVyZW5jZSBmb3IgdGhlIGNvbW1pdC1pc2hcbiAgICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWl0IGluZm9ybWF0aW9uXG4gICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICAqL1xuICAgZ2V0U2luZ2xlQ29tbWl0KHJlZiwgY2IpIHtcbiAgICAgIHJlZiA9IHJlZiB8fCAnJztcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb21taXRzLyR7cmVmfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdGhhIHNoYSBmb3IgYSBwYXJ0aWN1bGFyIG9iamVjdCBpbiB0aGUgcmVwb3NpdG9yeS4gVGhpcyBpcyBhIGNvbnZlbmllbmNlIGZ1bmN0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI2dldC1jb250ZW50c1xuICAgICogQHBhcmFtIHtzdHJpbmd9IFticmFuY2hdIC0gdGhlIGJyYW5jaCB0byBsb29rIGluLCBvciB0aGUgcmVwb3NpdG9yeSdzIGRlZmF1bHQgYnJhbmNoIGlmIG9taXR0ZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggb2YgdGhlIGZpbGUgb3IgZGlyZWN0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSBhIGRlc2NyaXB0aW9uIG9mIHRoZSByZXF1ZXN0ZWQgb2JqZWN0LCBpbmNsdWRpbmcgYSBgU0hBYCBwcm9wZXJ0eVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRTaGEoYnJhbmNoLCBwYXRoLCBjYikge1xuICAgICAgYnJhbmNoID0gYnJhbmNoID8gYD9yZWY9JHticmFuY2h9YCA6ICcnO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbnRlbnRzLyR7cGF0aH0ke2JyYW5jaH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgY29tbWl0IHN0YXR1c2VzIGZvciBhIHBhcnRpY3VsYXIgc2hhLCBicmFuY2gsIG9yIHRhZ1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3N0YXR1c2VzLyNsaXN0LXN0YXR1c2VzLWZvci1hLXNwZWNpZmljLXJlZlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHNoYSAtIHRoZSBzaGEsIGJyYW5jaCwgb3IgdGFnIHRvIGdldCBzdGF0dXNlcyBmb3JcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHN0YXR1c2VzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RTdGF0dXNlcyhzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tbWl0cy8ke3NoYX0vc3RhdHVzZXNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSBjb21iaW5lZCB2aWV3IG9mIGNvbW1pdCBzdGF0dXNlcyBmb3IgYSBwYXJ0aWN1bGFyIHNoYSwgYnJhbmNoLCBvciB0YWdcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9zdGF0dXNlcy8jZ2V0LXRoZS1jb21iaW5lZC1zdGF0dXMtZm9yLWEtc3BlY2lmaWMtcmVmXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gc2hhIC0gdGhlIHNoYSwgYnJhbmNoLCBvciB0YWcgdG8gZ2V0IHRoZSBjb21iaW5lZCBzdGF0dXMgZm9yXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tYmluZWQgc3RhdHVzXG4gICAgKiBAcmV0dXJucyB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb21iaW5lZFN0YXR1cyhzaGEsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29tbWl0cy8ke3NoYX0vc3RhdHVzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBhIGRlc2NyaXB0aW9uIG9mIGEgZ2l0IHRyZWVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvdHJlZXMvI2dldC1hLXRyZWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmVlU0hBIC0gdGhlIFNIQSBvZiB0aGUgdHJlZSB0byBmZXRjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNhbGxiYWNrIGRhdGFcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0VHJlZSh0cmVlU0hBLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC90cmVlcy8ke3RyZWVTSEF9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIGJsb2JcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvYmxvYnMvI2NyZWF0ZS1hLWJsb2JcbiAgICAqIEBwYXJhbSB7KHN0cmluZ3xCdWZmZXJ8QmxvYil9IGNvbnRlbnQgLSB0aGUgY29udGVudCB0byBhZGQgdG8gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBkZXRhaWxzIG9mIHRoZSBjcmVhdGVkIGJsb2JcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlQmxvYihjb250ZW50LCBjYikge1xuICAgICAgbGV0IHBvc3RCb2R5ID0gdGhpcy5fZ2V0Q29udGVudE9iamVjdChjb250ZW50KTtcblxuICAgICAgbG9nKCdzZW5kaW5nIGNvbnRlbnQnLCBwb3N0Qm9keSk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9ibG9ic2AsIHBvc3RCb2R5LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBwcm92aWRlZCBjb250ZW50XG4gICAgKiBAcGFyYW0ge3N0cmluZ3xCdWZmZXJ8QmxvYn0gY29udGVudCAtIHRoZSBjb250ZW50IHRvIHNlbmQgdG8gdGhlIHNlcnZlclxuICAgICogQHJldHVybiB7T2JqZWN0fSB0aGUgcmVwcmVzZW50YXRpb24gb2YgYGNvbnRlbnRgIGZvciB0aGUgR2l0SHViIEFQSVxuICAgICovXG4gICBfZ2V0Q29udGVudE9iamVjdChjb250ZW50KSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICBsb2coJ2NvbnRldCBpcyBhIHN0cmluZycpO1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFV0ZjguZW5jb2RlKGNvbnRlbnQpLFxuICAgICAgICAgICAgZW5jb2Rpbmc6ICd1dGYtOCcsXG4gICAgICAgICB9O1xuXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGNvbnRlbnQgaW5zdGFuY2VvZiBCdWZmZXIpIHtcbiAgICAgICAgIGxvZygnV2UgYXBwZWFyIHRvIGJlIGluIE5vZGUnKTtcbiAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LnRvU3RyaW5nKCdiYXNlNjQnKSxcbiAgICAgICAgICAgIGVuY29kaW5nOiAnYmFzZTY0JyxcbiAgICAgICAgIH07XG5cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGNvbnRlbnQgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgICAgICBsb2coJ1dlIGFwcGVhciB0byBiZSBpbiB0aGUgYnJvd3NlcicpO1xuICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IEJhc2U2NC5lbmNvZGUoY29udGVudCksXG4gICAgICAgICAgICBlbmNvZGluZzogJ2Jhc2U2NCcsXG4gICAgICAgICB9O1xuXG4gICAgICB9IGVsc2UgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICBsb2coYE5vdCBzdXJlIHdoYXQgdGhpcyBjb250ZW50IGlzOiAke3R5cGVvZiBjb250ZW50fSwgJHtKU09OLnN0cmluZ2lmeShjb250ZW50KX1gKTtcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBjb250ZW50IHBhc3NlZCB0byBwb3N0QmxvYi4gTXVzdCBiZSBzdHJpbmcgb3IgQnVmZmVyIChub2RlKSBvciBCbG9iICh3ZWIpJyk7XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGEgdHJlZSBpbiBHaXRcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9naXQvdHJlZXMvI2NyZWF0ZS1hLXRyZWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVHJlZVNIQSAtIHRoZSBTSEEgb2YgdGhlIHRyZWUgdG8gdXBkYXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGZvciB0aGUgbmV3IGZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBibG9iU0hBIC0gdGhlIFNIQSBmb3IgdGhlIGJsb2IgdG8gcHV0IGF0IGBwYXRoYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyB0cmVlIHRoYXQgaXMgY3JlYXRlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICogQGRlcHJlY2F0ZWQgdXNlIHtAbGluayBSZXBvc2l0b3J5I2NyZWF0ZVRyZWV9IGluc3RlYWRcbiAgICAqL1xuICAgdXBkYXRlVHJlZShiYXNlVHJlZVNIQSwgcGF0aCwgYmxvYlNIQSwgY2IpIHtcbiAgICAgIGxldCBuZXdUcmVlID0ge1xuICAgICAgICAgYmFzZV90cmVlOiBiYXNlVHJlZVNIQSwgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgdHJlZTogW3tcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBzaGE6IGJsb2JTSEEsXG4gICAgICAgICAgICBtb2RlOiAnMTAwNjQ0JyxcbiAgICAgICAgICAgIHR5cGU6ICdibG9iJyxcbiAgICAgICAgIH1dLFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvdHJlZXNgLCBuZXdUcmVlLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IHRyZWUgaW4gZ2l0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvZ2l0L3RyZWVzLyNjcmVhdGUtYS10cmVlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gdHJlZSAtIHRoZSB0cmVlIHRvIGNyZWF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJhc2VTSEEgLSB0aGUgcm9vdCBzaGEgb2YgdGhlIHRyZWVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgdHJlZSB0aGF0IGlzIGNyZWF0ZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlVHJlZSh0cmVlLCBiYXNlU0hBLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9naXQvdHJlZXNgLCB7XG4gICAgICAgICB0cmVlLFxuICAgICAgICAgYmFzZV90cmVlOiBiYXNlU0hBLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbWVsY2FzZVxuICAgICAgfSwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBhIGNvbW1pdCB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9jb21taXRzLyNjcmVhdGUtYS1jb21taXRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJlbnQgLSB0aGUgU0hBIG9mIHRoZSBwYXJlbnQgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdHJlZSAtIHRoZSBTSEEgb2YgdGhlIHRyZWUgZm9yIHRoaXMgY29tbWl0XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSAtIHRoZSBjb21taXQgbWVzc2FnZVxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGNvbW1pdCBvcHRpb25zXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuYXV0aG9yXSAtIHRoZSBhdXRob3Igb2YgdGhlIGNvbW1pdFxuICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmNvbW1pdGVyXSAtIHRoZSBjb21taXR0ZXJcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgdGhhdCBpcyBjcmVhdGVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNvbW1pdChwYXJlbnQsIHRyZWUsIG1lc3NhZ2UsIG9wdGlvbnMsIGNiKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNiID0gb3B0aW9ucztcbiAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgdHJlZSxcbiAgICAgICAgIHBhcmVudHM6IFtwYXJlbnRdLFxuICAgICAgfTtcblxuICAgICAgZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIGRhdGEpO1xuXG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2dpdC9jb21taXRzYCwgZGF0YSwgY2IpXG4gICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19jdXJyZW50VHJlZS5zaGEgPSByZXNwb25zZS5kYXRhLnNoYTsgLy8gVXBkYXRlIGxhdGVzdCBjb21taXRcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgIH0pO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSBhIHJlZlxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpdC9yZWZzLyN1cGRhdGUtYS1yZWZlcmVuY2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIHVwZGF0ZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbW1pdFNIQSAtIHRoZSBTSEEgdG8gcG9pbnQgdGhlIHJlZmVyZW5jZSB0b1xuICAgICogQHBhcmFtIHtib29sZWFufSBmb3JjZSAtIGluZGljYXRlcyB3aGV0aGVyIHRvIGZvcmNlIG9yIGVuc3VyZSBhIGZhc3QtZm9yd2FyZCB1cGRhdGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIHJlZiBiYWNrXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZUhlYWQocmVmLCBjb21taXRTSEEsIGZvcmNlLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZ2l0L3JlZnMvJHtyZWZ9YCwge1xuICAgICAgICAgc2hhOiBjb21taXRTSEEsXG4gICAgICAgICBmb3JjZTogZm9yY2UsXG4gICAgICB9LCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogVXBkYXRlIGNvbW1pdCBzdGF0dXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9zdGF0dXNlcy9cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb21taXRTSEEgLSB0aGUgU0hBIG9mIHRoZSBjb21taXQgdGhhdCBzaG91bGQgYmUgdXBkYXRlZFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb21taXQgc3RhdHVzIHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnN0YXRlIC0gVGhlIHN0YXRlIG9mIHRoZSBzdGF0dXMuIENhbiBiZSBvbmUgb2Y6IHBlbmRpbmcsIHN1Y2Nlc3MsIGVycm9yLCBvciBmYWlsdXJlLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnRhcmdldF91cmxdIC0gVGhlIHRhcmdldCBVUkwgdG8gYXNzb2NpYXRlIHdpdGggdGhpcyBzdGF0dXMuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGVzY3JpcHRpb25dIC0gQSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgc3RhdHVzLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmNvbnRleHRdIC0gQSBzdHJpbmcgbGFiZWwgdG8gZGlmZmVyZW50aWF0ZSB0aGlzIHN0YXR1cyBhbW9uZyBDSSBzeXN0ZW1zLlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIHVwZGF0ZWQgY29tbWl0IGJhY2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlU3RhdHVzKGNvbW1pdFNIQSwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vc3RhdHVzZXMvJHtjb21taXRTSEF9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFVwZGF0ZSByZXBvc2l0b3J5IGluZm9ybWF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvI2VkaXRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gTmV3IHBhcmFtZXRlcnMgdGhhdCB3aWxsIGJlIHNldCB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmFtZSAtIE5hbWUgb2YgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5kZXNjcmlwdGlvbl0gLSBBIHNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuaG9tZXBhZ2VdIC0gQSBVUkwgd2l0aCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHRoZSByZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnByaXZhdGVdIC0gRWl0aGVyIHRydWUgdG8gbWFrZSB0aGUgcmVwb3NpdG9yeSBwcml2YXRlLCBvciBmYWxzZSB0byBtYWtlIGl0IHB1YmxpYy5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaGFzX2lzc3Vlc10gLSBFaXRoZXIgdHJ1ZSB0byBlbmFibGUgaXNzdWVzIGZvciB0aGlzIHJlcG9zaXRvcnksIGZhbHNlIHRvIGRpc2FibGUgdGhlbS5cbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuaGFzX3dpa2ldIC0gRWl0aGVyIHRydWUgdG8gZW5hYmxlIHRoZSB3aWtpIGZvciB0aGlzIHJlcG9zaXRvcnksIGZhbHNlIHRvIGRpc2FibGUgaXQuXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmhhc19kb3dubG9hZHNdIC0gRWl0aGVyIHRydWUgdG8gZW5hYmxlIGRvd25sb2FkcywgZmFsc2UgdG8gZGlzYWJsZSB0aGVtLlxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmRlZmF1bHRfYnJhbmNoXSAtIFVwZGF0ZXMgdGhlIGRlZmF1bHQgYnJhbmNoIGZvciB0aGlzIHJlcG9zaXRvcnkuXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgdXBkYXRlZCByZXBvc2l0b3J5IGJhY2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlUmVwb3NpdG9yeShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy8jZ2V0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0RGV0YWlscyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGNvbnRyaWJ1dG9ycyB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LWNvbnRyaWJ1dG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29udHJpYnV0b3JzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbnRyaWJ1dG9ycyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2NvbnRyaWJ1dG9yc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBjb250cmlidXRvciBzdGF0cyB0byB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LWNvbnRyaWJ1dG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29udHJpYnV0b3JzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldENvbnRyaWJ1dG9yU3RhdHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9zdGF0cy9jb250cmlidXRvcnNgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcnMgd2hvIGFyZSBjb2xsYWJvcmF0b3JzIG9uIHRoZSByZXBvc2l0b3J5LiBUaGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlciBtdXN0IGhhdmVcbiAgICAqIHB1c2ggYWNjZXNzIHRvIHVzZSB0aGlzIG1ldGhvZFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbGxhYm9yYXRvcnMvI2xpc3QtY29sbGFib3JhdG9yc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgY29sbGFib3JhdG9yc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb2xsYWJvcmF0b3JzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9yc2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDaGVjayBpZiBhIHVzZXIgaXMgYSBjb2xsYWJvcmF0b3Igb24gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9jb2xsYWJvcmF0b3JzLyNjaGVjay1pZi1hLXVzZXItaXMtYS1jb2xsYWJvcmF0b3JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSB1c2VyIGlzIGEgY29sbGFib3JhdG9yIGFuZCBmYWxzZSBpZiB0aGV5IGFyZSBub3RcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3Qge0Jvb2xlYW59IFtkZXNjcmlwdGlvbl1cbiAgICAqL1xuICAgaXNDb2xsYWJvcmF0b3IodXNlcm5hbWUsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29sbGFib3JhdG9ycy8ke3VzZXJuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgdGhlIGNvbnRlbnRzIG9mIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyNnZXQtY29udGVudHNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZWYgLSB0aGUgcmVmIHRvIGNoZWNrXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGNvbnRhaW5pbmcgdGhlIGNvbnRlbnQgdG8gZmV0Y2hcbiAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmF3IC0gYHRydWVgIGlmIHRoZSByZXN1bHRzIHNob3VsZCBiZSByZXR1cm5lZCByYXcgaW5zdGVhZCBvZiBHaXRIdWIncyBub3JtYWxpemVkIGZvcm1hdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGZldGNoZWQgZGF0YVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRDb250ZW50cyhyZWYsIHBhdGgsIHJhdywgY2IpIHtcbiAgICAgIHBhdGggPSBwYXRoID8gYCR7ZW5jb2RlVVJJKHBhdGgpfWAgOiAnJztcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke3BhdGh9YCwge1xuICAgICAgICAgcmVmLFxuICAgICAgfSwgY2IsIHJhdyk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IHRoZSBSRUFETUUgb2YgYSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI2dldC10aGUtcmVhZG1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVmIC0gdGhlIHJlZiB0byBjaGVja1xuICAgICogQHBhcmFtIHtib29sZWFufSByYXcgLSBgdHJ1ZWAgaWYgdGhlIHJlc3VsdHMgc2hvdWxkIGJlIHJldHVybmVkIHJhdyBpbnN0ZWFkIG9mIEdpdEh1YidzIG5vcm1hbGl6ZWQgZm9ybWF0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgZmV0Y2hlZCBkYXRhXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFJlYWRtZShyZWYsIHJhdywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWFkbWVgLCB7XG4gICAgICAgICByZWYsXG4gICAgICB9LCBjYiwgcmF3KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBGb3JrIGEgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2ZvcmtzLyNjcmVhdGUtYS1mb3JrXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG5ld2x5IGNyZWF0ZWQgZm9ya1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JrKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2ZvcmtzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEZvcmsgYSByZXBvc2l0b3J5IHRvIGFuIG9yZ2FuaXphdGlvblxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2ZvcmtzLyNjcmVhdGUtYS1mb3JrXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gb3JnIC0gb3JnYW5pemF0aW9uIHdoZXJlIHlvdSdkIGxpa2UgdG8gY3JlYXRlIHRoZSBmb3JrLlxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXdseSBjcmVhdGVkIGZvcmtcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqXG4gICAgKi9cbiAgIGZvcmtUb09yZyhvcmcsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2ZvcmtzP29yZ2FuaXphdGlvbj0ke29yZ31gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCBhIHJlcG9zaXRvcnkncyBmb3Jrc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2ZvcmtzLyNsaXN0LWZvcmtzXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXMgZm9ya2VkIGZyb20gdGhpcyBvbmVcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEZvcmtzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vZm9ya3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ3JlYXRlIGEgbmV3IGJyYW5jaCBmcm9tIGFuIGV4aXN0aW5nIGJyYW5jaC5cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb2xkQnJhbmNoPW1hc3Rlcl0gLSB0aGUgbmFtZSBvZiB0aGUgZXhpc3RpbmcgYnJhbmNoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3QnJhbmNoIC0gdGhlIG5hbWUgb2YgdGhlIG5ldyBicmFuY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBjb21taXQgZGF0YSBmb3IgdGhlIGhlYWQgb2YgdGhlIG5ldyBicmFuY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgY3JlYXRlQnJhbmNoKG9sZEJyYW5jaCwgbmV3QnJhbmNoLCBjYikge1xuICAgICAgaWYgKHR5cGVvZiBuZXdCcmFuY2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgIGNiID0gbmV3QnJhbmNoO1xuICAgICAgICAgbmV3QnJhbmNoID0gb2xkQnJhbmNoO1xuICAgICAgICAgb2xkQnJhbmNoID0gJ21hc3Rlcic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldFJlZihgaGVhZHMvJHtvbGRCcmFuY2h9YClcbiAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHNoYSA9IHJlc3BvbnNlLmRhdGEub2JqZWN0LnNoYTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJlZih7XG4gICAgICAgICAgICAgICBzaGEsXG4gICAgICAgICAgICAgICByZWY6IGByZWZzL2hlYWRzLyR7bmV3QnJhbmNofWAsXG4gICAgICAgICAgICB9LCBjYik7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgcHVsbCByZXF1ZXN0XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHVsbHMvI2NyZWF0ZS1hLXB1bGwtcmVxdWVzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgcHVsbCByZXF1ZXN0IGRlc2NyaXB0aW9uXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3IHB1bGwgcmVxdWVzdFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVQdWxsUmVxdWVzdChvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9wdWxsc2AsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVcGRhdGUgYSBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jdXBkYXRlLWEtcHVsbC1yZXF1ZXN0XG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgdGhlIHB1bGwgcmVxdWVzdCB0byB1cGRhdGVcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIHB1bGwgcmVxdWVzdCBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcHVsbCByZXF1ZXN0IGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVwZGF0ZVB1bGxSZXF1ZXN0KG51bWJlciwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBob29rcyBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jbGlzdC1ob29rc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgaG9va3NcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEhvb2tzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vaG9va3NgLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGEgaG9vayBmb3IgdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jZ2V0LXNpbmdsZS1ob29rXG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgaWQgb2YgdGhlIHdlYm9va1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGRldGFpbHMgb2YgdGhlIHdlYm9va1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBnZXRIb29rKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBhIG5ldyBob29rIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvaG9va3MvI2NyZWF0ZS1hLWhvb2tcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGNvbmZpZ3VyYXRpb24gZGVzY3JpYmluZyB0aGUgbmV3IGhvb2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgd2ViaG9va1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVIb29rKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYW4gZXhpc3Rpbmcgd2ViaG9va1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2hvb2tzLyNlZGl0LWEtaG9va1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGlkIG9mIHRoZSB3ZWJob29rXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBuZXcgZGVzY3JpcHRpb24gb2YgdGhlIHdlYmhvb2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIHdlYmhvb2tcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgdXBkYXRlSG9vayhpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIHdlYmhvb2tcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9ob29rcy8jZGVsZXRlLWEtaG9va1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGlkIC0gdGhlIGlkIG9mIHRoZSB3ZWJob29rIHRvIGJlIGRlbGV0ZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIGNhbGwgaXMgc3VjY2Vzc2Z1bFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVIb29rKGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2hvb2tzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIGRlcGxveSBrZXlzIGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2tleXMvI2xpc3QtZGVwbG95LWtleXNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIGRlcGxveSBrZXlzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RLZXlzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0va2V5c2AsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgYSBkZXBsb3kga2V5IGZvciB0aGUgcmVwb3NpdG9yeVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2tleXMvI2dldC1hLWRlcGxveS1rZXlcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBpZCAtIHRoZSBpZCBvZiB0aGUgZGVwbG95IGtleVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGRldGFpbHMgb2YgdGhlIGRlcGxveSBrZXlcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0S2V5KGlkLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L2tleXMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQWRkIGEgbmV3IGRlcGxveSBrZXkgdG8gdGhlIHJlcG9zaXRvcnlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9rZXlzLyNhZGQtYS1uZXctZGVwbG95LWtleVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgY29uZmlndXJhdGlvbiBkZXNjcmliaW5nIHRoZSBuZXcgZGVwbG95IGtleVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ldyBkZXBsb3kga2V5XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZUtleShvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BPU1QnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9rZXlzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGRlcGxveSBrZXlcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9rZXlzLyNyZW1vdmUtYS1kZXBsb3kta2V5XG4gICAgKiBAcGFyYW0ge251bWJlcn0gaWQgLSB0aGUgaWQgb2YgdGhlIGRlcGxveSBrZXkgdG8gYmUgZGVsZXRlZFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdHJ1ZSBpZiB0aGUgY2FsbCBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZUtleShpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9rZXlzLyR7aWR9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIERlbGV0ZSBhIGZpbGUgZnJvbSBhIGJyYW5jaFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL2NvbnRlbnRzLyNkZWxldGUtYS1maWxlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gYnJhbmNoIC0gdGhlIGJyYW5jaCB0byBkZWxldGUgZnJvbSwgb3IgdGhlIGRlZmF1bHQgYnJhbmNoIGlmIG5vdCBzcGVjaWZpZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggb2YgdGhlIGZpbGUgdG8gcmVtb3ZlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgY29tbWl0IGluIHdoaWNoIHRoZSBkZWxldGUgb2NjdXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZGVsZXRlRmlsZShicmFuY2gsIHBhdGgsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5nZXRTaGEoYnJhbmNoLCBwYXRoKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb21taXQgPSB7XG4gICAgICAgICAgICAgICBtZXNzYWdlOiBgRGVsZXRlIHRoZSBmaWxlIGF0ICcke3BhdGh9J2AsXG4gICAgICAgICAgICAgICBzaGE6IHJlc3BvbnNlLmRhdGEuc2hhLFxuICAgICAgICAgICAgICAgYnJhbmNoLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke3BhdGh9YCwgZGVsZXRlQ29tbWl0LCBjYik7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDaGFuZ2UgYWxsIHJlZmVyZW5jZXMgaW4gYSByZXBvIGZyb20gb2xkUGF0aCB0byBuZXdfcGF0aFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGJyYW5jaCAtIHRoZSBicmFuY2ggdG8gY2Fycnkgb3V0IHRoZSByZWZlcmVuY2UgY2hhbmdlLCBvciB0aGUgZGVmYXVsdCBicmFuY2ggaWYgbm90IHNwZWNpZmllZFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9sZFBhdGggLSBvcmlnaW5hbCBwYXRoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCAtIG5ldyByZWZlcmVuY2UgcGF0aFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIGNvbW1pdCBpbiB3aGljaCB0aGUgbW92ZSBvY2N1cnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBtb3ZlKGJyYW5jaCwgb2xkUGF0aCwgbmV3UGF0aCwgY2IpIHtcbiAgICAgIGxldCBvbGRTaGE7XG4gICAgICByZXR1cm4gdGhpcy5nZXRSZWYoYGhlYWRzLyR7YnJhbmNofWApXG4gICAgICAgICAudGhlbigoe2RhdGE6IHtvYmplY3R9fSkgPT4gdGhpcy5nZXRUcmVlKGAke29iamVjdC5zaGF9P3JlY3Vyc2l2ZT10cnVlYCkpXG4gICAgICAgICAudGhlbigoe2RhdGE6IHt0cmVlLCBzaGF9fSkgPT4ge1xuICAgICAgICAgICAgb2xkU2hhID0gc2hhO1xuICAgICAgICAgICAgbGV0IG5ld1RyZWUgPSB0cmVlLm1hcCgocmVmKSA9PiB7XG4gICAgICAgICAgICAgICBpZiAocmVmLnBhdGggPT09IG9sZFBhdGgpIHtcbiAgICAgICAgICAgICAgICAgIHJlZi5wYXRoID0gbmV3UGF0aDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlmIChyZWYudHlwZSA9PT0gJ3RyZWUnKSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgcmVmLnNoYTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIHJldHVybiByZWY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVRyZWUobmV3VHJlZSk7XG4gICAgICAgICB9KVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiB0cmVlfSkgPT4gdGhpcy5jb21taXQob2xkU2hhLCB0cmVlLnNoYSwgYFJlbmFtZWQgJyR7b2xkUGF0aH0nIHRvICcke25ld1BhdGh9J2ApKVxuICAgICAgICAgLnRoZW4oKHtkYXRhOiBjb21taXR9KSA9PiB0aGlzLnVwZGF0ZUhlYWQoYGhlYWRzLyR7YnJhbmNofWAsIGNvbW1pdC5zaGEsIHRydWUsIGNiKSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogV3JpdGUgYSBmaWxlIHRvIHRoZSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvY29udGVudHMvI3VwZGF0ZS1hLWZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2ggLSB0aGUgbmFtZSBvZiB0aGUgYnJhbmNoXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGZvciB0aGUgZmlsZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbnRlbnQgLSB0aGUgY29udGVudHMgb2YgdGhlIGZpbGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gdGhlIGNvbW1pdCBtZXNzYWdlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gY29tbWl0IG9wdGlvbnNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5hdXRob3JdIC0gdGhlIGF1dGhvciBvZiB0aGUgY29tbWl0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuY29tbWl0ZXJdIC0gdGhlIGNvbW1pdHRlclxuICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5lbmNvZGVdIC0gdHJ1ZSBpZiB0aGUgY29udGVudCBzaG91bGQgYmUgYmFzZTY0IGVuY29kZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSBuZXcgY29tbWl0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHdyaXRlRmlsZShicmFuY2gsIHBhdGgsIGNvbnRlbnQsIG1lc3NhZ2UsIG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aCA/IGVuY29kZVVSSShwYXRoKSA6ICcnO1xuICAgICAgbGV0IHNob3VsZEVuY29kZSA9IG9wdGlvbnMuZW5jb2RlICE9PSBmYWxzZTtcbiAgICAgIGxldCBjb21taXQgPSB7XG4gICAgICAgICBicmFuY2gsXG4gICAgICAgICBtZXNzYWdlLFxuICAgICAgICAgYXV0aG9yOiBvcHRpb25zLmF1dGhvcixcbiAgICAgICAgIGNvbW1pdHRlcjogb3B0aW9ucy5jb21taXR0ZXIsXG4gICAgICAgICBjb250ZW50OiBzaG91bGRFbmNvZGUgPyBCYXNlNjQuZW5jb2RlKGNvbnRlbnQpIDogY29udGVudCxcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzLmdldFNoYShicmFuY2gsIGZpbGVQYXRoKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb21taXQuc2hhID0gcmVzcG9uc2UuZGF0YS5zaGE7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUFVUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vY29udGVudHMvJHtmaWxlUGF0aH1gLCBjb21taXQsIGNiKTtcbiAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQVVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9jb250ZW50cy8ke2ZpbGVQYXRofWAsIGNvbW1pdCwgY2IpO1xuICAgICAgICAgfSk7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ2hlY2sgaWYgYSByZXBvc2l0b3J5IGlzIHN0YXJyZWQgYnkgeW91XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvc3RhcnJpbmcvI2NoZWNrLWlmLXlvdS1hcmUtc3RhcnJpbmctYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXBvc2l0b3J5IGlzIHN0YXJyZWQgYW5kIGZhbHNlIGlmIHRoZSByZXBvc2l0b3J5XG4gICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcyBub3Qgc3RhcnJlZFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdCB7Qm9vbGVhbn0gW2Rlc2NyaXB0aW9uXVxuICAgICovXG4gICBpc1N0YXJyZWQoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC91c2VyL3N0YXJyZWQvJHt0aGlzLl9fZnVsbG5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFN0YXIgYSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvc3RhcnJpbmcvI3N0YXItYS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0cnVlIGlmIHRoZSByZXBvc2l0b3J5IGlzIHN0YXJyZWRcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgc3RhcihjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvdXNlci9zdGFycmVkLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBVbnN0YXIgYSByZXBvc2l0b3J5XG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvc3RhcnJpbmcvI3Vuc3Rhci1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcG9zaXRvcnkgaXMgdW5zdGFycmVkXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVuc3RhcihjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0RFTEVURScsIGAvdXNlci9zdGFycmVkLyR7dGhpcy5fX2Z1bGxuYW1lfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgcmVsZWFzZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNjcmVhdGUtYS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgcmVsZWFzZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIG5ld2x5IGNyZWF0ZWQgcmVsZWFzZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBjcmVhdGVSZWxlYXNlKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnUE9TVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEVkaXQgYSByZWxlYXNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvcmVsZWFzZXMvI2VkaXQtYS1yZWxlYXNlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gaWQgLSB0aGUgaWQgb2YgdGhlIHJlbGVhc2VcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSByZWxlYXNlXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbW9kaWZpZWQgcmVsZWFzZVxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1cGRhdGVSZWxlYXNlKGlkLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BBVENIJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcmVsZWFzZXMvJHtpZH1gLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCByZWxlYXNlc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zL3JlbGVhc2VzLyNsaXN0LXJlbGVhc2VzLWZvci1hLXJlcG9zaXRvcnlcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRoZSByZWxlYXNlIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RSZWxlYXNlcyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3JlbGVhc2VzYCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBpbmZvcm1hdGlvbiBhYm91dCBhIHJlbGVhc2VcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9yZXBvcy9yZWxlYXNlcy8jZ2V0LWEtc2luZ2xlLXJlbGVhc2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSBpZCBvZiB0aGUgcmVsZWFzZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gY2IgLSB3aWxsIHJlY2VpdmUgdGhlIHJlbGVhc2UgaW5mb3JtYXRpb25cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0UmVsZWFzZShpZCwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBgL3JlcG9zLyR7dGhpcy5fX2Z1bGxuYW1lfS9yZWxlYXNlcy8ke2lkfWAsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgYSByZWxlYXNlXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcmVwb3MvcmVsZWFzZXMvI2RlbGV0ZS1hLXJlbGVhc2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZCAtIHRoZSByZWxlYXNlIHRvIGJlIGRlbGV0ZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGRlbGV0ZVJlbGVhc2UoaWQsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnREVMRVRFJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcmVsZWFzZXMvJHtpZH1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTWVyZ2UgYSBwdWxsIHJlcXVlc3RcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9wdWxscy8jbWVyZ2UtYS1wdWxsLXJlcXVlc3QtbWVyZ2UtYnV0dG9uXG4gICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG51bWJlciAtIHRoZSBudW1iZXIgb2YgdGhlIHB1bGwgcmVxdWVzdCB0byBtZXJnZVxuICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSB0aGUgbWVyZ2Ugb3B0aW9ucyBmb3IgdGhlIHB1bGwgcmVxdWVzdFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVyZ2UgaW5mb3JtYXRpb24gaWYgdGhlIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIG1lcmdlUHVsbFJlcXVlc3QobnVtYmVyLCBvcHRpb25zLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvcmVwb3MvJHt0aGlzLl9fZnVsbG5hbWV9L3B1bGxzLyR7bnVtYmVyfS9tZXJnZWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHByb2plY3RzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvcHJvamVjdHMvI2xpc3QtcmVwb3NpdG9yeS1wcm9qZWN0c1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBwcm9qZWN0c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UHJvamVjdHMoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHJvamVjdHNgLCB7QWNjZXB0SGVhZGVyOiAnaW5lcnRpYS1wcmV2aWV3J30sIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBuZXcgcHJvamVjdFxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3Byb2plY3RzLyNjcmVhdGUtYS1yZXBvc2l0b3J5LXByb2plY3RcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBjYiAtIHdpbGwgcmVjZWl2ZSB0aGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0XG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVByb2plY3Qob3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgb3B0aW9ucy5BY2NlcHRIZWFkZXIgPSAnaW5lcnRpYS1wcmV2aWV3JztcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgYC9yZXBvcy8ke3RoaXMuX19mdWxsbmFtZX0vcHJvamVjdHNgLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXBvc2l0b3J5O1xuIl19
//# sourceMappingURL=Repository.js.map


/***/ }),

/***/ 2374:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __nccwpck_require__(5462);

var _axios2 = _interopRequireDefault(_axios);

var _debug = __nccwpck_require__(583);

var _debug2 = _interopRequireDefault(_debug);

var _jsBase = __nccwpck_require__(6065);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:request');

/**
 * The error structure returned when a network call fails
 */

var ResponseError = function (_Error) {
   _inherits(ResponseError, _Error);

   /**
    * Construct a new ResponseError
    * @param {string} message - an message to return instead of the the default error message
    * @param {string} path - the requested path
    * @param {Object} response - the object returned by Axios
    */
   function ResponseError(message, path, response) {
      _classCallCheck(this, ResponseError);

      var _this = _possibleConstructorReturn(this, (ResponseError.__proto__ || Object.getPrototypeOf(ResponseError)).call(this, message));

      _this.path = path;
      _this.request = response.config;
      _this.response = (response || {}).response || response;
      _this.status = response.status;
      return _this;
   }

   return ResponseError;
}(Error);

/**
 * Requestable wraps the logic for making http requests to the API
 */


var Requestable = function () {
   /**
    * Either a username and password or an oauth token for Github
    * @typedef {Object} Requestable.auth
    * @prop {string} [username] - the Github username
    * @prop {string} [password] - the user's password
    * @prop {token} [token] - an OAuth token
    */
   /**
    * Initialize the http internals.
    * @param {Requestable.auth} [auth] - the credentials to authenticate to Github. If auth is
    *                                  not provided request will be made unauthenticated
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    * @param {string} [AcceptHeader=v3] - the accept header for the requests
    */
   function Requestable(auth, apiBase, AcceptHeader) {
      _classCallCheck(this, Requestable);

      this.__apiBase = apiBase || 'https://api.github.com';
      this.__auth = {
         token: auth.token,
         username: auth.username,
         password: auth.password
      };
      this.__AcceptHeader = AcceptHeader || 'v3';

      if (auth.token) {
         this.__authorizationHeader = 'token ' + auth.token;
      } else if (auth.username && auth.password) {
         this.__authorizationHeader = 'Basic ' + _jsBase.Base64.encode(auth.username + ':' + auth.password);
      }
   }

   /**
    * Compute the URL to use to make a request.
    * @private
    * @param {string} path - either a URL relative to the API base or an absolute URL
    * @return {string} - the URL to use
    */


   _createClass(Requestable, [{
      key: '__getURL',
      value: function __getURL(path) {
         var url = path;

         if (path.indexOf('//') === -1) {
            url = this.__apiBase + path;
         }

         var newCacheBuster = 'timestamp=' + new Date().getTime();
         return url.replace(/(timestamp=\d+)/, newCacheBuster);
      }

      /**
       * Compute the headers required for an API request.
       * @private
       * @param {boolean} raw - if the request should be treated as JSON or as a raw request
       * @param {string} AcceptHeader - the accept header for the request
       * @return {Object} - the headers to use in the request
       */

   }, {
      key: '__getRequestHeaders',
      value: function __getRequestHeaders(raw, AcceptHeader) {
         var headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Accept': 'application/vnd.github.' + (AcceptHeader || this.__AcceptHeader)
         };

         if (raw) {
            headers.Accept += '.raw';
         }
         headers.Accept += '+json';

         if (this.__authorizationHeader) {
            headers.Authorization = this.__authorizationHeader;
         }

         return headers;
      }

      /**
       * Sets the default options for API requests
       * @protected
       * @param {Object} [requestOptions={}] - the current options for the request
       * @return {Object} - the options to pass to the request
       */

   }, {
      key: '_getOptionsWithDefaults',
      value: function _getOptionsWithDefaults() {
         var requestOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

         if (!(requestOptions.visibility || requestOptions.affiliation)) {
            requestOptions.type = requestOptions.type || 'all';
         }
         requestOptions.sort = requestOptions.sort || 'updated';
         requestOptions.per_page = requestOptions.per_page || '100'; // eslint-disable-line

         return requestOptions;
      }

      /**
       * if a `Date` is passed to this function it will be converted to an ISO string
       * @param {*} date - the object to attempt to coerce into an ISO date string
       * @return {string} - the ISO representation of `date` or whatever was passed in if it was not a date
       */

   }, {
      key: '_dateToISO',
      value: function _dateToISO(date) {
         if (date && date instanceof Date) {
            date = date.toISOString();
         }

         return date;
      }

      /**
       * A function that receives the result of the API request.
       * @callback Requestable.callback
       * @param {Requestable.Error} error - the error returned by the API or `null`
       * @param {(Object|true)} result - the data returned by the API or `true` if the API returns `204 No Content`
       * @param {Object} request - the raw {@linkcode https://github.com/mzabriskie/axios#response-schema Response}
       */
      /**
       * Make a request.
       * @param {string} method - the method for the request (GET, PUT, POST, DELETE)
       * @param {string} path - the path for the request
       * @param {*} [data] - the data to send to the server. For HTTP methods that don't have a body the data
       *                   will be sent as query parameters
       * @param {Requestable.callback} [cb] - the callback for the request
       * @param {boolean} [raw=false] - if the request should be sent as raw. If this is a falsy value then the
       *                              request will be made as JSON
       * @return {Promise} - the Promise for the http request
       */

   }, {
      key: '_request',
      value: function _request(method, path, data, cb, raw) {
         var url = this.__getURL(path);

         var AcceptHeader = (data || {}).AcceptHeader;
         if (AcceptHeader) {
            delete data.AcceptHeader;
         }
         var headers = this.__getRequestHeaders(raw, AcceptHeader);

         var queryParams = {};

         var shouldUseDataAsParams = data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' && methodHasNoBody(method);
         if (shouldUseDataAsParams) {
            queryParams = data;
            data = undefined;
         }

         var config = {
            url: url,
            method: method,
            headers: headers,
            params: queryParams,
            data: data,
            responseType: raw ? 'text' : 'json'
         };

         log(config.method + ' to ' + config.url);
         var requestPromise = (0, _axios2.default)(config).catch(callbackErrorOrThrow(cb, path));

         if (cb) {
            requestPromise.then(function (response) {
               if (response.data && Object.keys(response.data).length > 0) {
                  // When data has results
                  cb(null, response.data, response);
               } else if (config.method !== 'GET' && Object.keys(response.data).length < 1) {
                  // True when successful submit a request and receive a empty object
                  cb(null, response.status < 300, response);
               } else {
                  cb(null, response.data, response);
               }
            });
         }

         return requestPromise;
      }

      /**
       * Make a request to an endpoint the returns 204 when true and 404 when false
       * @param {string} path - the path to request
       * @param {Object} data - any query parameters for the request
       * @param {Requestable.callback} cb - the callback that will receive `true` or `false`
       * @param {method} [method=GET] - HTTP Method to use
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: '_request204or404',
      value: function _request204or404(path, data, cb) {
         var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';

         return this._request(method, path, data).then(function success(response) {
            if (cb) {
               cb(null, true, response);
            }
            return true;
         }, function failure(response) {
            if (response.response.status === 404) {
               if (cb) {
                  cb(null, false, response);
               }
               return false;
            }

            if (cb) {
               cb(response);
            }
            throw response;
         });
      }

      /**
       * Make a request and fetch all the available data. Github will paginate responses so for queries
       * that might span multiple pages this method is preferred to {@link Requestable#request}
       * @param {string} path - the path to request
       * @param {Object} options - the query parameters to include
       * @param {Requestable.callback} [cb] - the function to receive the data. The returned data will always be an array.
       * @param {Object[]} results - the partial results. This argument is intended for internal use only.
       * @return {Promise} - a promise which will resolve when all pages have been fetched
       * @deprecated This will be folded into {@link Requestable#_request} in the 2.0 release.
       */

   }, {
      key: '_requestAllPages',
      value: function _requestAllPages(path, options, cb, results) {
         var _this2 = this;

         results = results || [];

         return this._request('GET', path, options).then(function (response) {
            var _results;

            var thisGroup = void 0;
            if (response.data instanceof Array) {
               thisGroup = response.data;
            } else if (response.data.items instanceof Array) {
               thisGroup = response.data.items;
            } else {
               var message = 'cannot figure out how to append ' + response.data + ' to the result set';
               throw new ResponseError(message, path, response);
            }
            (_results = results).push.apply(_results, _toConsumableArray(thisGroup));

            var nextUrl = getNextPage(response.headers.link);
            if (nextUrl) {
               if (!options) {
                  options = {};
               }
               options.page = parseInt(nextUrl.match(/([&\?]page=[0-9]*)/g).shift().split('=').pop());
               if (!(options && typeof options.page !== 'number')) {
                  log('getting next page: ' + nextUrl);
                  return _this2._requestAllPages(nextUrl, options, cb, results);
               }
            }

            if (cb) {
               cb(null, results, response);
            }

            response.data = results;
            return response;
         }).catch(callbackErrorOrThrow(cb, path));
      }
   }]);

   return Requestable;
}();

module.exports = Requestable;

// ////////////////////////// //
//  Private helper functions  //
// ////////////////////////// //
var METHODS_WITH_NO_BODY = ['GET', 'HEAD', 'DELETE'];
function methodHasNoBody(method) {
   return METHODS_WITH_NO_BODY.indexOf(method) !== -1;
}

function getNextPage() {
   var linksHeader = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

   var links = linksHeader.split(/\s*,\s*/); // splits and strips the urls
   return links.reduce(function (nextUrl, link) {
      if (link.search(/rel="next"/) !== -1) {
         return (link.match(/<(.*)>/) || [])[1];
      }

      return nextUrl;
   }, undefined);
}

function callbackErrorOrThrow(cb, path) {
   return function handler(object) {
      var error = void 0;
      if (object.hasOwnProperty('config')) {
         var _object$response = object.response,
             status = _object$response.status,
             statusText = _object$response.statusText,
             _object$config = object.config,
             method = _object$config.method,
             url = _object$config.url;

         var message = status + ' error making request ' + method + ' ' + url + ': "' + statusText + '"';
         error = new ResponseError(message, path, object);
         log(message + ' ' + JSON.stringify(object.data));
      } else {
         error = object;
      }
      if (cb) {
         log('going to error callback');
         cb(error);
      } else {
         log('throwing error');
         throw error;
      }
   };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVlc3RhYmxlLmpzIl0sIm5hbWVzIjpbImxvZyIsIlJlc3BvbnNlRXJyb3IiLCJtZXNzYWdlIiwicGF0aCIsInJlc3BvbnNlIiwicmVxdWVzdCIsImNvbmZpZyIsInN0YXR1cyIsIkVycm9yIiwiUmVxdWVzdGFibGUiLCJhdXRoIiwiYXBpQmFzZSIsIkFjY2VwdEhlYWRlciIsIl9fYXBpQmFzZSIsIl9fYXV0aCIsInRva2VuIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIl9fQWNjZXB0SGVhZGVyIiwiX19hdXRob3JpemF0aW9uSGVhZGVyIiwiQmFzZTY0IiwiZW5jb2RlIiwidXJsIiwiaW5kZXhPZiIsIm5ld0NhY2hlQnVzdGVyIiwiRGF0ZSIsImdldFRpbWUiLCJyZXBsYWNlIiwicmF3IiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJyZXF1ZXN0T3B0aW9ucyIsInZpc2liaWxpdHkiLCJhZmZpbGlhdGlvbiIsInR5cGUiLCJzb3J0IiwicGVyX3BhZ2UiLCJkYXRlIiwidG9JU09TdHJpbmciLCJtZXRob2QiLCJkYXRhIiwiY2IiLCJfX2dldFVSTCIsIl9fZ2V0UmVxdWVzdEhlYWRlcnMiLCJxdWVyeVBhcmFtcyIsInNob3VsZFVzZURhdGFBc1BhcmFtcyIsIm1ldGhvZEhhc05vQm9keSIsInVuZGVmaW5lZCIsInBhcmFtcyIsInJlc3BvbnNlVHlwZSIsInJlcXVlc3RQcm9taXNlIiwiY2F0Y2giLCJjYWxsYmFja0Vycm9yT3JUaHJvdyIsInRoZW4iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiX3JlcXVlc3QiLCJzdWNjZXNzIiwiZmFpbHVyZSIsIm9wdGlvbnMiLCJyZXN1bHRzIiwidGhpc0dyb3VwIiwiQXJyYXkiLCJpdGVtcyIsInB1c2giLCJuZXh0VXJsIiwiZ2V0TmV4dFBhZ2UiLCJsaW5rIiwicGFnZSIsInBhcnNlSW50IiwibWF0Y2giLCJzaGlmdCIsInNwbGl0IiwicG9wIiwiX3JlcXVlc3RBbGxQYWdlcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJNRVRIT0RTX1dJVEhfTk9fQk9EWSIsImxpbmtzSGVhZGVyIiwibGlua3MiLCJyZWR1Y2UiLCJzZWFyY2giLCJoYW5kbGVyIiwib2JqZWN0IiwiZXJyb3IiLCJoYXNPd25Qcm9wZXJ0eSIsInN0YXR1c1RleHQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBVEE7Ozs7Ozs7QUFXQSxJQUFNQSxNQUFNLHFCQUFNLGdCQUFOLENBQVo7O0FBRUE7Ozs7SUFHTUMsYTs7O0FBQ0g7Ozs7OztBQU1BLDBCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsUUFBM0IsRUFBcUM7QUFBQTs7QUFBQSxnSUFDNUJGLE9BRDRCOztBQUVsQyxZQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDQSxZQUFLRSxPQUFMLEdBQWVELFNBQVNFLE1BQXhCO0FBQ0EsWUFBS0YsUUFBTCxHQUFnQixDQUFDQSxZQUFZLEVBQWIsRUFBaUJBLFFBQWpCLElBQTZCQSxRQUE3QztBQUNBLFlBQUtHLE1BQUwsR0FBY0gsU0FBU0csTUFBdkI7QUFMa0M7QUFNcEM7OztFQWJ3QkMsSzs7QUFnQjVCOzs7OztJQUdNQyxXO0FBQ0g7Ozs7Ozs7QUFPQTs7Ozs7OztBQU9BLHdCQUFZQyxJQUFaLEVBQWtCQyxPQUFsQixFQUEyQkMsWUFBM0IsRUFBeUM7QUFBQTs7QUFDdEMsV0FBS0MsU0FBTCxHQUFpQkYsV0FBVyx3QkFBNUI7QUFDQSxXQUFLRyxNQUFMLEdBQWM7QUFDWEMsZ0JBQU9MLEtBQUtLLEtBREQ7QUFFWEMsbUJBQVVOLEtBQUtNLFFBRko7QUFHWEMsbUJBQVVQLEtBQUtPO0FBSEosT0FBZDtBQUtBLFdBQUtDLGNBQUwsR0FBc0JOLGdCQUFnQixJQUF0Qzs7QUFFQSxVQUFJRixLQUFLSyxLQUFULEVBQWdCO0FBQ2IsY0FBS0kscUJBQUwsR0FBNkIsV0FBV1QsS0FBS0ssS0FBN0M7QUFDRixPQUZELE1BRU8sSUFBSUwsS0FBS00sUUFB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b250ZW50IjpbIi8qKlxuICogQGZpbGVcbiAqIEBjb3B5cmlnaHQgIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IGRlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7QmFzZTY0fSBmcm9tICdqcy1iYXNlNjQnO1xuXG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnJlcXVlc3QnKTtcblxuLyoqXG4gKiBUaGUgZXJyb3Igc3RydWN0dXJlIHJldHVybmVkIHdoZW4gYSBuZXR3b3JrIGNhbGwgZmFpbHNcbiAqL1xuY2xhc3MgUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgIC8qKlxuICAgICogQ29uc3RydWN0IGEgbmV3IFJlc3BvbnNlRXJyb3JcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIC0gYW4gbWVzc2FnZSB0byByZXR1cm4gaW5zdGVhZCBvZiB0aGUgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcmVxdWVzdGVkIHBhdGhcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZSAtIHRoZSBvYmplY3QgcmV0dXJuZWQgYnkgQXhpb3NcbiAgICAqL1xuICAgY29uc3RydWN0b3IobWVzc2FnZSwgcGF0aCwgcmVzcG9uc2UpIHtcbiAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgIHRoaXMucmVxdWVzdCA9IHJlc3BvbnNlLmNvbmZpZztcbiAgICAgIHRoaXMucmVzcG9uc2UgPSAocmVzcG9uc2UgfHwge30pLnJlc3BvbnNlIHx8IHJlc3BvbnNlO1xuICAgICAgdGhpcy5zdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICB9XG59XG5cbi8qKlxuICogUmVxdWVzdGFibGUgd3JhcHMgdGhlIGxvZ2ljIGZvciBtYWtpbmcgaHR0cCByZXF1ZXN0cyB0byB0aGUgQVBJXG4gKi9cbmNsYXNzIFJlcXVlc3RhYmxlIHtcbiAgIC8qKlxuICAgICogRWl0aGVyIGEgdXNlcm5hbWUgYW5kIHBhc3N3b3JkIG9yIGFuIG9hdXRoIHRva2VuIGZvciBHaXRodWJcbiAgICAqIEB0eXBlZGVmIHtPYmplY3R9IFJlcXVlc3RhYmxlLmF1dGhcbiAgICAqIEBwcm9wIHtzdHJpbmd9IFt1c2VybmFtZV0gLSB0aGUgR2l0aHViIHVzZXJuYW1lXG4gICAgKiBAcHJvcCB7c3RyaW5nfSBbcGFzc3dvcmRdIC0gdGhlIHVzZXIncyBwYXNzd29yZFxuICAgICogQHByb3Age3Rva2VufSBbdG9rZW5dIC0gYW4gT0F1dGggdG9rZW5cbiAgICAqL1xuICAgLyoqXG4gICAgKiBJbml0aWFsaXplIHRoZSBodHRwIGludGVybmFscy5cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuYXV0aH0gW2F1dGhdIC0gdGhlIGNyZWRlbnRpYWxzIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWIuIElmIGF1dGggaXNcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdCBwcm92aWRlZCByZXF1ZXN0IHdpbGwgYmUgbWFkZSB1bmF1dGhlbnRpY2F0ZWRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW0FjY2VwdEhlYWRlcj12M10gLSB0aGUgYWNjZXB0IGhlYWRlciBmb3IgdGhlIHJlcXVlc3RzXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGF1dGgsIGFwaUJhc2UsIEFjY2VwdEhlYWRlcikge1xuICAgICAgdGhpcy5fX2FwaUJhc2UgPSBhcGlCYXNlIHx8ICdodHRwczovL2FwaS5naXRodWIuY29tJztcbiAgICAgIHRoaXMuX19hdXRoID0ge1xuICAgICAgICAgdG9rZW46IGF1dGgudG9rZW4sXG4gICAgICAgICB1c2VybmFtZTogYXV0aC51c2VybmFtZSxcbiAgICAgICAgIHBhc3N3b3JkOiBhdXRoLnBhc3N3b3JkLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX19BY2NlcHRIZWFkZXIgPSBBY2NlcHRIZWFkZXIgfHwgJ3YzJztcblxuICAgICAgaWYgKGF1dGgudG9rZW4pIHtcbiAgICAgICAgIHRoaXMuX19hdXRob3JpemF0aW9uSGVhZGVyID0gJ3Rva2VuICcgKyBhdXRoLnRva2VuO1xuICAgICAgfSBlbHNlIGlmIChhdXRoLnVzZXJuYW1lICYmIGF1dGgucGFzc3dvcmQpIHtcbiAgICAgICAgIHRoaXMuX19hdXRob3JpemF0aW9uSGVhZGVyID0gJ0Jhc2ljICcgKyBCYXNlNjQuZW5jb2RlKGF1dGgudXNlcm5hbWUgKyAnOicgKyBhdXRoLnBhc3N3b3JkKTtcbiAgICAgIH1cbiAgIH1cblxuICAgLyoqXG4gICAgKiBDb21wdXRlIHRoZSBVUkwgdG8gdXNlIHRvIG1ha2UgYSByZXF1ZXN0LlxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gZWl0aGVyIGEgVVJMIHJlbGF0aXZlIHRvIHRoZSBBUEkgYmFzZSBvciBhbiBhYnNvbHV0ZSBVUkxcbiAgICAqIEByZXR1cm4ge3N0cmluZ30gLSB0aGUgVVJMIHRvIHVzZVxuICAgICovXG4gICBfX2dldFVSTChwYXRoKSB7XG4gICAgICBsZXQgdXJsID0gcGF0aDtcblxuICAgICAgaWYgKHBhdGguaW5kZXhPZignLy8nKSA9PT0gLTEpIHtcbiAgICAgICAgIHVybCA9IHRoaXMuX19hcGlCYXNlICsgcGF0aDtcbiAgICAgIH1cblxuICAgICAgbGV0IG5ld0NhY2hlQnVzdGVyID0gJ3RpbWVzdGFtcD0nICsgbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICByZXR1cm4gdXJsLnJlcGxhY2UoLyh0aW1lc3RhbXA9XFxkKykvLCBuZXdDYWNoZUJ1c3Rlcik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogQ29tcHV0ZSB0aGUgaGVhZGVycyByZXF1aXJlZCBmb3IgYW4gQVBJIHJlcXVlc3QuXG4gICAgKiBAcHJpdmF0ZVxuICAgICogQHBhcmFtIHtib29sZWFufSByYXcgLSBpZiB0aGUgcmVxdWVzdCBzaG91bGQgYmUgdHJlYXRlZCBhcyBKU09OIG9yIGFzIGEgcmF3IHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBBY2NlcHRIZWFkZXIgLSB0aGUgYWNjZXB0IGhlYWRlciBmb3IgdGhlIHJlcXVlc3RcbiAgICAqIEByZXR1cm4ge09iamVjdH0gLSB0aGUgaGVhZGVycyB0byB1c2UgaW4gdGhlIHJlcXVlc3RcbiAgICAqL1xuICAgX19nZXRSZXF1ZXN0SGVhZGVycyhyYXcsIEFjY2VwdEhlYWRlcikge1xuICAgICAgbGV0IGhlYWRlcnMgPSB7XG4gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOCcsXG4gICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5naXRodWIuJyArIChBY2NlcHRIZWFkZXIgfHwgdGhpcy5fX0FjY2VwdEhlYWRlciksXG4gICAgICB9O1xuXG4gICAgICBpZiAocmF3KSB7XG4gICAgICAgICBoZWFkZXJzLkFjY2VwdCArPSAnLnJhdyc7XG4gICAgICB9XG4gICAgICBoZWFkZXJzLkFjY2VwdCArPSAnK2pzb24nO1xuXG4gICAgICBpZiAodGhpcy5fX2F1dGhvcml6YXRpb25IZWFkZXIpIHtcbiAgICAgICAgIGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IHRoaXMuX19hdXRob3JpemF0aW9uSGVhZGVyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaGVhZGVycztcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTZXRzIHRoZSBkZWZhdWx0IG9wdGlvbnMgZm9yIEFQSSByZXF1ZXN0c1xuICAgICogQHByb3RlY3RlZFxuICAgICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0T3B0aW9ucz17fV0gLSB0aGUgY3VycmVudCBvcHRpb25zIGZvciB0aGUgcmVxdWVzdFxuICAgICogQHJldHVybiB7T2JqZWN0fSAtIHRoZSBvcHRpb25zIHRvIHBhc3MgdG8gdGhlIHJlcXVlc3RcbiAgICAqL1xuICAgX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMocmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgaWYgKCEocmVxdWVzdE9wdGlvbnMudmlzaWJpbGl0eSB8fCByZXF1ZXN0T3B0aW9ucy5hZmZpbGlhdGlvbikpIHtcbiAgICAgICAgIHJlcXVlc3RPcHRpb25zLnR5cGUgPSByZXF1ZXN0T3B0aW9ucy50eXBlIHx8ICdhbGwnO1xuICAgICAgfVxuICAgICAgcmVxdWVzdE9wdGlvbnMuc29ydCA9IHJlcXVlc3RPcHRpb25zLnNvcnQgfHwgJ3VwZGF0ZWQnO1xuICAgICAgcmVxdWVzdE9wdGlvbnMucGVyX3BhZ2UgPSByZXF1ZXN0T3B0aW9ucy5wZXJfcGFnZSB8fCAnMTAwJzsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXG4gICAgICByZXR1cm4gcmVxdWVzdE9wdGlvbnM7XG4gICB9XG5cbiAgIC8qKlxuICAgICogaWYgYSBgRGF0ZWAgaXMgcGFzc2VkIHRvIHRoaXMgZnVuY3Rpb24gaXQgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gSVNPIHN0cmluZ1xuICAgICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIG9iamVjdCB0byBhdHRlbXB0IHRvIGNvZXJjZSBpbnRvIGFuIElTTyBkYXRlIHN0cmluZ1xuICAgICogQHJldHVybiB7c3RyaW5nfSAtIHRoZSBJU08gcmVwcmVzZW50YXRpb24gb2YgYGRhdGVgIG9yIHdoYXRldmVyIHdhcyBwYXNzZWQgaW4gaWYgaXQgd2FzIG5vdCBhIGRhdGVcbiAgICAqL1xuICAgX2RhdGVUb0lTTyhkYXRlKSB7XG4gICAgICBpZiAoZGF0ZSAmJiAoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICBkYXRlID0gZGF0ZS50b0lTT1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0ZTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIHJlc3VsdCBvZiB0aGUgQVBJIHJlcXVlc3QuXG4gICAgKiBAY2FsbGJhY2sgUmVxdWVzdGFibGUuY2FsbGJhY2tcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuRXJyb3J9IGVycm9yIC0gdGhlIGVycm9yIHJldHVybmVkIGJ5IHRoZSBBUEkgb3IgYG51bGxgXG4gICAgKiBAcGFyYW0geyhPYmplY3R8dHJ1ZSl9IHJlc3VsdCAtIHRoZSBkYXRhIHJldHVybmVkIGJ5IHRoZSBBUEkgb3IgYHRydWVgIGlmIHRoZSBBUEkgcmV0dXJucyBgMjA0IE5vIENvbnRlbnRgXG4gICAgKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdCAtIHRoZSByYXcge0BsaW5rY29kZSBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9heGlvcyNyZXNwb25zZS1zY2hlbWEgUmVzcG9uc2V9XG4gICAgKi9cbiAgIC8qKlxuICAgICogTWFrZSBhIHJlcXVlc3QuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kIC0gdGhlIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QgKEdFVCwgUFVULCBQT1NULCBERUxFVEUpXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAtIHRoZSBwYXRoIGZvciB0aGUgcmVxdWVzdFxuICAgICogQHBhcmFtIHsqfSBbZGF0YV0gLSB0aGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2ZXIuIEZvciBIVFRQIG1ldGhvZHMgdGhhdCBkb24ndCBoYXZlIGEgYm9keSB0aGUgZGF0YVxuICAgICogICAgICAgICAgICAgICAgICAgd2lsbCBiZSBzZW50IGFzIHF1ZXJ5IHBhcmFtZXRlcnNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB0aGUgY2FsbGJhY2sgZm9yIHRoZSByZXF1ZXN0XG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyYXc9ZmFsc2VdIC0gaWYgdGhlIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnQgYXMgcmF3LiBJZiB0aGlzIGlzIGEgZmFsc3kgdmFsdWUgdGhlbiB0aGVcbiAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdCB3aWxsIGJlIG1hZGUgYXMgSlNPTlxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgUHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBfcmVxdWVzdChtZXRob2QsIHBhdGgsIGRhdGEsIGNiLCByYXcpIHtcbiAgICAgIGNvbnN0IHVybCA9IHRoaXMuX19nZXRVUkwocGF0aCk7XG5cbiAgICAgIGNvbnN0IEFjY2VwdEhlYWRlciA9IChkYXRhIHx8IHt9KS5BY2NlcHRIZWFkZXI7XG4gICAgICBpZiAoQWNjZXB0SGVhZGVyKSB7XG4gICAgICAgICBkZWxldGUgZGF0YS5BY2NlcHRIZWFkZXI7XG4gICAgICB9XG4gICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5fX2dldFJlcXVlc3RIZWFkZXJzKHJhdywgQWNjZXB0SGVhZGVyKTtcblxuICAgICAgbGV0IHF1ZXJ5UGFyYW1zID0ge307XG5cbiAgICAgIGNvbnN0IHNob3VsZFVzZURhdGFBc1BhcmFtcyA9IGRhdGEgJiYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JykgJiYgbWV0aG9kSGFzTm9Cb2R5KG1ldGhvZCk7XG4gICAgICBpZiAoc2hvdWxkVXNlRGF0YUFzUGFyYW1zKSB7XG4gICAgICAgICBxdWVyeVBhcmFtcyA9IGRhdGE7XG4gICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgIHBhcmFtczogcXVlcnlQYXJhbXMsXG4gICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgcmVzcG9uc2VUeXBlOiByYXcgPyAndGV4dCcgOiAnanNvbicsXG4gICAgICB9O1xuXG4gICAgICBsb2coYCR7Y29uZmlnLm1ldGhvZH0gdG8gJHtjb25maWcudXJsfWApO1xuICAgICAgY29uc3QgcmVxdWVzdFByb21pc2UgPSBheGlvcyhjb25maWcpLmNhdGNoKGNhbGxiYWNrRXJyb3JPclRocm93KGNiLCBwYXRoKSk7XG5cbiAgICAgIGlmIChjYikge1xuICAgICAgICAgcmVxdWVzdFByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIE9iamVjdC5rZXlzKHJlc3BvbnNlLmRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgIC8vIFdoZW4gZGF0YSBoYXMgcmVzdWx0c1xuICAgICAgICAgICAgICAgY2IobnVsbCwgcmVzcG9uc2UuZGF0YSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb25maWcubWV0aG9kICE9PSAnR0VUJyAmJiBPYmplY3Qua2V5cyhyZXNwb25zZS5kYXRhKS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICAgICAvLyBUcnVlIHdoZW4gc3VjY2Vzc2Z1bCBzdWJtaXQgYSByZXF1ZXN0IGFuZCByZWNlaXZlIGEgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICBjYihudWxsLCAocmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGNiKG51bGwsIHJlc3BvbnNlLmRhdGEsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVxdWVzdFByb21pc2U7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTWFrZSBhIHJlcXVlc3QgdG8gYW4gZW5kcG9pbnQgdGhlIHJldHVybnMgMjA0IHdoZW4gdHJ1ZSBhbmQgNDA0IHdoZW4gZmFsc2VcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHBhdGggdG8gcmVxdWVzdFxuICAgICogQHBhcmFtIHtPYmplY3R9IGRhdGEgLSBhbnkgcXVlcnkgcGFyYW1ldGVycyBmb3IgdGhlIHJlcXVlc3RcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IGNiIC0gdGhlIGNhbGxiYWNrIHRoYXQgd2lsbCByZWNlaXZlIGB0cnVlYCBvciBgZmFsc2VgXG4gICAgKiBAcGFyYW0ge21ldGhvZH0gW21ldGhvZD1HRVRdIC0gSFRUUCBNZXRob2QgdG8gdXNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIF9yZXF1ZXN0MjA0b3I0MDQocGF0aCwgZGF0YSwgY2IsIG1ldGhvZCA9ICdHRVQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdChtZXRob2QsIHBhdGgsIGRhdGEpXG4gICAgICAgICAudGhlbihmdW5jdGlvbiBzdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgIGNiKG51bGwsIHRydWUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgfSwgZnVuY3Rpb24gZmFpbHVyZShyZXNwb25zZSkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICBpZiAoY2IpIHtcbiAgICAgICAgICAgICAgICAgIGNiKG51bGwsIGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgICAgY2IocmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgICAgICB9KTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBNYWtlIGEgcmVxdWVzdCBhbmQgZmV0Y2ggYWxsIHRoZSBhdmFpbGFibGUgZGF0YS4gR2l0aHViIHdpbGwgcGFnaW5hdGUgcmVzcG9uc2VzIHNvIGZvciBxdWVyaWVzXG4gICAgKiB0aGF0IG1pZ2h0IHNwYW4gbXVsdGlwbGUgcGFnZXMgdGhpcyBtZXRob2QgaXMgcHJlZmVycmVkIHRvIHtAbGluayBSZXF1ZXN0YWJsZSNyZXF1ZXN0fVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggLSB0aGUgcGF0aCB0byByZXF1ZXN0XG4gICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyAtIHRoZSBxdWVyeSBwYXJhbWV0ZXJzIHRvIGluY2x1ZGVcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB0aGUgZnVuY3Rpb24gdG8gcmVjZWl2ZSB0aGUgZGF0YS4gVGhlIHJldHVybmVkIGRhdGEgd2lsbCBhbHdheXMgYmUgYW4gYXJyYXkuXG4gICAgKiBAcGFyYW0ge09iamVjdFtdfSByZXN1bHRzIC0gdGhlIHBhcnRpYWwgcmVzdWx0cy4gVGhpcyBhcmd1bWVudCBpcyBpbnRlbmRlZCBmb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIGEgcHJvbWlzZSB3aGljaCB3aWxsIHJlc29sdmUgd2hlbiBhbGwgcGFnZXMgaGF2ZSBiZWVuIGZldGNoZWRcbiAgICAqIEBkZXByZWNhdGVkIFRoaXMgd2lsbCBiZSBmb2xkZWQgaW50byB7QGxpbmsgUmVxdWVzdGFibGUjX3JlcXVlc3R9IGluIHRoZSAyLjAgcmVsZWFzZS5cbiAgICAqL1xuICAgX3JlcXVlc3RBbGxQYWdlcyhwYXRoLCBvcHRpb25zLCBjYiwgcmVzdWx0cykge1xuICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCBwYXRoLCBvcHRpb25zKVxuICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGhpc0dyb3VwO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgdGhpc0dyb3VwID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5pdGVtcyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICB0aGlzR3JvdXAgPSByZXNwb25zZS5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIGxldCBtZXNzYWdlID0gYGNhbm5vdCBmaWd1cmUgb3V0IGhvdyB0byBhcHBlbmQgJHtyZXNwb25zZS5kYXRhfSB0byB0aGUgcmVzdWx0IHNldGA7XG4gICAgICAgICAgICAgICB0aHJvdyBuZXcgUmVzcG9uc2VFcnJvcihtZXNzYWdlLCBwYXRoLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHRzLnB1c2goLi4udGhpc0dyb3VwKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFVybCA9IGdldE5leHRQYWdlKHJlc3BvbnNlLmhlYWRlcnMubGluayk7XG4gICAgICAgICAgICBpZihuZXh0VXJsKSB7XG4gICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIG9wdGlvbnMucGFnZSA9IHBhcnNlSW50KFxuICAgICAgICAgICAgICAgICBuZXh0VXJsLm1hdGNoKC8oWyZcXD9dcGFnZT1bMC05XSopL2cpXG4gICAgICAgICAgICAgICAgICAgLnNoaWZ0KClcbiAgICAgICAgICAgICAgICAgICAuc3BsaXQoJz0nKVxuICAgICAgICAgICAgICAgICAgIC5wb3AoKVxuICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMucGFnZSAhPT0gJ251bWJlcicpKSB7XG4gICAgICAgICAgICAgICAgICBsb2coYGdldHRpbmcgbmV4dCBwYWdlOiAke25leHRVcmx9YCk7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKG5leHRVcmwsIG9wdGlvbnMsIGNiLCByZXN1bHRzKTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNiKSB7XG4gICAgICAgICAgICAgICBjYihudWxsLCByZXN1bHRzLCByZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEgPSByZXN1bHRzO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICAgfSkuY2F0Y2goY2FsbGJhY2tFcnJvck9yVGhyb3coY2IsIHBhdGgpKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZXF1ZXN0YWJsZTtcblxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gLy9cbi8vICBQcml2YXRlIGhlbHBlciBmdW5jdGlvbnMgIC8vXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAvL1xuY29uc3QgTUVUSE9EU19XSVRIX05PX0JPRFkgPSBbJ0dFVCcsICdIRUFEJywgJ0RFTEVURSddO1xuZnVuY3Rpb24gbWV0aG9kSGFzTm9Cb2R5KG1ldGhvZCkge1xuICAgcmV0dXJuIE1FVEhPRFNfV0lUSF9OT19CT0RZLmluZGV4T2YobWV0aG9kKSAhPT0gLTE7XG59XG5cbmZ1bmN0aW9uIGdldE5leHRQYWdlKGxpbmtzSGVhZGVyID0gJycpIHtcbiAgIGNvbnN0IGxpbmtzID0gbGlua3NIZWFkZXIuc3BsaXQoL1xccyosXFxzKi8pOyAvLyBzcGxpdHMgYW5kIHN0cmlwcyB0aGUgdXJsc1xuICAgcmV0dXJuIGxpbmtzLnJlZHVjZShmdW5jdGlvbihuZXh0VXJsLCBsaW5rKSB7XG4gICAgICBpZiAobGluay5zZWFyY2goL3JlbD1cIm5leHRcIi8pICE9PSAtMSkge1xuICAgICAgICAgcmV0dXJuIChsaW5rLm1hdGNoKC88KC4qKT4vKSB8fCBbXSlbMV07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXh0VXJsO1xuICAgfSwgdW5kZWZpbmVkKTtcbn1cblxuZnVuY3Rpb24gY2FsbGJhY2tFcnJvck9yVGhyb3coY2IsIHBhdGgpIHtcbiAgIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKG9iamVjdCkge1xuICAgICAgbGV0IGVycm9yO1xuICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eSgnY29uZmlnJykpIHtcbiAgICAgICAgIGNvbnN0IHtyZXNwb25zZToge3N0YXR1cywgc3RhdHVzVGV4dH0sIGNvbmZpZzoge21ldGhvZCwgdXJsfX0gPSBvYmplY3Q7XG4gICAgICAgICBsZXQgbWVzc2FnZSA9IChgJHtzdGF0dXN9IGVycm9yIG1ha2luZyByZXF1ZXN0ICR7bWV0aG9kfSAke3VybH06IFwiJHtzdGF0dXNUZXh0fVwiYCk7XG4gICAgICAgICBlcnJvciA9IG5ldyBSZXNwb25zZUVycm9yKG1lc3NhZ2UsIHBhdGgsIG9iamVjdCk7XG4gICAgICAgICBsb2coYCR7bWVzc2FnZX0gJHtKU09OLnN0cmluZ2lmeShvYmplY3QuZGF0YSl9YCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgZXJyb3IgPSBvYmplY3Q7XG4gICAgICB9XG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgIGxvZygnZ29pbmcgdG8gZXJyb3IgY2FsbGJhY2snKTtcbiAgICAgICAgIGNiKGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICBsb2coJ3Rocm93aW5nIGVycm9yJyk7XG4gICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgIH1cbiAgIH07XG59XG4iXX0=
//# sourceMappingURL=Requestable.js.map


/***/ }),

/***/ 3333:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __nccwpck_require__(583);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:search');

/**
 * Wrap the Search API
 */

var Search = function (_Requestable) {
  _inherits(Search, _Requestable);

  /**
   * Create a Search
   * @param {Object} defaults - defaults for the search
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Search(defaults, auth, apiBase) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, auth, apiBase));

    _this.__defaults = _this._getOptionsWithDefaults(defaults);
    return _this;
  }

  /**
   * Available search options
   * @see https://developer.github.com/v3/search/#parameters
   * @typedef {Object} Search.Params
   * @param {string} q - the query to make
   * @param {string} sort - the sort field, one of `stars`, `forks`, or `updated`.
   *                      Default is [best match](https://developer.github.com/v3/search/#ranking-search-results)
   * @param {string} order - the ordering, either `asc` or `desc`
   */
  /**
   * Perform a search on the GitHub API
   * @private
   * @param {string} path - the scope of the search
   * @param {Search.Params} [withOptions] - additional parameters for the search
   * @param {Requestable.callback} [cb] - will receive the results of the search
   * @return {Promise} - the promise for the http request
   */


  _createClass(Search, [{
    key: '_search',
    value: function _search(path) {
      var _this2 = this;

      var withOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

      var requestOptions = {};
      Object.keys(this.__defaults).forEach(function (prop) {
        requestOptions[prop] = _this2.__defaults[prop];
      });
      Object.keys(withOptions).forEach(function (prop) {
        requestOptions[prop] = withOptions[prop];
      });

      log('searching ' + path + ' with options:', requestOptions);
      return this._requestAllPages('/search/' + path, requestOptions, cb);
    }

    /**
     * Search for repositories
     * @see https://developer.github.com/v3/search/#search-repositories
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forRepositories',
    value: function forRepositories(options, cb) {
      return this._search('repositories', options, cb);
    }

    /**
     * Search for code
     * @see https://developer.github.com/v3/search/#search-code
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forCode',
    value: function forCode(options, cb) {
      return this._search('code', options, cb);
    }

    /**
     * Search for issues
     * @see https://developer.github.com/v3/search/#search-issues
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forIssues',
    value: function forIssues(options, cb) {
      return this._search('issues', options, cb);
    }

    /**
     * Search for users
     * @see https://developer.github.com/v3/search/#search-users
     * @param {Search.Params} [options] - additional parameters for the search
     * @param {Requestable.callback} [cb] - will receive the results of the search
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'forUsers',
    value: function forUsers(options, cb) {
      return this._search('users', options, cb);
    }
  }]);

  return Search;
}(_Requestable3.default);

module.exports = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJTZWFyY2giLCJkZWZhdWx0cyIsImF1dGgiLCJhcGlCYXNlIiwiX19kZWZhdWx0cyIsIl9nZXRPcHRpb25zV2l0aERlZmF1bHRzIiwicGF0aCIsIndpdGhPcHRpb25zIiwiY2IiLCJ1bmRlZmluZWQiLCJyZXF1ZXN0T3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicHJvcCIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJvcHRpb25zIiwiX3NlYXJjaCIsIlJlcXVlc3RhYmxlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7OztBQU9BOzs7O0FBQ0E7Ozs7Ozs7Ozs7K2VBUkE7Ozs7Ozs7QUFTQSxJQUFNQSxNQUFNLHFCQUFNLGVBQU4sQ0FBWjs7QUFFQTs7OztJQUdNQyxNOzs7QUFDSDs7Ozs7O0FBTUEsa0JBQVlDLFFBQVosRUFBc0JDLElBQXRCLEVBQTRCQyxPQUE1QixFQUFxQztBQUFBOztBQUFBLGdIQUM1QkQsSUFENEIsRUFDdEJDLE9BRHNCOztBQUVsQyxVQUFLQyxVQUFMLEdBQWtCLE1BQUtDLHVCQUFMLENBQTZCSixRQUE3QixDQUFsQjtBQUZrQztBQUdwQzs7QUFFRDs7Ozs7Ozs7O0FBU0E7Ozs7Ozs7Ozs7Ozs0QkFRUUssSSxFQUF3QztBQUFBOztBQUFBLFVBQWxDQyxXQUFrQyx1RUFBcEIsRUFBb0I7QUFBQSxVQUFoQkMsRUFBZ0IsdUVBQVhDLFNBQVc7O0FBQzdDLFVBQUlDLGlCQUFpQixFQUFyQjtBQUNBQyxhQUFPQyxJQUFQLENBQVksS0FBS1IsVUFBakIsRUFBNkJTLE9BQTdCLENBQXFDLFVBQUNDLElBQUQsRUFBVTtBQUM1Q0osdUJBQWVJLElBQWYsSUFBdUIsT0FBS1YsVUFBTCxDQUFnQlUsSUFBaEIsQ0FBdkI7QUFDRixPQUZEO0FBR0FILGFBQU9DLElBQVAsQ0FBWUwsV0FBWixFQUF5Qk0sT0FBekIsQ0FBaUMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3hDSix1QkFBZUksSUFBZixJQUF1QlAsWUFBWU8sSUFBWixDQUF2QjtBQUNGLE9BRkQ7O0FBSUFmLHlCQUFpQk8sSUFBakIscUJBQXVDSSxjQUF2QztBQUNBLGFBQU8sS0FBS0ssZ0JBQUwsY0FBaUNULElBQWpDLEVBQXlDSSxjQUF6QyxFQUF5REYsRUFBekQsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7O29DQU9nQlEsTyxFQUFTUixFLEVBQUk7QUFDMUIsYUFBTyxLQUFLUyxPQUFMLENBQWEsY0FBYixFQUE2QkQsT0FBN0IsRUFBc0NSLEVBQXRDLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs0QkFPUVEsTyxFQUFTUixFLEVBQUk7QUFDbEIsYUFBTyxLQUFLUyxPQUFMLENBQWEsTUFBYixFQUFxQkQsT0FBckIsRUFBOEJSLEVBQTlCLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs4QkFPVVEsTyxFQUFTUixFLEVBQUk7QUFDcEIsYUFBTyxLQUFLUyxPQUFMLENBQWEsUUFBYixFQUF1QkQsT0FBdkIsRUFBZ0NSLEVBQWhDLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs2QkFPU1EsTyxFQUFTUixFLEVBQUk7QUFDbkIsYUFBTyxLQUFLUyxPQUFMLENBQWEsT0FBYixFQUFzQkQsT0FBdEIsRUFBK0JSLEVBQS9CLENBQVA7QUFDRjs7OztFQXBGaUJVLHFCOztBQXVGckJDLE9BQU9DLE9BQVAsR0FBaUJwQixNQUFqQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDEzIE1pY2hhZWwgQXVmcmVpdGVyIChEZXZlbG9wbWVudCBTZWVkKSBhbmQgMjAxNiBZYWhvbyBJbmMuXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnNlYXJjaCcpO1xuXG4vKipcbiAqIFdyYXAgdGhlIFNlYXJjaCBBUElcbiAqL1xuY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVxdWVzdGFibGUge1xuICAgLyoqXG4gICAgKiBDcmVhdGUgYSBTZWFyY2hcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0cyAtIGRlZmF1bHRzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKGRlZmF1bHRzLCBhdXRoLCBhcGlCYXNlKSB7XG4gICAgICBzdXBlcihhdXRoLCBhcGlCYXNlKTtcbiAgICAgIHRoaXMuX19kZWZhdWx0cyA9IHRoaXMuX2dldE9wdGlvbnNXaXRoRGVmYXVsdHMoZGVmYXVsdHMpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEF2YWlsYWJsZSBzZWFyY2ggb3B0aW9uc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jcGFyYW1ldGVyc1xuICAgICogQHR5cGVkZWYge09iamVjdH0gU2VhcmNoLlBhcmFtc1xuICAgICogQHBhcmFtIHtzdHJpbmd9IHEgLSB0aGUgcXVlcnkgdG8gbWFrZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnQgLSB0aGUgc29ydCBmaWVsZCwgb25lIG9mIGBzdGFyc2AsIGBmb3Jrc2AsIG9yIGB1cGRhdGVkYC5cbiAgICAqICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgW2Jlc3QgbWF0Y2hdKGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvc2VhcmNoLyNyYW5raW5nLXNlYXJjaC1yZXN1bHRzKVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9yZGVyIC0gdGhlIG9yZGVyaW5nLCBlaXRoZXIgYGFzY2Agb3IgYGRlc2NgXG4gICAgKi9cbiAgIC8qKlxuICAgICogUGVyZm9ybSBhIHNlYXJjaCBvbiB0aGUgR2l0SHViIEFQSVxuICAgICogQHByaXZhdGVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIC0gdGhlIHNjb3BlIG9mIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7U2VhcmNoLlBhcmFtc30gW3dpdGhPcHRpb25zXSAtIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0cyBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIF9zZWFyY2gocGF0aCwgd2l0aE9wdGlvbnMgPSB7fSwgY2IgPSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IHt9O1xuICAgICAgT2JqZWN0LmtleXModGhpcy5fX2RlZmF1bHRzKS5mb3JFYWNoKChwcm9wKSA9PiB7XG4gICAgICAgICByZXF1ZXN0T3B0aW9uc1twcm9wXSA9IHRoaXMuX19kZWZhdWx0c1twcm9wXTtcbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXMod2l0aE9wdGlvbnMpLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgIHJlcXVlc3RPcHRpb25zW3Byb3BdID0gd2l0aE9wdGlvbnNbcHJvcF07XG4gICAgICB9KTtcblxuICAgICAgbG9nKGBzZWFyY2hpbmcgJHtwYXRofSB3aXRoIG9wdGlvbnM6YCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyhgL3NlYXJjaC8ke3BhdGh9YCwgcmVxdWVzdE9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTZWFyY2ggZm9yIHJlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jc2VhcmNoLXJlcG9zaXRvcmllc1xuICAgICogQHBhcmFtIHtTZWFyY2guUGFyYW1zfSBbb3B0aW9uc10gLSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZm9yIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaFxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBmb3JSZXBvc2l0b3JpZXMob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWFyY2goJ3JlcG9zaXRvcmllcycsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTZWFyY2ggZm9yIGNvZGVcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3NlYXJjaC1jb2RlXG4gICAgKiBAcGFyYW0ge1NlYXJjaC5QYXJhbXN9IFtvcHRpb25zXSAtIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0cyBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvckNvZGUob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZWFyY2goJ2NvZGUnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2VhcmNoIGZvciBpc3N1ZXNcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9zZWFyY2gvI3NlYXJjaC1pc3N1ZXNcbiAgICAqIEBwYXJhbSB7U2VhcmNoLlBhcmFtc30gW29wdGlvbnNdIC0gYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZvciB0aGUgc2VhcmNoXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2hcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9ySXNzdWVzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoKCdpc3N1ZXMnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogU2VhcmNoIGZvciB1c2Vyc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3NlYXJjaC8jc2VhcmNoLXVzZXJzXG4gICAgKiBAcGFyYW0ge1NlYXJjaC5QYXJhbXN9IFtvcHRpb25zXSAtIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmb3IgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgcmVzdWx0cyBvZiB0aGUgc2VhcmNoXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGZvclVzZXJzKG9wdGlvbnMsIGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2VhcmNoKCd1c2VycycsIG9wdGlvbnMsIGNiKTtcbiAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTZWFyY2g7XG4iXX0=
//# sourceMappingURL=Search.js.map


/***/ }),

/***/ 1728:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __nccwpck_require__(583);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2016 Matt Smith (Development Seed)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:team');

/**
 * A Team allows scoping of API requests to a particular Github Organization Team.
 */

var Team = function (_Requestable) {
  _inherits(Team, _Requestable);

  /**
   * Create a Team.
   * @param {string} [teamId] - the id for the team
   * @param {Requestable.auth} [auth] - information required to authenticate to Github
   * @param {string} [apiBase=https://api.github.com] - the base Github API URL
   */
  function Team(teamId, auth, apiBase) {
    _classCallCheck(this, Team);

    var _this = _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).call(this, auth, apiBase));

    _this.__teamId = teamId;
    return _this;
  }

  /**
   * Get Team information
   * @see https://developer.github.com/v3/orgs/teams/#get-team
   * @param {Requestable.callback} [cb] - will receive the team
   * @return {Promise} - the promise for the http request
   */


  _createClass(Team, [{
    key: 'getTeam',
    value: function getTeam(cb) {
      log('Fetching Team ' + this.__teamId);
      return this._request('Get', '/teams/' + this.__teamId, undefined, cb);
    }

    /**
     * List the Team's repositories
     * @see https://developer.github.com/v3/orgs/teams/#list-team-repos
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listRepos',
    value: function listRepos(cb) {
      log('Fetching repositories for Team ' + this.__teamId);
      return this._requestAllPages('/teams/' + this.__teamId + '/repos', undefined, cb);
    }

    /**
     * Edit Team information
     * @see https://developer.github.com/v3/orgs/teams/#edit-team
     * @param {object} options - Parameters for team edit
     * @param {string} options.name - The name of the team
     * @param {string} [options.description] - Team description
     * @param {string} [options.repo_names] - Repos to add the team to
     * @param {string} [options.privacy=secret] - The level of privacy the team should have. Can be either one
     * of: `secret`, or `closed`
     * @param {Requestable.callback} [cb] - will receive the updated team
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'editTeam',
    value: function editTeam(options, cb) {
      log('Editing Team ' + this.__teamId);
      return this._request('PATCH', '/teams/' + this.__teamId, options, cb);
    }

    /**
     * List the users who are members of the Team
     * @see https://developer.github.com/v3/orgs/teams/#list-team-members
     * @param {object} options - Parameters for listing team users
     * @param {string} [options.role=all] - can be one of: `all`, `maintainer`, or `member`
     * @param {Requestable.callback} [cb] - will receive the list of users
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'listMembers',
    value: function listMembers(options, cb) {
      log('Getting members of Team ' + this.__teamId);
      return this._requestAllPages('/teams/' + this.__teamId + '/members', options, cb);
    }

    /**
     * Get Team membership status for a user
     * @see https://developer.github.com/v3/orgs/teams/#get-team-membership
     * @param {string} username - can be one of: `all`, `maintainer`, or `member`
     * @param {Requestable.callback} [cb] - will receive the membership status of a user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'getMembership',
    value: function getMembership(username, cb) {
      log('Getting membership of user ' + username + ' in Team ' + this.__teamId);
      return this._request('GET', '/teams/' + this.__teamId + '/memberships/' + username, undefined, cb);
    }

    /**
     * Add a member to the Team
     * @see https://developer.github.com/v3/orgs/teams/#add-team-membership
     * @param {string} username - can be one of: `all`, `maintainer`, or `member`
     * @param {object} options - Parameters for adding a team member
     * @param {string} [options.role=member] - The role that this user should have in the team. Can be one
     * of: `member`, or `maintainer`
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'addMembership',
    value: function addMembership(username, options, cb) {
      log('Adding user ' + username + ' to Team ' + this.__teamId);
      return this._request('PUT', '/teams/' + this.__teamId + '/memberships/' + username, options, cb);
    }

    /**
     * Get repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#remove-team-membership
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'isManagedRepo',
    value: function isManagedRepo(owner, repo, cb) {
      log('Getting repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb);
    }

    /**
     * Add or Update repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#add-or-update-team-repository
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {object} options - Parameters for adding or updating repo management for the team
     * @param {string} [options.permission] - The permission to grant the team on this repository. Can be one
     * of: `pull`, `push`, or `admin`
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'manageRepo',
    value: function manageRepo(owner, repo, options, cb) {
      log('Adding or Updating repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, options, cb, 'PUT');
    }

    /**
     * Remove repo management status for team
     * @see https://developer.github.com/v3/orgs/teams/#remove-team-repository
     * @param {string} owner - Organization name
     * @param {string} repo - Repo name
     * @param {Requestable.callback} [cb] - will receive the membership status of added user
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'unmanageRepo',
    value: function unmanageRepo(owner, repo, cb) {
      log('Remove repo management by Team ' + this.__teamId + ' for repo ' + owner + '/' + repo);
      return this._request204or404('/teams/' + this.__teamId + '/repos/' + owner + '/' + repo, undefined, cb, 'DELETE');
    }

    /**
     * Delete Team
     * @see https://developer.github.com/v3/orgs/teams/#delete-team
     * @param {Requestable.callback} [cb] - will receive the list of repositories
     * @return {Promise} - the promise for the http request
     */

  }, {
    key: 'deleteTeam',
    value: function deleteTeam(cb) {
      log('Deleting Team ' + this.__teamId);
      return this._request204or404('/teams/' + this.__teamId, undefined, cb, 'DELETE');
    }
  }]);

  return Team;
}(_Requestable3.default);

module.exports = Team;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRlYW0uanMiXSwibmFtZXMiOlsibG9nIiwiVGVhbSIsInRlYW1JZCIsImF1dGgiLCJhcGlCYXNlIiwiX190ZWFtSWQiLCJjYiIsIl9yZXF1ZXN0IiwidW5kZWZpbmVkIiwiX3JlcXVlc3RBbGxQYWdlcyIsIm9wdGlvbnMiLCJ1c2VybmFtZSIsIm93bmVyIiwicmVwbyIsIl9yZXF1ZXN0MjA0b3I0MDQiLCJSZXF1ZXN0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVJBOzs7Ozs7O0FBU0EsSUFBTUEsTUFBTSxxQkFBTSxhQUFOLENBQVo7O0FBRUE7Ozs7SUFHTUMsSTs7O0FBQ0g7Ozs7OztBQU1BLGdCQUFZQyxNQUFaLEVBQW9CQyxJQUFwQixFQUEwQkMsT0FBMUIsRUFBbUM7QUFBQTs7QUFBQSw0R0FDMUJELElBRDBCLEVBQ3BCQyxPQURvQjs7QUFFaEMsVUFBS0MsUUFBTCxHQUFnQkgsTUFBaEI7QUFGZ0M7QUFHbEM7O0FBRUQ7Ozs7Ozs7Ozs7NEJBTVFJLEUsRUFBSTtBQUNUTiw2QkFBcUIsS0FBS0ssUUFBMUI7QUFDQSxhQUFPLEtBQUtFLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLFFBQXBDLEVBQWdERyxTQUFoRCxFQUEyREYsRUFBM0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OEJBTVVBLEUsRUFBSTtBQUNYTiw4Q0FBc0MsS0FBS0ssUUFBM0M7QUFDQSxhQUFPLEtBQUtJLGdCQUFMLGFBQWdDLEtBQUtKLFFBQXJDLGFBQXVERyxTQUF2RCxFQUFrRUYsRUFBbEUsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7NkJBWVNJLE8sRUFBU0osRSxFQUFJO0FBQ25CTiw0QkFBb0IsS0FBS0ssUUFBekI7QUFDQSxhQUFPLEtBQUtFLFFBQUwsQ0FBYyxPQUFkLGNBQWlDLEtBQUtGLFFBQXRDLEVBQWtESyxPQUFsRCxFQUEyREosRUFBM0QsQ0FBUDtBQUNGOztBQUVEOzs7Ozs7Ozs7OztnQ0FRWUksTyxFQUFTSixFLEVBQUk7QUFDdEJOLHVDQUErQixLQUFLSyxRQUFwQztBQUNBLGFBQU8sS0FBS0ksZ0JBQUwsYUFBZ0MsS0FBS0osUUFBckMsZUFBeURLLE9BQXpELEVBQWtFSixFQUFsRSxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7a0NBT2NLLFEsRUFBVUwsRSxFQUFJO0FBQ3pCTiwwQ0FBa0NXLFFBQWxDLGlCQUFzRCxLQUFLTixRQUEzRDtBQUNBLGFBQU8sS0FBS0UsUUFBTCxDQUFjLEtBQWQsY0FBK0IsS0FBS0YsUUFBcEMscUJBQTRETSxRQUE1RCxFQUF3RUgsU0FBeEUsRUFBbUZGLEVBQW5GLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7OztrQ0FVY0ssUSxFQUFVRCxPLEVBQVNKLEUsRUFBSTtBQUNsQ04sMkJBQW1CVyxRQUFuQixpQkFBdUMsS0FBS04sUUFBNUM7QUFDQSxhQUFPLEtBQUtFLFFBQUwsQ0FBYyxLQUFkLGNBQStCLEtBQUtGLFFBQXBDLHFCQUE0RE0sUUFBNUQsRUFBd0VELE9BQXhFLEVBQWlGSixFQUFqRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7O2tDQVFjTSxLLEVBQU9DLEksRUFBTVAsRSxFQUFJO0FBQzVCTiwrQ0FBdUMsS0FBS0ssUUFBNUMsa0JBQWlFTyxLQUFqRSxTQUEwRUMsSUFBMUU7QUFDQSxhQUFPLEtBQUtDLGdCQUFMLGFBQWdDLEtBQUtULFFBQXJDLGVBQXVETyxLQUF2RCxTQUFnRUMsSUFBaEUsRUFBd0VMLFNBQXhFLEVBQW1GRixFQUFuRixDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7OytCQVdXTSxLLEVBQU9DLEksRUFBTUgsTyxFQUFTSixFLEVBQUk7QUFDbENOLDBEQUFrRCxLQUFLSyxRQUF2RCxrQkFBNEVPLEtBQTVFLFNBQXFGQyxJQUFyRjtBQUNBLGFBQU8sS0FBS0MsZ0JBQUwsYUFBZ0MsS0FBS1QsUUFBckMsZUFBdURPLEtBQXZELFNBQWdFQyxJQUFoRSxFQUF3RUgsT0FBeEUsRUFBaUZKLEVBQWpGLEVBQXFGLEtBQXJGLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7Ozs7aUNBUWFNLEssRUFBT0MsSSxFQUFNUCxFLEVBQUk7QUFDM0JOLDhDQUFzQyxLQUFLSyxRQUEzQyxrQkFBZ0VPLEtBQWhFLFNBQXlFQyxJQUF6RTtBQUNBLGFBQU8sS0FBS0MsZ0JBQUwsYUFBZ0MsS0FBS1QsUUFBckMsZUFBdURPLEtBQXZELFNBQWdFQyxJQUFoRSxFQUF3RUwsU0FBeEUsRUFBbUZGLEVBQW5GLEVBQXVGLFFBQXZGLENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OytCQU1XQSxFLEVBQUk7QUFDWk4sNkJBQXFCLEtBQUtLLFFBQTFCO0FBQ0EsYUFBTyxLQUFLUyxnQkFBTCxhQUFnQyxLQUFLVCxRQUFyQyxFQUFpREcsU0FBakQsRUFBNERGLEVBQTVELEVBQWdFLFFBQWhFLENBQVA7QUFDRjs7OztFQTlJZVMscUI7O0FBaUpuQkMsT0FBT0MsT0FBUCxHQUFpQmhCLElBQWpCIiwiZmlsZSI6IlRlYW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBAY29weXJpZ2h0ICAyMDE2IE1hdHQgU21pdGggKERldmVsb3BtZW50IFNlZWQpXG4gKiBAbGljZW5zZSAgICBMaWNlbnNlZCB1bmRlciB7QGxpbmsgaHR0cHM6Ly9zcGR4Lm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2UtQ2xlYXIuaHRtbCBCU0QtMy1DbGF1c2UtQ2xlYXJ9LlxuICogICAgICAgICAgICAgR2l0aHViLmpzIGlzIGZyZWVseSBkaXN0cmlidXRhYmxlLlxuICovXG5cbmltcG9ydCBSZXF1ZXN0YWJsZSBmcm9tICcuL1JlcXVlc3RhYmxlJztcbmltcG9ydCBkZWJ1ZyBmcm9tICdkZWJ1Zyc7XG5jb25zdCBsb2cgPSBkZWJ1ZygnZ2l0aHViOnRlYW0nKTtcblxuLyoqXG4gKiBBIFRlYW0gYWxsb3dzIHNjb3Bpbmcgb2YgQVBJIHJlcXVlc3RzIHRvIGEgcGFydGljdWxhciBHaXRodWIgT3JnYW5pemF0aW9uIFRlYW0uXG4gKi9cbmNsYXNzIFRlYW0gZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFRlYW0uXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3RlYW1JZF0gLSB0aGUgaWQgZm9yIHRoZSB0ZWFtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmF1dGh9IFthdXRoXSAtIGluZm9ybWF0aW9uIHJlcXVpcmVkIHRvIGF1dGhlbnRpY2F0ZSB0byBHaXRodWJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBpQmFzZT1odHRwczovL2FwaS5naXRodWIuY29tXSAtIHRoZSBiYXNlIEdpdGh1YiBBUEkgVVJMXG4gICAgKi9cbiAgIGNvbnN0cnVjdG9yKHRlYW1JZCwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fdGVhbUlkID0gdGVhbUlkO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBUZWFtIGluZm9ybWF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jZ2V0LXRlYW1cbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIHRlYW1cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0VGVhbShjYikge1xuICAgICAgbG9nKGBGZXRjaGluZyBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHZXQnLCBgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH1gLCB1bmRlZmluZWQsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBUZWFtJ3MgcmVwb3NpdG9yaWVzXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jbGlzdC10ZWFtLXJlcG9zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0UmVwb3MoY2IpIHtcbiAgICAgIGxvZyhgRmV0Y2hpbmcgcmVwb3NpdG9yaWVzIGZvciBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0QWxsUGFnZXMoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L3JlcG9zYCwgdW5kZWZpbmVkLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogRWRpdCBUZWFtIGluZm9ybWF0aW9uXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jZWRpdC10ZWFtXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFBhcmFtZXRlcnMgZm9yIHRlYW0gZWRpdFxuICAgICogQHBhcmFtIHtzdHJpbmd9IG9wdGlvbnMubmFtZSAtIFRoZSBuYW1lIG9mIHRoZSB0ZWFtXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMuZGVzY3JpcHRpb25dIC0gVGVhbSBkZXNjcmlwdGlvblxuICAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJlcG9fbmFtZXNdIC0gUmVwb3MgdG8gYWRkIHRoZSB0ZWFtIHRvXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucHJpdmFjeT1zZWNyZXRdIC0gVGhlIGxldmVsIG9mIHByaXZhY3kgdGhlIHRlYW0gc2hvdWxkIGhhdmUuIENhbiBiZSBlaXRoZXIgb25lXG4gICAgKiBvZjogYHNlY3JldGAsIG9yIGBjbG9zZWRgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSB1cGRhdGVkIHRlYW1cbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZWRpdFRlYW0ob3B0aW9ucywgY2IpIHtcbiAgICAgIGxvZyhgRWRpdGluZyBUZWFtICR7dGhpcy5fX3RlYW1JZH1gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQQVRDSCcsIGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSB1c2VycyB3aG8gYXJlIG1lbWJlcnMgb2YgdGhlIFRlYW1cbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNsaXN0LXRlYW0tbWVtYmVyc1xuICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBQYXJhbWV0ZXJzIGZvciBsaXN0aW5nIHRlYW0gdXNlcnNcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5yb2xlPWFsbF0gLSBjYW4gYmUgb25lIG9mOiBgYWxsYCwgYG1haW50YWluZXJgLCBvciBgbWVtYmVyYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiB1c2Vyc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0TWVtYmVycyhvcHRpb25zLCBjYikge1xuICAgICAgbG9nKGBHZXR0aW5nIG1lbWJlcnMgb2YgVGVhbSAke3RoaXMuX190ZWFtSWR9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9tZW1iZXJzYCwgb3B0aW9ucywgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCBUZWFtIG1lbWJlcnNoaXAgc3RhdHVzIGZvciBhIHVzZXJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My9vcmdzL3RlYW1zLyNnZXQtdGVhbS1tZW1iZXJzaGlwXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXNlcm5hbWUgLSBjYW4gYmUgb25lIG9mOiBgYWxsYCwgYG1haW50YWluZXJgLCBvciBgbWVtYmVyYFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVtYmVyc2hpcCBzdGF0dXMgb2YgYSB1c2VyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldE1lbWJlcnNoaXAodXNlcm5hbWUsIGNiKSB7XG4gICAgICBsb2coYEdldHRpbmcgbWVtYmVyc2hpcCBvZiB1c2VyICR7dXNlcm5hbWV9IGluIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9tZW1iZXJzaGlwcy8ke3VzZXJuYW1lfWAsIHVuZGVmaW5lZCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBhIG1lbWJlciB0byB0aGUgVGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2FkZC10ZWFtLW1lbWJlcnNoaXBcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIGNhbiBiZSBvbmUgb2Y6IGBhbGxgLCBgbWFpbnRhaW5lcmAsIG9yIGBtZW1iZXJgXG4gICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIFBhcmFtZXRlcnMgZm9yIGFkZGluZyBhIHRlYW0gbWVtYmVyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucm9sZT1tZW1iZXJdIC0gVGhlIHJvbGUgdGhhdCB0aGlzIHVzZXIgc2hvdWxkIGhhdmUgaW4gdGhlIHRlYW0uIENhbiBiZSBvbmVcbiAgICAqIG9mOiBgbWVtYmVyYCwgb3IgYG1haW50YWluZXJgXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtZW1iZXJzaGlwIHN0YXR1cyBvZiBhZGRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGFkZE1lbWJlcnNoaXAodXNlcm5hbWUsIG9wdGlvbnMsIGNiKSB7XG4gICAgICBsb2coYEFkZGluZyB1c2VyICR7dXNlcm5hbWV9IHRvIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvdGVhbXMvJHt0aGlzLl9fdGVhbUlkfS9tZW1iZXJzaGlwcy8ke3VzZXJuYW1lfWAsIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBHZXQgcmVwbyBtYW5hZ2VtZW50IHN0YXR1cyBmb3IgdGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI3JlbW92ZS10ZWFtLW1lbWJlcnNoaXBcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBvd25lciAtIE9yZ2FuaXphdGlvbiBuYW1lXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gcmVwbyAtIFJlcG8gbmFtZVxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbWVtYmVyc2hpcCBzdGF0dXMgb2YgYWRkZWQgdXNlclxuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBpc01hbmFnZWRSZXBvKG93bmVyLCByZXBvLCBjYikge1xuICAgICAgbG9nKGBHZXR0aW5nIHJlcG8gbWFuYWdlbWVudCBieSBUZWFtICR7dGhpcy5fX3RlYW1JZH0gZm9yIHJlcG8gJHtvd25lcn0vJHtyZXBvfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsIHVuZGVmaW5lZCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEFkZCBvciBVcGRhdGUgcmVwbyBtYW5hZ2VtZW50IHN0YXR1cyBmb3IgdGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2FkZC1vci11cGRhdGUtdGVhbS1yZXBvc2l0b3J5XG4gICAgKiBAcGFyYW0ge3N0cmluZ30gb3duZXIgLSBPcmdhbml6YXRpb24gbmFtZVxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcG8gLSBSZXBvIG5hbWVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gUGFyYW1ldGVycyBmb3IgYWRkaW5nIG9yIHVwZGF0aW5nIHJlcG8gbWFuYWdlbWVudCBmb3IgdGhlIHRlYW1cbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5wZXJtaXNzaW9uXSAtIFRoZSBwZXJtaXNzaW9uIHRvIGdyYW50IHRoZSB0ZWFtIG9uIHRoaXMgcmVwb3NpdG9yeS4gQ2FuIGJlIG9uZVxuICAgICogb2Y6IGBwdWxsYCwgYHB1c2hgLCBvciBgYWRtaW5gXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtZW1iZXJzaGlwIHN0YXR1cyBvZiBhZGRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIG1hbmFnZVJlcG8ob3duZXIsIHJlcG8sIG9wdGlvbnMsIGNiKSB7XG4gICAgICBsb2coYEFkZGluZyBvciBVcGRhdGluZyByZXBvIG1hbmFnZW1lbnQgYnkgVGVhbSAke3RoaXMuX190ZWFtSWR9IGZvciByZXBvICR7b3duZXJ9LyR7cmVwb31gKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0MjA0b3I0MDQoYC90ZWFtcy8ke3RoaXMuX190ZWFtSWR9L3JlcG9zLyR7b3duZXJ9LyR7cmVwb31gLCBvcHRpb25zLCBjYiwgJ1BVVCcpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIFJlbW92ZSByZXBvIG1hbmFnZW1lbnQgc3RhdHVzIGZvciB0ZWFtXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvb3Jncy90ZWFtcy8jcmVtb3ZlLXRlYW0tcmVwb3NpdG9yeVxuICAgICogQHBhcmFtIHtzdHJpbmd9IG93bmVyIC0gT3JnYW5pemF0aW9uIG5hbWVcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXBvIC0gUmVwbyBuYW1lXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBtZW1iZXJzaGlwIHN0YXR1cyBvZiBhZGRlZCB1c2VyXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIHVubWFuYWdlUmVwbyhvd25lciwgcmVwbywgY2IpIHtcbiAgICAgIGxvZyhgUmVtb3ZlIHJlcG8gbWFuYWdlbWVudCBieSBUZWFtICR7dGhpcy5fX3RlYW1JZH0gZm9yIHJlcG8gJHtvd25lcn0vJHtyZXBvfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH0vcmVwb3MvJHtvd25lcn0vJHtyZXBvfWAsIHVuZGVmaW5lZCwgY2IsICdERUxFVEUnKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBEZWxldGUgVGVhbVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvdGVhbXMvI2RlbGV0ZS10ZWFtXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHJlcG9zaXRvcmllc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBkZWxldGVUZWFtKGNiKSB7XG4gICAgICBsb2coYERlbGV0aW5nIFRlYW0gJHt0aGlzLl9fdGVhbUlkfWApO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QyMDRvcjQwNChgL3RlYW1zLyR7dGhpcy5fX3RlYW1JZH1gLCB1bmRlZmluZWQsIGNiLCAnREVMRVRFJyk7XG4gICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gVGVhbTtcbiJdfQ==
//# sourceMappingURL=Team.js.map


/***/ }),

/***/ 4293:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Requestable2 = __nccwpck_require__(2374);

var _Requestable3 = _interopRequireDefault(_Requestable2);

var _debug = __nccwpck_require__(583);

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @file
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @copyright  2013 Michael Aufreiter (Development Seed) and 2016 Yahoo Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license    Licensed under {@link https://spdx.org/licenses/BSD-3-Clause-Clear.html BSD-3-Clause-Clear}.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *             Github.js is freely distributable.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var log = (0, _debug2.default)('github:user');

/**
 * A User allows scoping of API requests to a particular Github user.
 */

var User = function (_Requestable) {
   _inherits(User, _Requestable);

   /**
    * Create a User.
    * @param {string} [username] - the user to use for user-scoped queries
    * @param {Requestable.auth} [auth] - information required to authenticate to Github
    * @param {string} [apiBase=https://api.github.com] - the base Github API URL
    */
   function User(username, auth, apiBase) {
      _classCallCheck(this, User);

      var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, auth, apiBase));

      _this.__user = username;
      return _this;
   }

   /**
    * Get the url for the request. (dependent on if we're requesting for the authenticated user or not)
    * @private
    * @param {string} endpoint - the endpoint being requested
    * @return {string} - the resolved endpoint
    */


   _createClass(User, [{
      key: '__getScopedUrl',
      value: function __getScopedUrl(endpoint) {
         if (this.__user) {
            return endpoint ? '/users/' + this.__user + '/' + endpoint : '/users/' + this.__user;
         } else {
            // eslint-disable-line
            switch (endpoint) {
               case '':
                  return '/user';

               case 'notifications':
               case 'gists':
                  return '/' + endpoint;

               default:
                  return '/user/' + endpoint;
            }
         }
      }

      /**
       * List the user's repositories
       * @see https://developer.github.com/v3/repos/#list-user-repositories
       * @param {Object} [options={}] - any options to refine the search
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listRepos',
      value: function listRepos(options, cb) {
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }

         options = this._getOptionsWithDefaults(options);

         log('Fetching repositories with options: ' + JSON.stringify(options));
         return this._requestAllPages(this.__getScopedUrl('repos'), options, cb);
      }

      /**
       * List the orgs that the user belongs to
       * @see https://developer.github.com/v3/orgs/#list-user-organizations
       * @param {Requestable.callback} [cb] - will receive the list of organizations
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listOrgs',
      value: function listOrgs(cb) {
         return this._request('GET', this.__getScopedUrl('orgs'), null, cb);
      }

      /**
       * List followers of a user
       * @see https://developer.github.com/v3/users/followers/#list-followers-of-a-user
       * @param {Requestable.callback} [cb] - will receive the list of followers
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listFollowers',
      value: function listFollowers(cb) {
         return this._request('GET', this.__getScopedUrl('followers'), null, cb);
      }

      /**
       * List users followed by another user
       * @see https://developer.github.com/v3/users/followers/#list-users-followed-by-another-user
       * @param {Requestable.callback} [cb] - will receive the list of who a user is following
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listFollowing',
      value: function listFollowing(cb) {
         return this._request('GET', this.__getScopedUrl('following'), null, cb);
      }

      /**
       * List the user's gists
       * @see https://developer.github.com/v3/gists/#list-a-users-gists
       * @param {Requestable.callback} [cb] - will receive the list of gists
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listGists',
      value: function listGists(cb) {
         return this._request('GET', this.__getScopedUrl('gists'), null, cb);
      }

      /**
       * List the user's notifications
       * @see https://developer.github.com/v3/activity/notifications/#list-your-notifications
       * @param {Object} [options={}] - any options to refine the search
       * @param {Requestable.callback} [cb] - will receive the list of repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listNotifications',
      value: function listNotifications(options, cb) {
         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }

         options.since = this._dateToISO(options.since);
         options.before = this._dateToISO(options.before);

         return this._request('GET', this.__getScopedUrl('notifications'), options, cb);
      }

      /**
       * Show the user's profile
       * @see https://developer.github.com/v3/users/#get-a-single-user
       * @param {Requestable.callback} [cb] - will receive the user's information
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getProfile',
      value: function getProfile(cb) {
         return this._request('GET', this.__getScopedUrl(''), null, cb);
      }

      /**
       * Gets the list of starred repositories for the user
       * @see https://developer.github.com/v3/activity/starring/#list-repositories-being-starred
       * @param {Requestable.callback} [cb] - will receive the list of starred repositories
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listStarredRepos',
      value: function listStarredRepos(cb) {
         var requestOptions = this._getOptionsWithDefaults();
         return this._requestAllPages(this.__getScopedUrl('starred'), requestOptions, cb);
      }

      /**
       * Gets the list of starred gists for the user
       * @see https://developer.github.com/v3/gists/#list-starred-gists
       * @param {Object} [options={}] - any options to refine the search
       * @param {Requestable.callback} [cb] - will receive the list of gists
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'listStarredGists',
      value: function listStarredGists(options, cb) {
         options = options || {};
         if (typeof options === 'function') {
            cb = options;
            options = {};
         }
         options.since = this._dateToISO(options.since);
         return this._request('GET', '/gists/starred', options, cb);
      }

      /**
       * List email addresses for a user
       * @see https://developer.github.com/v3/users/emails/#list-email-addresses-for-a-user
       * @param {Requestable.callback} [cb] - will receive the list of emails
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'getEmails',
      value: function getEmails(cb) {
         return this._request('GET', '/user/emails', null, cb);
      }

      /**
       * Have the authenticated user follow this user
       * @see https://developer.github.com/v3/users/followers/#follow-a-user
       * @param {string} username - the user to follow
       * @param {Requestable.callback} [cb] - will receive true if the request succeeds
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'follow',
      value: function follow(username, cb) {
         return this._request('PUT', '/user/following/' + username, null, cb);
      }

      /**
       * Have the currently authenticated user unfollow this user
       * @see https://developer.github.com/v3/users/followers/#follow-a-user
       * @param {string} username - the user to unfollow
       * @param {Requestable.callback} [cb] - receives true if the request succeeds
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'unfollow',
      value: function unfollow(username, cb) {
         return this._request('DELETE', '/user/following/' + username, null, cb);
      }

      /**
       * Create a new repository for the currently authenticated user
       * @see https://developer.github.com/v3/repos/#create
       * @param {object} options - the repository definition
       * @param {Requestable.callback} [cb] - will receive the API response
       * @return {Promise} - the promise for the http request
       */

   }, {
      key: 'createRepo',
      value: function createRepo(options, cb) {
         return this._request('POST', '/user/repos', options, cb);
      }
   }]);

   return User;
}(_Requestable3.default);

module.exports = User;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlVzZXIuanMiXSwibmFtZXMiOlsibG9nIiwiVXNlciIsInVzZXJuYW1lIiwiYXV0aCIsImFwaUJhc2UiLCJfX3VzZXIiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJjYiIsIl9nZXRPcHRpb25zV2l0aERlZmF1bHRzIiwiSlNPTiIsInN0cmluZ2lmeSIsIl9yZXF1ZXN0QWxsUGFnZXMiLCJfX2dldFNjb3BlZFVybCIsIl9yZXF1ZXN0Iiwic2luY2UiLCJfZGF0ZVRvSVNPIiwiYmVmb3JlIiwicmVxdWVzdE9wdGlvbnMiLCJSZXF1ZXN0YWJsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7QUFPQTs7OztBQUNBOzs7Ozs7Ozs7OytlQVJBOzs7Ozs7O0FBU0EsSUFBTUEsTUFBTSxxQkFBTSxhQUFOLENBQVo7O0FBRUE7Ozs7SUFHTUMsSTs7O0FBQ0g7Ozs7OztBQU1BLGlCQUFZQyxRQUFaLEVBQXNCQyxJQUF0QixFQUE0QkMsT0FBNUIsRUFBcUM7QUFBQTs7QUFBQSw4R0FDNUJELElBRDRCLEVBQ3RCQyxPQURzQjs7QUFFbEMsWUFBS0MsTUFBTCxHQUFjSCxRQUFkO0FBRmtDO0FBR3BDOztBQUVEOzs7Ozs7Ozs7O3FDQU1lSSxRLEVBQVU7QUFDdEIsYUFBSSxLQUFLRCxNQUFULEVBQWlCO0FBQ2QsbUJBQU9DLHVCQUNNLEtBQUtELE1BRFgsU0FDcUJDLFFBRHJCLGVBRU0sS0FBS0QsTUFGbEI7QUFLRixVQU5ELE1BTU87QUFBRTtBQUNOLG9CQUFRQyxRQUFSO0FBQ0csb0JBQUssRUFBTDtBQUNHLHlCQUFPLE9BQVA7O0FBRUgsb0JBQUssZUFBTDtBQUNBLG9CQUFLLE9BQUw7QUFDRywrQkFBV0EsUUFBWDs7QUFFSDtBQUNHLG9DQUFnQkEsUUFBaEI7QUFUTjtBQVdGO0FBQ0g7O0FBRUQ7Ozs7Ozs7Ozs7Z0NBT1VDLE8sRUFBU0MsRSxFQUFJO0FBQ3BCLGFBQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNoQ0MsaUJBQUtELE9B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QVVNLEUsRUFBSTtBQUNsQixnQkFBTyxLQUFLTSxRQUFMLENBQWMsS0FBZCx1QkFBd0NaLFFBQXhDLEVBQW9ELElBQXBELEVBQTBETSxFQUExRCxDQUFQO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7K0JBT1NOLFEsRUFBVU0sRSxFQUFJO0FBQ3BCLGdCQUFPLEtBQUtNLFFBQUwsQ0FBYyxRQUFkLHVCQUEyQ1osUUFBM0MsRUFBdUQsSUFBdkQsRUFBNkRNLEVBQTdELENBQVA7QUFDRjs7QUFFRDs7Ozs7Ozs7OztpQ0FPV0QsTyxFQUFTQyxFLEVBQUk7QUFDckIsZ0JBQU8sS0FBS00sUUFBTCxDQUFjLE1BQWQsRUFBc0IsYUFBdEIsRUFBcUNQLE9BQXJDLEVBQThDQyxFQUE5QyxDQUFQO0FBQ0Y7Ozs7RUF0TWVXLHFCOztBQXlNbkJDLE9BQU9DLE9BQVAsR0FBaUJwQixJQUFqQiIsImZpbGUiOiJVc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAZmlsZVxuICogQGNvcHlyaWdodCAgMjAxMyBNaWNoYWVsIEF1ZnJlaXRlciAoRGV2ZWxvcG1lbnQgU2VlZCkgYW5kIDIwMTYgWWFob28gSW5jLlxuICogQGxpY2Vuc2UgICAgTGljZW5zZWQgdW5kZXIge0BsaW5rIGh0dHBzOi8vc3BkeC5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlLUNsZWFyLmh0bWwgQlNELTMtQ2xhdXNlLUNsZWFyfS5cbiAqICAgICAgICAgICAgIEdpdGh1Yi5qcyBpcyBmcmVlbHkgZGlzdHJpYnV0YWJsZS5cbiAqL1xuXG5pbXBvcnQgUmVxdWVzdGFibGUgZnJvbSAnLi9SZXF1ZXN0YWJsZSc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuY29uc3QgbG9nID0gZGVidWcoJ2dpdGh1Yjp1c2VyJyk7XG5cbi8qKlxuICogQSBVc2VyIGFsbG93cyBzY29waW5nIG9mIEFQSSByZXF1ZXN0cyB0byBhIHBhcnRpY3VsYXIgR2l0aHViIHVzZXIuXG4gKi9cbmNsYXNzIFVzZXIgZXh0ZW5kcyBSZXF1ZXN0YWJsZSB7XG4gICAvKipcbiAgICAqIENyZWF0ZSBhIFVzZXIuXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW3VzZXJuYW1lXSAtIHRoZSB1c2VyIHRvIHVzZSBmb3IgdXNlci1zY29wZWQgcXVlcmllc1xuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5hdXRofSBbYXV0aF0gLSBpbmZvcm1hdGlvbiByZXF1aXJlZCB0byBhdXRoZW50aWNhdGUgdG8gR2l0aHViXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwaUJhc2U9aHR0cHM6Ly9hcGkuZ2l0aHViLmNvbV0gLSB0aGUgYmFzZSBHaXRodWIgQVBJIFVSTFxuICAgICovXG4gICBjb25zdHJ1Y3Rvcih1c2VybmFtZSwgYXV0aCwgYXBpQmFzZSkge1xuICAgICAgc3VwZXIoYXV0aCwgYXBpQmFzZSk7XG4gICAgICB0aGlzLl9fdXNlciA9IHVzZXJuYW1lO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldCB0aGUgdXJsIGZvciB0aGUgcmVxdWVzdC4gKGRlcGVuZGVudCBvbiBpZiB3ZSdyZSByZXF1ZXN0aW5nIGZvciB0aGUgYXV0aGVudGljYXRlZCB1c2VyIG9yIG5vdClcbiAgICAqIEBwcml2YXRlXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gZW5kcG9pbnQgLSB0aGUgZW5kcG9pbnQgYmVpbmcgcmVxdWVzdGVkXG4gICAgKiBAcmV0dXJuIHtzdHJpbmd9IC0gdGhlIHJlc29sdmVkIGVuZHBvaW50XG4gICAgKi9cbiAgIF9fZ2V0U2NvcGVkVXJsKGVuZHBvaW50KSB7XG4gICAgICBpZiAodGhpcy5fX3VzZXIpIHtcbiAgICAgICAgIHJldHVybiBlbmRwb2ludCA/XG4gICAgICAgICAgICBgL3VzZXJzLyR7dGhpcy5fX3VzZXJ9LyR7ZW5kcG9pbnR9YCA6XG4gICAgICAgICAgICBgL3VzZXJzLyR7dGhpcy5fX3VzZXJ9YFxuICAgICAgICAgICAgO1xuXG4gICAgICB9IGVsc2UgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICBzd2l0Y2ggKGVuZHBvaW50KSB7XG4gICAgICAgICAgICBjYXNlICcnOlxuICAgICAgICAgICAgICAgcmV0dXJuICcvdXNlcic7XG5cbiAgICAgICAgICAgIGNhc2UgJ25vdGlmaWNhdGlvbnMnOlxuICAgICAgICAgICAgY2FzZSAnZ2lzdHMnOlxuICAgICAgICAgICAgICAgcmV0dXJuIGAvJHtlbmRwb2ludH1gO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgcmV0dXJuIGAvdXNlci8ke2VuZHBvaW50fWA7XG4gICAgICAgICB9XG4gICAgICB9XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB0aGUgdXNlcidzIHJlcG9zaXRvcmllc1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNsaXN0LXVzZXItcmVwb3NpdG9yaWVzXG4gICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIC0gYW55IG9wdGlvbnMgdG8gcmVmaW5lIHRoZSBzZWFyY2hcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgcmVwb3NpdG9yaWVzXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RSZXBvcyhvcHRpb25zLCBjYikge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMgPSB0aGlzLl9nZXRPcHRpb25zV2l0aERlZmF1bHRzKG9wdGlvbnMpO1xuXG4gICAgICBsb2coYEZldGNoaW5nIHJlcG9zaXRvcmllcyB3aXRoIG9wdGlvbnM6ICR7SlNPTi5zdHJpbmdpZnkob3B0aW9ucyl9YCk7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdEFsbFBhZ2VzKHRoaXMuX19nZXRTY29wZWRVcmwoJ3JlcG9zJyksIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IHRoZSBvcmdzIHRoYXQgdGhlIHVzZXIgYmVsb25ncyB0b1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL29yZ3MvI2xpc3QtdXNlci1vcmdhbml6YXRpb25zXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIG9yZ2FuaXphdGlvbnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE9yZ3MoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCdvcmdzJyksIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBMaXN0IGZvbGxvd2VycyBvZiBhIHVzZXJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My91c2Vycy9mb2xsb3dlcnMvI2xpc3QtZm9sbG93ZXJzLW9mLWEtdXNlclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBmb2xsb3dlcnNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEZvbGxvd2VycyhjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ0dFVCcsIHRoaXMuX19nZXRTY29wZWRVcmwoJ2ZvbGxvd2VycycpLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCB1c2VycyBmb2xsb3dlZCBieSBhbm90aGVyIHVzZXJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My91c2Vycy9mb2xsb3dlcnMvI2xpc3QtdXNlcnMtZm9sbG93ZWQtYnktYW5vdGhlci11c2VyXG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRoZSBsaXN0IG9mIHdobyBhIHVzZXIgaXMgZm9sbG93aW5nXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGxpc3RGb2xsb3dpbmcoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCdmb2xsb3dpbmcnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXIncyBnaXN0c1xuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNsaXN0LWEtdXNlcnMtZ2lzdHNcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2YgZ2lzdHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdEdpc3RzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgdGhpcy5fX2dldFNjb3BlZFVybCgnZ2lzdHMnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIExpc3QgdGhlIHVzZXIncyBub3RpZmljYXRpb25zXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvbm90aWZpY2F0aW9ucy8jbGlzdC15b3VyLW5vdGlmaWNhdGlvbnNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBhbnkgb3B0aW9ucyB0byByZWZpbmUgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdE5vdGlmaWNhdGlvbnMob3B0aW9ucywgY2IpIHtcbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICBjYiA9IG9wdGlvbnM7XG4gICAgICAgICBvcHRpb25zID0ge307XG4gICAgICB9XG5cbiAgICAgIG9wdGlvbnMuc2luY2UgPSB0aGlzLl9kYXRlVG9JU08ob3B0aW9ucy5zaW5jZSk7XG4gICAgICBvcHRpb25zLmJlZm9yZSA9IHRoaXMuX2RhdGVUb0lTTyhvcHRpb25zLmJlZm9yZSk7XG5cbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCdub3RpZmljYXRpb25zJyksIG9wdGlvbnMsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBTaG93IHRoZSB1c2VyJ3MgcHJvZmlsZVxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzLyNnZXQtYS1zaW5nbGUtdXNlclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgdXNlcidzIGluZm9ybWF0aW9uXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGdldFByb2ZpbGUoY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCB0aGlzLl9fZ2V0U2NvcGVkVXJsKCcnKSwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIEdldHMgdGhlIGxpc3Qgb2Ygc3RhcnJlZCByZXBvc2l0b3JpZXMgZm9yIHRoZSB1c2VyXG4gICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmdpdGh1Yi5jb20vdjMvYWN0aXZpdHkvc3RhcnJpbmcvI2xpc3QtcmVwb3NpdG9yaWVzLWJlaW5nLXN0YXJyZWRcbiAgICAqIEBwYXJhbSB7UmVxdWVzdGFibGUuY2FsbGJhY2t9IFtjYl0gLSB3aWxsIHJlY2VpdmUgdGhlIGxpc3Qgb2Ygc3RhcnJlZCByZXBvc2l0b3JpZXNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgbGlzdFN0YXJyZWRSZXBvcyhjYikge1xuICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0gdGhpcy5fZ2V0T3B0aW9uc1dpdGhEZWZhdWx0cygpO1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3RBbGxQYWdlcyh0aGlzLl9fZ2V0U2NvcGVkVXJsKCdzdGFycmVkJyksIHJlcXVlc3RPcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogR2V0cyB0aGUgbGlzdCBvZiBzdGFycmVkIGdpc3RzIGZvciB0aGUgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL2dpc3RzLyNsaXN0LXN0YXJyZWQtZ2lzdHNcbiAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucz17fV0gLSBhbnkgb3B0aW9ucyB0byByZWZpbmUgdGhlIHNlYXJjaFxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBnaXN0c1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICBsaXN0U3RhcnJlZEdpc3RzKG9wdGlvbnMsIGNiKSB7XG4gICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgfVxuICAgICAgb3B0aW9ucy5zaW5jZSA9IHRoaXMuX2RhdGVUb0lTTyhvcHRpb25zLnNpbmNlKTtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdHRVQnLCAnL2dpc3RzL3N0YXJyZWQnLCBvcHRpb25zLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogTGlzdCBlbWFpbCBhZGRyZXNzZXMgZm9yIGEgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzL2VtYWlscy8jbGlzdC1lbWFpbC1hZGRyZXNzZXMtZm9yLWEtdXNlclxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgbGlzdCBvZiBlbWFpbHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZ2V0RW1haWxzKGNiKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdCgnR0VUJywgJy91c2VyL2VtYWlscycsIG51bGwsIGNiKTtcbiAgIH1cblxuICAgLyoqXG4gICAgKiBIYXZlIHRoZSBhdXRoZW50aWNhdGVkIHVzZXIgZm9sbG93IHRoaXMgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3VzZXJzL2ZvbGxvd2Vycy8jZm9sbG93LWEtdXNlclxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJuYW1lIC0gdGhlIHVzZXIgdG8gZm9sbG93XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gd2lsbCByZWNlaXZlIHRydWUgaWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHNcbiAgICAqIEByZXR1cm4ge1Byb21pc2V9IC0gdGhlIHByb21pc2UgZm9yIHRoZSBodHRwIHJlcXVlc3RcbiAgICAqL1xuICAgZm9sbG93KHVzZXJuYW1lLCBjYikge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3QoJ1BVVCcsIGAvdXNlci9mb2xsb3dpbmcvJHt1c2VybmFtZX1gLCBudWxsLCBjYik7XG4gICB9XG5cbiAgIC8qKlxuICAgICogSGF2ZSB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlciB1bmZvbGxvdyB0aGlzIHVzZXJcbiAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuZ2l0aHViLmNvbS92My91c2Vycy9mb2xsb3dlcnMvI2ZvbGxvdy1hLXVzZXJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSAtIHRoZSB1c2VyIHRvIHVuZm9sbG93XG4gICAgKiBAcGFyYW0ge1JlcXVlc3RhYmxlLmNhbGxiYWNrfSBbY2JdIC0gcmVjZWl2ZXMgdHJ1ZSBpZiB0aGUgcmVxdWVzdCBzdWNjZWVkc1xuICAgICogQHJldHVybiB7UHJvbWlzZX0gLSB0aGUgcHJvbWlzZSBmb3IgdGhlIGh0dHAgcmVxdWVzdFxuICAgICovXG4gICB1bmZvbGxvdyh1c2VybmFtZSwgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdERUxFVEUnLCBgL3VzZXIvZm9sbG93aW5nLyR7dXNlcm5hbWV9YCwgbnVsbCwgY2IpO1xuICAgfVxuXG4gICAvKipcbiAgICAqIENyZWF0ZSBhIG5ldyByZXBvc2l0b3J5IGZvciB0aGUgY3VycmVudGx5IGF1dGhlbnRpY2F0ZWQgdXNlclxuICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5naXRodWIuY29tL3YzL3JlcG9zLyNjcmVhdGVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gdGhlIHJlcG9zaXRvcnkgZGVmaW5pdGlvblxuICAgICogQHBhcmFtIHtSZXF1ZXN0YWJsZS5jYWxsYmFja30gW2NiXSAtIHdpbGwgcmVjZWl2ZSB0aGUgQVBJIHJlc3BvbnNlXG4gICAgKiBAcmV0dXJuIHtQcm9taXNlfSAtIHRoZSBwcm9taXNlIGZvciB0aGUgaHR0cCByZXF1ZXN0XG4gICAgKi9cbiAgIGNyZWF0ZVJlcG8ob3B0aW9ucywgY2IpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0KCdQT1NUJywgJy91c2VyL3JlcG9zJywgb3B0aW9ucywgY2IpO1xuICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFVzZXI7XG4iXX0=
//# sourceMappingURL=User.js.map


/***/ }),

/***/ 1810:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

exports.isPlainObject = isPlainObject;


/***/ }),

/***/ 6065:
/***/ (function(module) {

/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : 0
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.6.4";
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa && typeof global.btoa == 'function'
        ? function(b){ return global.btoa(b) } : function(b) {
        if (b.match(/[^\x00-\xFF]/)) throw new RangeError(
            'The string contains invalid characters.'
        );
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = function(u) {
        return btoa(utob(String(u)));
    };
    var mkUriSafe = function (b64) {
        return b64.replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encode = function(u, urisafe) {
        return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
    };
    var encodeURI = function(u) { return encode(u, true) };
    var fromUint8Array;
    if (global.Uint8Array) fromUint8Array = function(a, urisafe) {
        // return btoa(fromCharCode.apply(null, a));
        var b64 = '';
        for (var i = 0, l = a.length; i < l; i += 3) {
            var a0 = a[i], a1 = a[i+1], a2 = a[i+2];
            var ord = a0 << 16 | a1 << 8 | a2;
            b64 +=    b64chars.charAt( ord >>> 18)
                +     b64chars.charAt((ord >>> 12) & 63)
                + ( typeof a1 != 'undefined'
                    ? b64chars.charAt((ord >>>  6) & 63) : '=')
                + ( typeof a2 != 'undefined'
                    ? b64chars.charAt( ord         & 63) : '=');
        }
        return urisafe ? mkUriSafe(b64) : b64;
    };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob && typeof global.atob == 'function'
        ? function(a){ return global.atob(a) } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = function(a) { return btou(_atob(a)) };
    var _fromURI = function(a) {
        return String(a).replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/'
        }).replace(/[^A-Za-z0-9\+\/]/g, '');
    };
    var decode = function(a){
        return _decode(_fromURI(a));
    };
    var toUint8Array;
    if (global.Uint8Array) toUint8Array = function(a) {
        return Uint8Array.from(atob(_fromURI(a)), function(c) {
            return c.charCodeAt(0);
        });
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function(){ return global.Base64 });
    }
    // that's it!
    return {Base64: global.Base64}
}));


/***/ }),

/***/ 9093:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ 5597:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Stream = _interopDefault(__nccwpck_require__(2413));
var http = _interopDefault(__nccwpck_require__(8605));
var Url = _interopDefault(__nccwpck_require__(8835));
var https = _interopDefault(__nccwpck_require__(7211));
var zlib = _interopDefault(__nccwpck_require__(8761));

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = __nccwpck_require__(1756).convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);
		if (!res) {
			res = /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(str);
			if (res) {
				res.pop(); // drop last quote
			}
		}

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`uri requested responds with a redirect, redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout,
							size: request.size
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

module.exports = exports = fetch;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.default = exports;
exports.Headers = Headers;
exports.Request = Request;
exports.Response = Response;
exports.FetchError = FetchError;


/***/ }),

/***/ 1738:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

var wrappy = __nccwpck_require__(3979)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),

/***/ 3357:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(2096);


/***/ }),

/***/ 2096:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(1631);
var tls = __nccwpck_require__(4016);
var http = __nccwpck_require__(8605);
var https = __nccwpck_require__(7211);
var events = __nccwpck_require__(8614);
var assert = __nccwpck_require__(2357);
var util = __nccwpck_require__(1669);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 4020:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }

  if (typeof process === "object" && "version" in process) {
    return `Node.js/${process.version.substr(1)} (${process.platform}; ${process.arch})`;
  }

  return "<environment undetectable>";
}

exports.getUserAgent = getUserAgent;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 3736:
/***/ (function(module, exports, __nccwpck_require__) {

/* module decorator */ module = __nccwpck_require__.nmd(module);
/*! https://mths.be/utf8js v2.1.2 by @mathias */
;(function(root) {

	// Detect free variables `exports`
	var freeExports =  true && exports;

	// Detect free variable `module`
	var freeModule =  true && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var stringFromCharCode = String.fromCharCode;

	// Taken from https://mths.be/punycode
	function ucs2decode(string) {
		var output = [];
		var counter = 0;
		var length = string.length;
		var value;
		var extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	// Taken from https://mths.be/punycode
	function ucs2encode(array) {
		var length = array.length;
		var index = -1;
		var value;
		var output = '';
		while (++index < length) {
			value = array[index];
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
		}
		return output;
	}

	function checkScalarValue(codePoint) {
		if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
			throw Error(
				'Lone surrogate U+' + codePoint.toString(16).toUpperCase() +
				' is not a scalar value'
			);
		}
	}
	/*--------------------------------------------------------------------------*/

	function createByte(codePoint, shift) {
		return stringFromCharCode(((codePoint >> shift) & 0x3F) | 0x80);
	}

	function encodeCodePoint(codePoint) {
		if ((codePoint & 0xFFFFFF80) == 0) { // 1-byte sequence
			return stringFromCharCode(codePoint);
		}
		var symbol = '';
		if ((codePoint & 0xFFFFF800) == 0) { // 2-byte sequence
			symbol = stringFromCharCode(((codePoint >> 6) & 0x1F) | 0xC0);
		}
		else if ((codePoint & 0xFFFF0000) == 0) { // 3-byte sequence
			checkScalarValue(codePoint);
			symbol = stringFromCharCode(((codePoint >> 12) & 0x0F) | 0xE0);
			symbol += createByte(codePoint, 6);
		}
		else if ((codePoint & 0xFFE00000) == 0) { // 4-byte sequence
			symbol = stringFromCharCode(((codePoint >> 18) & 0x07) | 0xF0);
			symbol += createByte(codePoint, 12);
			symbol += createByte(codePoint, 6);
		}
		symbol += stringFromCharCode((codePoint & 0x3F) | 0x80);
		return symbol;
	}

	function utf8encode(string) {
		var codePoints = ucs2decode(string);
		var length = codePoints.length;
		var index = -1;
		var codePoint;
		var byteString = '';
		while (++index < length) {
			codePoint = codePoints[index];
			byteString += encodeCodePoint(codePoint);
		}
		return byteString;
	}

	/*--------------------------------------------------------------------------*/

	function readContinuationByte() {
		if (byteIndex >= byteCount) {
			throw Error('Invalid byte index');
		}

		var continuationByte = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		if ((continuationByte & 0xC0) == 0x80) {
			return continuationByte & 0x3F;
		}

		// If we end up here, it’s not a continuation byte
		throw Error('Invalid continuation byte');
	}

	function decodeSymbol() {
		var byte1;
		var byte2;
		var byte3;
		var byte4;
		var codePoint;

		if (byteIndex > byteCount) {
			throw Error('Invalid byte index');
		}

		if (byteIndex == byteCount) {
			return false;
		}

		// Read first byte
		byte1 = byteArray[byteIndex] & 0xFF;
		byteIndex++;

		// 1-byte sequence (no continuation bytes)
		if ((byte1 & 0x80) == 0) {
			return byte1;
		}

		// 2-byte sequence
		if ((byte1 & 0xE0) == 0xC0) {
			byte2 = readContinuationByte();
			codePoint = ((byte1 & 0x1F) << 6) | byte2;
			if (codePoint >= 0x80) {
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 3-byte sequence (may include unpaired surrogates)
		if ((byte1 & 0xF0) == 0xE0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			codePoint = ((byte1 & 0x0F) << 12) | (byte2 << 6) | byte3;
			if (codePoint >= 0x0800) {
				checkScalarValue(codePoint);
				return codePoint;
			} else {
				throw Error('Invalid continuation byte');
			}
		}

		// 4-byte sequence
		if ((byte1 & 0xF8) == 0xF0) {
			byte2 = readContinuationByte();
			byte3 = readContinuationByte();
			byte4 = readContinuationByte();
			codePoint = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0C) |
				(byte3 << 0x06) | byte4;
			if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
				return codePoint;
			}
		}

		throw Error('Invalid UTF-8 detected');
	}

	var byteArray;
	var byteCount;
	var byteIndex;
	function utf8decode(byteString) {
		byteArray = ucs2decode(byteString);
		byteCount = byteArray.length;
		byteIndex = 0;
		var codePoints = [];
		var tmp;
		while ((tmp = decodeSymbol()) !== false) {
			codePoints.push(tmp);
		}
		return ucs2encode(codePoints);
	}

	/*--------------------------------------------------------------------------*/

	var utf8 = {
		'version': '2.1.2',
		'encode': utf8encode,
		'decode': utf8decode
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return utf8;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = utf8;
		} else { // in Narwhal or RingoJS v0.7.0-
			var object = {};
			var hasOwnProperty = object.hasOwnProperty;
			for (var key in utf8) {
				hasOwnProperty.call(utf8, key) && (freeExports[key] = utf8[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.utf8 = utf8;
	}

}(this));


/***/ }),

/***/ 3979:
/***/ ((module) => {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),

/***/ 1756:
/***/ ((module) => {

module.exports = eval("require")("encoding");


/***/ }),

/***/ 2357:
/***/ ((module) => {

"use strict";
module.exports = require("assert");;

/***/ }),

/***/ 8614:
/***/ ((module) => {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 5747:
/***/ ((module) => {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 8605:
/***/ ((module) => {

"use strict";
module.exports = require("http");;

/***/ }),

/***/ 7211:
/***/ ((module) => {

"use strict";
module.exports = require("https");;

/***/ }),

/***/ 1631:
/***/ ((module) => {

"use strict";
module.exports = require("net");;

/***/ }),

/***/ 2087:
/***/ ((module) => {

"use strict";
module.exports = require("os");;

/***/ }),

/***/ 5622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ }),

/***/ 4016:
/***/ ((module) => {

"use strict";
module.exports = require("tls");;

/***/ }),

/***/ 3867:
/***/ ((module) => {

"use strict";
module.exports = require("tty");;

/***/ }),

/***/ 8835:
/***/ ((module) => {

"use strict";
module.exports = require("url");;

/***/ }),

/***/ 1669:
/***/ ((module) => {

"use strict";
module.exports = require("util");;

/***/ }),

/***/ 8761:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__nccwpck_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(8864);
const github = __nccwpck_require__(6366);
const fs = __nccwpck_require__(5747);
const GitHubApi = __nccwpck_require__(6915);

// unauthenticated client
const gh = new GitHubApi({
  username: core.getInput('gist-username'),
  token: core.getInput('gist-token')
});

try {
  // // `who-to-greet` input defined in action metadata file
  // const nameToGreet = core.getInput('who-to-greet');
  // console.log(`Hello ${nameToGreet}!`);
  // const time = (new Date()).toTimeString();
  // core.setOutput("time", time);
  // // Get the JSON webhook payload for the event that triggered the workflow
  // const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);
  
  const directoryPath = github.workspace + '/' + core.getInput('doc-folder');

  // const directoryPath = './sample_docs';

  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
      if (fs.lstatSync(directoryPath + '/' + file).isDirectory()) {
        fs.readdir(directoryPath + '/' + file, (err, docs) => {
          docs.forEach((docPath) => {
            const [fileName, gistId, ] = docPath.split('.');
            const fileContent = fs.readFileSync(directoryPath + '/' + file + '/' + docs, 'utf8')
            gh.getGist(gistId).update({
              files: {
                [fileName+'.'+fileType]: {
                  content: fileContent
                }
              }
            })
          })
        })
      }
    });
  });
} catch (error) {
  // core.setFailed(error.message);
}

})();

module.exports = __webpack_exports__;
/******/ })()
;