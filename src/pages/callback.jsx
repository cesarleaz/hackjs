import { useEffect } from 'react'
import { useLocation } from 'wouter'
import { magic } from '~/magic'
import { useUser } from '~/hooks/use-user'
import Spinner from '~/components/spinner'

const extractUserInfo = user => {
  const { sub: id, name, email, profile } = user

  const userName = profile.split('/').pop()

  return {
    id,
    name,
    email,
    userName
  }
}

export default function CallbackPage() {
  const [, navigate] = useLocation()
  const { setUser } = useUser()

  useEffect(() => {
    const authenticateWithServer = async (didToken, user) => {
      const userInfo = extractUserInfo(user)

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken
        }
      })

      if (res.ok) {
        setUser(userInfo)
        navigate('/')
      }
    }

    magic.oauth.getRedirectResult().then(user => {
      authenticateWithServer(user.magic.idToken, user)
    })
  }, [])

  return <Spinner />
}
