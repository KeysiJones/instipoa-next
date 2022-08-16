import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { Card } from '../../components/card';

export async function getServerSideProps(_context: any) {
  return {
    props: {},
  };
}

const Links: NextPage = () => {
  return (
    <main className='flex flex-col text-center items-center h-[85vh] justify-center'>
      <h1 className='text-7xl mb-20'>Links</h1>
      {/* <Image className='rounded-xl' src="/salvador.jpg" alt="Imagem de Jesus Cristo" width={600} height={350} /> */}
      <div className='flex'>
        <Card
          description='Links de todas as aulas de terça'
          name='Terça'
          link='/links/terca'
        />
        <Card
          description='Links de todas as aulas de quarta'
          name='Quarta'
          link='/links/quarta'
        />
        <Card
          description='Links de todas as aulas de quinta'
          name='Quinta'
          link='/links/quinta'
        />
        <Card
          description='Links de todas as aulas de sábado'
          name='Sábado'
          link='/links/sabado'
        />
      </div>
    </main>
  );
};

export default Links;
