import { useEffect } from "react";

export interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
}

export default function usePageMetadata({
  title,
  description,
  keywords,
}: PageMetadata) {
  useEffect(() => {
    document.title = title || "Full Stack Project Starter";
  }, [title, description, keywords]);
}
