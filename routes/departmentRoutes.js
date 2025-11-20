import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  console.log("Liste af afdelinger");
  res.send("Liste af afdelinger ");
});

router.get("/:region", (req, res) => {
  res.send(`se vores afdeling i: ${req.params.region} `);
});

export { router as departmentRoutes };
