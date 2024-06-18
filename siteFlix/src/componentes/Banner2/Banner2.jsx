import { Carousel } from "@material-tailwind/react";
import img1 from '../../../public/dubleBan.jpg'
import img2 from '../../../public/parisBan.jpg'
import img3 from '../../../public/atlasBan.jpg'

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

          <h1 className="text-4xl flex justify-around font-bold tracking-tight text-marrom sm:text-3xl md:text-4xl pt-4 pb-4 ">
              <span className="block">
                 Recentes
              </span>
          </h1>
        </>
    )
}

export default Banner;