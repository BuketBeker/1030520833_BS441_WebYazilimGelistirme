import { useEffect, useState } from 'react';
import './App.css';
import styles from './App.module.css'
import tas from './tas.jpeg';
import kagit from './kagit.jpeg';
import makas from './makas.jpeg';

function App() {
  const [playerHand, setPlayerHand] = useState(0);
  const [computerHand, setComputerHand] = useState(0);
  const [timer, setTimer] = useState(3);
  const [runTimer, setRunTimer] = useState(false);
  const [results, setResults] = useState({
      winner: '',
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

  const selectOption = (handIndex) => {
      //setResults({winner: '', message: ''}); //koymayabilirsin
      setPlayerHand(handIndex);
  };

  const generateComputerHand = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      setComputerHand(randomNumber);
  };

  const start = () => {
     setResults({winner: '', message: ''});
     setRunTimer(true);
     generateComputerHand();
  };
  const play = () => {
      if (options[playerHand].name === 'Taş' && options[computerHand].name === 'Taş'){
          setResults({winner: 'Hiç kimse', message: 'Berabere kaldınız'});
      } else if (options[playerHand].name === 'Kağıt' && options[computerHand].name === 'Kağıt'){
          setResults({winner: 'Hiç kimse', message: 'Berabere kaldınız'})
      } else if (options[playerHand].name === 'Makas' && options[computerHand].name === 'Makas'){
          setResults({winner: 'Hiç kimse', message: 'Berabere kaldınız'})
      } else if (options[playerHand].name === 'Taş' && options[computerHand].name === 'Kağıt'){
          setResults({winner: 'Computer', message: 'Kağıt taşı yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[playerHand].name === 'Taş' && options[computerHand].name === 'Makas'){
          setResults({winner: 'Player', message: 'Taş makası yener'})
          setScore({...score, player: score.player + 1})
      } else if (options[playerHand].name === 'Kağıt' && options[computerHand].name === 'Taş'){
          setResults({winner: 'Player', message: 'Kağıt taşı yener'})
          setScore({...score, player: score.player + 1})
      } else if (options[playerHand].name === 'Kağıt' && options[computerHand].name === 'Makas'){
          setResults({winner: 'Computer', message: 'Makas kağıdı yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[playerHand].name === 'Makas' && options[computerHand].name === 'Taş'){
          setResults({winner: 'Computer', message: 'Taş makası yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[playerHand].name === 'Makas' && options[computerHand].name === 'Kağıt'){
          setResults({winner: 'Player', message: 'Makas kağıdı yener'})
          setScore({...score, player: score.player + 1})
      }
  };
  console.log('playerHand is:', playerHand);
  console.log('computerHand is:', computerHand);

  return (
    <div className={styles.container}>
        <div className={styles.titleCtn}>
          <h1>TAŞ - KAĞIT - MAKAS</h1>
          <p>React Game!</p>
        </div>
        <div className={styles.scoreCtn}>
            <div className={styles.score}>
                <h3>Player</h3>
                <p>Score: {score.player}</p>
            </div>
            <div className={styles.score}>
                <h3>Computer</h3>
                <p>Score: {score.computer}</p>
            </div>
        </div>
        <div className={styles.results}>
            <div className={styles.playerHand}>
                {runTimer && <div className={styles.playerShake}>{options[0].icon}</div>}
                {results?.winner && (
                    <>
                        {options[playerHand].icon}
                        <p>{options[playerHand].name}</p>
                    </>
                )}
            </div>
            <div className={styles.midCol}>
                {runTimer && <p className={styles.timer}>{timer}</p>}
                {results?.winner && (
                    <>
                        <p className={styles.resultsWinner}>Winner: {results.winner}</p>
                        <p className={styles.resultsMessage}>{results.message}</p>
                    </>
                )}
            </div>
            <div className={styles.computerHand}>
                {runTimer && <div className={styles.computerShake}>{options[0].icon}</div>}
                {results?.winner && (
                    <>
                        {options[computerHand].icon}
                        <p>{options[computerHand].name}</p>
                    </>
                    )}
            </div>
        </div>
        <div className={styles.choiceBtnCtn}>
            <button className={styles.choiceBtn} onClick={() => selectOption(0)}>
                <img src={tas} alt={tas} style={{width:150, height:150}}/>
                Taş
            </button>
            <button className={styles.choiceBtn} onClick={() => selectOption(1)}>
                <img src={kagit} alt={kagit} style={{width:150, height:150}}/>
                Kağıt
            </button>
            <button className={styles.choiceBtn} onClick={() => selectOption(2)}>
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

export default App;
