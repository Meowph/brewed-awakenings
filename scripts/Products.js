import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let productsHTML = "<ul>"

    for (const product of products) {
        productsHTML += `<li>${product.title}</li>`
    }

    productsHTML += "</ul>"

    return productsHTML
}

