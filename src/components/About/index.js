import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import './index.scss'

const About = () => {
  const skills = [
    { name: 'HTML5', icon: faHtml5 },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Node.js', icon: faNodeJs },
  ]
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About me</h1>
        <p>
          Greetings! I graduated from General Assembly's Software Engineering
          Immersive boot camp, where I acquired valuable experience working on
          real-world projects and sharpened my skills in collaborative
          development, agile methodologies, and problem-solving.
        </p>
        <p>
          My ability to thrive in team-based software development environments
          makes me an ideal candidate for any dynamic and innovative team. As a
          part-time teacher at Coding With Kids, I teach K-12 students how to
          code in Scratch, Python, Javascript, HTML, and CSS.
        </p>
        <p>
          I am also currently studying Computer Science at Seattle Central
          College, as I am passionate about staying up-to-date with the latest
          technologies and industry trends. I am always eager to learn and grow
          as a developer by taking on new challenges and opportunities.
        </p>
        <div>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                <FontAwesomeIcon icon={skill.icon} />
                <span>{skill.name}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
