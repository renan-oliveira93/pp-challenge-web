import React, { useState, useEffect } from "react";
import styles from '../../../styles/Home.module.css';
import apiAgents1 from "../../../pages/api/api_agents1";

export default function Table_Detalhes_Colaborador() {
    const [colaboradores, setColaboradores] = useState(['']);

    useEffect(() => {
        apiAgents1.get("./1").then(({ data }) => {
            setColaboradores(data)
        });
        console.log(colaboradores);
    }, []);

    return (

        <div className={styles.table}>


            <div className={styles.avatar_detalhes_colaborador}>
                <img src='/assets/user.png' />
                <div>
                    <h3>Mothra Fernandes</h3>
                    <p>email@email.com</p>
                </div>
            </div>


            <div className={styles.info_pessoais}>
                <h3>Informações pessoais</h3>
                <div className={styles.fieldset_info}>

                    <fieldset>
                        <a><img src='/assets/cpf.png'></img></a>
                        <div>
                            <h4>CPF</h4>
                            <p>222 222 222 22</p>
                        </div>
                    </fieldset>

                    <fieldset>
                        <a><img src='/assets/tel.png'></img></a>
                        <div>
                            <h4>telefone</h4>
                            <p>+55 89 2222 2222</p>
                        </div>
                    </fieldset>

                    <fieldset>
                        <a><img src='/assets/data.png'></img></a>
                        <div>
                            <h4>Nascimento</h4>
                            <p>29/11/1990</p>
                        </div>
                    </fieldset>

                </div>

            </div>



            <fieldset className={styles.fieldset_dados}>

                <h3>Dados organizacionais</h3>

                <fieldset className={styles.fieldset_detalhes}>
                    <legend>Departamento</legend>
                    <button>Comercial</button>
                    <img src='/assets/seta_baixo.png'></img>
                </fieldset>

                <fieldset className={styles.fieldset_detalhes}>
                    <legend>Cargo</legend>
                    <button>Gerente</button>
                    <img src='/assets/seta_baixo.png'></img>
                </fieldset>

                <fieldset className={styles.fieldset_detalhes}>
                    <legend>Unidade</legend>
                    <button>Unidade 1</button>
                    <img src='/assets/seta_baixo.png'></img>
                </fieldset>

                <fieldset className={styles.fieldset_detalhes}>
                    <legend>Status</legend>
                    <button>Ativo</button>
                    <img src='/assets/seta_baixo.png'></img>
                </fieldset>

            </fieldset>

        </div>
    )
}