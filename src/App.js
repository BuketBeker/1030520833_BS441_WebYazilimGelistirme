import { useEffect, useState } from 'react';
import './App.css';
import styles from './App.module.css'
import tas from './tas.jpeg';
import kagit from './kagit.jpeg';
import makas from './makas.jpeg';

function App() {
  const [player, setPlayer] = useState(0);
  const [computer, setComputer] = useState(0);
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

  const selectOption = (handIndex) => {
      //setResults({kazanan: '', message: ''}); //koymayabilirsin
      setPlayer(handIndex);
  };

  const generateComputer = () => {
      const randomNumber = Math.floor(Math.random() * 3);
      setComputer(randomNumber);
  };

  const start = () => {
     setResults({kazanan: '', message: ''});
     setRunTimer(true);
     generateComputer();
  };
  const play = () => {
      if (options[player].name === 'Taş' && options[computer].name === 'Taş'){
          setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'});
      } else if (options[player].name === 'Kağıt' && options[computer].name === 'Kağıt'){
          setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'})
      } else if (options[player].name === 'Makas' && options[computer].name === 'Makas'){
          setResults({kazanan: 'Hiç kimse', message: 'Berabere kaldınız'})
      } else if (options[player].name === 'Taş' && options[computer].name === 'Kağıt'){
          setResults({kazanan: 'Computer', message: 'Kağıt taşı yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[player].name === 'Taş' && options[computer].name === 'Makas'){
          setResults({kazanan: 'Player', message: 'Taş makası yener'})
          setScore({...score, player: score.player + 1})
      } else if (options[player].name === 'Kağıt' && options[computer].name === 'Taş'){
          setResults({kazanan: 'Player', message: 'Kağıt taşı yener'})
          setScore({...score, player: score.player + 1})
      } else if (options[player].name === 'Kağıt' && options[computer].name === 'Makas'){
          setResults({kazanan: 'Computer', message: 'Makas kağıdı yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[player].name === 'Makas' && options[computer].name === 'Taş'){
          setResults({kazanan: 'Computer', message: 'Taş makası yener'})
          setScore({...score, computer: score.computer + 1})
      } else if (options[player].name === 'Makas' && options[computer].name === 'Kağıt'){
          setResults({kazanan: 'Player', message: 'Makas kağıdı yener'})
          setScore({...score, player: score.player + 1})
      }
  };
  console.log('player is:', player);
  console.log('computer is:', computer);

  return (
    <div className={styles.container}>
        <div className={styles.titleCtn}>
          <h1>TAŞ - KAĞIT - MAKAS</h1>
          <p>React Game!</p>
        </div>
        <div className={styles.scoreContainer}>
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
            <div className={styles.player}>
                {runTimer && <div className={styles.playerHand}>{options[0].icon}</div>}
                {results?.kazanan && (
                    <>
                        {options[player].icon}
                        <p>{options[player].name}</p>
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
                        {options[computer].icon}
                        <p>{options[computer].name}</p>
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
