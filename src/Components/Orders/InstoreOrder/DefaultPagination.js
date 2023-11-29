import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function DefaultPagination() {
  const [active, setActive] = React.useState(1);
  const [entriesToShow, setEntriesToShow] = React.useState(10);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active === 10) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const handleShowEntries = (count) => {
    setEntriesToShow(count);
    setActive(1); // Reset to the first page when changing the number of entries
  };

  const renderPaginationItems = () => {
    const items = [];
    for (let i = 1; i <= entriesToShow; i++) {
      items.push(
        <IconButton
          key={i}
          className={`border-[#000] rounded-full py-4 justify-center px-4 ${
            active === i ? 'bg-[#000] text-white' : 'bg-white text-[#000]'
          }`}
          {...getItemProps(i)}
        >
          {i}
        </IconButton>
      );
    }
    return items;
  };

  return (
    <div className="flex flex-col items-start gap-1 ">
      <div className="flex items-center gap-4 ml-auto">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}
        >
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> 
        </Button>
        <div className="flex items-center gap-2">{renderPaginationItems()}</div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === entriesToShow}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4">Current Page: {active}</div>
      <div>
     
      </div>
    </div>
  );
}
