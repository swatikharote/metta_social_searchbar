import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import _ from 'lodash';

export const Search = ({ getCountries }) => {
    const [text, setText] = useState('');

    useEffect(() => {
        // took a reference
        // added for debouncing 
        const delayedSearch = _.debounce((inputText) => {
            if (inputText === '') {
                getCountries([]);
                return;
            }
            axios
                .get(`https://restcountries.com/v3.1/currency/${inputText}`)
                .then((resp) => getCountries(resp.data))
                .catch(() => {
                    console.log('Error');
                    getCountries([]);
                });
        }, 500);

        if (text !== '') {
            delayedSearch(text);
        } else {
            getCountries([]);
        }

        return () => {
            delayedSearch.cancel();
        };
    }, [text]);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <Stack spacing={4} className='search'>
            <InputGroup>
                <InputLeftAddon>
                    <SearchIcon />
                </InputLeftAddon>
                <Input className='input' type='text' onChange={handleChange} placeholder='Search by currency INR, EUR' />
            </InputGroup>
        </Stack>
    );
};
