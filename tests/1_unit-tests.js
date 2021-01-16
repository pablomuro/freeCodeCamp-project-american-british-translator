const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {
  suite('From American to British English', function () {
    const locale = 'american-to-british'

    test('Mangoes are my favorite fruit. => Mangoes are my favourite fruit.', function (done) {
      const inputText = 'Mangoes are my favorite fruit.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'Mangoes are my favourite fruit.');
      done();
    });

    test('I ate yogurt for breakfast. => I ate yoghurt for breakfast.', function (done) {
      const inputText = 'I ate yogurt for breakfast.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'I ate yoghurt for breakfast.');
      done();
    });

    test("We had a party at my friend's condo. => We had a party at my friend's flat.", function (done) {
      const inputText = "We had a party at my friend's condo."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "We had a party at my friend's flat.");
      done();
    });

    test("Can you toss this in the trashcan for me? => Can you toss this in the bin for me?", function (done) {
      const inputText = "Can you toss this in the trashcan for me?"
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "Can you toss this in the bin for me?");
      done();
    });

    test("The parking lot was full. => The car park was full.", function (done) {
      const inputText = "The parking lot was full."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "The car park was full.");
      done();
    });

    test("Like a high tech Rube Goldberg machine. => Like a high tech Heath Robinson device.", function (done) {
      const inputText = "Like a high tech Rube Goldberg machine."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "Like a high tech Heath Robinson device.");
      done();
    });

    test("To play hooky means to skip class or work. => To bunk off means to skip class or work.", function (done) {
      const inputText = "To play hooky means to skip class or work."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "To bunk off means to skip class or work.");
      done();
    });

    test("No Mr. Bond, I expect you to die. => No Mr Bond, I expect you to die.", function (done) {
      const inputText = "No Mr. Bond, I expect you to die."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "No Mr Bond, I expect you to die.");
      done();
    });

    test("Dr. Grosh will see you now. => Dr Grosh will see you now.", function (done) {
      const inputText = "Dr. Grosh will see you now."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "Dr Grosh will see you now.");
      done();
    });

    test("Lunch is at 12:15 today. => Lunch is at 12.15 today.", function (done) {
      const inputText = "Lunch is at 12:15 today."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "Lunch is at 12.15 today.");
      done();
    });


  });
  suite('From British to American English', function () {
    const locale = 'british-to-american'

    test('We watched the footie match for a while. => We watched the soccer match for a while.', function (done) {
      const inputText = 'We watched the footie match for a while.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'We watched the soccer match for a while.');
      done();
    });

    test('Paracetamol takes up to an hour to work. => Tylenol takes up to an hour to work.', function (done) {
      const inputText = 'Paracetamol takes up to an hour to work.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'Tylenol takes up to an hour to work.');
      done();
    });

    test('First, caramelise the onions. => First, caramelize the onions.', function (done) {
      const inputText = 'First, caramelise the onions.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'First, caramelize the onions.');
      done();
    });

    test('I spent the bank holiday at the funfair. => I spent the public holiday at the carnival.', function (done) {
      const inputText = 'I spent the bank holiday at the funfair.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'I spent the public holiday at the carnival.');
      done();
    });

    test('I had a bicky then went to the chippy. => I had a cookie then went to the fish-and-chip shop.', function (done) {
      const inputText = 'I had a bicky then went to the chippy.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'I had a cookie then went to the fish-and-chip shop.');
      done();
    });

    test("I've just got bits and bobs in my bum bag. => I've just got odds and ends in my fanny pack.", function (done) {
      const inputText = "I've just got bits and bobs in my bum bag."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "I've just got odds and ends in my fanny pack.");
      done();
    });

    test('The car boot sale at Boxted Airfield was called off. => The swap meet at Boxted Airfield was called off.', function (done) {
      const inputText = 'The car boot sale at Boxted Airfield was called off.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'The swap meet at Boxted Airfield was called off.');
      done();
    });

    test('Have you met Mrs Kalyani? => Have you met Mrs. Kalyani?', function (done) {
      const inputText = 'Have you met Mrs Kalyani?'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'Have you met Mrs. Kalyani?');
      done();
    });
    test("Prof Joyner of King's College, London. => Prof. Joyner of King's College, London.", function (done) {
      const inputText = "Prof Joyner of King's College, London."
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, "Prof. Joyner of King's College, London.");
      done();
    });

    test('Tea time is usually around 4 or 4.30. => Tea time is usually around 4 or 4:30.', function (done) {
      const inputText = 'Tea time is usually around 4 or 4.30.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      result.translation = translator.unHighLightTranslate()
      assert.equal(result.translation, 'Tea time is usually around 4 or 4:30.');
      done();
    });

  });
  suite('Highlight translation', function () {
    test('Mangoes are my favorite fruit. has highlight', function (done) {
      const locale = 'american-to-british'
      const inputText = 'Mangoes are my favorite fruit.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      assert.include(result.translation, 'class="highlight"');
      done();
    });
    test('I ate yogurt for breakfast. has highlight', function (done) {
      const locale = 'american-to-british'
      const inputText = 'I ate yogurt for breakfast.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      assert.include(result.translation, 'class="highlight"');
      done();
    });
    test('We watched the footie match for a while. has highlight', function (done) {
      const locale = 'british-to-american'
      const inputText = 'We watched the footie match for a while.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      assert.include(result.translation, 'class="highlight"');
      done();
    });
    test('Paracetamol takes up to an hour to work. has highlight', function (done) {
      const locale = 'british-to-american'
      const inputText = 'Paracetamol takes up to an hour to work.'
      const translator = new Translator(inputText, locale)
      const result = translator.translate()
      assert.include(result.translation, 'class="highlight"');
      done();
    });
  });
});
