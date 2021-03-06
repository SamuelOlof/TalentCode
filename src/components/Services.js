import React,{useState} from 'react';
import data from '../data';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Services = () => {
    const [items] = useState(data)

    return (
        <div className='flex justify-center px-4 ' 
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out">

            <div className='w-11/12 sm:w-10/12 flex flex-col '>
                <h1 className='flex justify-center mb-20 text-2xl md:text-3xl blue-text font-bold text-center'>
                    All your HR needs from one convenient source
                </h1>

                <section className='flex flex-wrap justify-center '>
                     {items.map((item) => {
                        const { id, aos, duration, easing, path, title, desc, servicePath} = item
                        return(
                            <div key={id} className='w-72 md:w-64 lg:w-72 h-96 sm:h-80 mb-20 md:mb-24 md:mr-9 rounded-2xl shadow-2xl flex flex-col items-center text-center'
                                data-aos={aos}
                                data-aos-duration={duration}
                                data-aos-easing={easing}
                            >

                                <div className='-mt-8'>
                                <img className=' h-20 w-20' src={path} alt={title}  />
                                </div>
                            
                                <h1 className='text-xl font-bold blue-text my-4 mt-8'>{title}</h1>

                                <p className='text-gray-500 px-2 sm:px-3 text-center'>{desc}</p>

                                <button className='px-4 py-2 mt-12 sm:mt-8 mb-0 bg-blue-900 text-white rounded hover:bg-blue-700 transition focus:outline-none' type="submit">
                                    <a href={servicePath} target='_blank' rel="noreferrer">Learn more...</a>
                                </button>
                            </div>
                        )
                    })}
                </section>
            </div>


        </div>
    )
}

export default Services
