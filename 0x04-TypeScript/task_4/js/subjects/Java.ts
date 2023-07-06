///<reference path='Teacher.ts' />
///<reference path='Subjects.ts' />

namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
    export class Java extends Subject {
      getRequirements(): string {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher(): string {
        if (!this.teacher.experienceTeachingJava) {
          return 'No available teacher';
        }
  
        return `Teacher: ${this.teacher.firstName}`;
      }
    }

    export const java = Java;
  }
  