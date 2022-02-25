import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import Link from "next/link";
import apiRoles from "../../../pages/api/api_roles";



export default function Table() {
    const [cargos, setCargos] = useState(['']);

    useEffect(() => {
        apiRoles.get("./").then(({ data }) => {
            setCargos(data)
        });
        console.log(cargos);
    }, []);

    const handleChange = (event) => {
        event.preventDefault()
    };

    return (
        <div>
            <div className={styles.table}>


                <div className={styles.nav}>
                    <Link href='./'><button onChange={handleChange} type="radio" aria-checked='false'>Colaboladores</button></Link>
                    <Link href='./cargos'><button onChange={handleChange} type="radio" aria-checked='true'>Cargos</button></Link>
                </div>

                <fieldset className={styles.fieldset}>
                    <legend>Pesquisar por</legend>
                    <input className={styles.input} type="search" placeholder="Pesquisar por cargos" />
                </fieldset>


                <h2>Listagem de cargos</h2>

                <table className={styles.lista}>
                    <thead>
                        <tr>

                            <th scope="col">Cargo</th>
                            <th scope="col">Departamento</th>
                            <th scope="col">Colaboladores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cargos.roles && cargos.roles.map(coluna => {
                            return <tr key={new Date().getMilliseconds()}>
                                <td className={styles.td}>{coluna.name}</td>
                                <td>{coluna.departament}</td>
                                <td>{coluna.agents_quantity}</td>
                                <td><Link href='./permissoes'><img src="/assets/menu.png" height="24" width="24" /></Link></td>
                            </tr>
                        })}

                    </tbody>

                </table>
            </div>

        </div>
    )
};