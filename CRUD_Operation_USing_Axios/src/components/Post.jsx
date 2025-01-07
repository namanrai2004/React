import React, { useEffect, useState } from 'react';
import { deleteData, get } from '../api/PostApi';

const Post = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await get();
                console.log(res.data);
                setData(res.data);
            } catch (error) {
                console.log(error, "ERROR OCCURRED");
            }
        };
        getData();
    }, []);

    //delete
    const handleDelete = async(id) =>{
        alert("Click OK for Delete")
        const del = await deleteData(id)
        const filters = data.filter((cur) =>{
            
            return cur.id !== id
            
        })
        
        setData(filters)
        console.log(filters);
        

    }
   
 
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center p-4">
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Posts</h1>
                <ul className="space-y-4">
                    {data.map((val) => {
                        return (
                            <li key={val.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                                <span className='font-semibold'>{val.id}</span>
                                <p className="text-lg font-semibold text-gray-900 mb-2 capitalize">{val.title}</p>
                                <p className="text-gray-700 mb-4">{val.body}</p>
                                <div className="flex space-x-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(val.id)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Post;
