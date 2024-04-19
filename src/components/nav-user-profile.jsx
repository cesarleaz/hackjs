import { useUser } from '../hooks/use-user'
import Avatar from './avatar'

export default function NavUserProfile() {
    const { user } = useUser()

    const avatar = `https://github.com/${user.userName}.png`

    return (
        <>
            <button className='bg-transparent border-none'>
                <Avatar src={avatar} />
            </button>

            <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                <div className="py-1">
                    <button className="block px-4 py-2 text-sm text-gray-700">Cerrar sesión</button>
                </div>
            </div>
        </>
    )
}
