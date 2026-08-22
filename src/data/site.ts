export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  ownerName: string;
  description: string;
  taglineHtml: string;
  resumePath: string;
  socials: SocialLink[];
}

export const site: SiteConfig = {
  ownerName: "Vadym's Portfolio",
  description: "Vadym's Portfolio - Game Developer",
  taglineHtml: `Hi, my name is <span class="text-cyan-400 font-semibold">Vadym</span>
    I'm a Game Developer, Software Engineer and AI Engineer.
    Now I'm working on different AI and Data research related projects and a cooperative horror game called "Fear Of Faith".`,
  resumePath: '/resume.pdf',
  socials: [
    {
      label: 'Kaggle',
      href: 'https://www.kaggle.com/vadimplataniy',
    },
  ],
};
