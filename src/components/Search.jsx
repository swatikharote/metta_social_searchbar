
import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const Search = ({ getCountries }) => {

    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        search();
    }, [text])

    const search = () => {
        if (text == "") {
            getCountries([]);
            return
        }
        axios.get(`https://restcountries.com/v3.1/currency/${text}`).then(
            resp => getCountries(resp.data)
        ).catch(err => {
            console.log("Error")
            getCountries([]);
        })
    }



    return (
        <Stack spacing={4} className='search'>
            <InputGroup>
                <InputLeftAddon>
                    <SearchIcon />
                </InputLeftAddon>
                <Input className='input' type='text' onChange={handleChange} placeholder='Search by currency INR,EUR' />
            </InputGroup>
        </Stack>
    )
}

