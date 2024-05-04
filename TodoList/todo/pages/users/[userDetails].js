import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import Modals from '../../components/Modal';
import AddUser from '../../pages/index';
import User from '../../components/User'
import { TrashIcon } from '@heroicons/react/solid';
import axios from "axios";

function userDetails() {
    const router = useRouter();
    const _id = router.query.userDetails;
    const [userinfo, setUserinfo] = useState({})
    const [edited, setEdited] = useState(false)


    useEffect(() => {
        if (_id) {
            userInfo(_id)
            setEdited(true)
        }
    }, [_id]);
    const userInfo = async (_id) => {
        const res = await axios.get(`http://localhost:3000/api/hello/?_id=${_id}`);
        setUserinfo(res.data);
    }
    const onDeleteUser = async () => {
        try {
            const res = await axios.delete(`http://localhost:3000/api/hello/?_id=${_id}`, {
              headers: {
                'Content-type': 'application/json',
              },
            });
            if (res.status === 200) {
                router.push('/users');
            } 
          } catch (err) {
            console.error('Server Error:', err);
          }
    }
    return (
        <div className=" h-[508px] flex flex-col items-center justify-center bg-gradient-to-r from-cyan-200 to-blue-400">
            <div className="bg-white flex flex-col items-center justify-center w-2/5 h-60 rounded shadow-2xl ">
                <User user={userinfo} />
                <div className="flex">
                    <Modals openModal={() => <AddUser data={userinfo} edited={edited} />} />
                    <button onClick={onDeleteUser}><TrashIcon className="w-6 h-6 text-red-500" /></button>
                </div>
            </div>
        </div>
    )
}

export default userDetails
