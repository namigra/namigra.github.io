'use strict';

import Footer from '../../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../styles/modules/Repos.module.scss';

export default function ReposMCSRV() {
    return (
        <div id="l-container">
            <Head>
                <title>Repository - NGRI HP</title>
            </Head>
            <main id="l-main">
                <h1 className="title">Index of /repos/mc-srv</h1>
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
                                    <Link href="/repos/mc-srv/kougyou/"><a>kougyou/</a></Link>
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
