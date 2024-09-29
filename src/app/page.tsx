// import Image from "next/image";
import {Portfolio} from "../components/portfolio"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
    <div>
      <Portfolio/>
      <SpeedInsights/>
      </div>
  );
}
