import React from "react";

interface Link {
  href: string;
  label: string;
}

interface FooterSectionProps {
  title: string;
  links: Link[];
}

// Reusable Component for Footer Links
const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div>
    <h2 className="text-black text-sm uppercase font-semibold mb-4">
      {title}
    </h2>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="text-gray-400 hover:text-black text-sm transition-all"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const sections: { title: string; links: Link[] }[] = [
    {
      title: "About",
      links: [
        { href: "#", label: "How it works" },
        { href: "#", label: "Featured" },
        { href: "#", label: "Partnership" },
        { href: "#", label: "Business Relation" },
      ],
    },
    {
      title: "Community",
      links: [
        { href: "#", label: "Events" },
        { href: "#", label: "Blogs" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "Podcast" },
        { href: "#", label: "Invite a friend" },
      ],
    },
    {
      title: "Social",
      links: [
        { href: "#", label: "Discord" },
        { href: "#", label: "Instagram" },
        { href: "#", label: "Twitter" },
        { href: "#", label: "Facebook" },
      ],
    },
  ];

  return (
    <footer className="bg-white pt-12 pb-6 px-4 sm:px-10 font-sans tracking-wide">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4">
              <span className="text-3xl text-blue-600 font-sans font-semibold">
                MORENT
              </span>
            </a>
            <p className="mt-4 text-gray-500 text-sm">
              Our vision is to provide convenience
              <br />
              and help increase your sales business.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          {sections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <hr className="mt-12 mb-6 border-gray-200" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            &copy;{currentYear} MORENT. All rights reserved.
          </p>

          {/* Privacy Links */}
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {[
              { href: "#", label: "Privacy Policy" },
              { href: "#", label: "Terms of Service" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-black text-sm transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
