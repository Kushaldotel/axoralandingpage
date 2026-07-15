import { Icon } from "./Icons";

const services = [
  {
    icon: "mail",
    title: "AI Email Assistant",
    body: "AI reads every incoming email, categorises it, and drafts the reply — you review and click send.",
    points: ["AI-generated email replies", "Smart email categorisation", "Follow-up reminders", "Customer enquiry management"],
  },
  {
    icon: "users",
    title: "CRM Automation",
    body: "Leads captured, qualified and moved through your pipeline without anyone retyping a thing.",
    points: ["Lead capture and qualification", "Sales pipeline automation", "Automated task creation", "Customer follow-up sequences"],
  },
  {
    icon: "file",
    title: "Quote & Proposal Automation",
    body: "Instant, branded quotations and proposals — priced by your rules and approved digitally.",
    points: ["Instant quote generation", "Dynamic pricing", "Digital approvals", "Contract generation"],
  },
  {
    icon: "chat",
    title: "Customer Support Automation",
    body: "An assistant that answers from your own content, routes tickets, and hands off to a person when it should.",
    points: ["AI support chatbot", "FAQ automation", "Ticket routing & helpdesk integration", "Satisfaction tracking"],
  },
  {
    icon: "workflow",
    title: "Workflow Automation",
    body: "The approvals, hand-offs and data entry between your systems, running by themselves.",
    points: ["Approval workflows", "Document processing", "Data entry automation", "Cross-platform integrations"],
  },
  {
    icon: "money",
    title: "Finance Automation",
    body: "Invoices raised, payments chased and expenses tracked without the month-end scramble.",
    points: ["Invoice generation", "Payment reminders", "Expense tracking", "Subscription billing"],
  },
  {
    icon: "userCheck",
    title: "HR Automation",
    body: "Onboarding, leave and recruitment admin handled end to end, so your people work on people.",
    points: ["Employee onboarding", "Leave management", "CV screening", "Interview scheduling"],
  },
  {
    icon: "megaphone",
    title: "Marketing Automation",
    body: "Campaigns, nurture sequences and segmentation that run on their own and report back.",
    points: ["Email marketing campaigns", "Lead nurturing", "Customer segmentation", "Campaign reporting"],
  },
  {
    icon: "scan",
    title: "AI Document Processing",
    body: "Messy documents in, clean structured data out — any layout, validated, no templates to build.",
    points: ["OCR document reading", "PDF data extraction", "Contract analysis", "Intelligent classification"],
  },
  {
    icon: "chart",
    title: "Reporting & Business Intelligence",
    body: "Live dashboards and automated reports, so the numbers find you instead of the other way round.",
    points: ["Live dashboards", "KPI tracking", "Automated reporting", "Forecasting & executive reports"],
  },
  {
    icon: "sparkles",
    title: "Custom AI Solutions",
    body: "Internal assistants and knowledge bases grounded in your content — with a source on every answer.",
    points: ["AI knowledge bases", "Internal AI assistants", "Retrieval-Augmented Generation (RAG)", "Natural language querying"],
  },
  {
    icon: "globe",
    title: "Website Automation",
    body: "Your site stops being a brochure and starts routing, qualifying and serving customers.",
    points: ["Contact form automation", "Lead routing", "Customer portals", "Membership systems"],
  },
  {
    icon: "cart",
    title: "E-commerce Automation",
    body: "Stock, orders and customer updates kept in sync across every platform you sell on.",
    points: ["Inventory management", "Order processing", "Shipping updates", "Product synchronisation"],
  },
  {
    icon: "plug",
    title: "Custom Integrations",
    body: "We connect the tools you already run on — and build the bridge where one doesn't exist.",
    points: ["Microsoft 365, Outlook, Dynamics 365", "Zoho CRM, Google Workspace", "Slack, Teams, Zapier, n8n, Airtable", "REST APIs & custom software"],
  },
];

const integrations = [
  "Microsoft 365", "Outlook", "Dynamics 365", "Zoho CRM", "Google Workspace",
  "Slack", "Microsoft Teams", "Zapier", "n8n", "Airtable", "REST APIs",
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>
            The repetitive work that quietly<br className="br-lg" /> eats your team&apos;s hours.
          </h2>
          <p>
            Fourteen automation disciplines, combined into whatever your business actually
            needs — with a person kept in control of what goes out.
          </p>
        </div>

        <div className="cards-3">
          {services.map((s, i) => (
            <article className={`card reveal${i % 3 ? ` delay-${i % 3}` : ""}`} key={s.title}>
              <div className="card-icon">
                <Icon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="card-list">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="integrations reveal">
          <span className="integrations-title">Connects with the tools you already run on</span>
          <div className="integrations-list">
            {integrations.map((name) => (
              <span className="chip" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
