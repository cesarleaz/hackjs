import Typography from './typography'
import clsx from 'clsx'
import { Link } from 'wouter'
import { DIFFICULTYS, CHALLENGES } from '~/constants/challenges'

function Challenge({ level = 1, levelDifficulty = 1, dimension = '2x2' }) {
  const difficulty = DIFFICULTYS[levelDifficulty]

  const classes = clsx(
    'group relative transform hover:scale-105 hover:contrast-150 [animation:linear_reveal_both]![animation-range:entry_5%_cover_30%] ![animation-timeline:view()]',
    {
      'col-span-1 xl:col-span-1 xl:row-span-1': dimension === '2x2',
      'col-span-1 xl:col-span-1 xl:row-span-2': dimension === '4x2',
      'col-span-1 xl:col-span-2 row-span-1': dimension === '2x4'
    }
  )

  const pictureClasses = clsx({
    'w-32 xs:w-40 md:w-48 xl:w-[120px] left-0 xs:left-10 md:left-5 lg:left-20 xl:left-0 absolute bottom-0 group-hover:animate-wiggle':
      dimension === '2x2',
    'w-40 xs:w-72 md:w-60 lg:w-72 left-0 xs:left-10 md:left-5 xl:left-20 absolute bottom-0 group-hover:animate-wiggle':
      dimension === '2x4',
    'w-32 xs:w-36 md:w-36 xl:w-[220px] left-0 xs:left-10 md:left-5 lg:left-20 xl:left-0 absolute bottom-0 group-hover:animate-wiggle':
      dimension === '4x2'
  })

  return (
    <Link className={classes} to={`/challenge/${level}`}>
      <article className='border-2 rounded-lg relative min-h-[250px] h-full border-[#fbbf24] bg-[#fbbf24]/20'>
        <div className='absolute flex flex-col top-2 right-4'>
          <span className='text-8xl font-sweater'>
            {String(level).padStart(2, '0')}
          </span>
          <span className='text-lime-300  relative text-base px-3 text-center bg-black rounded-full font-sweater'>
            {difficulty}
          </span>
        </div>
        <img
          className={pictureClasses}
          src={`/challenges/${level}.svg`}
          alt="Challenge's image"
        />
      </article>
    </Link>
  )
}

export default function ListOfChallenges() {
  return (
    <section id='retos' className='w-full max-w-6xl m-auto'>
      <Typography variant='title' text='Retos de código' />
      <div className='grid grid-cols-1 gap-6 px-8 pt-10 md:grid-cols-2 xl:grid-cols-4'>
        {CHALLENGES.map(challenge => (
          <Challenge key={challenge.level} {...challenge} />
        ))}
      </div>
    </section>
  )
}
