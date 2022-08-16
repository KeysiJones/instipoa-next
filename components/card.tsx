import Link from 'next/link';
import styles from '../styles/Home.module.css';

type Props = {
  link: string;
  name: string;
  description?: string;
};

const Card = ({ link, name, description }: Props) => (
  <Link href={link}>
    <div className={`${styles.card} cursor-grabbing`}>
      <h2>{name} &rarr;</h2>
      {description && <p>{description}</p>}
    </div>
  </Link>
);

export { Card };
