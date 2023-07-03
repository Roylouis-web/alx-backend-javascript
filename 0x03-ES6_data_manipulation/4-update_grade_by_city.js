export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((filteredStudent) => {
      const match = newGrades.find(
        (student) => student.studentId === filteredStudent.id
      );
      if (match) {
        filteredStudent.grade = match.grade;
      } else {
        filteredStudent.grade = 'N/A';
      }
      return filteredStudent;
    });
}
