import { AppDataSource } from "../database/data-source";
import { Video } from "../entities/Video";

export const videoRepository = AppDataSource.getRepository(Video)