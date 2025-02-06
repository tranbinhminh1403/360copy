import { ConfigProvider } from "antd";
import React from "react";

const ThemeConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Verdana",
        },
        components: {
          Radio: {
            buttonBg: "red",
            buttonSolidCheckedActiveBg: "red",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeConfig;
