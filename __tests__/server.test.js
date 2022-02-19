const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();

app.get('/get-cars', function(req, res) {
  res.status(200).json({ description: 'Elantra' });
});


app.post("/add", (req, res) => {
  try {
    res
      .status(200)
      .json({});
  } catch (e) {
    console.error(e);
  }
});

  describe('GET /get-cars', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/get-cars')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          assert(response.body.description, 'Elantra')
          done();
      })
    });
  });


  describe('POST /add', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/add')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });