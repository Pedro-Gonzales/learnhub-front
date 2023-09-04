import { ChevronDown } from "lucide-react"
import { ElementType } from "react"

export interface NavItemProps {
    title: string
    icon: ElementType
}

export function NavItem({title, icon: Icon} : NavItemProps){
    return(
        <a href="" className="group flex items-center gap-3 rounded px-3
                                py-2 border border-transparent bg-zinc-700
                                hover:bg-violet-500 hover:border hover:border-white">
                <Icon className="h-5 w-5 text-zinc-50"/>
                <span className="font-medium text-zinc-50 group-hover:text-violet-200">
                    {title}
                </span>
                <ChevronDown className="ml-auto h-5 w-5 text-zinc-50 group-hover:text-red-200"/>
            </a>
    )
}