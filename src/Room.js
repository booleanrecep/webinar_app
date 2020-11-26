import React from "react";

const Room = (props) => {
  const {gonder,sor,srlr}={...props.changeLang}
  const [state,setState]=React.useState({
    soru:"",
    sorular:[]
  })
  const handleChange=(e)=>{
    e.persist()
    e.preventDefault()
    setState(prevState=>({
      ...prevState,
      soru:e.target.value
    }))
   
  }
  const addSoru=()=>{
    setState({
      soru:"",
      sorular:[...state.sorular,state.soru]
    })
    
  }
  return (
    <>
    <div id="video-div">
      <video controls>
        <source src="https://www.youtube.com/embed/cEJy2q27hVk" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
      <p>{sor}</p>
      <input maxLength="100" type="text" value={state.soru} name="soru" onChange={handleChange}/>
      <button onClick={addSoru}>{gonder}</button>
    </div>
    <div className="questions">
        <h5>{srlr}</h5>
        {state.sorular.map(sr=>{
          return(
        <p><b>*</b>{sr}</p>

          )
        })}
    </div>
    </>
  );
};

export default Room;
