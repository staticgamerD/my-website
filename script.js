// Define the quiz data
const quizzes = {
    quiz1: [
        { q: "Which of the following is a method for ensuring data integrity?", a: "Hashing", options: ["Hashing", "Encryption", "Compression", "Redundancy"] },
        { q: "What does 'two-factor authentication' require?", a: "Two forms of verification to access a system", options: ["Two forms of verification to access a system", "A single password", "A security question and an answer", "A biometric scan and a password"] },
        // Add more questions here for quiz1
		{ q: "Which of the following is a method for ensuring data integrity?", a: "Hashing", options: ["Hashing", "Encryption", "Compression", "Redundancy"] },
		{ q: "What does 'two-factor authentication' require?", a: "Two forms of verification to access a system", options: ["Two forms of verification to access a system", "A single password", "A security question and an answer", "A biometric scan and a password"] },
		{ q: "Which type of malware can replicate itself and spread to other systems?", a: "Worm", options: ["Worm", "Trojan horse", "Spyware", "Ransomware"] },
		{ q: "What is the purpose of a honeypot in network security?", a: "To attract and monitor malicious activity", options: ["To attract and monitor malicious activity", "To encrypt sensitive data", "To provide secure remote access", "To manage user permissions"] },
		{ q: "Which security measure involves checking the integrity of files and systems regularly?", a: "File integrity monitoring", options: ["File integrity monitoring", "Network segmentation", "Access control", "Encryption"] },
		{ q: "What is a 'rootkit'?", a: "A type of malware designed to hide its presence on a system", options: ["A type of malware designed to hide its presence on a system", "A tool for scanning network vulnerabilities", "A method for securing email communications", "A type of encryption algorithm"] },
		{ q: "Which type of attack manipulates users into executing malicious commands?", a: "Social engineering", options: ["Social engineering", "SQL Injection", "Denial of Service (DoS)", "Cross-Site Scripting (XSS)"] },
		{ q: "What is the primary function of an access control list (ACL)?", a: "To define permissions for network resources", options: ["To define permissions for network resources", "To encrypt data during transmission", "To monitor network traffic", "To manage user accounts"] },
		{ q: "Which term refers to the process of recovering data after a system failure?", a: "Disaster recovery", options: ["Disaster recovery", "Incident response", "Backup", "Data archiving"] },
		{ q: "What does a Security Information and Event Management (SIEM) system do?", a: "Collects and analyzes security data from various sources", options: ["Collects and analyzes security data from various sources", "Encrypts data at rest", "Provides secure remote access", "Monitors network performance"] },
		{ q: "What is a common method for protecting data from being accessed by unauthorized users?", a: "Implementing strong access controls and encryption", options: ["Implementing strong access controls and encryption", "Regularly updating software", "Monitoring network traffic", "Performing regular backups"] },
		{ q: "Which of the following is an example of a security measure for protecting data at rest?", a: "Encryption", options: ["Encryption", "Firewall", "Antivirus", "Access control"] },
		{ q: "What is the primary function of an incident response plan?", a: "To provide a structured approach for responding to security incidents", options: ["To provide a structured approach for responding to security incidents", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
		{ q: "Which type of access control model assigns permissions based on roles?", a: "Role-Based Access Control (RBAC)", options: ["Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)", "Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)"] },
		{ q: "What is the purpose of a security awareness training program?", a: "To educate users about security risks and best practices", options: ["To educate users about security risks and best practices", "To encrypt data", "To monitor network traffic", "To manage user accounts"] },
		{ q: "Which type of security control is designed to detect and respond to security incidents?", a: "Detective control", options: ["Detective control", "Preventive control", "Corrective control", "Compensating control"] },
		// Additional Questions
		{ q: "What is the main purpose of a VPN?", a: "To secure communication over a public network", options: ["To secure communication over a public network", "To speed up internet connections", "To provide backup solutions", "To encrypt files at rest"] },
		{ q: "Which attack involves sending an overwhelming amount of traffic to a target?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "SQL Injection", "Cross-Site Scripting (XSS)", "Phishing"] },
		{ q: "What type of malware hides itself within legitimate software?", a: "Trojan Horse", options: ["Trojan Horse", "Virus", "Worm", "Ransomware"] },
		{ q: "What is the primary use of a firewall?", a: "To filter and control network traffic", options: ["To filter and control network traffic", "To monitor system performance", "To provide secure remote access", "To encrypt data"] },
		{ q: "What is the concept of 'least privilege'?", a: "Providing only the access necessary to perform a task", options: ["Providing only the access necessary to perform a task", "Allowing users to have maximum permissions", "Separating duties among different users", "Using multiple layers of security"] },
		{ q: "Which security model is based on access labels?", a: "Mandatory Access Control (MAC)", options: ["Mandatory Access Control (MAC)", "Discretionary Access Control (DAC)", "Role-Based Access Control (RBAC)", "Attribute-Based Access Control (ABAC)"] },
		{ q: "What does the acronym IDS stand for?", a: "Intrusion Detection System", options: ["Intrusion Detection System", "Intrusion Prevention System", "Integrated Detection System", "Internet Detection System"] },
		{ q: "What is the primary function of multi-factor authentication (MFA)?", a: "To provide an additional layer of security", options: ["To provide an additional layer of security", "To simplify user login", "To replace passwords with biometric data", "To monitor network traffic"] },
		{ q: "Which term refers to a flaw in software that can be exploited by attackers?", a: "Vulnerability", options: ["Vulnerability", "Threat", "Exploit", "Risk"] },
		{ q: "What is a common way to protect data at rest?", a: "Encryption", options: ["Encryption", "Firewalls", "Antivirus software", "Access control lists"] },
		{ q: "Which protocol is used to secure communications over a network?", a: "HTTPS", options: ["HTTPS", "FTP", "SMTP", "Telnet"] },
		{ q: "What is a 'rootkit' designed to do?", a: "Hide its presence on a system", options: ["Hide its presence on a system", "Scan for vulnerabilities", "Encrypt data", "Manage network traffic"] },
		{ q: "What is the primary goal of an incident response plan?", a: "To provide a structured approach for dealing with security incidents", options: ["To provide a structured approach for dealing with security incidents", "To monitor network traffic", "To encrypt data", "To manage user access"] },
		{ q: "What type of malware is designed to hold data hostage until a ransom is paid?", a: "Ransomware", options: ["Ransomware", "Spyware", "Adware", "Worm"] },
		{ q: "What is the purpose of file integrity monitoring?", a: "To detect unauthorized changes to files", options: ["To detect unauthorized changes to files", "To manage network traffic", "To encrypt data", "To monitor user activity"] },
		{ q: "Which type of backup copies only data that has changed since the last full backup?", a: "Incremental Backup", options: ["Incremental Backup", "Full Backup", "Differential Backup", "Snapshot Backup"] },
		{ q: "What does the acronym DLP stand for?", a: "Data Loss Prevention", options: ["Data Loss Prevention", "Data Leak Prevention", "Data Link Protection", "Data Lifecycle Policy"] },
		{ q: "What is the purpose of network segmentation?", a: "To limit the scope of potential security incidents", options: ["To limit the scope of potential security incidents", "To increase network speed", "To manage user permissions", "To encrypt data"] },
		{ q: "Which security control is implemented after an incident has occurred?", a: "Corrective Control", options: ["Corrective Control", "Preventive Control", "Detective Control", "Compensating Control"] },
		{ q: "What is a common method for securing wireless networks?", a: "WPA2 encryption", options: ["WPA2 encryption", "WEP encryption", "MAC address filtering", "Disabling SSID broadcast"] },
		{ q: "What does the acronym SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "System Information and Event Monitoring", "Security Incident and Event Monitoring", "System Integration and Event Management"] },
		{ q: "What is the purpose of a penetration test?", a: "To identify and exploit vulnerabilities in a system", options: ["To identify and exploit vulnerabilities in a system", "To monitor network performance", "To encrypt data", "To provide security awareness training"] },
		{ q: "What type of malware records user activity without their knowledge?", a: "Keylogger", options: ["Keylogger", "Trojan Horse", "Virus", "Ransomware"] }

    ],
    quiz2: [
        { q: "What is the main purpose of a VPN?", a: "To secure communication over a public network", options: ["To secure communication over a public network", "To speed up internet connections", "To provide backup solutions", "To encrypt files at rest"] },
        { q: "Which attack involves sending an overwhelming amount of traffic to a target?", a: "Denial of Service (DoS)", options: ["Denial of Service (DoS)", "SQL Injection", "Cross-Site Scripting (XSS)", "Phishing"] },
        // Add more questions here for quiz2
		{ q: "What is the primary purpose of a security policy in an organization?", 
		  a: "To establish a framework for protecting organizational assets", 
		  options: ["To define security requirements for the network", "To outline procedures for incident response", "To establish a framework for protecting organizational assets", "To monitor employee compliance with security controls"] 
		},
		{ q: "Which of the following is a key component of a risk management program?", 
		  a: "Risk assessment", 
		  options: ["Risk assessment", "Network segmentation", "Incident response", "Data encryption"] 
		},
		{ q: "What does the term 'compliance' refer to in the context of security management?", 
		  a: "Adhering to legal and regulatory requirements", 
		  options: ["Adhering to legal and regulatory requirements", "Implementing advanced security technologies", "Monitoring network traffic for anomalies", "Conducting regular security audits"] 
		},
		{ q: "Which standard is commonly used to guide information security management systems?", 
		  a: "ISO/IEC 27001", 
		  options: ["ISO/IEC 27001", "NIST SP 800-53", "COBIT 5", "PCI-DSS"] 
		},
		{ q: "What is the purpose of an incident response plan (IRP)?", 
		  a: "To outline steps for responding to security incidents", 
		  options: ["To identify potential security threats", "To outline steps for responding to security incidents", "To manage security compliance", "To document network architecture"] 
		},
		{ q: "What role does a security governance framework play in an organization?", 
		  a: "It defines roles, responsibilities, and policies for managing security", 
		  options: ["It provides guidelines for implementing security technologies", "It defines roles, responsibilities, and policies for managing security", "It outlines procedures for backup and recovery", "It monitors network traffic for threats"] 
		},
		{ q: "Which of the following best describes the concept of 'risk appetite'?", 
		  a: "The level of risk an organization is willing to accept", 
		  options: ["The level of risk an organization is willing to accept", "The amount of risk that can be transferred to a third party", "The degree of security controls implemented", "The budget allocated for security measures"] 
		},
		{ q: "What is the purpose of a Business Continuity Plan (BCP)?", 
		  a: "To ensure critical business functions can continue during a disaster", 
		  options: ["To prevent data breaches", "To ensure critical business functions can continue during a disaster", "To manage user access to systems", "To monitor and respond to security incidents"] 
		},
		{ q: "Which term refers to the process of identifying and evaluating security threats and vulnerabilities?", 
		  a: "Risk assessment", 
		  options: ["Risk assessment", "Security monitoring", "Incident management", "Threat intelligence"] 
		},
		{ q: "What does 'due diligence' involve in the context of security management?", 
		  a: "Ensuring compliance with legal and regulatory requirements", 
		  options: ["Implementing security controls as per industry best practices", "Performing regular vulnerability scans", "Ensuring compliance with legal and regulatory requirements", "Conducting employee security awareness training"] 
		},
		{ q: "What is the main objective of security awareness training for employees?", 
		  a: "To inform employees about security threats and best practices", 
		  options: ["To teach technical skills for managing security tools", "To inform employees about security threats and best practices", "To evaluate the effectiveness of security controls", "To ensure compliance with regulatory standards"] 
		},
		{ q: "What does 'confidentiality' in the CIA triad stand for?", 
		  a: "Ensuring that data is only accessible to authorized individuals", 
		  options: ["Ensuring that data is only accessible to authorized individuals", "Ensuring data integrity and accuracy", "Ensuring that data is available when needed", "Ensuring that data is encrypted"] 
		},
		{ q: "Which security framework focuses on risk management and is used for IT governance?", 
		  a: "COBIT", 
		  options: ["COBIT", "NIST Cybersecurity Framework", "ISO/IEC 27001", "PCI-DSS"] 
		},
		{ q: "What is a 'vulnerability assessment'?", 
		  a: "A method of identifying weaknesses in systems and applications", 
		  options: ["A process of evaluating the potential impact of security threats", "A method of identifying weaknesses in systems and applications", "A technique for monitoring network performance", "A strategy for managing compliance with security policies"] 
		},
		{ q: "Which of the following is a proactive approach to managing security risks?", 
		  a: "Risk assessment", 
		  options: ["Incident response", "Risk assessment", "Security monitoring", "Security awareness training"] 
		},
		{ q: "What is the primary goal of security policy enforcement?", 
		  a: "To ensure compliance with security policies and procedures", 
		  options: ["To ensure compliance with security policies and procedures", "To implement new security technologies", "To conduct regular security audits", "To monitor network traffic for suspicious activities"] 
		},
		{ q: "Which standard is used for assessing the security of a payment card environment?", 
		  a: "PCI-DSS", 
		  options: ["PCI-DSS", "ISO/IEC 27001", "NIST SP 800-53", "COBIT 5"] 
		},
		{ q: "What is the role of a Chief Information Security Officer (CISO)?", 
		  a: "To oversee and direct the organization's security program", 
		  options: ["To manage IT infrastructure", "To oversee and direct the organization's security program", "To perform technical security assessments", "To develop marketing strategies"] 
		},
		{ q: "What is 'risk tolerance'?", 
		  a: "The level of risk an organization is willing to accept without additional controls", 
		  options: ["The level of risk an organization is willing to accept without additional controls", "The extent to which risks can be transferred to external parties", "The process of identifying and mitigating security threats", "The measures taken to ensure data confidentiality"] 
		},
		{ q: "What does 'data integrity' refer to?", 
		  a: "Ensuring that data is accurate and consistent", 
		  options: ["Ensuring that data is accurate and consistent", "Ensuring that data is encrypted", "Ensuring that data is available when needed", "Ensuring that data is only accessible to authorized users"] 
		},
		{ q: "Which of the following is an example of a preventive control?", 
		  a: "Antivirus software", 
		  options: ["Intrusion detection system", "Antivirus software", "Incident response plan", "Backup and recovery procedures"] 
		},
		{ q: "What is the purpose of a security audit?", 
		  a: "To assess the effectiveness of security controls and policies", 
		  options: ["To assess the effectiveness of security controls and policies", "To monitor real-time security threats", "To implement new security technologies", "To train employees on security best practices"] 
		},
		{ q: "Which of the following best describes 'incident management'?", 
		  a: "The process of handling and responding to security incidents", 
		  options: ["The process of handling and responding to security incidents", "The process of identifying and evaluating security risks", "The implementation of security technologies", "The development of security policies"] 
		},
		{ q: "What is the primary focus of security compliance?", 
		  a: "Adhering to regulatory requirements and industry standards", 
		  options: ["Adhering to regulatory requirements and industry standards", "Implementing new security technologies", "Conducting regular security training", "Monitoring network performance"] 
		},
		{ q: "What is 'business impact analysis' (BIA)?", 
		  a: "A process of assessing the potential impact of disruptions to business operations", 
		  options: ["A process of assessing the potential impact of disruptions to business operations", "A method of identifying security vulnerabilities", "A technique for monitoring network traffic", "A strategy for managing security incidents"] 
		},
		{ q: "Which framework provides a set of best practices for IT governance and management?", 
		  a: "COBIT", 
		  options: ["COBIT", "ISO/IEC 27001", "NIST Cybersecurity Framework", "PCI-DSS"] 
		},
		{ q: "What is the purpose of a risk register?", 
		  a: "To document and track identified risks and their mitigation strategies", 
		  options: ["To document and track identified risks and their mitigation strategies", "To monitor real-time security threats", "To evaluate the effectiveness of security controls", "To implement new security technologies"] 
		},
		{ q: "Which of the following is an example of a detective control?", 
		  a: "Security cameras", 
		  options: ["Security cameras", "Firewalls", "Encryption", "Access controls"] 
		},
		{ q: "What does 'availability' in the CIA triad refer to?", 
		  a: "Ensuring that data and systems are accessible when needed", 
		  options: ["Ensuring that data and systems are accessible when needed", "Ensuring data integrity and accuracy", "Ensuring that data is protected from unauthorized access", "Ensuring that data is encrypted"] 
		},
		{ q: "What is a 'security baseline'?", 
		  a: "A set of minimum security standards that must be met", 
		  options: ["A set of minimum security standards that must be met", "A collection of advanced security features", "A document outlining security policies", "A tool for monitoring network traffic"] 
		},
		{ q: "What is the purpose of a vulnerability management program?", 
		  a: "To identify, assess, and mitigate security vulnerabilities", 
		  options: ["To identify, assess, and mitigate security vulnerabilities", "To monitor network performance", "To ensure regulatory compliance", "To manage incident response procedures"] 
		},
		{ q: "What does 'risk assessment' involve?", 
		  a: "Identifying and evaluating risks to organizational assets", 
		  options: ["Identifying and evaluating risks to organizational assets", "Implementing security controls", "Monitoring network traffic", "Conducting security awareness training"] 
		},
		{ q: "Which document outlines the steps to be taken in response to a security incident?", 
		  a: "Incident response plan", 
		  options: ["Incident response plan", "Business continuity plan", "Security policy", "Risk management plan"] 
		},
		{ q: "What is 'security posture'?", 
		  a: "The overall security status of an organization", 
		  options: ["The overall security status of an organization", "The process of training employees on security", "The level of compliance with security policies", "The effectiveness of security technologies"] 
		},
		{ q: "What is a 'contingency plan'?", 
		  a: "A plan to ensure continuity of operations in case of an unexpected event", 
		  options: ["A plan to ensure continuity of operations in case of an unexpected event", "A strategy for preventing security breaches", "A document detailing security controls", "A procedure for conducting security audits"] 
		},
		{ q: "Which term refers to the process of assessing potential threats to information assets?", 
		  a: "Threat modeling", 
		  options: ["Threat modeling", "Incident response", "Vulnerability assessment", "Risk assessment"] 
		},
		{ q: "What is the purpose of a security metrics program?", 
		  a: "To measure and evaluate the effectiveness of security controls", 
		  options: ["To measure and evaluate the effectiveness of security controls", "To implement new security technologies", "To manage compliance with security policies", "To conduct security awareness training"] 
		},
		{ q: "What does 'incident response' involve?", 
		  a: "Handling and managing the aftermath of a security breach or attack", 
		  options: ["Handling and managing the aftermath of a security breach or attack", "Assessing and mitigating security risks", "Implementing security technologies", "Developing security policies"] 
		},
		{ q: "Which of the following is a key component of an effective security awareness program?", 
		  a: "Regular training sessions for employees", 
		  options: ["Regular training sessions for employees", "Advanced security tools", "Intrusion detection systems", "Compliance audits"] 
		},
		{ q: "What does 'penetration testing' involve?", 
		  a: "Simulating attacks to identify vulnerabilities in systems", 
		  options: ["Simulating attacks to identify vulnerabilities in systems", "Monitoring network traffic for security threats", "Assessing the effectiveness of security controls", "Implementing new security measures"] 
		},
		{ q: "What is 'security incident'?", 
		  a: "An event that threatens the confidentiality, integrity, or availability of information", 
		  options: ["An event that threatens the confidentiality, integrity, or availability of information", "A potential threat to organizational assets", "A violation of security policies", "A security control failure"] 
		},
		{ q: "Which of the following best describes 'access control'?", 
		  a: "Managing who can view or use resources in a computing environment", 
		  options: ["Managing who can view or use resources in a computing environment", "Detecting and responding to security incidents", "Ensuring data is encrypted", "Backing up data to prevent loss"] 
		},
		{ q: "What is 'data classification'?", 
		  a: "The process of categorizing data based on its sensitivity and importance", 
		  options: ["The process of categorizing data based on its sensitivity and importance", "The method of securing data using encryption", "The practice of monitoring data access", "The procedure for conducting data backups"] 
		},
		{ q: "Which standard is designed to help organizations secure their cloud environments?", 
		  a: "CSA Cloud Controls Matrix", 
		  options: ["CSA Cloud Controls Matrix", "ISO/IEC 27001", "PCI-DSS", "COBIT"] 
		},
		],
	quiz3: [
				{ q: "What does SDN stand for?", a: "Software-defined Networking", options: ["Software-defined Networking", "Software Development Network", "System-defined Networking", "System Development Network"] },
		{ q: "What does SE Linux stand for?", a: "Security-enhanced Linux", options: ["Security-enhanced Linux", "Secure Enterprise Linux", "System-encrypted Linux", "Standard Enhanced Linux"] },
		{ q: "What does SED stand for?", a: "Self-encrypting Drives", options: ["Self-encrypting Drives", "Secure Encrypted Drives", "Self-encryption Device", "System-encrypting Drive"] },
		{ q: "What does SEH stand for?", a: "Structured Exception Handler", options: ["Structured Exception Handler", "System Exception Handler", "Security Exception Handler", "Standard Exception Handler"] },
		{ q: "What does SFTP stand for?", a: "Secure File Transfer Protocol", options: ["Secure File Transfer Protocol", "Simple File Transfer Protocol", "Standard File Transfer Protocol", "Secured File Transfer Protocol"] },
		{ q: "What does SHA stand for?", a: "Secure Hash Algorithm", options: ["Secure Hash Algorithm", "Standard Hash Algorithm", "System Hash Algorithm", "Simple Hash Algorithm"] },
		{ q: "What does SHTTP stand for?", a: "Secure Hypertext Transfer Protocol", options: ["Secure Hypertext Transfer Protocol", "Standard Hypertext Transfer Protocol", "Simple Hypertext Transfer Protocol", "Secured Hypertext Transfer Protocol"] },
		{ q: "What does SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "System Information and Event Management", "Security Incident and Event Management", "Standard Information and Event Management"] },
		{ q: "What does SIM stand for?", a: "Subscriber Identity Module", options: ["Subscriber Identity Module", "System Identity Module", "Secure Identity Module", "Standard Identity Module"] },
		{ q: "What does SLA stand for?", a: "Service-level Agreement", options: ["Service-level Agreement", "System-level Agreement", "Security-level Agreement", "Standard-level Agreement"] },
		{ q: "What does SLE stand for?", a: "Single Loss Expectancy", options: ["Single Loss Expectancy", "System Loss Expectancy", "Security Loss Expectancy", "Standard Loss Expectancy"] },
		{ q: "What does SMS stand for?", a: "Short Message Service", options: ["Short Message Service", "Standard Messaging Service", "Simple Message Service", "Secure Messaging Service"] },
		{ q: "What does SMTP stand for?", a: "Simple Mail Transfer Protocol", options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Standard Mail Transfer Protocol", "System Mail Transfer Protocol"] },
		{ q: "What does SMTPS stand for?", a: "Simple Mail Transfer Protocol Secure", options: ["Simple Mail Transfer Protocol Secure", "Secure Mail Transfer Protocol", "Standard Mail Transfer Protocol Secure", "System Mail Transfer Protocol Secure"] },
		{ q: "What does SNMP stand for?", a: "Simple Network Management Protocol", options: ["Simple Network Management Protocol", "Secure Network Management Protocol", "Standard Network Management Protocol", "System Network Management Protocol"] },
		{ q: "What does SOAP stand for?", a: "Simple Object Access Protocol", options: ["Simple Object Access Protocol", "Standard Object Access Protocol", "Secure Object Access Protocol", "System Object Access Protocol"] },
		{ q: "What does SOAR stand for?", a: "Security Orchestration, Automation, and Response", options: ["Security Orchestration, Automation, and Response", "System Orchestration, Automation, and Response", "Secure Orchestration, Automation, and Response", "Standard Orchestration, Automation, and Response"] },
		{ q: "What does SoC stand for?", a: "System on Chip", options: ["System on Chip", "Secure on Chip", "Standard on Chip", "Service on Chip"] },
		{ q: "What does SOC stand for?", a: "Security Operations Center", options: ["Security Operations Center", "System Operations Center", "Secure Operations Center", "Standard Operations Center"] },
		{ q: "What does SOW stand for?", a: "Statement of Work", options: ["Statement of Work", "System of Work", "Secure of Work", "Standard of Work"] },
		{ q: "What does SPF stand for?", a: "Sender Policy Framework", options: ["Sender Policy Framework", "Secure Policy Framework", "System Policy Framework", "Standard Policy Framework"] },
		{ q: "What does SPIM stand for?", a: "Spam over Internet Messaging", options: ["Spam over Internet Messaging", "Secure Protocol Internet Messaging", "Standard Protocol Internet Messaging", "System Protocol Internet Messaging"] },
		{ q: "What does SQL stand for?", a: "Structured Query Language", options: ["Structured Query Language", "Standard Query Language", "System Query Language", "Simple Query Language"] },
		{ q: "What does SQLi stand for?", a: "SQL Injection", options: ["SQL Injection", "System Query Injection", "Secure Query Injection", "Standard Query Injection"] },
		{ q: "What does SRTP stand for?", a: "Secure Real-Time Protocol", options: ["Secure Real-Time Protocol", "Standard Real-Time Protocol", "System Real-Time Protocol", "Secure Routing Time Protocol"] },
		{ q: "What does SSD stand for?", a: "Solid State Drive", options: ["Solid State Drive", "Secure State Drive", "Standard State Drive", "System State Drive"] },
		{ q: "What does SSH stand for?", a: "Secure Shell", options: ["Secure Shell", "Standard Shell", "System Shell", "Simple Shell"] },
		{ q: "What does SSL stand for?", a: "Secure Sockets Layer", options: ["Secure Sockets Layer", "Standard Sockets Layer", "System Sockets Layer", "Simple Sockets Layer"] },
		{ q: "What does SSO stand for?", a: "Single Sign-on", options: ["Single Sign-on", "Secure Sign-on", "System Sign-on", "Simple Sign-on"] },
		{ q: "What does STIX stand for?", a: "Structured Threat Information eXchange", options: ["Structured Threat Information eXchange", "System Threat Information eXchange", "Secure Threat Information eXchange", "Standard Threat Information eXchange"] },
		{ q: "What does SWG stand for?", a: "Secure Web Gateway", options: ["Secure Web Gateway", "System Web Gateway", "Standard Web Gateway", "Secure Wide Gateway"] },
		{ q: "What does TACACS+ stand for?", a: "Terminal Access Controller Access-Control System", options: ["Terminal Access Controller Access-Control System", "Terminal Access Control and Security System", "Terminal Access Controller Access-Configuration System", "Terminal Access Control Access-Control System"] },
		{ q: "What does TAXII stand for?", a: "Trusted Automated eXchange of Indicator Information", options: ["Trusted Automated eXchange of Indicator Information", "Trusted Automated Exchange of Information Indicators", "Trusted Access Exchange of Indicator Information", "Trusted Automated Exchange of Information Interface"] },
		{ q: "What does TCP/IP stand for?", a: "Transmission Control Protocol/Internet Protocol", options: ["Transmission Control Protocol/Internet Protocol", "Transmission Communication Protocol/Internet Protocol", "Transmission Control Program/Internet Protocol", "Transmission Control Procedure/Internet Protocol"] },
		{ q: "What does TGT stand for?", a: "Ticket Granting Ticket", options: ["Ticket Granting Ticket", "Token Granting Ticket", "Transport Granting Ticket", "Transaction Granting Ticket"] },
		{ q: "What does TKIP stand for?", a: "Temporal Key Integrity Protocol", options: ["Temporal Key Integrity Protocol", "Transport Key Integrity Protocol", "Technical Key Integrity Protocol", "Transmission Key Integrity Protocol"] },
		{ q: "What does TLS stand for?", a: "Transport Layer Security", options: ["Transport Layer Security", "Transfer Layer Security", "Technical Layer Security", "Transmission Layer Security"] },
		{ q: "What does TOC stand for?", a: "Time-of-check", options: ["Time-of-check", "Time-of-change", "Time-of-completion", "Time-of-conversion"] },
		{ q: "What does TOTP stand for?", a: "Time-based One-time Password", options: ["Time-based One-time Password", "Token-based One-time Password", "Technical One-time Password", "Transaction One-time Password"] },
		{ q: "What does TOU stand for?", a: "Time-of-use", options: ["Time-of-use", "Technical-of-use", "Token-of-use", "Transfer-of-use"] },
		{ q: "What does TPM stand for?", a: "Trusted Platform Module", options: ["Trusted Platform Module", "Technical Platform Module", "Transport Platform Module", "Transactional Platform Module"] },
		{ q: "What does TTP stand for?", a: "Tactics, Techniques, and Procedures", options: ["Tactics, Techniques, and Procedures", "Tactical Techniques and Procedures", "Technical Tactics and Procedures", "Tactical Technologies and Procedures"] },
		{ q: "What does TSIG stand for?", a: "Transaction Signature", options: ["Transaction Signature", "Token Signature", "Technical Signature", "Transfer Signature"] },
		{ q: "What does UAT stand for?", a: "User Acceptance Testing", options: ["User Acceptance Testing", "User Assessment Testing", "Universal Acceptance Testing", "User Application Testing"] },
		{ q: "What does UAV stand for?", a: "Unmanned Aerial Vehicle", options: ["Unmanned Aerial Vehicle", "Unmanned Aircraft Vehicle", "Unified Aerial Vehicle", "Unmanned Autonomous Vehicle"] },
		{ q: "What does UDP stand for?", a: "User Datagram Protocol", options: ["User Datagram Protocol", "Universal Datagram Protocol", "Uniform Datagram Protocol", "Unified Datagram Protocol"] },
		{ q: "What does UEFI stand for?", a: "Unified Extensible Firmware Interface", options: ["Unified Extensible Firmware Interface", "Universal Extensible Firmware Interface", "Uniform Extensible Firmware Interface", "Unified Encrypted Firmware Interface"] },
		{ q: "What does UEM stand for?", a: "Unified Endpoint Management", options: ["Unified Endpoint Management", "Universal Endpoint Management", "Uniform Endpoint Management", "Unified Equipment Management"] },
		{ q: "What does UPS stand for?", a: "Uninterruptible Power Supply", options: ["Uninterruptible Power Supply", "Universal Power Supply", "Uninterrupted Power Supply", "Unified Power Supply"] },
		{ q: "What does URI stand for?", a: "Uniform Resource Identifier", options: ["Uniform Resource Identifier", "Universal Resource Identifier", "Uniform Resource Indicator", "Universal Resource Indicator"] },
		{ q: "What does URL stand for?", a: "Uniform Resource Locator", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"] },
		{ q: "What does USB stand for?", a: "Universal Serial Bus", options: ["Universal Serial Bus", "Uniform Serial Bus", "Unified Serial Bus", "Universal Service Bus"] },
		{ q: "What does USB OTG stand for?", a: "USB On-the-Go", options: ["USB On-the-Go", "Universal Service Bus On-the-Go", "Unified Serial Bus On-the-Go", "Universal Serial Bus On-the-Go"] },
		{ q: "What does UTM stand for?", a: "Unified Threat Management", options: ["Unified Threat Management", "Universal Threat Management", "Uniform Threat Management", "Unified Technology Management"] },
		{ q: "What does UTP stand for?", a: "Unshielded Twisted Pair", options: ["Unshielded Twisted Pair", "Unified Twisted Pair", "Universal Twisted Pair", "Unshielded Transmission Pair"] },
		{ q: "What does VBA stand for?", a: "Visual Basic", options: ["Visual Basic", "Virtual Basic", "Variable Basic", "Version Basic"] },
		{ q: "What does VDE stand for?", a: "Virtual Desktop Environment", options: ["Virtual Desktop Environment", "Virtual Development Environment", "Virtual Device Environment", "Virtual Desktop Experience"] },
		{ q: "What does VDI stand for?", a: "Virtual Desktop Infrastructure", options: ["Virtual Desktop Infrastructure", "Virtual Development Infrastructure", "Virtual Device Infrastructure", "Virtual Desktop Interface"] },
		{ q: "What does VLAN stand for?", a: "Virtual Local Area Network", options: ["Virtual Local Area Network", "Virtual Link Access Network", "Virtual Local Access Network", "Virtual Layer Area Network"] },
		{ q: "What does VLSM stand for?", a: "Variable Length Subnet Masking", options: ["Variable Length Subnet Masking", "Variable Length Subnet Management", "Variable Length Subnet Mapping", "Variable Layer Subnet Masking"] },
		{ q: "What does VM stand for?", a: "Virtual Machine", options: ["Virtual Machine", "Virtual Module", "Variable Machine", "Version Machine"] },
		{ q: "What does VoIP stand for?", a: "Voice over IP", options: ["Voice over IP", "Voice over Internet Protocol", "Voice on IP", "Voice over Integrated Protocol"] },
		{ q: "What does VPC stand for?", a: "Virtual Private Cloud", options: ["Virtual Private Cloud", "Virtual Protected Cloud", "Virtual Public Cloud", "Virtual Private Connection"] },
		{ q: "What does VPN stand for?", a: "Virtual Private Network", options: ["Virtual Private Network", "Virtual Protected Network", "Virtual Public Network", "Virtual Protocol Network"] },
		{ q: "What does VTC stand for?", a: "Video Teleconferencing", options: ["Video Teleconferencing", "Virtual Teleconferencing", "Voice Teleconferencing", "Video Terminal Communication"] },
		{ q: "What does WAF stand for?", a: "Web Application Firewall", options: ["Web Application Firewall", "Web Access Firewall", "Web Authentication Firewall", "Web Application Filter"] },
		{ q: "What does WAP stand for?", a: "Wireless Access Point", options: ["Wireless Access Point", "Wide Access Point", "Web Access Point", "Wired Access Point"] },
		{ q: "What does WEP stand for?", a: "Wired Equivalent Privacy", options: ["Wired Equivalent Privacy", "Wireless Encryption Protocol", "Wireless Equivalent Privacy", "Wired Encryption Protocol"] },
		{ q: "What does WIDS stand for?", a: "Wireless Intrusion Detection System", options: ["Wireless Intrusion Detection System", "Wireless Intrusion Defense System", "Wireless Intrusion Detection Service", "Wide Intrusion Detection System"] },
		{ q: "What does WIPS stand for?", a: "Wireless Intrusion Prevention System", options: ["Wireless Intrusion Prevention System", "Wireless Intrusion Protection System", "Wireless Intrusion Prevention Service", "Wide Intrusion Prevention System"] },
		{ q: "What does WO stand for?", a: "Work Order", options: ["Work Order", "Workflow Order", "Wide Order", "Web Order"] },
		{ q: "What does WPA stand for?", a: "Wi-Fi Protected Access", options: ["Wi-Fi Protected Access", "Wireless Protected Access", "Wi-Fi Privacy Access", "Wireless Privacy Access"] },
		{ q: "What does WPS stand for?", a: "Wi-Fi Protected Setup", options: ["Wi-Fi Protected Setup", "Wireless Protected Setup", "Wi-Fi Privacy Setup", "Wireless Privacy Setup"] },
		{ q: "What does WTLS stand for?", a: "Wireless TLS", options: ["Wireless TLS", "Web TLS", "Wide TLS", "Wireless Transport Layer Security"] },
		{ q: "What does XDR stand for?", a: "Extended Detection and Response", options: ["Extended Detection and Response", "External Detection and Response", "Extended Data and Response", "External Data and Response"] },
		{ q: "What does XML stand for?", a: "Extensible Markup Language", options: ["Extensible Markup Language", "Extended Markup Language", "External Markup Language", "Executable Markup Language"] },
		{ q: "What does XOR stand for?", a: "Exclusive Or", options: ["Exclusive Or", "External Or", "Extended Or", "Extra Or"] },
		{ q: "What does XSRF stand for?", a: "Cross-site Request Forgery", options: ["Cross-site Request Forgery", "Cross-site Resource Forgery", "Cross-system Request Forgery", "Cross-site Response Forgery"] },
		{ q: "What does XSS stand for?", a: "Cross-site Scripting", options: ["Cross-site Scripting", "Cross-system Scripting", "Cross-site Security", "Cross-server Scripting"] },
		{ q: "What does MTTR stand for?", a: "Mean Time to Recover", options: ["Mean Time to Recover", "Mean Time to Repair", "Maximum Time to Repair", "Minimum Time to Recover"] },
		{ q: "What does MTU stand for?", a: "Maximum Transmission Unit", options: ["Maximum Transmission Unit", "Minimum Transmission Unit", "Media Transmission Unit", "Maximum Transfer Unit"] },
		{ q: "What does NAC stand for?", a: "Network Access Control", options: ["Network Access Control", "Network Authorization Control", "Network Authentication Control", "Network Access Configuration"] },
		{ q: "What does NAT stand for?", a: "Network Address Translation", options: ["Network Address Translation", "Network Authorization Translation", "Network Access Translation", "Network Address Transfer"] },
		{ q: "What does NDA stand for?", a: "Non-disclosure Agreement", options: ["Non-disclosure Agreement", "Non-disclosure Arrangement", "Non-disclosure Accord", "Non-disclosure Assent"] },
		{ q: "What does NFC stand for?", a: "Near Field Communication", options: ["Near Field Communication", "Network Field Communication", "Near Frequency Communication", "Near Functional Communication"] },
		{ q: "What does NGFW stand for?", a: "Next-generation Firewall", options: ["Next-generation Firewall", "Networked Gateway Firewall", "Next-grade Firewall", "New-generation Firewall"] },
		{ q: "What does NIDS stand for?", a: "Network-based Intrusion Detection System", options: ["Network-based Intrusion Detection System", "Network Intrusion Detection System", "Network Integrated Detection System", "Network-based Incident Detection System"] },
		{ q: "What does NIPS stand for?", a: "Network-based Intrusion Prevention System", options: ["Network-based Intrusion Prevention System", "Network Intrusion Prevention System", "Network Integrated Prevention System", "Network-based Incident Prevention System"] },
		{ q: "What does NIST stand for?", a: "National Institute of Standards & Technology", options: ["National Institute of Standards & Technology", "National Institute of Security & Technology", "National Institute of Statistics & Technology", "National Institute of Science & Technology"] },
		{ q: "What does NTFS stand for?", a: "New Technology File System", options: ["New Technology File System", "New Technology Format System", "New Transfer File System", "Next Technology File System"] },
		{ q: "What does NTLM stand for?", a: "New Technology LAN Manager", options: ["New Technology LAN Manager", "New Technology Local Manager", "New Technical LAN Manager", "New Trusted LAN Manager"] },
		{ q: "What does NTP stand for?", a: "Network Time Protocol", options: ["Network Time Protocol", "Network Transfer Protocol", "Network Transport Protocol", "Network Timing Protocol"] },
		{ q: "What does OAUTH stand for?", a: "Open Authorization", options: ["Open Authorization", "Open Access", "Open Authentication", "Open Authorization Access"] },
		{ q: "What does OCSP stand for?", a: "Online Certificate Status Protocol", options: ["Online Certificate Status Protocol", "Online Certificate Security Protocol", "Online Certification Status Protocol", "Online Certification Security Protocol"] },
		{ q: "What does OID stand for?", a: "Object Identifier", options: ["Object Identifier", "Object Identification", "Object ID", "Object Identity"] },
		{ q: "What does OS stand for?", a: "Operating System", options: ["Operating System", "Open Source", "Online System", "Operational Service"] },
		{ q: "What does OSINT stand for?", a: "Open-source Intelligence", options: ["Open-source Intelligence", "Operational Security Intelligence", "Open-source Information", "Operational Source Intelligence"] },
		{ q: "What does OSPF stand for?", a: "Open Shortest Path First", options: ["Open Shortest Path First", "Open Security Path First", "Operational Shortest Path First", "Open Standard Path First"] },
		{ q: "What does OT stand for?", a: "Operational Technology", options: ["Operational Technology", "Operational Tool", "Operational Test", "Operational Trend"] },
		{ q: "What does OTA stand for?", a: "Over the Air", options: ["Over the Air", "Over the Application", "Open the Air", "Over the Area"] },
		{ q: "What does OVAL stand for?", a: "Open Vulnerability Assessment Language", options: ["Open Vulnerability Assessment Language", "Operational Vulnerability Assessment Language", "Open Validation Assessment Language", "Operational Validation Assessment Language"] },
		{ q: "What does P12 stand for?", a: "PKCS #12", options: ["PKCS #12", "Public Key Certificate", "Private Key Certificate", "Public Key Code Signing"] },
		{ q: "What does P2P stand for?", a: "Peer to Peer", options: ["Peer to Peer", "Private to Private", "Public to Public", "Personal to Personal"] },
		{ q: "What does PaaS stand for?", a: "Platform as a Service", options: ["Platform as a Service", "Platform and Service", "Private as a Service", "Platform and Security"] },
		{ q: "What does PAC stand for?", a: "Proxy Auto Configuration", options: ["Proxy Auto Configuration", "Public Access Configuration", "Private Access Configuration", "Protocol Access Configuration"] },
		{ q: "What does PAM stand for?", a: "Privileged Access Management", options: ["Privileged Access Management", "Pluggable Authentication Modules", "Public Access Management", "Privileged Application Management"] },
		{ q: "What does PAM stand for?", a: "Pluggable Authentication Modules", options: ["Pluggable Authentication Modules", "Privileged Access Management", "Public Authentication Modules", "Pluggable Application Modules"] },
		{ q: "What does PAP stand for?", a: "Password Authentication Protocol", options: ["Password Authentication Protocol", "Public Authentication Protocol", "Password Access Protocol", "Password Application Protocol"] },
		{ q: "What does PAT stand for?", a: "Port Address Translation", options: ["Port Address Translation", "Protocol Address Translation", "Private Address Translation", "Public Address Translation"] },
		{ q: "What does PBKDF2 stand for?", a: "Password-based Key Derivation Function 2", options: ["Password-based Key Derivation Function 2", "Password-based Key Design Function 2", "Password-based Key Distribution Function 2", "Password-based Key Definition Function 2"] },
		{ q: "What does PBX stand for?", a: "Private Branch Exchange", options: ["Private Branch Exchange", "Public Branch Exchange", "Personal Branch Exchange", "Public Base Exchange"] },
		{ q: "What does PCAP stand for?", a: "Packet Capture", options: ["Packet Capture", "Protocol Capture", "Packet Control", "Protocol Control"] },
		{ q: "What does PCI DSS stand for?", a: "Payment Card Industry Data Security Standard", options: ["Payment Card Industry Data Security Standard", "Payment Card Integrated Data Security Standard", "Payment Card Information Data Security Standard", "Payment Card Internet Data Security Standard"] },
		{ q: "What does PDU stand for?", a: "Power Distribution Unit", options: ["Power Distribution Unit", "Power Delivery Unit", "Power Device Unit", "Power Data Unit"] },
		{ q: "What does PEAP stand for?", a: "Protected Extensible Authentication Protocol", options: ["Protected Extensible Authentication Protocol", "Public Extensible Authentication Protocol", "Private Extensible Authentication Protocol", "Protected Enhanced Authentication Protocol"] },
		{ q: "What does PED stand for?", a: "Personal Electronic Device", options: ["Personal Electronic Device", "Public Electronic Device", "Private Electronic Device", "Portable Electronic Device"] },
		{ q: "What does PEM stand for?", a: "Privacy Enhanced Mail", options: ["Privacy Enhanced Mail", "Private Enhanced Mail", "Public Enhanced Mail", "Protected Enhanced Mail"] },
		{ q: "What does PFS stand for?", a: "Perfect Forward Secrecy", options: ["Perfect Forward Secrecy", "Perfect Forward Security", "Public Forward Secrecy", "Private Forward Secrecy"] },
		{ q: "What does PGP stand for?", a: "Pretty Good Privacy", options: ["Pretty Good Privacy", "Private Good Privacy", "Public Good Privacy", "Protected Good Privacy"] },
		{ q: "What does PHI stand for?", a: "Personal Health Information", options: ["Personal Health Information", "Personal High Information", "Public Health Information", "Protected Health Information"] },
		{ q: "What does PII stand for?", a: "Personally Identifiable Information", options: ["Personally Identifiable Information", "Personal Identification Information", "Private Identifiable Information", "Publicly Identifiable Information"] },
		{ q: "What does PIV stand for?", a: "Personal Identity Verification", options: ["Personal Identity Verification", "Private Identity Verification", "Public Identity Verification", "Personal Information Verification"] },
		{ q: "What does PKCS stand for?", a: "Public Key Cryptography Standards", options: ["Public Key Cryptography Standards", "Private Key Cryptography Standards", "Public Knowledge Cryptography Standards", "Private Knowledge Cryptography Standards"] },
		{ q: "What does PKI stand for?", a: "Public Key Infrastructure", options: ["Public Key Infrastructure", "Private Key Infrastructure", "Public Knowledge Infrastructure", "Private Knowledge Infrastructure"] },
		{ q: "What does POP stand for?", a: "Post Office Protocol", options: ["Post Office Protocol", "Public Office Protocol", "Private Office Protocol", "Post Office Procedure"] },
		{ q: "What does POTS stand for?", a: "Plain Old Telephone Service", options: ["Plain Old Telephone Service", "Private Old Telephone Service", "Public Old Telephone Service", "Plain Original Telephone Service"] },
		{ q: "What does PPP stand for?", a: "Point-to-Point Protocol", options: ["Point-to-Point Protocol", "Private-to-Private Protocol", "Public-to-Public Protocol", "Point-to-Point Procedure"] },
		{ q: "What does PPTP stand for?", a: "Point-to-Point Tunneling Protocol", options: ["Point-to-Point Tunneling Protocol", "Private-to-Private Tunneling Protocol", "Public-to-Public Tunneling Protocol", "Point-to-Point Transfer Protocol"] },
		{ q: "What does PSK stand for?", a: "Pre-shared Key", options: ["Pre-shared Key", "Public Shared Key", "Private Shared Key", "Pre-set Key"] },
		{ q: "What does PTZ stand for?", a: "Pan-tilt-zoom", options: ["Pan-tilt-zoom", "Pan-to-zoom", "Position-to-zoom", "Pan-and-tilt-zoom"] },
		{ q: "What does PUP stand for?", a: "Potentially Unwanted Program", options: ["Potentially Unwanted Program", "Potentially Unnecessary Program", "Potentially Unsecure Program", "Potentially Unidentified Program"] },
		{ q: "What does RA stand for?", a: "Recovery Agent", options: ["Recovery Agent", "Registration Authority", "Remediation Agent", "Risk Assessor"] },
		{ q: "What does RA stand for?", a: "Registration Authority", options: ["Registration Authority", "Recovery Agent", "Remediation Authority", "Risk Assessor"] },
		{ q: "What does RACE stand for?", a: "Research and Development in Advanced Communications Technologies in Europe", options: ["Research and Development in Advanced Communications Technologies in Europe", "Research and Analysis in Communication Technologies in Europe", "Regional and Communication Engineering in Europe", "Research and Application of Communication Technologies in Europe"] },
		{ q: "What does RAID stand for?", a: "Redundant Array of Independent Disks", options: ["Redundant Array of Independent Disks", "Redundant Access of Independent Disks", "Redundant Allocation of Independent Disks", "Redundant Array of Inexpensive Disks"] },
		{ q: "What does RAM stand for?", a: "Random Access Memory", options: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Reversible Access Memory"] },
		{ q: "What does RARP stand for?", a: "Reverse Address Resolution Protocol", options: ["Reverse Address Resolution Protocol", "Rapid Address Resolution Protocol", "Remote Address Resolution Protocol", "Real-time Address Resolution Protocol"] },
		{ q: "What does RDP stand for?", a: "Remote Desktop Protocol", options: ["Remote Desktop Protocol", "Remote Data Protocol", "Remote Development Protocol", "Remote Display Protocol"] },
		{ q: "What does RFC stand for?", a: "Request for Comments", options: ["Request for Comments", "Request for Communication", "Report for Comments", "Request for Configuration"] },
		{ q: "What does RFI stand for?", a: "Request for Information", options: ["Request for Information", "Request for Input", "Report for Information", "Request for Inquiry"] },
		{ q: "What does RFQ stand for?", a: "Request for Quotation", options: ["Request for Quotation", "Request for Quote", "Request for Qualification", "Report for Quotation"] },
		{ q: "What does ROI stand for?", a: "Return on Investment", options: ["Return on Investment", "Return on Interest", "Return on Innovation", "Revenue on Investment"] },
		{ q: "What does RPO stand for?", a: "Recovery Point Objective", options: ["Recovery Point Objective", "Recovery Process Objective", "Recovery Performance Objective", "Recovery Point Option"] },
		{ q: "What does RTO stand for?", a: "Recovery Time Objective", options: ["Recovery Time Objective", "Recovery Target Objective", "Recovery Time Option", "Recovery Transfer Objective"] },
		{ q: "What does SaaS stand for?", a: "Software as a Service", options: ["Software as a Service", "Software and Service", "System as a Service", "Security as a Service"] },
		{ q: "What does SAN stand for?", a: "Storage Area Network", options: ["Storage Area Network", "System Area Network", "Server Area Network", "Storage Access Network"] },
		{ q: "What does SAP stand for?", a: "Systems, Applications, and Products", options: ["Systems, Applications, and Products", "Systems, Applications, and Processes", "Software, Applications, and Products", "Systems, Analysis, and Products"] },
		{ q: "What does SCADA stand for?", a: "Supervisory Control and Data Acquisition", options: ["Supervisory Control and Data Acquisition", "System Control and Data Acquisition", "Supervisory Command and Data Acquisition", "System Command and Data Acquisition"] },
		{ q: "What does SCAP stand for?", a: "Security Content Automation Protocol", options: ["Security Content Automation Protocol", "System Content Automation Protocol", "Security Configuration Automation Protocol", "System Configuration Automation Protocol"] },
		{ q: "What does SFTP stand for?", a: "Secure File Transfer Protocol", options: ["Secure File Transfer Protocol", "Secure File Transmission Protocol", "Simple File Transfer Protocol", "Secure File Transmission Procedure"] },
		{ q: "What does SIEM stand for?", a: "Security Information and Event Management", options: ["Security Information and Event Management", "Security Incident and Event Management", "System Information and Event Management", "Security Information and Equipment Management"] },
		{ q: "What does SIM stand for?", a: "Subscriber Identity Module", options: ["Subscriber Identity Module", "Subscriber Information Module", "Subscriber Identification Module", "Secure Identity Module"] },
		{ q: "What does SIP stand for?", a: "Session Initiation Protocol", options: ["Session Initiation Protocol", "Session Information Protocol", "Session Integration Protocol", "Session Interface Protocol"] },
		{ q: "What does SLA stand for?", a: "Service Level Agreement", options: ["Service Level Agreement", "Service Level Authorization", "Service Level Assessment", "Service Level Arrangement"] },
		{ q: "What does SMB stand for?", a: "Server Message Block", options: ["Server Message Block", "Server Management Block", "Server Module Block", "System Message Block"] },
		{ q: "What does SMTP stand for?", a: "Simple Mail Transfer Protocol", options: ["Simple Mail Transfer Protocol", "Secure Mail Transfer Protocol", "Simple Message Transfer Protocol", "Secure Message Transfer Protocol"] },
		{ q: "What does SNMP stand for?", a: "Simple Network Management Protocol", options: ["Simple Network Management Protocol", "Secure Network Management Protocol", "System Network Management Protocol", "Simple Network Monitoring Protocol"] },
		{ q: "What does SOAP stand for?", a: "Simple Object Access Protocol", options: ["Simple Object Access Protocol", "Secure Object Access Protocol", "Simple Online Access Protocol", "System Object Access Protocol"] },
		{ q: "What does SOC stand for?", a: "Security Operations Center", options: ["Security Operations Center", "Security Operations Command", "Security Online Center", "System Operations Center"] },
		{ q: "What does SoC stand for?", a: "System on a Chip", options: ["System on a Chip", "System of Chips", "Single Chip", "Software on a Chip"] },
		{ q: "What does SQL stand for?", a: "Structured Query Language", options: ["Structured Query Language", "Structured Question Language", "System Query Language", "Structured Quality Language"] },
		{ q: "What does SSH stand for?", a: "Secure Shell", options: ["Secure Shell", "Secure Socket Hub", "System Security Hub", "Secure Server Hub"] },
		{ q: "What does SSL stand for?", a: "Secure Sockets Layer", options: ["Secure Sockets Layer", "System Sockets Layer", "Secure Server Layer", "Secure Security Layer"] },
		{ q: "What does SSO stand for?", a: "Single Sign-On", options: ["Single Sign-On", "Single Security Option", "Single Session Option", "Secure Sign-On"] },
		{ q: "What does STP stand for?", a: "Spanning Tree Protocol", options: ["Spanning Tree Protocol", "System Tree Protocol", "Spanning Transport Protocol", "Standard Tree Protocol"] },
		{ q: "What does Syslog stand for?", a: "System Logging Protocol", options: ["System Logging Protocol", "System Log Protocol", "System Logging Procedure", "System Log Procedure"] },
		{ q: "What does TAA stand for?", a: "Trusted Access Authorization", options: ["Trusted Access Authorization", "Trusted Access Agreement", "Trusted Access Application", "Trusted Authentication Authorization"] },
		{ q: "What does TCO stand for?", a: "Total Cost of Ownership", options: ["Total Cost of Ownership", "Total Cost of Operations", "Total Cost of Optimization", "Total Cost of Options"] },
		{ q: "What does TDM stand for?", a: "Time Division Multiplexing", options: ["Time Division Multiplexing", "Time Data Multiplexing", "Telecom Data Multiplexing", "Time Distributed Multiplexing"] },
		{ q: "What does TFTP stand for?", a: "Trivial File Transfer Protocol", options: ["Trivial File Transfer Protocol", "Temporary File Transfer Protocol", "Trusted File Transfer Protocol", "Trivial File Transmission Protocol"] },
		{ q: "What does TLS stand for?", a: "Transport Layer Security", options: ["Transport Layer Security", "Transport Layer Service", "Technical Layer Security", "Transport Layer Standard"] },
		{ q: "What does TOTP stand for?", a: "Time-based One-Time Password", options: ["Time-based One-Time Password", "Token-based One-Time Password", "Temporary One-Time Password", "Time-oriented One-Time Password"] },
		{ q: "What does UPS stand for?", a: "Uninterruptible Power Supply", options: ["Uninterruptible Power Supply", "Uninterruptible Power Source", "Uninterrupted Power Supply", "Unified Power Supply"] },
		{ q: "What does URI stand for?", a: "Uniform Resource Identifier", options: ["Uniform Resource Identifier", "Universal Resource Identifier", "Uniform Resource Indicator", "Universal Resource Indicator"] },
		{ q: "What does URL stand for?", a: "Uniform Resource Locator", options: ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"] },
		{ q: "What does USB stand for?", a: "Universal Serial Bus", options: ["Universal Serial Bus", "Uniform Serial Bus", "Unified Serial Bus", "Universal Service Bus"] },
		{ q: "What does USB OTG stand for?", a: "USB On-the-Go", options: ["USB On-the-Go", "Universal Service Bus On-the-Go", "Unified Serial Bus On-the-Go", "Universal Serial Bus On-the-Go"] },
		{ q: "What does UTM stand for?", a: "Unified Threat Management", options: ["Unified Threat Management", "Universal Threat Management", "Uniform Threat Management", "Unified Technology Management"] },
		{ q: "What does UTP stand for?", a: "Unshielded Twisted Pair", options: ["Unshielded Twisted Pair", "Unified Twisted Pair", "Universal Twisted Pair", "Unshielded Transmitted Pair"] },
		{ q: "What does UUID stand for?", a: "Universally Unique Identifier", options: ["Universally Unique Identifier", "Universal Unique Identifier", "Uniform Unique Identifier", "Universal User Identifier"] },
		{ q: "What does VLAN stand for?", a: "Virtual Local Area Network", options: ["Virtual Local Area Network", "Virtual Large Area Network", "Virtual Link Access Network", "Variable Local Area Network"] },
		{ q: "What does VPN stand for?", a: "Virtual Private Network", options: ["Virtual Private Network", "Virtual Public Network", "Variable Private Network", "Virtual Protected Network"] },
		{ q: "What does WAF stand for?", a: "Web Application Firewall", options: ["Web Application Firewall", "Web Access Firewall", "Web Authentication Firewall", "Web Analysis Firewall"] },
		{ q: "What does WEP stand for?", a: "Wired Equivalent Privacy", options: ["Wired Equivalent Privacy", "Wireless Equivalent Privacy", "Wired Enhanced Privacy", "Wireless Enhanced Privacy"] },
		{ q: "What does WPA stand for?", a: "Wi-Fi Protected Access", options: ["Wi-Fi Protected Access", "Wireless Protected Access", "Wi-Fi Privacy Access", "Wireless Privacy Access"] },
		{ q: "What does WPS stand for?", a: "Wi-Fi Protected Setup", options: ["Wi-Fi Protected Setup", "Wireless Protected Setup", "Wi-Fi Public Setup", "Wireless Public Setup"] }
		],
	quiz4: [
        // Guidelines
        { q: "What is the primary purpose of security guidelines in an organization?", a: "To provide broad recommendations for security practices.", options: ["To provide broad recommendations for security practices.", "To enforce specific security rules.", "To outline legal obligations.", "To define the organizational security structure."] },
        { q: "How do security guidelines differ from security policies?", a: "Guidelines are less formal and offer general advice, while policies are formal and enforceable.", options: ["Guidelines are less formal and offer general advice, while policies are formal and enforceable.", "Policies are more general, while guidelines are specific.", "Policies are optional, while guidelines are mandatory.", "Guidelines focus on legal issues, while policies focus on operational issues."] },

        // Policies
        { q: "What is the main purpose of an Acceptable Use Policy (AUP)?", a: "To define acceptable behavior when using organizational resources.", options: ["To define acceptable behavior when using organizational resources.", "To outline procedures for disaster recovery.", "To manage access control settings.", "To enforce encryption standards."] },
        { q: "Which policy focuses on maintaining operations during a disruptive event?", a: "Business Continuity Policy", options: ["Business Continuity Policy", "Incident Response Policy", "Disaster Recovery Policy", "Change Management Policy"] },
        { q: "What is a key component of the Incident Response Policy?", a: "Procedures for identifying and addressing security incidents.", options: ["Procedures for identifying and addressing security incidents.", "Rules for password creation.", "Guidelines for physical security.", "Standards for encryption."] },
        { q: "Why is incorporating the Software Development Lifecycle (SDLC) into security policies important?", a: "To ensure security is integrated throughout the development process.", options: ["To ensure security is integrated throughout the development process.", "To outline acceptable use of software.", "To define incident response procedures.", "To manage encryption standards."] },
        { q: "What does a Change Management Policy help manage?", a: "Changes to IT systems and infrastructure.", options: ["Changes to IT systems and infrastructure.", "User access rights.", "Incident response procedures.", "Data encryption standards."] },

        // Standards
        { q: "Which standard is essential for protecting sensitive data from unauthorized access?", a: "Access Control Standard", options: ["Access Control Standard", "Physical Security Standard", "Encryption Standard", "Password Standard"] },
        { q: "What does the Password Standard typically include?", a: "Requirements for password complexity and expiration.", options: ["Requirements for password complexity and expiration.", "Procedures for changing passwords.", "Guidelines for password sharing.", "Rules for password recovery."] },
        { q: "Why are Encryption Standards important?", a: "To protect data confidentiality and integrity during transmission and storage.", options: ["To protect data confidentiality and integrity during transmission and storage.", "To enforce physical security measures.", "To define access control mechanisms.", "To set password requirements."] },
        { q: "Which standard focuses on securing physical access to facilities?", a: "Physical Security Standard", options: ["Physical Security Standard", "Access Control Standard", "Encryption Standard", "Password Standard"] },

        // Procedures
        { q: "What is the purpose of Onboarding Procedures in security?", a: "To ensure new employees are properly introduced to security policies and practices.", options: ["To ensure new employees are properly introduced to security policies and practices.", "To manage system changes.", "To respond to security incidents.", "To handle data encryption."] },
        { q: "What should a Change Management Procedure include?", a: "Processes for assessing, approving, and implementing changes.", options: ["Processes for assessing, approving, and implementing changes.", "Steps for responding to incidents.", "Guidelines for physical security.", "Standards for encryption."] },
        { q: "What is a security Playbook?", a: "A documented set of procedures for handling specific security scenarios.", options: ["A documented set of procedures for handling specific security scenarios.", "A guideline for acceptable use of resources.", "A standard for password management.", "A policy for business continuity."] },

        // External Considerations
        { q: "How do Regulatory requirements impact security governance?", a: "They mandate specific security practices and compliance measures.", options: ["They mandate specific security practices and compliance measures.", "They are optional guidelines.", "They define internal security policies.", "They focus on global security standards."] },
        { q: "What role do Local/Regional security considerations play?", a: "They address specific security requirements and threats relevant to a particular geographic area.", options: ["They address specific security requirements and threats relevant to a particular geographic area.", "They set global security standards.", "They provide general security guidelines.", "They focus on industry-specific standards."] },

        // Monitoring and Revision
        { q: "Why is continuous monitoring crucial in security governance?", a: "To detect and respond to security threats in real-time.", options: ["To detect and respond to security threats in real-time.", "To establish initial security policies.", "To define encryption standards.", "To create incident response plans."] },
        { q: "What should be included in the revision process of security policies?", a: "Regular updates to address new threats and changes in regulations.", options: ["Regular updates to address new threats and changes in regulations.", "One-time initial setup.", "Periodic user training.", "Initial compliance checks."] },

        // Types of Governance Structures
        { q: "What distinguishes a Centralized governance structure from a Decentralized one?", a: "Centralized structures have a single point of authority, while Decentralized structures distribute authority.", options: ["Centralized structures have a single point of authority, while Decentralized structures distribute authority.", "Centralized structures are more flexible, while Decentralized structures are rigid.", "Centralized structures focus on local issues, while Decentralized structures focus on global issues.", "Centralized structures are less effective in handling incidents."] },
        { q: "Which governance structure often includes a board of directors overseeing security policies?", a: "Centralized Governance Structure", options: ["Centralized Governance Structure", "Decentralized Governance Structure", "Government Entities", "Committees"] },
        { q: "How do Committees contribute to security governance?", a: "By providing specialized oversight and recommendations on security issues.", options: ["By providing specialized oversight and recommendations on security issues.", "By enforcing global regulations.", "By managing incident responses.", "By defining encryption standards."] },
        { q: "What role do Government Entities play in security governance?", a: "They set regulations and standards that organizations must comply with.", options: ["They set regulations and standards that organizations must comply with.", "They implement internal security policies.", "They monitor security incidents.", "They handle change management."] },

        // Roles and Responsibilities for Systems and Data
        { q: "What is the primary responsibility of a Data Owner?", a: "To ensure that data is properly classified and protected.", options: ["To ensure that data is properly classified and protected.", "To handle day-to-day data operations.", "To respond to security incidents.", "To manage user access controls."] },
        { q: "What role does a Data Processor play?", a: "To process and handle data according to the policies set by Data Owners.", options: ["To process and handle data according to the policies set by Data Owners.", "To define data protection policies.", "To manage data encryption.", "To oversee data storage facilities."] },
        { q: "What are the duties of Custodians/Stewards?", a: "To manage and safeguard the data they are responsible for.", options: ["To manage and safeguard the data they are responsible for.", "To develop security policies.", "To monitor network traffic.", "To enforce incident response plans."] },

        // True/False Questions
        { q: "True or False: Guidelines are formal documents that enforce specific security practices.", a: "False", options: ["True", "False"] },
        { q: "True or False: A Disaster Recovery Policy is designed to ensure business operations continue during a disruptive event.", a: "False", options: ["True", "False"] },
        { q: "True or False: Encryption Standards focus on data confidentiality and integrity during storage and transmission.", a: "True", options: ["True", "False"] },
        { q: "True or False: Monitoring and revision processes are only needed when new security threats emerge.", a: "False", options: ["True", "False"] },
        { q: "True or False: In a Decentralized governance structure, authority is distributed across various units.", a: "True", options: ["True", "False"] },
        { q: "True or False: Incident Response Policies are not necessary if you have a well-defined Business Continuity Plan.", a: "False", options: ["True", "False"] },
        { q: "True or False: Access Control Standards are crucial for managing user permissions and protecting data.", a: "True", options: ["True", "False"] },
        { q: "True or False: Onboarding Procedures are only relevant for new employees with access to sensitive data.", a: "False", options: ["True", "False"] },
        { q: "True or False: Government Entities typically provide internal security policies for organizations.", a: "False", options: ["True", "False"] },
        { q: "True or False: Custodians/Stewards are responsible for managing data in accordance with policies set by Data Owners.", a: "True", options: ["True", "False"] }
		],
	quiz5: [
  { q: "A process of verifying the identity of a user, system, or entity.", options: ["AAA", "AES", "AI", "AR"], a: "AAA" },
  { q: "A list used to control access to resources in a network.", options: ["BGP", "ACL", "API", "CASB"], a: "ACL" },
  { q: "A widely adopted standard for encrypting data.", options: ["AES", "AH", "CCTV", "CHAP"], a: "AES" },
  { q: "A variant of AES that uses 256-bit encryption.", options: ["AES-256", "ASLR", "BIA", "CAPTCHA"], a: "AES-256" },
  { q: "A protocol used to secure communications by adding headers.", options: ["AH", "CIR", "CMS", "CIRT"], a: "AH" },
  { q: "The simulation of human intelligence processes by machines, especially computer systems.", options: ["AI", "AV", "BGP", "COOP"], a: "AI" },
  { q: "Sharing of information about threats and indicators across organizations.", options: ["AIS", "BPDU", "CA", "CHAP"], a: "AIS" },
  { q: "An estimate of the potential losses due to a risk over a year.", options: ["ALE", "ASLR", "CCTV", "BYOD"], a: "ALE" },
  { q: "A device that allows wireless devices to connect to a wired network using Wi-Fi.", options: ["AP", "BIA", "CAR", "CIRT"], a: "AP" },
  { q: "A set of protocols and tools for building software applications.", options: ["API", "CCTV", "CHAP", "COOP"], a: "API" },
  { q: "A type of cyberattack in which an attacker maintains a long-term presence on a network.", options: ["APT", "AI", "BCP", "AES"], a: "APT" },
  { q: "The rate at which a specific threat is expected to occur annually.", options: ["ARO", "ASLR", "CAPTCHA", "CCMP"], a: "ARO" },
  { q: "A protocol used to map IP addresses to MAC addresses on a local network.", options: ["ARP", "BGP", "CIRT", "CMS"], a: "ARP" },
  { q: "A security technique that randomizes the location of system memory.", options: ["ASLR", "CASB", "CHAP", "CCTV"], a: "ASLR" },
  { q: "A framework for understanding and analyzing cyber adversaries.", options: ["ATT&CK", "API", "BIA", "CIR"], a: "ATT&CK" },
  { q: "A set of rules governing acceptable use of an organization’s network and resources.", options: ["AUP", "CASB", "CAR", "BASH"], a: "AUP" },
  { q: "Software designed to detect, prevent, and remove malware.", options: ["AV", "AES", "BGP", "BPDU"], a: "AV" },
  { q: "A Unix shell and command language that is a successor to the Bourne shell.", options: ["BASH", "BGP", "CMS", "API"], a: "BASH" },
  { q: "Planning and preparation to ensure an organization can continue operating during disruptions.", options: ["BCP", "BIA", "BYOD", "CA"], a: "BCP" },
  { q: "A protocol used to exchange routing information between different networks on the internet.", options: ["BGP", "BYOD", "CIRT", "CBC"], a: "BGP" },
  { q: "A process of assessing the impact of a disruption on an organization’s operations.", options: ["BIA", "BGP", "COOP", "CAPTCHA"], a: "BIA" },
  { q: "Firmware that initializes and tests hardware components during the startup of a computer.", options: ["BIOS", "AES", "AUP", "CERT"], a: "BIOS" },
  { q: "An agreement between business partners that outlines the terms of their business relationship.", options: ["BPA", "BGP", "BYOD", "CIRT"], a: "BPA" },
  { q: "A protocol used in network bridging to prevent loops.", options: ["BPDU", "BCP", "COOP", "CIRT"], a: "BPDU" },
  { q: "A policy that allows employees to use their personal devices for work purposes.", options: ["BYOD", "CASB", "CHAP", "CCMP"], a: "BYOD" },
  { q: "An entity responsible for issuing digital certificates.", options: ["CA", "CAR", "CBC", "CMS"], a: "CA" },
  { q: "A test designed to determine if the user is a human or a bot.", options: ["CAPTCHA", "CCTV", "CIRT", "CASB"], a: "CAPTCHA" },
  { q: "A report detailing actions taken to correct a problem.", options: ["CAR", "CHAP", "CCTV", "CMS"], a: "CAR" },
  { q: "A security service that helps organizations control and secure access to cloud services.", options: ["CASB", "BGP", "BIA", "CIRT"], a: "CASB" },
  { q: "A mode of encryption that combines plaintext with an initialization vector to produce ciphertext.", options: ["CBC", "AES", "AI", "CIR"], a: "CBC" },
  { q: "A protocol that provides confidentiality, integrity, and authentication for wireless networks.", options: ["CCMP", "CHAP", "BASH", "API"], a: "CCMP" },
  { q: "A surveillance system that uses cameras to monitor and record activities.", options: ["CCTV", "CAR", "BGP", "AES"], a: "CCTV" },
  { q: "A team that provides emergency responses to cybersecurity incidents.", options: ["CERT", "CASB", "BYOD", "BIOS"], a: "CERT" },
  { q: "An encryption mode that provides feedback of encrypted data to the next block.", options: ["CFB", "CAR", "CCTV", "API"], a: "CFB" },
  { q: "A protocol that uses a challenge-response mechanism to authenticate users.", options: ["CHAP", "AES", "BIA", "CIR"], a: "CHAP" },
  { q: "A model for ensuring that information is kept secure through confidentiality, integrity, and availability.", options: ["CIA", "BGP", "CASB", "CAR"], a: "CIA" },
  { q: "The executive responsible for overseeing an organization's information technology strategy.", options: ["CIO", "COOP", "BIA", "BGP"], a: "CIO" },
  { q: "A team that manages and responds to cybersecurity incidents within an organization.", options: ["CIRT", "CCTV", "CAPTCHA", "BCP"], a: "CIRT" },
  { q: "A system used for managing and organizing digital content.", options: ["CMS", "CASB", "BYOD", "CAR"], a: "CMS" },
  { q: "A plan to ensure that critical business functions can continue during and after a disaster.", options: ["COOP", "CIRT", "BIA", "CHAP"], a: "COOP" },
  { q: "A policy where an organization provides employees with company-owned devices that are also used for personal purposes.", options: ["COPE", "CASB", "CCTV", "AES"], a: "COPE" },
  { q: "What is a plan for managing risks and maintaining operations during a disruption?", options: ["CP", "CRL", "CSP", "DPO"], a: "CP" },
  { q: "What is an error-checking method used to detect changes to raw data?", options: ["CRC", "CSRF", "DBA", "DHE"], a: "CRC" },
  { q: "What is a list of certificates that have been revoked before their expiration date?", options: ["CRL", "DLP", "DNS", "DHE"], a: "CRL" },
  { q: "Who is responsible for overseeing the security strategy and implementation in an organization?", options: ["CSO", "CTO", "CSP", "DLP"], a: "CSO" },
  { q: "What is a provider of cloud-based computing services?", options: ["CSP", "CSR", "CTM", "DHE"], a: "CSP" },
  { q: "What is a request made to a Certificate Authority to obtain a digital certificate?", options: ["CSR", "DLP", "CVE", "DNS"], a: "CSR" },
  { q: "What is a type of attack where a malicious user tricks a site into performing actions on behalf of another user?", options: ["CSRF", "DDoS", "DKIM", "CVSS"], a: "CSRF" },
  { q: "What is a device that connects and manages multiple network channels?", options: ["CSU", "CTO", "DEP", "DPO"], a: "CSU" },
  { q: "What is a mode of operation for block ciphers that encrypts data in blocks?", options: ["CTM", "DHE", "DES", "DKIM"], a: "CTM" },
  { q: "Who is responsible for managing the technology strategy of an organization?", options: ["CTO", "CSO", "CVE", "DBA"], a: "CTO" },
  { q: "What is a database of publicly disclosed cybersecurity vulnerabilities?", options: ["CVE", "CSRF", "DLP", "DDoS"], a: "CVE" },
  { q: "What is a framework for assessing the severity of security vulnerabilities?", options: ["CVSS", "DNS", "DES", "DKIM"], a: "CVSS" },
  { q: "What is a policy that allows employees to use personal devices for work while maintaining certain controls?", options: ["CYOD", "CSR", "CSP", "DEP"], a: "CYOD" },
  { q: "What is an access control model where access rights are assigned based on the user’s identity and roles?", options: ["DAC", "DLP", "CTM", "DDoS"], a: "DAC" },
  { q: "Who is responsible for managing and maintaining a database system?", options: ["DBA", "DPO", "CRL", "CSP"], a: "DBA" },
  { q: "What is an attack where multiple systems are used to flood a target with traffic, causing service disruption?", options: ["DDoS", "DES", "CRL", "DHE"], a: "DDoS" },
  { q: "What is a security feature that prevents execution of code from non-executable memory regions?", options: ["DEP", "DLP", "DNS", "DKIM"], a: "DEP" },
  { q: "What is an older encryption standard that was replaced by AES?", options: ["DES", "DHE", "CTM", "CVE"], a: "DES" },
  { q: "What is a protocol used to automatically assign IP addresses to devices on a network?", options: ["DHCP", "DNS", "DLP", "CSP"], a: "DHCP" },
  { q: "What is a key exchange protocol that ensures secure key negotiation between parties?", options: ["DHE", "DLP", "DDoS", "CVE"], a: "DHE" },
  { q: "What is a protocol used to verify the authenticity of email messages?", options: ["DKIM", "CSR", "DHE", "DEP"], a: "DKIM" },
  { q: "What is a library of executable code that can be used by multiple applications?", options: ["DLL", "DLP", "DHE", "CSP"], a: "DLL" },
  { q: "What is a security measure designed to protect data from unauthorized access and loss?", options: ["DLP", "CSP", "DBA", "CSRF"], a: "DLP" },
  { q: "What is a standard for validating and authenticating email messages to protect against spoofing?", options: ["DMARC", "DNS", "DHE", "DLP"], a: "DMARC" },
  { q: "What is a technique for translating private IP addresses into public IP addresses and vice versa?", options: ["DNAT", "DHE", "DLP", "DES"], a: "DNAT" },
  { q: "What is a system that translates domain names into IP addresses?", options: ["DNS", "DPO", "CSP", "CSU"], a: "DNS" },
  { q: "What is an attack aimed at disrupting the normal functioning of a service by overwhelming it with requests?", options: ["DoS", "DDoS", "DLP", "CTM"], a: "DoS" },
  { q: "Who is responsible for ensuring an organization's compliance with data protection regulations?", options: ["DPO", "DLP", "DHE", "DNS"], a: "DPO" }
//
		],
	quiz6: [
  { q: "A plan for recovering from a disaster or major disruption in IT services.", options: ["DRP", "DHE", "ECC", "EFS"], a: "DRP (Disaster Recovery Plan)" },
  { q: "An algorithm used for creating a digital signature.", options: ["DSA", "FDE", "HMAC", "GCM"], a: "DSA (Digital Signature Algorithm)" },
  { q: "A technology for high-speed internet access over telephone lines.", options: ["DSL", "ESP", "HIDS", "LEAP"], a: "DSL (Digital Subscriber Line)" },
  { q: "A protocol used for secure authentication in networks.", options: ["EAP", "MFA", "IDP", "HTML"], a: "EAP (Extensible Authentication Protocol)" },
  { q: "A mode of encryption where each block of plaintext is encrypted separately.", options: ["ECB", "HSM", "MOU", "FTP"], a: "ECB (Electronic Codebook)" },
  { q: "A form of encryption that uses elliptic curves to provide security.", options: ["ECC", "HMAC", "GPO", "GRE"], a: "ECC (Elliptic Curve Cryptography)" },
  { q: "A key exchange protocol that provides secure communication using ephemeral keys.", options: ["ECDHE", "HIDS", "MD5", "IV"], a: "ECDHE (Elliptic Curve Diffie-Hellman Ephemeral)" },
  { q: "A digital signature algorithm based on elliptic curve cryptography.", options: ["ECDSA", "FTP", "MFA", "DHE"], a: "ECDSA (Elliptic Curve Digital Signature Algorithm)" },
  { q: "A security solution that detects and responds to threats on endpoints.", options: ["EDR", "HDD", "HTML", "FIM"], a: "EDR (Endpoint Detection and Response)" },
  { q: "A file system that encrypts data on disk for security purposes.", options: ["EFS", "LAN", "HMAC", "MSSP"], a: "EFS (Encrypting File System)" },
  { q: "A system that manages and integrates business processes in an organization.", options: ["ERP", "ICMP", "HSM", "MFA"], a: "ERP (Enterprise Resource Planning)" },
  { q: "A unique identifier assigned to mobile devices.", options: ["ESN", "HDD", "IP", "FTPS"], a: "ESN (Electronic Serial Number)" },
  { q: "A protocol that provides encryption and integrity for network data.", options: ["ESP", "HSM", "FIM", "MOU"], a: "ESP (Encapsulating Security Payload)" },
  { q: "A list that controls access permissions to files and directories.", options: ["FACL", "GPO", "VPN", "IoT"], a: "FACL (File Access Control List)" },
  { q: "A method of encrypting all data on a disk to protect against unauthorized access.", options: ["FDE", "GCM", "LAN", "MFP"], a: "FDE (Full Disk Encryption)" },
  { q: "A system used to monitor and ensure the integrity of files.", options: ["FIM", "MOU", "MFA", "GPG"], a: "FIM (File Integrity Monitoring)" },
  { q: "A type of integrated circuit that can be programmed after manufacturing.", options: ["FPGA", "EAP", "MFA", "HDD"], a: "FPGA (Field-Programmable Gate Array)" },
  { q: "A metric indicating the rate at which a system incorrectly rejects valid input.", options: ["FRR", "MFA", "FDE", "HIDS"], a: "FRR (False Rejection Rate)" },
  { q: "A standard network protocol used to transfer files.", options: ["FTP", "HSM", "MFP", "VLAN"], a: "FTP (File Transfer Protocol)" },
  { q: "A secure version of the File Transfer Protocol with encryption.", options: ["FTPS", "HIDS", "ICMP", "ECC"], a: "FTPS (File Transfer Protocol Secure)" },
  { q: "A mode of operation for block ciphers that provides both confidentiality and integrity.", options: ["GCM", "DSP", "FACL", "HTML"], a: "GCM (Galois Counter Mode)" },
  { q: "A regulation in the European Union for data protection and privacy.", options: ["GDPR", "HTTP", "MDF", "GPO"], a: "GDPR (General Data Protection Regulation)" },
  { q: "A tool for encryption and digital signatures that uses a public/private key pair.", options: ["GPG", "ECC", "FDE", "IP"], a: "GPG (GNU Privacy Guard)" },
  { q: "A framework for managing and enforcing policies in a networked environment.", options: ["GPO", "HMAC", "FTP", "DNS"], a: "GPO (Group Policy Object)" },
  { q: "A global navigation satellite system for determining locations.", options: ["GPS", "ESN", "LAN", "ICMP"], a: "GPS (Global Positioning System)" },
  { q: "A processor specialized for rendering graphics and visual effects.", options: ["GPU", "MFA", "HIDS", "HTML"], a: "GPU (Graphics Processing Unit)" },
  { q: "A protocol for encapsulating network layer protocols into point-to-point links.", options: ["GRE", "HTTP", "GCM", "FPGA"], a: "GRE (Generic Routing Encapsulation)" },
  { q: "The ability of a system to remain operational even in the event of failures.", options: ["HA", "MFA", "FIM", "HIDS"], a: "HA (High Availability)" },
  { q: "A storage device that uses magnetic disks to store data.", options: ["HDD", "ICMP", "MFA", "VLAN"], a: "HDD (Hard Disk Drive)" },
  { q: "A system that monitors and analyzes network traffic to detect potential threats.", options: ["HIDS", "GCM", "ESN", "FACL"], a: "HIDS (Host-based Intrusion Detection System)" },
  { q: "A system designed to prevent attacks by monitoring and controlling network traffic.", options: ["HIPS", "EFS", "GPO", "DNS"], a: "HIPS (Host-based Intrusion Prevention System)" },
  { q: "A code used to verify the integrity and authenticity of a message.", options: ["HMAC", "DRP", "LDAP", "GRE"], a: "HMAC (Hashed Message Authentication Code)" },
  { q: "A password that is generated using a hash-based message authentication code.", options: ["HOTP", "MFA", "FIM", "DHE"], a: "HOTP (HMAC-based One-time Password)" },
  { q: "A hardware component used to manage and safeguard cryptographic keys.", options: ["HSM", "ICMP", "FTP", "GPG"], a: "HSM (Hardware Security Module)" },
  { q: "A standard markup language for creating web pages.", options: ["HTML", "IMAP", "IP", "DHE"], a: "HTML (Hypertext Markup Language)" },
  { q: "A protocol used for transmitting hypertext over the web.", options: ["HTTP", "GPO", "MFA", "GRE"], a: "HTTP (Hypertext Transfer Protocol)" },
  { q: "A secure version of HTTP that uses encryption for data transfer.", options: ["HTTPS", "ICMP", "LAN", "FTP"], a: "HTTPS (Hypertext Transfer Protocol Secure)" },
  { q: "A system for regulating the heating, ventilation, and air conditioning in a building.", options: ["HVAC", "HDD", "GPG", "GCM"], a: "HVAC (Heating, Ventilation, and Air Conditioning)" },
  { q: "A cloud service model that provides virtualized computing resources over the internet.", options: ["IaaS", "HSM", "FIM", "FDE"], a: "IaaS (Infrastructure as a Service)" },
  { q: "A practice of managing infrastructure through code and automation.", options: ["IaC", "HID", "EDR", "MFA"], a: "IaC (Infrastructure as Code)" },
  { q: "A framework for managing user identities and controlling access to resources.", options: ["IAM", "MFP", "FIM", "GPO"], a: "IAM (Identity and Access Management)" },
  { q: "A protocol used for sending error messages and operational information in a network.", options: ["ICMP", "DHE", "GPO", "ML"], a: "ICMP (Internet Control Message Protocol)" },
  { q: "Systems designed to control and monitor industrial processes.", options: ["ICS", "IP", "FPGA", "HMAC"], a: "ICS (Industrial Control Systems)" },
  { q: "A symmetric key encryption algorithm used to secure data.", options: ["IDEA", "GPO", "FDE", "HDD"], a: "IDEA (International Data Encryption Algorithm)" },
  { q: "A system that manages and directs data flow between devices in a network.", options: ["IDS", "HIDS", "MFA", "ESN"], a: "IDS (Intrusion Detection System)" },
  { q: "A network security system that actively prevents and responds to threats.", options: ["IPS", "FIM", "GPO", "HMAC"], a: "IPS (Intrusion Prevention System)" },
  { q: "A set of rules and procedures for ensuring data integrity and security.", options: ["ISO", "HIDS", "HMAC", "MOU"], a: "ISO (International Organization for Standardization)" },
  { q: "A protocol for securely accessing and managing network devices.", options: ["SSH", "HDD", "GPO", "FIM"], a: "SSH (Secure Shell)" },
  { q: "A collection of interconnected devices and systems designed for communication.", options: ["SNMP", "HDD", "FIM", "FTP"], a: "SNMP (Simple Network Management Protocol)" },
  { q: "A system that uses sensors and software to monitor and control physical devices.", options: ["SCADA", "HIDS", "MFA", "IP"], a: "SCADA (Supervisory Control and Data Acquisition)" },
  { q: "A technique used to verify the authenticity of a digital document or message.", options: ["PKI", "HDD", "FIM", "MFA"], a: "PKI (Public Key Infrastructure)" },
  { q: "A method of securing communications by using cryptographic keys.", options: ["PKI", "FIM", "GPO", "HSM"], a: "PKI (Public Key Infrastructure)" },
  { q: "A cloud computing service model providing software applications over the internet.", options: ["SaaS", "GPO", "DHE", "MFA"], a: "SaaS (Software as a Service)" },
  { q: "A method of ensuring data is kept private and secure during transmission.", options: ["SSL", "FTP", "HIDS", "DHE"], a: "SSL (Secure Sockets Layer)" },
  { q: "A standard for creating and managing digital certificates.", options: ["X.509", "FIM", "MFA", "HSM"], a: "X.509 (X.509 Certificate Standard)" },
  { q: "A programming interface for interacting with web-based services.", options: ["API", "FIM", "MFA", "FTP"], a: "API (Application Programming Interface)" },
  { q: "A software-based solution for controlling access to network resources.", options: ["VLAN", "HDD", "GPO", "HIDS"], a: "VLAN (Virtual Local Area Network)" }

  //
  		],
	quiz7: [
  { q: "What is the average time required to recover from a failure?", options: ["MTTR", "MFA", "GCM", "HDD"], a: "Mean Time to Recover" },
  { q: "What is the maximum size of a data packet that can be transmitted over a network?", options: ["MTU", "LAN", "NIST", "HSM"], a: "Maximum Transmission Unit" },
  { q: "What term refers to the security mechanism that controls access to network resources?", options: ["NAC", "NIDS", "PaaS", "RADIUS"], a: "Network Access Control" },
  { q: "What is the process of translating private IP addresses to a public IP address for external communication?", options: ["NAT", "PEAP", "NTP", "MAC"], a: "Network Address Translation" },
  { q: "What is the legal document that prevents the disclosure of confidential information?", options: ["NDA", "PKI", "PPP", "RC4"], a: "Non-disclosure Agreement" },
  { q: "What technology allows devices to communicate over short distances using radio waves?", options: ["NFC", "SaaS", "PBX", "PDU"], a: "Near Field Communication" },
  { q: "What type of firewall provides advanced filtering capabilities and enhanced security?", options: ["NGFW", "SAML", "MSSP", "SDLC"], a: "Next-generation Firewall" },
  { q: "What system monitors network traffic for suspicious activity and potential threats?", options: ["NIDS", "RAT", "SDK", "PDU"], a: "Network-based Intrusion Detection System" },
  { q: "What system prevents and responds to malicious activity by monitoring network traffic?", options: ["NIPS", "FDE", "ICMP", "MFA"], a: "Network-based Intrusion Prevention System" },
  { q: "Which organization develops cybersecurity standards and guidelines in the United States?", options: ["NIST", "MDF", "HDD", "IDF"], a: "National Institute of Standards & Technology" },
  { q: "What file system is used by Windows operating systems to manage files and storage?", options: ["NTFS", "PAM", "ML", "MOU"], a: "New Technology File System" },
  { q: "What authentication protocol developed by Microsoft provides secure network logins?", options: ["NTLM", "VPN", "FIM", "HDD"], a: "New Technology LAN Manager" },
  { q: "What protocol is used to synchronize time across computers on a network?", options: ["NTP", "IV", "FIM", "GPO"], a: "Network Time Protocol" },
  { q: "What framework is used for authorizing access to services and resources across different platforms?", options: ["OAUTH", "MD5", "FTP", "RA"], a: "Open Authorization" },
  { q: "What protocol provides real-time status checking of digital certificates?", options: ["OCSP", "RPO", "SaaS", "MDF"], a: "Online Certificate Status Protocol" },
  { q: "What unique identifier is used in various security and IT contexts to reference specific objects?", options: ["OID", "NDA", "RAT", "MDF"], a: "Object Identifier" },
  { q: "What is the core software that manages hardware and software resources on a computer?", options: ["OS", "SDLC", "HIDS", "MAC"], a: "Operating System" },
  { q: "What term refers to intelligence gathered from publicly available sources and data?", options: ["OSINT", "GPG", "DNS", "LDAP"], a: "Open-source Intelligence" },
  { q: "What routing protocol is used to determine the shortest path for data packets within a network?", options: ["OSPF", "MDF", "PDU", "SaaS"], a: "Open Shortest Path First" },
  { q: "What term describes technology used for managing and monitoring industrial control systems?", options: ["OT", "HA", "MFA", "PBX"], a: "Operational Technology" },
  { q: "What method is used to update or transmit data wirelessly without needing a physical connection?", options: ["OTA", "HTTP", "PEAP", "HMAC"], a: "Over the Air" },
  { q: "What language is used for vulnerability assessment and describing security weaknesses?", options: ["OVAL", "PaaS", "RA", "MFP"], a: "Open Vulnerability Assessment Language" },
  { q: "What file format is used to store cryptographic keys and certificates?", options: ["P12", "NIPS", "ML", "HTTP"], a: "PKCS #12" },
  { q: "What network design allows devices to communicate directly without a central server?", options: ["P2P", "SAN", "RAID", "EFS"], a: "Peer to Peer" },
  { q: "What cloud service model provides a platform to develop, run, and manage applications?", options: ["PaaS", "FIM", "RA", "MOU"], a: "Platform as a Service" },
  { q: "What configuration file is used by web browsers to automatically configure proxy settings?", options: ["PAC", "NFC", "RTO", "RADIUS"], a: "Proxy Auto Configuration" },
  { q: "What system manages privileged access and controls permissions for sensitive accounts?", options: ["PAM", "HDD", "MFA", "KDC"], a: "Privileged Access Management" },
  { q: "What system uses modular components to handle authentication tasks in UNIX-like systems?", options: ["PAM", "PaaS", "RAID", "GPG"], a: "Pluggable Authentication Modules" },
  { q: "What protocol is used to verify user credentials by exchanging a username and password?", options: ["PAP", "NFC", "DHE", "GPO"], a: "Password Authentication Protocol" },
  { q: "What technique involves translating private IP addresses to a public IP for external communication?", options: ["PAT", "ML", "RA", "HID"], a: "Port Address Translation" },
  { q: "What function is used to derive secure cryptographic keys from a password?", options: ["PBKDF2", "MSSP", "FACL", "IV"], a: "Password-based Key Derivation Function 2" },
  { q: "What system handles internal telephone communications within an organization?", options: ["PBX", "GPO", "MFA", "SAN"], a: "Private Branch Exchange" },
  { q: "What file format is used to capture and analyze network traffic?", options: ["PCAP", "HTTP", "OSINT", "VPN"], a: "Packet Capture" },
  { q: "What set of security standards is used to protect payment card information?", options: ["PCI DSS", "SaaS", "PaaS", "LAN"], a: "Payment Card Industry Data Security Standard" },
  { q: "What device distributes electrical power to various pieces of equipment in a data center?", options: ["PDU", "PAP", "FTP", "OS"], a: "Power Distribution Unit" },
  { q: "What protocol provides secure authentication in wireless networks and prevents unauthorized access?", options: ["PEAP", "MTBF", "MFA", "PDU"], a: "Protected Extensible Authentication Protocol" },
  { q: "What term describes a device used for personal identification and secure access?", options: ["PED", "NDA", "RAID", "HDD"], a: "Personal Electronic Device" },
  { q: "What encryption standard is used to enhance the privacy of email communications?", options: ["PEM", "PDU", "MFA", "SaaS"], a: "Privacy Enhanced Mail" },
  { q: "What property of cryptographic systems ensures that past communications remain secure even if future keys are compromised?", options: ["PFS", "NIDS", "FACL", "MAC"], a: "Perfect Forward Secrecy" },
  { q: "What method is used to secure digital communications through encryption and digital signatures?", options: ["PGP", "HTTP", "GPO", "PDU"], a: "Pretty Good Privacy" },
  { q: "What term refers to information about an individual's health status and history?", options: ["PHI", "OSINT", "PDU", "GPG"], a: "Personal Health Information" },
  { q: "What term refers to information that can be used to identify a specific individual?", options: ["PII", "NIDS", "RA", "FIM"], a: "Personally Identifiable Information" },
  { q: "What term describes a card used for secure access to facilities or systems?", options: ["PIV", "NTFS", "PDU", "HDD"], a: "Personal Identity Verification" },
  { q: "What framework provides standards for public key cryptography and encryption?", options: ["PKCS", "GPG", "SaaS", "MDF"], a: "Public Key Cryptography Standards" },
  { q: "What system manages digital certificates and enables secure communication through public key infrastructure?", options: ["PKI", "RAID", "SDLC", "HSM"], a: "Public Key Infrastructure" },
  { q: "What protocol is used for retrieving email messages from a server?", options: ["POP", "HMAC", "NFC", "PBKDF2"], a: "Post Office Protocol" },
  { q: "What service provides basic telephone functionality over traditional phone lines?", options: ["POTS", "GCM", "PCI DSS", "FTP"], a: "Plain Old Telephone Service" },
  { q: "What protocol enables the connection and communication between two network nodes directly?", options: ["PPP", "PaaS", "IV", "EFS"], a: "Point-to-Point Protocol" },
  { q: "What protocol is used to create a secure virtual private network connection?", options: ["PPTP", "PDU", "SaaS", "MFA"], a: "Point-to-Point Tunneling Protocol" },
  { q: "What term describes a key shared among parties in advance to secure communications?", options: ["PSK", "PEAP", "MDF", "NDA"], a: "Pre-shared Key" },
  { q: "What term refers to a camera system that can pan, tilt, and zoom remotely?", options: ["PTZ", "PDU", "GPO", "MOU"], a: "Pan-tilt-zoom" },
  { q: "What term describes software that can perform unwanted actions on a user's computer?", options: ["PUP", "RTO", "PIV", "IDF"], a: "Potentially Unwanted Program" },
  { q: "What term refers to a system or person responsible for recovering data and systems after a failure?", options: ["RA", "MFA", "GPG", "FTP"], a: "Recovery Agent" },
  { q: "What entity is responsible for issuing and managing digital certificates?", options: ["RA", "MFA", "NIST", "FTP"], a: "Registration Authority" },
  { q: "What project focuses on advanced communications technologies in Europe?", options: ["RACE", "PDU", "SAN", "SDLC"], a: "Research and Development in Advanced Communications Technologies in Europe" },
  { q: "What methodology emphasizes rapid development and iteration in software engineering?", options: ["RAD", "LAN", "HDD", "SaaS"], a: "Rapid Application Development" },
  { q: "What service provides secure remote access and authentication for users connecting to a network?", options: ["RADIUS", "OSINT", "MOU", "MDF"], a: "Remote Authentication Dial-in User Service" },
  { q: "What array configuration improves performance and data redundancy by combining multiple disks?", options: ["RAID", "NFC", "PCI DSS", "RAT"], a: "Redundant Array of Inexpensive Disks" },
  { q: "What server provides access to network resources and remote login capabilities?", options: ["RAS", "HIDS", "SaaS", "HDD"], a: "Remote Access Server" },
  { q: "What malicious software remotely controls a user's computer without their consent?", options: ["RAT", "PDU", "GCM", "PaaS"], a: "Remote Access Trojan" },
  { q: "What access control model grants permissions based on roles assigned to users?", options: ["RBAC", "PIV", "PDU", "PaaS"], a: "Role-based Access Control" },
  { q: "What access control model assigns permissions based on specific rules and conditions?", options: ["RBAC", "PKCS", "SaaS", "NIDS"], a: "Rule-based Access Control" },
  { q: "What cipher algorithm uses a secret key to encrypt and decrypt data securely?", options: ["RC4", "PDU", "NFC", "SDK"], a: "Rivest Cipher version 4" },
  { q: "What protocol allows remote control of a computer over a network?", options: ["RDP", "PKCS", "GPG", "PIV"], a: "Remote Desktop Protocol" },
  { q: "What technology uses radio waves to identify and track objects?", options: ["RFID", "PaaS", "FTP", "MDF"], a: "Radio Frequency Identifier" },
  { q: "What hash function is used for cryptographic security and data integrity verification?", options: ["RIPEMD", "HTTP", "RA", "PaaS"], a: "RACE Integrity Primitives Evaluation Message Digest" },
  { q: "What financial metric measures the profitability of an investment?", options: ["ROI", "MDF", "PIV", "SDLC"], a: "Return on Investment" },
  { q: "What term defines the target point for data recovery following a disruption?", options: ["RPO", "NIST", "PIV", "SaaS"], a: "Recovery Point Objective" },
  { q: "What encryption algorithm is widely used for secure communications and digital signatures?", options: ["RSA", "PaaS", "PIV", "HIDS"], a: "Rivest, Shamir, & Adleman" },
  { q: "What method prevents unwanted network traffic from reaching its target by dropping packets?", options: ["RTBH", "HDD", "PIV", "PaaS"], a: "Remotely Triggered Black Hole" },
  { q: "What metric measures the time required to restore operations after a disruption?", options: ["RTO", "PIV", "HID", "FIM"], a: "Recovery Time Objective" },
  { q: "What operating system is designed to handle real-time processing requirements?", options: ["RTOS", "RA", "FIM", "PIV"], a: "Real-time Operating System" },
  { q: "What protocol provides end-to-end communication for streaming media over networks?", options: ["RTP", "GPO", "SaaS", "SDLC"], a: "Real-time Transport Protocol" },
  { q: "What email standard provides encryption and digital signatures to enhance security?", options: ["S/MIME", "NTFS", "RAT", "EFS"], a: "Secure/Multipurpose Internet Mail Extensions" },
  { q: "What service model provides software applications over the internet?", options: ["SaaS", "PDU", "SCEP", "MOU"], a: "Software as a Service" },
  { q: "What authentication protocol enables simultaneous and secure authentication of devices and users?", options: ["SAE", "PDU", "MDF", "FIM"], a: "Simultaneous Authentication of Equals" },
  { q: "What standard defines XML-based assertions for secure communication and identity management?", options: ["SAML", "NDA", "HIDS", "PKCS"], a: "Security Assertions Markup Language" },
  { q: "What network provides high-speed and large-capacity data storage and access?", options: ["SAN", "GPO", "MDF", "HDD"], a: "Storage Area Network" },
  { q: "What term refers to an alternative name associated with a digital certificate?", options: ["SAN", "HDD", "NIDS", "SaaS"], a: "Subject Alternative Name" },
  { q: "What security model provides comprehensive protection across various network and cloud environments?", options: ["SASE", "FIM", "MFA", "PDU"], a: "Secure Access Service Edge" },
  { q: "What system manages and controls industrial processes and data acquisition?", options: ["SCADA", "SaaS", "HSM", "GPO"], a: "Supervisory Control and Data Acquisition" },
  { q: "What protocol automates the management and assessment of security configurations?", options: ["SCAP", "RA", "GCM", "PDU"], a: "Security Content Automation Protocol" },
  { q: "What protocol facilitates the enrollment of digital certificates in a secure manner?", options: ["SCEP", "PIV", "RAID", "FDE"], a: "Simple Certificate Enrollment Protocol" },
  { q: "What technology enables dynamic and scalable network connectivity over wide areas?", options: ["SD-WAN", "PIV", "GPG", "MOU"], a: "Software-defined Wide Area Network" },
  { q: "What toolkit provides tools and libraries for developing software applications?", options: ["SDK", "FIM", "PCI DSS", "PDU"], a: "Software Development Kit" },
  { q: "What process includes all phases of software creation from initial design to final deployment?", options: ["SDLC", "PIV", "FIM", "HDD"], a: "Software Development Lifecycle" },
  { q: "What methodology focuses on structured development and planning of software projects?", options: ["SDLM", "HSM", "PKCS", "PaaS"], a: "Software Development Lifecycle Methodology" }

  //
  
  //
  		],
	quiz8: [
  { q: "A networking approach that separates control and data planes for better network management.", options: ["SDN", "SMTP", "WPA", "SSH"], a: "Software-defined Networking" },
  { q: "An enhancement of Linux that focuses on improving security through mandatory access control.", options: ["SE", "SEH", "SEL", "SE Linux"], a: "Security-enhanced Linux" },
  { q: "Drives that automatically encrypt data to protect it from unauthorized access.", options: ["SED", "SFTP", "SSL", "TOTP"], a: "Self-encrypting Drives" },
  { q: "A method used in programming to handle exceptions or errors that occur during execution.", options: ["SEH", "SLA", "SQL", "SMS"], a: "Structured Exception Handler" },
  { q: "A secure version of FTP used for transferring files over the internet with encryption.", options: ["SFTP", "SNMP", "SMTP", "SSH"], a: "Secured File Transfer Protocol" },
  { q: "An algorithm used to ensure data integrity by producing a fixed-size hash value from variable-sized data.", options: ["SHA", "SSL", "TOTP", "VPN"], a: "Secure Hashing Algorithm" },
  { q: "An older secure protocol for transferring hypertext over the internet, providing encryption for HTTP.", options: ["SHTTP", "SOAP", "SQLi", "XSRF"], a: "Secure Hypertext Transfer Protocol" },
  { q: "A comprehensive solution for managing and analyzing security alerts and events in real-time.", options: ["SIEM", "SOC", "WAP", "SE"], a: "Security Information and Event Management" },
  { q: "A smart card used in mobile devices to authenticate users and store security information.", options: ["SIM", "SLE", "SLA", "UAV"], a: "Subscriber Identity Module" },
  { q: "A formal contract between a service provider and a customer that defines service expectations and responsibilities.", options: ["SLA", "SWG", "SQL", "SEH"], a: "Service-level Agreement" },
  { q: "The potential loss a business could face if a particular risk event occurs, calculated for each event.", options: ["SLE", "SSL", "TTP", "VLAN"], a: "Single Loss Expectancy" },
  { q: "A text messaging service used for sending short messages between mobile devices.", options: ["SMS", "SEH", "VPN", "TOTP"], a: "Short Message Service" },
  { q: "The protocol used to send email messages across networks, usually unencrypted.", options: ["SMTP", "SFTP", "USB", "TOTP"], a: "Simple Mail Transfer Protocol" },
  { q: "A secure version of SMTP that provides encryption for email communication.", options: ["SMTPS", "SLA", "SE", "SHA"], a: "Simple Mail Transfer Protocol Secure" },
  { q: "A protocol used to manage and monitor network devices and performance.", options: ["SNMP", "UDP", "VPC", "USB"], a: "Simple Network Management Protocol" },
  { q: "A protocol for exchanging structured information in web services using XML.", options: ["SOAP", "SSL", "TOTP", "VM"], a: "Simple Object Access Protocol" },
  { q: "An integrated approach to managing and automating security operations and responses.", options: ["SOAR", "SDN", "VPC", "XML"], a: "Security Orchestration, Automation, Response" },
  { q: "A single integrated circuit that contains all components of a computer system.", options: ["SoC", "SOC", "SSH", "SLA"], a: "System on Chip" },
  { q: "A facility that monitors and manages security operations and incidents within an organization.", options: ["SOC", "VLAN", "XML", "VPN"], a: "Security Operations Center" },
  { q: "A document that outlines the scope, objectives, and deliverables of a project or task.", options: ["SOW", "USB", "XOR", "UAV"], a: "Statement of Work" },
  { q: "A method used to validate the sender of an email and reduce email spoofing.", options: ["SPF", "SLE", "SMTP", "TLS"], a: "Sender Policy Framework" },
  { q: "Unsolicited messages sent over instant messaging platforms, often for spam or phishing.", options: ["SPIM", "SQL", "SFTP", "SHA"], a: "Spam over Internet Messaging" },
  { q: "A language used for managing and querying relational databases.", options: ["SQL", "SLA", "SSL", "TCP/IP"], a: "Structured Query Language" },
  { q: "A security vulnerability that allows attackers to execute arbitrary SQL code.", options: ["SQLi", "SIEM", "SMTP", "SFTP"], a: "SQL Injection" },
  { q: "A protocol designed to provide encryption for real-time communications such as voice and video.", options: ["SRTP", "SMTP", "SEH", "SSL"], a: "Secure Real-Time Protocol" },
  { q: "A type of storage drive that uses flash memory for faster data access and reliability.", options: ["SSD", "SLE", "USB", "VPN"], a: "Solid State Drive" },
  { q: "A protocol used to securely access remote systems and perform commands.", options: ["SSH", "SE", "SNMP", "VPC"], a: "Secure Shell" },
  { q: "A protocol that provides secure, encrypted connections over a network.", options: ["SSL", "SMTP", "SFTP", "USB"], a: "Secure Sockets Layer" },
  { q: "A single sign-on system that allows users to authenticate once to access multiple services.", options: ["SSO", "SQLi", "SMTP", "SIEM"], a: "Single Sign-on" },
  { q: "A framework for sharing and exchanging threat intelligence information.", options: ["STIX", "SSH", "SDN", "USB"], a: "Structured Threat Information eXchange" },
  { q: "A security appliance that provides protection against web-based threats.", options: ["SWG", "SOW", "SOC", "SAML"], a: "Secure Web Gateway" },
  { q: "A system for controlling access to network resources with a focus on authentication.", options: ["TACACS+", "USB", "XOR", "VPN"], a: "Terminal Access Controller Access Control System" },
  { q: "A protocol for exchanging cyber threat indicators and artifacts between systems.", options: ["TAXII", "SFTP", "SMTP", "URL"], a: "Trusted Automated eXchange of Indicator Information" },
  { q: "A suite of communication protocols used for the internet and networking.", options: ["TCP/IP", "TLS", "UAV", "VLAN"], a: "Transmission Control Protocol/Internet Protocol" },
  { q: "A credential used to request access to network resources in a secure environment.", options: ["TGT", "VPC", "UAV", "SAML"], a: "Ticket Granting Ticket" },
  { q: "A protocol that provides encryption to secure wireless network communications.", options: ["TKIP", "UAV", "XOR", "VPN"], a: "Temporal Key Integrity Protocol" },
  { q: "A security protocol designed to protect data in transit over the internet.", options: ["TLS", "VPC", "SQLi", "SMTP"], a: "Transport Layer Security" },
  { q: "A security concept for checking the validity of a condition or action before executing it.", options: ["TOC", "USB", "SPIM", "SFTP"], a: "Time-of-check" },
  { q: "A one-time password generated based on the current time, used for authentication.", options: ["TOTP", "SE", "URL", "SNMP"], a: "Time-based One-time Password" },
  { q: "A concept referring to how long a system or resource has been in use.", options: ["TOU", "VPN", "UAV", "XDR"], a: "Time-of-use" },
  { q: "A hardware component that provides secure key storage and cryptographic operations.", options: ["TPM", "VLAN", "VPC", "SMTP"], a: "Trusted Platform Module" },
  { q: "A set of practices and methodologies used to assess and respond to security threats.", options: ["TTP", "URL", "SQL", "USB"], a: "Tactics, Techniques, and Procedures" },
  { q: "A protocol used for authenticating and securing transactions in network communications.", options: ["TSIG", "SMTP", "USB", "XOR"], a: "Transaction Signature" },
  { q: "A process of evaluating and validating a software or system with end users before release.", options: ["UAT", "UDP", "VPN", "XSS"], a: "User Acceptance Testing" },
  { q: "An unmanned aerial vehicle used for various applications including surveillance and delivery.", options: ["UAV", "SSL", "SQLi", "SAML"], a: "Unmanned Aerial Vehicle" },
  { q: "A protocol used for sending datagrams over the internet without connection-oriented services.", options: ["UDP", "VPC", "XDR", "SQL"], a: "User Datagram Protocol" },
  { q: "A modern firmware interface that replaces the legacy BIOS and provides enhanced features.", options: ["UEFI", "VM", "URL", "VPC"], a: "Unified Extensible Firmware Interface" },
  { q: "A management solution that oversees and controls all endpoints in an enterprise environment.", options: ["UEM", "USB", "XML", "VLAN"], a: "Unified Endpoint Management" },
  { q: "A device that provides emergency power to prevent data loss during power outages.", options: ["UPS", "VPN", "SQL", "SSH"], a: "Uninterruptible Power Supply" },
  { q: "A standard for identifying resources on the internet using a specific naming convention.", options: ["URI", "SQL", "XOR", "TLS"], a: "Uniform Resource Identifier" },
  { q: "A web address used to locate resources on the internet.", options: ["URL", "SFTP", "SMTP", "SLE"], a: "Universal Resource Locator" },
  { q: "A common interface standard for connecting devices to computers and other peripherals.", options: ["USB", "UAV", "VPN", "XSS"], a: "Universal Serial Bus" },
  { q: "A feature that allows USB devices to operate in host mode, enabling connection with other USB devices.", options: ["USB OTG", "SAML", "SOAP", "VM"], a: "USB On the Go" },
  { q: "A security solution that integrates multiple security functionalities into a single platform.", options: ["UTM", "UAV", "UDP", "SQL"], a: "Unified Threat Management" },
  { q: "A type of cable that reduces electrical interference in network communications.", options: ["UTP", "TOTP", "VPN", "XOR"], a: "Unshielded Twisted Pair" },
  { q: "A programming language developed by Microsoft for creating Windows applications.", options: ["VBA", "VPN", "XML", "SSL"], a: "Visual Basic" },
  { q: "A computing environment that allows users to access virtual desktops from various devices.", options: ["VDE", "UEFI", "VPN", "TLS"], a: "Virtual Desktop Environment" },
  { q: "An infrastructure that provides virtualized computing resources over a network.", options: ["VDI", "UEM", "UAT", "VPC"], a: "Virtual Desktop Infrastructure" },
  { q: "A network configuration that allows multiple virtual networks to operate within a single physical network.", options: ["VLAN", "URL", "SMTP", "WPA"], a: "Virtual Local Area Network" },
  { q: "A method for subnetting that allows for variable-sized subnets to optimize IP address usage.", options: ["VLSM", "USB", "SQL", "SSH"], a: "Variable Length Subnet Masking" },
  { q: "A software-based emulation of a physical computer, allowing multiple operating systems to run on a single hardware platform.", options: ["VM", "SSL", "SQL", "UEM"], a: "Virtual Machine" },
  { q: "A technology that allows voice communications over the internet using packet-switched networks.", options: ["VoIP", "VDE", "UEFI", "UAT"], a: "Voice over IP" },
  { q: "A private network hosted within a public cloud environment, offering scalable and isolated resources.", options: ["VPC", "VBA", "SOAP", "URL"], a: "Virtual Private Cloud" },
  { q: "A technology that secures internet traffic by encrypting data between users and websites.", options: ["VPN", "VDE", "UAV", "XML"], a: "Virtual Private Network" },
  { q: "A system that enables real-time video and audio communication between remote participants.", options: ["VTC", "XOR", "SFTP", "SMTP"], a: "Video Teleconferencing" },
  { q: "A security solution that monitors and filters web traffic to protect against threats.", options: ["WAF", "WPA", "XSRF", "VM"], a: "Web Application Firewall" },
  { q: "A device that provides wireless network connectivity to multiple devices.", options: ["WAP", "XML", "UAT", "USB"], a: "Wireless Access Point" },
  { q: "A deprecated security protocol for protecting wireless networks with weak encryption.", options: ["WEP", "USB", "UAV", "SMTP"], a: "Wired Equivalent Privacy" },
  { q: "A system designed to detect and respond to unauthorized wireless network activities.", options: ["WIDS", "VPN", "SQL", "VPC"], a: "Wireless Intrusion Detection System" },
  { q: "A system designed to prevent unauthorized access to wireless networks by blocking attacks.", options: ["WIPS", "WPA", "URI", "XOR"], a: "Wireless Intrusion Prevention System" },
  { q: "A document that specifies tasks, requirements, and deliverables for a specific job or project.", options: ["WO", "VDE", "SE", "SQL"], a: "Work Order" },
  { q: "A security protocol designed to protect wireless networks with improved encryption methods.", options: ["WPA", "XML", "SQLi", "UAV"], a: "Wi-Fi Protected Access" },
  { q: "A protocol for setting up and securing wireless networks, including simple and automated setup options.", options: ["WPS", "TOTP", "TLS", "USB"], a: "Wi-Fi Protected Setup" },
  { q: "A security protocol designed to protect data transmitted over wireless networks.", options: ["WTLS", "USB", "VPN", "SQL"], a: "Wireless TLS" },
  { q: "A security solution that integrates data from various sources to provide comprehensive threat detection and response.", options: ["XDR", "SQL", "UDP", "USB"], a: "Extended Detection and Response" },
  { q: "A markup language used to structure and present data on the web.", options: ["XML", "SLA", "SFTP", "USB"], a: "Extensible Markup Language" },
  { q: "A logical operation used in digital circuits to combine binary values.", options: ["XOR", "VPN", "XML", "WAP"], a: "Exclusive Or" },
  { q: "An attack method where unauthorized requests are made to a web application, often to exploit a user's session.", options: ["XSRF", "TLS", "UEM", "SMS"], a: "Cross-site Request Forgery" },
  { q: "A security vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users.", options: ["XSS", "VM", "SQLi", "UAV"], a: "Cross-site Scripting" }
  		],
	quiz9: [
  { q: "What is the primary purpose of Security Program Management?", options: ["To protect assets", "To increase productivity", "To reduce costs", "To enhance user experience"], a: "To protect assets" },
  { q: "Which framework provides a structured approach to security program management?", options: ["NIST Cybersecurity Framework", "ISO 27001", "COBIT", "All of the above"], a: "All of the above" },
  { q: "What is the role of a Chief Information Security Officer (CISO)?", options: ["Overseeing security operations", "Managing IT support", "Developing software", "Handling customer service"], a: "Overseeing security operations" },
  { q: "Which document outlines an organization's security policies and procedures?", options: ["Security Policy", "Risk Assessment", "Incident Response Plan", "Business Continuity Plan"], a: "Security Policy" },
  { q: "What is the purpose of a Risk Assessment in security management?", options: ["Identify potential threats", "Define security policies", "Implement security controls", "All of the above"], a: "Identify potential threats" },
  { q: "What is a Security Incident Response Plan?", options: ["A plan for handling security breaches", "A document for training employees", "A guide for software development", "A budget plan for IT"], a: "A plan for handling security breaches" },
  { q: "What is the significance of Security Awareness Training?", options: ["To educate employees about security risks", "To implement new technology", "To handle customer complaints", "To design IT infrastructure"], a: "To educate employees about security risks" },
  { q: "Which of the following is a common security control?", options: ["Firewall", "Backup", "Encryption", "All of the above"], a: "All of the above" },
  { q: "What does the term 'vulnerability management' refer to?", options: ["Identifying and addressing security weaknesses", "Managing employee access", "Handling financial audits", "Developing software applications"], a: "Identifying and addressing security weaknesses" },
  { q: "Which framework focuses on IT governance and management?", options: ["COBIT", "ISO 27001", "NIST Cybersecurity Framework", "PCI DSS"], a: "COBIT" },
  { q: "What is the purpose of conducting regular security audits?", options: ["To assess the effectiveness of security controls", "To evaluate employee performance", "To update software", "To redesign IT infrastructure"], a: "To assess the effectiveness of security controls" },
  { q: "What is a key element of a Business Continuity Plan?", options: ["Ensuring critical business functions can continue during a disruption", "Developing new marketing strategies", "Managing employee performance", "Improving customer service"], a: "Ensuring critical business functions can continue during a disruption" },
  { q: "What is the role of access control in security management?", options: ["To restrict access to sensitive information", "To enhance network speed", "To manage software updates", "To handle customer support"], a: "To restrict access to sensitive information" },
  { q: "Which security framework is specifically designed for information security management systems?", options: ["ISO 27001", "NIST Cybersecurity Framework", "COBIT", "PCI DSS"], a: "ISO 27001" },
  { q: "What does the term 'security governance' involve?", options: ["Establishing policies and procedures to manage security", "Designing software systems", "Handling customer service issues", "Conducting market research"], a: "Establishing policies and procedures to manage security" },
  { q: "What is a common method for ensuring data integrity?", options: ["Encryption", "Firewalls", "Access controls", "All of the above"], a: "Encryption" },
  { q: "Which document defines the acceptable use of an organization's IT resources?", options: ["Acceptable Use Policy", "Incident Response Plan", "Risk Assessment", "Business Continuity Plan"], a: "Acceptable Use Policy" },
  { q: "What is the purpose of an Incident Response Team?", options: ["To respond to and manage security incidents", "To handle payroll", "To design marketing strategies", "To develop new software"], a: "To respond to and manage security incidents" },
  { q: "What does 'penetration testing' involve?", options: ["Simulating attacks to find vulnerabilities", "Managing user access", "Updating software", "Handling customer complaints"], a: "Simulating attacks to find vulnerabilities" },
  { q: "Which of the following is NOT a type of security control?", options: ["Physical", "Administrative", "Technical", "Procedural"], a: "Procedural" },
  { q: "What is the purpose of a security policy?", options: ["To provide guidelines for managing security", "To handle customer service", "To manage financial budgets", "To design network infrastructure"], a: "To provide guidelines for managing security" },
  { q: "Which framework provides guidelines for handling cybersecurity threats?", options: ["NIST Cybersecurity Framework", "ISO 9001", "COBIT", "SOX"], a: "NIST Cybersecurity Framework" },
  { q: "What is a security baseline?", options: ["A set of minimum security controls to be implemented", "A budget plan for IT security", "A document for employee training", "A report on software performance"], a: "A set of minimum security controls to be implemented" },
  { q: "What does 'data classification' involve?", options: ["Categorizing data based on its sensitivity", "Updating software systems", "Managing employee performance", "Designing marketing strategies"], a: "Categorizing data based on its sensitivity" },
  { q: "What is the role of a Data Protection Officer (DPO)?", options: ["To ensure compliance with data protection regulations", "To manage IT infrastructure", "To handle customer support", "To develop new products"], a: "To ensure compliance with data protection regulations" },
  { q: "What is the purpose of security metrics?", options: ["To measure the effectiveness of security controls", "To handle financial audits", "To design IT systems", "To manage employee performance"], a: "To measure the effectiveness of security controls" },
  { q: "What does 'threat modeling' involve?", options: ["Identifying and evaluating potential threats", "Managing user access", "Handling customer complaints", "Updating software systems"], a: "Identifying and evaluating potential threats" },
  { q: "What is the purpose of a Security Operations Center (SOC)?", options: ["To monitor and manage security events", "To handle payroll", "To design new software", "To improve customer service"], a: "To monitor and manage security events" },
  { q: "What is a key component of a security risk management process?", options: ["Risk assessment", "Marketing analysis", "Employee performance reviews", "Customer satisfaction surveys"], a: "Risk assessment" },
  { q: "Which regulation focuses on data protection and privacy in the EU?", options: ["GDPR", "SOX", "HIPAA", "PCI DSS"], a: "GDPR" },
  { q: "What is the purpose of an internal security audit?", options: ["To review and improve security controls", "To manage financial records", "To handle customer inquiries", "To design marketing plans"], a: "To review and improve security controls" },
  { q: "Which of the following is a principle of security management?", options: ["Least privilege", "Maximum access", "Open access", "Unlimited data sharing"], a: "Least privilege" },
  { q: "What is the role of encryption in data security?", options: ["To protect data from unauthorized access", "To improve network speed", "To manage software updates", "To handle customer support"], a: "To protect data from unauthorized access" },
  { q: "What is the purpose of a security policy review?", options: ["To ensure policies are up-to-date and effective", "To manage IT budgets", "To handle employee performance", "To design new software"], a: "To ensure policies are up-to-date and effective" },
  { q: "What does 'security incident management' entail?", options: ["Handling and resolving security incidents", "Managing employee schedules", "Designing marketing campaigns", "Updating IT infrastructure"], a: "Handling and resolving security incidents" },
  { q: "What is a common method for ensuring compliance with security policies?", options: ["Regular audits", "Employee training", "Automated monitoring", "All of the above"], a: "All of the above" },
  { q: "What is the purpose of a security gap analysis?", options: ["To identify areas where security controls are lacking", "To manage financial investments", "To design IT systems", "To handle customer complaints"], a: "To identify areas where security controls are lacking" },
  { q: "Which of the following is a common security framework for managing IT risks?", options: ["COBIT", "SOX", "GDPR", "PCI DSS"], a: "COBIT" },
  { q: "What is a key feature of a risk management plan?", options: ["Identification of potential risks and mitigation strategies", "Design of IT infrastructure", "Handling of customer service", "Development of marketing strategies"], a: "Identification of potential risks and mitigation strategies" },
  { q: "What does 'vulnerability scanning' involve?", options: ["Identifying weaknesses in systems", "Managing user accounts", "Handling customer complaints", "Updating software"], a: "Identifying weaknesses in systems" },
  { q: "What is the purpose of a Security Operations Center (SOC)?", options: ["To monitor and respond to security incidents", "To design new software", "To handle payroll", "To manage customer service"], a: "To monitor and respond to security incidents" },
  { q: "Which framework is used for managing and improving IT services?", options: ["ITIL", "NIST", "ISO 27001", "COBIT"], a: "ITIL" },
  { q: "What is a key component of business continuity planning?", options: ["Developing strategies to maintain operations during disruptions", "Managing financial budgets", "Designing new marketing campaigns", "Handling customer feedback"], a: "Developing strategies to maintain operations during disruptions" },
  { q: "What does 'data breach response' involve?", options: ["Handling the aftermath of a data breach", "Updating software", "Designing new products", "Managing IT budgets"], a: "Handling the aftermath of a data breach" },
  { q: "What is the goal of security configuration management?", options: ["To ensure systems are securely configured", "To manage employee performance", "To handle financial audits", "To design marketing strategies"], a: "To ensure systems are securely configured" },
  { q: "What does 'security compliance' refer to?", options: ["Adhering to security policies and regulations", "Designing software systems", "Handling customer support", "Managing IT infrastructure"], a: "Adhering to security policies and regulations" },
  { q: "What is the purpose of a security posture assessment?", options: ["To evaluate the overall security strength of an organization", "To design new IT systems", "To manage employee schedules", "To handle customer complaints"], a: "To evaluate the overall security strength of an organization" },
  { q: "Which of the following is an example of a physical security control?", options: ["Security cameras", "Firewalls", "Antivirus software", "Encryption"], a: "Security cameras" },
  { q: "What is the purpose of a risk management framework?", options: ["To provide a structured approach to managing risks", "To design software applications", "To handle customer inquiries", "To manage IT budgets"], a: "To provide a structured approach to managing risks" },
  { q: "Which regulation focuses on financial data protection in the U.S.?", options: ["SOX", "HIPAA", "PCI DSS", "GDPR"], a: "SOX" },
  { q: "What does 'security incident handling' involve?", options: ["Managing the response to and resolution of security incidents", "Designing IT systems", "Handling payroll", "Updating marketing strategies"], a: "Managing the response to and resolution of security incidents" },
  { q: "What is a key benefit of security metrics?", options: ["They help measure the effectiveness of security controls", "They manage employee schedules", "They design marketing strategies", "They handle customer feedback"], a: "They help measure the effectiveness of security controls" },
  { q: "What does 'security policy enforcement' entail?", options: ["Ensuring compliance with security policies", "Managing IT infrastructure", "Handling financial audits", "Designing software"], a: "Ensuring compliance with security policies" },
  { q: "Which of the following is a key element of incident response?", options: ["Identification and analysis of incidents", "Handling customer service", "Managing financial budgets", "Designing new products"], a: "Identification and analysis of incidents" },
  { q: "What is the role of a Security Architect?", options: ["Designing and implementing secure IT systems", "Managing employee performance", "Handling customer complaints", "Updating software"], a: "Designing and implementing secure IT systems" },
  { q: "What is the purpose of a security control review?", options: ["To ensure controls are effective and updated", "To handle customer inquiries", "To manage financial audits", "To design new software"], a: "To ensure controls are effective and updated" },
  { q: "What is a common method for protecting sensitive information?", options: ["Encryption", "Access controls", "Data masking", "All of the above"], a: "All of the above" },
  { q: "Which security framework focuses on risk management and security controls?", options: ["NIST", "ISO 9001", "COBIT", "SOX"], a: "NIST" },
  { q: "What is the role of a security consultant?", options: ["To provide expert advice on security practices", "To manage employee schedules", "To handle customer service", "To design marketing strategies"], a: "To provide expert advice on security practices" },
  { q: "What is the purpose of a vulnerability management program?", options: ["To identify and address system vulnerabilities", "To manage user access", "To handle financial audits", "To design IT systems"], a: "To identify and address system vulnerabilities" },
  { q: "Which of the following is a key principle of risk management?", options: ["Risk avoidance", "Risk acceptance", "Risk mitigation", "All of the above"], a: "All of the above" },
  { q: "What does 'security operations' involve?", options: ["Daily monitoring and management of security systems", "Handling customer service", "Designing new software", "Managing financial budgets"], a: "Daily monitoring and management of security systems" },
  { q: "What is the purpose of a security compliance audit?", options: ["To assess adherence to security policies and regulations", "To handle customer complaints", "To design new IT systems", "To manage employee performance"], a: "To assess adherence to security policies and regulations" },
  { q: "What is a key element of an effective security training program?", options: ["Regular updates and relevance to current threats", "Handling customer service", "Designing marketing strategies", "Managing financial budgets"], a: "Regular updates and relevance to current threats" },
  { q: "What is the role of a security risk assessment?", options: ["To identify and evaluate potential security risks", "To manage employee performance", "To design new software", "To handle customer inquiries"], a: "To identify and evaluate potential security risks" },
  { q: "Which of the following is NOT a type of security control?", options: ["Physical", "Administrative", "Technical", "Procedural"], a: "Procedural" },
  { q: "What is the purpose of a security program oversight?", options: ["To ensure the security program is effective and aligned with objectives", "To handle payroll", "To manage customer service", "To design new software"], a: "To ensure the security program is effective and aligned with objectives" },
  { q: "What does 'security governance' involve?", options: ["Establishing and maintaining a security program", "Designing new IT systems", "Handling customer service", "Managing financial budgets"], a: "Establishing and maintaining a security program" },
  { q: "What is the role of a security program manager?", options: ["To oversee the development and implementation of security programs", "To manage IT infrastructure", "To handle payroll", "To design marketing strategies"], a: "To oversee the development and implementation of security programs" },
  { q: "What does 'threat intelligence' refer to?", options: ["Information about potential threats to security", "Data about customer preferences", "Financial performance metrics", "Employee performance reviews"], a: "Information about potential threats to security" },
  { q: "Which of the following is an example of a technical security control?", options: ["Antivirus software", "Security cameras", "Access control policies", "Security awareness training"], a: "Antivirus software" },
  { q: "What is the purpose of a security baseline?", options: ["To establish a standard set of security controls", "To handle customer service", "To manage IT budgets", "To design marketing strategies"], a: "To establish a standard set of security controls" },
  { q: "What is a key feature of a security audit?", options: ["Evaluating the effectiveness of security controls", "Designing new software", "Handling customer support", "Managing financial audits"], a: "Evaluating the effectiveness of security controls" },
  { q: "What does 'risk mitigation' involve?", options: ["Implementing measures to reduce identified risks", "Managing employee performance", "Handling customer service", "Designing new products"], a: "Implementing measures to reduce identified risks" },
  { q: "Which regulation focuses on healthcare data protection in the U.S.?", options: ["HIPAA", "GDPR", "SOX", "PCI DSS"], a: "HIPAA" },
  { q: "What is the purpose of a security incident report?", options: ["To document and analyze security incidents", "To handle financial audits", "To manage IT infrastructure", "To design new marketing strategies"], a: "To document and analyze security incidents" },
  { q: "What does 'security risk tolerance' refer to?", options: ["The level of risk an organization is willing to accept", "Managing employee performance", "Designing new software", "Handling customer service"], a: "The level of risk an organization is willing to accept" },
  { q: "Which of the following is a key aspect of security policy development?", options: ["Defining rules and guidelines for managing security", "Handling customer complaints", "Managing IT infrastructure", "Designing marketing strategies"], a: "Defining rules and guidelines for managing security" },
  { q: "What is a common objective of security program management?", options: ["Protecting organizational assets from threats", "Handling payroll", "Designing new software", "Managing customer service"], a: "Protecting organizational assets from threats" }
],
	quiz10:[

	
		]	
	};

// Constants
const TIME_LIMIT = 60 * 60 * 1000; // 60 minutes in milliseconds

// Variables
let startTime = Date.now();
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = [];
let selectedAnswer = null; // Track selected answer
let isAnswerChecked = false; // Track if the answer has been checked
let testQuestions = []; // Store current quiz questions

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the test
function startTest() {
    startTime = Date.now();
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = [];
    document.getElementById('timer').textContent = formatTime(TIME_LIMIT);
    showQuestion();
    startTimer();
}

// Format time function
function formatTime(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Start timer function
function startTimer() {
    const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const remaining = TIME_LIMIT - elapsed;
        document.getElementById('timer').textContent = formatTime(remaining);
        if (remaining <= 0) {
            clearInterval(interval);
            endTest();
        }
    }, 1000);
}

// Show question function
function showQuestion() {
    if (currentQuestionIndex >= testQuestions.length) {
        endTest();
        return;
    }
    const question = testQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = question.q;

    // Shuffle the options
    const shuffledOptions = shuffleArray([...question.options]);
    
    // Generate options HTML
    const optionsHTML = shuffledOptions.map((opt, idx) => `
        <input type="radio" name="option" value="${opt}" id="opt${idx}">
        <label for="opt${idx}">${opt}</label><br>
    `).join('');

    // Display options
    document.getElementById('options').innerHTML = optionsHTML;
    document.getElementById('feedback').innerHTML = ''; // Clear previous feedback
    document.getElementById('nextButton').style.display = 'none'; // Hide Next button initially
    selectedAnswer = null; // Reset selected answer for the new question
    isAnswerChecked = false; // Reset flag
}

// Move to the next question
function nextQuestion() {
    if (!isAnswerChecked) {
        alert('Please select an answer.');
        return;
    }

    const correctAnswer = testQuestions[currentQuestionIndex].a;
    const feedback = document.getElementById('feedback');
    
    if (selectedAnswer === correctAnswer) {
        feedback.innerHTML = `<span class="correct">Correct!</span>`;
        correctAnswers++;
    } else {
        feedback.innerHTML = `<span class="wrong">Wrong! The correct answer is: ${correctAnswer}</span>`;
        wrongAnswers.push({
            question: testQuestions[currentQuestionIndex].q,
            chosen: selectedAnswer,
            correct: correctAnswer
        });
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < testQuestions.length) {
        setTimeout(() => {
            showQuestion();
            isAnswerChecked = false; // Reset the flag for the next question
        }, 1000); // Show next question after 1 second
    } else {
        endTest();
    }
}

// Check the selected answer
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedAnswer = selectedOption.value;
        const labels = document.querySelectorAll('#options label');
        labels.forEach(label => {
            if (label.getAttribute('for') === selectedOption.id) {
                label.classList.add('selected'); // Highlight the selected option
            } else {
                label.classList.remove('selected'); // Remove highlight from unselected options
            }
        });
        isAnswerChecked = true; // Indicate that an answer has been selected
        document.getElementById('nextButton').style.display = 'block'; // Show Next button
    } else {
        selectedAnswer = null; // No answer selected
        isAnswerChecked = false; // Indicate no answer is selected
        document.getElementById('nextButton').style.display = 'none'; // Hide Next button
    }
}

// End the test and show results
function endTest() {
    document.getElementById('question').innerHTML = `<h2>Test Completed!</h2>`;
    document.getElementById('options').innerHTML = '';
    
    // Calculate statistics
    const totalQuestions = testQuestions.length;
    const incorrectAnswers = wrongAnswers.length;
    const percentageCorrect = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    
    // Show results
    let resultsHTML = `
        <h2>Summary</h2>
        <p>Total Questions: ${totalQuestions}</p>
        <p>Correct Answers: ${correctAnswers}</p>
        <p>Incorrect Answers: ${incorrectAnswers}</p>
        <p>Percentage Correct: ${percentageCorrect}%</p>
        <h3>Questions and Answers:</h3>
        <ul>
    `;
    
    // List all questions and answers
    testQuestions.forEach((q, index) => {
        resultsHTML += `
            <li>
                <strong>Question ${index + 1}:</strong> ${q.q}<br>
                <strong>Your Answer:</strong> ${wrongAnswers.find(item => item.question === q.q)?.chosen || 'N/A'}<br>
                <strong>Correct Answer:</strong> ${q.a}
            </li>
        `;
    });

    resultsHTML += `</ul>
        <button id="restartButton" class="action-button">Restart Test</button>
    `;

    document.getElementById('feedback').innerHTML = resultsHTML;
    
    // Add event listener for restart button
    document.getElementById('restartButton').addEventListener('click', restartTest);
}

// Restart the test
function restartTest() {
    testQuestions = shuffleArray(quizzes[selectedQuiz]); // Shuffle questions again
    startTest();
}

// Handle quiz selection
function handleQuizSelection() {
    const quizSelect = document.getElementById('quizSelect');
    const quizContainer = document.getElementById('quizContainer');
    const selectedQuiz = quizSelect.value;

    if (selectedQuiz) {
        testQuestions = shuffleArray(quizzes[selectedQuiz]); // Shuffle selected quiz questions
        document.getElementById('quizSelector').style.display = 'none'; // Hide dropdown
        quizContainer.style.display = 'block'; // Show quiz container
        startTest();
    }
}

// Event listeners
document.getElementById('nextButton').addEventListener('click', nextQuestion);
document.getElementById('finishButton').addEventListener('click', endTest);
document.getElementById('options').addEventListener('change', checkAnswer);
document.getElementById('quizSelect').addEventListener('change', handleQuizSelection);