import Flickity from "react-flickity-component";
import './flickity.css'

interface Options {
   initialIndex: number,
   autoPlay: boolean | number
}

interface imageForSlider {
   id: number[],
   images: string[];
}


interface SliderProps {
   images: imageForSlider | undefined,
   options: Options,
   size?: string
}

function FlickitySlider({ images, options, size }: SliderProps) {
   return (

      
      <>
         <Flickity
            className={size ? `max-w-[${size}]` : 'max-w-[600px]'}
            elementType="div"
            disableImagesLoaded={false}
            options={options}
            reloadOnUpdate
         >

            {images ?
               images.id.map((index: number) => {
                  return (
                     <div key={index}  className="overflow-hidden ">
                        <div>
                           <img className="proj-card"  src={images['images'][index - 1]} alt="" />
                        </div>
                     </div>
                  )
               }) :
               " "
            }


         </Flickity>
      </>
   );
}

export default FlickitySlider;