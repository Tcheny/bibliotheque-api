import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const NewBook = Schema({
  titre: { type: String, required: true },
  auteur: { type: String, required: true },
  annee_de_publication: { type: String, required: true },
  pages: { type: Number, required : true },
  date_de_creation: { type: String, required :true}
}, {versionKey: false});

export default mongoose.model('Book', NewBook);
