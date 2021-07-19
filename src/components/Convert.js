import React, {useState} from 'react'

export function Convert({res,length,first,setSecond, setFirst, second}) {
    const [firsInput, setFirstImp] = useState([])
    const [secondInput, setSecondImp] = useState([])
    const [result, setResult] = useState(0)
    function changeSecondInput(e) {
        setSecondImp(e.target.value)

    }
    function changeFirstInput(e) {
        setFirstImp(e.target.value)

    }
    function startConvert() {

        if (first === length[0][1].Name){
            setResult(+(firsInput * length[0][1].Previous).toFixed(2))
        }
        if (first === length[1][1].Name){
            setResult(+(firsInput * length[1][1].Previous).toFixed(2))
        }
        if (first === length[2][1].Name){
            setResult(+(firsInput * length[2][1].Previous).toFixed(2))
        }
        if (first === length[3][1].Name){
            setResult(+(firsInput * length[3][1].Previous).toFixed(2))
        }
        if (first === length[4][1].Name){
            setResult(+(firsInput * length[4][1].Previous).toFixed(2))
        }
        if (first === length[5][1].Name){
            setResult(+(firsInput * length[5][1].Previous).toFixed(2))
        }
        if (first === length[6][1].Name){
            setResult(+(firsInput * length[6][1].Previous).toFixed(2))
        }
        if (first === length[7][1].Name){
            setResult(+(firsInput * length[7][1].Previous).toFixed(2))
        }
        if (first === length[8][1].Name){
            setResult(+(firsInput * length[8][1].Previous).toFixed(2))
        }
        if (first === length[9][1].Name){
            setResult(+(firsInput * length[9][1].Previous).toFixed(2))
        }
        if (first === length[10][1].Name){
            setResult(+(firsInput * length[10][1].Previous).toFixed(2))
        }
        if (first === length[11][1].Name){
            setResult(+(firsInput * length[11][1].Previous).toFixed(2))
        }
        if (first === length[12][1].Name){
            setResult(+(firsInput * length[12][1].Previous).toFixed(2))
        }
        if (first === length[13][1].Name){
            setResult(+(firsInput * length[13][1].Previous).toFixed(2))
        }
        if (first === length[14][1].Name){
            setResult(+(firsInput * length[14][1].Previous).toFixed(2))
        }
        if (first === length[15][1].Name){
            setResult(+(firsInput * length[15][1].Previous).toFixed(2))
        }
        if (first === length[16][1].Name){
            setResult(+(firsInput * length[16][1].Previous).toFixed(2))
        }
        if (first === length[17][1].Name){
            setResult(+(firsInput * length[17][1].Previous).toFixed(2))
        }
        if (first === length[18][1].Name){
            setResult(+(firsInput * length[18][1].Previous).toFixed(2))
        }
        if (first === length[19][1].Name){
            setResult(+(firsInput * length[19][1].Previous).toFixed(2))
        }
        if (first === length[20][1].Name){
            setResult(+(firsInput * length[20][1].Previous).toFixed(2))
        }
        if (first === length[21][1].Name){
            setResult(+(firsInput * length[21][1].Previous).toFixed(2))
        }
        if (first === length[22][1].Name){
            setResult(+(firsInput * length[22][1].Previous).toFixed(2))
        }
        if (first === length[23][1].Name){
            setResult(+(firsInput * length[23][1].Previous).toFixed(2))
        }
        if (first === length[24][1].Name){
            setResult(+(firsInput * length[24][1].Previous).toFixed(2))
        }
        if (first === length[25][1].Name){
            setResult(+(firsInput * length[25][1].Previous).toFixed(2))
        }
        if (first === length[26][1].Name){
            setResult(+(firsInput * length[26][1].Previous).toFixed(2))
        }
        if (first === length[27][1].Name){
            setResult(+(firsInput * length[27][1].Previous).toFixed(2))
        }
        if (first === length[28][1].Name){
            setResult(+(firsInput * length[28][1].Previous).toFixed(2))
        }
        if (first === length[29][1].Name){
            setResult(+(firsInput * length[29][1].Previous).toFixed(2))
        }
        if (first === length[30][1].Name){
            setResult(+(firsInput * length[30][1].Previous).toFixed(2))
        }
        if (first === length[31][1].Name){
            setResult(+(firsInput * length[31][1].Previous).toFixed(2))
        }
        if (first === length[32][1].Name){
            setResult(+(firsInput * length[32][1].Previous).toFixed(2))
        }
        if (first === length[33][1].Name){
            setResult(+(firsInput * length[33][1].Previous).toFixed(2))
        }



    }
    function changeFirstSelect(e) {
        setFirst(e.target.value)
    }
    function changeSecondSelect(e) {
        setSecond(e.target.value)
    }
    return (
        <section>
            <div className="container">
                <input type='number' onChange={changeFirstInput}/>
                    <select onChange={changeFirstSelect}>
                        {
                            length.length === 34 ? length.map(e=> (<option id={} >{e[1].Name}</option>) ) : <option>Netu</option>
                        }
                    </select>

                    <input type="text" value={result}/>

            </div>
            <div className="start">
                <button onClick={startConvert}>Start</button>
            </div>

        </section>
    )
}