import './App.css'
import React, { useState } from 'react'

function App() {
  const [billAmount, setBillAmount] = useState('')
  const [cash, setCash] = useState('')
  const [changeAmount, setChangeAmount] = useState('')
  const [notes, setNotes] = useState({})

  const calculateChange = () => {
    // Conditions
    // 1. If Cash given is lesser than bill amount
    // 2. If Cash given is equal to the bill amount
    // 3. If Cash given is greater than the bill amount
    if (cash > billAmount) {
      setChangeAmount(cash - billAmount)
      amountToNotes(cash - billAmount)
    } else if (cash === billAmount) {
      setChangeAmount('Thanks for visiting😄')
    } else if (cash < billAmount) {
      setChangeAmount('Do you want to wash plates 😠')
    }
  }

  const changeCurrencies = [2000, 500, 100, 20, 10, 5, 1]
  const changeNotes = Array(7).fill(0)

  const amountToNotes = (changeAmt) => {
    // eslint-disable-next-line
    changeCurrencies.map((_, i) => {
      if (changeAmt >= changeCurrencies[i]) {
        changeNotes[i] = Math.floor(changeAmt / changeCurrencies[i])
        changeAmt = changeAmt - changeNotes[i] * changeCurrencies[i]
      }
    })

    mapNotesToValues(changeNotes)
  }

  const mapNotesToValues = (changeNotes) => {
    let finalNotes = {}
    changeCurrencies.map(
      (_, i) => (finalNotes[changeCurrencies[i]] = changeNotes[i])
    )
    setNotes(finalNotes)
  }

  return (
    <div className="container">
      <h1> 💸 Cash Register 💸</h1>
      <h3>Enter bill amount: </h3>
      <input
        className="inputStyles"
        type="number"
        value={billAmount}
        onChange={(e) => setBillAmount(Number(e.target.value))}
      />
      {billAmount > 0 && (
        <React.Fragment>
          <h3>Enter cash amount: </h3>
          <input
            className="inputStyles"
            type="number"
            value={cash}
            onChange={(e) => setCash(Number(e.target.value))}
          />
        </React.Fragment>
      )}
      {billAmount > 0 && cash > 0 && (
        <button onClick={calculateChange} className="calculateChangeBtn">
          Calculate Change
        </button>
      )}

      <h2>{changeAmount && changeAmount} </h2>

      {changeAmount > 0 && (
        <div className="tableContainer">
          Denominations
          <tbody className="tableStyles">
            <tr>
              <th>No. of notes</th>
              {Object.values(notes).map((val, i) => {
                return val > 0 && <td key={i}>{val}</td>
              })}
            </tr>
            <tr>
              <th>Note</th>
              {Object.entries(notes).map(([key, val], i) => {
                return val > 0 && <td key={i}>{key}</td>
              })}
            </tr>
          </tbody>
        </div>
      )}
    </div>
  )
}

export default App
