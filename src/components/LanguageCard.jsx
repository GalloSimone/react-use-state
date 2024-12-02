import React from "react"

const LanguageCard = ({language}) => {
    return (
        <div style={{
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "15px",
            backgroundColor: "#f9f9f9",
            width:"680px",
            
          }}>
          
     
            <h2>{language.title}</h2>
            <p>{language.description}</p>
        </div>
    );
};
export default LanguageCard;