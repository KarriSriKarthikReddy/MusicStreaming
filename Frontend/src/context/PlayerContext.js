import { createContext } from 'react';

const PlayerContext = createContext();

export { PlayerContext };
export { default as PlayerProvider } from './PlayerContext.jsx';
export default PlayerContext;
