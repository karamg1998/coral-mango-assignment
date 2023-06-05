import './reviews.css';
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Reviews() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllReviews();
    }, []);

    async function getAllReviews() {
        try {
            await axios.get('http://localhost:4000/getreviews')
                .then(res => {
                    setData(res.data);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar></Navbar><br></br><br></br>
            <section className='admin-rev'>
                <div className='hard-head'>
                    <span className='id1'>ID</span>
                    <span className='name1'>NAME</span>
                    <span className='rev1'>REVIEWS</span>
                    {data.map((i) => {
                        return (<div className='map-reve'>
                            <span className='id1'>{i.id}</span>
                            <span className='name1'>{i.name}</span>
                            <span className='rev1'>{i.review}</span>
                        </div>)
                    })}
                </div>
            </section>
        </div>
    );
}

export default Reviews;