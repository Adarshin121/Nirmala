import { Table, TableBody, TableCell, TableContainer, TableHead } from '@mui/material'
import axios from 'axios';
import React, { useState,useEffect } from 'react'

const Displayapi = () => {
    var[user,setuser]=useState([]);
        // useEffect(()=>{} ,[])
        useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>{
            console.log(response.data)
            setuser(response.data);
    })

        } ,[])
    

  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>name</TableCell>
                    <TableCell>username</TableCell>
                    <TableCell>city</TableCell>
                </TableHead>
                {/* {user.map((val,i)=>{
                        return()})} */}
            {user.map((val,i)=>{
                        return(
                            <TableBody>
                                <TableCell key={i}>{val.name}</TableCell>
                                <TableCell key={i}>{val.username}</TableCell>
                                <TableCell key={i}>{val.address.city}</TableCell>

                            </TableBody>
                        )})}
                
            </Table>
        </TableContainer>
    </div>
  )
}

export default Displayapi