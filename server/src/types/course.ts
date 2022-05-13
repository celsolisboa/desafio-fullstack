export interface Course {
  id?: number;
  room: string[];
  name: string;
  teacher: string[];
  time: { start: string; end: string };
  deleted?: boolean;
}
