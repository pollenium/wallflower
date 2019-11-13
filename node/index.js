"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pollenium_buttercup_1 = require("pollenium-buttercup");
var pollenium_ilex_1 = require("pollenium-ilex");
var ethereumjs_wallet_1 = __importDefault(require("ethereumjs-wallet"));
var eth_sig_util_1 = __importDefault(require("eth-sig-util"));
var Wallflower = /** @class */ (function () {
    function Wallflower(privateKey) {
        this.privateKey = privateKey;
        this.ejsWallet = ethereumjs_wallet_1["default"].fromPrivateKey(privateKey.getBuffer());
    }
    Wallflower.prototype.getPublicKey = function () {
        if (this.publicKey) {
            return this.publicKey;
        }
        this.publicKey = pollenium_buttercup_1.Buttercup.fromBuffer(this.ejsWallet.getPublicKey());
        return this.publicKey;
    };
    Wallflower.prototype.getAddress = function () {
        if (this.address) {
            return this.address;
        }
        this.address = pollenium_buttercup_1.Buttercup.fromBuffer(this.ejsWallet.getAddress());
        return this.address;
    };
    Wallflower.prototype.getPersonalSignature = function (personalMessage) {
        return pollenium_ilex_1.Ilex.fromConcatenation(pollenium_buttercup_1.Buttercup.fromPhex(eth_sig_util_1["default"].personalSign(this.privateKey.getBuffer(), {
            data: personalMessage.getPhex()
        })));
    };
    Wallflower.generate = function () {
        return new Wallflower(pollenium_buttercup_1.Buttercup.random(32));
    };
    return Wallflower;
}());
exports.Wallflower = Wallflower;
