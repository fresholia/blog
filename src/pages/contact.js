import Head from 'next/head';
import React from 'react';

import Style from 'styles/contact.module.scss'

export default function Contact() {
    return (
        <React.Fragment>
            <Head>
                <title>iletişim - enes akıllıok</title>
            </Head>
            <div className={Style.wrapper}>
                <h2>Benimle bu sayfadan iletişime geçebilirsin.</h2>
                <p>Gelin, birlikte yarınları inşaa edelim! Benimle WhatsApp veya mail yoluyla iletişime geçin, geleceği konuşalım.</p>

                <a href="https://wa.me/905520150271" className={Style.card} target="_blank">
                    <span>WhatsApp üzerinden buraya tıklayarak hızlıca iletişime geçin ⟶</span>
                </a>

                <hr/>
                <p className={Style.contactBar}>e-posta: <span className={Style.contactSpan}>enesakilliok@icloud.com</span> </p>
                <h6>Mail gönderirken bir iş teklifi olduğunu lütfen belirtiniz.</h6>
            </div>
        </React.Fragment>
    )
}