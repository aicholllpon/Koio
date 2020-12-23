import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './CreditCard.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const CreditCard = () => {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setCvc] = useState('')
    const [focus, setFocus] = useState('')

    return (
        <div className='credits'>
            <Cards className='mb-5'
                number={number}
                name={name}
                expiry={expiry}
                cvc={cvc}
                focused={focus}
            />
            <form className='form'>
                <input type="tel"
                    name='number'
                    placeholder='Card number'
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}

                />
                <input type="text"
                    name='name'
                    placeholder='Card name'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}

                />
                <input type="text"
                    name='expiry'
                    placeholder='MM//YY Expiry'
                    value={expiry}
                    onChange={e => setExpiry(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
                <input type="text"
                    maxLength='3'
                    name='cvc'
                    placeholder='CVC'
                    value={cvc}
                    onChange={e => setCvc(e.target.value)}
                    onFocus={e => setFocus(e.target.name)}
                />
            </form>
            <Link to='/cart' style={{ textDecoration: 'none' }}>
                <Button className='mt-4' variant="outlined">BACK</Button>
            </Link>
        </div>
    );
};

export default CreditCard;