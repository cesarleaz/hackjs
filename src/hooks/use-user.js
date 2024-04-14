import useSWR from 'swr'

export function useUser() {
    const { isLoading, user, mutate } = useSWR('/api/user')

    return {
        isLoading,
        user,
    }
}
