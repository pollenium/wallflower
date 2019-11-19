import * as uvaursi from 'pollenium-uvaursi'
import { Ilex } from 'pollenium-ilex'
import EjsWallet from 'ethereumjs-wallet'
import ethSigUtil from 'eth-sig-util'

export class Wallflower {

  public ejsWallet: EjsWallet;
  private publicKey: Uint8Array;
  private address: Uint8Array;

  constructor(public privateKey: Uint8Array) {
    this.ejsWallet = EjsWallet.fromPrivateKey(privateKey)
  }
  getPublicKey(): Uint8Array {
    if (this.publicKey) {
      return this.publicKey
    }
    this.publicKey = new Uint8Array(this.ejsWallet.getPublicKey())
    return this.publicKey
  }
  getAddress(): Uint8Array {
    if (this.address) {
      return this.address
    }
    this.address = new Uint8Array(this.ejsWallet.getAddress())
    return this.address
  }
  getPersonalSignature(personalMessage: Uint8Array): Ilex {
    const hexishConcatenation = ethSigUtil.personalSign(new Buffer(this.privateKey), {
      data: uvaursi.toHex(personalMessage)
    })
    return Ilex.fromConcatenation(uvaursi.fromHexish(hexishConcatenation))
  }
}
