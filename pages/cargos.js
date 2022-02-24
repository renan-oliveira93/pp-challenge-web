import Table from "../src/components/table/table";
import Topnav from "../src/components/topnav/topnav";
import Sidebar from "../src/components/sidebar/sidebar";
import styles from "../styles/Home.module.css";



export default function Cargospg() {

    return (
        <div>


            <Topnav />
            <div className={styles.divprincipal}>
                <Sidebar />
                <Table />
            </div>

        </div>
    )
};