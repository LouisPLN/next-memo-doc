import Header from "./components/Header/Header";
import { MenuFilter } from "./components/MenuFilter";
import { Item } from "./components/Card";
import { REACT_CARDS } from "./data-cards";

export default function Home({ searchParams }) {
  const filters = [...new Set(REACT_CARDS.map((card) => card.category))];
  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex flex-1 gap-4 overflow-auto max-lg:flex-col">
        <MenuFilter filters={filters} currentFilter={searchParams.filter} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {REACT_CARDS.filter((card) => {
              if (!searchParams.filter) return true;
              return card.category === searchParams.filter;
            }).map((card) => (
              <Item
                hideCategory={Boolean(searchParams.filter)}
                key={card.name}
                item={card}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
