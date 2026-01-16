import styles from './Card.module.css';
export function Card({ title, content }: { title: string;
content: string }) {
 return (
 <div className={styles.container}>
 <h2 className={styles.title}>{title}</h2>
 <p>{content}</p>
 </div>
 )
}