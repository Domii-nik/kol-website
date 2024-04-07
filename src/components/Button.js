import '../css/output.css';

function Button({
                    width = ' w-56 ',
                    ml = ' ',
                    mr = ' ',
                    color = 'primary',
                    id,
                    onClick = null,
                    text = 'Kein Text angegeben'
                }) {

    let style;
    switch (color) {
        case 'primary':
            style = 'font-bold rounded-lg text-lg h-16 bg-[#f1752a] text-[#ffffff] justify-center mt-2 mb-2' + width + mr + ml +
                'hover:shadow-xl duration-200';
            break;
        case 'secondary':
            style = 'font-bold rounded-lg text-lg h-16 bg-[#2e81ae] text-[#ffffff] justify-center mt-2 mb-2' + width + mr + ml +
                'hover:shadow-xl duration-200';
            break;
        case 'tertiary':
            style = 'font-bold rounded-lg text-lg h-16 bg-[#0e2a3e] text-[#ffffff] justify-center mt-2 mb-2' + width + mr + ml +
                'hover:shadow-xl duration-200';
            break;
        default:
            style = '';
            break;
    }

    return (
        <>
            <button id={id} className={style} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Button