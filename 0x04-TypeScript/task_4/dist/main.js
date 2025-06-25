"use strict";
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />
var Subjects;
(function (Subjects) {
    // Create and export teacher with experienceTeachingC = 10
    Subjects.cTeacher = {
        firstName: 'Guillaume',
        lastName: 'Salva',
        experienceTeachingC: 10,
    };
    // Create and export subject instances
    Subjects.cpp = new Subjects.Cpp();
    Subjects.java = new Subjects.Java();
    Subjects.react = new Subjects.React();
    // For Cpp subject
    console.log('C++');
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    // For Java subject
    console.log('Java');
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    // For React subject
    console.log('React');
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));
//# sourceMappingURL=main.js.map