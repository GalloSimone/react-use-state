import React from "react"

const LanguageButtons = ({languages, selectedLanguage, oneSelectLanguage})=>{
    return(
        <div>
            {languages.map((language)=>(
                <button key={language.id}
                onClick={()=>oneSelectLanguage(language)}
                >
                {language.title}
                </button>
            ))}
        </div>
    );
};

export default LanguageButtons;