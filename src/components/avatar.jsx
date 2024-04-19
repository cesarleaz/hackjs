export default function Avatar({ alt = 'Avatar', src, ...props  }) {
    return (
        <img {...props} className="w-10 h-10 rounded-full" src={src} alt={alt} loading="lazy" decoding="async"/>
    )
}
