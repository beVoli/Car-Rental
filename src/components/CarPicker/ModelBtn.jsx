const ModelBtn = (props) => {
  const showInfoHandler = (e) => { 
    const car = props.model;
    props.onShowInfo(car);
  }
  
  return (
    <button className={`model-pick ${props.active ? 'active' : ''}`} onClick={showInfoHandler}>
      {props.model.mark + " " + props.model.model}
    </button>
  );
};

export default ModelBtn;
