import * as mongoose from 'mongoose';

// define schema
const cardSchema = new mongoose.Schema({
    front: String,
    back: String,
});

const Card = mongoose.model('Card', cardSchema);

// connect to database
await mongoose.connect('mongodb://your_resource');

// insert a card
const card = new Card({front: "front", back: "back"});
await card.save();

// get cards from db
const cards = await Card.find();
console.log(cards);

mongoose.disconnect();