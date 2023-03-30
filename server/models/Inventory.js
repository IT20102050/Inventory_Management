import mongoose from "mongoose";

const InventorySchema = mongoose.Schema(
  {
      item_name: {
      required: true,
      type: String,
    },
    quantity: {
      required: true,
      type: Number,
    },
    manufacture_date: {
      required: true,
      type: Date,
    },
    expire_date: {
      required: true,
      type: Date,
    },
    status: {
      required: true,
      type: String,
    },
  },

  { timestamps: true }
);


const Inventory = mongoose.model("Inventory", InventorySchema);
export default Inventory;
