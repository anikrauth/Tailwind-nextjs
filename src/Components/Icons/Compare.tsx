const Compare = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 512 512"
      {...props}
    >
      <title>Compare</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M304 160l-64-64 64-64M207 352l64 64-64 64"
      />
      <circle
        cx="112"
        cy="96"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="400"
        cy="416"
        r="48"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M256 96h84a60 60 0 0160 60v212M255 416h-84a60 60 0 01-60-60V144"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export default Compare;
