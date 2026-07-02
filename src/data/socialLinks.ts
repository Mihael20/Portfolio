import {
  faGithub,
  faLinkedin,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import type { ISocialLinkItem } from "@/types";

const socialLinks: ISocialLinkItem[] = [
  {
    name: "GitHub",
    url: "https://github.com/Mihael20",
    icon: faGithub,
    text: "Mihael20",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mihael-kusibojoski-b267a819a/",
    icon: faLinkedin,
    text: "Mihael Kusibojoski",
  },
  {
    name: "Email",
    url: "mailto:mihael.kusibojoski26@gmail.com",
    icon: faEnvelope,
    text: "mihael.kusibojoski26@gmail.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/accounts/onetap/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Finbox%2F%3F__coig_login%3D1",
    icon: faInstagram,
    text: "Instagram",
  },
  {
    name: "Telegram",
    url: "https://t.me/mihael244",
    icon: faTelegram,
    text: "@mihael244",
  },
];

export default socialLinks;