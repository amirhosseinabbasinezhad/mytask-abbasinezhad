import { useState } from "react";


function Side() {
    const [showinput,setshowinput]=useState(false);
    const [ListText , setListText]=useState("");
    const [Lists , setLists]=useState(getListsFromLocal);
    const ListItems=Lists.map((list)=>{
        
    })
    function addlist(){
        setshowinput(true)
    }
    function addListToLocal(){
        const nNote= getListsFromLocal();
        nNote.push(ListText);
        localStorage.setItem("lists",JSON.stringify(nNote));
    }
    function getListsFromLocal(){
        let note
    let givennote=localStorage.getItem("lists");
    if (givennote === null || givennote ==="") {
        note=[]
    }
    else{
        note=JSON.parse(givennote);
    }
    return note;
}

    return ( <>
        <aside>
        <h3>lists</h3>
            <ul>
                <li>work</li>
                <li>univercti</li>
                {!showinput && <li><button className="addbutton" onClick={addlist}>add list +</button></li>}
                {showinput &&<><form>
          <input type="text"onChange={(e)=>setListText(e.target.value)} value={ListText} placeholder="new list" />
          <button onClick={addListToLocal}id="addBtn" type="button" name="button">+</button>
          </form></>}
            </ul>
            
        </aside>
     
    
     
    </> );
}

export default Side;