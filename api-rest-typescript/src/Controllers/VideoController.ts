import { videoRepository } from "../repositories/videoRepository";
import { Request, Response } from "express";

export class VideoController {
	async create(req: Request, res: Response) {
		const { title, url } = req.body;
		const { idAula } = req.params;

		if (!title) {
			return res.status(400).json({ mensagem: "o nome é obrigatorio" });
		}
		try {
			const newVideo = videoRepository.create({
				title,
				url,
			});
			await videoRepository.save(newVideo);
			return res.status(201).json(newVideo);
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: "Internal Server Error" });
		}
	}
}
