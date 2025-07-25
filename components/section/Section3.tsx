"use client"
import {useState} from "react"
import Image from 'next/image';
import {Badge} from "../ui/badge"
import {FaBookmark  , FaHeart,FaEye } from 'react-icons/fa';
const Section3 = () => {
    const designCards = [
    {
      image: "/img.jpg?height=400&width=400",
      title: "Kia Branding",
      author: "Lepisov Branding",
      authorType: "TEAM",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 112,
      views: "13.7k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "Music Streaming App",
      author: "Yehor Kosinov",
      authorType: "PRO",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 73,
      views: "9.3k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "99finder",
      author: "woop",
      authorType: "TEAM",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 74,
      views: "9.9k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "Logo Collection",
      author: "Mihai Dolganiuc",
      authorType: "PRO",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 54,
      views: "4.5k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "Kia Branding",
      author: "Lepisov Branding",
      authorType: "TEAM",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 112,
      views: "13.7k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "Music Streaming App",
      author: "Yehor Kosinov",
      authorType: "PRO",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 73,
      views: "9.3k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "99finder",
      author: "woop",
      authorType: "TEAM",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 74,
      views: "9.9k"
    },
    {
      image: "/img.jpg?height=400&width=400",
      title: "Logo Collection",
      author: "Mihai Dolganiuc",
      authorType: "PRO",
      authorAvatar: "/img.jpg?height=40&width=40",
      likes: 54,
      views: "4.5k"
    },
]
function DesignCard({card}:{card:typeof designCards[0]}){
    const [isHovered,setIsHovered]=useState(false);
    return (
        <div className="relative bg-white rounded-lg overflow-hidden group"
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}>
        <Image
        src="/img.jpg" // chemin de l’image (interne ou externe)
        alt=" Design"
        width={200}
        height={200}
        className=" object-cover w-full h-48"
        />
        <div className="p-4">
            <h2 className="font-bold text-lg mb-2">
                {card.title}
            </h2>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                    src={card.authorAvatar} // chemin de l’image (interne ou externe)
                    alt=" Author"
                    width={200}
                    height={200}
                    className="w-6 h-6 rounded-full mr-2"
                    />
                    <span>{card.likes}</span>
                    <Badge variant={"secondary"} className="ml-2 text-xs">{card.authorType} </Badge>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="flex items-center ">
                        <FaHeart className="w-4 h-4 mr-1"/>
                        <span className=" text-sm">{card.likes}</span>
                    </div>
                    <div className="flex items-center ">
                        <FaEye className="w-4 h-4 mr-1"/>
                        <span className=" text-sm">{card.views}</span>
                    </div>
                </div>
            </div>
        </div>
            {
                isHovered &&(
                    <div className=" absolute inset-0 bg-gradient-to-t from black to-transparent flex items-end transition-opacity duration-200">
                        <div className="p-4 w-full">
                            <div className="flex justify-between items-center text-white">
                                <div className="font-bold">
                                    {card.title}
                                </div>
                                <div className="flex space-x-2">
                                    <Badge className="bg-primary hover:bg-primary/80  p-1.5 rounded-full">
                                        <FaBookmark className="h-4 w-4"  />
                                    </Badge>
                                    <Badge className="bg-primary hover:bg-primary/80  p-1.5 rounded-full">
                                        <FaHeart  />
                                    </Badge>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    )

}
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-mediun my-16 text-center">
            explorer
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                designCards.map((card,index)=>(
                    <DesignCard key={index} card={card}/>
                ))
            }
        </div>
    </div>
  )
}

export default Section3