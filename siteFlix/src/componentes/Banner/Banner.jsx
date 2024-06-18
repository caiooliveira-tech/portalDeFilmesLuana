import { Carousel } from "@material-tailwind/react";
import img1 from '../../../public/godKong.jpg'
import img2 from '../../../public/divert.jpg'
import img3 from '../../../public/civil.jpg'

function Banner(){

    return(
        <>
        
            <Carousel transition={{ duration: 2 }} className="xl pt-4 pb-2 ">
      <img
        src={img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
        </>
    )
}

export default Banner;