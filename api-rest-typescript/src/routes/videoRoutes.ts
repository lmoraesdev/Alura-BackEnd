import { Router } from "express";
import { VideoController } from "../Controllers/VideoController";

const router = Router();

router
	.get("/video", () => {
		console.log("rota funcionando");
	})
	.post("/video", new VideoController().create);

export default router;
