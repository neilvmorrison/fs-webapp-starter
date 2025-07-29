import { usePageMetadata } from "../../hooks";

export default function Finances() {
  usePageMetadata({
    title: "Finances",
  });
  return <div>Finances</div>;
}
