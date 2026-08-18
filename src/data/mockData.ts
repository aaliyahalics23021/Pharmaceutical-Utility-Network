export interface TraceStage {
  id: string;
  name: string;
  who: string;
  what: string;
  when: string;
  description: string;
  verified: boolean;
  hash: string;
  previousHash: string;
  details: string[];
}

export const SAMPLE_BATCH = {
  id: "PHAR-2026-001",
  product: "Insulin Glargine (Recombinant)",
  manufacturer: "PharmaCare Labs",
  status: "VERIFIED",
  currentStage: "Pharmacy",
  stages: [
    {
      id: "manufactured",
      name: "Manufactured",
      who: "PharmaCare Labs (Facility #04)",
      what: "Batch formulation, synthesis, and initial packaging under sterile conditions.",
      when: "2026-08-10 08:30 UTC",
      description: "Batch synthesized, raw materials verified, and initial digital identity registered on the blockchain network.",
      verified: true,
      hash: "8a4f91d8e03bc0214a1a3b178c919d3f",
      previousHash: "00000000000000000000000000000000",
      details: [
        "Product Type: Insulin Glargine",
        "Active Ingredient Purity: 99.8%",
        "Volume: 10,000 Vials",
        "Temperature Target: 2°C - 8°C"
      ]
    },
    {
      id: "quality_checked",
      name: "Quality Checked",
      who: "Global BioAssay Certifications",
      what: "Compliance check, stability validation, and batch release certification.",
      when: "2026-08-11 14:15 UTC",
      description: "Automated test reports checked against smart-contract parameters. Release criteria met and digitally signed.",
      verified: true,
      hash: "3b2e7c10d8a5f4c29b1e0d37e69f0b1a",
      previousHash: "8a4f91d8e03bc0214a1a3b178c919d3f",
      details: [
        "Sterility Test: PASS",
        "Particulate Levels: Under Limits",
        "pH Verification: 4.0 (PASS)",
        "Signature: QA-Officer-GBC-228"
      ]
    },
    {
      id: "distributor",
      name: "Distributor Logistics",
      who: "AeroCold Logistics Corp",
      what: "Ownership transfer, custom clearance, and cold-chain transport initiation.",
      when: "2026-08-13 06:45 UTC",
      description: "Ownership transferred to AeroCold. Continuous IoT sensor reporting linked to smart contract.",
      verified: true,
      hash: "9e1c2b5d4e6f0a3b8c9d1a2f3e4d5c6b",
      previousHash: "3b2e7c10d8a5f4c29b1e0d37e69f0b1a",
      details: [
        "Carrier: Flight AC-409",
        "IoT Sensor ID: TempTrack-9081",
        "Average Temp: 4.2°C",
        "Customs Status: Cleared"
      ]
    },
    {
      id: "warehouse",
      name: "Warehouse Storage",
      who: "Metro Distribution Center #2",
      what: "Receiving inspection, storage in regional cold warehouse, and dispatch prep.",
      when: "2026-08-15 11:20 UTC",
      description: "Batch scanned upon warehouse intake. Ledger updated with shelf location and local temperature monitoring.",
      verified: true,
      hash: "4d5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c",
      previousHash: "9e1c2b5d4e6f0a3b8c9d1a2f3e4d5c6b",
      details: [
        "Facility Location: Aisle 14, Zone B",
        "Humidity Level: 45%",
        "Intake Temp: 3.8°C",
        "Authorized Receiver: WH-Staff-44"
      ]
    },
    {
      id: "pharmacy",
      name: "Pharmacy / Point of Care",
      who: "Vanguard Care Pharmacy",
      what: "Final intake verification, shelf storage, and readiness for patient dispensing.",
      when: "2026-08-18 16:30 UTC",
      description: "Receipt verified at final destination. Patient can scan product packaging QR code to review this exact path.",
      verified: true,
      hash: "7b8a9c0d1e2f3a4b5c6d7e8f9a0b1c2d",
      previousHash: "4d5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c",
      details: [
        "Store ID: VCP-Austin-08",
        "Dispensing Status: Available",
        "Intake Verifier: Dr. Sarah Patel, PharmD",
        "Final Seal Check: Intact"
      ]
    }
  ]
};

export interface LedgerBlock {
  blockNumber: number;
  timestamp: string;
  hash: string;
  previousHash: string;
  batchId: string;
  transactionsCount: number;
  stageName: string;
  validatorSignature: string;
  details: string;
}

