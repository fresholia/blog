import Link from 'next/link'
import Style from '../styles/Header.module.scss'
import { useRouter } from 'next/router'

export default function Header(props) {
    const { asPath } = useRouter()
    const { menus } = props

    return (
        <header className={Style.header}>
            {
                Object.keys(menus).map((url) => {
                    return (
                        <Link key={url} href={url}>
                            <a className={asPath == url ? Style.active : ''}>{menus[url]}</a>
                        </Link>
                    )
                })
            }
        </header>
    )
}