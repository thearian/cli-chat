import { ReactNode } from "react";
import styles from "@/styles/Button.module.css";
import Link from "next/link";

type Props = {
  href: string;
  className?: string;
  children?: ReactNode;
};

export default function LinkButton({ className, children, href }: Props) {
  return (
    <Link href={href}>
      <a className={`${styles.button} ${className}`}>{children}</a>
    </Link>
  );
}
