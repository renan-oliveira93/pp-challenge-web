import styles from '../../../styles/Home.module.css';

export default function Topnav() {
    return (
        <div className={styles.topnav}>
            <img src='\assets\pp.png'></img>
            <div className={styles.avatar_field}>
                <button>LZ</button>
                <div className={styles.avatar_descricao}>
                    <h4>Luiz Zlochevsky</h4>
                    <p>meus dados</p>
                </div>
            </div>
        </div>
    )
};