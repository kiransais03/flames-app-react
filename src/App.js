import './App.css';
import React,{useState} from "react";

function App() {
  let [names,setNames] = useState({yname:"",pname:""});

let [clicked,setClicked] =useState(false);
 
  let [rel,setRel]= useState("");
    function submitted(e) {
      e.preventDefault();
      if(names.yname!=="" && names.pname!=="")
      {
        console.log("hi");
        let ynametemparr = names.yname.toLowerCase();
        let pnametemparr = names.pname.toLowerCase();

        for(let i=0;i<names.yname.length;i++)
        {
            let yname1=ynametemparr.split("");
            let pname1=pnametemparr.split("");
            console.log(yname1,"yname",pname1,"pname",names.yname[i].toLowerCase(),i)

            if(pname1.indexOf(names.yname[i].toLowerCase())>=0)
            {
                let pind = pname1.indexOf(names.yname[i].toLowerCase());
                let yind = yname1.indexOf(names.yname[i].toLowerCase())
                // console.log(pind,"pind",pname1)
                yname1.splice(yind,1)
                pname1.splice(pind,1)
                ynametemparr=yname1.join("");
                pnametemparr=pname1.join("");
                console.log("deleted",names.yname[i].toLowerCase())
            }
        }
        // setNames({...names,yname:ynametemparr,pname:pnametemparr})
        let length=ynametemparr.length + pnametemparr.length;
        console.log(ynametemparr,pnametemparr)
        let ans= length%6;
        
        if(ans===0){setRel("Siblings")}
        else if(ans===1){setRel("Friends")}
        else if(ans===2){setRel("Love")}
        else if(ans===3){setRel("Affection")}
        else if(ans===4){setRel("Marriage")}
        else if(ans===5){setRel("Enemy")}
          setClicked(true);
      }
    }
   
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <h1>Flames App -Check The Relation Between You And Your Partner</h1>
               <form onSubmit={submitted}>
                <input name="name1" type="text" data-testid="input1" placeholder="Enter Your Name" value={names.yname} onChange={(e)=>{setNames({...names,yname:e.target.value})}} />
                 <input name="name2" type="text" data-testid="input2" placeholder="Enter Your Partner Name" value={names.pname} onChange={(e)=>{setNames({...names,pname:e.target.value})}} />
                 <button type="submit" data-testid="calculate_relationship">Calculate Relationship Future</button>
                 <button type="reset" onClick={()=>{setNames({yname:"",pname:""},setClicked(false))}} data-testid="clear">Clear</button>
               {clicked && <h3 data-testid="answer">{rel}</h3>}
               </form>
            </div>
        )
    }



export default App;
