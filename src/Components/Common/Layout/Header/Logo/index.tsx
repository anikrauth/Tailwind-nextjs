
export default function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="block lg:hidden h-8 w-auto sm:absolute"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="hidden lg:block h-8 w-auto"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
        alt="Workflow"
      />
    </div>
  );
}
