import Head from "next/head";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              voluptates distinctio explicabo dicta est nihil enim, maiores
              rerum obcaecati eaque consequatur fuga tempora repellendus
              exercitationem quas ratione! Praesentium, minus.
            </p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              voluptates distinctio explicabo dicta est nihil enim, maiores
              rerum obcaecati eaque consequatur fuga tempora repellendus
              exercitationem quas ratione! Praesentium, minus.
            </p>
          </a>
          <a href="">
            <time>12 de marco de 2021</time>
            <strong>Creating a Monorepo with Lerna</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aut
              voluptates distinctio explicabo dicta est nihil enim, maiores
              rerum obcaecati eaque consequatur fuga tempora repellendus
              exercitationem quas ratione! Praesentium, minus.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
