import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainLayout from "components/layout/MainLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>ISTOPP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>Hello</h1>
      </MainLayout>
    </div>
  );
}
