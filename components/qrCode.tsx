import { useQRCode } from "next-qrcode";

interface QRCode {
  text: string;
  isDark?: boolean;
}

export default function QRCode({ text, isDark }: QRCode) {
  const { Canvas } = useQRCode();
  const options = {
    level: "L",
    margin: 0,
    scale: 5,
    width: 250,

    // bg-leemon-gray-light2 dark:bg-leemon-purple-dark3
    color: {
      dark: "#000",
      light: "#FFF",
    },
  };

  return <Canvas text={text} options={options} />;
}
