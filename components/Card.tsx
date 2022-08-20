import Link from 'next/link';

type Props = {
  link: string;
  name: string;
  description?: string;
};

const Card = ({ link, name, description }: Props) => (
  <Link href={link}>
    <div className='hover:scale-[1.08] text-white transition-all bg-[#1ad597] cursor-grabbing rounded-lg [text-decoration:none] text-left p-6 m-4 min-w-[300px]'>
      <h2
        className={`text-2xl ${
          description ? 'font-medium' : 'font-normal'
        } sm:text-3xl mb-2`}
      >
        {name} &rarr;
      </h2>
      {description && <p className='text-lg sm:text-xl'>{description}</p>}
    </div>
  </Link>
);

export { Card };
