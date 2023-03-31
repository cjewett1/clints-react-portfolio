import Head from "next/head";
import { Container } from "@mui/material";
import ResponsiveAppBar from "@/components/NavBar";
import QuestionForm from "@/components/QuestionForm";
import Intro from "@/components/Intro";
import AboutMe from "@/components/About";
import WorkHistory from "@/components/WorkHistory";
import Projects from "@/components/Projects";
import WhatDo from "@/components/WhatDo";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Messing About</title>
                <meta name='description' content='Messing About' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
            </Head>
            <Container sx={{}} maxWidth='1200'>
                <ResponsiveAppBar />
                <Intro />

                <AboutMe />
                <WorkHistory />
                <WhatDo />
                <Projects />
                <QuestionForm />
                <Footer />
            </Container>
        </>
    );
}
