import style from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img
        className={style.cover}
        src="https://images.unsplash.com/photo-1579397256979-cc326aefe273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={style.profile}>
        <Avatar src="https://github.com/LucasNative.png" />
        <strong>Lucas Daniel</strong>
        <span>Web Dev</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
