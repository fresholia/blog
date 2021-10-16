import Link from 'next/link'
import Style from '../styles/Header.module.scss'
import { useRouter } from 'next/router'

import { SocialLinks } from '../exports/SocialLinks'

import { LinkedinIcon } from 'next-share'

export default function Header(props) {
    const { asPath } = useRouter()
    const { menus } = props

    return (
        <header className={Style.header}>
            <h3>Enes <span>"cleopatra"</span> Akıllıok</h3>
            <navs>
            {
                Object.keys(menus).map((url) => {
                    return (
                        <Link key={url} href={url}>
                            <a className={Style.navButton + (asPath == url ? ' ' + Style.active : '')}>{menus[url]}</a>
                        </Link>
                    )
                })
            }
            </navs>

            <social>
                {
                    Object.keys(SocialLinks).map((id) => {
                        return (
                            <a className={Style.socialButton} href={SocialLinks[id]} target="_blank">
                                <LinkedinIcon size={32} round />
                            </a>
                        )
                    })
                }
            </social>
        </header>
    )
}