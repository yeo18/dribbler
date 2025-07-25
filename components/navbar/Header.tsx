"use client"
import React from 'react'
import { FaBars,FaSearch } from 'react-icons/fa'
import {Button} from "../../components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'
import HeaderNavigationMenuContent from "./HeaderNavigationMenuContent"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
const Header = () => {
const[isMenuOpen,setIsMenuOpen]=React.useState(false)
  return (
    <div>
      <header className='flex items-center justify-between p-4'>
          <div className='flex items-center lg:hidden'>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTitle>Menu</SheetTitle> {/* 👈 obligatoire */}

              <SheetTrigger asChild>
                <Button 
                variant={'ghost'} size={'icon'}>
                    <FaBars className="h-6 w-6"/>
                    <span className='sr-only'>open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent className='w-full' side={"top"}>
                <nav className='flex flex-col space-y-4'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant={"ghost"} className='w-full justify-start'>
                            find desginers
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Link className="w-full" href={"#"}>
                                a la recherche de desginers
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Link className="w-full" href={"#"}>
                                travail
                            </Link>
                          </DropdownMenuItem>
                          
                        </DropdownMenuContent>
                      </DropdownMenu>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          inspiration
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          jobs
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          Go Pro
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          log in
                      </Link>
                </nav>
              </SheetContent>
            </Sheet>

          </div>
          <nav className='hidden lg:flex items-center space-x-0'>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem className='hover:bg-transparent'>
                      <NavigationMenuTrigger>
                        recherche de desginers
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className='w-[250px] gap-3 flex flex-col p-4 items-center'>
                        <div>
                          <HeaderNavigationMenuContent title="recherche de design" subtitle="rechercher" />
                          <HeaderNavigationMenuContent title="recherche de design" subtitle="rechercher" />
                        </div>   
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          inspiration
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          jobs
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          Go Pro
                      </Link>
                      <Link href={"#"} className="text-sm font-medium text-muted-foreground hover:text-foreground w-full">
                          log in
                      </Link>
          </nav>
          <Link href={"/"} className='text-2xl font-bold hover:text-foreground/65'>
              Drible
          </Link>
          <div className='flex items-center space-x-4' >
                <Button variant={'ghost'} size={"icon"} className='lg:hidden'>
                    <FaSearch className="h-6 w-6"/>
                    <span className='sr-only'>recherssons</span>
                </Button>
                <div className='hidden lg:block'>
                    <FaSearch className='h-5 w-5 absolute left-3 top-1/2 transform -translate-y-0.5 text-muted-foreground'/>
                    <Input className="pl-10 pr-4 py-5 rounded-full" 
                    placeholder="recherche" type="search"/>
                </div>
                <Button className='hidden lg:inline-flex text-sm font-medium hover:bg-transparent' variant={"ghost"} >
                  Log in
                </Button>
                <Button size={"lg"} className='rounded-full p-6 bg-foreground text-white hover:bg-foreground/80'>

                </Button>
          </div>
      </header>
    </div>
  )
  
}

export default Header