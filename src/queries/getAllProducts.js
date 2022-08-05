import { gql } from '@apollo/client'

const GET_ALL_PRODUCTS = gql`
    query {
        categories {
            name
            products {
                id
                name
                inStock
                gallery
                prices {
                    currency {
                        symbol
                    }
                    amount
                }
            }
        }
    }
`

export default GET_ALL_PRODUCTS