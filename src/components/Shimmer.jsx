const Shimmer = ()=>{
    const cards = [];
    let i = 0;
    for(i=0; i<10; i++){
        cards.push(<div className="shimmer-card w-[250px] h-96 rounded overflow-hidden shadow-lg m-2 p-4" style={{backgroundColor:"#f0f0f0"}} key={i}>Cards</div>)
    }
return(
    <div className="shimmer-container flex flex-wrap res-card " >
        {cards}
    </div>
)
};
export default Shimmer;