import { SyntheticEvent, useState } from 'react'
import './App.css'
import { Dropdown } from './components/Dropdown'

type Response = {
  data: Record<string, number>
}

function App() {
  const [toCurrency, setToCurrency] = useState<string>()
  const [fromCurrency, setFromCurrency] = useState<string>()
  const [result, setResult] = useState<number>()

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    if (typeof toCurrency === 'undefined' || typeof fromCurrency === 'undefined') return

    // fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N&base_currency=${fromCurrency}&currencies=${toCurrency}`)
    // .then(data=>data.json())
    // .then(res=>setResult(res.data[toCurrency]))
    // .catch(err=>console.log(err))

    try {
      const data = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_g8psjoZmt4fMQik3MIkdDyYhsL4glGwRSj9gUz8N&base_currency=${fromCurrency}&currencies=${toCurrency}`)
      const res: Response = await data.json()
      setResult(res.data[toCurrency])
    }
    catch (err) {
      console.log(err)
    }

  }

  return (
    <>

      <form onSubmit={(e) => handleSubmit(e)}>
        <Dropdown setCurrency={setFromCurrency} />
        <Dropdown setCurrency={setToCurrency} />
        <button type='submit'>Submit</button>
      </form>
      <p>{result}</p>

    </>
  )
}



export default App


//container with two dropdowns
//submit
//switch button

//save selection to state
//onsubmit apicall
//display data
