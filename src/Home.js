import { useState } from "react";

const Home = () => {

    // let name = "Trevor";  
    const [name, setName] = useState("Trevor");
    const [age, setAge] = useState(27);


    const handleClick = (e) => {
        console.log('warap', e)
    }
    const handleClick2 = (name, e) => {
        console.log('Hi' + name, e.detail)
    }
    const handleClick3 = () => {
        setName("Arapu");
        setAge(26)
    }
   
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years OLD...</p>
            
            <button className = "clicables" onClick = {handleClick3}> Change Name </button>
            <button className = "clicables" onClick = {handleClick}> Click One </button>
            <button className = "clicables" onClick = {(e) => {
                handleClick2("Trevor", e)
            }}> Click Two </button>
        </div>
    );
}
 
export default Home;