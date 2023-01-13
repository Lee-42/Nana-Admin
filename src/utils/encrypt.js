import md5 from 'md5'
import JsEncrypt from 'jsencrypt'

const encrypt = {
  md5: (str) => {
    return md5(str)
  },
  rsa: (str) => {
    const publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8z6xqileL+UyWhij5tn8LOwCtToq+IR+EqIeDSgi3/Er228YMKjkmoMe5/Nt3d5Pnrr5l4Z2WZSJ4Cn9ad6TjqjeZCcFhRYPouiR+mx1k1YhqGzxBOi46/epbM7pKrvyHHeq6V1M2rQe5TPqX8Lo3vXHjSuLiDsyaK2saXGuKFQIDAQAB`
    //实例化jsEncrypt对象
    let jse = new JsEncrypt()
    //设置公钥
    jse.setPublicKey(publicKey)
    return jse.encrypt(str)
  }
}
export default encrypt
