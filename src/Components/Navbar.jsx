import React from 'react';
import KRZLogo from '../assets/KRZ_logo.svg';


const Navbar = () => {

    const navobj=["our service","join us","about us","start the project"]

  return (
    <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between",alignItems:"center", margin:"57px 78px 0 78px"}} >
        <img src={KRZLogo} alt="Logo" />
        <ul style={{listStyleType:"none",width:"532px", display:"flex",flexDirection:"row", gap:1, justifyContent:"space-evenly"}}>
            {navobj.map((ele,ind) => (
                <li key={ele} style={{textTransform:"uppercase", color: ele !== "start the project"? "#737373": "#1B1464",fontSize:"16px", fontWeight: ele !== "start the project"? 500: 600,cursor:"pointer" }}>{ele}</li>
            ))}
        </ul>
    </div>
  )
}

export default Navbar