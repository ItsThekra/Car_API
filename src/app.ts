import express from "express";
import carRoutes from "./routes/car.routes";
import carMakeRoutes from "./routes/carMake.routes";
import carDealerRoutes from "./routes/dealer.routes";


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use("/api", carDealerRoutes);
app.use("/api", carMakeRoutes);
app.use("/api", carRoutes);

// Port  
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});