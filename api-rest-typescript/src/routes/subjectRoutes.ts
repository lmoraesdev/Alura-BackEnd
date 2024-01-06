import { SubjectController } from "../Controllers/SubjectController";
import { Router } from "express";

const router = Router();

router
	.get("/subject", () => {
		console.log("rota funcionando");
	})
	.post("/subject", new SubjectController().create);

export default router;
