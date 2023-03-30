import mongoose from "mongoose";

const ItemStatSchema = new mongoose.Schema(
  {
    item_id: {
      required: true,
      type: String,
    },
    item_name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    manufacturer: {
      required: true,
      type: String,
    },
    category: {
      required: true,
      type: String,
    },
    unit_price: {
      required: true,
      type: Number,
    },
    total_quantity: {
      required: true,
      type: Number,
    },

    status: {
      required: true,
      type: Boolean,
    },
  },
  { timestamps: true }
);

const ItemStat = mongoose.model("ItemStat", ItemStatSchema);
export default ItemStat;
