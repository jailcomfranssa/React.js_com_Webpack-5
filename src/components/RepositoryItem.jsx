import React from 'react'

export const RepositoryItem = (props) => {
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Aguardando.."}</p>
            <a href={props.repository?.html_url ?? ""}> Acessar repositorio</a>
        </li>
        
    )
}
