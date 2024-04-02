import { useContext } from 'react';
import PeopleMovieList from '../components/PeopleMovieList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './Home.module.css';
import { FavoriteContext } from '../contexts/FavoriteContext';

import { Link } from 'react-router-dom';

function Home({ people, isLoading }) {
  const { addToFavorites, removeFromFavorites, notifySucces } =
    useContext(FavoriteContext);

  let content;

  if (people.length > 0) {
    content = <PeopleMovieList peopleData={people} />;
  }

  if (isLoading) content = <p>Carregando...</p>;

  return (
    <>
      <ToastContainer />
      <section className={classes.header}>
        <h1>Star Wars: The search...</h1>
        <h2>
          Gostaria de saber tudo sobre o universo Star Wars? Encontrar aqui você
          vai!!!
        </h2>
        <h3>Faça uma busca pelo seu personagem preferido abaixo:</h3>
      </section>
      <section className={classes.inputFilter}>
        <div className={classes.inputContainer}>
          <div className={classes.pesquisarContainer}>
            <input type="text" />

            <div
              className={`${classes.pesquisarButton} ${classes.button_slide} ${classes.slide_right}`}
            >
              Pesquisar
            </div>
          </div>

          <Link
            className={`${classes.button_slide} ${classes.slide_right}`}
            to={'/favorites'}
          >
            Favoritos
          </Link>
        </div>
      </section>
      <section className={classes.peopleSection}>{content}</section>
    </>
  );
}

export default Home;
