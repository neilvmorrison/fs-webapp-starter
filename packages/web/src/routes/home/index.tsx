import { TextInput } from "@mantine/core";
import { usePageMetadata } from "../../hooks";
import styles from "./home.module.css";

export default function Home() {
  usePageMetadata({
    title: "Big Brain Time",
  });

  return (
    <div className={styles.root}>
      <TextInput
        label="Prompt"
        placeholder="What should we do?"
        w={{ base: "100%", lg: "50%" }}
      />
    </div>
  );
}
