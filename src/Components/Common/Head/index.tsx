import Head from "next/head";

export default function HeadCom(props: any) {
  return (
    <Head>
        <title>{props.title} - {props.description}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
