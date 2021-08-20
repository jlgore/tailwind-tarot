import Head from 'next/head'

export default function Home({data}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Tarot To Go</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Tarot.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Pulling your spread for the day.
        </p>
      
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Cards for Today: &rarr;</h3>
            <p className="mt-4 text-xl">
              <ul>
                {data.cards.map((cards) => (
                  <div>
                  <strong><li>{cards.name}</li></strong>
                  <li>{cards.suit}</li>
                  <li>{cards.meaning_up}</li>
                  </div>
                ))}
              </ul>
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=10")
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

