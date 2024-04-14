import { Link } from 'wouter'
import HeaderLogo from './header-logo'
import LeaderboardSVG from '~/icons/leaderboard.svg?react'
import FaqSVG from '~/icons/faq.svg?react'
import ChallengesSVG from '~/icons/challenges.svg?react'

const links = [
    {
        name: 'Retos',
        path: '/#challenges',
        icon: ChallengesSVG
    },
    {
        name: 'Clasificación',
        path: '/leaderboard',
        icon: LeaderboardSVG
    },
    {
        name: 'FAQ',
        path: '/#faq',
        icon: FaqSVG
    }
]

function NavLink({ path, name, icon: Icon }) {
    return (
        <Link
         to={path}
         class="sm:hover:ring-2 ring-yellow-300 w-1/4 sm:w-auto p-2 rounded-lg flex text-xs sm:text-sm font-medium flex-col sm:flex-row items-center gap-1 transition hover:text-yellow-300 text-gray-100" 
        >
            <Icon />
            <span class="font-bold">{name}</span>
        </Link>
    )
}

export default function Header() {
    return (
    <nav className="p-4">
        <div className="max-w-screen-lg flex flex-col items-center md:flex-row md:justify-between  mx-auto">
            <div className="flex items-center">
                <HeaderLogo />
            </div>
            <div className="hidden sm:flex justify-center md:justify-end items-center w-full">
                {links.map(({ path, name, icon }) => (
                    <NavLink key={path} path={path} name={name} icon={icon} />
                ))}
            </div>
        </div>
    </nav>
    )
}
