import "./App.css";
import { useState } from "react";

function App({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="card">
      <header className="card-header">
        <img
          className="card-img"
          src={`https://unavatar.io/${userName}`}
          alt="Foto de perfil"
        />
        <section className="card-info">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </section>
      </header>
      <aside className="card-actions">
        <button className="card-button" onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}

export default App;
