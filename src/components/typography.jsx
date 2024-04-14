import clsx from 'clsx'

export default function Typography({ as: As = 'h2', variant, text, children}) {
    const classes = clsx("block p-4 text-center font-sweater text-yellow-300", {
        "text-5xl": variant === 'sub',
        "text-6xl": variant === 'title'
    })

    return (
        <div className="flex py-10 place-content-center">
            <As className={classes}>{text ?? children}</As>
        </div>
    )
}
