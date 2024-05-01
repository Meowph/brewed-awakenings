import { getEmployees, getProducts } from "./database.js"

const employees = getEmployees()
const products = getProducts()

export const Employees = () => {
    let employeeHTML = "<ul>"

    for (const employee of employees) {
        employeeHTML += `
        <li data-type = "employee"
        data-name = "${employee.name}"
        data-id = "${employee.id}"
        data-productId = "${employee.productId}"
        >${employee.name}
        </li>`
    }

    employeeHTML += "</ul>"

    return employeeHTML
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "employee") {

        window.alert(`${itemClicked.dataset.name} sold ${itemClicked.dataset.id} products`)
        }
    }
)