import { Button } from "react-bootstrap";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";

const SideCard = () => {
  const similarGames = [
    {
      title: "Mobile Legends: Bang Bar",
      developer: "Moonton",
      rating: 4.1,
      imageUrl: "/assets/icon-1.svg",
    },
    {
      title: "NEW STATE : NEW ERA OF BF",
      developer: "KRAFTON, Inc.",
      rating: 3.8,
      imageUrl: "/assets/icon-2.svg",
    },
    {
      title: "Blood Strike - FPS for a",
      developer: "NetEase Games",
      rating: 4.6,
      imageUrl: "/assets/icon-3.svg",
    },
    {
      title: "Clash of Clans",
      developer: "Supercell",
      rating: 4.5,
      imageUrl: "/assets/icon-4.svg",
    },
    {
      title: "Dream League Soccer 2024",
      developer: "First Touch Games Ltd.",
      rating: 4.3,
      imageUrl: "/assets/icon-5.svg",
    },
    {
      title: "Battle Prime: FPS gun shootin",
      developer: "Press Fire Games Limited",
      rating: 4.3,
      imageUrl: "/assets/icon-1.svg",
    },
  ];
  return (
    <>
      <section className={styles.SideCard}>
        <div className="similar-games">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3>Similar Games</h3>
            <Link href="/">
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <ul>
            {similarGames.map((game, index) => (
              <li key={index} className="d-flex mb-3">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  className="me-3"
                  width={64}
                  height={64}
                />
                <div>
                  <h5 className="mb-0">{game.title}</h5>
                  <p className={`mb-0`}>{game.developer}</p>
                  <p>
                    {game.rating} <i className="fas fa-star"></i>
                  </p>
                </div>
              </li>
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
