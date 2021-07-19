const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const cartSchema = new mongoose.Schema(
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

const cartModel = mongoose.model("whishlist", cartSchema);
module.exports = cartModel;
