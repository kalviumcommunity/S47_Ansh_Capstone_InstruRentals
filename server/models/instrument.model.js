import mongoose from 'mongoose';

const instrumentSchema = new mongoose.Schema({
  company: String,
  name: String,
  type: String,
  imageLink: String,
  productId: String,
  rentPrice: String,
  buyNowPrice: String
});

const Instrument = mongoose.model('Instrument', instrumentSchema);

export default Instrument;