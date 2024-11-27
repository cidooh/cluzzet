function Collectionlist(props) {
    return (
      <div className= "p-10 flex justify-between items-end">
        <div className="lg:display">
          <p>{props.subtitle}</p>
          <h4>{props.title}</h4>
          <p>{props.shop}</p>
        </div>
        <div className="">
          <img src={props.img} className="w-[200px] h-[100%] object-cover"/>
        </div>
      </div>
    );
  }
  export default Collectionlist