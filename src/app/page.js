import classes from "./page.module.scss";
import CanvasComponent from "@/components/CanvasComponent";
export default function Home() {
  return (
    <main className={classes.main}>
      <CanvasComponent />
    </main>
  );
}
