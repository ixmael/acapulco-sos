import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const AboutPage: React.FC<PageProps> = () => {
    return (
        <main>
            <h1>
                Acerca de
            </h1>
        </main>
    )
}

export default AboutPage

export const Head: HeadFC = () => <title>Acerca de</title>
