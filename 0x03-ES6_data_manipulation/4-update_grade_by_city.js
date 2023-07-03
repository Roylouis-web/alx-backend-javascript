export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((filteredStudent) => {
      const temp = filteredStudent;
      const match = newGrades.find(
        (student) => student.studentId === filteredStudent.id,
      );
      if (match) {
        temp.grade = match.grade;
      } else {
        temp.grade = 'N/A';
      }
      return temp;
    });
}
