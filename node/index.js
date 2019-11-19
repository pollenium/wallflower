"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var uvaursi = __importStar(require("pollenium-uvaursi"));
var pollenium_ilex_1 = require("pollenium-ilex");
var ethereumjs_wallet_1 = __importDefault(require("ethereumjs-wallet"));
var eth_sig_util_1 = __importDefault(require("eth-sig-util"));
var Wallflower = /** @class */ (function () {
    function Wallflower(privateKey) {
        this.privateKey = privateKey;
        this.ejsWallet = ethereumjs_wallet_1["default"].fromPrivateKey(privateKey);
    }
    Wallflower.prototype.getPublicKey = function () {
        if (this.publicKey) {
            return this.publicKey;
        }
        this.publicKey = new Uint8Array(this.ejsWallet.getPublicKey());
        return this.publicKey;
    };
    Wallflower.prototype.getAddress = function () {
        if (this.address) {
            return this.address;
        }
        this.address = new Uint8Array(this.ejsWallet.getAddress());
        return this.address;
    };
    Wallflower.prototype.getPersonalSignature = function (personalMessage) {
        var hexishConcatenation = eth_sig_util_1["default"].personalSign(new Buffer(this.privateKey), {
            data: uvaursi.toHex(personalMessage)
        });
        return pollenium_ilex_1.Ilex.fromConcatenation(uvaursi.fromHexish(hexishConcatenation));
    };
    return Wallflower;
}());
exports.Wallflower = Wallflower;
