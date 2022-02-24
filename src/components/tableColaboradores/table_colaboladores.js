import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import Link from "next/link";
import apiAgents from "../../../pages/api/api_agents";

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
        <div>
            <div className={styles.table}>


                <div className={styles.nav}>
                    <Link href='./'><button onChange={handleChange} type="radio" aria-checked='true'>Colaboladores</button></Link>
                    <Link href='./cargos'><button onChange={handleChange} type="radio" aria-checked='false'>Cargos</button></Link>
                </div>

                <fieldset className={styles.fieldset}>
                    <legend>Pesquisar por</legend>
                    <input className={styles.input} type="search" placeholder="Pesquisar por nome ou cpf" />
                </fieldset>


                <h2>Lista de colaboradores</h2>

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
                            return <tr key={coluna.agent_id}>

                                <td className={styles.td}><img src={coluna.image} width='32' height='32' />{coluna.name}</td>
                                <td>{coluna.department}</td>
                                <td>{coluna.role}</td>
                                <td>{coluna.branch}</td>
                                <td>{coluna.status}</td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>

        </div>

    )
};