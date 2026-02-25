import { useState } from 'react';
export function TwitterFollowCard({ children, userName = 'uknown', initialIsFollowing }) {
    /**
     * useState es un hook que nos permite añadir el estado de React a un componente funcional.
     * El componente se vuelve a renderizar cada vez que se actualiza el estado, lo que nos permite mostrar la información actualizada en la interfaz de usuario.
     * El hook useState devuelve un array con dos elementos: el valor actual del estado y una función para actualizarlo.
     */
    const [isFollowingState, setIsFollowing] = useState(initialIsFollowing)

    /**
     * En este caso, el estado isFollowing se inicializa con el valor que se pasa como prop al componente. 
     * La función setIsFollowing se utiliza para actualizar el estado cuando el usuario hace clic en el botón de seguir 
     * o dejar de seguir. El texto del botón y su clase CSS se actualizan en función del estado actual de isFollowing.
     */
    const text = isFollowingState ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowingState ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const imageSrc = `https://unavatar.io/${userName}`

    /**
     * El manejador de eventos handleClick se encarga de cambiar el estado de isFollowing cada vez que se hace clic en el botón.
     */
     const handleClick = () => {
        setIsFollowing(!isFollowingState)
    }
    /**
     * En el JSX, se muestra la información del usuario (nombre y nombre de usuario) y 
     * un botón que permite al usuario seguir o dejar de seguir.
     */
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className= 'tw-followCard-avatar' alt = 'Avatar auronplay' src = {imageSrc}/>
                <div className = 'tw-followCard-info'>
                   <strong>{children}</strong>
                   <span className="tw-followCard-infoUsername">@{userName}</span>
                </div>
            </header>

            <aside>
                <div>
                    <button className={buttonClassName} onClick={handleClick}>
                        <span className = 'tw-followCard-text'>{text}</span>
                        <span className='tw-followCard-unfollow'>Dejar de seguir</span>
                    </button>
                    
                </div>
            </aside>
                
                
        </article>
    )
}