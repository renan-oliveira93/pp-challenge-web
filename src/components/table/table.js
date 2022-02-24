import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import api from '../../../pages/api/api'
import Link from "next/link";



export default function Table() {
    const [colaboradores, setColaboradores] = useState(['']);

    useEffect(() => {
        api.get("./").then(({ data }) => {
            setColaboradores(data)
        });
        console.log(colaboradores);
    }, []);



    return (
        <div>
            <div className={styles.container}>

                <div className={styles.h1}>
                    <h1>Organização</h1>
                </div>

                <div className={styles.table}>


                    <div className={styles.nav}>
                        <Link href='./'><button type="radio" aria-checked>Colaboladores</button></Link>
                        <Link href='./cargos'><button>Cargos</button></Link>
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
        </div>
    )
};