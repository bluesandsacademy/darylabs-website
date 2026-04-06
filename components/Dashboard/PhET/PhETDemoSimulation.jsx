export default function PhETSimulation({ simulationUrl, title, width = "100%", height = "600px" }) {
  return (
    <iframe
      src={simulationUrl}
      width={width}
      height={height}
      title={title}
      allow="fullscreen"
      style={{ border: "none" }}
    />
  );
}
