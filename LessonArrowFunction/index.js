// let employee1 = {
//   fullName: "Philip Osir",
//   gender: "Male",
//   role: "CEO",
//   salary: "30000"
// }

// let employeeDetails = () => {
//   console.log(employee1.gender)
// }

// console.log (employeeDetails());


// let employeeDetails = [
//   {
//       fullName: "Philip Osir",
//       gender: "Male",
//       role: "CEO",
//       salary: "30000"
//     },
//     {
//         fullName: "Alice Atieno",
//         gender: "Female",
//         role: "MD",
//         salary: "20000"
//       },
//       {
//         fullName: "Janet Mbugwa",
//         gender: "Female",
//         role: "Marketing",
//         salary: "30000"
//       },

// ]

// let addNewemploy = () => {
//   employeeDetails.splice(1, 0, 
//     {
//       fullName: "Erick Ochola",
//       gender: "Male",
//       role: "Driver",
//       salary: "30000"
//     }
//   )
//   return employeeDetails;
// }
// console.log(addNewemploy())

// let employeeDetails = [
//   {
//       fullName: "Philip Osir",
//       gender: "Male",
//       role: "CEO",
//       salary: "30000"
//     },
//     {
//         fullName: "Alice Atieno",
//         gender: "Female",
//         role: "MD",
//         salary: "20000"
//       },
//       {
//         fullName: "Janet Mbugwa",
//         gender: "Female",
//         role: "Marketing",
//         salary: "30000"
//       },

// ];
 // employeeDetails.map((employees) => {
  //   console.log (employees.fullName);
  // })
// let employRecords = (employeesalary) => {
//   employeesalary = employeeDetails.filter((employee) => employee.salary === 20000);
//   return employeesalary
// };
// console.log(employRecords(employeeDetails))

//   // console.log(employeeDetails);
//   let salary = employeeDetails.filter((employee) => employee.salary === 20000);
//   return salary;
// }

// console.log(employRecords());

// let employees = [
//   {
//       fullName: "Philip Osir",
//       gender: "Male",
//       role: "CEO",
//       salary: "30000"
//     },
//     {
//         fullName: "Alice Atieno",
//         gender: "Female",
//         role: "MD",
//         salary: "20000"
//       },
//       {
//         fullName: "Janet Mbugwa",
//         gender: "Female",
//         role: "Marketing",
//         salary: "30000"
//       },

// ];

// let displayName = () => {
//   for (const employeeName of employees) {
//     console.log(`${employeeName.fullName}: ${employeeName.role}`);
//   }
// }

// displayName();

// let displayRange = () => {
//   employees.map((employee) => {
//     // console.log(employee.fullName);
//     if(employee.salary >= 30000) {
//       console.log(employee);
//     }
//   })
  
// }

// displayRange(employees);

// let employees = 
//   {
//     fullName: "Philip Osir",
//     gender: "Male",
//     role: "CEO",
//     salary: {
//       netSalary: "20000",
//       basicSalary: "30000"
//     }
//   }

//   console.log(Object.values(employees));
//   let todayStudent = "fullName"

//   console.log(employees[todayStudent]);
// console.log(employees.salary.basicSalary)
// console.log(employees["salary"]["basicSalary"])

// const circle = {};

// circle.radius = 5;

// console.log(circle);

// circle.diameter = 27;
// console.log(circle)

// delete circle.diameter

// console.log(circle);

// const mondayMenu = {
//   cheesePlate: {
//     soft: "Chèvre",
//     semiSoft: "Gruyère",
//     hard: "Manchego",
//   },
//   fries: "Curly",
//   saladd: "Cobb",
// };


// mondayMenu.fries = "Sweet potato";
// console.log(mondayMenu)

// function undestructive(mondayMenu, key) {
  // const updated = {...mondayMenu};
//   delete mondayMenu[key]
//   return mondayMenu
// }
// console.log(undestructive(mondayMenu, "Cookies"));

// function uppercase(name) {
//   let upperCaseCharacters = "";
//   for(const char of name) {
//     upperCaseCharacters += char.toUpperCase();
//   }
//   return upperCaseCharacters;
// }
// console.log(uppercase("Hello"));
// return {...Obj, [key]: value,};

// function uppercase(name) {
//   for(const char of name) {
//     console.log(char.toUpperCase())
//   }
// }
// uppercase("Hello");


let employees = [
  {
    fullName: "Philip Osir",
    gender: "Male",
    role: "CEO",
    salary: "30000"
  },
  {
      fullName: "Alice Atieno",
      gender: "Female",
      role: "MD",
      salary: "20000"
    },
    {
      fullName: "Janet Mbugwa",
      gender: "Female",
      role: "Marketing",
      salary: "30000"
    },
]
    // employees.map((employee) =>{
    //   console.log(`${employee.fullName}: ${employee.role}`)
    // })

   let result = employees.filter((employee) => employee.salary === 20000);
  
  
  
  // employees.map((employeedata) => {
  //     console.log (`${employeedata.fullName}: ${employeedata.role}`);
  //   })
        // console.log(`${employees.fullName}: ${employees.role}`)

  // let employRecords = (employeesalary) => {
  //   employeesalary = employeeDetails.filter((employee) => employee.salary === 20000);
  //   return employeesalary
  // };
  // console.log(employRecords(employeeDetails))
  
  //   // console.log(employeeDetails);
  //   let salary = employeeDetails.filter((employee) => employee.salary === 20000);
  //   return salary;
  // }
  
  // console.log(employRecords());
  
  // let displayName = () => {
  //  employeeDetails = employees.filter((emp1) => emp1 === 30000 {
  //   console.log(employeeDetails.fullName)
  //  })
  // }
  
  // displayName();
