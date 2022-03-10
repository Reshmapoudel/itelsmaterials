import "../styles.css";
const datas2 =[
    {
        items2:  <ul>
        <li><span className="itels-name">ielts</span> Online classes </li>
        <li>Free Live Classes</li>
        <li><span className="itels-name">pte</span> Online classes</li>
        <li><span className="itels-name">ote</span> Online classes</li>
    </ul>
    }
]
function Onlinecom(){
    const datas2UI = datas2.map(function(datas2){
        return(
            <div >
                {datas2.items2}
            </div>
        )
    })
    return(
        <div className="data2-items">
          {datas2UI}
        </div>
    )
};
export default Onlinecom;