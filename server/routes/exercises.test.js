const request = require('supertest');
const app = require('../../app')

// needed to fix regenerator issue
import "@babel/polyfill";

describe('Exercises path', () => {
    test('It successfully returns with exercises', () => {
        return request(app).get("/exercises").then(response => {
            expect(response.statusCode).toBe(200)
            expect(response.text).toEqual('[{"name":"pull ups","reps":5},{"name":"push ups","reps":20}]')
        })
    });
})
