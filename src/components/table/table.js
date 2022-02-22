import React,{useState,useEffect} from "react";
import styles from '../../../styles/Home.module.css';
import api from '../../../pages/api/api'



export default function Table ()  {
    const [colaboradores, setColaboradores] = useState(['']);
    
    useEffect (() => {
        api.get("./").then(({ data }) => {
            setColaboradores(data)});
        console.log(colaboradores);
    }, []); 
    
     
    
    return(
        <div>
            <h1>Organização</h1>
            <input type="search"/>
            <table className={styles.table}>
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
                        {colaboradores.items && colaboradores.items.map(coluna =>
                        {return <tr key={coluna.agent_id}>
                                                     
                            <td><img  src={coluna.image} width='32' height='32' />{coluna.name}</td>
                            <td>{coluna.department}</td>
                            <td>{coluna.role}</td>
                            <td>{coluna.branch}</td>
                            <td>{coluna.status}</td>
                            </tr>
                        })}
                         
                    </tbody>
                
            </table>
        </div>
    )
};