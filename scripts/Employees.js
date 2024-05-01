import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let employeeHTML = "<ul>"

    for (const employee of employees) {
        employeeHTML += `<li>${employee.name}</li>`
    }

    employeeHTML += "</ul>"

    return employeeHTML
}

