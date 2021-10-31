import styles from "@/styles/Input.module.css";
import { UseFormRegisterReturn } from "react-hook-form";
type Props = {
  type: "text" | "password";
  name: string;
  label?: string;
  placeholder: string;
  register?: UseFormRegisterReturn;
};
export default function Input({
  type,
  name,
  placeholder,
  label,
  register,
}: Props) {
  return (
    <div>
      {label && (
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        {...register}
      />
    </div>
  );
}
