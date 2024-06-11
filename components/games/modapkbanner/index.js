import Link from "next/link";
import styles from "./style.module.scss";

const modapkbanner = () => {
  return (
    <>
      <section>
        <Link className={styles.modapkbanner} href="/modapkbanner">
          modapkbanner
        </Link>
      </section>
    </>
  );
};

export default modapkbanner;
