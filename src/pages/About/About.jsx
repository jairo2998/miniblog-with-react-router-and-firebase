//CSS
import styles from './About.module.css';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini Blog</h2>
      <p>Este é um projeto de blog construído com React e Firebase.</p> 
      <p>Você pode criar uma conta, fazer login e criar suas próprias postagens.</p>
      
      <Link to="/posts/create" className={"btn"}>Criar Postagem</Link>
    </div>
  )
}

export default About