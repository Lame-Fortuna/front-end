import React, { useState, useEffect } from "react";
import '../public/calcula.css';

function Calcula() {
    // Tab title
    useEffect(() => {
        document.title = "Calculator";
    }, []);

    const [expression, modifyexp] = useState('0');
    const [evaluated, setEvaluated] = useState(false);

    function update(key) {
        modifyexp(prev => {
            switch (key) {
                case 'AC':
                    setEvaluated(false);
                    return '0';

                case '=':
                    try {
                        const result = eval(prev).toFixed(4).replace(/\.0000$/, '');
                        setEvaluated(true);
                        return result;
                    } catch {
                        setEvaluated(true);
                        return 'Error';
                    }

                case '+':
                case '-':
                case '*':
                case '/':
                case '.':
                    if (evaluated) {
                        setEvaluated(false);
                        return prev + key;  // Could also reset to last result + op
                    }
                    return prev + key;

                default:
                    if (evaluated) {
                        setEvaluated(false);
                        return key;
                    }
                    return prev === '0' ? key : prev + key;
            }
        });
    }


    // Key strokes
    useEffect(() => {
        function handleKeyDown(e) {
            const key = e.key;

            if ('0123456789.+-*/'.includes(key)) {
                update(key);
            }
            
            else if (key === 'Enter') {
                update('=');
            } else if (key === 'Escape') {
                update('AC');
            }
            
        }

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="calc">
            <div className="displayAndClear">
                <p id="display">{expression}</p>
                <button id="clear" onClick={() => update('AC')}>AC</button>
            </div>
            <div className="buttons">
                <div className="numbers">
                    {['7','8','9','4','5','6','1','2','3','0','.','='].map(val => (
                        <button key={val} onClick={() => update(val)}>{val}</button>
                    ))}
                </div>
                <div className="operators">
                    {['+','-','*','/'].map(op => (
                        <button key={op} onClick={() => update(op)}>{op}</button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Calcula;