export const BLOCKS_DATA: LedgerBlock[] = [
  {
    blockNumber: 101,
    timestamp: "2026-08-10 08:30 UTC",
    hash: "00008a4f91d8e03bc0214a1a3b178c919d3f7b8c9d0e1f2a3b4c5d6e7f8a9c0d",
    previousHash: "0000000000000000000000000000000000000000000000000000000000000000",
    batchId: "PHAR-2026-001",
    transactionsCount: 1,
    stageName: "Manufacture Event",
    validatorSignature: "Validator-Node-01 (PharmaCare)",
    details: "Registers initial batch PHAR-2026-001 with active ingredients verification, volume 10k vials, and temperature parameters (2°C - 8°C)."
  },
  {
    blockNumber: 102,
    timestamp: "2026-08-11 14:15 UTC",
    hash: "00003b2e7c10d8a5f4c29b1e0d37e69f0b1ae2f3a4b5c6d7e8f9a0b1c2d3e4f5",
    previousHash: "00008a4f91d8e03bc0214a1a3b178c919d3f7b8c9d0e1f2a3b4c5d6e7f8a9c0d",
    batchId: "PHAR-2026-001",
    transactionsCount: 1,
    stageName: "Quality Assurance Certification",
    validatorSignature: "Validator-Node-03 (Global BioAssay)",
    details: "Appends sterile test compliance certification, pH values check reports, and release authorization digital signatures."
  },
  {
    blockNumber: 103,
    timestamp: "2026-08-13 06:45 UTC",
    hash: "00009e1c2b5d4e6f0a3b8c9d1a2f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c0d",
    previousHash: "00003b2e7c10d8a5f4c29b1e0d37e69f0b1ae2f3a4b5c6d7e8f9a0b1c2d3e4f5",
    batchId: "PHAR-2026-001",
    transactionsCount: 2,
    stageName: "Ownership Transfer & Logistics",
    validatorSignature: "Validator-Node-02 (AeroCold Log)",
    details: "Logs custody transfer from manufacturer to AeroCold Logistics, triggers temperature compliance check by automated IoT sensor feeds."
  },
  {
    blockNumber: 104,
    timestamp: "2026-08-15 11:20 UTC",
    hash: "00004d5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e",
    previousHash: "00009e1c2b5d4e6f0a3b8c9d1a2f3e4d5c6b7a8d9e0f1a2b3c4d5e6f7a8b9c0d",
    batchId: "PHAR-2026-001",
    transactionsCount: 1,
    stageName: "Warehouse Reception",
    validatorSignature: "Validator-Node-04 (Metro WH Hub)",
    details: "Records intake confirmation at Metro warehouse facility, shelves configuration (Aisle 14, Zone B), and continuous local cooling data logs."
  }
];

export interface ArchitectLayer {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  technologies: string[];
}

export const ARCHITECTURE_LAYERS: ArchitectLayer[] = [
  {
    id: "stakeholders",
    title: "Pharmaceutical Stakeholders",
    shortDesc: "Authorized supply-chain entities interacting with the network.",
    fullDesc: "Identified participants including Manufacturers, Distributors, Warehouse operators, Pharmacy chains, and Regulators. Each entity has a dedicated cryptographic keypair (Private/Public Key) representing their digital identity and permissions on the network.",
    technologies: ["Digital Certificates (X.509)", "Cryptographic Keypairs"]
  },
  {
    id: "application",
    title: "Application Layer",
    shortDesc: "User interfaces and API integrations for quick operations.",
    fullDesc: "Web portal interfaces, packaging QR code readers, and logistics APIs. Allows stakeholders to query product histories, trigger ownership transfers, and record temperature telemetry without needing raw blockchain tools.",
    technologies: ["React Web Portal", "JSON-RPC APIs", "QR Validation Service"]
  },
  {
    id: "smartcontract",
    title: "Smart Contract Layer",
    shortDesc: "Self-executing business logic that validates transactions.",
    fullDesc: "Smart contracts regulating operations (e.g. transfer rules, thermal compliance limits, quality certification checks). If cargo exceeds 8°C during shipment, the contract automatically records a thermal warning state and pauses release criteria execution.",
    technologies: ["Deterministic Execution Rules", "Access Control Policies"]
  },
  {
    id: "consensus",
    title: "Permissioned Blockchain Network",
    shortDesc: "Private node validators operating the network protocol.",
    fullDesc: "A network of authenticated validator nodes hosted across different organizations. Uses Practical Byzantine Fault Tolerance (PBFT) consensus to agree on the state changes and update the ledger securely.",
    technologies: ["Private Peer-to-Peer Network", "PBFT Protocol Nodes", "Transport Layer Security (TLS)"]
  },
  {
    id: "ledger",
    title: "Distributed Ledger",
    shortDesc: "The shared cryptographically-linked database history.",
    fullDesc: "The block journal containing the full chronological chain of transactions. Every node maintains a synchronized, local, append-only copy of the ledger, preventing any single point of failure or centralized record manipulation.",
    technologies: ["Cryptographic Hashing (SHA-256)", "Merkle Tree Data Structures"]
  }
];

export interface ReferenceItem {
  id: number;
  title: string;
  authors: string;
  source: string;
  year: string;
  link: string;
  description: string;
}

export const ACADEMIC_REFERENCES: ReferenceItem[] = [
  {
    id: 1,
    title: "Blockchain for Pharmaceutical Supply Chains: State-of-the-Art, Opportunities, and Challenges",
    authors: "P. R. S. Silva, F. S. D. Santos, et al.",
    source: "IEEE Access Journal",
    year: "2021",
    link: "https://ieeexplore.ieee.org/document/9454318",
    description: "Comprehensive review detailing how blockchain helps combat counterfeit drugs and provides strict tracking mechanisms."
  },
  {
    id: 2,
    title: "Practical Byzantine Fault Tolerance",
    authors: "M. Castro, B. Liskov",
    source: "Symposium on Operating Systems Design and Implementation (OSDI)",
    year: "1999",
    link: "http://pmg.csail.mit.edu/papers/osdi99.pdf",
    description: "The seminal research paper introducing the PBFT consensus model, forming the basis for private enterprise blockchain verification."
  },
  {
    id: 3,
    title: "Ensuring Cold-Chain Drug Integrity with IoT Sensors and Smart Contracts",
    authors: "J. K. A. Patel, H. L. Miller",
    source: "Journal of Medical Systems Research",
    year: "2023",
    link: "https://pubmed.ncbi.nlm.nih.gov/",
    description: "An empirical study exploring the integration of real-time temperature logs with automated smart-contract policy validation."
  },
  {
    id: 4,
    title: "WHO Technical Report Series No. 961: Good distribution practices for pharmaceutical products",
    authors: "World Health Organization",
    source: "WHO Guidelines",
    year: "2011",
    link: "https://www.who.int/publications/i/item/WHO_TRS_961",
    description: "International standard guidelines for regulating cold-chain integrity, shipping, and handling parameters for high-risk pharmaceuticals."
  }
];
