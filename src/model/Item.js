import mongoose from 'mongoose';

const item = new mongoose.Schema({
  id: {type: String, unique: true},
  author: { type: String },
  ga: Array,
  pixel: Array,
  angry: String,
  wow: String,
  haha: String,
  love: String,
  like: String,
  react: { type: String, default: null },
  userView: String,
  platform: String,
  imageUrl: String,
  comment: String,
  share: String,
  title: { type: String, default: null},
  content: { type: String, default: null },
  postFbId: { type: String, default: null },
  postTime:{ type: Date, default: Date.now },
  createdAt:{ type: Date, default: Date.now } 
});

const Item = mongoose.model('Item', item);
export default Item;
