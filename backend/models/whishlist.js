const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const whishlistSchema = new mongoose.Schema(
  {
    userID: {
      type: Object,
      default: null,
    },
    
    productID : {
        type: Object,
        default: null,
    },
  },
  { timestamps: true }
);

const whishlistModel = mongoose.model("whishlist", whishlistSchema);
module.exports = whishlistModel;
