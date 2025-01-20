import { Classroom } from "../classroom/entities/classroom.entity";
import { CreateClassroomDto } from "./dto/create-classroom.dto";

export class ClassroomMapper {
    static toEntity(dto: CreateClassroomDto): Classroom {
        const entitie = new Classroom();
        entitie.name = dto.name;
        return entitie;
    }
}