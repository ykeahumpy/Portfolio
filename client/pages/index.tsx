import { url } from "inspector";
import { useState, useEffect } from "react"; 
import {
  Globe, 
  Code, 
  Camera,
  Calendar,
  Mail,
  BookOpen,
  MapPin,
  ChevronRight,
  Award,
  ChevronDown,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon,
  ExternalLink,
  ChevronLeft,
  Moon, 
  Sun   
} from "lucide-react";
import{
  FaLinkedin, FaGithub, FaInstagram
} from "react-icons/fa";
import { a } from "vitest/dist/chunks/suite.d.FvehnV49.js";
export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row gap-6">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/29a475fe0b37484b59732f99a36b66d91f701baa?width=320"
              alt="Gabriel Ian Mustera"
              className="w-40 h-40 rounded-none object-cover"
            />
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-0.5">
            {/* Name and Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-black">
                  Gabriel Ian Mustera
                </h1>
                {/* Verified Badge */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    d="M14.8335 8C14.8204 7.53019 14.6771 7.07273 14.4189 6.67928C14.1615 6.28655 13.7993 5.97237 13.3731 5.7731C13.5353 5.33164 13.5695 4.85382 13.4749 4.39346C13.3796 3.93237 13.1571 3.50764 12.8335 3.16655C12.4916 2.84291 12.0676 2.6211 11.6065 2.5251C11.1462 2.43055 10.6684 2.46473 10.2269 2.62691C10.0284 2.2 9.71491 1.8371 9.32145 1.57964C8.928 1.32219 8.47054 1.17819 8 1.16655C7.53018 1.17891 7.07418 1.32146 6.68145 1.57964C6.28872 1.83782 5.97672 2.20073 5.77963 2.62691C5.33745 2.46473 4.85818 2.4291 4.39636 2.5251C3.93454 2.61964 3.50909 2.84219 3.16727 3.16655C2.84363 3.50837 2.62254 3.93382 2.52872 4.39419C2.43418 4.85455 2.47054 5.33237 2.63345 5.7731C2.20654 5.97237 1.84291 6.28582 1.584 6.67855C1.32509 7.07128 1.18036 7.52946 1.16654 8C1.18109 8.47055 1.32509 8.928 1.584 9.32146C1.84291 9.71419 2.20654 10.0284 2.63345 10.2269C2.47054 10.6676 2.43418 11.1455 2.52872 11.6058C2.62327 12.0669 2.84363 12.4916 3.16654 12.8335C3.50836 13.1556 3.93309 13.3767 4.39345 13.472C4.85381 13.568 5.33163 13.5331 5.77309 13.3731C5.97236 13.7993 6.28581 14.1615 6.67927 14.4196C7.072 14.6771 7.53018 14.8204 8 14.8335C8.47054 14.8218 8.928 14.6786 9.32145 14.4211C9.71491 14.1636 10.0284 13.8 10.2269 13.3738C10.6662 13.5476 11.1476 13.5891 11.6109 13.4931C12.0735 13.3971 12.4982 13.168 12.8327 12.8335C13.1673 12.4989 13.3971 12.0742 13.4931 11.6109C13.5891 11.1476 13.5476 10.6662 13.3731 10.2269C13.7993 10.0276 14.1615 9.71419 14.4196 9.32073C14.6771 8.928 14.8204 8.46982 14.8335 8ZM7.02691 10.8L4.53309 8.30691L5.47345 7.36L6.98036 8.86691L10.1804 5.38037L11.16 6.28655L7.02691 10.8Z"
                    fill="#2563EB"
                  />
                </svg>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1 text-sm">
              <MapPin className="w-3.5 h-3.5" strokeWidth={1} />
              <span className="text-black">Bulacan, Philippines</span>
            </div>

            {/* Title */}
            <div className="pt-1.5">
              <p className="text-base text-black">
                UI/UX <span className="text-grey-65">\</span> Front-end{" "}
                <span className="text-grey-65">\</span> Graphic Designer
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 pt-3.5">
              {/* Schedule a Call Button */}
              <button className="flex items-center gap-1.5 px-4 h-8 bg-black text-white text-xs font-medium">
              <Calendar className="w-4 h-4" strokeWidth={1} />
              <span className="underline cursor-pointer"
                  onClick={() =>
                  window.open(
                    "https://www.facebook.com/gabriel.ian.mustera.2025",
                    "_blank"
                    )}>Schedule a Call</span>
                <ChevronRight className="w-4 h-4" strokeWidth={1} />
              </button>

              {/* Send Email Button */}
              <button className="flex items-center gap-1.5 px-4 h-8 bg-white shadow-card text-black text-xs font-medium">
              <Mail className="w-4 h-4" strokeWidth={1} />
              <span className="underline cursor-pointer"
                onClick={() =>
                (window.location.href = "mailto:gabrielianmustera@gmail.com")
                }>Send Email</span>
            </button>
            </div>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - 2/3 width */}
          <div className="md:col-span-2 space-y-8">
            {/* About Section */}
            <section className="bg-white shadow-card p-4 space-y-2">
              <h2 className="text-lg font-bold text-black">About</h2>
              <div className="space-y-5.5 text-sm leading-[1.625] text-black">
                <p>
                  I'm a front-end developer specializing in developing solutions
                  with JavaScript, HTML, CSS/Tailwind CSS and PHP. I work on
                  projects including designing modern web applications, mobile
                  apps, digital marketing, and making mock up designs.
                </p><br></br>
                <p>
                  I've helped startups businesses redesign their product displays
                  and banner. I've also built a complaint system for our
                  municipality, submitting complaints and receiving real-time
                  feedbacks.
                </p><br></br>
                <p>
                  Lately, I've been diving deeper into the world of artificial
                  intelligence, focusing on integrating AI tools. My goal now is to
                  be part of a company for my internship to contribute and improve
                  my skills, to acquire new knowledge from my co-interns and
                  seniors.
                </p>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="bg-white shadow-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-black">Tech Stack</h2>
                <button className="flex items-center gap-1 text-xs text-black opacity-70">
                  View All
                  <ChevronRight className="w-3 h-3" strokeWidth={0.75} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Frontend */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-black">Frontend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["JavaScript", "HTML", "CSS", "Tailwind CSS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white shadow-card text-xs text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold text-black">Backend</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {["PHP", "Laravel"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white shadow-card text-xs text-black"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Projects Section */}
            <section className="bg-white shadow-card p-4 space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-black">Recent Projects</h2>
                <button className="flex items-center gap-1 text-xs text-black opacity-70">
                  View All
                  <ChevronRight className="w-3 h-3" strokeWidth={0.75} />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Project 1 */}
                <div className="bg-white shadow-card p-3 space-y-1">
                  <h3 className="text-sm font-semibold text-black">
                    E-cho: A Web-Based Automated Complaint System
                  </h3>
                  <p className="text-xs text-black">Capstone Project</p>
                  <div className="bg-grey-96 px-2 py-1 inline-block cursor-pointer">
                    <code className="text-xs font-mono text-black underline"
                    onClick={() =>
                    window.open(
                    "https://echo-ecomplaint.com/",
                    "_blank")}>
                      https://echo-ecomplaint.com/
                    </code>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="bg-white shadow-card p-3 space-y-1">
                  <h3 className="text-sm font-semibold text-black">
                    Big Belly Burger (Redesign)
                  </h3>
                  <p className="text-xs text-black">
                    Final Project - Human Computer Interaction (HCI)
                  </p>
                </div>

                {/* Project 3 */}
                <div className="bg-white shadow-card p-3 space-y-1">
                  <h3 className="text-sm font-semibold text-black">
                    POS System for Sari-sari Stores (Wire Frame)
                  </h3>
                  <p className="text-xs text-black">
                    Research 1
                  </p>
                </div>
              </div>
            </section>

            {/* Recent Certifications Section */}
