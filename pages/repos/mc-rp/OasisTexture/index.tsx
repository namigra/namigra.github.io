'use strict';

import Footer from '../../../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../../../../styles/modules/Repos.module.scss';

export default function ReposMCRPOasisTexture() {
    return (
        <div id="l-container">
            <Head>
                <title>Repository - NGRI HP</title>
            </Head>
            <main id="l-main">
                <h1 className="title">Index of /repos/mc-rp/OasisTexture</h1>
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
                                    <Link href="/repos/mc-rp/"><a>Parent Directory</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/MD5SUMS"><a>MD5SUMS</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-zip"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/OasisTexture-1.0.0.tar.gz"><a>OasisTexture-1.0.0.tar.gz</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/OasisTexture-1.0.0.tar.gz.sig"><a>OasisTexture-1.0.0.tar.gz.sig</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-zip"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/OasisTexture-1.0.0.zip"><a>OasisTexture-1.0.0.zip</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/OasisTexture-1.0.0.zip.sig"><a>OasisTexture-1.0.0.zip.sig</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/SHA1SUMS"><a>SHA1SUMS</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/SHA256SUMS"><a>SHA256SUMS</a></Link>
                                </td>
                            </tr>
                            <tr>
                                <td valign="top">
                                    <i className="bi bi-file-earmark-text"></i>
                                </td>
                                <td>
                                    <Link href="/repos/mc-rp/OasisTexture/SHA512SUMS"><a>SHA512SUMS</a></Link>
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
