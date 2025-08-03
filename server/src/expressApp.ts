import express from "express";
import cors from "cors";

export const expressApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.get("/api", (req, res) => {
    res.json({ message: "Server Running" });
  });

  return app;
};
