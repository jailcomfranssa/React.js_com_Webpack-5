import React from 'react'
interface RepositoryItemProps{
    repository: {
        name: String;
        description: String;
        html_url: String;
    }

}

export const RepositoryItem = (props: RepositoryItemProps) => {
    return (
        <li>
            <strong>{props.repository?.name ?? "Default"}</strong>
            <p>{props.repository?.description ?? "Aguardando.."}</p>
            <a href={props.repository?.html_url ?? ""}> Acessar repositorio</a>
        </li>
        
    )
}
