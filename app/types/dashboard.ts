import { StaticImageData } from "next/image";

export interface DashboardCard {
  id: number;
  title: string;
  description: string | React.ReactNode;
  marketPercent: string;
  icon: StaticImageData | string;
}

export default DashboardCard;
