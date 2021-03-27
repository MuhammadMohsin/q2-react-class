import {useEffect, useState} from 'react';

function About() {

    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://reqres.in/api/users?page=2");
            const result = await response.json();
            console.log(result?.data);

            setUsers(result?.data);
        }
        getData();
    })

    return (
        <div>
            <p>{JSON.stringify(users)}</p>
        </div>
    )
}

export default About;