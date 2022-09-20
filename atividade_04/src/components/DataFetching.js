import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(){

    const [posts, setPosts] = useState ([]);

    useEffect (() => {
        axios.get('https://api.github.com/orgs/rocketseat/repos')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (


        <div>
            <h1 style={{color: 'red'}}>Atividade 4</h1>

            <ul>{
                
                posts.map(
                    post => (
                        <p>

                            <h2 style={{color: 'blue'}}>{post.name}</h2>
                            <p/>
                            {post.description}
                            <p/>
                            <a href={post.html_url}>Redirecionar para página</a>

                            </p>
                    ))}</ul>

        </div>

    )

}

export default DataFetching