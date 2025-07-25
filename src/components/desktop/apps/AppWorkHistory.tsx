import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
# Software Engineer (Frontend)

**SmartDev, Da Nang**

*Jul 2024 - Current, Full-time*

<br />

* I worked as a Software engineer at SmartDev . We used NextJS alongside Recoil as state management, React-query and various other tools in our stack.
* We are building a platform that helps people keep their memories alive by creating a digital legacy. The platform allows users to create and share their stories, photos, and videos with their loved ones.
* We are supporting multiple languages, including English, French, Dutch and other 10+ languages. The platform is designed to be user-friendly and accessible to everyone, regardless of their technical skills.
* We also allow user to pay for the service using various payment methods, including credit cards, PayPal, GooglePay and ApplePay.
* While working there we strived to create our features and components in a scalable/usable way since the scale of our project is pretty big.

<br />

# Software Engineer (Frontend)

**FPT Software, Da Nang**

*Sep 2023 - Jul 2024, Full-time*

<br />

* We are building a platform that helps people find their jobs and connect with employers. The platform allows users to create and share their resumes, search for jobs, and apply for jobs online.
* We are supporting multiple languages, including English, Japansese. The platform is designed to be user-friendly and accessible to everyone, regardless of their technical skills.

<br />

# Software Engineer (Frontend)

**NashTech, Ha Noi**

*Jul 2022 - Aug 2023*

<br />

* We used "Composite" design pattern to help client reduce time to access their data. The pattern allows us to create a tree structure of objects that can be treated as a single object. This allows us to create a hierarchy of objects that can be easily manipulated and accessed.
* I wrote unit tests for The Hut Group Team 4 application. Improved the accessibility of the project (WCAG 2.1 AA).
* While working there we strived to create our features and components in a scalable/usable way since the scale of our project is pretty big.

<br />

# Frontend Engineer (Frontend)

**VMO Holdings , Ha Noi**

*Aug 2020 - Oct 2020, Full-time*

<br />
   
* I worked as a Frontend Engineer at VMO Holdings, where I was responsible for developing and maintaining the frontend of various web applications. 
* We used ReactJS, NextJS, and TypeScript to build scalable and maintainable web applications.
* I was involved in the development of several projects, a web application for a client in the education industry, a web application for a client in the e-commerce industry, etc.

<br />

# Fresher Frontend Engineer (Frontend)

**FPT Software, Ha Noi**

*Dec 2020 - Jun 2022, Full-time*

`;

export function AppWorkHistory() {
  return <AppMarkdownLayout markdown={md} title="Work History" />;
}
