const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  nome: String,
  dataNascimento: Date
}, { timestamps: true });

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
