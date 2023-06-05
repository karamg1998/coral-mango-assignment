import './review.css';
import Header from '../../Header/Header';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Review() {
    let id = useParams().id;
    const [review, setReview] = useState('');
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');

    useEffect(() => {
        details();
    }, [])

    async function details() {
        try {
            axios.get('http://localhost:4000/details', { headers: { 'id': id } })
                .then(r => {
                    console.log(r.data);
                    setData(r.data[0].Reviews);
                    setName(r.data[0].name);
                    setDesc(r.data[0].description);
                    setAddress(r.data[0].address);
                });
        }
        catch (err) {
            console.log(err);
        }
    }

    async function submit(e) {
        e.preventDefault();
        let obj = { review, id };
        if (review === '') {
            alert('review is empty');
        }
        else {
            try {
                await axios.post('http://localhost:4000/addreview', obj)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.success === true) {
                            alert(res.data.message);
                            setReview('');
                            let rv = document.querySelector('.reviews-col');
                            rv.innerHTML += `<ul className='r'>-- ${res.data.review}</ul>`
                        }
                    })
            }
            catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <div>
            <Header></Header><br></br><br></br>
            <section className='detail-page'>
                <span className='rde'>Restaurant Details:-</span><br></br><br></br>
                <span>Name: {name}</span><br></br><br></br>
                <span>Address: {address}</span><br></br><br></br>
                <span>Description: {desc}</span>
            </section>
            <section className='reviews-col'>
                <div className='rv'>Reviews:-</div>
                {data.map((i) => {
                    return (<ul className='r'>-- {i.review}</ul>)
                })}
            </section>
            <section className='review-form'>
                <textarea value={review} type="text" name='text' className='rev-txt' placeholder='add your review' onChange={(e) => { setReview(e.target.value) }}></textarea><br></br><br></br>
                <button onClick={submit} id='sub'>Submit</button>
            </section>
        </div>
    )
}

export default Review;