import React, { useRef, useState } from 'react'
import Audio1 from '../audio1.mp3'
import Audio2 from '../audio2.mp3'
import Audio3 from '../audio3.mp3'
import Img1 from '../img1.jpg'
import Img2 from '../img2.jpg'
import Img3 from '../img3.jpg'
import { FaBackward,FaPause,FaForward } from "react-icons/fa6";
import { FaPlay ,FaSearch} from "react-icons/fa";
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
import { MdOutlineLoop } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import design from "../CSS/audio.module.CSS"

const AudioPlayer = () => {
  let [currentsongindex,setcurrentsongindex]=useState(0);
  let [isplaying,setisplaying]=useState(false);
  let [currenttime,setcurrenttime]=useState(0);
  let [Loop,setLoop]=useState(false)
  let [like,setlike]=useState(false)
  let songs=[{
    title:"Disco Deewani",
    src:Audio1,
    poster:Img1
  },
  {
    title:"Ek bar aja",
    src:Audio2,
    poster:Img2
  },
  {
    title:"Peace",
    src:Audio3,
    poster:Img3
  }
]
let currentsong=songs[currentsongindex]
let audioref=useRef(null)
// console.log(audioref)

let playorpause=()=>{
  if(isplaying){
    audioref.current.pause()
    // console.log(audioref)
  }else 
    {
    audioref.current.play()
    // console.log(audioref)
  }
  
  setisplaying(!isplaying)
}
let timeupdateHandler=()=>{
  setcurrenttime(audioref.current.currentTime)
}

let dragHandler=(e)=>{
  audioref.current.currentTime=e.target.value;
  console.log(e.target.value)
  setcurrenttime(e.target.value)
}
let skipHandler=(direction)=>{
  if(direction==="skip-forward"){
    setcurrentsongindex((prevIndex)=>(prevIndex+1)%songs.length)
  }
  else if(direction==="skip-back"){
    setcurrentsongindex((prevIndex)=>(prevIndex-1+songs.length)%songs.length)
  }
  setisplaying(true);
}
let loopfunc=()=>{
  if(Loop){
    setLoop(false)
  }
  else{
    setLoop(true)
  }
}

let likefunc=()=>{
  if(like)
  {
    setlike(false)
  }else if(!like){
    setlike(true)
  }
}



  return (
    <section className={design.container}>
      <article className={design.cards}>
      <div className={design.loopcard}>
      <button>{<FaSearch />}</button>
      <button ><IoIosMore /></button>
      
      </div>
      <img src={currentsong.poster} alt="" className={design.image} />
      <h1 className={design.title}>{currentsong.title}</h1>
      <audio 
      loop={Loop}
      src={currentsong.src}
      ref={audioref}
      onTimeUpdate={timeupdateHandler}
      onEnded={()=>skipHandler("skip-forward")}
      autoPlay
      ></audio>

      <div className={design.loopcard}>
      <button onClick={likefunc}>{like?<FcLike />:<FcLikePlaceholder />}</button>
      <button onClick={loopfunc} >{Loop?<MdOutlineLoop style={{color:"green"}} />:<MdOutlineLoop style={{color:"red"}}/>}</button>
      
      </div>
      <div>
        <input className={design.inp} 
        type="range"
        onChange={dragHandler}
        value={currenttime}
        max={audioref.current?audioref.current.duration:0}/>
      </div>
      <div className={design.controlbtns}>
        <button onClick={()=>skipHandler("skip-back")}><FaBackward /></button>
        <button onClick={playorpause}>{isplaying ? <FaPause />:<FaPlay />}</button>
        <button onClick={()=>skipHandler("skip-forward")}><FaForward /></button>
        
      </div>
      </article>
      
    </section>
  )
}

export default AudioPlayer
