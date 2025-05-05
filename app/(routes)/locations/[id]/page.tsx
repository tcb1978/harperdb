export const dynamic = "force-dynamic";
import LocationsByIDPage from "../../../components/page/id/LocationsByIDPage";

type PageProps = {
  params: { id: string; };
};

const Page = ({ params: { id } }: PageProps) => {
  return <LocationsByIDPage id={id} />;
};

export default Page;
