import './addRestaurant.css';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';

function AddRestaurant() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');

    async function add(e) {
        e.preventDefault();
        let obj = { name, address, description };
        if (name === '' || address === '' || description === '') {
            alert('all fields are required');
            return;
        }

        try {
            axios.post('http://localhost:4000/add-restaurant', obj)
                .then(res => {
                    if (res.data.success === true) {
                        alert(res.data.message);
                        setName('');
                        setAddress('');
                        setDescription('');
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <Navbar></Navbar><br></br><br></br>
            <section>
                <form className='add'>
                    <label className='rn'>Restaurant Name:</label>
                    <input value={name} type='text' name='name' className='res-name' onChange={(e) => { setName(e.target.value) }}></input><br></br><br></br>
                    <label className='ra'>Address:</label>
                    <input value={address} className='res-add' type='text' name='address' onChange={(e) => { setAddress(e.target.value) }}></input><br></br><br></br>
                    <label className='rd'>Description:</label>
                    <textarea value={description} type="text" className='desc' name='description' onChange={(e) => { setDescription(e.target.value) }}></textarea><br></br><br></br>
                    <button id='add' onClick={add}>Add</button>
                </form>
            </section>
        </div>
    );
}

export default AddRestaurant;