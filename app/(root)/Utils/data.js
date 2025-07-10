import { Twitter, Instagram, Linkedin } from "lucide-react";

export const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  
  ];

 export const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" },
  ];


  export const Experience = [
    {
      title: 'Profile Optimization',
      description: [
        'Tailored profile design that highlights your unique skills and experiences',
        'Strategic keywords to increase visibility in LinkedIn searches',
        'Compelling summary that captures attention'
      ],
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Account Management',
      description: [
        'Regular content posting to engage your audience',
        'Connection management with relevant professionals',
        'Endorsement and recommendation strategies'
      ],
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Personal Branding',
      description: [
        'Positioning as an industry leader',
        'Showcasing achievements attractively',
        'Content strategy development'
      ],
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    },
  ,
  ];