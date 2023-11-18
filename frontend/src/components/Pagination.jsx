import { useNavigate } from "react-router-dom";
import next_icon from "../assets/next_icon.svg";
import prev_icon from "../assets/prev_icon.svg";
export default function Pagination({ page, maxPage }) {
  const navigate = useNavigate();
  return (
    <>
      {page > 1 ? (
        <button
          className="pagination-button"
          onClick={() => navigate(`/characters/page/${page - 1}`)}
        >
          <img src={prev_icon} alt="Previous" />
        </button>
      ) : (
        <div className="hidden md:block"></div>
      )}

      {page < maxPage && (
        <button
          className={"pagination-button"}
          onClick={() => navigate(`/characters/page/${page + 1}`)}
        >
          <img src={next_icon} alt="Next" />
        </button>
      )}
    </>
  );
}
