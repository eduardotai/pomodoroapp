import Logo from '../../assets/Logo.svg'
import {Timer, Scroll} from 'phosphor-react'    
import { HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
    return (
        <HeaderContainer>
            <span>
                <img src={Logo}>

                </img>
            </span>
            <nav>
                <NavLink to='/' title='Timer'><Timer size={24}/></NavLink>
                <NavLink to='/History' title='Historico'><Scroll size={24}/></NavLink>
            </nav>  
            
        </HeaderContainer>
    )
}