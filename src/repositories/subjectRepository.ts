import { AppDataSource } from "../database/data-source";
import { Subject } from "../entities/Subject";

export const  subjectRepository =  AppDataSource.getRepository(Subject)