import React,{ useEffect } from 'react';

export default function ({ result }) {    
    return (
        <section>
                 <div className="jumbotron text-center" id="title">
                 <p>{result.name}</p>
                 <br/>
             </div>               
        </section>
    )
}
