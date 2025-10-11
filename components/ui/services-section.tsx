"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    key: "security-assessments",
    title: "Security Assessments",
    sections: [
      {
        subTitle: "Web Application Security Assessment",
        description:
          "We uncover vulnerabilities across your web applications by simulating real-world attacks, from logic flaws to advanced injection vectors, ensuring every critical function is secure before attackers find it.",
      },
      {
        subTitle: "Mobile Application Security Assessment",
        description:
          "Our team tests your mobile applications from code to API calls, identifying insecure storage, communication leaks, and privilege misuse that could compromise user data or platform integrity.",
      },
      {
        subTitle: "API Security Assessment",
        description:
          "We analyze and exploit API endpoints to detect authentication gaps, data exposure risks, and logic abuses, ensuring your integrations remain secure across modern cloud and microservice environments.",
      },
      {
        subTitle: "Network Security Assessment",
        description:
          "Through internal and external testing, we map and exploit realistic network attack paths to expose misconfigurations, weak segmentation, and exploitable services that could lead to complete compromise.",
      },
      {
        subTitle: "Active Directory Security Assessment",
        description:
          "We emulate adversaries within your domain to uncover privilege escalation paths, misconfigurations, and credential exposures, helping you strengthen your identity and access controls before they are abused.",
      },
    ],
  },
  {
    key: "managed-security",
    title: "Managed Security Services",
    sections: [
      {
        subTitle: "SIEM Monitoring & Threat Detection",
        description:
          "We provide continuous monitoring of your security events, correlating logs and detecting anomalies in real time to identify, contain, and respond to threats before they impact operations.",
      },
      {
        subTitle: "Vulnerability Management",
        description:
          "Our team continuously scans, prioritizes, and tracks vulnerabilities across your assets, ensuring timely remediation through actionable insights and risk-based reporting.",
      },
      {
        subTitle: "Purple Team",
        description:
          "We align offensive and defensive teams to validate and enhance your detection, response, and threat-hunting capabilities, ensuring your defenses evolve with real adversary tactics.",
      },
    ],
  },
  {
    key: "security-posture",
    title: "Security Posture Assessment",
    sections: [
      {
        subTitle: "Phishing Campaign",
        description:
          "We simulate targeted phishing attacks to measure user awareness, identify behavioral gaps, and help strengthen your organization's resilience against social engineering threats.",
      },
      {
        subTitle: "Mystery Guest (Physical Security)",
        description:
          "Our specialists perform controlled on-site intrusion attempts to assess physical security controls, employee awareness, and procedural readiness against real-world breaches.",
      },
      {
        subTitle: "Assumed Breach",
        description:
          "We begin from a compromised state to evaluate internal detection, response, and containment capabilities, revealing how effectively your teams react once an attacker is inside.",
      },
      {
        subTitle: "Traditional Red Team",
        description:
          "Through multi-layered, goal-oriented operations, we emulate real adversaries to test your detection and defense capabilities across technical, human, and procedural layers.",
      },
    ],
  },
  {
    key: "cloud-security",
    title: "Cloud Security",
    sections: [
      {
        subTitle: "Container Security Assessment",
        description:
          "We evaluate your containerized environments for misconfigurations, insecure images, and runtime risks, ensuring strong isolation and resilience across your DevOps pipelines.",
      },
      {
        subTitle: "Kubernetes Security Assessment",
        description:
          "Our experts assess cluster configurations, role-based access, and network policies to identify privilege risks and attack paths within your Kubernetes environment.",
      },
      {
        subTitle: "Cloud Infrastructure Security Assessment",
        description:
          "We review your cloud architecture, identity controls, and deployed assets to uncover configuration weaknesses, excessive privileges, and exposure risks across AWS, Azure, and GCP.",
      },
    ],
  },
  {
    key: "risk-compliance",
    title: "Risk and Compliance Assessment",
    sections: [
      {
        subTitle: "ISO 27001 Consulting",
        description:
          "We guide your organization through the ISO 27001 implementation and certification process, aligning people, processes, and technology to build a sustainable information security framework.",
      },
      {
        subTitle: "HIPAA Compliance",
        description:
          "Our experts help you identify gaps, implement safeguards, and validate compliance with HIPAA requirements to ensure the protection of sensitive healthcare data.",
      },
      {
        subTitle: "GDPR Consulting",
        description:
          "We assist in evaluating data handling practices, consent management, and cross-border transfers to ensure compliance with GDPR while maintaining business efficiency.",
      },
      {
        subTitle: "SOC 1 / SOC 2 Readiness",
        description:
          "We perform readiness assessments to identify control gaps, streamline documentation, and prepare your organization for successful SOC 1 and SOC 2 audits.",
      },
    ],
  },
  {
    key: "security-subscriptions",
    title: "Security Subscriptions",
    sections: [
      {
        subTitle: "Security Subscriptions",
        description:
          "A continuous engagement model that keeps your defenses evolving. Choose recurring pentesting, red teaming, or purple teaming plans that deliver scheduled assessments, prioritized remediation, and measurable posture improvement.",
      },
      {
        subTitle: "CryptX - Evasion Platform for Red Teams",
        description:
          "CryptX is an evasion-as-a-service platform that accelerates red-team operations by automating payload obfuscation, delivery hardening, and bypass techniques - letting teams spend less time on R&D and more time on validated engagements.",
      },
    ],
  },
];

export function ServicesSection() {
  const [activeService, setActiveService] = useState(services[0].key);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const currentService =
    services.find((s) => s.key === (hoveredService || activeService)) ||
    services[0];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-10 relative">
      {/* Left Nav with vertical path */}
<div className="flex flex-col items-start w-full lg:w-1/3 relative ">
  {/* Vertical line with running gradient */}
  <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ae2012] via-[#ae2012]/80 to-[#ae2012] animate-pulse">
    {/* Animated gradient wave */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#ae2012] via-[#ae2012]/60 to-[#ae2012] opacity-80 animate-gradient-wave "></div>
  </div>

  {/* Service items with dots */}
  {services.map((service, idx) => {
    const isActive = activeService === service.key;
    const isHover = hoveredService === service.key;

    return (
      <div
        key={service.key}
        className="relative flex items-center mb-16 cursor-pointer z-10 w-full"
        onMouseEnter={() => setHoveredService(service.key)}
        onMouseLeave={() => setHoveredService(null)}
        onClick={() => setActiveService(service.key)}
      >
        {/* Dot - Perfectly centered and stable */}
        <div
          className={`absolute w-8 h-8 rounded-full z-10 transition-all duration-300 border-4 ${
            isActive || isHover
              ? "bg-[#ae2012] border-[#ae2012] shadow-lg shadow-[#ae2012]/50"
              : "bg-background border-(rgba(255, 255, 255, 0.15))"
          }`}
          style={{
            top: "50%",
            left: "26px",
            transform: "translate(-50%, -50%)",
          }}
        ></div>

        {/* Label */}
        <span
          className={`ml-24 text-left text-lg font-semibold transition-colors duration-300 ${
            isActive ? "text-[#ae2012]" : "text-foreground"
          }`}
        >
          {service.title}
        </span>
      </div>
    );
  })}
</div>


      {/* Right Content */}
      <div className="w-full lg:w-2/3">
        <AnimatePresence mode="wait">
          {currentService && (
            <motion.div
              key={currentService.key}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {currentService.sections.map((section, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-card rounded-xl shadow-md border border-border glass-effect transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2 text-gradient">
                    {section.subTitle}
                  </h3>
                  <p className="text-foreground">{section.description}</p>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
