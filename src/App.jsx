import React, {useState} from "react";
import "./styles.css";
import TaskMenu from "./components/TaskMenu";
import CreateMenu from "./components/CreateMenu";

export default function App() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function openMenu() {
        setIsMenuOpen(true)
    }

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <div>
            {isMenuOpen ? <CreateMenu onMenuClose={closeMenu}/> : <TaskMenu onMenuOpen={openMenu}/>}
        </div>
    )

}
