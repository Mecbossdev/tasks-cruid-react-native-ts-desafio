import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const PostsContext = createContext({})

function PostsProvider({children}) {

    
    const [tasks, setTasks] = useState([]);
    const [myTasks, setMyTasks] = useState([]);
    const [favTasks, setFavTasks] = useState([]);
    const [max, setMax] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTasks();
        return () => {
            setTasks([]);
          };
    }, []);

    useEffect(() => {
        if(max > 10 && max <= 100) {
            getMoreTasks()
        }
    }, [max])
    
    function getTasks() {
        api.get('/posts').then(response => {
            setTasks(response.data.slice(0, max));
        })
    }
    
    async function getMoreTasks() {
        setLoading(true);
        await api.get('/posts').then(response => {
            const newTasks = response.data.slice(tasks.length, max);
            setTasks([...tasks, ...newTasks]);
        })
        setLoading(false);
    }

    return (
        <PostsContext.Provider 
            value={{
                tasks, 
                setTasks, 
                myTasks, 
                setMyTasks, 
                favTasks, 
                setFavTasks, 
                max, 
                setMax, 
                loading
                }}
        >
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider;