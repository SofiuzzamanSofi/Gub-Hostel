import Link from 'next/link';
import { FC } from 'react';

interface CommonButtonProps {
    buttonText: string;
    buttonType?: string;
    buttonGo?: string;
}

const CommonButton: FC<CommonButtonProps> = ({ buttonText, buttonType, buttonGo }) => {
    return (
        <div className="mt-8 text-center">
            {buttonType === 'Link' ? (
                <Link href={{ pathname: buttonGo }} className=" bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-lg uppercase">
                    {buttonText}
                </Link>
            ) : (
                <button className="bg-green-600 hover:bg-green-500 text-white py-4 px-6 rounded-lg uppercase">
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default CommonButton;