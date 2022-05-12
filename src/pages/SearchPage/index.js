import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SearchPage = () => {

    const [inputValue, setInputValue] = useState("");
    const [submitValue, setSubmitValue] = useState("");
    const [RepoData, setRepoData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (submitValue.length > 0) {
           async function searchApi(searchString) {
            try {
                const {data} = await axios.get(`https://api.github.com/users/${searchString}/repos?sort=created`);
                console.log("data: ", data[0].owner.login);
                setRepoData(data);
                document.getElementById('searchH2').textContent = `${data[0].owner.login}'s Public Repositories`;
                document.getElementById('output').style.display = 'block';                
            } catch (err) {
                console.error(err);
            }            
        }
        searchApi(submitValue); 
        } else {
            document.getElementById('searchH2').textContent = "Enter a valid GitHub username above to see their repositories";
            document.getElementById('output').style.display = 'none';
        }    

    }, [submitValue]);

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitValue(inputValue);
        setInputValue("");
    }

    function renderRepos() {
        return RepoData.map((s, i) => <li key={i} onClick={() => { navigate (`/${s.owner.login}/${s.name}` )}} id='reposList'>{s.name}</li>)   
    }

    return (
            <>
            <div className="jumbotron text-center" id="title">
                <h1 id="titleH1">Search by GitHub Username:</h1>
                <br/>
                <form onSubmit={handleSubmit}>
                        <input id='searchInpHome' type="text" onChange={handleInput} value={inputValue} placeholder="Enter GitHub username"></input>
                        <button id='searchBtn' type="submit">Search</button>
                    </form>
                <br/>
            </div>
            <br/>
            <div className="container-fluid justify-content-center text-center" id="x">
            <div className="row ">
                <div className="col-sm-12 ">
                    <h2 id='searchH2'>Repositories</h2>
                    <br/>
                </div>
            </div>
        </div>
            <div className="container-fluid justify-content-center text-center" id="xd">
                <ul id='output'>{ renderRepos() }</ul>
            </div>
            </>
    )
}

export default SearchPage;