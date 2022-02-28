import TableCargos from "../src/components/tableCargos/tableCargos";
import Topnav from "../src/components/topnav/topnav";
import Sidebar from "../src/components/sidebar/sidebar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import TableMobileCargos from "../src/components/table_mobile_cargos/table_mobile_cargos";



export default function Cargospg() {

    return (
        <div>
            <Head>
                <title>Pedido Pago | Cargos</title>
            </Head>
            <Topnav />
            <div className={styles.divprincipal}>
                <Sidebar />
                <div className={styles.container}>
                    <div className={styles.h1}>
                        <h1>Organização</h1>
                    </div>
                    <div className={styles.table_desktop}>
                        <TableCargos />
                    </div>
                    <TableMobileCargos />
                </div>

            </div>

        </div>
    )
};