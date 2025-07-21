import { AppAboutMe } from "@/components/desktop/apps/AppAboutMe";
import { AppContacts } from "@/components/desktop/apps/AppContacts";
import { AppEducation } from "@/components/desktop/apps/AppEducation";
import { AppProjects } from "@/components/desktop/apps/AppProjects";
import { AppTerminal } from "@/components/desktop/apps/AppTerminal";
import { AppTodo } from "@/components/desktop/apps/AppTodo";
import { AppWorkHistory } from "@/components/desktop/apps/AppWorkHistory";

const apps = [
  "DesktopMainView",
  "AppTerminal",
  "AppAboutMe",
  "AppAboutSite",
  "AppWorkHistory",
  "AppEducation",
  "AppContacts",
  "AppProjects",
  "AppBlog",
  "AppTodo",
  "AppGuestBook",
] as const;

export type App = (typeof apps)[number];

type DesktopIcon = {
  iconName: string;
  title: string;
  appName: App;
  component: React.ReactNode;
};

export function makeMarkdownBasedApps(): Array<DesktopIcon> {
  return [
    {
      iconName: "config-users.png",
      appName: "AppAboutMe",
      title: "About Me",
      component: <AppAboutMe />,
    },
    {
      iconName: "email.png",
      appName: "AppContacts",
      title: "Contacts",
      component: <AppContacts />,
    },
    {
      iconName: "education.png",
      appName: "AppEducation",
      title: "Education",
      component: <AppEducation />,
    },
    {
      iconName: "resume.png",
      appName: "AppWorkHistory",
      title: "Work History",
      component: <AppWorkHistory />,
    },
    {
      iconName: "puzzle.png",
      appName: "AppTodo",
      title: "To-Dos",
      component: <AppTodo />,
    },
  ];
}

export function makeLocalApps(): Array<DesktopIcon> {
  return [
    {
      iconName: "games.png",
      appName: "AppProjects",
      title: "Hobby Projects",
      component: <AppProjects />,
    },
    {
      iconName: "terminal.png",
      appName: "AppTerminal",
      title: "Terminal",
      component: <AppTerminal />,
    },
  ];
}
