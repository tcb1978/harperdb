"use client";
import { useRouter } from "next/navigation";

const AddToFavoriteButton = ({ id, name, whichFavorite, redirectTo }) => {
  const router = useRouter();

  async function handleFavorite() {
    try {
      const res = await fetch(`/api/favorites/${whichFavorite}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refId: id, name }),
      });
      if (!res.ok) {
        alert("Failed to add to favorites. Please try again.");
        throw new Error("Failed to add favorite");
      }
    } catch (err) {
      console.error(`Error adding to favorites: ${err}`);
    } finally {
      if (redirectTo) {
        router.push(redirectTo);
        router.refresh();
      }
    }
  }

  return (
    <button
      onClick={handleFavorite}
      aria-label={`Add ${name} to favorites`}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;
