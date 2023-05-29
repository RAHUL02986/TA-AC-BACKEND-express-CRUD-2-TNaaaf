let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let bookSchema = new Schema(
  {
    title: { type: String },
    summary: String,
    pages: Number,
    publication: String,
    cover_image: String,
    authorId: { type: Schema.Types.ObjectId, ref: 'author' },
    categoryId: [{ type: Schema.Types.ObjectId, ref: 'category' }],
  },
  { timestamps: true }
);

let Book = mongoose.model('Book', bookSchema);

module.exports = Book;