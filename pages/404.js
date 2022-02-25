import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Page404() {
    return (
        <div className={styles.page404}>
            <h1>Page not found !</h1>
            <Link href='./'><a>voltar a Home Page</a></Link>
        </div>
    )
}