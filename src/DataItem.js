import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card, Typography, Button, CardActions, Box, IconButton } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CardContent from '@mui/material/CardContent';


const DataItem = () => {
  const id = useParams().id;
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function fetchTodo() {

      await fetch(`https://dummyjson.com/todos/${id}`)
        .then((response) => response.json())
        .then((data) => setTodo(data))
        .catch(err => console.log(err));
    }
    console.log(todo)
    fetchTodo();
  }, [id]);
  return (
    todo ? <Box display="grid" gap={2}>
      <Card sx={{ maxWidth: "50%", margin: 2 }} gridcolumn="span 4">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Todo Details
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ID: {todo.id}
          </Typography>
          <Typography marginTop={1} variant="body2" color="text.secondary">
            Task📎: {todo.todo}
          </Typography>
          <Box display="flex" gap={1}>
            <Typography marginTop={1} variant="body2" color="text.secondary">Completed:</Typography>
            <IconButton > {
              todo.completed
                ? <CheckRoundedIcon sx={{ color: "green" }} />
                : <CloseRoundedIcon sx={{ color: "red" }} />
            }
            </IconButton>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
    </Box> : <Box></Box>
  )
}

export default DataItem