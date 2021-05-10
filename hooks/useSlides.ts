import { useSelector } from "../redux/store";

export const useSlides = () =>
  useSelector((state) => state.slides.current);
