import { roomRepository } from "./../repositories/roomRepository";
import { Request, Response } from "express";

export class RoomController {
	async create(req: Request, res: Response) {
		const { name } = req.body;

		if (!name) {
			return res.status(400).json({ mensagem: "o nome é obrigatorio" });
		}

		try {
			const newRoom = roomRepository.create({  });

			await roomRepository.save(newRoom);

			return res.status(201).json(newRoom);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	}
}
