// import type { AppProps } from 'next/app';
import { AppProps } from 'next/app'
import * as React from 'react';
import { LayoutComponent } from "Components";

import '../styles/site.sass'
import 'bootstrap/scss/bootstrap-grid.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <LayoutComponent menu={pageProps.menu}>
            <Component {...pageProps} />
        </LayoutComponent>
    );
}

