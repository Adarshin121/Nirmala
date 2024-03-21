import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';


const Showdbdata = () => {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3001/students")
            .then((response)=>{
                console.log(response.data)
                setStudents(response.data);
            })
    }, []);


//Delete Function
    const handleDelete = (id) => {
        // Send a DELETE request to the server to delete the student with the specified ID
        axios.delete(`http://localhost:3001/students/${id}`)
            .then((response) => {
                console.log("Student deleted successfully:", id);
                // Filter out the deleted student from the students array
                setStudents(students.filter(student => student.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting student:", error);
            });
    };


  return (
    <div>
        <h1>Students List</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Mark</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.id}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.age}</TableCell>
                                <TableCell>{student.place}</TableCell>
                                <TableCell>
                                
                                        <Button onClick={()=>{navigate(`/${student.id}/edit`)}} variant="outlined" color="primary">Update</Button>
                                    
                                    <Button onClick={() => handleDelete(student.id)} variant="outlined" color="secondary">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
    </div>
  )
}

export default Showdbdata