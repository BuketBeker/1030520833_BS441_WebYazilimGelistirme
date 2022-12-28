import { useEffect, useState } from 'react';
import './App.css';
import styles from './App.module.css'
import tas from './tas.jpeg';
import kagit from './kagit.jpeg';
import makas from './makas.jpeg';

function Game() {
    const [computerTwo, setComputerTwo] = useState(0);
    const [computerOne, setComputerOne] = useState(0);
    const [timer, setTimer] = useState(3);
    const [runTimer, setRunTimer] = useState(false);
    const [results, setResults] = useState({
        kazanan: '',
        message: ''
    });
    const [score, setScore] = useState({
        player: 0,
        computer: 0
    });
    useEffect(() => {
        if(runTimer && timer > 0){
            setTimeout(() => {
                setTimer(timer - 1);
            }, 1000);
        }
        else if (runTimer && timer < 1){
            setRunTimer(false);
            setTimer(3);
            play();
        }
    },[runTimer, timer]);

    const options =[
        {name: 'Taş', icon: <img src={tas} alt={tas} style={{width:150, height:150}}/>},
        {name: 'Kağıt', icon: <img src={kagit} alt={kagit} style={{width:150, height:150}}/>},
        {name: 'Makas', icon: <img src={makas} alt={makas} style={{width:150, height:150}}/>},
    ];

    const generateComputerOne = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        setComputerOne(randomNumber);
    };
    const generateComputerTwo = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        setComputerTwo(randomNumber);
    };

    const start = () => {
        setResults({kazanan: '', message: ''});
        setRunTimer(true);
        generateComputerOne();
        generateComputerTwo();
    };
    const play = () => {
        if (options[computerTwo].name === 'Taş' && options[computerOne].name === 'Taş'){
            setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'});
        } else if (options[computerTwo].name === 'Kağıt' && options[computerOne].name === 'Kağıt'){
            setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'})
        } else if (options[computerTwo].name === 'Makas' && options[computerOne].name === 'Makas'){
            setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'})
        } else if (options[computerTwo].name === 'Taş' && options[computerOne].name === 'Kağıt'){
            setResults({kazanan: 'Computer 2', message: 'Kağıt taşı yener'})
            setScore({...score, computer: score.computer + 1})
        } else if (options[computerTwo].name === 'Taş' && options[computerOne].name === 'Makas'){
            setResults({kazanan: 'Computer 1', message: 'Taş makası yener'})
            setScore({...score, player: score.player + 1})
        } else if (options[computerTwo].name === 'Kağıt' && options[computerOne].name === 'Taş'){
            setResults({kazanan: 'Computer 1', message: 'Kağıt taşı yener'})
            setScore({...score, player: score.player + 1})
        } else if (options[computerTwo].name === 'Kağıt' && options[computerOne].name === 'Makas'){
            setResults({kazanan: 'Computer 2', message: 'Makas kağıdı yener'})
            setScore({...score, computer: score.computer + 1})
        } else if (options[computerTwo].name === 'Makas' && options[computerOne].name === 'Taş'){
            setResults({kazanan: 'Computer 2', message: 'Taş makası yener'})
            setScore({...score, computer: score.computer + 1})
        } else if (options[computerTwo].name === 'Makas' && options[computerOne].name === 'Kağıt'){
            setResults({kazanan: 'Computer 1', message: 'Makas kağıdı yener'})
            setScore({...score, player: score.player + 1})
        }
    };
    console.log('computerTwo is:', computerTwo);
    console.log('computerOne is:', computerOne);

    return (
        <div className={styles.container}>
            <div className={styles.titleCtn}>
                <h1>TAŞ - KAĞIT - MAKAS</h1>
                <p>Bu oyun modu <b>2 Bilgisayar</b> arasında gerçekleşmektedir. <b>Oyna</b> butonuna tıklamanız yeterlidir.</p>
                <p>Oyna butonuna her tıkladığınızda iki bilgisayar kendi seçeneklerini seçerler ve ekrana kazanan bilgisayar yazılır.</p>
                <p>Sonuca göre kazanan oyuncunun score alanı güncellenir.</p>
            </div>
            <div className={styles.scoreContainer}>
                <div className={styles.score}>
                    <h3>Computer 1</h3>
                    <p>Score: {score.player}</p>
                </div>
                <div className={styles.score}>
                    <h3>Computer 2</h3>
                    <p>Score: {score.computer}</p>
                </div>
            </div>
            <div className={styles.results}>
                <div className={styles.player}>
                    {runTimer && <div className={styles.computerHand}>{options[0].icon}</div>}
                    {results?.kazanan && (
                        <>
                            {options[computerTwo].icon}
                            <p>{options[computerTwo].name}</p>
                        </>
                    )}
                </div>
                <div className={styles.midCol}>
                    {runTimer && <p className={styles.timer}>{timer}</p>}
                    {results?.kazanan && (
                        <>
                            <p className={styles.resultsWinner}>Kazanan: {results.kazanan}</p>
                            <p className={styles.resultsMessage}>{results.message}</p>
                        </>
                    )}
                </div>
                <div className={styles.computer}>
                    {runTimer && <div className={styles.computerHand}>{options[0].icon}</div>}
                    {results?.kazanan && (
                        <>
                            {options[computerOne].icon}
                            <p>{options[computerOne].name}</p>
                        </>
                    )}
                </div>
            </div>

            <div className={styles.choiceBtnCtn}>
                <button className={styles.choiceBtn}>
                    <img src={tas} alt={tas} style={{width:150, height:150}}/>
                    Taş
                </button>
                <button className={styles.choiceBtn}>
                    <img src={kagit} alt={kagit} style={{width:150, height:150}}/>
                    Kağıt
                </button>
                <button className={styles.choiceBtn}>
                    <img src={makas} alt={makas} style={{width:150, height:150}}/>
                    Makas
                </button>
            </div>
            <button className={styles.playBtn} onClick={start}>
                Oyna
            </button>
        </div>
    );
}

export default Game;