import { AppDataSource } from "../database/data-source";
import { Room } from "../entities/Room";

export const roomRepository = AppDataSource.getRepository(Room)