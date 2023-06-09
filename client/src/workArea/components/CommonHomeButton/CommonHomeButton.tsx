import Link from 'next/link'
import { FC } from 'react'
import { FaGreaterThan } from 'react-icons/fa'

interface CommonHomeButtonProps {

}

const CommonHomeButton: FC<CommonHomeButtonProps> = ({ }) => {
    return (
        <div className="p-4 flex items-center justify-between pt-12 pb-6">
            <div className="flex items-center space-x-2">
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-all">
                    HOME
                </Link>
                <span className="text-black dark:text-white">
                    <FaGreaterThan />
                </span>
                {/* <span className="text-black dark:text-white uppercase">{location.pathname.replace('/', '')}</span> */}
            </div>
        </div>
    )
}

export default CommonHomeButton