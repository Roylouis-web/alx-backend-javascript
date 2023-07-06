///<reference path='Teacher.ts' />
///<reference path='Subjects.ts' />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }

      return `Teacher: ${this.teacher.firstName}`;
    }
  }

  export const react = React;
}
