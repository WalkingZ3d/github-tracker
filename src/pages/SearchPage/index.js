import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';

const SearchPage = () => {

    const [inputValue, setInputValue] = useState("");
    const [submitValue, setSubmitValue] = useState("");
    const [RepoData, setRepoData] = useState([]);
    const [page, setPage] = useState(1);
    const [reposCount, setReposCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (submitValue.length > 0) {
            async function searchApi2(searchString) {
                try {
                    const {data} = await axios.get(`https://api.github.com/users/${searchString}/repos?sort=created`);
                    setReposCount(data.length)
                    document.getElementById('searchH2').textContent = `${data[0].owner.login}'s Public Repositories`;
                    document.getElementById('pageBtnOutput').style.display = 'block';
                } catch (err) {
                    console.error(err);
                }        
            }    
            searchApi2(submitValue);
            async function searchApi(searchString) {
            try {
                let xd = reposCount
                const {data} = await axios.get(`https://api.github.com/users/${searchString}/repos?sort=created&per_page=5&page=${page}`);
                if(data.length === 0){
                    console.log("nope")
                    setPage(prev => prev - 1)
                }  
                // if(page < pages){
                //     console.log("nope")
                //     setPage(prev => prev - 1)
                // } 
                let pages = xd/5
                const repoNames = data.map(b => b.name);                              
                setRepoData(repoNames);
                if (page === pages && page > 0) {
                    document.getElementById('searchH2').textContent = `${data[0].owner.login}'s Public Repositories`;
                      
                }     
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
        
    }, [submitValue, page]);

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);        
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitValue(inputValue);
        setInputValue("");
        document.getElementById('pageBtnOutput').style.display = 'none';
        setPage(1);
    }

    function renderRepos() {
        //return RepoData.map((s, i) => <li key={i} onClick={() => { navigate (`/${s.owner.login}/${s.name}` )}} id='reposList'>{s.name}</li>)   
        return RepoData.map((s, i) => <li key={i} onClick={() => { navigate (`/about` )}} id='reposList'>{s}</li>)
    }

    async function handleClickNext(){
        setPage(prev => prev + 1)
    }

    async function handleClickPrevious(){
        if (page > 1) {
            setPage(prev => prev - 1)
        } else {
            console.log("cant go below page 1!")
        }
        
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
                        <h2 id='searchH2'></h2>
                        <br/>
                    </div>
                </div>
            </div>
            <div className="container-fluid justify-content-center text-center" id="xd">
                <ul id='output'>{ renderRepos() }</ul>
            </div>
              
            <div className="container-fluid  justify-content-center text-center" id='pageBtnOutput'>     
                <div className="row" >
                    <div className="col-sm-4" >
                        <button id='pageBtn' onClick={handleClickPrevious}>Prev Page</button>
                    </div>
                    <div className="col-sm-4" >
                        <h4 id="pageCounter">Current Page: {page}</h4>    
                    </div>
                    <div className="col-sm-4" >
                        <button id='pageBtn' onClick={handleClickNext}>Next Page</button>   
                    </div>
                </div>
                </div>   
            </>
    )
}

export default SearchPage;