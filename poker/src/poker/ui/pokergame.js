import "../../homescreen.css";
import React, { Component } from 'react'
import { useParams } from "react-router-dom";
import { ColorContext } from "../../context/colorcontext";
import GameBackground from "./GameBackground";
import _2_of_clubs from "../assets/images/2_of_clubs.png";
import _2_of_diamonds from "../assets/images/2_of_diamonds.png";
import _2_of_hearts from "../assets/images/2_of_hearts.png";
import _2_of_spades from "../assets/images/2_of_spades.png";
import _3_of_clubs from "../assets/images/3_of_clubs.png";
import _3_of_diamonds from "../assets/images/3_of_diamonds.png";
import _3_of_hearts from "../assets/images/3_of_hearts.png";
import _3_of_spades from "../assets/images/3_of_spades.png";
import _4_of_clubs from "../assets/images/4_of_clubs.png";
import _4_of_diamonds from "../assets/images/4_of_diamonds.png";
import _4_of_hearts from "../assets/images/4_of_hearts.png";
import _4_of_spades from "../assets/images/4_of_spades.png";
import _5_of_clubs from "../assets/images/5_of_clubs.png";
import _5_of_diamonds from "../assets/images/5_of_diamonds.png";
import _5_of_hearts from "../assets/images/5_of_hearts.png";
import _5_of_spades from "../assets/images/5_of_spades.png";
import _6_of_clubs from "../assets/images/6_of_clubs.png";
import _6_of_diamonds from "../assets/images/6_of_diamonds.png";
import _6_of_hearts from "../assets/images/6_of_hearts.png";
import _6_of_spades from "../assets/images/6_of_spades.png";
import _7_of_clubs from "../assets/images/7_of_clubs.png";
import _7_of_diamonds from "../assets/images/7_of_diamonds.png";
import _7_of_hearts from "../assets/images/7_of_hearts.png";
import _7_of_spades from "../assets/images/7_of_spades.png";
import _8_of_clubs from "../assets/images/8_of_clubs.png";
import _8_of_diamonds from "../assets/images/8_of_diamonds.png";
import _8_of_hearts from "../assets/images/8_of_hearts.png";
import _8_of_spades from "../assets/images/8_of_spades.png";
import _9_of_clubs from "../assets/images/9_of_clubs.png";
import _9_of_diamonds from "../assets/images/9_of_diamonds.png";
import _9_of_hearts from "../assets/images/9_of_hearts.png";
import _9_of_spades from "../assets/images/9_of_spades.png";
import _10_of_clubs from "../assets/images/10_of_clubs.png";
import _10_of_diamonds from "../assets/images/10_of_diamonds.png";
import _10_of_hearts from "../assets/images/10_of_hearts.png";
import _10_of_spades from "../assets/images/10_of_spades.png";
import _jack_of_clubs from "../assets/images/jack_of_clubs.png";
import _jack_of_diamonds from "../assets/images/jack_of_diamonds.png";
import _jack_of_hearts from "../assets/images/jack_of_hearts.png";
import _jack_of_spades from "../assets/images/jack_of_spades.png";
import _queen_of_clubs from "../assets/images/queen_of_clubs.png";
import _queen_of_diamonds from "../assets/images/queen_of_diamonds.png";
import _queen_of_hearts from "../assets/images/queen_of_hearts.png";
import _queen_of_spades from "../assets/images/queen_of_spades.png";
import _king_of_clubs from "../assets/images/king_of_clubs.png";
import _king_of_diamonds from "../assets/images/king_of_diamonds.png";
import _king_of_hearts from "../assets/images/king_of_hearts.png";
import _king_of_spades from "../assets/images/king_of_spades.png";
import _ace_of_clubs from "../assets/images/ace_of_clubs.png";
import _ace_of_diamonds from "../assets/images/ace_of_diamonds.png";
import _ace_of_hearts from "../assets/images/ace_of_hearts.png";
import _ace_of_spades from "../assets/images/ace_of_spades.png";
import Button from 'react-bootstrap/Button'
import ReactSlider from 'react-slider';
import Modal from 'react -bootstrap/Modal'
import Strength0 from "../assets/images/0.png";
import Strength1 from "../assets/images/1.png";
import Strength2 from "../assets/images/2.png";
import Strength3 from "../assets/images/3.png";
import Strength4 from "../assets/images/4.png";
import Strength5 from "../assets/images/5.png";
import Strength6 from "../assets/images/6.png";
import Strength7 from "../assets/images/7.png";
import Strength8 from "../assets/images/8.png";
import Strength9 from "../assets/images/9.png";
const socket = require("../../connection/socket").socket;
var timerInterval = null;
var Hand = require("pokersolver").Hand;
var hands = [];
var roundStarter;
var playerNames = [];
var findMyName;
var temp = 0;
var inRound = [];
var greatestBet;
var StrengthOne, StrengthTwo, StrengthThree, StrengthFour, StrengthZero;
var Strength = [null, null, null, null, null, null, null, null, null];
var cardsThisRound = [
  { name: "2s", image: _2_of_spades },
  { name: "3s", image: _3_of_spades },
  { name: "4s", image: _4_of_spades },
  { name: "5s", image: _5_of_spades },
  { name: "6s", image: _6_of_spades },
  { name: "7s", image: _7_of_spades },
  { name: "8s", image: _8_of_spades },
  { name: "9s", image: _9_of_spades },
  { name: "Ts", image: _10_of_spades },
  { name: "Js", image: _jack_of_spades },
  { name: "Qs", image: _queen_of_spades },
  { name: "Ks", image: _king_of_spades },
  { name: "As", image: _ace_of_spades },
  { name: "2d", image: _2_of_diamonds },
  { name: "3d", image: _3_of_diamonds },
  { name: "4d", image: _4_of_diamonds },
  { name: "5d", image: _5_of_diamonds },
  { name: "6d", image: _6_of_diamonds },
  { name: "7d", image: _7_of_diamonds },
  { name: "8d", image: _8_of_diamonds },
  { name: "9d", image: _9_of_diamonds },
  { name: "Td", image: _10_of_diamonds },
  { name: "Jd", image: _jack_of_diamonds },
  { name: "Qd", image: _queen_of_diamonds },
  { name: "Kd", image: _king_of_diamonds },
  { name: "Ad", image: _ace_of_diamonds },
  { name: "2c", image: _2_of_clubs },
  { name: "3c", image: _3_of_clubs },
  { name: "4c", image: _4_of_clubs },
  { name: "5c", image: _5_of_clubs },
  { name: "6c", image: _6_of_clubs },
  { name: "7c", image: _7_of_clubs },
  { name: "8c", image: _8_of_clubs },
  { name: "9c", image: _9_of_clubs },
  { name: "Tc", image: _10_of_clubs },
  { name: "Jc", image: _jack_of_clubs },
  { name: "Qc", image: _queen_of_clubs },
  { name: "Kc", image: _king_of_clubs },
  { name: "Ac", image: _ace_of_clubs },
  { name: "2h", image: _2_of_hearts },
  { name: "3h", image: _3_of_hearts },
  { name: "4h", image: _4_of_hearts },
  { name: "5h", image: _5_of_hearts },
  { name: "6h", image: _6_of_hearts },
  { name: "7h", image: _7_of_hearts },
  { name: "8h", image: _8_of_hearts },
  { name: "9h", image: _9_of_hearts },
  { name: "Th", image: _10_of_hearts },
  { name: "Jh", image: _jack_of_hearts },
  { name: "Qh", image: _queen_of_hearts },
  { name: "Kh", image: _king_of_hearts },
  { name: "Ah", image: _ace_of_hearts },
];
// Start with an initial value of 15 seconds
const TIME_LIMIT = 15;
// Initially, no time has passed, but this will count up
// and subtract from the TIME_LIMIT
let timePassed = 0;
let timeLeft = TIME_LIMIT;
var flopCnt = 0, turnCnt = 0, riverCnt = 0, someonesTurnCnt = 0, roundOverCnt = 0;
var bet = [], currentBet;
const ChessGameWrapper = (props) => {
  /**
   * player 1
   *      - socketId 1
   *      - socketId 2 ???
   * player 2
   *      - socketId 2
   *      - socketId 1
   */

  // get the gameId from the URL here and pass it to the chessGame component as a prop.
  const domainName = "https://poker-c02be.web.app";
  const color = React.useContext(ColorContext);
  const { gameid } = useParams();
  // const [play] = useSound(chessMove);
  const [SocketId, setSocketId] = React.useState([]);
  const [opponentDidJoinTheGame, didJoinGame] = React.useState(false);
  const [OpponentUserName, setUserName] = React.useState([]);
  const [gameSessionDoesNotExist, doesntExist] = React.useState(false);
  const [enoughPlayersForGame, setEnoughPlayersForGame] = React.useState(false);
  const [smallBlind, setSmallBlind] = React.useState(5);
  const [pot, setPot] = React.useState(0);
  const [cards, setCards] = React.useState(cardsThisRound);
  const [playersTurn, setPlayersTurn] = React.useState(false);
  const [raise, setRaise] = React.useState(false);
  const [flop, setFlop] = React.useState(false);
  const [turn, setTurn] = React.useState(false);
  const [river, setRiver] = React.useState(false);
  const [notRaiseButton, setNotRaiseButton] = React.useState(true);
  const [notClicked1, setNotClicked1] = React.useState(true);
  const [notClicked2, setNotClicked2] = React.useState(true);
  const [notClicked3, setNotClicked3] = React.useState(true);
  const [notClicked4, setNotClicked4] = React.useState(true);
  const [pos, setPos] = React.useState(0);
  const [sidePot, setSidePot] = React.useState(0);
  const sidePotRef = React.useRef();
  const posRef = React.useRef();
  const potRef = React.useRef();
  const flopRef = React.useRef();
  const turnRef = React.useRef();
  const riverRef = React.useRef();
  const cardsRef = React.useRef();
  const notClicked1Ref = React.useRef();
  const notClicked2Ref = React.useRef();
  const notClicked3Ref = React.useRef();
  const notClicked4Ref = React.useRef();
  const smallBlindRef = React.useRef();
  smallBlindRef.current = smallBlind;
  cardsRef.current = cards;
  flopRef.current = flop;
  potRef.current = pot;
  turnRef.current = turn;
  riverRef.current = river;
  notClicked1Ref.current = notClicked1;
  notClicked2Ref.current = notClicked2;
  notClicked3Ref.current = notClicked3;
  notClicked4Ref.current = notClicked4;
  posRef.current = pos;
  sidePotRef.current = sidePot;
  var makesurerunsonce = 0, callCnt = 0;
  React.useEffect(() => {
    socket.on("status", (statusUpdate) => {
      console.log(statusUpdate);
      //alert(statusUpdate)
      if (
        statusUpdate === "This game session does not exist." ||
        statusUpdate === "There are too many people playing in this room."
      ) {
        doesntExist(true);
      }
    });

    socket.on("roundStarted", data => {
      roundStarter = data;
      console.log(`${playerNames[roundStarter].username} starts!`)
      if (makesurerunsonce == 0){
        console.log(`${makesurerunsonce} is 0`)
      }
      else{
        playerNames[(data-1+playerNames.length)%playerNames.length].money -= 2 * smallBlind;
        playerNames[(data-2+playerNames.length)%playerNames.length].money -= smallBlind;
      }
      makesurerunsonce = 1;
      bet [(data-2+playerNames.length)%playerNames.length] += smallBlind;
      bet[(data-1+playerNames.length)%playerNames.length] += 2 * smallBlind;
      greatestBet = bet.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, bet) => currentlyTestedValue > bet[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0);
      if (data == findMyName){
        setPlayersTurn(true);
      }
    })

    socket.on('shuffled', data => {
      setCards(data);
    })
    socket.on('called', data => {
      greatestBet = bet.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, bet) => currentlyTestedValue > bet[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0);
      console.log(`greatestBet is ${greatestBet}`)
      someonesTurnCnt = 0;
      if ((bet[greatestBet] <= data.money + bet[data.name]) && callCnt == 0){
        someonesTurnCnt = 0;
        setPot(potRef.current + (bet[greatestBet] - bet[data.name]));
        console.log(`bet ${(bet[greatestBet] - bet[data.name])}`)
        playerNames[data.name].money -= (bet[greatestBet] - bet[data.name]);
        setSocketId(playerNames);
        socket.emit('someonesTurn', (data.name+1)%playerNames.length)
        callCnt++;
      }
      else {
        someonesTurnCnt = 0;
        setPot(potRef.current+playerNames[data.name].money);
        playerNames[data.name].money = 0;
        setSocketId(playerNames);
        socket.emit('someonesTurn', (data.name+1)%playerNames.length)
      }
    })
    socket.on('raised', data => {
      someonesTurnCnt = 0;
      console.log('raised')
      setRaise(true);
      bet[data.name] += data.money;
      setPot(potRef.current+data.money);
      playerNames[data.name].money -= data.money;
      console.log(playerNames[data.name].money)
      setSocketId(playerNames);
      roundStarter = data.name;
      greatestBet = bet.reduce((bestIndexSoFar, currentlyTestedValue, currentlyTestedIndex, bet) => currentlyTestedValue > bet[bestIndexSoFar] ? currentlyTestedIndex : bestIndexSoFar, 0);
      socket.emit('someonesTurn', (data.name+1)%inRound.length)
      currentBet = data.money;
    })
    socket.on('checked', data =>{
      someonesTurnCnt = 0;
      for (var i = data; i < data+playerNames.length; i++){
        if (i == data) continue;
        if (playerNames[i%playerNames.length].money > 0){
          socket.emit('someonesTurn', i%playerNames.length)
          break;
        }
      }
    })
    socket.once("starteddagame", (data) => {
      console.log('once?')
      for (var i = 0; i < data.length; i++){
        playerNames[i] = data[i]
        inRound[i] = true;
        bet[i] = 0;
      }
      setPot(3*smallBlind);
      playerNames[(0+playerNames.length)%playerNames.length].money -= 2 * smallBlind;
      playerNames[(-1+playerNames.length)%playerNames.length].money -= smallBlind;
      setSocketId(playerNames);
      findMyName = playerNames.findIndex(i => i.username === props.myUserName);
      didJoinGame(true);
      socket.emit("beginRound");
    });

    socket.on('roundIsOver', (winner)=>{
      if (temp == 0){
        setFlop(false);
        setTurn(false);
        setRiver(false);
        someonesTurnCnt = 0;
        turnCnt = 0;
        riverCnt = 0;
        roundOverCnt = 0;
        playerNames[winner].money += potRef.current;
        setSocketId(playerNames);
        setPot(0);
        // console.log(`winner is ${playerNames[winner].username}`)
        for (var i = 0; i < playerNames.length; i++){
          if (playerNames[i].money != 0){
            inRound[i] = true;
          }
          else{
            inRound[i] = false;
          }
        }
        socket.emit('beginRound');
        socket.emit('shuffle', cardsThisRound)
      }
      someonesTurnCnt = 0;
      turnCnt = 0;
      riverCnt = 0;
      roundOverCnt = 0;
      temp++;
    })

    socket.on('folded', (data)=>{
      someonesTurnCnt = 0;
      inRound[data] = false;
      if (inRound.filter(x => x ==true).length == 1){
        var winner = inRound.findIndex(x => x ==true)
        socket.emit('roundOver', winner);
        //console.log(winner)
        setPlayersTurn(false);
        temp = 0;
      }
      else{
        setPlayersTurn(false);
            socket.emit('someonesTurn', (data+1)%inRound.length);
      }
      // socket.emit('beginRound');
    })
    socket.on('turnIncoming', ()=>{
      console.log('turn came')
      setTurn(true)
      setRaise(false);
      setPos(2*smallBlindRef.current)
    })
    socket.on('someonesTurnn', data => {
      console.log(`it is ${playerNames[data].username}'s turn. '`)
      console.log(`somonesTurnCnt is now ${someonesTurnCnt}`)
      if (someonesTurnCnt == 0 ){
        callCnt = 0;
        temp = 0;
        if (data == roundStarter){
          console.log('we getting here')
          if (flopCnt != 0) socket.emit("flop");
          if (flopRef.current && turnCnt != 0) socket.emit('turn')
          if (flopRef.current && turnRef.current && riverCnt != 0) socket.emit('river')
          if (flopRef.current && turnRef.current && riverRef.current && roundOverCnt != 0){
            for (var i = 0; i < playerNames.length; i++){
              if (inRound[i] == true){
                hands[i] = Hand.solve([cardsRef.current[i].name, cardsRef.current[i+10].name, cardsRef.current[47].name, cardsRef.current[48].name, cardsRef.current[49].name, cardsRef.current[50].name, cardsRef.current[51].name]); 
              }
              else {
                hands[i] = Hand.solve(['2d']);
              }
            }
            var winner = Hand.winners(hands);
            for (var i = 0; i < playerNames.length; i++){
              if (hands[i].cardPool[0] == winner[0].cardPool[0] && hands[i].cardPool[1] == winner[0].cardPool[1] && hands[i].cardPool[2] == winner[0].cardPool[2] &&  hands[i].cardPool[3] == winner[0].cardPool[3] &&  hands[i].cardPool[4] == winner[0].cardPool[4] &&  hands[i].cardPool[5] == winner[0].cardPool[5] &&  hands[i].cardPool[6] == winner[0].cardPool[6]){
                console.log(`${playerNames[i].username} wins!`)
                socket.emit('roundOver', i)
              }
            }
          } //SOMEHOW FIND WINNERsocket.emit()
        } 
        if ((findMyName == data && playerNames[data].money == 0)){
          console.log(`roundstarter is ${roundStarter}`)
          if (flopRef.current == false) flopCnt++;
          else if (flopRef.current == true && turnRef.current == false) turnCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current == false) riverCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current) roundOverCnt++;
          socket.emit('somonesTurn', (data+1)%inRound.length);
        }
        else if(findMyName == data && inRound[data] == true){
          if (!flopRef.current) flopCnt++;
          else if (flopRef.current && turnRef.current == false) turnCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current == false) riverCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current) roundOverCnt++;
          setPlayersTurn(true);
          console.log(`turn count is ${turnCnt}`)
        } 
        else if ((findMyName == data && inRound[data] == false)){
          socket.emit('someonesTurn', (data+1)%inRound.length);
          console.log(`folded player went`)
          if (flopRef.current == false) flopCnt++;
          else if (flopRef.current == true && turnRef.current == false) turnCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current == false) riverCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current) roundOverCnt++;
        }
      }
      else{
        if ((findMyName == data && playerNames[data].money == 0)){
          console.log(`roundstarter is ${roundStarter}`)

          if (flopRef.current == false) flopCnt++;
          else if (flopRef.current == true && turnRef.current == false) turnCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current == false) riverCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current) roundOverCnt++;
          socket.emit('somonesTurn', (data+1)%inRound.length);
        }
        else if (findMyName == data && inRound[data] == false){
          socket.emit('someonesTurn', (data+1)%inRound.length);
          console.log('folded player skipped')
        }
        else if (findMyName == data && inRound[data] == true){
          if (!flopRef.current) flopCnt++;
          else if (flopRef.current && turnRef.current == false) turnCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current == false) riverCnt++;
          else if (flopRef.current && turnRef.current && riverRef.current) roundOverCnt++;
          setPlayersTurn(true);
        }
      }
      someonesTurnCnt++;
    })
    socket.on("give userName", (socketId) => {
      if (socket.id !== socketId) {
        console.log("give userName stage: " + props.myUserName);
        socket.emit("recieved userName", {
          userName: props.myUserName,
          gameId: gameid,
        });
      }
    });
    socket.on('flopIncoming', ()=>{
      console.log('yeahhhhh');
      setFlop(true);
      setRaise(false);
      setPos(2*smallBlindRef.current)
    })
    socket.on('riverIncoming', ()=>{
      setRiver(true);
      setRaise(false);     
      setPos(2*smallBlindRef.current)
    })
    socket.on("get Opponent UserName", (data) => {
      if (socket.id !== data.socketId) {
        setUserName(data.userName);
        console.log("data.socketId: data.socketId");
        // setOpponentSocketId(data.socketId)
        didJoinGame(true);
      }
    });
  }, []);
  
    socket.once('gameStarted', () => {
      didJoinGame(true);
    })
    socket.once('startbutton', (test) => {
      setEnoughPlayersForGame(true);
    });
