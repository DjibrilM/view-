import React, { useState } from "react";


interface Props {
    paragraph: string,
}

const URL_REGEX = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
const LinkParaGraph: React.FC<Props> = ({ paragraph }) => {

    const paragraphArray = paragraph.split(' ');
    return <div>
        {
            paragraphArray.map((word: any) => {
                return word.match(URL_REGEX) ? (
                    <>
                        <a href={word} className="text-blue-400">{word}</a> {' '}
                    </>
                ) : word + ' '
            })
        }
    </div>;
};

export default LinkParaGraph;
