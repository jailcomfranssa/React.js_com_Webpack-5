import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link:'https://github.com'
}

export function RespositoryList() {
    return (
        <section className="repository-list">
            <h1>lista de repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>

                <RepositoryItem />

                <RepositoryItem />
                <RepositoryItem />
            </ul>

        </section>
    )
}