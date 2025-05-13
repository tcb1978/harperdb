export const dynamic = "force-dynamic";
import { listEpisodes } from "actions";
import { EpisodeType } from "types";
import EpisodesLandingPage from "../../components/page/EpisodesLandingPage";

export default async function Page() {
  const episodes: EpisodeType[] = await listEpisodes();
  return <EpisodesLandingPage />;
}
