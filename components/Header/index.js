import Link from "next/link";
import styles from "./Header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.nav} wrap`}>
        <div className={styles.logo}>
          <h1>
            <Link href="/">
              <a>
                <Image
                  src="/img/tg-logo.png"
                  alt="Logo Taguara Digital"
                  width={80}
                  height={80}
                />
              </a>
            </Link>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
