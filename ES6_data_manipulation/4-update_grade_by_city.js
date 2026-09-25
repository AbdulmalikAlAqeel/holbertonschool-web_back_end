export default function updateStudentGradeByCity(students, city, newGrades = []) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter((gradeObj) => gradeObj.studentId === student.id);
      const grade = studentGrade.length > 0 ? studentGrade[0].grade : 'N/A';
      return {
        ...student,
        grade,
      };
    });
}
