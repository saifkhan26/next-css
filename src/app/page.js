import classes from "./page.module.scss";
export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
        <div className={classes.placeholders}></div>
        <div className={classes.placeholders}></div>
      </div>

      <div className={classes.grid__areas}>
        <div className={`${classes.placeholders} ${classes.columnOne}`}></div>
        <div className={`${classes.placeholders} ${classes.columnTwo}`}></div>
        <div className={`${classes.placeholders} ${classes.columnThree}`}></div>
      </div>
      <div className={classes.grid__areas__dense}>
        <div className={classes.placeholders}>One</div>
        <div className={classes.placeholders}>Two</div>
        <div className={classes.placeholders}>Three</div>
        <div className={classes.placeholders}>Four</div>
        <div className={classes.placeholders}>Five</div>
      </div>
    </main>
  );
}
