import { Buttercup } from 'pollenium-buttercup'
import { Ilex } from 'pollenium-ilex'
import EjsWallet from 'ethereumjs-wallet'
import ethSigUtil from 'eth-sig-util'

export class Wallflower {

  ejsWallet: EjsWallet;
  publicKey: Buttercup;
  address: Buttercup;

  constructor(public privateKey: Buttercup) {
    this.ejsWallet = EjsWallet.fromPrivateKey(privateKey)
  }
  getPublicKey(): Buttercup {
    if (this.publicKey) {
      return this.publicKey
    }
    this.publicKey = Buttercup.fromBuffer(this.ejsWallet.getPublicKey())
    return this.publicKey
  }
  getAddress(): Buttercup {
    if (this.address) {
      return this.address
    }
    this.address = Buttercup.fromBuffer(this.ejsWallet.getAddress())
    return this.address
  }
  getPersonalSignature(personalMessage: Buttercup): Ilex {
    return Ilex.fromConcatenation(
      Buttercup.fromPhex(
        ethSigUtil.personalSign(this.privateKey.getBuffer(), {
          data: personalMessage.getPhex()
        })
      )
    )
  }
  static generate(): Wallflower {
    return new Wallflower(Buttercup.random(32))
  }
}
