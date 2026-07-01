import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Overview from "../components/Overview";
import InsurancePlans from "../components/InsurancePlans";
import FindAgent from "../components/FindAgent";
import ClientReviews from "../components/ClientReviews";
import ReadyToStart from "../components/ReadyToStart";
import LearnMoreSection from "../components/LearnMoreSection";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import FundedBySection from "../components/FundedBySection";

function Home({ headerBtnRef }) {
    return (
        <>
            <section>
                <Hero headerBtnRef={headerBtnRef} />
            </section>

            <section id="features">
                <Features />
            </section>

            <section id="overview">
                <Overview />
            </section>

            <section id="insurancePlans">
                <InsurancePlans colorScheme="blue" />
            </section>

            <section id="findAgent">
                <FindAgent />
            </section>

            <section>
                <ClientReviews />
            </section>

            <section id="readyToStart">
                <ReadyToStart />
            </section>

            <section>
                <LearnMoreSection />
            </section>

            <section id="event-start">
                <EventsSection />
            </section>

            <section>
                <FundedBySection colorScheme="blue" />
            </section>

            <section id="contact">
                <Footer colorScheme="blue" />
            </section>
        </>
    );
}

export default Home;
