import "../styles.css";
const comdatas = [
    {
        title: "listening",
        items: <ul>
            <li>Itels listening</li>
        </ul>
    },  
    {
        title: "reading",
        items: <ul>
            <li>Itels reading</li>
        </ul>
    },
    {
        title: "Writing",
        items: <ul>
            <li>Itels Writing1</li>
            <li>Itels Writing1</li>
            <li>Itels Writing1</li>
        </ul>
    },
    {
        title: "Speaking",
        items: <ul>
            <li>Itels Reading</li>
        </ul>
    },
    {
        title: "practise",
        items: <ul>
            <li>Itels Reading</li>
        </ul>
    },
]
function Itelsmodcom(){
    const comdatasUI = comdatas.map(function(comdata){
        return(
            <div>
           <div className="nav-title"> {comdata.title}</div>
           <div className="nav-items">{comdata.items}</div>
        </div>
        )
    })
    return(
        <div className="nav-cont">
            {comdatasUI}
        </div>       
    )
}
export default Itelsmodcom;