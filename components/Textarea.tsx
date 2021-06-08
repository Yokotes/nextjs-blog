import styles from '../styles/modules/Textarea.module.scss'

type TextareaProps = {
  id: string;
  label: string;
  name?: string;
  onChange?: (e: React.ChangeEvent) => void;
  className?: string;
}

export default function Textarea({
  id,
  label,
  name,
  className,
  onChange,
}: TextareaProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id} 
        className={styles.input}
        onChange={onChange}
        name={name}
      ></textarea>
    </div>
  )
}
