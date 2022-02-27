import TableColaboradores from "../src/components/tableColaboradores/table_colaboladores";
import Topnav from "../src/components/topnav/topnav";
import Sidebar from "../src/components/sidebar/sidebar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import TableMobileColaboradores from "../src/components/table_colaboradores_mobile/table_mobile_colaboradores";


export default function Home() {

    return (
        <div>

            <Head>
                <title>Pedido Pago | Home</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Topnav />
            <div className={styles.divprincipal}>
                <Sidebar />
                <div className={styles.container}>
                    <div className={styles.h1}>
                        <h1>Organização</h1>
                    </div>
                    <div className={styles.table_desktop}>
                        <TableColaboradores />
                    </div>
                    <TableMobileColaboradores />
                </div>
            </div>
        </div>
    )
};