import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import cn from "clsx";

// components
import { Heading, Text, fontWeight } from "@/components/atoms";

// constants
import { RADIAN } from "./ChannelPieChart.constants";

// types
import { PieChartProps } from "./ChannelPieChart.types";

// styles
import { useStyles } from "./ChannelPieChart.styles";

const ChannelPieChart = ({
  className = "",
  title,
  data = [],
  colors = [],
}: PieChartProps) => {
  const styles = useStyles();

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className={cn(styles.root, className)}>
      <Heading className={styles.title} level="sm" weight={fontWeight.MEDIUM}>
        {title}
      </Heading>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            dataKey="value"
          >
            {data.map((__, idx) => (
              <Cell key={`cell-${idx}`} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <ul className={styles.legendContainer}>
        {data.map(({ name }, idx) => (
          <li key={idx} className={styles.legend}>
            <span
              className={styles.legendBox}
              style={{ background: colors[idx] }}
            />
            <Text className={styles.legendName} level="sm">
              {name}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ChannelPieChart };
