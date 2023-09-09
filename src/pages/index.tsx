import { Flex } from '@chakra-ui/react'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pomodoro timer</title>
        <meta name="description" content="A minimalistic Pomodoro timer app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex flexDir="column" h="100dvh" justifyContent="center" alignItems="center">
        Once upon a time there was a little empty app ✨
      </Flex>
    </>
  )
}
