const FAQ = require("../models/FAQ");
const Redis = require("ioredis");
const translate = require("@vitalets/google-translate-api").translate;
const redis = new Redis();
exports.getFAQs = async (req, res) => {
  try {
    const lang = req.query.lang || "en";
    const cachedFAQs = await redis.get(`faqs:${lang}`);
    if (cachedFAQs) {
      return res.json(JSON.parse(cachedFAQs));
    }

    const faqs = await FAQ.find();
    const translatedFAQs = faqs.map((faq) => ({
      question: faq.translations[lang]?.question || faq.question,
      answer: faq.translations[lang]?.answer || faq.answer,
    }));

    await redis.set(`faqs:${lang}`, JSON.stringify(translatedFAQs), "EX", 3600);
    res.json(translatedFAQs);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.addFAQ = async (req, res) => {
  try {
    let { question, answer } = req.body;
    const [questionHi, questionBn, answerHi, answerBn] = await Promise.all([
      translate(question, { to: "hi" }).then((res) => res.text),
      translate(question, { to: "bn" }).then((res) => res.text),
      translate(answer, { to: "hi" }).then((res) => res.text),
      translate(answer, { to: "bn" }).then((res) => res.text),
    ]);

    const faq = new FAQ({
      question,
      answer,
      translations: {
        hi: { question: questionHi, answer: answerHi },
        bn: { question: questionBn, answer: answerBn },
      },
    });
    await faq.save();
    res.status(201).json(faq);
  } catch (error) {
    console.error("Translation Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
