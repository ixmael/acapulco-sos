import * as React from "react"

import Row, { Missing } from "./row"

const List: React.FC<any> = (props: any) => {
    const {
        list,
    } = props;

    return (
        <div className="missing-list">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Listado de personas extraviadas
            </h2>
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            Reportado
                        </th>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            Nombres
                        </th>
                        <th scope="col" className="border border-slate-300">
                            Celular
                        </th>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            Municipio
                        </th>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            Imágenes
                        </th>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            Encontrado
                        </th>
                        <th scope="col" className="border border-slate-300 px-6 py-3">
                            &nbsp;
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((missing: Missing) => (
                        <Row key={missing.node.contentful_id} missing={missing.node} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List
