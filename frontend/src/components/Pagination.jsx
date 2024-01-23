import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import next_icon from "../assets/next_icon.svg";
import prev_icon from "../assets/prev_icon.svg";

export default function Pagination({ page, maxPage }) {
  const navigate = useNavigate();

  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= maxPage) {
      navigate(`/characters/page/${newPage}`);
    }
  };

  return (
    <div className=" my-5 mx-2  rounded-full inline-flex items-center justify-between">
      <button
        className={page <=1 ?"pagination-button hidden":"pagination-button"}
        onClick={() => goToPage(page - 1)}
        disabled={page <= 1}
      >
        <img src={prev_icon} alt="Previous" />
      </button>

      <span className=" font-bold">{`Page ${page} of ${maxPage}`}</span>

      <button
        className={page >= maxPage ? "pagination-button hidden":"pagination-button"}
        onClick={() => goToPage(page + 1)}
        disabled={page >= maxPage}
      >
        <img src={next_icon} alt="Next" />
      </button>
    </div>
  );
}
