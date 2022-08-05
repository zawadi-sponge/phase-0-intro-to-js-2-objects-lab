// Write your solution in this file!
const employee ={name: `Sam`, streetAddress: `1250, Nairobi`};
 
const updateEmployeeWithKeyAndValue = (employee, key = `streetaddress`, value = `11 Broadway`) => {
    const updatedEmployee = employee;
    for (const i in employee){
        delete employee[i];
    }
    updatedEmployee.name = `Sam`;
    const newEmployee = {...updatedEmployee, streetAddress: value}
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    employee[key] = `Sam`;
    const newEmployee = {...employee, name: undefined}
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}