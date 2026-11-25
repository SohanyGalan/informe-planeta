import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Callout from "./Callout";
import StatCard from "./StatCard";
import SourceBadge from "./SourceBadge";
import AdSlot from "../ads/AdSlot";
import Escena from "./Escena";

/** Componentes disponibles dentro de los archivos .mdx */
const components = { Callout, StatCard, SourceBadge, AdSlot, Escena };

export default function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
