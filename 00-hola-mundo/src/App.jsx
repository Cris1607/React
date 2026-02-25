import { useState } from "react"
import './css/App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
    /*
     * Experimento con el hook useState para cambiar el nombre de usuario en el componente TwitterFollowCard.
     */
    // const  [name, setName] = useState('midudev')

    const users = [
        {
            name: 'Miguel Ángel Durán',
            userName: 'midudev',
            isFollowing: true
        },
        {
            name: 'Pablo Hernández',
            userName: 'pheralb',
            isFollowing: false
        },
        {
            name: 'Elon Musk',
            userName: 'elonmusk',
            isFollowing: false
        },
        {
            name: 'Flama',
            userName: 'ruben',
            isFollowing: false
        }
    ]

    /*
     * En este componente, se renderizan varios componentes TwitterFollowCard con diferentes props para mostrar diferentes usuarios 
     * de Twitter.
     */
    return (
        <section className="App">
            {/* <TwitterFollowCard isFollowing userName={name} >
            <TwitterFollowCard  userName="midudev" initialIsFollowing={true} >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard  userName="pheralb" >
                Pablo Hernández
            </TwitterFollowCard>
            <TwitterFollowCard  userName="elonmusk" >
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard  userName="ruben" >
                Flama
            </TwitterFollowCard> */}
            
            {users.map(({ name, userName, isFollowing }) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>
            ))}
            {/* Botón para cambiar el nombre de usuario en el primer componente TwitterFollowCard.
            <button onClick = {() => setName('pedromichel')}> 
                Cambiar nombre
            </button> */}
        </section>
    );
}
