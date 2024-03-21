import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';


const EditStudent = () => {
    const  navigate = useNavigate();
    const {id} = useParams();
    const [student, setStudent] = useState(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [place, setPlace] = useState('');

    useEffect(() => {
       console.log("Student Id__________",id);
        axios.get(`http://localhost:3001/students/${id}`)
            .then((response) => {
                setStudent(response.data);
                // Set initial values for the text fields
                setName(response.data.name);
                setAge(response.data.age);
                setPlace(response.data.place);
            })
            .catch((error) => {
                console.error("Error fetching student data:", error);
            });
    }, []);

    const handleUpdate = () => {
        
        // Send updated student data to the server
        axios.put(`http://localhost:3001/students/${id}`, { name, age, place })
            .then((response) => {
                console.log("Student updated successfully:", response.data);
                alert("Student updated successfully!");
                navigate('/');  // Navigates back 


                // You can optionally update the local state after successful update
            })
            .catch((error) => {
                console.error("Error updating student:", error);
            });
    };


    return (
        <div>
            <h1>Edit Student</h1>
            <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
            /><br></br><br></br>
            <TextField
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                margin="normal"
            /><br></br><br></br>
            <TextField
                label="Place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                margin="normal"
            />
            <br></br><br></br>
            <Button onClick={handleUpdate} variant="contained" color="primary">
                Update
            </Button>
        </div>
    );
};

export default EditStudent;
