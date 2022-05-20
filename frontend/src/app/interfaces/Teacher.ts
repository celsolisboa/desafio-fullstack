export interface TeacherLogin {   
   email: string;
   password: string;   
}

export interface Teacher {
   id: number;
   name: string;
   surname: string;
   email: string;
   password: string;
   course: string;
}