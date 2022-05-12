import React from 'react';
import { useNavigate } from 'react-router-dom';

const RepoCard = ( { name, forks, url, stargazers, language, visibility, subscribe, branch, login } ) => {

    const navigate = useNavigate();
    
    function handleClick() {
        navigate(-1);
    }

    return (
        <>
            <div className="jumbotron text-center" id="title">
                <h1 id="titleH1">{name}</h1>
            </div>
            <div className="jumbotron text-center" id="title">
                <h2 >({login})</h2>
            </div>
            <br/>
            <div className="container">                
                <div className="card">
                <div className="card-body" id="cardBody">                    
                    <p id="cardInfo">URL: <br/><a target='_blank' href={url}><span id="cardSpanLink">{url}</span></a></p>
                    <p id="cardInfo">Default Branch: <br/><span id="cardSpan">{branch}</span></p>                    
                    <p id="cardInfo">Language: <br/><span id="cardSpan">{language}</span></p>
                    <p id="cardInfo">Forks: <br/><span id="cardSpan">{forks}</span></p>
                    <p id="cardInfo">Visibility: <br/><span id="cardSpan">{visibility}</span></p>
                    <p id="cardInfo">Stargazers: <br/><span id="cardSpan">{stargazers}</span></p>                     
                    <p id="cardInfo">Subscribers: <br/><span id="cardSpan">{subscribe}</span></p>                    
                    <button id="cardBtn" onClick={handleClick}>Back</button>
                </div>
                </div>
           </div>               
        </>
    )
}

export default RepoCard;