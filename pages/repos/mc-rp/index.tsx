'use strict';

import Footer from '../../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/Repos.module.scss';

export default function ReposMCRS() {
    return (
        <div className="container">
            <Head>
                <title>Repository - NGRI HP</title>
            </Head>
            <main className="main">
                <h1 className="title">Index of /repos/mc-rp</h1>
                <div className={`content ${styles.repoContents}`}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-arrow-90deg-up"></i>
                                </td>
                                <td>
                                    <Link href="/repos/"><a>Parent Directory</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-folder2"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/"><a>OasisTexture/</a></Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
            <Footer />
        </div>
    );
}