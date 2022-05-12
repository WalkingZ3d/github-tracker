import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import RepoCard from '../../components/RepoCard';


const ResultsPage = () => {
    
    const { name, login } = useParams();
    const [RepoData, setRepoData] = useState({});

    useEffect(() => {

        async function getRepoData(name) {
            try {
                const {data} = await axios.get(`https://api.github.com/repos/${login}/${name}`);
                console.log("apiCallResult: ", data.owner.login);
                setRepoData(data);
            } catch (err) {
                console.error(err)
            }
        }
        getRepoData(name);

    }, [name])

    return ( 
        <>
            <RepoCard name={RepoData.name} forks={RepoData.forks} url={RepoData.html_url} stargazers={RepoData.stargazers_count} language={RepoData.language} visibility={RepoData.visibility} subscribe={RepoData.subscribers_count} branch={RepoData.default_branch} login={login}/>
            
            <br/>
            <br/>
               
        </>
        
    )
           
}


export default ResultsPage;