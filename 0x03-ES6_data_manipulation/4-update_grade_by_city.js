export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((filteredStudent) => {
      const match = newGrades.find(
        (student) => student.studentId === filteredStudent.id
      );
      match
        ? (filteredStudent.grade = match.grade)
        : (filteredStudent.grade = 'N/A');
      return filteredStudent;
    });
}
