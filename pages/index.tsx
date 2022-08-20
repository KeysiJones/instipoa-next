import type { NextPage } from 'next';
import Head from 'next/head';
import { Card } from '../components/Card';
import { CardsWrapper } from '../components/CardsWrapper';

export async function getServerSideProps(_context: any) {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  return (
    <div className='h-[90vh] md:h-[78vh]'>
      <Head>
        <title>Instituto Porto Alegre</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex flex-col items-center justify-center h-full text-center'>
        <h1 className='mb-10 text-5xl font-bold sm:mb-20 lg:text-7xl'>
          Instituto <br />
          Porto Alegre
        </h1>
        {/* <Image className='rounded-xl' src="/salvador.jpg" alt="Imagem de Jesus Cristo" width={600} height={350} /> */}
        <CardsWrapper cols={3}>
          <Card
            name='Links de acesso'
            link='/links'
            description='Links de todas as aulas do instituto'
          />
          <Card
            name='Matricula'
            link='https://docs.google.com/forms/d/e/1FAIpQLSd0y43FbhjFRI62qL42DezLBjtwC6nhubskd_JVlxH3js4hbw/viewform'
            description='Formulario de matricula do Instituto'
          />
          <Card
            name='Sobre'
            link='https://keysijones.vercel.app'
            description='Informacoes sobre o desenvolvedor'
          />
        </CardsWrapper>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
