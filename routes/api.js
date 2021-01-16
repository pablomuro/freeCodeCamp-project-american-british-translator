'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {



  app.route('/api/translate')
    .post((req, res) => {
      const text = req.body.text
      const locale = req.body.locale
      try {
        const translator = new Translator(text, locale);
        translator.validate()
        const result = translator.translate()
        return res.json(result)
      } catch (error) {
        return res.json({ error: error.message })
      }

    });
};
