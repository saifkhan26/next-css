import classes from "./page.module.scss";
import ParalaxComponent from '@/components/ParalaxComponent'
export default function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.container}>
        <div className={classes.interContainer}>
          <ParalaxComponent>Hello World</ParalaxComponent>
        </div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
        <div className={classes.interContainer}><ParalaxComponent>Hello World</ParalaxComponent></div>
      </div>
    </main>
  );
}
