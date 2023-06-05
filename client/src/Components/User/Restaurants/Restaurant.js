import './restaurant.css';
import Header from '../../Header/Header';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Restaurant() {
    let navigate = useNavigate();
    const [data, setData] = useState([]);

    React.useEffect(() => {
        getRes();
    }, []);

    async function getRes() {
        try {
            axios.get('http://localhost:4000/restaurants')
                .then(r => {
                    console.log(r.data);
                    setData(r.data);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    function review(e) {
        e.preventDefault();
        let id = e.target.parentElement.id;
        navigate(`/${id}`)
    }

    return (
        <div>
            <Header></Header><br></br><br></br>
            <div className='division'>
                <section className='head'>
                    <span className='n'>Name</span>
                    <span className='a'>Address</span>
                </section>
                <section className='rest'>
                    {data.map((index) => {
                        return (
                            <div className='res-dev' id={index.id}>
                                <span className='data-n'>{index.name}</span>
                                <span className='data-a'>{index.address}</span>
                                <button className='review' onClick={review}>Review</button>
                            </div>
                        )
                    })}
                </section>
            </div>
        </div>
    );
};

export default Restaurant;