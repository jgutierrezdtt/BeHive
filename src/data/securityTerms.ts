export interface SecurityTerm {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  categories: string[];
  references: {
    title: string;
    url: string;
  }[];
}

export const securityTerms: SecurityTerm[] = [
  {
    id: "sast",
    name: "SAST (Static Application Security Testing)",
    shortDescription: "An automated security testing method that analyzes source code to find security vulnerabilities.",
    fullDescription: "Static Application Security Testing (SAST) is a type of security testing that analyzes application source code, bytecode, or binary code for security vulnerabilities without executing the application. SAST tools scan the entire codebase to identify vulnerabilities like SQL injection, buffer overflows, and hardcoded passwords that could be exploited by attackers. SAST is often integrated into the CI/CD pipeline to catch security issues early in development.",
    categories: ["Testing", "DevSecOps", "Automation"],
    references: [
      {
        title: "OWASP SAST Guide",
        url: "https://owasp.org/www-community/Source_Code_Analysis_Tools"
      },
      {
        title: "NIST SAST Overview",
        url: "https://samate.nist.gov/index.php/Source_Code_Security_Analyzers.html"
      }
    ]
  },
  {
    id: "dast",
    name: "DAST (Dynamic Application Security Testing)",
    shortDescription: "Security testing that examines an application while it's running to find vulnerabilities.",
    fullDescription: "Dynamic Application Security Testing (DAST) is a method of security testing that analyzes a running application by simulating attacks from malicious users. DAST tools actively test applications for vulnerabilities by sending malicious inputs to an application and analyzing the responses. Unlike SAST, DAST doesn't require access to the source code but can find runtime and environment-related issues that static analysis might miss.",
    categories: ["Testing", "DevSecOps", "Automation"],
    references: [
      {
        title: "OWASP DAST Guide",
        url: "https://owasp.org/www-community/Vulnerability_Scanning_Tools"
      },
      {
        title: "Web Application Security Consortium",
        url: "http://www.webappsec.org/"
      }
    ]
  },
  {
    id: "adr",
    name: "ADR (Architecture Decision Record)",
    shortDescription: "A document that captures an important architectural decision made along with its context and consequences.",
    fullDescription: "Architecture Decision Records (ADRs) are documents that capture important architectural decisions made along with their context and consequences. Each ADR describes the architectural decision, the forces that influenced it, the chosen solution, and the implications of that solution. ADRs are vital for maintaining knowledge about why an application is designed the way it is, especially important for security-critical decisions. They help teams understand the rationale behind choices that impact security posture.",
    categories: ["Documentation", "Architecture", "Governance"],
    references: [
      {
        title: "ADR GitHub Template",
        url: "https://github.com/joelparkerhenderson/architecture-decision-record"
      },
      {
        title: "Documenting Architecture Decisions",
        url: "https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions"
      }
    ]
  },
  {
    id: "sca",
    name: "SCA (Software Composition Analysis)",
    shortDescription: "A security practice that identifies open source components and their vulnerabilities in applications.",
    fullDescription: "Software Composition Analysis (SCA) is a security practice that identifies open source components and their vulnerabilities in applications. SCA tools scan applications to create a detailed bill of materials of all open source libraries, components, and dependencies used in the software. They then match this inventory against vulnerability databases to identify known security issues, license compliance concerns, and outdated components that need updating.",
    categories: ["Dependencies", "DevSecOps", "Compliance"],
    references: [
      {
        title: "OWASP Dependency Check",
        url: "https://owasp.org/www-project-dependency-check/"
      },
      {
        title: "Secure Open Source Libraries Guide",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Third_Party_Javascript_Management_Cheat_Sheet.html"
      }
    ]
  },
  {
    id: "threat-modeling",
    name: "Threat Modeling",
    shortDescription: "A systematic approach for identifying potential security threats to a system and defining countermeasures.",
    fullDescription: "Threat modeling is a structured process of identifying potential security threats to a system, analyzing their potential impact, and defining appropriate countermeasures. It typically involves creating a diagram of the system architecture, identifying assets, trust boundaries, and potential threats, then analyzing how those threats might be realized and mitigated. Effective threat modeling should be performed early in the development lifecycle to identify security requirements and design flaws before implementation.",
    categories: ["Design", "Security Requirements", "Risk Management"],
    references: [
      {
        title: "OWASP Threat Modeling Cheat Sheet",
        url: "https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html"
      },
      {
        title: "Microsoft Threat Modeling Tool",
        url: "https://docs.microsoft.com/en-us/azure/security/develop/threat-modeling-tool"
      }
    ]
  },
  {
    id: "cicd-security",
    name: "CI/CD Security",
    shortDescription: "Security practices and controls implemented in Continuous Integration and Continuous Deployment pipelines.",
    fullDescription: "CI/CD Security refers to the practices, tools, and techniques used to secure Continuous Integration and Continuous Deployment pipelines. Securing the CI/CD pipeline involves protecting build servers, managing secrets properly, validating code integrity, implementing proper access controls, and automating security testing. A secure pipeline ensures that vulnerabilities aren't introduced during the build and deployment process and that only authorized code reaches production environments.",
    categories: ["DevSecOps", "Automation", "Pipeline"],
    references: [
      {
        title: "OWASP CI/CD Security Guide",
        url: "https://owasp.org/www-project-devsecops-guideline/"
      },
      {
        title: "Securing DevOps Pipelines",
        url: "https://docs.github.com/en/code-security/secure-coding/securing-your-supply-chain"
      }
    ]
  }
];

export const getTermById = (id: string): SecurityTerm | undefined => {
  return securityTerms.find(term => term.id === id);
};

export const getAllCategories = (): string[] => {
  const categoriesSet = new Set<string>();
  securityTerms.forEach(term => {
    term.categories.forEach(category => categoriesSet.add(category));
  });
  return Array.from(categoriesSet).sort();
};