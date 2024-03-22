import { useState } from 'react';
import Button from './buttons';
import './Calculator.css'
import Input from './Input';
import { evaluate } from 'mathjs';
import ButtonResult from './ButtonResult.jsx'


function Calculator() {

    const [value, setValue] = useState('')

    const updateState = (new_value) => {
        setValue(value + new_value);
    };


    const result = () => {
        if(value) {
            setValue(evaluate(value))
        }
        else {
           alert('The calculator is empty!')
        }
    }


    const deleteOne = '<';

    return (
        <div className="calculator-main">
            <Input input_value={value}/>  
            <div className="buttons">
                <Button value="7" handleClick={updateState}>7</Button>
                <Button value="8" handleClick={updateState}>8</Button>
                <Button value="9" handleClick={updateState}>9</Button>
                <Button value="4" handleClick={updateState}>4</Button>
                <Button value="5" handleClick={updateState}>5</Button>
                <Button value="6" handleClick={updateState}>6</Button>
                <Button value="1" handleClick={updateState}>1</Button>
                <Button value="2" handleClick={updateState}>2</Button>
                <Button value="3" handleClick={updateState}>3</Button>
                <Button value="0" handleClick={updateState}>0</Button>
                <Button value="*" handleClick={updateState}>×</Button>
                <Button value="+" handleClick={updateState}>+</Button>
                <Button value="-" handleClick={updateState}> - </Button>
                <Button value="." handleClick={updateState}>.</Button>
                <Button value="<" handleClick={updateState}>{deleteOne}</Button>
                <Button value="%" handleClick={updateState}>%</Button>
                <Button value="/" handleClick={updateState}>/</Button>
                <Button handleClick={() => setValue('')}>AC</Button>
                <ButtonResult value="=" handleClick={result}>=</ButtonResult>
            </div>
        </div>
    );
};

export default Calculator;