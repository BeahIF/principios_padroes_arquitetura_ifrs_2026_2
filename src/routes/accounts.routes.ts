import { Router } from "express";

export const accountsRoutes = Router();

accountsRoutes.get("/accounts", (_req, res) => {
  return res.json([{ id: "1", owner: "Maria", balance: 100 }]);
});
