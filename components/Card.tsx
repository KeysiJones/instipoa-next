import Link from 'next/link';

type Props = {
  link: string;
  name: string;
  description?: string;
};

const Card = ({ link, name, description }: Props) => (
  <Link href={link}>
    <div className='hover:border-blue-400 focus:border-blue-400 active:border-blue-400 bg-white cursor-grabbing rounded-lg [text-decoration:none] text-left p-6 m-4 min-w-[300px]'>
      <h2 className='text-2xl font-medium sm:text-3xl'>{name} &rarr;</h2>
      {description && <p className='text-lg sm:text-xl'>{description}</p>}
    </div>
  </Link>
);

export { Card };
