import './buttons.css'

function Button({children, value, handleClick}) {
    return (
        <button type="button" className='button' onClick={() => handleClick(value)}>{children}</button>
    );
};


export default Button