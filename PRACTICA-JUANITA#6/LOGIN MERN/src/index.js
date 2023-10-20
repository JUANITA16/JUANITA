import app from "./app.js";

import { connectDB } from "./db.js";

connectDB();
app.listen(5002, () => console.log("servidor on Port 5002"));
