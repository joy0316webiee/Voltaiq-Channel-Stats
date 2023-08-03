import { colors } from "@/theme/colors";

import { ChannelPieChart } from ".";

export default {
  component: ChannelPieChart,
  title: "molecules/ChannelPieChart",
};

export const Default = () => {
  return (
    <div style={{ width: 400 }}>
      <ChannelPieChart
        title="Channel Pass/Fail Count"
        data={[
          {
            name: "Passing",
            value: 65.8,
          },
          {
            name: "Failing",
            value: 34.2,
          },
        ]}
        colors={[colors.blue100, colors.orange100]}
      />
    </div>
  );
};
