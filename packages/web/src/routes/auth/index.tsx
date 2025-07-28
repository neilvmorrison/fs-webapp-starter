import { usePageMetadata } from "../../hooks";

export default function Auth() {
  usePageMetadata({
    title: "Authentication",
  });
  return <div>Authentication</div>;
}
