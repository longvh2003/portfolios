import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
  
## Bachelor's Degree

VNU University of Engineering and Technology, Viet Nam

2017 - 2021

<br />

Major: Information Technology

<br />

`;

export function AppEducation() {
  return <AppMarkdownLayout markdown={md} title="Education" />;
}
