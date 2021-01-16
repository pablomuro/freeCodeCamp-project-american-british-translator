const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

const apiRoute = '/api/translate'
suite('Functional Tests', () => {

  test('Translation with text and locale fields', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({ text: 'Mangoes are my favorite fruit.', locale: 'american-to-british' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
        assert.equal(res.body.text, 'Mangoes are my favorite fruit.');
        done();
      });
  });
  test('Translation with text and invalid locale field', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({ text: 'teste', locale: 'asas' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Invalid value for locale field');
        done();
      });
  });
  test('Translation with missing text field', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({ locale: 'asas' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with missing locale field', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({})
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'Required field(s) missing');
        done();
      });
  });
  test('Translation with empty text', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({ text: '', locale: 'american-to-british' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.error, 'No text to translate');
        done();
      });
  });
  test('Translation with text that needs no translation', function (done) {
    chai.request(server)
      .post(apiRoute)
      .send({ text: 'Test', locale: 'american-to-british' })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.translation, 'Everything looks good to me!');
        assert.equal(res.body.text, 'Test');
        done();
      });
  });
});
