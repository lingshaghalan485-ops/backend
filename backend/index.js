import express from "express";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import uploadRoutes from "./routes/upload.route.js";
import borroRoutes from "./routes/borrow.route.js";
import { connectDB } from "./config/db.js";
import { config } from "./config/config.js";
import morgan from "morgan";
import cors from "cord";
const app = express();
connectDB();
app.use(
    cors({
        origin:config.CORS_ORIGIN
    }))
app.use(morgan("dev"));
app.use(express.json());

// middleware
// is like a bridge between the request
// coming from client and the response sent by server

// function which has req res next
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);
app.use("/", borroRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(config.PORT, () => {
  console.log(`server is running on port ${config.PORT}`);
});