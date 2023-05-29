var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, min: 18, max: 45 },
    email: String,
    comments: [{ type: Schema.Types.ObjectId, ref: 'comment', required: true }],
  }
//   { timestamps: true }
);

var User = mongoose.model('User', userSchema);

module.exports = User;
