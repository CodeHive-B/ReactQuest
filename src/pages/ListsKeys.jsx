import {useState, useEffect} from "react"

const users = ["Felipe", "Hellen", "Liz", "Buddy"]

const equipments = [
    { id: 1, name: "Lofree" },
    { id: 2, name: "NuPhy" },
    { id: 3, name: "Apple" },
]

const ListsKeys = () => {
    const [ apiUsers, setApiUsers ] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => { setApiUsers(data) })
    }, [])

    return (
        <div>  
            <h1>List & Keys Let's make it</h1>
            <table style={{ width: '100%'}}>
                <tr style={{ backgroundColor: "slategray"}}>
                    <td><b>People</b></td>
                </tr>
                { users.map((user, index) => (<tr><td key={index}>{user}</td></tr>)) }
                <tr style={{ backgroundColor: "slategray"}}>
                    <td><b>Equipments</b></td>
                </tr>
                {equipments.map((equipment, index) => (<tr><td key={index}>{equipment.name}</td></tr>))}
                <tr style={{ backgroundColor: "slategray"}}>
                    <td><b>API Users</b></td>
                </tr>
                {apiUsers.map((apiUser, index) => (<tr><td key={index}>{apiUser.name}</td></tr>))}
            </table>   
            
        </div>
    );
}

export default ListsKeys;