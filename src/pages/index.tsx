import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql, StaticQueryDocument } from "gatsby"

import HomeLink from "../components/HomeLink"
import MissingList from "../components/MissingList"

const MissingListPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main className="md:container md:mx-auto">
      <HomeLink />
      <MissingList list={data.allContentfulPersonaExtraviada.edges} />
    </main>
  )
}

export default MissingListPage

export const Head: HeadFC = () => <title>Acapulco SOS</title>

export const data: StaticQueryDocument = graphql`
query MissingQuery {
  allContentfulPersonaExtraviada {
    edges {
      node {
        contentful_id
        celular
        nombres
        municipio
        foto {
          id
          file {
            url
            fileName
            contentType
          }
        }
        encontrado
        fechaDeReporte
      }
    }
  }
}
`
