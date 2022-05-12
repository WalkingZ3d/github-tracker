import React from 'react';

const AboutPage = () => {

    const times = (times) => {
        const arr = [];
        for (let i = 0; i < times; i++){
            arr.push(i)
        }
        return arr.map((s, i) => <div key={i} className="container-fluid justify-content-center text-center" id="x">
                                    <div className="row ">
                                        <div className="col-sm-12 ">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis adipisci amet pariatur inventore quae, perspiciatis excepturi nesciunt! Fuga quibusdam deleniti sed adipisci amet tenetur veritatis facilis ex? Quisquam, quae omnis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ratione, deserunt, sapiente voluptas impedit repudiandae aliquid quaerat officia nam porro, nihil cumque exercitationem odio repellendus facere temporibus eos rerum nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, rem sequi earum excepturi explicabo doloremque reprehenderit sed quos a dolores, itaque nulla nihil! Aliquam sequi placeat qui totam quasi debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus fugiat repellat asperiores, optio tenetur sapiente laudantium quisquam corrupti esse dolorem minima. Dolorum amet cum consectetur maxime beatae minima quo itaque?</p>
                                        </div>
                                    </div>
                                </div>  );
    }
    
    return (
        <>
         <div className="jumbotron text-center" id="title">
            <h1 id="titleH1">About Page</h1>
            <br/>
        </div>
        <br />
        {times(12)}
        <br />
    </>
    )
}

export default AboutPage;