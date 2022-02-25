import styles from '../../../styles/Home.module.css';

export default function Table_permissoes() {
    return (
        <div className={styles.table}>

            <h2>Dados do cargo</h2>

            <div className={styles.permissoes_dados}>

                <fieldset>
                    <legend>Departamento</legend>
                    <p>SAC</p>
                </fieldset>

                <fieldset>
                    <legend>Cargo</legend>
                    <p>Analista</p>
                </fieldset>
            </div>

            <h2>Listagem de permissões</h2>

            <table className={styles.lista}>
                <thead>
                    <tr>
                        <td>Cargo</td>
                        <td>Ler</td>
                        <td>Editar</td>
                        <td>Excluir</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Pedidos</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>


                </tbody>
            </table>


        </div>
    )
};