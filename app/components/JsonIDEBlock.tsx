import { CSSProperties, FC, ReactNode } from "react";
import { ScrollArea } from "./ui/scroll-area";

const defaultJsonStyles: CSSProperties = {
  background: "#1e1e1e",
  color: "#d4d4d4",
  fontFamily: "Fira Mono, Menlo, Monaco, Consolas, monospace",
  fontSize: "1rem",
  borderRadius: "0.5rem",
  padding: "1rem",
  marginTop: "1rem",
  overflowX: "auto",
  boxShadow: "0 2px 8px #0003",
  border: "1px solid #333",
};

type JsonIDEBlockProps = {
  data: unknown;
  emptyMessage?: ReactNode;
  style?: CSSProperties;
};

const JsonIDEBlock: FC<JsonIDEBlockProps> = ({ data, emptyMessage, style }) => (
  <div style={{ ...defaultJsonStyles, ...style }} data-testid="sse-entity-listener-json">
    <ScrollArea className="max-h-[230px] h-2/6 w-full pl-4">
      {Array.isArray(data) && data.length === 0 ? (
        <span style={{ color: "#6a9955" }}>{emptyMessage ?? "No data"}</span>
      ) : (
        <pre style={{ margin: 0 }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </ScrollArea>
  </div>
);

export default JsonIDEBlock;