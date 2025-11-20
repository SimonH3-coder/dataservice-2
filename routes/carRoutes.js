import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("Liste af biler");
  res.send("Liste af brugte biler ");
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  res.send(`Bil detajler: ${id} `);
});

export { router as carRoutes };
