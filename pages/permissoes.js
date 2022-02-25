import styles from "../styles/Home.module.css";
import Head from 'next/head';
import Topnav from '../src/components/topnav/topnav';
import Sidebar from '../src/components/sidebar/sidebar';
import Link from 'next/link';
import Table_permissoes from "../src/components/tablePermissoes/table_permissoes";

export default function Permissoes_pg() {
    return (
        <div>
            <Head>
                <title>Pedido Pago | Cargos e Permissões</title>
            </Head>
            <Topnav />
            <div className={styles.divprincipal}>
                <Sidebar />
                <div className={styles.container}>
                    <div className={styles.h1_detalhes}>
                        <Link href='./cargos'><a><img src="/assets/voltar.png"></img></a></Link>
                        <h1>Cargos e permissões</h1>
                    </div>
                    <Table_permissoes />
                </div>
            </div>
        </div>
    )
};