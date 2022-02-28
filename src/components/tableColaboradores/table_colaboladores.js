import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import Link from "next/link";
import apiAgents from "../../../pages/api/api_agents";
import BasicMenu from "../dropdown_colaboradores/dropdown_colaboradores";
import Dropdown_colaboradores from "../dropdown_colaboradores/dropdown_colaboradores";

export default function TableColaboradores() {
    const [colaboradores, setColaboradores] = useState(['']);

    useEffect(() => {
        apiAgents.get("./").then(({ data }) => {
            setColaboradores(data)
        });
        console.log(colaboradores);
    }, []);

    const handleChange = (event) => {
        event.preventDefault()
    };


    return (
        <div className={styles.table}>

            <div className={styles.nav}>
                <div className={styles.dropdown_colaboradores} ><Dropdown_colaboradores /></div>
                <div className={styles.colaboradores_desktop}>
                    <Link href='./'><button onChange={handleChange} type="radio" aria-checked='true'>Colaboladores</button></Link>
                    <Link href='./cargos'><button onChange={handleChange} type="radio" aria-checked='false'>Cargos</button></Link>
                </div>
            </div>

            <fieldset className={styles.fieldset}>
                <legend>Pesquisar por</legend>
                <img src="/assets/search.png" width='20px' />
                <input className={styles.input} type="search" placeholder="Pesquise por nome ou cpf" />
            </fieldset>


            <h2>Listagem de colaboradores</h2>

            <table className={styles.lista}>
                <thead>
                    <tr>
                        <th scope="col">Nome Completo</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Unidade</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.items && colaboradores.items.map(coluna => {
                        return <tr className={styles.tr_responsivo} key={coluna.agent_id}>

                            <td data-aria-label="Nome Completo" className={styles.td}>
                                <img height="38" width="38" src={coluna.image} />{coluna.name}
                            </td>
                            <td data-aria-label="Departamento" className={styles.td_hide}>{coluna.department}</td>
                            <td data-aria-label="Cargo" className={styles.td_hide}>{coluna.role}</td>
                            <td data-aria-label="Unidade" className={styles.td_hide}>{coluna.branch}</td>
                            <td data-aria-label="Status" className={styles.td_hide}>{coluna.status}</td>
                            <td><BasicMenu /></td>
                        </tr>
                    })}

                </tbody>

            </table>
        </div>

    )
};