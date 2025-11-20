"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiClock,
  FiTool,
  FiLayers,
  FiShield,
  FiUsers,
  FiChevronDown,
} from "react-icons/fi";

export default function SAPImplementationPage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* HERO */}
      <section className="relative h-[60vh] md:h-[72vh] flex items-center overflow-hidden">
        <Image
          src="/Banner-SAP-Solutions.jpg"
          alt="SAP Implementation"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold leading-tight mb-4"
          >
            SAP Implementation Services
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl"
          >
            End-to-end SAP implementation — strategy, design, migration,
            integration, testing & hypercare. TREBO delivers SAP solutions that
            reduce risk, accelerate value, and deliver measurable business
            outcomes.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-[#001F54] hover:bg-[#0A2540] text-white px-6 py-3 rounded-lg shadow"
            >
              Talk to an SAP Expert
            </a>
            <a
              href="#approach"
              className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg"
            >
              Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#001F54] mb-4">
                What we deliver
              </h2>
              <p className="text-gray-700 mb-6">
                TREBO Consulting provides full life-cycle SAP implementation
                services across SAP S/4HANA, SAP ECC migrations, SAP Analytics
                (BW/4HANA), SAP Integration Suite and industry-specific modules.
                We combine SAP Activate methodology with industry best practices
                and local/regulatory knowledge in Africa, UK and Europe.
              </p>

              <ul className="grid sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#001F54] mt-1" />
                  <span>Solution blueprint & architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#001F54] mt-1" />
                  <span>Data migration & validation</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#001F54] mt-1" />
                  <span>Integrations & APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="text-[#001F54] mt-1" />
                  <span>Testing, cutover & hypercare</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg shadow-[#001F54] ">
              <Image
                src="/Sap-4.png"
                alt="SAP Implementation Illustration"
                width={900}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH / PHASES */}
      <section id="approach" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-6">
            Implementation Phases (what to expect)
          </h3>

          <div className="space-y-8">
            {/* Discovery & Assessment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiClock className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    1. Discovery & Assessment
                  </h4>
                  <p className="text-gray-600 mt-2">
                    We start with stakeholder interviews, process workshops, and
                    landscape analysis to understand your current state,
                    constraints, and business goals. Deliverables:
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>As-is process maps and pain-point analysis</li>
                    <li>
                      High-level technical landscape & integration inventory
                    </li>
                    <li>Business case and implementation roadmap</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Preparation & Planning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiTool className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">2. Prepare & Plan</h4>
                  <p className="text-gray-600 mt-2">
                    Establish governance, project plan, risk register, and
                    secure environments. We set up a pragmatic PMO, define
                    roles, and confirm success criteria and acceptance tests.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>Project charter & governance model</li>
                    <li>Detailed workstream plan, resource & cost estimate</li>
                    <li>Sandbox & development environments setup</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Blueprint / Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiLayers className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    3. Blueprint & Solution Design
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Detailed functional & technical design sessions result in a
                    solution blueprint and gap register. We recommend standard
                    SAP configuration, custom enhancements only where needed,
                    and integration patterns.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>Functional design (FDD) per process area</li>
                    <li>Technical architecture & integration design</li>
                    <li>Data migration strategy & mapping</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Realization / Build */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiTool className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    4. Realization (Build)
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Configure the system, develop required enhancements, build
                    integrations, and prepare test scripts. We follow iterative
                    sprints to deliver incremental value and maintain
                    traceability to requirements.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>Configuration & custom code development</li>
                    <li>Interface & API implementation</li>
                    <li>Unit testing & developer walkthroughs</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Testing & UAT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiCheckCircle className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    5. Testing & User Acceptance
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Comprehensive testing strategy including integration tests,
                    performance, security and formal UAT with business users.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>Integration / Interface testing</li>
                    <li>Regression & performance testing</li>
                    <li>Business UAT & sign-off</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Cutover, Go-Live & Hypercare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 rounded-xl bg-gray-50 shadow"
            >
              <div className="flex items-start gap-4">
                <FiUsers className="text-2xl text-[#001F54] mt-1" />
                <div>
                  <h4 className="text-xl font-semibold">
                    6. Cutover, Go-Live & Hypercare
                  </h4>
                  <p className="text-gray-600 mt-2">
                    Execute cutover plan, migrate production data, and provide
                    intensive hypercare support until stabilization.
                  </p>
                  <ul className="list-disc list-inside mt-3 text-gray-600">
                    <li>Cutover runbook & dry-runs</li>
                    <li>Production data migration & reconciliation</li>
                    <li>
                      Hypercare support, knowledge transfer & operations
                      handover
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SCOPE & MODULES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-6">
            Typical Scope & SAP Modules
          </h3>

          <p className="text-gray-700 mb-6">
            TREBO implements SAP across core enterprise domains. We tailor scope
            depending on your industry and priorities.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">Finance & Controlling</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>S/4HANA Finance (FI/CO)</li>
                <li>Treasury & Cash Management</li>
                <li>Financial Close & Reporting</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">Supply Chain & Logistics</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>MM / SD / Logistics Execution</li>
                <li>Warehouse Management</li>
                <li>Procure-to-Pay & Order-to-Cash</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">People & HR</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>SuccessFactors / Employee Central</li>
                <li>Payroll integrations</li>
                <li>Time & Attendance</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">Analytics & Reporting</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>SAP BW/4HANA, SAC dashboards</li>
                <li>Real-time reporting & KPIs</li>
                <li>Embedded analytics (S/4 Hana)</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">Integration</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>SAP Integration Suite / PI/PO</li>
                <li>REST / SOAP APIs, Middleware</li>
                <li>Third-party system adapters</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h4 className="font-semibold mb-3">Security & GRC</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Identity & Access Management</li>
                <li>SAP GRC controls & compliance</li>
                <li>Segregation of duties (SoD) reviews</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DATA MIGRATION & INTEGRATION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Data Migration & Integrations
          </h3>
          <p className="text-gray-700 mb-4">
            Data migration and integration are critical to a successful SAP
            project. TREBO uses a phased, repeatable approach: extract → cleanse
            → transform → load → validate. Our migration approach protects
            transactional integrity and minimizes production risk.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Migration Activities</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Source data profiling & cleansing</li>
                <li>Field mapping & transformation rules</li>
                <li>Staged load to QA then Production</li>
                <li>Reconciliation & validation reports</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Integration Patterns</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Point-to-point & middleware designs</li>
                <li>Event-driven integrations (webhooks, queues)</li>
                <li>Batch interfaces for legacy systems</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Validation & Monitoring</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Automated reconciliation scripts</li>
                <li>End-to-end monitoring dashboards</li>
                <li>Canary validation & smoke checks pre-go-live</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS & TIMELINES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Engagement Models & Typical Timelines
          </h3>

          <p className="text-gray-700 mb-6">
            We offer several engagement models: fixed-price for well-defined
            scope, time-and-materials for exploratory or agile projects, and
            hybrid approaches. Typical timelines vary by scope:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold">Rapid S/4HANA (Greenfield)</h4>
              <p className="text-gray-600 mt-2">
                6 – 9 months (core finance + procurement + supply chain)
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold">
                Complex S/4HANA (Large Enterprise)
              </h4>
              <p className="text-gray-600 mt-2">
                9 – 18 months (multi-module, multi-country)
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold">
                First-phase Modernization (Brownfield)
              </h4>
              <p className="text-gray-600 mt-2">
                3 – 9 months (technical upgrade + targeted process optimization)
              </p>
            </div>
          </div>

          <p className="text-gray-600">
            Exact duration depends on number of integrations, data complexity,
            custom development, regulatory requirements and client readiness.
          </p>
        </div>
      </section>

      {/* GOVERNANCE, RISK & COMPLIANCE */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Governance, Risk & Compliance
          </h3>
          <p className="text-gray-700 mb-4">
            Governance and controls are embedded into every project. We define a
            clear RACI, maintain an issues & risks register, and run periodic
            assurance checkpoints. TREBO also supports SAP GRC reviews and SoD
            remediation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Project Governance</h4>
              <p className="text-gray-600">
                Steering committee, PMO cadence, change control board, and
                release governance.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Risk Management</h4>
              <p className="text-gray-600">
                Proactive risk identification, mitigation plans and contingency
                planning.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold mb-2">Compliance</h4>
              <p className="text-gray-600">
                Regulatory readiness, audit trails, segregation of duties &
                controls testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM ROLES & RESPONSIBILITIES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Typical Project Roles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">TREBO Consulting</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Project Lead / Director</li>
                <li>Solution Architect</li>
                <li>SAP Functional Consultants</li>
                <li>Integration & Data Engineers</li>
                <li>QA & Test Leads</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Client</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Sponsor & Steering Committee</li>
                <li>Business Process Owners</li>
                <li>Local IT & Security</li>
                <li>Change & Training Leads</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Third Parties</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Hosting / Cloud Providers</li>
                <li>Payroll / Tax vendors</li>
                <li>Local system integrators</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS METRICS & DELIVERABLES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Success Metrics & Deliverables
          </h3>
          <p className="text-gray-700 mb-4">
            We measure success by business outcomes and adoption, not just
            go-live. Key metrics and deliverables include:
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Deliverables</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Project plan & governance artefacts</li>
                <li>Solution blueprint, design & config guides</li>
                <li>Test scripts, cutover runbook, migration packs</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">KPIs</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>User adoption rates & training completion</li>
                <li>Transaction processing time improvement</li>
                <li>Reduction in manual reconciliations</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow">
              <h4 className="font-semibold mb-2">Post-Go Live</h4>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Stabilization & SLA achievement</li>
                <li>Continuous improvement backlog</li>
                <li>Operational handover & knowledge transfer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY (STRUCTURED) */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Representative Case Study (example)
          </h3>
          <div className="bg-white rounded-xl shadow p-6">
            <h4 className="font-semibold">
              Public Sector SAP Finance Modernization — Southern Africa
            </h4>
            <p className="text-gray-700 mt-2">
              Challenge: Outdated legacy finance systems, manual reporting, lack
              of central controls. <br />
              TREBO Solution: Greenfield S/4HANA implementation with central
              finance, GL redesign, automation of reconciliations, and
              integration to treasury & payments. <br />
              Outcome: 40% faster month-end close, 60% reduction in manual
              reconciliations, and improved transparency for auditors.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING FACTORS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-4">
            Pricing & Commercial Considerations
          </h3>
          <p className="text-gray-700 mb-4">
            SAP implementation cost depends on scope, number of countries,
            custom development, data migration effort, and integration
            complexity.
          </p>

          <ul className="list-disc list-inside text-gray-600 grid md:grid-cols-2 gap-3">
            <li>Module scope & complexity (Finance, SCM, Payroll, etc.)</li>
            <li>Greenfield vs Brownfield (new implementation vs upgrade)</li>
            <li>Number and complexity of integrations</li>
            <li>Data quality and mapping effort</li>
            <li>On-site vs remote support needs</li>
            <li>Licensing & third-party costs</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h3 className="text-2xl font-bold text-[#001F54] mb-6">
            Frequently asked questions
          </h3>

          <details className="mb-4 bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">
              How long does a typical SAP implementation take?
            </summary>
            <p className="mt-2 text-gray-600">
              Depends on scope — core finance can be 6–9 months, full
              multi-country implementations 9–18 months.
            </p>
          </details>

          <details className="mb-4 bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">
              Do you support remote implementations?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes — TREBO uses a hybrid model. We combine remote sprints with
              on-site milestones when needed.
            </p>
          </details>

          <details className="mb-4 bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">
              Can you integrate SAP with our payroll system?
            </summary>
            <p className="mt-2 text-gray-600">
              Yes — we design APIs and middleware to securely integrate payroll
              vendors, banks, and other third-party systems.
            </p>
          </details>

          <details className="mb-4 bg-white p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-medium">
              What about data security & compliance?
            </summary>
            <p className="mt-2 text-gray-600">
              Security is embedded in our design (IAM, encryption, audit
              logging). We also help clients meet local compliance (tax,
              privacy, finance).
            </p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-20 bg-[#001F54] text-white text-center"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-4">
            Ready to discuss your SAP programme?
          </h3>
          <p className="mb-6 text-gray-200">
            Book a discovery session with our SAP architects to review your
            landscape and get a practical next-step plan.
          </p>
          <a
            href="/contact"
            className="bg-yellow-400 text-[#001F54] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Book a Discovery Session
          </a>
        </div>
      </section>
    </main>
  );
}
