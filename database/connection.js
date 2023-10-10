const mongoose = require("mongoose");

// MongoDB ulanish qatorini o'zgartiring
const MONGODB_URI = "mongodb+srv://rsaidqodirxon:3Osvy1qcE5F6kZSR@cluster0.niwu8aw.mongodb.net/?retryWrites=true&w=majority"; // MongoDB ulanish qatorini o'zgartiring

const connection = mongoose.createConnection(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  // Boshqa xususiyatlar kerak bo'lsa ularni ham qo'shishingiz mumkin
  // poolSize: 10,
  // maxTimeMS: 1,
});

module.exports = connection;
