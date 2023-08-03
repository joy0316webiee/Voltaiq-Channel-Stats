export interface PieChartProps {
  className?: string;
  title: string;
  data: Array<{ name: string; value: number }>;
  colors: string[];
  loading?: boolean;
}
