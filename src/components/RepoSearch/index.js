import React, { useState } from 'react';

function RepoSearch({ getResult }) {

    const [ name, setName ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(name);
        setName("");
    }

    const updateInput = e => {
        const input = e.target.value 
        setName(input)
    }

    // add an onChange and a label
    return (
        <form onSubmit={handleSubmit} role="form"> 
            <input type="text" id='searchInp' name='searchInp' onChange={updateInput}/>
            <input type="submit" value="Search" />
        </form>
    );
};

export default RepoSearch;
