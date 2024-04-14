import Spinner from './spinner'
import ButtonLogin from './button-login'
import NavUserProfile from './nav-user-profile'
import { useUser } from '~/hooks/use-user'

export default function NavUserOutlet() {
    const { isLoading, user } = useUser()

    if (isLoading) return <Spinner />
    if (!user) return <ButtonLogin />
    return <NavUserProfile />
}
