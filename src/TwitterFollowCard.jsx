import './App.css';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function TwitterFollowCard({ children, userName, isFollowing: initialIsFollowing }) {
  // Modificamos el estado del botón. Es decir, que cuando le demos click a SEGUIR, cambie de estado (State)
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => { // Funciona como un interruptor.
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="Avatar"
        />

        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}