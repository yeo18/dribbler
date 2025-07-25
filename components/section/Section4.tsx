import React from 'react'
import {Button} from "../ui/button"
import Link from 'next/link';

const Section4 = () => {
  return (
    <div className='flex flex-col items-center justify-center p-4 bg-primary/50 text-center'>
        <div className='max-w-xl py-28 space-y-8'>
            <h1 className='text-3xl md:text-5xl mb-4 font-medium'>trouve ton prochain designer</h1>
        </div>
        <p className='text-lg mb-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id pariatur nihil quibusdam sapiente. Consequatur maxime, ducimus eaque omnis placeat nisi tempore qui voluptatibus optio aut repellat nam veniam maiores consectetur deleniti, vitae magni sint est minus? Totam consectetur eligendi eveniet.
        </p>
        <div className='flex justify-center space-x-4 mb-4'>
            <Button className='bg-foreground text-white hover:bg-foreground/80 p-6 rounded-full' size={"lg"}>
                commencer
            </Button>
            <Button  className='bg-white text-foreground hover:bg-white p-6 rounded-full' >
                apprendre plus
            </Button>
        </div>
        <p>
            Lorem ipsum, dolor sit amet .
            <Link href="#">consectetur adipisicing?</Link>
        </p>
    </div>
  )
}

export default Section4