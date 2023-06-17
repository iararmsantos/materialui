import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import DataGridToolbar from './DataGridToolbar';
const columns = [
    { 
        field: 'id', 
        headerName: 'ID', 
        width: 60,
        renderCell: (params) => {
            return (
                <Link 
                    style={{color: "black", textUnderlineOffset: 5}} 
                    to={`/${params.value}`}
                >
                    <Typography>{params.value}</Typography>
                </Link>
            );
        },
    },
    {
        field: 'userId', // hast to be the attribut in the api
        headerName: 'User ID',
        width: 60,
        editable: false,        
    },
    {
        field: 'todo',
        headerName: 'Task',
        width: 400,
        editable: false,
    },
    {
        field: 'completed',
        headerName: 'Completed',
        width: 60,
        editable: true,
        renderCell: (params) => {
            return params.value ? (
                <CheckRoundedIcon sx={{ color: "green"}}/> 
                ) : (
                <CloseRoundedIcon sx={{ color: "red"}}/>
                );            
        },
    },
];
const Data = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTodos() {
            setLoading(true);
            await fetch("https://dummyjson.com/todos")
                .then((response) => response.json())
                .then((data) => setTodos(data.todos))
                .catch(err => console.log(err))
                .finally(() => setLoading(false));
        }
        fetchTodos();
    }, []);
    console.log(todos);
    return (
        <Card sx={{ padding: 5 }}>
            <CardHeader title="Todo List 🛹 ✔️"></CardHeader>
            <DataGrid
                slots={{ toolbar: DataGridToolbar }} 
                loading={loading} 
                sx={{ height: 500 }} 
                columns={columns} 
                rows={todos} />
        </Card>
    )
}

export default Data