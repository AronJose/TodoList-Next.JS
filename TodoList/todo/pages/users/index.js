import User from "../../components/User";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

function Users() {

    const [user, setUser] = useState([])

    useEffect(() => {
        inputResult()
    }, [])
    const inputResult = async () => {
        const res = await axios.get('http://localhost:3000/api/hello');
        setUser(res.data)
    }
    return (
        <div className="w-full flex items-center justify-center bg-gradient-to-r from-sky-300 to-indigo-200 ">
            <div className="h-[508px] grid grid-cols-3 grid-rows-3 w-[75%] gap-6 ">
            {
                    user.map(user => {
                    return (
                        <div className="bg-gray-200 h-full shadow-2xl  hover:bg-white my-4 rounded-lg">
                            <Link href={`/users/${user._id}`}><User user={user} /></Link>
                           
                       </div>
                    )})
            }
            </div>
        </div>
    )
}

export default Users
