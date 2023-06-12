import cs from "clsx"
import styles from "./Loader.module.css"

interface Props {
  className?: string
}

export function Loader({ className }: Props) {
  return (
    <svg className={cs(styles.root, className)} viewBox="0 0 50 50">
      <circle
        className={styles.path}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  )
}