<section className="bg-white shadow-card p-4 space-y-2">
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-bold text-black">
      Recent Certifications
    </h2>
    <button className="flex items-center gap-1 text-xs text-black opacity-70">
      View All
      <ChevronRight className="w-3 h-3" strokeWidth={0.75} />
    </button>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
    {/* Certification Items */}
    {[
      {
        title: "PUPSMB Start-up: Preparing Students for Innovation Challenges",
        org: "DICT",
        url: "",
      },
      {
        title: 'Adobe Webinar entitled "Graphic Design Training for Students with Adobe Photoshop"',
        org: "Adobe",
        url: "",
      },
      {
        title: "Certification for Introduction to Cybersecurity",
        org: "CISCO",
        url: "https://www.credly.com/badges/881db57e-4c95-4024-a2d5-3d7e44a606e4/linked_in_profile",
      },
      {
        title: "Certification for IT Customer Support Basics",
        org: "CISCO",
        url: "https://www.credly.com/badges/024d8fd7-dd36-4dec-835e-92244cdea637/linked_in_profile",
      },
      {
        title: "Salesforce Supported Virtual Internship Program 2025",
        org: "SmartBridge",
        url: "https://media.licdn.com/dms/image/v2/D562DAQHhcjJJrbOYqQ/profile-treasury-document-cover-images_480/B56ZwjaxNQGYBQ-/0/1770120748702?e=1771081200&v=beta&t=CTCHH8PwcQbJSPy33XwUDcw6uB_F2kFIEBHHezymbDc",
      },
      {
        title: "Certification for Introduction to Packet Tracer 2024",
        org: "CISCO",
        url: "https://www.credly.com/badges/1538d2aa-0ebf-41f3-906e-d139ae43a6ab/linked_in_profile",
      },
    ].map((cert, i) => (
      <a
        key={i}
        href={cert.url || "#"}
        target={cert.url ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className={`block transition-all ${cert.url ? 'hover:opacity-80 cursor-pointer' : 'cursor-default'}`}
        onClick={(e) => !cert.url && e.preventDefault()}
      >
        <div className="bg-grey-96 p-2 space-y-0 h-full border border-transparent hover:border-gray-200">
          <h3 className="text-xs font-semibold text-black leading-4">
            {cert.title}
          </h3>
          <p className="text-[11px] text-black leading-[1.5]">
            {cert.org}
          </p>
        </div>
      </a>
    ))}
  </div>
</section>
          </div>

          {/* Right Column - 1/3 width */}
          <div className="space-y-8">
            {/* Access Card */}
            <div className="flex justify-center md:justify-start">
              <div className="relative w-[260px] h-[348px] rounded-xl shadow-card-lg bg-gradient-to-br from-grey-46 via-grey-46 to-grey-46 overflow-hidden">
                {/* Card Shimmer Effects */}
                <div
                  className="absolute inset-0 rounded-xl opacity-70 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(128deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.35) 50%, rgba(255, 255, 255, 0.05) 100%)",
                  }}
                ></div>

                {/* Card Content */}
                <div className="absolute top-[30px] left-5 space-y-2.5">
                  {/* Terminal Icon */}
                  <div className="w-[43px] h-[47px] flex items-center justify-center">
                    <svg
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.37875 10.7585L17.4809 21.5183L5.37875 32.2735"
                        stroke="white"
                        strokeWidth="5.37875"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.515 32.2765L37.6513 32.2795"
                        stroke="white"
                        strokeWidth="5.37875"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold text-white tracking-tight">
                    Graphic Designer
                  </h3>

                  {/* Access Card Label */}
                  <p className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    Access Card
                  </p>

                  {/* Spacer */}
                  <div className="h-[60px]"></div>

                  {/* CEO Label */}
                  <p className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    CEO
                  </p>

                  {/* Name */}
                  <p className="font-mono text-sm font-medium text-white uppercase tracking-wider">
                    GABRIEL IAN
                  </p>
                </div>

                {/* Developer Label - Bottom Left */}
                <div className="absolute bottom-[19px] left-5">
                  <p className="font-mono text-[10px] font-medium text-white/40 uppercase tracking-wider">
                    Developer
                  </p>
                </div>

                {/* QR Code - Bottom Right */}
                <div className="absolute bottom-[70px] right-5 w-[50px] h-[50px] opacity-50">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/41c0fbc506b94404f5452dc9b76b55e56ac2e540?width=100"
                    alt="QR Code"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <section className="bg-white shadow-card p-4 space-y-2">
              <h2 className="text-lg font-bold text-black">Experience</h2>

              <div className="space-y-4">
                {/* Experience Item 1 */}
                <div className="relative pl-6 border-l-2 border-grey-92">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-white border-2 border-grey-92 rounded-none"></div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-black">
                      BS Information Technology
                    </h3>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-black">
                        Polytechnic University<br></br> of the Philippines
                      </span>
                      <span className="px-1.5 py-0.5 font-mono text-[10px] text-black shadow-card">2022
                      </span>
                    </div>
                  </div>
                </div>

                {/* Experience Item 2 */}
                <div className="relative pl-6 border-l-2 border-grey-92">
                  <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-white border-2 border-grey-92 rounded-none"></div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-black">
                      Hello World! 👋🏻
                    </h3>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-black">Wrote my first line of code</span>
                      <span className="px-1.5 py-0.5 font-mono text-[10px] text-black shadow-card">
                        2022
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Links Section */}
            <section className="space-y-2">
              <p className="text-xs font-medium text-black">Social Links</p>
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-2 bg-white shadow-card p-1.5 group">
                  <FaLinkedin className="w-5 h-5 opacity-80" />
                  <span className="text-[10px] font-medium text-black underline cursor-pointer"
                  onClick={() =>
                  window.open(
                  "https://www.linkedin.com/in/gabrielmustera",
                  "_blank")}>
                    LinkedIn
                  </span>
                  </a>

                <a href="#" className="flex items-center gap-2 bg-white shadow-card p-1.5 group">
                  <FaGithub className="w-5 h-5 opacity-80" />
                  <span className="text-[10px] font-medium text-black underline"
                  onClick={() =>
                  window.open(
                  "https://www.github.com/ykeahumpy",
                  "_blank")}>
                    GitHub
                  </span>
                </a>

                <a href="#" className="flex items-center gap-2 bg-white shadow-card p-1.5 group">
                  <FaInstagram className="w-5 h-5 opacity-80" />
                  <span className="text-[10px] font-medium text-black underline"
                  onClick={() =>
                  window.open(
                  "https://www.instagram.com/hey.iannnn",
                  "_blank")}>
                    Instagram
                  </span>
                </a>
              </div>
            </section>

            {/* Contact Section */}
            <section className="space-y-1">
              {/* Email */}
              <div className="bg-white shadow-card p-1.5 space-y-0.5">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4 opacity-70" strokeWidth={1} />
                  <span className="text-[9px] font-medium text-black">Email</span>
                </div>
                <p className="text-[9px] font-medium text-black cursor-pointer"
                  onClick={() =>
                  (window.location.href = "mailto:gabrielianmustera@gmail.com")}>
                  gabrielianmustera@gmail.com
                </p>
                <button className="flex items-center gap-1 text-[10px] font-medium text-grey-7 underline"
                  onClick={() =>
                  (window.location.href = "mailto:gabrielianmustera@gmail.com")}>
                  Get in touch
                  <ChevronRight className="w-4 h-4 opacity-70" strokeWidth={1} />
                </button>
              </div>

              {/* Let's Talk */}
              <div className="bg-white shadow-card p-1.5 space-y-0.5">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 opacity-70" strokeWidth={1} />
                  <span className="text-[9px] font-medium text-black">
                    Let's Talk
                  </span>
                </div>
                <div className="flex items-center justify-between cursor-pointer">
                  <span className="text-[9px] font-medium text-black underline"
                    onClick={() =>
                    window.open(
                    "https://www.facebook.com/gabriel.ian.mustera.2025",
                    "_blank")}>
                    Schedule a Call
                  </span>
                  <ChevronRight className="w-4 h-4 opacity-70" strokeWidth={1} />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Gallery Section - Full Width */}
        <section className="bg-white shadow-card p-4 space-y-2">
          <h2 className="text-lg font-bold text-black">Gallery</h2>

          <div className="relative">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {[
                "https://api.builder.io/api/v1/image/assets/TEMP/aa98b1d7e3910f895233205597224bbb691a1f6c?width=320",
                "https://api.builder.io/api/v1/image/assets/TEMP/ab1a4c53099ab1f5e429f474abfa121e2ff29a5b?width=320",
                "https://api.builder.io/api/v1/image/assets/TEMP/6351d55b6c6ed972c132b94565a51a20bea0d4ea?width=320",
                "https://api.builder.io/api/v1/image/assets/TEMP/aed5b18e1e1d5ce82fb5ee83bce7b1cf2bef7a3c?width=320",
                "https://api.builder.io/api/v1/image/assets/TEMP/ae315d4799224e9c5da21a723c1a7fbbe3348c83?width=320",
              ].map((src, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-40 bg-white shadow-card"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 bg-white shadow-card p-2">
              <ChevronLeft className="w-5 h-5 opacity-70" strokeWidth={1.25} />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 bg-white shadow-card p-2">
              <ChevronRight className="w-5 h-5 opacity-70" strokeWidth={1.25} />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
