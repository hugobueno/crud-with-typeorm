import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text', })
    title: string;

    @Column({ type: 'text' })
    url: string;

    @ManyToOne(() => Room, room => room.videos) // um video pertence a uma sala
    @JoinColumn({ name: 'room_id' }) // passar o nome da coluna que vai ser a chave estrangeira
    room:Room
}
