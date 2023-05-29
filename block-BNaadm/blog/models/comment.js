var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema =
  ({
    content: { type: String, required: true },
    bookId: { type: Schema.Types.ObjectId, ref: 'book', required: true },
    likes: { type: Number, default: 0 },
    author: { type: String, required: true },
  }
//   { timestamps: true });
  )

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
