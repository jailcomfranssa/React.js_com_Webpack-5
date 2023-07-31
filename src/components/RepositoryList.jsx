import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"

import '../styles/repositories.css'

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link:'https://github.com'
}

export function RespositoryList() {

    const [ repositories, setRepositories] = useState([])

    useEffect(() =>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    }, [])

    return (
        <section className="repository-list">
            <h1>lista de repositorios</h1>

            <ul>
                {
                    repositories.map(repository =>{
                        return <RepositoryItem key={repository.name} repository={repository}/>
                    })
                }
            </ul>

        </section>
    )
}