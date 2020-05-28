const mongoose = require('mongoose');

const LikesSchema = new mongoose.schema({
	comment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Comment',
		required: true
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	like: {
		type: Boolean,
		required: true
	}
}, { timestamps: true });

module.exports = mongoose.model('Likes', LikesSchema);