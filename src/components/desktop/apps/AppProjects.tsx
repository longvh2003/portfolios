import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
# Magic memories

*Jul 2024 - June 2025*

<br />

1. Name of customer: Magic Memories
2. Project description: A platform that helps people keep their memories alive by creating a digital legacy. The platform allows users to create and share their stories, photos, and videos with their loved ones.
3. Team size: 25 people
4. My role: Frontend Engineer
5. Responsibility in project:
* Develop ideas for improving systems, work closely with data analysts, designers, and staff, write program codes, test the product before going live, prepare training manuals for users, andmaintain systems once they start running.
* Integrate with backend services using RESTful APIs.
* Implement payment gateways (Credit card, Paypal) for online transactions.
* Implement responsive design to ensure the website is accessible on various devices.
* Collaborate with designers to create user-friendly interfaces and improve user experience.
* Ensure code quality by writing unit tests ( above 85% coverage) and conducting code reviews.

<br />

# RDS

*Aug 2023 - June 2024*

<br />

1. Name of customer: RDS
2. Project description: Connect with people who want to find a new job with company, head hunter
3. Team size: 30 people
4. My role: Frontend Engineer
5. Responsibility in project:
* Develop ideas for improving systems, work closely with data analysts, designers, and staff, write program codes, storybook, prepare training manuals for users, and maintain systems once they start running.
* Integrate with backend services using RESTful APIs.
* Implement responsive design to ensure the website is accessible on various devices.
* Collaborate with designers to create user-friendly interfaces and improve user experience.
* Ensure code quality by writing unit tests ( above 85% coverage) and conducting code reviews.

<br />

# The Hut Group Team 4

*Jul 2022 - May 2023*

<br />

1. Name of customer: The Hut Group 
2. Project description: The Hut Group (also known as "THG") is a British e-commerce company which operates over 100 international websites that takes brands direct to consumer through its proprietary ecommerce platform. THG wants to start an ODC with NashTech to gather requirements and develop systems for them.
3. Team size: 19 people
4. My role: Frontend Engineer
5. Responsibility in project:
* Develop ideas for improving systems, work closely with data analysts, designers, and staff, write program codes, storybook, prepare training manuals for users, and maintain systems once they start running.
* Integrate with backend services using RESTful APIs.
* Implement responsive design to ensure the website is accessible on various devices.
* Collaborate with designers to create user-friendly interfaces and improve user experience.
* Ensure code quality by writing unit tests ( above 90% coverage) and conducting code reviews.
* Improved the accessibility of the project (WCAG 2.1 AA).
* Used "Composite" design pattern to help client reduce time to access their data. The pattern allows us to create a tree structure of objects that can be treated as a single object. This allows us to create a hierarchy of objects that can be easily manipulated and accessed.

<br />

# Icook

*Mar 2022 - June 2022*

<br />

1. Name of customer: Golden Gate
2. Project description: E-commerce website
3. Team size: 12 people
4. My role: Frontend Engineer
5. Responsibility in project:
* Work as team leader. (3 members except me).
* Choose tech stacks and set up common components for members.
* Review code and guide members to complete tasks.
* Integrate with backend services using RESTful APIs.
* Implement responsive design to ensure the website is accessible on various devices.
* Collaborate with designers to create user-friendly interfaces and improve user experience.

<br />

# Vinivia364

*Feb 2021 - Feb 2022*

<br />

1. Name of customer: Vinivia
2. Project description: Livestream platform, event management, administrator
3. Team size: 20 people
4. My role: Frontend Engineer
5. Responsibility in project:
* Integrate with backend services using RESTful APIs.
* Implement responsive design to ensure the website is accessible on various devices.
* Collaborate with designers to create user-friendly interfaces and improve user experience.
* Implemented a real-time chat feature using WebSockets to enhance user engagement during live events.

<br />

`;

export function AppProjects() {
  return <AppMarkdownLayout markdown={md} title="Work History" />;
}
