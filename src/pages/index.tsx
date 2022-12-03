import { Test } from 'components/organisms/Test'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Test/>
    </div>
  )
}
