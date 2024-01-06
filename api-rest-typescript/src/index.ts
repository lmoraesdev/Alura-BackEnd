import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes/index";

AppDataSource.initialize().then(() => {
	const app = express();
	routes(app)
	app.listen(process.env.PORT);
});

