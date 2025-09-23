import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você está pensando </h3>
      <p>Mini<span>Blog</span> &copy;2025</p> 
      <p>Desenvolvido por Jairo Mendes</p>
    </footer>
  );
};

export default Footer