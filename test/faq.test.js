const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");
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
    .request(server)
    .post("/api/faqs")
    .send({
      question: "What is Express?",
      answer: "Express is a web framework.",
    })
    .end((err, res) => {
      expect(res.status).to.equal(201);
      done();
    });
});

it("should fetch FAQs", (done) => {
  chai
    .request(server)
    .get("/api/faqs")
    .end((err, res) => {
      expect(res.status).to.equal(200);
      done();
    });
});
