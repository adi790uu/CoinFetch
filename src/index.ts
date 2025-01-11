import express from "express";
import dotenv from "dotenv";
import initializeDB from "./core/db.js";
import task from "./core/jobs/crypto-job.js";
import router from "./router/crypto-router.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", async (req, res) => {
  res.json({ success: true, message: "Welcome to CoinFetch!" });
});

const startServer = async () => {
  try {
    await initializeDB();

    const port = process.env.PORT || 3000;
    const server = app.listen(port, () => {
      task.start();
      console.log(`Server started on port ${port}`);
    });

    process.on("SIGINT", () => gracefulShutdown(server));
    process.on("SIGTERM", () => gracefulShutdown(server));
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
};

const gracefulShutdown = (server: any) => {
  console.log("Gracefully shutting down...");
  server.close(() => {
    console.log("Server closed!");
    task.stop();
    process.exit(0);
  });
};

startServer();
