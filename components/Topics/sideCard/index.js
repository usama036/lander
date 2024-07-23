import { Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";

const SideCard = ({post,type}) => {

  const similarGames = []
  console.log('post',post);
  post?.data?.map((app) =>
    similarGames.push({

    title:app?.attributes?.title,
      developer: app?.attributes?.publisher,
    rating:app?.attributes?.rating ,
    imageUrl: app.attributes?.Applogo,
      slug: app.attributes?.slug,

})
  )

  return (
    <>
      <section className={styles.SideCard}>
        <div className="similar-games">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3>Popular {type} </h3>
            <Link href="/">
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <ul>
            {similarGames.map((game, index) => (
              <Link
                href={{
                  pathname: '/homedetails',
                  query: {
                    name:game.slug
                  }
                }}
              >
              <li key={index} className="d-flex mb-3">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="me-3"
                  style={{ width: "64px", height: "64px" }}
                />
                <div>
                  <h5 className="mb-0">{game.title}</h5>
                  <p className={`mb-0`}>{game.developer}</p>
                  <p>
                    {game.rating} <i className="fas fa-star"></i>
                  </p>
                </div>
              </li>
              </Link>
            ))}
          </ul>
          <div className="d-flex align-items-center justify-content-center mb-3">
            <Button variant="none" className={`greenButton ${styles.button}`}>
              Explore All Apps
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideCard;
