import Link from "next/link";

const TalkButton = () => {
  return (
    <Link
      className="app__filled_btn min-w-[10rem]"
      href="https://t.me/mihael244"
      target="_blank"
    >
      Let&apos;s Talk
    </Link>
  );
};

export default TalkButton;
