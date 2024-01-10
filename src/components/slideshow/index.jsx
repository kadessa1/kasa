import { useState } from 'react';
import arrowPrev from '../../assets/pictures/arrow-prev.png';
import arrowNext from '../../assets/pictures/arrow-next.png';
import styles from './style.module.css';

function Slideshow({pictures, picturesLength}) {
    const [index, setIndex] = useState(0);


    const initiateSlideState = ()=> {
        document.querySelectorAll(`.${styles.carrousel_container } img `).forEach(e=> {
            e.style.transform = null
            e.style.zIndex = null
        })
    }


    const prevImg = (index) => {

        initiateSlideState()
         if(index == 0){     
            let curr = document.querySelectorAll(`.${styles.carrousel_container} img `)[picturesLength -index -1]
            curr.style.transform = `translateX(${-(picturesLength - index-1) *100}%)`
         }else{
            let curr = document.querySelectorAll(`.${styles.carrousel_container} img `)[index-1]
            curr.style.transform = `translateX(${-(index -1) *100}%)`
            curr.style.zIndex = 100 - index
         }
        index > 0 ? setIndex(index - 1) : setIndex((index = pictures.length - 1))
    };



    const nextImg = (index) => {
        initiateSlideState()
        if(index + 1 >=  picturesLength){
            document.querySelectorAll(`.${styles.carrousel_container } img `).forEach(e=> {
                e.style.transform = null
            })
            
        }else{
            let next = document.querySelectorAll(`.${styles.carrousel_container } img `)[index+1] ; 
            next.style.transform = `translateX(${-(index+1) *100}%)`
        }
        index < picturesLength - 1 ? setIndex(index + 1) : setIndex((index = 0))

     };



    if (picturesLength === 1) {
        return (
            <div className={styles.carrousel_container}>
                <img
                    className={styles.slide}
                    src={pictures[index]}
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${index}`}
                />
            </div>
        );
    } else if (picturesLength > 0) {
        return (
        <div style={{position: "relative"}}>
            <div className={styles.carrousel_container}>
                {pictures.map((p,i)=> <img
                    className={styles.slide + " " + ( i == 0 ? styles.visible : "") }
                    src={p} 
                    alt="Visuel de l'appartement"
                    key={`Slideshow-${i}`}
                />)}
               
                <div className={styles.arrow_container}>
                    <button className={styles.prev} onClick={() => prevImg(index)}>
                        <img
                            src={arrowPrev}
                            alt='Flèche gauche'
                        />
                    </button>
                    <button className={styles.next} onClick={() => nextImg(index)}>
                        <img
                            src={arrowNext}
                            alt='Flèche droite'
                        />
                    </button>
                </div>
            </div>
               <div className={styles.bullets}>
               {pictures.map((p,i)=> (<input type='radio' name={`radio-${i}`}  key={i}  { ... i== index ? {checked: true} : {checked: false}} ></input>))}
           </div>
        </div>
        )
    }
};

export default Slideshow