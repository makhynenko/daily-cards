declare module '*.gql' {
  import { DocumentNode } from 'apollo-boost'

  const value: DocumentNode
  // @ts-ignore
  export default value
}
