/**
 * Local dependencies
 */
const BigInteger = require('../BigInteger')
const KeyAlgorithm = require('./KeyAlgorithm')

/**
 * RsaKeyAlgorithm
 */
class RsaKeyAlgorithm extends KeyAlgorithm {

  /**
   * constructor
   *
   * @param {object} algorithm
   */
  constructor (algorithm) {
    super(algorithm)

    // validate type of modulusLength
    if (typeof this.modulusLength !== 'number') {
      throw new Error(
        'modulusLength of RsaKeyAlgorithm must be a number'
      )
    }

    // validate range of modulusLength
    if (this.modulusLength < 1024) {
      throw new Error(
        'modulusLength of RsaKeyAlgorithm must be at least 1024'
      )
    }

    // validate publicExponent
    if (!(this.publicExponent instanceof BigInteger)) {
      throw new Error(
        'publicExponent of RsaKeyAlgorithm must be a BigInteger'
      )
    }
  }
}

/**
 * Export
 */
module.exports = RsaKeyAlgorithm
