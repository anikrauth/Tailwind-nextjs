import { ReactElement, JSXElementConstructor, ReactFragment, Key } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu({navigation} : { navigation: any}) {
  return (
    <div className="flex userMenuList">
    {navigation.map((item: { name: boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | Key | null | undefined; href: string | undefined; current: any; }, index: Key | null | undefined) => (
      <a
        key={index}
        href={item.href}
        className={classNames(
          item.current
            ? "bg-gray-900 text-white"
            : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        aria-current={item.current ? "page" : undefined}
      >
        {item.name}
      </a>
    ))}
  </div>
  )
}
