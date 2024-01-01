import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
    {
        url: 'https://th.bing.com/th/id/R.e6dea5f8880df45dd9b1d912f8c3d90a?rik=WPZN8%2fbiD4gSlw&pid=ImgRaw&r=0',
    },
    {
        url: 'https://www.encountertravel.com.au/media/4903/italy_cinqueterre-1200-628px.jpg',
    },
    {
        url: 'https://th.bing.com/th/id/OIP.-GpDnGWqxLr1h4Vu-DesUgHaE7?rs=1&pid=ImgDetMain',
    },
];

const Slideshow = () => {
    return (
        <div className="w-3/5">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <img className='h-[400px] rounded-xl' style={{ width: '100%' }} src={fadeImage.url} alt='' />
                    </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slideshow