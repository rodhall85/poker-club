import { getTournaments } from '../lib/tournaments';

export async function getStaticProps() {
  const tournaments = await getTournaments();
  return {
    props: {
      tournaments
    }
  }
}

export default function Home({ tournaments: { tournaments } }) {
  console.log('t', tournaments);
  return (
    <div className="w-full">
      <main className="mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-6/12 py-4">
        <h2 className="text-2xl font-bold">Tournament Schedule</h2>
        { tournaments && tournaments.map(({fields: {
          name,
          description,
          buyIn,
          date,
          startTime,
          lateReg,
          clock,
          chips,
          bonus,
          maxPlayers,
        }}, index) => {
          return (
            <div key={`tournament-${index}`} className="p-4 text-center">
              { index === 0 && (
                <div className="font-bold">Next game:</div>
              )}
              <div className="text-center bg-gradient-to-r from-primary to-secondary p-2 text-white font-bold rounded-xl">
                {new Date(date).toLocaleDateString("en-GB", {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                  weekday: 'long',
                })}
              </div>
              <div className="flex w-full">
                <div className="w-1/2 text-right px-2 my-2">
                  <div>Name:</div>
                  <div>Buy-in:</div>
                  <div>Clock:</div>
                  <div>Chips:</div>
                  <div>Bonus:</div>
                  <div>Max&nbsp;players:</div>
                  <div>Details:</div>
                </div>
                <div className="w-1/2 text-left px-2 my-2">
                  <div>{name}</div>
                  <div>&pound;{buyIn}</div>
                  <div>{clock}</div>
                  <div>{chips}</div>
                  <div>{bonus}</div>
                  <div>{maxPlayers}</div>
                  <div>{description}</div>
                </div>
              </div>
              { index === 0 && (
                <button className="py-2 px-4 bg-primary text-white font-bold rounded-xl">
                  Register now!
                </button>
              )}
            </div>
          );
        })}
      </main>
    </div>
  )
}
