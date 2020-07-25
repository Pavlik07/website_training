import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './slider.css'

class ImgSlider extends React.Component {
    render() {
        const images = [
            { url: "images/comet1.jpg" },
            { url: "images/comet2.jpg" },
        ];

        //const widthStyle = 896 <div className="widthStyle"/>;
        //const heightStyle = 504 <div className="heightStyle"/>;

        return (
            <div className="imgSlider">
                <SimpleImageSlider
                    images={images}
                    width={1500}
                    height={900}
                />
            </div>
        );
    }
}

export default ImgSlider;