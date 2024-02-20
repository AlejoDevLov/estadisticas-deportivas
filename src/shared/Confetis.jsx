import { useEffect, useRef, useState } from "react";

export const Confettis = ({ startAnimation }) => {

    const [confettisClass, setConfettisClass ] = useState("w-3 h-3 rounded-full confettis-drop animation-start");
    const confetiRef = useRef();

    useEffect( () => {
        if(!confetiRef.current) return;
        const confetiArray = confetiRef.current.querySelectorAll('.w-3');
        for(let i=0; i<confetiArray.length; i++){
            confetiArray[i].style.backgroundColor = `#${confettis[i]}`;
            confetiArray[i].style.animationDelay = `${confettiAnimationDelay[i]}s`;
        }
    }, []);

    useEffect( () => {
        if(startAnimation){
            setConfettisClass('w-3 h-3 rounded-full confettis-drop');
        } 
        if(!startAnimation){
            setConfettisClass('');
        } 
    }, [startAnimation]);

    // creamos un array que contiene string de codigos hexadecimales
    const confettis = new Array(200).fill().map( () => {
        let randomColor = [];
        for(let j=0; j<=5; j++){
            let digitNumber = (Math.random()*16 | 0).toString(16);
            randomColor.push(digitNumber);
        }
        // tomamos cada sub-array de strings y los convertimos en una unica cadena de caracteres
        randomColor = randomColor.join();
        // Eliminamos las comas dentro del string para regresar unicamente las letras y numeros hexadecimales
        randomColor = randomColor.replace(/[^\w\d]/g, '');
        // regresamos el string y lo añadimos al array de strings.
        return randomColor;
    } );

    const confettiAnimationDelay = Array(200).fill().map( () => (Math.random()*1.5).toFixed(2) );
    // let sizeConfetti = Array(200).fill().map( (v,i) => Math.floor(Math.random()*3) );
    // sizeConfetti = sizeConfetti.map((v) => v == 0 ? 3 : v );

    return (
        <div ref={confetiRef} className="fixed top-0 w-full flex flex-wrap justify-evenly -translate-y-full">
            {
<<<<<<< HEAD
                confettis.map( (v,i) => {
=======
                confettis.map( (i) => {
>>>>>>> 91dd7fd37b932865afcb2fa49b25bcdb93ee771d
                    return  (
                        <div 
                            key={i} 
                            className={confettisClass}
                            >
                        </div>
                        )
                })
            }
        </div>
    )
}

