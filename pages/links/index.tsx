import type { NextPage } from 'next';
import { Card } from '../../components/Card';
import { CardsWrapper } from '../../components/CardsWrapper';

export async function getServerSideProps(_context: any) {
  return {
    props: {},
  };
}

const Links: NextPage = () => {
  return (
    <main className='flex flex-col items-center justify-center h-[90vh] md:h-[78vh] text-center'>
      <h1 className='my-5 text-4xl font-bold sm:mb-20 md:text-5xl lg:text-7xl text-[#1ad597]'>
        Selecione o dia
      </h1>
      <CardsWrapper>
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
      </CardsWrapper>
    </main>
  );
};

export default Links;
