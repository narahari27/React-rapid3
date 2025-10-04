const Shimmer = ()=>{
    const cards = [];
    let i = 0;
    for(i=0; i<10; i++){
        cards.push(<div className="shimmer-card" key={i}>Cards</div>)
    }
return(
    <div className="shimmer-container">
        {cards}
    </div>
)
};
export default Shimmer;