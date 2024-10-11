interface Student {
  firstName: string,
  lastName: string,
  age: number
};

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18
}

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 17
}

const studentlist: Student[] = [student1, student2]
