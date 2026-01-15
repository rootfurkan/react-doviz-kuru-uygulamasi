import React, { useState } from 'react'
import '../css/currency.css'
import { FaAngleRight } from "react-icons/fa";
import axios from 'axios';

function Currency() {

  let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
  let API_KEY = "fca_live_xrOCiQ6jiZRzA4ewxOeTUFBezP31oNfmwncfZ5KC"
 

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const exchange = async()=>{
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  }

  return (
    <div className='currency-div'>
      <div>
        <h3 style={{marginTop:'-20px', marginBottom:'30px'}}>Döviz Kuru Uygulaması</h3>
      </div>
      <div>
        <input
        value={amount}
        type="number"
        onChange={(e)=> setAmount(e.target.value)}
         className='amount' />
        <select 
        onChange={(e)=> setFromCurrency(e.target.value)}
        className='from-currency-option'>
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
        </select>
        <FaAngleRight  style={{marginRight:'10px', fontSize:'20px'}}/>
        <select
        onChange={(e)=> setToCurrency(e.target.value)}
        className='to-currency-option'>
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
        </select>

        <input
        value={result}
        onChange={(e)=>setResult(e.target.value)}
        type="number" className='result'/>
      </div>
        <div>
          <button
          onClick={exchange}>Çevir</button>
        </div>

    </div>
  )
}

export default Currency