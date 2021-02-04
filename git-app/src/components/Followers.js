import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from 'axios';

function Followers(props)  {
    console.log(`ab: Followers.js: Followers: render, props render`,props)
    const followers = {users:['NateTheDev1','Kyleswillard']};
    const [fllwrs, setFllwrs] = useState({
        list: []
    });

    useEffect(() => {
        console.log(`ab: Followers.js: Followers: useEffect: 'mounted':`);
        followers.users.map( (item) => {
            axios
            .get(`${props.state.getUrl}${item}`)
            .then( (res) => {
                console.log('ab: Followers.js: Followers: useEffect: Array.map: axios.then: res:',res);
                setFllwrs({
                    list: [
                        ...fllwrs.list,
                        res.data
                    ]
                });
                console.log(`ab: Followers.js: Followers: useEffect: axios.then: 'state updated': fllwrs.list:`,fllwrs.list)
            })
            .catch( (err) => {
                console.error(`ab: Followers.js: Followers: useEffect: Array.map: axios.catch: err:`,err)
            })
        })
        return () => {
            console.log(`ab: Followers.js: Followers: useEffect: 'will unmount`)
        }
    }, [fllwrs]);
    // const [data, setData] = useState({
    //     followers:[]
    // });
    // https://api.github.com/users/
    // NateTheDev1
    // Kyleswillard

    // axios
    //     .get(props.state.followers_url)
    //     .then( (res) => {
    //         console.log(`ab: Followers.js: Followers: axios.then: res:`, res);
    //         // setData({
    //         //     followers: res.data
    //         // })
    //     })
    //     .catch( (err) => {
    //         console.error(`ab: Followers.js: Followers: axios.then: err:`, err)
    //     })

    

    return (
        <div className="followers">
          {fllwrs.list.length < 1 ?
           <p>***********LOADING**********</p> :
            fllwrs.list.map( (item) => {
                return (
                    <Card user={item} />
                )
          })} 
        </div>
    )
}

export default Followers;