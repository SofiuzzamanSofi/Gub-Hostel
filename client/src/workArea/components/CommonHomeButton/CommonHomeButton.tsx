import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import { FaGreaterThan } from 'react-icons/fa';

interface CommonHomeButtonProps {
    pathNameArray: string[];
}

const CommonHomeButton: FC<CommonHomeButtonProps> = ({ pathNameArray }) => {
    const arreytoLinkGenerated = (path: string) => {
        // console.log('path from line 15:', path);
        return `/hall-management`; // Modify the logic as per your requirement
    };

    return (
        <div className="p-4 flex items-center justify-between pt-12 pb-6">
            <div className="flex items-center space-x-2">
                <Link href="/" passHref>
                    <span className="text-blue-400 hover:text-blue-300 transition-all">HOME</span>
                </Link>
                {pathNameArray &&
                    pathNameArray.map((path, index) => (
                        <React.Fragment key={index}>
                            <span className="text-black dark:text-white">
                                <FaGreaterThan />
                            </span>
                            {path !== "hall management" ? (
                                <span className="text-black dark:text-white uppercase">{path}</span>
                            ) : (
                                <Link href={arreytoLinkGenerated(path)} passHref>
                                    <span className="text-blue-400 hover:text-blue-300 transition-all uppercase">{path}</span>
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
            </div>
        </div>
    );
};

export default CommonHomeButton;
