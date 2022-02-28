import styles from '../../../styles/Home.module.css';

export default function ShowHide() {
    function handleClick() {
        var hide = document.getElementById('hide_part');
        if (hide.style.display === 'none') { hide.style.display = 'block'; }
        else { hide.style.display = 'none'; }
    }
    return (
        <div>
            <button className={styles.bt_drop} onClick={handleClick}><img src="/assets/seta_baixo.png" width='4rem' height='4rem'></img></button>
        </div>
    )
}