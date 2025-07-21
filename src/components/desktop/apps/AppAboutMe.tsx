import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
## **About me**
- Name: Vo Hong Long
- Address: Ngu Hanh Son, Da Nang
- Origin: Vietnam

<br />

## **What I do**
- Software Engineer.

<br />

## **Tech stacks I worked on**
- Frontend: HTML, CSS, Javascript, Typescript, ReactJS, NextJS, Redux, Recoil
- Styling & Design: CSS, SASS, Bootstrap, Tailwind CSS, Antd, Styled-Component
- Miscellaneous: Git, Jest, react-testing-library

<br />

## **My take on software engineering**
- Problem solving at its core
- Maintainable and readable code is important
- Pragmatism on tight deadline

<br />

**Hobbies**
- Learning stuffs. Anything, really.
- Building something cool.
- Solve some problems on leetcode.com

`;

export function AppAboutMe() {
  return <AppMarkdownLayout title="About Me" markdown={md} />;
}
