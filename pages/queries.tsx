import { gql } from '@apollo/client'

export const queriesExampleMutationCreate = gql`
  mutation createProduct($name: String!, $price: String!, $description: String!) {
    createProduct(name: $name, price: $price, description: $description) {
      name
      price
      description
    }
  }
`

export const queriesExampleMutationUpdate = gql`
  mutation updateProduct(
    $id: String!
    $name: String!
    $price: String!
    $description: String!
  ) {
    updateProduct(id: $id, name: $name, price: $price, description: $description) {
      name
      price
      description
    }
  }
`

export const queriesExample = gql`
  query getSingleProduct($id: String!) {
    product(id: $id) {
      name
      price
      description
      image
      isActive
      price
    }
  }
`
export const queriesExampleGetAll = gql`
  query getAllProducts($name: String, $price: String, $description: String) {
    getAllProducts {
      name
      price
      isActive
      description
    }
  }
`

export const queriesAxies = gql`
  query GetAxieBriefList(
    $auctionType: AuctionType
    $criteria: AxieSearchCriteria
    $from: Int
    $sort: SortBy
    $size: Int
    $owner: String
  ) {
    axies(
      auctionType: $auctionType
      criteria: $criteria
      from: $from
      sort: $sort
      size: $size
      owner: $owner
    ) {
      total
      results {
        ...AxieBrief
        __typename
      }
      __typename
    }
  }
  fragment AxieBrief on Axie {
    image
    name

    id
    stage
    class
    breedCount
    title
    battleInfo {
      banned
      __typename
    }
    auction {
      currentPrice
      currentPriceUSD
      __typename
    }
    parts {
      id
      name
      class
      type
      specialGenes
      __typename
    }
    __typename
  }
`
