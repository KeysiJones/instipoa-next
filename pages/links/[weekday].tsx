import { Card } from '../../components/card';

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
  return (
    <main className='flex flex-col text-center items-center h-[85vh] justify-center'>
      <h1 className='text-7xl mb-20'>Aulas de {weekday}</h1>
      <div className='flex'>
        {classes.map((course) => (
          <Card name={course.nome} link={course.link} key={course.id} />
        ))}
      </div>
    </main>
  );
};

export default WeekDay;
