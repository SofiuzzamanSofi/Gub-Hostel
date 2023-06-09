import { FC } from 'react'

interface CommonButtonProps {
    buttonText: string;
}

const CommonButton: FC<CommonButtonProps> = ({ buttonText }) => {
    return <div className="mt-8 text-center">
        <button className="bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-lg uppercase">
            {/* {Apply for your seat now} */}
            {buttonText}
        </button>
    </div>
}

export default CommonButton