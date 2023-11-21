export default ({ height }: { height?: string | number }) => (
  <a
    href="https://twitter.com/BryantBrock8"
    className="cursor-pointer hover:opacity-70 transition-opacity"
    target="_blank"
  >
    <svg
      height={height ?? "28"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#000000"
        d="M13.808 10.469L20.88 2h-1.676l-6.142 7.353L8.158 2H2.5l7.418 11.12L2.5 22h1.676l6.486-7.765L15.842 22H21.5l-7.693-11.531Zm-2.296 2.748l-.752-1.107L4.78 3.3h2.575l4.826 7.11l.751 1.107l6.273 9.242h-2.574l-5.12-7.541Z"
      />
    </svg>
  </a>
);
