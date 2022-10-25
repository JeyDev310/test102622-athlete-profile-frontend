import { useState } from 'react';
import BasicInfo from './components/BasicInfo';
import About from './components/About';
import Summary from './components/Summary';
import Profile from './components/Profile';
import List from './components/List';

const App = () => {
  const [step, setStep] = useState(0);
  // basic info
  const [name, setName] = useState("");
  const [sports, setSports] = useState(["Golf"]);
  const [gender, setGender] = useState("Male");
  const [birthday, setBirthday] = useState(new Date());

  // about
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("United States");
  const [team, setTeam] = useState("");

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      {step === 0 && <BasicInfo
        setStep={setStep}
        name={name} setName={setName}
        sports={sports} setSports={setSports}
        gender={gender} setGender={setGender}
        birthday={birthday} setBirthday={setBirthday}
      />}
      {step === 1 && <About 
        setStep={setStep}
        about={about} setAbout={setAbout}
        location={location} setLocation={setLocation}
        team={team} setTeam={setTeam}
      />}
      {step === 2 && <Summary 
        setStep={setStep}
        name={name}
        sports={sports}
        gender={gender}
        birthday={birthday}
        about={about}
        location={location}
        team={team}
      />}
      {step === 3 && <Profile />}
      {step === 4 && <List />}
    </div>
  );
}

export default App;
