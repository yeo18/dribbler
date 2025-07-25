import {Button} from "../ui/button"
const Section1 = () => {
  return (
    <div className='flex flex-col h-full bg-background'>
        <div className='max-w-4xl mx-auto px-4 py-16 text-center'>
          <div className='inline-block px-4 py-2 mb-6 rounded-full bg-pink-100 text-pink-800 text-sm font-medium '>
                plus de 3 millions de personne pret pour un travail creatives
          </div>
          <h1 className='text-4xl md:text-6xl font-bold font-serif mb-6'>
              the world&apos;s destination for design
          </h1>
          <p className='text-xl text-muted-foreground mb-8'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias accusantium minima provident veniam magnam nam harum dolore nulla. Iste odio sed magnam accusamus eos ut dolorem? Numquam soluta quas fugiat!
          </p>
          <Button size={"lg"} className='bg-foreground text-white hover:bg-foreground/80 p-6 rounded-full' >
            commencer maintenant
          </Button>
        </div>
    </div>
  )

}

export default Section1