import { Ilex } from 'pollenium-ilex';
import EjsWallet from 'ethereumjs-wallet';
export declare class Wallflower {
    privateKey: Uint8Array;
    ejsWallet: EjsWallet;
    private publicKey;
    private address;
    constructor(privateKey: Uint8Array);
    getPublicKey(): Uint8Array;
    getAddress(): Uint8Array;
    getPersonalSignature(personalMessage: Uint8Array): Ilex;
}
