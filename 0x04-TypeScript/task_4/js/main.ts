

/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

namespace Subjects {
  // Create and export teacher with experienceTeachingC = 10
  export const cTeacher: Teacher = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    experienceTeachingC: 10,
  };

  // Create and export subject instances
  export const cpp = new Cpp();
  export const java = new Java();
  export const react = new React();

  // For Cpp subject
  console.log('C++');
  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());

  // For Java subject
  console.log('Java');
  java.setTeacher(cTeacher);
  console.log(java.getRequirements());
  console.log(java.getAvailableTeacher());

  // For React subject
  console.log('React');
  react.setTeacher(cTeacher);
  console.log(react.getRequirements());
  console.log(react.getAvailableTeacher());
}