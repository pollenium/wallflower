import { Buttercup } from 'pollenium-buttercup';
import { Ilex } from 'pollenium-ilex';
import EjsWallet from 'ethereumjs-wallet';
export declare class Wallflower {
    privateKey: Buttercup;
    ejsWallet: EjsWallet;
    publicKey: Buttercup;
    address: Buttercup;
    constructor(privateKey: Buttercup);
    getPublicKey(): Buttercup;
    getAddress(): Buttercup;
    getPersonalSignature(personalMessage: Buttercup): Ilex;
}
