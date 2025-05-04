"use client";
import { useRouter } from "next/navigation";

const RemoveFromFavoriteButton = ({ id, name, whichFavorite, redirectTo }) => {
  const router = useRouter();

  async function handleFavorite() {
    try {
      const res = await fetch(`/api/favorites/${whichFavorite}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refId: id, name }),
      });
      if (!res.ok) throw new Error("Failed to remove from favorite");
    } catch (err) {
    } finally {
      if (redirectTo) {
        router.refresh();
      }
    }
  }

  return (
    <button
      onClick={handleFavorite}
      aria-label={`Remove ${name} from favorites`}
    >
      Remove
    </button>
  );
};

export default RemoveFromFavoriteButton;
