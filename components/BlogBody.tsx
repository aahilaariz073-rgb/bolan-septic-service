import type { BlogBlock } from "@/lib/blog-data";
import styles from "./BlogBody.module.css";

export default function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className={styles.body}>
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className={styles.h2}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className={styles.ul}>
              {block.items.map((item) => (
                <li key={item} className={styles.li}>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className={styles.p}>
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
