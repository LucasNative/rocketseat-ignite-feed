import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { PostProps } from "./components/Post"

import "./global.css";
import style from "./App.module.css";


interface Posts extends PostProps {
  id:number
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/LucasNative.png",
      name: "Lucas Daniel",
      role: "Front-end Dev"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-07-20 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/rafael-santos.png",
      name: "Rafael Santos",
      role: "Sr Product Manager"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      { type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-07-22 13:30:00")
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
