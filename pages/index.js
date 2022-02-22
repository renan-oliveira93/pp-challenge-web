import Table from "../src/components/table/table";


export default function Home() {
   /*  useEffect(() => {
        if (text) {
            axios.get('https://bbbff4e5-200b-406b-9650-e44c68439220.mock.pstmn.io/agents')
                .then(response => (response.json()))
                .then((data) => {
                    setColaboradores(data);
                    console.log(colaboradores)
                });
        };


    }, [text]);  */
        return (
        <div>
           <Table/>
        </div>
    )
}