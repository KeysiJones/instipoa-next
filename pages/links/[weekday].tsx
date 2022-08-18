import { Card } from '../../components/Card';
import { CardsWrapper } from '../../components/CardsWrapper';

type Course = {
  id: number;
  nome: string;
  horario: string;
  link: string;
};

export async function getStaticProps(context: any) {
  const weekday = context.params.weekday;
  const response: any = await fetch(new URL(`${process.env.BASE_URL}`));

  const list = await response.json();
  const classesList: Array<Course> = list[weekday];

  return {
    props: {
      classes: classesList,
      weekday,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { weekday: 'terca' } },
      { params: { weekday: 'quarta' } },
      { params: { weekday: 'quinta' } },
      { params: { weekday: 'sabado' } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

const WeekDay = ({
  classes,
  weekday,
}: {
  classes: Array<Course>;
  weekday: string;
}) => {
  const dayMap = {
    terca: 'Terça',
    quarta: 'Quarta',
    quinta: 'Quinta',
    sabado: 'Sábado',
  };
  return (
    <main className='flex flex-col items-center justify-center h-[90vh] md:h-[78vh] text-center'>
      <h1 className='my-5 text-4xl sm:mb-20 md:text-7xl'>
        {/* @ts-ignore */}
        Aulas de {dayMap[weekday]}
      </h1>
      <CardsWrapper>
        {classes.map((course) => (
          <Card name={course.nome} link={course.link} key={course.id} />
        ))}
      </CardsWrapper>
    </main>
  );
};

export default WeekDay;
