import React, { Suspense } from "react";
import { listCharacters } from "../actions";
import { EntityTitle } from '../enums';
import { CharacterType } from "../types";

const GroovyCarousel = React.lazy(() => import("../components/GroovyCarousel"));

export default async function Page() {
  const characters: CharacterType[] | null = await listCharacters();
  return (
    <>
      <h1 className="py-4 text-2xl font-bold text-amber-300">
        {EntityTitle.Characters}
      </h1>
      <Suspense fallback={<div>Loading carousel...</div>}>
        <GroovyCarousel characters={characters} />
      </Suspense>
    </>
  );
}
