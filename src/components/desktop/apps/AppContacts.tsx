import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const md = `
 **Email**

[longvh1607@gmail.com](mailto:longvh1607@gmail.com)

<br />

**Phone number**

[0976459370](tell:0976459370)

<br />

**LinkedIn**

[LongVo](https://www.linkedin.com/in/mfahru/)
 
`;

export function AppContacts() {
  return <AppMarkdownLayout markdown={md} title="Contacts" />;
}
