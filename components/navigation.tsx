"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { ArrowRight } from "lucide-react";

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-[var(--primary)]">SafeGrey</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[var(--foreground)] font-medium">
            {/* What We Do */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter("whatwedo")}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-[var(--primary)] transition-colors">
                What We Do <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "whatwedo" && (
                <div className="absolute left-0 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-4 grid grid-cols-2 gap-4 w-[90vw] max-w-[500px] shadow-lg pointer-events-auto">
                  {/* Pointer gap area fix */}
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>

                  <div>
                    <h4 className="text-[var(--primary)] font-semibold mb-2">Security Assessment</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">Web Application Assessment</Link></li>
                      <li><Link href="#">Mobile Application Assessment</Link></li>
                      <li><Link href="#">API Security Assessment</Link></li>
                      <li><Link href="#">Network Assessment</Link></li>
                      <li><Link href="#">Active Directory Assessment</Link></li>
                    </ul>

                    <h4 className="text-[var(--primary)] font-semibold mt-3 mb-2">Security Posture Assessment</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">Phishing Campaign</Link></li>
                      <li><Link href="#">Mystery Guest</Link></li>
                      <li><Link href="#">Assumed Breach</Link></li>
                      <li><Link href="#">Traditional Red Team</Link></li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[var(--primary)] font-semibold mb-2">Cloud Security</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">Container Security</Link></li>
                      <li><Link href="#">Kubernetes Security</Link></li>
                      <li><Link href="#">Cloud Infrastructure</Link></li>
                    </ul>

                    <h4 className="text-[var(--primary)] font-semibold mt-3 mb-2">Managed Security</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">SIEM</Link></li>
                      <li><Link href="#">Vulnerability Management</Link></li>
                      <li><Link href="#">Purple Team</Link></li>
                    </ul>

                    <h4 className="text-[var(--primary)] font-semibold mt-3 mb-2">Risk Management</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">ISO 27001 Consulting</Link></li>
                      <li><Link href="#">HIPPA</Link></li>
                      <li><Link href="#">GDPR</Link></li>
                    </ul>

                    <h4 className="text-[var(--primary)] font-semibold mt-3 mb-2">Subscriptions</h4>
                    <ul className="space-y-1 text-[var(--muted-foreground)]">
                      <li><Link href="#">Security Subscriptions</Link></li>
                      <li><Link href="#">CryptX</Link></li>
                    </ul>
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
              <button className="flex items-center hover:text-[var(--primary)] transition-colors">
                Who We Are <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "whoweare" && (
                <div className="absolute left-0 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-4 shadow-lg w-48">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/partners">Partners</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
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
              <button className="flex items-center hover:text-[var(--primary)] transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {activeDropdown === "resources" && (
                <div className="absolute left-0 mt-3 bg-[var(--background)] border border-[var(--primary)]/20 rounded-xl p-4 shadow-lg w-48">
                  <div className="absolute -top-2 left-6 w-4 h-4 bg-[var(--background)] border-l border-t border-[var(--primary)]/20 rotate-45"></div>
                  <ul className="space-y-2 text-[var(--muted-foreground)]">
                    <li><Link href="/tools">Tools</Link></li>
                    <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                  </ul>
                </div>
              )}
            </div>

            <Button
              className="ml-4 flex items-center gap-2"
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
                What We Do
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "whatwedo" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "whatwedo" && (
                <div className="px-6 space-y-3">
                  {[
                    {
                      title: "Security Assessment",
                      links: [
                        "Web Application Assessment",
                        "Mobile Application Assessment",
                        "API Security Assessment",
                        "Network Assessment",
                        "Active Directory Assessment",
                      ],
                    },
                    {
                      title: "Security Posture Assessment",
                      links: ["Phishing Campaign", "Mystery Guest", "Assumed Breach", "Traditional Red Team"],
                    },
                    {
                      title: "Cloud Security",
                      links: ["Container Security", "Kubernetes Security", "Cloud Infrastructure"],
                    },
                    {
                      title: "Managed Security",
                      links: ["SIEM", "Vulnerability Management", "Purple Team"],
                    },
                    {
                      title: "Risk Management",
                      links: ["ISO 27001 Consulting", "HIPPA", "GDPR"],
                    },
                    {
                      title: "Subscriptions",
                      links: ["Security Subscriptions", "CryptX"],
                    },
                  ].map((section, i) => (
                    <div key={i}>
                      <h5 className="text-[var(--primary)] font-medium">{section.title}</h5>
                      <ul className="text-[var(--muted-foreground)] space-y-1 pl-3">
                        {section.links.map((link, j) => (
                          <li key={j}>
                            <Link href="#">{link}</Link>
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
                Who We Are
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "whoweare" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "whoweare" && (
                <ul className="px-6 text-[var(--muted-foreground)] space-y-1">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/partners">Partners</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              )}
            </div>

            {/* Resources Accordion */}
            <div>
              <button
                onClick={() => handleAccordion("resources")}
                className="w-full flex justify-between items-center px-4 py-2 text-[var(--primary)] font-semibold"
              >
                Resources
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    activeAccordion === "resources" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeAccordion === "resources" && (
                <ul className="px-6 text-[var(--muted-foreground)] space-y-1">
                  <li><Link href="/tools">Tools</Link></li>
                  <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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
               <ArrowRight size={16} /> Got hacked ? 
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
