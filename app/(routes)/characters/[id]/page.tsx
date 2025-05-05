export const dynamic = "force-dynamic";
import CharacterPage from "../../../components/page/CharacterPage";

type PageProps = {
  params: { id: string; };
};

export default function Page({ params: { id } }: PageProps) {
  return <CharacterPage id={id} />;
}