import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Simple from "@/components/base/Simple";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

// Zorg ervoor dat fetchData de juiste API URL gebruikt
const fetchData = async (endpoint) => {
  const response = await fetch(`https://innofaith-api.onrender.com/api${endpoint}`);
  const data = await response.json();
  return data;
};

function Team() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/team");
        setTeam(response);  // Zet de teamdata in de state
        setLoading(false);   // Stop de laadtoestand
      } catch (error) {
        console.error("Fout bij ophalen team:", error);
        setLoading(false);  // Stop de laadtoestand bij een fout
      }
    };
    getAllData();  // Haal de teamdata op bij het laden van de component
  }, []);

  if (loading) return <p>Laden...</p>; // Toon een laadbericht als data nog niet beschikbaar is

  return (
    <section className="team padding-bottom shape-1r" id="team">
      <div className="container">
        <div className="section-header section-header--middle">
          <div className="section-header__content">
            <div className="section-header__titlebar">
              <Simple subTitle="Team" title="Meet the crew" />
            </div>
          </div>
        </div>
        <div className="team__wrapper">
          <div className="row justify-content-center g-4">
            {team.slice(0, 4).map((item) => {
              return (
                <div key={item.id} className="col-lg-3 col-sm-6">
                  <div
                    className="team__item aos-init aos-animate"
                    data-aos="fade-up"
                    data-aos-duration={800}
                  >
                    <div className="team__thumb">
                      <img width="auto" src={item.img} alt="Team Member Image" />
                    </div>
                    <div className="team__content">
                      <h4>
                        <Link href="/team-member">{item.name}</Link>
                      </h4>
                      <p>{item.role}</p>
                      <ul className="social">
                        <li className="social__item">
                          <Link href="#" className="social__link">
                            <FontAwesomeIcon icon={faFacebookF} />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link href="#" className="social__link">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link href="#" className="social__link">
                            <FontAwesomeIcon icon={faTwitter} />
                          </Link>
                        </li>
                        <li className="social__item">
                          <Link href="#" className="social__link">
                            <FontAwesomeIcon icon={faInstagram} />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
