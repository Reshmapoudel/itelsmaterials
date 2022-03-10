import "../styles.css";
const datas3 = [
    {
        items3: <ul>
            <li>self placed learning</li>
            <li>Academic</li>
            <li>General</li>
        </ul>
    }
]
function Videocourse3(){
    const datas3UI = datas3.map(function(data3){
        return(
            <div>
                {data3.items3}
            </div>
        )
    })
    return(
        <div className="data3-items">
            {datas3UI}
        </div>
    )
}
export default Videocourse3;