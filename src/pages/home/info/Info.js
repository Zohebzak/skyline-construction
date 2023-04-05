import React from 'react'
import style from './Info.module.scss'
import backgroundImg1 from '../../../images/info.jpg'

function Info() {
    return (
        <>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.imgP}>
                            <img src={backgroundImg1} />
                            <p><b>SKYLINE CONTRACTORS & ENGINEERS PRIVATE LIMITED</b><br />
                               The company is promoted by Shri. Iraj Siddiqui Ifteqaroddin Siddiqui & Shri. Meraj Siddiqui Ifteqaroddin Siddiqui. Both the promoter/directors are experienced civil contractors and have in-depth knowledge of the field of civil construction. Shri. Iraj Siddiqui Ifteqaroddin Siddiqui is the Chairman and Managing Director of the company. He is the proprietor of Skyline Construction, a sole proprietorship entity. He is a young and dynamic entrepreneur. He started the work of contractorship in the year 2014. He is a Graduate (B.Tech) from Marathwada Agricultural University. He started his contractorship business with sub contracts from various entities and gradually gained experience and expertise.
                               
                            </p>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Info