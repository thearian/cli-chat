import Head from "next/head";
import Terminal from "@/features/Terminal";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Terminal</title>
                <meta name="description" content="Terminal is a chat room for developers to hang out"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Terminal />
            
        </div>
    );
}
