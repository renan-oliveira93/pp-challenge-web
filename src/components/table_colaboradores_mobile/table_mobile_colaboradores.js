import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import apiAgents from "../../../pages/api/api_agents";
import DropdownMenuResp from "../dropdown_menu_resp/dropdown_menu_resp";
import Dropdown_colaboradores from "../dropdown_colaboradores/dropdown_colaboradores";



export default function TableMobileColaboradores() {
    const [colaboradores, setColaboradores] = useState(['']);

    useEffect(() => {
        apiAgents.get("./").then(({ data }) => {
            setColaboradores(data)
        });
        console.log(colaboradores);
    }, []);

    return (
        <div className={styles.pg_mobile}>

            <div className={styles.h1_mobile}>
                <h1>Colaboradores</h1>
            </div>

            <div className={styles.table_mobile}>

                <div className={styles.nav_mobile}>
                    <div className={styles.dropdown_colaboradores}>
                        <Dropdown_colaboradores />
                    </div>

                    <fieldset className={styles.fieldset}>
                        <legend>Pesquisar por</legend>
                        <img src="/assets/search.png" width='20px' />
                        <input className={styles.input} type="search" placeholder="Pesquise por nome ou cpf" />
                    </fieldset>
                </div>

                <div className={styles.h2}>
                    <h2>Listagem de colaboradores</h2>
                </div>

                <div className={styles.lista_mobile}>
                    {colaboradores.items && colaboradores.items.map(coluna => {
                        return <ul className={styles.list_ul} key={coluna.agent_id}>
                            <li className={styles.li_principal}>
                                <div className={styles.nome}>
                                    <img className={styles.avatar_img} src={coluna.image} />
                                    <div className={styles.descricao_div_principal}>
                                        <p>Nome completo</p>
                                        {coluna.name}
                                    </div>
                                </div>
                                <div className={styles.list_dropdown}>
                                    <img src="/assets/seta_baixo.png" />
                                </div>

                            </li>

                            <div className={styles.hide_part}>

                                <div className={styles.hide_list}>

                                    <li><p className={styles.hide_list_p}>Departamento</p>{coluna.department}</li>

                                    <li><p className={styles.hide_list_p}>Cargo</p>{coluna.role}</li>

                                    <li><p className={styles.hide_list_p}>Unidade</p>{coluna.branch}</li>

                                    <li><p className={styles.hide_list_p}>Status</p>{coluna.status}</li>

                                </div>
                                <div className={styles.acoes}>
                                    <DropdownMenuResp />
                                </div>

                            </div>

                        </ul>
                    })}
                </div>

            </div>
        </div>
    )
};