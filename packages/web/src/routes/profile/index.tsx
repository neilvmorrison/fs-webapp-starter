import { usePageMetadata } from "../../hooks";

export default function Profile() {
  usePageMetadata({
    title: "Profile",
  });
  return <div>Profile</div>;
}
