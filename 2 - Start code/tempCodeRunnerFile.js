if (indexToUpdate !== -1) {
    // Step 2 : If the student with the provided ID is found , create a copy of the original array using the spread operator.
    let student =[...studentsArray];
    // Step 3 : Update the grade of the student at the found index in the copied array.
    return student[indexToUpdate].grade = newGrade;
  } else {
    // Step 4 :  If the student with the provided ID is not found, log a message indicating that the student was not found and return the original array unchanged.
    return 'Student was not found';
  }