import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";

import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";
function App() {
  return (
    <div>

      <section className ="hero is-primary ">
        <div className = "hero-body">
        <h2>Personal Digital Assistant</h2>
        </div>
      </section>
      

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="bunthai"
                handle="@bunthai"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things."
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Reak"
                handle="@reak"
                image={CortanaImage}
                description="Reak was created by Microsoft and helps you buy things."
              ></ProfileCard>
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Vouch"
                handle="@vouch"
                image={SiriImage}
                description="Vouch was a pretty girl and she was a model "
              ></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
