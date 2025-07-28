import { usePageMetadata } from "../../hooks";

export default function Home() {
  usePageMetadata({
    title: "App Name Inc. - Home",
  });

  return <div>Home</div>;
}
