import {  Book, FileEdit, Folders, Home, SquareStack, Users } from "lucide-react";
import { NavItem } from "./NavItem";

export function MainNavigation(){
    return(
        <nav className="space-y-0.5">
            <NavItem title="Home" icon={Home}/>
            <NavItem title="Cursos" icon={Folders}/>
            <NavItem title="Módulos" icon={SquareStack}/>
            <NavItem title="Aulas" icon={Book}/>
            <NavItem title="Provas" icon={FileEdit}/>
            <NavItem title="Users" icon={Users}/>
        </nav>
    )
}