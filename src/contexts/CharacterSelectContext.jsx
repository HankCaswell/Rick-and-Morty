import React, { createContext, useContext } from 'react';

const CharacterSelectContext = createContext();

export function useCharacterSelect() {
  const context = useContext(CharacterSelectContext);
  if (context === undefined) {
    throw new Error('useCharacterSelect must be used within a CharacterSelectProvider');
  }
  return context;
}

export default CharacterSelectContext;
