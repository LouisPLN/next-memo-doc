"use client";

import clsx from "clsx";
import Link from "next/link";

export const MenuFilter = ({ currentFilter, filters }) => {
  return (
    <nav className="flex w-full flex-wrap gap-4 lg:max-w-[200px] lg:flex-col">
      <MenuItem currentFilter={currentFilter} filter="">
        All
      </MenuItem>
      {filters.map((filter) => (
        <MenuItem key={filter} currentFilter={currentFilter} filter={filter}>
          {filter}
        </MenuItem>
      ))}
    </nav>
  );
};

const MenuItem = ({ filter, children, currentFilter }) => {
  return (
    <Link
      className={clsx(
        " rounded-md px-2 py-1 capitalize transition-colors hover:bg-gray-200",
        {
          "font-bold": filter === currentFilter,
        }
      )}
      href={`/?filter=${filter}`}
    >
      {children}
    </Link>
  );
};