import Inventory from "../models/Inventory.js";
import ItemStat from "../models/ItemStat.js";

export const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find();

    const inventoryWithStats = await Promise.all(
      inventories.map(async (inventory) => {
        const stat = await ItemStat.find({
          item_id: inventory._id,
        });
        return {
          ...inventory._doc,
          stat,
        };
      })
    );

    res.status(200).json(inventoryWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
