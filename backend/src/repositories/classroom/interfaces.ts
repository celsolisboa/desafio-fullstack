interface ClassroomTypes {
    id: number;
    room_number: number;
    start_time: string;
    end_time: string;
}

interface ClassroomRepoTypes {
    findAll: () => Promise<ClassroomTypes[]>
}

export {
    ClassroomRepoTypes,
    ClassroomTypes,
}
