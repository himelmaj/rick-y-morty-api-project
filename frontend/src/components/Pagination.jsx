export default function Pagination({
  page,
  minPage,
  maxPage,
  setPage,
  prev_icon,
  next_icon,
}) {
  return (
    <>
  {page > minPage ? (
    <button
      className="pagination-button"
      onClick={() => setPage(page - 1)}
    >
      <img src={next_icon} alt="Next" />
    </button>
  ): <div></div>}

  {page < maxPage && (
    <button
      className={"pagination-button"}
      onClick={() => setPage(page + 1)}
    >
      <img src={prev_icon} alt="Previous" />
    </button>
  )}
    </>
  );
}
