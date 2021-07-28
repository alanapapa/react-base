import './App.css';
import { useState, useMemo, useCallback } from 'react'
import Header from "./components/Header"


function App() {
    const [number, setNumber] = useState(0)
    const [text, setText] = useState('ok')

    const data = useMemo(() => ({name: "Harry"}), [])
    const clicker = useCallback(() => {
        setNumber((prevState) => prevState+1)
    }, [])

    return (


        <div className="App">
            <Header data={data} clicker={clicker} />
            <hr/>
            <h1>{number}</h1>
            <br/><br/>
            <input value={text} onChange={({target}) => setText(target.value)} />
        </div>
    );
}

export default App;

