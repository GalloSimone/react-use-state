import React from "react"

function LanguageButtons({languages, selectedLanguage, onSelectLanguage}){
    return(
        <div>
            {languages.map((language)=>(
                <button key={language.id}
                onClick={()=>onSelectLanguage(language)}
                style={{
                    backgroundColor: language.id === selectedLanguage.id ? "black" : "red",
                    color: "white",
                    margin: "5px",
                    padding: "10px",
                    borderRadius:"20px"
                  }}
                >
                {language.title}
                </button>
            ))}
        </div> 
    )
}
export default LanguageButtons;







