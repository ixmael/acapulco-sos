import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

import { graphql, StaticQueryDocument } from "gatsby"

import HomeLink from "../components/HomeLink"

const Missing: React.FC<PageProps> = ({ data }) => {
    let fotoView = (null)
    if (data.contentfulPersonaExtraviada.foto) {
        fotoView = (
            <ul>
                {data.contentfulPersonaExtraviada.foto.map((imageObject: string) => {
                    return (
                        <li key={imageObject.id}>
                            <img src={`https:${imageObject.file.url}`} width="300px" />
                        </li>
                    )
                })}
            </ul>
        )
    }

    const reportedAt = new Date(data.contentfulPersonaExtraviada.fechaDeReporte)

    return (
        <main className="persona-extraviada md:container md:mx-auto">
            <HomeLink />

            <div className="item">
                <div className="key">Personas</div>
                <ul className="value">
                    {data.contentfulPersonaExtraviada.nombres.map((name: string) => <li key={name}>{name}</li>)}
                </ul>
            </div>

            <div className="item">
                <div className="key">Contacto</div>
                {data.contentfulPersonaExtraviada.celular}
            </div>

            <div className="item">
                <div className="key">Encontrada</div>
                <div>{data.contentfulPersonaExtraviada.encontrado ? 'sí' : 'no'}</div>
            </div>

            <div className="item">
                <div className="key">Reporte</div>
                <div>{reportedAt.getDay()}/{reportedAt.getMonth()}/{reportedAt.getFullYear()}</div>
            </div>

            <div className="item">
                <div className="key">Municipio</div>
                <div>{data.contentfulPersonaExtraviada.municipio}</div>
            </div>

            {fotoView}
        </main>
    )
}

export default Missing

export const Head: HeadFC = () => <title>Persona desaparecida</title>

export const data: StaticQueryDocument = graphql`
query ($id: String!) {
contentfulPersonaExtraviada(contentful_id: { eq: $id }) {
    contentful_id
    celular
    nombres
    municipio
    foto {
        id
        file {
            url
        }
    }
    encontrado
    fechaDeReporte
    }
}
`
