import Image from 'next/image';

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
  return (
    <div className="w-full">
      <main className="mx-auto w-full sm:w-10/12 md:w-9/12 lg:w-4/12 py-4">
        <div>
          <div className="w-full text-center p-4 text-lg">
            <p>The <strong>Ivy Leaf Poker Club</strong> is completely revamping poker with bigger games, better structures, designated dealers to give a truly <strong>outstanding</strong>&nbsp;experience!</p>
            <br />
            <p>Here you will find information about future games including blind structures and rules. There will be a write-up and results posted in case you miss the&nbsp;action.</p>
            <br />
            <p>If you would like to play, <strong>register</strong> on the website (coming soon!) or book your seat with&nbsp;Rod.</p>
          </div>
          <div className="w-6/12 mx-auto">
            <Image
              src="/images/poker-table-cover.jpg"
              alt="Poker Table"
              width={2048}
              height={1536}
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-8">Tournament Schedule</h2>
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
                  <div>{chips} TBC</div>
                  <div>{bonus} TBC</div>
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
