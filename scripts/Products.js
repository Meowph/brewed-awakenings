import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productsHTML = "<ul>"

    for (const product of products) {
        productsHTML += `
        <li data-type = "product"
            data-name = "${product.name}"
            data-price = "${product.price}"
        >${product.name}
        </li>
        `
    }

    productsHTML += "</ul>"

    return productsHTML
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.dataset.type === "product") {

        window.alert(`${itemClicked.dataset.name} costs ${itemClicked.dataset.price}`)
        }
    }
)

/*const productId = itemClicked.dataset.id
for (const product of products) {
    if (parseInt(product.id) === productId)
    productId++
} */
