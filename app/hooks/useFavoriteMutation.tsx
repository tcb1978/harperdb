import { useRouter } from "next/navigation";

type UseFavoriteMutationProps = {
  whichFavorite: string;
  redirectTo?: string;
};

export function useFavoriteMutation({ whichFavorite, redirectTo }: UseFavoriteMutationProps) {
  const router = useRouter();

  const mutate = async ({
    id,
    name,
    method,
  }: {
    id: string;
    name: string;
    method: "POST" | "DELETE";
  }) => {
    try {
      const res = await fetch(`/api/favorites/${whichFavorite}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refId: id, name }),
      });
      if (!res.ok) {
        alert(`Failed to ${method === "POST" ? "add to" : "remove from"} favorites. Please try again.`);
        throw new Error(`Failed to ${method === "POST" ? "add" : "remove"} favorite`);
      }
    } catch (err) {
      console.error(`Error updating favorites: ${err}`);
    } finally {
      if (redirectTo) {
        router.push(redirectTo);
        router.refresh();
      }
    }
  };

  return { mutate };
}