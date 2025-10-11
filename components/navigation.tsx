"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Shield, Users, FolderGit2, ArrowRight } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleDropdownEnter = (menu: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => setActiveDropdown(null), 180);
    setHoverTimeout(timeout);
  };

  const handleAccordion = (section: string) => {
    setActiveAccordion(activeAccordion === section ? null : section);
  };

  useEffect(() => {
    const closeDropdown = () => setActiveDropdown(null);
    window.addEventListener("scroll", closeDropdown);
    return () => window.removeEventListener("scroll", closeDropdown);
  }, [activeDropdown]);

  const whatWeDoSections = [
    {
      title: "Security Assessment",
      links: [
        "Web Application Assessment",
        "Mobile Application Assessment",
        "API Security Assessment",
        "Network Assessment",
        "Active Directory Assessment"
      ]
    },
    {
      title: "Security Posture Assessment",
      links: [
        "Phishing Campaign",
        "Mystery Guest (Physical security)",
        "Assumed Breach",
        "Traditional RedTeam"
      ]
    },
    {
      title: "Cloud Security",
      links: [
        "Container Security Assessment",
        "Kubernetes Security Assessment",
        "Cloud Infrastructure Security Assessment"
      ]
    },
    {
      title: "Managed Security Services",
      links: [
        "SIEM Monitoring & Threat Detection",
        "Vulnerability Management",
        "Purple Team"
      ]
    },
    {
      title: "Risk Management",
      links: [
        "ISO 27001 Consulting",
        "HIPAA Compliance",
        "GDPR Consulting",
        "SOC 1 / SOC 2 Readiness"
      ]
    },
    {
      title: "Subscriptions",
      links: [
        "Security Subscriptions",
        "CryptX"
      ]
    }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[var(--primary)]">SafeGrey</span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-12 text-[var(--foreground)] font-medium absolute left-1/2 transform -translate-x-1/2">
            {/* What We Do */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("whatwedo")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-[var(--primary)] transition-colors gap-1">
                <Shield className="h-4 w-4" />
                What We Do <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "whatwedo" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-6 grid grid-cols-3 gap-6 w-[80vw] max-w-[900px] shadow-lg pointer-events-auto">
                  {/* Pointer gap area fix */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>

                  {/* Column 1 */}
                  <div className="space-y-6">
                    {whatWeDoSections.slice(0, 2).map((section, index) => (
                      <div key={index}>
                        <h4 className="text-[var(--primary)] font-semibold mb-3 text-sm uppercase tracking-wide">
                          {section.title}
                        </h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link 
                                href="#" 
                                className="text-sm hover:text-[var(--primary)] transition-colors block py-1"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-6">
                    {whatWeDoSections.slice(2, 4).map((section, index) => (
                      <div key={index}>
                        <h4 className="text-[var(--primary)] font-semibold mb-3 text-sm uppercase tracking-wide">
                          {section.title}
                        </h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link 
                                href="#" 
                                className="text-sm hover:text-[var(--primary)] transition-colors block py-1"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 */}
                  <div className="space-y-6">
                    {whatWeDoSections.slice(4, 6).map((section, index) => (
                      <div key={index}>
                        <h4 className="text-[var(--primary)] font-semibold mb-3 text-sm uppercase tracking-wide">
                          {section.title}
                        </h4>
                        <ul className="space-y-2 text-[var(--muted-foreground)]">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link 
                                href="#" 
                                className="text-sm hover:text-[var(--primary)] transition-colors block py-1"
                              >
                                {link}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Who We Are */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("whoweare")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-[var(--primary)] transition-colors gap-1">
                <Users className="h-4 w-4" />
                Who We Are <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "whoweare" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-4 shadow-lg w-48">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><Link href="/about" className="block py-1 hover:text-[var(--primary)] transition-colors">About</Link></li>
                    <li><Link href="/partners" className="block py-1 hover:text-[var(--primary)] transition-colors">Partners</Link></li>
                    <li><Link href="/contact" className="block py-1 hover:text-[var(--primary)] transition-colors">Contact</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Resources */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("resources")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-[var(--primary)] transition-colors gap-1">
                <FolderGit2 className="h-4 w-4" />
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-4 shadow-lg w-48">
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><Link href="/tools" className="block py-1 hover:text-[var(--primary)] transition-colors">Tools</Link></li>
                    <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="block py-1 hover:text-[var(--primary)] transition-colors">GitHub</a></li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              className="flex items-center gap-2"
              style={{
                backgroundColor: "var(--primary)",
                color: "var(--foreground)",
              }}
            >
              <ArrowRight size={16} /> Got hacked?
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Accordion Navigation */}
        {isOpen && (
          <div className="md:hidden bg-[var(--background)] border-t border-[var(--primary)]/20 py-4 space-y-2">
            {/* What We Do Accordion */}
            <div>
              <button
                onClick={() => handleAccordion("whatwedo")}
                className="w-full flex justify-between items-center px-4 py-2 text-[var(--primary)] font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  What We Do
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "whatwedo" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "whatwedo" && (
                <div className="px-6 space-y-4">
                  {whatWeDoSections.map((section, i) => (
                    <div key={i}>
                      <h5 className="text-[var(--primary)] font-medium mb-2">{section.title}</h5>
                      <ul className="text-[var(--muted-foreground)] space-y-1 pl-3">
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <Link href="#" className="block py-1">{link}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Who We Are Accordion */}
            <div>
              <button
                onClick={() => handleAccordion("whoweare")}
                className="w-full flex justify-between items-center px-4 py-2 text-[var(--primary)] font-semibold"
              >
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Who We Are
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "whoweare" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "whoweare" && (
                <ul className="px-6 text-[var(--muted-foreground)] space-y-2">
                  <li><Link href="/about" className="block py-1">About</Link></li>
                  <li><Link href="/partners" className="block py-1">Partners</Link></li>
                  <li><Link href="/contact" className="block py-1">Contact</Link></li>
                </ul>
              )}
            </div>

            {/* Resources Accordion */}
            <div>
              <button
                onClick={() => handleAccordion("resources")}
                className="w-full flex justify-between items-center px-4 py-2 text-[var(--primary)] font-semibold"
              >
                <div className="flex items-center gap-2">
                  <FolderGit2 className="h-4 w-4" />
                  Resources
                </div>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "resources" && (
                <ul className="px-6 text-[var(--muted-foreground)] space-y-2">
                  <li><Link href="/tools" className="block py-1">Tools</Link></li>
                  <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="block py-1">GitHub</a></li>
                </ul>
              )}
            </div>

            <div className="px-4 pt-2">
              <Button
                className="w-full flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--foreground)",
                }}
              >
               <ArrowRight size={16} /> Got hacked?
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}