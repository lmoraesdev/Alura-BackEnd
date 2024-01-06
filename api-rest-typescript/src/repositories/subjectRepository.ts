import { Subject } from './../entities/Subjects';
import { AppDataSource } from "../data-source";

export const subjectRepository = AppDataSource.getRepository(Subject)
