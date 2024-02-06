import styles from "./Step.module.scss";

export default function Step({
  stepNum,
  activeStep = 1,
  description = [],
  className,
}) {
  return (
    <div className={styles.stepWrapper}>
      {Array.from({ length: stepNum }, (x, index) => (
        <div
          className={`${styles.step} ${
            index + 1 <= activeStep ? styles.active : ""
          }`}
          key={index}
        >
          <span className={styles.stepNumber}>{index + 1}</span>
          <span className={styles.desc}>{description[index]}</span>
        </div>
      ))}
    </div>
  );
}
