// src/database/data.js
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaEnvelope, FaPhone, FaBuilding } from "react-icons/fa6";
import {
    FaShieldAlt,
    FaCarCrash,
    FaUsers,
    FaCar,
    FaTools,
    FaLifeRing,
    FaLayerGroup,
    FaBolt,
    FaKey,
    FaStar,
    FaGlobe,
    FaCrown,
    FaHeart,
    FaRegMoneyBillAlt,
} from "react-icons/fa";

import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdFreeCancellation } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";

import heroImg1 from "../assets/hero/heroImg1.png";
import heroImg2 from "../assets/hero/heroImg2.png";
import heroImg3 from "../assets/hero/heroImg3.jpg";

import comInfoImg1 from "../assets/conpanyInfo/img1.jpg";
import comInfoImg2 from "../assets/conpanyInfo/img2.jpg";
import comInfoImg3 from "../assets/conpanyInfo/img3.jpg";
import comInfoImg4 from "../assets/conpanyInfo/img4.jpg";

// review img
import reviewImg1 from "../assets/reviewImg/review1.jpg";
import reviewImg2 from "../assets/reviewImg/review2.jpg";
import reviewImg3 from "../assets/reviewImg/review3.jpg";
import reviewImg4 from "../assets/reviewImg/review4.jpg";
import reviewImg5 from "../assets/reviewImg/review5.jpg";
import reviewImg6 from "../assets/reviewImg/review6.jpg";
import reviewImg7 from "../assets/reviewImg/review7.jpg";
import reviewImg8 from "../assets/reviewImg/review8.jpg";

import eventImg1 from "../assets/eventImg/eventImg1.jpg";
import eventImg2 from "../assets/eventImg/eventImg2.jpg";
import eventImg3 from "../assets/eventImg/eventImg3.jpg";

import investor1 from "../assets/investor/investor1.png";
import investor2 from "../assets/investor/investor2.png";
import investor3 from "../assets/investor/investor3.png";
import investor4 from "../assets/investor/investor4.png";

// coverage icons

export const socialLinks = [
    {
        id: "facebook",
        href: "https://facebook.com",
        icon: FaFacebookF,
        hover: "hover:text-blue-600",
        border: "borderSide",
        bg: "bg-[#1877F2] hover:bg-[#145DBF]",
    },
    {
        id: "x",
        href: "https://x.com",
        icon: FaXTwitter,
        hover: "hover:text-black",
        border: "borderSide",
        bg: "bg-black hover:bg-gray-800",
    },
    {
        id: "linkedin",
        href: "https://linkedin.com",
        icon: FaLinkedinIn,
        hover: "hover:text-blue-700",
        border: "borderSide",
        bg: "bg-[#0A66C2] hover:bg-[#004182]",
    },
    {
        id: "instagram",
        href: "https://instagram.com",
        icon: FaInstagram,
        hover: "hover:text-pink-500",
        bg: "bg-pink-700 hover:bg-pink-500",
    },
];

export const headerActions = [
    // { label: "Make a Claim", path: "claim", border: "borderSide" },
    { label: "Services", path: "findAgent", border: "borderSide" },
    { label: "Solution Center", path: "readyToStart" },
];

export const contactInfo = [
    {
        label: "support@gearguard.com",
        href: "mailto:support@gearguard.com",
        type: "email",
        icon: FaEnvelope,
        border: "xl:border-r-2 xl:border-gray-300",
    },
    {
        label: "+1 (234) 567 890",
        href: "tel:+1234567890",
        type: "phone",
        icon: FaPhone,
        border: "",
    },
];

export const navItems = [
    {
        label: "Home",
        path: "/",
        dropdown: [
            { label: "Features", path: "features", smOffset: -80, lgOffset: -20 },
            { label: "Overview", path: "overview", smOffset: -20, lgOffset: -120 },
            { label: "Pricing", path: "insurancePlans", smOffset: -30, lgOffset: -50 },
        ],
    },
    {
        label: "Insurance",
        path: "insurancePlans",
        dropdown: [
            { label: "Car", path: "insurancePlans" },
            { label: "Health", path: "insurancePlans" },
            { label: "Travel", path: "insurancePlans" },
        ],
        smOffset: -20,
        lgOffset: -50,
    },
    {
        label: "Services",
        path: "findAgent",
        smOffset: -50,
        lgOffset: -100,
    },
    {
        label: "Events",
        path: "event-start",
        dropdown: null,
        smOffset: -10,
        lgOffset: -400,
    },
    {
        label: "Contact",
        path: "contact",
        smOffset: 0,
        lgOffset: 0,
    },
];

export const heroImgData = [
    {
        img: heroImg1,
        bgCls1: "bg-cover md:bg-cover",
        bgCls2: "bg-[position:38%_50%] md:bg-[position:50%_45%]",
    },
    {
        img: heroImg2,
        bgCls1: "bg-fill md:bg-cover",
        bgCls2: "bg-[position:50%_100%]",
    },
    {
        img: heroImg3,
        bgCls1: "bg-fill md:bg-cover",
        bgCls2: "bg-[position:65%_100%] md:bg-[position:50%_100%]",
    },
];

