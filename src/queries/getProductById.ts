import { gql } from '@apollo/client'

const GET_PRODUCT_BY_ID = gql`
    query GetProductById($id: String!) {
        product(id: $id) {
            id
            name
            inStock
            gallery
            description
            attributes {
                name
                items {
                    displayValue
                    value
                }
            }
            prices {
                currency {
                    symbol
                }
                amount
            }
        }
    }
`

export default GET_PRODUCT_BY_ID