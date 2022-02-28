import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import apiRoles from "../../../pages/api/api_roles";
import TemporaryDrawer from "../dropdown_mobile/dropdown_mobile";
import ShowHide from "../show_hide_list/show_hide_list";
import TemporaryDrawerCargos from "../dropdown_menu_resp_cargos/deopdown_menu_resp_cargos";



export default function TableMobileCargos() {
    const [cargos, setCargos] = useState(['']);

    useEffect(() => {
        apiRoles.get("./").then(({ data }) => {
            setCargos(data)
        });
        console.log(cargos);
    }, []);

    return (
        <div className={styles.pg_mobile}>

            <div className={styles.h1_mobile}>
                <h1>Colaboradores</h1>
            </div>

            <div className={styles.table_mobile}>

                <div className={styles.nav_mobile}>
                    <div className={styles.dropdown_colaboradores}>
                        <TemporaryDrawer />
                    </div>

                    <fieldset className={styles.fieldset}>
                        <legend>Pesquisar por</legend>
                        <img src="/assets/search.png" width='20px' />
                        <input className={styles.input} type="search" placeholder="Pesquise por nome ou cpf" />
                    </fieldset>
                </div>

                <div className={styles.h2}>
                    <h2>Listagem de cargos</h2>
                </div>

                <div className={styles.lista_mobile}>
                    {cargos.roles && cargos.roles.map(coluna => {
                        return <ul className={styles.list_ul} key={new Date().getMilliseconds()}>
                            <li className={styles.li_principal_cargos}>
                                <div className={styles.descricao_div_principal}>
                                    <p>Cargo</p>
                                    {coluna.name}
                                </div>
                                <div className={styles.list_dropdown}>
                                    <ShowHide />
                                </div>
                            </li>

                            <div >
                                <div id="hide_part">

                                    <div className={styles.hide_list}>

                                        <li><p className={styles.hide_list_p}>Departamento</p>{coluna.department}</li>

                                        <li><p className={styles.hide_list_p}>Colaboradores</p>{coluna.agents_quantit}</li>

                                    </div>
                                    <div className={styles.acoes}>
                                        <TemporaryDrawerCargos />
                                    </div>

                                </div>

                            </div>

                        </ul>
                    })}
                </div>

            </div>
        </div>
    )
};