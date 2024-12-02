import { useState } from 'react'
import languages from "./data/languages.js"
import Header from "./components/Header.jsx"
import LanguageButtons from "./components/LanguageButtons.jsx"
import LanguageCard from "./components/LanguageCard.jsx"


const App=() => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
      <div>
        <div className='p-5 h1 bg-light-subtle'>
        <Header/> 
        </div>
        <div className='p-5'>
          <LanguageButtons
           languages={languages}
           selectedLanguage={selectedLanguage}
           onSelectLanguage={setSelectedLanguage}
          />
        </div>
        <div className='p-5'>
          < LanguageCard 
          language={selectedLanguage}
          />
        </div>
      </div>
  )}

export default App;
