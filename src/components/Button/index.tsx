import { ReactNode } from "react";
import styles from "@/styles/Button.module.css";

type Props = {
  type: "button" | "submit";
  className?: string;
  children?: ReactNode;
  loading?: boolean;
};

export default function Button({ type, className, children, loading }: Props) {
  return (
    <button type={type} className={`${styles.button} ${className}`}>
      {loading ? "Loading..." : children}
    </button>
  );
}
