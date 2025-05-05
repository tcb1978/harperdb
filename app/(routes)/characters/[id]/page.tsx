export const dynamic = "force-dynamic";
import CharacterByIDPage from "../../../components/page/id/CharacterByIDPage";

type PageProps = {
  params: { id: string; };
};

export default function Page({ params: { id } }: PageProps) {
  return <CharacterByIDPage id={id} />;
}