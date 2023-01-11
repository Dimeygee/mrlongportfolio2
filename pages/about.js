import { AboutHeader } from "../components/aboutheader";
import { AboutContent } from "../components/aboutcontent";
import { Loader } from "../components/loader";
import Head from "next/head";



export default function About() {


    return(
        <>
            <Head>
                <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/v1672127584/Image_2_wmouwx.png" />
                <title>Odebiyi Ridwan Portfolio</title>
            </Head>
            <Loader />
            <AboutHeader />
            <AboutContent /> 
        </>
    )

}