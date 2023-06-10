import { FC } from 'react'

interface pageProps {

}

const page: FC<pageProps> = ({ }) => {
  return <div className='my-12 min-h-screen mt-[-3.15rem] lg:mt-[-5.25rem] mb-[-7.15rem] flex items-center'>
    {/* <HomeImage /> */}
    <div className="container mx-auto">
      <div className="">
        <div className="text-center mb-6">
          <h1 className='text-center text-2xl dark:text-white font-semibold'>
            Verify Your Email Address
          </h1>
        </div>

        <div className="text-center">
          <h1 className='text-center text-md dark:text-white'>
            You are almost there, Check your mail inbox for a link with verification and finish setting yp your accounts password.
          </h1>
        </div>


      </div>
    </div>
  </div>
}

export default page