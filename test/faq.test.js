const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const FAQ = require("../models/FAQ");
const { it } = require("mocha");
chai.use(chaiHttp);
const { expect } = chai;
describe("FAQ API", () => {
  before(async () => {
    await FAQ.deleteMany();
  });
});

it("should create an faq", (done) => {
  chai
    .request(app)
    .post("/api/faqs")
    .send({
      question: "What is Express?",
      answer: "Express is a web framework.",
    })
    .end((err, res) => {
      if (err) done(err);
      expect(res.status).to.equal(201);
      done();
    });
});

it("should fetch FAQs", (done) => {
  chai
    .request(app)
    .get("/api/faqs")
    .end((err, res) => {
      if (err) done(err);
      expect(res.status).to.equal(200);
      done();
    });
});
