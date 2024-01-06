import { Router } from "express";
import { RoomController } from "../Controllers/RoomController";

const router = Router();

router
	.get("/room", () => {
		console.log("rota funcionando");
	})
	.post("/room", new RoomController().create);
//	.post("/room/:idaula/create")
export default router;
