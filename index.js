import express from "express";
import { carRoutes } from "./routes/carRoutes.js";
import { departmentRoutes } from "./routes/departmentRoutes.js";
const port = 4000;
const app = express();

// Kalder root route med request og response objekt
app.get("/", (req, res) => {
  res.send("hej-verden!");
  console.log(req);
});

app.use("/cars", carRoutes);
app.use("/afdelinger", departmentRoutes);

app.listen(port, () => {
  console.log(`server kører på http://localhost:${port}`);
});
