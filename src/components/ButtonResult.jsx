import './buttons.css'

function ButtonResult({handleClick, children}) {
    return (
        <button className='button' type="button" onClick={() => handleClick()}>{children}</button>
    );
};

export default ButtonResult;