export const companyInfo = [
    {
        id: 1,
        src: comInfoImg1,
        alt: "Company Office",
        header: "TRUSTWORTHY COMPANY",
        subheader: "Built on integrity, delivering excellence every day.",
        icon: VscWorkspaceTrusted,
    },
    {
        id: 2,
        src: comInfoImg2,
        alt: "Our Team",
        header: "ANYTIME CANCELLATION",
        subheader: "Flexibility that adapts to your needs without hidden catches.",
        icon: MdFreeCancellation,
    },
    {
        id: 3,
        src: comInfoImg3,
        alt: "Product Showcase",
        header: "MONEY BACK GUARANTEE",
        subheader: "Your satisfaction is our promise — risk-free commitment.",
        icon: FaRegMoneyBillAlt,
    },
    {
        id: 4,
        src: comInfoImg4,
        alt: "Company Event",
        header: "NO POLICY FEE COMMITTED",
        subheader: "Transparent pricing with zero extra charges, always.",
        icon: GiTakeMyMoney,
    },
];

export const insurancePlansData = [
    {
        id: 1,
        tier: "Basic",
        price: "$20",
        coverage: [
            { text: "Liability coverage", icon: FaShieldAlt },
            { text: "Minimal accident protection", icon: FaCarCrash },
            { text: "Covers third-party damages", icon: FaUsers },
        ],
        color: "#e0f7fa",
        href: "/basicReadMore",
        shadow: "shadow-[1px_1px_14px_rgba(0,0,0,0.25)]",
    },
    {
        id: 2,
        tier: "Standard",
        price: "$40",
        coverage: [
            { text: "Liability + collision coverage", icon: FaCar },
            { text: "Covers own vehicle damages", icon: FaTools },
            { text: "Roadside assistance", icon: FaLifeRing },
        ],
        color: "#b2ebf2",
        href: "/standardReadMore",
        shadow: "shadow-[-1px_1px_14px_rgba(0,0,0,0.25)]",
    },
    {
        id: 3,
        tier: "Premium",
        price: "$80",
        coverage: [
            { text: "Comprehensive coverage", icon: FaLayerGroup },
            { text: "Covers theft, fire, natural disasters", icon: FaBolt },
            { text: "Rental car reimbursement", icon: FaKey },
            { text: "Extended roadside assistance", icon: FaLifeRing },
        ],
        color: "#80deea",
        href: "/premiumReadMore",
        shadow: "shadow-[-1px_-1px_14px_rgba(0,0,0,0.25)]",
    },
    {
        id: 4,
        tier: "Elite",
        price: "$200",
        coverage: [
            { text: "All Premium benefits", icon: FaStar },
            { text: "Worldwide coverage", icon: FaGlobe },
            { text: "VIP claim processing", icon: FaCrown },
            { text: "Personal accident protection", icon: FaHeart },
        ],
        color: "#4dd0e1",
        href: "/eliteReadMore",
        shadow: "shadow-[1px_-1px_14px_rgba(0,0,0,0.25)]",
    },
];

export const clientReviews = [
    {
        img: reviewImg1,
        name: "Sophia Carter",
        occupation: "Teacher",
        comments: "GearGuard made filing my claim stress-free. Their support team was quick and compassionate.",
    },
    {
        img: reviewImg2,
        name: "Liam Johnson",
        occupation: "Software Engineer",
        comments: "Affordable premiums and excellent coverage. I feel secure knowing GearGuard has my back.",
    },
    {
        img: reviewImg3,
        name: "Ava Martinez",
        occupation: "Small Business Owner",
        comments: "After my accident, GearGuard handled everything smoothly. I was back on the road in no time.",
    },
    {
        img: reviewImg4,
        name: "Noah Smith",
        occupation: "Delivery Driver",
        comments: "Fast roadside assistance saved me during a breakdown. Truly reliable service.",
    },
    {
        img: reviewImg5,
        name: "Olivia Brown",
        occupation: "Nurse",
        comments: "Their customer care feels personal. I never feel like just another policy number.",
    },
    {
        img: reviewImg6,
        name: "Ethan Davis",
        occupation: "College Student",
        comments: "GearGuard gave me affordable coverage as a first-time car owner. Perfect for my budget.",
    },
    {
        img: reviewImg7,
        name: "Isabella Wilson",
        occupation: "Accountant",
        comments: "Transparent policies and no hidden fees. I trust GearGuard completely.",
    },
    {
        img: reviewImg8,
        name: "James Taylor",
        occupation: "Retired Veteran",
        comments: "They treated me with respect and care. GearGuard truly values its customers.",
    },
];

// data.js

export const eventsData = [
    {
        id: 1,
        title: "Free Safety Check Day",
        img: eventImg1,
        date: "Jan 15, 2026",
        description: "GearGuard offers free car safety inspections at partner garages.",
        cta: "Register Now",
        link: "/register",
    },
    {
        id: 2,
        title: "Insurance + Rewards Campaign",
        img: eventImg2,
        date: "Feb 1–28, 2026",
        description: "Sign up for GearGuard car insurance and get exclusive fuel vouchers.",
        cta: "Learn More",
        link: "/rewards",
    },
    {
        id: 3,
        title: "Road Safety Awareness Drive",
        img: eventImg3,
        date: "March 10, 2026",
        description: "Community event with workshops on safe driving and accident prevention.",
        cta: "Join Us",
        link: "/awareness",
    },
];

export const fundedByData = [
    { id: 1, img: investor1, alt: "Investor 1" },
    { id: 2, img: investor2, alt: "Investor 2" },
    { id: 3, img: investor3, alt: "Investor 3" },
    { id: 4, img: investor4, alt: "Investor 4" },
];

export const coverages = [
    "Liability coverage to meet state requirements",
    "Collision coverage for accidents and repairs",
    "Comprehensive coverage for theft, fire, and weather damage",
    "Roadside assistance for breakdowns and emergencies",
];
