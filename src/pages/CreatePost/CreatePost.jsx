import styles from './CreatePost.module.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContext';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  

  const {insertDocument, response} = useInsertDocument("posts");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
        
    setFormError("");
    // validate image URL
    
    try {
      new URL(image);
    } catch (error) {
      setFormError("A URL da imagem é inválida.");
      return;
    }
    // create tags array
    const tagsArray = tags.map((tag) => tag.trim().toLowerCase());
    // check all values
    if (!title || !image || !body || !tags) {
      setFormError("Por favor, preencha todos os campos.");
      return;
    }

   
    insertDocument({
      title,
      image,
      body,
      tagsArray, 
      uid: user.uid,
      createdBy: user.displayName
    });
    
    // redirect to home page
    navigate("/");

  }

  return (
    <div className={styles.createPost}>
      <h2>Criar Post</h2>
      <p>Crie um novo post preenchendo os campos abaixo:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Título do post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          <span>Imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="URL da imagem"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            required
            placeholder="Conteúdo do post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </label>

        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            placeholder="Tags do post (separadas por vírgula)"
            value={tags}
            onChange={(e) => setTags(e.target.value.split(","))}
          />
        </label>

        {!response.loading && <button className="btn">Criar Post</button>}
        {response.loading && <button className="btn" disabled>Aguarde...</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )
}

export default CreatePost