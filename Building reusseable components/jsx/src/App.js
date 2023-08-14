import ProfileCard from "./ProfileCard";

import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';
function App() {
  return (
    <div>
      <h2>Personal Digital Assistant</h2>
      <ProfileCard title="bunthai" handle="@bunthai" image={AlexaImage}></ProfileCard>
      <ProfileCard title="Reak" handle="@reak" image={CortanaImage}></ProfileCard>
      <ProfileCard title="Vouch" handle="@vouch" image={SiriImage}></ProfileCard>
    </div>
  );
}
export default App;
