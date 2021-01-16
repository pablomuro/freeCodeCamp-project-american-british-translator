const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

const britishToAmericanTitles = {}
Object.entries(americanToBritishTitles).map(obj => {
  const [key, value] = [...obj]
  britishToAmericanTitles[value] = key
})

const britishToAmericanSpelling = {}
Object.entries(americanToBritishSpelling).map(obj => {
  const [key, value] = [...obj]
  britishToAmericanSpelling[value] = key
})

class Translator {

  constructor(text, locale) {
    this.text = text
    this.locale = locale
    this.translation = ''
  }

  translateByDictionary(dictionary) {
    Object.entries(dictionary).map(this.translationMapCallback, this)
  }

  translationMapCallback(obj) {
    let [key, value] = [...obj]
    key = key.replace('.', '\.')
    value = this.highLightTranslate(value);
    let regexString = `(^${key}\\s)|(\\s${key}\\s)|(\\s${key}[\.,!?])|(^${key}$)`
    let regexObject = new RegExp(regexString, 'gi');
    this.translation = this.translation.replace(regexObject, translationReplacer)
    function translationReplacer(match, p1, p2, p3, p4,) {
      let matchString;
      if (p1) {
        // key = key.replace(/^\w/, (c) => c.toUpperCase());
        matchString = p1
      }
      if (p2) {
        matchString = p2
      }
      if (p3) {
        matchString = p3
      }
      if (p4) {
        matchString = p4
      }
      let toUpper = [...matchString.trim().matchAll(/[A-Z]/g)]
      if (toUpper.length) {
        key = key.split('')
        for (let i in toUpper) {
          const [letter] = toUpper[i]
          const index = toUpper[i]['index']
          key[index] = letter;
        }
        key = key.join('')
      }
      return matchString.replace(key, value)
    }

  }


  translateToBritish() {
    this.translation = this.text;
    this.translateByDictionary(americanToBritishTitles)
    this.translateByDictionary(americanToBritishSpelling)
    this.translateByDictionary(americanOnly)

    this.translation = this.translation.replace(/([0-9]+):([0-9]+)/gi, (match, numb1, numb2,) => {
      if (match && numb1 && numb2) {
        return this.highLightTranslate(`${numb1}.${numb2}`)
      }
    })
  }
  translateToAmerican() {
    this.translation = this.text;
    this.translateByDictionary(britishToAmericanTitles)
    this.translateByDictionary(britishToAmericanSpelling)
    this.translateByDictionary(britishOnly)

    this.translation = this.translation.replace(/([0-9]+).([0-9]+)/gi, (match, numb1, numb2,) => {
      if (match && numb1 && numb2) {
        return this.highLightTranslate(`${numb1}:${numb2}`)
      }
    })
  }

  unHighLightTranslate() {
    let text = this.translation
    text = text.replace(/<span class="highlight">/gi, '')
    text = text.replace(/<\/span>/gi, '')
    return text
  }

  highLightTranslate(newWord) {
    return `<span class="highlight">${newWord}</span>`
  }

  translate() {
    if (this.locale == 'american-to-british') {
      this.translateToBritish()
    }

    if (this.locale == 'british-to-american') {
      this.translateToAmerican()
    }

    if (this.text === this.translation) {
      this.translation = 'Everything looks good to me!'
    }

    return {
      text: this.text,
      translation: this.translation
    }
  }

  validate() {
    if (this.locale == undefined || this.text == undefined) {
      throw new Error('Required field(s) missing')
    }
    if (!this.text.length) {
      throw new Error('No text to translate')
    }
    if ((this.locale != 'american-to-british') && (this.locale != 'british-to-american')) {
      throw new Error('Invalid value for locale field')
    }

    return null
  }
}

module.exports = Translator;