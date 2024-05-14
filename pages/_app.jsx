import '../style/globals.css';
import React from 'react'
import Layout from '@/componets/Layout'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
