var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var categorySchema = new Schema(
  {
    categoryName: String,
    bookId: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
);

var Category = mongoose.model('Category', categorySchema);

// initializing the category collection on starting the server fist time

Category.countDocuments({ bookId: { $exists: true } })
  .then((count) => {
    if (count === 0) {
      Category.create(
        { name: 'Fiction' },
        { name: 'Adventure' },
        { name: 'Motivation' },
        { name: 'Technology' }
      );
    }
  })
  .catch((err) => console.error(err));
module.exports = Category;
