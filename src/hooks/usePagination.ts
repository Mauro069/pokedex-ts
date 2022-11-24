import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const usePagination = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [page, changePage] = useState<number>(1);

  const nextPage = () => {
    changePage(page + 1);
    navigate(`/?page=${page + 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const previousPage = () => {
    changePage(page - 1);
    navigate(`/?page=${page - 1}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    changePage(1);
    navigate("/");
  };

  useEffect(() => {
    changePage(parseInt(searchParams.get("page")!) || 1);
  }, [searchParams]);

  return { page, nextPage, previousPage, changePage, backToHome };
};
