import HomePage from '@/workArea/components/Home/HomePage'

export default function Home() {

  // console.log("consoler bap:", `${process.env.NEXT_SERVER_OR_API_URL}/auth/signup`)

  return (
    <main className="flex min-h-screen flex-col my-12">

      <HomePage />

    </main>
  )
}
