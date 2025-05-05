export const dynamic = "force-dynamic";
import { FC } from "react";
import EpisodesByIDPage from "../../../components/page/EpisodesByIDPage";

type PageProps = {
  params: { id: string; };
};

const Page: FC<PageProps> = ({ params: { id } }) => {
  return <EpisodesByIDPage id={id} />;
};

export default Page;
