import Topnav from "../src/components/topnav/topnav";
import Sidebar from "../src/components/sidebar/sidebar";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import Table_Detalhes_Colaborador from "../src/components/tableDetalhesColaborador/table_detalhes_colaborador";

export default function Detalhes_colaborador_pg() {
    return (
        <div>
            <Head>
                <title>Pedido Pago | Detalhes colaborador</title>
            </Head>
            <Topnav />
            <div className={styles.divprincipal}>
                <Sidebar />
                <div className={styles.container}>
                    <div className={styles.h1_detalhes}>
                        <Link href='./'><a><img src="/assets/voltar.png"></img></a></Link>
                        <h1>Detalhes do colaborador</h1>
                    </div>
                    <Table_Detalhes_Colaborador />
                </div>
            </div>
        </div>
    )
};