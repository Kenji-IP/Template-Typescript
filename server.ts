import { CreateApp } from "./src/app.js"
import { config } from "dotenv"
config();

const PORT = Number(process.env.PORT) || 2112;

const app = await CreateApp();

app.listen(PORT, '0.0.0.0', () => {
   console.log(`Antenna is running on http://localhost:${PORT}`);
});