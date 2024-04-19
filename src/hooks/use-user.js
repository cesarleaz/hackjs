import useSWR from 'swr'

export const useUser = () => {
    const { isLoading, data, mutate } = useSWR('/api/user')

    return {
        isLoading,
        user: data?.user,
        setUser: mutate
    }
}
