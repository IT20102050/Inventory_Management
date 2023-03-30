import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

import InventoryRoutes from "./routes/inventory.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";

// data imports
import User from "./models/user.js";
import Inventory from "./models/Inventory.js";
import ItemStat from "./models/ItemStat.js";

import { dataUser, dataInventory, dataItemStat } from "./data/index.js";

/* Configuration */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/*Routes*/
app.use("/inventory", InventoryRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ONLY ADD DATA ONE TIME */
    // AffiliateStat.insertMany(dataAffiliateStat);
    // OverallStat.insertMany(dataOverallStat);
    // Product.insertMany(dataProduct);

    //ItemStat.insertMany(dataItemStat);

    //Inventory.insertMany(dataInventory);

    //User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
