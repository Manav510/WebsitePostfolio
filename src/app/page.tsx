'use client'
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import React, { ReactNode , useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Lottie from "lottie-react";
import animationData from './avatarAnimation.json';
type FadeInSectionProps = {
  children: ReactNode;
  delay?: number;
};

const FadeInSection = ({ children, delay = 0 }: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default function Page() {
  const [nameDisplay, setNameDisplay] = useState("");
  const [selectedSection, setSelectedSection] = useState("about");
  const [isHovered, setIsHovered] = useState(null);

  useEffect(() => {
    let currentIndex = 0;
    const name = RESUME_DATA.name || "Manav Jain";
    
    const typingInterval = setInterval(() => {
      if (currentIndex < name.length) {
        setNameDisplay(name.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      <Navbar setSelectedSection={setSelectedSection} />
      <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
        <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
          <FadeInSection delay={300}>
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-1.5">
                <h1 className="text-2xl font-bold  bg-clip-text ">
                  {nameDisplay}
                </h1>
                {selectedSection === "about" && (
                  <>
                    <h2 className="text-xl font-bold transform transition-all duration-300 hover:scale-105">
                      About
                    </h2>
                    <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
                      {RESUME_DATA.about}
                    </p>
                    <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
                      <a
                        className="inline-flex gap-x-1.5 align-baseline hover:underline transform transition-all duration-300 hover:text-blue-500"
                        href={RESUME_DATA.locationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GlobeIcon className="size-3" />
                        {RESUME_DATA.location}
                      </a>
                    </p>
                  </>
                )}
                <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                  {RESUME_DATA.contact.email && (
                    <Button 
                      className="size-8 transform transition-all duration-300 hover:scale-110 hover:rotate-6" 
                      size="icon" 
                      asChild
                    >
                      <a href={`mailto:${RESUME_DATA.contact.email}`}>
                        <MailIcon className="size-4" />
                      </a>
                    </Button>
                  )}
                  {RESUME_DATA.contact.tel && (
                    <Button 
                      className="size-8 transform transition-all duration-300 hover:scale-110 hover:-rotate-6" 
                      size="icon" 
                      asChild
                    >
                      <a href={`tel:${RESUME_DATA.contact.tel}`}>
                        <PhoneIcon className="size-4" />
                      </a>
                    </Button>
                  )}
                  {RESUME_DATA.contact.social.map((social) => (
                    <Button
                      key={social.name}
                      className="size-8 transform transition-all duration-300 hover:scale-110"
                      variant="outline"
                      size="icon"
                      asChild
                    >
                      <a href={social.url}>
                        <social.icon className="size-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="size-28 transform transition-all duration-500 hover:scale-110">
                <Lottie animationData={animationData} loop={true} />
              </div>
            </div>
          </FadeInSection>

          {selectedSection === "career" && (
            <>
              <FadeInSection delay={600}>
                <Section>
                  <h2 className="text-xl font-bold mb-4">Work Experience</h2>
                  {RESUME_DATA.work.map((work, index) => (
                    <div
                      key={work.company}
                      className="transform transition-all duration-300"
                      
                      style={{
                        transform: isHovered === work.company ? 'translateX(10px)' : 'none'
                      }}
                    >
                      <Card className="mb-4 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between gap-x-2 text-base">
                            <h3 className="inline-flex items-center gap-x-1 font-semibold leading-none">
                              <a className="hover:underline hover:text-blue-500 transition-colors duration-300" href={work.link}>
                                {work.company}
                              </a>
                            </h3>
                            <div className="text-sm tabular-nums text-gray-500">
                              {work.start} - {work.end ?? "Present"}
                            </div>
                          </div>
                          <h4 className="font-mono text-sm">{work.title}</h4>
                        </CardHeader>
                        <CardContent className="mt-2 text-xs">
                          <p>{work.description}</p>
                          <ul className="list-disc pl-5 space-y-1">
                            {work.responsibilities.map((responsibility, index) => (
                              <li 
                                key={index}
                                className="transform transition-all duration-300 hover:translate-x-2"
                              >
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </Section>
              </FadeInSection>

              <FadeInSection delay={900}>
                <Section>
                  <h2 className="text-xl font-bold mb-4">Education</h2>
                  {RESUME_DATA.education.map((education) => (
                    <Card 
                      key={education.school}
                      className="mb-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between gap-x-2 text-base">
                          <h3 className="font-semibold">{education.school}</h3>
                          <div className="text-sm tabular-nums text-gray-500">
                            {education.start} - {education.end}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-2">{education.degree}</CardContent>
                    </Card>
                  ))}
                </Section>
              </FadeInSection>
            </>
          )}
           <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>
        </section>

        {/* <CommandMenu
          links={[
            { url: RESUME_DATA.personalWebsiteUrl, title: "Personal Website" },
            ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
              url: socialMediaLink.url,
              title: socialMediaLink.name,
            })),
          ]}
        /> */}
       

      </main>
    </>
  );
}