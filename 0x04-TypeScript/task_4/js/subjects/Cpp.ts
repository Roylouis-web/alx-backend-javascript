///<reference path='Teacher.ts' />
///<reference path='Subjects.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }

      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }

  export const cpp: typeof Cpp = Cpp;
  
  export const cTeacher: Teacher = {
    firstName: 'John',
    lastName: 'Matthew',
    experienceTeachingC: 10,
  } 
}