React.useEffect(()=>{
  socket.once("playerJoinedRoom", (statusUpdate) => {
    console.log(
      "A new player has joined the room! Username: " +
        statusUpdate.userName +
        ", Game id: " +
        statusUpdate.gameId +
        " Socket id: " +
        statusUpdate.mySocketId
    );
    socket.emit("addSockets", {
      socketid: statusUpdate.mySocketId,
      username: statusUpdate.userName,
      gameid: statusUpdate.gameId,
    });
    //console.log(`${statusUpdate.userName} sent out`)
  });
}, [])
  
  function startingGame(){
    socket.emit('shuffle', cardsThisRound);
    socket.emit("startdagame");
  }
  function fold(){
    socket.emit('fold', findMyName)
  }
  function check(){
    socket.emit('check', findMyName);
    setPlayersTurn(false);
  }
  function raisee(){
    setNotRaiseButton(false);
  }
  function flip1(){
    notClicked1Ref.current ? setNotClicked1(false) : setNotClicked1(true);
    setNotClicked2(true);
    setNotClicked3(true);
    setNotClicked4(true);
    if (playerNames[findMyName].money >= Math.floor(potRef.current/4))
    {
      setPos(Math.floor(potRef.current/4))
    }
    else {
      setPos(playerNames[findMyName].money)
    }
  }
  function flip2(){
    notClicked2Ref.current ? setNotClicked2(false) : setNotClicked2(true);
    setNotClicked1(true);
    setNotClicked3(true);
    setNotClicked4(true);
    if (playerNames[findMyName].money >= Math.floor(potRef.current/2))
    {
      setPos(Math.floor(potRef.current/2))
    }
    else {
      setPos(playerNames[findMyName].money)
    }  
  }
  function flip3(){
    notClicked3Ref.current ? setNotClicked3(false) : setNotClicked3(true);
    setNotClicked2(true);
    setNotClicked1(true);
    setNotClicked4(true); 
    if (playerNames[findMyName].money >= Math.floor(potRef.current/4*3))
    {
      setPos(Math.floor(potRef.current/4*3))
    }
    else {
      setPos(playerNames[findMyName].money)
    }  
  }
  function flip4(){
    notClicked4Ref.current ? setNotClicked4(false) : setNotClicked4(true);
    setNotClicked2(true);
    setNotClicked3(true);
    setNotClicked1(true);
    if (playerNames[findMyName].money >= Math.floor(potRef.current))
    {
      setPos(Math.floor(potRef.current))
    }
    else {
      setPos(playerNames[findMyName].money)
    }  
  }
  function emitRaise(){
    if (posRef.current == 0){
      setNotRaiseButton(true);
    }
    else {
      setNotRaiseButton(true);
      setPlayersTurn(false);
      socket.emit('raise', {money: posRef.current, name: findMyName});
    }
  }
  function call(){
    setPlayersTurn(false);
    socket.emit('call', {money: playerNames[findMyName].money, name: findMyName});
  }
  return (
    <React.Fragment>
      {<GameBackground />}
      {opponentDidJoinTheGame ? (
      <>
      {
      <div className = "bottom-middle"><img className = "imageSmall" src = {cards[findMyName].image}/><img className = "imageSmall" src = {cards[findMyName+10].image}/><p className = "f0nt, white" >{SocketId[findMyName].username} Money: {SocketId[findMyName].money}</p></div>
      }
      {SocketId[(findMyName+1)%playerNames.length] ? <div className = "left-side"><p className = "f0nt, white" >{SocketId[(findMyName+1)%playerNames.length].username} Money: {SocketId[(findMyName+1)%playerNames.length].money}</p></div>
      : <></>
      }
      {(SocketId[(findMyName+2)%playerNames.length] && playerNames.length > 2) ? <div className = "top-left"><p className = "f0nt, white" >{SocketId[(findMyName+2)%playerNames.length].username} Money: {SocketId[(findMyName+2)%playerNames.length].money}</p></div>
      : <></>
      }
      {(SocketId[(findMyName+3)%playerNames.length] && playerNames.length > 3)? <div className = "top-right"><p className = "f0nt, white" >{SocketId[(findMyName+3)%playerNames.length].username} Money: {SocketId[(findMyName+3)%playerNames.length].money}</p></div>
      : <></>
      }
      {(SocketId[(findMyName+4)%playerNames.length] && playerNames.length > 4)? <div className = "right-side"><p className = "f0nt, white" >{SocketId[(findMyName+4)%playerNames.length].username} Money: {SocketId[(findMyName+4)%playerNames.length].money}</p></div>
      : <></>
      }
      <div className = "dealersdiv">{flop ? <>{<img className = "imageSmall" src = {cards[51].image}/>}{<img className = "imageSmall" src = {cards[50].image}/>}{<img className = "imageSmall" src = {cards[49].image}/>}{turn ? <img className = 'imageSmall' src={cards[48].image}/> : <></>}{river ? <img className = 'imageSmall' src = {cards[47].image}/> : <></>}</> : <></>}
      <p className = "f0nt, white" >Pot: {pot} {sidePotRef.current !== 0 ? sidePot : ""}</p></div>
      <div className = "bottom-right">
      { 
          (playersTurn && !raise && notRaiseButton) ? <><Button style = {{margin: 10}} variant = "primary" onClick={check}>Check</Button>
          <Button style = {{margin: 10}} variant = "primary" onClick = {raisee}>Raise</Button>
          <Button style = {{margin: 10}} variant = "primary" onClick={fold}>Fold</Button></> : 
          (playersTurn && raise && notRaiseButton) ? <><Button onClick = {call} style = {{margin: 10}} variant = "primary">{playerNames[findMyName].money <= bet ? "All in" : "Call"}</Button>
          <Button style = {{margin: 10}} variant = "primary" onClick = {raisee}>Raise</Button>
          <Button style = {{margin: 10}} variant = "primary" onClick = {fold}>Fold</Button></> : (playersTurn && !notRaiseButton) ? <>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Choose your amount to bet.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <ReactSlider
              min = {raise ? bet[greatestBet] : smallBlindRef.current*2}
              max = {playerNames[findMyName].money}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => <div style = {{color: "black"}} {...props}><p style = {{color: "black"}}>{state.valueNow}</p></div>}
              onChange = {(value) => {setPos(value); setNotClicked1(true); setNotClicked2(true); setNotClicked3(true); setNotClicked4(true);
              }}/>
              
            <h1 style = {{color: "black"}}> OR </h1>
            <div style = {{margin: 10}}></div>
            <Button style = {{margin: 5}} variant={notClicked1 ? "outline-primary" : "primary"} onClick = {flip1}>Quarter Pot</Button>
            <Button style = {{margin: 5}} variant={notClicked2 ? "outline-primary" : "primary"} onClick = {flip2}>Half Pot</Button>
            <Button style = {{margin: 5}} variant={notClicked3 ? "outline-primary" : "primary"} onClick = {flip3}>Three Quarters Pot</Button>
            <Button style = {{margin: 5}} variant={notClicked4 ? "outline-primary" : "primary"} onClick = {flip4}>Pot</Button>
            <p>You will raise to ${pos}</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="outline-secondary" onClick={() => setNotRaiseButton(true)}>Close</Button>
              <Button onClick ={emitRaise} variant="outline-primary">Confirm</Button>
            </Modal.Footer>
          </Modal.Dialog>
          </> : <></>
      }
      </div>
      
      </>
      ) :
      gameSessionDoesNotExist ? (
        <div>
          <h1 style={{ textAlign: "center", marginTop: "200px" }}>
            {" "}
            error bro{" "}
          </h1>
        </div>
      ) : (
        <div className="container">
          <div className="menu">
            <h1 className="f0nt">
              <strong>{props.myUserName}</strong>, copy and paste the URL below
              to send to your friend:
            </h1>
            <textarea
              className="f0nt"
              style={{ textAlign: "center", width: "75%"}}
              onFocus={(event) => {
                console.log("sd");
                event.target.select();
              }}
              value={domainName + "/game/" + gameid}
              type="text"
              id="copy"
            ></textarea>
            <h1 style={{ textAlign: "center" }}>
              {" "}
              Waiting for other opponent to join the game...{" "}
            </h1>
            {enoughPlayersForGame ? (
              <Button variant = "primary" onClick={startingGame}>Start Game</Button>
            ) : (
              <Button variant="secondary" disabled>
                Can't Start Game Yet
              </Button>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ChessGameWrapper;